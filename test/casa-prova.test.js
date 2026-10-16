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
