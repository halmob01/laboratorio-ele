// Opzioni delle previsioni e della sfida guasto mescolate nella vista (docs/METODO-REVIEW-PEDAGOGICA.md, par. 6 bis):
// stesse opzioni, ordine fisso per domanda, la risposta giusta resta giusta e non sta quasi sempre nello stesso posto.

import test from 'node:test';
import assert from 'node:assert/strict';
import { shuffledOptions } from '../src/ui2d/screens.js';
import { levels } from '../src/content/index.js';

const questions = [];
for (const L of levels) {
  const u = L.unit;
  if (!u) continue;
  for (const p of u.lesson.pages) if (p.type === 'previsione') questions.push({ id: L.id, opts: p.options, correct: p.correct, key: p.question });
  const d = u.fault && u.fault.diagnosis;
  if (d) questions.push({ id: L.id, opts: d.options, correct: d.correct, key: d.question + u.fault.say });
}

test('le opzioni mescolate sono le stesse, nello stesso ordine a ogni ridisegno, e la giusta c\'e\'', () => {
  assert.ok(questions.length > 100);
  for (const q of questions) {
    const a = shuffledOptions(q.opts, q.key), b = shuffledOptions(q.opts, q.key);
    assert.deepEqual(a.map(o => o.id), b.map(o => o.id), q.id);
    assert.deepEqual(a.map(o => o.id).sort(), q.opts.map(o => o.id).sort(), q.id);
    assert.ok(a.some(o => o.id === q.correct), q.id);
  }
});

test('la risposta giusta non sta quasi sempre nella stessa posizione', () => {
  const count = {};
  for (const q of questions) {
    const i = shuffledOptions(q.opts, q.key).findIndex(o => o.id === q.correct);
    count[i] = (count[i] || 0) + 1;
  }
  for (const n of Object.values(count)) assert.ok(n / questions.length < 0.5, JSON.stringify(count));
});

// docs/METODO-REVIEW-PEDAGOGICA.md, par. 6 bis: la risposta giusta non si deve riconoscere dalla lunghezza.
// La giusta sta tra 0,85 e 1,15 volte la sbagliata piu' lunga. (Le domande della sfida guasto sono l'esercizio e non si toccano.)
test('nelle previsioni la risposta giusta non si riconosce dalla lunghezza', () => {
  const fuori = [];
  for (const L of levels) {
    for (const p of (L.unit ? L.unit.lesson.pages : [])) {
      if (p.type !== 'previsione') continue;
      const len = p.options.map(o => o.text.length), i = p.options.findIndex(o => o.id === p.correct);
      const r = len[i] / Math.max(...len.filter((_, k) => k !== i));
      if (r < 0.85 || r > 1.15) fuori.push(`${L.id}: "${p.question}" (${r.toFixed(2)})`);
    }
  }
  assert.deepEqual(fuori, []);
});

// Le domande di diagnosi delle prove 3D (il momento centrale della prova) seguono la stessa regola delle previsioni.
test('nelle prove la risposta giusta della diagnosi non si riconosce dalla lunghezza', () => {
  const fuori = [];
  for (const L of levels) {
    const d = L.prova && L.unit && L.unit.fault && L.unit.fault.diagnosis;
    if (!d) continue;
    const len = d.options.map(o => o.text.length), i = d.options.findIndex(o => o.id === d.correct);
    const r = len[i] / Math.max(...len.filter((_, k) => k !== i));
    if (r < 0.85 || r > 1.15) fuori.push(`${L.id} (${r.toFixed(2)})`);
  }
  assert.deepEqual(fuori, []);
});
