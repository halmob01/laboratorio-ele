// Pagina delle prove 3D (milestone: appartamento di notte, officina). La scena occupa tutto lo schermo e sopra ci sta la cornice
// comune: ingresso, missione con i passi, registro, comandi in basso, domanda e finale (pezzi in hud.js, testi in content/prove.js).
// Non contiene regole: legge lo stato della sessione (state.js), lo passa alla scena e riporta i tocchi alla sessione.

import { HOUSE } from '../content/trilocale.js';
import { provaState } from './state.js';
import * as H from './hud.js';

const VIEW_LABEL = {
  insieme: 'Vista d’insieme', quadro: 'Quadro', soggiorno: 'Soggiorno', cucina: 'Cucina',
  pulsantiera: 'Pulsantiera', motore: 'Motore',
};
const INTRO_MS = 2400;          // l'ingresso dura almeno questo, e comunque finche' la scena non e' pronta
const SOUND_KEY = 'fase-e-neutro-suono';

// Caricamento del pacchetto 3D: una sola volta per pagina.
let scriptPromise = null;
function loadScript() {
  if (window.FaseNeutroProve) return Promise.resolve(true);
  if (!scriptPromise) {
    scriptPromise = new Promise(resolve => {
      const el = document.createElement('script');
      el.src = 'prove3d.js';
      el.onload = () => resolve(true);
      el.onerror = () => { el.remove(); scriptPromise = null; resolve(false); };
      document.head.appendChild(el);
    });
  }
  return scriptPromise;
}

// Suoni brevi sintetizzati (clic della leva, scatto del differenziale): partono solo dopo un tocco.
let audio = null;
function noise(dur, gain, freq) {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const n = Math.floor(audio.sampleRate * dur), b = audio.createBuffer(1, n, audio.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 4);
    const s = audio.createBufferSource(); s.buffer = b;
    const f = audio.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq;
    const g = audio.createGain(); g.gain.value = gain;
    s.connect(f); f.connect(g); g.connect(audio.destination); s.start();
  } catch (e) { /* senza audio si gioca lo stesso */ }
}

/**
 * @param {HTMLElement} host   contenitore (#house)
 * @param {{session, reduced:()=>boolean, drawer?:(open:boolean)=>void, summary?:()=>void}} env
 */
