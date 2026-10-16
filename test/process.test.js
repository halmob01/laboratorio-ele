// Processi (P6): modelli, sensori sul banco, parole del PLC, PID nel PLC, tracciato e prove. Specifica: docs/SPEC-PROCESSI.md.

import test from 'node:test';
import assert from 'node:assert/strict';
import { MODELS, newProcess, stepProcess, exposeProcess, senseAnalog, withTuned } from '../src/engine/v2/process.js';
import { createSim, act, advance, observe, tune, setProgram } from '../src/engine/v2/sim.js';
import { runCheck, evaluateV2, traceMismatch } from '../src/engine/v2/checks.js';
import { needsClock } from '../src/engine/v2/view.js';
import { scan, newMem, validateProgram, sanitizeProgram } from '../src/engine/v2/plc.js';
import { playShift, wiresOf, withSolutionPrograms } from './turno.js';

const T = (...ids) => Object.fromEntries(ids.map(i => [i, { l: i }]));
const C = (id, type, terms, extra = {}) => ({ id, type, short: id, title: id, terms: T(...terms), ...extra });
const Q3 = C('Q', 'quadro', ['L1', 'L2', 'L3', 'N', 'PE']);
const SRC3 = { L1: 'Q.L1', L2: 'Q.L2', L3: 'Q.L3', N: 'Q.N', PE: 'Q.PE' };
const W = ws => ws.map(([a, b], k) => ({ id: k + 1, a, b, c: 'rosso' }));
const ENGINE = { engine: 2, quadroOnly: true, src: SRC3 };

/* ---------- modelli ---------- */

test('serbatoio: la pompa riempie alla portata data, lo scarico svuota, il livello resta tra 0 e 100', () => {
  const proc = { model: 'serbatoio', init: { h: 50 } };
  let ps = newProcess(proc);
  ps = stepProcess(proc, ps, { pump: 1, valve: 0 }, 60);
  assert.ok(Math.abs(ps.state.h - 80) < 1e-6);                 // 30 %/min
  ps = stepProcess(proc, ps, { pump: 1, valve: 0 }, 120);
  assert.equal(ps.state.h, 100);
  ps = stepProcess(proc, ps, { pump: 0, valve: 1 }, 600);
  assert.equal(ps.state.h, 0);
  assert.equal(exposeProcess(proc, ps).empty, true);
});

test('serbatoio: un analogico all\'1 % non vale come un digitale acceso', () => {
  const proc = { model: 'serbatoio', init: { h: 0 } };
  const a = stepProcess(proc, newProcess(proc), { pump: 0.01 }, 60).state.h;
  const b = stepProcess(proc, newProcess(proc), { pump: 1 }, 60).state.h;
  assert.ok(a < 1 && b > 29);
});

test('forno: secondo ordine, a piena potenza tende a Ta + dTmax, la camera segue la parete in ritardo', () => {
  const proc = { model: 'forno' };
  let ps = newProcess(proc);
  ps = stepProcess(proc, ps, { heater: 1 }, 30);
  assert.ok(ps.state.Tw > ps.state.T + 10, JSON.stringify(ps.state));
  ps = stepProcess(proc, ps, { heater: 1 }, 2000);
  assert.ok(Math.abs(ps.state.T - 200) < 1);
  ps = stepProcess(proc, ps, { heater: 0 }, 3000);
  assert.ok(Math.abs(ps.state.T - 20) < 1);
});

test('nastro con variatore: rampa in Hz/s, senza marcia scende con la rampa', () => {
  const proc = { model: 'nastro' };
  let ps = newProcess(proc);
  ps = stepProcess(proc, ps, { run: 1, ref: 0.6 }, 2);
  assert.ok(Math.abs(ps.state.f - 20) < 1e-6);                // 10 Hz/s
  ps = stepProcess(proc, ps, { run: 1, ref: 0.6 }, 5);
  assert.ok(Math.abs(ps.state.f - 30) < 1e-6 && Math.abs(ps.state.v - 60) < 0.5);
  ps = stepProcess(proc, ps, { run: 0, ref: 0.6 }, 1);
  assert.ok(Math.abs(ps.state.f - 20) < 1e-6);
});

