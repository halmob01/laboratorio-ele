// Prova del Modulo 2: l'appartamento del trilocale di notte, con il quadro vero e una stufetta che disperde.
// Riusa la scena fotorealistica del trilocale (scene.js) con le opzioni di notte e aggiunge centralino, apparecchi e luci.
// Non contiene regole: riceve lo stato osservato (appartamentoState) e segnala i tocchi alla pagina.

import * as THREE from 'three';
import { createScene } from '../trilocale/scene.js';
import { HOUSE } from '../content/trilocale.js';
import { kitMaterials, box, cylinder, centralino, textPlane } from './parts3d.js';

// Viste: la prima e' quella d'insieme. Il centralino e' sul muro ovest dell'ingresso, rivolto a est.
const VIEWS = {
  insieme: { tx: 4.5, tz: 4.3, yaw: 0, pitch: 58, dist: 17.5 },
  quadro: { tx: 0.15, tz: 6.5, ty: 1.2, yaw: 90, pitch: 6, dist: 2.3 },
  soggiorno: { tx: 4.2, tz: 6.6, yaw: 0, pitch: 55, dist: 9 },
  corridoio: { tx: 4.5, tz: 4.6, yaw: 0, pitch: 60, dist: 10.5 },
  cucina: { tx: 1.5, tz: 1.5, yaw: 0, pitch: 58, dist: 9 },
};
const SCALE = 2.5;            // il centralino e' piu' grande del vero, per poterlo toccare e leggere dal telefono

