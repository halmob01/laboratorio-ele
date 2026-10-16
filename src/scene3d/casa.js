// Prova del Modulo 5: "Una sera d'inverno", la casa di Via Roma 12 che va da sola dalle 16:30 alle 23:00.
// Riusa la scena fotorealistica del trilocale (scene.js, come l'appartamento) e aggiunge l'esterno: vialetto, siepe, cancello
// con il contatore, la tettoia con la colonnina, l'auto e la batteria, la pompa di calore sul muro nord, i pannelli sul tetto.
// Dentro: il quadro con il generale, i termostati e i radiatori, la sonda di allagamento con la sirena, la finestra.
// Non contiene regole: riceve lo stato osservato (casaState, contratto in docs/PIANO-CASA.md) e segnala i tocchi alla pagina.
// Progetto: docs/PROGETTO-CASA.md sezione 6; fluidita': docs/SPEC-SCENE-3D.md.
//
// Si ridisegna solo quando lo stato cambia. Movimenti continui solo la ventola della pompa, la luce del cavo in carica e la
// sirena, e solo mentre la serata scorre (l'ora del motore avanza): a pausa e a serata finita zero disegni.

import * as THREE from 'three';
import { createScene } from '../trilocale/scene.js';
import { mergeStatic } from '../trilocale/render.js';
import { HOUSE } from '../content/trilocale.js';
import { kitMaterials, box, cylinder } from './parts3d.js';
import { solarRoof, batteryWall, car, charger, heatPump, thermostat, radiator, floodProbe, siren, silenceButton, homePanel, meterBox, windowSash } from './parts-casa.js';

const { w: HW, d: HD } = HOUSE.size;
const EAST = HW + 0.07;                       // faccia esterna del muro est (muro 0,12 e facciata)
// Viste: la prima e' quella d'insieme (tetto tolto). Con il tetto: tetto, tettoia, esterno, pompa.
const VIEWS = {
  insieme: { tx: 6.4, ty: 0.6, tz: 4.9, yaw: 0, pitch: 56, dist: 20.5 },
  tetto: { tx: 4.5, ty: 2.4, tz: 6.5, yaw: -18, pitch: 24, dist: 15 },
  tettoia: { tx: 10.4, ty: 1.0, tz: 3.9, yaw: 62, pitch: 16, dist: 8.5 },
  quadro: { tx: 0.15, tz: 6.5, ty: 1.2, yaw: 90, pitch: 6, dist: 2.3 },
  bagno: { tx: 4.1, ty: 0.3, tz: 2.4, yaw: 0, pitch: 80, dist: 6 },
  esterno: { tx: 6.6, ty: 1.2, tz: 4.8, yaw: 26, pitch: 16, dist: 25 },
  pompa: { tx: 7.4, ty: 0.8, tz: -0.4, yaw: 152, pitch: 14, dist: 7.5 },
  lontano: { tx: 6.6, ty: 1.2, tz: 5.5, yaw: 18, pitch: 12, dist: 34 },
};
const OUTSIDE = new Set(['tetto', 'tettoia', 'esterno', 'pompa', 'lontano']);     // viste con il tetto al suo posto
const CAR_AT = { x: 11.3, z: 4.6 }, CAR_FROM = { x: 11.7, z: 17.5 };
const SKY = 0x56688a;                         // cielo d'inverno al tramonto (la notte e' quella del trilocale)
const LAMPS = { cucina: [1.5, 1.75], ingresso: [1.25, 6.4], soggiorno: [5.9, 6.5] };     // stanze senza lampada nel trilocale
const smooth = k => k * k * (3 - 2 * k);
const clamp01 = v => Math.max(0, Math.min(1, v));

