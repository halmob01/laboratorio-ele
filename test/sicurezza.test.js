// Sicurezza funzionale (c25 fungo a due canali, c26 relè di sicurezza, c27 portella e barriera): motore e regole.

import test from 'node:test';
import assert from 'node:assert/strict';
import { levels } from '../src/content/index.js';
import { evaluateV2, createSim, act, observe } from '../src/engine/v2/index.js';

const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
const lv = id => levels.find(l => l.id === id);
const press = (sim, id) => { act(sim, 'press', id); act(sim, 'release', id); };
const lampOn = sim => observe(sim).loads.L === 'on';
const safeCodes = r => r.safe.items.map(i => i.code);

test('le soluzioni di c25, c26 e c27 danno tre stelle', () => {
  ['c25-fungo', 'c26-rele-sicurezza', 'c27-portella'].forEach(id => {
    const r = evaluateV2(lv(id), W(lv(id).solution));
    assert.equal(r.stars, 3, id + ' ' + JSON.stringify(r.safe.items));
  });
});

test('le sfide guasto non danno tre stelle e dicono perche', () => {
  const r25 = evaluateV2(lv('c25-fungo'), W(lv('c25-fungo').unit.fault.wires));
  assert.ok(safeCodes(r25).includes('safe.singleChannel'));
  const r26 = evaluateV2(lv('c26-rele-sicurezza'), W(lv('c26-rele-sicurezza').unit.fault.wires));
  assert.deepEqual(safeCodes(r26), ['safe.noFeedback']);
  const r27 = evaluateV2(lv('c27-portella'), W(lv('c27-portella').unit.fault.wires));
  assert.ok(r27.stars < 3);
});

test('c25: un relè incollato non impedisce all’altro di fermare la macchina', () => {
  const L = lv('c25-fungo');
  const sim = createSim(L, W(L.solution));
  assert.equal(lampOn(sim), true);
  act(sim, 'weld', 'K1');
  act(sim, 'toggle', 'E');
  assert.equal(lampOn(sim), false);
});

test('c26: la macchina parte solo dopo il riarmo e dopo l’emergenza non riparte da sola', () => {
  const L = lv('c26-rele-sicurezza');
  const sim = createSim(L, W(L.solution));
  assert.equal(lampOn(sim), false);
  press(sim, 'SBR');
  assert.equal(lampOn(sim), true);
  act(sim, 'toggle', 'E');
  assert.equal(lampOn(sim), false);
  act(sim, 'toggle', 'E');
  assert.equal(lampOn(sim), false);
  press(sim, 'SBR');
  assert.equal(lampOn(sim), true);
});

test('c26: con il contattore incollato il relè non si riarma', () => {
  const L = lv('c26-rele-sicurezza');
  const sim = createSim(L, W(L.solution));
  press(sim, 'SBR');
  act(sim, 'weld', 'KM');
  act(sim, 'toggle', 'E');
  assert.equal(lampOn(sim), true);          // il contattore incollato tiene la macchina in marcia
  act(sim, 'toggle', 'E');
  press(sim, 'SBR');
  assert.equal(sim.parts.KS.on, false);     // ma il relè lo ha scoperto e resta aperto
});

test('relè di sicurezza: il riarmo bloccato non parte da solo', () => {
  const L = lv('c26-rele-sicurezza');
  const ws = L.solution.filter(([a, b]) => !(a === 'KM.22' || b === 'KM.22' || a === 'SBR.3' || b === 'SBR.3' || a === 'KM.21' || b === 'KM.21' || a === 'SBR.4' || b === 'SBR.4'));
  ws.push(['Q.F', 'KS.R', 'marrone']);       // riarmo sempre attivo (ponticello): non deve armare il relè
  const sim = createSim(L, W(ws));
  assert.equal(sim.parts.KS.on, false);
  assert.equal(lampOn(sim), false);
});

test('c27: con un solo canale interrotto il relè segnala la discrepanza e non si riarma', () => {
  const L = lv('c27-portella');
  const sim = createSim(L, W(L.unit.fault.wires));
  press(sim, 'SBR');
  assert.equal(lampOn(sim), true);
  act(sim, 'toggle', 'P');                  // cade solo il canale 1
  assert.equal(lampOn(sim), false);
  act(sim, 'toggle', 'P');
  assert.equal(sim.parts.KS.disc, true);
  press(sim, 'SBR');
  assert.equal(lampOn(sim), false);
});

test('c27: la portella aperta e richiusa non fa ripartire la macchina', () => {
  const L = lv('c27-portella');
  const sim = createSim(L, W(L.solution));
  press(sim, 'SBR');
  act(sim, 'toggle', 'P');
  assert.equal(lampOn(sim), false);
  act(sim, 'toggle', 'P');
  assert.equal(lampOn(sim), false);
  press(sim, 'SBR');
  assert.equal(lampOn(sim), true);
});

const withWires = (L, drop, add) => L.solution.filter(([a, b]) => !drop.some(t => a === t || b === t)).concat(add);

test('riarmo ponticellato: il relè non si arma mai, nemmeno dopo un ciclo di alimentazione', async () => {
  const { setSupply } = await import('../src/engine/v2/index.js');
  const L = lv('c26-rele-sicurezza');
  const sim = createSim(L, W(withWires(L, ['KM.21', 'KM.22', 'SBR.3', 'SBR.4'], [['Q.F', 'KS.R', 'marrone']])));
  setSupply(sim, false); setSupply(sim, true);
  assert.equal(lampOn(sim), false);
  assert.equal(sim.parts.KS.on, false);
});

test('riarmo tenuto premuto mentre si sblocca il fungo: la macchina non parte, parte solo al rilascio e dopo un riarmo valido', () => {
  const L = lv('c26-rele-sicurezza');
  const sim = createSim(L, W(L.solution));
  press(sim, 'SBR');
  act(sim, 'toggle', 'E');                    // emergenza
  act(sim, 'press', 'SBR');                   // riarmo tenuto premuto
  act(sim, 'toggle', 'E');                    // sblocco con il riarmo ancora premuto
  act(sim, 'release', 'SBR');
  assert.equal(lampOn(sim), false);
  press(sim, 'SBR');
  assert.equal(lampOn(sim), true);
});

test('c26: il ponticello tra i canali dà meno di tre stelle', () => {
  const L = lv('c26-rele-sicurezza');
  const ws = withWires(L, ['E.3', 'E.4', 'KS.S22'], [['E.2', 'E.3', 'marrone'], ['E.4', 'KS.S12', 'marrone'], ['Q.F', 'KS.S22', 'marrone']].filter(([a]) => a !== 'E.2'));
  // canale 1 attraverso il fungo, canale 2 collegato direttamente alla fase: il fungo non lo interrompe
  const r = evaluateV2(L, W(ws));
  assert.ok(r.stars < 3);
});

test('c26: le due uscite del relè in parallelo non sono accettate', () => {
  const L = lv('c26-rele-sicurezza');
  const ws = withWires(L, ['KS.14', 'KS.23', 'KS.24'], [['Q.F', 'KS.23', 'marrone'], ['KS.14', 'KM.A1', 'marrone'], ['KS.24', 'KM.A1', 'marrone']]);
  const r = evaluateV2(L, W(ws));
  assert.ok(safeCodes(r).includes('safe.outputsParallel'));
});
