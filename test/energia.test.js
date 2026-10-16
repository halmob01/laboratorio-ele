// Modello `energia` e livelli del Modulo 5A (c39-c42): giornata, batteria, contatore, colonnina.

import test from 'node:test';
import assert from 'node:assert/strict';
import { MODELS, newProcess, stepProcess } from '../src/engine/v2/process.js';
import { createSim, advance, observe, evaluateV2 } from '../src/engine/v2/index.js';
import { levels } from '../src/content/index.js';

const run = (init, act, seconds, params = {}) => {
  const proc = { model: 'energia', init, params };
  return stepProcess(proc, newProcess(proc), act, seconds).state;
};
const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
const L = id => levels.find(l => l.id === id);

test('energia: il sole segue una campana tra alba e tramonto, zero di notte, e le nuvole la abbassano', () => {
  const at = (hour, params) => run({ hour }, { pv: 1 }, 0.1, params).pv;
  assert.equal(at(3), 0);
  assert.equal(at(22), 0);
  assert.ok(Math.abs(at(13) - 4) < 0.05, 'a mezzogiorno solare ~ 4 kW');
  assert.ok(at(9) < at(11) && at(17) < at(15));
  assert.ok(Math.abs(at(13, { cloud: 0.5 }) - 2) < 0.05);
});

test('energia: una giornata di 1440 s e l\'ora torna a zero', () => {
  assert.ok(Math.abs(run({ hour: 0 }, {}, 720).hour - 12) < 1e-6);
  assert.ok(Math.abs(run({ hour: 23 }, {}, 120).hour - 1) < 1e-6);
});

test('energia: bilancio della rete e dei contatori (prelievo, immissione)', () => {
  const noon = run({ hour: 13 }, { pv: 1, house: 1 }, 60);              // un'ora a mezzogiorno
  assert.ok(noon.grid < -3, 'immette');
  assert.ok(noon.eExp > 3 && noon.eImp === 0);
  const night = run({ hour: 2 }, { pv: 1, house: 1 }, 60);
  assert.ok(night.grid > 0.3 && night.eImp > 0.3 && night.eProd === 0);
});

test('energia: la batteria assorbe l\'eccedenza, si ferma al 100 % e di sera copre i consumi', () => {
  const day = run({ hour: 9, soc: 20 }, { pv: 1, house: 1, batt: 1 }, 600);
  assert.ok(day.soc > 95);
  const evening = run({ hour: 20, soc: 100 }, { pv: 1, house: 1, batt: 1 }, 180);
  assert.ok(evening.soc < 100 && evening.soc > 40);
  assert.ok(Math.abs(evening.grid) < 0.01, 'la rete non preleva finche\' c\'e\' batteria');
  const empty = run({ hour: 22, soc: 0 }, { pv: 1, house: 1, batt: 1 }, 30);
  assert.equal(empty.soc, 0);
  assert.ok(empty.grid > 0.3, 'senza carica torna a prelevare');
});

test('energia: oltre il limite per piu\' di tripAfter secondi il contatore stacca e non si riarma da solo', () => {
  let s = run({ hour: 22 }, { house: 1, ev: 1, boiler: 1 }, 10);
  assert.equal(s.blackout, 0);
  s = run({ ...s }, { house: 1, ev: 1, boiler: 1 }, 15);
  assert.equal(s.blackout, 1);
  assert.equal(s.load, 0);
  const proc = { model: 'energia', init: s };
  const again = stepProcess(proc, newProcess(proc), { house: 1 }, 30).state;
  assert.equal(again.blackout, 1);
  // sotto il limite il contatore non scatta
  assert.equal(run({ hour: 3 }, { house: 1, ev: 1 }, 100).blackout, 0);   // 0,4 + 3,7 = 4,1 kW
});

/* ---------- c39: pannelli e inverter in corrente continua ---------- */

