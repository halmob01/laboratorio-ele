// La prova della casa intelligente (Modulo 5, c55 "Una sera d'inverno"). Prima il motore: il modello `casa` (zone + energia con
// una pompa di calore sola) e gli eventi della serata (`scenario.events`). Specifica: docs/PROGETTO-CASA.md e docs/SPEC-PROCESSI.md 8e.

import test from 'node:test';
import assert from 'node:assert/strict';
import { newProcess, stepProcess, MODELS } from '../src/engine/v2/process.js';
import { createSim, advance, act, observe, scenarioReport } from '../src/engine/v2/index.js';

const run = (model, init, act, seconds, params = {}) => {
  const proc = { model, init, params };
  return stepProcess(proc, newProcess(proc), act, seconds).state;
};
const close = (a, b, msg) => assert.ok(Math.abs(a - b) < 1e-9, `${msg}: ${a} invece di ${b}`);

/* ---------- modello casa ---------- */

test('casa: con la pompa spenta da\' gli stessi numeri di energia e zone da soli', () => {
  const init = { hour: 16.5, T1: 17, T2: 17, soc: 60 };
  const params = { n: 2, ovenKw: 3.5, limit: 6 };
  const acts = { pv: 1, house: 1, batt: 1, ev: 1, v1: 1, v2: 0, w1: 1 };
  const c = run('casa', init, { ...acts, pump: 0 }, 300, params);
  const e = run('energia', init, { ...acts, hp: 0 }, 300, params);
  const z = run('zone', init, { ...acts, pump: 0 }, 300, params);
  Object.keys(MODELS.energia.init).forEach(k => close(c[k], e[k], 'energia ' + k));
  Object.keys(MODELS.zone.init).forEach(k => close(c[k], z[k], 'zone ' + k));
  assert.equal(c.hpRun, 0);
});

test('casa: con la pompa accesa il carico del contatore sale di hpKw e le stanze si scaldano come in zone', () => {
  const init = { hour: 17, T1: 16, T2: 16, soc: 0 };
  const acts = { pv: 0, house: 1, v1: 1, v2: 1 };
  const off = run('casa', init, { ...acts, pump: 0 }, 60);
  const on = run('casa', init, { ...acts, pump: 1 }, 60);
  close(on.load - off.load, MODELS.casa.params.hpKw, 'carico in piu\'');
  assert.equal(on.hpRun, 1);
  const z = run('zone', init, { ...acts, pump: 1 }, 60, { pumpKw: MODELS.casa.params.hpKw });
  close(on.T1, z.T1, 'T1'); close(on.eHeat, z.eHeat, 'energia della pompa');
  // la pompa guasta (a vuoto) non entra nei carichi
  const dry = run('casa', init, { house: 1, pump: 1 }, 90);
  assert.equal(dry.broken, 1);
  const after = run('casa', dry, { house: 1, pump: 1, v1: 1 }, 30);
  assert.equal(after.hpRun, 0);
  close(after.load, run('casa', dry, { house: 1, pump: 0, v1: 1 }, 30).load, 'guasta: niente carico');
});

test('casa: quando il contatore stacca la pompa si ferma, le stanze si raffreddano e il contatore resta staccato', () => {
  const init = { hour: 19.6, T1: 21, T2: 21, soc: 0 };
  // forno + auto + pompa sopra i 6 kW: dopo 20 s il contatore stacca
  const p = { ovenKw: 3.5, limit: 6, pvKw: 0 };
  const s = run('casa', init, { house: 1, ev: 1, pump: 1, v1: 1, v2: 1 }, 25, p);
  assert.equal(s.blackout, 1);
  const later = run('casa', s, { house: 1, ev: 1, pump: 1, v1: 1, v2: 1 }, 120, p);
  assert.equal(later.hpRun, 0, 'al buio la pompa non gira');
  assert.equal(later.load, 0);
  assert.ok(later.T1 < s.T1 - 1, `le stanze si raffreddano: ${s.T1} -> ${later.T1}`);
  assert.equal(later.blackout, 1, 'niente riarmo');
  const v = MODELS.casa.expose(later, { ...MODELS.casa.params, ...p });
  assert.equal(v.blackout, true);
  assert.equal(v.hpRun, 0);
  assert.equal(typeof v.broken, 'boolean');
});

