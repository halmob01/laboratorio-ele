// Prove dei moduli (P3): un impianto gia' cablato (`level.given`) che l'allievo non puo' modificare,
// e dei traguardi da raggiungere lavorando sui comandi (quadro, spine, pulsanti, macchina) e sul multimetro.
// Nessuna grafica e nessun testo: la sessione tiene il registro, la scena 3D e la pagina leggono lo stato.
//
// level.prova = {
//   goals:  [{ id, label, when?, after?, measure?, now? }]   traguardo: si segna una volta (poi resta) quando `when` vale
//                                                           (e `after` e' gia' raggiunto, e la lettura `measure` e' stata fatta);
//                                                           con `now: true` deve valere anche al momento della verifica.
//   guards: [{ id, on, part, require, code }]               regola di sicurezza: azionare `part` con `on` ('toggle' | 'reset' | ...)
//                                                           quando `require` non vale e' un errore (resta nel registro).
// }
// `when` e `require`: { loads, motors, coils: {id: stato}, open: [id], closed: [id], tripped: [id], notTripped: [id],
//                       machine: {chiave: valore}, overload: bool }

import { measureMatches } from '../steps.js';

export const isProva = level => !!level && !!level.prova;

// Fili gia' posati: [{a, b, c}] (senza identificativo; lo da' la sessione).
export const givenWires = level => (level.given || []).map(([a, b, c]) => ({ a, b, c }));

// La condizione vale per l'osservazione e lo stato attuali? (sim.parts per interruttori aperti/chiusi)
export function holds(when, obs, sim) {
  if (!when) return true;
  for (const group of ['loads', 'motors', 'coils']) {
    for (const [id, v] of Object.entries(when[group] || {})) if (obs[group][id] !== v) return false;
  }
  const on = id => !!(sim.parts[id] && sim.parts[id].on);
  if ((when.open || []).some(on)) return false;
  if ((when.closed || []).some(id => !on(id))) return false;
  if ((when.tripped || []).some(id => !obs.tripped.includes(id))) return false;
  if ((when.notTripped || []).some(id => obs.tripped.includes(id))) return false;
  for (const [k, v] of Object.entries(when.machine || {})) if (!obs.machine || obs.machine[k] !== v) return false;
  if (when.overload !== undefined && !!sim.overload !== when.overload) return false;
  return true;
}

export const newLog = () => ({ done: {}, violations: [] });

// Dopo ogni azione: segna i traguardi raggiunti, nell'ordine in cui sono dichiarati (un traguardo con `after` aspetta l'altro).
export function track(level, log, obs, sim, measured = []) {
  const goals = level.prova.goals;
  let moved = true;
  while (moved) {
    moved = false;
    goals.forEach(g => {
      if (log.done[g.id] || g.now) return;
      if (g.after && !log.done[g.after]) return;
      if (!holds(g.when, obs, sim)) return;
      if (g.measure && !measured.some(m => measureMatches(g.measure, m))) return;
      log.done[g.id] = true;
      moved = true;
    });
  }
}

// Prima di un'azione: una regola violata si registra (l'azione poi avviene lo stesso, come in un lavoro vero).
export function guard(level, log, action, partId, obs, sim) {
  (level.prova.guards || []).forEach(g => {
    if (g.part !== partId || g.on !== action) return;
    if (holds(g.require, obs, sim)) return;
    if (!log.violations.some(v => v.id === g.id)) log.violations.push({ id: g.id, code: g.code, comp: g.part });
  });
}

// Traguardi per la pagina: [{ id, label, done }]. `now` vale solo se la condizione e' vera adesso.
export function goalsState(level, log, obs, sim) {
  return level.prova.goals.map(g => ({
    id: g.id,
    label: g.label,
    done: g.now ? !!(g.after ? log.done[g.after] : true) && holds(g.when, obs, sim) : !!log.done[g.id],
  }));
}

// Esito della verifica, con la stessa forma di evaluateV2 ({ work, color, safe, stars, pass }).
export function evaluateProva(level, log, obs, sim) {
  const goals = goalsState(level, log, obs, sim);
  const missing = goals.filter(g => !g.done);
  const sec = ok => ({ ok, status: ok ? 'ok' : 'ko', items: [] });
  const out = { work: sec(!missing.length), color: sec(true), safe: sec(false) };
  if (!missing.length) out.work.items.push({ code: 'prova.allDone', n: goals.length });
  else {
    out.work.items.push({ code: 'prova.goalMissing', label: missing[0].label, n: missing.length });
  }
  out.color.items.push({ code: 'color.given' });
  if (!missing.length) {
    if (!log.violations.length) { out.safe.ok = true; out.safe.status = 'ok'; out.safe.items.push({ code: 'safe.provaOk' }); }
    else log.violations.slice(0, 3).forEach(v => out.safe.items.push({ code: v.code, comp: v.comp }));
  } else {
    out.safe.status = 'na';
    out.safe.items.push({ code: 'safe.skipped' });
  }
  out.stars = (out.work.ok ? 1 : 0) + 1 + (out.safe.ok ? 1 : 0);
  out.pass = out.stars === 3;
  out.checks = goals.map(g => ({ id: g.id, label: g.label, ok: g.done, fail: null }));
  return out;
}
