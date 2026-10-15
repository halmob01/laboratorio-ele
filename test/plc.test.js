// PLC didattico: scansione, istruzioni, validazione, e il componente nel motore.

import test from 'node:test';
import assert from 'node:assert/strict';
import { scan, newMem, validateProgram } from '../src/engine/v2/plc.js';

const run = (program, steps) => {
  let mem = newMem(); const out = [];
  steps.forEach(([inputs, dt]) => { const r = scan(program, inputs, mem, dt ?? 0); mem = r.mem; out.push(r); });
  return out;
};

const MARCIA_ARRESTO = [
  { if: ['and', ['or', 'I1', 'Q0'], 'I0'], do: [{ op: 'coil', a: 'Q0' }] },
];

test('autoritenuta: Marcia, rilascio, Arresto', () => {
  const r = run(MARCIA_ARRESTO, [
    [{ I0: true, I1: false }], [{ I0: true, I1: true }], [{ I0: true, I1: false }], [{ I0: false, I1: false }], [{ I0: true, I1: false }],
  ]);
  assert.deepEqual(r.map(x => !!x.outputs.Q0), [false, true, true, false, false]);
});

test('la funzione e\' pura: la memoria data non cambia', () => {
  const m = newMem();
  const copy = JSON.stringify(m);
  scan(MARCIA_ARRESTO, { I0: true, I1: true }, m, 1);
  assert.equal(JSON.stringify(m), copy);
});

test('Set e Reset', () => {
  const P = [{ if: 'I0', do: [{ op: 'set', a: 'Q0' }] }, { if: 'I1', do: [{ op: 'reset', a: 'Q0' }] }];
  const r = run(P, [[{ I0: true }], [{ I0: false }], [{ I1: true }]]);
  assert.deepEqual(r.map(x => !!x.outputs.Q0), [true, true, false]);
});

test('fronte di salita: un solo giro di scansione', () => {
  const P = [{ if: ['rise', 'I0'], do: [{ op: 'coil', a: 'Q0' }] }];
  const r = run(P, [[{ I0: false }], [{ I0: true }], [{ I0: true }], [{ I0: false }], [{ I0: true }]]);
  assert.deepEqual(r.map(x => !!x.outputs.Q0), [false, true, false, false, true]);
});

test('temporizzatore ritardato: scatta dopo il tempo e si azzera se la condizione cade', () => {
  const P = [{ if: 'I0', do: [{ op: 'ton', id: 'T1', pt: 3 }] }, { if: 'T1', do: [{ op: 'coil', a: 'Q0' }] }];
  const r = run(P, [[{ I0: true }, 0], [{ I0: true }, 1], [{ I0: true }, 1], [{ I0: true }, 1], [{ I0: false }, 1], [{ I0: true }, 1]]);
  assert.deepEqual(r.map(x => !!x.outputs.Q0), [false, false, false, true, false, false]);
});

test('contatore in avanti: conta i fronti e si azzera con il reset', () => {
  const P = [{ if: 'I0', do: [{ op: 'ctu', id: 'C1', pv: 3, r: 'I1' }] }, { if: 'C1', do: [{ op: 'coil', a: 'Q0' }] }];
  const pulse = n => Array.from({ length: n }, () => [[{ I0: true }], [{ I0: false }]]).flat();
  const r = run(P, pulse(3));
  assert.equal(!!r[r.length - 1].outputs.Q0, true);
  assert.equal(!!r[3].outputs.Q0, false);   // dopo due impulsi non ancora
  const r2 = run(P, pulse(3).concat([[{ I1: true }]]));
  assert.equal(!!r2[r2.length - 1].outputs.Q0, false);
});

test('un impulso lungo conta una volta sola', () => {
  const P = [{ if: 'I0', do: [{ op: 'ctu', id: 'C1', pv: 2 }] }, { if: 'C1', do: [{ op: 'coil', a: 'Q0' }] }];
  const r = run(P, [[{ I0: true }], [{ I0: true }], [{ I0: true }]]);
  assert.equal(!!r[2].outputs.Q0, false);
});

