// Motore v2: casi della specifica (docs/SPEC-MOTORE-V2.md, sezione 11).

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSim, act, advance, observe, evaluateV2 } from '../src/engine/v2/index.js';

const W = (...lines) => lines.map((l, i) => { const [a, b, c] = l.split(' '); return { id: 'w' + i, a, b, c: c || 'marrone' }; });
const comp = (id, type, extra = {}) => ({ id, type, short: id, title: id, terms: {}, ...extra });
const Q1 = comp('Q', 'quadro');
const Q3 = comp('Q', 'quadro');
const SRC3 = { L1: 'Q.L1', L2: 'Q.L2', L3: 'Q.L3', N: 'Q.N', PE: 'Q.PE' };

/* ---------- civile ---------- */

const RI = { engine: 2, comps: [Q1, comp('P1', 'pb'), comp('P2', 'pb'), comp('P3', 'pb'), comp('K', 'ri'), comp('L', 'lamp')] };
const riWires = W('Q.F P1.3', 'P1.3 P2.3', 'P2.3 P3.3', 'P1.4 P2.4', 'P2.4 P3.4', 'P3.4 K.A1', 'K.A2 Q.N blu', 'Q.F K.1', 'K.2 L.A', 'L.B Q.N blu');

test('pulsanti e relè ad impulsi: ogni pressione cambia stato, da qualunque pulsante', () => {
  const s = createSim(RI, riWires);
  assert.equal(observe(s).loads.L, 'off');
  act(s, 'press', 'P1'); act(s, 'release', 'P1');
  assert.equal(observe(s).loads.L, 'on');
  act(s, 'press', 'P3');
  assert.equal(observe(s).loads.L, 'off');
  act(s, 'release', 'P3');
  assert.equal(observe(s).loads.L, 'off');
  act(s, 'press', 'P2'); act(s, 'release', 'P2');
  assert.equal(observe(s).loads.L, 'on');
});

test('luce scale: resta accesa per il tempo impostato e ripremere fa ripartire il tempo', () => {
  const L = { engine: 2, comps: [Q1, comp('P1', 'pb'), comp('T', 'tmr', { time: 10 }), comp('L', 'lamp')] };
  const s = createSim(L, W('Q.F P1.3', 'P1.4 T.A1', 'T.A2 Q.N blu', 'Q.F T.1', 'T.2 L.A', 'L.B Q.N blu'));
  act(s, 'press', 'P1'); act(s, 'release', 'P1');
  advance(s, 6);
  assert.equal(observe(s).loads.L, 'on');
  act(s, 'press', 'P1'); act(s, 'release', 'P1');
  advance(s, 6);
  assert.equal(observe(s).loads.L, 'on');
  advance(s, 4.5);
  assert.equal(observe(s).loads.L, 'off');
});

const BELL = { engine: 2, comps: [Q1, comp('T', 'trafo', { vout: 12 }), comp('P', 'pb'), comp('B', 'bell'), comp('L', 'lamp')] };

test('trasformatore: il campanello suona a 12 V, si brucia a 230 V; la lampada a 12 V non si accende', () => {
  let s = createSim(BELL, W('Q.F T.1', 'T.2 Q.N blu', 'T.3 P.3', 'P.4 B.1', 'B.2 T.4'));
  act(s, 'press', 'P');
  assert.equal(observe(s).loads.B, 'on');
  s = createSim(BELL, W('Q.F P.3', 'P.4 B.1', 'B.2 Q.N blu'));
  act(s, 'press', 'P');
  assert.equal(observe(s).loads.B, 'burnt');
  act(s, 'release', 'P');
  assert.equal(observe(s).loads.B, 'burnt');
  s = createSim(BELL, W('Q.F T.1', 'T.2 Q.N blu', 'T.3 L.A', 'L.B T.4'));
  assert.equal(observe(s).loads.L, 'weak');
});

const CIV = {
  engine: 2,
  comps: [Q1, comp('D', 'rcd'), comp('M1', 'mt', { rank: 2 }), comp('S', 'sw'), comp('L', 'lamp')],
};
const civ = W('Q.F D.1', 'Q.N D.N1 blu', 'D.2 M1.1', 'D.N2 M1.N1 blu', 'M1.2 S.a', 'S.b L.A', 'L.B M1.N2 blu');

