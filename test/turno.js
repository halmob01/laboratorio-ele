// Gioca un turno a guasti (level.scenario) sul motore, senza la sessione: usato dai test di c44 e c45.
// Le riparazioni sono quelle scritte nel livello (`fix` di ogni guasto), fatte `react(f)` secondi dopo che il guasto e' scattato,
// un'azione al secondo. Il tempo avanza a passi di un secondo: le prove non dipendono dalla velocita' del calcolo.

import { createSim, advance, act, scenarioReport } from '../src/engine/v2/index.js';

export const wiresOf = level => level.solution.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
export const withSolutionPrograms = level => ({ ...level, comps: level.comps.map(c => (c.type === 'plc' && level.solutionPrograms && level.solutionPrograms[c.id] ? { ...c, program: level.solutionPrograms[c.id] } : c)) });

// start: azioni all'accensione (riarmo, marcia), una al secondo. react: f => secondi di attesa prima di riparare (null = non si ripara).
export function playShift(level, { start = [], react = () => 15, extra = 2 } = {}) {
  const sim = createSim(withSolutionPrograms(level), wiresOf(level));
  const todo = start.map((d, k) => ({ at: k + 1, do: d }));
  const planned = new Set();
  for (let t = 1; t <= level.scenario.duration + extra; t++) {
    advance(sim, 1);
    scenarioReport(sim).faults.forEach(f => {
      if (f.firedAt === null || planned.has(f.id)) return;
      planned.add(f.id);
      const wait = react(level.scenario.faults.find(x => x.id === f.id));
      if (wait === null) return;
      level.scenario.faults.find(x => x.id === f.id).fix.forEach((d, k) => todo.push({ at: Math.ceil(f.firedAt) + wait + k, do: d }));
    });
    todo.sort((a, b) => a.at - b.at);
    while (todo.length && todo[0].at <= sim.t) { const [a, x] = todo.shift().do.split(/\s+/); act(sim, a, x); }
  }
  return sim;
}