test('ordine dei gradini: un merker scritto dopo si legge alla scansione successiva', () => {
  const P = [{ if: 'M0', do: [{ op: 'coil', a: 'Q0' }] }, { if: 'I0', do: [{ op: 'coil', a: 'M0' }] }];
  const r = run(P, [[{ I0: true }], [{ I0: true }]]);
  assert.deepEqual(r.map(x => !!x.outputs.Q0), [false, true]);
});

test('validazione: indirizzi, bobine doppie, ingressi scritti', () => {
  const ok = validateProgram(MARCIA_ARRESTO, { I: 4, Q: 2 });
  assert.deepEqual(ok, []);
  assert.ok(validateProgram([{ if: 'I9', do: [{ op: 'coil', a: 'Q0' }] }], { I: 4, Q: 2 }).some(e => e.code === 'prog.noSuchIo'));
  assert.ok(validateProgram([{ if: 'I0', do: [{ op: 'coil', a: 'Q0' }] }, { if: 'I1', do: [{ op: 'coil', a: 'Q0' }] }]).some(e => e.code === 'prog.doubleCoil'));
  assert.ok(validateProgram([{ if: 'I0', do: [{ op: 'coil', a: 'I1' }] }]).some(e => e.code === 'prog.writeInput'));
  assert.ok(validateProgram([{ if: 'I0', do: [] }]).some(e => e.code === 'prog.rungEmpty'));
  assert.ok(validateProgram([{ if: 'I0', do: [{ op: 'ton', id: 'T1', pt: 0 }] }]).some(e => e.code === 'prog.badPreset'));
});

/* ---------- il componente nel motore: livello c29 ---------- */
import { levels } from '../src/content/index.js';
import { createSim, act, advance, observe, evaluateV2 } from '../src/engine/v2/index.js';

const L29 = levels.find(l => l.id === 'c29-plc');
const W29 = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
const without = (...pairs) => L29.solution.filter(([a, b]) => !pairs.some(([x, y]) => (x === a && y === b) || (x === b && y === a)));
const press = (s, id) => { act(s, 'press', id); act(s, 'release', id); };

test('c29: la soluzione dà tre stelle', () => {
  const r = evaluateV2(L29, W29(L29.solution));
  assert.equal(r.pass, true, JSON.stringify(r));
});

test('c29: autoritenuta nel programma, arresto che vince, spia che segue l\'uscita', () => {
  const s = createSim(L29, W29(L29.solution));
  assert.equal(observe(s).motors.M, 'off');
  press(s, 'SB1');
  assert.deepEqual([observe(s).motors.M, observe(s).loads.H], ['fwd', 'on']);
  act(s, 'press', 'SB0');
  assert.deepEqual([observe(s).motors.M, observe(s).loads.H], ['off', 'off']);
  act(s, 'release', 'SB0');
  assert.equal(observe(s).motors.M, 'off', 'rilasciato l\'arresto non riparte da solo');
});

test('c29: senza IC gli ingressi non vedono mai tensione', () => {
  const ws = W29(without(['PLC.IC', 'Q.N']));
  const s = createSim(L29, ws);
  press(s, 'SB1');
  assert.equal(observe(s).motors.M, 'off');
  assert.deepEqual(observe(s).plc.PLC.inputs, { I0: false, I1: false, I2: false });
  assert.equal(evaluateV2(L29, ws).pass, false);
});

test('c29: filo dell\'arresto staccato da I0 = stato sicuro: il motore non parte', () => {
  const s = createSim(L29, W29(without(['SB0.2', 'PLC.I0'])));
  press(s, 'SB1');
  assert.equal(observe(s).motors.M, 'off');
});

