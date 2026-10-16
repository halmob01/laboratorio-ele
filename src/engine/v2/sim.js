// Motore v2: simulazione con stato (pulsanti, relè, contattori, tempo, protezioni, trifase, trasformatore).
// Specifica: docs/SPEC-MOTORE-V2.md, sezioni 3-7.
//
//   const sim = createSim(level, wires);   // gia' assestata
//   act(sim, 'press', 'SB1'); act(sim, 'release', 'SB1'); advance(sim, 5);
//   observe(sim) -> { t, faults, tripped, loads, motors, coils, parts, machine, potential(term) }

import { makeUF } from '../circuit.js';
import { PARTS, partOf, loadVolt } from './parts.js';
import { scan, newMem } from './plc.js';
import { solveDC } from './dc.js';
import { newProcess, stepProcess, exposeProcess, senseDigital, senseAnalog, tunedValues, clampTune } from './process.js';

const PHASES = ['F', 'L1', 'L2', 'L3'];
const isPhase = p => PHASES.includes(p);
const isTrafo = p => typeof p === 'string' && p.includes(':');
const MAX_ITER = 40;
const STEP = 0.5;

export const sourcesOf = level => level.src || { F: 'Q.F', N: 'Q.N', PE: 'Q.PE' };

/* ---------- creazione e stato ---------- */

export function createSim(level, wires = []) {
  const parts = {};
  level.comps.forEach(c => {
    const p = partOf(c);
    parts[c.id] = p.init ? p.init(c) : {};
  });
  const sim = {
    level, wires: wires.slice(), parts, t: 0,
    supply: true,          // alimentazione dal quadro (la levetta della sessione, se il livello non ha protezioni proprie)
    mainTrip: false,       // corto che nessuna protezione del livello puo' interrompere
    burnt: {},             // carichi bruciati da sovratensione
    unstable: false,
    overload: false,       // sovraccarico simulato (prove del relè termico)
    pos: level.machine ? level.machine.start || 0 : 0,
    kmHistory: [],         // insiemi di contattori chiusi visti durante l'assestamento (interblocco)
    cableHeat: 0,          // riscaldamento del cavo della linea (level.cable), in secondi di sovracorrente
    cableBurnt: false,
    programs: {},          // programmi dei PLC scritti dall'allievo: { idPLC: [gradini] }; senza, vale quello del livello
    plcDt: 0,              // secondi da consegnare alla prossima scansione
    forcePlc: null,        // 'allOn': prova di sicurezza, tutte le uscite dei PLC forzate a 1
    qHistory: [],          // uscite accese dopo ogni scansione (regola outputsNeverTogether)
    process: level.process ? newProcess(level.process) : null,   // modello di processo (process.js): { state, params }
    trace: [],             // righe { t, grandezza: valore } ogni passo, per le prove e il grafico (level.process.trace)
    hmi: {},               // parole dei PLC scritte dal pannello di regolazione: { idPLC: { MW0: 60 } }
    scenario: level.scenario ? { firedAt: {}, fixedAt: {} } : null,   // turno con guasti a tempo (level.scenario): quando sono scattati e quando sono stati riparati
    panel: level.hmi ? { values: {}, alarms: {}, seq: 0 } : null,   // pannello operatore (level.hmi): ultime letture e stato degli allarmi
  };
  Object.entries(tunedValues(level.process)).forEach(([name, v]) => applyTune(sim, name, v));
  settle(sim);
  recordTrace(sim);
  return sim;
}

export const TRACE_MAX = 4000;

function applyTune(sim, name, v) {
  const d = sim.level.process.tunable[name];
  if (d.param && sim.process) sim.process.params = { ...sim.process.params, [d.param]: v };
  if (d.word) { const [id, w] = d.word.split('.'); (sim.hmi[id] = sim.hmi[id] || {})[w] = v; }
}

// Il pannello di regolazione cambia un parametro dichiarato regolabile (process.tunable). Ritorna il valore applicato.
export function tune(sim, name, value) {
  const d = sim.level.process && sim.level.process.tunable && sim.level.process.tunable[name];
  if (!d || !Number.isFinite(Number(value))) return null;
  const v = clampTune(d, value);
  applyTune(sim, name, v);
  settle(sim);
  return v;
}

// Grandezze del processo (stato e derivate) per sensori, prove e grafico.
export const processVars = sim => (sim.process ? exposeProcess(sim.level.process, sim.process) : {});

// Valore di una grandezza per il tracciato: del processo ('h'), di un PLC ('PLC.Q0', 'PLC.AQ0', 'PLC.MW1', 'PLC.AI0'),
// di un componente ('M' motore che gira, 'H1' carico acceso, 'KM1' contattore chiuso). Booleani come 0/1.
export function traceValue(sim, name, vars = processVars(sim)) {
  const num = x => (typeof x === 'boolean' ? (x ? 1 : 0) : Number(x) || 0);
  if (name in vars) return num(vars[name]);
  const [id, k] = name.split('.');
  const c = sim.level.comps.find(x => x.id === id);
  const s = sim.parts[id];
  if (!c || !s) return 0;
  if (c.type === 'plc' && k) {
    if (/^Q\d+$/.test(k)) return num(!!s.q[k]);
    if (/^AQ\d+$/.test(k)) return num(s.aq[k]);
    if (/^AI\d+$/.test(k)) return num(s.ai[k]);
    const m = s.mem || {};
    return num(/^(AI|AQ|MW)\d+$/.test(k) ? (m.words || {})[k] : (m.bits || {})[k]);
  }
  if (c.type === 'tx') return num(s.mA);
  return num(s.run !== undefined ? s.run : s.on !== undefined ? s.on : s.act);
}

function recordTrace(sim) {
  const names = sim.traceNames || (sim.level.process && sim.level.process.trace);
  if (!names || !names.length) return;
  const vars = processVars(sim);
  const row = { t: sim.t };
  names.forEach(n => (row[n] = traceValue(sim, n, vars)));
  sim.trace.push(row);
  if (sim.trace.length > TRACE_MAX) sim.trace.splice(0, TRACE_MAX / 2);
}

