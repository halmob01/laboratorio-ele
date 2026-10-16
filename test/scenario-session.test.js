// Turno a guasti nella sessione (c44): si gioca davvero, con l'orologio della vista e i comandi del banco.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';

const open = () => { const s = createSession({ levels, deriveFull, initialLevel: 'c01-circuito-chiuso' }); s.start(); s.selectLevel('c44-guasti'); s.skipLesson(); return s; };
const L = levels.find(l => l.id === 'c44-guasti');
const SPEED = L.process.speed;

// fa correre il turno fino al secondo `t` simulato eseguendo le riparazioni all'ora data
function playTo(s, t, fixes = []) {
  const todo = fixes.slice();
  while (s.snapshot().obs.t < t) {
    s.tick(0.5);
    const now = s.snapshot().obs.t;
    while (todo.length && todo[0].at <= now) {
      const f = todo.shift();
      if (f.do === 'cut TT') s.cutPart('TT'); else if (f.do === 'jam LH') s.jamPart('LH'); else if (f.do === 'toggle HMI') s.toggleControl('HMI');
    }
  }
}

test('c44: il turno parte quando si da\' corrente, i guasti arrivano a tempo e le riparazioni si fanno dal banco', () => {
  const s = open();
  s.toggleBreaker();
  assert.equal(s.snapshot().needsClock, true);
  assert.equal(s.snapshot().obs.scenario.faults.every(f => f.firedAt === null), true);
  playTo(s, 80);
  let f = s.snapshot().obs.scenario.faults;
  assert.deepEqual(f.map(x => x.firedAt !== null), [true, false, false]);
  assert.equal(s.snapshot().obs.parts.TT.cut, true);
  assert.equal(s.snapshot().obs.hmi.alarms.some(a => a.id === 'A2'), true, 'il pannello segnala il guasto');
  s.cutPart('TT');
  assert.equal(s.snapshot().obs.parts.TT.cut, false);
  assert.notEqual(s.snapshot().obs.scenario.faults[0].fixedAt, null);
});

test('c44: giocando il turno di riferimento la verifica passa; prima della fine dice di aspettare', () => {
  const s = open();
  s.toggleBreaker();
  playTo(s, 300, L.solutionPlay);
  const mid = s.check();
  assert.equal(mid.pass, false);
  assert.equal(mid.work.items[0].code, 'work.scenarioRunning');
  playTo(s, L.scenario.duration + 2, L.solutionPlay.filter(x => x.at > 300));
  assert.equal(s.snapshot().needsClock, false, 'a turno finito l\'orologio si ferma');
  assert.equal(s.check().pass, true);
});

test('c44: lasciando i guasti aperti la verifica non passa e "Ricomincia il turno" riparte da zero', () => {
  const s = open();
  s.toggleBreaker();
  playTo(s, L.scenario.duration + 2);
  const r = s.check();
  assert.equal(r.pass, false);
  s.restartShift();
  const o = s.snapshot().obs;
  assert.equal(o.t, 0);
  assert.equal(o.scenario.faults.every(f => f.firedAt === null), true);
  assert.ok(SPEED > 1);
});

/* ---------- c45: la fabbrica ---------- */
import { createSim, advance, act, observe, evaluateV2 } from '../src/engine/v2/index.js';
const L45 = levels.find(l => l.id === 'c45-fabbrica');
const W45 = L45.solution.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
const lv45 = { ...L45, comps: L45.comps.map(c => (c.type === 'plc' ? { ...c, program: L45.solutionPrograms.PLC } : c)) };

function shift45(plays) {
  const sim = createSim(lv45, W45);
  const todo = plays.slice().sort((a, b) => a.at - b.at);
  let t = 0;
  while (t < L45.scenario.duration + 2) {
    advance(sim, 1); t += 1;
    while (todo.length && todo[0].at <= t) { const [a, x] = todo.shift().do.split(' '); act(sim, a, x); }
  }
  return sim;
}

test('c45: la soluzione passa le prove sul cablaggio e il turno di riferimento si consegna con almeno 20 pezzi', () => {
  const sim = shift45(L45.solutionPlay);
  const r = evaluateV2(L45, W45, { programs: L45.solutionPrograms, liveSim: sim });
  assert.equal(r.pass, true, JSON.stringify([r.work.items, r.color.items, r.safe.items]));
  assert.ok(observe(sim).process.out >= 20);
});

test('c45: nessuna riparazione: i guasti restano aperti e la produzione si ferma', () => {
  const sim = shift45(L45.solutionPlay.filter(x => x.at <= 5));
  const rep = observe(sim).scenario;
  assert.equal(rep.faults.every(f => f.firedAt !== null), true);
  const r = evaluateV2(L45, W45, { programs: L45.solutionPrograms, liveSim: sim });
  assert.equal(r.work.ok, false);
});

test('c45: i guasti si leggono dal pannello (ciclo bloccato con il sensore guasto, sicurezze aperte con il fungo)', () => {
  const sim = createSim(lv45, W45);
  const go = (s) => { advance(sim, s); return observe(sim); };
  act(sim, 'press', 'SBR'); advance(sim, 1); act(sim, 'release', 'SBR'); advance(sim, 1);
  act(sim, 'press', 'SB1'); advance(sim, 1); act(sim, 'release', 'SB1');
  let o = go(95);                                                // produce
  assert.ok(o.process.out >= 4);
  o = go(120);                                                   // il finecorsa muore a 100 s: dopo 40 s di ciclo il pannello segnala
  assert.equal(o.hmi.alarms.some(a => a.id === 'A1'), true);
  assert.equal(o.parts.ZD.jam, true);
});

test('c45: dopo un\'emergenza il robot e\' fermo dov\'e\' e riparte solo dopo il riarmo', () => {
  const sim = createSim(lv45, W45);
  act(sim, 'press', 'SBR'); advance(sim, 1); act(sim, 'release', 'SBR'); advance(sim, 1);
  act(sim, 'press', 'SB1'); advance(sim, 1); act(sim, 'release', 'SB1');
  advance(sim, 10);
  act(sim, 'toggle', 'E');
  const pose = () => { const p = observe(sim).process; return [p.z, p.x, p.grip].join('/'); };
  const z0 = pose();
  advance(sim, 10);
  assert.equal(pose(), z0, 'fermo');
  assert.equal(observe(sim).loads.L, 'off');
  act(sim, 'toggle', 'E');
  advance(sim, 5);
  assert.equal(pose(), z0, 'richiuso ma senza riarmo non riparte');
  act(sim, 'press', 'SBR'); advance(sim, 1); act(sim, 'release', 'SBR');
  advance(sim, 10);
  assert.notEqual(pose(), z0);
});
