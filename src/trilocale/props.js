// Materiali e arredi della scena fotorealistica del trilocale.
// Tutto e' costruito nel codice con materiali fisici (PBR); i pochi modelli 3D e le texture fotografiche
// arrivano da assets/trilocale (vedi assets/trilocale/CREDITI.md) e si aggiungono quando sono caricati.
// Se un file non si carica (per esempio aprendo il gioco da file), resta la versione costruita nel codice.

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const WALL_H = 1.45;        // muri interni tagliati come in una sezione di pianta
export const FACADE_H = 2.75;      // altezza vera della casa, con il tetto
export const ASSETS = 'assets/trilocale/';

/* ---------- texture disegnate nel codice ---------- */

function canvas(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  return c;
}
function tex(c, repeat = 1, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = 4;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
// numeri pseudocasuali ripetibili: la casa e' uguale a ogni apertura
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

function noise(ctx, n, a, rnd, alpha = 0.06) {
  for (let i = 0; i < n * 40; i++) {
    const v = Math.floor(rnd() * 255);
    ctx.fillStyle = `rgba(${v},${v},${v},${alpha})`;
    ctx.fillRect(rnd() * n, rnd() * n, 1 + rnd() * a, 1 + rnd() * a);
  }
}

const plasterC = () => canvas(256, (g, n) => { g.fillStyle = '#808080'; g.fillRect(0, 0, n, n); noise(g, n, 3, rng(7), 0.12); });

// piastrelle: colore e rilievo (fughe piu' basse)
function tilesC(n, cols, base, grout, seed, bump) {
  return canvas(n, (g) => {
    const r = rng(seed), s = n / cols;
    g.fillStyle = bump ? '#202020' : grout; g.fillRect(0, 0, n, n);
    for (let i = 0; i < cols; i++) for (let j = 0; j < cols; j++) {
      if (bump) { g.fillStyle = '#d0d0d0'; }
      else { const k = (r() - 0.5) * 10; const c = new THREE.Color(base).offsetHSL(0, 0, k / 255); g.fillStyle = '#' + c.getHexString(); }
      g.fillRect(i * s + 2, j * s + 2, s - 4, s - 4);
    }
    if (!bump) noise(g, n, 2, r, 0.04);
  });
}

// coppi del tetto, file sfalsate
function roofC(bump) {
  return canvas(512, (g, n) => {
    const r = rng(11), rows = 16, cols = 12, h = n / rows, w = n / cols;
    g.fillStyle = bump ? '#000' : '#5a2a1a'; g.fillRect(0, 0, n, n);
    for (let j = 0; j < rows; j++) for (let i = -1; i <= cols; i++) {
      const x = i * w + (j % 2) * w / 2;
      const grd = g.createLinearGradient(x, 0, x + w, 0);
      if (bump) { grd.addColorStop(0, '#202020'); grd.addColorStop(0.5, '#f0f0f0'); grd.addColorStop(1, '#202020'); }
      else {
        const c = new THREE.Color().setHSL(0.04 + (r() - 0.5) * 0.02, 0.55, 0.36 + (r() - 0.5) * 0.08);
        grd.addColorStop(0, '#' + c.clone().offsetHSL(0, 0, -0.12).getHexString());
        grd.addColorStop(0.5, '#' + c.getHexString());
        grd.addColorStop(1, '#' + c.clone().offsetHSL(0, 0, -0.14).getHexString());
      }
      g.fillStyle = grd;
      g.fillRect(x + 1, j * h, w - 2, h * 0.92);
    }
    if (!bump) noise(g, n, 3, r, 0.08);
  });
}

// tappeto: bordo e motivo semplice
function rugC(c1, c2, seed) {
  return canvas(256, (g, n) => {
    const r = rng(seed);
    g.fillStyle = c1; g.fillRect(0, 0, n, n);
    g.strokeStyle = c2; g.lineWidth = 10; g.strokeRect(14, 14, n - 28, n - 28);
    g.lineWidth = 3; g.strokeRect(32, 32, n - 64, n - 64);
    for (let i = 0; i < 6; i++) { g.beginPath(); g.arc(n / 2, n / 2, 20 + i * 14, 0, Math.PI * 2); g.stroke(); }
    noise(g, n, 2, r, 0.1);
  });
}

// tessuto: trama fine
const fabricC = (color, seed) => canvas(128, (g, n) => {
  g.fillStyle = color; g.fillRect(0, 0, n, n);
  for (let i = 0; i < n; i += 2) { g.fillStyle = `rgba(0,0,0,${0.04 + (i % 4) * 0.01})`; g.fillRect(i, 0, 1, n); g.fillRect(0, i, n, 1); }
  noise(g, n, 1, rng(seed), 0.05);
});

/* ---------- materiali ---------- */

export function makeMaterials(onTexture) {
  const M = {};
  const plaster = tex(plasterC(), 3, false);
  M.wall = new THREE.MeshStandardMaterial({ color: 0xeee8de, roughness: 0.92, bumpMap: plaster, bumpScale: 0.6 });
  M.wallCut = new THREE.MeshStandardMaterial({ color: 0x40464e, roughness: 0.8 });
  M.outside = new THREE.MeshStandardMaterial({ color: 0xe2d2b8, roughness: 0.95, bumpMap: plaster, bumpScale: 1 });

  // parquet: prima un legno uniforme, poi la foto quando arriva
  M.parquet = new THREE.MeshStandardMaterial({ color: 0xb48a5f, roughness: 0.55 });
  const tl = new THREE.TextureLoader();
  const load = (file, srgb, done) => tl.load(ASSETS + file, t => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    done(t); onTexture();
  }, undefined, () => {});
  load('parquet.webp', true, t => { t.repeat.set(1, 1); M.parquet.map = t; M.parquet.color.set(0xffffff); M.parquet.needsUpdate = true; });
  load('parquet-ruvido.webp', false, t => { M.parquet.roughnessMap = t; M.parquet.roughness = 1; M.parquet.needsUpdate = true; });
  load('parquet-rilievo.webp', false, t => { M.parquet.bumpMap = t; M.parquet.bumpScale = 0.4; M.parquet.needsUpdate = true; });

  M.tiles = new THREE.MeshStandardMaterial({ map: tex(tilesC(512, 6, '#d9d6cf', '#9c978d', 3), 1), bumpMap: tex(tilesC(512, 6, 0, 0, 3, true), 1, false), bumpScale: 0.8, roughness: 0.35 });
  M.kitchenFloor = new THREE.MeshStandardMaterial({ map: tex(tilesC(512, 4, '#8f8a82', '#5d5953', 5), 1), bumpMap: tex(tilesC(512, 4, 0, 0, 5, true), 1, false), bumpScale: 0.8, roughness: 0.6 });
  M.grass = new THREE.MeshStandardMaterial({ color: 0x5f7a45, roughness: 1 });
  load('prato.webp', true, t => { t.repeat.set(10, 10); M.grass.map = t; M.grass.color.set(0xb8c4a8); M.grass.needsUpdate = true; });
  M.paving = new THREE.MeshStandardMaterial({ map: tex(tilesC(256, 4, '#b7b1a6', '#8a857c', 9), 1), roughness: 0.9 });

  M.roof = new THREE.MeshStandardMaterial({ map: tex(roofC(false), 1), bumpMap: tex(roofC(true), 1, false), bumpScale: 2, roughness: 0.75, transparent: true, opacity: 1 });
  M.fascia = new THREE.MeshStandardMaterial({ color: 0x6b4a33, roughness: 0.7, transparent: true, opacity: 1 });

  M.wood = new THREE.MeshStandardMaterial({ color: 0x8a5f3c, roughness: 0.5 });
  M.woodLight = new THREE.MeshStandardMaterial({ color: 0xd6bf9a, roughness: 0.55 });
  M.door = new THREE.MeshStandardMaterial({ color: 0xf2efe8, roughness: 0.45 });
  M.white = new THREE.MeshStandardMaterial({ color: 0xf4f2ee, roughness: 0.3 });
  M.ceramic = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05 });
  M.steel = new THREE.MeshStandardMaterial({ color: 0xc8ccd0, roughness: 0.28, metalness: 1 });
  M.black = new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.15, metalness: 0.2 });
  M.stone = new THREE.MeshStandardMaterial({ color: 0x3a3836, roughness: 0.25 });
  M.cabinet = new THREE.MeshStandardMaterial({ color: 0x5f6f6a, roughness: 0.45 });
  M.water = new THREE.MeshStandardMaterial({ color: 0xbfd9e0, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.6 });
  M.mirror = new THREE.MeshStandardMaterial({ color: 0xdfe6ea, roughness: 0.02, metalness: 1 });
  M.glass = new THREE.MeshStandardMaterial({ color: 0x9fb4c4, roughness: 0.05, metalness: 0.6, emissive: 0x000000 });
  M.frame = new THREE.MeshStandardMaterial({ color: 0xf6f5f2, roughness: 0.4 });
  M.duvet = new THREE.MeshStandardMaterial({ map: tex(fabricC('#e9e4da', 2), 4), roughness: 0.95 });
  M.blanket = new THREE.MeshStandardMaterial({ map: tex(fabricC('#7b8f86', 3), 4), roughness: 0.95 });
  M.pillow = new THREE.MeshStandardMaterial({ map: tex(fabricC('#f5f2ec', 4), 2), roughness: 0.95 });
  M.rugLiving = new THREE.MeshStandardMaterial({ map: tex(rugC('#a65c46', '#e8d5b5', 21)), roughness: 1 });
  M.rugBed = new THREE.MeshStandardMaterial({ map: tex(rugC('#d9d2c3', '#8a8f86', 22)), roughness: 1 });
  M.runner = new THREE.MeshStandardMaterial({ map: tex(rugC('#3e4a5c', '#c9b48a', 23)), roughness: 1 });
  M.towel = new THREE.MeshStandardMaterial({ map: tex(fabricC('#7fa6b5', 5), 3), roughness: 1 });
  M.screen = new THREE.MeshStandardMaterial({ color: 0x0b0d10, roughness: 0.05, metalness: 0.5 });
  M.cord = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6 });
  M.plate = new THREE.MeshStandardMaterial({ color: 0xfbfaf6, roughness: 0.3 });
  M.rocker = new THREE.MeshStandardMaterial({ color: 0xe9e7e1, roughness: 0.25 });
  M.panel = new THREE.MeshStandardMaterial({ color: 0xf1f0ec, roughness: 0.35 });
  M.panelDoor = new THREE.MeshStandardMaterial({ color: 0x3a4652, roughness: 0.1, transparent: true, opacity: 0.55 });
  M.book = [0x9c3b2e, 0x2f5a7a, 0xd4b45c, 0x4f6b46, 0x6e4a72].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 }));
  return M;
}

