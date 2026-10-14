// Passi dell'esercizio e fotogrammi della dimostrazione.

import test from 'node:test';
import assert from 'node:assert/strict';
import { stepsState, ghostFor, demoFrames, blankSnap } from '../src/engine/index.js';
import { levels } from '../src/content/index.js';

const L = levels.find(l => l.id === 'c01-circuito-chiuso');
const steps = L.unit.steps;
const w = (id, a, b) => ({ id, a, b, c: 'marrone' });

test('passi: sono sequenziali e il corrente e\' il primo non fatto', () => {
  let st = stepsState(steps, [], { power: false, operated: [], result: null });
  assert.deepEqual(st.done, [false, false, false, false]);
  assert.equal(st.current, 0);
  st = stepsState(steps, [w(1, 'Q.F', 'L.A')], { power: false });
  assert.deepEqual(st.done, [true, false, false, false]);
  assert.equal(st.current, 1);
});

test('passi: A e B sono equivalenti e il colore non conta per il passo', () => {
  const a = stepsState(steps, [w(1, 'Q.F', 'L.B')], {});
  const b = stepsState(steps, [{ id: 1, a: 'L.A', b: 'Q.F', c: 'blu' }], {});
  assert.equal(a.done[0], true);
  assert.equal(b.done[0], true);
});

test('passi: la levetta senza i fili non conta, perche\' i passi sono in ordine', () => {
  const st = stepsState(steps, [], { power: true });
  assert.deepEqual(st.done, [false, false, false, false]);
  const ok = stepsState(steps, [w(1, 'Q.F', 'L.A'), w(2, 'Q.N', 'L.B')], { power: true, result: { pass: true } });
  assert.deepEqual(ok.done, [true, true, true, true]);
  assert.equal(ok.current, null);
});

test('passi: un comando conta solo se azionato con il quadro acceso', () => {
  const s = [{ kind: 'control', id: 'S' }];
  assert.equal(stepsState(s, [], { operated: [] }).done[0], false);
  assert.equal(stepsState(s, [], { operated: ['S'] }).done[0], true);
});

test('tratteggio: il primo morsetto di arrivo ancora libero', () => {
  assert.deepEqual(ghostFor(steps[0], []), ['Q.F', 'L.A', 'marrone']);
  assert.deepEqual(ghostFor(steps[1], [w(1, 'Q.F', 'L.A')]), ['Q.N', 'L.B', 'blu']);
  assert.equal(ghostFor(steps[2], []), null);           // solo per i passi di cablaggio
});

test('dimostrazione: un fotogramma per filo, poi la corrente, e la luce si accende', () => {
  levels.filter(l => l.solution).forEach(l => {
    const f = demoFrames(l, {});
    const base = l.solution.length + 1 + (l.controls || []).length;
    assert.equal(f.length, base, l.id);
    assert.equal(f[0].snap.wires.length, 1);
    assert.equal(f[l.solution.length - 1].snap.wires.length, l.solution.length);
    if (l.engine !== 2 || !f[0].snap.selfPowered) assert.equal(f[l.solution.length - 1].snap.power, false);   // con le protezioni proprie l'alimentazione e' sempre data
    assert.equal(f[l.solution.length].snap.power, true);
    // in almeno un fotogramma la luce e' accesa (con i comandi azionati la luce puo' anche spegnersi)
    assert.ok(f.some(x => x.snap.lit), l.id);
  });
});

test('dimostrazione: didascalie e filo nuovo', () => {
  const f = demoFrames(L, { wires: ['uno', 'due'], power: 'luce' });
  assert.deepEqual(f.map(x => x.caption), ['uno', 'due', 'luce']);
  assert.deepEqual(f.map(x => x.newWire), [1, 2, null]);
  assert.equal(f[2].snap.lit, true);
  assert.equal(f[2].snap.flow.current, true);
});

test('istantanea vuota per le pagine "I pezzi"', () => {
  const b = blankSnap(L);
  assert.equal(b.wires.length, 0);
  assert.equal(b.lit, false);
  assert.equal(b.potential('Q.F'), 'F');                // il morsetto della fase e' in tensione
});
