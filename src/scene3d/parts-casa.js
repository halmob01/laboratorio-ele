// Pezzi 3D della casa intelligente (prova del Modulo 5, "Una sera d'inverno"): pannelli sul tetto, batteria con l'inverter,
// colonnina e auto, pompa di calore, termostati, sonda di allagamento, sirena con la tacitazione, generale, contatore.
// Contratto dei pezzi come la fabbrica: ogni pezzo riceve i materiali del kit e ritorna { group, picks, set(stato), skip? };
// `set` legge `casaState` (src/prove/state.js, contratto in docs/PIANO-CASA.md) e ritorna true se ha cambiato qualcosa da
// ridisegnare. Nessuna regola: si disegna quello che il motore osserva. Luci accese e spente con l'intensita', mai `visible`.
//
// Coordinate in metri, origine a terra al centro del pezzo, fronte verso +z (la scena lo gira verso dove deve guardare).

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { box, cylinder, led, module, textPlane } from './parts3d.js';

// canvas in memoria (si rilegge per farne una texture: niente canvas accelerato, vedi SPEC-SCENE-3D 4.7)
function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return { c, g: c.getContext('2d', { willReadFrequently: true }) };
}
const HIDE = 0.0001;                 // scala di un oggetto che c'e' ma non si vede (resta nella scena: programmi pronti)

// Macchia scura sfumata da mettere sotto un oggetto che si muove (ombra finta, niente ombre da ricalcolare).
export function blobShadow(w, d, alpha = 0.5) {
  const { c, g } = canvas(64, 64);
  const gr = g.createRadialGradient(32, 32, 4, 32, 32, 31);
  gr.addColorStop(0, `rgba(0,0,0,${alpha})`); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
  m.position.y = 0.012; m.renderOrder = 1; m.castShadow = false;
  return m;
}

/* ---------- pannelli fotovoltaici sul tetto ---------- */

// Celle blu scure con le righe d'argento e la cornice d'alluminio: una texture per tutti i pannelli.
function panelTexture() {
  const { c, g } = canvas(128, 192);
  g.fillStyle = '#c9ced3'; g.fillRect(0, 0, 128, 192);
  g.fillStyle = '#14233f'; g.fillRect(5, 5, 118, 182);
  for (let i = 0; i < 6; i++) for (let j = 0; j < 10; j++) {
    g.fillStyle = (i + j) % 2 ? '#1b2f55' : '#18294b';
    g.fillRect(7 + i * 19.2, 7 + j * 17.8, 18, 16.6);
  }
  g.fillStyle = 'rgba(200,210,225,0.5)';
  for (let i = 1; i < 6; i++) g.fillRect(6 + i * 19.2, 6, 1, 180);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

// Pannelli sulla falda sud del tetto a padiglione di props.js (roof): una InstancedMesh, una chiamata per tutti.
// o = { w, d } della casa, sporgenza 0,45 e colmo a 2,3 come nel tetto. Il gruppo va messo dentro il gruppo del tetto, cosi'
// sale e scende con lui. set(s): i pannelli brillano appena quando producono (kw.pv rispetto a o.peak).
export function solarRoof(M, o) {
  const ov = 0.45, H = 2.3;
  const x0 = -ov, x1 = o.w + ov, z1 = o.d + ov, half = (o.d + 2 * ov) / 2;
  const L = Math.hypot(half, H), a = Math.atan2(H, half);
  const PW = 1.0, PL = 1.6, GAP = 0.05, MARGIN = 0.3;
  const spots = [];
  // due file: per ogni fila la larghezza utile e' quella del bordo alto (la falda si stringe verso il colmo)
  [[0.35, 1], [0.35 + PL + 0.12, 1]].forEach(([s0]) => {
    const fTop = (s0 + PL) / L;
    const xa = x0 + fTop * half + MARGIN, xb = x1 - fTop * half - MARGIN;
    const n = Math.floor((xb - xa + GAP) / (PW + GAP));
    const start = (xa + xb) / 2 - (n * (PW + GAP) - GAP) / 2 + PW / 2;
    const sMid = s0 + PL / 2, f = sMid / L;
    for (let i = 0; i < n; i++) spots.push([start + i * (PW + GAP), f * H + 0.05, z1 - f * half + 0.03]);
  });
  const mat = new THREE.MeshStandardMaterial({ map: panelTexture(), roughness: 0.22, metalness: 0.35, emissive: 0x2a4f9a, emissiveIntensity: 0 });
  const geo = new THREE.BoxGeometry(PW, 0.04, PL);
  const mesh = new THREE.InstancedMesh(geo, mat, spots.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), a), one = new THREE.Vector3(1, 1, 1);
  spots.forEach(([x, y, z], i) => mesh.setMatrixAt(i, m4.compose(new THREE.Vector3(x, y, z), q, one)));
  mesh.castShadow = true; mesh.receiveShadow = true;
  const g = new THREE.Group();
  g.add(mesh);
  let lvl = -1;
  return {
    group: g, picks: [], count: spots.length, skip: [mesh],
    set(s) {
      const pv = (s && s.kw && s.kw.pv) || 0;
      const k = Math.round(Math.min(1, pv / (o.peak || 3)) * 10) / 10;
      if (k === lvl) return false;
      lvl = k;
      mat.emissiveIntensity = 0.35 * k;
      return true;
    },
  };
}