/* ---------- forme ---------- */

const shadowy = m => { m.castShadow = true; m.receiveShadow = true; return m; };
// scatola con spigoli arrotondati; (x, z) = angolo, y = base
export function rbox(parent, mat, x, y, z, w, h, d, r = 0.02) {
  const m = shadowy(new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2, h / 2, d / 2)), mat));
  m.position.set(x + w / 2, y + h / 2, z + d / 2);
  parent.add(m);
  return m;
}
export function plane(parent, mat, x, z, w, d, y = 0.002, rep) {
  const g = new THREE.PlaneGeometry(w, d);
  if (rep) { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / rep, uv.getY(i) * d / rep); }
  const m = new THREE.Mesh(g, mat);
  m.rotation.x = -Math.PI / 2;
  m.position.set(x + w / 2, y, z + d / 2);
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
function cyl(parent, mat, x, y, z, r, h, seg = 24, r2) {
  const m = shadowy(new THREE.Mesh(new THREE.CylinderGeometry(r2 === undefined ? r : r2, r, h, seg), mat));
  m.position.set(x, y + h / 2, z);
  parent.add(m);
  return m;
}

/* ---------- arredi ---------- */

function chair(p, M, x, z, rot) {
  const g = new THREE.Group();
  rbox(g, M.wood, -0.21, 0.44, -0.21, 0.42, 0.04, 0.42, 0.01);
  [[-0.19, -0.19], [0.16, -0.19], [-0.19, 0.16], [0.16, 0.16]].forEach(([a, b]) => rbox(g, M.wood, a, 0, b, 0.03, 0.44, 0.03, 0.005));
  rbox(g, M.wood, -0.21, 0.48, 0.17, 0.42, 0.42, 0.03, 0.01);
  g.position.set(x, 0, z); g.rotation.y = rot;
  p.add(g);
}

