// Modelli per la casa intelligente (Modulo 5): `zone` (clima per zone) e `energia` ampliato (gestione dei carichi, fasce orarie).
// Prima il modello da solo, poi un impianto completo con il PLC, per mostrare che i livelli 5.10 e 5.11 si possono costruire sopra.

import test from 'node:test';
import assert from 'node:assert/strict';
import { newProcess, stepProcess } from '../src/engine/v2/process.js';
import { createSim, advance, observe } from '../src/engine/v2/index.js';

const run = (model, init, act, seconds, params = {}) => {
  const proc = { model, init, params };
  return stepProcess(proc, newProcess(proc), act, seconds).state;
};
const T = (...ids) => Object.fromEntries(ids.map(i => [i, { l: i }]));
const C = (id, type, terms, extra = {}) => ({ id, type, short: id, title: id, terms: T(...terms), ...extra });
const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c: c || 'marrone' }));

/* ---------- zone ---------- */

test('zone: con valvola e pompa la stanza si scalda verso Text + gain/loss; senza calore si raffredda verso Text', () => {
  const hot = run('zone', { T1: 16 }, { pump: 1, v1: 1 }, 3600 * 3);
  assert.ok(Math.abs(hot.T1 - 29) < 0.5, 'regime: 5 + 1,2/0,05 = 29 gradi, trovato ' + hot.T1);
  assert.ok(hot.T2 < 6, 'la zona 2 senza valvola si raffredda');
  const cold = run('zone', { T1: 21 }, {}, 600);
  assert.ok(cold.T1 < 21 && cold.T1 > 5);
});

test('zone: la finestra aperta fa disperdere di piu\'', () => {
  const shut = run('zone', { T1: 21 }, {}, 300);
  const open = run('zone', { T1: 21 }, { w1: 1 }, 300);
  assert.ok(open.T1 < shut.T1 - 3, `finestra aperta ${open.T1}, chiusa ${shut.T1}`);
});

test('zone: la pompa che gira con tutte le valvole chiuse si guasta dopo dryMax secondi e non scalda piu\'', () => {
  const s = run('zone', { T1: 16 }, { pump: 1 }, 59);
  assert.equal(s.broken, 0);
  const b = run('zone', { T1: 16 }, { pump: 1 }, 61);
  assert.equal(b.broken, 1);
  const after = run('zone', b, { pump: 1, v1: 1 }, 600);
  assert.ok(after.T1 < 16, 'guasta: niente calore anche con la valvola aperta');
});

test('zone: con valveT la valvola si apre piano, e intanto la pompa lavora a vuoto', () => {
  const s = run('zone', {}, { pump: 1, v1: 1 }, 60, { valveT: 120 });
  assert.ok(Math.abs(s.p1 - 0.5) < 0.01);
  assert.equal(s.broken, 0, 'il breve funzionamento a vuoto all\'apertura non basta a guastarla');
  const early = run('zone', {}, { pump: 1, v1: 1 }, 600, { valveT: 1200 });
  assert.equal(early.broken, 1, 'valvola troppo lenta: la pompa parte prima che ci sia portata');
});

test('zone: notte tra le 22 e le 6', () => {
  const proc = { model: 'zone' };
  const vars = h => ({ ...newProcess(proc).params, ...newProcess(proc).state, hour: h });
  const night = h => (h >= 22 || h < 6 ? 1 : 0);
  assert.equal(night(vars(23).hour), 1);
  assert.equal(night(vars(12).hour), 0);
});

// Impianto: due stanze, un trasmettitore per stanza (0-40 gradi), un contatto della finestra della zona 1, PLC con le valvole
// e il consenso alla pompa. Programma: isteresi 20-22 gradi per zona; finestra aperta = valvola chiusa; pompa = almeno una valvola.
const ZONE_LEVEL = {
  id: 'zz-zone', engine: 2, quadroOnly: true,
  comps: [
    C('Q', 'quadro', ['F', 'N', 'PE']),
    C('PLC', 'plc', ['A1', 'A2', 'I0', 'IC', 'AI0+', 'AI0-', 'AI1+', 'AI1-', 'Q0A', 'Q0B', 'Q1A', 'Q1B', 'Q2A', 'Q2B']),
    C('TT1', 'tx', ['+', '-'], { sense: { v: 'T1', lo: 0, hi: 40 } }),
    C('TT2', 'tx', ['+', '-'], { sense: { v: 'T2', lo: 0, hi: 40 } }),
    C('W1', 'sw', ['a', 'b']),
  ],
  process: {
    model: 'zone', params: { n: 2 }, init: { hour: 17, T1: 16, T2: 16 },
    actuators: { pump: { plc: 'PLC.Q0' }, v1: { plc: 'PLC.Q1' }, v2: { plc: 'PLC.Q2' }, w1: { ctl: 'W1' } },
    trace: ['T1', 'T2', 'PLC.Q0'],
  },
};
const ZONE_WIRES = W([['Q.F', 'PLC.A1'], ['PLC.A2', 'Q.N', 'blu'], ['TT1.+', 'PLC.AI0+'], ['TT1.-', 'PLC.AI0-'], ['TT2.+', 'PLC.AI1+'], ['TT2.-', 'PLC.AI1-'],
  ['Q.F', 'W1.a'], ['W1.b', 'PLC.I0'], ['PLC.IC', 'Q.N', 'blu']]);
