import { LEVELS } from './levels.js';
import { UNITS } from './units.js';
import { LEVELS_V2 } from './levels-v2.js';
import { UNITS_V2 } from './units-v2.js';
import { FULL_TEXT } from './it.js';
import { buildFull } from '../engine/full.js';
import { TRILOCALE_LEVELS, TRILOCALE_UNITS } from './trilocale.js';
import { MODULES } from './home.js';

// Il livello e la sua unità didattica (se c'è) viaggiano insieme.
const ALL_UNITS = { ...UNITS, ...UNITS_V2, ...TRILOCALE_UNITS };
const withUnit = l => (ALL_UNITS[l.id] ? { ...l, unit: ALL_UNITS[l.id] } : l);
const pool = [...LEVELS, ...TRILOCALE_LEVELS, ...LEVELS_V2];

// L'ordine di gioco ("Livello successivo", "Continua") e' quello di MODULES in home.js: il Modulo 0, poi il trilocale
// (Modulo 1), poi gli altri moduli. I livelli che non compaiono in MODULES restano in coda, nell'ordine in cui sono definiti.
const order = [
  ...MODULES[0].levels,
  ...TRILOCALE_LEVELS.map(l => l.id),
  ...MODULES.slice(1).flatMap(m => m.levels.filter(x => typeof x === 'string')),
];
const rank = id => { const i = order.indexOf(id); return i < 0 ? order.length + pool.findIndex(l => l.id === id) : i; };
export const levels = pool.slice().sort((a, b) => rank(a.id) - rank(b.id)).map(withUnit);
export const deriveFull = base => buildFull(base, FULL_TEXT);
