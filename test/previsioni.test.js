// Lezioni con piu' previsioni: ognuna ha la sua risposta (prima la seconda compariva gia' risposta con la scelta della prima).

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';

const ID = 'c29-plc';
const L = levels.find(l => l.id === ID);
const pages = L.unit.lesson.pages;
const prev = pages.map((p, i) => (p.type === 'previsione' ? i : -1)).filter(i => i >= 0);
const make = (storage = {}) => { const s = createSession({ levels, deriveFull, initialLevel: ID, storage }); s.start(); return s; };
const goTo = (s, n) => { while (s.snapshot().unit.page < n) { const u = s.snapshot().unit; if (u.pageData.type === 'previsione' && !u.pagePred) s.answerPrediction(u.pageData.correct); s.unitNext(); } };

test('c29 ha piu\' previsioni (premessa del test)', () => assert.ok(prev.length >= 2));

test('ogni previsione aspetta la sua risposta e mostra la sua', () => {
  const s = make();
  goTo(s, prev[0]);
  const wrong = pages[prev[0]].options.find(o => o.id !== pages[prev[0]].correct).id;
  s.answerPrediction(wrong);
  assert.equal(s.snapshot().unit.pagePred.option, wrong);
  s.unitNext();
  goTo(s, prev[1]);
  let u = s.snapshot().unit;
  assert.equal(u.page, prev[1]);
  assert.equal(u.pagePred, null, 'la seconda previsione non e\' gia\' risposta');
  s.unitNext();
  assert.equal(s.snapshot().unit.page, prev[1], 'senza risposta non si va avanti');
  s.answerPrediction(pages[prev[1]].correct);
  u = s.snapshot().unit;
  assert.deepEqual(u.pagePred, { option: pages[prev[1]].correct, correct: true });
  assert.equal(u.pred.option, wrong, 'la prima risposta (quella che vale i punti) non cambia');
  s.answerPrediction(pages[prev[1]].options.find(o => o.id !== pages[prev[1]].correct).id);
  assert.equal(s.snapshot().unit.pagePred.option, pages[prev[1]].correct, 'la risposta data non si cambia');
  s.unitNext();
  assert.equal(s.snapshot().unit.page, prev[1] + 1);
});

test('le risposte alle previsioni successive si salvano e si ritrovano', () => {
  let saved = null;
  const storage = { saveWork: w => { saved = JSON.parse(JSON.stringify(w)); }, loadWork: () => saved };
  const s = make(storage);
  goTo(s, prev[1] + 1);
  assert.ok(saved && saved.u[ID] && saved.u[ID].more && saved.u[ID].more[prev[1]]);
  const s2 = make(storage);
  const u = s2.snapshot().unit;
  assert.equal(u.page, prev[1] + 1);
  assert.equal(s2.snapshot().unit.pred.correct, true);
});

test('una previsione successiva senza risposta salvata riporta la lezione a quella pagina', () => {
  const work = { v: 1, w: {}, u: { [ID]: { phase: 'lesson', page: pages.length - 1, pred: { option: pages[prev[0]].correct, correct: true } } } };
  const s = make({ saveWork() {}, loadWork: () => work });
  assert.equal(s.snapshot().unit.page, prev[1]);
});
