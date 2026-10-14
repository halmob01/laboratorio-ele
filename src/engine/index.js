// Punto di ingresso del motore: nessuna dipendenza dal browser.
export { WIRE_COLORS, ALL_COLORS, PHASE_COLORS, allowedColors } from './wires.js';
export { COMPONENT_TYPES, contactsOf, isControl } from './components.js';
export { sourceOf, makeUF, connect, analyse, potentialOf } from './circuit.js';
export { evaluate } from './evaluate.js';
export { buildFull } from './full.js';
export { createSession, MODES } from './session.js';
export { flowOf } from './flow.js';
export { stepsState, ghostFor } from './steps.js';
export { demoFrames, blankSnap } from './demo.js';
export { migrateProgress, emptyProgress, attemptBase, totalXp, xpOf, rankOf, RANKS, XP } from './progress.js';
export { cleanName, NAME_MAX } from './profile.js';
