// Cablaggi alternativi che la revisione ha trovato accettati a torto: ora devono fallire.
import test from 'node:test';
import assert from 'node:assert/strict';
import { LEVELS_V2 } from '../src/content/levels-v2.js';
import { evaluateV2, createSim, setSupply, observe, advance, act, needsClock } from '../src/engine/v2/index.js';

const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
const L = id => LEVELS_V2.find(l => l.id === id);
const without = (sol, ...pairs) => sol.filter(([a, b]) => !pairs.some(([x, y]) => (a === x && b === y) || (a === y && b === x)));
const codes = r => r.safe.items.map(i => i.code);

test('c15: interblocco su un solo contattore non basta', () => {
  const lv = L('c15-inversione');
  // KM1 senza interblocco: bobina di KM1 direttamente da Avanti
  const sol = without(lv.solution, ['SB1.4', 'KM2.21'], ['KM2.22', 'KM1.A1']).concat([['SB1.4', 'KM1.A1', 'rosso']]);
  const r = evaluateV2(lv, W(sol));
  assert.equal(r.pass, false);
  assert.ok(codes(r).includes('safe.interlock'), JSON.stringify(r.safe.items));
});

test('c13: una fase che salta salvamotore e contattore e' + ' rilevata', () => {
  const lv = L('c13-marcia-arresto');
  const sol = without(lv.solution, ['KM.6', 'M.W']).concat([['Q.L3', 'M.W', 'grigio']]);
  const r = evaluateV2(lv, W(sol));
  assert.equal(r.pass, false);
  assert.ok(codes(r).includes('safe.motorLive'), JSON.stringify(r.safe.items));
});

test('c13: comando sul lato del neutro rifiutato', () => {
  const lv = L('c13-marcia-arresto');
  // arresto e marcia tra neutro e A2, A1 sulla fase
  const sol = [
    ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
    ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
    ['KM.2', 'M.U', 'marrone'], ['KM.4', 'M.V', 'nero'], ['KM.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
    ['QM.2', 'KM.A1', 'rosso'], ['KM.A2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'], ['SB1.4', 'Q.N', 'blu'],
    ['SB1.3', 'KM.13', 'rosso'], ['KM.14', 'SB1.4', 'rosso'], ['H.X1', 'KM.A1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
  ];
  const r = evaluateV2(lv, W(sol));
  assert.equal(r.pass, false);
});

test('c08 e c09: pulsanti sul lato del neutro rifiutati', () => {
  const c8 = L('c08-rele-impulsi');
  const sol8 = [
    ['Q.N', 'P1.3', 'blu'], ['P1.3', 'P2.3', 'blu'], ['P2.3', 'P3.3', 'blu'],
    ['P1.4', 'P2.4', 'blu'], ['P2.4', 'P3.4', 'blu'], ['P3.4', 'K.A2', 'blu'],
    ['K.A1', 'Q.F', 'marrone'], ['Q.F', 'K.1', 'marrone'], ['K.2', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
  ];
  assert.equal(evaluateV2(c8, W(sol8)).pass, false);
});

test('c14: il sovraccarico fa scattare il termico anche senza macchina (orologio)', () => {
  const lv = L('c14-termico');
  const sim = createSim(lv, W(lv.solution));
  setSupply(sim, true);
  act(sim, 'press', 'SB1'); act(sim, 'release', 'SB1');
  sim.overload = true;
  const o = observe(sim);
  assert.equal(o.overload, true);
  assert.equal(needsClock(lv, o), true);
  advance(sim, 5);
  assert.deepEqual(observe(sim).tripped, ['FR']);
});

test('c11: la prova del differenziale e c10: il pulsante e sul secondario', () => {
  const c10 = L('c10-campanello');
  assert.ok(c10.solution.some(([a, b]) => (a === 'TR.3' && b === 'SB.3')));
  const sim = createSim(c10, W(c10.solution));
  setSupply(sim, true);
  assert.equal(observe(sim).loads.B, 'off');
  act(sim, 'press', 'SB');
  assert.equal(observe(sim).loads.B, 'on');
});