test('ogni modello: funzione pura, stato non toccato', () => {
  Object.keys(MODELS).forEach(model => {
    const proc = { model };
    const ps = newProcess(proc);
    const copy = JSON.stringify(ps);
    stepProcess(proc, ps, { pump: 1, heater: 1, run: 1 }, 5);
    assert.equal(JSON.stringify(ps), copy, model);
  });
});

test('trasmettitore 4-20 mA: scala, e satura a 3,8 e 20,5 mA', () => {
  const s = { v: 'T', lo: 0, hi: 200 };
  assert.equal(senseAnalog({ T: 0 }, s), 4);
  assert.equal(senseAnalog({ T: 100 }, s), 12);
  assert.equal(senseAnalog({ T: 200 }, s), 20);
  assert.equal(senseAnalog({ T: -50 }, s), 3.8);
  assert.equal(senseAnalog({ T: 400 }, s), 20.5);
});

/* ---------- PLC: parole, confronti, scala, PID ---------- */

test('PLC: confronti, move, scale da 4-20 mA', () => {
  const P = [
    { if: 'I0', do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: 0, hi: 100 }] },
    { if: ['gt', 'MW0', 80], do: [{ op: 'coil', a: 'Q0' }] },
    { if: ['lt', 'AI0', 3.6], do: [{ op: 'coil', a: 'Q1' }] },        // filo interrotto
    { if: 'I0', do: [{ op: 'move', v: 42, out: 'AQ0' }] },
  ];
  assert.deepEqual(validateProgram(P, { I: 1, Q: 2, AI: 1, AQ: 1 }), []);
  let r = scan(P, { I0: true }, newMem(), 0, { AI0: 12 });
  assert.equal(r.mem.words.MW0, 50);
  assert.deepEqual([!!r.outputs.Q0, !!r.outputs.Q1, r.analogOut.AQ0], [false, false, 42]);
  r = scan(P, { I0: true }, r.mem, 0, { AI0: 18.4 });
  assert.equal(!!r.outputs.Q0, true);
  r = scan(P, { I0: true }, r.mem, 0, { AI0: 0 });
  assert.equal(r.mem.words.MW0, -25);                            // sotto 4 mA: sotto lo, il programma se ne accorge
  assert.equal(!!r.outputs.Q1, true);
});

test('PLC: validazione delle istruzioni analogiche', () => {
  const codes = P => validateProgram(P, { I: 1, Q: 1, AI: 1, AQ: 1 }).map(e => e.code);
  assert.deepEqual(codes([{ if: 'I0', do: [{ op: 'move', v: 1, out: 'AQ0' }] }, { if: 'I0', do: [{ op: 'move', v: 2, out: 'AQ0' }] }]), ['prog.doubleCoil']);
  assert.deepEqual(codes([{ if: 'I0', do: [{ op: 'pid', pv: 'AI0', sp: 50, out: 'AQ0', kp: 0, ti: 10, td: 0 }] }]), ['prog.badPreset']);
  assert.deepEqual(codes([{ if: 'I0', do: [{ op: 'pid', pv: 'AI0', sp: 50, out: 'AQ0', kp: 2, ti: -1, td: 0 }] }]), ['prog.badPreset']);
  assert.deepEqual(codes([{ if: 'I0', do: [{ op: 'move', v: 1, out: 'AI0' }] }]), ['prog.badAddr']);      // gli ingressi non si scrivono
  assert.deepEqual(codes([{ if: 'I0', do: [{ op: 'move', v: 1, out: 'AQ1' }] }]), ['prog.noSuchIo']);
  assert.deepEqual(codes([{ if: ['gt', 'AI0', 'MW3'], do: [{ op: 'coil', a: 'Q0' }] }]), []);
});

