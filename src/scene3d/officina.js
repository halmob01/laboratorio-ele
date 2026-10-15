// Prova del Modulo 3: l'officina con il nastro da collaudare. Pacchetto separato (prove3d.js), si carica solo aprendo la prova.
// Non contiene regole: riceve lo stato osservato (officinaState) e segnala i tocchi alla pagina.

import * as THREE from 'three';
import { createStage } from './kit.js';
import { kitMaterials, box, cylinder, conveyor, parcel, motorUnit, stackLight, pushStation, cabinetPanel } from './parts3d.js';

const BELT = { x0: 2.6, x1: 8.6, z: 3.4, h: 0.8, w: 0.7 };
const UNIT = 0.9;                       // metri di nastro per unita' di posizione del motore
const PARCEL_X0 = 2.95;
const VIEWS = {
  insieme: { tx: 5.6, ty: 0.9, tz: 3.4, yaw: 18, pitch: 28, dist: 15 },
  pulsantiera: { tx: 6.4, ty: 1.5, tz: 5.5, yaw: 8, pitch: 8, dist: 2.9 },
  quadro: { tx: 3.1, ty: 1.45, tz: 0.4, yaw: 8, pitch: 6, dist: 3.4 },
  motore: { tx: 8.6, ty: 0.85, tz: 3.6, yaw: -30, pitch: 18, dist: 5.2 },
};

/**
 * @param {HTMLElement} container
 * @param {{ onTap:(u:object)=>void, onPress:(u:object)=>void, onRelease:(u:object)=>void, reduced?:boolean, lite?:boolean, capture?:boolean }} cb
 */
