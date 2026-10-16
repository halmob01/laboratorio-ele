// Prova del Modulo 3: l'officina con il nastro da collaudare. Pacchetto separato (prove3d.js), si carica solo aprendo la prova.
// Non contiene regole: riceve lo stato osservato (officinaState) e segnala i tocchi alla pagina.
// Atmosfera: l'alba prima del turno. Da fuori la saracinesca chiusa; dentro le plafoniere si accendono una fila alla volta.
// I fili del banco si vedono nella scena (passerella sospesa, quadro, pulsantiera) e si accendono con lo stato vero.

import * as THREE from 'three';
import { createStage } from './kit.js';
import { kitMaterials, box, cylinder, conveyor, parcel, motorUnit, stackLight, pushStation, cabinetPanel, led, textPlane } from './parts3d.js';
import { createLiveWires, createSparks } from './wiring.js';
import { officinaWires, TRAY_Y, TRAY_Z } from './officina-wires.js';

const BELT = { x0: 2.6, x1: 8.6, z: 3.4, h: 0.8, w: 0.7 };
const UNIT = 0.9;                       // metri di nastro per unita' di posizione del motore
const PARCEL_X0 = 2.95;
const DOOR = { z0: 4.9, z1: 7.5, h: 2.8 };    // vano della saracinesca nella parete sinistra
export const ROW_MS = 180;              // le file di plafoniere si accendono a questa distanza l'una dall'altra
const VIEWS = {
  insieme: { tx: 5.6, ty: 0.9, tz: 3.4, yaw: 18, pitch: 28, dist: 15 },
  pulsantiera: { tx: 6.4, ty: 1.5, tz: 5.5, yaw: 8, pitch: 8, dist: 2.9 },
  quadro: { tx: 3.0, ty: 1.75, tz: 0.4, yaw: 6, pitch: 6, dist: 2.6 },
  motore: { tx: 8.6, ty: 0.85, tz: 3.6, yaw: -30, pitch: 18, dist: 5.2 },
  esterno: { tx: 0.4, ty: 1.5, tz: 6.2, yaw: -78, pitch: 7, dist: 9.5 },
  turno: { tx: 5.8, ty: 1.0, tz: 3.6, yaw: 26, pitch: 34, dist: 13.5 },
};

/**
 * @param {HTMLElement} container
 * @param {{ onTap:(u:object)=>void, onPress:(u:object)=>void, onRelease:(u:object)=>void, reduced?:boolean, lite?:boolean, capture?:boolean }} cb
 */
