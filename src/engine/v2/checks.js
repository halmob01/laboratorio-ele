// Motore v2: verifica di un cablaggio. Stesso formato di evaluate.js: { work, color, safe, stars, pass }.
// Specifica: docs/SPEC-MOTORE-V2.md, sezione 8.

import { makeUF } from '../circuit.js';
import { PHASE_COLORS } from '../wires.js';
import { act, advance, rewind, createSim, observe, setSupply, sourcesOf, stillOnIfOpen } from './sim.js';
import { partOf, POWER_PATH } from './parts.js';
import { measureMatches } from '../steps.js';

const section = () => ({ ok: false, status: 'ko', items: [] });
function finish(sec) {
  if (sec.ok) sec.status = 'ok';
  else if (sec.items.length && sec.items[0].code === 'safe.skipped') sec.status = 'na';
  else sec.status = 'ko';
}

// 'press SB1' | 'wait 5' -> esegue
export function runAction(sim, step) {
  const [a, x] = step.trim().split(/\s+/);
  if (a === 'wait') advance(sim, Number(x));
  else if (a === 'overload') sim.overload = x !== 'off';
  else if (a === 'rewind') rewind(sim);
  else act(sim, a, x);
}

// Confronta l'osservazione con l'atteso; ritorna null se va bene, altrimenti { want, got } della prima differenza.
function mismatch(obs, expect) {
  for (const group of ['motors', 'loads', 'coils']) {
    const want = expect[group];
    if (!want) continue;
    for (const [id, v] of Object.entries(want)) {
      const got = obs[group][id];
      if (got !== v) return { comp: id, want: v, got: got === undefined ? null : got };
    }
  }
  if (expect.tripped) {
    const got = obs.tripped.slice().sort().join(',');
    const want = expect.tripped.slice().sort().join(',');
    if (got !== want) return { comp: 'tripped', want, got };
  }
  if (expect.machine) {
    for (const [k, v] of Object.entries(expect.machine)) {
      if (obs.machine[k] !== v) return { comp: 'machine.' + k, want: v, got: obs.machine[k] };
    }
  }
  return null;
}

// Guasti che fanno fallire una prova (il neutro a terra senza differenziale e' un problema di sicurezza, non di funzionamento).
const BLOCKING = { corto: 'work.short', faseterra: 'work.phaseToEarth', secondarioMisto: 'work.secondaryMixed', instabile: 'work.unstable', caricoTerra: 'work.loadOnEarth' };
const QUADRO = { corto: 'work.short', faseterra: 'work.phaseToEarth' };

// Primo motivo di fallimento in uno stato osservato, oppure null.
function blockingOf(o, allowTrip) {
  const q = o.faults.find(x => x.code === 'quadro');
  if (q) return { code: QUADRO[q.cause] || 'work.short' };
  const f = o.faults.find(x => BLOCKING[x.code]);
  if (f) return f.comp ? { code: BLOCKING[f.code], comp: f.comp } : { code: BLOCKING[f.code] };
  const tr = o.tripped.find(x => !allowTrip.has(x));
  if (tr) return { code: 'work.tripped', comp: tr };
  const burnt = Object.keys(o.loads).find(id => o.loads[id] === 'burnt');
  if (burnt) return { code: 'work.burnt', comp: burnt };
  return null;
}

// Esegue una prova. Ritorna { ok, sim, fail?: { code, ... }, states: [observe...] }.
export function runCheck(level, wires, check) {
  const sim = createSim(level, wires);
  const states = [observe(sim)];
  const stages = check.steps || [{ do: check.do || [], expect: check.expect || {} }];
  const allowTrip = new Set();
  const first = blockingOf(states[0], allowTrip);
  if (first) return { ok: false, sim, states, fail: first };
  for (const st of stages) {
    ((st.expect && st.expect.tripped) || []).forEach(x => allowTrip.add(x));
    for (const step of st.do || []) {
      runAction(sim, step);
      const o = observe(sim);
      states.push(o);
      const f = blockingOf(o, allowTrip);
      if (f) return { ok: false, sim, states, fail: f };
    }
    const o = observe(sim);
    const f = blockingOf(o, allowTrip);
    if (f) return { ok: false, sim, states, fail: f };
    const mm = mismatch(o, st.expect || {});
    if (mm) return { ok: false, sim, states, fail: { code: 'work.checkFail', ...mm } };
  }
  return { ok: true, sim, states };
}

