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

/* ---------- casi dalla revisione indipendente ---------- */

import { setWires } from '../src/engine/v2/index.js';

test('quadro di casa: con il differenziale scattato dal tasto di prova la soluzione resta a 3 stelle', () => {
  const L = {
    engine: 2,
    comps: [Q1, comp('ID', 'rcd'), comp('M1', 'mt', { rank: 2 }), comp('M2', 'mt', { rank: 2 }), comp('S', 'sw'), comp('L', 'lamp'), comp('P', 'presa')],
    checks: [
      { id: 'luce', label: 'luce', do: ['toggle S'], expect: { loads: { L: 'on' } } },
      { id: 'presa', label: 'presa', expect: { loads: { P: 'on' } } },
      { id: 'test', label: 'tasto T', do: ['toggle S', 'test ID'], expect: { tripped: ['ID'], loads: { L: 'off' } } },
    ],
    safety: { phaseSwitched: ['L'], rcdCovers: ['L', 'P'], earth: [['P.PE', 'Q.PE']] },
  };
  const ws = W('Q.F ID.1', 'Q.N ID.N1 blu', 'ID.2 M1.1', 'ID.N2 M1.N1 blu', 'ID.2 M2.1', 'ID.N2 M2.N1 blu',
    'M1.2 S.a', 'S.b L.A', 'L.B M1.N2 blu', 'M2.2 P.L', 'P.N M2.N2 blu', 'P.PE Q.PE gv');
  const r = evaluateV2(L, ws);
  assert.equal(r.pass, true, JSON.stringify(r.safe));
  // neutro della presa a monte: la sfida fallisce con un motivo solo
  const bad = ws.map(w => (w.a === 'P.N' ? { ...w, b: 'Q.N' } : w));
  const r2 = evaluateV2(L, bad);
  assert.equal(r2.work.ok, false);
  assert.ok(r2.work.items.every(i => i.code === 'work.tripped' || i.cause === 'work.tripped'), JSON.stringify(r2.work.items));
});

const C13 = {
  ...MOTOR,
  comps: MOTOR.comps.filter(c => c.id !== 'FR'),
  controlColor: 'rosso',
  checks: [
    { id: 'marcia', label: 'marcia', do: ['press SB1', 'release SB1'], expect: { motors: { M: 'fwd' } } },
    { id: 'arresto', label: 'arresto', do: ['press SB1', 'release SB1', 'press SB0', 'release SB0'], expect: { motors: { M: 'off' } } },
  ],
  safety: { stopWins: 'SB0', earth: [['M.PE', 'Q.PE']], protectedBy: { M: 'QM', KM: 'QM' } },
};
const c13Power = W('Q.L1 QM.1', 'Q.L2 QM.3 nero', 'Q.L3 QM.5 grigio', 'QM.2 KM.1', 'QM.4 KM.3 nero', 'QM.6 KM.5 grigio',
  'KM.2 M.U', 'KM.4 M.V nero', 'KM.6 M.W grigio', 'M.PE Q.PE gv');
const c13Ctl = W('QM.2 SB0.1 rosso', 'SB0.2 SB1.3 rosso', 'SB1.4 KM.A1 rosso', 'KM.A2 Q.N blu', 'SB1.3 KM.13 rosso', 'KM.14 SB1.4 rosso');

test('marcia e arresto: soluzione a 3 stelle; arresto solo nel ramo di autoritenuta segnalato', () => {
  assert.equal(evaluateV2(C13, renum(c13Power.concat(c13Ctl))).pass, true);
  const weak = W('QM.2 SB1.3 rosso', 'SB1.4 KM.A1 rosso', 'KM.A2 Q.N blu', 'QM.2 SB0.1 rosso', 'SB0.2 KM.13 rosso', 'KM.14 SB1.4 rosso');
  const r = evaluateV2(C13, renum(c13Power.concat(weak)));
  assert.ok(r.safe.items.some(i => i.code === 'safe.stopNotPriority'), JSON.stringify(r));
});

