// Fotogrammi della dimostrazione "Guarda come si fa": i fili della soluzione uno alla volta,
// poi la corrente, poi i comandi. Nessuna grafica: ogni fotogramma e' un'istantanea come quella
// della sessione (vedi benchHTML in src/ui2d/render.js).

import { analyse, potentialOf } from './circuit.js';
import { flowOf } from './flow.js';

function frame(level, wires, power, states, caption, newWire) {
  const an = analyse(level, wires, states);
  return {
    caption,
    newWire,                       // id del filo appena aggiunto (per l'animazione), o null
    snap: {
      level,
      wires,
      power,
      trip: false,
      lit: power && an.lit,
      litLoads: an.litLoads.map(x => power && x),
      potential: tid => potentialOf(an, tid),
      controlStates: { ...states },
      flow: flowOf(level, wires, states),
      flowVisible: true,
      solutionShown: false,
      guide: null,
      message: null,
    },
  };
}

/**
 * @param {object} level     livello con `solution` e `controls`
 * @param {{wires?:string[], power?:string, controls?:string[]}} captions
 */
export function demoFrames(level, captions = {}) {
  const sol = level.solution.map(([a, b, c], i) => ({ id: i + 1, a, b, c }));
  const out = [];
  for (let k = 1; k <= sol.length; k++) {
    out.push(frame(level, sol.slice(0, k), false, {}, (captions.wires || [])[k - 1] || '', k));
  }
  out.push(frame(level, sol, true, {}, captions.power || '', null));
  // Comandi: si aziona ciascuno in sequenza e si lascia acceso, cosi' si vede la luce cambiare.
  const states = {};
  (level.controls || []).forEach((id, i) => {
    states[id] = 1;
    out.push(frame(level, sol, true, states, (captions.controls || [])[i] || '', null));
  });
  return out;
}

/** Istantanea "vuota" (nessun filo, quadro spento) per disegnare il banco in una pagina di lezione. */
export function blankSnap(level) {
  return frame(level, [], false, {}, '', null).snap;
}
