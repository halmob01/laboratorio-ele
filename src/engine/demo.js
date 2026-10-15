// Fotogrammi della dimostrazione "Guarda come si fa": i fili della soluzione uno alla volta,
// poi la corrente, poi i comandi. Nessuna grafica: ogni fotogramma e' un'istantanea come quella
// della sessione (vedi benchHTML in src/ui2d/render.js).

import { analyse, potentialOf } from './circuit.js';
import { flowOf } from './flow.js';
import { isV2, selfPowered, viewOf, createSim, setSupply, runAction } from './v2/index.js';

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
// Motore v2: stessi fotogrammi, ma con la simulazione a stato. `level.demoDo` = [{ do: ['press SB1', 'release SB1'], caption }]
// elenca le azioni mostrate dopo l'alimentazione; senza, si aziona ciascun comando una volta.
function demoFramesV2(level, captions) {
  // livelli in cui l'allievo scrive il programma: la dimostrazione usa quello di soluzione
  const simLevel = level.solutionPrograms ? { ...level, comps: level.comps.map(c => (c.type === 'plc' && level.solutionPrograms[c.id] ? { ...c, program: level.solutionPrograms[c.id] } : c)) } : level;
  const wires = level.solution.map(([a, b, c], i) => ({ id: i + 1, a, b, c }));
  const self = selfPowered(level);
  const snapOf = (sim, w, power, caption, newWire) => ({
    caption,
    newWire,
    snap: {
      level, wires: w, power, trip: false, message: null, flowVisible: true, solutionShown: false, guide: null,
      selfPowered: self, overload: !!sim.overload, ...viewOf(level, sim, power),
    },
  });
  const out = [];
  for (let k = 1; k <= wires.length; k++) {
    const w = wires.slice(0, k);
    const sim = createSim(simLevel, w);
    if (!self) setSupply(sim, false);
    out.push(snapOf(sim, w, self, (captions.wires || [])[k - 1] || '', k));
  }
  const sim = createSim(simLevel, wires);
  setSupply(sim, true);
  out.push(snapOf(sim, wires, true, captions.power || '', null));
  const steps = level.demoDo || (level.controls || []).map((id, i) => {
    const c = level.comps.find(x => x.id === id);
    const hold = c && ['pb', 'pbnc'].includes(c.type);
    return { do: hold ? ['press ' + id, 'release ' + id] : ['toggle ' + id], say: (captions.controls || [])[i] || '' };
  });
  steps.forEach(st => {
    st.do.forEach(a => runAction(sim, a));
    out.push(snapOf(sim, wires, true, st.say || '', null));
  });
  return out;
}

export function demoFrames(level, captions = {}) {
  if (isV2(level)) return demoFramesV2(level, captions);
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
  if (isV2(level)) {
    const self = selfPowered(level), sim = createSim(level, []);
    if (!self) setSupply(sim, false);
    return { level, wires: [], power: self, trip: false, message: null, flowVisible: false, solutionShown: false, guide: null, selfPowered: self, overload: false, ...viewOf(level, sim, self) };
  }
  return frame(level, [], false, {}, '', null).snap;
}
