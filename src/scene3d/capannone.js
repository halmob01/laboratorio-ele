// Il capannone delle prove di reparto (officina del Modulo 3, nastro automatico del Modulo 4): pavimento, pareti con le finestre,
// saracinesca, strisce a terra attorno al nastro, passerella dei cavi, sole e file di plafoniere.
// Solo scena: niente regole. Ogni prova sceglie l'ora del giorno (o.sun, o.mood); il resto e' lo stesso capannone.

import * as THREE from 'three';
import { box } from './parts3d.js';
import { TRAY_Y, TRAY_Z } from './officina-wires.js';

export const DOOR = { z0: 4.9, z1: 7.5, h: 2.8 };    // vano della saracinesca nella parete sinistra
export const ROW_MS = 180;                          // le file di plafoniere si accendono a questa distanza l'una dall'altra
const LAMP = 17;
const WH = 3.6;

/**
 * @param {object} stage   palco (createStage)
 * @param {object} M       materiali del kit (kitMaterials)
 * @param {{ reduced?: boolean, sun?: { color, intensity, pos }, mood?: { sun:[number,number], cold:number, warm:number, env:[number,number] }, shadowRow?: number }} o
 */
export function buildHall(stage, M, o = {}) {
  const { world, lite } = stage;

  // ---- luci: il sole dalla finestra, plafoniere a soffitto ----
  const sunO = o.sun || {};
  const sun = new THREE.DirectionalLight(sunO.color || 0xdfe8ff, sunO.intensity || 1.5);
  sun.position.set(...(sunO.pos || [7, 9, -6]));
  sun.target.position.set(5.5, 0, 3.5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(lite ? 1024 : 2048, lite ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 30 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 4;
  world.add(sun, sun.target);
  // file di plafoniere, dalla porta verso il fondo: ognuna con la sua luce e il suo tubo (materiale proprio, si accende da solo)
  const shadowRow = o.shadowRow === undefined ? 2 : o.shadowRow;
  const rows = [[3.2, 3.4], [6.0, 6.2], [6.0, 3.4], [8.8, 3.4]].map(([x, z], i) => {
    const l = new THREE.PointLight(0xfff0d8, LAMP, 14, 2);
    l.position.set(x, 3.2, z);
    if (!lite && i === shadowRow) { l.castShadow = true; l.shadow.mapSize.set(512, 512); l.shadow.bias = -0.002; }
    world.add(l);
    box(world, M.steelDark, x, 3.3, z, 0.9, 0.05, 0.16, 0.01);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff0d8, emissiveIntensity: 2.4 });
    const tube = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.02, 0.1), mat);
    tube.position.set(x, 3.27, z);
    tube.userData.lamp = i;        // resta separato: si accende e si spegne
    world.add(tube);
    return { light: l, mat, level: 1 };
  });
  function setRow(r, v) { r.level = v; r.light.intensity = LAMP * v; r.mat.emissiveIntensity = 0.05 + 2.35 * v; r.mat.color.setScalar(0.35 + 0.65 * v); }
  // con le plafoniere spente resta la luce del sole (fredda all'alba)
  const md = o.mood || { sun: [0.55, 0.95], cold: 0x9fb4e0, warm: 0xdfe8ff, env: [0.1, 0.12] };
  const warm = new THREE.Color(md.warm);
  function mood() {
    const k = rows.reduce((a, r) => a + r.level, 0) / rows.length;
    sun.intensity = md.sun[0] + md.sun[1] * k;
    sun.color.setHex(md.cold).lerp(warm, k);
    stage.setEnvIntensity(md.env[0] + md.env[1] * k);
    stage.redraw();
  }

  // ---- pavimento, pareti, piazzale ----
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 11), M.concrete);
  floor.rotation.x = -Math.PI / 2; floor.position.set(5.5, 0, 4); floor.receiveShadow = true;
  M.concrete.map.repeat.set(3, 2.4); M.concrete.bumpMap.repeat.set(10, 8);
  world.add(floor);
  const asphalt = new THREE.MeshStandardMaterial({ color: 0x3a3d42, roughness: 0.95 });
  const yard = new THREE.Mesh(new THREE.PlaneGeometry(14, 22), asphalt);
  yard.rotation.x = -Math.PI / 2; yard.position.set(-8.6, -0.005, 4); yard.receiveShadow = true;
  world.add(yard);
  box(world, M.wall, 5.5, WH / 2, -0.1, 12, WH, 0.2, 0.01);                  // parete di fondo
  // parete sinistra con il vano della saracinesca
  box(world, M.wall, -0.1, WH / 2, (-0.5 + DOOR.z0) / 2, 0.2, WH, DOOR.z0 + 0.5, 0.01);
  box(world, M.wall, -0.1, WH / 2, (DOOR.z1 + 8.5) / 2, 0.2, WH, 8.5 - DOOR.z1, 0.01);
  box(world, M.wall, -0.1, (DOOR.h + WH) / 2, (DOOR.z0 + DOOR.z1) / 2, 0.2, WH - DOOR.h, DOOR.z1 - DOOR.z0, 0.01);
  box(world, M.wall, 11.6, WH / 2, 4, 0.2, WH, 9, 0.01);                       // parete destra
  box(world, M.wallBase, 5.5, 0.55, -0.0, 12, 1.1, 0.04, 0.005);               // zoccolo
  box(world, M.wallBase, -0.0, 0.55, (-0.5 + DOOR.z0) / 2, 0.04, 1.1, DOOR.z0 + 0.5, 0.005);
  [[7.6, 4.2], [11.0, 2.0]].forEach(([x, w]) => {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.4, 1.0), M.windowGlow);
    win.position.set(x, 2.55, 0.016); world.add(win);
    box(world, M.frame, x, 2.55, 0.03, w - 0.3, 0.06, 0.04, 0.005);
    box(world, M.frame, x, 3.05, 0.03, w - 0.3, 0.06, 0.04, 0.005);
    box(world, M.frame, x, 2.05, 0.03, w - 0.3, 0.06, 0.04, 0.005);
  });
  // saracinesca: le lamelle salgono nel cassonetto sopra il vano
  const slats = (() => {
    const c = document.createElement('canvas'); c.width = 64; c.height = 256;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.fillStyle = '#8b939b'; g.fillRect(0, 0, 64, 256);
    for (let y = 0; y < 256; y += 16) { g.fillStyle = '#5d646b'; g.fillRect(0, y, 64, 3); g.fillStyle = '#a9b0b7'; g.fillRect(0, y + 3, 64, 2); }
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
    return t;
  })();
  const shutterMat = new THREE.MeshStandardMaterial({ map: slats, roughness: 0.45, metalness: 0.6 });
  const shutter = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1, DOOR.z1 - DOOR.z0 - 0.02), shutterMat);
  shutter.castShadow = true; shutter.receiveShadow = true;
  world.add(shutter);
  box(world, M.steelDark, -0.24, DOOR.h + 0.16, (DOOR.z0 + DOOR.z1) / 2, 0.3, 0.32, DOOR.z1 - DOOR.z0 + 0.1, 0.03);   // cassonetto
  let shutterK = 1;
  function setShutter(k) {
    shutterK = k;
    const h = Math.max(0.02, DOOR.h * (1 - k));
    shutter.scale.y = h;
    slats.repeat.set(1, h / 0.9);
    shutter.position.set(-0.12, DOOR.h - h / 2, (DOOR.z0 + DOOR.z1) / 2);
    shutter.visible = k < 0.995;
    stage.moved();
  }
  setShutter(1);
  // percorso protetto attorno al nastro: strisce gialle e nere
  const ring = (x, z, w, d) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), M.hazard); m.rotation.x = -Math.PI / 2; m.position.set(x, 0.004, z); m.receiveShadow = true; world.add(m); };
  ring(5.6, 2.6, 7.2, 0.14); ring(5.6, 4.9, 7.2, 0.14); ring(2.0, 3.75, 0.14, 2.4); ring(9.2, 3.75, 0.14, 2.4);
  M.hazard.map.repeat.set(7, 1);

  // ---- passerella dei cavi: lungo la parete di fondo e verso pulsantiera, finecorsa e motore ----
  const tray = (x0, z0, x1, z1) => {
    const along = Math.abs(x1 - x0) > Math.abs(z1 - z0);
    const len = along ? Math.abs(x1 - x0) : Math.abs(z1 - z0), cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const w = 0.26, y = TRAY_Y - 0.05;
    box(world, M.steelDark, cx, y, cz, along ? len : w, 0.012, along ? w : len, 0.003);
    [-1, 1].forEach(s => box(world, M.steelDark, along ? cx : cx + s * w / 2, y + 0.035, along ? cz + s * w / 2 : cz, along ? len : 0.012, 0.07, along ? 0.012 : len, 0.003));
  };
  tray(2.5, TRAY_Z, 8.9, TRAY_Z);
  tray(6.4, TRAY_Z, 6.4, 5.4);
  tray(8.68, TRAY_Z, 8.68, 4.4);
  [3.0, 5.0, 7.0, 8.9].forEach(x => box(world, M.steelDark, x, TRAY_Y + 0.25, TRAY_Z, 0.02, 0.5, 0.02, 0.003));     // tiranti

  return {
    sun, rows, shutter, setRow, mood, setShutter, tray,
    shutterK: () => shutterK,
    // le plafoniere si accendono una fila alla volta, con il tremolio dei tubi (fino al livello `to`)
    lampsOn(to = 1) {
      if (o.reduced) { rows.forEach(r => setRow(r, to)); mood(); return; }
      const flick = t => (t < 0 ? 0 : t < 50 ? 0.7 : t < 100 ? 0.05 : t < 150 ? 1 : t < 190 ? 0.35 : 1);
      const total = ROW_MS * rows.length + 260;
      stage.animate(total, k => { rows.forEach((r, i) => setRow(r, to * flick(k * total - i * ROW_MS))); mood(); });
    },
    shutterTo(open, ms = 1600) {
      const from = shutterK, to = open ? 1 : 0;
      if (o.reduced || ms <= 1) { setShutter(to); return; }
      stage.animate(ms, k => setShutter(from + (to - from) * (k * k * (3 - 2 * k))));
    },
  };
}
