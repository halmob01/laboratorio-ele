// Pezzi 3D del reparto della fabbrica (prova del Modulo 6, "Il turno di notte"): la recinzione della cella con la portella,
// il relè di sicurezza KS da mettere nell'armadio, il pannello operatore su colonna. Fase 3b di docs/PROGETTO-FABBRICA.md.
// Stesso contratto dei pezzi di parts3d.js: ogni pezzo riceve i materiali del kit e ritorna { group, picks, set(stato), skip? };
// set legge i campi di fabbricaState (src/prove/state.js) e ritorna true solo se ha cambiato qualcosa da ridisegnare.
// Luci e LED si accendono con l'intensita' o il colore, mai con `visible` (cambierebbe i programmi grafici: docs/SPEC-SCENE-3D.md).

import * as THREE from 'three';
import { box, cylinder, led, textPlane } from './parts3d.js';

/* ---------- recinzione della cella con la portella ---------- */

// Rete metallica: una griglia disegnata su un canvas in memoria, con i buchi trasparenti a soglia (alphaTest, non transparent):
// cosi' i pannelli si accorpano tra loro e non passano dall'ordinamento degli oggetti trasparenti. Un solo materiale per tutte
// le recinzioni della pagina.
let meshMat = null;
function fenceMaterial() {
  if (meshMat) return meshMat;
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.clearRect(0, 0, 64, 64);
  g.fillStyle = '#c4c9ce';
  g.fillRect(0, 0, 64, 7); g.fillRect(0, 0, 7, 64);          // due fili della maglia per tassello: si ripete senza giunte
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  meshMat = new THREE.MeshStandardMaterial({ map: t, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.45, metalness: 0.7 });
  return meshMat;
}
const CELL = 0.08;      // lato della maglia in metri

// Un pannello di rete da (x0, z0) a (x1, z1), da y0 a y1. Le coordinate della texture seguono le misure: maglie tutte uguali.
function netPanel(parent, x0, z0, x1, z1, y0, y1) {
  const len = Math.hypot(x1 - x0, z1 - z0), h = y1 - y0;
  const geo = new THREE.PlaneGeometry(len, h);
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * len / CELL, uv.getY(i) * h / CELL);
  const m = new THREE.Mesh(geo, fenceMaterial());
  m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  m.rotation.y = -Math.atan2(z1 - z0, x1 - x0);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}

/**
 * Recinzione della cella: area interna w (x) per d (z), alta h; portella larga doorW sul lato +z, a doorFrom dall'angolo -x,
 * con i cardini sul lato -x che si apre verso l'esterno. Origine a terra al centro dell'area.
 * Toccabili (portella e suo telaio): userData { id: 'P', kind: 'toggle' }.
 * set({ door }): door = portella aperta. doorTo(k) la porta a una posizione intermedia (0 chiusa, 1 aperta) per le animazioni.
 * @returns {{ group, picks, skip, set(s):boolean, doorTo(k:number):void, hinge:number[], switchAt:number[] }}
 */