test('differenziale e magnetotermico: funzionamento, squilibrio, fase a terra, corto di linea e a monte, tasto di prova', () => {
  let s = createSim(CIV, civ);
  act(s, 'toggle', 'S');
  assert.equal(observe(s).loads.L, 'on');
  act(s, 'test', 'D');
  assert.deepEqual(observe(s).tripped, ['D']);
  assert.equal(observe(s).loads.L, 'off');
  act(s, 'toggle', 'D');
  assert.equal(observe(s).loads.L, 'on');

  // neutro preso a monte del differenziale: scatta quando la lampada si accende
  s = createSim(CIV, civ.slice(0, 6).concat(W('L.B Q.N blu')));
  assert.deepEqual(observe(s).tripped, []);
  act(s, 'toggle', 'S');
  assert.deepEqual(observe(s).tripped, ['D']);

  // fase a terra a valle
  s = createSim(CIV, civ.concat(W('M1.2 Q.PE gv')));
  assert.deepEqual(observe(s).tripped, ['D']);

  // corto a valle del magnetotermico di linea: scatta quello, non il differenziale
  s = createSim(CIV, civ.concat(W('S.b M1.N2')));
  act(s, 'toggle', 'S');
  assert.deepEqual(observe(s).tripped, ['M1']);

  // corto a monte di tutto: scatta il quadro
  s = createSim(CIV, civ.concat(W('Q.F Q.N')));
  assert.ok(observe(s).faults.some(f => f.code === 'quadro'));
  assert.equal(observe(s).supply, false);
});

/* ---------- industriale ---------- */

const MOTOR = {
  engine: 2, src: SRC3,
  comps: [Q3, comp('QM', 'mt3'), comp('KM', 'km'), comp('FR', 'ft', { tripAfter: 3 }), comp('M', 'motor3'), comp('SB0', 'pbnc'), comp('SB1', 'pb'), comp('H', 'spia')],
};
const power = W('Q.L1 QM.1', 'Q.L2 QM.3 nero', 'Q.L3 QM.5 grigio', 'QM.2 KM.1', 'QM.4 KM.3 nero', 'QM.6 KM.5 grigio',
  'KM.2 FR.1', 'KM.4 FR.3 nero', 'KM.6 FR.5 grigio', 'FR.2 M.U', 'FR.4 M.V nero', 'FR.6 M.W grigio', 'M.PE Q.PE gv');
const control = W('QM.2 FR.95 rosso', 'FR.96 SB0.1 rosso', 'SB0.2 SB1.3 rosso', 'SB1.4 KM.A1 rosso', 'KM.A2 Q.N blu',
  'H.X1 KM.A1 rosso', 'H.X2 Q.N blu');
const hold = W('SB1.3 KM.13 rosso', 'KM.14 SB1.4 rosso');
const renum = ws => ws.map((w, i) => ({ ...w, id: 'w' + i }));

test('marcia e arresto con autoritenuta; senza autoritenuta si ferma al rilascio', () => {
  let s = createSim(MOTOR, renum(power.concat(control, hold)));
  act(s, 'press', 'SB1'); act(s, 'release', 'SB1');
  assert.equal(observe(s).motors.M, 'fwd');
  assert.equal(observe(s).loads.H, 'on');
  act(s, 'press', 'SB0'); act(s, 'release', 'SB0');
  assert.equal(observe(s).motors.M, 'off');
  // arresto e marcia insieme: non parte
  act(s, 'press', 'SB0'); act(s, 'press', 'SB1');
  assert.equal(observe(s).motors.M, 'off');

  s = createSim(MOTOR, renum(power.concat(control)));
  act(s, 'press', 'SB1');
  assert.equal(observe(s).motors.M, 'fwd');
  act(s, 'release', 'SB1');
  assert.equal(observe(s).motors.M, 'off');
});

test('motore: scambiare due fasi inverte il senso; fase mancante fa scattare il termico', () => {
  const swapped = power.map(w => (w.a === 'FR.2' ? { ...w, b: 'M.V' } : w.a === 'FR.4' ? { ...w, b: 'M.U' } : w));
  let s = createSim(MOTOR, renum(swapped.concat(control, hold)));
  act(s, 'press', 'SB1'); act(s, 'release', 'SB1');
  assert.equal(observe(s).motors.M, 'rev');

  s = createSim(MOTOR, renum(power.filter(w => w.a !== 'FR.6').concat(control, hold)));
  act(s, 'press', 'SB1'); act(s, 'release', 'SB1');
  assert.equal(observe(s).motors.M, 'hum');
  advance(s, 4);
  const o = observe(s);
  assert.deepEqual(o.tripped, ['FR']);
  assert.equal(o.motors.M, 'off');
  assert.equal(o.coils.KM, false);
});

const INV = {
  engine: 2, src: SRC3,
  comps: [Q3, comp('QM', 'mt3'), comp('KM1', 'km'), comp('KM2', 'km'), comp('M', 'motor3'), comp('SB0', 'pbnc'), comp('SB1', 'pb'), comp('SB2', 'pb')],
  checks: [
    { id: 'avanti', label: 'Avanti', do: ['press SB1', 'release SB1'], expect: { motors: { M: 'fwd' } } },
    { id: 'indietro', label: 'Indietro', do: ['press SB2', 'release SB2'], expect: { motors: { M: 'rev' } } },
    { id: 'stop', label: 'Arresto', do: ['press SB1', 'release SB1', 'press SB0', 'release SB0'], expect: { motors: { M: 'off' } } },
  ],
  safety: { never: [['KM1', 'KM2']], stopWins: 'SB0', earth: [['M.PE', 'Q.PE']] },
  controlColor: 'rosso',
};
const invPower = W('Q.L1 QM.1', 'Q.L2 QM.3 nero', 'Q.L3 QM.5 grigio',
  'QM.2 KM1.1', 'QM.4 KM1.3 nero', 'QM.6 KM1.5 grigio', 'QM.2 KM2.1', 'QM.4 KM2.3 nero', 'QM.6 KM2.5 grigio',
  'KM1.2 M.U', 'KM1.4 M.V nero', 'KM1.6 M.W grigio', 'KM2.2 M.W', 'KM2.4 M.V nero', 'KM2.6 M.U grigio', 'M.PE Q.PE gv');
