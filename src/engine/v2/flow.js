// Motore v2: dove passa la corrente (SPEC-MOTORE-V2 sezione 9). Stesso formato di ../flow.js:
//   { wires: { <id>: { net: 'fase'|'neutro'|'terra'|'bassa'|null, current } }, contacts, deadEnds, current }

import { analyseV2, sourcesOf } from './sim.js';
import { partOf } from './parts.js';

const MAX_STEPS = 200000;
const PH = ['F', 'L1', 'L2', 'L3'];
const netOf = p => (!p || p === 'mix' ? null : PH.includes(p) ? 'fase' : p === 'N' ? 'neutro' : p === 'PE' ? 'terra' : 'bassa');

export function flowV2(sim) {
  const { level, wires } = sim;
  const an = analyseV2(sim);
  const out = { wires: {}, contacts: {}, deadEnds: [], current: false };
  wires.forEach(w => (out.wires[w.id] = { net: netOf(an.potAt(w.a)), current: false }));

  // archi: fili, contatti chiusi, carichi accesi, bobine alimentate, avvolgimenti dei motori in moto
  const edges = [];
  wires.forEach(w => edges.push({ a: w.a, b: w.b, kind: 'wire', key: w.id }));
  level.comps.forEach(c => {
    const p = partOf(c);
    p.contacts(c, sim.parts[c.id] || {}).forEach(([x, y]) => edges.push({ a: c.id + '.' + x, b: c.id + '.' + y, kind: 'contact', key: c.id + '.' + x + '-' + y }));
    const on = (p.load && an.loads[c.id] === 'on') || (p.coil && an.coils[c.id]);
    if (on) { const [x, y] = p.load || p.coil; edges.push({ a: c.id + '.' + x, b: c.id + '.' + y, kind: 'load' }); }
    if (p.windings && an.motors[c.id] && an.motors[c.id] !== 'off') {
      p.windings.forEach(([x, y]) => edges.push({ a: c.id + '.' + x, b: c.id + '.' + y, kind: 'load' }));
    } else if (p.motor && an.motors[c.id] && an.motors[c.id] !== 'off') {
      const [u, v, w] = p.motor.map(t => c.id + '.' + t);
      [[u, v], [v, w], [w, u]].forEach(([x, y]) => edges.push({ a: x, b: y, kind: 'load' }));
    }
  });
  const degree = {};
  edges.forEach(e => { if (e.kind !== 'load') { degree[e.a] = (degree[e.a] || 0) + 1; degree[e.b] = (degree[e.b] || 0) + 1; } });

  const src = sourcesOf(level);
  const starts = [];   // [morsetto, potenziale]
  Object.entries(src).forEach(([name, t]) => { if (name !== 'PE') starts.push([t, name]); });
  level.comps.filter(c => c.type === 'trafo' && an.trafoOn[c.id]).forEach(c => { starts.push([c.id + '.3', c.id + ':a']); starts.push([c.id + '.4', c.id + ':b']); });
  const ends = new Map(starts.map(([t, n]) => [t, n]));

  if (edges.some(e => e.kind === 'load')) {
    const adj = {};
    edges.forEach((e, i) => { (adj[e.a] = adj[e.a] || []).push([e.b, i]); (adj[e.b] = adj[e.b] || []).push([e.a, i]); });
    const onPath = new Set();
    let steps = 0;
    starts.forEach(([s0, n0]) => {
      const seen = new Set([s0]), stack = [];
      const dfs = node => {
        if (++steps > MAX_STEPS) return;
        const n = ends.get(node);
        if (node !== s0 && n && n !== n0) {
          if (stack.some(i => edges[i].kind === 'load')) stack.forEach(i => onPath.add(i));
          return;
        }
        for (const [next, i] of adj[node] || []) {
          if (seen.has(next)) continue;
          seen.add(next); stack.push(i); dfs(next); stack.pop(); seen.delete(next);
        }
      };
      dfs(s0);
    });
    onPath.forEach(i => {
      const e = edges[i];
      if (e.kind === 'wire') out.wires[e.key].current = true;
      else if (e.kind === 'contact') out.contacts[e.key] = true;
    });
    out.current = onPath.size > 0;
  }
  // dove la tensione si ferma: morsetti in tensione con un solo collegamento, fuori dalle sorgenti
  const srcTerms = new Set(Object.values(src));
  Object.keys(degree).forEach(t => {
    const net = netOf(an.potAt(t));
    if ((net === 'fase' || net === 'neutro' || net === 'bassa') && degree[t] === 1 && !srcTerms.has(t) && !ends.has(t)) out.deadEnds.push(t);
  });
  out.deadEnds.sort();
  return out;
}
