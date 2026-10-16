// Motore v2: verifica di un cablaggio. Stesso formato di evaluate.js: { work, color, safe, stars, pass }.
// Specifica: docs/SPEC-MOTORE-V2.md, sezione 8.

import { makeUF } from '../circuit.js';
import { PHASE_COLORS } from '../wires.js';
import { act, advance, rewind, createSim, observe, setSupply, sourcesOf, stillOnIfOpen, settle, traceValue, processVars, scenarioReport } from './sim.js';
import { partOf, POWER_PATH } from './parts.js';
import { withTuned } from './process.js';
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
  for (const group of ['motors', 'modes', 'loads', 'coils']) {
    const want = expect[group];
    if (!want) continue;
    for (const [id, v] of Object.entries(want)) {
      const got = obs[group][id];
      if (got !== v) return { comp: group === 'modes' ? id + '.mode' : id, want: v, got: got === undefined ? null : got };
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
  if (expect.hmi) {
    const h = obs.hmi || {};
    if (expect.hmi.link !== undefined && !!h.link !== expect.hmi.link) return { comp: 'hmi.link', want: expect.hmi.link, got: !!h.link };
    for (const [id, want] of Object.entries(expect.hmi.alarms || {})) {
      const a = (h.alarms || []).find(x => x.id === id);
      const got = a ? a.state : 'off';
      if (got !== want) return { comp: 'hmi.alarm.' + id, want, got };
    }
    if (expect.hmi.horn !== undefined && !!h.horn !== expect.hmi.horn) return { comp: 'hmi.horn', want: expect.hmi.horn, got: !!h.horn };
    for (const [id, want] of Object.entries(expect.hmi.stale || {})) {
      const v = (h.values || []).find(x => x.id === id);
      if (!v || v.stale !== want) return { comp: 'hmi.stale.' + id, want, got: v ? v.stale : null };
    }
  }
  if (expect.process) {
    for (const [k, v] of Object.entries(expect.process)) {
      const got = obs.process ? obs.process[k] : undefined;
      const ok = Array.isArray(v) ? typeof got === 'number' && got >= v[0] && got <= v[1] : got === v;
      if (!ok) return { comp: 'process.' + k, want: Array.isArray(v) ? v.join('~') : v, got: typeof got === 'number' ? round1(got) : got ?? null };
    }
  }
  return null;
}

const round1 = x => Math.round(x * 10) / 10;

// Grandezze che le prove di un livello guardano nel tracciato (oltre a quelle dichiarate in process.trace).
function traceNamesOf(level, check) {
  const names = new Set((level.process && level.process.trace) || []);
  const stages = check.steps || [{ expect: check.expect || {} }];
  stages.forEach(st => ((st.expect && st.expect.trace) || []).forEach(r => names.add(r.v)));
  return [...names];
}

/**
 * Regole sul tracciato (docs/SPEC-PROCESSI.md, sezione 6). Tempi in secondi dall'inizio della prova.
 *   { v, within: [lo, hi], from?, to? }   { v, min }   { v, max }   { v, maxSwitches }   { v, reaches, by? }   { v, drops, by? }
 * Ritorna null oppure { comp: 'trace.v', rule, want, got, at }.
 */
export function traceMismatch(rows, rules) {
  for (const r of rules || []) {
    const from = r.from ?? 0, to = r.to ?? Infinity;
    const win = rows.filter(x => x.t >= from - 1e-9 && x.t <= to + 1e-9 && r.v in x);
    const fail = (rule, want, got, at) => ({ comp: 'trace.' + r.v, rule, want, got: typeof got === 'number' ? round1(got) : got, at });
    if (!win.length) return fail('noData', null, null, from);
    if (r.within) {
      const bad = win.find(x => x[r.v] < r.within[0] || x[r.v] > r.within[1]);
      if (bad) return fail('within', r.within.join('~'), bad[r.v], bad.t);
    }
    if (r.min !== undefined) {
      const bad = win.find(x => x[r.v] < r.min);
      if (bad) return fail('min', r.min, bad[r.v], bad.t);
    }
    if (r.max !== undefined) {
      const bad = win.reduce((a, x) => (x[r.v] > r.max && (!a || x[r.v] > a[r.v]) ? x : a), null);
      if (bad) return fail('max', r.max, bad[r.v], bad.t);
    }
    if (r.maxSwitches !== undefined) {
      let n = 0;
      for (let k = 1; k < win.length; k++) if (!!win[k][r.v] !== !!win[k - 1][r.v]) n++;
      if (n > r.maxSwitches) return fail('maxSwitches', r.maxSwitches, n);
    }
    if (r.reaches !== undefined || r.drops !== undefined) {
      const by = r.by ?? Infinity;
      const part = win.filter(x => x.t <= by + 1e-9);
      const hit = r.reaches !== undefined ? part.some(x => x[r.v] >= r.reaches) : part.some(x => x[r.v] <= r.drops);
      if (!hit) {
        const vals = part.map(x => x[r.v]);
        return r.reaches !== undefined ? fail('reaches', r.reaches, Math.max(...vals), by) : fail('drops', r.drops, Math.min(...vals), by);
      }
    }
  }
  return null;
}

// Guasti che fanno fallire una prova (il neutro a terra senza differenziale e' un problema di sicurezza, non di funzionamento).
const BLOCKING = { corto: 'work.short', faseterra: 'work.phaseToEarth', secondarioMisto: 'work.secondaryMixed', instabile: 'work.unstable', caricoTerra: 'work.loadOnEarth' };
const QUADRO = { corto: 'work.short', faseterra: 'work.phaseToEarth', cortoDC: 'work.shortDC' };

// Primo motivo di fallimento in uno stato osservato, oppure null.
function blockingOf(o, allowTrip) {
  if (o.cable && o.cable.burnt) return { code: 'work.cableBurnt' };
  const q = o.faults.find(x => x.code === 'quadro');
  if (q) return { code: QUADRO[q.cause] || 'work.short' };
  const f = o.faults.find(x => BLOCKING[x.code]);
  if (f && f.code === 'instabile' && f.cause === 'plc') return { code: 'work.unstablePlc' };
  if (f) return f.comp ? { code: BLOCKING[f.code], comp: f.comp } : { code: BLOCKING[f.code] };
  const tr = o.tripped.find(x => !allowTrip.has(x));
  if (tr) return { code: 'work.tripped', comp: tr };
  const burnt = Object.keys(o.loads).find(id => o.loads[id] === 'burnt');
  if (burnt) return { code: 'work.burnt', comp: burnt };
  return null;
}

// Esegue una prova. Ritorna { ok, sim, fail?: { code, ... }, states: [observe...] }.
export function runCheck(level, wires, check) {
  // una prova puo' fissare i cursori del pannello (check.tuned): vale per le prove che non devono dipendere da dove l'allievo li ha lasciati
  if (check.tuned && level.process) level = withTuned(level, check.tuned);
  const sim = createSim(level, wires);
  if (level.process) {
    sim.traceNames = traceNamesOf(level, check);
    const vars = processVars(sim);
    sim.trace = [Object.fromEntries([['t', sim.t], ...sim.traceNames.map(n => [n, traceValue(sim, n, vars)])])];
  }
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
    const mm = mismatch(o, st.expect || {}) || (st.expect && st.expect.trace ? traceMismatch(sim.trace, st.expect.trace) : null);
    if (mm) return { ok: false, sim, states, fail: { code: 'work.checkFail', ...mm } };
  }
  return { ok: true, sim, states };
}

