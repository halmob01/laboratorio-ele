// Scena 3D del trilocale (three.js). Pacchetto separato: si carica solo aprendo un circuito del Modulo 1.
// Non contiene regole del gioco: riceve lo stato delle stanze (houseState) e segnala i tocchi alla pagina.
// Il pacchetto si espone come window.FaseNeutroScene = { createScene }.

import * as THREE from 'three';
import { HOUSE } from '../content/trilocale.js';
import { houseControls } from './house.js';

const WALL_H = 1.0;
const COLORS = { wall: 0xf3eee4, floor: 0xe6dccb, floorLit: 0xf6e3b0, bg: 0x2b3340, plate: 0xfbf9f4, rocker: 0x9aa4a8, lamp: 0x8a8f94, lampLit: 0xffd27a, brk: 0x2f3a46 };

function supported() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

const box = (w, h, d, color) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0 }));
const rad = deg => (deg * Math.PI) / 180;

/**
 * @param {HTMLElement} container
 * @param {{ onControl:(circuit:string,id:string)=>void, onBreaker:()=>void, onRoom:(roomId:string)=>void, reduced?:boolean }} cb
 */
export function createScene(container, cb) {
  if (!supported()) return null;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(COLORS.bg);
  renderer.domElement.className = 'house3d';
  renderer.domElement.setAttribute('role', 'img');
  container.appendChild(renderer.domElement);
  const labelLayer = document.createElement('div');
  labelLayer.className = 'hlabels';
  container.appendChild(labelLayer);

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xdfe6f2, 0x8a7a68, 2.1));
  const sun = new THREE.DirectionalLight(0xffffff, 1.4);
  sun.position.set(-4, 10, 12);
  scene.add(sun);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 80);
  const cx = HOUSE.size.w / 2, cz = HOUSE.size.d / 2;
  const view = { tx: cx, tz: cz, yaw: 0, pitch: 55, dist: 17.5 };
  const OVERVIEW = { ...view };
  let needs = true, raf = 0, tween = null, disposed = false;

  // ---- stanze: pavimenti ----
  const rooms = {};
  HOUSE.rooms.forEach(r => {
    const floor = box(r.w - 0.04, 0.1, r.d - 0.04, COLORS.floor);
    floor.position.set(r.x + r.w / 2, -0.05, r.z + r.d / 2);
    floor.userData = { room: r.id };
    scene.add(floor);
    rooms[r.id] = { def: r, floor, lamp: null, light: null, bulb: null, lit: false };
  });
  const pick = [];   // oggetti toccabili
  HOUSE.rooms.forEach(r => pick.push(rooms[r.id].floor));

  // ---- muri ----
  const T = 0.1;
  HOUSE.wallsH.forEach(([z, x1, x2]) => {
    const m = box(x2 - x1 + T, WALL_H, T, COLORS.wall);
    m.position.set((x1 + x2) / 2, WALL_H / 2, z);
    scene.add(m);
  });
  HOUSE.wallsV.forEach(([x, z1, z2]) => {
    const m = box(T, WALL_H, z2 - z1 + T, COLORS.wall);
    m.position.set(x, WALL_H / 2, (z1 + z2) / 2);
    scene.add(m);
  });

  // ---- arredi ----
  HOUSE.furniture.forEach(f => {
    const m = box(f.w, f.h, f.d, new THREE.Color(f.c).getHex());
    m.position.set(f.x + f.w / 2, f.h / 2, f.z + f.d / 2);
    scene.add(m);
  });

  // ---- lampade ----
  HOUSE.rooms.filter(r => r.lamp).forEach(r => {
    const g = new THREE.Group();
    g.position.set(r.lamp[0], 1.9, r.lamp[1]);
    const cord = box(0.02, 0.6, 0.02, 0x333a42);
    cord.position.y = 0.3;
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.16, 20, 1, true), new THREE.MeshStandardMaterial({ color: 0xece5d8, side: THREE.DoubleSide }));
    shade.position.y = 0.08;
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), new THREE.MeshStandardMaterial({ color: COLORS.lamp, emissive: 0x000000, roughness: 0.5 }));
    bulb.position.y = -0.04;
    const light = new THREE.PointLight(COLORS.lampLit, 0, 7, 1.6);
    light.position.y = -0.1;
    g.add(cord, shade, bulb, light);
    scene.add(g);
    Object.assign(rooms[r.id], { lamp: g, light, bulb });
  });

  // ---- comandi sui muri ----
  const plates = {};      // `${circuito}.${id}` -> { group, rocker }
  const FACE = { n: [0, 0, -1], s: [0, 0, 1], e: [1, 0, 0], w: [-1, 0, 0] };
  const FACE_ROT = { n: Math.PI, s: 0, e: Math.PI / 2, w: -Math.PI / 2 };
  function plate(x, z, face, color, userData) {
    const g = new THREE.Group();
    const base = box(0.3, 0.38, 0.05, color);
    const rocker = box(0.18, 0.2, 0.05, COLORS.rocker);
    rocker.position.set(0, 0, 0.04);
    g.add(base, rocker);
    const d = FACE[face];
    g.position.set(x + d[0] * 0.08, 0.62, z + d[2] * 0.08);
    g.rotation.y = FACE_ROT[face];
    g.userData = userData;
    base.userData = userData;
    rocker.userData = userData;
    pick.push(base, rocker);
    scene.add(g);
    return { group: g, rocker };
  }
  houseControls().forEach(c => {
    plates[c.circuit + '.' + c.id] = plate(c.x, c.z, c.face, COLORS.plate, { circuit: c.circuit, ctl: c.id });
  });
  const brk = plate(HOUSE.breaker.x, HOUSE.breaker.z, HOUSE.breaker.face, COLORS.brk, { breaker: true });
  brk.group.scale.set(1.5, 1.5, 1.5);

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
  houseControls().forEach(c => addLabel(c.label, c.x + FACE[c.face][0] * 0.4, 1.12, c.z + FACE[c.face][2] * 0.4, 'ctl'));
  addLabel(HOUSE.breaker.label, HOUSE.breaker.x + 0.55, 1.2, HOUSE.breaker.z, 'ctl');

  // ---- telecamera ----
  function placeCamera() {
    const p = rad(view.pitch), y = rad(view.yaw);
    const r = view.dist;
    camera.position.set(view.tx + Math.sin(y) * Math.cos(p) * r, Math.sin(p) * r, view.tz + Math.cos(y) * Math.cos(p) * r);
    camera.lookAt(view.tx, 0.4, view.tz);
  }
  function resize() {
    const w = Math.max(1, container.clientWidth), h = Math.max(1, container.clientHeight);
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    camera.aspect = w / h;
    // su schermi stretti (telefono) la casa e' piu' larga che alta: si allontana la camera
    camera.fov = w / h < 0.9 ? 52 : 40;
    camera.updateProjectionMatrix();
    needs = true; schedule();
  }
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  if (ro) ro.observe(container);

  const tmp = new THREE.Vector3();
  function draw() {
    placeCamera();
    renderer.render(scene, camera);
    const w = container.clientWidth, h = container.clientHeight;
    labels.forEach(l => {
      tmp.copy(l.v).project(camera);
      const vis = tmp.z < 1;
      l.el.style.display = vis ? '' : 'none';
      l.el.style.transform = `translate(-50%,-50%) translate(${((tmp.x + 1) / 2) * w}px,${((1 - tmp.y) / 2) * h}px)`;
    });
  }
  function frame(t) {
    raf = 0;
    if (disposed) return;
    if (tween) {
      const k = Math.min(1, (t - tween.t0) / tween.ms), e = k * k * (3 - 2 * k);
      Object.keys(tween.to).forEach(key => (view[key] = tween.from[key] + (tween.to[key] - tween.from[key]) * e));
      if (k >= 1) tween = null;
      needs = true;
    }
    if (needs) { needs = false; draw(); }
    if (tween) schedule();
  }
  function schedule() { if (!raf && !disposed) raf = requestAnimationFrame(frame); }
  function go(to) {
    if (cb.reduced) { Object.assign(view, to); needs = true; schedule(); return; }
    tween = { t0: performance.now(), ms: 800, from: { ...view }, to: { ...OVERVIEW, ...to } };
    schedule();
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
      tween = null;
      view.yaw = Math.max(-35, Math.min(35, down.yaw - dx * 0.25));
      view.pitch = Math.max(38, Math.min(70, down.pitch + dy * 0.2));
      needs = true; schedule();
    }
  });
  el.addEventListener('pointerup', e => {
    const d = down; down = null;
    if (!d || d.moved) return;
    const rc = el.getBoundingClientRect();
    ndc.set(((e.clientX - rc.left) / rc.width) * 2 - 1, -((e.clientY - rc.top) / rc.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pick, false)[0];
    if (!hit) return;
    const u = hit.object.userData || {};
    if (u.breaker) cb.onBreaker();
    else if (u.ctl) cb.onControl(u.circuit, u.ctl);
    else if (u.room) cb.onRoom(u.room);
  });
  el.addEventListener('wheel', e => {
    if (!e.ctrlKey && Math.abs(e.deltaY) < 1) return;
    e.preventDefault();
    view.dist = Math.max(8, Math.min(20, view.dist + e.deltaY * 0.01));
    needs = true; schedule();
  }, { passive: false });
  el.addEventListener('pointercancel', () => { down = null; });

  resize();

  return {
    // state = houseState(...).rooms; controlStates di ogni circuito e' dentro rooms[id].controls
    update(state) {
      const lit = [];
      Object.keys(rooms).forEach(id => {
        const r = rooms[id], s = state.rooms[id] || {};
        const on = !!s.lit;
        r.floor.material.color.setHex(on ? COLORS.floorLit : COLORS.floor);
        r.floor.material.emissive.setHex(on ? 0x4a3a18 : 0x000000);
        if (r.light) {
          r.light.intensity = on ? 9 : 0;
          r.bulb.material.color.setHex(on ? COLORS.lampLit : COLORS.lamp);
          r.bulb.material.emissive.setHex(on ? 0xffc65a : 0x000000);
        }
        if (on && r.def.name) lit.push(r.def.name);
        // posizione delle levette
        const map = HOUSE.controls[r.def.circuit] || {};
        Object.keys(map).forEach(cid => {
          const p = plates[r.def.circuit + '.' + cid];
          if (p) p.rocker.rotation.x = (s.controls && s.controls[cid] ? -1 : 1) * 0.35;
        });
      });
      renderer.domElement.setAttribute('aria-label', 'Casa vista dall’alto. Stanze con la luce accesa: ' + (lit.length ? lit.join(', ') : 'nessuna'));
      needs = true; schedule();
    },
    focusRoom(id) {
      const r = rooms[id] && rooms[id].def;
      if (!r) return;
      go({ tx: r.x + r.w / 2, tz: r.z + r.d / 2, dist: 13.5, yaw: 0, pitch: 58 });
    },
    overview() { go({}); },
    resize,
    dispose() {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.dispose());
      });
      renderer.dispose();
      if (renderer.forceContextLoss) renderer.forceContextLoss();
      renderer.domElement.remove();
      labelLayer.remove();
    },
  };
}

if (typeof window !== 'undefined') window.FaseNeutroScene = { createScene };