test('comando preso a monte del salvamotore o motore senza salvamotore: non protetto', () => {
  const up = c13Ctl.map(w => (w.a === 'QM.2' ? { ...w, a: 'Q.L1' } : w));
  const r = evaluateV2(C13, renum(c13Power.concat(up)));
  assert.ok(r.safe.items.some(i => i.code === 'safe.notProtected' && i.comp === 'KM'), JSON.stringify(r.safe));
});

test('bobina e spia con il ritorno sulla terra: guasto, non funzionamento', () => {
  const ctl = c13Ctl.map(w => (w.b === 'Q.N' ? { ...w, b: 'Q.PE', c: 'gv' } : w));
  const r = evaluateV2(C13, renum(c13Power.concat(ctl)));
  assert.equal(r.work.ok, false);
  assert.equal(r.work.items[0].code, 'work.loadOnEarth');
});

test('fase a terra senza differenziale: scatta il salvamotore, motivo fase a terra', () => {
  const s = createSim(C13, renum(c13Power.concat(c13Ctl, W('QM.6 Q.PE gv'))));
  assert.deepEqual(observe(s).tripped, ['QM']);
  const L = { engine: 2, src: SRC3, comps: [Q3, comp('M', 'motor3')], checks: [{ id: 'g', label: 'g', expect: { motors: { M: 'fwd' } } }] };
  const r = evaluateV2(L, W('Q.L1 M.U', 'Q.L2 M.V', 'Q.L3 M.W', 'Q.L3 Q.PE gv'));
  assert.equal(r.work.items[0].code, 'work.phaseToEarth');
});

test('dopo un corto, togliere il filo ridà l\'alimentazione', () => {
  const L = { engine: 2, src: SRC3, comps: [Q3, comp('M', 'motor3')] };
  const ok = W('Q.L1 M.U', 'Q.L2 M.V', 'Q.L3 M.W');
  const s = createSim(L, ok.concat(W('Q.L1 Q.L2')));
  assert.equal(observe(s).supply, false);
  setWires(s, ok);
  assert.equal(observe(s).motors.M, 'fwd');
});

test('relè termico escluso dalla potenza: non scalda e la prova di sovraccarico fallisce', () => {
  const L = { ...MOTOR, controlColor: 'rosso', checks: [{ id: 'sovr', label: 'sovraccarico', do: ['press SB1', 'release SB1', 'overload on', 'wait 5'], expect: { tripped: ['FR'], motors: { M: 'off' } } }] };
  const bypass = power.filter(w => !w.a.startsWith('KM.') && !w.a.startsWith('FR.')).concat(W('KM.2 M.U', 'KM.4 M.V nero', 'KM.6 M.W grigio'));
  const r = evaluateV2(L, renum(bypass.concat(control, hold)));
  assert.equal(r.work.ok, false);
  const r2 = evaluateV2(L, renum(power.concat(control, hold)));
  assert.equal(r2.work.ok, true, JSON.stringify(r2.work));
});

test('campanello: i fili del secondario dopo il pulsante sono a bassa tensione (bianco ammesso)', () => {
  const L = { ...BELL, checks: [{ id: 'b', label: 'b', do: ['press P'], expect: { loads: { B: 'on' } } }] };
  const r = evaluateV2(L, W('Q.F T.1', 'Q.N T.2 blu', 'T.3 P.3 bianco', 'P.4 B.1 bianco', 'B.2 T.4 bianco'));
  assert.equal(r.color.ok, true, JSON.stringify(r.color));
});

import { flowV2 } from '../src/engine/v2/index.js';

test('corrente visibile v2: in marcia sono percorsi potenza e comando; a motore fermo nessun filo', () => {
  const ws = renum(c13Power.concat(c13Ctl));
  const s = createSim(C13, ws);
  let f = flowV2(s);
  assert.equal(f.current, false);
  assert.ok(Object.values(f.wires).every(w => !w.current));
  act(s, 'press', 'SB1'); act(s, 'release', 'SB1');
  f = flowV2(s);
  assert.equal(f.current, true);
  const by = (a, b) => ws.find(w => w.a === a && w.b === b).id;
  assert.equal(f.wires[by('KM.2', 'M.U')].current, true);
  assert.equal(f.wires[by('KM.A2', 'Q.N')].current, true);
  assert.equal(f.wires[by('KM.14', 'SB1.4')].current, true);
  assert.equal(f.wires[by('M.PE', 'Q.PE')].current, false);
  assert.equal(f.wires[by('KM.2', 'M.U')].net, 'fase');
});