/* ---------- batteria a muro con l'inverter ---------- */

// Batteria (sinistra) e inverter (destra) su una piastra; guarda verso +z. La barra verde della carica sale con `soc`;
// la freccia della batteria e' verde quando si carica, ambra quando si scarica. L'inverter ha la spia verde quando produce.
export function batteryWall(M) {
  const g = new THREE.Group();
  box(g, M.modWhite, -0.38, 0.95, 0.1, 0.62, 1.05, 0.2, 0.03);                // batteria
  box(g, M.modDark, -0.38, 0.95, 0.205, 0.1, 0.82, 0.01, 0.004);              // fessura della barra
  const barMat = new THREE.MeshStandardMaterial({ color: 0x1d5e33, emissive: 0x39e07a, emissiveIntensity: 1.6, roughness: 0.4 });
  const BAR_H = 0.78;
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.07, BAR_H, 0.012).translate(0, BAR_H / 2, 0), barMat);
  bar.position.set(-0.38, 0.95 - BAR_H / 2, 0.209);
  bar.castShadow = false;
  g.add(bar);
  const arrow = led(0x39e07a, 0.018);
  arrow.mesh.position.set(-0.38, 1.42, 0.21);
  g.add(arrow.mesh);
  box(g, M.cabinet, 0.32, 1.05, 0.09, 0.46, 0.58, 0.18, 0.02);                 // inverter
  box(g, M.modDark, 0.32, 1.17, 0.185, 0.26, 0.12, 0.01, 0.004);
  const pv = led(0x39e07a, 0.014);
  pv.mesh.position.set(0.24, 1.17, 0.193);
  g.add(pv.mesh);
  // tubo dei cavi dal basso
  box(g, M.modGrey, 0.0, 0.32, 0.04, 0.06, 0.64, 0.06, 0.01);
  let key = '';
  return {
    group: g, picks: [], skip: [bar],
    set(s) {
      const soc = Math.max(0, Math.min(100, (s && s.soc) || 0));
      const b = (s && s.kw && s.kw.batt) || 0, prod = ((s && s.kw && s.kw.pv) || 0) > 0.05 && !!(s && s.powered);
      const dir = !s || !s.powered ? 0 : b > 0.05 ? 1 : b < -0.05 ? -1 : 0;
      const k = Math.round(soc) + '|' + dir + '|' + prod;
      if (k === key) return false;
      key = k;
      bar.scale.y = Math.max(HIDE, soc / 100);
      barMat.emissive.setHex(soc < 15 ? 0xff7a2a : 0x39e07a);
      arrow.mat.emissive.setHex(dir < 0 ? 0xffb02a : 0x39e07a);
      arrow.set(dir !== 0, 3);
      pv.set(prod, 3);
      return true;
    },
  };
}

