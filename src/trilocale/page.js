// Pagina del trilocale a tutto schermo: la casa 3D occupa la scena, il banco si apre in un pannello accanto alla stanza
// che si cabla, e i fili tirati sul banco compaiono nei muri. Racconto in atti:
//   ordine di lavoro -> arrivo (la casa al tramonto, il tetto si alza) -> le stanze -> banco -> la stanza si accende ->
//   collaudo con gli interruttori veri -> ... -> finite le tre stanze scende la sera, la Dichiarazione di conformita'.
// Non contiene regole: legge lo stato della casa (house.js) e passa i tocchi alla sessione.

import { HOUSE, TRILOCALE_FRAME as F } from '../content/trilocale.js';
import { houseState, wires3D, roomPoint, controlPoints } from './house.js';
import { planHTML } from './plan.js';
import * as T from './hud.js';
import { sound } from '../prove/sound.js';
import { loaderHTML } from '../ui2d/tower.js';

const CIRCUITS = T.CIRCUITS;
const EXT = { tx: 4.5, tz: 4.2, ty: 0.8, yaw: -24, pitch: 22, dist: 21 };          // la casa vista da fuori
const FAR = { tx: 4.5, tz: 4.2, ty: 0.8, yaw: -34, pitch: 18, dist: 30 };
const SOUND_KEY = 'fase-e-neutro-suono';

// Caricamento del pacchetto 3D: una sola volta per pagina, condiviso da tutti i montaggi.
let scriptPromise = null;
function loadScript() {
  if (window.FaseNeutroScene) return Promise.resolve(true);
  if (!scriptPromise) {
    scriptPromise = new Promise(resolve => {
      const el = document.createElement('script');
      el.src = 'trilocale.js';
      el.onload = () => resolve(true);
      el.onerror = () => { el.remove(); scriptPromise = null; resolve(false); };
      document.head.appendChild(el);
    });
  }
  return scriptPromise;
}

export function isHouseLevel(id) { return /^t\d\d-/.test(id || ''); }

// Primo circuito da fare (non verificato), altrimenti il primo.
export function firstCircuit(session) {
  const pending = CIRCUITS.find(c => { const p = session.peek(c.id); return p && !p.passed; });
  return (pending || CIRCUITS[0]).id;
}

/**
 * @param {HTMLElement} host   contenitore (#house)
 * @param {{session, go:(hash:string)=>void, reduced:()=>boolean, bench?:(open:boolean)=>void, name?:()=>string}} env
 */