test('PLC: sanitize tiene le istruzioni analogiche valide e scarta le altre', () => {
  const P = [
    { if: ['ge', 'MW0', 10], do: [{ op: 'move', v: 'MW0', out: 'AQ0' }, { op: 'scale', in: 'AI0', out: 'MW1', lo: 0, hi: 100 }] },
    { if: 'I0', do: [{ op: 'pid', id: 'PID1', pv: 'MW1', sp: 'MW2', out: 'AQ1', kp: 'MW3', ti: 30, td: 0, windup: true }] },
    { if: ['gt', 'X9', 1], do: [{ op: 'move', v: 'eval()', out: 'AQ0' }] },
  ];
  const s = sanitizeProgram(P);
  assert.deepEqual(s[0], P[0]);
  assert.deepEqual(s[1], P[1]);
  assert.deepEqual(s[2], { do: [] });                 // il gradino resta (l'editor lo mostra vuoto), il contenuto non valido no
});

test('PLC: PID in manuale (condizione falsa) e ritorno in automatico senza scosse', () => {
  const P = [
    { if: 'I1', do: [{ op: 'move', v: 30, out: 'AQ0' }] },            // manuale: l'operatore tiene il 30 %
    { if: ['not', 'I1'], do: [{ op: 'pid', id: 'PID1', pv: 'AI0', sp: 12, out: 'AQ0', kp: 2, ti: 20, td: 0 }] },
  ];
  // l'uscita AQ0 e' scritta da due gradini: e' proprio il caso che la validazione vieta. Qui serve per provare il tracking.
  let mem = newMem();
  for (let k = 0; k < 5; k++) mem = scan(P, { I1: true }, mem, 0.5, { AI0: 10 }).mem;
  const r = scan(P, { I1: false }, mem, 0.5, { AI0: 10 });
  assert.ok(Math.abs(r.analogOut.AQ0 - 30) < 0.2, String(r.analogOut.AQ0));
});

/* ---------- serbatoio con due galleggianti e PLC: isteresi ---------- */

const TANK = {
  ...ENGINE, id: 'test-serbatoio',
  process: { model: 'serbatoio', params: { qIn: 60, qOut: 20 }, init: { h: 50 }, speed: 20, actuators: { pump: { plc: 'PLC.Q0' }, valve: { value: 1 } }, trace: ['h', 'PLC.Q0'], labels: { h: 'Il livello' } },
  comps: [
    Q3,
    C('PLC', 'plc', ['A1', 'A2', 'I0', 'I1', 'IC', 'Q0A', 'Q0B'], {
      program: [
        { if: 'I1', do: [{ op: 'set', a: 'Q0' }] },      // livello basso: pompa accesa
        { if: 'I0', do: [{ op: 'reset', a: 'Q0' }] },    // livello alto: pompa spenta
      ],
    }),
    C('LH', 'sens', ['1', '2', '3', '4'], { sense: { v: 'h', above: 80 } }),
    C('LL', 'sens', ['1', '2', '3', '4'], { sense: { v: 'h', below: 20 } }),
  ],
  checks: [
    { id: 'isteresi', label: 'Il livello resta tra i due galleggianti', do: ['wait 1200'], expect: { trace: [{ v: 'h', within: [18, 82] }, { v: 'h', reaches: 80 }, { v: 'PLC.Q0', maxSwitches: 10 }] } },
  ],
  solution: [['Q.L1', 'PLC.A1'], ['PLC.A2', 'Q.N'], ['PLC.IC', 'Q.N'], ['Q.L1', 'LH.3'], ['LH.4', 'PLC.I0'], ['Q.L1', 'LL.3'], ['LL.4', 'PLC.I1']],
};

test('serbatoio: i galleggianti comandano la pompa attraverso il PLC (isteresi)', () => {
  const sim = createSim(TANK, W(TANK.solution));
  advance(sim, 80);                                    // 50 -> 20 a -20 %/min: 90 s
  let o = observe(sim);
  assert.deepEqual([o.parts.LL.act, !!o.plc.PLC.q.Q0], [false, false]);
  advance(sim, 12);
  o = observe(sim);
  assert.equal(o.plc.PLC.q.Q0, true, 'livello basso: pompa accesa');
  const low = Math.min(...sim.trace.map(r => r.h));
  assert.ok(low > 19.5 && low <= 20, String(low));
  advance(sim, 30);
  o = observe(sim);
  assert.equal(o.parts.LL.act, false);
  assert.equal(o.plc.PLC.q.Q0, true, 'resta accesa fino al galleggiante alto');
  assert.ok(o.process.h > 35 && o.process.h < 45, String(o.process.h));   // +40 %/min da 90,5 s
  advance(sim, 120);                                    // +40 %/min: in 90 s sale di 60
  o = observe(sim);
  assert.equal(o.plc.PLC.q.Q0, false);
  assert.ok(sim.trace.length > 400 && sim.trace.every(r => 't' in r && 'h' in r && 'PLC.Q0' in r));
});