/* ---------- colonnina e auto ---------- */

// Auto a blocchi (accorpata in pochi materiali): lunga lungo z, il muso verso -z. La presa di ricarica e' sul fianco
// destro (+x) dietro la ruota anteriore. Senza ombre vere: ha la sua ombra finta. Ritorna anche `port` (posizione della presa).
export function car(M) {
  const g = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color: 0x8c1f24, roughness: 0.32, metalness: 0.55 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x1a2028, roughness: 0.08, metalness: 0.7 });
  const tyre = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.85 });
  const parts = [];
  const add = (geo, mat, x, y, z) => { geo.translate(x, y, z); parts.push([geo, mat]); };
  const rb = (w, h, d) => new THREE.BoxGeometry(w, h, d);
  // abitacolo rastremato in alto: parabrezza e lunotto inclinati
  const cab = (w, h, d) => { const b = rb(w, h, d), p = b.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) > 0) { p.setX(i, p.getX(i) * 0.9); p.setZ(i, p.getZ(i) * 0.62); } return b; };
  add(rb(1.78, 0.55, 4.2), paint, 0, 0.55, 0);                                // scocca
  add(cab(1.6, 0.52, 2.5), glass, 0, 1.08, 0.2);                              // vetri tutto attorno
  add(rb(1.42, 0.05, 1.5), paint, 0, 1.35, 0.2);                              // tetto
  [-1, 1].forEach(sd => add(rb(0.06, 0.5, 0.08), paint, sd * 0.75, 1.08, 0.2));                     // montanti centrali
  [[-0.82, -1.35], [0.82, -1.35], [-0.82, 1.35], [0.82, 1.35]].forEach(([x, z]) => add(new THREE.CylinderGeometry(0.33, 0.33, 0.24, 18).rotateZ(Math.PI / 2), tyre, x, 0.33, z));
  const byMat = new Map();
  parts.forEach(([geo, mat]) => { if (!byMat.has(mat)) byMat.set(mat, []); byMat.get(mat).push(geo.toNonIndexed()); });
  byMat.forEach((list, mat) => { const m = new THREE.Mesh(mergeGeometries(list, false), mat); m.castShadow = false; m.receiveShadow = true; g.add(m); });
  // fari e luci posteriori: si accendono mentre l'auto arriva
  const head = new THREE.MeshStandardMaterial({ color: 0xdfe6ee, emissive: 0xfff4dc, emissiveIntensity: 0, roughness: 0.2 });
  const tail = new THREE.MeshStandardMaterial({ color: 0x5a1010, emissive: 0xff2a1a, emissiveIntensity: 0, roughness: 0.3 });
  const pair = (h, y, z) => mergeGeometries([-0.6, 0.6].map(x => new THREE.BoxGeometry(0.34, h, 0.03).translate(x, y, z)), false);
  g.add(new THREE.Mesh(pair(0.12, 0.66, -2.1), head), new THREE.Mesh(pair(0.1, 0.7, 2.1), tail));
  const shadow = blobShadow(2.5, 4.9, 0.6);
  g.add(shadow);
  return {
    group: g, picks: [], skip: [g], port: new THREE.Vector3(0.9, 0.78, -0.75),
    lights(on) { head.emissiveIntensity = on ? 2.2 : 0; tail.emissiveIntensity = on ? 1.6 : 0; },
  };
}

