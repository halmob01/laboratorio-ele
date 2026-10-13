import { LEVELS } from './levels.js';
import { UNITS } from './units.js';
import { FULL_TEXT } from './it.js';
import { buildFull } from '../engine/full.js';

// Il livello e la sua unità didattica (se c'è) viaggiano insieme.
export const levels = LEVELS.map(l => (UNITS[l.id] ? { ...l, unit: UNITS[l.id] } : l));
export const deriveFull = base => buildFull(base, FULL_TEXT);
