// Motore v2: simulazione con stato (pulsanti, relè, contattori, tempo, protezioni, trifase, trasformatore).
// Specifica: docs/SPEC-MOTORE-V2.md, sezioni 3-7.
//
//   const sim = createSim(level, wires);   // gia' assestata
//   act(sim, 'press', 'SB1'); act(sim, 'release', 'SB1'); advance(sim, 5);
//   observe(sim) -> { t, faults, tripped, loads, motors, coils, parts, machine, potential(term) }

import { makeUF } from '../circuit.js';
import { PARTS, partOf, loadVolt } from './parts.js';

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
  };
  settle(sim);
  return sim;
}

export function setWires(sim, wires) {
  sim.wires = wires.slice();
  sim.burnt = {};
  sim.unstable = false;
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

function analyse(sim, open) {
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
  const trafoOn = {};
  trafos.forEach(c => {
    const v = voltage(potAt(c.id + '.1'), potAt(c.id + '.2'));
    trafoOn[c.id] = v === 230;
    if (v === 400) sim.burnt[c.id] = true;
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
  const loads = {}, coils = {}, motors = {};
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
      else coils[id] = st === 'on';
      if (st === 'burnt') loads[id] = loads[id] || 'burnt';
    }
    if (p.motor) {
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
  return { uf, pots, potAt, volt, faults, loads, coils, motors, trafoOn };
}

/* ---------- protezioni ---------- */

const closedProtections = (sim, kind) =>
  sim.level.comps.filter(c => partOf(c).protect && (!kind || partOf(c).protect === kind) && sim.parts[c.id].on);

const trip = (sim, c) => { sim.parts[c.id].on = false; sim.parts[c.id].tripped = true; };

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
    return true;
  }
  // fase a terra, neutro a terra: differenziale
  if (hasFault(an, ['faseterra', 'neutroterra'])) {
    const c = pick(closedProtections(sim, 'terra'), a => hasFault(a, ['faseterra', 'neutroterra']));
    if (c) { trip(sim, c); return true; }
    if (hasFault(an, ['faseterra'])) { sim.mainTrip = true; return true; }
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
  const m = sim.level.machine;
  if (!m) return;
  if (m.endFwd && sim.parts[m.endFwd]) sim.parts[m.endFwd].act = sim.pos >= m.length;
  if (m.endRev && sim.parts[m.endRev]) sim.parts[m.endRev].act = sim.pos <= 0;
}

export function settle(sim) {
  const comps = sim.level.comps;
  for (let it = 0; it < MAX_ITER; it++) {
    machineSwitches(sim);
    const an = analyse(sim);
    Object.entries(an.loads).forEach(([id, st]) => { if (st === 'burnt') sim.burnt[id] = true; });
    sim.kmHistory.push(comps.filter(c => c.type === 'km' && sim.parts[c.id].on).map(c => c.id));
    if (protect(sim, an)) continue;
    // bobine una alla volta, in ordine di livello
    let changed = false;
    for (const c of comps) {
      const p = partOf(c);
      if (!p.coil) continue;
      const s = sim.parts[c.id];
      const en = !!an.coils[c.id];
      if (c.type === 'km' && s.on !== en) { s.on = en; s.coil = en; changed = true; }
      else if (c.type === 'ri' && en !== s.coil) {
        if (en) s.on = !s.on;
        s.coil = en;
        changed = true;
      } else if (c.type === 'tmr') {
        if (en && s.left !== (c.time || 60)) { s.left = c.time || 60; changed = true; }
        if (en !== s.coil) { s.coil = en; changed = true; }
      }
      if (changed) break;
    }
    if (!changed) { sim.unstable = false; return; }
  }
  sim.unstable = true;
}

/* ---------- azioni ---------- */

export function act(sim, action, id) {
  const c = sim.level.comps.find(x => x.id === id);
  if (!c) throw new Error('componente sconosciuto: ' + id);
  const s = sim.parts[id];
  const p = partOf(c);
  if (action === 'press') s.pressed = true;
  else if (action === 'release') s.pressed = false;
  else if (action === 'toggle') {
    if ('pressed' in s && c.type === 'fungo') s.pressed = !s.pressed;
    else { s.on = !s.on; if (s.on) s.tripped = false; }
    if (s.on && sim.mainTrip && (p.protect || c.type === 'sez')) sim.mainTrip = false;
  } else if (action === 'reset' && c.type === 'ft') { s.tripped = false; s.heat = 0; }
  else if (action === 'test' && c.type === 'rcd') {
    if (s.on) {
      const an = analyse(sim);
      if (an.potAt(id + '.1') && an.potAt(id + '.1') !== 'mix') trip(sim, c);
    }
  } else throw new Error('azione non valida: ' + action);
  settle(sim);
}

export function setSupply(sim, on) {
  sim.supply = on;
  if (on) sim.mainTrip = false;
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
      if (c.type === 'ft' && !s.tripped) {
        const hot = Object.values(an.motors).some(m => m === 'hum') || (sim.overload && Object.values(an.motors).some(m => m === 'fwd' || m === 'rev'));
        s.heat = hot ? s.heat + STEP : Math.max(0, s.heat - STEP);
        if (s.heat >= (c.tripAfter || 3)) s.tripped = true;
      }
    });
    const m = sim.level.machine;
    if (m) {
      const dir = an.motors[m.motor];
      const v = (m.speed || 1) * STEP;
      if (dir === 'fwd') sim.pos = Math.min(m.length, sim.pos + v);
      if (dir === 'rev') sim.pos = Math.max(0, sim.pos - v);
    }
    settle(sim);
  }
}

/* ---------- osservazione ---------- */

export function observe(sim) {
  const an = analyse(sim);
  const faults = an.faults.slice();
  if (sim.unstable) faults.push({ code: 'instabile' });
  if (sim.mainTrip) faults.push({ code: 'quadro' });
  const parts = {};
  Object.entries(sim.parts).forEach(([k, v]) => (parts[k] = { ...v }));
  return {
    t: sim.t,
    faults,
    tripped: sim.level.comps.filter(c => sim.parts[c.id].tripped).map(c => c.id),
    loads: an.loads,
    motors: an.motors,
    coils: an.coils,
    parts,
    machine: sim.level.machine ? { pos: sim.pos, atStart: sim.pos <= 0, atEnd: sim.pos >= sim.level.machine.length } : null,
    potential: term => { const p = an.potAt(term); return p === 'mix' ? null : p; },
    supply: sim.supply && !sim.mainTrip,
  };
}

// Per la verifica: il carico `id` resterebbe acceso aprendo le protezioni indicate?
export function stillOnIfOpen(sim, id, protIds) {
  const open = {};
  protIds.forEach(p => (open[p] = 'all'));
  const an = analyse(sim, open);
  return an.loads[id] === 'on' || an.coils[id] === true;
}

export { analyse as analyseV2, connect as connectV2, PARTS };