// Comandi del processo dal circuito, come frazioni 0-1 (process.js).
function actuatorsOf(sim, an) {
  const out = {};
  const acts = (sim.level.process && sim.level.process.actuators) || {};
  Object.entries(acts).forEach(([name, src]) => {
    let v = 0;
    if (src.motor) v = an.motors[src.motor] === 'fwd' || an.motors[src.motor] === 'rev' ? 1 : 0;
    else if (src.load) v = an.loads[src.load] === 'on' ? 1 : 0;
    else if (src.coil) v = sim.parts[src.coil] && sim.parts[src.coil].on ? 1 : 0;
    else if (src.plc) { const [id, q] = src.plc.split('.'); v = sim.parts[id] && sim.parts[id].q[q] ? 1 : 0; }
    else if (src.analog) { const [id, q] = src.analog.split('.'); v = sim.parts[id] ? (Number(sim.parts[id].aq[q]) || 0) / 100 : 0; }
    else if (src.value !== undefined) v = src.value;
    out[name] = v;
  });
  return out;
}

export function setWires(sim, wires) {
  sim.wires = wires.slice();
  sim.burnt = {};
  sim.unstable = false;
  sim.mainTrip = false;
  sim.kmHistory = [];
  sim.qHistory = [];
  sim.cableHeat = 0; sim.cableBurnt = false;
  settle(sim);
}

/* ---------- rete: unione dei morsetti e potenziali ---------- */

// open: { <idComp>: 'all' | 'F' | 'N' } apre (solo per questo calcolo) una protezione o un suo polo
function connect(sim, open = {}) {
  const uf = makeUF();
  sim.wires.forEach(w => uf.u(w.a, w.b));
  sim.level.comps.forEach(c => {
    const p = partOf(c);
    let pairs = p.contacts(c, sim.parts[c.id] || {});
    const o = open[c.id];
    if (o === 'all') pairs = [];
    else if (o === 'power' && p.power) pairs = pairs.filter(([a]) => !p.power.some(([x]) => x === a));
    else if (o && p.poles) pairs = pairs.filter(([a]) => !p.poles[o].includes(a));
    pairs.forEach(([a, b]) => uf.u(c.id + '.' + a, c.id + '.' + b));
  });
  return uf;
}

// Tensione tra due potenziali (in volt). Il neutro e la terra stanno a 0 V rispetto alle fasi.
export function voltage(p, q) {
  if (!p || !q || p === q) return 0;
  if (isTrafo(p) || isTrafo(q)) {
    if (!isTrafo(p) || !isTrafo(q)) return 0;
    const [ta] = p.split(':'), [tb] = q.split(':');
    return ta === tb ? 'sec:' + ta : 0;
  }
  if (isPhase(p) && isPhase(q)) return 400;
  if (isPhase(p) || isPhase(q)) return 230;
  return 0;
}

// Livelli in corrente continua (level.dc): stessa forma dell'analisi in alternata, calcolata con il risolutore nodale.
function analyseDC(sim, open) {
  const { level } = sim;
  const uf = connect(sim, open);
  const els = [];
  const vars = processVars(sim);
  sim.wires.forEach(w => els.push({ id: 'w' + w.id, type: 'W', a: w.a, b: w.b }));
  level.comps.forEach(c => {
    const p = partOf(c);
    p.contacts(c, sim.parts[c.id] || {}).forEach(([x, y]) => els.push({ id: c.id + ':' + x, type: 'W', a: c.id + '.' + x, b: c.id + '.' + y }));
    // dopo un cortocircuito il fusibile delle batterie e' bruciato: niente sorgenti finche' non si rifa' il cablaggio
    if (p.dc) p.dc(c, sim.parts[c.id] || {}, vars).forEach(e => { if (e.type !== 'V' || (sim.supply && !sim.mainTrip)) els.push(e); });
  });
  const firstV = els.find(e => e.type === 'V');
  const r = solveDC({ elements: els, ground: firstV ? firstV.b : (els[0] && els[0].a) });
  const vOf = t => (r.ok ? r.v[t] || 0 : 0);
  const faults = [];
  if (!r.ok) faults.push({ code: 'corto' });
  level.comps.forEach(c => { if (c.type === 'batt' && r.ok && Math.abs(r.i[c.id] || 0) > (c.imax || 20)) faults.push({ code: 'corto', comp: c.id }); });
  const loads = {}, burntNow = [];
  level.comps.forEach(c => {
    const p = partOf(c);
    if (!p.dcLoad) return;
    let st = 'off';
    if (c.type === 'led') st = r.ok && (r.i[c.id] || 0) > 0.002 ? 'on' : 'off';
    else if (c.type === 'invfv') {
      const V = Math.abs(vOf(c.id + '.+') - vOf(c.id + '.-'));
      st = V > (c.vmax || 60) ? 'burnt' : V >= (c.vmin || 30) ? 'on' : V > 5 ? 'weak' : 'off';
    } else {
      const V = Math.abs(vOf(c.id + '.' + p.dcLoad[0]) - vOf(c.id + '.' + p.dcLoad[1])), vn = c.volt || 12;
      st = V > vn * 1.3 ? 'burnt' : V >= vn * 0.85 ? 'on' : V > vn * 0.2 ? 'weak' : 'off';
    }
    if (sim.burnt[c.id]) st = 'burnt';
    loads[c.id] = st;
  });
  return {
    uf, pots: {}, potAt: () => null, volt: (x, y) => Math.abs(vOf(x) - vOf(y)), faults, loads, coils: {}, motors: {}, modes: {}, plcIn: {}, plcAi: {}, trafoOn: {}, burntNow, leaks: [], dc: r,
  };
}

