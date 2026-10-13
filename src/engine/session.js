// Sessione di gioco: tutto lo stato e le regole del laboratorio, senza DOM e senza grafica.
// Una vista (2D, 3D, testuale, test) legge le istantanee e chiama le azioni.
//
// Nessuna frase qui dentro: i messaggi sono codici ({ code, ...parametri }),
// il testo si compone in src/content/it.js.

import { analyse, potentialOf } from './circuit.js';
import { evaluate } from './evaluate.js';

function memoryStorage() {
  let data = {};
  return { load: () => data, save: o => { data = o; } };
}

export const MODES = ['quadro', 'contatore'];

/**
 * @param {object}   cfg
 * @param {object[]} cfg.levels      livelli di base (modello, senza geometria)
 * @param {function} cfg.deriveFull  (livelloBase) => livello "dal contatore"
 * @param {object}   [cfg.storage]   { load(): object, save(object) } per i progressi
 * @param {number}   [cfg.initialLevel]
 */
export function createSession({ levels, deriveFull, storage = memoryStorage(), initialLevel = 0 }) {
  const levelCache = {};
  const wiresByKey = {};
  const statesByKey = {};
  const resultsByKey = {};
  const usageByKey = {};
  let nextWireId = 1;
  let progress = {};
  try { progress = storage.load() || {}; } catch (e) { progress = {}; }

  let levelIndex = initialLevel;
  let mode = 'quadro';
  let power = false;
  let trip = false;
  let message = null;
  let hintIndex = -1;
  let solutionShown = false;
  const listeners = new Set();

  const keyOf = (i = levelIndex, m = mode) => i + '|' + m;
  const progressKey = (n, m = mode) => n + (m === 'contatore' ? 'c' : '');
  const levelAt = (i = levelIndex, m = mode) => {
    const k = keyOf(i, m);
    return levelCache[k] || (levelCache[k] = m === 'contatore' ? deriveFull(levels[i]) : levels[i]);
  };
  const wires = () => wiresByKey[keyOf()] || (wiresByKey[keyOf()] = []);
  const states = () => statesByKey[keyOf()] || (statesByKey[keyOf()] = {});
  const usage = () => usageByKey[keyOf()] || (usageByKey[keyOf()] = { hints: 0, solution: false, checks: 0 });

  function snapshot() {
    const level = levelAt();
    const analysis = analyse(level, wires(), states());
    return {
      levelKey: keyOf(),
      level,
      levelIndex,
      levelCount: levels.length,
      mode,
      wires: wires().slice(),
      controlStates: { ...states() },
      power,
      trip,
      message,
      lit: power && analysis.lit,
      fault: analysis.fault,
      // 'F' | 'N' | 'PE' | null per il morsetto dato (indipendente da power)
      potential: tid => potentialOf(analysis, tid),
      result: resultsByKey[keyOf()] || null,
      solutionShown,
      levels: levels.map((l, i) => ({
        index: i,
        n: l.n,
        name: l.name,
        stars: progress[progressKey(l.n)] || 0,
      })),
      usage: { ...usage() },
    };
  }

  const emit = () => {
    const s = snapshot();
    listeners.forEach(f => f(s));
  };

  function resetLevelState() {
    power = false;
    trip = false;
    message = null;
    hintIndex = -1;
    solutionShown = false;
  }

  // Se la corrente e' data e c'e' un guasto, la protezione scatta.
  function applyLive() {
    const cur = analyse(levelAt(), wires(), states());
    if (power && cur.fault) {
      power = false;
      trip = true;
      message = { code: 'trip', fault: cur.fault };
    }
  }

  // Si modifica il cablaggio: la verifica precedente non vale piu'.
  function wiresChanged() {
    resultsByKey[keyOf()] = null;
    if (power) {
      power = false;
      message = { code: 'editWhileLive' };
    } else if (trip) {
      trip = false;
      message = null;
    } else {
      message = null;
    }
  }

  return {
    snapshot,
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    start() { emit(); },

    selectLevel(i) {
      if (i < 0 || i >= levels.length) return;
      levelIndex = i;
      resetLevelState();
      emit();
    },
    nextLevel() {
      this.selectLevel(levelIndex + 1);
    },
    setMode(m) {
      if (!MODES.includes(m) || m === mode) return;
      mode = m;
      resetLevelState();
      emit();
    },

    // Collega a-b con il colore dato; se il filo esiste gia' lo toglie.
    addWire(a, b, color) {
      if (!a || !b || a === b) return;
      const ws = wires();
      const k = ws.findIndex(w => (w.a === a && w.b === b) || (w.a === b && w.b === a));
      wiresChanged();
      if (k >= 0) ws.splice(k, 1);
      else ws.push({ id: nextWireId++, a, b, c: color });
      emit();
    },
    removeWire(id) {
      const ws = wires();
      const k = ws.findIndex(x => x.id === id);
      if (k < 0) return;
      wiresChanged();
      ws.splice(k, 1);
      emit();
    },
    undo() {
      if (!wires().length) return;
      wiresChanged();
      wires().pop();
      emit();
    },
    clear() {
      if (!wires().length) return;
      wiresChanged();
      wiresByKey[keyOf()] = [];
      statesByKey[keyOf()] = {};
      emit();
    },

    toggleBreaker() {
      if (power) {
        power = false;
        message = { code: 'powerOff' };
      } else {
        power = true;
        trip = false;
        message = null;
        applyLive();
        if (power) {
          const cur = analyse(levelAt(), wires(), states());
          message = cur.lit ? null : { code: 'lampDark' };
        }
      }
      emit();
    },
    toggleControl(id) {
      const st = states();
      st[id] = st[id] ? 0 : 1;
      message = null;
      applyLive();
      emit();
    },

    check() {
      const level = levelAt();
      const r = evaluate(level, wires());
      resultsByKey[keyOf()] = r;
      usage().checks++;
      const pk = progressKey(level.n);
      if ((progress[pk] || 0) < r.stars) {
        progress[pk] = r.stars;
        try { storage.save(progress); } catch (e) { /* si continua senza salvare */ }
      }
      emit();
      return r;
    },

    // Suggerimento successivo (a rotazione). Non cambia il circuito, quindi non emette.
    requestHint() {
      const hints = levelAt().hints;
      hintIndex = (hintIndex + 1) % hints.length;
      usage().hints++;
      return { index: hintIndex, total: hints.length, text: hints[hintIndex] };
    },
    toggleSolution() {
      solutionShown = !solutionShown;
      if (solutionShown) usage().solution = true;
      emit();
    },
  };
}
