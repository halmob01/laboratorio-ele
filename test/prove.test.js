// Prove 3D dei moduli (c23 appartamento di notte, c24 officina): impianto gia' cablato e guasto, da diagnosticare e riparare.
// Qui si prova il motore e la sessione; la scena 3D legge solo lo stato (vedi test/prove3d.test.js).

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';
import { LEVELS_V2 } from '../src/content/levels-v2.js';

const open = id => { const s = createSession({ levels, deriveFull, initialLevel: id }); s.start(); return s; };
const tripped = s => s.snapshot().obs.tripped.slice().sort().join(',');

test('le prove sono livelli con scena e sfida guasto', () => {
  const ps = levels.filter(l => l.prova);
  assert.deepEqual(ps.map(l => l.id), ['c23-appartamento-notte', 'c24-officina', 'c46-nastro-automatico']);
  ps.forEach(l => {
    assert.ok(['appartamento', 'officina', 'automatico'].includes(l.prova.scene));
    assert.ok(l.unit && l.unit.fault && l.unit.fault.wires.length > 0);
    assert.ok(l.unit.fault.diagnosis.options.some(o => o.id === l.unit.fault.diagnosis.correct));
  });
});

test('c23: dopo la lezione l’appartamento e’ gia’ cablato e il differenziale e’ scattato', () => {
  const s = open('c23-appartamento-notte');
  assert.equal(s.snapshot().unit.phase, 'lesson');
  s.skipLesson();
  const sn = s.snapshot();
  assert.equal(sn.unit.phase, 'fault');
  assert.equal(sn.unit.prova, true);
  assert.equal(sn.wires.length, sn.level.unit.fault.wires.length);
  assert.equal(tripped(s), 'D');
  assert.ok(Object.values(sn.obs.loads).every(v => v === 'off'));
});

test('c23: aprendo la linea colpevole il differenziale resta armato; richiudendola scatta di nuovo', () => {
  const s = open('c23-appartamento-notte');
  s.skipLesson();
  ['M1', 'M2', 'M3'].forEach(id => s.toggleControl(id));      // le tre linee aperte
  s.toggleControl('D');                                          // riarmo
  assert.equal(tripped(s), '');
  s.toggleControl('M1'); assert.equal(tripped(s), '');
  s.toggleControl('M3'); assert.equal(tripped(s), '');
  s.toggleControl('M2'); assert.equal(tripped(s), 'D');          // le prese disperdono
});

test('c23: si ripara scollegando l’apparecchio e la diagnosi giusta chiude la prova', () => {
  const s = open('c23-appartamento-notte');
  s.skipLesson();
  s.answerDiagnosis('b');
  assert.equal(s.snapshot().unit.diag.correct, true);
  assert.equal(s.check().pass, false);                           // il guasto e' ancora acceso
  s.toggleControl('G');
  const r = s.check();
  assert.equal(r.pass, true);
  assert.equal(s.snapshot().unit.faultSolved, true);
  assert.equal(s.snapshot().unit.phase, 'done');
});

test('c23: una diagnosi sbagliata non da il credito della sfida', () => {
  const s = open('c23-appartamento-notte');
  s.skipLesson();
  s.answerDiagnosis('a');
  s.toggleControl('G');
  assert.equal(s.check().pass, true);
  assert.equal(s.snapshot().unit.faultSolved, false);
});

test('c24: il nastro gira, il termico scatta ma il nastro non si ferma', () => {
  const s = open('c24-officina');
  s.skipLesson();
  assert.equal(s.snapshot().unit.phase, 'fault');
  s.press('SB1'); s.release('SB1');
  assert.equal(s.snapshot().obs.motors.M, 'fwd');
  s.setOverload(true);
  for (let i = 0; i < 8; i++) s.tick(0.5);
  const o = s.snapshot().obs;
  assert.ok(o.tripped.includes('FR'));
  assert.equal(o.motors.M, 'fwd');
});