export function fence(M, o = {}) {
  const w = o.w || 3.2, d = o.d || 2.4, h = o.h || 2.0, doorW = o.doorW || 0.9, doorFrom = o.doorFrom === undefined ? 0.6 : o.doorFrom;
  const g = new THREE.Group();
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const foot = 0.1, top = h - 0.06;          // la rete parte da terra con uno spazio e finisce sotto il corrimano
  const dx0 = x0 + doorFrom, dx1 = dx0 + doorW;
  // rete: tre lati interi, il lato +z diviso dal vano della portella
  netPanel(g, x0, z0, x1, z0, foot, top);
  netPanel(g, x0, z0, x0, z1, foot, top);
  netPanel(g, x1, z0, x1, z1, foot, top);
  netPanel(g, x0, z1, dx0, z1, foot, top);
  netPanel(g, dx1, z1, x1, z1, foot, top);
  // montanti gialli agli angoli, ai lati del vano e a meta' dei lati lunghi; corrimano e zoccolo
  const post = (x, z) => { box(g, M.yellow, x, h / 2, z, 0.05, h, 0.05, 0.006); box(g, M.steelDark, x, 0.008, z, 0.12, 0.016, 0.12, 0.003); };
  [[x0, z0], [x1, z0], [x0, z1], [x1, z1], [0, z0], [dx0, z1], [dx1, z1], [x0, 0], [x1, 0]].forEach(([x, z]) => post(x, z));
  const rail = (xa, za, xb, zb, y, t) => box(g, M.yellow, (xa + xb) / 2, y, (za + zb) / 2, Math.max(t, Math.abs(xb - xa)), t, Math.max(t, Math.abs(zb - za)), 0.004);
  rail(x0, z0, x1, z0, h - 0.03, 0.04); rail(x0, z0, x0, z1, h - 0.03, 0.04); rail(x1, z0, x1, z1, h - 0.03, 0.04);
  rail(x0, z1, dx0, z1, h - 0.03, 0.04); rail(dx1, z1, x1, z1, h - 0.03, 0.04);
  rail(x0, z0, x1, z0, foot - 0.02, 0.03); rail(x0, z0, x0, z1, foot - 0.02, 0.03); rail(x1, z0, x1, z1, foot - 0.02, 0.03);
  rail(x0, z1, dx0, z1, foot - 0.02, 0.03); rail(dx1, z1, x1, z1, foot - 0.02, 0.03);

  // portella: telaio giallo e rete, sui cardini al lato -x del vano; si apre ruotando verso l'esterno (+z)
  const door = new THREE.Group();
  door.position.set(dx0 + 0.03, 0, z1);
  const dw = doorW - 0.06, picks = [];
  const tag = m => { m.userData = { id: 'P', kind: 'toggle' }; picks.push(m); return m; };
  tag(netPanel(door, 0.02, 0, dw - 0.02, 0, foot + 0.02, top - 0.02));
  [[0.015, h / 2, 0.03, h - 0.08], [dw - 0.015, h / 2, 0.03, h - 0.08]].forEach(([x, y, t, hh]) => tag(box(door, M.yellow, x, y, 0, t, hh, 0.03, 0.004)));
  [[foot, 0.03], [h - 0.07, 0.03], [h / 2, 0.025]].forEach(([y, t]) => tag(box(door, M.yellow, dw / 2, y, 0, dw, t, 0.03, 0.004)));
  [0.35, h - 0.4].forEach(y => cylinder(door, M.steelDark, 0, y, 0, 0.018, 0.12, 'y', 12));           // cardini
  box(door, M.steelDark, dw - 0.08, 1.05, 0.04, 0.03, 0.14, 0.03, 0.006);                              // maniglia
  box(door, M.modDark, dw - 0.02, 1.25, 0.02, 0.03, 0.05, 0.03, 0.004);                                // linguetta dell'interruttore
  g.add(door);
  // interruttore di sicurezza sul montante a destra del vano, con il LED verde: acceso a portella chiusa
  const sw = new THREE.Group();
  sw.position.set(dx1 - 0.005, 1.25, z1 + 0.045);
  box(sw, M.yellow, 0, 0, 0, 0.05, 0.11, 0.04, 0.006);
  box(sw, M.modDark, 0, -0.035, 0.021, 0.04, 0.03, 0.004, 0.002);
  const lamp = led(0x2ee66a, 0.008);
  lamp.mesh.position.set(0, 0.035, 0.022);
  sw.add(lamp.mesh);
  g.add(sw);
  textPlane(g, 'Portella', dx0 + doorW / 2, h + 0.08, z1, 0.4, 0.07, { bg: '#17181a', fg: '#f5c400', size: 0.62, dim: 0xffffff });

  let k = -1, last = null;
  function doorTo(v) { k = v; door.rotation.y = -1.7 * v; }
  doorTo(0);
  return {
    group: g, picks, skip: [door],
    hinge: [dx0 + 0.03, z1], switchAt: [dx1 - 0.005, 1.25, z1 + 0.045],
    doorTo,
    set(s) {
      const open = !!s.door;
      if (open === last) return false;
      last = open;
      doorTo(open ? 1 : 0);
      lamp.set(!open, 3.2);
      return true;
    },
  };
}