// Colonnina a muro (wallbox) con l'anello di luce e il cavo verso l'auto. o.port: la presa dell'auto nelle coordinate del
// gruppo della colonnina (il cavo si costruisce una volta). Anello: verde fioco libera, bianco attaccata, blu in carica.
// Durante la carica una luce corre lungo il cavo: `pulse(t)` dalla scena, solo mentre carica (unico movimento con la ventola).
export function charger(M, o) {
  const g = new THREE.Group();
  box(g, M.modDark, 0, 1.1, 0.07, 0.32, 0.44, 0.14, 0.04);
  box(g, M.modGrey, 0, 1.1, 0.142, 0.26, 0.36, 0.006, 0.02);
  const ringMat = new THREE.MeshStandardMaterial({ color: 0x223040, emissive: 0x39e07a, emissiveIntensity: 0, roughness: 0.3 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.012, 10, 32), ringMat);
  ring.position.set(0, 1.16, 0.148); ring.castShadow = false;
  g.add(ring);
  // fondina della spina
  box(g, M.modGrey, 0.2, 0.95, 0.06, 0.06, 0.12, 0.08, 0.01);
  // il cavo: da sotto la colonnina alla presa dell'auto, con una curva che scende verso terra
  const p0 = new THREE.Vector3(0, 0.88, 0.1), p3 = o.port.clone();
  const curve = new THREE.CatmullRomCurve3([p0, new THREE.Vector3(p0.x + (p3.x - p0.x) * 0.25, 0.3, p0.z + (p3.z - p0.z) * 0.3), new THREE.Vector3(p0.x + (p3.x - p0.x) * 0.7, 0.22, p0.z + (p3.z - p0.z) * 0.7), p3]);
  const cableMat = new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.55 });
  const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.014, 6), cableMat);
  cable.castShadow = false;
  const cableG = new THREE.Group();
  cableG.add(cable);
  g.add(cableG);
  // la luce che corre: tre gocce azzurre lungo il cavo (sopra il cavo, additive)
  const dropMat = new THREE.MeshBasicMaterial({ color: 0x5fb8ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const drops = new THREE.InstancedMesh(new THREE.SphereGeometry(0.026, 10, 8), dropMat, 3);
  drops.castShadow = false; drops.frustumCulled = false;
  cableG.add(drops);
  const at = new THREE.Vector3(), m4 = new THREE.Matrix4();
  const place = t => { for (let i = 0; i < 3; i++) { curve.getPointAt(((t / 1400) + i / 3) % 1, at); drops.setMatrixAt(i, m4.makeTranslation(at.x, at.y, at.z)); } drops.instanceMatrix.needsUpdate = true; };
  place(0);
  cableG.scale.setScalar(HIDE);
  let key = '';
  return {
    group: g, picks: [], skip: [cableG, ring],
    set(s) {
      const ev = (s && s.ev) || {};
      const live = !!(s && s.powered);
      const st = !live ? 'off' : ev.charging ? 'charge' : ev.plugged ? 'plug' : 'free';
      const k = st + '|' + !!ev.plugged;
      if (k === key) return false;
      key = k;
      cableG.scale.setScalar(ev.plugged ? 1 : HIDE);
      ringMat.emissive.setHex(st === 'charge' ? 0x3a8cff : st === 'plug' ? 0xf0f4ff : 0x39e07a);
      ringMat.emissiveIntensity = st === 'off' ? 0 : st === 'free' ? 0.8 : 2.4;
      dropMat.opacity = st === 'charge' ? 0.9 : 0;
      return true;
    },
    charging() { return key.startsWith('charge'); },
    pulse(t) { place(t); ringMat.emissiveIntensity = 1.6 + 0.9 * Math.sin(t / 220); },
  };
}

/* ---------- pompa di calore esterna ---------- */

// Unita' esterna con la griglia e la ventola (l'unica parte in `skip`: le pale sono una sola geometria). Guarda verso +z.
// Spia verde quando gira, rossa quando e' guasta (ha girato a vuoto). `spin(dt)` dalla scena, solo mentre gira.
export function heatPump(M) {
  const g = new THREE.Group();
  box(g, M.modWhite, 0, 0.42, 0, 1.0, 0.72, 0.38, 0.03);
  box(g, M.modDark, -0.14, 0.43, 0.192, 0.6, 0.6, 0.01, 0.01);               // fondo della griglia
  const grille = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.012, 8, 40), M.steelDark);
  grille.position.set(-0.14, 0.43, 0.222);
  g.add(grille);
  [-0.18, -0.09, 0, 0.09, 0.18].forEach(y => box(g, M.steelDark, -0.14, 0.43 + y, 0.226, 0.54, 0.008, 0.008, 0.002));
  // piedini e tubi verso il muro
  [-0.4, 0.4].forEach(x => box(g, M.modGrey, x, 0.03, 0, 0.08, 0.06, 0.4, 0.01));
  cylinder(g, M.steel, 0.42, 0.25, -0.24, 0.018, 0.12, 'z', 10);
  cylinder(g, M.steel, 0.42, 0.33, -0.24, 0.014, 0.12, 'z', 10);
  // ventola: tre pale e il mozzo in un'unica geometria
  const blades = [];
  for (let i = 0; i < 3; i++) {
    const b = new THREE.BoxGeometry(0.1, 0.24, 0.012).translate(0, 0.13, 0).rotateY(0.35).rotateZ((i * Math.PI * 2) / 3);
    blades.push(b.toNonIndexed());
  }
  blades.push(new THREE.CylinderGeometry(0.045, 0.045, 0.04, 16).rotateX(Math.PI / 2).toNonIndexed());
  blades.forEach(b => { if (!b.attributes.uv) b.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(b.attributes.position.count * 2), 2)); });
  const fan = new THREE.Mesh(mergeGeometries(blades, false), M.modGrey);
  fan.position.set(-0.14, 0.43, 0.206);
  fan.castShadow = false;
  g.add(fan);
  const lamp = led(0x39e07a, 0.016);
  lamp.mesh.position.set(0.34, 0.66, 0.195);
  g.add(lamp.mesh);
  let key = '';
  return {
    group: g, picks: [], skip: [fan],
    set(s) {
      const hp = (s && s.hp) || {};
      const k = (hp.on ? 1 : 0) + '|' + (hp.broken ? 1 : 0);
      if (k === key) return false;
      key = k;
      lamp.mat.emissive.setHex(hp.broken ? 0xff3a2a : 0x39e07a);
      lamp.set(!!hp.on || !!hp.broken, 3.2);
      return true;
    },
    running() { return key === '1|0'; },
    spin(dt) { fan.rotation.z -= dt * 0.014; },
  };
}