function analyse(sim, open) {
  if (sim.level.dc) return analyseDC(sim, open);
  const { level } = sim;
  const uf = connect(sim, open);
  const pots = {};   // radice -> Set di potenziali
  const addPot = (term, name) => {
    const k = uf.f(term);
    (pots[k] = pots[k] || new Set()).add(name);
  };
  if (sim.supply && !sim.mainTrip) {
    Object.entries(sourcesOf(level)).forEach(([name, term]) => addPot(term, name));
  }
  const potAt = term => {
    const s = pots[uf.f(term)];
    if (!s || s.size !== 1) return s && s.size ? 'mix' : null;
    return [...s][0];
  };
  // trasformatori: secondario alimentato se il primario ha 230 V
  const trafos = level.comps.filter(c => c.type === 'trafo');
  const burntNow = [];
  const trafoOn = {};
  trafos.forEach(c => {
    const v = voltage(potAt(c.id + '.1'), potAt(c.id + '.2'));
    trafoOn[c.id] = v === 230;
    if (v === 400) burntNow.push(c.id);
    if (trafoOn[c.id] && !sim.burnt[c.id]) {
      addPot(c.id + '.3', c.id + ':a');
      addPot(c.id + '.4', c.id + ':b');
    }
  });
  const volt = (x, y) => {
    const p = potAt(x), q = potAt(y);
    if (p === 'mix' || q === 'mix') return 0;
    const v = voltage(p, q);
    if (typeof v === 'string') {
      const t = level.comps.find(c => c.id === v.slice(4));
      return t ? t.vout || 12 : 0;
    }
    return v;
  };

  // guasti statici
  const faults = [];
  Object.values(pots).forEach(s => {
    if (s.size < 2) return;
    const a = [...s];
    const ph = a.filter(isPhase), tr = a.filter(isTrafo), mains = a.filter(x => !isTrafo(x));
    if (tr.length && mains.length) faults.push({ code: 'secondarioMisto' });
    else if (ph.length > 1 || (ph.length && a.includes('N'))) faults.push({ code: 'corto' });
    else if (ph.length && a.includes('PE')) faults.push({ code: 'faseterra' });
    else if (tr.length > 1) {
      const ids = new Set(tr.map(x => x.split(':')[0]));
      if (ids.size < tr.length) faults.push({ code: 'corto' });
      else faults.push({ code: 'secondarioMisto' });
    } else if (a.includes('N') && a.includes('PE')) faults.push({ code: 'neutroterra' });
  });

  // carichi, bobine, motori
  const loads = {}, coils = {}, motors = {}, modes = {};
  level.comps.forEach(c => {
    const p = partOf(c);
    const id = c.id;
    if (p.load || p.coil) {
      const [x, y] = (p.load || p.coil).map(t => id + '.' + t);
      const v = volt(x, y), vn = loadVolt(c);
      let st = 'off';
      if (sim.burnt[id]) st = 'burnt';
      else if (v > vn) st = 'burnt';
      else if (v === vn) st = 'on';
      else if (v > 0) st = 'weak';
      if (p.load) loads[id] = st;
      else { coils[id] = st === 'on'; if (st === 'burnt') burntNow.push(id); }   // una bobina sotto sovratensione si brucia
      // un carico tra una fase e la terra si accende, ma la corrente torna dalla terra: e' un guasto
      const px = potAt(x), py = potAt(y);
      if (v > 0 && (px === 'PE' || py === 'PE')) faults.push({ code: 'caricoTerra', comp: id });
      if (st === 'burnt') loads[id] = loads[id] || 'burnt';
    }
    if (c.type === 'motor6') {
      const net = t => uf.f(id + '.' + t);
      const idx = ['U1', 'V1', 'W1'].map(t => ['L1', 'L2', 'L3'].indexOf(potAt(id + '.' + t)));
      const distinct = new Set(idx.filter(i => i >= 0));
      // collegamenti completati: ponte di stella (U2 V2 W2 uniti: 0, 1 o 3 coppie) e anello di triangolo (U1-W2, V1-U2, W1-V2)
      const starLinks = (net('U2') === net('V2')) + (net('V2') === net('W2')) + (net('U2') === net('W2'));
      const deltaLinks = (net('U1') === net('W2')) + (net('V1') === net('U2')) + (net('W1') === net('V2'));
      const star = starLinks === 3 && deltaLinks === 0, delta = deltaLinks === 3 && starLinks === 0;
      let st = 'off';
      if (distinct.size === 3 && (star || delta)) {
        const cyc = (idx[1] - idx[0] + 3) % 3 === 1 && (idx[2] - idx[1] + 3) % 3 === 1;
        st = cyc ? 'fwd' : 'rev';
        modes[id] = star ? 'star' : 'delta';
      } else if (distinct.size >= 2 && (star || delta || starLinks === 1 || (deltaLinks > 0 && deltaLinks < 3))) st = 'hum';
      else if (distinct.size === 3 && (starLinks === 1 || (deltaLinks > 0 && deltaLinks < 3))) st = 'hum';
      motors[id] = st;
    } else if (p.motor) {
      const ph = p.motor.map(t => potAt(id + '.' + t));
      const idx = ph.map(x => ['L1', 'L2', 'L3'].indexOf(x));
      const distinct = new Set(idx.filter(i => i >= 0));
      let st = 'off';
      if (distinct.size === 3) {
        const cyc = (idx[1] - idx[0] + 3) % 3 === 1 && (idx[2] - idx[1] + 3) % 3 === 1;
        st = cyc ? 'fwd' : 'rev';
      } else if (distinct.size === 2) st = 'hum';
      motors[id] = st;
    }
  });
  // dispersioni verso terra: attive se il punto guasto e' in tensione (la corrente scorre fino alla terra)
  const leaks = [];
  level.comps.forEach(c => {
    const s = sim.parts[c.id];
    if (c.type === 'gu' && s && s.on && isPhase(potAt(c.at))) leaks.push({ id: c.id, mA: s.mA });
  });
  // ingressi dei PLC: 1 se il PLC e' alimentato e tra l'ingresso e il comune ci sono 230 V
  const plcIn = {};
  level.comps.filter(c => c.type === 'plc').forEach(c => {
    const on = !!coils[c.id];
    const bits = {};
    Object.keys(c.terms).filter(t => /^I\d+$/.test(t)).forEach(t => { bits[t] = on && volt(c.id + '.' + t, c.id + '.IC') === 230; });
    plcIn[c.id] = bits;
  });
  // ingressi analogici (4-20 mA, simbolici): la corrente del trasmettitore se tx.+ e' sulla rete di AIk+, tx.- su quella di AIk-,
  // il PLC e' alimentato e su quelle reti non c'e' tensione di rete. Altrimenti 0 mA (anello aperto o invertito).
  const plcAi = {};
  const txs = level.comps.filter(c => c.type === 'tx');
  level.comps.filter(c => c.type === 'plc').forEach(c => {
    const on = !!coils[c.id];
    const ai = {};
    Object.keys(c.terms).filter(t => /^AI\d+\+$/.test(t)).forEach(t => {
      const k = t.slice(0, -1), plus = c.id + '.' + t, minus = c.id + '.' + k + '-';
      let mA = 0;
      if (on && !potAt(plus) && !potAt(minus)) {
        const tx = txs.find(x => uf.f(x.id + '.+') === uf.f(plus) && uf.f(x.id + '.-') === uf.f(minus) && uf.f(plus) !== uf.f(minus));
        if (tx) mA = (sim.parts[tx.id] && sim.parts[tx.id].mA) || 0;
      }
      ai[k] = mA;
    });
    plcAi[c.id] = ai;
  });
  return { uf, pots, potAt, volt, faults, loads, coils, motors, modes, plcIn, plcAi, trafoOn, burntNow, leaks };
}