/* ---------- ruoli dei fili per i colori ---------- */

const CTL_TYPES = new Set(['pb', 'pbnc', 'fungo', 'spia', 'fc', 'ri', 'tmr']);
function isCtlTerm(level, term) {
  const [id, t] = term.split('.');
  const c = level.comps.find(x => x.id === id);
  if (!c) return false;
  if (CTL_TYPES.has(c.type)) return true;
  if (c.type === 'km') return ['A1', 'A2', '13', '14', '21', '22'].includes(t);
  if (c.type === 'ft') return ['95', '96', '97', '98'].includes(t);
  return false;
}

export function wireRoles(level, wires) {
  const uf = makeUF();
  wires.forEach(w => uf.u(w.a, w.b));
  level.comps.forEach(c => {
    const p = partOf(c);
    let pairs = [];
    if (POWER_PATH.has(c.type)) pairs = p.power || p.contacts(c, { on: true, tripped: false });
    if (c.type === 'quadro' && c.full) pairs = [['Fi', 'F'], ['Ni', 'N'], ['PEi', 'PE']];
    pairs.forEach(([a, b]) => uf.u(c.id + '.' + a, c.id + '.' + b));
  });
  const roles = {};
  Object.entries(sourcesOf(level)).forEach(([name, term]) => {
    const k = uf.f(term);
    const r = name === 'N' ? 'neutro' : name === 'PE' ? 'terra' : 'fase';
    if (!roles[k] || r === 'fase') roles[k] = r;   // in una rete mista prevale la fase
  });
  level.comps.filter(c => c.type === 'trafo').forEach(c => {
    ['3', '4'].forEach(t => { const k = uf.f(c.id + '.' + t); if (!roles[k]) roles[k] = 'bassa'; });
  });
  // reti senza ruolo: se, con tutti i contatti chiusi, arrivano al secondario di un trasformatore sono a bassa tensione
  const all = makeUF();
  wires.forEach(w => all.u(w.a, w.b));
  const ON = { on: true, pressed: true, left: 1, act: true, tripped: false }, OFF = { on: false, pressed: false, left: 0, act: false, tripped: false };
  level.comps.forEach(c => {
    const p = partOf(c);
    p.contacts(c, ON).concat(p.contacts(c, OFF)).forEach(([a, b]) => all.u(c.id + '.' + a, c.id + '.' + b));
  });
  const low = new Set();
  level.comps.filter(c => c.type === 'trafo').forEach(c => ['3', '4'].forEach(t => low.add(all.f(c.id + '.' + t))));
  return wires.map(w => roles[uf.f(w.a)] || (low.has(all.f(w.a)) ? 'bassa' : 'comando'));
}

export function allowedColorsV2(level, role, wire) {
  const red = level.controlColor === 'rosso' && (isCtlTerm(level, wire.a) || isCtlTerm(level, wire.b)) ? ['rosso'] : [];
  if (role === 'neutro') return ['blu'];
  if (role === 'terra') return ['gv'];
  if (role === 'bassa') return ['marrone', 'nero', 'grigio', 'rosso', 'bianco'];
  return PHASE_COLORS.concat(red);
}

/* ---------- verifica ---------- */