test('serbatoio: la prova sul tracciato passa con il programma giusto e cade senza isteresi', () => {
  const ok = runCheck(TANK, W(TANK.solution), TANK.checks[0]);
  assert.equal(ok.ok, true, JSON.stringify(ok.fail));
  // pompa comandata solo dal galleggiante basso (bobina, niente memoria): commuta di continuo attorno a 20
  const bad = { ...TANK, comps: TANK.comps.map(c => (c.type === 'plc' ? { ...c, program: [{ if: 'I1', do: [{ op: 'coil', a: 'Q0' }] }] } : c)) };
  const r = runCheck(bad, W(TANK.solution), TANK.checks[0]);
  assert.equal(r.ok, false);
  assert.equal(r.fail.comp, 'trace.h');
  assert.equal(r.fail.rule, 'reaches');
});

test('serbatoio: evaluateV2 e il testo del motivo', async () => {
  const bad = { ...TANK, comps: TANK.comps.map(c => (c.type === 'plc' ? { ...c, program: [{ if: 'I1', do: [{ op: 'coil', a: 'Q0' }] }] } : c)) };
  const r = evaluateV2(bad, W(TANK.solution));
  const item = r.work.items.find(x => x.code === 'work.checkFail');
  assert.equal(item.rule, 'reaches');
  const { itemText } = await import('../src/content/it.js');
  assert.match(itemText(item, bad), /Il livello arriva al massimo a 50: doveva raggiungere 80\./);
});

test('il processo chiede l\'orologio finche\' l\'impianto e\' alimentato', () => {
  const sim = createSim(TANK, W(TANK.solution));
  assert.equal(needsClock(TANK, observe(sim)), true);
  sim.supply = false;
  assert.equal(needsClock(TANK, observe(sim)), false);
});

/* ---------- forno: trasmettitore, ingresso analogico, PID nel PLC, pannello di regolazione ---------- */

const OVEN = {
  ...ENGINE, id: 'test-forno',
  process: {
    model: 'forno', speed: 20, actuators: { heater: { analog: 'PLC.AQ0' } }, trace: ['T', 'PLC.AQ0'], labels: { T: 'La temperatura' },
    tunable: { sp: { word: 'PLC.MW1', min: 20, max: 180, step: 1, init: 60 }, kp: { word: 'PLC.MW2', min: 0.1, max: 20, step: 0.1, init: 3 }, ti: { word: 'PLC.MW3', min: 0, max: 600, step: 1, init: 100 } },
  },
  comps: [
    Q3,
    C('PLC', 'plc', ['A1', 'A2', 'I0', 'IC', 'Q0A', 'Q0B', 'AI0+', 'AI0-'], {
      program: [
        { if: 'I0', do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: 0, hi: 200 }, { op: 'pid', id: 'PID1', pv: 'MW0', sp: 'MW1', out: 'AQ0', kp: 'MW2', ti: 'MW3', td: 15 }] },
        { if: ['lt', 'AI0', 3.6], do: [{ op: 'coil', a: 'Q0' }] },          // allarme: filo del trasmettitore interrotto
      ],
    }),
    C('TT', 'tx', ['+', '-'], { sense: { v: 'T', lo: 0, hi: 200 } }),
  ],
  checks: [
    { id: 'regola', label: 'La temperatura arriva a 60 °C e ci resta', do: ['wait 900'], expect: { trace: [{ v: 'T', within: [58, 62], from: 400 }, { v: 'T', max: 66 }] } },
  ],
  solution: [['Q.L1', 'PLC.A1'], ['PLC.A2', 'Q.N'], ['PLC.IC', 'Q.N'], ['Q.L1', 'PLC.I0'], ['TT.+', 'PLC.AI0+'], ['TT.-', 'PLC.AI0-']],
};

