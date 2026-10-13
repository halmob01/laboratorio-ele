// Pagina del trilocale: la scena 3D (o la pianta) accanto alla pagina dell'esercizio.
// Non contiene regole: legge lo stato della casa (house.js) e passa i tocchi alla sessione.

import { HOUSE } from '../content/trilocale.js';
import { houseState } from './house.js';
import { planHTML } from './plan.js';

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const CIRCUITS = [
  { id: 't01-bagno', room: 'bagno', label: 'Bagno' },
  { id: 't02-camera', room: 'camera', label: 'Camera' },
  { id: 't03-corridoio', room: 'corridoio', label: 'Corridoio' },
];

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
 * @param {{session, go:(hash:string)=>void, reduced:()=>boolean}} env
 */
export function createHouse(host, env) {
  let scene = null, sceneState = 'idle', view = 'scene', lastLevel = null, mounted = false, mountToken = 0;
  let lastSnap = null, houseOn = true, prevPower = false;
  let sceneEl = null, planEl = null, tabsEl = null;

  function build() {
    host.innerHTML = `<div class="hstage"><div class="hscene" id="hScene"></div><div class="hplan" id="hPlan" hidden></div>
        <div class="htools"><button class="btn small" data-h="plan" aria-pressed="false">Pianta</button><button class="btn small" data-h="over">Vista d’insieme</button></div>
        <div class="hmsg" id="hMsg" role="status" hidden></div></div>
      <nav class="htabs" aria-label="Circuiti della casa"></nav>
      <div class="hsoon"><b>Collaudo finale</b><small>in arrivo</small></div>`;
    tabsEl = host.querySelector('.htabs');
    sceneEl = host.querySelector('#hScene');
    planEl = host.querySelector('#hPlan');
    host.onclick = e => {
      const b = e.target.closest('[data-h]');
      if (b) {
        if (b.dataset.h === 'plan') { view = view === 'plan' ? 'scene' : 'plan'; apply(); }
        else if (b.dataset.h === 'over') { view = 'scene'; apply(); if (scene) scene.overview(); }
        return;
      }
      const r = e.target.closest('[data-room]');
      if (r) { const hit = HOUSE.rooms.find(x => x.id === r.dataset.room); if (hit && hit.circuit) env.go('#/livello/' + hit.circuit); return; }
      if (e.target.closest('[data-breaker]')) { if (!inLesson()) env.session.toggleBreaker(); return; }
      const c = e.target.closest('[data-circuit]');
      if (c) control(c.dataset.circuit, c.dataset.ctl);
    };
  }

  function loadScene() {
    if (sceneState !== 'idle') return;
    sceneState = 'loading';
    const token = ++mountToken;
    loadScript().then(ok => {
      if (!mounted || token !== mountToken) return;      // nel frattempo si e' lasciata la pagina
      const api = ok && window.FaseNeutroScene && window.FaseNeutroScene.createScene(sceneEl, {
        reduced: env.reduced(),
        onBreaker: () => { if (!inLesson()) env.session.toggleBreaker(); },
        onControl: (circuit, id) => control(circuit, id),
        onRoom: room => { const hit = HOUSE.rooms.find(x => x.id === room); if (hit && hit.circuit) env.go('#/livello/' + hit.circuit); },
      });
      if (api) { scene = api; sceneState = 'ready'; if (lastLevel) focus(lastLevel); }
      else { sceneState = 'failed'; view = 'plan'; }
      apply(); refresh();
    });
  }

  const inLesson = () => !!(lastSnap && lastSnap.unit && lastSnap.unit.phase === 'lesson');
  function control(circuit, id) {
    if (circuit !== lastLevel) { env.go('#/livello/' + circuit); return; }
    if (!inLesson()) env.session.toggleControl(id);
  }

  function focus(levelId, instant) {
    const c = CIRCUITS.find(x => x.id === levelId);
    if (scene && c) scene.focusRoom(c.room);
  }

  function apply() {
    const usePlan = view === 'plan' || sceneState === 'failed';
    planEl.hidden = !usePlan;
    sceneEl.hidden = usePlan || sceneState !== 'ready';
    const msg = host.querySelector('#hMsg');
    msg.hidden = !(sceneState === 'loading' || sceneState === 'failed');
    msg.textContent = sceneState === 'loading' ? 'Caricamento della scena' : 'La scena 3D non è disponibile su questo dispositivo: ecco la pianta.';
    const pb = host.querySelector('[data-h="plan"]');
    pb.textContent = usePlan && sceneState === 'ready' ? 'Scena 3D' : 'Pianta';
    pb.hidden = sceneState === 'failed';
    host.querySelector('[data-h="over"]').hidden = usePlan;
  }

  function refresh() {
    if (!mounted) return;
    const hs = houseState(env.session, houseOn);
    if (scene) scene.update(hs);
    planEl.innerHTML = planHTML(hs, { select: lastLevel });
    tabsEl.innerHTML = CIRCUITS.map(c => {
      const st = hs.rooms[c.room].state;
      return `<a class="htab" href="#/livello/${c.id}" data-sel="${c.id === lastLevel}"${c.id === lastLevel ? ' aria-current="page"' : ''}><b>${esc(c.label)}</b><small class="st-${st === 'funziona' ? 'ok' : st === 'in corso' ? 'run' : 'new'}">${esc(st)}</small></a>`;
    }).join('');
  }

  return {
    // Chiamata a ogni ridisegno della pagina con il livello aperto.
    sync(snapshot) {
      if (!mounted) { mounted = true; build(); apply(); }
      const prev = lastLevel;
      // Quadro generale: si spegne solo se lo spegni tu nel circuito aperto.
      if (snapshot.power) houseOn = true;
      else if (prev === snapshot.level.id && prevPower) houseOn = false;
      prevPower = !!snapshot.power;
      lastSnap = snapshot;
      lastLevel = snapshot.level.id;
      if (sceneState === 'idle') loadScene();
      refresh();
      if (prev !== lastLevel) focus(lastLevel);
    },
    // Dopo una verifica riuscita la telecamera torna sulla stanza che si accende.
    passed() { if (scene && lastLevel) focus(lastLevel); },
    unmount() {
      if (scene) { scene.dispose(); scene = null; }
      sceneState = 'idle'; mounted = false; lastLevel = null; view = 'scene'; mountToken++;
      host.innerHTML = '';
    },
    isMounted: () => mounted,
  };
}
