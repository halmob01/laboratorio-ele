// Motore v2: tipi di componente. Solo logica elettrica, nessuna geometria.
// Lo stato di ogni componente e' un oggetto (vedi init). Specifica: docs/SPEC-MOTORE-V2.md, sezione 4.

import { COMPONENT_TYPES } from '../components.js';

const v1 = type => (c, s) => COMPONENT_TYPES[type].contacts(c, s.on ? 1 : 0);
const pole = (on, pairs) => (on ? pairs : []);

export const PARTS = {
  quadro: { contacts: () => [] },
  cont: { contacts: () => [] },

  // comandi manuali
  sw: { contacts: v1('sw'), init: c => ({ on: !!c.init }), actions: ['toggle'] },
  dev: { contacts: v1('dev'), init: c => ({ on: !!c.init }), actions: ['toggle'] },
  inv: { contacts: v1('inv'), init: c => ({ on: !!c.init }), actions: ['toggle'] },
  pb: { contacts: (c, s) => pole(s.pressed, [['3', '4']]), init: () => ({ pressed: false }), actions: ['press', 'release'] },
  pbnc: { contacts: (c, s) => pole(!s.pressed, [['1', '2']]), init: () => ({ pressed: false }), actions: ['press', 'release'] },
  fungo: { contacts: (c, s) => pole(!s.pressed, [['1', '2']]), init: () => ({ pressed: false }), actions: ['toggle'] },

  // protezioni e sezionamento (chiusi all'inizio, salvo `init: 0`)
  // `in` (portata, A) e `ratings` (portate tra cui scegliere) rendono il sovraccarico simulato (E1): vedi sim.js, lineCurrent.
  mt: { protect: 'corto', contacts: (c, s) => pole(s.on, [['1', '2'], ['N1', 'N2']]), poles: { F: ['1', '2'], N: ['N1', 'N2'] }, init: c => ({ on: c.init !== 0, tripped: false, in: c.in || null, heat: 0 }), actions: ['toggle', 'rate'] },
  mt3: { protect: 'corto', contacts: (c, s) => pole(s.on, [['1', '2'], ['3', '4'], ['5', '6']]), init: c => ({ on: c.init !== 0, tripped: false }), actions: ['toggle'] },
  sez: { contacts: (c, s) => pole(s.on, [['1', '2'], ['3', '4'], ['5', '6']]), init: c => ({ on: c.init !== 0, tripped: false }), actions: ['toggle'] },
  rcd: { protect: 'terra', contacts: (c, s) => pole(s.on, [['1', '2'], ['N1', 'N2']]), poles: { F: ['1', '2'], N: ['N1', 'N2'] }, init: c => ({ on: c.init !== 0, tripped: false }), actions: ['toggle', 'test'] },

  // relè e contattori: la bobina e' un carico, il resto sono contatti
  ri: { coil: ['A1', 'A2'], contacts: (c, s) => pole(s.on, [['1', '2']]), init: () => ({ on: false, coil: false }) },
  // relè con contatto di scambio: 11 comune, 12 chiuso a riposo (NC), 14 chiuso a bobina eccitata (NA)
  rel: { coil: ['A1', 'A2'], contacts: (c, s) => (s.on ? [['11', '14']] : [['11', '12']]), init: () => ({ on: false, coil: false }) },
  tmr: { coil: ['A1', 'A2'], contacts: (c, s) => pole(s.left > 0, [['1', '2']]), init: () => ({ left: 0, coil: false }) },
  km: {
    coil: ['A1', 'A2'],
    contacts: (c, s) => (s.on ? [['1', '2'], ['3', '4'], ['5', '6'], ['13', '14']] : [['21', '22']]),
    power: [['1', '2'], ['3', '4'], ['5', '6']],
    init: () => ({ on: false, coil: false }),
  },
  ft: {
    contacts: (c, s) => [['1', '2'], ['3', '4'], ['5', '6']].concat(s.tripped ? [['97', '98']] : [['95', '96']]),
    power: [['1', '2'], ['3', '4'], ['5', '6']],
    init: () => ({ tripped: false, heat: 0 }),
    actions: ['reset'],
  },
  fc: { contacts: (c, s) => (s.act ? [['3', '4']] : [['1', '2']]), init: () => ({ act: false }) },

  // sorgente derivata
  trafo: { contacts: () => [], primary: ['1', '2'], secondary: ['3', '4'] },

  // carichi
  lamp: { load: ['A', 'B'], contacts: () => [] },
  spia: { load: ['X1', 'X2'], contacts: () => [] },
  presa: { load: ['L', 'N'], contacts: () => [] },
  bell: { load: ['1', '2'], volt: 12, contacts: () => [] },
  motor3: { motor: ['U', 'V', 'W'], contacts: () => [] },
};

// Componenti i cui contatti di potenza si considerano chiusi per stabilire il ruolo dei fili (colori).
export const POWER_PATH = new Set(['mt', 'mt3', 'sez', 'rcd', 'km', 'ft']);

export const partOf = c => PARTS[c.type] || PARTS.quadro;
export const loadVolt = c => c.volt || partOf(c).volt || 230;