export function evaluateV2(level, wires, ctx = {}) {
  const out = { work: section(), color: section(), safe: section() };
  const add = (sec, code, params) => out[sec].items.push(params ? { code, ...params } : { code });

  if (!wires.length) {
    add('work', 'work.noWires'); add('color', 'color.noWires'); add('safe', 'safe.skipped');
    out.stars = 0; out.pass = false;
    finish(out.work); finish(out.color); finish(out.safe);
    return out;
  }

  /* funziona */
  const runs = (level.checks || []).map(ch => ({ ch, r: runCheck(level, wires, ch) }));
  const failed = runs.filter(x => !x.r.ok);
  if (!failed.length) {
    out.work.ok = true;
    add('work', 'work.allChecksOk', { n: runs.length });
    // letture del multimetro che il livello pretende (misurare prima di dare per buono)
    const missing = (level.measures || []).filter(m => !(ctx.measured || []).some(x => measureMatches(m, x)));
    if (missing.length) { out.work.ok = false; add('work', 'work.measureMissing', { label: missing[0].label, n: missing.length }); }
  } else {
    // un guasto che blocca tutte le prove si dice una volta sola
    const first = failed[0].r.fail;
    if (first.code !== 'work.checkFail' && failed.every(x => x.r.fail.code === first.code)) add('work', first.code, first.comp ? { comp: first.comp } : undefined);
    else {
      failed.slice(0, 3).forEach(({ ch, r }) => add('work', 'work.checkFail', { check: ch.id, label: ch.label, cause: r.fail.code, want: r.fail.want, got: r.fail.got, comp: r.fail.comp }));
      if (failed.length > 3) add('work', 'work.checkMore', { n: failed.length - 3 });
    }
  }

  /* colori */
  const roles = wireRoles(level, wires);
  const bad = [];
  wires.forEach((w, i) => {
    if (!allowedColorsV2(level, roles[i], w).includes(w.c)) bad.push({ code: 'color.wrong', a: w.a, b: w.b, role: roles[i] });
  });
  if (!bad.length) { out.color.ok = true; add('color', 'color.ok', { earth: !!(level.safety && level.safety.earth) }); }
  else {
    bad.slice(0, 3).forEach(b => out.color.items.push(b));
    if (bad.length > 3) add('color', 'color.more', { n: bad.length - 3 });
  }

  /* sicurezza */
  if (!out.work.ok) add('safe', 'safe.skipped');
  else {
    const S = level.safety || {};
    const states = runs.flatMap(x => x.r.states);
    let ok = true;
    const fail = (code, params) => { ok = false; add('safe', code, params); };

    if (S.phaseSwitched) {
      // il neutro di ogni carico indicato e' sempre sul neutro (il comando interrompe la fase)
      const sim = createSim(level, wires);
      const pots = [observe(sim)].concat(states);
      // un carico spento non deve avere la fase su nessun morsetto
      const PH = ['F', 'L1', 'L2', 'L3'];
      const broken = S.phaseSwitched.some(id => {
        const c = level.comps.find(x => x.id === id);
        const p = partOf(c);
        const ts = (p.load || p.coil || []).map(t => id + '.' + t);
        return !pots.every(o => o.loads[id] === 'on' || o.coils[id] === true || !ts.some(t => PH.includes(o.potential(t))));
      });
      if (broken) fail('safe.neutralBroken');
    }
    if (S.pol) {
      // presa: il morsetto L non e' mai sul neutro e il morsetto N non e' mai sulla fase
      const PHS = ['F', 'L1', 'L2', 'L3'];
      const [l, n] = S.pol;
      const swapped = [observe(createSim(level, wires))].concat(states).some(o => o.potential(l) === 'N' || PHS.includes(o.potential(n)));
      if (swapped) fail('safe.socketPolarity');
    }
    if (S.earth) {
      const uf = makeUF();
      wires.forEach(w => uf.u(w.a, w.b));
      S.earth.forEach(([x, y]) => { if (uf.f(x) !== uf.f(y)) fail('safe.noEarth', { comp: x.split('.')[0] }); });
    }
    if (S.never) {
      const both = runs.some(x => x.r.sim.kmHistory.some(on => S.never.some(pair => pair.every(id => on.includes(id)))));
      // prova aggiuntiva: tutti i pulsanti di marcia premuti insieme
      const sim = createSim(level, wires);
      level.comps.filter(c => c.type === 'pb').forEach(c => act(sim, 'press', c.id));
      const both2 = sim.kmHistory.some(on => S.never.some(pair => pair.every(id => on.includes(id))));
      // prova aggiuntiva: un pulsante di marcia premuto e rilasciato, poi un altro (il primo contattore resta chiuso)
      const starts = level.comps.filter(c => c.type === 'pb');
      let both3 = false;
      starts.forEach(a => starts.forEach(b => {
        if (a.id === b.id) return;
        const s3 = createSim(level, wires);
        act(s3, 'press', a.id); act(s3, 'release', a.id); act(s3, 'press', b.id);
        if (s3.kmHistory.some(on => S.never.some(pair => pair.every(id => on.includes(id))))) both3 = true;
      }));
      if (both || both2 || both3) fail('safe.interlock');
    }
    if (S.coilReturn) {
      // il comando sta sul lato fase: il capo A2 di ogni bobina va direttamente al neutro
      const uf = makeUF();
      wires.forEach(w => uf.u(w.a, w.b));
      const n = sourcesOf(level).N;
      S.coilReturn.forEach(id => { if (uf.f(id + '.A2') !== uf.f(n)) fail('safe.coilReturn', { comp: id }); });
    }
    if (level.comps.some(c => c.type === 'motor3')) {
      // a riposo (comandi rilasciati) nessun morsetto del motore e' in tensione
      const sim = createSim(level, wires);
      setSupply(sim, true);
      const o = observe(sim);
      const PH = ['L1', 'L2', 'L3'];
      const live = level.comps.filter(c => c.type === 'motor3').find(c => ['U', 'V', 'W'].some(t => PH.includes(o.potential(c.id + '.' + t))));
      if (live) fail('safe.motorLive', { comp: live.id });
    }
    if (S.stopWins) {
      const sim = createSim(level, wires);
      act(sim, 'press', S.stopWins);
      const running = o => Object.values(o.motors).some(m => m !== 'off') || Object.values(o.coils).some(Boolean);
      let bad = false;
      level.comps.filter(c => c.type === 'pb').forEach(c => {
        act(sim, 'press', c.id);
        if (running(observe(sim))) bad = true;   // si guarda con la marcia ancora premuta
        act(sim, 'release', c.id);
      });
      act(sim, 'release', S.stopWins);
      if (bad || running(observe(sim))) fail('safe.stopNotPriority');
    }
    if (S.emergency) {
      const sim = createSim(level, wires);
      const starts = level.comps.filter(c => c.type === 'pb');
      starts.forEach(c => { act(sim, 'press', c.id); act(sim, 'release', c.id); });
      act(sim, 'toggle', S.emergency);
      starts.forEach(c => act(sim, 'press', c.id));
      let o = observe(sim);
      if (Object.values(o.motors).some(m => m !== 'off') || Object.values(o.coils).some(Boolean)) fail('safe.emergency');
      starts.forEach(c => act(sim, 'release', c.id));
      act(sim, 'toggle', S.emergency);
      o = observe(sim);
      if (Object.values(o.motors).some(m => m !== 'off')) fail('safe.restartAfterEmergency');
    }
    if (S.rcdCovers) {
      const rcds = level.comps.filter(c => c.type === 'rcd').map(c => c.id);
      S.rcdCovers.forEach(id => {
        const run = runs.find(x => { const o = observe(x.r.sim); return o.loads[id] === 'on' || o.coils[id]; });
        if (!run || stillOnIfOpen(run.r.sim, id, rcds)) fail('safe.notCovered', { comp: id });
      });
    }
    if (S.protectedBy) {
      // ogni componente indicato deve fermarsi aprendo la sua protezione (il motore e il comando passano dal salvamotore)
      Object.entries(S.protectedBy).forEach(([id, prot]) => {
        const run = runs.find(x => { const o = observe(x.r.sim); return o.loads[id] === 'on' || o.coils[id] || (o.motors[id] && o.motors[id] !== 'off'); });
        if (!run || stillOnIfOpen(run.r.sim, id, [prot])) fail('safe.notProtected', { comp: id, by: prot });
      });
    }
    if (states.some(o => o.faults.some(f => f.code === 'neutroterra'))) fail('safe.neutralEarth');
    if (ok) { out.safe.ok = true; add('safe', 'safe.ok', { variant: level.safetyVariant || 'v2' }); }
  }

  out.stars = (out.work.ok ? 1 : 0) + (out.color.ok ? 1 : 0) + (out.safe.ok ? 1 : 0);
  out.pass = out.stars === 3;
  finish(out.work); finish(out.color); finish(out.safe);
  out.checks = runs.map(({ ch, r }) => ({ id: ch.id, label: ch.label, ok: r.ok, fail: r.fail || null }));
  return out;
}
