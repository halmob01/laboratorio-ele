// Editor del ladder: funzioni pure di modifica del programma.

import test from 'node:test';
import assert from 'node:assert/strict';
import { toCells, fromCells, addRung, removeRung, moveRung, addContact, setContact, removeContact, addParallel, addOut, setOut, removeOut, editable, addressesFor } from '../src/engine/ladder-edit.js';
import { scan, newMem, validateProgram } from '../src/engine/v2/plc.js';

test('espressione <-> celle in serie', () => {
  const e = ['and', ['or', 'I1', 'Q0'], ['not', 'I2']];
  assert.deepEqual(toCells(e), [{ alts: [{ a: 'I1' }, { a: 'Q0' }] }, { alts: [{ a: 'I2', not: true }] }]);
  assert.deepEqual(fromCells(toCells(e)), e);
  assert.equal(fromCells([]), undefined);
  assert.deepEqual(toCells('I0'), [{ alts: [{ a: 'I0' }] }]);
  assert.equal(toCells(['and', ['and', 'I0', 'I1'], 'I2']), null, 'annidamenti che l\'editor non sa modificare');
});

test('si costruisce l\'autoritenuta passo per passo e il programma funziona', () => {
  let p = addRung([]);
  p = addContact(p, 0, { a: 'I1' });
  p = addParallel(p, 0, 0, { a: 'Q0' });
  p = addContact(p, 0, { a: 'I0' });
  p = addOut(p, 0, { op: 'coil', a: 'Q0' });
  assert.deepEqual(p[0].if, ['and', ['or', 'I1', 'Q0'], 'I0']);
  assert.deepEqual(validateProgram(p, { I: 4, Q: 2 }), []);
  let mem = newMem(); const q = [];
  [{ I0: true, I1: true }, { I0: true, I1: false }, { I0: false, I1: false }].forEach(i => { const r = scan(p, i, mem, 0); mem = r.mem; q.push(!!r.outputs.Q0); });
  assert.deepEqual(q, [true, true, false]);
});

test('le funzioni non modificano il programma dato', () => {
  const p = addOut(addContact(addRung([]), 0, { a: 'I0' }), 0, { op: 'coil', a: 'Q0' });
  const s = JSON.stringify(p);
  addContact(p, 0, { a: 'I1' }); setContact(p, 0, 0, 0, { a: 'I2' }); removeContact(p, 0, 0, 0); removeRung(p, 0); moveRung(p, 0, 1); setOut(p, 0, 0, { op: 'set', a: 'Q0' }); removeOut(p, 0, 0);
  assert.equal(JSON.stringify(p), s);
});

test('cambiare e togliere contatti, spostare gradini', () => {
  let p = addRung(addRung([]));
  p = addContact(p, 0, { a: 'I0' });
  p = addContact(p, 0, { a: 'I1' });
  p = setContact(p, 0, 1, 0, { a: 'I1', not: true });
  assert.deepEqual(p[0].if, ['and', 'I0', ['not', 'I1']]);
  p = removeContact(p, 0, 0, 0);
  assert.deepEqual(p[0].if, ['not', 'I1']);
  p = removeContact(p, 0, 0, 0);
  assert.equal('if' in p[0], false);
  p = addContact(p, 1, { a: 'I2' });
  p = moveRung(p, 1, -1);
  assert.equal(p[0].if, 'I2');
  assert.equal(moveRung(p, 0, -1)[0].if, 'I2', 'in cima non si sposta oltre');
  assert.equal(removeRung(p, 0).length, 1);
});

test('un gradino non modificabile resta com\'e\'', () => {
  const p = [{ if: ['and', ['and', 'I0', 'I1'], 'I2'], do: [{ op: 'coil', a: 'Q0' }] }];
  assert.equal(editable(p[0]), false);
  assert.deepEqual(addContact(p, 0, { a: 'I3' }), p);
});

test('indirizzi scelibili: ingressi e uscite del PLC, merker, temporizzatori e contatori se il livello li permette', () => {
  const plc = { terms: { A1: {}, A2: {}, IC: {}, I0: {}, I1: {}, Q0A: {}, Q0B: {}, Q1A: {}, Q1B: {} } };
  const a = addressesFor(plc, { markers: 2, timers: 1 });
  assert.deepEqual(a, { inputs: ['I0', 'I1'], outputs: ['Q0', 'Q1'], markers: ['M0', 'M1'], timers: ['T1'], counters: [] });
});
