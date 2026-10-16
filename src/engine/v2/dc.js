// Corrente continua: analisi nodale modificata (MNA) per circuiti piccoli. Funzione pura. Specifica: docs/SPEC-PROCESSI.md, sezione 7.
// Separato dalla rete in alternata (sim.js): un livello lo usa solo se dichiara `dc: true`.
//
//   solveDC({ elements, ground }) -> { ok, v: { nodo: volt }, i: { elemento: ampere }, on: { diodo: bool }, error? }
//
// Elementi (a, b sono nomi di nodo, per esempio morsetti 'B1.+'):
//   { id, type: 'V', a: '+', b: '-', v, r? }   generatore (r resistenza interna; senza, ideale). i = corrente che esce dal +
//   { id, type: 'R', a, b, r }                  resistore (lampada, carico). i = corrente da a verso b
//   { id, type: 'S', a, b, on }                 interruttore: chiuso unisce i due nodi, aperto non c'e'
//   { id, type: 'W', a, b }                     filo (unisce i nodi)
//   { id, type: 'D', a: anodo, b: catodo, vf?, rd? }   diodo a soglia: conduce da a verso b con caduta vf (0,7 V) e resistenza rd
//
// Errori: 'shortSource' (generatore ideale con i morsetti uniti da un filo), 'sourceLoop' (generatori ideali in parallelo o in
// una maglia senza resistenze: il sistema non ha soluzione o ne ha infinite), 'diodes' (i diodi non trovano uno stato stabile).

import { makeUF } from '../circuit.js';

const GMIN = 1e-9;          // conduttanza verso massa di ogni nodo: i pezzi isolati restano a 0 V invece di rendere il sistema singolare
const PIVOT = 1e-12;
const MAX_DIODE_ITER = 20;

export function solveDC({ elements = [], ground }) {
  const uf = makeUF();
  const all = new Set();
  elements.forEach(e => { all.add(e.a); all.add(e.b); });
  if (ground) all.add(ground);
  elements.forEach(e => { if (e.type === 'W' || (e.type === 'S' && e.on)) uf.u(e.a, e.b); });
  const g = ground ? uf.f(ground) : null;

  for (const e of elements) if (e.type === 'V' && !(e.r > 0) && uf.f(e.a) === uf.f(e.b)) return fail('shortSource', e.id);

  // stato dei diodi: si parte con tutti in conduzione e si corregge
  const diodes = elements.filter(e => e.type === 'D');
  const on = Object.fromEntries(diodes.map(d => [d.id, true]));
  let res = null;
  for (let it = 0; it < MAX_DIODE_ITER; it++) {
    res = solveLinear(elements, uf, g, on);
    if (!res.ok) return res;
    let changed = false;
    diodes.forEach(d => {
      const vf = d.vf ?? 0.7;
      if (on[d.id] && res.i[d.id] < -1e-9) { on[d.id] = false; changed = true; }
      else if (!on[d.id] && res.vNode(d.a) - res.vNode(d.b) > vf + 1e-9) { on[d.id] = true; changed = true; }
    });
    if (!changed) {
      const v = {};
      all.forEach(n => (v[n] = round(res.vNode(n))));
      const i = {};
      Object.entries(res.i).forEach(([k, x]) => (i[k] = round(x)));
      return { ok: true, v, i, on: { ...on } };
    }
  }
  return fail('diodes');
}

const round = x => Math.round(x * 1e9) / 1e9 + 0;
const fail = (error, comp) => ({ ok: false, error, ...(comp ? { comp } : {}), v: {}, i: {}, on: {} });

function solveLinear(elements, uf, g, dOn) {
  // nodi (radici), massa esclusa; nodi interni per resistenze interne e diodi
  const idx = new Map();
  const node = n => {
    const r = typeof n === 'string' && n.startsWith('#') ? n : uf.f(n);
    if (r === g) return -1;
    if (!idx.has(r)) idx.set(r, idx.size);
    return idx.get(r);
  };
  // rami: conduttanze e generatori ideali (con la loro corrente come incognita)
  const conds = [], srcs = [];
  const outI = {};
  elements.forEach(e => {
    if (e.type === 'R') {
      if (!(e.r > 0)) { conds.push({ a: node(e.a), b: node(e.b), g: 1e9, id: e.id }); return; }
      conds.push({ a: node(e.a), b: node(e.b), g: 1 / e.r, id: e.id });
    } else if (e.type === 'V') {
      if (e.r > 0) {
        const k = node('#' + e.id);
        srcs.push({ p: k, n: node(e.b), v: e.v, id: e.id });
        conds.push({ a: k, b: node(e.a), g: 1 / e.r, id: '#' + e.id });
      } else srcs.push({ p: node(e.a), n: node(e.b), v: e.v, id: e.id });
    } else if (e.type === 'D' && dOn[e.id]) {
      const k = node('#' + e.id);
      srcs.push({ p: node(e.a), n: k, v: e.vf ?? 0.7, id: e.id, diode: true });
      conds.push({ a: k, b: node(e.b), g: 1 / (e.rd ?? 0.05), id: '#d' + e.id });
    } else if (e.type === 'D') outI[e.id] = 0;
  });
  const n = idx.size, m = srcs.length, N = n + m;
  const A = Array.from({ length: N }, () => new Float64Array(N));
  const z = new Float64Array(N);
  for (let k = 0; k < n; k++) A[k][k] += GMIN;
  conds.forEach(({ a, b, g: c }) => {
    if (a >= 0) A[a][a] += c;
    if (b >= 0) A[b][b] += c;
    if (a >= 0 && b >= 0) { A[a][b] -= c; A[b][a] -= c; }
  });
  srcs.forEach((s, k) => {
    const r = n + k;
    // incognita x[r]: corrente che dal nodo p entra nel ramo e lo attraversa verso n
    if (s.p >= 0) { A[s.p][r] += 1; A[r][s.p] += 1; }
    if (s.n >= 0) { A[s.n][r] -= 1; A[r][s.n] -= 1; }
    z[r] = s.v;
  });
  const x = gauss(A, z);
  if (!x) return fail('sourceLoop');
  const vOf = k => (k < 0 ? 0 : x[k]);
  const i = { ...outI };
  conds.forEach(c => { if (!String(c.id).startsWith('#')) i[c.id] = (vOf(c.a) - vOf(c.b)) * c.g; });
  // un generatore fornisce al circuito dal + la corrente -x[r]; in un diodo (p = anodo) la corrente da anodo a catodo e' x[r]
  srcs.forEach((s, k) => { i[s.id] = s.diode ? x[n + k] : -x[n + k]; });
  return { ok: true, i, vNode: name => vOf(node(name)) };
}

// Eliminazione di Gauss con pivot parziale. null se il sistema e' singolare.
function gauss(A, z) {
  const N = z.length;
  const M = A.map((row, k) => { const r = Array.from(row); r.push(z[k]); return r; });
  for (let c = 0; c < N; c++) {
    let p = c;
    for (let r = c + 1; r < N; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    if (Math.abs(M[p][c]) < PIVOT) return null;
    [M[c], M[p]] = [M[p], M[c]];
    for (let r = 0; r < N; r++) {
      if (r === c) continue;
      const f = M[r][c] / M[c][c];
      if (f) for (let k = c; k <= N; k++) M[r][k] -= f * M[c][k];
    }
  }
  return M.map((row, k) => row[N] / row[k]);
}
