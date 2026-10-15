// Scena 3D del trilocale (three.js), versione fotorealistica. Pacchetto separato: si carica solo aprendo un circuito del Modulo 1.
// Non contiene regole del gioco: riceve lo stato delle stanze (houseState) e segnala i tocchi alla pagina.
// Il pacchetto si espone come window.FaseNeutroScene = { createScene }.
//
// Resa: materiali fisici, luce ambientale da una foto a 360 gradi, sole di sera con ombre morbide,
// lampade che fanno luce vera e alone, occlusione ambientale su computer. All'apertura il tetto si solleva
// e la camera scende sulla casa; il tetto si rimette e si toglie con setRoof().

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { createPipeline, mergeStatic, isLite, pixelRatio } from './render.js';
import { HOUSE } from '../content/trilocale.js';
import { houseControls } from './house.js';
import { WALL_H, FACADE_H, ASSETS, makeMaterials, furnish, doors, windows, roof as makeRoof, rbox, plane, MODELS, placeholder } from './props.js';

const BG_DAY = 0x161c26, BG_NIGHT = 0x080b12;
const LAMP_Y = 2.0;
const PLATE_Y = 1.1;

function supported() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}
const rad = deg => (deg * Math.PI) / 180;
const smooth = k => k * k * (3 - 2 * k);

/**
 * @param {HTMLElement} container
 * @param {{ onControl:(circuit:string,id:string)=>void, onBreaker:()=>void, onRoom:(roomId:string)=>void, reduced?:boolean, lite?:boolean }} cb
 */
