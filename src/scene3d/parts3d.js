// Pezzi 3D del kit comune delle prove: quadro (centralino), nastro, motore, torretta luminosa, pulsantiera, relè e contattore.
// Sono costruiti nel codice con materiali fisici, come gli arredi del trilocale. Ogni pezzo espone `set(...)`: la scena gli passa
// lo stato osservato (src/prove/state.js) e il pezzo si muove di conseguenza. Nessun pezzo conosce le regole.

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/* ---------- texture disegnate nel codice ---------- */

function canvas(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d', { willReadFrequently: true }), w, h);      // canvas in memoria: caricarlo come texture non rilegge dalla scheda video
  return c;
}
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
function tex(c, rx = 1, ry = 1, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rx, ry);
  t.anisotropy = 4;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function grain(g, w, h, n, a, rnd, alpha) {
  for (let i = 0; i < n; i++) {
    const v = Math.floor(rnd() * 255);
    g.fillStyle = `rgba(${v},${v},${v},${alpha})`;
    g.fillRect(rnd() * w, rnd() * h, 1 + rnd() * a, 1 + rnd() * a);
  }
}

const concreteC = () => canvas(512, 512, (g, w, h) => {
  const r = rng(31);
  g.fillStyle = '#8a8a86'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(${90 + r() * 60},${90 + r() * 60},${86 + r() * 60},0.10)`; g.beginPath(); g.ellipse(r() * w, r() * h, 30 + r() * 90, 20 + r() * 60, r() * 3, 0, 7); g.fill(); }
  grain(g, w, h, 9000, 3, r, 0.18);
  g.strokeStyle = 'rgba(40,40,40,0.55)'; g.lineWidth = 3;           // giunti di dilatazione
  g.beginPath(); g.moveTo(0, 2); g.lineTo(w, 2); g.moveTo(2, 0); g.lineTo(2, h); g.stroke();
});
const concreteBump = () => canvas(256, 256, (g, w, h) => { const r = rng(32); g.fillStyle = '#808080'; g.fillRect(0, 0, w, h); grain(g, w, h, 6000, 3, r, 0.35); });

// gomma del nastro: nervature trasversali, per scorrere con l'offset della texture
const beltC = () => canvas(256, 256, (g, w, h) => {
  const r = rng(41);
  g.fillStyle = '#1d1f22'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 8; i++) { g.fillStyle = '#2b2e32'; g.fillRect(i * 32 + 3, 0, 5, h); g.fillStyle = '#121315'; g.fillRect(i * 32 + 9, 0, 3, h); }
  grain(g, w, h, 2500, 2, r, 0.12);
});
const cardboardC = () => canvas(256, 256, (g, w, h) => {
  const r = rng(51);
  g.fillStyle = '#b98b57'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 3) { g.fillStyle = `rgba(80,50,20,${0.04 + (y % 6) * 0.01})`; g.fillRect(0, y, w, 1); }
  grain(g, w, h, 2500, 2, r, 0.12);
  g.fillStyle = 'rgba(214,190,150,0.9)'; g.fillRect(0, h / 2 - 12, w, 24);      // nastro adesivo
});
const hazardC = () => canvas(256, 64, (g, w, h) => {
  g.fillStyle = '#d9b01e'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#17181a';
  for (let x = -h; x < w + h; x += 48) { g.beginPath(); g.moveTo(x, h); g.lineTo(x + 24, h); g.lineTo(x + 24 + h, 0); g.lineTo(x + h, 0); g.fill(); }
});

/* ---------- materiali ---------- */

export function kitMaterials() {
  const M = {};
  M.concrete = new THREE.MeshStandardMaterial({ map: tex(concreteC(), 1, 1), bumpMap: tex(concreteBump(), 6, 6, false), bumpScale: 0.6, roughness: 0.88 });
  M.wall = new THREE.MeshStandardMaterial({ color: 0xcbc8bf, roughness: 0.95 });
  M.wallBase = new THREE.MeshStandardMaterial({ color: 0x4d5760, roughness: 0.85 });
  const belt = tex(beltC(), 6, 1);
  M.rubber = new THREE.MeshStandardMaterial({ map: belt, roughness: 0.92 });
  M.beltTex = belt;
  M.cardboard = new THREE.MeshStandardMaterial({ map: tex(cardboardC(), 1, 1), roughness: 0.85 });
  M.hazard = new THREE.MeshStandardMaterial({ map: tex(hazardC(), 1, 1), roughness: 0.6 });
  M.steel = new THREE.MeshStandardMaterial({ color: 0xc3c7cb, roughness: 0.3, metalness: 1 });
  M.steelDark = new THREE.MeshStandardMaterial({ color: 0x6d7378, roughness: 0.4, metalness: 0.9 });
  M.frame = new THREE.MeshStandardMaterial({ color: 0x3e5a76, roughness: 0.5, metalness: 0.3 });
  M.yellow = new THREE.MeshStandardMaterial({ color: 0xe3b61f, roughness: 0.45 });
  M.red = new THREE.MeshStandardMaterial({ color: 0xc4261d, roughness: 0.3 });
  M.green = new THREE.MeshStandardMaterial({ color: 0x1f8f45, roughness: 0.3 });
  M.motor = new THREE.MeshStandardMaterial({ color: 0x2c7280, roughness: 0.42, metalness: 0.35, emissive: 0xff5a1f, emissiveIntensity: 0 });
  M.cabinet = new THREE.MeshStandardMaterial({ color: 0xd3d6d8, roughness: 0.5, metalness: 0.2 });
  M.cabinetIn = new THREE.MeshStandardMaterial({ color: 0xe9e8e2, roughness: 0.7 });
  M.din = new THREE.MeshStandardMaterial({ color: 0xaeb3b8, roughness: 0.35, metalness: 1 });
  M.modWhite = new THREE.MeshStandardMaterial({ color: 0xe9e9e6, roughness: 0.35 });
  M.modGrey = new THREE.MeshStandardMaterial({ color: 0x8e949b, roughness: 0.4 });
  M.modDark = new THREE.MeshStandardMaterial({ color: 0x23262a, roughness: 0.35 });
  M.modBlue = new THREE.MeshStandardMaterial({ color: 0x2d5f9a, roughness: 0.4 });
  M.lever = new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.3 });
  M.glassDoor = new THREE.MeshStandardMaterial({ color: 0x3a4652, roughness: 0.08, transparent: true, opacity: 0.35 });
  M.stripe = new THREE.MeshStandardMaterial({ color: 0xff7a1a, roughness: 0.4 });
  M.windowGlow = new THREE.MeshStandardMaterial({ color: 0xbcd3ee, emissive: 0x9cc4f0, emissiveIntensity: 0.9, roughness: 0.2 });
  return M;
}

// diodo luminoso con la sua intensita' regolabile; ritorna { mesh, set(on) }
export function led(color, size = 0.012, shape = 'sphere') {
  const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(color).multiplyScalar(0.25), emissive: color, emissiveIntensity: 0, roughness: 0.3 });
  const geo = shape === 'box' ? new RoundedBoxGeometry(size * 2, size, size, 1, size * 0.3) : new THREE.SphereGeometry(size, 14, 10);
  const mesh = new THREE.Mesh(geo, mat);
  return { mesh, mat, set(on, level = 3) { mat.emissiveIntensity = on ? level : 0; } };
}

/* ---------- forme ---------- */

export function box(parent, mat, cx, cy, cz, w, h, d, r = 0.01) {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2, h / 2, d / 2)), mat);
  m.position.set(cx, cy, cz);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function cylinder(parent, mat, cx, cy, cz, r, h, axis = 'y', seg = 28, r2) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r2 === undefined ? r : r2, r, h, seg), mat);
  m.position.set(cx, cy, cz);
  if (axis === 'x') m.rotation.z = Math.PI / 2;
  if (axis === 'z') m.rotation.x = Math.PI / 2;
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function textPlane(parent, text, cx, cy, cz, w, h, opts = {}) {
  const cw = 256, ch = Math.max(24, Math.round(256 * h / w));
  const c = canvas(cw, ch, (g, ww, hh) => {
    g.clearRect(0, 0, ww, hh);
    g.fillStyle = opts.bg || 'rgba(255,255,255,0)';
    g.fillRect(0, 0, ww, hh);
    g.fillStyle = opts.fg || '#2a2d31';
    g.font = `600 ${Math.round(hh * (opts.size || 0.62))}px system-ui, sans-serif`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(text, ww / 2, hh / 2 + 1, ww - 8);
  });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true, color: opts.dim || 0xdddddd }));
  m.position.set(cx, cy, cz);
  parent.add(m);
  return m;
}

/* ---------- moduli da guida DIN ---------- */

// Interruttore modulare con la leva: su = chiuso, giu' = aperto, a meta' = scattato.
// kind: 'rcd' (differenziale, con tasto di prova), 'mcb' (magnetotermico), 'mp' (salvamotore, leva rotonda)
export function module(parent, M, o) {
  const g = new THREE.Group();
  const w = o.w || 0.036, h = o.h || 0.09, d = 0.05;
  const body = box(g, o.kind === 'mp' ? M.modDark : M.modWhite, 0, 0, 0, w, h, d, 0.004);
  const front = box(g, o.kind === 'mp' ? M.modGrey : M.modGrey, 0, 0, d / 2 + 0.002, w * 0.86, h * 0.9, 0.008, 0.003);
  const lv = new THREE.Group();
  lv.position.set(0, h * 0.04, d / 2 + 0.01);
  const lever = box(lv, M.lever, 0, 0, 0.012, w * 0.52, h * 0.30, 0.02, 0.004);
  lever.userData = { id: o.id, kind: 'toggle', ...(o.data || {}) };
  g.add(lv);
  const flag = led(0xff8a1a, 0.007, 'box');                   // bandierina "scattato"
  flag.mesh.position.set(0, h * 0.36, d / 2 + 0.012);
  g.add(flag.mesh);
  const lamp = led(0x39d46a, 0.006);
  lamp.mesh.position.set(w * 0.22, -h * 0.34, d / 2 + 0.012);
  g.add(lamp.mesh);
  let test = null;
  if (o.kind === 'rcd') {
    test = cylinder(g, M.modBlue, -w * 0.18, -h * 0.30, d / 2 + 0.012, 0.006, 0.01, 'z', 14);
    test.userData = { id: o.id + '.test', kind: 'test', part: o.id };
  }
  g.position.set(o.x, o.y, 0);
  parent.add(g);
  const picks = [lever, front, body].concat(test ? [test] : []);
  picks.forEach(m => { if (m !== lever && m !== test) m.userData = { id: o.id, kind: 'toggle', ...(o.data || {}) }; });
  return {
    group: g, picks,
    set(s) {
      // leva: su = chiuso (rotazione negativa verso l'alto), giu' = aperto, a meta' = scattato
      lv.rotation.x = s.tripped ? 0 : s.on ? -0.5 : 0.5;
      lv.position.y = (s.tripped ? 0 : s.on ? h * 0.1 : -h * 0.1);
      flag.set(!!s.tripped, 2.5);
      lamp.set(!!s.live, 3.2);
    },
  };
}

/* ---------- centralino della casa (prova M2) ---------- */

// Centralino aperto con il differenziale e tre magnetotermici. Ritorna { group, picks, set(state), width }.
export function centralino(M, scale = 1) {
  const g = new THREE.Group();
  const mods = [
    { id: 'D', kind: 'rcd', w: 0.072, label: 'Diff.' },
    { id: 'M1', kind: 'mcb', w: 0.036, label: 'Luce' },
    { id: 'M2', kind: 'mcb', w: 0.036, label: 'Prese' },
    { id: 'M3', kind: 'mcb', w: 0.036, label: 'Cucina' },
  ];
  const gap = 0.006, total = mods.reduce((a, m) => a + m.w, 0) + gap * (mods.length - 1) + 0.09;
  const H = 0.27;
  box(g, M.cabinet, 0, 0, -0.012, total + 0.04, H + 0.04, 0.045, 0.008);          // cassetta
  box(g, M.cabinetIn, 0, 0, 0.011, total, H, 0.005, 0.004);                       // fondo
  // guida DIN
  box(g, M.din, 0, 0.0, 0.016, total - 0.02, 0.018, 0.006, 0.002);
  const picks = [], byId = {};
  let x = -total / 2 + 0.045;
  mods.forEach(m => {
    const mod = module(g, M, { id: m.id, kind: m.kind, w: m.w, x: x + m.w / 2, y: 0.0 });
    mod.group.position.z = 0.04;
    byId[m.id] = mod;
    mod.picks.forEach(p => picks.push(p));
    textPlane(g, m.label, x + m.w / 2, -0.085, 0.066, m.w + 0.004, 0.022, { size: 0.4 });
    x += m.w + gap;
  });
  // sportello fume' incernierato a sinistra: chiuso lascia intravedere i moduli, aperto si ribalta di lato
  const hinge = new THREE.Group();
  hinge.position.set(-total / 2 - 0.02, 0, 0.115);
  const door = box(hinge, M.glassDoor, total / 2 + 0.02, 0, 0, total + 0.04, H + 0.04, 0.006, 0.004);
  door.renderOrder = 2; door.castShadow = false;
  g.add(hinge);
  g.scale.setScalar(scale);
  return {
    group: g, picks, width: total * scale,
    // k: 0 chiuso, 1 aperto
    door(k) { hinge.rotation.y = -1.95 * k; },
    set(st) {
      byId.D.set({ on: st.rcd.on, tripped: st.rcd.tripped, live: st.rcd.on });
      byId.M1.set({ on: st.lines.luce.on, tripped: st.lines.luce.tripped, live: st.lines.luce.on && st.rcd.on });
      byId.M2.set({ on: st.lines.prese.on, tripped: st.lines.prese.tripped, live: st.lines.prese.on && st.rcd.on });
      byId.M3.set({ on: st.lines.cucina.on, tripped: st.lines.cucina.tripped, live: st.lines.cucina.on && st.rcd.on });
    },
  };
}

/* ---------- nastro, motore, torretta, pulsantiera (prova M3) ---------- */

// Nastro trasportatore lungo l'asse x da x0 a x1, con la superficie a quota h. set({ speed }) lo fa scorrere.
export function conveyor(M, o) {
  const g = new THREE.Group();
  const L = o.x1 - o.x0, w = o.w || 0.7, h = o.h || 0.8;
  const cx = (o.x0 + o.x1) / 2;
  // strutture laterali e gambe
  [-1, 1].forEach(s => {
    box(g, M.frame, cx, h - 0.1, s * (w / 2 + 0.03), L + 0.1, 0.12, 0.05, 0.01);
    box(g, M.steelDark, cx, h - 0.02, s * (w / 2 + 0.03), L + 0.1, 0.03, 0.07, 0.005);
    const legs = Math.max(2, Math.round(L / 1.5) + 1);
    for (let i = 0; i < legs; i++) box(g, M.frame, o.x0 + (L * i) / (legs - 1), (h - 0.16) / 2, s * (w / 2 + 0.03), 0.06, h - 0.16, 0.05, 0.008);
  });
  for (let i = 0; i < 3; i++) box(g, M.frame, o.x0 + 0.1 + (L - 0.2) * i / 2, 0.3, 0, 0.04, 0.04, w + 0.06, 0.005);   // traverse
  // rulli di testa e di coda e piano d'appoggio
  cylinder(g, M.steel, o.x0, h - 0.07, 0, 0.07, w + 0.02, 'z');
  cylinder(g, M.steel, o.x1, h - 0.07, 0, 0.07, w + 0.02, 'z');
  const belt = new THREE.Mesh(new THREE.BoxGeometry(L, 0.025, w - 0.02), M.rubber);
  belt.position.set(cx, h - 0.0125 + 0.0, 0);
  belt.receiveShadow = true; belt.castShadow = true;
  g.add(belt);
  M.beltTex.repeat.set(L * 1.4, 1);
  let off = 0;
  return {
    group: g, belt,
    // v in m/s con il segno; si chiama a ogni passo di animazione
    run(v, dt) { off = (off + (v * dt * 1.4) / 1) % 1; M.beltTex.offset.x = -off; },
  };
}

// Pacco di cartone.
export function parcel(M, w = 0.48, h = 0.34, d = 0.38) {
  const g = new THREE.Group();
  box(g, M.cardboard, 0, h / 2, 0, w, h, d, 0.01);
  return g;
}

// Motore trifase con la ventola che gira. Asse lungo z. set({ spin (giri/s), heat 0..1 })
export function motorUnit(M) {
  const g = new THREE.Group();
  const body = cylinder(g, M.motor, 0, 0, 0, 0.16, 0.42, 'z', 36);
  for (let i = 0; i < 9; i++) box(g, M.motor, 0, 0, -0.17 + i * 0.043, 0.36, 0.014, 0.012, 0.003);   // alette
  cylinder(g, M.steelDark, 0, 0, 0.26, 0.05, 0.1, 'z');                                              // albero
  box(g, M.modDark, 0, 0.19, -0.02, 0.16, 0.07, 0.14, 0.01);                                           // scatola morsetti
  box(g, M.steelDark, 0.0, -0.17, 0.0, 0.32, 0.03, 0.36, 0.005);                                       // piede
  const fan = new THREE.Group();
  const cap = cylinder(fan, M.steelDark, 0, 0, 0, 0.14, 0.04, 'z', 32);
  for (let i = 0; i < 8; i++) { const b = box(fan, M.steel, 0, 0.09, 0.0, 0.025, 0.07, 0.018, 0.003); b.rotation.z = (i / 8) * Math.PI * 2; b.position.set(Math.sin(b.rotation.z) * -0.09, Math.cos(b.rotation.z) * 0.09, 0); }
  fan.position.z = -0.24;
  g.add(fan);
  return {
    group: g,
    set(s) { M.motor.emissiveIntensity = 1.4 * s.heat; },
    spin(rps, dt) { fan.rotation.z += rps * Math.PI * 2 * dt; },
    hum(t) { g.position.y += Math.sin(t / 25) * 0.0006; },
    body, cap,
  };
}

// Torretta luminosa a tre colori. set({ red, yellow, green })
export function stackLight(M, h = 1.5) {
  const g = new THREE.Group();
  cylinder(g, M.steelDark, 0, 0.02, 0, 0.09, 0.04, 'y');
  cylinder(g, M.steel, 0, h / 2, 0, 0.018, h, 'y', 14);
  const segs = [['green', 0x2ee66a], ['yellow', 0xffc61a], ['red', 0xff3a2a]].map(([name, color], i) => {
    const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(color).multiplyScalar(0.3), emissive: color, emissiveIntensity: 0, roughness: 0.25, transparent: true, opacity: 0.95 });
    const c = cylinder(g, mat, 0, h + 0.07 * i, 0, 0.055, 0.07, 'y', 24);
    return { name, mat, mesh: c };
  });
  cylinder(g, M.modDark, 0, h + 0.07 * 3 + 0.01, 0, 0.056, 0.02, 'y', 24);
  const lights = {};
  segs.forEach(s => {
    const pl = new THREE.PointLight(s.mat.emissive.getHex(), 0, 3.2, 2);
    pl.position.y = s.mesh.position.y;
    g.add(pl);
    lights[s.name] = pl;
  });
  return {
    group: g,
    set(st) { segs.forEach(s => { const on = !!st[s.name]; s.mat.emissiveIntensity = on ? 3.4 : 0; lights[s.name].intensity = on ? 1.4 : 0; }); },
  };
}

// Pulsantiera: Marcia (verde, a impulso), Arresto (rosso, NC), Emergenza (fungo rosso su targa gialla).
// Guarda verso +z. I pulsanti hanno userData per i tocchi; set({ start, stop, emergency }).
export function pushStation(M) {
  const g = new THREE.Group();
  cylinder(g, M.steelDark, 0, 0.02, 0, 0.16, 0.04, 'y');
  cylinder(g, M.steel, 0, 0.55, 0, 0.03, 1.1, 'y', 14);
  box(g, M.yellow, 0, 1.28, 0, 0.3, 0.46, 0.12, 0.012);
  const mk = (id, mat, x, y, radius, hold, label) => {
    const grp = new THREE.Group();
    grp.position.set(x, y, 0.07);
    const ring = cylinder(grp, M.modDark, 0, 0, 0, radius + 0.012, 0.014, 'z', 28);
    const cap = cylinder(grp, mat, 0, 0, 0.012, radius, 0.022, 'z', 28);
    ring.userData = cap.userData = { id, kind: hold ? 'hold' : 'toggle', hold: !!hold };
    g.add(grp);
    textPlane(g, label, x, y - radius - 0.035, 0.066, 0.14, 0.032, { fg: '#17181a' });
    return { grp, cap, ring };
  };
  const start = mk('SB1', M.green, -0.075, 1.40, 0.034, true, 'Marcia');
  const stop = mk('SB0', M.red, 0.075, 1.40, 0.034, true, 'Arresto');
  // fungo di emergenza
  const em = new THREE.Group();
  em.position.set(0, 1.20, 0.07);
  cylinder(em, M.yellow, 0, 0, 0, 0.056, 0.012, 'z', 32);
  const mush = cylinder(em, M.red, 0, 0, 0.026, 0.04, 0.036, 'z', 32, 0.032);
  mush.userData = { id: 'SBE', kind: 'toggle' };
  g.add(em);
  textPlane(g, 'Emergenza', 0, 1.115, 0.066, 0.18, 0.032, { fg: '#17181a' });
  const picks = [start.cap, start.ring, stop.cap, stop.ring, mush];
  return {
    group: g, picks,
    set(s) {
      start.cap.position.z = s.start ? 0.004 : 0.012;
      // l'arresto e' un contatto NC: premuto lo e' quando si tiene premuto
      stop.cap.position.z = s.stop ? 0.004 : 0.012;
      mush.position.z = s.emergency ? 0.008 : 0.026;
    },
  };
}

// Armadio elettrico dell'officina con salvamotore, contattore e relè termico. Guarda verso +z.
// set({ qm, contactor, thermal:{tripped,heat} }). I pezzi toccabili: QM (leva), FR.reset (tasto di riarmo del termico).
export function cabinetPanel(M) {
  const g = new THREE.Group();
  const W = 1.0, H = 1.2;
  box(g, M.cabinet, 0, 0, -0.04, W + 0.05, H + 0.05, 0.1, 0.012);
  box(g, M.cabinetIn, 0, 0, 0.012, W, H, 0.01, 0.004);
  [0.30, -0.22].forEach(y => box(g, M.din, 0, y, 0.022, W - 0.1, 0.022, 0.008, 0.002));
  const picks = [];
  const S = 1.75;                                   // i moduli sono piu' grandi del vero, per leggerli e toccarli
  // salvamotore: corpo scuro con manopola
  const qm = new THREE.Group();
  qm.position.set(-0.30, 0.34, 0.03); qm.scale.setScalar(S);
  box(qm, M.modDark, 0, 0, 0.0, 0.1, 0.16, 0.08, 0.008);
  const knob = new THREE.Group();
  knob.position.set(0, 0.02, 0.05);
  const handle = box(knob, M.lever, 0, 0, 0.012, 0.045, 0.085, 0.028, 0.006);
  handle.userData = { id: 'QM', kind: 'toggle' };
  const ring = cylinder(qm, M.yellow, 0, 0.02, 0.043, 0.05, 0.006, 'z', 24);
  ring.userData = { id: 'QM', kind: 'toggle' };
  qm.add(knob);
  g.add(qm);
  picks.push(handle, ring);
  textPlane(g, 'Salvamotore', -0.30, 0.15, 0.075, 0.3, 0.05, { size: 0.5 });
  // contattore: corpo grigio con finestrella
  const km = new THREE.Group();
  km.position.set(0.0, 0.34, 0.03); km.scale.setScalar(S);
  box(km, M.modGrey, 0, 0, 0, 0.12, 0.17, 0.08, 0.008);
  const win = led(0x39d46a, 0.012, 'box');
  win.mesh.scale.set(1.6, 1.0, 0.5);
  win.mesh.position.set(0, 0.03, 0.044);
  km.add(win.mesh);
  g.add(km);
  textPlane(g, 'Contattore', 0, 0.15, 0.075, 0.3, 0.05, { size: 0.5 });
  // relè termico: corpo blu con bandierina rossa e tasto di riarmo
  const fr = new THREE.Group();
  fr.position.set(0.30, 0.34, 0.03); fr.scale.setScalar(S);
  box(fr, M.modBlue, 0, 0, 0, 0.10, 0.17, 0.08, 0.008);
  const flag = led(0xff2a1a, 0.012, 'box');
  flag.mesh.scale.set(1.4, 1.0, 0.5);
  flag.mesh.position.set(0, 0.05, 0.044);
  fr.add(flag.mesh);
  const reset = cylinder(fr, M.modWhite, 0.0, -0.045, 0.045, 0.02, 0.014, 'z', 18);
  reset.userData = { id: 'FR.reset', kind: 'reset', part: 'FR' };
  g.add(fr);
  picks.push(reset);
  textPlane(g, 'Termico', 0.30, 0.15, 0.075, 0.3, 0.05, { size: 0.5 });
  // morsettiere (solo scena)
  for (let i = 0; i < 8; i++) box(g, i % 2 ? M.modGrey : M.modWhite, -0.35 + i * 0.1, -0.35, 0.03, 0.05, 0.09, 0.05, 0.004);
  return {
    group: g, picks,
    set(s) {
      knob.rotation.z = s.qm ? 0 : 0.7;
      win.set(!!s.contactor, 2.5);
      flag.set(!!s.thermal.tripped, 3.2);
    },
  };
}

/* ---------- PLC e fotocellula (prova M4) ---------- */

// PLC compatto da guida DIN: alimentazione, ingressi I0-I3, uscite Q0-Q1 e il LED RUN. Guarda verso +z.
// I LED sono una sola InstancedMesh (una chiamata di disegno) con il colore per istanza: acceso pieno, spento scuro.
// set({ on, inputs: { I0.. }, outputs: { Q0.. } })
export function plcModule(M) {
  const g = new THREE.Group();
  const W = 0.36, H = 0.16;
  box(g, M.modGrey, 0, 0, 0, W, H, 0.08, 0.01);
  box(g, M.modDark, 0, 0, 0.042, W - 0.02, H - 0.05, 0.006, 0.004);
  // morsettiere in alto e in basso
  box(g, M.modDark, 0, H / 2 - 0.012, 0.03, W - 0.02, 0.022, 0.03, 0.003);
  box(g, M.modDark, 0, -H / 2 + 0.012, 0.03, W - 0.02, 0.022, 0.03, 0.003);
  textPlane(g, 'PLC     I0  I1  I2  I3     Q0  Q1', 0.0, -0.024, 0.047, 0.33, 0.022, { fg: '#c9ccd0', size: 0.6 });   // una scritta sola: una chiamata
  const SLOTS = [['RUN', -W / 2 + 0.045, 0x2ee66a], ['I0', -0.042, 0x2ee66a], ['I1', -0.012, 0x2ee66a], ['I2', 0.018, 0x2ee66a], ['I3', 0.048, 0x2ee66a], ['Q0', 0.104, 0xffb11a], ['Q1', 0.134, 0xffb11a]];
  const leds = new THREE.InstancedMesh(new THREE.BoxGeometry(0.014, 0.01, 0.006), new THREE.MeshBasicMaterial({ color: 0xffffff }), SLOTS.length);
  const m4 = new THREE.Matrix4(), col = new THREE.Color();
  SLOTS.forEach(([, x], i) => { m4.makeTranslation(x, i === 0 ? -0.004 : 0.004, 0.048); leds.setMatrixAt(i, m4); leds.setColorAt(i, col.setHex(0x1a1c1f)); });
  leds.castShadow = false;
  g.add(leds);
  let last = '';
  return {
    group: g, leds,
    set(s) {
      const on = id => (id === 'RUN' ? s.on : s.on && !!((id[0] === 'I' ? s.inputs : s.outputs) || {})[id]);
      const key = SLOTS.map(([id]) => (on(id) ? 1 : 0)).join('');
      if (key === last) return false;
      last = key;
      SLOTS.forEach(([id, , c], i) => leds.setColorAt(i, on(id) ? col.setHex(c).multiplyScalar(2.2) : col.setHex(0x1a1c1f)));
      leds.instanceColor.needsUpdate = true;
      return true;
    },
  };
}

// Fotocellula a sbarramento: il trasmettitore su un palo da un lato del nastro, il catarifrangente dall'altro, il raggio in mezzo.
// Il raggio e' appena visibile quando e' libero; il LED giallo del sensore si accende quando un pacco lo interrompe.
// width: distanza tra i due pali (lungo z). set({ beam })
export function photoCell(M, width = 0.9, h = 0.97) {
  const g = new THREE.Group();
  [0, width].forEach(z => {
    cylinder(g, M.steelDark, 0, 0.02, z, 0.06, 0.04, 'y', 18);
    cylinder(g, M.steel, 0, h / 2, z, 0.02, h, 'y', 10);
  });
  box(g, M.modDark, 0, h, -0.03, 0.09, 0.1, 0.09, 0.01);                   // trasmettitore
  box(g, M.yellow, 0, h, width + 0.015, 0.08, 0.08, 0.025, 0.005);         // catarifrangente
  const lamp = led(0xffb11a, 0.012);
  lamp.mesh.position.set(0, h + 0.058, -0.03);
  g.add(lamp.mesh);
  const rayMat = new THREE.MeshBasicMaterial({ color: 0xff3a2a, transparent: true, opacity: 0.18, depthWrite: false });
  const ray = new THREE.Mesh(new THREE.CylinderGeometry(0.0035, 0.0035, width, 6), rayMat);
  ray.rotation.x = Math.PI / 2; ray.position.set(0, h, width / 2);
  ray.castShadow = false;
  g.add(ray);
  return {
    group: g,
    set(s) { lamp.set(!!s.beam, 3.2); rayMat.opacity = s.beam ? 0.05 : 0.18; },
  };
}
