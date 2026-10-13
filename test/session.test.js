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
  s.selectLevel(INT);
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
  s.selectLevel(INT);
  s.addWire('Q.F', 'Q.N', 'marrone');
  s.toggleBreaker();
  const snap = s.snapshot();
  assert.equal(snap.trip, true);
  assert.equal(snap.power, false);
  assert.deepEqual(snap.message, { code: 'trip', fault: 'corto' });
});

test('modificare i fili con corrente spegne il quadro; annulla e svuota funzionano', () => {
  const s = make();
  s.selectLevel(INT);
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
  s.selectLevel(PRESA);
  s.addWire('Q.F', 'P.L', 'marrone');
  s.addWire('P.L', 'Q.F', 'marrone');
  assert.equal(s.snapshot().wires.length, 0);
  s.addWire('Q.F', 'P.L', 'marrone');
  s.selectLevel(INT);
  assert.equal(s.snapshot().wires.length, 0);
  s.selectLevel(PRESA);
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
  s.selectLevel(PRESA);
  const seen = [];
  const off = s.subscribe(x => seen.push(x.wires.length));
  s.addWire('Q.F', 'P.L', 'marrone');
  s.addWire('Q.N', 'P.N', 'blu');
  off();
  s.addWire('Q.PE', 'P.PE', 'gv');
  assert.deepEqual(seen, [1, 2]);
});
