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
  // fungo di emergenza: un contatto NC (1-2) o due (con i morsetti 3-4 il comando e' a due canali)
  fungo: { contacts: (c, s) => pole(!s.pressed, c.terms && c.terms['3'] ? [['1', '2'], ['3', '4']] : [['1', '2']]), init: () => ({ pressed: false }), actions: ['toggle'] },
  // portella o barriera con due contatti NC (due canali): aperta, i due contatti si aprono
  port: { contacts: (c, s) => pole(!s.open, [['1', '2'], ['3', '4']]), init: () => ({ open: false }), actions: ['toggle'] },
  // relè di sicurezza (E6): alimentato in A1-A2; i due canali d'ingresso S12 e S22 devono avere la fase, il riarmo R si da' con un impulso.
  // Le uscite 13-14 e 23-24 si chiudono solo dopo un riarmo valido e si riaprono appena un canale cade. Vedi sim.js, settle.
  rs: { coil: ['A1', 'A2'], contacts: (c, s) => pole(s.on, [['13', '14'], ['23', '24']]), init: () => ({ on: false, coil: false, rLow: false, disc: false }) },

  // protezioni e sezionamento (chiusi all'inizio, salvo `init: 0`)
  // `in` (portata, A) e `ratings` (portate tra cui scegliere) rendono il sovraccarico simulato (E1): vedi sim.js, lineCurrent.
  mt: { protect: 'corto', contacts: (c, s) => pole(s.on, [['1', '2'], ['N1', 'N2']]), poles: { F: ['1', '2'], N: ['N1', 'N2'] }, init: c => ({ on: c.init !== 0, tripped: false, in: c.in || null, heat: 0 }), actions: ['toggle', 'rate'] },
  mt3: { protect: 'corto', contacts: (c, s) => pole(s.on, [['1', '2'], ['3', '4'], ['5', '6']]), init: c => ({ on: c.init !== 0, tripped: false }), actions: ['toggle'] },
  sez: { contacts: (c, s) => pole(s.on, [['1', '2'], ['3', '4'], ['5', '6']]), init: c => ({ on: c.init !== 0, tripped: false }), actions: ['toggle'] },
  rcd: { protect: 'terra', contacts: (c, s) => pole(s.on, [['1', '2'], ['N1', 'N2']]), poles: { F: ['1', '2'], N: ['N1', 'N2'] }, init: c => ({ on: c.init !== 0, tripped: false }), actions: ['toggle', 'test'] },

  // dispersione verso terra (guasto d'isolamento): non ha morsetti. `at` e' il punto del circuito dove l'isolante cede, `levels` le correnti disperse (mA) tra cui scegliere
  gu: { contacts: () => [], init: c => ({ on: false, mA: (c.levels || [30])[0] }), actions: ['toggle', 'rate'] },

  // relè e contattori: la bobina e' un carico, il resto sono contatti
  ri: { coil: ['A1', 'A2'], contacts: (c, s) => pole(s.on, [['1', '2']]), init: () => ({ on: false, coil: false }) },
  // relè con contatto di scambio: 11 comune, 12 chiuso a riposo (NC), 14 chiuso a bobina eccitata (NA)
  // `welded` (guasto): i contatti restano incollati in posizione di lavoro anche a bobina spenta
  rel: { coil: ['A1', 'A2'], contacts: (c, s) => (s.on ? [['11', '14']] : [['11', '12']]), init: () => ({ on: false, coil: false, welded: false }), actions: ['weld'] },
  tmr: { coil: ['A1', 'A2'], contacts: (c, s) => pole(s.left > 0, [['1', '2']]), init: () => ({ left: 0, coil: false }) },
  km: {
    coil: ['A1', 'A2'],
    contacts: (c, s) => (s.on ? [['1', '2'], ['3', '4'], ['5', '6'], ['13', '14']] : [['21', '22']]),
    power: [['1', '2'], ['3', '4'], ['5', '6']],
    init: () => ({ on: false, coil: false, welded: false }),
    actions: ['weld'],
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
