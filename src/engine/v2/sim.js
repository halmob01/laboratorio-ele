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
    cableHeat: 0,          // riscaldamento del cavo della linea (level.cable), in secondi di sovracorrente
    cableBurnt: false,
  };
  settle(sim);
  return sim;
}

export function setWires(sim, wires) {
  sim.wires = wires.slice();
  sim.burnt = {};
  sim.unstable = false;
  sim.mainTrip = false;
  sim.kmHistory = [];
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
      else { coils[id] = st === 'on'; if (st === 'burnt') burntNow.push(id); }   // una bobina sotto sovratensione si brucia
      // un carico tra una fase e la terra si accende, ma la corrente torna dalla terra: e' un guasto
      const px = potAt(x), py = potAt(y);
      if (v > 0 && (px === 'PE' || py === 'PE')) faults.push({ code: 'caricoTerra', comp: id });
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
  // dispersioni verso terra: attive se il punto guasto e' in tensione (la corrente scorre fino alla terra)
  const leaks = [];
  level.comps.forEach(c => {
    const s = sim.parts[c.id];
    if (c.type === 'gu' && s && s.on && isPhase(potAt(c.at))) leaks.push({ id: c.id, mA: s.mA });
  });
  return { uf, pots, potAt, volt, faults, loads, coils, motors, trafoOn, burntNow, leaks };
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
    sim.mainTripCause = 'corto';
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
    an.burntNow.forEach(id => (sim.burnt[id] = true));
    if (sim.kmHistory.length > 200) sim.kmHistory.splice(0, sim.kmHistory.length - 200);
    sim.kmHistory.push(comps.filter(c => c.type === 'km' && sim.parts[c.id].on).map(c => c.id));
    if (protect(sim, an)) continue;
    // bobine una alla volta, in ordine di livello
    let changed = false;
    for (const c of comps) {
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
  else if (action === 'test' && c.type === 'rcd') {
    if (s.on) {
      const an = analyse(sim);
      // il tasto di prova funziona solo se il differenziale e' alimentato tra fase e neutro
      if (an.volt(id + '.1', id + '.N1') === 230) trip(sim, c);
    }
  } else throw new Error('azione non valida: ' + action);
  settle(sim);
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
      if (c.type === 'ft' && !s.tripped) {
        // scalda solo per i motori che passano davvero dai suoi poli
        const without = analyse(sim, { [c.id]: 'power' });
        const mine = Object.keys(an.motors).filter(mid => an.motors[mid] !== without.motors[mid]);
        const hot = mine.some(mid => an.motors[mid] === 'hum' || (sim.overload && (an.motors[mid] === 'fwd' || an.motors[mid] === 'rev')));
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
    settle(sim);
  }
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
  if (sim.unstable) faults.push({ code: 'instabile' });
  if (sim.mainTrip) faults.push({ code: 'quadro', cause: sim.mainTripCause || 'corto' });
  const parts = {};
  Object.entries(sim.parts).forEach(([k, v]) => (parts[k] = { ...v }));
  return {
    t: sim.t,
    faults,
    tripped: sim.level.comps.filter(c => sim.parts[c.id].tripped).map(c => c.id),
    loads: { ...an.loads, ...Object.fromEntries(Object.keys(sim.burnt).filter(id => !(id in an.loads)).map(id => [id, 'burnt'])) },
    motors: an.motors,
    coils: an.coils,
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
const OHM = { lamp: 530, spia: 8000, presa: 60, bell: 30, ri: 1500, rel: 1500, tmr: 1500, km: 1200, motor3: 12 };

// Elementi che il multimetro attraversa: carichi, bobine e avvolgimenti dei motori.
function windings(sim) {
  const out = [];
  sim.level.comps.forEach(c => {
    const p = partOf(c);
    const ohm = c.ohm || OHM[c.type] || 500;
    if (p.load || p.coil) { const [x, y] = p.load || p.coil; out.push({ a: c.id + '.' + x, b: c.id + '.' + y, ohm, id: c.id }); }
    if (p.motor) for (let i = 0; i < p.motor.length; i++) for (let j = i + 1; j < p.motor.length; j++) out.push({ a: c.id + '.' + p.motor[i], b: c.id + '.' + p.motor[j], ohm, id: c.id });
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
