// Progressi, XP, gradi, migrazione dei salvataggi e nome del giocatore.

import test from 'node:test';
import assert from 'node:assert/strict';
import { attemptBase, cleanName, evaluate, migrateProgress, rankOf, totalXp, xpOf, XP, NAME_MAX } from '../src/engine/index.js';
import { levels } from '../src/content/index.js';

const lv = id => levels.find(l => l.id === id);
const toWires = list => list.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));

test('migrazione: il formato precedente passa agli identificativi stabili', () => {
  const m = migrateProgress({ '1': 2, '2': 3, '3': 1, '4': 0, '1c': 3, 'x': 9, '7': 2, '2c': 5 }, levels);
  assert.equal(m.v, 2);
  assert.deepEqual(m.stars, { 'c02-presa': 2, 'c03-interrotto': 3, 'c05-deviato': 1, 'c06-invertito': 0, 'c02-presac': 3 });
  assert.deepEqual(m.best, {});
});

test('migrazione: dati vuoti, rovinati o gia\' nuovi non fanno danni', () => {
  assert.equal(migrateProgress(null, levels).v, 2);
  assert.equal(migrateProgress('abc', levels).v, 2);
  assert.deepEqual(migrateProgress({}, levels).stars, {});
  const cur = { v: 2, stars: { 'c01-circuito-chiuso': 3 }, best: { 'c01-circuito-chiuso': { base: 50 } }, last: 'c01-circuito-chiuso' };
  const out = migrateProgress(cur, levels);
  assert.equal(out.best['c01-circuito-chiuso'].base, 50);
  assert.equal(out.stars['c01-circuito-chiuso'], 3);
  // deposito manomesso: nessun errore e valori riportati nei limiti
  const bad = migrateProgress({ v: 2, stars: { x: 9, y: 'a' }, best: { x: 5, y: { base: '50' }, z: { base: 9999 } } }, levels);
  assert.equal(bad.stars.x, 3);
  assert.equal(bad.stars.y, 0);
  assert.equal(bad.best.x, undefined);
  assert.equal(bad.best.y.base, 50);
  assert.equal(bad.best.z.base, 110);
});

test('XP: tentativo perfetto, con suggerimenti e con soluzione mostrata', () => {
  const L = lv('c01-circuito-chiuso');
  const perfect = evaluate(L, toWires(L.solution));
  assert.equal(attemptBase(perfect, { hints: 0, solution: false }), 100 + XP.noHint);
  assert.equal(attemptBase(perfect, { hints: 2, solution: false }), 100 - 2 * XP.hintCost);
  assert.equal(attemptBase(perfect, { hints: 0, solution: true }), XP.solutionCap);
  assert.equal(attemptBase(perfect, { hints: 9, solution: true }), 0);
  const partial = evaluate(L, toWires([['Q.F', 'L.A', 'marrone']]));
  assert.equal(attemptBase(partial, { hints: 0, solution: false }), XP.color);   // solo i colori sono giusti
});

test('XP totale e gradi', () => {
  const p = { best: { a: { base: 110, pred: true, fault: true }, b: { base: 40 } } };
  assert.equal(xpOf(p.best.a), 110 + XP.prediction + XP.fault);
  assert.equal(totalXp(p), 140 + 40);
  assert.equal(rankOf(0).id, 'apprendista');
  assert.equal(rankOf(100).id, 'aiutante');
  assert.equal(rankOf(699).id, 'installatore');
  assert.equal(rankOf(5000).id, 'collaudatore');
  assert.equal(rankOf(5000).next, null);
  assert.equal(rankOf(0).next.id, 'aiutante');
});

test('nome del giocatore: pulizia e limite di lunghezza', () => {
  assert.equal(cleanName('  Marco   Rossi '), 'Marco Rossi');
  assert.equal(cleanName('<b>x</b>'), 'b x /b');
  assert.equal(cleanName('a'.repeat(50)).length, NAME_MAX);
  assert.equal(cleanName(null), '');
  assert.equal(cleanName('ab\ncd\t'), 'ab cd');
});