test('c39: due pannelli in serie fanno funzionare l\'inverter, tre lo bruciano, uno o il parallelo non lo avviano', () => {
  const lv = L('c39-fotovoltaico');
  assert.equal(evaluateV2(lv, W(lv.solution)).pass, true);
  const code = ws => evaluateV2(lv, W(ws)).work.items.map(i => i.code);
  assert.ok(code([['P1.+', 'I.+', 'rosso'], ['P1.-', 'P2.+', 'rosso'], ['P2.-', 'P3.+', 'rosso'], ['P3.-', 'I.-', 'nero']]).includes('work.burnt'));
  assert.ok(code([['P1.+', 'I.+', 'rosso'], ['P1.-', 'I.-', 'nero']]).includes('work.checkFail'));
  assert.ok(code([['P1.+', 'I.+', 'rosso'], ['P2.+', 'I.+', 'rosso'], ['P1.-', 'I.-', 'nero'], ['P2.-', 'I.-', 'nero']]).includes('work.checkFail'));
});

test('c39: la tensione dei pannelli segue il sole e di notte e\' zero', () => {
  const lv = L('c39-fotovoltaico');
  const sim = createSim(lv, W(lv.solution));
  advance(sim, 180);                                   // ore 12
  const noon = observe(sim);
  assert.equal(noon.loads.I, 'on');
  assert.ok(noon.process.pv > 3.5);
  advance(sim, 800);                                   // dopo il tramonto
  assert.equal(observe(sim).loads.I, 'off');
});

/* ---------- c40-c42: programmi che gestiscono l'energia ---------- */

const withProgram = (lv, program) => ({ ...lv, comps: lv.comps.map(c => (c.type === 'plc' ? { ...c, program } : c)) });
const START = [{ if: ['ge', 'AI0', 3.6], do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: -6000, hi: 6000 }] }];

test('c40: la soluzione passa; senza isteresi (bobina) lo scaldabagno commuta di continuo', () => {
  const lv = L('c40-contatore');
  assert.equal(evaluateV2(lv, W(lv.solution), { programs: lv.solutionPrograms }).pass, true);
  const chatter = START.concat([{ if: ['lt', 'MW0', -2200], do: [{ op: 'coil', a: 'Q0' }] }]);
  const r = evaluateV2(lv, W(lv.solution), { programs: { PLC: chatter } });
  assert.equal(r.work.ok, false);
});

test('c41: la batteria collegata si carica di giorno e la sera la casa non preleva; scollegata la sera preleva', () => {
  const lv = L('c41-accumulo');
  assert.equal(evaluateV2(lv, W(lv.solution)).pass, true);
  const without = evaluateV2(lv, W([]));
  assert.equal(without.pass, false);
});

test('c42: la soluzione passa; senza Reset la casa va in blackout; con le soglie troppo vicine la colonnina rimbalza', () => {
  const lv = L('c42-colonnina');
  assert.equal(evaluateV2(lv, W(lv.solution), { programs: lv.solutionPrograms }).pass, true);
  const noReset = START.concat([{ if: ['lt', 'MW0', 500], do: [{ op: 'set', a: 'Q0' }] }]);
  const r1 = evaluateV2(lv, W(lv.solution), { programs: { PLC: noReset } });
  assert.equal(r1.work.ok, false);
  const close = START.concat([{ if: ['lt', 'MW0', 800], do: [{ op: 'set', a: 'Q0' }] }, { if: ['gt', 'MW0', 4300], do: [{ op: 'reset', a: 'Q0' }] }]);
  const r2 = evaluateV2(lv, W(lv.solution), { programs: { PLC: close } });
  assert.equal(r2.work.ok, false, 'soglie a meno di 3,7 kW una dall\'altra: la colonnina riparte appena staccata');
  const sim = createSim(withProgram(lv, lv.solutionPrograms.PLC), W(lv.solution));
  advance(sim, 420);
  const o = observe(sim);
  assert.equal(o.process.blackout, false);
  assert.ok(o.process.eEv > 3);
});