const invCtl = W('QM.2 SB0.1', 'SB0.2 SB1.3 rosso', 'SB0.2 SB2.3 rosso',
  'SB1.3 KM1.13 rosso', 'KM1.14 SB1.4 rosso', 'SB2.3 KM2.13 rosso', 'KM2.14 SB2.4 rosso',
  'KM1.A2 Q.N blu', 'KM2.A2 Q.N blu');
const interlock = W('SB1.4 KM2.21 rosso', 'KM2.22 KM1.A1 rosso', 'SB2.4 KM1.21 rosso', 'KM1.22 KM2.A1 rosso');
const direct = W('SB1.4 KM1.A1 rosso', 'SB2.4 KM2.A1 rosso');

test('inversione con interblocco: 3 stelle; il secondo comando non passa', () => {
  const ws = renum(invPower.concat(invCtl, interlock));
  const r = evaluateV2(INV, ws);
  assert.deepEqual(r.color.items, [{ code: 'color.ok', earth: true }]);
  assert.equal(r.pass, true, JSON.stringify(r));
  const s = createSim(INV, ws);
  act(s, 'press', 'SB1'); act(s, 'release', 'SB1');
  act(s, 'press', 'SB2'); act(s, 'release', 'SB2');
  assert.equal(observe(s).motors.M, 'fwd');
  assert.deepEqual(observe(s).tripped, []);
});

test('inversione senza interblocco: funziona, ma la sicurezza segnala l\'interblocco; le due marce insieme fanno scattare la protezione', () => {
  const ws = renum(invPower.concat(invCtl, direct));
  const r = evaluateV2(INV, ws);
  assert.equal(r.work.ok, true);
  assert.equal(r.safe.ok, false);
  assert.ok(r.safe.items.some(i => i.code === 'safe.interlock'));
  const s = createSim(INV, ws);
  act(s, 'press', 'SB1'); act(s, 'release', 'SB1');
  act(s, 'press', 'SB2');
  assert.deepEqual(observe(s).tripped, ['QM']);
  assert.equal(observe(s).motors.M, 'off');
});

test('prove funzionali: senza autoritenuta la prova fallisce con il motivo', () => {
  const ws = renum(invPower.concat(invCtl.filter(w => !w.a.includes('.13') && !w.a.includes('KM') || w.a.includes('A2')), interlock));
  const r = evaluateV2(INV, ws);
  assert.equal(r.work.ok, false);
  const it = r.work.items.find(i => i.code === 'work.checkFail');
  assert.equal(it.check, 'avanti');
  assert.equal(it.want, 'fwd');
  assert.equal(it.got, 'off');
});

test('colori: il rosso è ammesso solo sui fili di comando dei livelli che lo dichiarano', () => {
  const ws = renum(invPower.concat(invCtl, interlock)).map(w => (w.a === 'Q.L1' ? { ...w, c: 'rosso' } : w));
  const r = evaluateV2(INV, ws);
  assert.equal(r.color.ok, false);
  assert.equal(r.color.items[0].a, 'Q.L1');
});

test('un contattore alimentato dal proprio contatto NC è instabile, senza cicli infiniti', () => {
  const L = { engine: 2, src: SRC3, comps: [Q3, comp('KM', 'km')] };
  const s = createSim(L, W('Q.L1 KM.21', 'KM.22 KM.A1', 'KM.A2 Q.N blu'));
  assert.ok(observe(s).faults.some(f => f.code === 'instabile'));
});

test('nastro: il finecorsa ferma il motore a fine corsa', () => {
  const L = {
    engine: 2, src: SRC3,
    comps: [Q3, comp('KM', 'km'), comp('M', 'motor3'), comp('SB1', 'pb'), comp('FC2', 'fc')],
    machine: { motor: 'M', length: 3, endFwd: 'FC2' },
  };
  const s = createSim(L, W('Q.L1 KM.1', 'Q.L2 KM.3', 'Q.L3 KM.5', 'KM.2 M.U', 'KM.4 M.V', 'KM.6 M.W',
    'Q.L1 SB1.3', 'SB1.4 FC2.1', 'FC2.2 KM.A1', 'KM.A2 Q.N', 'SB1.3 KM.13', 'KM.14 SB1.4'));
  act(s, 'press', 'SB1'); act(s, 'release', 'SB1');
  assert.equal(observe(s).motors.M, 'fwd');
  advance(s, 5);
  const o = observe(s);
  assert.equal(o.machine.atEnd, true);
  assert.equal(o.motors.M, 'off');
  assert.equal(o.parts.FC2.act, true);
});