/* ---------- ruoli dei fili per i colori ---------- */

const CTL_TYPES = new Set(['pb', 'pbnc', 'fungo', 'port', 'spia', 'fc', 'ri', 'tmr', 'kt', 'rs', 'plc', 'sens', 'tx', 'sw']);
function isCtlTerm(level, term) {
  const [id, t] = term.split('.');
  const c = level.comps.find(x => x.id === id);
  if (!c) return false;
  if (CTL_TYPES.has(c.type)) return true;
  if (c.type === 'km') return ['A1', 'A2', '13', '14', '21', '22'].includes(t);
  if (c.type === 'rel') return ['A1', 'A2'].includes(t);
  if (c.type === 'ft') return ['95', '96', '97', '98'].includes(t);
  return false;
}

// In continua: i fili sulla rete del + di una batteria sono positivi (rossi), su quella del - negativi (neri);
// una rete che le tocca entrambe (il punto tra due batterie in serie) o nessuna puo' avere tutti e due i colori.
function wireRolesDC(level, wires) {
  const uf = makeUF();
  wires.forEach(w => uf.u(w.a, w.b));
  const pos = new Set(), neg = new Set();
  level.comps.filter(c => c.type === 'batt').forEach(c => { pos.add(uf.f(c.id + '.+')); neg.add(uf.f(c.id + '.-')); });
  return wires.map(w => { const k = uf.f(w.a); return pos.has(k) && !neg.has(k) ? 'dcpos' : neg.has(k) && !pos.has(k) ? 'dcneg' : 'dc'; });
}