export function furnish(p, M) {
  // ---- cucina (0..3, 0..3.5) ----
  rbox(p, M.cabinet, 0.7, 0, 0.05, 2.25, 0.86, 0.6, 0.01);
  rbox(p, M.stone, 0.68, 0.86, 0.04, 2.29, 0.04, 0.63, 0.008);
  rbox(p, M.steel, 1.15, 0.89, 0.15, 0.5, 0.02, 0.38, 0.01);                       // lavello
  rbox(p, M.black, 2.05, 0.9, 0.12, 0.6, 0.01, 0.48, 0.005);                       // piano cottura
  [[2.2, 0.24], [2.5, 0.24], [2.2, 0.48], [2.5, 0.48]].forEach(([a, b]) => cyl(p, M.steel, a, 0.905, b, 0.07, 0.006, 24));
  rbox(p, M.steel, 0.05, 0, 0.05, 0.62, 1.4, 0.64, 0.02);                          // frigorifero
  rbox(p, M.woodLight, 0.9, 0.72, 1.75, 1.3, 0.04, 0.8, 0.01);                     // tavolo
  [[0.95, 1.8], [2.13, 1.8], [0.95, 2.48], [2.13, 2.48]].forEach(([a, b]) => rbox(p, M.woodLight, a, 0, b, 0.05, 0.72, 0.05, 0.01));
  chair(p, M, 1.25, 1.45, 0); chair(p, M, 1.85, 1.45, 0); chair(p, M, 1.25, 2.9, Math.PI); chair(p, M, 1.85, 2.9, Math.PI);
  cyl(p, M.white, 1.55, 0.76, 2.15, 0.12, 0.05, 24, 0.14);                          // fruttiera

  // ---- bagno (3..5, 0..3.5) ----
  const tub = rbox(p, M.ceramic, 3.08, 0, 0.06, 1.75, 0.55, 0.78, 0.08);
  tub.userData.keep = true;
  rbox(p, M.water, 3.18, 0.4, 0.15, 1.55, 0.02, 0.6, 0.06);
  rbox(p, M.cabinet, 3.06, 0, 1.55, 0.5, 0.82, 0.8, 0.01);                          // mobile lavabo
  rbox(p, M.ceramic, 3.05, 0.82, 1.6, 0.48, 0.1, 0.7, 0.04);
  rbox(p, M.mirror, 3.03, 1.0, 1.65, 0.02, 0.42, 0.6, 0.005);
  const wc = new THREE.Group();                                                     // sanitario sul muro est
  rbox(wc, M.ceramic, -0.18, 0, -0.17, 0.36, 0.4, 0.34, 0.12);
  rbox(wc, M.ceramic, -0.2, 0.38, -0.2, 0.4, 0.04, 0.5, 0.15);
  rbox(wc, M.ceramic, 0.16, 0.38, -0.2, 0.14, 0.42, 0.4, 0.04);
  wc.position.set(4.68, 0, 2.4); wc.rotation.y = -Math.PI / 2;
  p.add(wc);
  rbox(p, M.towel, 4.93, 1.0, 1.3, 0.04, 0.5, 0.4, 0.02);
  plane(p, M.towel, 3.5, 2.6, 0.7, 0.5, 0.012);                                     // tappetino

  // ---- camera (5..9, 0..3.5): letto con la testiera sul muro est ----
  plane(p, M.rugBed, 6.4, 0.6, 2.4, 2.3, 0.006);
  rbox(p, M.wood, 6.95, 0, 0.95, 1.95, 0.32, 1.65, 0.03);                          // telaio
  rbox(p, M.wood, 8.85, 0, 0.92, 0.08, 1.05, 1.71, 0.03);                          // testiera
  rbox(p, M.duvet, 6.98, 0.32, 0.98, 1.85, 0.2, 1.59, 0.08);                       // materasso e piumone
  rbox(p, M.blanket, 6.95, 0.42, 0.97, 0.6, 0.12, 1.61, 0.06);                     // coperta ai piedi
  rbox(p, M.pillow, 8.35, 0.5, 1.08, 0.42, 0.14, 0.66, 0.07);
  rbox(p, M.pillow, 8.35, 0.5, 1.82, 0.42, 0.14, 0.66, 0.07);
  rbox(p, M.wood, 8.45, 0, 0.35, 0.48, 0.5, 0.45, 0.02);                            // comodini
  rbox(p, M.wood, 8.45, 0, 2.72, 0.48, 0.5, 0.45, 0.02);
  rbox(p, M.woodLight, 5.06, 0, 0.12, 0.62, 1.4, 1.9, 0.02);                       // armadio
  rbox(p, M.cabinet, 5.1, 0, 2.6, 0.45, 0.75, 0.7, 0.02);                          // cassettiera

  // ---- corridoio (0..9, 3.5..5) ----
  plane(p, M.runner, 2.2, 3.95, 4.6, 0.75, 0.006);
  rbox(p, M.wood, 7.6, 0, 3.58, 1.0, 0.8, 0.32, 0.02);                             // consolle
  M.book.forEach((m, i) => rbox(p, m, 7.7 + i * 0.07, 0.8, 3.62, 0.06, 0.22 + (i % 3) * 0.03, 0.2, 0.004));

  // ---- ingresso (0..2.5, 5..8) ----
  rbox(p, M.woodLight, 1.8, 0, 7.35, 0.6, 0.9, 0.55, 0.02);                         // scarpiera
  cyl(p, M.wood, 2.2, 0, 5.4, 0.18, 0.02, 24); cyl(p, M.wood, 2.2, 0, 5.4, 0.02, 1.4, 12);   // attaccapanni
  plane(p, M.rugLiving, 0.5, 7.0, 0.9, 0.6, 0.006);

  // ---- soggiorno (2.5..9, 5..8) ----
  plane(p, M.rugLiving, 4.4, 5.8, 2.8, 1.9, 0.006);
  rbox(p, M.wood, 5.2, 0, 6.35, 1.2, 0.38, 0.65, 0.02);                            // tavolino
  rbox(p, M.black, 6.45, 0, 5.1, 1.9, 0.45, 0.42, 0.01);                           // mobile tv
  rbox(p, M.screen, 6.85, 0.45, 5.18, 1.1, 0.66, 0.05, 0.005);                     // televisore
  rbox(p, M.woodLight, 8.5, 0, 5.05, 0.45, 1.4, 1.3, 0.02);                        // libreria
  for (let s = 0; s < 3; s++) M.book.forEach((m, i) => rbox(p, m, 8.55, 0.15 + s * 0.45, 5.15 + i * 0.2, 0.3, 0.26 + (i % 2) * 0.04, 0.16, 0.004));
  // tavolo da pranzo vicino all'ingresso
  rbox(p, M.wood, 2.85, 0.74, 5.45, 1.4, 0.04, 0.85, 0.01);
  [[2.9, 5.5], [4.18, 5.5], [2.9, 6.23], [4.18, 6.23]].forEach(([a, b]) => rbox(p, M.wood, a, 0, b, 0.05, 0.74, 0.05, 0.01));
  chair(p, M, 3.2, 5.2, 0); chair(p, M, 3.9, 5.2, 0); chair(p, M, 3.2, 6.6, Math.PI); chair(p, M, 3.9, 6.6, Math.PI);
}

