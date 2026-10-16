// Modifica del programma ladder: funzioni pure (programma in, programma nuovo out). Nessuna grafica, nessun testo.
//
// L'editor tratta la condizione di un gradino come una fila di "celle" in serie; ogni cella e' un contatto
// oppure piu' contatti in parallelo (rami). E' il caso di quasi ogni gradino didattico (avvio con autoritenuta, ecc.);
// un'espressione piu' annidata non e' modificabile (toCells torna null) ma si disegna lo stesso.
//
//   contatto: { a: 'I0', not?: true, rise?: true }       cella: { alts: [contatto, ...] }
//   confronto: { cmp: 'gt'|'lt'|'ge'|'le', a: 'MW0', b: 80 }   (a e' una parola, b un numero)

export const CMPS = ['gt', 'lt', 'ge', 'le'];
export const contactExpr = c => (c.cmp ? [c.cmp, c.a, c.b] : c.rise ? ['rise', c.a] : c.not ? ['not', c.a] : c.a);

export function parseContact(e) {
  if (typeof e === 'string') return { a: e };
  if (Array.isArray(e) && e.length === 3 && CMPS.includes(e[0]) && typeof e[1] === 'string' && typeof e[2] === 'number') return { cmp: e[0], a: e[1], b: e[2] };
  if (Array.isArray(e) && e.length === 2 && typeof e[1] === 'string') {
    if (e[0] === 'not') return { a: e[1], not: true };
    if (e[0] === 'rise') return { a: e[1], rise: true };
  }
  return null;
}

// Espressione -> celle in serie, oppure null se non e' nella forma modificabile.
export function toCells(expr) {
  if (expr === undefined || expr === null) return [];
  const one = parseContact(expr);
  if (one) return [{ alts: [one] }];
  if (!Array.isArray(expr)) return null;
  const cellOf = e => {
    const c = parseContact(e);
    if (c) return { alts: [c] };
    if (Array.isArray(e) && e[0] === 'or') {
      const alts = e.slice(1).map(parseContact);
      return alts.length && alts.every(Boolean) ? { alts } : null;
    }
    return null;
  };
  if (expr[0] === 'and') {
    const cells = expr.slice(1).map(cellOf);
    return cells.every(Boolean) ? cells : null;
  }
  const c = cellOf(expr);
  return c ? [c] : null;
}

export function fromCells(cells) {
  if (!cells.length) return undefined;
  const cell = c => (c.alts.length === 1 ? contactExpr(c.alts[0]) : ['or', ...c.alts.map(contactExpr)]);
  return cells.length === 1 ? cell(cells[0]) : ['and', ...cells.map(cell)];
}

const clone = p => JSON.parse(JSON.stringify(p || []));
const withRung = (p, i, fn) => {
  const q = clone(p);
  if (!q[i]) return q;
  const r = q[i];
  const cells = toCells(r.if);
  if (cells === null) return q;      // gradino non modificabile
  const out = fn(r, cells);
  if (out) r.if = fromCells(out);
  if (r.if === undefined) delete r.if;
  return q;
};

export const emptyRung = () => ({ do: [] });
export const addRung = p => clone(p).concat([emptyRung()]);
export const removeRung = (p, i) => clone(p).filter((_, k) => k !== i);
export function moveRung(p, i, dir) {
  const q = clone(p), j = i + dir;
  if (j < 0 || j >= q.length) return q;
  [q[i], q[j]] = [q[j], q[i]];
  return q;
}

export const editable = rung => toCells(rung.if) !== null;

// Aggiunge un contatto in fondo alla serie.
export const addContact = (p, i, contact) => withRung(p, i, (r, cells) => cells.concat([{ alts: [contact] }]));
// Cambia un contatto.
export const setContact = (p, i, cell, alt, contact) => withRung(p, i, (r, cells) => { if (cells[cell] && cells[cell].alts[alt]) cells[cell].alts[alt] = contact; return cells; });
// Toglie un contatto (e la cella, se resta vuota).
export const removeContact = (p, i, cell, alt) => withRung(p, i, (r, cells) => {
  if (!cells[cell]) return cells;
  cells[cell].alts.splice(alt, 1);
  return cells.filter(c => c.alts.length);
});
// Aggiunge un contatto in parallelo a una cella.
export const addParallel = (p, i, cell, contact) => withRung(p, i, (r, cells) => { if (cells[cell]) cells[cell].alts.push(contact); return cells; });

// Uscite del gradino.
export function setOut(p, i, k, ins) { const q = clone(p); if (q[i] && q[i].do[k]) q[i].do[k] = ins; return q; }
export function addOut(p, i, ins) { const q = clone(p); if (q[i]) q[i].do.push(ins); return q; }
export function removeOut(p, i, k) { const q = clone(p); if (q[i]) q[i].do = q[i].do.filter((_, n) => n !== k); return q; }

// Indirizzi che l'allievo puo' scegliere in un livello: { inputs, outputs, markers, timers, counters, words } come elenchi di indirizzi.
// `words` (parole da confrontare) si danno per nome nel livello: edit.words = ['AI0', 'MW0'].
export function addressesFor(plcComp, opts = {}) {
  const terms = Object.keys((plcComp && plcComp.terms) || {});
  const inputs = terms.filter(t => /^I\d+$/.test(t)).sort();
  const outputs = terms.filter(t => /^Q\d+A$/.test(t)).map(t => t.slice(0, -1)).sort();
  const n = k => Array.from({ length: opts[k] || 0 }, (_, i) => (k === 'markers' ? 'M' : k === 'timers' ? 'T' : 'C') + (k === 'markers' ? i : i + 1));
  return { inputs, outputs, markers: n('markers'), timers: n('timers'), counters: n('counters'), words: (opts.words || []).slice() };
}