/* ---------- correnti di linea e sovraccarico (E1) ---------- */
export const RCD_TRIP_MA = 30;           // corrente differenziale nominale: il dispositivo scatta entro questo valore
export const OVERLOAD_NO_TRIP = 1.13;   // CEI EN 60898: sotto 1,13 In non scatta
export const OVERLOAD_TRIP = 1.45;      // sopra 1,45 In scatta (nel gioco in pochi secondi invece di un'ora)
const V_MAINS = 230;

// Corrente (A) che attraversa la protezione `prot`: somma delle potenze dei carichi accesi che da lei dipendono.
function lineCurrent(sim, an, prot) {
  const off = analyse(sim, { [prot]: 'all' });
  let w = 0;
  sim.level.comps.forEach(c => {
    if (!c.w) return;
    if (an.loads[c.id] === 'on' && off.loads[c.id] !== 'on') w += c.w;
  });
  return w / V_MAINS;
}

/* ---------- protezioni ---------- */

const closedProtections = (sim, kind) =>
  sim.level.comps.filter(c => partOf(c).protect && (!kind || partOf(c).protect === kind) && sim.parts[c.id].on);

const trip = (sim, c) => { sim.parts[c.id].on = false; sim.parts[c.id].tripped = true; sim.parts[c.id].heat = 0; };

const hasFault = (an, codes) => an.faults.some(f => codes.includes(f.code));

// Ritorna true se ha fatto scattare qualcosa.
function protect(sim, an) {
  const rank = c => c.rank || 1;
  const pick = (cands, still) => {
    const ok = cands.filter(c => !still(analyse(sim, { [c.id]: 'all' })));
    if (!ok.length) return null;
    return ok.sort((a, b) => rank(b) - rank(a))[0];
  };
  // corto tra fasi o fase-neutro: magnetotermici (e differenziali, che hanno anche lo sganciatore magnetotermico solo se dichiarato)
  if (hasFault(an, ['corto'])) {
    const c = pick(closedProtections(sim, 'corto'), a => hasFault(a, ['corto']));
    if (c) { trip(sim, c); return true; }
    sim.mainTrip = true;
    sim.mainTripCause = sim.level.dc ? 'cortoDC' : 'corto';
    return true;
  }
  // fase a terra, neutro a terra: differenziale
  if (hasFault(an, ['faseterra', 'neutroterra'])) {
    const c = pick(closedProtections(sim, 'terra'), a => hasFault(a, ['faseterra', 'neutroterra']));
    if (c) { trip(sim, c); return true; }
    if (hasFault(an, ['faseterra'])) {
      // senza differenziale: un guasto franco a terra fa scattare il magnetotermico (impianto TN, semplificazione)
      const m = pick(closedProtections(sim, 'corto'), a => hasFault(a, ['faseterra']));
      if (m) { trip(sim, m); return true; }
      sim.mainTrip = true;
      sim.mainTripCause = 'faseterra';
      return true;
    }
  }
  // dispersione verso terra: il differenziale scatta da 30 mA in su (sotto i 15 mA non scatta mai); il magnetotermico non se ne accorge
  if (an.leaks.some(l => l.mA >= RCD_TRIP_MA)) {
    const c = pick(closedProtections(sim, 'terra'), a => a.leaks.some(l => l.mA >= RCD_TRIP_MA));
    if (c) { trip(sim, c); return true; }
  }
  // squilibrio: un carico acceso attraversa un solo polo di un differenziale
  for (const r of closedProtections(sim, 'terra')) {
    const offF = analyse(sim, { [r.id]: 'F' }), offN = analyse(sim, { [r.id]: 'N' });
    const unbalanced = Object.keys(an.loads).some(id => an.loads[id] === 'on' && (offF.loads[id] === 'on') !== (offN.loads[id] === 'on'))
      || Object.keys(an.coils).some(id => an.coils[id] && offF.coils[id] !== offN.coils[id])
      || Object.keys(an.motors).some(id => an.motors[id] !== 'off' && offF.motors[id] !== offN.motors[id]);
    if (unbalanced) { trip(sim, r); return true; }
  }
  return false;
}

/* ---------- assestamento ---------- */

function machineSwitches(sim) {
  if (sim.process) {
    const vars = processVars(sim);
    sim.level.comps.forEach(c => {
      if (c.type === 'sens' && c.sense && !sim.parts[c.id].jam) sim.parts[c.id].act = senseDigital(vars, c.sense);
      if (c.type === 'tx' && c.sense) sim.parts[c.id].mA = sim.parts[c.id].cut ? 0 : senseAnalog(vars, c.sense);
    });
  }
  const m = sim.level.machine;
  if (!m) return;
  if (m.endFwd && sim.parts[m.endFwd]) sim.parts[m.endFwd].act = sim.pos >= m.length;
  if (m.endRev && sim.parts[m.endRev]) sim.parts[m.endRev].act = sim.pos <= 0;
}

export const programOf = (sim, c) => sim.programs[c.id] || c.program || [];

// Una scansione di ogni PLC alimentato (a circuito assestato). Ritorna true se un'uscita e' cambiata.
function plcScan(sim, an) {
  let changed = false;
  const dt = sim.plcDt;
  sim.plcDt = 0;
  sim.level.comps.forEach(c => {
    if (c.type !== 'plc') return;
    const s = sim.parts[c.id];
    if (!an.coils[c.id]) {
      // senza alimentazione il PLC perde memoria e uscite
      if (Object.keys(s.q).length || s.mem) { s.q = {}; s.aq = {}; s.mem = null; s.rungs = []; s.inputs = {}; s.ai = {}; changed = true; }
      return;
    }
    const r = scan(programOf(sim, c), an.plcIn[c.id], s.mem || newMem(), dt, { ...an.plcAi[c.id], ...(sim.hmi[c.id] || {}) });
    s.aq = r.analogOut; s.ai = an.plcAi[c.id];
    let q = r.outputs;
    if (sim.forcePlc === 'allOn') q = Object.fromEntries(Object.keys(c.terms).filter(t => /^Q\d+A$/.test(t)).map(t => [t.slice(0, -1), true]));
    const same = Object.keys({ ...q, ...s.q }).every(k => !!q[k] === !!s.q[k]);
    s.mem = r.mem; s.rungs = r.rungs; s.inputs = an.plcIn[c.id];
    if (!same) {
      s.q = q; changed = true;
      sim.qHistory.push(Object.keys(q).filter(k => q[k]).map(k => c.id + '.' + k));
      if (sim.qHistory.length > 200) sim.qHistory.splice(0, sim.qHistory.length - 200);
    }
  });
  return changed;
}