/* ---------- termostato con il radiatore ---------- */

// Termostato a muro con il numero su canvas (si riscrive solo quando cambia il grado intero, la fiamma o la finestra),
// guarda verso +z; piu' grande del vero per leggerlo dall'alto. o = { name }.
export function thermostat(M, o = {}) {
  const g = new THREE.Group();
  box(g, M.modWhite, 0, 0, 0, 0.2, 0.2, 0.03, 0.02);
  const { c, g: cx } = canvas(128, 96);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.12), new THREE.MeshBasicMaterial({ map: tex, color: 0xdddddd }));
  screen.position.set(0, 0.005, 0.017);
  g.add(screen);
  let key = '';
  const paint = (T, heat, win) => {
    cx.fillStyle = '#0f1a24'; cx.fillRect(0, 0, 128, 96);
    cx.fillStyle = win ? '#9fd4ff' : '#e9f2ff';
    cx.font = '600 50px system-ui, sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle';
    cx.fillText(T === null ? '--' : T + '°', 64, 42);
    cx.font = '600 17px system-ui, sans-serif';
    cx.fillStyle = win ? '#9fd4ff' : heat ? '#ffad4a' : '#5d6b78';
    cx.fillText(win ? 'finestra' : heat ? 'scalda' : o.name || '', 64, 80);
    tex.needsUpdate = true;
  };
  paint(null, false, false);
  return {
    group: g, picks: [],
    // z: la zona di casaState ({ T, valve, window }); powered: la casa ha corrente (a buio lo schermo si spegne)
    set(z, powered) {
      const T = z && typeof z.T === 'number' ? Math.round(z.T) : null;
      const heat = !!(z && z.valve > 0.5), win = !!(z && z.window);
      const k = powered ? T + '|' + heat + '|' + win : 'off';
      if (k === key) return false;
      key = k;
      if (powered) paint(T, heat, win);
      screen.material.color.setHex(powered ? 0xdddddd : 0x111111);
      return true;
    },
  };
}