test('c24: si ripara a salvamotore aperto con il contatto 95-96 in serie e la diagnosi giusta', () => {
  const s = open('c24-officina');
  s.skipLesson();
  s.answerDiagnosis('a');
  s.toggleControl('QM');                                         // salvamotore aperto
  s.addWire('QM.2', 'SBE.1', 'rosso');                           // toglie il filo che saltava il termico
  s.addWire('QM.2', 'FR.95', 'rosso');
  s.addWire('FR.96', 'SBE.1', 'rosso');
  s.toggleControl('QM');
  const r = s.check();
  assert.equal(r.pass, true, JSON.stringify(r));
  assert.equal(s.snapshot().unit.faultSolved, true);
});

test('c24: ripararla con il salvamotore chiuso fa perdere la stella di sicurezza', () => {
  const s = open('c24-officina');
  s.skipLesson();
  s.addWire('QM.2', 'SBE.1', 'rosso');
  s.addWire('QM.2', 'FR.95', 'rosso');
  s.addWire('FR.96', 'SBE.1', 'rosso');
  const r = s.check();
  assert.equal(r.work.ok, true);
  assert.equal(r.safe.ok, false);
});

test('una prova non riuscita non lascia niente: riaprendola riparte da capo', () => {
  const s = open('c23-appartamento-notte');
  s.skipLesson();
  ['M1', 'M2', 'M3'].forEach(id => s.toggleControl(id));
  s.selectLevel('c01-circuito-chiuso');
  s.selectLevel('c23-appartamento-notte');
  const sn = s.snapshot();
  assert.equal(sn.unit.phase, 'fault');
  assert.equal(tripped(s), 'D');
  assert.equal(sn.wires.length, sn.level.unit.fault.wires.length);
});

test('le prove non hanno la prova di salto', () => {
  const s = open('c01-circuito-chiuso');
  s.selectLevel('c24-officina', { verify: true });
  assert.equal(s.snapshot().playMode, 'apprendimento');
});

test('la prova si puo’ rifare dopo averla superata', () => {
  const s = open('c23-appartamento-notte');
  s.skipLesson();
  s.answerDiagnosis('b'); s.toggleControl('G'); assert.equal(s.check().pass, true);
  s.startFault();
  const sn = s.snapshot();
  assert.equal(sn.unit.phase, 'fault');
  assert.equal(tripped(s), 'D');
});

test('c23: dopo una diagnosi sbagliata la prova rifatta bene da capo vale', () => {
  const s = open('c23-appartamento-notte');
  s.skipLesson();
  s.answerDiagnosis('a');
  s.leaveFault();
  s.selectLevel('c23-appartamento-notte');
  assert.equal(s.snapshot().unit.phase, 'fault');
  s.answerDiagnosis('b');
  assert.equal(s.snapshot().unit.diag.correct, true);
});

test('c23: rivedere la lezione dopo aver superato la prova riporta alla fine e non azzera niente', () => {
  const s = open('c23-appartamento-notte');
  s.skipLesson();
  s.answerDiagnosis('b');
  s.toggleControl('G');
  assert.equal(s.check().pass, true);
  assert.equal(s.snapshot().unit.phase, 'done');
  s.showLesson();
  s.skipLesson();
  assert.equal(s.snapshot().unit.phase, 'done');
  s.selectLevel('c24-officina');
  s.selectLevel('c23-appartamento-notte');
  assert.equal(s.snapshot().unit.phase, 'done');
  assert.equal(s.snapshot().unit.faultSolved, true);
});

test('nella prova Annulla non smonta l’impianto e Annulla tutto riporta all’impianto di partenza', () => {
  const s = open('c24-officina');
  s.skipLesson();
  const plant = s.snapshot().wires.map(w => w.a + '~' + w.b).sort();
  s.undo();                                                       // nessun filo dell'allievo: non succede niente
  assert.deepEqual(s.snapshot().wires.map(w => w.a + '~' + w.b).sort(), plant);
  s.addWire('QM.2', 'SBE.1', 'rosso');                           // toglie un filo dell'impianto
  s.addWire('QM.2', 'FR.95', 'rosso');
  s.undo();                                                       // toglie solo l'ultimo filo posato
  assert.ok(!s.snapshot().wires.some(w => w.a === 'QM.2' && w.b === 'FR.95'));
  assert.equal(s.snapshot().wires.length, plant.length - 1);
  s.answerDiagnosis('a');
  s.clear();
  assert.deepEqual(s.snapshot().wires.map(w => w.a + '~' + w.b).sort(), plant);
  assert.equal(s.snapshot().unit.phase, 'fault');
  assert.equal(s.snapshot().unit.diag.correct, true);             // la risposta data resta
});