export function wireRoles(level, wires) {
  if (level.dc) return wireRolesDC(level, wires);
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
  if (role === 'dcpos') return ['rosso'];
  if (role === 'dcneg') return ['nero'];
  if (role === 'dc') return ['rosso', 'nero'];
  if (role === 'neutro') return ['blu'];
  if (role === 'terra') return ['gv'];
  if (role === 'bassa') return ['marrone', 'nero', 'grigio', 'rosso', 'bianco'];
  return PHASE_COLORS.concat(red);
}

/* ---------- verifica ---------- */

// Le portate scelte dall'allievo (ctx.ratings: { idInterruttore: A }) diventano la portata di partenza delle prove.
const withRatings = (level, ratings) => (ratings && Object.keys(ratings).length
  ? { ...level, comps: level.comps.map(c => (ratings[c.id] ? { ...c, in: ratings[c.id] } : c)) }
  : level);

// I programmi scritti dall'allievo (ctx.programs: { idPLC: [gradini] }) prendono il posto di quelli del livello.
const withPrograms = (level, programs) => (programs && Object.keys(programs).length
  ? { ...level, comps: level.comps.map(c => (c.type === 'plc' && programs[c.id] ? { ...c, program: programs[c.id] } : c)) }
  : level);

export function evaluateV2(level, wires, ctx = {}) {
  level = withTuned(withPrograms(withRatings(level, ctx.ratings), ctx.programs), ctx.tuned);
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
  if (level.scenario) {
    // turno a guasti: si giudica la partita vera (la simulazione viva della sessione), non una prova scritta
    const rep = ctx.liveSim && scenarioReport(ctx.liveSim);
    if (failed.length) failed.slice(0, 3).forEach(({ ch, r }) => add('work', 'work.checkFail', { check: ch.id, label: ch.label, cause: r.fail.code, want: r.fail.want, got: r.fail.got, comp: r.fail.comp }));
    else if (!rep || rep.t === 0) add('work', 'work.scenarioNone');
    else if (!rep.done) add('work', 'work.scenarioRunning', { left: Math.ceil(rep.duration - rep.t) });
    else {
      const open = rep.faults.find(f => f.open), late = rep.faults.find(f => f.late);
      const o = observe(ctx.liveSim);
      const mm = level.scenario.expect ? (mismatch(o, level.scenario.expect) || (level.scenario.expect.trace ? traceMismatch(ctx.liveSim.trace, level.scenario.expect.trace) : null)) : null;
      if (open) add('work', 'work.scenarioOpen', { label: open.label });
      else if (late) add('work', 'work.scenarioLate', { label: late.label, delay: Math.round(late.delay), max: late.max });
      else if (mm) add('work', 'work.checkFail', { check: 'turno', label: 'Il turno', cause: 'work.checkFail', want: mm.want, got: mm.got, comp: mm.comp, ...(mm.rule ? { rule: mm.rule, at: mm.at } : {}) });
      else { out.work.ok = true; add('work', 'work.scenarioOk', { n: rep.faults.length }); }
    }
  } else if (!failed.length) {
    out.work.ok = true;
    add('work', 'work.allChecksOk', { n: runs.length });
    // letture del multimetro che il livello pretende (misurare prima di dare per buono)
    const missing = (level.measures || []).filter(m => !(ctx.measured || []).some(x => measureMatches(m, x)));
    if (missing.length) { out.work.ok = false; add('work', 'work.measureMissing', { label: missing[0].label, n: missing.length }); }
    if ((ctx.faultOn || []).length) { out.work.ok = false; add('work', 'work.faultActive', { comp: ctx.faultOn[0] }); }
    // il pannello operatore scollegato mostra dati vecchi: l'impianto non si consegna cosi'
    if ((ctx.hmiOff || []).length) { out.work.ok = false; add('work', 'work.hmiOffline', { comp: ctx.hmiOff[0] }); }
  } else {
    // un guasto che blocca tutte le prove si dice una volta sola
    const first = failed[0].r.fail;
    if (first.code !== 'work.checkFail' && failed.every(x => x.r.fail.code === first.code)) add('work', first.code, first.comp ? { comp: first.comp } : undefined);
    else {
      failed.slice(0, 3).forEach(({ ch, r }) => add('work', 'work.checkFail', { check: ch.id, label: ch.label, cause: r.fail.code, want: r.fail.want, got: r.fail.got, comp: r.fail.comp, ...(r.fail.rule ? { rule: r.fail.rule, at: r.fail.at } : {}) }));
      if (failed.length > 3) add('work', 'work.checkMore', { n: failed.length - 3 });
    }
  }

  /* colori */
  const roles = wireRoles(level, wires);
  const bad = [];
  wires.forEach((w, i) => {
    if (!allowedColorsV2(level, roles[i], w).includes(w.c)) bad.push({ code: 'color.wrong', a: w.a, b: w.b, role: roles[i] });
  });
  if (!bad.length) { out.color.ok = true; add('color', 'color.ok', level.dc ? { dc: true } : { earth: !!(level.safety && level.safety.earth) }); }
  else {
    bad.slice(0, 3).forEach(b => out.color.items.push(b));
    if (bad.length > 3) add('color', 'color.more', { n: bad.length - 3 });
  }

  /* sicurezza */
  // nei livelli a turno le regole di sicurezza si controllano appena le prove sul cablaggio passano, senza aspettare la fine del turno
  if (!out.work.ok && !(level.scenario && !failed.length)) add('safe', 'safe.skipped');
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
    if (S.deadWork && (ctx.liveEdits || []).length) fail('safe.liveWork', { comp: S.deadWork[0] });
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
    if (S.emergencyHardwired) {
      // l'arresto di emergenza non passa dal programma: con le uscite del PLC forzate tutte a 1 la macchina si ferma lo stesso
      const { stop, start = [] } = S.emergencyHardwired;
      const sim = createSim(level, wires);
      sim.forcePlc = 'allOn';
      settle(sim);
      start.forEach(a => { act(sim, 'press', a); act(sim, 'release', a); });
      act(sim, 'toggle', stop);
      const o = observe(sim);
      const contactorOn = level.comps.some(c => c.type === 'km' && o.coils[c.id]);
      if (Object.values(o.motors).some(m => m !== 'off') || contactorOn) fail('safe.emergencyInProgram');
    }
    if (S.outputsNeverTogether) {
      // uscite del PLC che non devono mai essere accese insieme (stella e triangolo): in nessuna prova, nemmeno per una scansione
      const bad = runs.some(x => x.r.sim.qHistory.some(on => S.outputsNeverTogether.some(pair => pair.every(id => on.includes(id)))));
      if (bad) fail('safe.outputsTogether');
    }
    if (S.weldedInterlock) {
      // un contattore incollato non deve lasciar chiudere l'altro: il contatto NC di ciascuno sta nel circuito di comando dell'altro
      const { pairs, start = [], stop = [] } = S.weldedInterlock;
      let bad = false;
      pairs.forEach(([a, b]) => [[a, b], [b, a]].forEach(([x, y]) => {
        const sim = createSim(level, wires);
        start.forEach(st => runAction(sim, st));
        for (let i = 0; i < 20 && !sim.parts[x].on; i++) advance(sim, 1);
        if (!sim.parts[x].on) return;
        act(sim, 'weld', x);
        advance(sim, 10);
        stop.forEach(st => runAction(sim, st));
        start.forEach(st => runAction(sim, st));
        advance(sim, 10);
        if (sim.kmHistory.some(on => on.includes(x) && on.includes(y)) || sim.parts[y].on) bad = true;
      }));
      if (bad) fail('safe.interlock');
    }
    if (S.coilReturn) {
      // il comando sta sul lato fase: il capo A2 di ogni bobina va direttamente al neutro
      const uf = makeUF();
      wires.forEach(w => uf.u(w.a, w.b));
      const n = sourcesOf(level).N;
      S.coilReturn.forEach(id => { if (uf.f(id + '.A2') !== uf.f(n)) fail('safe.coilReturn', { comp: id }); });
    }
    if (level.comps.some(c => c.type === 'motor3' || c.type === 'motor6')) {
      // a riposo (comandi rilasciati) nessun morsetto del motore e' in tensione
      const sim = createSim(level, wires);
      setSupply(sim, true);
      const o = observe(sim);
      const PH = ['L1', 'L2', 'L3'];
      const live = level.comps.filter(c => c.type === 'motor3' || c.type === 'motor6').find(c => partOf(c).motor.some(t => PH.includes(o.potential(c.id + '.' + t))));
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
    if (S.dualChannel) {
      // i due canali sono fili distinti: nessun filo li unisce senza passare da un contatto del comando
      const uf = makeUF();
      wires.forEach(w => uf.u(w.a, w.b));
      S.dualChannel.forEach(([a, b]) => { if (uf.f(a) === uf.f(b)) fail('safe.singleChannel', { comp: a.split('.')[0] }); });
    }
    if (S.redundant) {
      // due contattori (o relè) in serie sul carico: se uno resta incollato l'altro deve fermare la macchina da solo
      const { stop, load, pair } = S.redundant;
      pair.forEach(stuck => {
        const sim = createSim(level, wires);
        (S.redundant.start || []).forEach(a => act(sim, a.split(' ')[0], a.split(' ')[1]));
        act(sim, 'weld', stuck);
        act(sim, 'toggle', stop);
        const o = observe(sim);
        if (o.loads[load] === 'on' || (o.motors[load] && o.motors[load] !== 'off')) fail('safe.notRedundant', { comp: stuck });
      });
    }
    if (S.restartNeedsReset) {
      // dopo l'arresto di sicurezza la macchina non riparte da sola: serve il riarmo (vale per ogni dispositivo di arresto)
      const { reset, load } = S.restartNeedsReset;
      [].concat(S.restartNeedsReset.stop).forEach(stop => {
        const sim = createSim(level, wires);
        const running = () => { const o = observe(sim); return o.loads[load] === 'on' || (o.motors[load] && o.motors[load] !== 'off'); };
        if (reset) { act(sim, 'press', reset); act(sim, 'release', reset); }
        (S.restartNeedsReset.start || []).forEach(a => { act(sim, 'press', a); act(sim, 'release', a); });
        if (!running()) return;
        act(sim, 'toggle', stop);
        if (running()) fail('safe.stopNotHeld');
        act(sim, 'toggle', stop);
        if (running()) fail('safe.restartByItself');
        if (reset) { act(sim, 'press', reset); act(sim, 'release', reset); if (!running()) fail('safe.noRestart'); }
      });
    }
    if (S.outputsSeries) {
      // le due uscite del relè di sicurezza sono in serie: i morsetti 13 e 23 non stanno sullo stesso filo
      const uf = makeUF();
      wires.forEach(w => uf.u(w.a, w.b));
      S.outputsSeries.forEach(id => { if (uf.f(id + '.13') === uf.f(id + '.23')) fail('safe.outputsParallel', { comp: id }); });
    }
    if (S.allContacts) {
      // un dispositivo a due canali deve avere tutti e quattro i morsetti collegati
      S.allContacts.forEach(id => {
        const unused = ['1', '2', '3', '4'].some(t => !wires.some(w => w.a === id + '.' + t || w.b === id + '.' + t));
        if (unused) fail('safe.contactUnused', { comp: id });
      });
    }
    if (S.feedbackMonitored) {
      // contattore incollato: dopo l'arresto il relè non deve riarmarsi (la retroazione NC e' aperta)
      const { km, stop, reset, rs } = S.feedbackMonitored;
      const sim = createSim(level, wires);
      act(sim, 'press', reset); act(sim, 'release', reset);
      act(sim, 'weld', km);
      act(sim, 'toggle', stop);
      act(sim, 'toggle', stop);
      act(sim, 'press', reset); act(sim, 'release', reset);
      if (sim.parts[rs].on) fail('safe.noFeedback', { comp: km });
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