/* ---------- relè di sicurezza KS ---------- */

/**
 * Relè di sicurezza da guida DIN (giallo, come i moduli di sicurezza veri), da mettere nell'armadio accanto al PLC.
 * Origine al centro del modulo, fronte verso +z (come plcModule). LED in una sola InstancedMesh (una chiamata di disegno):
 *   ALIM. acceso con la rete; CH1 canale del fungo (sbloccato); CH2 canale della portella (chiusa); OUT uscita (KS armato);
 *   RIARMO acceso quando i due canali sono a posto ma il relè aspetta il tasto Riarmo.
 * set({ supply, emergency, door, ks })
 */
export function ksModule(M) {
  const g = new THREE.Group();
  const W = 0.12, H = 0.17;
  box(g, M.yellow, 0, 0, 0, W, H, 0.08, 0.01);
  box(g, M.modDark, 0, 0.012, 0.042, W - 0.02, 0.07, 0.004, 0.003);                 // finestra dei LED
  box(g, M.modDark, 0, H / 2 - 0.012, 0.03, W - 0.01, 0.022, 0.03, 0.003);          // morsettiere
  box(g, M.modDark, 0, -H / 2 + 0.012, 0.03, W - 0.01, 0.022, 0.03, 0.003);
  textPlane(g, 'KS', 0, -0.044, 0.045, 0.08, 0.026, { fg: '#17181a', size: 0.8, dim: 0xffffff });
  const SLOTS = [['ALIM', 0x2ee66a], ['CH1', 0x2ee66a], ['CH2', 0x2ee66a], ['OUT', 0x2ee66a], ['RIARMO', 0xffb11a]];
  const leds = new THREE.InstancedMesh(new THREE.BoxGeometry(0.016, 0.009, 0.006), new THREE.MeshBasicMaterial({ color: 0xffffff }), SLOTS.length);
  const m4 = new THREE.Matrix4(), col = new THREE.Color();
  // tre righe: alimentazione in alto; i due canali; uscita e riarmo
  const AT = [[0, 0.036], [-0.024, 0.014], [0.024, 0.014], [-0.024, -0.008], [0.024, -0.008]];
  SLOTS.forEach((_, i) => { m4.makeTranslation(AT[i][0], AT[i][1], 0.046); leds.setMatrixAt(i, m4); leds.setColorAt(i, col.setHex(0x1a1c1f)); });
  leds.castShadow = false;
  g.add(leds);
  let last = '';
  return {
    group: g, picks: [], leds,
    set(s) {
      const ch1 = !s.emergency, ch2 = !s.door;
      const on = { ALIM: !!s.supply, CH1: !!s.supply && ch1, CH2: !!s.supply && ch2, OUT: !!s.ks, RIARMO: !!s.supply && ch1 && ch2 && !s.ks };
      const key = SLOTS.map(([id]) => (on[id] ? 1 : 0)).join('');
      if (key === last) return false;
      last = key;
      SLOTS.forEach(([id, c], i) => leds.setColorAt(i, on[id] ? col.setHex(c).multiplyScalar(2.2) : col.setHex(0x1a1c1f)));
      leds.instanceColor.needsUpdate = true;
      return true;
    },
  };
}

/* ---------- pannello operatore su colonna ---------- */

