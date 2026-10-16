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
import { createSim, observe, settle as settleSim, measure as measureSim, setWires as setWires2, setSupply, act, advance, rewind as rewindSim, evaluateV2, isV2, selfPowered, viewOf, HOLD, sanitizeProgram, tune as tuneSim, withTuned, tunedValues, clampTune } from './v2/index.js';

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
  const meterBy = {};         // multimetro: { on, mode, a, b } per livello e modalita'
  const liveEditsBy = {};      // lavoro fuori tensione: morsetti toccati mentre erano in tensione per colpa del sezionamento chiuso
  const progLiveBy = {};       // programma cambiato con la macchina in moto (safety.programStopped)
  const repairLiveBy = {};     // pezzo dentro la cella riparato con la macchina alimentata (safety.repairDead)
  const seedBy = {};           // turno a guasti con `pick`: il seme della partita (un turno nuovo a ogni Ricomincia)
  const measuredBy = {};      // letture fatte (per i passi): { a, b, mode, kind, value, ohm, live }
  const operatedByKey = {};   // comandi azionati con il quadro acceso, per i passi
  const programsByKey = {};   // programmi dei PLC scritti dall'allievo: { idPLC: [gradini] } per livello e modalita'
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
  // Fili gia' posati dal livello (`fixed`): non si tolgono ne' si salvano. Gli id negativi li distinguono dai fili dell'allievo.
  const fixedOf = lv => (lv.fixed || []).map(([a, b, c], n) => ({ id: -(n + 1), a, b, c, fixed: true }));
  const blank = (i = levelIndex, m = mode) => fixedOf(levelAt(i, m));
  const wires = () => wiresByKey[keyOf()] || (wiresByKey[keyOf()] = blank());
  // Programmi dei PLC: quelli dell'allievo prendono il posto del programma del livello (un PLC con `edit` parte vuoto).
  // `edit.start` e' il programma da cui parte l'allievo (se il livello ne dà uno); Annulla tutto vi riporta.
  const initialPrograms = lv => Object.fromEntries(lv.comps.filter(c => c.type === 'plc' && c.edit && c.edit.start).map(c => [c.id, JSON.parse(JSON.stringify(c.edit.start))]));
  const programsOf = (i = levelIndex, m = mode) => programsByKey[keyOf(i, m)] || initialPrograms(levelAt(i, m));
  const withProg = (lv, k = keyOf()) => {
    const pr = programsByKey[k] || initialPrograms(lv);
    const out = pr && lv.comps.some(c => c.type === 'plc' && pr[c.id]) ? { ...lv, comps: lv.comps.map(c => (c.type === 'plc' && pr[c.id] ? { ...c, program: pr[c.id] } : c)) } : lv;
    return withTuned(out, tunedByKey[k]);
  };
  // Parametri del processo regolati dall'allievo dal pannello (process.tunable): { nome: valore } per livello e modalita'.
  const tunedByKey = {};
  const states = () => statesByKey[keyOf()] || (statesByKey[keyOf()] = {});
  const usage = () => usageByKey[keyOf()] || (usageByKey[keyOf()] = { hints: 0, solution: false, checks: 0 });
  const startPhase = (i = levelIndex) => {
    const l = levels[i];
    const b = progress.best[progressKey(l.id)];
    const seen = progress.stars[progressKey(l.id)] > 0 || (b && b.pred);
    if (l.unit && playMode === 'apprendimento' && !seen) return 'lesson';
    return l.prova && playMode === 'apprendimento' ? 'fault' : 'build';
  };
  // La fase dell'unita' vale per il livello, qualunque sia il punto di partenza (quadro o contatore).
  const unitState = () =>
    unitByKey[levelIndex] || (unitByKey[levelIndex] = { phase: startPhase(), page: 0, pred: null, diag: null, faultSolved: false });
  // Uscendo dalla sfida guasto o da una prova di salto, la fase riparte da capo.
  const dropUnitState = () => { delete unitByKey[levelIndex]; };
  const save = () => { try { storage.save(progress); } catch (e) { /* si continua senza salvare */ } };
  const record = () => progress.best[progressKey(levelAt().id)] || (progress.best[progressKey(levelAt().id)] = { base: 0, pred: false, fault: false, skipped: false });

  // Portate scelte per i magnetotermici del livello (solo v2): servono alla verifica, che parte da simulazioni nuove.
  const ratingsOf = (i = levelIndex) => {
    const sim = simsByKey[keyOf(i, 'quadro')];
    const out = { ...(ratingsSaved[keyOf(i, 'quadro')] || {}) };
    if (sim) levels[i].comps.forEach(c => { if (c.type === 'mt' && sim.parts[c.id] && sim.parts[c.id].in) out[c.id] = sim.parts[c.id].in; });
    return out;
  };
  // Sezionamenti del lavoro fuori tensione: quelli di safety.deadWork e quello del lucchetto (safety.lockout.iso).
  const lockoutOf = lv => (lv && lv.safety && lv.safety.lockout) || null;
  const isoIds = lv => [...new Set([...((lv.safety && lv.safety.deadWork) || []), ...(lockoutOf(lv) ? [lockoutOf(lv).iso] : [])])];
  // Stato dei sezionamenti, se diverso da quello di partenza: 1 chiuso, 0 aperto, { lock: [letture] } aperto con il lucchetto.
  const isoOf = (i = levelIndex) => {
    const lv = levels[i], k = keyOf(i, 'quadro');
    const out = { ...(isoSaved[k] || {}) };
    const sim = simsByKey[k];
    if (sim) isoIds(lv).forEach(id => {
      const c = lv.comps.find(x => x.id === id), s = sim.parts[id];
      if (!s) return;
      if (s.locked) out[id] = { lock: (s.verified || []).slice() };
      else if (!!s.on !== (c.init !== 0)) out[id] = s.on ? 1 : 0;
      else delete out[id];
    });
    return out;
  };
  const meterOf = () => meterBy[keyOf()] || (meterBy[keyOf()] = { on: false, mode: 'V', a: null, b: null, last: '' });
  const readMeter = level => {
    const m = meterOf();
    if (!level.meter || !v2(level) || !m.a || !m.b) return null;
    return measureSim(simFor(), m.a, m.b, m.mode);
  };
  // Ogni lettura nuova si registra: i passi ("misura 230 V qui") e, piu' avanti, la regola del lavoro fuori tensione la leggono.
  function logMeter() {
    const level = levelAt(), r = readMeter(level);
    if (!r) return;
    const m = meterOf();
    const k = [m.a, m.b, m.mode, r.kind, r.value, r.ohm, power].join('|');
    if (k === m.last) return;
    m.last = k;
    (measuredBy[keyOf()] = measuredBy[keyOf()] || []).push({ a: m.a, b: m.b, mode: m.mode, kind: r.kind, value: r.value === undefined ? null : r.value, ohm: r.ohm || null, live: !!power });
    noteVerify(level, m, r);
  }
  // Lucchetto (safety.lockout = { iso, test: [[a, b], ...], known?: [a, b] }): con il sezionamento aperto e bloccato, impianto alimentato,
  // le letture di 0 V tra le coppie di `test` (e, se c'e', la prova dello strumento: 230 V su `known`, un punto che resta in tensione)
  // si segnano sul sezionamento. Ogni modifica dei fili senza tutte queste letture e' lavoro non sicuro.
  const pairKey = (a, b) => [a, b].sort().join('~');
  const lockPairs = lv => (lockoutOf(lv) ? lockoutOf(lv).test.map(([a, b]) => pairKey(a, b)).concat(lockoutOf(lv).known ? [pairKey(...lockoutOf(lv).known)] : []) : []);
  function noteVerify(level, m, r) {
    const L = lockoutOf(level);
    if (!L || !v2(level) || !power || m.mode !== 'V' || r.kind !== 'v') return;
    const s = simFor().parts[L.iso];
    if (!s || !s.locked || s.on) return;
    const k = pairKey(m.a, m.b);
    const isTest = L.test.some(([a, b]) => pairKey(a, b) === k) && r.value === 0;
    const isKnown = !!L.known && pairKey(...L.known) === k && r.value === 230;
    if ((isTest || isKnown) && !s.verified.includes(k)) s.verified.push(k);
  }
  // La procedura e' completa? Sezionamento aperto, lucchetto messo, tutte le letture fatte dopo averlo messo.
  function lockoutDone(level = levelAt()) {
    const L = lockoutOf(level);
    if (!L) return true;
    const s = simFor().parts[L.iso];
    return !!s && s.locked && !s.on && lockPairs(level).every(k => s.verified.includes(k));
  }
  const isoSaved = {};       // stato (1 chiuso, 0 aperto) dei sezionamenti del lavoro fuori tensione, ricaricato dal lavoro salvato
  const ratingsSaved = {};   // portate scelte e ricaricate dal lavoro salvato, applicate alla prima simulazione
  const operated = () => operatedByKey[keyOf()] || (operatedByKey[keyOf()] = []);

  // Motore v2: la simulazione si crea alla prima richiesta e si butta a ogni modifica dei fili.
  const v2 = (level = levelAt()) => isV2(level);
  const dropSim = () => { delete simsByKey[keyOf()]; };
  // Dopo una modifica dei fili: con protezioni proprie la simulazione resta (interruttori e protezioni tengono lo stato), altrimenti si ricrea.
  const rewireSim = () => {
    const old = simsByKey[keyOf()], lv = levelAt();
    dropSim();
    // il cavo del pannello operatore resta com'e' anche cambiando i fili (e' un guasto da riparare a mano, non con il cablaggio)
    const keep = (selfPowered(lv) ? ['mt', 'mt3', 'sez', 'rcd', 'sw', 'gu'] : []).concat(['hmi']);
    if (!old || !lv.comps.some(c => keep.includes(c.type))) return;
    const sim = simFor();
    lv.comps.forEach(c => { if (keep.includes(c.type) && old.parts[c.id]) { Object.assign(sim.parts[c.id], JSON.parse(JSON.stringify(old.parts[c.id]))); } });
    setWires2(sim, wires());
  };
  // Turno con i guasti estratti (scenario.pick): il seme e' quello del livello (turno uguale per tutti) o uno nuovo per la partita.
  function withSeed(lv, k) {
    const sc = lv.scenario;
    if (!sc || !sc.pick) return lv;
    if (seedBy[k] === undefined) seedBy[k] = sc.seed ?? 1 + Math.floor(Math.random() * 1e9);
    return { ...lv, scenario: { ...sc, seed: seedBy[k] } };
  }
  function simFor() {
    const k = keyOf();
    if (!simsByKey[k]) {
      const sim = createSim(withSeed(withProg(levelAt(), k), k), wires());
      const sr = ratingsSaved[k];
      delete ratingsSaved[k];
      const iso = isoSaved[k];
      delete isoSaved[k];
      if (iso) {
        levelAt().comps.forEach(c => {
          const v = iso[c.id], s = sim.parts[c.id];
          if (v === undefined || !s || !('on' in s)) return;
          if (v && typeof v === 'object') { s.on = false; s.locked = true; s.verified = Array.isArray(v.lock) ? v.lock.slice() : []; } else s.on = !!v;
        });
        settleSim(sim);
      }
      if (sr) levelAt().comps.forEach(c => { if (c.type === 'mt' && c.ratings && c.ratings.includes(sr[c.id]) && sim.parts[c.id]) { sim.parts[c.id].in = sr[c.id]; } });
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
    const st = stepsState(u.steps, wires(), { power, operated: operated(), result: resultsByKey[keyOf()] || null, fault: !!analysisOf(level).fault, measured: measuredBy[keyOf()] || [], ratings: ratingsOf(), programs: programsOf() });
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
      programs: JSON.parse(JSON.stringify(programsOf())),
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
      // solo livelli con un processo (docs/SPEC-PROCESSI.md): tracciato per il grafico, fattore di accelerazione, parametri regolabili
      trace: is2 && level.process ? simFor().trace.slice(-600) : null,
      speed: is2 && level.process ? level.process.speed || 1 : 1,
      tuned: is2 && level.process && level.process.tunable ? tunedValues(withTuned(level, tunedByKey[keyOf()]).process) : null,
      selfPowered: is2 ? selfPowered(level) : false,
      overload: is2 ? !!simFor().overload : false,
      // multimetro: solo nei livelli che lo dichiarano (`meter: true`)
      // lucchetto: stato della procedura per la vista (sezionamento bloccato, letture fatte e da fare)
      lockout: is2 && lockoutOf(level) ? { iso: lockoutOf(level).iso, locked: !!(simFor().parts[lockoutOf(level).iso] || {}).locked, done: lockoutDone(level), verified: ((simFor().parts[lockoutOf(level).iso] || {}).verified || []).slice(), need: lockPairs(level) } : null,
      meter: is2 && level.meter ? { on: meterOf().on, mode: meterOf().mode, a: meterOf().a, b: meterOf().b, reading: readMeter(level) } : null,
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
        prova: !!level.prova,
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
    if (u && u.phase === 'fault') {
      // una prova lasciata a meta' riparte dall'impianto guasto, senza rifare la lezione (i fili della prova non si salvano)
      if (l.prova && !u.before) { work.u[l.id] = { phase: 'fault', page: u.page || 0, pred: u.pred ? { option: u.pred.option, correct: !!u.pred.correct } : null }; writeWork(); }
      return;
    }
    const ws = (wiresByKey[keyOf()] || []).filter(x => !x.fixed).map(x => ({ id: x.id, a: x.a, b: x.b, c: x.c }));
    const st = { ...(statesByKey[keyOf()] || {}) };
    const rt = {};
    const rs = mode === 'quadro' ? ratingsOf() : {};
    l.comps.forEach(c => { if (rs[c.id] && rs[c.id] !== c.in) rt[c.id] = rs[c.id]; });
    const ms = (measuredBy[keyOf()] || []).slice(0, 100);
    const pg = programsByKey[keyOf()] || {};     // si salva solo cio' che l'allievo ha cambiato
    const tn = tunedByKey[keyOf()] || {};        // cursori del pannello di regolazione (process.tunable)
    const lv_ = (liveEditsBy[keyOf()] || []).slice(0, 20);
    const iso_ = mode === 'quadro' ? isoOf() : {};
    if (ws.length || Object.keys(st).length || Object.keys(rt).length || ms.length || lv_.length || Object.keys(iso_).length || Object.keys(pg).length || Object.keys(tn).length) {
      const e = { wires: ws, states: st };
      if (Object.keys(rt).length) e.ratings = rt;
      if (ms.length) e.measured = ms;
      if (lv_.length) e.live = lv_;
      if (Object.keys(iso_).length) e.iso = iso_;
      if (Object.keys(pg).length) e.programs = pg;
      if (Object.keys(tn).length) e.tuned = { ...tn };
      work.w[workKeyOf(levelIndex, mode)] = e;
    } else delete work.w[workKeyOf(levelIndex, mode)];
    if (u && l.unit) {
      if (u.phase === 'lesson' && !u.page) delete work.u[l.id];
      else work.u[l.id] = { phase: u.phase, page: u.page || 0, pred: u.pred ? { option: u.pred.option, correct: !!u.pred.correct } : null };
    }
    writeWork();
  }
  function writeWork() {
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
        const ws = fixedOf(lv);
        const seenFixed = new Set(ws.map(x => [x.a, x.b].sort().join('~')));
        seenFixed.forEach(k => seen.add(k));
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
        const entry = { wires: ws.filter(x => !x.fixed).map(x => ({ ...x })), states: { ...st } };
        if (isObj(e.ratings)) {
          const rt = {};
          lv.comps.forEach(c => { if (c.type === 'mt' && c.ratings && c.ratings.includes(e.ratings[c.id])) rt[c.id] = e.ratings[c.id]; });
          if (Object.keys(rt).length) { ratingsSaved[keyOf(i, m)] = rt; entry.ratings = { ...rt }; }
        }
        if (isObj(e.programs)) {
          const pr = {};
          lv.comps.forEach(c => { if (c.type === 'plc' && c.edit && Array.isArray(e.programs[c.id])) pr[c.id] = sanitizeProgram(e.programs[c.id]); });
          if (Object.keys(pr).length) { programsByKey[keyOf(i, m)] = pr; entry.programs = JSON.parse(JSON.stringify(pr)); }
        }
        if (isObj(e.tuned) && lv.process && lv.process.tunable) {
          // solo i nomi regolabili, riportati nei limiti del cursore
          const tn = {};
          Object.entries(lv.process.tunable).forEach(([name, d]) => { if (Number.isFinite(e.tuned[name])) tn[name] = clampTune(d, e.tuned[name]); });
          if (Object.keys(tn).length) { tunedByKey[keyOf(i, m)] = tn; entry.tuned = { ...tn }; }
        }
        if (Array.isArray(e.measured)) {
          const ms = e.measured.slice(0, 100).filter(x => isObj(x) && typeof x.a === 'string' && typeof x.b === 'string' && typeof x.mode === 'string' && typeof x.kind === 'string' && known.has(x.a) && known.has(x.b))
            .map(x => ({ a: x.a, b: x.b, mode: x.mode, kind: x.kind, value: typeof x.value === 'number' ? x.value : null, ohm: typeof x.ohm === 'number' ? x.ohm : null, live: !!x.live }));
          if (ms.length) { measuredBy[keyOf(i, m)] = ms; entry.measured = ms.map(x => ({ ...x })); }
        }
        if (isObj(e.iso) && isoIds(lv).length) {
          const io = {};
          const pairs = new Set(lockPairs(lv));
          isoIds(lv).forEach(id => {
            const v = e.iso[id];
            if (v === 0 || v === 1) io[id] = v;
            else if (isObj(v) && lockoutOf(lv) && lockoutOf(lv).iso === id) io[id] = { lock: (Array.isArray(v.lock) ? v.lock : []).filter(x => pairs.has(x)).slice(0, 10) };
          });
          if (Object.keys(io).length) { isoSaved[keyOf(i, m)] = io; entry.iso = { ...io }; }
        }
        if (Array.isArray(e.live)) {
          const lv2 = e.live.slice(0, 20).filter(x => typeof x === 'string' && known.has(x));
          if (lv2.length) { liveEditsBy[keyOf(i, m)] = lv2; entry.live = lv2.slice(); }
        }
        if (ws.length || Object.keys(st).length || entry.ratings || entry.measured || entry.live || entry.iso || entry.tuned) work.w[workKeyOf(i, m)] = entry;
      });
      const e = isObj(data.u) ? data.u[l.id] : null;
      if (!isObj(e) || !l.unit || !['lesson', 'build', 'done', 'fault'].includes(e.phase) || (e.phase === 'fault' && !l.prova)) return;
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
        else result = isV2(levelAt(i, 'quadro')) ? evaluateV2(levelAt(i, 'quadro'), ws, { measured: measuredBy[keyOf(i, 'quadro')] || [], ratings: ratingsOf(i), programs: programsOf(i, 'quadro'), tuned: tunedByKey[keyOf(i, 'quadro')], liveEdits: liveEditsBy[keyOf(i, 'quadro')] || [] }) : evaluate(levelAt(i, 'quadro'), ws);
        if (result && !result.pass) { phase = 'build'; result = null; }
      }
      unitByKey[i] = { phase, page, pred, diag: null, faultSolved: false };
      if (result) resultsByKey[keyOf(i, 'quadro')] = result;
      work.u[l.id] = { phase, page, pred };
    });
    try { lastWorkStr = JSON.stringify(work); } catch (e) { lastWorkStr = ''; }
  }


  // I fili dell'impianto guasto: quelli posati dal livello piu' quelli della sfida. In una prova restano segnati (`plant`):
  // Annulla non li toglie e Annulla tutto riporta a loro, non al banco vuoto.
  function faultWires(level) {
    const fx = fixedOf(level), fxKeys = new Set(fx.map(x => [x.a, x.b].sort().join('~')));
    const plant = !!level.prova;
    return fx.concat(level.unit.fault.wires.filter(([a, b]) => !fxKeys.has([a, b].sort().join('~'))).map(([a, b, c]) => (plant ? { id: nextWireId++, a, b, c, plant } : { id: nextWireId++, a, b, c })));
  }
  // Carica l'impianto guasto della sfida: fili, guasti da componente accesi, sezionamenti aperti.
  function loadFaultPlant(level, us) {
    resetLevelState();
    delete measuredBy[keyOf()];
    delete liveEditsBy[keyOf()];
    delete progLiveBy[keyOf()];
    delete repairLiveBy[keyOf()];
    wiresByKey[keyOf()] = faultWires(level);
    statesByKey[keyOf()] = {};
    resultsByKey[keyOf()] = null;
    if (level.unit.fault.programs) programsByKey[keyOf()] = JSON.parse(JSON.stringify(level.unit.fault.programs)); else delete programsByKey[keyOf()];
    us.phase = 'fault';
    // guasti da componente (dispersioni) gia' attivi all'inizio della sfida
    if (v2(level)) (level.unit.fault.on || []).forEach(id => act(simFor(), 'toggle', id));
    // sezionamenti che la sfida apre in partenza (si ripara senza tensione)
    if (v2(level)) (level.unit.fault.open || []).forEach(id => { const s0 = simFor().parts[id]; if (s0 && s0.on) act(simFor(), 'toggle', id); });
    us.diag = null;
    if (level.prova) us.diagWrong = false;       // nella prova si puo' rifare da capo; nelle sfide guasto l'errore resta
  }
  // Livelli "prova" (scena 3D): l'impianto e' gia' cablato e guasto, senza il cablaggio da fare. Parte da solo, una volta.
  function armProva() {
    const level = levelAt();
    if (!level.prova || mode !== 'quadro' || playMode !== 'apprendimento') return;
    const us = unitState();
    if (us.phase !== 'fault' || us.armed) return;
    us.armed = true;
    loadFaultPlant(level, us);
  }
  // Finita la lezione: si passa al cablaggio, o per una prova direttamente all'impianto guasto.
  function toPlay(us) {
    if (levelAt().prova && us.back === 'done') { us.phase = 'done'; delete us.back; return; }   // prova gia' superata: si torna alla fine
    delete us.back;
    us.phase = levelAt().prova ? 'fault' : 'build';
    if (us.phase === 'fault') armProva();
  }

  // Uscendo dalla sfida guasto (con "Esci", cambiando livello o modalita') l'impianto riuscito torna com'era.
  function exitFault() {
    const us = unitByKey[levelIndex];
    if (!us || us.phase !== 'fault') return;
    // una prova non riuscita non lascia niente: alla riapertura riparte da capo
    if (levelAt().prova && !us.before) {
      unitByKey[levelIndex] = { phase: 'fault', page: 0, pred: us.pred, diag: null, faultSolved: false };   // niente lezione da capo: si riarma all'apertura
      wiresByKey[keyOf(levelIndex, 'quadro')] = blank(levelIndex, 'quadro');
      delete programsByKey[keyOf(levelIndex, 'quadro')];
      statesByKey[keyOf(levelIndex, 'quadro')] = {};
      resultsByKey[keyOf(levelIndex, 'quadro')] = null;
      delete measuredBy[keyOf(levelIndex, 'quadro')];
      delete liveEditsBy[keyOf(levelIndex, 'quadro')];
      delete progLiveBy[keyOf(levelIndex, 'quadro')];
      delete simsByKey[keyOf(levelIndex, 'quadro')];
      return;
    }
    us.phase = 'done';
    us.diag = null;
    if (us.before) {
      wiresByKey[keyOf(levelIndex, 'quadro')] = us.before.wires;
      statesByKey[keyOf(levelIndex, 'quadro')] = us.before.states;
      resultsByKey[keyOf(levelIndex, 'quadro')] = us.before.result;
      measuredBy[keyOf(levelIndex, 'quadro')] = us.before.measured || [];
      if (us.before.programs && Object.keys(us.before.programs).length) programsByKey[keyOf(levelIndex, 'quadro')] = us.before.programs; else delete programsByKey[keyOf(levelIndex, 'quadro')];
      if (us.before.ratings && Object.keys(us.before.ratings).length) ratingsSaved[keyOf(levelIndex, 'quadro')] = us.before.ratings;
      us.before = null;
    }
  }
  // La prova di salto riparte da zero: il lavoro dell'apprendimento si mette da parte e si rimette all'uscita.
  const verifyStash = {};
  function stashForVerify() {
    const k = keyOf();
    verifyStash[levelIndex] = { key: k, wires: (wiresByKey[k] || []).slice(), states: { ...(statesByKey[k] || {}) }, result: resultsByKey[k] || null, usage: usageByKey[k] || null, unit: unitByKey[levelIndex] || null, measured: (measuredBy[k] || []).slice(), live: (liveEditsBy[k] || []).slice(), ratings: ratingsOf(), iso: isoOf(), programs: JSON.parse(JSON.stringify(programsByKey[k] || {})), tuned: tunedByKey[k] || null };
    delete programsByKey[k]; delete tunedByKey[k];
    delete measuredBy[k]; delete liveEditsBy[k]; delete ratingsSaved[k]; delete isoSaved[k];
  }
  function unstashFromVerify() {
    const st = verifyStash[levelIndex];
    if (!st) { dropUnitState(); return; }
    wiresByKey[st.key] = st.wires; statesByKey[st.key] = st.states; resultsByKey[st.key] = st.result;
    measuredBy[st.key] = st.measured; liveEditsBy[st.key] = st.live;
    if (st.programs && Object.keys(st.programs).length) programsByKey[st.key] = st.programs; else delete programsByKey[st.key];
    if (st.tuned) tunedByKey[st.key] = st.tuned; else delete tunedByKey[st.key];
    delete ratingsSaved[st.key]; delete isoSaved[st.key];
    if (Object.keys(st.ratings).length) ratingsSaved[st.key] = st.ratings;
    if (Object.keys(st.iso).length) isoSaved[st.key] = st.iso;
    if (st.usage) usageByKey[st.key] = st.usage; else delete usageByKey[st.key];
    if (st.unit) unitByKey[levelIndex] = st.unit; else delete unitByKey[levelIndex];
    delete verifyStash[levelIndex];
  }

  const emit = () => {
    logMeter();
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

  // Lavoro fuori tensione (livelli con safety.deadWork): toccare un morsetto che e' in tensione solo perche' il sezionamento e' chiuso
  // si registra. Il lato di linea del sezionamento non conta: resta in tensione anche a sezionamento aperto.
  // Un programma si cambia a macchina ferma: gira uno dei motori di safety.programStopped?
  function programRunning() {
    const S = levelAt().safety && levelAt().safety.programStopped;
    if (!v2(levelAt()) || !S || !power) return false;
    const o = observe(simFor());
    return S.some(m => o.motors[m] === 'fwd' || o.motors[m] === 'rev');
  }
  function noteLive(terms) {
    const lv = levelAt();
    if (v2(lv) && lockoutOf(lv)) {
      // con il lucchetto non basta che i morsetti siano spenti: conta la procedura (sezionare, bloccare, verificare)
      if (lockoutDone(lv)) return false;
      const list = liveEditsBy[keyOf()] || (liveEditsBy[keyOf()] = []);
      let fresh = false;
      terms.forEach(x => { if (!list.includes(x) && list.length < 20) { list.push(x); fresh = true; } });
      return fresh;
    }
    if (!v2(lv) || !lv.safety || !lv.safety.deadWork || !power) return false;
    // due simulazioni sui fili di adesso (quella della sessione puo' ancora avere i fili di prima): gli interruttori restano come li ha lasciati l'allievo
    const sim = simFor();
    const mk = () => {
      const s2 = createSim(lv, wires());
      lv.comps.forEach(c => { if (sim.parts[c.id] && s2.parts[c.id]) Object.assign(s2.parts[c.id], JSON.parse(JSON.stringify(sim.parts[c.id]))); });
      if (sim.supply !== s2.supply) setSupply(s2, sim.supply);
      settleSim(s2);
      return s2;
    };
    const now = observe(mk());
    const dead = mk();
    lv.safety.deadWork.forEach(id => { if (dead.parts[id] && dead.parts[id].on) act(dead, 'toggle', id); });
    const off = observe(dead);
    const PH = ['F', 'L1', 'L2', 'L3'];
    const list = liveEditsBy[keyOf()] || (liveEditsBy[keyOf()] = []);
    let fresh = false;
    terms.forEach(t => { if (PH.includes(now.potential(t)) && !PH.includes(off.potential(t)) && !list.includes(t) && list.length < 20) { list.push(t); fresh = true; } });
    return fresh;
  }

  // Si modifica il cablaggio: la verifica precedente non vale piu'.
  function wiresChanged() {
    resultsByKey[keyOf()] = null;
    delete measuredBy[keyOf()];
    if (meterBy[keyOf()]) meterBy[keyOf()].last = '';
    rewireSim();
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
  const afterEdit = () => { if (v2()) { rewireSim(); applyLive2(); } };

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
    start() {
      restoreWork(); power = selfPowered(levelAt()); armProva(); power = selfPowered(levelAt());
      const sim = simsByKey[keyOf()];
      if (sim && sim.supply !== power) setSupply(sim, power);   // una simulazione creata prima di start() non resta senza corrente
      emit();
    },

    // Stato di un livello qualsiasi (non solo quello aperto), per chi disegna piu' circuiti insieme (la casa).
    // `lit`: la lampada si accende con i fili e i comandi attuali, ignorando il quadro; `power` vale solo per il livello aperto.
    peek(x) {
      const i = indexOf(x);
      if (i < 0 || i >= levels.length) return null;
      const lv = levelAt(i, 'quadro');
      if (isV2(lv)) return { id: levels[i].id, lit: false, wired: (wiresByKey[keyOf(i, 'quadro')] || []).filter(w => !w.fixed).length, controls: {}, passed: (progress.stars[levels[i].id] || 0) > 0, open: i === levelIndex, power: false };
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
      if (levels[i].prova) opts = {};   // le prove non hanno la prova di salto
      // si lascia il livello corrente: la sfida guasto si chiude e la prova di salto restituisce il lavoro
      exitFault();
      const wasVerify = playMode === 'verifica';
      if (wasVerify) unstashFromVerify();
      levelIndex = i;
      if (levels[i].quadroOnly) mode = 'quadro';
      playMode = opts.verify ? 'verifica' : 'apprendimento';
      if (opts.verify) stashForVerify();   // prima di resetLevelState: legge ancora la simulazione viva
      resetLevelState();
      if (opts.verify) {
        // si riparte da zero, anche se il livello era stato cablato prima
        wiresByKey[keyOf()] = blank();
        delete programsByKey[keyOf()];
        statesByKey[keyOf()] = {};
        resultsByKey[keyOf()] = null;
        usageByKey[keyOf()] = { hints: 0, solution: false, checks: 0 };
        unitByKey[levelIndex] = { phase: 'build', page: 0, pred: null, diag: null, faultSolved: false };
      }
      progress.last = levels[i].id;
      armProva();
      power = selfPowered(levelAt());
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
      if (k >= 0 && ws[k].fixed) return;
      const fresh = noteLive([a, b]);
      wiresChanged();
      if (k >= 0) ws.splice(k, 1);
      else ws.push({ id: nextWireId++, a, b, c: color });
      afterEdit();
      if (fresh) message = { code: lockoutOf(levelAt()) ? 'lockWorkNow' : 'liveWorkNow' };
      emit();
    },
    removeWire(id) {
      if (!inBuildOrFault()) return;
      const ws = wires();
      const k = ws.findIndex(x => x.id === id);
      if (k < 0 || ws[k].fixed) return;
      const fresh = noteLive([ws[k].a, ws[k].b]);
      wiresChanged();
      ws.splice(k, 1);
      afterEdit();
      if (fresh) message = { code: lockoutOf(levelAt()) ? 'lockWorkNow' : 'liveWorkNow' };
      emit();
    },
    // Programma di un PLC (livelli con `edit`): sostituisce quello attuale. Il PLC riparte da zero, come dopo un nuovo caricamento.
    setProgram(id, program) {
      if (!inBuildOrFault()) return;
      const c = levelAt().comps.find(x => x.id === id && x.type === 'plc' && x.edit);
      if (!c) return;
      const running = programRunning();
      programsByKey[keyOf()] = { ...programsOf(), [id]: sanitizeProgram(program) };
      resultsByKey[keyOf()] = null;
      rewireSim();
      applyLive2();
      if (running) { progLiveBy[keyOf()] = true; message = { code: 'programLiveNow' }; }
      emit();
    },
    undo() {
      if (!inBuildOrFault()) return;
      const lw = wires()[wires().length - 1];
      if (!lw || lw.fixed || lw.plant) return;
      const fresh = noteLive([lw.a, lw.b]);
      wiresChanged();
      wires().pop();
      afterEdit();
      if (fresh) message = { code: lockoutOf(levelAt()) ? 'lockWorkNow' : 'liveWorkNow' };
      emit();
    },
    clear() {
      if (!inBuildOrFault()) return;
      const lv = levelAt();
      if (lv.prova && unitState().phase === 'fault') {
        // nella prova si torna all'impianto di partenza (con il suo guasto), non al banco vuoto
        wiresChanged();
        delete liveEditsBy[keyOf()];   // si ricomincia da capo, come al banco
        delete progLiveBy[keyOf()];
        wiresByKey[keyOf()] = faultWires(lv);
        if (lv.unit.fault.programs) programsByKey[keyOf()] = JSON.parse(JSON.stringify(lv.unit.fault.programs)); else delete programsByKey[keyOf()];
        delete tunedByKey[keyOf()];
        afterEdit();
        emit();
        return;
      }
      if (!wires().some(w => !w.fixed) && !Object.keys(programsOf()).length && !tunedByKey[keyOf()]) { delete liveEditsBy[keyOf()]; return; }
      delete programsByKey[keyOf()];
      delete tunedByKey[keyOf()];   // anche i cursori del pannello tornano ai valori di partenza
      wiresChanged();
      delete liveEditsBy[keyOf()];   // si ricomincia da capo
      delete progLiveBy[keyOf()];
      wiresByKey[keyOf()] = blank();
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
        if (sim.parts[id] && sim.parts[id].locked) { message = { code: 'isoLocked', comp: id }; emit(); return; }
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
    // Turno a guasti (level.scenario): ricomincia da capo con la stessa impostazione.
    restartShift() {
      if (!v2() || !levelAt().scenario) return;
      delete seedBy[keyOf()];        // un turno nuovo: altri guasti, se il livello li estrae
      delete repairLiveBy[keyOf()];
      dropSim();
      resultsByKey[keyOf()] = null;
      message = null;
      emit();
    },
    // Pannello operatore: riconoscimento degli allarmi; guasti simulati sui sensori (galleggiante bloccato, filo del trasmettitore interrotto).
    ackPanel(id) { this._act('ack', id); },
    jamPart(id) { this._act('jam', id); },
    cutPart(id) { this._act('cut', id); },
    _act(action, id) {
      if (!v2() || !inBuildOrFault()) return;
      const sim = simFor();
      const c = levelAt().comps.find(x => x.id === id);
      if (!c) return;
      // riparare un pezzo dentro la cella con la macchina alimentata (safety.repairDead): si perde la stella di sicurezza
      const rd = levelAt().safety && levelAt().safety.repairDead;
      const live = rd && rd.parts.includes(id) && ['jam', 'dead', 'cut'].includes(action) && sim.parts[rd.coil] && sim.parts[rd.coil].on;
      try { act(sim, action, id); } catch (e) { return; }   // azione non prevista per quel componente
      if (live) { repairLiveBy[keyOf()] = true; message = { code: 'repairLiveNow', comp: id }; applyLive2(); emit(); return; }
      if (action === 'press' && power && !operated().includes(id)) operated().push(id);
      message = null;
      applyLive2();
      emit();
    },
    // L'orologio della vista: fa passare il tempo (mezzi secondi) solo quando serve (snapshot().needsClock).
    // Con un processo il tempo corre piu' in fretta (level.process.speed): mezzo secondo reale = speed mezzi secondi simulati.
    tick(seconds = 0.5) {
      if (!v2()) return;
      const lv = levelAt();
      advance(simFor(), seconds * ((lv.process && lv.process.speed) || 1));
      applyLive2();
      emit();
    },
    // Pannello di regolazione: cambia un parametro dichiarato in process.tunable (setpoint, Kp, Ti, ...). Il processo continua.
    tune(name, value) {
      if (!v2()) return;
      const lv = levelAt();
      if (!lv.process || !lv.process.tunable || !lv.process.tunable[name]) return;
      const v = tuneSim(simFor(), name, value);
      if (v === null) return;
      tunedByKey[keyOf()] = { ...(tunedByKey[keyOf()] || {}), [name]: v };
      resultsByKey[keyOf()] = null;
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
    // Lucchetto sul sezionamento del lavoro fuori tensione (safety.lockout): si mette solo a sezionamento aperto, si toglie quando si vuole.
    lockControl(id) {
      const level = levelAt(), L = lockoutOf(level);
      if (!v2(level) || !L || L.iso !== id || !inBuildOrFault()) return;
      const s = simFor().parts[id];
      if (!s) return;
      if (s.on && !s.locked) { message = { code: 'lockNeedsOpen', comp: id }; emit(); return; }
      act(simFor(), 'lock', id);
      if (s.locked && !operated().includes('lock:' + id)) operated().push('lock:' + id);
      resultsByKey[keyOf()] = null;
      message = null;
      emit();
    },
    // Cambia la portata di un magnetotermico che ne ha piu' di una (si passa alla successiva dell'elenco).
    rateControl(id) {
      const level = levelAt();
      if (!v2(level)) return;
      act(simFor(), 'rate', id);
      resultsByKey[keyOf()] = null;
      emit();
    },
    toggleMeter() { if (!levelAt().meter) return; const m = meterOf(); m.on = !m.on; emit(); },
    setMeterMode(md) { if (!levelAt().meter || !['V', 'R'].includes(md)) return; meterOf().mode = md; emit(); },
    // Il primo morsetto toccato e' il puntale rosso, il secondo il nero, il terzo ricomincia.
    probe(term) {
      if (!levelAt().meter) return;
      const m = meterOf();
      if (!m.a || m.b) { m.a = term; m.b = null; } else if (term !== m.a) m.b = term;
      emit();
    },
    clearProbes() { const m = meterOf(); m.a = m.b = null; m.last = ''; emit(); },
    toggleFlow() {
      flowOnDemand = !flowOnDemand;
      emit();
    },

    check() {
      const level = levelAt();
      // nella sfida guasto i guasti da componente ancora attivi (dispersioni) vanno tolti prima di verificare
      const faultOn = v2(level) && level.unit && level.unit.fault && unitState().phase === 'fault' ? (level.unit.fault.on || []).filter(id => simFor().parts[id] && simFor().parts[id].on) : [];
      const r = v2(level) ? evaluateV2(level, wires(), { measured: measuredBy[keyOf()] || [], ratings: ratingsOf(), programs: programsOf(), tuned: tunedByKey[keyOf()], liveSim: level.scenario ? simFor() : null, faultOn, hmiOff: levelAt().comps.filter(c => c.type === 'hmi' && simFor().parts[c.id] && !simFor().parts[c.id].on).map(c => c.id), liveEdits: liveEditsBy[keyOf()] || [], programLive: !!progLiveBy[keyOf()], repairLive: !!repairLiveBy[keyOf()] }) : evaluate(level, wires());
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
      else toPlay(us);
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
      toPlay(us);
      emit();
    },
    showLesson() {
      if (!levelAt().unit || playMode === 'verifica' || mode !== 'quadro') return;
      const us = unitState();
      if (levelAt().prova && us.phase === 'done') us.back = 'done';
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
      if (us.phase === 'done') us.before = { wires: (wiresByKey[keyOf()] || []).slice(), states: { ...(statesByKey[keyOf()] || {}) }, result: resultsByKey[keyOf()] || null, measured: (measuredBy[keyOf()] || []).slice(), ratings: ratingsOf(), programs: JSON.parse(JSON.stringify(programsOf())) };
      loadFaultPlant(level, us);
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
