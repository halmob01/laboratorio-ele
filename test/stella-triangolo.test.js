// Stella-triangolo (c28): motore a sei morsetti, temporizzatore ritardato, interblocco di KM2 e KM3.

import test from 'node:test';
import assert from 'node:assert/strict';
import { levels } from '../src/content/index.js';
import { createSim, act, advance, observe, evaluateV2 } from '../src/engine/v2/index.js';
import { createSession } from '../src/engine/index.js';
import { deriveFull } from '../src/content/index.js';

const L = levels.find(l => l.id === 'c28-stella-triangolo');
const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
const without = (...pairs) => L.solution.filter(([a, b]) => !pairs.some(([x, y]) => (x === a && y === b) || (x === b && y === a)));
const press = (s, id) => { act(s, 'press', id); act(s, 'release', id); };
const codes = r => ['work', 'color', 'safe'].flatMap(k => r[k].items.map(i => i.code));

test('la soluzione di c28 dà tre stelle', () => {
  const r = evaluateV2(L, W(L.solution));
  assert.equal(r.pass, true, JSON.stringify(r));
});

test('parte in stella, passa in triangolo dopo il ritardo, si ferma e riparte in stella', () => {
  const s = createSim(L, W(L.solution));
  press(s, 'SB1');
  assert.deepEqual([observe(s).motors.M, observe(s).modes.M], ['fwd', 'star']);
  advance(s, 5);
  assert.equal(observe(s).modes.M, 'star', 'il ritardo non è ancora scaduto');
  advance(s, 1);
  assert.deepEqual([observe(s).motors.M, observe(s).modes.M], ['fwd', 'delta']);
  press(s, 'SB0');
  assert.equal(observe(s).motors.M, 'off');
  press(s, 'SB1');
  assert.equal(observe(s).modes.M, 'star');
});

test('il temporizzatore riparte da zero quando la bobina si diseccita', () => {
  const s = createSim(L, W(L.solution));
  press(s, 'SB1'); advance(s, 4);
  press(s, 'SB0');
  press(s, 'SB1'); advance(s, 4);
  assert.equal(observe(s).modes.M, 'star');
});

test('senza il neutro sulla bobina di KM3 il motore parte in stella e si ferma al cambio', () => {
  const ws = W(without(['KM3.A2', 'Q.N']));
  const s = createSim(L, ws);
  press(s, 'SB1');
  assert.equal(observe(s).modes.M, 'star');
  advance(s, 8);
  assert.equal(observe(s).motors.M, 'off');
  assert.equal(observe(s).parts.KM3.on, false);
  assert.equal(evaluateV2(L, ws).pass, false);
});

test('un motore che resta in stella troppo a lungo fa scattare il termico', () => {
  const Lt = { ...L, comps: L.comps.concat([{ id: 'FT', type: 'ft', short: 'FT', title: 'FT', terms: { '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '95': {}, '96': {}, '97': {}, '98': {} } }]), starLimit: 12 };
  // il termico FT sta tra KM1 e il motore (i fili KM1-motore passano da FT)
  const ws = W(L.solution.filter(([a, b]) => !(['KM1.2', 'KM1.4', 'KM1.6'].includes(a) && b.startsWith('M.'))).concat([['KM1.2', 'FT.1', 'marrone'], ['KM1.4', 'FT.3', 'nero'], ['KM1.6', 'FT.5', 'grigio'], ['FT.2', 'M.U1', 'marrone'], ['FT.4', 'M.V1', 'nero'], ['FT.6', 'M.W1', 'grigio']]));
  // la bobina di KM2 e' collegata direttamente al comando (KT escluso): KM2 resta chiuso e il motore non passa mai in triangolo
  ws.push({ id: 99, a: 'KM1.A1', b: 'KM2.A1', c: 'rosso' });
  const s = createSim(Lt, ws);
  press(s, 'SB1');
  advance(s, 10);
  assert.equal(observe(s).modes.M, 'star');
  assert.deepEqual(observe(s).tripped, []);
  advance(s, 30);
  assert.deepEqual(observe(s).tripped, ['FT']);
});

test('senza i due contatti NC incrociati la verifica segnala l’interblocco', () => {
  const sw = [['KT.16', 'KM2.A1', 'rosso'], ['KT.18', 'KM3.A1', 'rosso']];
  const ws = without(['KT.16', 'KM3.21'], ['KM3.22', 'KM2.A1'], ['KT.18', 'KM2.21'], ['KM2.22', 'KM3.A1']).concat(sw);
  const r = evaluateV2(L, W(ws));
  assert.ok(codes(r).includes('safe.interlock'), JSON.stringify(r.safe.items));
});

test('con KM2 incollato KM3 non si chiude: la soluzione resiste', () => {
  const s = createSim(L, W(L.solution));
  press(s, 'SB1');
  act(s, 'weld', 'KM2');
  advance(s, 10);
  assert.equal(observe(s).parts.KM3.on, false);
  assert.deepEqual(observe(s).tripped, []);
});

test('stella e triangolo chiusi insieme mettono in corto le fasi', () => {
  const ws = W(L.solution.concat([['KM3.A1', 'KM2.A1', 'rosso']]));
  const s = createSim(L, ws);
  press(s, 'SB1');
  advance(s, 10);
  assert.ok(observe(s).tripped.includes('QM') || observe(s).faults.some(f => f.code === 'corto' || f.code === 'quadro'));
});

test('con due fasi sole il motore a sei morsetti ronza', () => {
  const s = createSim(L, W(without(['QM.6', 'KM1.5'])));
  press(s, 'SB1');
  assert.equal(observe(s).motors.M, 'hum');
});

test('i fili posati non si tolgono: Annulla tutto li lascia, il salvataggio non li contiene', () => {
  let saved = null;
  const s = createSession({ levels, deriveFull, initialLevel: L.id, storage: { saveWork: w => { saved = JSON.parse(JSON.stringify(w)); }, loadWork: () => saved } });
  s.skipLesson();
  s.toggleControl('QM');   // si cabla con il salvamotore aperto
  const nFixed = L.fixed.length;
  assert.equal(s.snapshot().wires.length, nFixed);
  L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  assert.equal(s.snapshot().wires.length, L.solution.length, 'i fili già posati non si duplicano né si tolgono');
  s.removeWire(-1);
  s.undo();
  assert.ok(s.snapshot().wires.some(w => w.id === -1));
  assert.equal(s.snapshot().wires.length, L.solution.length - 1);
  s.clear();
  assert.equal(s.snapshot().wires.length, nFixed);
  assert.ok(s.snapshot().wires.every(w => w.fixed));
  assert.equal(s.snapshot().controlStates.QM, 0, 'Annulla tutto non richiude il salvamotore');
  L.solution.forEach(([a, b, c]) => s.addWire(a, b, c));
  assert.equal(s.check().pass, true);
  const w = saved && Object.values(saved.w)[0];
  assert.ok(w && w.wires.length === L.solution.length - nFixed, 'si salvano solo i fili dell’allievo');
});