// Divano, poltrona e pianta fotografici. Ognuno ha un segnaposto costruito nel codice, sostituito quando il modello arriva.
export const MODELS = [
  { file: 'divano.glb', x: 5.8, z: 7.3, rot: Math.PI, scale: 1, stand: [4.75, 6.85, 2.15, 0.85] },
  { file: 'poltrona.glb', x: 7.6, z: 6.7, rot: -Math.PI / 2 - 0.4, scale: 1, stand: [7.25, 6.35, 0.75, 0.75] },
  { file: 'pianta.glb', x: 8.55, z: 7.55, rot: 0.6, scale: 1.1, stand: null },
];
export function placeholder(p, M, s) {
  const [x, z, w, d] = s;
  const g = new THREE.Group();
  rbox(g, M.blanket, x, 0, z, w, 0.45, d, 0.08);
  rbox(g, M.blanket, x, 0.45, z + d - 0.2, w, 0.4, 0.2, 0.08);
  p.add(g);
  return g;
}

/* ---------- porte e finestre ---------- */

export function doors(p, M) {
  // [asse, posizione del muro, inizio, fine, verso di apertura]
  const list = [['h', 3.5, 1, 2, -1], ['h', 3.5, 3.9, 4.8, -1], ['h', 3.5, 6, 7, -1], ['h', 5, 1.6, 2.4, 1], ['h', 5, 5, 6, 1], ['v', 2.5, 6, 7, -1]];
  list.forEach(([ax, at, a, b, dir]) => {
    const w = b - a - 0.04;
    const g = new THREE.Group();
    rbox(g, M.door, 0, 0, -0.02, w, WALL_H, 0.04, 0.01);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.025, 12, 8), M.steel);
    knob.position.set(w - 0.07, 1.0, 0.04); g.add(knob);
    if (ax === 'h') { g.position.set(a + 0.02, 0, at); g.rotation.y = dir * 1.45; }
    else { g.position.set(at, 0, a + 0.02); g.rotation.y = -Math.PI / 2 + dir * 1.45; }
    p.add(g);
  });
  // porta d'ingresso sul muro sud
}