test('c29: senza alimentazione il PLC perde le uscite e la memoria', () => {
  const s = createSim(L29, W29(L29.solution));
  press(s, 'SB1');
  assert.equal(observe(s).motors.M, 'fwd');
  act(s, 'toggle', 'QM');                 // apre il salvamotore: tutto a valle senza tensione
  assert.equal(observe(s).plc.PLC.powered, false);
  act(s, 'toggle', 'QM');                 // lo richiude: il PLC riparte da zero, il motore non riparte da solo
  assert.equal(observe(s).motors.M, 'off');
});

test('il programma dell\'allievo prende il posto di quello del livello', () => {
  const prog = [{ if: ['and', 'I1', 'I0'], do: [{ op: 'coil', a: 'Q0' }] }];   // senza autoritenuta
  const ws = W29(L29.solution);
  const s = createSim({ ...L29, comps: L29.comps.map(c => (c.type === 'plc' ? { ...c, program: prog } : c)) }, ws);
  press(s, 'SB1');
  assert.equal(observe(s).motors.M, 'off', 'a marcia rilasciata il motore si ferma');
  const r = evaluateV2(L29, ws, { programs: { PLC: prog } });
  assert.equal(r.work.ok, false);
});

test('regola emergencyHardwired: l\'emergenza deve agire sul cablaggio, non sul programma', () => {
  // livello di prova: il fungo e' in serie alla bobina di KM (giusto) oppure arriva solo a un ingresso del PLC (sbagliato)
  const Q = { id: 'Q', type: 'quadro', short: 'Q', title: 'Q', terms: { L1: {}, L2: {}, L3: {}, N: {}, PE: {} } };
  const mk = (id, type, terms, extra = {}) => ({ id, type, short: id, title: id, terms: Object.fromEntries(terms.map(t => [t, {}])), ...extra });
  const base = {
    engine: 2, src: { L1: 'Q.L1', L2: 'Q.L2', L3: 'Q.L3', N: 'Q.N', PE: 'Q.PE' },
    comps: [Q, mk('KM', 'km', ['A1', 'A2', '1', '2', '3', '4', '5', '6']), mk('M', 'motor3', ['U', 'V', 'W', 'PE']),
      mk('PLC', 'plc', ['A1', 'A2', 'I0', 'IC', 'Q0A', 'Q0B'], { program: [{ if: 'I0', do: [{ op: 'coil', a: 'Q0' }] }] }),
      mk('SBE', 'fungo', ['1', '2'])],
    safety: { emergencyHardwired: { stop: 'SBE' } },
    checks: [{ id: 'gira', label: 'A fungo sbloccato il motore gira', do: [], expect: { motors: { M: 'fwd' } } }],
  };
  const common = [['Q.L1', 'KM.1'], ['Q.L2', 'KM.3'], ['Q.L3', 'KM.5'], ['KM.2', 'M.U'], ['KM.4', 'M.V'], ['KM.6', 'M.W'], ['Q.PE', 'M.PE'], ['Q.L1', 'PLC.A1'], ['PLC.A2', 'Q.N'], ['PLC.IC', 'Q.N'], ['KM.A2', 'Q.N']];
  const col = (l, c) => l.map(([a, b]) => [a, b, c || 'marrone']);
  // giusto: fase -> fungo -> contatto Q0 -> bobina; l'ingresso I0 e' sempre alimentato da una fase
  const good = col(common).concat(col([['Q.L1', 'PLC.I0'], ['Q.L1', 'SBE.1'], ['SBE.2', 'PLC.Q0A'], ['PLC.Q0B', 'KM.A1']]));
  // sbagliato: il contatto Q0 alimenta la bobina direttamente, il fungo toglie tensione solo a I0
  const bad = col(common).concat(col([['Q.L1', 'SBE.1'], ['SBE.2', 'PLC.I0'], ['Q.L1', 'PLC.Q0A'], ['PLC.Q0B', 'KM.A1']]));
  const run = ws => { const L = { ...base }; const sim = createSim(L, W29(ws)); sim.forcePlc = 'allOn'; act(sim, 'toggle', 'SBE'); return observe(sim); };
  const og = run(good), ob = run(bad);
  assert.equal(og.motors.M, 'off');
  assert.equal(ob.motors.M, 'fwd', 'con l\'uscita forzata il motore gira anche a fungo premuto');
  const codes = r => r.safe.items.map(i => i.code);
  assert.equal(evaluateV2(base, W29(good)).work.ok, true);
  assert.deepEqual(codes(evaluateV2(base, W29(good))).includes('safe.emergencyInProgram'), false);
  assert.ok(codes(evaluateV2(base, W29(bad))).includes('safe.emergencyInProgram'));
});