function extension(ctx, cb) {
  const { world, pick, addLabel, redraw, FACE_ROT, T } = ctx;
  const K = kitMaterials();
  const grp = new THREE.Group();
  world.add(grp);
  const skip = [];
  const take = p => { (p.picks || []).forEach(m => { m.userData = { ...m.userData, ext: true }; pick.push(m); }); (p.skip || []).forEach(o => skip.push(o)); return p; };

  // ---- esterno: vialetto, strada, siepe con il cancello ----
  const asphalt = new THREE.MeshStandardMaterial({ color: 0x3b3d40, roughness: 0.92 });
  const gravel = new THREE.MeshStandardMaterial({ color: 0x8d877c, roughness: 1 });
  const flat = (mat, x0, z0, x1, z1, y) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0).rotateX(-Math.PI / 2), mat); m.position.set((x0 + x1) / 2, y, (z0 + z1) / 2); m.receiveShadow = true; grp.add(m); return m; };
  flat(gravel, 9.55, 1.4, 13.9, 12.2, -0.004);                              // vialetto e posto auto
  flat(asphalt, -30, 12.6, 39, 19, -0.006);                                 // la strada
  flat(gravel, 0.4, 9.0, 1.4, 12.2, -0.004);                                // sentiero dalla porta al cancelletto
  const hedge = new THREE.MeshStandardMaterial({ color: 0x2f4a2a, roughness: 1 });
  [[-3, 0.15], [1.6, 9.55]].forEach(([a, b]) => box(grp, hedge, (a + b) / 2, 0.45, 12.25, b - a, 0.9, 0.55, 0.12));
  [[-3.2, 12.25, 0.55, 12.6], [14.2, 4.5, 0.55, 15.5]].forEach(([x, z, w, d]) => box(grp, hedge, x, 0.45, z, w, 0.9, d, 0.12));
  box(grp, hedge, 14.2 - 0.0, 0.45, 12.25, 0.55, 0.9, 0.55, 0.12);
  [0.25, 1.5, 9.55, 13.95].forEach(x => box(grp, K.cabinet, x, 0.6, 12.25, 0.3, 1.2, 0.3, 0.02));      // pilastri dei cancelli
  // cancelletto pedonale chiuso
  for (let i = 0; i < 7; i++) box(grp, K.steelDark, 0.45 + i * 0.14, 0.55, 12.25, 0.03, 0.9, 0.03, 0.005);
  box(grp, K.steelDark, 0.87, 0.95, 12.25, 1.0, 0.04, 0.04, 0.006);
  box(grp, K.steelDark, 0.87, 0.2, 12.25, 1.0, 0.04, 0.04, 0.006);

  // ---- tettoia sul lato est: pergola di legno (si vede l'auto anche dall'alto) ----
  const wood = new THREE.MeshStandardMaterial({ color: 0x7a5236, roughness: 0.7 });
  const TT = { x0: EAST, x1: 13.5, z0: 1.8, z1: 7.6, h: 2.35 };
  [TT.z0 + 0.1, (TT.z0 + TT.z1) / 2, TT.z1 - 0.1].forEach(z => box(grp, wood, TT.x1 - 0.1, TT.h / 2, z, 0.14, TT.h, 0.14, 0.01));
  box(grp, wood, TT.x1 - 0.1, TT.h + 0.06, (TT.z0 + TT.z1) / 2, 0.16, 0.18, TT.z1 - TT.z0, 0.01);       // trave sui pali
  box(grp, wood, TT.x0 + 0.08, TT.h + 0.06, (TT.z0 + TT.z1) / 2, 0.12, 0.16, TT.z1 - TT.z0, 0.01);     // trave sul muro
  for (let z = TT.z0 + 0.15; z < TT.z1; z += 0.42) box(grp, wood, (TT.x0 + TT.x1) / 2, TT.h + 0.2, z, TT.x1 - TT.x0 + 0.2, 0.1, 0.08, 0.01);
  addLabel('Tettoia', 11.6, 2.9, 4.7, 'ctl');

  // batteria e inverter sul muro est, sotto la tettoia; colonnina accanto
  const batt = take(batteryWall(K));
  batt.group.position.set(EAST, 0, 2.7);
  batt.group.rotation.y = FACE_ROT.e;
  grp.add(batt.group);
  addLabel('Batteria', EAST + 0.4, 1.7, 2.7, 'ctl');
  const auto = car(K);
  auto.port.x = -0.9;                          // presa sul fianco verso la casa
  const chAt = new THREE.Vector3(EAST, 0, 4.25);
  // la presa dell'auto nelle coordinate della colonnina (girata verso est: x della colonnina = -z del mondo)
  const portW = new THREE.Vector3(CAR_AT.x + auto.port.x, auto.port.y, CAR_AT.z + auto.port.z);
  const rel = portW.clone().sub(chAt);
  const ch = take(charger(K, { port: new THREE.Vector3(-rel.z, rel.y, rel.x) }));
  ch.group.position.copy(chAt);
  ch.group.rotation.y = FACE_ROT.e;
  grp.add(ch.group);
  addLabel('Colonnina', EAST + 0.4, 1.7, 4.25, 'ctl');
  auto.group.position.set(CAR_AT.x, 0, CAR_AT.z);
  auto.group.scale.setScalar(0.0001);
  grp.add(auto.group);
  skip.push(auto.group);

  // ---- pompa di calore sul muro nord ----
  const hp = take(heatPump(K));
  hp.group.position.set(7.4, 0, -0.07 - 0.25);
  hp.group.rotation.y = FACE_ROT.n;
  grp.add(hp.group);
  addLabel('Pompa di calore', 7.4, 1.25, -0.6, 'ctl');

  // ---- contatore nel pilastro del cancello carraio ----
  const meter = take(meterBox(K));
  meter.group.position.set(9.0, 0, 12.25);
  grp.add(meter.group);
  addLabel('Contatore', 9.0, 1.9, 12.25, 'ctl');

  // ---- pannelli sul tetto (salgono e scendono con lui) ----
  const solar = solarRoof(K, { w: HW, d: HD, peak: 3 });
  ctx.roof.add(solar.group);

  // ---- dentro: quadro con il generale sul muro ovest dell'ingresso ----
  const bk = HOUSE.breaker;
  const panel = take(homePanel(K, 2.4));
  panel.group.position.set(bk.x + 0.06 + 0.03, 1.2, bk.z);
  panel.group.rotation.y = FACE_ROT.e;
  grp.add(panel.group);
  addLabel('Quadro', bk.x + 0.6, 1.6, bk.z, 'ctl');

  // ---- bagno: sonda a pavimento vicino alla porta, sirena sul muro est, tacitazione in corridoio ----
  const probe = take(floodProbe(K));
  probe.group.position.set(4.62, 0, 3.5 - T / 2 - 0.08);
  probe.group.rotation.y = Math.PI;
  probe.group.scale.setScalar(1.4);
  grp.add(probe.group);
  addLabel('Sonda', 4.5, 0.5, 2.9, 'ctl');
  const sir = take(siren(K));
  sir.group.position.set(HW - 4 - T / 2 - 0.04, 1.2, 0.55);
  sir.group.rotation.y = FACE_ROT.w;
  sir.group.scale.setScalar(1.6);
  grp.add(sir.group);
  const ta = take(silenceButton(K));
  ta.group.position.set(3.62, 1.15, 3.5 + T / 2 + 0.012);
  ta.group.rotation.y = FACE_ROT.s;
  ta.group.scale.setScalar(1.6);
  grp.add(ta.group);
  addLabel('Tacitazione', 3.62, 1.6, 3.9, 'ctl');

  // ---- clima: termostato e radiatore in soggiorno e in camera, finestra del soggiorno ----
  const zoneParts = {
    soggiorno: { th: take(thermostat(K, { name: 'soggiorno' })), rad: take(radiator(K, 1.0)) },
    camera: { th: take(thermostat(K, { name: 'camera' })), rad: take(radiator(K, 1.0)) },
  };
  const zs = zoneParts.soggiorno, zc = zoneParts.camera;
  zs.th.group.position.set(4.6, 1.15, 5 + T / 2 + 0.016); zs.th.group.rotation.y = FACE_ROT.s;
  zc.th.group.position.set(8.2, 1.15, 3.5 - T / 2 - 0.016); zc.th.group.rotation.y = FACE_ROT.n;
  zs.rad.group.position.set(5.5, 0, HD - T / 2 - 0.05); zs.rad.group.rotation.y = FACE_ROT.n;
  zc.rad.group.position.set(6.9, 0, T / 2 + 0.05); zc.rad.group.rotation.y = FACE_ROT.s;
  Object.values(zoneParts).forEach(z => { z.th.group.scale.setScalar(1.5); grp.add(z.th.group, z.rad.group); });
  const sash = take(windowSash(K, 1.4, 0.55, 0.9));
  sash.group.position.set(7.7, 0, HD - T / 2 - 0.035);
  sash.group.rotation.y = FACE_ROT.n;
  grp.add(sash.group);
  addLabel('Finestra', 7.7, 1.75, 7.6, 'ctl');

  // ---- cucina: il forno sotto il piano (vetro che si accende arancio) ----
  const ovenGlass = new THREE.MeshStandardMaterial({ color: 0x1b1410, emissive: 0xff7a2a, emissiveIntensity: 0, roughness: 0.15 });
  box(grp, K.steelDark, 2.35, 0.45, 0.66, 0.58, 0.56, 0.02, 0.006);
  const ovenDoor = box(grp, ovenGlass, 2.35, 0.43, 0.672, 0.44, 0.3, 0.012, 0.004);
  ovenDoor.castShadow = false;
  const ovenLight = new THREE.PointLight(0xff8a3a, 0, 2.2, 2);
  ovenLight.position.set(2.35, 0.45, 0.95);
  grp.add(ovenLight);

  // ---- lampade delle stanze che nel trilocale non ne hanno (cucina, ingresso, soggiorno): senza ombre ----
  const lamps = {};
  Object.entries(LAMPS).forEach(([id, [x, z]]) => {
    const g = new THREE.Group();
    g.position.set(x, 2.0, z);
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.5, 6), K.modDark);
    cord.position.y = 0.36;
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xf2efe8, roughness: 0.35, emissive: 0xffc27a, emissiveIntensity: 0 });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 20, 14), bulbMat);
    bulb.castShadow = false;
    const light = new THREE.PointLight(0xffc988, 0, 9, 2);
    light.position.y = -0.14;
    g.add(cord, bulb, light);
    grp.add(g);
    lamps[id] = { bulbMat, light, level: 0 };
  });
  // luce sopra la porta d'ingresso: si accende con il buio, si spegne con il contatore
  const porch = new THREE.PointLight(0xffb35c, 0, 7, 1.6);
  porch.position.set(1.4, 2.5, HD + 0.7);
  grp.add(porch);

  // ---- sole: un tramonto d'inverno da sud-ovest che scende, poi la luna da sud-est (la notte la fa il trilocale) ----
  const sun = ctx.sun;
  Object.assign(sun.shadow.camera, { left: -11, right: 11, top: 11, bottom: -11, near: 1, far: 50 });
  sun.shadow.camera.updateProjectionMatrix();
  sun.target.position.set(6.5, 0, 5.5);
  let sunKey = '';
  function placeSun(hour) {
    const night = hour >= 17.2;
    const q = night ? 'night' : String(Math.round(hour * 4) / 4);      // al piu' ogni quarto d'ora simulato
    if (q === sunKey) return false;
    sunKey = q;
    const az = night ? -0.55 : 0.85 + (hour - 16.5) * 0.25, el = night ? 0.75 : Math.max(0.1, 0.26 - (hour - 16.5) * 0.24);
    sun.position.set(6.5 - Math.sin(az) * Math.cos(el) * 20, Math.sin(el) * 20, 5.5 + Math.cos(az) * Math.cos(el) * 20);
    sun.target.updateMatrixWorld();
    return true;
  }
  placeSun(16.5);

  // tutto quello che non si muove si accorpa per materiale (il trilocale ha gia' accorpato il suo prima di extend)
  mergeStatic(grp, skip);

  // animazioni che non spostano ombre (luci, acqua, anta e auto senza ombre vere): niente ricalcolo delle ombre a ogni passo
  const tween = (ms, step) => { const t0 = performance.now(); ctx.loop(() => { const k = Math.min(1, (performance.now() - t0) / ms); step(k); return k < 1; }); };

  // ---- movimento continuo: ventola, luce del cavo, sirena; solo mentre l'ora avanza ----
  let ticking = false, looping = false, tickAt = 0;
  const live = () => ticking && performance.now() - tickAt < 1500;
  function startLoop() {
    if (looping || cb.reduced) return;
    looping = true;
    let tPrev = performance.now();
    ctx.loop(t => {
      const dt = Math.min(60, t - tPrev); tPrev = t;
      const go = live();
      let any = false;
      if (go && hp.running()) { hp.spin(dt); any = true; }
      if (go && ch.charging()) { ch.pulse(t); any = true; }
      if (go && sir.sounding()) { sir.flash(t); any = true; }
      if (!any) looping = false;
      return any;
    });
  }

  // ---- auto che arriva al tramonto (si attacca alla colonnina alle 18:30) ----
  let carIn = false;
  function carArrive(plugged, instant) {
    if (plugged === carIn) return;
    carIn = plugged;
    if (!plugged) { auto.group.scale.setScalar(0.0001); auto.lights(false); redraw(); return; }
    auto.group.scale.setScalar(1);
    if (instant || cb.reduced) { auto.group.position.set(CAR_AT.x, 0, CAR_AT.z); redraw(); return; }
    auto.lights(true);
    tween(4200, k => {
      const e = 1 - (1 - k) * (1 - k);
      auto.group.position.set(CAR_FROM.x + (CAR_AT.x - CAR_FROM.x) * e, 0, CAR_FROM.z + (CAR_AT.z - CAR_FROM.z) * e);
      if (k >= 1) auto.lights(false);
    });
  }

  // ---- finestra e allagamento animati ----
  let sashK = 0, poolK = 0;
  function sashTo(open) {
    const to = open ? 1 : 0, from = sashK;
    if (cb.reduced) { sashK = to; sash.open(to); redraw(); return; }
    tween(700, k => { sashK = from + (to - from) * smooth(k); sash.open(sashK); });
  }
  function poolTo(wet) {
    const to = wet ? 0.8 : 0, from = poolK;
    if (cb.reduced) { poolK = to; probe.grow(to); redraw(); return; }
    tween(wet ? 2400 : 900, k => { poolK = from + (to - from) * smooth(k); probe.grow(poolK); });
  }

  // ---- luci delle stanze: rampa breve, oppure tutte insieme di colpo (contatore che stacca) ----
  function lampTo(id, k, instant) {
    const l = lamps[id];
    if (!l || Math.abs(l.level - k) < 0.01) return;
    const from = l.level;
    const set = v => { l.level = v; l.light.intensity = 11 * v; l.bulbMat.emissiveIntensity = 6 * v; };
    if (instant || cb.reduced) { set(k); redraw(); return; }
    tween(k > from ? 420 : 260, q => set(from + (k - from) * smooth(q)));
  }

  let last = null, sig = '', prevHour = null, prevWet = null, prevWin = null;
  return {
    lamps,
    lampsTo(rooms, instant) { Object.keys(lamps).forEach(id => lampTo(id, clamp01(rooms[id] || 0), instant)); },
    stats() { let n = 0; ctx.scene.traverseVisible(o => { if (o.isMesh) n++; }); return { meshes: n }; },
    // hold: le luci delle stanze restano come sono (le sta facendo tremolare il blackout)
    apply(s, rooms, instant, hold) {
      const prev = last;
      last = s;
      let changed = false;
      // l'ora: il sole, il cielo, e se la serata scorre (a pausa l'ora non cambia)
      const hour = typeof s.hour === 'number' ? s.hour : 16.5;
      if (prevHour !== null && Math.abs(hour - prevHour) > 1e-6) { ticking = true; tickAt = performance.now(); }
      prevHour = hour;
      if (s.shift && s.shift.done) ticking = false;
      if (placeSun(hour)) { ctx.moved(); changed = true; }
      // pezzi
      [solar, batt, ch, hp, meter, panel, probe, sir].forEach(p => { if (p.set(s)) changed = true; });
      (s.zones || []).forEach(z => {
        const zp = zoneParts[z.id];
        if (!zp) return;
        if (zp.th.set(z, !!s.powered)) changed = true;
        if (zp.rad.set(s.hp && s.hp.on ? z.valve : 0)) changed = true;
      });
      const soggiorno = (s.zones || []).find(z => z.id === 'soggiorno');
      const win = !!(soggiorno && soggiorno.window);
      sash.set(soggiorno);
      if (win !== prevWin) { if (prevWin !== null) sashTo(win); else { sashK = win ? 1 : 0; sash.open(sashK); } prevWin = win; changed = true; }
      const wet = !!(s.flood && s.flood.wet);
      if (wet !== prevWet) { if (prevWet !== null) poolTo(wet); else { poolK = wet ? 0.8 : 0; probe.grow(poolK); } prevWet = wet; changed = true; }
      carArrive(!!(s.ev && s.ev.plugged), !prev);
      // luci: forno, stanze senza lampada, porta
      const on = !!s.powered;
      ovenGlass.emissiveIntensity = on && s.oven ? 2.4 : 0;
      ovenLight.intensity = on && s.oven ? 1.6 : 0;
      if (!hold) Object.keys(lamps).forEach(id => lampTo(id, on ? clamp01(rooms[id] || 0) : 0, instant || !!s.blackout));
      porch.intensity = on && hour >= 17 ? 5 : 0;
      const ns = [on, s.oven, s.blackout, hour >= 17, Object.keys(lamps).map(id => rooms[id] || 0).join()].join();
      if (ns !== sig) { sig = ns; changed = true; }
      if (cb.reduced) { if (sir.sounding()) sir.flash(0); }            // senza movimento: la sirena resta accesa fissa
      else if (live() && (hp.running() || ch.charging() || sir.sounding())) startLoop();
      if (changed) redraw();
      return changed;
    },
    dispose() { /* gli oggetti stanno nel mondo della scena e si liberano con lei */ },
  };
}