export function createProva(host, env) {
  let scene = null, sceneState = 'idle', mounted = false, token = 0, name = null, lastSnap = null;
  let el = {};
  const holding = new Set();
  // stato della sola cornice
  let mem = H.newMemory(), log = [], minutes = 0, phase = null, sheet = null;
  let intro = null, override = null, introTimer = 0, outTimer = 0, finTimer = 0;
  const ui = { schema: false, torch: false, sound: true };
  try { ui.sound = localStorage.getItem(SOUND_KEY) !== '0'; } catch (e) { /* predefinito: suono acceso */ }

  const s = () => env.session;
  const cfg = () => H.provaOf(name);
  const inLesson = () => !!(lastSnap && lastSnap.unit && lastSnap.unit.phase === 'lesson');
  const reduced = () => !!(env.reduced && env.reduced());

  function build() {
    el = {};
    if (!cfg()) {
      // prova senza cornice (ancora da progettare): la scena accanto al banco, con i pulsanti delle viste
      host.innerHTML = `<div class="hstage"><div class="hscene" id="pScene"></div><div class="htools" id="pTools"></div><div class="hmsg" id="pMsg" role="status" hidden></div></div>`;
      ['pScene', 'pTools', 'pMsg'].forEach(id => (el[id] = host.querySelector('#' + id)));
      host.onclick = e => { const b = e.target.closest('[data-pview]'); if (b && scene) scene.look(b.dataset.pview); };
      return;
    }
    host.innerHTML = `<div class="hstage"><div class="hscene" id="pScene"></div><div class="hmsg" id="pMsg" role="status" hidden></div><div class="pflash" id="pFlash"></div></div>
      <section class="phud pmission" id="pMission" aria-label="Missione"></section>
      <aside class="phud plogbox" id="pLog" aria-label="Registro"></aside>
      <section class="phud pdock" id="pDock" aria-label="Comandi"></section>
      <div class="ptoast" id="pToast" aria-live="assertive"><b>Tac.</b><span></span></div>
      <div class="psheet" id="pSheet" hidden></div>
      <div class="pintro" id="pIntro" hidden></div>`;
    ['pScene', 'pMsg', 'pFlash', 'pMission', 'pLog', 'pDock', 'pToast', 'pSheet', 'pIntro'].forEach(id => (el[id] = host.querySelector('#' + id)));
    host.onclick = onClick;
    el.pScene.addEventListener('pointermove', e => { if (scene && scene.aim) scene.aim(e.clientX, e.clientY); });
  }

  /* ---------- tocchi: tutto passa da act(), che registra cosa e' successo ---------- */
  function act(action, run) {
    const before = lastSnap && provaState(lastSnap);
    run();
    const snap = s().snapshot();
    const after = provaState(snap);
    if (!before || !after) return;
    mem = H.remember(name, mem, action, before, after);
    const ev = H.describe(name, action, before, after);
    if (ev) {
      note(ev.text, ev);
      if (ev.trip) effectTrip(ev.text);
      else if (ui.sound) noise(0.04, 0.5, 2400);
      if (ev.view && scene) scene.look(ev.view);
    }
    renderHud();
  }
  function note(text, ev = {}) { minutes++; log.push({ clock: H.clockText(cfg(), minutes), text, trip: !!ev.trip, good: !!ev.good }); if (log.length > 30) log.shift(); }

  function tap(u) {
    if (inLesson() || intro) return;
    if (u.kind === 'toggle') act({ kind: 'toggle', id: u.id }, () => s().toggleControl(u.id));
    else if (u.kind === 'test') act({ kind: 'test', id: u.part }, () => s().testPart(u.part));
    else if (u.kind === 'reset') act({ kind: 'reset', id: u.part }, () => s().resetPart(u.part));
  }
  function press(u) { if (inLesson() || intro) return; holding.add(u.id); s().press(u.id); }
  function release(u) { if (!holding.delete(u.id)) return; s().release(u.id); }

  function onClick(e) {
    const a = e.target.closest('[data-pact]');
    if (a) { tap(a.dataset.pact === 'test' ? { kind: 'test', part: a.dataset.pid } : { kind: 'toggle', id: a.dataset.pid }); return; }
    const d = e.target.closest('[data-pdiag]');
    if (d) {
      s().answerDiagnosis(d.dataset.pdiag);
      const dg = s().snapshot().unit.diag;
      if (dg) note(dg.correct ? cfg().log.answerOk : cfg().log.answerKo, { good: dg.correct });
      renderHud();
      return;
    }
    const u = e.target.closest('[data-pui]');
    if (!u) return;
    const k = u.dataset.pui;
    if (k === 'skipIntro') endIntro(true);
    else if (k === 'answer') { sheet = 'question'; renderHud(); focusSheet(); }
    else if (k === 'finale') { sheet = 'finale'; renderHud(); focusSheet(); }
    else if (k === 'closeSheet') { sheet = null; renderHud(); }
    else if (k === 'check') check();
    else if (k === 'again') { sheet = null; s().startFault(); }
    else if (k === 'summary') { if (env.summary) env.summary(); }
    else if (k === 'schema') { ui.schema = !ui.schema; if (env.drawer) env.drawer(ui.schema); renderHud(); }
    else if (k === 'torch') { ui.torch = !ui.torch; if (scene && scene.torch) scene.torch(ui.torch); renderHud(); }
    else if (k === 'sound') { ui.sound = !ui.sound; try { localStorage.setItem(SOUND_KEY, ui.sound ? '1' : '0'); } catch (x) { /* ok */ } renderHud(); }
    else if (k === 'insieme' || k === 'quadro') { if (scene) scene.look(k); }
  }

  function check() {
    const r = s().check();
    note(r.pass ? cfg().log.checkOk : cfg().log.checkKo, { good: r.pass, trip: !r.pass });
    if (r.pass) {
      if (scene) scene.look('insieme');
      if (ui.sound) noise(0.05, 0.5, 1800);
      if (lastSnap.unit.phase !== 'done') openFinale();      // impianto a posto ma prova non chiusa (diagnosi sbagliata): esito lo stesso
    } else {
      toast('Qualcosa non va ancora', 'Nello schema trovi i controlli che non passano.');
      ui.schema = true; if (env.drawer) env.drawer(true);
    }
    renderHud();
  }
  // L'esito, dopo un attimo per guardare la casa che si riaccende. Vale anche per la Verifica premuta nello schema.
  function openFinale() {
    clearTimeout(finTimer);
    finTimer = setTimeout(() => { if (!mounted) return; sheet = 'finale'; renderHud(); focusSheet(); }, reduced() ? 0 : 900);
  }
  function onKey(e) { if (e.key === 'Escape' && sheet) { sheet = null; renderHud(); } }
  function focusSheet() { const b = el.pSheet && el.pSheet.querySelector('button,a'); if (b && b.focus) b.focus({ preventScroll: true }); }

  /* ---------- effetti ---------- */
  function toast(big, small) {
    const t = el.pToast;
    t.querySelector('b').textContent = big;
    t.querySelector('span').textContent = small;
    t.classList.remove('go'); void t.offsetWidth; t.classList.add('go');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('go'), 1600);
  }
  function effectTrip(text) {
    if (ui.sound) noise(0.18, 1.4, 900);
    if (!reduced()) {
      const f = el.pFlash; f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
      host.classList.remove('shake'); void host.offsetWidth; host.classList.add('shake');
    }
    toast('Tac.', text);
  }

  /* ---------- ingresso e "luci che si spengono" ---------- */
  function startIntro() {
    const c = cfg();
    if (!c) return;
    intro = { t0: Date.now() };
    document.body.classList.add('ms-intro');      // la scheda della lezione aspetta la fine dell'ingresso
    el.pIntro.innerHTML = H.introHTML(c);
    el.pIntro.hidden = false;
    el.pIntro.classList.remove('out');
    clearTimeout(introTimer);
    introTimer = setTimeout(() => endIntro(false), reduced() ? 300 : INTRO_MS);
  }
  function endIntro(force) {
    if (!intro) return;
    // si aspetta la scena, ma non per sempre: su una rete lenta resta il messaggio di caricamento e si gioca con i comandi
    if (!force && sceneState === 'loading' && Date.now() - intro.t0 < 8000) { introTimer = setTimeout(() => endIntro(false), 200); return; }
    intro = null;
    document.body.classList.remove('ms-intro');
    clearTimeout(introTimer);
    el.pIntro.classList.add('out');
    setTimeout(() => { if (el.pIntro && !intro) el.pIntro.hidden = true; }, reduced() ? 0 : 900);
    lightsOut();
    renderHud();
  }
  // La casa per un attimo com'era prima del guasto, poi lo scatto: il buio.
  function lightsOut() {
    const ps = lastSnap && provaState(lastSnap);
    if (!ps || !scene || reduced() || name !== 'appartamento' || ps.rcd.on) { push(); return; }
    override = { ...ps, rcd: { ...ps.rcd, on: true, tripped: false }, lines: { luce: { on: true }, prese: { on: true }, cucina: { on: true } }, lamp: true, socket: true, oven: true, dark: false };
    push();
    clearTimeout(outTimer);
    outTimer = setTimeout(() => { override = null; push(); if (mounted) effectTrip(cfg().log.start); }, 900);
  }

  /* ---------- scena ---------- */
  function loadScene(snap) {
    if (sceneState !== 'idle') return;
    sceneState = 'loading';
    const my = ++token;
    name = snap.level.prova.scene;
    loadScript().then(ok => {
      if (!mounted || my !== token) return;
      el.pScene.hidden = false;       // la scena misura il contenitore: va mostrato prima di crearla
      const api = ok && window.FaseNeutroProve && window.FaseNeutroProve.createScene(name, el.pScene, { reduced: reduced(), onTap: tap, onPress: press, onRelease: release });
      if (api) {
        scene = api; sceneState = 'ready'; host._scene = api;
        if (ui.torch && api.torch) api.torch(true);
        if (el.pTools) el.pTools.innerHTML = api.views.map(v => `<button class="btn small" data-pview="${v}">${VIEW_LABEL[v] || v}</button>`).join('');
      }
      else sceneState = 'failed';
      apply(); push();
    });
  }
  function apply() {
    el.pMsg.hidden = !(sceneState === 'loading' || sceneState === 'failed');
    el.pMsg.textContent = sceneState === 'loading' ? 'Caricamento della scena' : 'La scena 3D non è disponibile su questo dispositivo: la prova funziona con i comandi e con lo schema.';
    el.pScene.hidden = sceneState !== 'ready';
    host.classList.toggle('noscene', sceneState === 'failed');
    const st = host.querySelector('.hstage');
    if (el.pTools) { st.style.height = sceneState === 'failed' ? 'auto' : ''; st.style.minHeight = sceneState === 'failed' ? '0' : ''; }
  }
  // Stato per la scena: l'appartamento riusa il trilocale, che vuole anche le stanze accese (qui solo la lampada del corridoio).
  function push() {
    if (!scene || !lastSnap) return;
    const ps = override || provaState(lastSnap);
    if (!ps) return;
    if (ps.scene === 'appartamento') {
      const rooms = {};
      HOUSE.rooms.forEach(r => { rooms[r.id] = { lit: r.id === 'corridoio' && ps.lamp, controls: {} }; });
      scene.update({ rooms, prova: ps });
    } else scene.update(ps);
  }

  /* ---------- cornice ---------- */
  // Si riscrive un pezzo solo se cambia, e si rimette il fuoco sul comando che lo aveva (tastiera).
  function setHTML(node, html) {
    if (!node || node._html === html) return;
    const a = document.activeElement, keep = a && node.contains(a) ? a.getAttribute('data-pid') || a.getAttribute('data-pui') || a.getAttribute('data-pdiag') : null;
    node.innerHTML = html; node._html = html;
    if (keep) { const b = node.querySelector(`[data-pid="${keep}"],[data-pui="${keep}"],[data-pdiag="${keep}"]`); if (b && b.focus) b.focus({ preventScroll: true }); }
  }
  function renderHud() {
    const c = cfg();
    if (!c || !lastSnap) return;
    const ps = provaState(lastSnap), unit = lastSnap.unit;
    host.classList.toggle('lesson', inLesson());
    if (!ps || inLesson()) return;
    const steps = H.stepsOf(name, ps, unit, mem);
    ui.hint = unit.phase === 'fault' ? H.hintOf(name, steps) : '';
    setHTML(el.pMission, H.missionHTML(c, steps, H.clockText(c, minutes)));
    setHTML(el.pLog, H.logHTML(log, ui));
    setHTML(el.pDock, H.dockHTML(c, ps, unit, ui));
    let sh = '';
    if (sheet === 'question' && unit.phase === 'fault') sh = H.questionHTML(lastSnap.level.unit, unit.diag);
    else if (sheet === 'finale') {
      const lv = lastSnap.levels.find(l => l.id === lastSnap.level.id) || {};
      sh = H.finaleHTML(c, (lastSnap.result && lastSnap.result.stars) || lv.stars || 0, !!unit.faultSolved);
    } else sheet = null;
    el.pSheet.hidden = !sh;
    setHTML(el.pSheet, sh);
  }
  // Ogni volta che la prova (ri)parte da capo: registro e passi azzerati, la casa al buio.
  function restart() {
    mem = H.newMemory(); log = []; minutes = 0; sheet = null;
    note(cfg().log.start, { trip: true });
  }

  return {
    // Chiamata a ogni ridisegno della pagina con il livello aperto.
    sync(snapshot) {
      if (mounted && name && snapshot.level.prova && snapshot.level.prova.scene !== name) this.unmount();   // da una prova a un'altra: scena nuova
      const first = !mounted;
      if (first) { mounted = true; name = snapshot.level.prova.scene; build(); apply(); document.addEventListener('keydown', onKey); }
      const ph = snapshot.unit ? snapshot.unit.phase : null;
      const wasFault = phase === 'fault';
      lastSnap = snapshot;
      if (sceneState === 'idle') loadScene(snapshot);
      if (cfg() && wasFault && ph === 'done') openFinale();
      if (cfg() && ph === 'fault' && (!wasFault || first)) {
        restart();
        if (!first && !intro) lightsOut();
      }
      if (first && (ph === 'lesson' || ph === 'fault') && cfg()) startIntro();
      phase = ph;
      if (!override) push();
      renderHud();
    },
    unmount() {
      holding.forEach(id => { try { s().release(id); } catch (e) { /* si lascia la pagina */ } });
      holding.clear();
      clearTimeout(introTimer); clearTimeout(outTimer); clearTimeout(finTimer);
      document.removeEventListener('keydown', onKey);
      if (scene) { scene.dispose(); scene = null; }
      if (ui.schema && env.drawer) env.drawer(false);
      host._scene = null; name = null; intro = null; override = null;
      document.body.classList.remove('ms-intro');
      sceneState = 'idle'; mounted = false; lastSnap = null; token++; phase = null; ui.schema = false; ui.torch = false;
      host.innerHTML = ''; host.onclick = null; host.className = host.className.replace(/\b(lesson|noscene|shake)\b/g, '').trim();
    },
    isMounted: () => mounted,
    // lo schema si chiude anche dal suo pulsante (sul telefono copre i comandi)
    closeDrawer() { ui.schema = false; if (env.drawer) env.drawer(false); renderHud(); const b = el.pDock && el.pDock.querySelector('[data-pui="schema"]'); if (b && b.focus) b.focus({ preventScroll: true }); },
    // la prova ha la cornice a tutto schermo (milestone)?
    framed: snapshot => !!(snapshot && snapshot.level.prova && H.provaOf(snapshot.level.prova.scene)),
  };
}
