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

// Altezza del sole 0-1: campana tra alba e tramonto, 0 di notte.
const sunShape = (hour, p) => (hour <= p.sunrise || hour >= p.sunset ? 0 : Math.sin(Math.PI * (hour - p.sunrise) / (p.sunset - p.sunrise)));

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

  // Casa con fotovoltaico, batteria, contatore e carichi (Modulo 5A). Potenze in kW, energie in kWh, tempo in ore del giorno.
  // Una giornata dura `dayLen` secondi simulati. La produzione segue il sole (curva a campana tra alba e tramonto) e la nuvolosita';
  // il consumo ha una base con il picco della sera piu' i carichi accesi (scaldabagno, auto). La batteria, se collegata, assorbe l'eccedenza
  // e copre il mancante. grid > 0 e' prelievo dalla rete, grid < 0 immissione. Oltre `limit` kW per `tripAfter` secondi il contatore stacca.
  energia: {
    init: { hour: 8, soc: 20, eImp: 0, eExp: 0, eProd: 0, eEv: 0, over: 0, blackout: 0, pv: 0, load: 0, grid: 0, pb: 0 },
    params: { dayLen: 1440, sunrise: 6, sunset: 20, pvKw: 4, cloud: 0, baseKw: 0.4, eveningKw: 1.1, boilerKw: 2, evKw: 3.7, batCap: 10, batKw: 3, limit: 4.5, tripAfter: 20 },
    acts: { pv: 1, house: 1, batt: 0, boiler: 0, ev: 0 },
    step(s, a, p, dt) {
      const hour = (s.hour + dt * 24 / p.dayLen) % 24;
      const sun = sunShape(hour, p) * (1 - clamp(p.cloud, 0, 1));
      const pv = p.pvKw * sun * frac(a.pv);
      const evening = Math.exp(-(((hour - 20.5 + 12) % 24 - 12) ** 2) / 4.5);   // picco attorno alle 20:30
      const load = frac(a.house) * (p.baseKw + p.eveningKw * evening) + p.boilerKw * frac(a.boiler) + p.evKw * frac(a.ev);
      const dh = dt * 24 / p.dayLen;   // ore simulate trascorse
      let pb = 0;
      if (frac(a.batt)) {
        const surplus = pv - load;
        if (surplus > 0) pb = Math.min(surplus, p.batKw, (100 - s.soc) / 100 * p.batCap / dh);
        else pb = -Math.min(-surplus, p.batKw, s.soc / 100 * p.batCap / dh);
      }
      const soc = clamp(s.soc + pb * dh / p.batCap * 100, 0, 100);
      let grid = load - pv + pb;
      const blackout = s.blackout || (s.over + (grid > p.limit ? dt : 0) >= p.tripAfter ? 1 : 0);
      if (blackout) grid = 0;
      const over = grid > p.limit ? s.over + dt : Math.max(0, s.over - dt);
      return {
        hour, soc, over, blackout, pv, load: blackout ? 0 : load, grid, pb,
        eImp: s.eImp + Math.max(0, grid) * dh, eExp: s.eExp + Math.max(0, -grid) * dh, eProd: s.eProd + pv * dh,
        eEv: s.eEv + (blackout ? 0 : p.evKw * frac(a.ev) * dh),
      };
    },
    expose: (s, p) => ({ ...s, sun: sunShape(s.hour, p) * (1 - clamp(p.cloud, 0, 1)), blackout: !!s.blackout, over: s.over, battKwh: s.soc / 100 * p.batCap }),
  },

  // Linea di prelievo e deposito (Modulo 6): un robot a tre movimenti prende il pezzo dal punto di prelievo e lo porta al deposito.
  //   down  (1 = braccio giu', 0 = su)   shift (1 = verso il deposito, 0 = verso il prelievo)   grip (1 = pinza chiusa)
  // Posizioni da 0 a 1; i sensori scattano agli estremi. Ogni `feedEvery` secondi arriva un pezzo se il punto di prelievo e' libero.
  // crash: il braccio si muove in orizzontale mentre e' giu'. dropped: la pinza si apre con il pezzo lontano dal deposito.
  linea: {
    init: { z: 0, x: 0, grip: 0, feed: 1, wait: 0, holding: 0, out: 0, dropped: 0, crash: 0 },
    params: { vz: 0.5, vx: 0.4, vg: 1, feedEvery: 5 },
    acts: { down: 0, shift: 0, grip: 0 },
    step(s, a, p, dt) {
      const mv = (v, on, sp) => clamp(v + (on ? 1 : -1) * sp * dt, 0, 1);
      let { z, x, grip, feed, wait, holding, out, dropped, crash } = s;
      z = mv(z, frac(a.down) > 0, p.vz);
      x = mv(x, frac(a.shift) > 0, p.vx);
      const g0 = grip;
      grip = mv(grip, frac(a.grip) > 0, p.vg);
      if (z > 0.25 && x > 0.02 && x < 0.98) crash = 1;
      if (!feed && !holding) { wait += dt; if (wait >= p.feedEvery) { feed = 1; wait = 0; } }
      if (!holding && grip >= 0.95 && feed && z >= 0.98 && x <= 0.02) { holding = 1; feed = 0; wait = 0; }
      if (holding && g0 > 0.05 && grip <= 0.05) {
        if (z >= 0.98 && x >= 0.98) out += 1; else dropped += 1;
        holding = 0;
      }
      return { z, x, grip, feed, wait, holding, out, dropped, crash };
    },
    expose: s => ({
      ...s, crash: !!s.crash, holding: !!s.holding,
      zUp: s.z <= 0.02, zDown: s.z >= 0.98, atPick: s.x <= 0.02, atPlace: s.x >= 0.98,
      gripClosed: s.grip >= 0.95, gripOpen: s.grip <= 0.05, partReady: !!s.feed && !s.holding,
    }),
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