/* ---------- l'editor nella sessione: c30 ---------- */
import { createSession } from '../src/engine/index.js';
import { deriveFull } from '../src/content/index.js';

const L30 = levels.find(l => l.id === 'c30-ladder');
const openC30 = (storage) => { const s = createSession({ levels, deriveFull, initialLevel: 'c01-circuito-chiuso', ...(storage ? { storage } : {}) }); s.start(); s.selectLevel('c30-ladder'); s.skipLesson(); return s; };

test('c30: cablaggio gia\' fatto e programma vuoto: il motore non parte finche\' non si scrive il programma', () => {
  const s = openC30();
  assert.equal(s.snapshot().wires.length, L30.fixed.length);
  assert.deepEqual(s.snapshot().programs, {});
  s.press('SB1'); s.release('SB1');
  assert.equal(s.snapshot().obs.motors.M, 'off');
  assert.equal(s.check().pass, false);
});

test('c30: scrivere il programma lo carica nel PLC e fa funzionare la macchina', () => {
  const s = openC30();
  s.setProgram('PLC', L30.solutionPrograms.PLC);
  s.press('SB1'); s.release('SB1');
  assert.equal(s.snapshot().obs.motors.M, 'fwd');
  assert.equal(s.snapshot().obs.plc.PLC.rungs.every(Boolean), true);
  assert.equal(s.check().pass, true);
});

test('c30: un programma storto non rompe il motore (viene ripulito) e la verifica non passa', () => {
  const s = openC30();
  s.setProgram('PLC', [{ if: ['and', 'I1', { x: 1 }], do: [{ op: 'coil', a: 'Q0' }, { op: 'boom' }] }, 'zzz', null]);
  const p = s.snapshot().programs.PLC;
  assert.equal(p.length, 1);
  assert.deepEqual(p[0].do, [{ op: 'coil', a: 'Q0' }]);
  assert.equal(s.check().pass, false);
});

test('c30: il programma si salva e si ritrova dopo il ricaricamento; Annulla tutto lo azzera', () => {
  let saved = null;
  const storage = { saveWork: w => { saved = JSON.parse(JSON.stringify(w)); }, loadWork: () => saved };
  const s = openC30(storage);
  s.setProgram('PLC', L30.solutionPrograms.PLC);
  assert.ok(saved && Object.values(saved.w).some(e => e.programs && e.programs.PLC));
  const s2 = createSession({ levels, deriveFull, initialLevel: 'c30-ladder', storage });
  s2.start();
  assert.deepEqual(s2.snapshot().programs.PLC, L30.solutionPrograms.PLC);
  s2.skipLesson();
  s2.clear();
  assert.deepEqual(s2.snapshot().programs, {});
});

test('c30: un programma salvato manomesso viene ripulito', () => {
  const saved = { v: 1, w: { 'c30-ladder|quadro': { wires: [], states: {}, programs: { PLC: [{ if: 'I1', do: [{ op: 'coil', a: 'Q0' }, { op: 'hack' }] }, { zzz: 1 }], OTHER: [] } } }, u: {} };
  const s = createSession({ levels, deriveFull, initialLevel: 'c30-ladder', storage: { saveWork() {}, loadWork: () => saved } });
  s.start();
  const p = s.snapshot().programs;
  assert.deepEqual(Object.keys(p), ['PLC']);
  assert.deepEqual(p.PLC[0], { if: 'I1', do: [{ op: 'coil', a: 'Q0' }] });
});

