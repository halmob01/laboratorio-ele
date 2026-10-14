// La sessione di gioco funziona da sola, senza pagina ne' grafica: e' cio' che una vista 3D riusera'.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';

const make = () => createSession({ levels, deriveFull });
const lv = id => levels.find(l => l.id === id);
const INT = 'c03-interrotto', PRESA = 'c02-presa';

test('una sessione si gioca interamente dal motore', () => {
  const s = make();
  s.selectLevel(INT); s.skipLesson();
  lv(INT).solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.toggleBreaker();
  assert.equal(s.snapshot().power, true);
  assert.equal(s.snapshot().lit, false);
  s.toggleControl('S');
  assert.equal(s.snapshot().lit, true);
  assert.equal(s.snapshot().potential('L.A'), 'F');
  assert.equal(s.snapshot().potential('L.B'), 'N');
  const r = s.check();
  assert.equal(r.pass, true);
  assert.equal(s.snapshot().levels.find(l => l.id === INT).stars, 3);
});

test('il cortocircuito fa scattare la protezione e il messaggio e\' un codice', () => {
  const s = make();
  s.selectLevel(INT); s.skipLesson();
  s.addWire('Q.F', 'Q.N', 'marrone');
  s.toggleBreaker();
  const snap = s.snapshot();
  assert.equal(snap.trip, true);
  assert.equal(snap.power, false);
  assert.deepEqual(snap.message, { code: 'trip', fault: 'corto' });
});

test('modificare i fili con corrente spegne il quadro; annulla e svuota funzionano', () => {
  const s = make();
  s.selectLevel(INT); s.skipLesson();
  lv(INT).solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.toggleBreaker();
  s.undo();
  assert.equal(s.snapshot().power, false);
  assert.deepEqual(s.snapshot().message, { code: 'editWhileLive' });
  assert.equal(s.snapshot().wires.length, lv(INT).solution.length - 1);
  s.clear();
  assert.equal(s.snapshot().wires.length, 0);
});

test('lo stesso filo due volte lo toglie; i livelli e le modalita\' tengono i fili separati', () => {
  const s = make();
  s.selectLevel(PRESA); s.skipLesson();
  s.skipLesson();
  s.addWire('Q.F', 'P.L', 'marrone');
  s.addWire('P.L', 'Q.F', 'marrone');
  assert.equal(s.snapshot().wires.length, 0);
  s.addWire('Q.F', 'P.L', 'marrone');
  s.selectLevel(INT); s.skipLesson();
  assert.equal(s.snapshot().wires.length, 0);
  s.selectLevel(PRESA); s.skipLesson();
  assert.equal(s.snapshot().wires.length, 1);
  s.setMode('contatore');
  assert.equal(s.snapshot().wires.length, 0);
  assert.equal(s.snapshot().level.full, true);
});

test('i suggerimenti ruotano e si contano; i progressi passano dal deposito indicato', () => {
  let saved = null;
  const s = createSession({ levels, deriveFull, initialLevel: PRESA, storage: { load: () => ({ '1': 1 }), save: o => { saved = o; } } });
  assert.equal(s.snapshot().levels.find(l => l.id === PRESA).stars, 1);   // formato precedente migrato
  const h = [s.requestHint(), s.requestHint(), s.requestHint(), s.requestHint()];
  assert.deepEqual(h.map(x => x.index), [0, 1, 2, 0]);
  assert.equal(s.snapshot().usage.hints, 4);
  lv(PRESA).solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.check();
  assert.equal(saved.v, 2);
  assert.equal(saved.stars[PRESA], 3);
});

test('i listener ricevono un\'istantanea a ogni cambiamento', () => {
  const s = make();
  s.selectLevel(PRESA); s.skipLesson();
  s.skipLesson();
  const seen = [];
  const off = s.subscribe(x => seen.push(x.wires.length));
  s.addWire('Q.F', 'P.L', 'marrone');
  s.addWire('Q.N', 'P.N', 'blu');
  off();
  s.addWire('Q.PE', 'P.PE', 'gv');
  assert.deepEqual(seen, [1, 2]);
});

function workStore() {
  let w = {};
  return { load: () => ({}), save: () => {}, loadWork: () => JSON.parse(JSON.stringify(w)), saveWork: o => { w = JSON.parse(JSON.stringify(o)); }, peekWork: () => w };
}
const open = (st, id, fn) => { const s = createSession({ levels, deriveFull, storage: st, initialLevel: id }); s.start(); if (fn) fn(s); return s; };
const wiresOf = s => s.snapshot().wires.map(w => [w.a, w.b, w.c]);

test('il lavoro a meta\' livello sopravvive a una ricarica: fili, comandi e pagina della lezione', () => {
  const st = workStore();
  open(st, INT, s => { s.unitNext(); s.unitNext(); });
  let r = open(st, INT);
  assert.equal(r.snapshot().unit.page, 2);
  r.skipLesson();
  lv(INT).solution.slice(0, 2).forEach(([a, b, c]) => r.addWire(a, b, c));
  const before = wiresOf(r);
  const s = open(st, INT);
  assert.deepEqual(wiresOf(s), before);
  assert.equal(s.snapshot().unit.phase, 'build');
  s.addWire('Q.N', 'L.B', 'blu');
  assert.equal(new Set(s.snapshot().wires.map(w => w.id)).size, 3);
});