export function createScene(container, cb) {
  if (!supported()) return null;
  // Opzioni per le prove dei moduli (la casa di notte, senza i comandi del Modulo 1): vedi src/scene3d/appartamento.js.
  //   night: luce di luna, bare: niente piastrine e quadro del Modulo 1, noIntro + start: parte senza tetto da una vista data,
  //   extend(ctx) -> { update(state), dispose() }: aggiunge oggetti alla scena, onPick(userData): tocchi sugli oggetti aggiunti.
  const night = !!cb.night;
  const BG = night ? BG_NIGHT : BG_DAY;
  // telefono o schermo piccolo: niente occlusione ambientale, ombre piu' leggere
  const lite = isLite(container, cb.lite);
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: !!cb.capture });
  } catch (e) { return null; }
  renderer.setPixelRatio(pixelRatio(lite));
  renderer.setClearColor(BG);
  renderer.toneMapping = THREE.AgXToneMapping;
  renderer.toneMappingExposure = night ? 1.3 : 0.95;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.className = 'house3d';
  renderer.domElement.setAttribute('role', 'img');
  container.appendChild(renderer.domElement);
  const labelLayer = document.createElement('div');
  labelLayer.className = 'hlabels';
  container.appendChild(labelLayer);
  // attribuzione richiesta dalla licenza CC BY 4.0 di divano e pianta (vedi assets/trilocale/CREDITI.md)

  let needs = true, raf = 0, disposed = false;
  const anims = new Set();          // animazioni in corso: funzioni (t) -> true se continuano
  const redraw = () => { needs = true; schedule(); };
  // Le ombre cambiano solo quando si sposta qualcosa (tetto, oggetti), non quando si muove la telecamera o si accende una luce:
  // si ridisegnano solo allora. Quella di una lampada si disegna quando la lampada e' accesa e la sua e' vecchia.
  let shadowDirty = true;
  const dirtyShadows = () => { shadowDirty = true; };

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG);
  scene.fog = new THREE.Fog(BG, 26, 60);
  const M = makeMaterials(redraw);

  // ---- luce ----
  // luce ambientale: provvisoria finche' non arriva la foto a 360 gradi dell'appartamento
  const hemi = new THREE.HemisphereLight(0xcdd8ea, 0x6b5a48, 0.9);
  scene.add(hemi);
  const pmrem = new THREE.PMREMGenerator(renderer);
  new EXRLoader().load(ASSETS + 'ambiente.exr', t => {
    if (disposed) return;
    scene.environment = pmrem.fromEquirectangular(t).texture;
    scene.environmentIntensity = night ? 0.07 : 0.16;
    hemi.intensity = night ? 0.07 : 0.12;
    t.dispose(); pmrem.dispose();
    redraw();
  }, undefined, () => {});
  // sole basso di sera, caldo, da sud-ovest
  const sun = new THREE.DirectionalLight(night ? 0x8fa9e6 : 0xff9f66, night ? 0.4 : 1.0);
  sun.position.set(-9, 6, 12);
  sun.target.position.set(4.5, 0, 4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(lite ? 1024 : 2048, lite ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 1, far: 40 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.02;
  sun.shadow.radius = 5;
  sun.shadow.autoUpdate = false;
  scene.add(sun, sun.target);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  const cx = HOUSE.size.w / 2, cz = HOUSE.size.d / 2;
  const OVERVIEW = { tx: cx, tz: cz + 0.3, yaw: 0, pitch: 58, dist: 17.5, ty: 0.6 };
  const view = { ...OVERVIEW };

  const world = new THREE.Group();
  scene.add(world);

  // ---- terreno: prato e marciapiede ----
  plane(world, M.grass, -30, -30, 69, 68, -0.02);
  plane(world, M.paving, -1, -1, HOUSE.size.w + 2, HOUSE.size.d + 2, -0.01, 1);

  // ---- stanze: pavimenti ----
  const rooms = {};
  const pick = [];
  HOUSE.rooms.forEach(r => {
    const mat = r.id === 'bagno' ? M.tiles : r.id === 'cucina' ? M.kitchenFloor : M.parquet;
    const rep = r.id === 'bagno' ? 1.8 : r.id === 'cucina' ? 2.4 : 1.1;
    const floor = plane(world, mat, r.x, r.z, r.w, r.d, 0.001, rep);
    floor.userData = { room: r.id };
    pick.push(floor);
    rooms[r.id] = { def: r, floor, light: null, bulb: null, glow: null, level: 0, target: 0, wins: [] };
  });

  // ---- muri, con il taglio in alto scuro come in una sezione ----
  const T = 0.12;
  function wall(x, z, w, d) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, WALL_H, d), M.wall);
    m.position.set(x, WALL_H / 2, z);
    m.castShadow = true; m.receiveShadow = true;
    world.add(m);
    const cut = new THREE.Mesh(new THREE.BoxGeometry(w + 0.002, 0.01, d + 0.002), M.wallCut);
    cut.position.set(x, WALL_H + 0.005, z);
    world.add(cut);
  }
  HOUSE.wallsH.forEach(([z, x1, x2]) => wall((x1 + x2) / 2, z, x2 - x1 + T, T));
  HOUSE.wallsV.forEach(([x, z1, z2]) => wall(x, (z1 + z2) / 2, T, z2 - z1 + T));
  // facciata esterna: alta come la casa vera col tetto; quando il tetto si toglie si abbassa all'altezza del taglio
  const facade = new THREE.Group();
  const W = HOUSE.size.w, D = HOUSE.size.d, o = T / 2 + 0.006;
  [[W / 2, -o, W + T + 0.02, 0.012], [W / 2, D + o, W + T + 0.02, 0.012], [-o, D / 2, 0.012, D + T], [W + o, D / 2, 0.012, D + T]].forEach(([x, z, w, d]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, FACADE_H, d), M.outside);
    m.position.set(x, FACADE_H / 2, z); m.receiveShadow = true; m.castShadow = true;
    facade.add(m);
  });
  // porta d'ingresso sulla facciata sud
  rbox(facade, M.wood, 0.9, 0, D + o, 1.0, 2.2, 0.05, 0.01);
  world.add(facade);

  furnish(world, M);
  doors(world, M);
  windows(world, facade, M, HOUSE.size).forEach(wn => rooms[wn.room] && rooms[wn.room].wins.push(wn.glass));

  // modelli fotografici: segnaposto subito, modello vero quando arriva
  const gltf = new GLTFLoader();
  gltf.setMeshoptDecoder(MeshoptDecoder);
  MODELS.forEach(md => {
    const ph = md.stand ? placeholder(world, M, md.stand) : null;
    if (ph) ph.userData.placeholder = true;     // se ne va quando arriva il modello: non si accorpa
    gltf.load(ASSETS + md.file, g => {
      if (disposed) return;
      const obj = g.scene;
      obj.traverse(n => {
        if (n.isLight) n.visible = false;
        if (n.isMesh) { n.castShadow = true; n.receiveShadow = true; }
      });
      obj.scale.setScalar(md.scale);
      obj.rotation.y = md.rot;
      obj.position.set(md.x, 0, md.z);
      // shader preparati prima di mostrarlo: l'arrivo del modello non blocca la scena
      const show = () => { if (disposed) return; world.add(obj); if (ph) world.remove(ph); dirtyShadows(); redraw(); };
      (renderer.compileAsync ? renderer.compileAsync(obj, camera, scene) : Promise.resolve()).then(show, show);
    }, undefined, () => {});
  });

  // ---- lampade a sospensione ----
  HOUSE.rooms.filter(r => r.lamp).forEach(r => {
    const g = new THREE.Group();
    g.position.set(r.lamp[0], LAMP_Y, r.lamp[1]);
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.5, 6), M.cord);
    cord.position.y = 0.36;
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, 0.06, 16), M.steel);
    cap.position.y = 0.12;
    // globo di vetro opalino: di giorno bianco latte, acceso brilla e fa alone
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xf2efe8, roughness: 0.35, emissive: 0xffc27a, emissiveIntensity: 0 });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 24, 16), bulbMat);
    bulb.castShadow = false;
    const light = new THREE.PointLight(0xffc988, 0, 10, 2);
    light.position.y = -0.14;
    light.castShadow = !lite;
    light.shadow.mapSize.set(512, 512);
    light.shadow.bias = -0.002;
    light.shadow.radius = 4;
    light.shadow.autoUpdate = false;
    g.add(cord, cap, bulb, light);
    world.add(g);
    Object.assign(rooms[r.id], { light, bulb: bulbMat, shade: null, stale: true });
  });

  // ---- comandi sui muri e quadro ----
  const plates = {};
  const FACE = { n: [0, 0, -1], s: [0, 0, 1], e: [1, 0, 0], w: [-1, 0, 0] };
  const FACE_ROT = { n: Math.PI, s: 0, e: Math.PI / 2, w: -Math.PI / 2 };
  const HIT = new THREE.MeshBasicMaterial({ visible: false });
  function plate(x, z, face, mat, userData, size = 1) {
    const g = new THREE.Group();
    const base = rbox(g, mat, -0.09 * size, -0.12 * size, -0.015, 0.18 * size, 0.24 * size, 0.03, 0.012);
    const rocker = rbox(g, M.rocker, -0.055 * size, -0.07 * size, 0.0, 0.11 * size, 0.14 * size, 0.025, 0.01);
    const d = FACE[face];
    g.position.set(x + d[0] * (T / 2 + 0.015), PLATE_Y, z + d[2] * (T / 2 + 0.015));
    g.rotation.y = FACE_ROT[face];
    // zona di tocco invisibile, molto piu' grande della placca: sul telefono la placca vera e' di pochi pixel
    const hitZone = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 8), HIT);
    [g, base, rocker, hitZone].forEach(o2 => (o2.userData = userData));
    g.add(hitZone);
    pick.push(base, rocker, hitZone);
    world.add(g);
    return { group: g, rocker };
  }
  if (!cb.bare) houseControls().forEach(c => { plates[c.circuit + '.' + c.id] = plate(c.x, c.z, c.face, M.plate, { circuit: c.circuit, ctl: c.id }); });
  // quadro elettrico: centralino bianco con sportello fumé
  const bk = HOUSE.breaker;
  const brkG = new THREE.Group();
  const brkBox = rbox(brkG, M.panel, -0.22, -0.2, -0.02, 0.44, 0.4, 0.08, 0.02);
  const brkDoor = rbox(brkG, M.panelDoor, -0.18, -0.15, 0.06, 0.36, 0.3, 0.012, 0.01);
  brkG.position.set(bk.x + FACE[bk.face][0] * (T / 2 + 0.02), 1.15, bk.z + FACE[bk.face][2] * (T / 2 + 0.02));
  brkG.rotation.y = FACE_ROT[bk.face];
  const brkHit = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 8), HIT);
  brkG.add(brkHit);
  [brkG, brkBox, brkDoor, brkHit].forEach(o2 => (o2.userData = { breaker: true }));
  if (!cb.bare) { pick.push(brkBox, brkDoor, brkHit); world.add(brkG); }

  // ---- tetto ----
  const roofG = makeRoof(M, HOUSE.size);
  roofG.position.y = WALL_H;
  scene.add(roofG);
  let roofOn = true;
  let roofK = 1;               // 1 = tetto al suo posto, 0 = sollevato e sparito
  function applyRoof() {
    dirtyShadows();
    const top = WALL_H + (FACADE_H - WALL_H) * Math.min(1, roofK * 1.4);
    facade.scale.y = top / FACADE_H;
    roofG.position.y = top + (1 - roofK) * 3.2;
    roofG.visible = roofK > 0.01;
    M.roof.opacity = M.fascia.opacity = Math.min(1, roofK * 1.6);
    M.roof.depthWrite = M.fascia.depthWrite = roofK > 0.99;
    labelLayer.style.opacity = String(Math.max(0, 1 - roofK * 2));
  }

  // ---- etichette HTML ----
  const labels = [];
  function addLabel(text, x, y, z, cls) {
    const el = document.createElement('div');
    el.className = 'hlabel ' + (cls || '');
    el.textContent = text;
    labelLayer.appendChild(el);
    labels.push({ el, v: new THREE.Vector3(x, y, z) });
  }
  HOUSE.rooms.forEach(r => addLabel(r.name, r.x + r.w / 2, 0.15, r.z + r.d / 2 + (r.id === 'corridoio' ? 0.45 : 0.9), 'room'));
  if (!cb.bare) {
    houseControls().forEach(c => addLabel(c.label, c.x + FACE[c.face][0] * 0.4, WALL_H + 0.25, c.z + FACE[c.face][2] * 0.4, 'ctl'));
    addLabel(bk.label, bk.x + 0.55, WALL_H + 0.25, bk.z, 'ctl');
  }
  // muri, arredi, porte e finestre non si muovono: si accorpano per materiale (la facciata si abbassa col tetto, resta a parte)
  mergeStatic(world, [facade]);
  // redraw: si ridisegna; moved: un oggetto aggiunto si e' spostato o e' comparso, anche le ombre vanno rifatte
  const ext = cb.extend ? cb.extend({ world, M, pick, rooms, addLabel, animate: (ms, step) => animate(ms, k => { dirtyShadows(); return step(k); }), redraw, moved: () => { dirtyShadows(); redraw(); }, lite, FACE, FACE_ROT, T, WALL_H, camera, scene }) : null;

  // ---- post-elaborazione: alone delle lampade, occlusione ambientale, colore ----
  const pipe = createPipeline(renderer, scene, camera, { lite });

  // ---- telecamera ----
  function placeCamera() {
    const p = rad(view.pitch), y = rad(view.yaw), r = view.dist;
    camera.position.set(view.tx + Math.sin(y) * Math.cos(p) * r, view.ty - 0.6 + Math.sin(p) * r, view.tz + Math.cos(y) * Math.cos(p) * r);
    camera.lookAt(view.tx, view.ty, view.tz);
  }
  function resize() {
    const w = Math.max(1, container.clientWidth), h = Math.max(1, container.clientHeight);
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    pipe.setSize(w, h);
    camera.aspect = w / h;
    camera.fov = w / h < 0.9 ? 52 : 38;
    camera.updateProjectionMatrix();
    redraw();
  }
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  if (ro) ro.observe(container);

  const tmp = new THREE.Vector3();
  function draw() {
    placeCamera();
    sun.shadow.needsUpdate = shadowDirty;
    Object.values(rooms).forEach(r => {
      if (!r.light) return;
      if (shadowDirty) r.stale = true;
      const up = r.stale && r.level > 0.01;
      r.light.shadow.needsUpdate = up;
      if (up) r.stale = false;
    });
    shadowDirty = false;
    pipe.render();
    const w = container.clientWidth, h = container.clientHeight;
    labels.forEach(l => {
      tmp.copy(l.v).project(camera);
      l.el.style.display = tmp.z < 1 ? '' : 'none';
      l.el.style.transform = `translate(-50%,-50%) translate(${((tmp.x + 1) / 2) * w}px,${((1 - tmp.y) / 2) * h}px)`;
    });
  }
  // Il primo disegno aspetta gli shader, preparati in parallelo: niente blocco della pagina all'apertura.
  let ready = false;
  (renderer.compileAsync ? renderer.compileAsync(scene, camera) : Promise.resolve()).catch(() => {}).then(() => { ready = true; redraw(); });
  function frame(t) {
    raf = 0;
    if (disposed) return;
    if (!ready) return;
    pipe.watch(t, anims.size > 0 || !!down);
    if (anims.size) needs = true;       // anche l'ultimo passo di un'animazione va disegnato
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

  const still = cb.reduced || cb.noIntro;          // niente ingresso animato: parte gia' senza tetto
  let camAnim = null, intro = !still, introTarget = {};
  function go(to, ms = 650) {
    if (intro) { introTarget = to; return; }      // durante l'ingresso si ricorda solo dove arrivare
    const target = { ...OVERVIEW, ...to };
    if (camera.aspect < 0.9 && target.dist === OVERVIEW.dist) target.dist *= 1.22;   // su telefono la casa deve entrare tutta
    if (camAnim) anims.delete(camAnim);
    if (cb.reduced) { Object.assign(view, target); redraw(); return; }
    // sotto i due terzi di secondo lo spostamento e' rapido ma si segue ancora
    const from = { ...view };
    camAnim = animate(ms, k => { const e = smooth(k); Object.keys(target).forEach(key => (view[key] = from[key] + (target[key] - from[key]) * e)); });
  }
  let roofAnim = null;
  function setRoof(on, ms = 1400) {
    roofOn = !!on;
    if (cb.onRoof) cb.onRoof(roofOn);
    if (roofAnim) anims.delete(roofAnim);
    const from = roofK, to = roofOn ? 1 : 0;
    if (cb.reduced) { roofK = to; applyRoof(); redraw(); return; }
    roofAnim = animate(ms, k => { roofK = from + (to - from) * smooth(k); applyRoof(); });
  }

  // ---- ingresso: casa vista da lontano col tetto, il tetto si alza e la camera scende ----
  if (still) { roofK = 0; roofOn = false; applyRoof(); if (cb.start) Object.assign(view, cb.start); }
  else {
    Object.assign(view, { tx: cx, tz: cz, yaw: -28, pitch: 30, dist: 27 });
    applyRoof();
    setTimeout(() => {
      if (disposed) return;
      intro = false;
      go(introTarget, 2600);
      setTimeout(() => { if (!disposed) { setRoof(false, 1600); if (cb.onRoof) cb.onRoof(false); } }, 700);
    }, 450);
  }

  // ---- tocco e trascinamento ----
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let down = null;
  const el = renderer.domElement;
  el.style.touchAction = 'pan-y';
  el.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, yaw: view.yaw, pitch: view.pitch, moved: false }; try { el.setPointerCapture(e.pointerId); } catch (x) { /* ok */ } });
  el.addEventListener('pointermove', e => {
    if (!down) return;
    const dx = e.clientX - down.x, dy = e.clientY - down.y;
    if (Math.abs(dx) + Math.abs(dy) > 6) down.moved = true;
    if (down.moved) {
      if (camAnim) { anims.delete(camAnim); camAnim = null; }
      view.yaw = Math.max(-35, Math.min(35, down.yaw - dx * 0.25));
      view.pitch = Math.max(38, Math.min(75, down.pitch + dy * 0.2));
      redraw();
    }
  });
  el.addEventListener('pointerup', e => {
    const d = down; down = null;
    if (!d || d.moved) return;
    if (roofOn) { setRoof(false); if (cb.onRoof) cb.onRoof(false); return; }   // col tetto: un tocco lo toglie
    const rc = el.getBoundingClientRect();
    ndc.set(((e.clientX - rc.left) / rc.width) * 2 - 1, -((e.clientY - rc.top) / rc.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pick, false)[0];
    if (!hit) return;
    const u = hit.object.userData || {};
    if (u.ext) { if (cb.onPick) cb.onPick(u); }
    else if (u.breaker) cb.onBreaker();
    else if (u.ctl) cb.onControl(u.circuit, u.ctl);
    else if (u.room) cb.onRoom(u.room);
  });
  el.addEventListener('wheel', e => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    view.dist = Math.max(9, Math.min(24, view.dist + e.deltaY * 0.01));
    redraw();
  }, { passive: false });
  el.addEventListener('pointercancel', () => { down = null; });

  // ---- accensione delle lampade: rampa breve con un tremolio iniziale ----
  const LUX = 11;
  function lampLevel(r, k) {
    r.level = k;
    if (r.light) {
      r.light.intensity = LUX * k;
      r.bulb.emissiveIntensity = 6 * k;
    }
    r.wins.forEach(g => g.emissive.setHex(0xffb35c).multiplyScalar(0.9 * k));
  }
  function setLit(r, on) {
    const to = on ? 1 : 0;
    if (r.target === to) return;
    r.target = to;
    if (cb.reduced) { lampLevel(r, to); return; }
    const from = r.level;
    if (r.anim) anims.delete(r.anim);
    r.anim = animate(on ? 420 : 260, k => {
      const flick = on && k < 0.5 ? (Math.sin(k * 60) > 0.2 ? 1 : 0.35) : 1;
      lampLevel(r, (from + (to - from) * smooth(k)) * flick);
    });
  }

  applyRoof();
  resize();

  return {
    // state = houseState(...).rooms; controlStates di ogni circuito e' dentro rooms[id].controls
    update(state) {
      if (ext && ext.update) ext.update(state);
      const lit = [];
      Object.keys(rooms).forEach(id => {
        const r = rooms[id], s = state.rooms[id] || {};
        const on = !!s.lit;
        setLit(r, on);
        if (on && r.def.name) lit.push(r.def.name);
        const map = HOUSE.controls[r.def.circuit] || {};
        Object.keys(map).forEach(cid => {
          const p = plates[r.def.circuit + '.' + cid];
          if (p) p.rocker.rotation.x = (s.controls && s.controls[cid] ? -1 : 1) * 0.25;
        });
      });
      renderer.domElement.setAttribute('aria-label', 'Casa vista dall’alto. Stanze con la luce accesa: ' + (lit.length ? lit.join(', ') : 'nessuna'));
      redraw();
    },
    focusRoom(id) {
      const r = rooms[id] && rooms[id].def;
      if (!r) return;
      if (roofOn && !intro) setRoof(false);
      // su schermo stretto la stanza da vicino non si legge: si resta sulla vista d'insieme, appena spostata
      if (camera.aspect < 0.9) { go({ tx: (cx + r.x + r.w / 2) / 2, tz: (cz + r.z + r.d / 2) / 2 + 0.3, dist: 19, pitch: 62 }); return; }
      go({ tx: r.x + r.w / 2, tz: r.z + r.d / 2 + 0.3, dist: 12.5, yaw: 0, pitch: 60 });
    },
    overview() { go({}); },
    look(to, ms) { go(to, ms); },
    // Posizione sullo schermo del primo oggetto toccabile con quell'id (solo oggetti aggiunti da extend): per i test.
    screenOf(id) {
      const m = pick.find(p => p.userData && p.userData.id === id);
      if (!m) return null;
      m.updateWorldMatrix(true, false);
      const v = new THREE.Vector3().setFromMatrixPosition(m.matrixWorld).project(camera);
      return { x: ((v.x + 1) / 2) * container.clientWidth, y: ((1 - v.y) / 2) * container.clientHeight, visible: v.z < 1 };
    },
    setRoof(on) { setRoof(on); if (on) go({ yaw: -18, pitch: 42, dist: 23 }, 1400); },
    roof() { return roofOn; },
    resize,
    dispose() {
      disposed = true;
      if (ext && ext.dispose) ext.dispose();
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      scene.traverse(o2 => {
        if (o2.geometry) o2.geometry.dispose();
        if (o2.material) (Array.isArray(o2.material) ? o2.material : [o2.material]).forEach(m => { Object.values(m).forEach(v => v && v.isTexture && v.dispose()); m.dispose(); });
      });
      if (scene.environment) scene.environment.dispose();
      pipe.dispose();
      renderer.dispose();
      if (renderer.forceContextLoss) renderer.forceContextLoss();
      renderer.domElement.remove();
      labelLayer.remove();
    },
  };
}

if (typeof window !== 'undefined') window.FaseNeutroScene = { createScene };
