// Unità didattica di c01 e prova di salto: lezione, previsione, guida, cablaggio, guasto, XP.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession, evaluate } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';

const C01 = 'c01-circuito-chiuso';
const L = levels.find(l => l.id === C01);
const make = (storage) => createSession({ levels, deriveFull, initialLevel: C01, storage });
const row = s => s.snapshot().levels.find(l => l.id === C01);

test('c01: la soluzione prende tre stelle in entrambe le modalita\'', () => {
  for (const lvl of [L, deriveFull(L)]) {
    const r = evaluate(lvl, lvl.solution.map(([a, b, c], k) => ({ id: k + 1, a, b, c })));
    assert.equal(r.stars, 3);
    assert.equal(r.pass, true);
  }
});

const lesson = s => { while (s.snapshot().unit.phase === 'lesson') s.unitNext(); };

test('c01: si parte dalla lezione, poi previsione, poi cablaggio con esempio guidato', () => {
  const s = make();
  assert.equal(s.snapshot().unit.phase, 'lesson');
  s.addWire('Q.F', 'L.A', 'marrone');                 // ignorato in lezione
  assert.equal(s.snapshot().wires.length, 0);
  assert.equal(s.snapshot().unit.pages, 5);
  s.unitNext();
  assert.equal(s.snapshot().unit.page, 1);
  s.unitBack();
  assert.equal(s.snapshot().unit.page, 0);
  lesson(s);
  assert.equal(s.snapshot().unit.phase, 'prediction');
  s.unitNext();                                        // senza risposta non si procede
  assert.equal(s.snapshot().unit.phase, 'prediction');
  s.answerPrediction('a');
  assert.deepEqual(s.snapshot().unit.pred, { option: 'a', correct: false });
  s.answerPrediction('b');                             // la risposta data non si cambia
  assert.equal(s.snapshot().unit.pred.option, 'a');
  s.unitNext();
  const snap = s.snapshot();
  assert.equal(snap.unit.phase, 'build');
  assert.deepEqual(snap.guide.wire, ['Q.F', 'L.A', 'marrone']);
  s.addWire('L.A', 'Q.F', 'marrone');                  // morsetti scambiati: vale lo stesso
  assert.equal(s.snapshot().guide, null);
});

test('c01: tutta l\'unita\' fino alla sfida guasto e agli XP', () => {
  const s = make();
  lesson(s); s.answerPrediction('b'); s.unitNext();
  L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  const r = s.check();
  assert.equal(r.pass, true);
  assert.equal(s.snapshot().unit.phase, 'done');
  assert.equal(row(s).status, 'completato');
  assert.equal(row(s).xp, 100 + 10 + 10);              // 100 + senza suggerimenti + previsione giusta

  s.startFault();
  let snap = s.snapshot();
  assert.equal(snap.unit.phase, 'fault');
  assert.equal(snap.wires.length, 2);
  s.toggleBreaker();
  assert.equal(s.snapshot().lit, false);
  assert.deepEqual(s.snapshot().flow.deadEnds, ['L.A', 'L.B']);
  s.answerDiagnosis('b');
  assert.equal(s.snapshot().unit.diag.correct, true);
  // si corregge: il filo sul morsetto B deve partire dal neutro
  const bad = s.snapshot().wires.find(w => w.b === 'L.B');
  s.removeWire(bad.id);
  s.addWire('Q.N', 'L.B', 'blu');
  assert.equal(s.check().pass, true);
  assert.equal(s.snapshot().unit.faultSolved, true);
  assert.equal(row(s).xp, 100 + 10 + 10 + 20);
});

test('c01: sfida guasto risolta senza aver capito la diagnosi non da\' il bonus', () => {
  const s = make();
  lesson(s); s.answerPrediction('b'); s.unitNext();
  L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.check();
  s.startFault();
  const bad = s.snapshot().wires.find(w => w.b === 'L.B');
  s.removeWire(bad.id);
  s.addWire('Q.N', 'L.B', 'blu');
  s.check();
  assert.equal(s.snapshot().unit.faultSolved, false);
  assert.equal(row(s).xp, 120);
});

test('i suggerimenti costano XP e la previsione sbagliata non da\' il bonus', () => {
  const s = make();
  lesson(s); s.answerPrediction('a'); s.unitNext();
  s.requestHint(); s.requestHint();
  L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.check();
  assert.equal(row(s).xp, 100 - 10);
});

test('prova di salto: niente lezione, niente aiuti, e passata vale "saltato"', () => {
  let saved = null;
  const s = make({ load: () => ({}), save: o => { saved = JSON.parse(JSON.stringify(o)); } });
  s.selectLevel(C01, { verify: true });
  const snap = s.snapshot();
  assert.equal(snap.playMode, 'verifica');
  assert.equal(snap.unit.phase, 'build');
  assert.equal(snap.guide, null);
  assert.equal(snap.flowVisible, false);
  assert.equal(s.requestHint(), null);
  s.toggleSolution();
  assert.equal(s.snapshot().solutionShown, false);
  s.showLesson();
  assert.equal(s.snapshot().unit.phase, 'build');
  L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  assert.equal(s.check().pass, true);
  assert.equal(row(s).status, 'saltato');
  assert.equal(row(s).xp, 110);                       // niente bonus previsione
  assert.equal(saved.best[C01].skipped, true);
  assert.equal(saved.last, C01);
});

test('prova di salto sbagliata: il livello non risulta saltato ne\' completato', () => {
  const s = make();
  s.selectLevel(C01, { verify: true });
  s.addWire('Q.F', 'L.A', 'marrone');
  assert.equal(s.check().pass, false);
  assert.equal(row(s).status, 'in corso');
});

test('la corrente visibile dipende dal livello e dalla modalita\'', () => {
  const s = make();
  assert.equal(s.snapshot().flowVisible, true);       // c01: sempre
  s.selectLevel('c05-deviato');
  assert.equal(s.snapshot().flowVisible, false);      // c05: a richiesta
  s.toggleFlow();
  assert.equal(s.snapshot().flowVisible, true);
  s.selectLevel('c05-deviato', { verify: true });
  s.toggleFlow();
  assert.equal(s.snapshot().flowVisible, false);      // in verifica mai
});

test('i livelli senza unita\' funzionano come prima', () => {
  const s = make();
  s.selectLevel('c03-interrotto');
  const snap = s.snapshot();
  assert.equal(snap.unit, null);
  assert.equal(snap.guide, null);
  levels.find(l => l.id === 'c03-interrotto').solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  assert.equal(s.check().pass, true);
  assert.equal(s.snapshot().levels.find(l => l.id === 'c03-interrotto').xp, 110);
});

test('sfida guasto: non si supera cambiando modalita\' ne\' indovinando la diagnosi', async () => {
  const { createSession } = await import('../src/engine/index.js');
  const { levels, deriveFull } = await import('../src/content/index.js');
  const s = createSession({ levels, deriveFull });
  s.selectLevel('c01-circuito-chiuso');
  lesson(s);
  s.answerPrediction('b'); s.unitNext();
  const L = levels[0];
  L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.check();
  s.startFault();
  s.answerDiagnosis('a');            // sbagliata
  s.leaveFault(); s.startFault();
  s.answerDiagnosis('b');            // giusta, ma dopo un errore
  L.solution.forEach(() => s.undo()); s.snapshot().wires.forEach(w => s.removeWire(w.id));
  L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.check();
  assert.equal(s.snapshot().unit.faultSolved, false);
  s.setMode('contatore');
  assert.notEqual(s.snapshot().unit.phase, 'fault');
});