const ZONE_PROG = [
  { if: ['ge', 'AI0', 3.6], do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: 0, hi: 40 }] },
  { if: ['ge', 'AI1', 3.6], do: [{ op: 'scale', in: 'AI1', out: 'MW1', lo: 0, hi: 40 }] },
  { if: ['lt', 'MW0', 20], do: [{ op: 'set', a: 'Q1' }] },
  { if: ['gt', 'MW0', 22], do: [{ op: 'reset', a: 'Q1' }] },
  { if: 'I0', do: [{ op: 'reset', a: 'Q1' }] },
  { if: ['lt', 'MW1', 20], do: [{ op: 'set', a: 'Q2' }] },
  { if: ['gt', 'MW1', 22], do: [{ op: 'reset', a: 'Q2' }] },
  { if: ['or', 'Q1', 'Q2'], do: [{ op: 'coil', a: 'Q0' }] },
];
const zoneSim = prog => createSim({ ...ZONE_LEVEL, comps: ZONE_LEVEL.comps.map(c => (c.type === 'plc' ? { ...c, program: prog } : c)) }, ZONE_WIRES);

test('zone con il PLC: le stanze restano tra 19,5 e 22,5 gradi, la pompa non lavora mai a vuoto', () => {
  const sim = zoneSim(ZONE_PROG);
  advance(sim, 1200);
  const late = sim.trace.filter(r => r.t > 600);
  assert.ok(late.length > 100);
  late.forEach(r => { assert.ok(r.T1 > 19.5 && r.T1 < 22.5, 'T1 ' + r.T1); assert.ok(r.T2 > 19.5 && r.T2 < 22.5, 'T2 ' + r.T2); });
  const o = observe(sim).process;
  assert.equal(o.broken, false);
  assert.equal(o.dry, 0);
});

test('zone con il PLC: finestra aperta nella zona 1, la valvola si chiude e la zona 2 resta calda', () => {
  const sim = zoneSim(ZONE_PROG);
  advance(sim, 400);
  sim.parts.W1.on = true;
  advance(sim, 300);
  const o = observe(sim);
  assert.equal(o.parts.PLC.q.Q1, false);
  assert.ok(o.process.T1 < 15, 'la stanza con la finestra aperta si raffredda: ' + o.process.T1);
  assert.ok(o.process.T2 > 19.5);
});

test('zone con il PLC: un consenso alla pompa sempre acceso la fa lavorare a vuoto quando le stanze sono calde', () => {
  const always = ZONE_PROG.slice(0, -1).concat([{ if: ['ge', 'AI0', 0], do: [{ op: 'coil', a: 'Q0' }] }]);
  const sim = zoneSim(always);
  advance(sim, 900);
  assert.equal(observe(sim).process.broken, true);
});

/* ---------- energia ampliato ---------- */

test('energia: pompa di calore, lavatrice e forno serale si sommano ai consumi; i livelli vecchi non cambiano', () => {
  const base = run('energia', { hour: 3 }, { house: 1 }, 1).load;
  assert.ok(Math.abs(run('energia', { hour: 3 }, { house: 1, hp: 1 }, 1).load - base - 1.5) < 0.01);
  assert.ok(Math.abs(run('energia', { hour: 3 }, { house: 1, wash: 1 }, 1).load - base - 2) < 0.01);
  assert.equal(run('energia', { hour: 19.6 }, { house: 1 }, 1).load, run('energia', { hour: 19.6 }, { house: 1 }, 1, { ovenKw: 0 }).load, 'forno a 0 kW di base');
  const oven = run('energia', { hour: 19.6 }, { house: 1 }, 1, { ovenKw: 2.5 }).load - run('energia', { hour: 19.6 }, { house: 1 }, 1).load;
  assert.ok(Math.abs(oven - 2.5) < 0.01);
});

test('energia: fasce orarie, il prelievo costa di piu\' tra le 8 e le 19', () => {
  const day = run('energia', { hour: 10 }, { pv: 0, house: 1, wash: 1 }, 60);
  const night = run('energia', { hour: 22 }, { pv: 0, house: 1, wash: 1 }, 60);
  assert.ok(day.cost > night.cost * 1.3, `giorno ${day.cost}, notte ${night.cost}`);
});