export function createOfficina(container, cb) {
  const stage = createStage(container, {
    bg: 0x14181e, exposure: 1.25, view: VIEWS.insieme, limits: { yaw: [-50, 50], pitch: [6, 70], dist: [2.5, 24] },
    reduced: cb.reduced, lite: cb.lite, capture: cb.capture,
    onTap: cb.onTap, onPress: cb.onPress, onRelease: cb.onRelease,
  });
  if (!stage) return null;
  const { world, pick, lite } = stage;
  const M = kitMaterials();
  stage.setEnvIntensity(0.22);

  // ---- luci: sole dalla finestra, lampade a soffitto ----
  const sun = new THREE.DirectionalLight(0xdfe8ff, 1.5);
  sun.position.set(7, 9, -6);
  sun.target.position.set(5.5, 0, 3.5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(lite ? 1024 : 2048, lite ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 30 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 4;
  world.add(sun, sun.target);
  [[3.2, 3.4], [6.0, 3.4], [8.8, 3.4], [6.0, 6.2]].forEach(([x, z], i) => {
    const l = new THREE.PointLight(0xfff0d8, 17, 14, 2);
    l.position.set(x, 3.2, z);
    if (!lite && i === 1) { l.castShadow = true; l.shadow.mapSize.set(512, 512); l.shadow.bias = -0.002; }
    world.add(l);
    box(world, M.steelDark, x, 3.3, z, 0.9, 0.05, 0.16, 0.01);
    const tube = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.02, 0.1), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff0d8, emissiveIntensity: 2.4 }));
    tube.position.set(x, 3.27, z);
    world.add(tube);
  });

  // ---- pavimento, pareti ----
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 11), M.concrete);
  floor.rotation.x = -Math.PI / 2; floor.position.set(5.5, 0, 4); floor.receiveShadow = true;
  M.concrete.map.repeat.set(3, 2.4); M.concrete.bumpMap.repeat.set(10, 8);
  world.add(floor);
  const WH = 3.6;
  box(world, M.wall, 5.5, WH / 2, -0.1, 12, WH, 0.2, 0.01);                  // parete di fondo
  box(world, M.wall, -0.1, WH / 2, 4, 0.2, WH, 9, 0.01);                      // parete sinistra
  box(world, M.wall, 11.6, WH / 2, 4, 0.2, WH, 9, 0.01);                       // parete destra
  box(world, M.wallBase, 5.5, 0.55, -0.0, 12, 1.1, 0.04, 0.005);               // zoccolo
  box(world, M.wallBase, -0.0, 0.55, 4, 0.04, 1.1, 9, 0.005);
  [[7.6, 4.2], [11.0, 2.0]].forEach(([x, w]) => {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.4, 1.0), M.windowGlow);
    win.position.set(x, 2.55, 0.016); world.add(win);
    box(world, M.frame, x, 2.55, 0.03, w - 0.3, 0.06, 0.04, 0.005);
    box(world, M.frame, x, 3.05, 0.03, w - 0.3, 0.06, 0.04, 0.005);
    box(world, M.frame, x, 2.05, 0.03, w - 0.3, 0.06, 0.04, 0.005);
  });
  box(world, M.steelDark, 0.02, 1.6, 6.2, 0.04, 2.8, 2.6, 0.01);               // portone a libro
  // percorso protetto attorno al nastro: strisce gialle e nere
  const ring = (x, z, w, d) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), M.hazard); m.rotation.x = -Math.PI / 2; m.position.set(x, 0.004, z); m.receiveShadow = true; world.add(m); };
  ring(5.6, 2.6, 7.2, 0.14); ring(5.6, 4.9, 7.2, 0.14); ring(2.0, 3.75, 0.14, 2.4); ring(9.2, 3.75, 0.14, 2.4);
  M.hazard.map.repeat.set(7, 1);

  // ---- nastro, pacco, finecorsa ----
  const belt = conveyor(M, { x0: BELT.x0, x1: BELT.x1, h: BELT.h, w: BELT.w });
  belt.group.position.z = BELT.z;
  world.add(belt.group);
  const pk = parcel(M);
  pk.position.set(PARCEL_X0, BELT.h + 0.0125, BELT.z);
  world.add(pk);
  // finecorsa a rullo in fondo al nastro
  const fc = new THREE.Group();
  fc.position.set(8.68, BELT.h + 0.2, BELT.z + 0.52);
  box(fc, M.steelDark, 0, -0.22, 0, 0.05, 0.4, 0.05, 0.005);
  box(fc, M.modGrey, 0, 0.0, 0, 0.12, 0.12, 0.1, 0.01);
  const arm = new THREE.Group();
  arm.position.set(-0.05, 0.0, -0.03);
  box(arm, M.steel, -0.02, 0, -0.26, 0.02, 0.02, 0.5, 0.004);
  const roll = cylinder(arm, M.red, -0.02, 0, -0.5, 0.035, 0.03, 'y', 18);
  fc.add(arm);
  world.add(fc);
  const fcLed = new THREE.Mesh(new THREE.SphereGeometry(0.012, 10, 8), new THREE.MeshStandardMaterial({ color: 0x3a2a05, emissive: 0xffb11a, emissiveIntensity: 0 }));
  fcLed.position.set(0.03, 0.0, 0.055); fc.add(fcLed);

  // ---- motore sul fondo del nastro ----
  const mo = motorUnit(M);
  mo.group.rotation.y = Math.PI;
  mo.group.position.set(BELT.x1, BELT.h - 0.07, 4.35);
  world.add(mo.group);
  box(world, M.frame, BELT.x1, 0.27, 4.35, 0.36, 0.54, 0.46, 0.01);            // pilastrino di sostegno
  cylinder(world, M.steelDark, BELT.x1, BELT.h - 0.07, 3.92, 0.04, 0.12, 'z');  // giunto con il rullo

  // ---- torretta luminosa, pulsantiera, armadio ----
  const stack = stackLight(M, 1.45);
  stack.group.position.set(9.6, 0, 2.2);
  world.add(stack.group);
  const station = pushStation(M);
  station.group.position.set(6.4, 0, 5.5);
  station.group.scale.setScalar(1.25);
  world.add(station.group);
  station.picks.forEach(p => pick.push(p));
  const panel = cabinetPanel(M);
  panel.group.position.set(3.0, 1.5, 0.07);
  world.add(panel.group);
  panel.picks.forEach(p => pick.push(p));

  // etichette
  stage.label('Nastro', 4.8, 1.25, 3.4, 'room');
  stage.label('Motore', 8.9, 1.35, 4.35, 'room');
  stage.label('Finecorsa', 8.7, 1.4, 3.9, 'room');
  stage.label('Quadro', 3.0, 2.3, 0.3, 'room');
  stage.label('Pulsantiera', 6.4, 2.0, 5.5, 'room');

  // ---- animazione continua: nastro, pacco, ventola, tremolio del motore ----
  let cur = 0, target = 0, belting = false, spinning = 0, humming = false, stop = null;
  const baseY = mo.group.position.y;
  function tickLoop() {
    if (stop) return;
    stop = stage.loop((t, dt) => {
      const d = target - cur;
      cur += Math.abs(d) < 0.001 ? d : d * Math.min(1, dt * 7);
      pk.position.x = PARCEL_X0 + cur * UNIT;
      if (belting) belt.run(UNIT, dt);
      if (spinning) mo.spin(spinning, dt);
      mo.group.position.y = baseY + (humming ? Math.sin(t / 22) * 0.0035 : 0);
      if (!belting && !spinning && !humming && Math.abs(target - cur) < 0.002) { stop(); stop = null; }
    });
  }
  // su telefono in verticale il nastro, lungo e basso, sta meglio da piu' vicino
  const viewFor = n => { const v = { ...(VIEWS[n] || VIEWS.insieme) }; if (stage.camera.aspect < 0.9 && (n === 'insieme' || !VIEWS[n])) { v.dist = 10.5; v.yaw = 24; } return v; };
  let first = true;
  if (stage.camera.aspect < 0.9) stage.look(viewFor('insieme'), 1);

  return {
    // state = officinaState(snapshot)
    update(s) {
      if (!s) return;
      target = Math.max(0, Math.min(s.length, s.pos));
      if (first) { cur = target; pk.position.x = PARCEL_X0 + cur * UNIT; first = false; }
      belting = s.motor === 'fwd' && !s.atEnd;
      spinning = s.motor === 'fwd' ? 6 : 0;
      humming = s.motor === 'hum';
      mo.set({ heat: Math.max(s.thermal.heat * 0.9, s.overload && s.motor !== 'off' ? 0.35 : 0) });
      arm.rotation.y = s.atEnd ? 0.55 : 0;
      fcLed.material.emissiveIntensity = s.atEnd ? 3 : 0;
      stack.set({ green: s.lamp, red: s.thermal.tripped || s.emergency, yellow: !s.qm && s.supply ? true : (s.overload && !s.thermal.tripped) });
      station.set(s);
      panel.set(s);
      tickLoop();
      stage.redraw();
      container.querySelector('canvas').setAttribute('aria-label',
        'Officina con il nastro trasportatore. ' + (s.motor === 'fwd' ? 'Il nastro è in marcia.' : s.motor === 'hum' ? 'Il motore ronza e non parte.' : 'Il nastro è fermo.') +
        (s.thermal.tripped ? ' Il termico è scattato.' : '') + (s.emergency ? ' L’emergenza è premuta.' : '') + (s.atEnd ? ' Il pacco è a fine corsa.' : ''));
    },
    look(name, ms) { stage.look(viewFor(name), ms); },
    screenOf: stage.screenOf,
    views: Object.keys(VIEWS),
    resize: stage.resize,
    dispose() { if (stop) stop(); stage.dispose(); },
  };
}
