// Motore v2 (Moduli 2 e 3). Specifica: docs/SPEC-MOTORE-V2.md.
export { createSim, measure, setWires, setSupply, act, advance, rewind, observe, settle, voltage, sourcesOf, setProgram, programOf, tune, traceValue, processVars, scenarioReport, scenarioFaults } from './sim.js';
export { MODELS, newProcess, stepProcess, exposeProcess, withTuned, tunedValues, clampTune } from './process.js';
export { pidStep, newPid } from './pid.js';
export { solveDC } from './dc.js';
export { evaluateV2, runCheck, runAction, wireRoles, allowedColorsV2, traceMismatch } from './checks.js';
export { PARTS, partOf, loadVolt } from './parts.js';
export { flowV2 } from './flow.js';
export { isV2, selfPowered, viewOf, controlStates, needsClock, MANUAL, HOLD } from './view.js';
export { scan, newMem, validateProgram, sanitizeProgram } from './plc.js';