// Radiatore (piastra con le alette) che si scalda: l'arancio sale con l'acqua calda (valvola aperta e pompa che gira).
// Guarda verso +z, largo w.
export function radiator(M, w = 0.9) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xf2f1ec, roughness: 0.4, emissive: 0xff6a2a, emissiveIntensity: 0 });
  const n = Math.round(w / 0.08);
  for (let i = 0; i < n; i++) box(g, mat, -w / 2 + 0.04 + i * 0.08, 0.42, 0.04, 0.06, 0.52, 0.06, 0.012);
  box(g, mat, 0, 0.7, 0.04, w, 0.03, 0.05, 0.01);
  box(g, mat, 0, 0.15, 0.04, w, 0.03, 0.05, 0.01);
  let lvl = -1;
  return {
    group: g, picks: [], mat,
    // k: 0 freddo, 1 caldo
    set(k) {
      const v = Math.round(Math.max(0, Math.min(1, k)) * 4) / 4;
      if (v === lvl) return false;
      lvl = v;
      mat.emissiveIntensity = 0.22 * v;
      return true;
    },
  };
}

/* ---------- allagamento: sonda, pozza, sirena, tacitazione ---------- */

// Sonda di allagamento a pavimento con la pozza d'acqua (un piano che cresce con la scala, mai `visible`). Toccabile per
// asciugarla: userData { id: 'S2', kind: 'toggle' }; anche la pozza e una zona di tocco piu' grande (sul telefono la sonda e'
// di pochi pixel). `grow(k)`: 0 asciutto, 1 pozza piena (la scena la anima).
export function floodProbe(M) {
  const g = new THREE.Group();
  const body = box(g, M.modWhite, 0, 0.02, 0, 0.1, 0.04, 0.07, 0.01);
  const tip = box(g, M.steel, 0, 0.004, 0.0, 0.07, 0.008, 0.04, 0.002);
  const lamp = led(0xff3a2a, 0.008);
  lamp.mesh.position.set(0.03, 0.043, 0.02);
  g.add(lamp.mesh);
  // cavo che sale sul muro alle spalle (la scena mette la sonda contro un muro, verso -z)
  box(g, M.modGrey, 0, 0.3, -0.06, 0.012, 0.6, 0.012, 0.003);
  const waterMat = new THREE.MeshStandardMaterial({ color: 0x2f6fa8, roughness: 0.03, metalness: 0.3, transparent: true, opacity: 0.78, depthWrite: false });
  const pool = new THREE.Mesh(new THREE.CircleGeometry(0.55, 40).rotateX(-Math.PI / 2), waterMat);
  pool.position.set(0.1, 0.006, 0.25);
  pool.scale.setScalar(HIDE);
  pool.renderOrder = 1; pool.castShadow = false;
  g.add(pool);
  const hit = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.set(0, 0.1, 0.1);
  g.add(hit);
  [body, tip, hit].forEach(m => { m.userData = { id: 'S2', kind: 'toggle' }; });
  let wet = null;
  return {
    group: g, picks: [body, tip, hit], skip: [pool],
    set(s) {
      const w = !!(s && s.flood && s.flood.wet);
      if (w === wet) return false;
      wet = w;
      lamp.set(w && !!(s && s.powered), 3);
      return true;
    },
    grow(k) { pool.scale.set(Math.max(HIDE, k), 1, Math.max(HIDE, k)); },
  };
}