test('dati salvati rovinati: colori, morsetti, identificativi, duplicati e stati non validi vengono scartati', () => {
  const st = workStore();
  st.saveWork({ v: 1, w: { [INT + '|quadro']: { wires: [
    { id: 1, a: 'X.Y', b: 'Q.F', c: 'marrone' },
    { id: 1, a: 'Q.F', b: 'S.a', c: 'viola' },
    { id: 1, a: 'Q.F', b: 'S.a', c: '__proto__' },
    { id: 1e300, a: 'Q.F', b: 'S.a', c: 'marrone' },
    { id: 1e300, a: 'S.a', b: 'Q.F', c: 'marrone' },
    { id: 5, a: 'S.b', b: 'S.b', c: 'marrone' },
    { id: -3, a: 'S.b', b: 'L.A', c: 'marrone' },
  ], states: { S: 1, Z: 1 } } }, u: { [INT]: { phase: 'done', page: 99, pred: [] } }, 'inesistente|quadro': { wires: [] } });
  const s = open(st, INT);
  assert.deepEqual(wiresOf(s), [['Q.F', 'S.a', 'marrone'], ['S.b', 'L.A', 'marrone']]);
  assert.equal(new Set(s.snapshot().wires.map(w => w.id)).size, 2);
  assert.equal(s.snapshot().controlStates.Z, undefined);
  assert.notEqual(s.snapshot().unit.phase, 'done');   // senza stelle non si ripristina "completato"
  s.addWire('Q.N', 'L.B', 'blu');
  assert.equal(new Set(s.snapshot().wires.map(w => w.id)).size, 3);
});

test('la previsione non si salta con dati manomessi', () => {
  const st = workStore();
  const pi = lv(INT).unit.lesson.pages.findIndex(p => p.type === 'previsione');
  if (pi < 0) return;
  st.saveWork({ v: 1, w: {}, u: { [INT]: { phase: 'lesson', page: pi + 1, pred: { option: 'zzz', correct: true } } } });
  assert.equal(open(st, INT).snapshot().unit.page, pi);
});

test('livello completato: dopo la ricarica restano l\'esito e le sfide; senza fili si riparte da build', () => {
  const st = workStore();
  const p = { '1': 0 };
  const store = { load: () => ({ v: 2, stars: { [INT]: 3 }, best: { [INT]: { base: 100, pred: true, fault: false, skipped: false } }, last: INT }), save: () => {}, loadWork: st.loadWork, saveWork: st.saveWork };
  let s = createSession({ levels, deriveFull, storage: store, initialLevel: INT }); s.start();
  s.skipLesson();
  lv(INT).solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.check();
  assert.equal(s.snapshot().unit.phase, 'done');
  s = createSession({ levels, deriveFull, storage: store, initialLevel: INT }); s.start();
  assert.equal(s.snapshot().unit.phase, 'done');
  assert.equal(s.snapshot().result && s.snapshot().result.pass, true);
  s.clear();
  s = createSession({ levels, deriveFull, storage: store, initialLevel: INT }); s.start();
  assert.equal(s.snapshot().unit.phase, 'build');
});

test('sfida guasto: non si salva e uscendo (anche cambiando livello) torna l\'impianto riuscito', () => {
  const st = workStore();
  const store = { load: () => ({}), save: () => {}, loadWork: st.loadWork, saveWork: st.saveWork };
  const s = createSession({ levels, deriveFull, storage: store, initialLevel: INT }); s.start();
  s.skipLesson();
  lv(INT).solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.check();
  const ok = wiresOf(s);
  s.startFault();
  assert.notDeepEqual(wiresOf(s), ok);
  s.selectLevel(PRESA);
  s.selectLevel(INT);
  assert.deepEqual(wiresOf(s), ok);
  assert.equal(JSON.stringify(st.peekWork()).includes('fault'), false);
  const r = createSession({ levels, deriveFull, storage: store, initialLevel: INT }); r.start();
  assert.deepEqual(wiresOf(r), ok);
});

test('prova di salto: il lavoro dell\'apprendimento torna all\'uscita e non viene sovrascritto nel deposito', () => {
  const st = workStore();
  const s = open(st, PRESA);
  s.skipLesson(); s.skipLesson();
  s.addWire('Q.F', 'P.L', 'marrone'); s.addWire('Q.N', 'P.N', 'blu');
  s.selectLevel(PRESA, { verify: true });
  assert.equal(s.snapshot().wires.length, 0);
  s.addWire('Q.F', 'P.L', 'marrone');
  assert.equal(st.peekWork().w[PRESA + '|quadro'].wires.length, 2);
  s.selectLevel(PRESA);
  assert.equal(s.snapshot().wires.length, 2);
});

test('nessuna scrittura inutile se il lavoro non cambia', () => {
  let n = 0;
  const st = workStore();
  const store = { ...st, saveWork: o => { n++; st.saveWork(o); } };
  const s = open(store, PRESA);
  s.skipLesson(); s.skipLesson();
  s.addWire('Q.F', 'P.L', 'marrone');
  const k = n;
  s.toggleFlow(); s.toggleFlow(); s.toggleSolution(); s.toggleSolution();
  assert.equal(n, k);
});
