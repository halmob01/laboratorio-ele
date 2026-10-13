// Controlli comuni a tutte le unita' didattiche: struttura, passi, demo e sfida guasto.

import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluate, stepsState, demoFrames } from '../src/engine/index.js';
import { levels } from '../src/content/index.js';

const withUnit = levels.filter(l => l.unit);
const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));

for (const L of withUnit) {
  const u = L.unit;
  test(`${L.id}: struttura della lezione`, () => {
    const pages = u.lesson.pages;
    assert.equal(pages[pages.length - 1].type, 'sintesi');
    assert.ok(u.summary.length >= 3);
    if (L.id.startsWith('t')) return;     // i circuiti del trilocale hanno una lezione breve, senza demo
    assert.equal(pages.filter(p => p.type === 'previsione').length, 1);
    const prev = pages.find(p => p.type === 'previsione');
    assert.ok(prev.options.some(o => o.id === prev.correct));
    const demo = pages.find(p => p.type === 'demo');
    assert.equal(demo.captions.wires.length, L.solution.length);
    assert.ok(u.summary.length >= 4);
  });

  test(`${L.id}: i passi si completano con la soluzione`, () => {
    const st = stepsState(u.steps, W(L.solution), { power: true, operated: new Set(L.controls || []), result: { pass: true } });
    assert.ok(st.done.every(Boolean), JSON.stringify(st));
    const dp = u.lesson.pages.find(p => p.type === 'demo');
    if (dp) assert.ok(demoFrames(L, dp.captions).length > L.solution.length);
  });

  if (u.fault) {
    test(`${L.id}: la sfida guasto parte guasta e si ripara`, () => {
      assert.equal(evaluate(L, W(u.fault.wires)).pass, false);
      assert.equal(evaluate(L, W(L.solution)).pass, true);
      assert.ok(u.fault.diagnosis.options.some(o => o.id === u.fault.diagnosis.correct));
    });
  }
}

import { createSession } from '../src/engine/index.js';
import { deriveFull } from '../src/content/index.js';

for (const L of withUnit.filter(l => l.unit.fault)) {
  test(`${L.id}: la sfida guasto si risolve dal motore dopo la diagnosi giusta`, () => {
    const s = createSession({ levels, deriveFull, initialLevel: L.id });
    s.skipLesson();
    L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
    L.controls.forEach(() => {});
    assert.equal(s.check().pass, true);
    s.startFault();
    assert.equal(s.snapshot().unit.phase, 'fault');
    assert.equal(s.snapshot().wires.length, L.unit.fault.wires.length);
    s.answerDiagnosis(L.unit.fault.diagnosis.correct);
    s.clear();
    L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
    assert.equal(s.check().pass, true);
    assert.equal(s.snapshot().unit.faultSolved, true);
  });
}
