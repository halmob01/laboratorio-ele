// Kit comune delle scene 3D delle prove dei moduli: palcoscenico (renderer, camera, tocchi, etichette)
// e pezzi riusabili. Nessuna regola del gioco: le scene leggono lo stato osservato e segnalano i tocchi.
// Niente texture ne' modelli esterni: solo forme semplici e materiali, cosi' il pacchetto resta leggero e parte subito.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function supported() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

const ease = (cur, target, k) => cur + (target - cur) * k;
export { ease };

/**
 * Palcoscenico: renderer a richiesta (si ridisegna solo se serve), camera orbitale, tocchi e etichette.
 * @param {HTMLElement} container
 * @param {{ bg:number, home:{pos:number[], target:number[]}, min:number, max:number, polar?:number, reduced?:boolean, lite?:boolean, capture?:boolean }} o
 */
export function createStage(container, o) {
  const lite = o.lite !== undefined ? o.lite : (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || container.clientWidth < 700;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: !lite, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: !!o.capture });
  } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lite ? 1.25 : 1.75));
  renderer.setClearColor(o.bg);
  renderer.toneMapping = THREE.AgXToneMapping;
  renderer.toneMappingExposure = o.exposure || 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.className = 'house3d';
  renderer.domElement.setAttribute('role', 'img');
  container.appendChild(renderer.domElement);
  const labelLayer = document.createElement('div');
  labelLayer.className = 'hlabels';
  container.appendChild(labelLayer);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(o.bg);
  const camera = new THREE.PerspectiveCamera(o.fov || 38, 1, 0.1, 120);
  camera.position.set(...o.home.pos);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(...o.home.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = o.min;
  controls.maxDistance = o.max;
  controls.maxPolarAngle = o.polar || Math.PI * 0.48;
  controls.update();

  let needs = true, raf = 0, disposed = false, onScreen = true;
  const anims = new Set();            // animazioni in corso: funzioni (dt) -> true se continuano
  const frameHooks = [];              // funzioni chiamate a ogni fotogramma disegnato (dt, t)
  const redraw = () => { needs = true; schedule(); };
  controls.addEventListener('change', redraw);

  // ---- etichette (HTML sopra la scena) ----
  const labels = [];
  function label(text, obj, cls = 'ctl', dy = 0, max = Infinity) {
    const el = document.createElement('div');
    el.className = 'hlabel ' + cls;
    el.textContent = text;
    labelLayer.appendChild(el);
    const rec = { el, obj, dy, max, v: new THREE.Vector3() };
    labels.push(rec);
    return rec;
  }
  function placeLabels() {
    const w = container.clientWidth, h = container.clientHeight;
    labels.forEach(l => {
      if (l.hidden) { l.el.style.display = 'none'; return; }
      l.obj.getWorldPosition(l.v);
      l.v.y += l.dy;
      const near = camera.position.distanceTo(l.v) <= l.max;     // le etichette dei dettagli compaiono avvicinandosi
      l.v.project(camera);
      const vis = near && l.v.z < 1 && Math.abs(l.v.x) < 1.1 && Math.abs(l.v.y) < 1.1;
      l.el.style.display = vis ? '' : 'none';
      if (vis) l.el.style.transform = `translate(${((l.v.x + 1) / 2) * w}px,${((1 - l.v.y) / 2) * h}px) translate(-50%,-50%)`;
    });
  }

  // ---- tocchi: pezzi cliccabili (clic) o tenuti premuti (pulsanti) ----
  const pickables = [];               // { meshes:[Mesh], click?, down?, up?, tip? }
  const ray = new THREE.Raycaster();
  const ptr = new THREE.Vector2();
  function hitAt(e) {
    const r = renderer.domElement.getBoundingClientRect();
    ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ptr, camera);
    const all = pickables.flatMap(p => p.meshes);
    const hit = ray.intersectObjects(all, false)[0];
    return hit ? pickables.find(p => p.meshes.includes(hit.object)) : null;
  }
  function pickable(meshes, h) {
    const p = { meshes: Array.isArray(meshes) ? meshes : [meshes], ...h };
    pickables.push(p);
    return p;
  }
  let downAt = null, held = null;
  const dom = renderer.domElement;
  dom.addEventListener('pointerdown', e => {
    const p = hitAt(e);
    downAt = { x: e.clientX, y: e.clientY, t: performance.now(), p };
    if (p && p.down) {
      held = p; controls.enabled = false;
      try { dom.setPointerCapture(e.pointerId); } catch (err) { /* non disponibile */ }
      p.down();
    }
  });
  const release = () => { if (held) { const p = held; held = null; controls.enabled = true; if (p.up) p.up(); } };
  dom.addEventListener('pointerup', e => {
    if (held) { release(); downAt = null; return; }
    const d = downAt; downAt = null;
    if (!d || !d.p || !d.p.click) return;
    if (Math.hypot(e.clientX - d.x, e.clientY - d.y) < 7 && performance.now() - d.t < 600) d.p.click();
  });
  dom.addEventListener('pointercancel', () => { release(); downAt = null; });
  dom.addEventListener('pointermove', e => {
    if (held) return;
    const p = hitAt(e);
    dom.style.cursor = p ? 'pointer' : 'grab';
  });

  // ---- camera ----
  let camGoal = null;
  function view(v, instant) {
    const goal = { pos: new THREE.Vector3(...v.pos), target: new THREE.Vector3(...v.target) };
    if (instant || o.reduced) { camera.position.copy(goal.pos); controls.target.copy(goal.target); controls.update(); redraw(); return; }
    camGoal = goal;
    anims.add(() => {
      if (!camGoal) return false;
      camera.position.lerp(camGoal.pos, 0.12);
      controls.target.lerp(camGoal.target, 0.12);
      const done = camera.position.distanceTo(camGoal.pos) < 0.02 && controls.target.distanceTo(camGoal.target) < 0.02;
      if (done) { camera.position.copy(camGoal.pos); controls.target.copy(camGoal.target); camGoal = null; }
      return !done;
    });
    schedule();
  }

  // ---- ciclo di disegno ----
  const clock = new THREE.Clock();
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    const pr = renderer.getPixelRatio();
    if (dom.width !== Math.floor(w * pr) || dom.height !== Math.floor(h * pr)) {
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // la larghezza della scena resta visibile anche su schermi stretti: l'angolo verticale cresce quando l'aspetto cala
      const base = o.fov || 38;
      camera.fov = Math.min(64, (2 * Math.atan(Math.tan((base * Math.PI) / 360) * Math.max(1, 1.45 / camera.aspect)) * 180) / Math.PI);
      camera.updateProjectionMatrix();
      needs = true;
    }
  }
  function frame() {
    raf = 0;
    if (disposed) return;
    const dt = Math.min(clock.getDelta(), 0.1), t = clock.elapsedTime;
    resize();
    controls.update();
    anims.forEach(a => { if (!a(dt)) anims.delete(a); });
    frameHooks.forEach(f => { if (f(dt, t)) needs = true; });
    if (needs || anims.size) {
      needs = false;
      renderer.render(scene, camera);
      placeLabels();
    }
    if (anims.size || needs || frameHooks.some(f => f.active && f.active())) schedule();
  }
  function schedule() { if (!raf && !disposed && onScreen) raf = requestAnimationFrame(frame); }
  const io = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(es => { onScreen = es[0].isIntersecting; if (onScreen) { needs = true; schedule(); } }) : null;
  if (io) io.observe(container);
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => { needs = true; schedule(); }) : null;
  if (ro) ro.observe(container);

  return {
    scene, camera, controls, renderer, lite, labels, label, pickable, view, redraw, schedule,
    animate(fn) { anims.add(fn); schedule(); },
    hook(fn) { frameHooks.push(fn); schedule(); },
    reset() { view(o.home); },
    dispose() {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      if (io) io.disconnect();
      if (ro) ro.disconnect();
      controls.dispose();
      scene.traverse(x => { if (x.geometry) x.geometry.dispose(); if (x.material) [].concat(x.material).forEach(m => m.dispose()); });
      renderer.dispose();
      renderer.domElement.remove();
      labelLayer.remove();
    },
  };
}

