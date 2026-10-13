// flowOf: dove passa la corrente. Il risultato si confronta con un calcolo indipendente
// (enumerazione di tutti i sottoinsiemi di archi che formano un percorso semplice) su molti cablaggi.

import test from 'node:test';
import assert from 'node:assert/strict';
import { analyse, contactsOf, flowOf, sourceOf } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';

const lv = id => levels.find(l => l.id === id);

function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const toWires = list => list.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));

// Oracolo: archi che stanno su almeno un percorso semplice fase -> neutro che passa dal carico.
function oracle(level, wires, states) {
  const sr = sourceOf(level);
  const edges = wires.map(w => ({ a: w.a, b: w.b, key: 'w' + w.id }));
  level.comps.forEach(c =>
    contactsOf(c, states[c.id] || 0).forEach(([x, y]) => edges.push({ a: c.id + '.' + x, b: c.id + '.' + y, key: 'c' + c.id + '.' + x + '-' + y }))
  );
  edges.push({ a: level.load[0], b: level.load[1], key: 'load' });
  const used = new Set();
  const n = edges.length;
  for (let m = 1; m < 1 << n; m++) {
    const sel = [];
    for (let i = 0; i < n; i++) if (m & (1 << i)) sel.push(edges[i]);
    if (!sel.some(e => e.key === 'load')) continue;
    const deg = {};
    sel.forEach(e => { deg[e.a] = (deg[e.a] || 0) + 1; deg[e.b] = (deg[e.b] || 0) + 1; });
    if (deg[sr.F] !== 1 || deg[sr.N] !== 1) continue;
    if (Object.keys(deg).some(t => t !== sr.F && t !== sr.N && deg[t] !== 2)) continue;
    // connesso: si percorre da F fino a N e si devono usare tutti gli archi
    let cur = sr.F, left = sel.slice(), steps = 0;
    while (cur !== sr.N && steps++ <= n) {
      const k = left.findIndex(e => e.a === cur || e.b === cur);
      if (k < 0) break;
      const e = left.splice(k, 1)[0];
      cur = e.a === cur ? e.b : e.a;
    }
    if (cur === sr.N && left.length === 0) sel.forEach(e => used.add(e.key));
  }
  return used;
}

function check(level, wires, states) {
  const an = analyse(level, wires, states);
  const f = flowOf(level, wires, states);
  const want = an.fault || !an.lit ? new Set() : oracle(level, wires, states);
  wires.forEach(w => assert.equal(f.wires[w.id].current, want.has('w' + w.id), JSON.stringify({ wires, states, w })));
  const gotContacts = Object.keys(f.contacts).filter(k => f.contacts[k]).map(k => 'c' + k).sort();
  const wantContacts = [...want].filter(k => k.startsWith('c')).sort();
  assert.deepEqual(gotContacts, wantContacts);
  assert.equal(f.current, want.size > 0);
  if (an.lit) assert.deepEqual(f.deadEnds, []);
}

for (const id of ['c01-circuito-chiuso', 'c03-interrotto', 'c05-deviato']) {
  test('flowOf coincide con l\'oracolo su cablaggi casuali (' + id + ')', () => {
    for (const mode of ['quadro', 'contatore']) {
      const base = lv(id);
      const level = mode === 'contatore' ? deriveFull(base) : base;
      const terms = level.comps.flatMap(c => Object.keys(c.terms).map(t => c.id + '.' + t));
      const R = rng(7 + id.length);
      const cases = [level.solution];
      for (let n = 0; n < 120; n++) {
        const count = 1 + Math.floor(R() * 5);
        const ws = [];
        for (let j = 0; j < count; j++) {
          const a = terms[Math.floor(R() * terms.length)];
          let b = terms[Math.floor(R() * terms.length)];
          if (a === b) b = terms[(terms.indexOf(a) + 1) % terms.length];
          ws.push([a, b, 'marrone']);
        }
        cases.push(ws);
        cases.push(level.solution.concat([ws[0]]));
      }
      cases.forEach(c => {
        for (let m = 0; m < 1 << level.controls.length; m++) {
          const st = {};
          level.controls.forEach((cid, i) => (st[cid] = (m >> i) & 1));
          check(level, toWires(c), st);
        }
      });
    }
  });
}

test('c01: filo di sola fase = tensione ferma al morsetto, nessuna corrente', () => {
  const L = lv('c01-circuito-chiuso');
  const f = flowOf(L, toWires([['Q.F', 'L.A', 'marrone']]), {});
  assert.deepEqual(f.deadEnds, ['L.A']);
  assert.equal(f.wires[1].net, 'F');
  assert.equal(f.wires[1].current, false);
  assert.equal(f.current, false);
});

test('c01: due fili giusti = tutti e due percorsi da corrente, nessun punto di arresto', () => {
  const L = lv('c01-circuito-chiuso');
  const f = flowOf(L, toWires(L.solution), {});
  assert.equal(f.wires[1].current, true);
  assert.equal(f.wires[2].current, true);
  assert.deepEqual(f.deadEnds, []);
});

test('c01: guasto con la fase su entrambi i morsetti, due punti di arresto e nessuna corrente', () => {
  const L = lv('c01-circuito-chiuso');
  const f = flowOf(L, toWires([['Q.F', 'L.A', 'marrone'], ['Q.F', 'L.B', 'marrone']]), {});
  assert.deepEqual(f.deadEnds, ['L.A', 'L.B']);
  assert.equal(f.current, false);
});

test('un filo lasciato attaccato a meta\' e\' in tensione ma non percorso (c05 acceso)', () => {
  const L = lv('c05-deviato');
  const sol = L.solution.map(w => (w[0] === 'D1.2' ? ['D1.1', 'D2.2', 'grigio'] : w));
  const f = flowOf(L, toWires(sol), { D1: 0, D2: 0 });
  assert.equal(f.current, true);
  const extra = f.wires[3];
  assert.equal(extra.net, 'F');
  assert.equal(extra.current, false);
  assert.equal(f.wires[2].current, true);
});

test('interruttore aperto: la tensione si ferma all\'interruttore', () => {
  const L = lv('c03-interrotto');
  const f = flowOf(L, toWires(L.solution), { S: 0 });
  assert.equal(f.current, false);
  assert.ok(f.deadEnds.includes('S.a'));
  assert.ok(f.wires[1].net === 'F');
});

test('c03: chiudendo l\'interruttore la corrente passa anche dal contatto interno', () => {
  const L = lv('c03-interrotto');
  const f = flowOf(L, toWires(L.solution), { S: 1 });
  assert.equal(f.contacts['S.a-b'], true);
});
