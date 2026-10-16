// Linea di prelievo e deposito (c43): modello, sequenza di passi, errori tipici.

import test from 'node:test';
import assert from 'node:assert/strict';
import { newProcess, stepProcess } from '../src/engine/v2/process.js';
import { createSim, advance, observe, act, evaluateV2 } from '../src/engine/v2/index.js';
import { levels } from '../src/content/index.js';

const L = levels.find(l => l.id === 'c43-linea');
const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
const sol = L.solutionPrograms.PLC;
const withProg = program => ({ ...L, comps: L.comps.map(c => (c.type === 'plc' ? { ...c, program } : c)) });
const swap = (i, expr) => sol.map((r, k) => (k === i ? { ...r, if: expr } : r));

const model = () => { const proc = { model: 'linea' }; let ps = newProcess(proc); return (a, t) => (ps = stepProcess(proc, ps, a, t)).state; };

test('linea: movimenti, presa e deposito del pezzo', () => {
  const m = model();
  assert.equal(m({ down: 1 }, 2.1).z, 1);
  let s = m({ down: 1, grip: 1 }, 1.1);
  assert.equal(s.holding, 1);
  m({ grip: 1 }, 2.1);
  m({ grip: 1, shift: 1 }, 2.6);
  m({ grip: 1, shift: 1, down: 1 }, 2.1);
  s = m({ shift: 1, down: 1 }, 1.1);
  assert.deepEqual([s.out, s.dropped, s.crash, s.holding], [1, 0, 0, 0]);
});

test('linea: urto se il braccio si sposta da basso, pezzo caduto se la pinza si apre lontano dal deposito', () => {
  const m = model();
  m({ down: 1 }, 2.1);
  assert.equal(m({ down: 1, shift: 1 }, 1).crash, 1);
  const m2 = model();
  m2({ down: 1, grip: 1 }, 3);
  m2({ grip: 1 }, 2.1);
  const s = m2({}, 1.1);                                  // pinza aperta a mezz'aria
  assert.deepEqual([s.dropped, s.out], [1, 0]);
});

test('linea: un nuovo pezzo arriva dopo feedEvery secondi dal momento in cui la pinza si e\' liberata', () => {
  const m = model();
  m({ down: 1, grip: 1 }, 3);                              // preso
  assert.equal(m({ grip: 1 }, 2.1).feed, 0);
  assert.equal(m({ grip: 1 }, 20).feed, 0, 'finche\' il pezzo e\' nella pinza non ne arriva un altro');
  m({ grip: 1, shift: 1 }, 2.6);
  m({ grip: 1, shift: 1, down: 1 }, 2.1);
  assert.equal(m({ shift: 1, down: 1 }, 1.1).out, 1);
  assert.equal(m({ shift: 1 }, 3).feed, 0);
  assert.equal(m({ shift: 1 }, 3).feed, 1);
});

test('c43: la soluzione passa le prove, in tempo ragionevole', () => {
  const t0 = performance.now();
  const r = evaluateV2(L, W(L.solution), { programs: L.solutionPrograms });
  assert.equal(r.pass, true, JSON.stringify(r.work.items));
  // ~50 ms su una macchina normale: il margine largo evita falsi allarmi con la suite in parallelo su una macchina lenta
  const ms = performance.now() - t0;
  assert.ok(ms < 2000, ms + ' ms per le prove di c43');
});

test('c43: senza le transizioni nessun pezzo; il ciclo parte solo da pezzo pronto, braccio su e al prelievo', () => {
  const r = evaluateV2(L, W(L.solution), {});
  assert.equal(r.work.ok, false);
  const sim = createSim(withProg(sol), W(L.solution));
  act(sim, 'press', 'SB1'); act(sim, 'release', 'SB1');
  advance(sim, 4);
  assert.ok(observe(sim).process.z > 0, 'parte');
});

test('c43: se dal passo "sali" si va avanti senza aspettare il braccio su, il braccio si sposta da basso: urto', () => {
  const i = sol.findIndex(r => r.do[0].op === 'reset' && r.do[0].a === 'M3');
  const bad = swap(i, 'M3');
  const r = evaluateV2(L, W(L.solution), { programs: { PLC: bad } });
  assert.equal(r.work.ok, false);
  const sim = createSim(withProg(bad), W(L.solution));
  act(sim, 'press', 'SB1'); act(sim, 'release', 'SB1');
  advance(sim, 40);
  assert.equal(observe(sim).process.crash, true);
});

test('c43: se non si aspetta la pinza chiusa il pezzo non si prende', () => {
  const i = sol.findIndex(r => r.do[0].op === 'reset' && r.do[0].a === 'M2');
  const bad = swap(i, 'M2');
  const sim = createSim(withProg(bad), W(L.solution));
  act(sim, 'press', 'SB1'); act(sim, 'release', 'SB1');
  advance(sim, 60);
  const o = observe(sim).process;
  assert.equal(o.out, 0);
});

test('c43: Arresto non ferma il robot a meta\' ciclo: lo finisce', () => {
  const sim = createSim(withProg(sol), W(L.solution));
  act(sim, 'press', 'SB1'); act(sim, 'release', 'SB1');
  advance(sim, 8);
  act(sim, 'press', 'SB0'); act(sim, 'release', 'SB0');
  advance(sim, 60);
  const o = observe(sim).process;
  assert.deepEqual([o.out, o.crash, o.dropped], [1, false, 0]);
});
