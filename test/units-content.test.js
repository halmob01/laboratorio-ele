// Controlli comuni a tutte le unita' didattiche: struttura, passi, demo e sfida guasto.

import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluate as evaluateV1, stepsState, demoFrames } from '../src/engine/index.js';
import { evaluateV2 } from '../src/engine/v2/index.js';
import { levels } from '../src/content/index.js';
import { loggedMeasures, doMeasures, doRatings, openIsolators } from './misure.js';

const withUnit = levels.filter(l => l.unit);
const evaluate = (L, w, ratings) => (L.engine === 2 ? evaluateV2(L, w, { measured: loggedMeasures(L), ratings }) : evaluateV1(L, w));
const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));

for (const L of withUnit) {
  const u = L.unit;
  test(`${L.id}: struttura della lezione`, () => {
    const pages = u.lesson.pages;
    assert.equal(pages[pages.length - 1].type, 'sintesi');
    assert.ok(u.summary.length >= 3);
    if (L.id.startsWith('t')) return;     // i circuiti del trilocale hanno una lezione breve, senza demo
    const prevs = pages.filter(p => p.type === 'previsione');
    assert.ok(prevs.length >= 1);
    prevs.forEach(prev => assert.ok(prev.options.some(o => o.id === prev.correct)));
    const demo = pages.find(p => p.type === 'demo');
    assert.equal(demo.captions.wires.length, L.solution.length);
    assert.ok(u.summary.length >= 4);
  });

  test(`${L.id}: i passi si completano con la soluzione`, () => {
    const st = stepsState(u.steps, W(L.solution), { power: true, operated: new Set(L.controls || []), result: { pass: true }, measured: loggedMeasures(L), ratings: L.solutionRatings });
    assert.ok(st.done.every(Boolean), JSON.stringify(st));
    const dp = u.lesson.pages.find(p => p.type === 'demo');
    if (dp) assert.ok(demoFrames(L, dp.captions).length > L.solution.length);
  });

  if (u.fault) {
    test(`${L.id}: la sfida guasto parte guasta e si ripara`, () => {
      // i guasti da componente (`on`) hanno i fili giusti: il guasto e' nello stato, non nel cablaggio
      if (!u.fault.on) assert.equal(evaluate(L, W(u.fault.wires)).pass, false);
      assert.equal(evaluate(L, W(L.solution), L.solutionRatings).pass, true);
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
    openIsolators(s, L);
    L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
    doMeasures(s, L); doRatings(s, L);
    assert.equal(s.check().pass, true);
    s.startFault();
    assert.equal(s.snapshot().unit.phase, 'fault');
    assert.equal(s.snapshot().wires.length, L.unit.fault.wires.length);
    s.answerDiagnosis(L.unit.fault.diagnosis.correct);
    s.clear();
    openIsolators(s, L);
    L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
    doMeasures(s, L); doRatings(s, L);
    if (L.unit.fault.on) {
      // con il guasto ancora acceso la verifica non passa: prima va tolto
      assert.equal(s.check().pass, false);
      L.unit.fault.on.forEach(id => s.toggleControl(id));
    }
    assert.equal(s.check().pass, true);
    assert.equal(s.snapshot().unit.faultSolved, true);
  });
}
