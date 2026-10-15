// PLC didattico: un sottoinsieme del ladder IEC 61131-3 eseguito per intero nel browser.
// Il programma e' un dato (elenco di gradini); la scansione e' una funzione pura. Nessuna grafica e nessun testo.
//
// Indirizzi (stringhe): I0 I1 ... ingressi, Q0 Q1 ... uscite, M0 M1 ... merker, T1 ... bit "fatto" di un temporizzatore, C1 ... di un contatore.
//
// Gradino:  { if: <espressione>, do: [<istruzione>, ...] }
// Espressione (condizione, da sinistra a destra):
//   'I0'                    contatto normalmente aperto: vale 1 se il bit e' 1
//   ['not', e]              contatto normalmente chiuso
//   ['and', e1, e2, ...]    contatti in serie
//   ['or', e1, e2, ...]     rami in parallelo
//   ['rise', 'I0']          fronte di salita (1 solo per la scansione in cui il bit passa da 0 a 1)
// Istruzione:
//   { op: 'coil', a: 'Q0' }               bobina: il bit segue la condizione
//   { op: 'set', a: 'M0' }                Set: se la condizione e' vera il bit passa a 1 e ci resta
//   { op: 'reset', a: 'M0' }              Reset: se la condizione e' vera il bit passa a 0
//   { op: 'ton', id: 'T1', pt: 3 }        temporizzatore ritardato all'eccitazione: T1 diventa 1 dopo `pt` secondi di condizione vera
//   { op: 'ctu', id: 'C1', pv: 5, r: 'I3' }  contatore in avanti: conta i fronti di salita; C1 diventa 1 a `pv`; `r` (bit) lo azzera
//
// Memoria: { bits: {indirizzo: bool}, timers: {id: {acc}}, counters: {id: {cv}}, prev: {indirizzo: bool} }.

export const MAX_RUNGS = 24;
export const ADDR = /^[IQMTC]\d{1,2}$/;

export const newMem = () => ({ bits: {}, timers: {}, counters: {}, prev: {} });
export const cloneMem = m => JSON.parse(JSON.stringify(m));

// Tutti gli indirizzi nominati in un'espressione.
function addrsOf(e, out = []) {
  if (typeof e === 'string') out.push(e);
  else if (Array.isArray(e)) e.slice(1).forEach(x => addrsOf(x, out));
  return out;
}

// Elenca i problemi di un programma (stringhe-codice con parametri). Vuoto = valido.
// `known`: indirizzi ammessi per gli ingressi e le uscite del PLC (es. { I: 4, Q: 2 }).
export function validateProgram(program, known = { I: 8, Q: 8 }) {
  const errs = [];
  if (!Array.isArray(program)) return [{ code: 'prog.notList' }];
  if (program.length > MAX_RUNGS) errs.push({ code: 'prog.tooLong', n: program.length });
  const writers = new Set();
  program.forEach((r, i) => {
    if (!r || typeof r !== 'object' || !Array.isArray(r.do) || !r.do.length) { errs.push({ code: 'prog.rungEmpty', rung: i + 1 }); return; }
    const chk = a => {
      if (typeof a !== 'string' || !ADDR.test(a)) { errs.push({ code: 'prog.badAddr', rung: i + 1, addr: String(a) }); return; }
      const k = a[0], n = Number(a.slice(1));
      if ((k === 'I' && n >= known.I) || (k === 'Q' && n >= known.Q)) errs.push({ code: 'prog.noSuchIo', rung: i + 1, addr: a });
    };
    try { addrsOf(r.if).forEach(chk); } catch (e) { errs.push({ code: 'prog.badExpr', rung: i + 1 }); }
    if (r.if === undefined || r.if === null) errs.push({ code: 'prog.noCondition', rung: i + 1 });
    r.do.forEach(ins => {
      if (!ins || !['coil', 'set', 'reset', 'ton', 'ctu'].includes(ins.op)) { errs.push({ code: 'prog.badOp', rung: i + 1 }); return; }
      if (ins.op === 'ton' || ins.op === 'ctu') {
        if (typeof ins.id !== 'string' || !/^[TC]\d{1,2}$/.test(ins.id) || ins.id[0] !== (ins.op === 'ton' ? 'T' : 'C')) errs.push({ code: 'prog.badAddr', rung: i + 1, addr: String(ins.id) });
        if (ins.op === 'ton' && !(ins.pt > 0)) errs.push({ code: 'prog.badPreset', rung: i + 1 });
        if (ins.op === 'ctu' && !(ins.pv > 0)) errs.push({ code: 'prog.badPreset', rung: i + 1 });
        if (ins.op === 'ctu' && ins.r) chk(ins.r);
        writers.add(ins.id);
      } else {
        chk(ins.a);
        if (typeof ins.a === 'string' && (ins.a[0] === 'I' || ins.a[0] === 'T' || ins.a[0] === 'C')) errs.push({ code: 'prog.writeInput', rung: i + 1, addr: ins.a });
        if (ins.op === 'coil' && typeof ins.a === 'string') {
          if (writers.has(ins.a)) errs.push({ code: 'prog.doubleCoil', rung: i + 1, addr: ins.a });
          writers.add(ins.a);
        }
      }
    });
  });
  return errs;
}