// Gestione dei carichi: contatore 6 kW, colonnina (3,7 kW) e pompa di calore (1,5 kW) comandate dal PLC, forno di 3 kW
// che le persone accendono dalle 19:30 alle 20:30. Priorita': si stacca prima la colonnina, poi la pompa di calore; si riattaccano solo
// con margine e dopo 30 s di margine continuo (TON), altrimenti pendolano.
const LOAD_LEVEL = {
  id: 'zz-carichi', engine: 2, quadroOnly: true,
  comps: [
    C('Q', 'quadro', ['F', 'N', 'PE']),
    C('PLC', 'plc', ['A1', 'A2', 'AI0+', 'AI0-', 'Q0A', 'Q0B', 'Q1A', 'Q1B']),
    C('TT', 'tx', ['+', '-'], { sense: { v: 'grid', lo: -6, hi: 6 } }),
  ],
  process: {
    model: 'energia', params: { pvKw: 0, ovenKw: 3, limit: 6 }, init: { hour: 17 },
    actuators: { house: { value: 1 }, ev: { plc: 'PLC.Q0' }, hp: { plc: 'PLC.Q1' } },
    trace: ['grid', 'PLC.Q0', 'PLC.Q1'],
  },
};
const LOAD_WIRES = W([['Q.F', 'PLC.A1'], ['PLC.A2', 'Q.N', 'blu'], ['TT.+', 'PLC.AI0+'], ['TT.-', 'PLC.AI0-']]);
const loadProg = delay => [
  { if: ['ge', 'AI0', 3.6], do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: -6000, hi: 6000 }] },
  // stacco: sopra 5800 W va via la colonnina; se non basta (colonnina gia' staccata) la pompa di calore
  { if: ['and', ['gt', 'MW0', 5800], 'Q0'], do: [{ op: 'reset', a: 'Q0' }] },
  { if: ['and', ['gt', 'MW0', 5800], ['not', 'Q0']], do: [{ op: 'reset', a: 'Q1' }] },
  // riattacco con margine, prima la pompa di calore (piu' importante), poi la colonnina; con `delay` il margine deve durare
  { if: ['lt', 'MW0', 4200], do: delay ? [{ op: 'ton', id: 'T1', pt: delay }] : [{ op: 'move', v: 1, out: 'MW2' }] },
  { if: delay ? 'T1' : ['lt', 'MW0', 4200], do: [{ op: 'set', a: 'Q1' }] },
  { if: ['and', ['lt', 'MW0', 2000], 'Q1'], do: delay ? [{ op: 'ton', id: 'T2', pt: delay }] : [{ op: 'move', v: 1, out: 'MW3' }] },
  { if: delay ? 'T2' : ['and', ['lt', 'MW0', 2000], 'Q1'], do: [{ op: 'set', a: 'Q0' }] },
];
const loadSim = prog => createSim({ ...LOAD_LEVEL, comps: LOAD_LEVEL.comps.map(c => (c.type === 'plc' ? { ...c, program: prog } : c)) }, LOAD_WIRES);
const switches = (trace, v) => trace.reduce((n, r, i) => n + (i && r[v] !== trace[i - 1][v] ? 1 : 0), 0);

const inOven = r => { const h = (17 + r.t * 24 / 1440) % 24; return h >= 19.6 && h < 20.4; };

test('gestione dei carichi: con priorita\' e ritardo il contatore non stacca, durante il forno si staccano colonnina e pompa di calore', () => {
  const sim = loadSim(loadProg(30));
  advance(sim, 540);                                   // dalle 17 alle 2 di notte
  const o = observe(sim).process;
  assert.equal(o.blackout, false);
  const oven = sim.trace.filter(inOven);
  assert.ok(oven.length > 20);
  assert.ok(oven.every(r => r['PLC.Q0'] === 0), 'colonnina staccata durante il forno');
  assert.ok(oven.some(r => r['PLC.Q1'] === 0), 'anche la pompa di calore, perche\' la colonnina non basta');
  assert.ok(sim.trace.filter(r => !inOven(r)).every(r => r.grid < 6), 'mai oltre il limite fuori dal forno');
  assert.ok(o.eEv > 2, 'la colonnina carica prima e dopo il forno: ' + o.eEv);
  assert.ok(switches(sim.trace, 'PLC.Q0') <= 6 && switches(sim.trace, 'PLC.Q1') <= 6);
});

test('gestione dei carichi: senza il ritardo i carichi pendolano (si staccano e riattaccano di continuo)', () => {
  const quick = loadSim(loadProg(0));
  advance(quick, 540);
  const slow = loadSim(loadProg(30));
  advance(slow, 540);
  const n = s => switches(s.trace, 'PLC.Q0') + switches(s.trace, 'PLC.Q1');
  assert.ok(n(quick) > 20 && n(quick) > 5 * n(slow), `senza ritardo ${n(quick)}, con ritardo ${n(slow)}`);
});
