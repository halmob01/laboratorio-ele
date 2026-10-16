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
// Parole (numeri, docs/SPEC-PROCESSI.md sezione 4): AIk ingressi analogici in mA (sola lettura), AQk uscite analogiche 0-100 %, MWk interne.
//   ['gt'|'lt'|'ge'|'le', a, b]          contatto di confronto: a e b sono parole o numeri
//   { op: 'move', v, out }                 copia v (numero o parola) in out
//   { op: 'scale', in, out, lo, hi }       da 4-20 mA a lo-hi (sotto 4 mA va sotto lo: il filo interrotto si riconosce)
//   { op: 'pid', id, pv, sp, out, kp, ti, td, lo, hi }   regolatore PID (pid.js); con la condizione falsa resta in manuale
//
// Memoria: { bits: {indirizzo: bool}, words: {parola: numero}, timers: {id: {acc}}, counters: {id: {cv}}, pids: {id: stato}, prev: {indirizzo: bool} }.

import { pidStep, newPid } from './pid.js';

export const MAX_RUNGS = 24;
export const ADDR = /^[IQMTC]\d{1,2}$/;
export const WORD = /^(AI|AQ|MW)\d{1,2}$/;
const CMP = ['gt', 'lt', 'ge', 'le'];

export const newMem = () => ({ bits: {}, words: {}, timers: {}, counters: {}, pids: {}, prev: {} });
export const cloneMem = m => JSON.parse(JSON.stringify(m));

// Tutti gli indirizzi nominati in un'espressione.
function addrsOf(e, out = []) {
  if (typeof e === 'string') out.push(e);
  else if (Array.isArray(e) && CMP.includes(e[0])) e.slice(1).forEach(x => { if (typeof x === 'string') out.push(x); });
  else if (Array.isArray(e)) e.slice(1).forEach(x => addrsOf(x, out));
  return out;
}
const isNum = x => typeof x === 'number' && Number.isFinite(x);

