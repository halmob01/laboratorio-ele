// Kit comune delle scene 3D delle prove: palcoscenico (renderer, luci, post-elaborazione, telecamera, tocchi) e materiali.
// Stessa resa del trilocale (materiali fisici, luce ambientale da foto a 360 gradi, AgX, alone, occlusione ambientale su computer).
// Non contiene regole del gioco: le scene che lo usano ricevono uno stato (src/prove/state.js) e segnalano i tocchi.

import * as THREE from 'three';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ASSETS } from '../trilocale/props.js';

export function webglSupported() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}
const rad = d => (d * Math.PI) / 180;
const smooth = k => k * k * (3 - 2 * k);

/**
 * @param {HTMLElement} container
 * @param {{ bg?:number, exposure?:number, view:{tx:number,ty?:number,tz:number,yaw:number,pitch:number,dist:number},
 *   limits?:{yaw:[number,number],pitch:[number,number],dist:[number,number]}, reduced?:boolean, lite?:boolean, capture?:boolean,
 *   onTap?:(u:object)=>void, onPress?:(u:object)=>void, onRelease?:(u:object)=>void }} o
 */
export function createStage(container, o) {
  if (!webglSupported()) return null;
  const lite = o.lite !== undefined ? o.lite : (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || container.clientWidth < 700;
  const bg = o.bg === undefined ? 0x161c26 : o.bg;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: !!o.capture });
  } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lite ? 1.25 : 1.75));
  renderer.setClearColor(bg);
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

  let needs = true, raf = 0, disposed = false;
  const anims = new Set();
  const redraw = () => { needs = true; schedule(); };

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(bg);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  const world = new THREE.Group();
  scene.add(world);

  // luce ambientale: provvisoria finche' non arriva la foto a 360 gradi
  const hemi = new THREE.HemisphereLight(0xcdd8ea, 0x6b5a48, 0.9);
  scene.add(hemi);
  const pmrem = new THREE.PMREMGenerator(renderer);
  let envIntensity = 0.16;
  new EXRLoader().load(ASSETS + 'ambiente.exr', t => {
    if (disposed) { t.dispose(); pmrem.dispose(); return; }
    scene.environment = pmrem.fromEquirectangular(t).texture;
    scene.environmentIntensity = envIntensity;
    hemi.intensity = 0.12;
    t.dispose(); pmrem.dispose();
    redraw();
  }, undefined, () => {});

  // ---- post-elaborazione ----
  const rt = new THREE.WebGLRenderTarget(1, 1, { type: (renderer.extensions.has('EXT_color_buffer_half_float') || renderer.extensions.has('EXT_color_buffer_float')) ? THREE.HalfFloatType : THREE.UnsignedByteType, samples: lite ? 2 : 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  let gtao = null;
  if (!lite) {
    gtao = new GTAOPass(scene, camera, 1, 1);
    gtao.blendIntensity = 0.85;
    gtao.updateGtaoMaterial({ radius: 0.35, distanceExponent: 1.5, thickness: 1, scale: 1 });
    composer.addPass(gtao);
  }
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), o.bloom === undefined ? 0.45 : o.bloom, 0.45, 1.0);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // ---- telecamera ----
  const home = { ty: 0.8, ...o.view };
  const view = { ...home };
  const lim = o.limits || { yaw: [-35, 35], pitch: [12, 75], dist: [3, 30] };
  function placeCamera() {
    const p = rad(view.pitch), y = rad(view.yaw), r = view.dist;
    camera.position.set(view.tx + Math.sin(y) * Math.cos(p) * r, view.ty + Math.sin(p) * r, view.tz + Math.cos(y) * Math.cos(p) * r);
    camera.lookAt(view.tx, view.ty, view.tz);
  }
  function resize() {
    const w = Math.max(1, container.clientWidth), h = Math.max(1, container.clientHeight);
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.fov = w / h < 0.9 ? 52 : 38;
    camera.updateProjectionMatrix();
    redraw();
  }
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  if (ro) ro.observe(container);

  // ---- etichette HTML ----
  const labels = [];
  const tmp = new THREE.Vector3();
  function label(text, x, y, z, cls) {
    const el = document.createElement('div');
    el.className = 'hlabel ' + (cls || '');
    el.textContent = text;
    labelLayer.appendChild(el);
    const l = { el, v: new THREE.Vector3(x, y, z) };
    labels.push(l);
    return l;
  }

  function draw() {
    placeCamera();
    composer.render();
    const w = container.clientWidth, h = container.clientHeight;
    labels.forEach(l => {
      tmp.copy(l.v).project(camera);
      l.el.style.display = tmp.z < 1 ? '' : 'none';
      l.el.style.transform = `translate(-50%,-50%) translate(${((tmp.x + 1) / 2) * w}px,${((1 - tmp.y) / 2) * h}px)`;
    });
  }
  function frame(t) {
    raf = 0;
    if (disposed) return;
    if (anims.size) needs = true;
    anims.forEach(fn => { if (!fn(t)) anims.delete(fn); });
    if (needs) { needs = false; draw(); }
    if (anims.size) schedule();
  }
  function schedule() { if (!raf && !disposed) raf = requestAnimationFrame(frame); }
  function animate(ms, step) {
    const t0 = performance.now();
    const fn = t => { const k = Math.min(1, (t - t0) / ms); step(k); return k < 1; };
    anims.add(fn); schedule();
    return fn;
  }
  // animazione continua (nastro in moto, ventola): fn(t, dtSecondi); si ferma con il valore restituito
  function loop(fn) {
    let last = performance.now();
    const f = t => { const dt = Math.min(0.1, (t - last) / 1000); last = t; fn(t, dt); return true; };
    anims.add(f); schedule();
    return () => anims.delete(f);
  }

  let camAnim = null;
  function look(to, ms = 900) {
    const target = { ...home, ...to };
    if (camAnim) anims.delete(camAnim);
    if (o.reduced) { Object.assign(view, target); redraw(); return; }
    const from = { ...view };
    camAnim = animate(ms, k => { const e = smooth(k); Object.keys(target).forEach(key => (view[key] = from[key] + (target[key] - from[key]) * e)); });
  }
  function reset() { look({}); }

  // ---- tocco, pressione prolungata e trascinamento ----
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const pick = [];
  const el = renderer.domElement;
  el.style.touchAction = 'pan-y';
  let down = null, held = null, heldId = null;
  const hitAt = e => {
    const rc = el.getBoundingClientRect();
    ndc.set(((e.clientX - rc.left) / rc.width) * 2 - 1, -((e.clientY - rc.top) / rc.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pick, false)[0];
    return hit && hit.object.userData && hit.object.userData.id ? hit.object.userData : null;
  };
  el.addEventListener('pointerdown', e => {
    if (held) return;       // un secondo dito mentre un pulsante e' tenuto premuto non cambia niente
    down = { x: e.clientX, y: e.clientY, yaw: view.yaw, pitch: view.pitch, moved: false, u: hitAt(e) };
    try { el.setPointerCapture(e.pointerId); } catch (x) { /* ok */ }
    // i pulsanti da tenere premuti partono subito, non aspettano il rilascio
    if (down.u && down.u.hold && o.onPress) { held = down.u; heldId = e.pointerId; o.onPress(held); }
  });
  el.addEventListener('pointermove', e => {
    if (!down || held) return;
    const dx = e.clientX - down.x, dy = e.clientY - down.y;
    if (Math.abs(dx) + Math.abs(dy) > 6) down.moved = true;
    if (down.moved) {
      if (camAnim) { anims.delete(camAnim); camAnim = null; }
      view.yaw = Math.max(lim.yaw[0], Math.min(lim.yaw[1], down.yaw - dx * 0.25));
      view.pitch = Math.max(lim.pitch[0], Math.min(lim.pitch[1], down.pitch + dy * 0.2));
      redraw();
    }
  });
  const end = e => {
    if (held && e.pointerId !== heldId) return;
    const d = down; down = null;
    if (held) { const h = held; held = null; if (o.onRelease) o.onRelease(h); return; }
    if (!d || d.moved || !d.u) return;
    if (o.onTap) o.onTap(d.u);
  };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', e => { if (held && e.pointerId !== heldId) return; down = null; if (held) { const h = held; held = null; if (o.onRelease) o.onRelease(h); } });
  el.addEventListener('wheel', e => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    view.dist = Math.max(lim.dist[0], Math.min(lim.dist[1], view.dist + e.deltaY * 0.01));
    redraw();
  }, { passive: false });

  // Posizione sullo schermo (pixel nel contenitore) del primo oggetto toccabile con quell'id: serve ai test e all'accessibilita'.
  function screenOf(id) {
    const m = pick.find(p => p.userData && p.userData.id === id);
    if (!m) return null;
    m.updateWorldMatrix(true, false);
    const v = new THREE.Vector3().setFromMatrixPosition(m.matrixWorld).project(camera);
    return { x: ((v.x + 1) / 2) * container.clientWidth, y: ((1 - v.y) / 2) * container.clientHeight, visible: v.z < 1 };
  }

  resize();

  return {
    screenOf,
    THREE_scene: scene, world, camera, renderer, lite, pick, view, home,
    setEnvIntensity(v) { envIntensity = v; if (scene.environment) scene.environmentIntensity = v; },
    add(obj) { world.add(obj); return obj; },
    label, animate, loop, look, reset, redraw, resize,
    dispose() {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      scene.traverse(o2 => {
        if (o2.geometry) o2.geometry.dispose();
        if (o2.material) (Array.isArray(o2.material) ? o2.material : [o2.material]).forEach(m => { Object.values(m).forEach(v => v && v.isTexture && v.dispose()); m.dispose(); });
      });
      if (scene.environment) scene.environment.dispose();
      if (gtao) gtao.dispose();
      bloom.dispose(); composer.dispose(); rt.dispose();
      renderer.dispose();
      if (renderer.forceContextLoss) renderer.forceContextLoss();
      renderer.domElement.remove();
      labelLayer.remove();
    },
  };
}