test('forno: l\'anello 4-20 mA porta la temperatura al PLC solo con la polarità giusta', () => {
  let o = observe(createSim(OVEN, W(OVEN.solution)));
  assert.equal(o.plc.PLC.ai.AI0, 4 + 16 * 20 / 200);
  assert.equal(o.plc.PLC.q.Q0, undefined);
  o = observe(createSim(OVEN, W(OVEN.solution.slice(0, 4).concat([['TT.+', 'PLC.AI0-'], ['TT.-', 'PLC.AI0+']]))));
  assert.equal(o.plc.PLC.ai.AI0, 0);
  assert.equal(o.plc.PLC.q.Q0, true, 'filo interrotto riconosciuto');
  o = observe(createSim(OVEN, W(OVEN.solution.slice(0, 5))));
  assert.equal(o.plc.PLC.ai.AI0, 0);
  // l'anello toccato dalla fase non vale
  o = observe(createSim(OVEN, W(OVEN.solution.concat([['Q.L1', 'TT.+']]))));
  assert.equal(o.plc.PLC.ai.AI0, 0);
});

test('forno: il PID nel PLC regola la temperatura (prova sul tracciato)', () => {
  const r = runCheck(OVEN, W(OVEN.solution), OVEN.checks[0]);
  assert.equal(r.ok, true, JSON.stringify(r.fail));
  const end = r.sim.trace[r.sim.trace.length - 1];
  assert.ok(Math.abs(end.T - 60) < 0.5 && end['PLC.AQ0'] > 0 && end['PLC.AQ0'] < 100);
});

test('forno: polarità invertita = misura a 0 mA, il PID scalda al massimo e la prova cade sulla sovraelongazione', () => {
  const ws = W(OVEN.solution.slice(0, 4).concat([['TT.+', 'PLC.AI0-'], ['TT.-', 'PLC.AI0+']]));
  const r = runCheck(OVEN, ws, OVEN.checks[0]);
  assert.equal(r.ok, false);
  assert.equal(r.fail.comp, 'trace.T');
});

test('forno: il pannello cambia setpoint e guadagni (limiti e passo), la verifica usa i valori scelti', () => {
  const sim = createSim(OVEN, W(OVEN.solution));
  assert.equal(tune(sim, 'sp', 250), 180);
  assert.equal(tune(sim, 'kp', 2.34), 2.3);
  assert.equal(tune(sim, 'nope', 1), null);
  assert.equal(observe(sim).plc.PLC.words.MW1, 180);
  tune(sim, 'sp', 100);
  advance(sim, 1200);
  assert.ok(Math.abs(observe(sim).process.T - 100) < 1);
  // con il setpoint a 100 la prova "resta a 60" deve cadere
  const r = evaluateV2(OVEN, W(OVEN.solution), { tuned: { sp: 100 } });
  assert.equal(r.work.items.some(x => x.code === 'work.checkFail' && x.comp === 'trace.T'), true);
  assert.equal(evaluateV2(OVEN, W(OVEN.solution)).work.ok, true);
  assert.equal(withTuned(OVEN, { sp: 70 }).process.tuned.sp, 70);
});

test('forno: un guadagno troppo alto fa oscillare la temperatura (la prova lo vede)', () => {
  const r = evaluateV2(OVEN, W(OVEN.solution), { tuned: { kp: 20, ti: 15 } });
  assert.equal(r.work.ok, false);
});

test('prova lunga: tempo di calcolo contenuto', () => {
  const t0 = performance.now();
  runCheck(OVEN, W(OVEN.solution), { id: 'x', do: ['wait 300'], expect: {} });
  const ms = performance.now() - t0;
  assert.ok(ms < 400, ms + ' ms per 300 s simulati');
});

/* ---------- nastro con variatore ---------- */

const BELT = {
  ...ENGINE, id: 'test-nastro',
  process: { model: 'nastro', actuators: { run: { plc: 'PLC.Q0' }, ref: { analog: 'PLC.AQ0' } }, trace: ['v'] },
  comps: [
    Q3,
    C('PLC', 'plc', ['A1', 'A2', 'I0', 'IC', 'Q0A', 'Q0B'], { program: [{ if: 'I0', do: [{ op: 'coil', a: 'Q0' }, { op: 'move', v: 60, out: 'AQ0' }] }] }),
    C('SA', 'sw', ['a', 'b']),
  ],
  solution: [['Q.L1', 'PLC.A1'], ['PLC.A2', 'Q.N'], ['PLC.IC', 'Q.N'], ['Q.L1', 'SA.a'], ['SA.b', 'PLC.I0']],
};

