// Motore v2: cio' che la sessione e la vista leggono da una simulazione (SPEC-MOTORE-V2, sezione 10).
// Nessuna grafica e nessun testo.

import { observe } from './sim.js';
import { flowV2 } from './flow.js';
import { partOf } from './parts.js';

export const isV2 = level => !!level && level.engine === 2;

// Protezioni che danno la corrente al circuito: con una di queste il quadro non ha la levetta della sessione.
const MAIN = new Set(['mt', 'mt3', 'sez', 'rcd', 'gu']);
export const selfPowered = level => isV2(level) && level.supply !== 'quadro' && (level.supply === 'protezioni' || level.comps.some(c => MAIN.has(c.type)));

// Comandi dell'allievo: tutti i componenti con azioni manuali (toggle o pressione), salvo il termico (riarmo) e il differenziale gestito a parte.
export const MANUAL = new Set(['sw', 'dev', 'inv', 'pb', 'pbnc', 'fungo', 'mt', 'mt3', 'sez', 'rcd']);
export const HOLD = new Set(['pb', 'pbnc']);

// 1 se il comando e' attivo (chiuso, premuto, fungo azionato).
export function controlStates(level, sim) {
  const st = {};
  level.comps.forEach(c => {
    const s = sim.parts[c.id];
    if (!s || !MANUAL.has(c.type)) return;
    st[c.id] = (HOLD.has(c.type) || c.type === 'fungo' ? s.pressed : s.on) ? 1 : 0;
  });
  return st;
}

const running = m => m === 'fwd' || m === 'rev';

// Serve far correre l'orologio? (temporizzatore attivo, motore che muove una macchina, termico che scalda)
export function needsClock(level, obs) {
  return level.comps.some(c => {
    const s = obs.parts[c.id];
    if (!s) return false;
    if (c.type === 'tmr') return s.left > 0;
    if (c.type === 'mt') return s.heat > 0 || (obs.cable && (obs.cable.heat > 0 || obs.cable.amps > obs.cable.iz)) || (!!s.in && !!s.on && !s.tripped && !!(obs.lines && obs.lines[c.id] && obs.lines[c.id].ratio > 1.45));
    if (c.type === 'ft') return !s.tripped && (s.heat > 0 || Object.values(obs.motors).some(m => m === 'hum' || (obs.overload && running(m))));
    return false;
  }) || (!!level.machine && !!obs.machine && Object.values(obs.motors).some(m => (m === 'fwd' && !obs.machine.atEnd) || (m === 'rev' && !obs.machine.atStart)));
}

// Campi dell'istantanea della sessione per un livello v2.
export function viewOf(level, sim, power) {
  const obs = observe(sim);
  const anyLoad = Object.values(obs.loads).some(v => v === 'on');
  const anyMotor = Object.values(obs.motors).some(running);
  const lit = !!(power && (anyLoad || anyMotor));
  return {
    obs,
    lit,
    litLoads: [],
    fault: obs.faults.length ? obs.faults[0].code : null,
    potential: tid => obs.potential(tid),
    controlStates: controlStates(level, sim),
    flow: flowV2(sim),
    needsClock: needsClock(level, obs),
  };
}

// Il quadro e' scattato per un guasto che nessuna protezione del livello puo' interrompere.
export const mainTripped = sim => !!sim.mainTrip;
export { partOf };
