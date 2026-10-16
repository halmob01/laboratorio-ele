// Lucchetto (safety.lockout): sezionare, bloccare, verificare l'assenza di tensione, poi lavorare. Sessione e verifica.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { createSim, act } from '../src/engine/v2/index.js';
import { stepsState } from '../src/engine/steps.js';

const T = (...ids) => Object.fromEntries(ids.map(i => [i, { l: i }]));
const LEVEL = {
  id: 'zz-lucchetto', code: 'zz', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', meter: true, palette: ['marrone', 'blu', 'gv'],
  name: 'Prova', title: 'Prova', blurb: '', goal: '',
  comps: [
    { id: 'Q', type: 'quadro', short: 'Quadro', title: 'Quadro', terms: T('F', 'N', 'PE') },
    { id: 'QS', type: 'mt', short: 'Interruttore', title: 'Interruttore della linea', terms: T('1', '2', 'N1', 'N2') },
    { id: 'L', type: 'lamp', short: 'Lampada', title: 'Lampada', terms: T('A', 'B') },
  ],
  fixed: [['Q.F', 'QS.1', 'marrone'], ['Q.N', 'QS.N1', 'blu']],
  controls: ['QS'],
  checks: [{ id: 'accesa', label: 'La lampada si accende', do: [], expect: { loads: { L: 'on' } } }],
  safety: { lockout: { iso: 'QS', test: [['QS.2', 'QS.N2']], known: ['QS.1', 'QS.N1'] } },
  solution: [['Q.F', 'QS.1', 'marrone'], ['Q.N', 'QS.N1', 'blu'], ['QS.2', 'L.A', 'marrone'], ['QS.N2', 'L.B', 'blu']],
  hints: [],
};
const mk = () => { const s = createSession({ levels: [LEVEL], deriveFull: x => x, initialLevel: 'zz-lucchetto' }); s.start(); return s; };
const wire = s => { s.addWire('QS.2', 'L.A', 'marrone'); s.addWire('QS.N2', 'L.B', 'blu'); };
const read = (s, a, b) => { s.clearProbes(); s.probe(a); s.probe(b); s.snapshot(); };
const meterV = s => { if (!s.snapshot().meter.on) s.toggleMeter(); s.setMeterMode('V'); };
const closeAndCheck = s => { if (s.snapshot().lockout.locked) s.lockControl('QS'); s.toggleControl('QS'); return s.check(); };
const codes = r => (r.items || r.safety || []).map(x => x.code);
const failed = (r, code) => JSON.stringify(r).includes(code);

test('lucchetto: nel motore si mette solo a sezionamento aperto e impedisce di richiudere', () => {
  const sim = createSim(LEVEL, []);
  act(sim, 'lock', 'QS');
  assert.equal(sim.parts.QS.locked, false);         // chiuso: niente lucchetto
  act(sim, 'toggle', 'QS');
  act(sim, 'lock', 'QS');
  assert.equal(sim.parts.QS.locked, true);
  act(sim, 'toggle', 'QS');
  assert.equal(sim.parts.QS.on, false);             // bloccato: non si richiude
  act(sim, 'lock', 'QS');
  act(sim, 'toggle', 'QS');
  assert.equal(sim.parts.QS.on, true);
});

test('lucchetto: cablare con il sezionamento chiuso toglie la stella di sicurezza', () => {
  const s = mk();
  wire(s);
  assert.equal(s.snapshot().message.code, 'lockWorkNow');
  const r = s.check();
  assert.equal(r.work.ok, true);                    // l'impianto funziona...
  assert.ok(failed(r, 'safe.lockout'));             // ...ma il lavoro non era sicuro
});

test('lucchetto: aprire non basta, servono il lucchetto e la verifica', () => {
  const s = mk();
  s.toggleControl('QS');
  wire(s);
  assert.ok(failed(closeAndCheck(s), 'safe.lockout'));
  const s2 = mk();
  s2.toggleControl('QS');
  s2.lockControl('QS');
  wire(s2);                                          // lucchetto messo ma assenza di tensione non verificata
  assert.ok(failed(closeAndCheck(s2), 'safe.lockout'));
});

test('lucchetto: la procedura completa (prova dello strumento e assenza di tensione) da\' la stella', () => {
  const s = mk();
  s.toggleControl('QS');
  s.lockControl('QS');
  assert.equal(s.snapshot().lockout.locked, true);
  meterV(s);
  read(s, 'QS.1', 'QS.N1');                          // lo strumento funziona: 230 V a monte
  read(s, 'QS.2', 'QS.N2');                          // a valle: 0 V
  assert.equal(s.snapshot().lockout.done, true);
  wire(s);
  assert.notEqual((s.snapshot().message || {}).code, 'lockWorkNow');
  const r = closeAndCheck(s);
  assert.equal(r.pass, true);
  assert.ok(!failed(r, 'safe.lockout'), JSON.stringify(r));
});

test('lucchetto: senza la prova dello strumento la verifica non e\' completa', () => {
  const s = mk();
  s.toggleControl('QS');
  s.lockControl('QS');
  meterV(s);
  read(s, 'QS.2', 'QS.N2');
  assert.equal(s.snapshot().lockout.done, false);
});

test('lucchetto: le letture fatte prima di mettere il lucchetto non valgono', () => {
  const s = mk();
  s.toggleControl('QS');
  meterV(s);
  read(s, 'QS.1', 'QS.N1');
  read(s, 'QS.2', 'QS.N2');
  s.lockControl('QS');
  assert.equal(s.snapshot().lockout.done, false);
});

test('lucchetto: richiudere un sezionamento bloccato non si puo\', e il lucchetto non si mette a sezionamento chiuso', () => {
  const s = mk();
  s.lockControl('QS');
  assert.equal(s.snapshot().message.code, 'lockNeedsOpen');
  s.toggleControl('QS');
  s.lockControl('QS');
  s.toggleControl('QS');
  assert.equal(s.snapshot().message.code, 'isoLocked');
  assert.equal(s.snapshot().controlStates.QS, 0);
});

test('lucchetto: il passo "lock" si fa mettendo il lucchetto', () => {
  const steps = [{ kind: 'lock', id: 'QS' }];
  assert.equal(stepsState(steps, [], { operated: [] }).done[0], false);
  assert.equal(stepsState(steps, [], { operated: ['lock:QS'] }).done[0], true);
});

test('lucchetto: il lavoro salvato ricorda lucchetto e letture', () => {
  const store = {};
  const storage = { load: () => store.p || {}, save: o => { store.p = o; }, loadWork: () => store.w || {}, saveWork: o => { store.w = JSON.parse(JSON.stringify(o)); } };
  const s = createSession({ levels: [LEVEL], deriveFull: x => x, initialLevel: 'zz-lucchetto', storage });
  s.start();
  s.toggleControl('QS');
  s.lockControl('QS');
  meterV(s);
  read(s, 'QS.1', 'QS.N1');
  read(s, 'QS.2', 'QS.N2');
  s.addWire('QS.2', 'L.A', 'marrone');
  const s2 = createSession({ levels: [LEVEL], deriveFull: x => x, initialLevel: 'zz-lucchetto', storage });
  s2.start();
  const lo = s2.snapshot().lockout;
  assert.equal(lo.locked, true);
  assert.equal(lo.done, true);
});
