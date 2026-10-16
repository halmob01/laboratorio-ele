// La prova della fabbrica (c53, il turno di notte): guasti estratti con il seme, turno che comincia al riarmo, tempo di fermo,
// riparare dentro la cella solo a robot senza potenza. Prima il motore (test/turno.js), poi la sessione con i comandi del banco.
// Specifica: docs/PROGETTO-FABBRICA.md.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';
import { LEVELS_V2, LIB_53, W53_PLANT } from '../src/content/levels-v2.js';
import { scenarioFaults, scenarioReport, observe } from '../src/engine/v2/index.js';
import { playShift } from './turno.js';

const ID = 'c53-turno-notte';
const L = LEVELS_V2.find(l => l.id === ID);
const withSeed = seed => ({ ...L, scenario: { ...L.scenario, seed } });

test('c53: i guasti del turno vengono dalla libreria; il primo e\' sempre il finecorsa, lo stesso seme da\' lo stesso turno', () => {
  const seq = seed => scenarioFaults(L.scenario, seed).map(f => f.id + '@' + f.at);
  assert.deepEqual(seq(7), seq(7));
  const all = [1, 2, 3, 4, 5, 6, 7, 8].map(seq);
  all.forEach(s => {
    assert.equal(s.length, 4);
    assert.equal(s[0], 'zd@200');
    assert.deepEqual(s.map(x => +x.split('@')[1]), L.scenario.pick.slots);
    assert.equal(new Set(s.map(x => x.split('@')[0])).size, 4, 'niente guasti ripetuti');
  });
  assert.ok(new Set(all.map(s => s.join())).size > 3, 'semi diversi, turni diversi');
  assert.ok(scenarioFaults(L.scenario, 3).every(f => LIB_53.some(x => x.id === f.id)));
  // c44 e c45 non hanno `pick`: i loro guasti restano quelli scritti
  const c45 = LEVELS_V2.find(l => l.id === 'c45-fabbrica');
  assert.deepEqual(scenarioFaults(c45.scenario).map(f => f.at), c45.scenario.faults.map(f => f.at));
});

test('c53: partita di riferimento: riparando in tempo si arriva all\'obiettivo; senza riparare no', () => {
  [1, 2, 7].forEach(seed => {
    const sim = playShift(withSeed(seed), { start: L.solutionStart, react: () => 30 });
    const r = scenarioReport(sim), p = observe(sim).process;
    assert.equal(r.done, true);
    assert.equal(r.faults.filter(f => f.open || f.late).length, 0, 'seme ' + seed);
    assert.equal(p.crash, false);
    assert.equal(p.dropped, 0);
    assert.ok(p.out >= L.scenario.expect.trace[0].reaches, `seme ${seed}: ${p.out} pezzi`);
    assert.ok(r.down > 0 && r.down < 150, `seme ${seed}: fermo ${r.down} s`);
  });
  const none = playShift(withSeed(1), { start: L.solutionStart, react: () => null });
  assert.ok(observe(none).process.out < L.scenario.expect.trace[0].reaches);
  assert.ok(scenarioReport(none).down > 1000, 'senza riparare la cella resta ferma quasi tutto il turno');
});

test('c53: il turno comincia quando il robot riceve potenza (riarmo), non quando si apre il livello', () => {
  const sim = playShift(withSeed(1), { start: [], react: () => null, extra: -1700 });
  const r = scenarioReport(sim);
  assert.equal(r.started, false);
  assert.equal(r.t, 0);
  assert.ok(r.faults.every(f => f.firedAt === null));
});

/* ---------- nella sessione ---------- */
const open = () => { const s = createSession({ levels, deriveFull, initialLevel: ID }); s.start(); s.skipLesson(); return s; };
const DO = { jam: (s, x) => s.jamPart(x), toggle: (s, x) => s.toggleControl(x), press: (s, x) => s.press(x), release: (s, x) => s.release(x) };
const run = (s, list) => list.forEach(d => { const [a, x] = d.split(' '); DO[a](s, x); });
function playTo(s, t, react = null) {
  const done = new Set();
  for (let guard = 0; guard < 5000 && s.snapshot().obs.scenario.t < t && !s.snapshot().obs.scenario.done; guard++) {
    s.tick(0.5);
    if (react === null) continue;
    const sc = s.snapshot().obs.scenario;
    sc.faults.forEach(f => {
      if (!f.open || done.has(f.id) || sc.t < f.firedAt + react) return;
      done.add(f.id);
      run(s, LIB_53.find(x => x.id === f.id).fix);
    });
  }
}

test('c53: la prova parte con la cella cablata e programmata; il turno parte al riarmo', () => {
  const s = open();
  const sn = s.snapshot();
  assert.equal(sn.unit.phase, 'fault');
  assert.equal(sn.unit.prova, true);
  assert.ok(sn.wires.length > W53_PLANT.length, 'cablaggio della sicurezza e del PLC');
  for (let i = 0; i < 20; i++) s.tick(0.5);
  assert.equal(s.snapshot().obs.scenario.started, false, 'senza riarmo il turno non comincia');
  run(s, L.solutionStart);
  s.tick(0.5);
  assert.equal(s.snapshot().obs.scenario.started, true);
  assert.equal(s.snapshot().obs.loads.L, 'on', 'il robot e\' alimentato');
});

test('c53: riparando dentro la cella a portella aperta e rispondendo giusto la prova si supera', () => {
  const s = open();
  run(s, L.solutionStart);
  s.answerDiagnosis('b');
  playTo(s, L.scenario.duration + 1, 25);
  const sc = s.snapshot().obs.scenario;
  assert.equal(sc.done, true);
  assert.equal(sc.faults.filter(f => f.open || f.late).length, 0);
  const r = s.check();
  assert.equal(r.pass, true, JSON.stringify(r.work.items.concat(r.safe.items)));
  assert.equal(r.stars, 3);
  assert.equal(s.snapshot().unit.faultSolved, true);
});

test('c53: riparare il finecorsa con il robot alimentato fa perdere la stella di sicurezza', () => {
  const s = open();
  run(s, L.solutionStart);
  s.answerDiagnosis('b');
  playTo(s, 260);                                         // il finecorsa e' morto da un minuto, il robot e' fermo ma alimentato
  assert.equal(s.snapshot().obs.parts.ZD.jam, true);
  assert.equal(s.snapshot().obs.loads.L, 'on');
  s.jamPart('ZD');                                        // riparato senza aprire la portella
  assert.equal(s.snapshot().message.code, 'repairLiveNow');
  playTo(s, L.scenario.duration + 1, 25);
  const r = s.check();
  assert.equal(r.pass, false);
  assert.ok(r.safe.items.some(i => i.code === 'safe.repairLive'));
});