test('polarita della presa: fase e neutro scambiati sulla presa si vedono anche se tutto funziona', () => {
  const L = {
    engine: 2, comps: [comp('Q', 'quadro'), comp('P', 'presa')],
    checks: [{ id: 'on', label: 'x', do: [], expect: { loads: { P: 'on' } } }],
    safety: { pol: ['P.L', 'P.N'], earth: [['P.PE', 'Q.PE']] },
  };
  const ok = evaluateV2(L, W('Q.F P.L', 'Q.N P.N blu', 'Q.PE P.PE gv'));
  assert.equal(ok.pass, true);
  const bad = evaluateV2(L, W('Q.F P.N', 'Q.N P.L blu', 'Q.PE P.PE gv'));
  assert.equal(bad.work.ok, true);
  assert.equal(bad.safe.ok, false);
  assert.equal(bad.safe.items[0].code, 'safe.socketPolarity');
});

/* ---------- sovraccarico e cavo (E1) ---------- */

const MT_LINE = {
  engine: 2, cable: { prot: 'QM', iz: 15.5, s: 1.5 },
  comps: [Q1, comp('QM', 'mt', { in: 16, ratings: [10, 16, 20] }), comp('S1', 'sw'), comp('H1', 'lamp', { w: 2000 }), comp('S2', 'sw'), comp('H2', 'lamp', { w: 2000 })],
};
const mtWires = W('Q.F QM.1', 'QM.2 S1.a', 'QM.2 S2.a', 'S1.b H1.A', 'S2.b H2.A', 'Q.N QM.N1', 'QM.N2 H1.B', 'QM.N2 H2.B blu');

test('magnetotermico con portata: una stufa da 2000 W (8,7 A) su 10 A non scatta', () => {
  const s = createSim(MT_LINE, mtWires);
  act(s, 'rate', 'QM');   // 16 -> 20
  act(s, 'rate', 'QM');   // 20 -> 10
  assert.equal(observe(s).parts.QM.in, 10);
  act(s, 'toggle', 'S1');
  advance(s, 20);
  const o = observe(s);
  assert.deepEqual(o.tripped, []);
  assert.equal(o.loads.H1, 'on');
  assert.ok(Math.abs(o.lines.QM.amps - 8.7) < 0.1);
  assert.equal(o.cable.burnt, false);
});

test('due stufe su 10 A: 17,4 A sono 1,74 In, scatta dopo qualche secondo e il cavo non fa in tempo a scaldare', () => {
  const s = createSim(MT_LINE, mtWires);
  act(s, 'rate', 'QM'); act(s, 'rate', 'QM');
  act(s, 'toggle', 'S1'); act(s, 'toggle', 'S2');
  advance(s, 2);
  assert.deepEqual(observe(s).tripped, [], 'non subito');
  advance(s, 10);
  const o = observe(s);
  assert.deepEqual(o.tripped, ['QM']);
  assert.equal(o.loads.H1, 'off');
  assert.equal(o.cable.burnt, false);
});

test('due stufe su 16 A: 1,09 In non scatta e il cavo da 1,5 mm2 (15,5 A) si surriscalda', () => {
  const s = createSim(MT_LINE, mtWires);
  act(s, 'toggle', 'S1'); act(s, 'toggle', 'S2');
  advance(s, 12);
  const o = observe(s);
  assert.deepEqual(o.tripped, []);
  assert.equal(o.cable.burnt, true);
});

test('la portata scelta entra nella verifica', () => {
  const L = { ...MT_LINE, checks: [{ id: 'due', label: 'Due stufe', do: ['toggle S1', 'toggle S2', 'wait 12'], expect: { tripped: ['QM'] } }] };
  assert.equal(evaluateV2(L, mtWires, { ratings: { QM: 10 } }).work.ok, true);
  const bad = evaluateV2(L, mtWires, { ratings: { QM: 16 } });
  assert.equal(bad.work.ok, false);
  assert.equal(bad.work.items[0].code, 'work.cableBurnt');
});
