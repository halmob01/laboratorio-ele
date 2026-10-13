// Il motore separato deve comportarsi esattamente come quello originale (test/fixtures/legacy-engine.cjs,
// estratto alla lettera da index.html prima del rifacimento): stessi livelli, stesso circuito,
// stesse frasi di verifica su molti cablaggi, giusti e sbagliati.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { analyse, evaluate } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';
import { describeEvaluation } from '../src/content/it.js';

const legacy = createRequire(import.meta.url)('./fixtures/legacy-engine.cjs');

// Generatore pseudo-casuale con seme fisso: i test sono ripetibili.
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COLORS = ['marrone', 'nero', 'grigio', 'blu', 'gv'];
const MODES = ['quadro', 'contatore'];

// Livello nuovo e livello originale per (indice, modalita').
function pair(i, mode) {
  return mode === 'contatore'
    ? { next: deriveFull(levels[i]), old: legacy.buildFull(legacy.LEVELS[i]) }
    : { next: levels[i], old: legacy.LEVELS[i] };
}

const termIds = lv => lv.comps.flatMap(c => Object.keys(c.terms).map(t => c.id + '.' + t));
const toWires = list => list.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));

// Insieme di cablaggi da provare per un livello.
function wiringCases(lv, seed) {
  const R = rng(seed);
  const sol = lv.solution;
  const terms = termIds(lv);
  const cases = [[], sol];
  sol.forEach((w, k) => {
    cases.push(sol.filter((_, j) => j !== k));
    COLORS.forEach(col => cases.push(sol.map((x, j) => (j === k ? [x[0], x[1], col] : x))));
    terms.forEach(t => {
      if (t !== w[0]) cases.push(sol.map((x, j) => (j === k ? [x[0], t, x[2]] : x)));
    });
  });
  for (let n = 0; n < 400; n++) {
    const count = 1 + Math.floor(R() * 8);
    const ws = [];
    for (let j = 0; j < count; j++) {
      const a = terms[Math.floor(R() * terms.length)];
      let b = terms[Math.floor(R() * terms.length)];
      if (a === b) b = terms[(terms.indexOf(a) + 1) % terms.length];
      ws.push([a, b, COLORS[Math.floor(R() * COLORS.length)]]);
    }
    cases.push(ws);
    cases.push(sol.concat([ws[0]]));
  }
  return cases;
}

// Rimuove la geometria dal componente originale per confrontarlo col modello nuovo.
function stripOld(c) {
  const terms = {};
  Object.keys(c.terms).forEach(k => {
    const t = { l: c.terms[k].l };
    if (c.terms[k].n !== undefined) t.n = c.terms[k].n;
    terms[k] = t;
  });
  const o = { id: c.id, type: c.type, short: c.short, title: c.title, terms };
  if (c.full) o.full = true;
  if (c.plate) o.where = c.plate.l;
  return o;
}

function strip(lv) {
  const o = { ...lv, comps: lv.comps.map(stripOld) };
  return JSON.parse(JSON.stringify(o));
}

for (const mode of MODES) {
  test('i dati dei livelli coincidono con gli originali (' + mode + ')', () => {
    levels.forEach((_, i) => {
      const { next, old } = pair(i, mode);
      assert.deepEqual(JSON.parse(JSON.stringify(next)), strip(old), 'livello ' + (i + 1));
    });
  });

  test('analisi del circuito identica per ogni stato dei comandi (' + mode + ')', () => {
    levels.forEach((_, i) => {
      const { next, old } = pair(i, mode);
      const ctl = next.controls;
      wiringCases(next, 100 + i).forEach(c => {
        const wires = toWires(c);
        for (let m = 0; m < 1 << ctl.length; m++) {
          const st = {};
          ctl.forEach((id, j) => (st[id] = (m >> j) & 1));
          const a = analyse(next, wires, st);
          const b = legacy.analyse(old, wires, st);
          assert.equal(a.lit, b.lit);
          assert.equal(a.fault, b.fault);
        }
      });
    });
  });

  test('verifica: stesse stelle, stesso esito e stesse frasi (' + mode + ')', () => {
    levels.forEach((_, i) => {
      const { next, old } = pair(i, mode);
      let n = 0;
      wiringCases(next, 200 + i).forEach(c => {
        const wires = toWires(c);
        const a = describeEvaluation(evaluate(next, wires), next);
        const b = legacy.evaluate(old, wires);
        assert.equal(a.stars, b.stars, JSON.stringify(c));
        assert.equal(a.pass, b.pass);
        for (const s of ['work', 'color', 'safe']) {
          assert.equal(a[s].ok, b[s].ok, s + ' ' + JSON.stringify(c));
          assert.deepEqual(a[s].msgs, b[s].msgs, s + ' ' + JSON.stringify(c));
          const na = !b[s].ok && b[s].msgs[0] && b[s].msgs[0].startsWith('Si controlla');
          assert.equal(a[s].status, b[s].ok ? 'ok' : na ? 'na' : 'ko');
        }
        n++;
      });
      assert.ok(n > 500);
    });
  });

  test('la soluzione di ogni livello prende tre stelle (' + mode + ')', () => {
    levels.forEach((_, i) => {
      const lv = pair(i, mode).next;
      const r = evaluate(lv, toWires(lv.solution));
      assert.equal(r.stars, 3);
      assert.equal(r.pass, true);
    });
  });
}