export function settle(sim) {
  const comps = sim.level.comps;
  let plcFlips = 0;
  for (let it = 0; it < MAX_ITER; it++) {
    machineSwitches(sim);
    const an = analyse(sim);
    Object.entries(an.loads).forEach(([id, st]) => { if (st === 'burnt') sim.burnt[id] = true; });
    an.burntNow.forEach(id => (sim.burnt[id] = true));
    if (sim.kmHistory.length > 200) sim.kmHistory.splice(0, sim.kmHistory.length - 200);
    sim.kmHistory.push(comps.filter(c => c.type === 'km' && sim.parts[c.id].on).map(c => c.id));
    if (protect(sim, an)) continue;
    // bobine una alla volta, in ordine di livello. Prima si aprono i contattori che devono cadere, poi si chiudono gli altri
    // (apre prima di chiudere: stella e triangolo cambiati nella stessa scansione non si sovrappongono mai).
    let changed = false;
    const drops = c => (c.type === 'km' || c.type === 'rel') && !an.coils[c.id] && sim.parts[c.id].on && !sim.parts[c.id].welded;
    for (const pass of [0, 1]) {
    for (const c of comps) {
      if (pass === 0 && !drops(c)) continue;
      const p = partOf(c);
      if (!p.coil) continue;
      const s = sim.parts[c.id];
      const en = !!an.coils[c.id];
      if (c.type === 'km' || c.type === 'rel') {
        const t = en || !!s.welded;      // un contatto incollato resta chiuso anche a bobina spenta
        if (s.on !== t || s.coil !== en) { s.on = t; s.coil = en; changed = true; }
      } else if (c.type === 'rs') {
        // Riarmo monitorato: i canali devono essere chiusi senza discrepanza, R deve essere BASSO (pronto), poi salire (pulsante premuto)
        // e tornare giu' (pulsante rilasciato): solo allora le uscite si chiudono. Un riarmo ponticellato o gia' premuto non arma mai.
        const hi = t => isPhase(an.potAt(c.id + '.' + t));
        const ch1 = hi('S12'), ch2 = hi('S22'), r = hi('R');
        let on = s.on, disc = s.disc, ready = s.ready, held = s.held;
        if (!en || !ch1 || !ch2) { on = false; ready = false; held = false; }
        if (en) {
          if (ch1 !== ch2) disc = true; else if (!ch1 && !ch2) disc = false;
          if (!on && ch1 && ch2 && !disc) {
            if (!r) { if (held) { on = true; held = false; ready = false; } else ready = true; }
            else held = ready;
          }
        }
        if (on !== s.on || disc !== s.disc || ready !== s.ready || held !== s.held || en !== s.coil) { s.on = on; s.disc = disc; s.ready = ready; s.held = held; s.coil = en; changed = true; }
      }
      else if (c.type === 'ri' && en !== s.coil) {
        if (en) s.on = !s.on;
        s.coil = en;
        changed = true;
      } else if (c.type === 'kt') {
        // senza bobina il ritardo riparte da zero e il contatto torna subito a riposo
        if (!en && (s.on || s.acc)) { s.on = false; s.acc = 0; changed = true; }
        if (en !== s.coil) { s.coil = en; changed = true; }
      } else if (c.type === 'tmr') {
        if (en && s.left !== (c.time || 60)) { s.left = c.time || 60; changed = true; }
        if (en !== s.coil) { s.coil = en; changed = true; }
      }
      if (changed) break;
    }
    if (changed) break;
    }
    if (!changed && plcScan(sim, an)) { changed = true; plcFlips++; }
    if (!changed) { sim.unstable = false; sim.unstableCause = null; hmiPoll(sim, an); return; }
  }
  // le uscite del PLC cambiavano di continuo: il programma si contraddice (es. Q0 comandata da "non Q0")
  sim.unstable = true;
  sim.unstableCause = plcFlips > MAX_ITER / 4 ? 'plc' : null;
}

/* ---------- pannello operatore (docs/SPEC-PROCESSI.md, sezione 8c) ---------- */

const hmiComp = sim => sim.level.comps.find(c => c.type === 'hmi');
function hmiLink(sim, an) {
  const h = hmiComp(sim), cfg = sim.level.hmi;
  return !!(h && sim.parts[h.id].on && cfg && an.coils[cfg.plc]);
}

// Con il collegamento il pannello rilegge valori e bit d'allarme; senza, tutto resta fermo all'ultima lettura.
function hmiPoll(sim, an) {
  const cfg = sim.level.hmi, P = sim.panel;
  if (!cfg || !P || !hmiLink(sim, an)) return;
  const vars = processVars(sim);
  (cfg.values || []).forEach(v => { P.values[v.id] = { v: traceValue(sim, v.v, vars), t: sim.t }; });
  (cfg.alarms || []).forEach(a => {
    const on = traceValue(sim, cfg.plc + '.' + a.bit, vars) === 1;
    const st = P.alarms[a.id] || { state: 'off', since: null, seq: 0 };
    let next = st.state;
    if (on && (st.state === 'off' || st.state === 'rientrato')) next = 'attivo';
    else if (!on && st.state === 'attivo') next = 'rientrato';
    else if (!on && st.state === 'riconosciuto') next = 'off';
    if (next !== st.state) {
      P.alarms[a.id] = next === 'attivo' && st.state === 'off' ? { state: next, since: sim.t, seq: ++P.seq } : { ...st, state: next };
    }
  });
}

function hmiAck(sim) {
  const P = sim.panel;
  if (!P || !hmiLink(sim, analyse(sim))) return;
  Object.entries(P.alarms).forEach(([id, st]) => {
    if (st.state === 'attivo') P.alarms[id] = { ...st, state: 'riconosciuto' };
    else if (st.state === 'rientrato') P.alarms[id] = { ...st, state: 'off' };
  });
}