// Elenca i problemi di un programma (stringhe-codice con parametri). Vuoto = valido.
// `known`: indirizzi ammessi per gli ingressi e le uscite del PLC (es. { I: 4, Q: 2, AI: 1, AQ: 1 }).
export function validateProgram(program, known = { I: 8, Q: 8 }) {
  const errs = [];
  if (!Array.isArray(program)) return [{ code: 'prog.notList' }];
  if (program.length > MAX_RUNGS) errs.push({ code: 'prog.tooLong', n: program.length });
  const writers = new Set();
  program.forEach((r, i) => {
    if (!r || typeof r !== 'object' || !Array.isArray(r.do) || !r.do.length) { errs.push({ code: 'prog.rungEmpty', rung: i + 1 }); return; }
    const chk = a => {
      if (typeof a === 'string' && WORD.test(a)) {
        const k = a.slice(0, 2), n = Number(a.slice(2));
        if ((k === 'AI' && n >= (known.AI ?? 8)) || (k === 'AQ' && n >= (known.AQ ?? 8))) errs.push({ code: 'prog.noSuchIo', rung: i + 1, addr: a });
        return;
      }
      if (typeof a !== 'string' || !ADDR.test(a)) { errs.push({ code: 'prog.badAddr', rung: i + 1, addr: String(a) }); return; }
      const k = a[0], n = Number(a.slice(1));
      if ((k === 'I' && n >= known.I) || (k === 'Q' && n >= known.Q)) errs.push({ code: 'prog.noSuchIo', rung: i + 1, addr: a });
    };
    const val = v => { if (!isNum(v)) chk(v); };
    const wout = (a, kind) => {
      if (typeof a !== 'string' || !/^(AQ|MW)\d{1,2}$/.test(a)) { errs.push({ code: 'prog.badAddr', rung: i + 1, addr: String(a) }); return; }
      chk(a);
      if (writers.has(a)) errs.push({ code: 'prog.doubleCoil', rung: i + 1, addr: a });
      writers.add(a);
    };
    try { addrsOf(r.if).forEach(chk); } catch (e) { errs.push({ code: 'prog.badExpr', rung: i + 1 }); }
    if (r.if === undefined || r.if === null) errs.push({ code: 'prog.noCondition', rung: i + 1 });
    r.do.forEach(ins => {
      if (!ins || !['coil', 'set', 'reset', 'ton', 'ctu', 'move', 'scale', 'pid'].includes(ins.op)) { errs.push({ code: 'prog.badOp', rung: i + 1 }); return; }
      if (ins.op === 'move') { val(ins.v); wout(ins.out); return; }
      if (ins.op === 'scale') {
        if (typeof ins.in !== 'string' || !/^AI\d{1,2}$/.test(ins.in)) errs.push({ code: 'prog.badAddr', rung: i + 1, addr: String(ins.in) }); else chk(ins.in);
        wout(ins.out);
        if (!isNum(ins.lo) || !isNum(ins.hi) || ins.hi === ins.lo) errs.push({ code: 'prog.badPreset', rung: i + 1 });
        return;
      }
      if (ins.op === 'pid') {
        val(ins.pv); val(ins.sp); wout(ins.out);
        // i guadagni sono numeri o parole (il pannello di regolazione li scrive in MWk)
        const gain = (v, pos) => (isNum(v) ? (pos ? v > 0 : v >= 0) : (chk(v), true));
        if (!gain(ins.kp, true) || !gain(ins.ti ?? 0) || !gain(ins.td ?? 0)) errs.push({ code: 'prog.badPreset', rung: i + 1 });
        return;
      }
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
function ev(e, bits, prev, words = {}) {
  if (typeof e === 'string') return !!bits[e];
  if (!Array.isArray(e)) return false;
  const [op, ...a] = e;
  if (CMP.includes(op)) {
    const x = wordVal(a[0], words), y = wordVal(a[1], words);
    return op === 'gt' ? x > y : op === 'lt' ? x < y : op === 'ge' ? x >= y : x <= y;
  }
  if (op === 'not') return !ev(a[0], bits, prev, words);
  if (op === 'and') return a.every(x => ev(x, bits, prev, words));
  if (op === 'or') return a.some(x => ev(x, bits, prev, words));
  if (op === 'rise') return !!bits[a[0]] && !prev[a[0]];
  return false;
}

const wordVal = (v, words) => (isNum(v) ? v : Number(words[v]) || 0);

/**
 * Una scansione: legge gli ingressi, esegue i gradini nell'ordine, restituisce le uscite.
 * Funzione pura: la memoria data non si modifica.
 * @param {object[]} program
 * @param {Record<string, boolean>} inputs  es. { I0: true, I1: false }
 * @param {object} mem                      memoria della scansione precedente (newMem() la prima volta)
 * @param {number} dt                       secondi trascorsi dalla scansione precedente
 * @param {Record<string, number>} analog   ingressi analogici in mA, es. { AI0: 12 }
 * @returns {{ mem: object, outputs: Record<string, boolean>, rungs: boolean[] }}  `rungs`: condizione di ogni gradino (per colorare il ladder)
 */
export function scan(program, inputs, mem, dt = 0, analog = {}) {
  const m = cloneMem(mem || newMem());
  m.words = m.words || {}; m.pids = m.pids || {};
  const bits = m.bits, words = m.words;
  Object.keys(words).forEach(k => { if (k.startsWith('AI')) delete words[k]; });
  Object.entries(analog || {}).forEach(([k, v]) => (words[k] = Number(v) || 0));
  Object.keys(bits).forEach(k => { if (k[0] === 'I') delete bits[k]; });
  Object.entries(inputs || {}).forEach(([k, v]) => (bits[k] = !!v));
  const rungs = [];
  (program || []).forEach(r => {
    const on = ev(r.if, bits, m.prev, words);
    rungs.push(on);
    (r.do || []).forEach(ins => {
      if (ins.op === 'coil') bits[ins.a] = on;
      else if (ins.op === 'set') { if (on) bits[ins.a] = true; }
      else if (ins.op === 'reset') { if (on) bits[ins.a] = false; }
      else if (ins.op === 'ton') {
        const t = m.timers[ins.id] || (m.timers[ins.id] = { acc: 0 });
        t.acc = on ? Math.min(ins.pt, t.acc + dt) : 0;
        t.on = on;                // sta contando (serve a chi fa correre l'orologio: all'inizio acc vale ancora 0)
        bits[ins.id] = t.acc >= ins.pt;
      } else if (ins.op === 'ctu') {
        const c = m.counters[ins.id] || (m.counters[ins.id] = { cv: 0 });
        if (ins.r && ev(ins.r, bits, m.prev, words)) c.cv = 0;
        else if (on && !m.prev['@' + ins.id]) c.cv = Math.min(ins.pv, c.cv + 1);
        m.prev['@' + ins.id] = on;
        bits[ins.id] = c.cv >= ins.pv;
      } else if (ins.op === 'move') { if (on) words[ins.out] = wordVal(ins.v, words); }
      else if (ins.op === 'scale') {
        if (on) words[ins.out] = ins.lo + (wordVal(ins.in, words) - 4) * (ins.hi - ins.lo) / 16;
      } else if (ins.op === 'pid') {
        const key = ins.id || ins.out;
        const cur = Number(words[ins.out]) || 0;
        const pr = { pv: wordVal(ins.pv, words), sp: wordVal(ins.sp, words), kp: wordVal(ins.kp, words), ti: wordVal(ins.ti ?? 0, words), td: wordVal(ins.td ?? 0, words), lo: ins.lo ?? 0, hi: ins.hi ?? 100, dt, windup: !!ins.windup };
        const res = pidStep(m.pids[key] || newPid(), on ? pr : { ...pr, track: cur });
        m.pids[key] = res.state;
        if (on) words[ins.out] = res.u;
      }
    });
  });
  m.prev = { ...bits, ...Object.fromEntries(Object.entries(m.prev).filter(([k]) => k[0] === '@')) };
  const outputs = {};
  Object.keys(bits).forEach(k => { if (k[0] === 'Q') outputs[k] = !!bits[k]; });
  const analogOut = {};
  Object.keys(words).forEach(k => { if (k.startsWith('AQ')) analogOut[k] = Math.max(0, Math.min(100, words[k])); });
  return { mem: m, outputs, analogOut, rungs };
}

// Pulizia di un programma che arriva da fuori (lavoro salvato, interfaccia): tiene solo la forma attesa, taglia l'eccesso.
// Non controlla il significato (lo fa validateProgram): garantisce solo che scan non si rompa.
export function sanitizeProgram(program) {
  const addr = a => (typeof a === 'string' && ADDR.test(a) ? a : null);
  const word = a => (typeof a === 'string' && WORD.test(a) ? a : null);
  const num = v => (isNum(v) && Math.abs(v) <= 1e6 ? v : null);
  const operand = v => (isNum(v) ? num(v) : word(v));
  const expr = (e, depth = 0) => {
    if (depth > 4) return null;
    if (typeof e === 'string') return addr(e);
    if (Array.isArray(e) && CMP.includes(e[0])) {
      const x = operand(e[1]), y = operand(e[2]);
      return x === null || y === null ? null : [e[0], x, y];
    }
    if (!Array.isArray(e) || !['not', 'and', 'or', 'rise'].includes(e[0])) return null;
    const kids = e.slice(1, 9).map(x => expr(x, depth + 1));
    if (!kids.length || kids.some(k => k === null)) return null;
    return [e[0], ...(e[0] === 'not' || e[0] === 'rise' ? kids.slice(0, 1) : kids)];
  };
  const ins = i => {
    if (!i || typeof i !== 'object') return null;
    if (['coil', 'set', 'reset'].includes(i.op)) return addr(i.a) ? { op: i.op, a: i.a } : null;
    if (i.op === 'ton') return /^T\d{1,2}$/.test(i.id) && i.pt > 0 && i.pt <= 600 ? { op: 'ton', id: i.id, pt: Number(i.pt) } : null;
    if (i.op === 'ctu') return /^C\d{1,2}$/.test(i.id) && i.pv > 0 && i.pv <= 999 ? { op: 'ctu', id: i.id, pv: Math.floor(Number(i.pv)), ...(addr(i.r) ? { r: i.r } : {}) } : null;
    const wout = a => (typeof a === 'string' && /^(AQ|MW)\d{1,2}$/.test(a) ? a : null);
    if (i.op === 'move') return operand(i.v) !== null && wout(i.out) ? { op: 'move', v: i.v, out: i.out } : null;
    if (i.op === 'scale') return /^AI\d{1,2}$/.test(i.in) && wout(i.out) && num(i.lo) !== null && num(i.hi) !== null ? { op: 'scale', in: i.in, out: i.out, lo: i.lo, hi: i.hi } : null;
    if (i.op === 'pid') {
      const gain = (v, pos) => (isNum(v) ? (pos ? num(v) > 0 : num(v) >= 0) : word(v) !== null);
      if (operand(i.pv) === null || operand(i.sp) === null || !wout(i.out) || !gain(i.kp, true) || !gain(i.ti ?? 0) || !gain(i.td ?? 0)) return null;
      return { op: 'pid', id: typeof i.id === 'string' && /^PID\d$/.test(i.id) ? i.id : i.out, pv: i.pv, sp: i.sp, out: i.out, kp: i.kp, ti: i.ti ?? 0, td: i.td ?? 0, ...(num(i.lo) !== null ? { lo: i.lo } : {}), ...(num(i.hi) !== null ? { hi: i.hi } : {}), ...(i.windup === true ? { windup: true } : {}) };
    }
    return null;
  };
  if (!Array.isArray(program)) return [];
  return program.slice(0, MAX_RUNGS).filter(r => r && typeof r === 'object').map(r => {
    const out = { do: (Array.isArray(r.do) ? r.do.slice(0, 6) : []).map(ins).filter(Boolean) };
    const c = r.if === undefined || r.if === null ? null : expr(r.if);
    if (c !== null) out.if = c;
    return out;
  });
}