/**
 * Pannello operatore (HMI) su una colonna, da mettere fuori dalla recinzione. Origine a terra al centro della base, fronte +z.
 * Lo schermo non ha testo (i contenuti stanno nella cornice HTML): acceso azzurrino se il pannello e' collegato al PLC,
 * ambra se c'e' un allarme che suona, grigio spento se il cavo di rete e' staccato, nero senza alimentazione.
 * Toccabile (il pannello e il suo cavo): userData { id: 'HMI', kind: 'toggle' }; la scena decide se registrarlo tra i tocchi.
 * set({ supply, panelOn, hmi: { link, horn } })
 * @returns {{ group, picks, set(s):boolean, screenAt:number[] }}
 */
export function hmiStand(M) {
  const g = new THREE.Group();
  const Y = 1.35;                                                       // centro dello schermo
  cylinder(g, M.steelDark, 0, 0.015, 0, 0.18, 0.03, 'y', 24);
  cylinder(g, M.steel, 0, (Y - 0.12) / 2, 0, 0.035, Y - 0.12, 'y', 14);
  const head = new THREE.Group();
  head.position.set(0, Y, 0);
  head.rotation.x = -0.32;                                              // inclinato verso chi guarda
  const frame = box(head, M.modDark, 0, 0, 0, 0.46, 0.32, 0.06, 0.012);
  // schermo: un disegno astratto da interfaccia (barra in alto, riquadri, un grafico), nessun testo; il colore lo da' l'emissivo
  const ui = (() => {
    const c = document.createElement('canvas'); c.width = 192; c.height = 128;
    const x = c.getContext('2d', { willReadFrequently: true });
    x.fillStyle = '#2a3442'; x.fillRect(0, 0, 192, 128);
    x.fillStyle = '#c8d6e6'; x.fillRect(0, 0, 192, 14);
    x.fillStyle = '#7d8fa6'; [[8, 22, 84, 44], [100, 22, 84, 44], [8, 74, 176, 46]].forEach(([a, b, w, h]) => x.fillRect(a, b, w, h));
    x.fillStyle = '#e8f0f8'; [[14, 30, 40, 10], [106, 30, 56, 10]].forEach(([a, b, w, h]) => x.fillRect(a, b, w, h));
    x.strokeStyle = '#ffffff'; x.lineWidth = 3; x.beginPath();
    [0, 18, 10, 26, 22, 34, 28, 30, 36].forEach((v, i) => (i ? x.lineTo(14 + i * 20, 110 - v) : x.moveTo(14, 110 - v))); x.stroke();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    return t;
  })();
  const screenMat = new THREE.MeshStandardMaterial({ color: 0x0b0e12, emissive: 0x9fd4ff, emissiveMap: ui, emissiveIntensity: 0, roughness: 0.25 });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.38, 0.24), screenMat);
  screen.position.z = 0.031;
  screen.castShadow = false;
  head.add(screen);
  const pwr = led(0x2ee66a, 0.006);
  pwr.mesh.position.set(0.2, -0.14, 0.032);
  head.add(pwr.mesh);
  box(g, M.modDark, 0, Y - 0.18, -0.02, 0.1, 0.06, 0.06, 0.008);        // snodo
  g.add(head);
  frame.userData = screen.userData = { id: 'HMI', kind: 'toggle' };
  const picks = [frame, screen];
  let last = '';
  return {
    group: g, picks, screenAt: [0, Y, 0.03],
    set(s) {
      const powered = s.supply === undefined ? true : !!s.supply;
      const link = !!(powered && s.panelOn && s.hmi && s.hmi.link);
      const horn = link && !!s.hmi.horn;
      const key = `${powered}${!!s.panelOn}${link}${horn}`;
      if (key === last) return false;
      last = key;
      if (link) { screenMat.emissive.setHex(horn ? 0xffa040 : 0x6fb8ff); screenMat.emissiveIntensity = 1.1; }
      else if (powered && s.panelOn) { screenMat.emissive.setHex(0x8a9099); screenMat.emissiveIntensity = 0.18; }   // acceso ma senza collegamento
      else screenMat.emissiveIntensity = 0;
      pwr.set(powered && !!s.panelOn, 3);
      return true;
    },
  };
}
