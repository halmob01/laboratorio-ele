// Motore v2 (Moduli 2 e 3). Specifica: docs/SPEC-MOTORE-V2.md.
export { createSim, setWires, setSupply, act, advance, rewind, observe, settle, voltage, sourcesOf } from './sim.js';
export { evaluateV2, runCheck, runAction, wireRoles, allowedColorsV2 } from './checks.js';
export { PARTS, partOf, loadVolt } from './parts.js';
export { flowV2 } from './flow.js';
export { isV2, selfPowered, viewOf, controlStates, needsClock, MANUAL, HOLD } from './view.js';