/* ---------- eventi della serata ---------- */

const T = (...ids) => Object.fromEntries(ids.map(i => [i, { l: i }]));
const C = (id, type, terms, extra = {}) => ({ id, type, short: id, title: id, terms: T(...terms), ...extra });
const W = ws => ws.map(([a, b, c], k) => ({ id: k + 1, a, b, c: c || 'marrone' }));

// Una lampada dietro un interruttore: l'evento lo chiude a un'ora fissa, una volta sola.
const EV_LEVEL = {
  id: 'prova-eventi', engine: 2, quadroOnly: true,
  comps: [
    C('Q', 'quadro', ['F', 'N', 'PE']),
    C('QG', 'mt', ['1', '2', 'N1', 'N2']),
    C('S', 'sw', ['a', 'b']),
    C('L', 'lamp', ['A', 'B']),
  ],
  scenario: {
    duration: 60, startWhen: { coil: 'QG' }, faults: [],
    events: [{ id: 'luce', at: 10, do: 'toggle S', label: 'qualcuno accende la luce' }, { id: 'tardi', at: 70, do: 'toggle S', label: 'dopo la fine' }],
  },
};
const EV_WIRES = W([['Q.F', 'QG.1'], ['QG.2', 'S.a'], ['S.b', 'L.A'], ['L.B', 'QG.N2', 'blu'], ['Q.N', 'QG.N1', 'blu']]);

test('eventi: scattano una volta all\'ora giusta dal via, non prima del via e non dopo la fine', () => {
  const sim = createSim(EV_LEVEL, EV_WIRES);
  if (sim.parts.QG.on) act(sim, 'toggle', 'QG');
  advance(sim, 30);
  assert.equal(scenarioReport(sim).events[0].firedAt, null, 'prima del generale il periodo non e\' cominciato');
  act(sim, 'toggle', 'QG');
  advance(sim, 9);
  assert.equal(observe(sim).parts.S.on, false);
  advance(sim, 2);
  const r = scenarioReport(sim);
  assert.ok(r.events[0].firedAt >= 10 && r.events[0].firedAt < 10.6, 'scattato a ' + r.events[0].firedAt);
  assert.equal(observe(sim).parts.S.on, true);
  assert.equal(observe(sim).loads.L, 'on');
  // l'allievo spegne: l'evento non rifa' l'azione
  act(sim, 'toggle', 'S');
  advance(sim, 30);
  assert.equal(observe(sim).parts.S.on, false);
  advance(sim, 40);
  const end = scenarioReport(sim);
  assert.equal(end.done, true);
  assert.equal(end.events[1].firedAt, null, 'oltre la durata l\'evento non scatta');
  assert.deepEqual(end.events.map(e => [e.id, e.label, e.at]), [['luce', 'qualcuno accende la luce', 10], ['tardi', 'dopo la fine', 70]]);
  assert.deepEqual(end.faults, []);
});

/* ---------- livello c55: una sera d'inverno ---------- */

import { LEVELS_V2, PROG_55, PROG_55_FAULT, W55 } from '../src/content/levels-v2.js';
import { levels } from '../src/content/index.js';
import { evaluateV2, traceValue } from '../src/engine/v2/index.js';
import { playShift, wiresOf } from './turno.js';

const L55 = LEVELS_V2.find(l => l.id === 'c55-sera-inverno');
const withProg = prog => ({ ...L55, solutionPrograms: { PLC: prog } });
// la serata: si chiude il generale al primo secondo; l'allagamento si ripara `react` secondi dopo (null = mai)
const evening = (prog, react = 10) => playShift(withProg(prog), { start: ['toggle QG'], react: () => react });
const hourOf = sim => observe(sim).process.hour;

