// Il trilocale: i tre circuiti, lo stato della casa e il pacchetto della scena.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession, evaluate } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';
import { houseState, houseControls } from '../src/trilocale/house.js';
import { HOUSE } from '../src/content/trilocale.js';

const T = ['t01-bagno', 't02-camera', 't03-corridoio'];
const lv = id => levels.find(l => l.id === id);
const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));

test('ogni circuito del trilocale passa la verifica con la sua soluzione', () => {
  T.forEach(id => {
    const r = evaluate(lv(id), W(lv(id).solution));
    assert.equal(r.pass, true, id);
    assert.equal(r.stars, 3, id);
  });
});

test('ogni comando dei circuiti ha una posizione sul muro e ogni stanza con circuito esiste', () => {
  T.forEach(id => {
    const ctl = HOUSE.controls[id];
    lv(id).controls.forEach(c => assert.ok(ctl[c], id + ' ' + c));
  });
  HOUSE.rooms.filter(r => r.circuit).forEach(r => assert.ok(T.includes(r.circuit)));
  assert.equal(houseControls().length, 6);
});

test('la casa: una stanza si accende solo dopo la verifica, e l\'altra resta spenta', () => {
  const s = createSession({ levels, deriveFull, initialLevel: 't01-bagno' });
  s.skipLesson();
  assert.equal(houseState(s).rooms.bagno.state, 'da cablare');
  lv('t01-bagno').solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  assert.equal(houseState(s).rooms.bagno.state, 'in corso');
  s.toggleBreaker();
  s.toggleControl('S');
  assert.equal(houseState(s).rooms.bagno.lit, true);
  s.check();
  assert.equal(houseState(s).rooms.bagno.state, 'funziona');
  // si passa a un altro circuito: il bagno resta acceso, la camera no
  s.selectLevel('t02-camera');
  s.skipLesson();
  const h = houseState(s);
  assert.equal(h.rooms.bagno.lit, true);
  assert.equal(h.rooms.camera.lit, false);
  assert.equal(h.rooms.camera.state, 'da cablare');
  assert.equal(h.rooms.cucina.state, null);
});

test('la camera e il corridoio seguono la tabella di verita\' dei comandi', () => {
  const s = createSession({ levels, deriveFull, initialLevel: 't03-corridoio' });
  s.skipLesson();
  lv('t03-corridoio').solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.toggleBreaker();
  const seq = [];
  seq.push(houseState(s).rooms.corridoio.lit);
  ['D1', 'I', 'D2'].forEach(c => { s.toggleControl(c); seq.push(houseState(s).rooms.corridoio.lit); });
  assert.deepEqual(seq, [true, false, true, false]);   // ogni comando cambia lo stato della luce
});

import { readFileSync, statSync } from 'node:fs';

test('il pacchetto 3D e\' separato: la pagina principale non contiene three e il pacchetto e\' leggero', () => {
  const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.equal(index.includes('WebGLRenderer'), false);
  assert.ok(statSync(new URL('../trilocale.js', import.meta.url)).size < 700 * 1024);
});

test('i circuiti del trilocale restano sempre dal quadro e la casa non si scollega dal motore', () => {
  const s = createSession({ levels, deriveFull, initialLevel: 'c03-interrotto' });
  s.setMode('contatore');
  s.selectLevel('t01-bagno');
  assert.equal(s.snapshot().mode, 'quadro');
  s.setMode('contatore');
  assert.equal(s.snapshot().mode, 'quadro');
});

test('dopo un ricaricamento un circuito verificato si vede acceso con la sua soluzione', () => {
  const stars = { 't01-bagno': 3 };
  const s = createSession({ levels, deriveFull, initialLevel: 'c01-circuito-chiuso', storage: { load: () => ({ v: 2, stars, best: {}, last: null }), save() {} } });
  assert.equal(houseState(s, true).rooms.bagno.lit, true);
  assert.equal(houseState(s, false).rooms.bagno.lit, false);   // quadro generale spento
});

test('riaprendo un circuito gia\' verificato (levetta giu\') la sua luce resta accesa, a meno che tu non spenga il quadro generale', () => {
  const s = createSession({ levels, deriveFull, initialLevel: 't01-bagno' });
  s.skipLesson();
  lv('t01-bagno').solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  s.toggleBreaker(); s.toggleControl('S'); s.check();
  s.selectLevel('t02-camera'); s.selectLevel('t01-bagno');
  assert.equal(s.snapshot().power, false);                       // riaperto: levetta giu'
  assert.equal(houseState(s, true).rooms.bagno.lit, true);       // la casa e' alimentata
  assert.equal(houseState(s, false).rooms.bagno.lit, false);     // ... salvo che l'hai spenta tu
});
