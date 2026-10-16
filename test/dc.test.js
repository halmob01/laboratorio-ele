// Corrente continua (dc.js): analisi nodale modificata con diodi a soglia.

import test from 'node:test';
import assert from 'node:assert/strict';
import { solveDC } from '../src/engine/v2/dc.js';

const near = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, a + ' invece di ' + b);

test('una pila e una lampada: legge di Ohm', () => {
  const r = solveDC({ ground: 'B.-', elements: [{ id: 'B', type: 'V', a: 'B.+', b: 'B.-', v: 12 }, { id: 'L', type: 'R', a: 'B.+', b: 'B.-', r: 24 }] });
  assert.equal(r.ok, true);
  near(r.v['B.+'], 12);
  near(r.i.L, 0.5);
  near(r.i.B, 0.5);
});

test('resistenza interna: la tensione ai morsetti cala con il carico', () => {
  const r = solveDC({ ground: 'n', elements: [{ id: 'B', type: 'V', a: 'p', b: 'n', v: 12, r: 1 }, { id: 'L', type: 'R', a: 'p', b: 'n', r: 5 }] });
  near(r.i.L, 2);
  near(r.v.p, 10);
});

test('serie e parallelo di resistori', () => {
  const r = solveDC({ ground: '0', elements: [
    { id: 'B', type: 'V', a: '1', b: '0', v: 10 },
    { id: 'R1', type: 'R', a: '1', b: '2', r: 10 },
    { id: 'R2', type: 'R', a: '2', b: '0', r: 20 },
    { id: 'R3', type: 'R', a: '2', b: '0', r: 20 },
  ] });
  near(r.v['2'], 5);
  near(r.i.R1, 0.5);
  near(r.i.R2, 0.25);
});

test('due pile in serie sommano; invertite si sottraggono', () => {
  const serie = solveDC({ ground: 'a', elements: [
    { id: 'B1', type: 'V', a: 'b', b: 'a', v: 1.5 }, { id: 'B2', type: 'V', a: 'c', b: 'b', v: 1.5 }, { id: 'L', type: 'R', a: 'c', b: 'a', r: 3 },
  ] });
  near(serie.v.c, 3); near(serie.i.L, 1);
  const inv = solveDC({ ground: 'a', elements: [
    { id: 'B1', type: 'V', a: 'b', b: 'a', v: 1.5 }, { id: 'B2', type: 'V', a: 'b', b: 'c', v: 1.5 }, { id: 'L', type: 'R', a: 'c', b: 'a', r: 3 },
  ] });
  near(inv.v.c, 0); near(inv.i.L, 0);
});

test('pannelli in parallelo con resistenza interna: la corrente si divide', () => {
  const r = solveDC({ ground: '-', elements: [
    { id: 'P1', type: 'V', a: '+', b: '-', v: 20, r: 2 }, { id: 'P2', type: 'V', a: '+', b: '-', v: 20, r: 2 }, { id: 'L', type: 'R', a: '+', b: '-', r: 9 },
  ] });
  near(r.i.L, 2); near(r.i.P1, 1); near(r.i.P2, 1); near(r.v['+'], 18);
});

test('interruttore aperto: nessuna corrente; chiuso: la lampada si accende', () => {
  const el = on => [{ id: 'B', type: 'V', a: 'p', b: 'n', v: 12 }, { id: 'S', type: 'S', a: 'p', b: 'x', on }, { id: 'L', type: 'R', a: 'x', b: 'n', r: 12 }];
  near(solveDC({ ground: 'n', elements: el(false) }).i.L, 0);
  near(solveDC({ ground: 'n', elements: el(true) }).i.L, 1);
});