test('c30: sfida guasto con il programma sbagliato (NC su I0), poi si ripara e si torna al programma scritto', () => {
  const s = openC30();
  s.setProgram('PLC', L30.solutionPrograms.PLC);
  assert.equal(s.check().pass, true);
  s.startFault();
  assert.equal(s.snapshot().unit.phase, 'fault');
  assert.deepEqual(s.snapshot().programs.PLC, L30.unit.fault.programs.PLC);
  assert.equal(s.check().pass, false);
  s.answerDiagnosis('a');
  s.setProgram('PLC', L30.solutionPrograms.PLC);
  assert.equal(s.check().pass, true);
  assert.equal(s.snapshot().unit.faultSolved, true);
});

/* ---------- c31: il temporizzatore nel PLC ---------- */
const L31 = levels.find(l => l.id === 'c31-tempo');
const W31 = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
const lvProg = (L, prog) => ({ ...L, comps: L.comps.map(c => (c.type === 'plc' ? { ...c, program: prog } : c)) });

test('c31: la soluzione dà tre stelle e passa da stella a triangolo dopo 6 secondi', () => {
  const r = evaluateV2(L31, W31(L31.solution), { programs: L31.solutionPrograms });
  assert.equal(r.pass, true, JSON.stringify(r));
  const s = createSim(lvProg(L31, L31.solutionPrograms.PLC), W31(L31.solution));
  press(s, 'SB1');
  assert.equal(observe(s).modes.M, 'star');
  advance(s, 5);
  assert.equal(observe(s).modes.M, 'star');
  advance(s, 1);
  assert.equal(observe(s).modes.M, 'delta');
  assert.deepEqual(observe(s).tripped, []);
});

test('c31: il programma di partenza ha il solo gradino di marcia e il motore resta fermo ma non c\'e\' corto', () => {
  const s = createSim(lvProg(L31, L31.comps.find(c => c.id === 'PLC').edit.start), W31(L31.solution));
  press(s, 'SB1');
  assert.equal(observe(s).motors.M, 'off');
  assert.equal(evaluateV2(L31, W31(L31.solution), { programs: { PLC: L31.comps.find(c => c.id === 'PLC').edit.start } }).pass, false);
});

test('c31: senza T1 nel gradino della stella le uscite Q1 e Q2 si accendono insieme e scatta il salvamotore', () => {
  const bad = L31.unit.fault.programs.PLC;
  const s = createSim(lvProg(L31, bad), W31(L31.solution));
  press(s, 'SB1');
  advance(s, 7);
  assert.ok(observe(s).tripped.includes('QM') || observe(s).faults.length > 0);
  assert.equal(evaluateV2(L31, W31(L31.solution), { programs: { PLC: bad } }).pass, false);
});

test('c31: la regola outputsNeverTogether scopre le due uscite accese insieme anche quando il corto non si vede', () => {
  // programma che accende Q1 e Q2 insieme ma con la stella che non fa corto da sola: basta la lettura delle uscite
  const bad = [
    { if: ['and', ['or', 'I1', 'Q0'], 'I0'], do: [{ op: 'coil', a: 'Q0' }] },
    { if: 'Q0', do: [{ op: 'ton', id: 'T1', pt: 6 }] },
    { if: ['and', 'Q0', ['not', 'T1']], do: [{ op: 'coil', a: 'Q1' }] },
    { if: 'Q0', do: [{ op: 'coil', a: 'Q2' }] },
  ];
  const s = createSim(lvProg(L31, bad), W31(L31.solution));
  press(s, 'SB1');
  assert.ok(s.qHistory.some(on => on.includes('PLC.Q1') && on.includes('PLC.Q2')));
});

test('c31: il temporizzatore si azzera se si preme Arresto durante il conteggio', () => {
  const s = createSim(lvProg(L31, L31.solutionPrograms.PLC), W31(L31.solution));
  press(s, 'SB1'); advance(s, 4);
  press(s, 'SB0');
  press(s, 'SB1'); advance(s, 4);
  assert.equal(observe(s).modes.M, 'star');
});
