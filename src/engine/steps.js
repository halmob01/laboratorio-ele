// Passi dell'esercizio: dove si e' arrivati e quale filo suggerire. Nessuna grafica e nessun testo.
//
// Un passo e' uno di:
//   { kind: 'wire', from, to: [morsetti], color }   fatto quando `from` e' collegato, attraverso i soli fili, a uno dei `to`
//   { kind: 'power' }                                fatto quando il quadro e' acceso
//   { kind: 'control', id }                          fatto quando il comando e' stato azionato con il quadro acceso
//   { kind: 'measure', between: [a, b], mode: 'V'|'R', value?, reading?, live? }   fatto quando il multimetro ha letto cio' che si chiede
//   { kind: 'verify' }                               fatto quando la verifica e' superata
// I passi sono sequenziali: un passo conta come fatto solo se lo sono anche tutti i precedenti.

import { makeUF } from './circuit.js';

const wireDone = (step, wires) => {
  const uf = makeUF();
  wires.forEach(w => uf.u(w.a, w.b));
  return step.to.some(t => uf.f(step.from) === uf.f(t));
};

// Una lettura soddisfa il passo se riguarda gli stessi due morsetti (in qualunque ordine), nella stessa modalita',
// e, se richiesto, ha il valore (`value`), il tipo (`reading`: 'cont', 'res', 'open', 'live') o lo stato dell'impianto (`live`).
export function measureMatches(st, m) {
  const same = (m.a === st.between[0] && m.b === st.between[1]) || (m.a === st.between[1] && m.b === st.between[0]);
  if (!same || m.mode !== (st.mode || 'V')) return false;
  if (st.value !== undefined && m.value !== st.value) return false;
  if (st.reading !== undefined && m.kind !== st.reading) return false;
  if (st.live !== undefined && m.live !== st.live) return false;
  return true;
}

/**
 * @param {object[]} steps     passi del livello
 * @param {object[]} wires     fili [{id, a, b, c}]
 * @param {{power:boolean, operated:string[]|Set<string>, result:object|null}} ctx
 * @returns {{ done: boolean[], current: number|null }}
 */
export function stepsState(steps, wires, ctx) {
  const operated = new Set(ctx.operated || []);
  let ok = true;
  const done = steps.map(st => {
    let d;
    if (st.kind === 'wire') d = !ctx.fault && wireDone(st, wires);   // con un cortocircuito i passi di cablaggio non risultano fatti
    else if (st.kind === 'power') d = !!ctx.power;
    else if (st.kind === 'control') d = operated.has(st.id);
    else if (st.kind === 'measure') d = (ctx.measured || []).some(m => measureMatches(st, m));
    else if (st.kind === 'verify') d = !!(ctx.result && ctx.result.pass);
    else d = false;
    ok = ok && d;
    return ok;
  });
  const cur = done.findIndex(d => !d);
  return { done, current: cur < 0 ? null : cur };
}

/**
 * Il filo da suggerire (tratteggio) per un passo di tipo `wire`: [da, a, colore] oppure null.
 * Si sceglie il primo morsetto di arrivo che non ha ancora nessun filo.
 */
export function ghostFor(step, wires) {
  if (!step || step.kind !== 'wire') return null;
  const touched = new Set();
  wires.forEach(w => { touched.add(w.a); touched.add(w.b); });
  const target = step.to.find(t => !touched.has(t)) || step.to[0];
  return [step.from, target, step.color];
}
