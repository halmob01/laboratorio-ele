// Pagina delle prove 3D (appartamento di notte, officina): la scena accanto al banco dell'esercizio.
// Non contiene regole: legge lo stato della sessione (state.js), lo passa alla scena e riporta i tocchi alla sessione.

import { HOUSE } from '../content/trilocale.js';
import { provaState } from './state.js';

const VIEW_LABEL = {
  insieme: 'Vista d’insieme', quadro: 'Quadro', soggiorno: 'Soggiorno', cucina: 'Cucina',
  pulsantiera: 'Pulsantiera', motore: 'Motore',
};

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

/**
 * @param {HTMLElement} host   contenitore (#house)
 * @param {{session, reduced:()=>boolean}} env
 */
export function createProva(host, env) {
  let scene = null, sceneState = 'idle', mounted = false, token = 0, name = null, lastSnap = null, sceneEl = null, toolsEl = null;
  const holding = new Set();

  const inLesson = () => !!(lastSnap && lastSnap.unit && lastSnap.unit.phase === 'lesson');

  function build() {
    host.innerHTML = `<div class="hstage"><div class="hscene" id="pScene"></div>
        <div class="htools" id="pTools"></div>
        <div class="hmsg" id="pMsg" role="status" hidden></div></div>`;
    sceneEl = host.querySelector('#pScene');
    toolsEl = host.querySelector('#pTools');
    host.onclick = e => {
      const b = e.target.closest('[data-pview]');
      if (b && scene) scene.look(b.dataset.pview);
    };
  }

  // Un tocco o una pressione sulla scena: diventa un'azione della sessione.
  const s = () => env.session;
  function tap(u) {
    if (inLesson()) return;
    if (u.kind === 'toggle') s().toggleControl(u.id);
    else if (u.kind === 'test') s().testPart(u.part);
    else if (u.kind === 'reset') s().resetPart(u.part);
  }
  function press(u) { if (inLesson()) return; holding.add(u.id); s().press(u.id); }
  function release(u) { if (!holding.delete(u.id)) return; s().release(u.id); }

  function loadScene(snap) {
    if (sceneState !== 'idle') return;
    sceneState = 'loading';
    const my = ++token;
    name = snap.level.prova.scene;
    loadScript().then(ok => {
      if (!mounted || my !== token) return;
      const api = ok && window.FaseNeutroProve && window.FaseNeutroProve.createScene(name, sceneEl, { reduced: env.reduced(), onTap: tap, onPress: press, onRelease: release });
      if (api) {
        scene = api; sceneState = 'ready'; host._scene = api;     // per i test della pagina
        toolsEl.innerHTML = api.views.map(v => `<button class="btn small" data-pview="${v}">${VIEW_LABEL[v] || v}</button>`).join('');
      } else sceneState = 'failed';
      apply(); push();
    });
  }

  function apply() {
    const msg = host.querySelector('#pMsg');
    msg.hidden = !(sceneState === 'loading' || sceneState === 'failed');
    msg.textContent = sceneState === 'loading' ? 'Caricamento della scena' : 'La scena 3D non è disponibile su questo dispositivo: l’esercizio funziona con il banco qui sotto.';
    sceneEl.hidden = sceneState !== 'ready';
    host.querySelector('.hstage').style.height = sceneState === 'failed' ? 'auto' : '';
    host.querySelector('.hstage').style.minHeight = sceneState === 'failed' ? '0' : '';
  }

  // Stato per la scena: l'appartamento riusa il trilocale, che vuole anche le stanze accese (qui solo la lampada del corridoio).
  function push() {
    if (!scene || !lastSnap) return;
    const ps = provaState(lastSnap);
    if (!ps) return;
    if (ps.scene === 'appartamento') {
      const rooms = {};
      HOUSE.rooms.forEach(r => { rooms[r.id] = { lit: r.id === 'corridoio' && ps.lamp, controls: {} }; });
      scene.update({ rooms, prova: ps });
    } else scene.update(ps);
  }

  return {
    // Chiamata a ogni ridisegno della pagina con il livello aperto.
    sync(snapshot) {
      if (!mounted) { mounted = true; build(); apply(); }
      lastSnap = snapshot;
      if (sceneState === 'idle') loadScene(snapshot);
      push();
    },
    unmount() {
      holding.forEach(id => { try { s().release(id); } catch (e) { /* si lascia la pagina */ } });
      holding.clear();
      if (scene) { scene.dispose(); scene = null; }
      sceneState = 'idle'; mounted = false; lastSnap = null; token++;
      host.innerHTML = ''; host.onclick = null;
    },
    isMounted: () => mounted,
  };
}
