// Modelli di processo (serbatoio, forno, nastro con variatore). Funzioni pure. Specifica: docs/SPEC-PROCESSI.md, sezione 2.
//
// Ogni modello dichiara:
//   init      stato iniziale              params   parametri predefiniti (valori didattici, vanno al collega)
//   acts      attuatori usati, con il valore quando non sono collegati
//   step(state, act, params, dt) -> stato nuovo       expose(state, params) -> grandezze lette da sensori, prove e grafico
//
// Il livello scrive `process: { model, params, init, speed, actuators, trace, tunable }`.

const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
// Gli attuatori arrivano gia' come frazione 0-1 (digitale: 0 o 1; analogico: percentuale / 100), vedi sim.js.
const frac = x => clamp(Number(x) || 0, 0, 1);

export const MODELS = {
  // Serbatoio: livello h in % del volume. Portate in % al minuto.
  serbatoio: {
    init: { h: 20 },
    params: { qIn: 30, qOut: 20, demand: 0, full: 95 },
    acts: { pump: 0, valve: 0 },
    step(s, a, p, dt) {
      const dh = (p.qIn * frac(a.pump) - p.qOut * frac(a.valve) * (s.h > 0 ? 1 : 0) - p.demand * (s.h > 0 ? 1 : 0)) / 60;
      return { h: clamp(s.h + dh * dt, 0, 100) };
    },
    expose: (s, p) => ({ h: s.h, full: s.h >= p.full, empty: s.h <= 0 }),
  },

  // Forno: la resistenza scalda la parete (Tw), la parete scalda la camera (T). Due costanti di tempo in serie.
  // A piena potenza la parete tende a Ta + dTmax; la camera la segue piu' piano.
  forno: {
    init: { T: 20, Tw: 20 },
    params: { Ta: 20, dTmax: 180, tauW: 60, tauC: 40 },
    acts: { heater: 0 },
    step(s, a, p, dt) {
      const target = p.Ta + p.dTmax * frac(a.heater);
      const Tw = s.Tw + (target - s.Tw) * dt / p.tauW;
      const T = s.T + (s.Tw - s.T) * dt / p.tauC;
      return { T, Tw };
    },
    expose: s => ({ T: s.T, Tw: s.Tw }),
  },

  // Nastro con variatore di frequenza: f va verso ref·fmax con la rampa (Hz/s) se `run`, altrimenti scende a 0.
  // v (velocita' in % della nominale, a fNom) segue f con una costante di tempo breve. `load` frena (parametro).
  nastro: {
    init: { f: 0, v: 0 },
    params: { fmax: 50, fNom: 50, ramp: 10, tau: 0.5, load: 0 },
    acts: { run: 0, ref: 1 },
    step(s, a, p, dt) {
      const goal = a.run ? frac(a.ref) * p.fmax : 0;
      const df = clamp(goal - s.f, -p.ramp * dt, p.ramp * dt);
      const f = s.f + df;
      const vGoal = Math.max(0, f / p.fNom * 100 - p.load);
      const v = s.v + (vGoal - s.v) * Math.min(1, dt / p.tau);
      return { f, v };
    },
    expose: s => ({ f: s.f, v: s.v, moving: s.v > 1 }),
  },
};

export const PROCESS_DT = 0.1;

export function modelOf(proc) {
  const m = proc && MODELS[proc.model];
  if (!m) throw new Error('modello di processo sconosciuto: ' + (proc && proc.model));
  return m;
}

export function newProcess(proc) {
  const m = modelOf(proc);
  const params = { ...m.params, ...(proc.params || {}) };
  return { state: { ...m.init, ...(proc.init || {}) }, params };
}

// Avanza il modello di `seconds` con sottopassi di dt (attuatori costanti nell'intervallo).
export function stepProcess(proc, ps, act, seconds) {
  const m = modelOf(proc);
  const dt = proc.dt || PROCESS_DT;
  const a = { ...m.acts, ...act };
  let s = ps.state;
  const n = Math.max(1, Math.round(seconds / dt));
  const h = seconds / n;
  for (let k = 0; k < n; k++) s = m.step(s, a, ps.params, h);
  return { ...ps, state: s };
}

// Parametri regolabili dal pannello (process.tunable): { nome: { param: 'demand' } | { word: 'PLC.MW0' }, min, max, step?, init } .
// Il valore scelto dall'allievo sta in process.tuned (lo mette la sessione, la verifica lo rispetta).
export function tunedValues(proc) {
  const out = {};
  Object.entries((proc && proc.tunable) || {}).forEach(([name, d]) => {
    const v = proc.tuned && proc.tuned[name] !== undefined ? proc.tuned[name] : d.init;
    if (Number.isFinite(v)) out[name] = clampTune(d, v);
  });
  return out;
}
export function clampTune(d, v) {
  let x = Math.max(d.min ?? -Infinity, Math.min(d.max ?? Infinity, Number(v)));
  if (d.step) x = Math.round(x / d.step) * d.step;
  return Math.round(x * 1e6) / 1e6;
}
export const withTuned = (level, tuned) =>
  level.process && tuned && Object.keys(tuned).length ? { ...level, process: { ...level.process, tuned: { ...(level.process.tuned || {}), ...tuned } } } : level;

export const exposeProcess = (proc, ps) => modelOf(proc).expose(ps.state, ps.params);

// Sensore digitale: { v, above } oppure { v, below }.
export function senseDigital(vars, sense) {
  const x = Number(vars[sense.v]);
  if (!Number.isFinite(x)) return !!vars[sense.v];
  if (sense.above !== undefined) return x >= sense.above;
  if (sense.below !== undefined) return x <= sense.below;
  return !!x;
}

// Trasmettitore 4-20 mA: la grandezza tra lo e hi; fuori scala satura a 3,8 e 20,5 mA (NAMUR NE43).
export const MA_LO = 3.8, MA_HI = 20.5, MA_BROKEN = 3.6;
export function senseAnalog(vars, sense) {
  const x = Number(vars[sense.v]) || 0;
  const mA = 4 + 16 * (x - sense.lo) / (sense.hi - sense.lo);
  return clamp(mA, MA_LO, MA_HI);
}
