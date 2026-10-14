// Pagina delle prove dei moduli: la scena 3D accanto all'esercizio. Non contiene regole:
// legge l'istantanea della sessione, la passa alla scena e inoltra i tocchi alla sessione.

const TOOLS = {
  'p01-notte': [['over', 'Vista d’insieme'], ['quadro', 'Quadro'], ['cucina', 'Cucina']],
  'p02-officina': [['over', 'Vista d’insieme'], ['quadro', 'Quadro']],
};

export const isProveLevel = id => /^p\d\d-/.test(id || '');

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
 * @param {{ session, reduced:()=>boolean, onState:(state:string)=>void }} env
 */
export function createProvaPage(host, env) {
  let scene = null, state = 'idle', levelId = null, mounted = false, token = 0, last = null;
  let sceneEl = null;

  const inLesson = () => !!(last && last.unit && last.unit.phase === 'lesson');
  const setState = s => { state = s; if (env.onState) env.onState(s); };

  function build() {
    const tools = (TOOLS[levelId] || []).map(([k, t]) => `<button class="btn small" data-p="${k}">${t}</button>`).join('');
    host.innerHTML = `<div class="hstage"><div class="hscene" id="pScene"></div><div class="htools">${tools}</div><div class="hmsg" id="pMsg" role="status" hidden></div></div>`;
    sceneEl = host.querySelector('#pScene');
    host.onclick = e => {
      const b = e.target.closest('[data-p]');
      if (!b || !scene) return;
      if (b.dataset.p === 'over') scene.overview(); else scene.focus(b.dataset.p);
    };
  }

  function message() {
    const m = host.querySelector('#pMsg');
    if (!m) return;
    m.hidden = !(state === 'loading' || state === 'failed');
    m.textContent = state === 'loading' ? 'Caricamento della scena' : 'La scena 3D non è disponibile su questo dispositivo: lavora sullo schema e sulla stanza.';
    if (sceneEl) sceneEl.hidden = state === 'failed';
  }

  function load() {
    if (state !== 'idle') return;
    setState('loading');
    const my = ++token;
    const s = env.session;
    loadScript().then(ok => {
      if (!mounted || my !== token) return;
      const api = ok && window.FaseNeutroProve && window.FaseNeutroProve.createProva(sceneEl, levelId, {
        reduced: env.reduced(),
        onControl: id => { if (!inLesson()) s.toggleControl(id); },
        onPress: id => { if (!inLesson()) s.press(id); },
        onRelease: id => { if (!inLesson()) s.release(id); },
        onReset: id => { if (!inLesson()) s.resetPart(id); },
        onOverload: () => { if (!inLesson() && last) s.setOverload(!last.overload); },
        onRewind: () => { if (!inLesson()) s.rewind(); },
      });
      if (api) { scene = api; setState('ready'); if (last) scene.update(last); }
      else setState('failed');
      message();
    });
  }

  return {
    // Chiamata a ogni ridisegno della pagina con la prova aperta.
    sync(snapshot) {
      if (mounted && levelId !== snapshot.level.id) this.unmount();
      if (!mounted) { mounted = true; levelId = snapshot.level.id; build(); message(); }
      last = snapshot;
      if (state === 'idle') load();
      if (scene) scene.update(snapshot);
    },
    unmount() {
      if (scene) { scene.dispose(); scene = null; }
      const was = state;
      state = 'idle'; mounted = false; levelId = null; last = null; token++;
      host.onclick = null;
      host.innerHTML = '';
      if (was !== 'idle' && env.onState) env.onState('idle');
    },
    isMounted: () => mounted,
    state: () => state,
  };
}