test('nastro: marcia dal PLC e riferimento analogico; senza alimentazione al PLC il variatore si ferma', () => {
  const sim = createSim(BELT, W(BELT.solution));
  act(sim, 'toggle', 'SA');
  advance(sim, 10);
  assert.ok(Math.abs(observe(sim).process.v - 60) < 1);
  const r = traceMismatch(sim.trace, [{ v: 'v', reaches: 59, by: 5 }]);
  assert.equal(r, null);
  sim.supply = false;
  advance(sim, 10);
  assert.ok(observe(sim).process.v < 1);
});

test('tracciato: regole e motivi', () => {
  const rows = [0, 1, 2, 3, 4].map(t => ({ t, x: [10, 20, 30, 20, 10][t], b: [0, 1, 0, 1, 1][t] }));
  assert.equal(traceMismatch(rows, [{ v: 'x', within: [5, 35] }]), null);
  assert.deepEqual(traceMismatch(rows, [{ v: 'x', max: 25 }]), { comp: 'trace.x', rule: 'max', want: 25, got: 30, at: 2 });
  assert.equal(traceMismatch(rows, [{ v: 'x', within: [15, 35], from: 1, to: 3 }]), null);
  assert.equal(traceMismatch(rows, [{ v: 'b', maxSwitches: 3 }]), null);
  assert.equal(traceMismatch(rows, [{ v: 'b', maxSwitches: 2 }]).got, 3);
  assert.equal(traceMismatch(rows, [{ v: 'x', reaches: 30, by: 1 }]).rule, 'reaches');
  assert.equal(traceMismatch(rows, [{ v: 'x', drops: 10, from: 3 }]), null);
  assert.equal(traceMismatch(rows, [{ v: 'y', min: 0 }]).rule, 'noData');
});

test('setProgram azzera anche le uscite analogiche', () => {
  const sim = createSim(BELT, W(BELT.solution));
  act(sim, 'toggle', 'SA');
  assert.equal(observe(sim).plc.PLC.aq.AQ0, 60);
  setProgram(sim, 'PLC', [{ if: 'I0', do: [{ op: 'move', v: 20, out: 'AQ0' }] }]);
  assert.equal(observe(sim).plc.PLC.aq.AQ0, 20);
});

/* ---------- pannello operatore (c37) ---------- */
import { levels } from '../src/content/index.js';
const L37 = levels.find(l => l.id === 'c37-pannello');
const sim37 = () => createSim({ ...L37, comps: L37.comps.map(c => (c.type === 'plc' ? { ...c, program: L37.solutionPrograms.PLC } : c)) }, W(L37.solution));
const alarm = (o, id) => ((o.hmi.alarms.find(a => a.id === id) || {}).state || 'off');

test('pannello: ciclo di un allarme (attivo, riconosciuto, rientrato, off) e sirena', () => {
  const s = sim37();
  act(s, 'cut', 'TT'); advance(s, 1);
  let o = observe(s);
  assert.equal(alarm(o, 'A2'), 'attivo'); assert.equal(o.hmi.horn, true);
  act(s, 'ack', 'HMI'); o = observe(s);
  assert.equal(alarm(o, 'A2'), 'riconosciuto'); assert.equal(o.hmi.horn, false);
  act(s, 'cut', 'TT'); advance(s, 1); o = observe(s);
  assert.equal(alarm(o, 'A2'), 'off', 'riconosciuto e rientrato: sparisce');
  act(s, 'cut', 'TT'); advance(s, 1); act(s, 'cut', 'TT'); advance(s, 1); o = observe(s);
  assert.equal(alarm(o, 'A2'), 'rientrato'); assert.equal(o.hmi.horn, true);
  act(s, 'cut', 'TT'); advance(s, 1); o = observe(s);
  assert.equal(alarm(o, 'A2'), 'attivo', 'rientrato che ritorna: di nuovo attivo');
});