// Sirena da interno con la luce rossa che lampeggia (con una luce vera, che si accende con l'intensita'). Guarda verso +z.
// `flash(t)` dalla scena, solo mentre suona.
export function siren(M) {
  const g = new THREE.Group();
  box(g, M.modWhite, 0, 0, 0, 0.2, 0.26, 0.08, 0.03);
  const lensMat = new THREE.MeshStandardMaterial({ color: 0x6a1410, emissive: 0xff2a1a, emissiveIntensity: 0, roughness: 0.25 });
  const lens = cylinder(g, lensMat, 0, 0.04, 0.05, 0.06, 0.03, 'z', 24);
  lens.castShadow = false;
  [-0.03, 0, 0.03].forEach(x => box(g, M.modDark, x, -0.07, 0.042, 0.012, 0.05, 0.006, 0.002));
  const light = new THREE.PointLight(0xff2a1a, 0, 4.5, 2);
  light.position.set(0, 0.04, 0.35);
  g.add(light);
  let on = null;
  return {
    group: g, picks: [], skip: [lens],
    set(s) {
      const v = !!(s && s.flood && s.flood.siren);
      if (v === on) return false;
      on = v;
      if (!v) { lensMat.emissiveIntensity = 0; light.intensity = 0; }
      return true;
    },
    sounding() { return !!on; },
    flash(t) { const k = Math.floor(t / 260) % 2 === 0 ? 1 : 0; lensMat.emissiveIntensity = 3.2 * k; light.intensity = 9 * k; },
  };
}

// Pulsante di tacitazione su placca (nero, con la scritta): userData { id: 'TA', kind: 'press' }. Guarda verso +z.
export function silenceButton(M) {
  const g = new THREE.Group();
  box(g, M.modWhite, 0, 0, 0, 0.12, 0.16, 0.02, 0.012);
  const ring = cylinder(g, M.modGrey, 0, 0.015, 0.012, 0.034, 0.012, 'z', 24);
  const cap = cylinder(g, M.modDark, 0, 0.015, 0.022, 0.026, 0.018, 'z', 24);
  const hit = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
  g.add(hit);
  [ring, cap, hit].forEach(m => { m.userData = { id: 'TA', kind: 'press' }; });
  textPlane(g, 'Tacita', 0, -0.052, 0.012, 0.1, 0.03, { fg: '#2a2d31', size: 0.75 });
  return { group: g, picks: [cap, ring, hit], set() { return false; }, press(on) { cap.position.z = on ? 0.016 : 0.022; } };
}

/* ---------- quadro con il generale, contatore al cancello ---------- */

// Quadro della casa: il generale QG (leva toccabile, piu' grande del vero) e il relè dell'allarme KA con la spia rossa.
// Guarda verso +z. set(s): la leva su quando il generale e' chiuso (s.qg, o per chi non lo manda: alimentata o contatore
// staccato), la spia verde quando la casa ha corrente.
export function homePanel(M, scale = 2.4) {
  const g = new THREE.Group();
  box(g, M.cabinet, 0, 0, -0.012, 0.2, 0.2, 0.045, 0.008);
  box(g, M.cabinetIn, 0, 0, 0.011, 0.17, 0.17, 0.005, 0.004);
  box(g, M.din, 0, 0.02, 0.016, 0.15, 0.018, 0.006, 0.002);
  const qg = module(g, M, { id: 'QG', kind: 'mcb', w: 0.054, x: -0.03, y: 0.02 });
  qg.group.position.z = 0.04;
  box(g, M.modWhite, 0.04, 0.02, 0.04, 0.036, 0.09, 0.05, 0.004);             // relè KA: fermo, si accorpa
  box(g, M.modGrey, 0.04, 0.02, 0.067, 0.03, 0.08, 0.006, 0.003);
  const kaLed = led(0xff3a2a, 0.007);
  kaLed.mesh.position.set(0.04, 0.045, 0.072);
  g.add(kaLed.mesh);
  textPlane(g, 'Generale', -0.03, -0.055, 0.066, 0.07, 0.018, { size: 0.5 });
  textPlane(g, 'Allarme', 0.04, -0.055, 0.066, 0.06, 0.018, { size: 0.5 });
  g.scale.setScalar(scale);
  let key = '';
  return {
    group: g, picks: qg.picks,
    set(s) {
      const closed = s && typeof s.qg === 'boolean' ? s.qg : !!(s && (s.powered || s.blackout));
      const k = closed + '|' + !!(s && s.powered) + '|' + !!(s && s.flood && s.flood.siren);
      if (k === key) return false;
      key = k;
      qg.set({ on: closed, tripped: false, live: !!(s && s.powered) });
      kaLed.set(!!(s && s.flood && s.flood.siren), 3);
      return true;
    },
  };
}