export function createHouse(host, env) {
  let scene = null, sceneState = 'idle', lastLevel = null, mounted = false, mountToken = 0;
  let lastSnap = null, houseOn = true, prevPower = false, prevWireKey = null;
  let el = {}, act = null, wantBench = false, used = new Set(), sheet = null, pinLoop = 0;
  const timers = new Set();
  const ui = { wires: true, plan: false, sound: true, bench: false };
  try { ui.sound = localStorage.getItem(SOUND_KEY) !== '0'; } catch (e) { /* predefinito: suono acceso */ }

  const reduced = () => !!(env.reduced && env.reduced());
  const later = (ms, fn) => { const t = setTimeout(() => { timers.delete(t); if (mounted) fn(); }, reduced() ? 0 : ms); timers.add(t); return t; };
  const clearLater = () => { timers.forEach(clearTimeout); timers.clear(); };
  const inLesson = () => !!(lastSnap && lastSnap.unit && lastSnap.unit.phase === 'lesson');
  const circuitOf = id => CIRCUITS.find(c => c.id === id);
  const hs = () => houseState(env.session, houseOn);
  const allDone = () => CIRCUITS.every(c => hs().rooms[c.room].state === 'funziona');

  function build() {
    host.innerHTML = `<div class="hstage"><div class="hscene" id="hScene"></div><div class="hplan" id="hPlan" hidden></div><div class="hmsg" id="hMsg" role="status" hidden></div><div class="pvig"></div></div>
      <header class="phud ptop" id="tTop"></header>
      <nav class="phud psteps-box tstations" id="tSteps" aria-label="Le stanze"></nav>
      <div class="tpins" id="tPins"></div>
      <div class="psub" id="tSub" aria-live="polite"></div>
      <div class="psheet" id="tSheet" hidden></div>
      <div class="pintro" id="tIntro" hidden></div>`;
    ['hScene', 'hPlan', 'hMsg', 'tTop', 'tSteps', 'tPins', 'tSub', 'tSheet', 'tIntro'].forEach(id => (el[id] = host.querySelector('#' + id)));
    host.onclick = onClick;
    // trascinando la telecamera i segnaposti seguono la casa
    el.hScene.addEventListener('pointermove', e => { if (e.buttons) placePins(); });
    el.hScene.addEventListener('wheel', () => placePins(), { passive: true });
  }

  function onClick(e) {
    const go = e.target.closest('[data-tgo]');
    if (go) { e.preventDefault(); pickRoom(go.dataset.tgo); return; }
    const ct = e.target.closest('[data-tctl]');
    if (ct) { const [c, id] = ct.dataset.tctl.split('|'); control(c, id); return; }
    const r = e.target.closest('[data-room]');
    if (r) { const hit = HOUSE.rooms.find(x => x.id === r.dataset.room); if (hit && hit.circuit) pickRoom(hit.circuit); return; }
    if (e.target.closest('[data-breaker]')) { if (!inLesson()) env.session.toggleBreaker(); return; }
    const c = e.target.closest('[data-circuit]');
    if (c) { control(c.dataset.circuit, c.dataset.ctl); return; }
    const u = e.target.closest('[data-tui]');
    if (!u) return;
    const k = u.dataset.tui;
    if (k === 'start') { sound.unlock(); arrive(); }
    else if (k === 'skip') { sound.unlock(); skipArrive(); }
    else if (k === 'house') closeBench();
    else if (k === 'wires') { ui.wires = !ui.wires; const w = wireSet(); if (w) w.setVisible(ui.wires); render(); }
    else if (k === 'plan') { ui.plan = !ui.plan; apply(); render(); }
    else if (k === 'sound') { ui.sound = !ui.sound; sound.setEnabled(ui.sound); if (ui.sound) sound.unlock(); try { localStorage.setItem(SOUND_KEY, ui.sound ? '1' : '0'); } catch (x) { /* ok */ } render(); }
    else if (k === 'closeSheet') { sheet = null; render(); backInside(); }
  }
  const wireSet = () => (scene && scene.wires ? scene.wires() : null);

  /* ---------- stanze, banco, comandi ---------- */
  function pickRoom(circuit) {
    if (act === 'order' || act === 'arrive') return;
    if (circuit === lastLevel) { openBench(); return; }
    wantBench = true;
    env.go('#/livello/' + circuit);
  }
  function openBench() {
    setAct('bench');
    ui.bench = true;
    if (env.bench) env.bench(true);
    const c = circuitOf(lastLevel);
    if (scene && c) scene.focusRoom(c.room);
    sound.click();
    sub('', '', 1);
    render(); followPins(900);
  }
  function closeBench() {
    ui.bench = false;
    if (env.bench) env.bench(false);
    if (act === 'bench') { setAct('house'); if (scene) scene.overview(); hintPick(); }
    render(); followPins(900);
  }
  function control(circuit, id) {
    if (circuit !== lastLevel) { pickRoom(circuit); return; }
    if (inLesson()) return;
    env.session.toggleControl(id);
    sound.click();
    if (act === 'collaudo') {
      used.add(id);
      const need = controlPoints(circuit).length;
      if (used.size >= need) {
        sound.chime(2);
        sub(F.collaudoOk, '', 2200);
        setAct('house');
        later(1400, () => { if (allDone()) finale(); else { if (scene) scene.overview(); hintPick(F.next); followPins(900); } });
      }
      render();
    }
  }

  /* ---------- sottotitoli e segnaposti ---------- */
  function sub(big, small, ms) {
    const n = el.tSub;
    if (!n) return;
    n.innerHTML = `${big ? `<b>${big}</b>` : ''}${small ? `<span>${small}</span>` : ''}`;
    n.classList.toggle('go', !!(big || small));
    clearTimeout(n._h);
    if (ms && (big || small)) n._h = setTimeout(() => n.classList.remove('go'), ms);
  }
  function hintPick(text) { sub('', text || F.pick, 0); }
  function pins() {
    if (!scene || !scene.project || ui.plan) return [];
    if (act === 'house') {
      const h = hs(), next = CIRCUITS.find(c => h.rooms[c.room].state !== 'funziona');
      return CIRCUITS.map(c => {
        const p = scene.project(...roomPoint(c.room)), st = h.rooms[c.room].state;
        return p.visible ? { x: p.x, y: p.y, label: c.label, sub: st, act: `data-tgo="${c.id}"`, cls: st === 'funziona' ? 'ok' : next && next.id === c.id ? 'next' : '' } : null;
      }).filter(Boolean);
    }
    if (act === 'collaudo') {
      return controlPoints(lastLevel).map(c => {
        const p = scene.project(...c.pt);
        return p.visible ? { x: p.x, y: p.y, label: c.label, act: `data-tctl="${lastLevel}|${c.id}"`, cls: used.has(c.id) ? 'ok' : 'next' } : null;
      }).filter(Boolean);
    }
    return [];
  }
  // se i segnaposti sono gli stessi si spostano soltanto: riscriverli a ogni fotogramma perderebbe i tocchi
  let pinKey = '';
  function placePins() {
    if (!el.tPins) return;
    const list = pins(), key = list.map(p => p.act + p.label + p.sub + p.cls).join('|');
    if (key !== pinKey) { pinKey = key; el.tPins.innerHTML = T.pinsHTML(list); return; }
    [...el.tPins.children].forEach((n, i) => { n.style.transform = `translate(${Math.round(list[i].x)}px,${Math.round(list[i].y)}px)`; });
  }
  // durante gli spostamenti della telecamera i segnaposti la seguono
  function followPins(ms) {
    placePins();
    if (reduced() || typeof requestAnimationFrame === 'undefined') return;
    const end = performance.now() + ms;
    cancelAnimationFrame(pinLoop);
    const step = () => { placePins(); if (performance.now() < end && mounted) pinLoop = requestAnimationFrame(step); };
    pinLoop = requestAnimationFrame(step);
  }

  /* ---------- atti ---------- */
  function setAct(a) {
    act = a; host.dataset.act = a;
    document.body.classList.toggle('ms-intro', a !== 'bench');      // la lezione si vede solo nel pannello del banco
  }
  function startOrder() {
    setAct('order');
    el.tIntro.innerHTML = T.orderHTML(F);
    el.tIntro.hidden = false; el.tIntro.classList.remove('out');
    const b = el.tIntro.querySelector('[data-tui="start"]'); if (b && b.focus) b.focus({ preventScroll: true });
  }
  function hideOrder() { el.tIntro.classList.add('out'); later(900, () => { if (el.tIntro) el.tIntro.hidden = true; }); }
  function prepareOutside() { if (scene && act === 'order') { scene.setRoof(true, true, 1); scene.look(FAR, 1); } }
  // Arrivo: la casa al tramonto, la camera si avvicina, il tetto si alza, si guarda dall'alto.
  function arrive() {
    if (act !== 'order') return;
    if (sceneState === 'loading') { el.tIntro.classList.add('waiting'); const t = setTimeout(() => { timers.delete(t); if (mounted) arrive(); }, 200); timers.add(t); return; }
    hideOrder();
    if (!scene) { toHouse(); return; }
    setAct('arrive');
    scene.look(EXT, 2200);
    later(2300, () => { scene.setRoof(false, true, 1400); sound.click(); });
    later(2700, () => scene.look({}, 1600));
    later(4400, toHouse);
  }
  function skipArrive() {
    clearLater(); hideOrder();
    if (scene) { scene.setRoof(false, true, 1); scene.look({}, 1); }
    toHouse();
  }
  function toHouse() {
    setAct('house');
    if (wantBench) { wantBench = false; openBench(); return; }
    hintPick();
    render(); followPins(400);
  }
  // Verifica riuscita: il pannello si chiude, la corrente corre sui fili posati, la stanza si accende; poi il collaudo.
  function lit() {
    ui.bench = false;
    if (env.bench) env.bench(false);
    setAct('lit');
    const c = circuitOf(lastLevel);
    if (scene && c) scene.focusRoom(c.room);
    const w = wireSet(); if (w) w.flow(2400);
    later(500, () => { sound.chime(0); sub(F.works, F.rooms[lastLevel].kind, 2000); });
    later(2400, () => {
      if (!scene) { if (allDone()) finale(); else { setAct('house'); hintPick(F.next); } render(); return; }
      used = new Set();
      setAct('collaudo');
      // tutta la casa in vista: gli interruttori del corridoio stanno in tre stanze diverse
      if (controlPoints(lastLevel).length > 1) scene.overview();
      sub('', F.rooms[lastLevel].collaudo, 0);
      render(); followPins(1400);
    });
    render();
  }
  // Finale: scende la sera, la casa accesa vista da fuori, la Dichiarazione di conformita'.
  function finale() {
    setAct('finale');
    sub('', '', 1);
    if (scene) {
      scene.update(shown(hs()));                  // a sera tutte le stanze accese, qualunque sia la posizione degli interruttori
      const w = wireSet(); if (w) w.setVisible(false);
      scene.setNight(true, 2600);
      later(400, () => { scene.setRoof(true, true, 1800); scene.look(EXT, 2600); });
      later(1800, () => sub(F.evening, '', 2600));
    }
    later(scene ? 4200 : 0, () => {
      sheet = 'dico'; render();
      for (let i = 0; i < 3; i++) later(300 + i * 280, () => sound.chime(i));
      const b = el.tSheet.querySelector('a,button'); if (b && b.focus) b.focus({ preventScroll: true });
    });
    render();
  }
  function backInside() {
    setAct('house');
    const w = wireSet(); if (w) w.setVisible(ui.wires);
    if (scene) scene.update(hs());
    if (scene) { scene.setRoof(false, true, 1100); scene.look({}, 1300); }
    hintPick(); followPins(1400); render();
  }

  /* ---------- scena ---------- */
  function loadScene() {
    if (sceneState !== 'idle') return;
    sceneState = 'loading';
    const token = ++mountToken;
    loadScript().then(ok => {
      if (!mounted || token !== mountToken) return;      // nel frattempo si e' lasciata la pagina
      el.hScene.hidden = false;
      const api = ok && window.FaseNeutroScene && window.FaseNeutroScene.createScene(el.hScene, {
        reduced: reduced(), noIntro: true, startRoof: act === 'order', start: act === 'order' ? FAR : undefined, wires: true,
        onBreaker: () => { if (!inLesson()) env.session.toggleBreaker(); },
        onControl: (circuit, id) => control(circuit, id),
        onRoof: () => {},
        onRoom: room => { const hit = HOUSE.rooms.find(x => x.id === room); if (hit && hit.circuit) pickRoom(hit.circuit); },
      });
      if (api) {
        scene = api; sceneState = 'ready'; prevWireKey = null;
        if (act !== 'order') { const c = circuitOf(lastLevel); if (act === 'bench' && c) scene.focusRoom(c.room); }
      } else { sceneState = 'failed'; ui.plan = null; }
      apply(); refresh(); followPins(800);
      if (act === 'order') { prepareOutside(); const l = el.tIntro.querySelector('.pload'); if (l) l.classList.add('done'); }
    });
  }
  function apply() {
    const usePlan = ui.plan || sceneState === 'failed';
    el.hPlan.hidden = !usePlan;
    el.hScene.hidden = usePlan || sceneState !== 'ready';
    el.hMsg.hidden = !(sceneState === 'loading' && act !== 'order');
    if (!el.hMsg.classList.contains('load')) { el.hMsg.classList.add('load'); el.hMsg.innerHTML = loaderHTML('Caricamento della scena'); }
    host.classList.toggle('noscene', sceneState === 'failed');
  }

  /* ---------- disegno ---------- */
  function render() {
    if (!mounted || !el.tTop) return;
    const h = hs();
    el.tTop.innerHTML = T.topHTML(F, ui);
    el.tSteps.innerHTML = T.stationsHTML(F, h, lastLevel);
    el.tSheet.hidden = sheet !== 'dico';
    el.tSheet.innerHTML = sheet === 'dico' ? T.dicoHTML(F, env.name ? env.name() : '', 'Ore ' + new Date().toTimeString().slice(0, 5)) : '';
    placePins();
  }
  // Lo stato che la scena mostra: nel finale la casa e' tutta accesa.
  function shown(h) {
    if (act !== 'finale') return h;
    const rooms = {};
    Object.keys(h.rooms).forEach(k => { rooms[k] = h.rooms[k].circuit ? { ...h.rooms[k], lit: true } : h.rooms[k]; });
    return { ...h, rooms };
  }
  function refresh() {
    if (!mounted) return;
    const h = hs();
    if (scene) scene.update(shown(h));
    el.hPlan.innerHTML = planHTML(h, { select: lastLevel });
    // i fili del banco nella casa: i nuovi si stendono, quelli tolti spariscono
    const w = wireSet();
    if (w && lastSnap) {
      const list = wires3D(lastLevel, (lastSnap.wires || []).filter(x => !x.fixed));
      const key = lastLevel;
      w.sync(list, key === prevWireKey);
      prevWireKey = key;
    }
    render();
  }

  return {
    // Chiamata a ogni ridisegno della pagina con il livello aperto.
    sync(snapshot) {
      const first = !mounted;
      if (first) { mounted = true; build(); apply(); }
      const prev = lastLevel;
      // Quadro generale: si spegne solo se lo spegni tu nel circuito aperto.
      if (snapshot.power) houseOn = true;
      else if (prev === snapshot.level.id && prevPower) houseOn = false;
      prevPower = !!snapshot.power;
      lastSnap = snapshot;
      lastLevel = snapshot.level.id;
      if (first) { if (allDone()) { setAct('house'); hintPick(); } else startOrder(); }
      if (sceneState === 'idle') loadScene();
      if (!first && prev !== lastLevel) {
        // cambiando stanza: se si era chiesto il banco si apre, altrimenti si guarda la stanza
        if (wantBench && act !== 'order' && act !== 'arrive') { wantBench = false; openBench(); }
        else if (act === 'bench') openBench();
      }
      refresh();
    },
    // Dopo una verifica riuscita la stanza si accende e parte il collaudo.
    passed() { lit(); },
    closeBench,
    framed: () => true,
    unmount() {
      clearLater(); cancelAnimationFrame(pinLoop);
      if (scene) { scene.dispose(); scene = null; }
      if (ui.bench && env.bench) env.bench(false);
      document.body.classList.remove('ms-intro');
      sceneState = 'idle'; mounted = false; lastLevel = null; mountToken++; act = null; ui.bench = false; ui.plan = false; sheet = null; wantBench = false;
      pinKey = ''; host.innerHTML = ''; host.onclick = null; delete host.dataset.act;
    },
    isMounted: () => mounted,
  };
}