test('pannello: elenco per priorità, poi il più recente in alto', () => {
  const s = sim37();
  act(s, 'jam', 'LL'); advance(s, 600);          // si svuota: troppo basso (media)
  act(s, 'cut', 'TT'); advance(s, 1);            // poi guasto sensore (alta)
  const o = observe(s);
  assert.deepEqual(o.hmi.alarms.map(a => a.id), ['A2', 'A3']);
});

test('pannello: senza collegamento i valori restano fermi e dopo 3 secondi sono vecchi; il riconoscimento non arriva', () => {
  const s = sim37();
  advance(s, 10);
  const before = observe(s).hmi.values.find(v => v.id === 'V1');
  assert.equal(before.stale, false);
  act(s, 'toggle', 'HMI');
  advance(s, 2);
  let v = observe(s).hmi.values.find(x => x.id === 'V1');
  assert.equal(v.stale, false, 'nei primi secondi sembra ancora buono');
  assert.equal(v.v, before.v);
  advance(s, 60);
  const o = observe(s);
  v = o.hmi.values.find(x => x.id === 'V1');
  assert.deepEqual([o.hmi.link, v.stale, v.v], [false, true, before.v]);
  assert.ok(Math.abs(o.process.h - before.v) > 5, 'il serbatoio intanto e\' cambiato');
  act(s, 'cut', 'TT'); advance(s, 1);
  assert.equal(alarm(observe(s), 'A2'), 'off', 'senza collegamento l\'allarme non arriva');
  act(s, 'toggle', 'HMI'); advance(s, 1);
  assert.equal(alarm(observe(s), 'A2'), 'attivo');
  assert.equal(observe(s).hmi.values.find(x => x.id === 'V1').stale, false);
});

test('pannello: PLC spento = nessun collegamento', () => {
  const s = sim37();
  s.supply = false; advance(s, 10);
  assert.equal(observe(s).hmi.link, false);
});

test('pannello: galleggiante bloccato e filo interrotto (guasti simulati)', () => {
  const s = sim37();
  act(s, 'jam', 'LH'); advance(s, 600);
  const o = observe(s);
  assert.ok(o.process.h > 90 && o.parts.LH.act === false);
  assert.equal(alarm(o, 'A1'), 'attivo');
  act(s, 'cut', 'TT'); advance(s, 1);
  assert.equal(observe(s).plc.PLC.ai.AI0, 0);
});

test('c37: la verifica rifiuta il pannello scollegato', () => {
  const ws = L37.solution.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
  const ok = evaluateV2(L37, ws, { programs: L37.solutionPrograms });
  assert.equal(ok.pass, true, JSON.stringify(ok.work.items));
  const off = evaluateV2(L37, ws, { programs: L37.solutionPrograms, hmiOff: ['HMI'] });
  assert.equal(off.work.items.some(i => i.code === 'work.hmiOffline'), true);
  assert.equal(off.pass, false);
});

test('motivo di un intervallo con numeri negativi si legge bene', async () => {
  const { itemText } = await import('../src/content/it.js');
  const lv = { process: { labels: { grid: 'La potenza della rete' } } };
  const fail = traceMismatch([{ t: 5, grid: 1.4 }], [{ v: 'grid', within: [-4.5, 0.1] }]);
  assert.deepEqual([fail.rule, fail.want], ['within', '-4.5~0.1']);
  assert.equal(itemText({ code: 'work.checkFail', label: 'x', comp: 'trace.grid', ...fail }, lv), 'Prova non superata: x. La potenza della rete vale 1,4 (a 5 s): deve restare tra −4,5 e 0,1.'.replace('−', '-'));
});

/* ---------- turno a guasti (c44) ---------- */
const L44 = levels.find(l => l.id === 'c44-guasti');
const W44 = wiresOf(L44);

test('c44: ripari in tempo i tre guasti e il turno e\' consegnato', () => {
  const sim = playShift(L44, { react: () => 15 });
  const r = evaluateV2(L44, W44, { liveSim: sim });
  assert.equal(r.pass, true, JSON.stringify(r.work.items));
});