const PRIO = { alta: 0, media: 1, bassa: 2 };
function hmiReport(sim, an) {
  const cfg = sim.level.hmi, P = sim.panel;
  if (!cfg || !P) return null;
  const stale = cfg.stale || 3;
  const values = (cfg.values || []).map(v => {
    const r = P.values[v.id];
    const age = r ? sim.t - r.t : null;
    const val = r ? r.v : null;
    const text = val === null ? '' : v.bool ? v.bool[val ? 1 : 0] : String(Math.round(val * 10) / 10).replace('.', ',') + (v.unit ? ' ' + v.unit : '');
    return { id: v.id, label: v.label, v: val, text, age, stale: !r || age > stale };
  });
  const alarms = (cfg.alarms || []).map(a => ({ id: a.id, text: a.text, prio: a.prio, ...(P.alarms[a.id] || { state: 'off', since: null, seq: 0 }) }))
    .filter(a => a.state !== 'off')
    .sort((x, y) => PRIO[x.prio] - PRIO[y.prio] || y.seq - x.seq);
  return { link: hmiLink(sim, an), horn: alarms.some(a => a.state === 'attivo' || a.state === 'rientrato'), values, alarms };
}

/* ---------- turno con guasti a tempo (level.scenario) ---------- */
// level.scenario = { duration, faults: [{ id, at, do: 'cut TT', label, fixed: { part, prop, is }, maxDelay, fix: [azioni] }], expect? }
// `fix` (le azioni che riparano, nell'ordine) non serve al gioco: lo usano i test per giocare il turno e documenta la riparazione.
// A `at` secondi simulati dall'accensione scatta il guasto (un'azione del banco: cut, jam, toggle, weld...); l'allievo lo ripara
// con gli stessi comandi. Il guasto e' riparato quando la proprieta' di quel pezzo torna al valore giusto.
function scenarioTick(sim) {
  const sc = sim.level.scenario, S = sim.scenario;
  if (!sc || !S) return;
  const healthy = f => { const part = sim.parts[f.fixed.part]; return !!part && !!part[f.fixed.prop] === !!f.fixed.is; };
  sc.faults.forEach(f => {
    if (S.firedAt[f.id] === undefined && sim.t >= f.at) {
      const [a, x] = f.do.split(/\s+/);
      S.firedAt[f.id] = sim.t;       // prima dell'azione: act() richiama questo controllo
      // si guasta solo un pezzo a posto: un `toggle` su un pezzo gia' staccato dall'allievo lo riparerebbe da solo
      if (healthy(f)) try { act(sim, a, x); } catch (e) { /* azione non valida per il pezzo: lo segnala il test sui livelli */ }
    }
    // a turno finito non si ripara piu': il guasto resta aperto
    if (S.firedAt[f.id] !== undefined && S.fixedAt[f.id] === undefined && sim.t < sc.duration && healthy(f)) S.fixedAt[f.id] = sim.t;
  });
}

// Stato del turno per la vista e per la verifica.
export function scenarioReport(sim) {
  const sc = sim.level.scenario, S = sim.scenario;
  if (!sc || !S) return null;
  const faults = sc.faults.map(f => {
    const firedAt = S.firedAt[f.id], fixedAt = S.fixedAt[f.id];
    const delay = firedAt === undefined ? null : (fixedAt === undefined ? sim.t : fixedAt) - firedAt;
    return { id: f.id, label: f.label || f.id, at: f.at, firedAt: firedAt ?? null, fixedAt: fixedAt ?? null, delay, max: f.maxDelay ?? Infinity,
      late: delay !== null && delay > (f.maxDelay ?? Infinity), open: firedAt !== undefined && fixedAt === undefined };
  });
  return { duration: sc.duration, t: sim.t, done: sim.t >= sc.duration, faults };
}

/* ---------- azioni ---------- */

export function act(sim, action, id) {
  const c = sim.level.comps.find(x => x.id === id);
  if (!c) throw new Error('componente sconosciuto: ' + id);
  const s = sim.parts[id];
  const p = partOf(c);
  if (!(p.actions || []).includes(action)) throw new Error('azione ' + action + ' non valida per ' + id);
  if (action === 'press') s.pressed = true;
  else if (action === 'release') s.pressed = false;
  else if (action === 'toggle') {
    if ('pressed' in s && c.type === 'fungo') s.pressed = !s.pressed;
    else if (c.type === 'port') s.open = !s.open;
    else { s.on = !s.on; if (s.on) s.tripped = false; s.heat = 0; }
    if (s.on && sim.mainTrip && (p.protect || c.type === 'sez')) sim.mainTrip = false;
  } else if (action === 'rate' && c.type === 'gu' && c.levels) {
    s.mA = c.levels[(c.levels.indexOf(s.mA) + 1) % c.levels.length];
  } else if (action === 'rate' && c.type === 'mt' && c.ratings) {
    const i = c.ratings.indexOf(s.in);
    s.in = c.ratings[(i + 1) % c.ratings.length];
    s.heat = 0;
  } else if (action === 'weld' && (c.type === 'km' || c.type === 'rel')) { if (s.on || s.welded) s.welded = !s.welded; }
  else if (action === 'reset' && c.type === 'ft') { s.tripped = false; s.heat = 0; }
  else if (action === 'jam' && c.type === 'sens') s.jam = !s.jam;
  else if (action === 'dead' && c.type === 'sens') { s.jam = true; s.act = false; }   // sensore morto: resta a riposo qualunque cosa succeda
  else if (action === 'cut' && c.type === 'tx') s.cut = !s.cut;
  else if (action === 'ack' && c.type === 'hmi') hmiAck(sim);
  else if (action === 'test' && c.type === 'rcd') {
    if (s.on) {
      const an = analyse(sim);
      // il tasto di prova funziona solo se il differenziale e' alimentato tra fase e neutro
      if (an.volt(id + '.1', id + '.N1') === 230) trip(sim, c);
    }
  } else throw new Error('azione non valida: ' + action);
  settle(sim);
  scenarioTick(sim);   // una riparazione fatta tra due passi vale subito, con l'ora in cui e' stata fatta
}

export function setSupply(sim, on) {
  sim.supply = on;
  if (on) sim.mainTrip = false;
  settle(sim);
}

// Riporta la macchina (il pacco del nastro) all'inizio della corsa.
export function rewind(sim) {
  if (!sim.level.machine) return;
  sim.pos = sim.level.machine.start || 0;
  settle(sim);
}

