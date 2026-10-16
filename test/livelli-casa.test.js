// c52 Lavori in sicurezza, c53 La gestione dei carichi, c54 Il clima per zone: la soluzione passa, gli errori tipici no.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { evaluateV2 } from '../src/engine/v2/index.js';
import { levels, deriveFull } from '../src/content/index.js';
import { openIsolators } from './misure.js';

const L = id => levels.find(l => l.id === id);
const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
const failed = (r, code) => JSON.stringify(r).includes(code);

/* ---------- c52 ---------- */

const c52 = L('c52-lavori-sicurezza');
const session52 = () => { const s = createSession({ levels, deriveFull, initialLevel: c52.id }); s.start(); s.skipLesson(); return s; };
const wire52 = s => c52.solution.slice(-2).forEach(([a, b, c]) => s.addWire(a, b, c));

test('c52: la soluzione passa nel motore', () => {
  assert.equal(evaluateV2(c52, W(c52.solution)).pass, true);
});

test('c52: con la procedura completa (apri, lucchetto, strumento, tre fasi) il lavoro vale tre stelle', () => {
  const s = session52();
  openIsolators(s, c52);
  assert.equal(s.snapshot().lockout.done, true);
  wire52(s);
  const r = s.check();
  assert.equal(r.pass, true);
  assert.equal(r.stars, 3);
});

test('c52: cablare con il salvamotore chiuso, o aperto senza lucchetto, o senza verifica, perde la stella di sicurezza', () => {
  const closed = session52();
  wire52(closed);
  assert.equal(closed.snapshot().message.code, 'lockWorkNow');
  assert.ok(failed(closed.check(), 'safe.lockout'));

  const noLock = session52();
  noLock.toggleControl('QM');
  wire52(noLock);
  assert.ok(failed(noLock.check(), 'safe.lockout'));

  const noRead = session52();
  noRead.toggleControl('QM');
  noRead.lockControl('QM');
  wire52(noRead);
  assert.ok(failed(noRead.check(), 'safe.lockout'));
});

test('c52: senza la prova dello strumento (230 V a monte) la procedura non e\' completa', () => {
  const s = session52();
  s.toggleControl('QM');
  s.lockControl('QM');
  s.toggleMeter(); s.setMeterMode('V');
  ['QM.2', 'QM.4', 'QM.6'].forEach(t => { s.clearProbes(); s.probe(t); s.probe('Q.N'); s.snapshot(); });
  assert.equal(s.snapshot().lockout.done, false);
  s.clearProbes(); s.probe('QM.1'); s.probe('Q.N'); s.snapshot();
  assert.equal(s.snapshot().lockout.done, true);
});

test('c52: serve ogni fase: una fase non verificata non basta', () => {
  const s = session52();
  s.toggleControl('QM');
  s.lockControl('QM');
  s.toggleMeter(); s.setMeterMode('V');
  ['QM.1', 'QM.2', 'QM.4'].forEach(t => { s.clearProbes(); s.probe(t); s.probe('Q.N'); s.snapshot(); });
  assert.equal(s.snapshot().lockout.done, false);
});

test('c52: il fungo in parallelo all\'arresto non passa (Arresto non ferma piu\' il motore)', () => {
  const bad = W(c52.unit.fault.wires);
  const r = evaluateV2(c52, bad);
  assert.equal(r.pass, false);
  assert.ok(failed(r, 'arresto'));
});

test('c52: senza il fungo la verifica dice che manca', () => {
  const r = evaluateV2(c52, W(c52.fixed));
  assert.equal(r.pass, false);
});

/* ---------- c53 ---------- */

const c53 = L('c53-carichi');
const P53 = c53.solutionPrograms.PLC;
const run53 = prog => evaluateV2(c53, W(c53.solution), { programs: { PLC: prog } });

test('c53: la soluzione passa', () => {
  assert.equal(run53(P53).pass, true);
});

test('c53: senza programma il contatore stacca la casa', () => {
  const r = run53([P53[0]]);
  assert.equal(r.work.ok, false);
});

test('c53: staccare solo la colonnina non basta durante il forno (serve anche la pompa di calore)', () => {
  const onlyEv = P53.filter((_, i) => i !== 2);          // senza il gradino della pompa di calore
  assert.equal(run53(onlyEv).work.ok, false);
});

test('c53: senza i temporizzatori i carichi pendolano e la verifica lo dice', () => {
  const noDelay = [P53[0], P53[1], P53[2],
    { if: ['lt', 'MW0', 4200], do: [{ op: 'set', a: 'Q1' }] },
    { if: ['and', ['lt', 'MW0', 2000], 'Q1'], do: [{ op: 'set', a: 'Q0' }] }];
  const r = run53(noDelay);
  assert.equal(r.work.ok, false);
  assert.ok(failed(r, 'maxSwitches') || failed(r, 'commuta') || failed(r, 'work.checkFail'));
});

test('c53: le soglie di riattacco troppo alte fanno risalire la potenza oltre lo stacco e il carico rimbalza', () => {
  const high = P53.map(r => JSON.parse(JSON.stringify(r)));
  high[3].if = ['lt', 'MW0', 5500];                       // pompa: 5500 + 1500 supera i 5800
  high[5].if = ['and', ['lt', 'MW0', 5500], 'Q1'];        // colonnina: 5500 + 3700 supera i 5800
  assert.equal(run53(high).work.ok, false);
});

/* ---------- c54 ---------- */

const c54 = L('c54-clima-zone');
const P54 = c54.solutionPrograms.PLC;
const run54 = prog => evaluateV2(c54, W(c54.solution), { programs: { PLC: prog } });

test('c54: la soluzione passa', () => {
  assert.equal(run54(P54).pass, true);
});

test('c54: con le bobine al posto di Set e Reset (senza isteresi) la valvola oscilla e la verifica non passa', () => {
  const coil = [P54[0], P54[1],
    { if: ['lt', 'MW0', 21], do: [{ op: 'coil', a: 'Q1' }] },
    { if: ['lt', 'MW1', 21], do: [{ op: 'coil', a: 'Q2' }] },
    P54[7]];
  assert.equal(run54(coil).work.ok, false);
});

test('c54: il consenso della pompa sempre acceso la fa guastare', () => {
  const always = P54.slice(0, -1).concat([{ if: ['ge', 'AI0', 0], do: [{ op: 'coil', a: 'Q0' }] }]);
  const r = run54(always);
  assert.equal(r.work.ok, false);
  assert.ok(failed(r, 'broken') || failed(r, 'work.checkFail'));
});

test('c54: il consenso solo sulla valvola del soggiorno lascia fredda la camera', () => {
  const onlyLiving = P54.slice(0, -1).concat([{ if: 'Q1', do: [{ op: 'coil', a: 'Q0' }] }]);
  assert.equal(run54(onlyLiving).work.ok, false);
});

test('c54: senza il gradino della finestra la valvola resta aperta a finestra aperta', () => {
  const noWindow = P54.filter(r => r.if !== 'I0');
  assert.equal(run54(noWindow).work.ok, false);
});

test('c54: la finestra messa PRIMA del Set non vince (vale l\'ultimo gradino)', () => {
  const early = [P54[0], P54[1], P54[4], P54[2], P54[3], P54[5], P54[6], P54[7]];
  assert.equal(run54(early).work.ok, false);
});