test('diodo: conduce nel verso giusto con la sua caduta, blocca al contrario', () => {
  const el = (a, b) => [{ id: 'B', type: 'V', a: 'p', b: 'n', v: 5 }, { id: 'D', type: 'D', a, b }, { id: 'R', type: 'R', a: 'k', b: 'n', r: 100 }];
  const fwd = solveDC({ ground: 'n', elements: el('p', 'k') });
  assert.equal(fwd.on.D, true);
  near(fwd.i.R, (5 - 0.7) / 100.05, 1e-6);
  near(fwd.i.D, fwd.i.R, 1e-6);
  const rev = solveDC({ ground: 'n', elements: el('k', 'p') });
  assert.equal(rev.on.D, false);
  near(rev.i.R, 0);
  near(rev.i.D, 0);
});

test('diodo di blocco: la batteria non si scarica sul pannello al buio', () => {
  // pannello a 0 V (notte) con resistenza interna, diodo verso la batteria a 12 V
  const r = solveDC({ ground: '0', elements: [
    { id: 'PV', type: 'V', a: 'pv', b: '0', v: 0, r: 1 }, { id: 'D', type: 'D', a: 'pv', b: 'bat' }, { id: 'BAT', type: 'V', a: 'bat', b: '0', v: 12, r: 0.1 },
  ] });
  assert.equal(r.on.D, false);
  near(r.i.BAT, 0);
  // di giorno (18 V) carica: la corrente entra nel + della batteria
  const d = solveDC({ ground: '0', elements: [
    { id: 'PV', type: 'V', a: 'pv', b: '0', v: 18, r: 1 }, { id: 'D', type: 'D', a: 'pv', b: 'bat' }, { id: 'BAT', type: 'V', a: 'bat', b: '0', v: 12, r: 0.1 },
  ] });
  assert.equal(d.on.D, true);
  assert.ok(d.i.BAT < -4, String(d.i.BAT));
});

test('ponte di diodi: raddrizza qualunque sia la polarità', () => {
  const bridge = (p, n) => solveDC({ ground: 'm', elements: [
    { id: 'B', type: 'V', a: p, b: n, v: 10 },
    { id: 'D1', type: 'D', a: 'x', b: 'out' }, { id: 'D2', type: 'D', a: 'y', b: 'out' },
    { id: 'D3', type: 'D', a: 'm', b: 'x' }, { id: 'D4', type: 'D', a: 'm', b: 'y' },
    { id: 'L', type: 'R', a: 'out', b: 'm', r: 100 },
  ] });
  const a = bridge('x', 'y'), b = bridge('y', 'x');
  assert.equal(a.ok && b.ok, true);
  near(a.i.L, b.i.L, 1e-9);
  assert.ok(a.i.L > 0.08);
});

test('errori: generatore in cortocircuito, generatori ideali in parallelo con tensioni diverse', () => {
  assert.equal(solveDC({ ground: 'n', elements: [{ id: 'B', type: 'V', a: 'p', b: 'n', v: 12 }, { id: 'W', type: 'W', a: 'p', b: 'n' }] }).error, 'shortSource');
  const r = solveDC({ ground: 'n', elements: [{ id: 'B1', type: 'V', a: 'p', b: 'n', v: 12 }, { id: 'B2', type: 'V', a: 'p', b: 'n', v: 6 }] });
  assert.deepEqual([r.ok, r.error], [false, 'sourceLoop']);
  // con la resistenza interna si risolve: corre una corrente di ricircolo
  const ok = solveDC({ ground: 'n', elements: [{ id: 'B1', type: 'V', a: 'p', b: 'n', v: 12, r: 1 }, { id: 'B2', type: 'V', a: 'p', b: 'n', v: 6, r: 1 }] });
  near(ok.i.B1, 3); near(ok.i.B2, -3);
});

test('parti isolate: restano a 0 V senza rompere il calcolo', () => {
  const r = solveDC({ ground: 'n', elements: [{ id: 'B', type: 'V', a: 'p', b: 'n', v: 12 }, { id: 'L', type: 'R', a: 'p', b: 'n', r: 12 }, { id: 'X', type: 'R', a: 'q', b: 'w', r: 5 }] });
  assert.equal(r.ok, true);
  near(r.i.X, 0);
  near(r.i.L, 1);
});