export function advance(sim, seconds) {
  const n = Math.max(1, Math.round(seconds / STEP));
  for (let i = 0; i < n; i++) {
    sim.t += STEP;
    const an = analyse(sim);
    sim.level.comps.forEach(c => {
      const s = sim.parts[c.id];
      if (c.type === 'tmr' && !an.coils[c.id] && s.left > 0) s.left = Math.max(0, s.left - STEP);
      if (c.type === 'kt' && an.coils[c.id] && !s.on) { s.acc += STEP; if (s.acc >= (c.time || 5)) s.on = true; }
      if (c.type === 'motor6') s.starT = an.modes[c.id] === 'star' ? s.starT + STEP : 0;
      if (c.type === 'ft' && !s.tripped) {
        // scalda solo per i motori che passano davvero dai suoi poli
        const without = analyse(sim, { [c.id]: 'power' });
        const mine = Object.keys(an.motors).filter(mid => an.motors[mid] !== without.motors[mid]);
        // un motore a sei morsetti che resta in stella oltre il tempo di avviamento scalda come sotto sovraccarico
        const stuck = mid => an.modes[mid] === 'star' && sim.parts[mid].starT > (sim.level.starLimit || 12);
        const hot = mine.some(mid => an.motors[mid] === 'hum' || stuck(mid) || (sim.overload && (an.motors[mid] === 'fwd' || an.motors[mid] === 'rev')));
        s.heat = hot ? s.heat + STEP : Math.max(0, s.heat - STEP);
        if (s.heat >= (c.tripAfter || 3)) s.tripped = true;
      }
    });
    // magnetotermici con portata: sopra 1,45 In scattano dopo qualche secondo; il cavo della linea scalda se supera la sua portata
    sim.level.comps.forEach(c => {
      const s = sim.parts[c.id];
      if (c.type !== 'mt' || !s.in) return;
      if (!s.on) { s.heat = 0; return; }
      const ratio = lineCurrent(sim, an, c.id) / s.in;
      s.heat = ratio > OVERLOAD_TRIP ? s.heat + STEP * (ratio > 3 ? 4 : 1) : Math.max(0, s.heat - STEP);
      if (s.heat >= (c.tripAfter || 3)) { trip(sim, c); s.heat = 0; }
    });
    const cab = sim.level.cable;
    if (cab && sim.parts[cab.prot] && sim.parts[cab.prot].on) {
      const I = lineCurrent(sim, an, cab.prot);
      // il calore cresce con il quadrato del rapporto I/Iz: poco sopra la portata scalda piano, molto sopra scalda in fretta
      sim.cableHeat = I > cab.iz ? sim.cableHeat + STEP * Math.max(.25, Math.min(4, ((I / cab.iz) ** 2 - 1) * 2.3)) : Math.max(0, sim.cableHeat - STEP);
      if (sim.cableHeat >= (cab.burnAfter || 6)) sim.cableBurnt = true;
    } else sim.cableHeat = Math.max(0, sim.cableHeat - STEP);
    const m = sim.level.machine;
    if (m) {
      const dir = an.motors[m.motor];
      const v = (m.speed || 1) * STEP;
      if (dir === 'fwd') sim.pos = Math.min(m.length, sim.pos + v);
      if (dir === 'rev') sim.pos = Math.max(0, sim.pos - v);
    }
    if (sim.process) sim.process = stepProcess(sim.level.process, sim.process, actuatorsOf(sim, an), STEP);
    sim.plcDt = STEP;
    settle(sim);
    scenarioTick(sim);
    recordTrace(sim);
  }
}

// Il programma dell'allievo cambia: la memoria del PLC riparte da zero.
export function setProgram(sim, id, program) {
  sim.programs[id] = program;
  const s = sim.parts[id];
  if (s) { s.mem = null; s.q = {}; s.aq = {}; s.rungs = []; }
  settle(sim);
}

/* ---------- osservazione ---------- */

// Per ogni magnetotermico con portata: portata, corrente e rapporto (solo per la vista e le prove).
function lineReport(sim, an) {
  const out = {};
  sim.level.comps.forEach(c => {
    const s = sim.parts[c.id];
    if (c.type === 'mt' && s && s.in) {
      const amps = s.on ? lineCurrent(sim, an, c.id) : 0;
      out[c.id] = { in: s.in, amps, ratio: amps / s.in, heat: s.heat };
    }
  });
  return out;
}

export function observe(sim) {
  const an = analyse(sim);
  const faults = an.faults.slice();
  if (sim.unstable) faults.push(sim.unstableCause === 'plc' ? { code: 'instabile', cause: 'plc' } : { code: 'instabile' });
  if (sim.mainTrip) faults.push({ code: 'quadro', cause: sim.mainTripCause || 'corto' });
  const parts = {};
  Object.entries(sim.parts).forEach(([k, v]) => (parts[k] = { ...v }));
  return {
    t: sim.t,
    faults,
    tripped: sim.level.comps.filter(c => sim.parts[c.id].tripped).map(c => c.id),
    loads: { ...an.loads, ...Object.fromEntries(Object.keys(sim.burnt).filter(id => !(id in an.loads)).map(id => [id, 'burnt'])) },
    motors: an.motors,
    modes: an.modes,
    plc: Object.fromEntries(sim.level.comps.filter(c => c.type === 'plc').map(c => [c.id, { powered: !!an.coils[c.id], inputs: an.plcIn[c.id], ai: { ...an.plcAi[c.id] }, q: { ...sim.parts[c.id].q }, aq: { ...sim.parts[c.id].aq }, rungs: sim.parts[c.id].rungs.slice(), bits: { ...((sim.parts[c.id].mem && sim.parts[c.id].mem.bits) || {}) }, words: { ...((sim.parts[c.id].mem && sim.parts[c.id].mem.words) || {}) }, timers: { ...((sim.parts[c.id].mem && sim.parts[c.id].mem.timers) || {}) }, counters: { ...((sim.parts[c.id].mem && sim.parts[c.id].mem.counters) || {}) } }])),
    process: sim.process ? { ...processVars(sim) } : null,
    processAct: sim.process ? actuatorsOf(sim, an) : null,   // comandi che il processo sta ricevendo (0-1), per il disegno
    hmi: hmiReport(sim, an),   // pannello operatore (level.hmi): collegamento, valori con l'eta', allarmi
    scenario: scenarioReport(sim),   // turno a guasti (level.scenario): tempo, guasti scattati e riparati
    coils: Object.fromEntries(Object.entries(an.coils).filter(([id]) => !sim.level.comps.some(c => c.id === id && c.type === 'plc'))),
    parts,
    machine: sim.level.machine ? { pos: sim.pos, atStart: sim.pos <= 0, atEnd: sim.pos >= sim.level.machine.length } : null,
    potential: term => { const p = an.potAt(term); return p === 'mix' ? null : p; },
    supply: sim.supply && !sim.mainTrip,
    overload: !!sim.overload,
    lines: lineReport(sim, an),
    leaks: an.leaks,
    burnt: { ...sim.burnt },
    cable: sim.level.cable ? { iz: sim.level.cable.iz, s: sim.level.cable.s, heat: sim.cableHeat, burnAfter: sim.level.cable.burnAfter || 6, burnt: sim.cableBurnt, amps: sim.parts[sim.level.cable.prot] && sim.parts[sim.level.cable.prot].on ? lineCurrent(sim, an, sim.level.cable.prot) : 0 } : null,
  };
}

