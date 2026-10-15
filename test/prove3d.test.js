// Stato che le scene 3D delle prove leggono dalla sessione (funzioni pure, senza grafica).

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';
import { provaState, isProvaLevel } from '../src/prove/state.js';

const open = id => { const s = createSession({ levels, deriveFull, initialLevel: id }); s.start(); s.skipLesson(); return s; };

test('c23: lo stato della scena segue il quadro e la dispersione', () => {
  const s = open('c23-appartamento-notte');
  assert.ok(isProvaLevel(s.snapshot().level));
  let st = provaState(s.snapshot());
  assert.equal(st.scene, 'appartamento');
  assert.equal(st.rcd.tripped, true);
  assert.equal(st.dark, true);
  assert.equal(st.heaterPlugged, true);
  ['M1', 'M2', 'M3'].forEach(id => s.toggleControl(id));
  s.toggleControl('D');
  s.toggleControl('M1');   // l'interruttore del corridoio e' gia' chiuso: la luce era accesa quando il differenziale e' scattato
  st = provaState(s.snapshot());
  assert.equal(st.switchOn, true);
  assert.equal(st.rcd.on, true);
  assert.equal(st.lines.luce.on, true);
  assert.equal(st.lines.prese.on, false);
  assert.equal(st.lamp, true);
  assert.equal(st.dark, false);
  s.toggleControl('M3');
  assert.equal(provaState(s.snapshot()).oven, true);
});

test('c24: lo stato della scena segue il nastro, il termico e la pulsantiera', () => {
  const s = open('c24-officina');
  let st = provaState(s.snapshot());
  assert.equal(st.scene, 'officina');
  assert.equal(st.motor, 'off');
  assert.equal(st.length, 6);
  assert.equal(st.qm, true);
  s.press('SB1');
  st = provaState(s.snapshot());
  assert.equal(st.start, true);
  s.release('SB1');
  st = provaState(s.snapshot());
  assert.equal(st.motor, 'fwd');
  assert.equal(st.lamp, true);
  assert.equal(st.contactor, true);
  s.setOverload(true);
  for (let i = 0; i < 7; i++) s.tick(0.5);
  st = provaState(s.snapshot());
  assert.equal(st.thermal.tripped, true);
  assert.equal(st.motor, 'fwd');                 // il guasto: il termico e' scattato e il nastro gira
  assert.equal(st.overload, true);
});

test('c24: il pacco avanza sul nastro e si ferma a fine corsa', () => {
  const s = open('c24-officina');
  s.press('SB1'); s.release('SB1');
  s.tick(1);
  const p1 = provaState(s.snapshot()).pos;
  assert.ok(p1 > 0 && p1 < 6);
  for (let i = 0; i < 30; i++) s.tick(0.5);
  const st = provaState(s.snapshot());
  assert.equal(st.atEnd, true);
  assert.equal(st.motor, 'off');
});

test('un livello che non e’ una prova non ha stato di scena', () => {
  const s = createSession({ levels, deriveFull, initialLevel: 'c11-quadro' });
  s.start();
  assert.equal(provaState(s.snapshot()), null);
});