function extension(ctx, cb) {
  const { world, pick, addLabel, redraw, moved, FACE_ROT } = ctx;
  const K = kitMaterials();
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), hit = new THREE.Vector3(), floor = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const grp = new THREE.Group();
  world.add(grp);

  // ---- centralino sul muro ovest dell'ingresso ----
  const bk = HOUSE.breaker;
  const cen = centralino(K, SCALE);
  cen.group.position.set(bk.x + 0.06 + 0.03, 1.2, bk.z);
  cen.group.rotation.y = FACE_ROT.e;
  grp.add(cen.group);
  cen.picks.forEach(p => { p.userData = { ...p.userData, ext: true }; pick.push(p); });
  addLabel('Quadro', bk.x + 0.6, 1.55, bk.z, 'ctl');

  // ---- interruttore della luce del corridoio, sul muro ovest ----
  const sw = new THREE.Group();
  sw.position.set(0.06 + 0.015, 1.1, 4.25);
  sw.rotation.y = FACE_ROT.e;
  sw.scale.setScalar(1.6);
  box(sw, ctx.M.plate, 0, 0, 0, 0.09, 0.12, 0.015, 0.006);
  const rocker = box(sw, ctx.M.rocker, 0, 0, 0.012, 0.055, 0.07, 0.016, 0.005);
  const swHit = box(sw, ctx.M.plate, 0, 0, 0.004, 0.14, 0.18, 0.03, 0.006);
  swHit.visible = false;
  swHit.userData = rocker.userData = { id: 'S', kind: 'toggle', ext: true };
  grp.add(sw);
  pick.push(swHit, rocker);
  addLabel('Interruttore', 0.5, 1.45, 4.25, 'ctl');

  // ---- stufetta elettrica in soggiorno, attaccata alla presa del muro sud ----
  const heater = new THREE.Group();
  heater.position.set(6.15, 0, 5.4);
  box(heater, K.modWhite, 0, 0.3, 0, 0.36, 0.56, 0.16, 0.02);
  box(heater, K.steelDark, 0, 0.02, 0, 0.3, 0.04, 0.2, 0.006);
  const barMat = new THREE.MeshStandardMaterial({ color: 0x5b2a14, emissive: 0xff5a1a, emissiveIntensity: 0, roughness: 0.4 });
  for (let i = 0; i < 3; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.28, 10), barMat); b.rotation.z = Math.PI / 2; b.position.set(0, 0.2 + i * 0.1, 0.085); heater.add(b); }
  box(heater, K.steelDark, 0, 0.3, 0.092, 0.31, 0.46, 0.006, 0.002).material = new THREE.MeshStandardMaterial({ color: 0x2b2e32, roughness: 0.6, metalness: 0.8, wireframe: true });
  const heaterHit = box(heater, K.modWhite, 0, 0.3, 0, 0.42, 0.62, 0.22, 0.02);
  heaterHit.visible = false;
  heaterHit.userData = { id: 'G', kind: 'toggle', ext: true };
  grp.add(heater);
  pick.push(heaterHit);
  // presa a muro e cavo
  box(grp, K.modWhite, 6.15, 0.32, 5.07, 0.09, 0.09, 0.02, 0.004);
  const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.26, 8), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6 }));
  cable.rotation.x = Math.PI / 2; cable.position.set(6.15, 0.32, 5.2);
  grp.add(cable);
  addLabel('Stufetta', 6.15, 0.95, 5.4, 'ctl');

  // ---- cucina: forno con l'orologio verde e piano cottura ----
  const ovenTxt = textPlane(grp, '12:00', 2.35, 0.62, 0.66, 0.18, 0.05, { fg: '#47ff8a', dim: 0x222222 });
  box(grp, K.modDark, 2.35, 0.55, 0.655, 0.5, 0.36, 0.01, 0.004);
  ovenTxt.position.z = 0.665;
  addLabel('Forno', 2.35, 1.1, 0.7, 'ctl');

  // ---- televisore del soggiorno: schermo che si accende con la linea delle prese ----
  const tvMat = ctx.M.screen;
  addLabel('TV', 7.4, 1.35, 5.15, 'ctl');

  // ---- luce che esce da televisore e stufetta: al buio si vedono da lontano (senza ombre: costano poco) ----
  const tvLight = new THREE.PointLight(0x6ea8e8, 0, 3.2, 2);
  tvLight.position.set(7.4, 0.8, 5.45);
  const heatLight = new THREE.PointLight(0xff6a2a, 0, 2.6, 2);
  heatLight.position.set(6.15, 0.35, 5.6);
  grp.add(tvLight, heatLight);

  // ---- torcia: un cono di luce dove punta il dito o il mouse (si accende dalla cornice della prova) ----
  const torch = new THREE.SpotLight(0xfff1d6, 0, 0, 0.11, 0.55, 2);       // stretta: illumina una stanza, non la casa
  torch.target.position.set(4.5, 0, 4.3);
  grp.add(torch, torch.target);

  return {
    update(state) {
      const s = state && state.prova;
      if (!s) return;
      cen.set(s);
      rocker.rotation.x = (s.switchOn ? -1 : 1) * 0.25;
      const heaterOn = s.socket && s.heaterPlugged;
      barMat.emissiveIntensity = heaterOn ? 3.5 : 0;
      if (cable.visible !== s.heaterPlugged) { cable.visible = s.heaterPlugged; moved(); }
      tvMat.emissive = new THREE.Color(s.socket ? 0x2c5c96 : 0x000000);
      tvMat.emissiveIntensity = s.socket ? 1.1 : 0;
      tvLight.intensity = s.socket ? 2.2 : 0;
      heatLight.intensity = heaterOn ? 2.6 : 0;
      ovenTxt.material.color.setHex(s.oven ? 0xffffff : 0x1c1c1c);
      redraw();
    },
    torch(on) { torch.intensity = on ? 900 : 0; redraw(); },
    // punta la torcia: il punto del pavimento sotto (x, y) dello schermo; la luce parte dalla telecamera
    aim(ndcX, ndcY) {
      ray.setFromCamera(ndc.set(ndcX, ndcY), ctx.camera);
      if (!ray.ray.intersectPlane(floor, hit)) return;
      torch.target.position.copy(hit);
      torch.position.copy(ctx.camera.position);
      if (torch.intensity > 0) redraw();
    },
    dispose() { /* gli oggetti stanno nel mondo della scena e si liberano con lei */ },
  };
}

/**
 * @param {HTMLElement} container
 * @param {{ onTap:(u:object)=>void, reduced?:boolean, lite?:boolean, capture?:boolean }} cb
 */
export function createAppartamento(container, cb) {
  let ext = null;
  const api = createScene(container, {
    night: true, bare: true, noIntro: true, start: VIEWS.insieme,
    reduced: cb.reduced, lite: cb.lite, capture: cb.capture,
    onBreaker() {}, onControl() {}, onRoom() {}, onRoof() {},
    onPick: cb.onTap,
    extend: ctx => (ext = extension(ctx, cb)),
  });
  if (!api) return null;
  return {
    update(state) { api.update(state); },
    torch(on) { if (ext) ext.torch(on); },
    aim(x, y) {
      if (!ext) return;
      const r = container.getBoundingClientRect();
      ext.aim(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    },
    // su telefono in verticale il quadro va guardato piu' da vicino, per leggerlo e toccarlo
    look(name, ms) {
      const v = { ...(VIEWS[name] || VIEWS.insieme) };
      if (container.clientWidth < container.clientHeight * 0.9 && name === 'quadro') v.dist = 1.5;
      api.look(v, ms);
    },
    screenOf: api.screenOf,
    views: Object.keys(VIEWS),
    resize: api.resize,
    dispose: api.dispose,
  };
}
