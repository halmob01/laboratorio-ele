// Turno a guasti nella sessione (c44): si gioca davvero, con l'orologio della vista e i comandi del banco.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';

const open = () => { const s = createSession({ levels, deriveFull, initialLevel: 'c01-circuito-chiuso' }); s.start(); s.selectLevel('c44-guasti'); s.skipLesson(); return s; };
const L = levels.find(l => l.id === 'c44-guasti');
const SPEED = L.process.speed;

// fa correre il turno fino al secondo `t` simulato con l'orologio della vista; ogni guasto si ripara `react` secondi dopo
// che e' scattato, con i comandi del banco (le azioni `fix` del livello)
const DO = { cut: (s, x) => s.cutPart(x), jam: (s, x) => s.jamPart(x), toggle: (s, x) => s.toggleControl(x), press: (s, x) => s.press(x), release: (s, x) => s.release(x) };
function playTo(s, t, react = null) {
  while (s.snapshot().obs.t < t) {
    s.tick(0.5);
    if (react === null) continue;
    const now = s.snapshot().obs.t;
    s.snapshot().obs.scenario.faults.forEach(f => {
      if (f.open && now >= f.firedAt + react) L.scenario.faults.find(x => x.id === f.id).fix.forEach(d => { const [a, x] = d.split(' '); DO[a](s, x); });
    });
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

test('c44: riparando i guasti in tempo la verifica passa; prima della fine dice di aspettare', () => {
  const s = open();
  assert.equal(s.check().work.items[0].code, 'work.scenarioNone', 'prima di dare corrente: il turno non e\' cominciato');
  s.toggleBreaker();
  playTo(s, 300, 20);
  const mid = s.check();
  assert.equal(mid.pass, false);
  assert.equal(mid.work.items[0].code, 'work.scenarioRunning');
  playTo(s, L.scenario.duration + 2, 20);
  assert.equal(s.snapshot().needsClock, false, 'a turno finito l\'orologio si ferma');
  assert.equal(s.check().pass, true);
});

test('c44: cominciato il turno il tempo corre anche togliendo la corrente', () => {
  const s = open();
  s.toggleBreaker();
  playTo(s, 20);
  s.toggleBreaker();
  assert.equal(s.snapshot().power, false);
  assert.equal(s.snapshot().needsClock, true);
  const t0 = s.snapshot().obs.t;
  s.tick(0.5);
  assert.equal(s.snapshot().obs.t, t0 + 0.5 * SPEED);
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
import { playShift, wiresOf, withSolutionPrograms } from './turno.js';
const L45 = levels.find(l => l.id === 'c45-fabbrica');
const W45 = wiresOf(L45);
const lv45 = withSolutionPrograms(L45);
const shift45 = react => playShift(L45, { start: L45.solutionStart, react });
const verify45 = sim => evaluateV2(L45, W45, { programs: L45.solutionPrograms, liveSim: sim });

test('c45: la soluzione passa le prove sul cablaggio e, riparando i guasti in tempo, il turno si consegna con almeno 20 pezzi', () => {
  const sim = shift45(() => 15);
  const r = verify45(sim);
  assert.equal(r.pass, true, JSON.stringify([r.work.items, r.color.items, r.safe.items]));
  assert.ok(observe(sim).process.out >= 20);
});

test('c45: riparando ogni guasto all\'ultimo secondo utile i pezzi bastano ancora (l\'obiettivo non contraddice i tempi massimi)', () => {
  const sim = shift45(f => f.maxDelay - f.fix.length - 1);
  const r = verify45(sim);
  assert.equal(r.pass, true, JSON.stringify(r.work.items));
});

test('c45: un guasto riparato oltre il tempo massimo fa fallire il turno', () => {
  const r = verify45(shift45(f => (f.id === 'f2' ? f.maxDelay + 5 : 15)));
  assert.equal(r.work.ok, false);
  assert.deepEqual([r.work.items[0].code, r.work.items[0].label], ['work.scenarioLate', L45.scenario.faults[1].label]);
});

test('c45: nessuna riparazione: i guasti restano aperti e la produzione si ferma', () => {
  const sim = shift45(() => null);
  const rep = observe(sim).scenario;
  assert.equal(rep.faults.every(f => f.firedAt !== null), true);
  assert.ok(observe(sim).process.out < 20);
  assert.equal(verify45(sim).work.ok, false);
});

test('c45: dopo il riarmo il robot finisce il ciclo interrotto e poi aspetta Marcia', () => {
  const sim = createSim({ ...lv45, scenario: { ...lv45.scenario, faults: [] } }, W45);   // senza i guasti del turno
  L45.solutionStart.forEach(d => { const [a, x] = d.split(' '); act(sim, a, x); advance(sim, 1); });
  advance(sim, 10);
  act(sim, 'toggle', 'E'); advance(sim, 2); act(sim, 'toggle', 'E');
  act(sim, 'press', 'SBR'); advance(sim, 1); act(sim, 'release', 'SBR');
  const out0 = observe(sim).process.out;
  advance(sim, 80);
  const o = observe(sim);
  assert.equal(o.process.out, out0 + 1, 'il ciclo interrotto si conclude, il successivo no');
  assert.equal(o.plc.PLC.bits.M9, false);
  act(sim, 'press', 'SB1'); advance(sim, 1); act(sim, 'release', 'SB1');
  advance(sim, 40);
  assert.ok(observe(sim).process.out > out0 + 1, 'con Marcia riparte');
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
