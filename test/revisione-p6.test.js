// Revisione di P6: casi trovati rileggendo processi, PID e livelli c33-c36.

import test from 'node:test';
import assert from 'node:assert/strict';
import { levels, deriveFull } from '../src/content/index.js';
import { createSession } from '../src/engine/index.js';
import { evaluateV2, createSim, advance, act, traceValue } from '../src/engine/v2/index.js';

const L = id => levels.find(l => l.id === id);
const sol = l => l.solution.map(([a, b, c], k) => ({ id: 'w' + k, a, b, c }));

test('c34: la verifica non dipende da dove l’allievo ha lasciato il cursore della velocità', () => {
  const l = L('c34-variatore');
  for (const vel of [0, 30, 60, 80, 100]) {
    const r = evaluateV2(l, sol(l), { tuned: { vel } });
    assert.equal(r.pass, true, 'vel ' + vel + ': ' + JSON.stringify(r.work.items));
  }
});

test('c36: con il solo P e Kp alto il forno scalda (si ferma sotto i 60 °C, non resta freddo)', () => {
  const l = L('c36-pid');
  const sim = createSim({ ...l, process: { ...l.process, tuned: { kp: 3, ti: 0, td: 0 } } }, sol(l));
  act(sim, 'toggle', 'SA');
  advance(sim, 900);
  const T = traceValue(sim, 'T');
  assert.ok(T > 50 && T < 60, 'T=' + T);
});

test('c36: i cursori si salvano col lavoro e il livello resta completato dopo una ricarica', () => {
  const store = {};
  const mk = () => createSession({ levels, deriveFull, storage: { load: () => store.p || {}, save: o => { store.p = JSON.parse(JSON.stringify(o)); }, loadWork: () => store.w || {}, saveWork: o => { store.w = JSON.parse(JSON.stringify(o)); } } });
  const a = mk(); a.start(); a.selectLevel('c36-pid'); a.skipLesson();
  Object.entries(L('c36-pid').solutionTuned).forEach(([k, v]) => a.tune(k, v));
  a.check();
  assert.equal(a.snapshot().result.pass, true);
  assert.equal(a.snapshot().unit.phase, 'done');
  const b = mk(); b.start(); b.selectLevel('c36-pid');
  assert.deepEqual(b.snapshot().tuned, { kp: 3, ti: 100, td: 15 });
  assert.equal(b.snapshot().unit.phase, 'done');
  b.check();
  assert.equal(b.snapshot().result.pass, true);
});

test('tracciato: i bit del PLC (M, T, I) si leggono, non solo le parole', () => {
  const l = L('c35-serbatoio');
  const prog = [{ if: 'I1', do: [{ op: 'set', a: 'M0' }] }, { if: 'M0', do: [{ op: 'coil', a: 'Q0' }] }];
  const sim = createSim({ ...l, comps: l.comps.map(c => (c.id === 'PLC' ? { ...c, program: prog } : c)), process: { ...l.process, init: { h: 10 } } }, sol(l));
  advance(sim, 1);
  assert.equal(traceValue(sim, 'PLC.I1'), 1);
  assert.equal(traceValue(sim, 'PLC.M0'), 1);
  assert.equal(traceValue(sim, 'PLC.Q0'), 1);
});