// Valuta una espressione sui bit attuali.
function ev(e, bits, prev) {
  if (typeof e === 'string') return !!bits[e];
  if (!Array.isArray(e)) return false;
  const [op, ...a] = e;
  if (op === 'not') return !ev(a[0], bits, prev);
  if (op === 'and') return a.every(x => ev(x, bits, prev));
  if (op === 'or') return a.some(x => ev(x, bits, prev));
  if (op === 'rise') return !!bits[a[0]] && !prev[a[0]];
  return false;
}

/**
 * Una scansione: legge gli ingressi, esegue i gradini nell'ordine, restituisce le uscite.
 * Funzione pura: la memoria data non si modifica.
 * @param {object[]} program
 * @param {Record<string, boolean>} inputs  es. { I0: true, I1: false }
 * @param {object} mem                      memoria della scansione precedente (newMem() la prima volta)
 * @param {number} dt                       secondi trascorsi dalla scansione precedente
 * @returns {{ mem: object, outputs: Record<string, boolean>, rungs: boolean[] }}  `rungs`: condizione di ogni gradino (per colorare il ladder)
 */
export function scan(program, inputs, mem, dt = 0) {
  const m = cloneMem(mem || newMem());
  const bits = m.bits;
  Object.keys(bits).forEach(k => { if (k[0] === 'I') delete bits[k]; });
  Object.entries(inputs || {}).forEach(([k, v]) => (bits[k] = !!v));
  const rungs = [];
  (program || []).forEach(r => {
    const on = ev(r.if, bits, m.prev);
    rungs.push(on);
    (r.do || []).forEach(ins => {
      if (ins.op === 'coil') bits[ins.a] = on;
      else if (ins.op === 'set') { if (on) bits[ins.a] = true; }
      else if (ins.op === 'reset') { if (on) bits[ins.a] = false; }
      else if (ins.op === 'ton') {
        const t = m.timers[ins.id] || (m.timers[ins.id] = { acc: 0 });
        t.acc = on ? Math.min(ins.pt, t.acc + dt) : 0;
        bits[ins.id] = t.acc >= ins.pt;
      } else if (ins.op === 'ctu') {
        const c = m.counters[ins.id] || (m.counters[ins.id] = { cv: 0 });
        if (ins.r && ev(ins.r, bits, m.prev)) c.cv = 0;
        else if (on && !m.prev['@' + ins.id]) c.cv = Math.min(ins.pv, c.cv + 1);
        m.prev['@' + ins.id] = on;
        bits[ins.id] = c.cv >= ins.pv;
      }
    });
  });
  m.prev = { ...bits, ...Object.fromEntries(Object.entries(m.prev).filter(([k]) => k[0] === '@')) };
  const outputs = {};
  Object.keys(bits).forEach(k => { if (k[0] === 'Q') outputs[k] = !!bits[k]; });
  return { mem: m, outputs, rungs };
}