/* ---------- materiali e pezzi ---------- */

const cache = new Map();
export function mat(color, rough = 0.7, metal = 0.05, extra = {}) {
  const k = [color, rough, metal, JSON.stringify(extra)].join('|');
  if (!cache.has(k)) cache.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...extra }));
  return cache.get(k);
}
export function clearMaterialCache() { cache.clear(); }

export function box(parent, size, pos, material, opt = {}) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  m.position.set(...pos);
  m.castShadow = opt.cast !== false;
  m.receiveShadow = opt.receive !== false;
  if (opt.name) m.name = opt.name;
  parent.add(m);
  return m;
}
export function cyl(parent, r, h, pos, material, opt = {}) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(opt.r2 === undefined ? r : opt.r2, r, h, opt.seg || 20), material);
  m.position.set(...pos);
  if (opt.rot) m.rotation.set(...opt.rot);
  m.castShadow = opt.cast !== false;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

// Lampadina o spia: materiale che si accende (emissivo) e, se serve, una luce vera.
export function glow(color, intensity = 2) {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0, roughness: 0.4, userData: { max: intensity } });
}
export function setGlow(m, on, k = 0.25) {
  const goal = on ? m.userData.max : 0;
  const next = ease(m.emissiveIntensity, goal, k);
  m.emissiveIntensity = Math.abs(next - goal) < 0.02 ? goal : next;
  return m.emissiveIntensity !== goal;
}

// Colori del kit (coerenti con la scena del trilocale).
export const COL = {
  wall: 0xd7d2c6, floor: 0x7b6a58, dark: 0x1b222c, panel: 0xaeb6bd, metal: 0x8d98a4, white: 0xeeede8,
  red: 0xc23b2f, green: 0x2f9e5c, yellow: 0xf2b705, blue: 0x2b6cb0, orange: 0xe07b1a, rubber: 0x2a2e33, wood: 0x9a7650, carton: 0xb98f5b,
};