// Per la verifica: il carico `id` resterebbe acceso aprendo le protezioni indicate?
export function stillOnIfOpen(sim, id, protIds) {
  const open = {};
  protIds.forEach(p => (open[p] = 'all'));
  const an = analyse(sim, open);
  return an.loads[id] === 'on' || an.coils[id] === true || (an.motors[id] !== undefined && an.motors[id] !== 'off');
}

/* ---------- multimetro ---------- */
// Resistenze nominali usate per la lettura Ohm (valori didattici).
const OHM = { lamp: 530, spia: 8000, presa: 60, bell: 30, ri: 1500, rel: 1500, tmr: 1500, km: 1200, kt: 1500, plc: 4000, motor3: 12, motor6: 12 };

// Elementi che il multimetro attraversa: carichi, bobine e avvolgimenti dei motori.
function windings(sim) {
  const out = [];
  sim.level.comps.forEach(c => {
    const p = partOf(c);
    const ohm = c.ohm || OHM[c.type] || 500;
    if (p.load || p.coil) { const [x, y] = p.load || p.coil; out.push({ a: c.id + '.' + x, b: c.id + '.' + y, ohm, id: c.id }); }
    if (p.windings) p.windings.forEach(([x, y]) => out.push({ a: c.id + '.' + x, b: c.id + '.' + y, ohm, id: c.id }));
    else if (p.motor) for (let i = 0; i < p.motor.length; i++) for (let j = i + 1; j < p.motor.length; j++) out.push({ a: c.id + '.' + p.motor[i], b: c.id + '.' + p.motor[j], ohm, id: c.id });
  });
  return out;
}

/**
 * Lettura del multimetro tra due morsetti.
 *  mode 'V': tensione. Il potenziale si propaga attraverso carichi, bobine e avvolgimenti (impedenza d'ingresso alta):
 *            con l'interruttore aperto, il morsetto a valle verso la lampada legge il neutro, quindi 230 V verso la fase.
 *            -> { kind: 'v', value: volt, ac: true }, oppure { kind: 'v', value: null } se il punto e' in cortocircuito.
 *  mode 'R': continuita' e resistenza, solo a impianto fuori tensione.
 *            -> { kind: 'cont' } (fili e contatti chiusi), { kind: 'res', ohm } (attraverso un carico),
 *               { kind: 'open' }, oppure { kind: 'live' } se c'e' tensione sul punto (lettura non valida).
 */
export function measure(sim, a, b, mode = 'V') {
  const an = analyse(sim);
  // in continua il multimetro legge una tensione con il segno: rosso sul + e nero sul - da' un valore positivo
  if (sim.level.dc && mode === 'V') return { kind: 'v', value: an.dc.ok ? Math.round(((an.dc.v[a] || 0) - (an.dc.v[b] || 0)) * 100) / 100 : null, ac: false };
  const roots = new Map();   // radice -> potenziale
  const wd = windings(sim);
  const terms = [a, b];
  sim.wires.forEach(w => terms.push(w.a, w.b));
  wd.forEach(w => terms.push(w.a, w.b));
  sim.level.comps.forEach(c => {
    Object.keys(c.terms || {}).forEach(t => terms.push(c.id + '.' + t));
    partOf(c).contacts(c, sim.parts[c.id] || {}).forEach(([x, y]) => terms.push(c.id + '.' + x, c.id + '.' + y));
  });
  terms.forEach(t => { const r = an.uf.f(t); if (!roots.has(r)) roots.set(r, an.potAt(t)); });
  for (let k = 0; k < 20; k++) {
    let changed = false;
    wd.forEach(w => {
      const ra = an.uf.f(w.a), rb = an.uf.f(w.b);
      const pa = roots.get(ra), pb = roots.get(rb);
      if (pa && pa !== 'mix' && !pb) { roots.set(rb, pa); changed = true; }
      else if (pb && pb !== 'mix' && !pa) { roots.set(ra, pb); changed = true; }
    });
    if (!changed) break;
  }
  const pa = roots.get(an.uf.f(a)) || null, pb = roots.get(an.uf.f(b)) || null;
  if (mode === 'V') {
    if (pa === 'mix' || pb === 'mix') return { kind: 'v', value: null };
    let v = voltage(pa, pb);
    if (typeof v === 'string') { const t = sim.level.comps.find(c => c.id === v.slice(4)); v = t ? t.vout || 12 : 0; }
    return { kind: 'v', value: v, ac: true };
  }
  const live = x => x && x !== 'N' && x !== 'PE';
  if (live(pa) || live(pb) || (sim.supply && !sim.mainTrip)) return { kind: 'live' };   // a impianto alimentato la continuità non si misura mai
  const ra = an.uf.f(a), rb = an.uf.f(b);
  if (ra === rb) return { kind: 'cont' };
  // ricerca del percorso piu' corto attraverso gli avvolgimenti
  const adj = new Map();
  wd.forEach(w => {
    const x = an.uf.f(w.a), y = an.uf.f(w.b);
    (adj.get(x) || adj.set(x, []).get(x)).push({ to: y, ohm: w.ohm });
    (adj.get(y) || adj.set(y, []).get(y)).push({ to: x, ohm: w.ohm });
  });
  const seen = new Set([ra]);
  let frontier = [{ r: ra, ohm: 0 }];
  while (frontier.length) {
    const next = [];
    for (const f of frontier) for (const e of adj.get(f.r) || []) {
      if (seen.has(e.to)) continue;
      seen.add(e.to);
      if (e.to === rb) return { kind: 'res', ohm: f.ohm + e.ohm };
      next.push({ r: e.to, ohm: f.ohm + e.ohm });
    }
    frontier = next;
  }
  return { kind: 'open' };
}

export { analyse as analyseV2, connect as connectV2, PARTS };