// Finestre sui muri esterni: [lato, da, a, stanza]. Il vetro si illumina quando la stanza e' accesa (si vede dal tetto).
export const WINDOWS = [['n', 1.0, 2.1, 'cucina'], ['n', 3.6, 4.4, 'bagno'], ['n', 6.2, 7.6, 'camera'], ['s', 4.4, 6.6, 'soggiorno'], ['s', 7.0, 8.4, 'soggiorno'], ['e', 6.0, 7.2, 'soggiorno'], ['w', 1.2, 2.4, 'cucina'], ['w', 3.9, 4.6, 'corridoio']];
// p: gruppo della casa (lato interno, tagliato all'altezza dei muri); facade: gruppo della facciata (lato esterno, alto).
export function windows(p, facade, M, house) {
  const out = [];
  const T = 0.12;
  function panel(len, y0, h, glass) {
    const f = new THREE.Group();
    rbox(f, M.frame, -len / 2, y0, -0.02, len, h, 0.04, 0.005);
    const gl = new THREE.Mesh(new THREE.PlaneGeometry(len - 0.12, h - 0.12), glass);
    gl.position.set(0, y0 + h / 2, 0.022);
    f.add(gl);
    rbox(f, M.frame, -0.02, y0 + 0.06, 0.0, 0.04, h - 0.12, 0.03, 0.004);
    return f;
  }
  const SIDE = { n: [0, -1], s: [0, 1], w: [-1, 0], e: [1, 0] };
  WINDOWS.forEach(([side, a, b, room]) => {
    const glass = M.glass.clone();
    const [nx, nz] = SIDE[side], len = b - a, mid = (a + b) / 2;
    const base = side === 'n' || side === 's' ? [mid, side === 'n' ? 0 : house.d] : [side === 'w' ? 0 : house.w, mid];
    const out1 = panel(len, 0.9, 1.35, glass);
    out1.position.set(base[0] + nx * (T / 2 + 0.02), 0, base[1] + nz * (T / 2 + 0.02));
    out1.rotation.y = Math.atan2(nx, nz);
    facade.add(out1);
    const in1 = panel(len, 0.9, WALL_H - 0.9, glass);
    in1.position.set(base[0] - nx * (T / 2 + 0.004), 0, base[1] - nz * (T / 2 + 0.004));
    in1.rotation.y = Math.atan2(-nx, -nz);
    p.add(in1);
    out.push({ room, glass });
  });
  return out;
}