export function createOfficina(container, cb) {
  const stage = createStage(container, {
    bg: 0x1d2638, exposure: 1.25, view: VIEWS.insieme, limits: { yaw: [-50, 50], pitch: [6, 70], dist: [2.5, 24] },
    reduced: cb.reduced, lite: cb.lite, capture: cb.capture,
    onTap: cb.onTap, onPress: cb.onPress, onRelease: cb.onRelease,
  });
  if (!stage) return null;
  const { world, pick, lite } = stage;
  const M = kitMaterials();
  stage.setEnvIntensity(0.22);

  // ---- luci: sole dell'alba dalla finestra, plafoniere a soffitto ----
  const sun = new THREE.DirectionalLight(0xdfe8ff, 1.5);
  sun.position.set(7, 9, -6);
  sun.target.position.set(5.5, 0, 3.5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(lite ? 1024 : 2048, lite ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 30 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 4;
  world.add(sun, sun.target);
  // file di plafoniere, dalla porta verso il fondo: ognuna con la sua luce e il suo tubo (materiale proprio, si accende da solo)
  const LAMP = 17;
  const rows = [[3.2, 3.4], [6.0, 6.2], [6.0, 3.4], [8.8, 3.4]].map(([x, z], i) => {
    const l = new THREE.PointLight(0xfff0d8, LAMP, 14, 2);
    l.position.set(x, 3.2, z);
    if (!lite && i === 2) { l.castShadow = true; l.shadow.mapSize.set(512, 512); l.shadow.bias = -0.002; }
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
  // con le plafoniere spente resta la luce fredda dell'alba
  function mood() {
    const k = rows.reduce((a, r) => a + r.level, 0) / rows.length;
    sun.intensity = 0.55 + 0.95 * k;
    sun.color.setHex(0x9fb4e0).lerp(new THREE.Color(0xdfe8ff), k);
    stage.setEnvIntensity(0.1 + 0.12 * k);
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
  const WH = 3.6;
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
  cylinder(arm, M.red, -0.02, 0, -0.5, 0.035, 0.03, 'y', 18);
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
  const sparks = createSparks({ add: o => world.add(o), animate: stage.animate, redraw: stage.redraw }, [BELT.x1, BELT.h + 0.15, 4.45], lite ? 18 : 34);

  // ---- torretta luminosa, pulsantiera con la spia, armadio con il lucchetto ----
  const stack = stackLight(M, 1.45);
  stack.group.position.set(9.6, 0, 2.2);
  world.add(stack.group);
  const station = pushStation(M);
  station.group.position.set(6.4, 0, 5.5);
  station.group.scale.setScalar(1.25);
  world.add(station.group);
  station.picks.forEach(p => pick.push(p));
  const spia = led(0x2ee66a, 0.028);
  spia.mesh.position.set(0, 1.56, 0.0);
  station.group.add(spia.mesh);
  const panel = cabinetPanel(M);
  panel.group.position.set(3.0, 1.5, 0.07);
  world.add(panel.group);
  panel.picks.forEach(p => pick.push(p));
  // lucchetto con il cartellino dei lavori: appeso alla leva del salvamotore quando e' aperto
  const lock = new THREE.Group();
  lock.position.set(2.7, 1.66, 0.27);
  const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.005, 8, 18, Math.PI), M.steel);
  shackle.position.y = 0.03; lock.add(shackle);
  box(lock, M.red, 0, 0, 0, 0.05, 0.045, 0.022, 0.006);
  const tag = textPlane(lock, 'Lavori in corso', 0, -0.1, 0.015, 0.16, 0.08, { bg: '#f5c400', fg: '#17181a', size: 0.36, dim: 0xffffff });
  tag.material.side = THREE.DoubleSide;
  lock.scale.setScalar(0.0001);          // nascosto restando nella scena: i suoi programmi si preparano con gli altri
  world.add(lock);

  // ---- il turno (finale): pacchi in serie sul nastro, con un'ombra finta ciascuno (niente ombre da ricalcolare) ----
  const N = 6;
  const crowd = new THREE.InstancedMesh(new THREE.BoxGeometry(0.48, 0.34, 0.38), M.cardboard, N);
  crowd.count = 0; crowd.frustumCulled = false;
  world.add(crowd);
  const blobTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d', { willReadFrequently: true });
    const gr = g.createRadialGradient(32, 32, 4, 32, 32, 31); gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  })();
  const blobs = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.7, 0.56).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false }), N);
  blobs.count = 0; blobs.frustumCulled = false; blobs.renderOrder = 1;
  world.add(blobs);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v3 = new THREE.Vector3(), sc = new THREE.Vector3();
  // anche il pacco del collaudo ha l'ombra finta: muovendosi non fa ridisegnare le ombre del sole a ogni fotogramma
  pk.traverse(o => { if (o.isMesh) o.castShadow = false; });
  const pkBlob = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.56).rotateX(-Math.PI / 2), blobs.material);
  pkBlob.position.y = -0.01; pkBlob.renderOrder = 1;
  pk.add(pkBlob);

  // fili vivi del banco: il loro ciclo d'animazione si ferma quando la funzione dice di aver finito
  const wires = createLiveWires({
    add: o => world.add(o), redraw: stage.redraw, reduced: cb.reduced,
    loop: fn => { const end = stage.loop(() => { if (fn() === false) end(); }); },
  });

  // etichette
  stage.label('Nastro', 4.8, 1.25, 3.4, 'room');
  stage.label('Motore', 8.9, 1.35, 4.35, 'room');
  stage.label('Finecorsa', 8.7, 1.4, 3.9, 'room');
  stage.label('Quadro', 3.0, 2.3, 0.3, 'room');
  stage.label('Pulsantiera', 6.4, 2.25, 5.5, 'room');

  // ---- animazione continua: nastro, pacco, ventola, tremolio, allarme ----
  let cur = 0, target = 0, belting = false, spinning = 0, humming = false, stop = null, shadowX = PARCEL_X0;
  let jam = false, alarm = false, shiftOn = false, shiftT = 0, lastSpark = 0, last = null;
  const baseY = mo.group.position.y;
  function tickLoop() {
    if (stop) return;
    stop = stage.loop((t, dt) => {
      const d = target - cur;
      cur += Math.abs(d) < 0.001 ? d : d * Math.min(1, dt * 7);
      if (!shiftOn) {
        pk.position.x = PARCEL_X0 + cur * UNIT;
        // pacco incastrato: si inclina contro la sponda e trema mentre il nastro gli slitta sotto
        pk.rotation.z = jam ? -0.14 + Math.sin(t / 40) * 0.02 : 0;
        shadowX = pk.position.x;          // ombra finta: si sposta con il pacco, niente ombre da ricalcolare
      }
      if (belting || shiftOn) belt.run(UNIT, dt);
      if (spinning || shiftOn) mo.spin(spinning || 6, dt);
      mo.group.position.y = baseY + (humming || jam ? Math.sin(t / 22) * (jam ? 0.006 : 0.0035) : 0);
      // il termico e' scattato ma il nastro gira: torretta gialla che lampeggia, scintille dal motore
      if (alarm) {
        stack.set({ yellow: Math.floor(t / 320) % 2 === 0, red: false, green: last && last.lamp });
        if (t - lastSpark > 1300) { lastSpark = t; sparks.play(900); }
      }
      if (shiftOn) {
        shiftT += dt;
        const L = BELT.x1 - BELT.x0 - 0.5, gap = L / N;
        for (let i = 0; i < N; i++) {
          const s = (shiftT * UNIT + i * gap) % L, x = BELT.x0 + 0.25 + s;
          const e = Math.min(1, s / 0.25, (L - s) / 0.25);         // compaiono e spariscono alle estremita'
          sc.setScalar(Math.max(0.001, e));
          v3.set(x, BELT.h + 0.0125 + 0.17 * e, BELT.z); m4.compose(v3, q, sc); crowd.setMatrixAt(i, m4);
          v3.set(x, BELT.h + 0.002, BELT.z); m4.compose(v3, q, sc); blobs.setMatrixAt(i, m4);
        }
        crowd.instanceMatrix.needsUpdate = true; blobs.instanceMatrix.needsUpdate = true;
      }
      if (!belting && !spinning && !humming && !jam && !alarm && !shiftOn && Math.abs(target - cur) < 0.002) { stop(); stop = null; }
    });
  }
  // pareti, lampade, cornici e strisce a terra non si muovono: si accorpano. Restano a parte le macchine e quello che si tocca.
  // anche nastro, pulsantiera e quadro sono quasi tutti fermi: si accorpano; restano separati i pezzi toccabili (userData) e quelli che si muovono
  stage.finish([pk, fc, mo.group, stack.group, shutter, lock, crowd, blobs]);

  // su telefono in verticale il nastro, lungo e basso, sta meglio da piu' vicino
  const viewFor = n => { const v = { ...(VIEWS[n] || VIEWS.insieme) }; if (stage.camera.aspect < 0.9 && (n === 'insieme' || n === 'turno' || !VIEWS[n])) { v.dist = 10.5; v.yaw = 24; } if (stage.camera.aspect < 0.9 && n === 'esterno') v.dist = 13; return v; };
  let first = true, firstWires = true;
  if (stage.camera.aspect < 0.9) stage.look(viewFor('insieme'), 1);

  return {
    // state = officinaState(snapshot)
    update(s) {
      if (!s) return;
      last = s;
      target = Math.max(0, Math.min(s.length, s.pos));
      if (first) { cur = target; pk.position.x = shadowX = PARCEL_X0 + cur * UNIT; first = false; stage.moved(); }
      belting = s.motor === 'fwd' && !s.atEnd;
      spinning = s.motor === 'fwd' ? 6 : 0;
      humming = s.motor === 'hum';
      jam = !!s.overload && s.motor === 'fwd';
      alarm = s.thermal.tripped && s.motor === 'fwd';
      if (!jam && pk.rotation.z !== 0) { pk.rotation.z = 0; stage.moved(); }
      mo.set({ heat: Math.max(s.thermal.heat * 0.9, jam ? 0.35 : 0, alarm ? 0.8 : 0) });
      if (arm.rotation.y !== (s.atEnd ? 0.55 : 0)) { arm.rotation.y = s.atEnd ? 0.55 : 0; stage.moved(); }
      fcLed.material.emissiveIntensity = s.atEnd ? 3 : 0;
      if (shiftOn) stack.set({ green: true });
      else if (!alarm) stack.set({ green: s.lamp, red: s.thermal.tripped || s.emergency, yellow: !s.qm && s.supply ? true : (s.overload && !s.thermal.tripped && s.motor === 'fwd') });
      station.set(s);
      panel.set(s);
      spia.set(!!s.lamp || shiftOn, 3.2);
      const lk = s.qm ? 0.0001 : 1;
      if (lock.scale.x !== lk) { lock.scale.setScalar(lk); stage.moved(); }
      if (s.wires) { wires.sync(officinaWires(s.wires, s.flow), !firstWires); firstWires = false; }
      tickLoop();
      stage.redraw();
      container.querySelector('canvas').setAttribute('aria-label',
        'Officina con il nastro trasportatore. ' + (s.motor === 'fwd' ? 'Il nastro è in marcia.' : s.motor === 'hum' ? 'Il motore ronza e non parte.' : 'Il nastro è fermo.') +
        (s.thermal.tripped ? ' Il termico è scattato.' : '') + (s.emergency ? ' L’emergenza è premuta.' : '') + (s.atEnd ? ' Il pacco è a fine corsa.' : '') + (s.qm ? '' : ' Il salvamotore è aperto: lavori in corso.'));
    },
    look(name, ms) { stage.look(viewFor(name), ms); },
    // arrivo: da fuori, saracinesca chiusa e plafoniere spente
    outside() { setShutter(0); rows.forEach(r => setRow(r, 0)); mood(); stage.look(viewFor('esterno'), 1); },
    inside() { setShutter(1); rows.forEach(r => setRow(r, 1)); mood(); },
    shutter(open, ms = 1600) {
      const from = shutterK, to = open ? 1 : 0;
      if (cb.reduced || ms <= 1) { setShutter(to); return; }
      stage.animate(ms, k => setShutter(from + (to - from) * (k * k * (3 - 2 * k))));
    },
    // le plafoniere si accendono una fila alla volta, con il tremolio dei tubi
    lampsOn() {
      if (cb.reduced) { rows.forEach(r => setRow(r, 1)); mood(); return; }
      const flick = t => (t < 0 ? 0 : t < 50 ? 0.7 : t < 100 ? 0.05 : t < 150 ? 1 : t < 190 ? 0.35 : 1);
      const total = ROW_MS * rows.length + 260;
      stage.animate(total, k => { rows.forEach((r, i) => setRow(r, flick(k * total - i * ROW_MS))); mood(); });
    },
    // il turno parte: i pacchi scorrono uno dietro l'altro (solo scena, finche' resta acceso)
    shift(on) {
      shiftOn = !!on; shiftT = 0;
      crowd.count = blobs.count = on ? N : 0;
      pk.visible = !on;
      stage.moved();
      if (on) { stack.set({ green: true }); spia.set(true, 3.2); tickLoop(); } else if (last) this.update(last);
      stage.redraw();
    },
    wires: () => wires,
    // per le misure: quanti oggetti disegna la scena (mesh visibili)
    stats() { let n = 0; stage.THREE_scene.traverseVisible(o => { if (o.isMesh || o.isPoints) n++; }); return n; },
    screenOf: stage.screenOf,
    views: Object.keys(VIEWS),
    resize: stage.resize,
    dispose() { if (stop) stop(); stage.dispose(); },
  };
}
