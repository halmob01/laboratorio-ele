import { LEVELS } from './levels.js';
import { FULL_TEXT } from './it.js';
import { buildFull } from '../engine/full.js';

export const levels = LEVELS;
export const deriveFull = base => buildFull(base, FULL_TEXT);
