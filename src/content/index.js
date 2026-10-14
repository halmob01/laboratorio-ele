import { LEVELS } from './levels.js';
import { UNITS } from './units.js';
import { LEVELS_V2 } from './levels-v2.js';
import { UNITS_V2 } from './units-v2.js';
import { FULL_TEXT } from './it.js';
import { buildFull } from '../engine/full.js';
import { TRILOCALE_LEVELS, TRILOCALE_UNITS } from './trilocale.js';

// Il livello e la sua unità didattica (se c'è) viaggiano insieme.
const ALL_UNITS = { ...UNITS, ...UNITS_V2, ...TRILOCALE_UNITS };
export const levels = [...LEVELS, ...TRILOCALE_LEVELS, ...LEVELS_V2].map(l => (ALL_UNITS[l.id] ? { ...l, unit: ALL_UNITS[l.id] } : l));
export const deriveFull = base => buildFull(base, FULL_TEXT);
