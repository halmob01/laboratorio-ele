// Sessione con un livello del motore v2 (marcia e arresto di un motore trifase): fili, pulsanti, orologio, verifica e progressi.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';

const comp = (id, type, terms, extra = {}) => ({ id, type, short: id, title: id, terms: Object.fromEntries(terms.map(t => [t, { l: t }])), ...extra });
const T3 = ['1', '2', '3', '4', '5', '6'];
const LEVEL = {
  id: 'x13-motore', code: 'x13', n: 0, engine: 2, quadroOnly: true,
  name: 'Motore', title: 'Marcia e arresto', goal: 'Avvia e ferma il motore.', blurb: 'prova', flow: 'onDemand',
  src: { L1: 'Q.L1', L2: 'Q.L2', L3: 'Q.L3', N: 'Q.N', PE: 'Q.PE' },
  palette: ['marrone', 'nero', 'grigio', 'blu', 'gv', 'rosso'], controlColor: 'rosso',
  comps: [
    comp('Q', 'quadro', ['L1', 'L2', 'L3', 'N', 'PE']),
    comp('QM', 'mt3', T3),
    comp('KM', 'km', ['A1', 'A2', ...T3, '13', '14', '21', '22']),
    comp('FR', 'ft', [...T3, '95', '96', '97', '98'], { tripAfter: 3 }),
    comp('M', 'motor3', ['U', 'V', 'W', 'PE']),
    comp('SB0', 'pbnc', ['1', '2']),
    comp('SB1', 'pb', ['3', '4']),
  ],
  controls: ['SB0', 'SB1', 'QM'],
  checks: [
    { id: 'marcia', label: 'Premi Marcia e rilascia: il motore resta acceso', do: ['press SB1', 'release SB1'], expect: { motors: { M: 'fwd' } } },
    { id: 'arresto', label: 'Premi Arresto: il motore si ferma', do: ['press SB1', 'release SB1', 'press SB0', 'release SB0'], expect: { motors: { M: 'off' } } },
  ],
  safety: { earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', protectedBy: { M: 'QM' } },
  solution: [
    ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
    ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
    ['KM.2', 'FR.1', 'marrone'], ['KM.4', 'FR.3', 'nero'], ['KM.6', 'FR.5', 'grigio'],
    ['FR.2', 'M.U', 'marrone'], ['FR.4', 'M.V', 'nero'], ['FR.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
    ['QM.2', 'FR.95', 'rosso'], ['FR.96', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'], ['SB1.4', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
    ['SB1.3', 'KM.13', 'rosso'], ['KM.14', 'SB1.4', 'rosso'],
  ],
  hints: ['uno', 'due'],
};
const OTHER = { id: 'x00', code: 'x00', n: 0, name: 'x', title: 'x', goal: 'x', blurb: 'x', comps: [], controls: [], hints: ['x'], load: [], solution: [] };

function open() {
  const s = createSession({ levels: [OTHER, LEVEL], deriveFull: l => l });
  s.start();
  s.selectLevel('x13-motore');
  return s;
}
const wireAll = (s, list) => list.forEach(([a, b, c]) => s.addWire(a, b, c));

test('v2: livello con protezione propria, il quadro e\' sempre alimentato', () => {
  const s = open();
  const n = s.snapshot();
  assert.equal(n.selfPowered, true);
  assert.equal(n.power, true);
  assert.ok(n.obs && n.obs.motors.M === 'off');
  assert.equal(n.lit, false);
});

test('v2: marcia con autoritenuta dal pulsante tenuto e rilasciato, arresto, poi verifica a 3 stelle', () => {
  const s = open();
  wireAll(s, LEVEL.solution);
  s.press('SB1');
  assert.equal(s.snapshot().obs.motors.M, 'fwd');
  assert.equal(s.snapshot().controlStates.SB1, 1);
  assert.equal(s.snapshot().lit, true);
  s.release('SB1');
  assert.equal(s.snapshot().obs.motors.M, 'fwd');         // autoritenuta
  assert.equal(s.snapshot().controlStates.SB1, 0);
  assert.ok(s.snapshot().flow.current);
  s.press('SB0'); s.release('SB0');
  assert.equal(s.snapshot().obs.motors.M, 'off');
  assert.equal(s.snapshot().flow.current, false);
  const r = s.check();
  assert.equal(r.pass, true);
  assert.equal(r.stars, 3);
  assert.equal(r.checks.length, 2);
  assert.equal(s.snapshot().levels.find(l => l.id === 'x13-motore').stars, 3);
});

test('v2: un tocco da tastiera vale premi e rilascia; il termico scatta col motore che ronza e si riarma', () => {
  const s = open();
  wireAll(s, LEVEL.solution.filter(([a, b]) => !(a === 'FR.4' && b === 'M.V') ));   // fase mancante: il motore ronza
  s.toggleControl('SB1');
  assert.equal(s.snapshot().obs.motors.M, 'hum');
  assert.equal(s.snapshot().needsClock, true);
  for (let i = 0; i < 8; i++) s.tick(0.5);
  assert.ok(s.snapshot().obs.tripped.includes('FR'));
  assert.equal(s.snapshot().obs.motors.M, 'off');
  s.resetPart('FR');
  assert.equal(s.snapshot().obs.tripped.length, 0);
});

test('v2: modificare i fili ricostruisce la simulazione; il corto senza protezione spegne il quadro', () => {
  const s = open();
  wireAll(s, LEVEL.solution);
  s.press('SB1'); s.release('SB1');
  assert.equal(s.snapshot().obs.motors.M, 'fwd');
  s.undo();
  assert.equal(s.snapshot().controlStates.SB1, 0);
  assert.equal(s.snapshot().obs.motors.M, 'off');
  s.clear();
  s.addWire('Q.L1', 'Q.N', 'marrone');     // corto a monte della protezione
  assert.equal(s.snapshot().trip, true);
  assert.equal(s.snapshot().message.code, 'trip');
  s.clear();
  assert.equal(s.snapshot().trip, false);
  assert.equal(s.snapshot().power, true);
});

test('v2: la palette del livello e il lavoro in corso con il rosso si salvano e tornano', () => {
  let store = {};
  const mk = () => createSession({ levels: [OTHER, LEVEL], deriveFull: l => l, storage: { load: () => store.p || {}, save: o => { store.p = o; }, loadWork: () => store.w || {}, saveWork: o => { store.w = JSON.parse(JSON.stringify(o)); } } });
  const a = mk(); a.start(); a.selectLevel('x13-motore');
  assert.deepEqual(a.snapshot().level.palette.slice(-1), ['rosso']);
  a.addWire('SB0.2', 'SB1.3', 'rosso');
  const b = mk(); b.start(); b.selectLevel('x13-motore');
  assert.equal(b.snapshot().wires.length, 1);
  assert.equal(b.snapshot().wires[0].c, 'rosso');
});

test('v2: un filo nuovo non richiude una protezione aperta o chiusa dall’allievo (livelli con protezioni proprie)', async () => {
  const { levels, deriveFull } = await import('../src/content/index.js');
  const s = createSession({ levels, deriveFull, initialLevel: 'c12-motore' });
  s.skipLesson();
  s.addWire('Q.L1', 'QM.1', 'marrone');
  s.toggleControl('QM');
  assert.equal(s.snapshot().controlStates.QM, 1);
  s.addWire('Q.L2', 'QM.3', 'nero');
  assert.equal(s.snapshot().controlStates.QM, 1);
});
