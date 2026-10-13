// Livelli con piu' carichi: lampade in parallelo, in serie, una sola collegata.

import test from 'node:test';
import assert from 'node:assert/strict';
import { levels } from '../src/content/index.js';
import { evaluate } from '../src/engine/evaluate.js';
import { analyse } from '../src/engine/circuit.js';
import { flowOf } from '../src/engine/flow.js';

const L = levels.find(l => l.id === 'c04-parallelo');
const wires = list => list.map(([a, b, c], i) => ({ id: 'w' + i, a, b, c }));
const sol = wires(L.solution);

test('parallelo corretto: entrambe le lampade si accendono insieme, 3 stelle', () => {
  assert.deepEqual(analyse(L, sol, { S: 1 }).litLoads, [true, true]);
  assert.deepEqual(analyse(L, sol, { S: 0 }).litLoads, [false, false]);
  const r = evaluate(L, sol);
  assert.equal(r.pass, true);
  assert.equal(r.stars, 3);
});

test('lampade in serie: non si accendono e il motivo e\' un codice', () => {
  const serie = wires([
    ['Q.F', 'S.a', 'marrone'], ['S.b', 'L1.A', 'marrone'],
    ['L1.B', 'L2.A', 'marrone'], ['L2.B', 'Q.N', 'blu'],
  ]);
  const r = evaluate(L, serie);
  assert.equal(r.pass, false);
  assert.equal(r.work.items[0].code, 'work.loadsInSeries');
});

test('una sola lampada collegata: si segnala quale manca', () => {
  const una = wires(L.solution.filter(w => !w.some(t => t.startsWith('L2'))));
  assert.deepEqual(analyse(L, una, { S: 1 }).litLoads, [true, false]);
  const r = evaluate(L, una);
  assert.equal(r.pass, false);
  assert.deepEqual(r.work.items[0], { code: 'work.loadNeverLit', n: 2 });
});

test('il flusso passa per entrambe le lampade', () => {
  const f = flowOf(L, sol, { S: 1 });
  assert.equal(f.current, true);
  assert.ok(Object.values(f.wires).every(w => w.current));
  assert.equal(flowOf(L, sol, { S: 0 }).current, false);
});

test('manca solo il neutro: non e\' una serie', () => {
  const w = wires([
    ['Q.F', 'S.a', 'marrone'], ['S.b', 'L1.A', 'marrone'], ['S.b', 'L2.A', 'marrone'],
    ['L1.B', 'L2.B', 'blu'],
  ]);
  const r = evaluate(L, w);
  assert.notEqual(r.work.items[0].code, 'work.loadsInSeries');
});