test('una prova lasciata a meta’ riparte dall’impianto guasto, non dalla lezione', () => {
  const store = {};
  const mk = () => { const s = createSession({ levels, deriveFull, initialLevel: 'c23-appartamento-notte', storage: { load: () => store.p || {}, save: o => { store.p = JSON.parse(JSON.stringify(o)); }, loadWork: () => store.w || {}, saveWork: o => { store.w = JSON.parse(JSON.stringify(o)); } } }); s.start(); return s; };
  const a = mk();
  a.skipLesson();
  a.toggleControl('M1');
  a.toggleControl('M1');                                          // un'azione qualsiasi: il lavoro si salva
  const b = mk();
  const sn = b.snapshot();
  assert.equal(sn.unit.phase, 'fault');
  assert.equal(sn.wires.length, sn.level.unit.fault.wires.length);
  assert.equal(tripped(b), 'D');
});

/* ---------- c46: il nastro automatico (prova del Modulo 4) ---------- */
const run = (s, sec) => { for (let i = 0; i < sec * 2; i++) s.tick(0.5); };
const SOL46 = LEVELS_V2.find(l => l.id === 'c46-nastro-automatico').solutionPrograms.PLC;
const obs46 = s => { const o = s.snapshot().obs; return { M: o.motors.M, H: o.loads.H, passed: o.process.passed }; };

test('c46: i pacchi arrivano da soli, la fotocellula li conta e a quattro il nastro si ferma', () => {
  const s = open('c46-nastro-automatico');
  s.skipLesson();
  assert.equal(s.snapshot().unit.phase, 'fault');
  assert.deepEqual(obs46(s), { M: 'off', H: 'off', passed: 0 });
  s.press('SB1'); s.release('SB1');
  run(s, 14);
  assert.deepEqual(obs46(s), { M: 'off', H: 'on', passed: 4 });
});

test('c46: con il programma guasto il lotto successivo non parte; corretto il contatore, si', () => {
  const s = open('c46-nastro-automatico');
  s.skipLesson();
  s.press('SB1'); s.release('SB1'); run(s, 14);
  s.press('SB1'); s.tick(0.5); s.release('SB1'); s.tick(0.5);
  assert.deepEqual(obs46(s), { M: 'off', H: 'on', passed: 4 });     // il guasto: il contatore resta pieno
  const r0 = s.check();
  assert.equal(r0.pass, false);
  assert.deepEqual(r0.checks.filter(c => !c.ok).map(c => c.id), ['nuovo', 'secondo']);
  s.answerDiagnosis('b');
  s.setProgram('PLC', SOL46);                                        // a nastro fermo
  assert.equal(s.snapshot().message, null);
  const r = s.check();
  assert.equal(r.pass, true, JSON.stringify(r.checks.filter(c => !c.ok)));
  assert.equal(r.stars, 3);
  assert.equal(s.snapshot().unit.faultSolved, true);
});

test('c46: cambiare il programma con il nastro in marcia fa perdere la stella di sicurezza; Annulla tutto rimedia', () => {
  const s = open('c46-nastro-automatico');
  s.skipLesson();
  s.answerDiagnosis('b');
  s.press('SB1'); s.release('SB1'); s.tick(0.5);
  assert.equal(obs46(s).M, 'fwd');
  s.setProgram('PLC', SOL46);
  assert.equal(s.snapshot().message.code, 'programLiveNow');
  const r = s.check();
  assert.equal(r.pass, false);
  assert.ok(r.safe.items.some(i => i.code === 'safe.programRunning'));
  s.clear();                                                         // torna il programma guasto e l'errore si cancella
  s.setProgram('PLC', SOL46);
  assert.equal(s.check().pass, true);
});
