// Scena della prova del Modulo 2: l'appartamento di notte. Legge lo stato osservato (carichi, protezioni, spine)
// e segnala i tocchi: nessuna regola del gioco qui dentro.

import * as THREE from 'three';
import { createStage, mat, box, cyl, glow, setGlow, ease, COL } from './kit.js';

const BG = 0x0d121b;
const HOME = { pos: [0.6, 7.4, 9.2], target: [0, 0.7, -0.4] };
const CLOSE_QUADRO = { pos: [-3.0, 2.0, 2.6], target: [-3.0, 1.4, -2.6] };
const CLOSE_CUCINA = { pos: [3.0, 2.6, 3.0], target: [3.0, 0.6, -2.4] };

export function createNotte(container, cb) {
  const stage = createStage(container, { bg: BG, home: HOME, min: 3.5, max: 18, reduced: cb.reduced, lite: cb.lite, capture: cb.capture, exposure: 1.15 });
  if (!stage) return null;
  const { scene } = stage;
  const root = new THREE.Group();
  scene.add(root);

  // ---- luce di notte: ambiente freddo e debole, luna che disegna le ombre ----
  const hemi = new THREE.HemisphereLight(0x7f96c8, 0x2a2630, 1.5);
  scene.add(hemi);
  const moon = new THREE.DirectionalLight(0x8fa8e0, 0.9);
  moon.position.set(-6, 10, 7);
  moon.castShadow = true;
  moon.shadow.mapSize.set(stage.lite ? 1024 : 2048, stage.lite ? 1024 : 2048);
  Object.assign(moon.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 30 });
  moon.shadow.bias = -0.0005;
  moon.shadow.normalBias = 0.03;
  scene.add(moon, moon.target);

  const M = {
    wall: mat(COL.wall, 0.92), floor: mat(0x6e5f50, 0.85), slab: mat(0x2a303a, 0.8), dark: mat(COL.dark, 0.6, 0.2), wood: mat(COL.wood, 0.85),
    fabric: mat(0x5b6f8c, 0.95), bed: mat(0xdcd6c8, 0.95), white: mat(COL.white, 0.5, 0.1), metal: mat(COL.metal, 0.4, 0.7), rubber: mat(COL.rubber, 0.8),
    plate: mat(0xe6e4dc, 0.5), steel: mat(0xaeb4bb, 0.35, 0.8), enclosure: mat(0xb7bec6, 0.55, 0.2),
  };

  /* ---- struttura ---- */
  box(root, [8.8, 0.2, 6.2], [0, -0.1, 0], M.slab);
  box(root, [8.4, 0.04, 5.8], [0, 0.02, 0], M.floor, { cast: false });
  const WALL = 2.7, T = 0.14;
  box(root, [8.8, WALL, T], [0, WALL / 2, -2.97], M.wall);
  box(root, [T, WALL, 6.1], [-4.37, WALL / 2, 0], M.wall);
  box(root, [T, WALL, 6.1], [4.37, WALL / 2, 0], M.wall);
  // tramezzi bassi (sezione): lasciano vedere le stanze dall'alto, con il varco della porta
  box(root, [T, 1.3, 2.6], [-0.9, 0.65, -1.7], M.wall);
  box(root, [T, 1.3, 2.6], [1.9, 0.65, -1.7], M.wall);

  /* ---- quadro elettrico sulla parete di fondo del soggiorno ---- */
  const quadro = new THREE.Group();
  quadro.position.set(-3.2, 1.55, -2.84);
  root.add(quadro);
  box(quadro, [1.9, 1.0, 0.14], [0, 0, 0], M.enclosure);
  box(quadro, [1.74, 0.12, 0.04], [0, 0.36, 0.08], M.dark);                 // fascia in alto
  box(quadro, [1.74, 0.46, 0.03], [0, -0.1, 0.075], M.dark, { receive: false });   // guida DIN
  const modules = {};
  const slots = [{ id: 'D', x: -0.62, w: 0.5, name: 'Differenziale', wide: true }, { id: 'M1', x: -0.12, w: 0.3, name: 'Luci' }, { id: 'M2', x: 0.26, w: 0.3, name: 'Prese' }, { id: 'M3', x: 0.64, w: 0.3, name: 'Cucina' }];
  const leverMat = mat(0x20262e, 0.5);
  const redLed = glow(0xff3b30, 3), greenLed = glow(0x35e07a, 2);
  slots.forEach(s => {
    const g = new THREE.Group();
    g.position.set(s.x, -0.1, 0.1);
    quadro.add(g);
    const body = box(g, [s.w, 0.42, 0.1], [0, 0, 0], s.wide ? mat(0xe9e6dc, 0.45) : mat(0xf1efe8, 0.45));
    box(g, [s.w * 0.7, 0.07, 0.01], [0, 0.17, 0.055], mat(0x20262e, 0.6), { cast: false });
    const lever = new THREE.Group();
    lever.position.set(0, 0, 0.055);
    g.add(lever);
    const stick = box(lever, [s.w * 0.45, 0.2, 0.06], [0, 0, 0.03], leverMat);
    const flag = box(lever, [s.w * 0.45, 0.05, 0.065], [0, 0.0, 0.03], mat(COL.red, 0.5), { cast: false });
    flag.visible = false;
    let test = null;
    if (s.wide) { test = box(g, [0.1, 0.06, 0.04], [0.14, -0.17, 0.06], mat(COL.blue, 0.5)); }
    modules[s.id] = { g, lever, flag, stick, on: 1, tripped: false, angle: 0 };
    const lab = stage.label(s.name, g, 'ctl', 0.4, 8);
    modules[s.id].label = lab;
    stage.pickable([body, stick, ...(test ? [test] : [])], { click: () => cb.onControl && cb.onControl(s.id) });
  });
  const ledR = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), redLed);
  ledR.position.set(0.75, 0.4, 0.1); quadro.add(ledR);
  const ledG = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), greenLed);
  ledG.position.set(0.55, 0.4, 0.1); quadro.add(ledG);
  stage.label('Quadro', quadro, 'room', 0.78);

  /* ---- soggiorno: divano, tavolino, televisore, lampada ---- */
  const sofa = new THREE.Group(); sofa.position.set(-2.5, 0, 0.9); root.add(sofa);
  box(sofa, [2.0, 0.42, 0.85], [0, 0.23, 0], M.fabric); box(sofa, [2.0, 0.5, 0.2], [0, 0.65, -0.33], M.fabric);
  box(sofa, [0.2, 0.3, 0.85], [-0.9, 0.5, 0], M.fabric); box(sofa, [0.2, 0.3, 0.85], [0.9, 0.5, 0], M.fabric);
  box(root, [1.1, 0.35, 0.6], [-2.5, 0.2, -0.45], M.wood);
  const tvStand = box(root, [1.5, 0.45, 0.45], [-1.65, 0.23, -2.55], M.wood);
  const tvGlow = glow(0x6fa8ff, 1.4);
  box(root, [1.3, 0.74, 0.06], [-1.65, 0.98, -2.55], M.dark);
  const tvScreen = box(root, [1.2, 0.64, 0.02], [-1.65, 0.98, -2.51], tvGlow, { cast: false });
  const tvLight = new THREE.PointLight(0x7fb0ff, 0, 5, 1.8); tvLight.position.set(-1.65, 1.0, -1.9); root.add(tvLight);
  stage.label('Televisore', tvScreen, 'ctl', 0.55, 14);
  const socketTv = box(root, [0.12, 0.12, 0.03], [-0.95, 0.35, -2.88], M.plate); void socketTv;

  /* ---- lampade a sospensione ---- */
  const lamps = {};
  function pendant(id, x, z, name) {
    const g = new THREE.Group(); g.position.set(x, WALL, z); root.add(g);
    cyl(g, 0.012, 0.55, [0, -0.27, 0], M.dark, { cast: false });
    const shade = cyl(g, 0.3, 0.2, [0, -0.62, 0], M.white, { r2: 0.07 });
    const bm = glow(0xffd9a0, 3.2);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 10), bm); bulb.position.set(0, -0.72, 0); g.add(bulb);
    const light = new THREE.PointLight(0xffd29a, 0, 9, 1.4); light.position.set(0, -0.8, 0); g.add(light);
    lamps[id] = { bm, light };
    stage.label(name, bulb, 'ctl', 0.3, 14);
  }
  pendant('L1', -2.5, -0.5, 'Lampada soggiorno');
  pendant('L2', 0.5, -0.5, 'Lampada camera');

  /* ---- camera: letto e comodino ---- */
  box(root, [1.7, 0.32, 2.1], [0.5, 0.2, -1.75], M.wood);
  box(root, [1.6, 0.18, 2.0], [0.5, 0.45, -1.75], M.bed);
  box(root, [0.7, 0.1, 0.4], [0.2, 0.6, -2.45], mat(0xf3f0e8, 0.9));
  box(root, [0.7, 0.1, 0.4], [0.85, 0.6, -2.45], mat(0xf3f0e8, 0.9));
  box(root, [0.45, 0.4, 0.4], [1.55, 0.2, -2.7], M.wood);

  /* ---- cucina: lavatrice e forno con le loro spine ---- */
  box(root, [2.2, 0.06, 0.7], [3.15, 0.9, -2.6], mat(0xc9c5bb, 0.5), { cast: false });    // piano
  const cooking = {};
  function appliance(id, plugId, x, name, kind) {
    const g = new THREE.Group(); g.position.set(x, 0, -2.45); root.add(g);
    const w = 0.62;
    box(g, [w, 0.86, 0.58], [0, 0.43, 0], kind === 'lav' ? M.white : M.steel);
    let light = null, win = null;
    const gm = glow(kind === 'lav' ? 0x9fd0ff : 0xff8a2a, kind === 'lav' ? 1.6 : 2.4);
    if (kind === 'lav') {
      cyl(g, 0.21, 0.04, [0, 0.43, 0.3], M.dark, { rot: [Math.PI / 2, 0, 0] });
      win = cyl(g, 0.17, 0.03, [0, 0.43, 0.32], gm, { rot: [Math.PI / 2, 0, 0], cast: false });
      box(g, [0.5, 0.08, 0.02], [0, 0.78, 0.295], M.dark, { cast: false });
    } else {
      win = box(g, [0.46, 0.34, 0.02], [0, 0.4, 0.3], gm, { cast: false });
      box(g, [0.5, 0.06, 0.03], [0, 0.72, 0.31], M.dark, { cast: false });
    }
    const ledM = glow(0x35e07a, 2.4);
    const led = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 6), ledM); led.position.set(0.22, 0.78, 0.3); g.add(led);
    light = new THREE.PointLight(kind === 'lav' ? 0x9fd0ff : 0xff9a40, 0, 3.2, 1.8); light.position.set(0, 0.5, 0.6); g.add(light);
    stage.label(name, g, 'ctl', 1.15, 14);
    // spina: nella presa a parete, oppure staccata sul pavimento
    const sx = x + 0.45;
    const sock = box(root, [0.14, 0.14, 0.03], [sx, 0.32, -2.88], M.plate);
    const plug = new THREE.Group(); root.add(plug);
    const pbody = box(plug, [0.12, 0.12, 0.09], [0, 0, 0], mat(0x2a6f4e, 0.6));
    box(plug, [0.07, 0.02, 0.05], [0, -0.06, -0.04], M.metal, { cast: false });
    const cableMat = mat(0x1f2328, 0.7);
    const rec = { id, plugId, plug, sock, cable: null, cableMat, lightM: gm, ledM, light, win, kind, plugged: true, sx, ax: x, name, rot: 0, drum: win };
    cooking[id] = rec;
    stage.pickable([pbody], { click: () => cb.onControl && cb.onControl(plugId) });
    stage.label('Spina ' + (kind === 'lav' ? 'lavatrice' : 'forno'), plug, 'ctl', 0.2, 9);
    placePlug(rec, true);
  }
  function placePlug(rec, plugged) {
    rec.plugged = plugged;
    if (plugged) { rec.plug.position.set(rec.sx, 0.32, -2.835); rec.plug.rotation.set(0, 0, 0); }
    else { rec.plug.position.set(rec.sx - 0.35, 0.06, -1.55); rec.plug.rotation.set(Math.PI / 2, 0, 0.5); }
    if (rec.cable) { root.remove(rec.cable); rec.cable.geometry.dispose(); }
    const from = new THREE.Vector3(rec.ax + 0.2, 0.15, -2.2);
    const end = rec.plug.position.clone(); if (plugged) end.z += 0.04;
    const mid = new THREE.Vector3((from.x + end.x) / 2, 0.03, plugged ? -2.3 : (from.z + end.z) / 2);
    const curve = new THREE.CatmullRomCurve3([from, mid, end]);
    rec.cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.014, 6, false), rec.cableMat);
    rec.cable.castShadow = true;
    root.add(rec.cable);
  }
  appliance('LAV', 'SL', 2.35, 'Lavatrice', 'lav');
  appliance('FOR', 'SF', 3.75, 'Forno', 'for');

  /* ---- stanze: nomi ---- */
  const nameAt = (t, x, z) => { const o = new THREE.Object3D(); o.position.set(x, 0.05, z); root.add(o); stage.label(t, o, 'room'); };
  nameAt('Soggiorno', -2.6, 2.1); nameAt('Camera', 0.5, 0.9); nameAt('Cucina', 3.1, 0.9);

  /* ---- aggiornamento dallo stato ---- */
  let snap = null;
  const target = { lamp: { L1: 0, L2: 0 }, tv: 0, lights: {} };
  const apply = s => {
    snap = s;
    const o = s.obs;
    ['L1', 'L2'].forEach(id => { target.lamp[id] = o.loads[id] === 'on' ? 1 : 0; });
    target.tv = o.loads.P === 'on' ? 1 : 0;
    ['LAV', 'FOR'].forEach(id => { target.lights[id] = o.loads[id] === 'on' ? 1 : 0; });
    slots.forEach(sl => {
      const m = modules[sl.id], p = o.parts[sl.id] || {};
      m.on = p.on ? 1 : 0; m.tripped = !!p.tripped;
    });
    Object.values(cooking).forEach(rec => {
      const p = o.parts[rec.plugId] || {};
      const plugged = !!p.on;
      if (plugged !== rec.plugged) placePlug(rec, plugged);
    });
    redLed.userData.on = o.tripped.length > 0;
    greenLed.userData.on = !!o.supply && !o.tripped.includes('D');
    stage.redraw();
  };
  const cur = { lamp: { L1: 0, L2: 0 }, tv: 0, lights: { LAV: 0, FOR: 0 }, rot: 0 };
  const hook = (dt) => {
    let moving = false;
    ['L1', 'L2'].forEach(id => {
      const L = lamps[id];
      cur.lamp[id] = ease(cur.lamp[id], target.lamp[id], 0.18);
      if (Math.abs(cur.lamp[id] - target.lamp[id]) < 0.01) cur.lamp[id] = target.lamp[id]; else moving = true;
      L.light.intensity = cur.lamp[id] * 9;
      L.bm.emissiveIntensity = cur.lamp[id] * L.bm.userData.max;
    });
    cur.tv = ease(cur.tv, target.tv, 0.2);
    if (Math.abs(cur.tv - target.tv) < 0.01) cur.tv = target.tv; else moving = true;
    tvGlow.emissiveIntensity = cur.tv * tvGlow.userData.max; tvLight.intensity = cur.tv * 2.2;
    Object.values(cooking).forEach(rec => {
      cur.lights[rec.id] = ease(cur.lights[rec.id], target.lights[rec.id], 0.2);
      if (Math.abs(cur.lights[rec.id] - target.lights[rec.id]) < 0.01) cur.lights[rec.id] = target.lights[rec.id]; else moving = true;
      rec.lightM.emissiveIntensity = cur.lights[rec.id] * rec.lightM.userData.max;
      rec.light.intensity = cur.lights[rec.id] * 2.4;
      rec.ledM.emissiveIntensity = target.lights[rec.id] * rec.ledM.userData.max;
    });
    // tamburo della lavatrice
    if (target.lights.LAV) { cooking.LAV.drum.rotation.y += dt * 3; moving = true; }
    slots.forEach(sl => {
      const m = modules[sl.id];
      const goal = m.tripped ? 0 : (m.on ? 0.55 : -0.55);
      m.angle = ease(m.angle, goal, 0.3);
      if (Math.abs(m.angle - goal) < 0.01) m.angle = goal; else moving = true;
      m.lever.rotation.x = -m.angle;
      m.flag.visible = m.tripped;
    });
    moving = setGlow(redLed, !!redLed.userData.on) || moving;
    moving = setGlow(greenLed, !!greenLed.userData.on) || moving;
    return moving;
  };
  hook.active = () => !!snap && (target.lights.LAV || Object.keys(cur.lamp).some(k => Math.abs(cur.lamp[k] - target.lamp[k]) > 0.005) || Math.abs(cur.tv - target.tv) > 0.005);
  stage.hook(hook);

  const q = {
    ...stage,
    update: apply,
    overview() { stage.view(HOME); },
    focus(name) { stage.view(name === 'cucina' ? CLOSE_CUCINA : name === 'quadro' ? CLOSE_QUADRO : HOME); },
    dispose: stage.dispose,
  };
  stage.view(HOME, true);
  return q;
}
