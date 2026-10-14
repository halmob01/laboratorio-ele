// Sessione di gioco: tutto lo stato e le regole del laboratorio, senza DOM e senza grafica.
// Una vista (2D, 3D, testuale, test) legge le istantanee e chiama le azioni.
//
// Nessuna frase qui dentro: i messaggi sono codici ({ code, ...parametri }),
// il testo si compone in src/content/it.js.
//
// Un livello puo' avere un'unita' didattica (level.unit): lezione a pagine (la previsione e' una pagina),
// cablaggio con i passi, sfida guasto. La sessione tiene la fase corrente; i testi sono nei contenuti.
// Un livello si puo' anche aprire "in verifica" (prova di salto): niente lezione, niente aiuti.

import { analyse, potentialOf } from './circuit.js';
import { ALL_COLORS } from './wires.js';
import { evaluate } from './evaluate.js';
import { flowOf } from './flow.js';
import { stepsState, ghostFor } from './steps.js';
import { attemptBase, migrateProgress, rankOf, totalXp, xpOf } from './progress.js';
import { createSim, setSupply, act, advance, rewind as rewindSim, evaluateV2, isV2, selfPowered, viewOf, HOLD } from './v2/index.js';

function memoryStorage() {
  let data = {};
  return { load: () => data, save: o => { data = o; } };
}

export const MODES = ['quadro', 'contatore'];
export const PLAY_MODES = ['apprendimento', 'verifica'];

/**
 * @param {object}   cfg
 * @param {object[]} cfg.levels      livelli di base (modello, senza geometria)
 * @param {function} cfg.deriveFull  (livelloBase) => livello "dal contatore"
 * @param {object}   [cfg.storage]   { load(): object, save(object) } per i progressi
 * @param {number|string} [cfg.initialLevel]  indice o id del livello iniziale
 */
