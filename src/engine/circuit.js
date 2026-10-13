// Simulazione del circuito: quali morsetti sono elettricamente lo stesso punto.
// Un morsetto e' identificato da "<idComponente>.<idMorsetto>", per esempio "Q.F" o "D1.C".
// Questo identificativo e' il contratto tra il motore e qualsiasi vista (2D, 3D, ...).

import { contactsOf } from './components.js';

// Sorgenti di alimentazione di un livello (fase, neutro, terra).
export function sourceOf(level) {
  return level.src || { F: 'Q.F', N: 'Q.N', PE: 'Q.PE' };
}

export function makeUF() {
  const p = {};
  function f(x) {
    if (p[x] === undefined) p[x] = x;
    while (p[x] !== x) {
      p[x] = p[p[x]];
      x = p[x];
    }
    return x;
  }
  function u(a, b) {
    p[f(a)] = f(b);
  }
  return { f, u };
}

// Unisce i morsetti collegati da fili e quelli collegati dentro i componenti.
export function connect(level, wires, states) {
  const uf = makeUF();
  wires.forEach(w => uf.u(w.a, w.b));
  level.comps.forEach(c =>
    contactsOf(c, states[c.id] || 0).forEach(([a, b]) => uf.u(c.id + '.' + a, c.id + '.' + b))
  );
  return uf;
}

// Carichi del livello: una coppia di morsetti, oppure l'elenco `loads` (piu' lampade, in parallelo).
export const loadsOf = level => level.loads || [level.load];

// Analisi del circuito per un dato stato dei comandi.
// fault: null | 'corto' (fase su neutro) | 'faseterra' (fase su terra)
// lit: il carico e' alimentato tra fase e neutro
export function analyse(level, wires, states) {
  const uf = connect(level, wires, states);
  const sr = sourceOf(level);
  const F = uf.f(sr.F), N = uf.f(sr.N), PE = uf.f(sr.PE);
  let fault = null;
  if (F === N) fault = 'corto';
  else if (F === PE) fault = 'faseterra';
  const a = uf.f(level.load[0]), b = uf.f(level.load[1]);
  // Un carico e' acceso se sta tra fase e neutro. `lit` vale se TUTTI i carichi sono accesi;
  // con un solo carico e' come prima.
  const litLoads = loadsOf(level).map(([x, y]) => {
    const p = uf.f(x), q = uf.f(y);
    return !fault && ((p === F && q === N) || (p === N && q === F));
  });
  const lit = litLoads.every(Boolean);
  return { uf, F, N, PE, fault, lit, anyLit: litLoads.some(Boolean), litLoads, a, b };
}

// Potenziale di un morsetto: 'F' | 'N' | 'PE' | null (non collegato a una sorgente).
export function potentialOf(analysis, terminalId) {
  const k = analysis.uf.f(terminalId);
  if (k === analysis.F) return 'F';
  if (k === analysis.N) return 'N';
  if (k === analysis.PE) return 'PE';
  return null;
}