test('c55: e\' la prova del Modulo 5, con il modello casa, la serata dalle 16:30 per 6,5 ore e il generale come via', () => {
  assert.deepEqual(L55.prova, { scene: 'casa' });
  assert.equal(L55.process.model, 'casa');
  assert.equal(L55.process.init.hour, 16.5);
  assert.equal(L55.scenario.duration * 24 / (L55.process.params.dayLen || MODELS.casa.params.dayLen), 6.5);
  assert.deepEqual(L55.scenario.startWhen, { coil: 'QG' });
  assert.deepEqual(L55.scenario.events.map(e => e.id), ['auto', 'apre', 'chiude']);
  // il programma sbagliato e la soluzione differiscono solo per la soglia di distacco
  const diff = PROG_55.map((r, i) => JSON.stringify(r) !== JSON.stringify(PROG_55_FAULT[i]) ? i : -1).filter(i => i >= 0);
  assert.equal(diff.length, 2);
  diff.forEach(i => assert.match(JSON.stringify(PROG_55_FAULT[i]), /6500/));
  const lv = levels.find(l => l.id === L55.id);
  assert.ok(lv && lv.unit && lv.unit.fault, 'unita\' con il guasto');
  assert.deepEqual(lv.unit.fault.programs.PLC, PROG_55_FAULT);
  assert.deepEqual(lv.unit.fault.wires, W55);
  assert.equal(lv.unit.fault.diagnosis.options.find(o => o.id === lv.unit.fault.diagnosis.correct).text.includes('6500'), true);
});

test('c55: con il programma del collega il PLC non vede mai la soglia e il contatore stacca la casa verso le 19:30', () => {
  const sim = evening(PROG_55_FAULT);
  const words = sim.trace.map(r => r.grid);
  assert.ok(Math.max(...words) > 6.5, 'la potenza vera supera il fondo scala');
  // il PLC legge al massimo il fondo scala
  const seen = [];
  const s2 = createSim({ ...withProg(PROG_55_FAULT), comps: L55.comps.map(c => (c.type === 'plc' ? { ...c, program: PROG_55_FAULT } : c)) }, wiresOf(L55));
  act(s2, 'toggle', 'QG');
  let tripHour = null;
  for (let t = 0; t < 300 && tripHour === null; t++) {
    advance(s2, 1);
    const o = observe(s2);
    if (o.process.blackout) tripHour = o.process.hour;
    else seen.push(o.plc.PLC.words.MW0);
  }
  assert.ok(Math.max(...seen) < 6500 && Math.max(...seen) > 6300, 'MW0 si ferma al fondo scala: ' + Math.max(...seen));
  assert.ok(tripHour > 19.5 && tripHour < 20.1, 'il contatore stacca alle ' + tripHour);
  // al buio tutto l'impianto e' senza tensione: PLC spento, nessun carico, la pompa ferma
  const o = observe(sim);
  assert.equal(o.process.blackout, true);
  assert.equal(o.supply, false);
  assert.equal(o.plc.PLC.powered, false);
  assert.equal(o.process.hpRun, 0);
  assert.ok(o.process.T1 < 19, 'le stanze si raffreddano');
  const r = evaluateV2(withProg(PROG_55_FAULT), wiresOf(L55), { programs: { PLC: PROG_55_FAULT }, liveSim: sim });
  assert.equal(r.pass, false);
  assert.equal(r.work.ok, false);
});

test('c55: con la soglia sotto il limite la serata arriva alle 23 con tutte le prove verdi', () => {
  const sim = evening(PROG_55);
  const rep = scenarioReport(sim), p = observe(sim).process;
  assert.equal(rep.done, true);
  assert.ok(hourOf(sim) >= 23, 'fine serata alle ' + hourOf(sim));
  assert.equal(p.blackout, false);
  assert.equal(p.broken, false);
  assert.ok(p.eEv >= 2, 'auto caricata: ' + p.eEv);
  assert.ok(Math.max(...sim.trace.map(r => r.grid)) > 5.8, 'la potenza ha superato la soglia: un carico e\' stato staccato davvero');
  assert.deepEqual(rep.events.map(e => e.firedAt !== null), [true, true, true]);
  assert.equal(rep.faults[0].late, false);
  // la camera resta nel comfort dopo il riscaldamento iniziale (il soggiorno perde qualche grado con la finestra aperta)
  const t0 = sim.trace.find(r => r.T2 >= 20).t;
  assert.ok(sim.trace.filter(r => r.t > t0).every(r => r.T2 > 19.4 && r.T2 < 22.6), 'camera fuori dal comfort');
  const r = evaluateV2(withProg(PROG_55), wiresOf(L55), { programs: { PLC: PROG_55 }, liveSim: sim });
  assert.equal(r.work.ok, true, JSON.stringify(r.work.items));
  assert.equal(r.color.ok, true, JSON.stringify(r.color.items));
  assert.equal(r.safe.ok, true, JSON.stringify(r.safe.items));
  assert.equal(r.stars, 3);
});