export function createSession({ levels, deriveFull, storage = memoryStorage(), initialLevel = 0 }) {
  const levelCache = {};
  const wiresByKey = {};
  const statesByKey = {};
  const resultsByKey = {};
  const usageByKey = {};
  const unitByKey = {};
  const operatedByKey = {};   // comandi azionati con il quadro acceso, per i passi
  const simsByKey = {};       // motore v2: simulazione con stato (pulsanti, relè, tempo), una per livello e modalita'
  let nextWireId = 1;
  let progress;
  try { progress = migrateProgress(storage.load(), levels); } catch (e) { progress = migrateProgress(null, levels); }

  const indexOf = x => (typeof x === 'number' ? x : levels.findIndex(l => l.id === x));
  let levelIndex = Math.min(levels.length - 1, Math.max(0, indexOf(initialLevel)));
  let mode = 'quadro';
  let playMode = 'apprendimento';
  let flowOnDemand = false;
  let power = false;
  let trip = false;
  let message = null;
  let hintIndex = -1;
  let solutionShown = false;
  const listeners = new Set();

  const keyOf = (i = levelIndex, m = mode) => i + '|' + m;
  const progressKey = (id, m = mode) => id + (m === 'contatore' ? 'c' : '');
  const levelAt = (i = levelIndex, m = mode) => {
    const k = keyOf(i, m);
    return levelCache[k] || (levelCache[k] = m === 'contatore' ? deriveFull(levels[i]) : levels[i]);
  };
  const wires = () => wiresByKey[keyOf()] || (wiresByKey[keyOf()] = []);
  const states = () => statesByKey[keyOf()] || (statesByKey[keyOf()] = {});
  const usage = () => usageByKey[keyOf()] || (usageByKey[keyOf()] = { hints: 0, solution: false, checks: 0 });
  const startPhase = (i = levelIndex) => {
    const l = levels[i];
    const b = progress.best[progressKey(l.id)];
    const seen = progress.stars[progressKey(l.id)] > 0 || (b && b.pred);
    return l.unit && playMode === 'apprendimento' && !seen ? 'lesson' : 'build';
  };
  // La fase dell'unita' vale per il livello, qualunque sia il punto di partenza (quadro o contatore).
  const unitState = () =>
    unitByKey[levelIndex] || (unitByKey[levelIndex] = { phase: startPhase(), page: 0, pred: null, diag: null, faultSolved: false });
  // Uscendo dalla sfida guasto o da una prova di salto, la fase riparte da capo.
  const dropUnitState = () => { delete unitByKey[levelIndex]; };
  const save = () => { try { storage.save(progress); } catch (e) { /* si continua senza salvare */ } };
  const record = () => progress.best[progressKey(levelAt().id)] || (progress.best[progressKey(levelAt().id)] = { base: 0, pred: false, fault: false, skipped: false });

  const operated = () => operatedByKey[keyOf()] || (operatedByKey[keyOf()] = []);

  // Motore v2: la simulazione si crea alla prima richiesta e si butta a ogni modifica dei fili.
  const v2 = (level = levelAt()) => isV2(level);
  const dropSim = () => { delete simsByKey[keyOf()]; };
  function simFor() {
    const k = keyOf();
    if (!simsByKey[k]) {
      const sim = createSim(levelAt(), wires());
      if (sim.supply !== power) setSupply(sim, power);
      simsByKey[k] = sim;
    }
    return simsByKey[k];
  }
  // Dopo ogni azione: se il quadro e' scattato per un guasto senza protezione, la corrente cade.
  function applyLive2() {
    const sim = simFor();
    if (sim.mainTrip && power) {
      const cause = sim.mainTripCause === 'faseterra' || sim.mainTripCause === 'terra' ? 'terra' : 'corto';
      power = false;
      trip = true;
      message = { code: 'trip', fault: cause };
    }
  }
  // v1 e v2 danno al resto della sessione la stessa forma di analisi.
  const analysisOf = (level = levelAt()) => {
    if (!v2(level)) return analyse(level, wires(), states());
    const v = viewOf(level, simFor(), power);
    return { lit: v.lit, litLoads: [], anyLit: v.lit, fault: v.fault, v2: v };
  };
  const currentPage = () => {
    const l = levelAt();
    return l.unit && l.unit.lesson.pages[unitState().page || 0];
  };

  function flowVisible(level) {
    if (playMode !== 'apprendimento') return false;
    if (level.flow === 'always') return true;
    if (level.flow === 'onDemand') return flowOnDemand;
    return false;
  }

  // Passi dell'esercizio e tratteggio: solo in apprendimento, durante il cablaggio.
  function stepsPart(level, phase) {
    const u = level.unit;
    if (!u || !u.steps || playMode !== 'apprendimento' || phase === 'lesson') return { steps: null, ghost: null };
    const st = stepsState(u.steps, wires(), { power, operated: operated(), result: resultsByKey[keyOf()] || null, fault: !!analysisOf(level).fault });
    const cur = st.current === null ? null : u.steps[st.current];
    const ghost = phase === 'build' && u.support === 'guidato' && cur ? ghostFor(cur, wires()) : null;
    return { steps: { list: u.steps, done: st.done, current: st.current }, ghost };
  }

  function snapshot() {
    const level = levelAt();
    const is2 = v2(level);
    const analysis = is2 ? null : analyse(level, wires(), states());
    const view2 = is2 ? viewOf(level, simFor(), power) : null;
    const us = level.unit ? unitState() : null;
    const total = totalXp(progress);
    const phase = us ? us.phase : 'build';
    return {
      levelKey: keyOf(),
      level,
      levelIndex,
      levelCount: levels.length,
      mode,
      playMode,
      wires: wires().slice(),
      controlStates: is2 ? view2.controlStates : { ...states() },
      power,
      trip,
      message,
      lit: is2 ? view2.lit : power && analysis.lit,
      litLoads: is2 ? [] : analysis.litLoads.map(x => power && x),
      fault: is2 ? view2.fault : analysis.fault,
      // 'F' | 'N' | 'PE' | null per il morsetto dato (indipendente da power); in v2 anche 'L1', 'L2', 'L3' e i secondari dei trasformatori
      potential: is2 ? view2.potential : tid => potentialOf(analysis, tid),
      // dove passa la corrente (vedi flow.js); la vista lo mostra solo se flowVisible
      flow: is2 ? view2.flow : flowOf(level, wires(), states()),
      // solo livelli v2: osservazione (carichi, motori, bobine, protezioni scattate, macchina), orologio, alimentazione propria
      obs: is2 ? view2.obs : null,
      needsClock: is2 ? view2.needsClock : false,
      selfPowered: is2 ? selfPowered(level) : false,
      overload: is2 ? !!simFor().overload : false,
      flowVisible: flowVisible(level),
      result: resultsByKey[keyOf()] || null,
      solutionShown,
      unit: us && {
        phase,
        page: us.page || 0,
        pages: level.unit.lesson.pages.length,
        pageData: phase === 'lesson' ? level.unit.lesson.pages[us.page || 0] : null,
        pred: us.pred && { ...us.pred },
        diag: us.diag && { ...us.diag },
        faultSolved: us.faultSolved,
        hasFault: !!level.unit.fault,
        summary: level.unit.summary || [],
        support: level.unit.support || 'passi',
      },
      ...stepsPart(level, phase),
      levels: levels.map((l, i) => {
        const pk = progressKey(l.id);
        const rec = progress.best[pk];
        const stars = progress.stars[pk] || 0;
        const status = rec && rec.skipped && stars >= 3 ? 'saltato' : stars >= 3 ? 'completato' : (stars > 0 || rec) ? 'in corso' : 'nuovo';
        return { index: i, id: l.id, code: l.code, n: l.n, name: l.name, title: l.title, goal: l.goal, blurb: l.blurb, stars, status, xp: xpOf(rec), hasUnit: !!l.unit };
      }),
      last: progress.last,
      player: { xp: total, rank: rankOf(total) },
      usage: { ...usage() },
    };
  }

  // Lavoro in corso (fili, comandi, punto della lezione): si salva a ogni cambiamento e si ricarica
  // all'apertura, cosi' una pagina ricaricata a meta' livello non fa perdere niente.
  // Formato: { v: 1, w: { '<idLivello>|<modalita'>': { wires, states } }, u: { '<idLivello>': { phase, page, pred } } }
  // Non si salvano le prove di salto ne' la sfida guasto. Al ritorno tutto viene riconvalidato.
  const MAX_WORK_WIRES = 200;
  let work = { v: 1, w: {}, u: {} };
  let lastWorkStr = '';
  const workKeyOf = (i, m) => levels[i].id + '|' + m;
  function saveWork() {
    if (!storage.saveWork || playMode === 'verifica') return;
    const l = levels[levelIndex];
    const u = unitByKey[levelIndex];
    if (u && u.phase === 'fault') return;
    const ws = (wiresByKey[keyOf()] || []).map(x => ({ id: x.id, a: x.a, b: x.b, c: x.c }));
    const st = { ...(statesByKey[keyOf()] || {}) };
    if (ws.length || Object.keys(st).length) work.w[workKeyOf(levelIndex, mode)] = { wires: ws, states: st };
    else delete work.w[workKeyOf(levelIndex, mode)];
    if (u && l.unit) {
      if (u.phase === 'lesson' && !u.page) delete work.u[l.id];
      else work.u[l.id] = { phase: u.phase, page: u.page || 0, pred: u.pred ? { option: u.pred.option, correct: !!u.pred.correct } : null };
    }
    let str;
    try { str = JSON.stringify(work); } catch (e) { return; }
    if (str === lastWorkStr) return;   // niente scritture inutili
    lastWorkStr = str;
    try { storage.saveWork(work); } catch (e) { /* si continua senza salvare */ }
  }
  function restoreWork() {
    if (!storage.loadWork) return;
    let data;
    try { data = storage.loadWork(); } catch (e) { return; }
    const isObj = o => o && typeof o === 'object' && !Array.isArray(o);
    if (!isObj(data) || !isObj(data.w) && !isObj(data.u)) return;
    levels.forEach((l, i) => {
      MODES.forEach(m => {
        const e = isObj(data.w) ? data.w[workKeyOf(i, m)] : null;
        if (!isObj(e) || (m === 'contatore' && l.quadroOnly)) return;
        const lv = levelAt(i, m);
        const known = new Set(lv.comps.flatMap(c => Object.keys(c.terms).map(t => c.id + '.' + t)));
        const seen = new Set();
        const ws = [];
        (Array.isArray(e.wires) ? e.wires.slice(0, MAX_WORK_WIRES) : []).forEach(x => {
          if (!isObj(x) || !known.has(x.a) || !known.has(x.b) || x.a === x.b || !ALL_COLORS.includes(x.c)) return;
          const k = [x.a, x.b].sort().join('~');
          if (seen.has(k)) return;
          seen.add(k);
          ws.push({ id: nextWireId++, a: x.a, b: x.b, c: x.c });
        });
        const st = {};
        if (isObj(e.states)) lv.controls.forEach(id => { if (e.states[id] === 1) st[id] = 1; });
        wiresByKey[keyOf(i, m)] = ws;
        statesByKey[keyOf(i, m)] = st;
        if (ws.length || Object.keys(st).length) work.w[workKeyOf(i, m)] = { wires: ws.map(x => ({ ...x })), states: { ...st } };
      });
      const e = isObj(data.u) ? data.u[l.id] : null;
      if (!isObj(e) || !l.unit || !['lesson', 'build', 'done'].includes(e.phase)) return;
      const pages = l.unit.lesson.pages;
      let page = Math.max(0, Math.min(pages.length - 1, Math.floor(Number(e.page) || 0)));
      // la previsione si riconvalida sul contenuto: senza una risposta valida non si va oltre la sua pagina
      const pi = pages.findIndex(pg => pg.type === 'previsione');
      let pred = null;
      if (pi >= 0 && isObj(e.pred) && typeof e.pred.option === 'string' && pages[pi].options.some(o => o.id === e.pred.option)) {
        pred = { option: e.pred.option, correct: pages[pi].correct === e.pred.option };
      }
      if (pi >= 0 && !pred && page > pi) page = pi;
      let phase = e.phase;
      let result = null;
      if (phase === 'done') {
        const ws = wiresByKey[keyOf(i, 'quadro')] || [];
        if (!(progress.stars[progressKey(l.id, 'quadro')] > 0) || !ws.length) phase = 'build';
        else result = isV2(levelAt(i, 'quadro')) ? evaluateV2(levelAt(i, 'quadro'), ws) : evaluate(levelAt(i, 'quadro'), ws);
        if (result && !result.pass) { phase = 'build'; result = null; }
      }
      unitByKey[i] = { phase, page, pred, diag: null, faultSolved: false };
      if (result) resultsByKey[keyOf(i, 'quadro')] = result;
      work.u[l.id] = { phase, page, pred };
    });
    try { lastWorkStr = JSON.stringify(work); } catch (e) { lastWorkStr = ''; }
  }

  // Uscendo dalla sfida guasto (con "Esci", cambiando livello o modalita') l'impianto riuscito torna com'era.
  function exitFault() {
    const us = unitByKey[levelIndex];
    if (!us || us.phase !== 'fault') return;
    us.phase = 'done';
    us.diag = null;
    if (us.before) {
      wiresByKey[keyOf(levelIndex, 'quadro')] = us.before.wires;
      statesByKey[keyOf(levelIndex, 'quadro')] = us.before.states;
      resultsByKey[keyOf(levelIndex, 'quadro')] = us.before.result;
      us.before = null;
    }
  }
  // La prova di salto riparte da zero: il lavoro dell'apprendimento si mette da parte e si rimette all'uscita.
  const verifyStash = {};
  function stashForVerify() {
    const k = keyOf();
    verifyStash[levelIndex] = { key: k, wires: (wiresByKey[k] || []).slice(), states: { ...(statesByKey[k] || {}) }, result: resultsByKey[k] || null, usage: usageByKey[k] || null, unit: unitByKey[levelIndex] || null };
  }
  function unstashFromVerify() {
    const st = verifyStash[levelIndex];
    if (!st) { dropUnitState(); return; }
    wiresByKey[st.key] = st.wires; statesByKey[st.key] = st.states; resultsByKey[st.key] = st.result;
    if (st.usage) usageByKey[st.key] = st.usage; else delete usageByKey[st.key];
    if (st.unit) unitByKey[levelIndex] = st.unit; else delete unitByKey[levelIndex];
    delete verifyStash[levelIndex];
  }

  const emit = () => {
    const s = snapshot();
    saveWork();
    listeners.forEach(f => f(s));
  };

  function resetLevelState() {
    dropSim();
    power = selfPowered(levelAt());
    trip = false;
    message = null;
    hintIndex = -1;
    solutionShown = false;
    flowOnDemand = false;
  }

  // Se la corrente e' data e c'e' un guasto, la protezione scatta.
  function applyLive() {
    if (v2()) { applyLive2(); return; }
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
    dropSim();
    if (selfPowered(levelAt())) {
      power = true;
      trip = false;
      message = null;
    } else if (power) {
      power = false;
      message = { code: 'editWhileLive' };
    } else if (trip) {
      trip = false;
      message = null;
    } else {
      message = null;
    }
  }

  // Motore v2 con corrente propria: un filo nuovo puo' fare scattare subito il quadro.
  const afterEdit = () => { if (v2()) { dropSim(); applyLive2(); } };

  const inBuildOrFault = () => {
    const l = levelAt();
    return !l.unit || unitState().phase !== 'lesson';
  };

  return {
    snapshot,
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    start() { restoreWork(); power = selfPowered(levelAt()); emit(); },

    // Stato di un livello qualsiasi (non solo quello aperto), per chi disegna piu' circuiti insieme (la casa).
    // `lit`: la lampada si accende con i fili e i comandi attuali, ignorando il quadro; `power` vale solo per il livello aperto.
    peek(x) {
      const i = indexOf(x);
      if (i < 0 || i >= levels.length) return null;
      const lv = levelAt(i, 'quadro');
      if (isV2(lv)) return { id: levels[i].id, lit: false, wired: (wiresByKey[keyOf(i, 'quadro')] || []).length, controls: {}, passed: (progress.stars[levels[i].id] || 0) > 0, open: i === levelIndex, power: false };
      const k = keyOf(i, 'quadro');
      const w = wiresByKey[k] || [], st = statesByKey[k] || {};
      const id = levels[i].id;
      const passed = (progress.stars[id] || 0) > 0;
      let wires = w, controls = { ...st };
      // Dopo un ricaricamento i fili non ci sono piu': un circuito gia' verificato si mostra con la sua soluzione
      // e i comandi nella prima posizione che accende la luce.
      if (passed && !w.length && lv.solution) {
        wires = lv.solution.map(([a, b, c], n) => ({ id: n + 1, a, b, c }));
        const ctl = lv.controls || [];
        for (let m = 0; m < 1 << ctl.length; m++) {
          const t = {};
          ctl.forEach((c, j) => (t[c] = (m >> j) & 1));
          if (analyse(lv, wires, t).lit) { controls = t; break; }
        }
      }
      const a = analyse(lv, wires, controls);
      return { id, lit: !!a.lit, wired: wires.length, controls, passed, open: i === levelIndex, power: i === levelIndex && power };
    },

    // Apre un livello (indice o id). Con { verify: true } e' una prova di salto: senza lezione e senza aiuti.
    selectLevel(x, opts = {}) {
      const i = indexOf(x);
      if (i < 0 || i >= levels.length) return;
      // si lascia il livello corrente: la sfida guasto si chiude e la prova di salto restituisce il lavoro
      exitFault();
      const wasVerify = playMode === 'verifica';
      if (wasVerify) unstashFromVerify();
      levelIndex = i;
      if (levels[i].quadroOnly) mode = 'quadro';
      playMode = opts.verify ? 'verifica' : 'apprendimento';
      resetLevelState();
      if (opts.verify) {
        // si riparte da zero, anche se il livello era stato cablato prima
        stashForVerify();
        wiresByKey[keyOf()] = [];
        statesByKey[keyOf()] = {};
        resultsByKey[keyOf()] = null;
        usageByKey[keyOf()] = { hints: 0, solution: false, checks: 0 };
        unitByKey[levelIndex] = { phase: 'build', page: 0, pred: null, diag: null, faultSolved: false };
      }
      progress.last = levels[i].id;
      save();
      emit();
    },
    nextLevel() {
      this.selectLevel(levelIndex + 1);
    },
    setMode(m) {
      if (!MODES.includes(m) || m === mode || (levels[levelIndex].quadroOnly && m !== 'quadro')) return;
      exitFault();
      if (playMode === 'verifica') unstashFromVerify();
      mode = m;
      const us = unitByKey[levelIndex];
      if (us && us.phase === 'lesson' && m !== 'quadro') us.phase = 'build';
      playMode = 'apprendimento';
      resetLevelState();
      emit();
    },

    // Collega a-b con il colore dato; se il filo esiste gia' lo toglie.
    addWire(a, b, color) {
      if (!a || !b || a === b) return;
      if (!inBuildOrFault()) return;
      const ws = wires();
      const k = ws.findIndex(w => (w.a === a && w.b === b) || (w.a === b && w.b === a));
      wiresChanged();
      if (k >= 0) ws.splice(k, 1);
      else ws.push({ id: nextWireId++, a, b, c: color });
      afterEdit();
      emit();
    },
    removeWire(id) {
      if (!inBuildOrFault()) return;
      const ws = wires();
      const k = ws.findIndex(x => x.id === id);
      if (k < 0) return;
      wiresChanged();
      ws.splice(k, 1);
      afterEdit();
      emit();
    },
    undo() {
      if (!wires().length || !inBuildOrFault()) return;
      wiresChanged();
      wires().pop();
      afterEdit();
      emit();
    },
    clear() {
      if (!wires().length || !inBuildOrFault()) return;
      wiresChanged();
      wiresByKey[keyOf()] = [];
      statesByKey[keyOf()] = {};
      emit();
    },

    toggleBreaker() {
      if (v2()) {
        if (selfPowered(levelAt())) return;
        const sim = simFor();
        power = !power;
        trip = false;
        message = power ? null : { code: 'powerOff' };
        setSupply(sim, power);
        if (power) {
          applyLive2();
          if (power) message = viewOf(levelAt(), sim, power).lit ? null : { code: 'lampDark' };
        }
        emit();
        return;
      }
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
          message = cur.anyLit ? null : { code: 'lampDark' };
        }
      }
      emit();
    },
    toggleControl(id) {
      if (v2()) {
        const c = levelAt().comps.find(x => x.id === id);
        if (!c) return;
        const sim = simFor();
        if (HOLD.has(c.type)) { act(sim, 'press', id); act(sim, 'release', id); }   // da tastiera un comando a impulso vale premi e rilascia
        else act(sim, 'toggle', id);
        if (power && !operated().includes(id)) operated().push(id);
        message = null;
        applyLive2();
        emit();
        return;
      }
      const st = states();
      st[id] = st[id] ? 0 : 1;
      if (power && !operated().includes(id)) operated().push(id);
      message = null;
      applyLive();
      emit();
    },
    // Motore v2: pulsanti tenuti premuti, riarmo del termico, tasto di prova del differenziale, orologio, sovraccarico simulato.
    press(id) { this._act('press', id); },
    release(id) { this._act('release', id); },
    resetPart(id) { this._act('reset', id); },
    testPart(id) { this._act('test', id); },
    _act(action, id) {
      if (!v2() || !inBuildOrFault()) return;
      const sim = simFor();
      const c = levelAt().comps.find(x => x.id === id);
      if (!c) return;
      try { act(sim, action, id); } catch (e) { return; }   // azione non prevista per quel componente
      if (action === 'press' && power && !operated().includes(id)) operated().push(id);
      message = null;
      applyLive2();
      emit();
    },
    // L'orologio della vista: fa passare il tempo (mezzi secondi) solo quando serve (snapshot().needsClock).
    tick(seconds = 0.5) {
      if (!v2()) return;
      advance(simFor(), seconds);
      applyLive2();
      emit();
    },
    // Livelli con relè termico: simula un sovraccarico (il motore assorbe troppo) per provare la protezione.
    setOverload(on) {
      if (!v2()) return;
      simFor().overload = !!on;
      emit();
    },
    // Livelli con una macchina (nastro): riporta il pacco all'inizio.
    rewind() {
      if (!v2()) return;
      rewindSim(simFor());
      applyLive2();
      emit();
    },
    // Livelli con corrente "a richiesta": mostra o nasconde i fili percorsi.
    toggleFlow() {
      flowOnDemand = !flowOnDemand;
      emit();
    },

    check() {
      const level = levelAt();
      const r = v2(level) ? evaluateV2(level, wires()) : evaluate(level, wires());
      resultsByKey[keyOf()] = r;
      const u = usage();
      u.checks++;
      const pk = progressKey(level.id);
      const rec = record();
      const prevStars = progress.stars[pk] || 0;
      if (prevStars < r.stars) progress.stars[pk] = r.stars;
      const inFault = level.unit && unitState().phase === 'fault';
      if (!inFault) rec.base = Math.max(rec.base, attemptBase(r, u));
      if (r.pass && playMode === 'verifica' && prevStars < 3) rec.skipped = true;
      if (level.unit) {
        const us = unitState();
        if (r.pass && us.phase === 'build') us.phase = 'done';
        if (r.pass && us.phase === 'fault' && us.diag && us.diag.correct && !us.diagWrong) {
          us.faultSolved = true;
          rec.fault = true;
          us.phase = 'done';
        }
      }
      progress.last = level.id;
      save();
      emit();
      return r;
    },

    // Suggerimento successivo (a rotazione). Non cambia il circuito, quindi non emette.
    // In verifica non ci sono suggerimenti.
    requestHint() {
      if (playMode === 'verifica') return null;
      const hints = levelAt().hints;
      hintIndex = (hintIndex + 1) % hints.length;
      usage().hints++;
      return { index: hintIndex, total: hints.length, text: hints[hintIndex] };
    },
    toggleSolution() {
      if (playMode === 'verifica') return;
      solutionShown = !solutionShown;
      if (solutionShown) usage().solution = true;
      emit();
    },

    /* ---------- unita' didattica ---------- */
    // Avanti nella lezione: pagina successiva; dall'ultima si passa al cablaggio.
    // Sulla pagina di previsione si va avanti solo dopo aver risposto.
    unitNext() {
      const level = levelAt();
      if (!level.unit) return;
      const us = unitState();
      if (us.phase !== 'lesson') return;
      const pg = currentPage();
      if (pg.type === 'previsione' && !us.pred) return;
      if ((us.page || 0) < level.unit.lesson.pages.length - 1) us.page = (us.page || 0) + 1;
      else us.phase = 'build';
      emit();
    },
    // Indietro nella lezione: pagina precedente (alla prima non fa nulla).
    unitBack() {
      const us = levelAt().unit && unitState();
      if (us && us.phase === 'lesson' && us.page > 0) { us.page--; emit(); }
    },
    // Salta la lezione: si va subito al cablaggio, senza penalita' oltre alla previsione non data.
    skipLesson() {
      const us = levelAt().unit && unitState();
      if (!us || us.phase !== 'lesson') return;
      us.phase = 'build';
      emit();
    },
    showLesson() {
      if (!levelAt().unit || playMode === 'verifica' || mode !== 'quadro') return;
      const us = unitState();
      us.phase = 'lesson';
      us.page = 0;
      emit();
    },
    answerPrediction(optionId) {
      const level = levelAt();
      const us = level.unit && unitState();
      if (!us || us.phase !== 'lesson' || us.pred) return;
      const pg = currentPage();
      if (!pg || pg.type !== 'previsione') return;
      const correct = pg.correct === optionId;
      us.pred = { option: optionId, correct };
      // il bonus vale solo se la previsione precede la prima riuscita del livello
      if (correct && !(progress.stars[progressKey(level.id, 'quadro')] > 0)) {
        progress.best[progressKey(level.id, 'quadro')] = progress.best[progressKey(level.id, 'quadro')] || { base: 0, pred: false, fault: false, skipped: false };
        progress.best[progressKey(level.id, 'quadro')].pred = true;
        save();
      }
      emit();
    },
    // Sfida guasto: si parte da un impianto gia' cablato che non funziona.
    startFault() {
      const level = levelAt();
      const us = level.unit && level.unit.fault && unitState();
      if (!us || !['done', 'fault'].includes(us.phase) || playMode === 'verifica' || mode !== 'quadro') return;
      // l'impianto riuscito si conserva: uscendo dalla sfida torna com'era, con il suo esito
      if (us.phase === 'done') us.before = { wires: (wiresByKey[keyOf()] || []).slice(), states: { ...(statesByKey[keyOf()] || {}) }, result: resultsByKey[keyOf()] || null };
      resetLevelState();
      wiresByKey[keyOf()] = level.unit.fault.wires.map(([a, b, c]) => ({ id: nextWireId++, a, b, c }));
      statesByKey[keyOf()] = {};
      resultsByKey[keyOf()] = null;
      us.phase = 'fault';
      us.diag = null;
      emit();
    },
    answerDiagnosis(optionId) {
      const level = levelAt();
      const us = level.unit && level.unit.fault && unitState();
      if (!us || us.phase !== 'fault' || (us.diag && us.diag.correct)) return;   // dopo una risposta sbagliata si puo' riprovare
      us.diag = { option: optionId, correct: level.unit.fault.diagnosis.correct === optionId };
      if (!us.diag.correct) us.diagWrong = true;
      emit();
    },
    leaveFault() {
      const us = levelAt().unit && unitState();
      if (!us || us.phase !== 'fault') return;
      resetLevelState();
      exitFault();
      emit();
    },
  };
}
