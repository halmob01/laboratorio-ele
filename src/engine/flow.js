// Dove passa la corrente: stato di ogni filo e punti in cui la tensione si ferma.
//
// Distingue tre cose che a un principiante sembrano la stessa:
//   - un filo collegato alla fase o al neutro (in tensione, ma senza corrente);
//   - un filo percorso da corrente (sta su un giro chiuso tra sorgente e carico acceso);
//   - il punto in cui la tensione si ferma (un filo che arriva e non prosegue).
//
// Un filo e' "percorso da corrente" se sta su un percorso semplice (senza passare due volte
// dallo stesso morsetto) dalla fase al neutro che attraversa il carico. Un filo lasciato
// attaccato a meta' resta in tensione ma non e' percorso.
//
// Risultato di flowOf:
//   {
//     wires:     { <idFilo>: { net: 'F' | 'N' | 'PE' | null, current: bool } },
//     contacts:  { '<comp>.<a>-<b>': bool }   contatti interni chiusi attraversati dalla corrente
//     deadEnds:  [ '<comp>.<morsetto>', ... ]  dove la fase o il neutro arrivano e si fermano
//     current:   bool                          c'e' almeno un giro chiuso con il carico acceso
//   }
// La funzione non dipende da `power`: la vista decide se mostrare gli stati solo a quadro acceso.

import { analyse, loadsOf, potentialOf, sourceOf } from './circuit.js';
import { contactsOf } from './components.js';

const MAX_PATHS = 50000;
const MAX_STEPS = 200000; // tetto alla ricerca: oltre, il risultato e' parziale ma l'interfaccia non si blocca

export function flowOf(level, wires, states) {
  const an = analyse(level, wires, states);
  const sr = sourceOf(level);

  // Archi del grafo dei morsetti: fili, contatti interni chiusi e, a parte, il carico.
  const edges = [];
  wires.forEach(w => edges.push({ a: w.a, b: w.b, kind: 'wire', key: w.id }));
  level.comps.forEach(c =>
    contactsOf(c, (states && states[c.id]) || 0).forEach(([x, y]) =>
      edges.push({ a: c.id + '.' + x, b: c.id + '.' + y, kind: 'contact', key: c.id + '.' + x + '-' + y })
    )
  );
  const loadEdges = loadsOf(level).map(([a, b], i) => ({ a, b, kind: 'load', key: 'load' + i }));

  // Gradi (senza il carico): servono per i punti in cui la tensione si ferma.
  const degree = {};
  edges.forEach(e => {
    degree[e.a] = (degree[e.a] || 0) + 1;
    degree[e.b] = (degree[e.b] || 0) + 1;
  });

  const out = { wires: {}, contacts: {}, deadEnds: [], current: false };
  wires.forEach(w => {
    out.wires[w.id] = { net: potentialOf(an, w.a), current: false };
  });

  if (an.anyLit) {
    // Percorsi semplici dalla fase al neutro che passano per il carico.
    const all = edges.concat(loadEdges);
    const adj = {};
    all.forEach((e, i) => {
      (adj[e.a] = adj[e.a] || []).push([e.b, i]);
      (adj[e.b] = adj[e.b] || []).push([e.a, i]);
    });
    const loadIdx = new Set(loadEdges.map((_, i) => edges.length + i));
    const onPath = new Set();
    let count = 0;
    let steps = 0;
    const seen = new Set();
    const stack = [];
    const dfs = node => {
      if (count > MAX_PATHS || ++steps > MAX_STEPS) return;
      if (node === sr.N) {
        if (stack.some(i => loadIdx.has(i))) {
          count++;
          stack.forEach(i => onPath.add(i));
        }
        return;
      }
      for (const [next, i] of adj[node] || []) {
        if (seen.has(next)) continue;
        seen.add(next);
        stack.push(i);
        dfs(next);
        stack.pop();
        seen.delete(next);
      }
    };
    // Si parte dal morsetto sorgente della fase; i morsetti della stessa rete non sono equivalenti
    // per il percorso, perche' il grafo e' fatto di archi veri.
    seen.add(sr.F);
    dfs(sr.F);
    onPath.forEach(i => {
      const e = all[i];
      if (e.kind === 'wire') out.wires[e.key].current = true;
      else if (e.kind === 'contact') out.contacts[e.key] = true;
    });
    out.current = onPath.size > 0;
  } else {
    // Dove la tensione si ferma: morsetti in tensione con un solo collegamento.
    const sources = new Set([sr.F, sr.N, sr.PE]);
    const loads = new Set(loadsOf(level).flat());
    Object.keys(degree).forEach(t => {
      const pot = potentialOf(an, t);
      if ((pot === 'F' || pot === 'N') && degree[t] === 1 && !sources.has(t) && !loads.has(t)) out.deadEnds.push(t);
    });
    // Un morsetto del carico raggiunto da un solo polo e' anch'esso un punto di arrivo.
    loadsOf(level).flat().forEach(t => {
      const pot = potentialOf(an, t);
      if ((pot === 'F' || pot === 'N') && degree[t] === 1) out.deadEnds.push(t);
    });
    // prima dove si ferma la fase, poi dove si ferma il neutro
    const rank = t => (potentialOf(an, t) === 'F' ? 0 : 1);
    out.deadEnds = [...new Set(out.deadEnds)].sort((x, y) => rank(x) - rank(y) || (x < y ? -1 : x > y ? 1 : 0));
  }
  return out;
}