test('c55: l\'allagamento delle 21:30 riparato in tempo va bene; in ritardo o mai no', () => {
  const ok = scenarioReport(evening(PROG_55, 10)).faults[0];
  assert.equal(ok.firedAt, 300);
  assert.ok(ok.fixedAt > 300 && !ok.late && !ok.open);
  const late = evening(PROG_55, 40);
  const fl = scenarioReport(late).faults[0];
  assert.equal(fl.late, true);
  const rl = evaluateV2(withProg(PROG_55), wiresOf(L55), { programs: { PLC: PROG_55 }, liveSim: late });
  assert.equal(rl.work.ok, false);
  assert.equal(rl.work.items[0].code, 'work.scenarioLate');
  const never = scenarioReport(evening(PROG_55, null)).faults[0];
  assert.equal(never.open, true);
});

test('c55: tacitare con la sonda ancora bagnata non ripara: la sirena riparte', () => {
  const sim = createSim({ ...L55, comps: L55.comps.map(c => (c.type === 'plc' ? { ...c, program: PROG_55 } : c)) }, wiresOf(L55));
  act(sim, 'toggle', 'QG');
  advance(sim, 302);
  assert.equal(observe(sim).loads.B, 'on');
  act(sim, 'press', 'TA'); advance(sim, 1); act(sim, 'release', 'TA'); advance(sim, 1);
  assert.equal(observe(sim).loads.B, 'on', 'sonda bagnata: la sirena riparte');
  assert.equal(scenarioReport(sim).faults[0].fixedAt, null);
  act(sim, 'toggle', 'S2'); advance(sim, 1);
  assert.equal(observe(sim).loads.B, 'on', 'asciugata, la sirena resta finche\' non si tacita');
  act(sim, 'press', 'TA'); act(sim, 'release', 'TA'); advance(sim, 1);
  assert.equal(observe(sim).loads.B, 'off');
  assert.ok(scenarioReport(sim).faults[0].fixedAt !== null);
});

test('c55: la fabbrica non cambia: il rapporto di c51 ha gli eventi vuoti', () => {
  const c51 = LEVELS_V2.find(l => l.id === 'c51-turno-notte');
  const sim = createSim(c51, wiresOf(c51));
  assert.deepEqual(scenarioReport(sim).events, []);
});

test('casa: minuti fuori dal comfort contati solo dopo che la stanza ci e\' arrivata la prima volta', () => {
  const cold = run('casa', { T1: 16, T2: 16 }, { house: 1 }, 120);
  assert.equal(cold.out1, 0, 'mai arrivata a 19,5: il riscaldamento iniziale non conta');
  const warm = run('casa', { T1: 21, T2: 21 }, { house: 1 }, 120, { pvKw: 0, loss: 0.15 });
  assert.equal(warm.warm1, 1);
  assert.ok(warm.out1 > 60 && warm.out1 < 120, 'raffreddandosi esce dal comfort: ' + warm.out1);
});

test('c55: prima del generale la serata non comincia: l\'ora resta alle 16:30', () => {
  const sim = createSim({ ...L55, comps: L55.comps.map(c => (c.type === 'plc' ? { ...c, program: PROG_55 } : c)) }, wiresOf(L55));
  advance(sim, 120);
  assert.equal(observe(sim).process.hour, 16.5);
  act(sim, 'toggle', 'QG');
  advance(sim, 60);
  assert.ok(Math.abs(observe(sim).process.hour - 17.5) < 0.05, 'un\'ora dopo il generale: ' + observe(sim).process.hour);
});