/**
 * @param {HTMLElement} container
 * @param {{ onTap:(u:object)=>void, reduced?:boolean, lite?:boolean, capture?:boolean }} cb
 */
export function createCasa(container, cb) {
  let ext = null;
  const api = createScene(container, {
    night: false, bare: true, noIntro: true, startRoof: true, start: VIEWS.esterno,
    dayBg: SKY, roomWindows: true, porch: false, limits: { yaw: [-200, 200], pitch: [8, 80] },
    reduced: cb.reduced, lite: cb.lite, capture: cb.capture,
    onBreaker() {}, onControl() {}, onRoom() {}, onRoof() {},
    onPick: u => { const { ext: _x, ...rest } = u; if (cb.onTap) cb.onTap(rest); },
    extend: ctx => (ext = extension(ctx, cb)),
  });
  if (!api) return null;
  const canvas = container.querySelector('canvas');
  let last = null, roomSig = '', nightKey = -1, override = null, evening = null, cutUntil = 0;
  const ROOMS = HOUSE.rooms.map(r => r.id);
  // stanze per il trilocale: accese le sue lampade (bagno, camera, corridoio) e le finestre di tutte
  function pushRooms(rooms, force) {
    const rs = ROOMS.map(id => (rooms[id] || 0) > 0.5 ? 1 : 0).join('');
    if (rs === roomSig && !force) return;
    roomSig = rs;
    const st = {};
    ROOMS.forEach(id => { st[id] = { lit: (rooms[id] || 0) > 0.5, controls: {} }; });
    api.update({ rooms: st });
  }
  function roomsOf(s) {
    if (override) return override;
    const out = {};
    ROOMS.forEach(id => { out[id] = s && s.powered && s.rooms ? clamp01(s.rooms[id] || 0) : 0; });
    return out;
  }
  const lookAt = (name, ms) => {
    const v = typeof name === 'object' ? { ...name } : { ...(VIEWS[name] || VIEWS.insieme) };
    if (container.clientWidth < container.clientHeight * 0.9) {
      // su telefono in verticale la casa si guarda da est: la pianta (9 x 8 m) piu' la tettoia entra nel lato lungo
      if (name === 'quadro') v.dist = 1.5;
      else if (name === 'insieme') Object.assign(v, { tx: 6.3, tz: 4.2, yaw: 90, pitch: 62, dist: 21 });
      else if (name === 'bagno') v.dist = 7.5;
      else if (typeof name === 'string' && OUTSIDE.has(name)) v.dist *= 1.5;
    }
    if (typeof name === 'string') api.setRoof(OUTSIDE.has(name), true, ms === undefined ? 1300 : Math.max(1, ms));
    api.look(v, ms);
  };
  return {
    // state = casaState(snapshot): si ridisegna solo se qualcosa e' cambiato
    update(s) {
      if (!s) return;
      const first = !last;
      last = s;
      const rooms = roomsOf(s);
      const k = Math.round(clamp01(((typeof s.hour === 'number' ? s.hour : 16.5) - 16.6) / 1.2) * 40) / 40;
      if (k !== nightKey) { nightKey = k; api.nightLevel(smooth(k)); }
      const hold = performance.now() < cutUntil;          // durante il tremolio del blackout le luci le comanda lui
      if (!hold) pushRooms(rooms, first);
      if (ext) ext.apply(s, rooms, first, hold);
      if (canvas) canvas.setAttribute('aria-label', describe(s));
    },
    look: lookAt,
    // il momento forte: il contatore stacca, tutte le luci di casa si spengono insieme ("tac") dopo un tremolio
    blackout() {
      const off = {}; ROOMS.forEach(id => { off[id] = 0; });
      if (cb.reduced) { pushRooms(off, true); return 0; }
      const lit = {}; ROOMS.forEach(id => { lit[id] = 1; });
      cutUntil = performance.now() + 700;
      [[0, lit], [90, off], [200, lit], [320, off]].forEach(([t, r]) => setTimeout(() => { pushRooms(r, true); if (ext) ext.lampsTo(r, true); }, t));
      setTimeout(() => { if (last) pushRooms(roomsOf(last), true); }, 720);
      return 700;
    },
    // il finale, le 23:00: la casa da fuori e le finestre che si spengono una alla volta; fine=false torna com'era
    evening(fine) {
      if (evening) { evening.forEach(clearTimeout); evening = null; }
      if (!fine) { override = null; if (last) { pushRooms(roomsOf(last), true); if (ext) ext.apply(last, roomsOf(last), true); } return 0; }
      lookAt('esterno', 2200);
      const order = ['cucina', 'ingresso', 'bagno', 'corridoio', 'soggiorno', 'camera'];
      const cur = roomsOf(last || {});
      override = { ...cur };
      const step = cb.reduced ? 0 : 900;
      evening = order.map((id, i) => setTimeout(() => {
        override = { ...override, [id]: 0 };
        pushRooms(override, true);
        if (ext && last) ext.apply(last, override, false);
      }, 2400 + i * step));
      return 2400 + order.length * step;
    },
    // da fuori, con il tetto: per la chiamata e l'arrivo
    outside() { api.setRoof(true, true, 1); api.look({ ...VIEWS.lontano }, 1); },
    // l'arrivo: dalla strada alla casa, poi il tetto si alza e si guarda dentro; torna quanto dura
    arrival() {
      if (cb.reduced) { lookAt('insieme', 1); return 0; }
      api.look({ ...VIEWS.esterno }, 2400);
      setTimeout(() => lookAt('insieme', 1800), 2600);
      return 4500;
    },
    stats() { return ext ? ext.stats() : { meshes: 0 }; },
    screenOf: api.screenOf,
    views: Object.keys(VIEWS).filter(v => v !== 'lontano'),
    view: name => ({ ...(VIEWS[name] || VIEWS.insieme) }),
    resize: api.resize,
    dispose: api.dispose,
  };
}

// descrizione per chi non vede la scena: frasi brevi, tradotte una per una (dizionario in ar-47.js, schema in ar.js)
function describe(s) {
  const z = id => (s.zones || []).find(x => x.id === id);
  const zs = z('soggiorno');
  return ['Casa intelligente, di sera.',
    s.blackout ? 'Il contatore ha staccato: la casa è al buio.' : s.powered ? 'La casa ha corrente.' : 'Il generale è aperto.',
    s.sun > 0.05 ? 'I pannelli producono.' : 'I pannelli non producono.',
    s.ev && s.ev.charging ? 'L’auto è in carica.' : s.ev && s.ev.plugged ? 'L’auto è attaccata alla colonnina.' : '',
    s.hp && s.hp.broken ? 'La pompa di calore è guasta.' : s.hp && s.hp.on ? 'La pompa di calore scalda.' : 'La pompa di calore è ferma.',
    s.oven ? 'Il forno è acceso.' : '',
    zs && zs.window ? 'La finestra del soggiorno è aperta.' : '',
    s.flood && s.flood.siren ? 'La sirena dell’allagamento suona.' : s.flood && s.flood.wet ? 'La sonda del bagno è bagnata.' : '',
  ].filter(Boolean).join(' ');
}