// Contatore dell'energia nella colonnina al cancello: display con i kW prelevati (o immessi, con il meno) e la spia rossa
// quando ha staccato. Guarda verso +z. Il numero si riscrive solo quando cambia il decimo di kW.
export function meterBox(M) {
  const g = new THREE.Group();
  box(g, M.cabinet, 0, 0.75, 0, 0.5, 1.5, 0.3, 0.03);                          // colonnina di cemento chiaro
  box(g, M.modGrey, 0, 1.15, 0.155, 0.34, 0.42, 0.012, 0.01);                  // sportello
  const { c, g: cx } = canvas(128, 48);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.08), new THREE.MeshBasicMaterial({ map: tex, color: 0xdddddd }));
  screen.position.set(0, 1.22, 0.163);
  g.add(screen);
  const trip = led(0xff3a2a, 0.016);
  trip.mesh.position.set(0.11, 1.08, 0.165);
  g.add(trip.mesh);
  let key = '';
  return {
    group: g, picks: [],
    set(s) {
      const kw = s && s.kw ? s.kw.grid || 0 : 0;
      const off = !!(s && s.blackout);
      const k = off ? 'off' : kw.toFixed(1);
      if (k === key) return false;
      key = k;
      cx.fillStyle = '#0e1712'; cx.fillRect(0, 0, 128, 48);
      cx.fillStyle = off ? '#ff6a5a' : '#8dff9e';
      cx.font = '600 30px ui-monospace, monospace'; cx.textAlign = 'center'; cx.textBaseline = 'middle';
      cx.fillText(off ? 'STACCO' : kw.toFixed(1) + ' kW', 64, 25);
      tex.needsUpdate = true;
      trip.set(off, 3.2);
      return true;
    },
  };
}

// Anta della finestra del soggiorno, dal lato interno: incernierata a sinistra, si apre verso la stanza. Toccabile
// (userData { id: 'W1', kind: 'toggle' }). Guarda verso +z (la stanza); larga w, alta h, base a y0.
// `open(k)`: 0 chiusa, 1 aperta (la scena la anima).
export function windowSash(M, w, h, y0) {
  const g = new THREE.Group();
  const hinge = new THREE.Group();
  hinge.position.set(-w / 2, 0, 0);
  g.add(hinge);
  const frameMat = new THREE.MeshStandardMaterial({ color: 0xf6f5f2, roughness: 0.4 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x9fc0d8, roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.35, depthWrite: false });
  const bars = [[w / 2, y0 + 0.03, w, 0.06], [w / 2, y0 + h - 0.03, w, 0.06], [0.03, y0 + h / 2, 0.06, h], [w - 0.03, y0 + h / 2, 0.06, h]];
  const frame = new THREE.Mesh(mergeGeometries(bars.map(([x, y, bw, bh]) => new THREE.BoxGeometry(bw, bh, 0.05).translate(x, y, 0)), false), frameMat);
  frame.castShadow = false;
  hinge.add(frame);
  const parts = [frame];
  const pane = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.12, h - 0.12), glass);
  pane.position.set(w / 2, y0 + h / 2, 0);
  hinge.add(pane);
  const hit = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, h + 0.2, 0.5), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.set(0, y0 + h / 2, 0.2);
  g.add(hit);
  parts.concat([pane, hit]).forEach(m => { m.userData = { id: 'W1', kind: 'toggle' }; });
  let open = null;
  return {
    group: g, picks: parts.concat([hit]), skip: [hinge],
    set(z) {
      const v = !!(z && z.window);
      if (v === open) return false;
      open = v;
      return true;
    },
    isOpen() { return !!open; },
    open(k) { hinge.rotation.y = -1.25 * k; },
  };
}