/* ---------- tetto a padiglione ---------- */

export function roof(M, house) {
  const o = 0.45, H = 2.3;
  const x0 = -o, x1 = house.w + o, z0 = -o, z1 = house.d + o;
  const half = (z1 - z0) / 2, zm = (z0 + z1) / 2;
  const r0 = [x0 + half, H, zm], r1 = [x1 - half, H, zm];
  const A = [x0, 0, z0], B = [x1, 0, z0], C = [x1, 0, z1], D = [x0, 0, z1];
  const pos = [], uv = [];
  const slope = Math.hypot(half, H);
  // ogni falda: coordinate di texture dalla pianta, con la pendenza lungo la falda
  function tri(p1, p2, p3, axis) {
    [p1, p2, p3].forEach(q => {
      pos.push(...q);
      if (axis === 'z') uv.push(q[0] / 2.4, (Math.abs(q[2] - zm) / half) * slope / 2.4);
      else uv.push(q[2] / 2.4, (Math.min(q[0] - x0, x1 - q[0]) / half) * slope / 2.4);
    });
  }
  tri(A, r0, B, 'z'); tri(B, r0, r1, 'z');                // nord
  tri(C, r1, D, 'z'); tri(D, r1, r0, 'z');                // sud
  tri(B, r1, C, 'x');                                     // est
  tri(D, r0, A, 'x');                                     // ovest
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  const g = new THREE.Group();
  const mesh = new THREE.Mesh(geo, M.roof);
  mesh.castShadow = true;
  mesh.material.side = THREE.DoubleSide;
  g.add(mesh);
  // gronda e comignolo
  const fz = rbox(g, M.fascia, x0, -0.18, z0, x1 - x0, 0.18, 0.08, 0.01); fz.userData.roof = true;
  rbox(g, M.fascia, x0, -0.18, z1 - 0.08, x1 - x0, 0.18, 0.08, 0.01);
  rbox(g, M.fascia, x0, -0.18, z0, 0.08, 0.18, z1 - z0, 0.01);
  rbox(g, M.fascia, x1 - 0.08, -0.18, z0, 0.08, 0.18, z1 - z0, 0.01);
  rbox(g, M.fascia, 1.9, 0.6, 1.4, 0.5, 1.4, 0.5, 0.02);
  g.traverse(m => { m.userData.roof = true; });
  return g;
}