test('c44: i guasti scattano da soli ai tempi dichiarati e senza far niente restano aperti e il serbatoio trabocca', () => {
  const sim = playShift(L44, { react: () => null });
  const rep = observe(sim).scenario;
  assert.deepEqual(rep.faults.map(f => f.firedAt !== null && f.fixedAt === null), [true, true, true]);
  const r = evaluateV2(L44, W44, { liveSim: sim });
  assert.equal(r.work.ok, false);
  assert.ok(Math.max(...sim.trace.map(x => x.h)) >= 99.9, 'il galleggiante bloccato fa traboccare il serbatoio');
});

test('c44: il tempo massimo del galleggiante bloccato viene prima del traboccamento', () => {
  // riparando all'ultimo secondo utile il serbatoio non trabocca: il "troppo tardi" e il traboccamento non si contraddicono
  const sim = playShift(L44, { react: f => f.maxDelay - 1 });
  assert.ok(Math.max(...sim.trace.map(x => x.h)) < 99.9);
  assert.equal(evaluateV2(L44, W44, { liveSim: sim }).pass, true);
});

test('c44: riparare troppo tardi (oltre il massimo) non basta', () => {
  const sim = playShift(L44, { react: f => (f.id === 'f2' ? f.maxDelay + 5 : 15) });
  const r = evaluateV2(L44, W44, { liveSim: sim });
  assert.equal(r.work.ok, false);
  assert.equal(r.work.items[0].code, 'work.scenarioLate');
});

test('c44: prima di dare corrente la verifica dice di cominciare; durante il turno, di aspettare', () => {
  const sim = createSim(L44, W44);
  assert.equal(evaluateV2(L44, W44, { liveSim: sim }).work.items[0].code, 'work.scenarioNone');
  assert.equal(evaluateV2(L44, W44, {}).work.items[0].code, 'work.scenarioNone');
  advance(sim, 100);
  assert.equal(evaluateV2(L44, W44, { liveSim: sim }).work.items[0].code, 'work.scenarioRunning');
});

test('turno: un guasto che "toglie" un pezzo gia\' staccato dall\'allievo non lo ricollega', () => {
  const sim = createSim(L44, W44);
  act(sim, 'toggle', 'HMI');                 // l'allievo stacca il cavo del pannello prima del guasto
  advance(sim, 510);
  const f3 = observe(sim).scenario.faults.find(f => f.id === 'f3');
  assert.equal(observe(sim).parts.HMI.on, false);
  assert.equal(f3.open, true);
});

test('turno: a turno finito una riparazione non conta piu\'', () => {
  const sim = playShift(L44, { react: f => (f.id === 'f3' ? null : 15) });
  act(sim, 'toggle', 'HMI');
  assert.equal(observe(sim).scenario.faults.find(f => f.id === 'f3').open, true);
});

test('turno: in ogni livello a guasti le azioni del guasto e della riparazione sono valide, e il guasto rompe davvero qualcosa', () => {
  levels.filter(l => l.scenario).forEach(l => {
    l.scenario.faults.forEach(f => {
      const sim = createSim(withSolutionPrograms(l), wiresOf(l));
      const ok = () => !!sim.parts[f.fixed.part][f.fixed.prop] === !!f.fixed.is;
      assert.ok(sim.parts[f.fixed.part], l.id + ' ' + f.id);
      (l.solutionStart || []).forEach(d => { const [a, x] = d.split(' '); act(sim, a, x); advance(sim, 1); });
      assert.equal(ok(), true, l.id + ' ' + f.id + ': a turno appena cominciato il pezzo e\' a posto');
      const [a, x] = f.do.split(' ');
      act(sim, a, x);
      assert.equal(ok(), false, l.id + ' ' + f.id + ': il guasto rompe il pezzo');
      assert.ok(Array.isArray(f.fix) && f.fix.length, l.id + ' ' + f.id + ': riparazione scritta');
      f.fix.forEach(d => { const [b, y] = d.split(' '); act(sim, b, y); });
      assert.equal(ok(), true, l.id + ' ' + f.id + ': la riparazione rimette a posto');
      assert.ok(f.at + f.maxDelay < l.scenario.duration, l.id + ' ' + f.id + ': il tempo massimo scade prima della fine del turno');
    });
  });
});
