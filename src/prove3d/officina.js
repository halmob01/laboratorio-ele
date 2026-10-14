// Scena della prova del Modulo 3: l'officina con il nastro trasportatore. Legge lo stato osservato
// (motore, pacco, termico, pulsanti) e segnala i tocchi: nessuna regola del gioco qui dentro.

import * as THREE from 'three';
import { createStage, mat, box, cyl, glow, setGlow, ease, COL } from './kit.js';

const BG = 0x1a212b;
const HOME = { pos: [-3.2, 4.4, 7.6], target: [0.4, 0.8, -0.4] };
const CLOSE_QUADRO = { pos: [-1.6, 1.8, 1.8], target: [-1.6, 1.5, -2.1] };
const LENGTH = 6;                 // metri di corsa del pacco (level.machine.length)
const X0 = -3, BELT_Y = 0.92;

export function createOfficina(container, cb) {
  const stage = createStage(container, { bg: BG, home: HOME, min: 3.2, max: 18, reduced: cb.reduced, lite: cb.lite, capture: cb.capture, exposure: 1.0 });
  if (!stage) return null;
  const { scene } = stage;
  const root = new THREE.Group();
  scene.add(root);

  const hemi = new THREE.HemisphereLight(0xcdd8ea, 0x4a4238, 1.0);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0dc, 2.2);
  sun.position.set(-5, 9, 7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(stage.lite ? 1024 : 2048, stage.lite ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 7, bottom: -7, near: 1, far: 30 });
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);

  const M = {
    floor: mat(0x5d6670, 0.9), wall: mat(0xc9ccd0, 0.9), frame: mat(0x38424d, 0.5, 0.5), steel: mat(0xaab2ba, 0.35, 0.8), dark: mat(COL.dark, 0.6, 0.2),
    carton: mat(COL.carton, 0.85), yellow: mat(COL.yellow, 0.6), cab: mat(0xaeb6bd, 0.55, 0.25), motor: mat(COL.blue, 0.45, 0.4), black: mat(0x14181d, 0.7),
    red: mat(COL.red, 0.5), green: mat(COL.green, 0.5), white: mat(COL.white, 0.5),
  };

  /* ---- locale ---- */
  box(root, [14, 0.2, 8], [0, -0.1, 0], M.floor);
  box(root, [14, 3.4, 0.16], [0, 1.7, -2.6], M.wall);
  box(root, [0.16, 3.4, 8], [-7, 1.7, 0], M.wall);
  // strisce gialle di sicurezza intorno al nastro
  [-1.1, 1.1].forEach(z => box(root, [7.4, 0.01, 0.07], [0.1, 0.005, z * 1.1], M.yellow, { cast: false, receive: false }));

  /* ---- nastro ---- */
  const belt = new THREE.Group(); root.add(belt);
  [-0.46, 0.46].forEach(z => box(belt, [LENGTH + 0.9, 0.16, 0.06], [0, BELT_Y - 0.1, z], M.frame));
  for (let i = 0; i <= 4; i++) { const x = X0 - 0.3 + i * ((LENGTH + 0.6) / 4); [-0.46, 0.46].forEach(z => box(belt, [0.07, BELT_Y - 0.15, 0.07], [x, (BELT_Y - 0.15) / 2, z], M.frame)); }
  cyl(belt, 0.14, 0.9, [X0 - 0.3, BELT_Y - 0.12, 0], M.steel, { rot: [Math.PI / 2, 0, 0] });
  cyl(belt, 0.14, 0.9, [X0 + LENGTH + 0.3, BELT_Y - 0.12, 0], M.steel, { rot: [Math.PI / 2, 0, 0] });
  // tappeto a strisce: la trama scorre insieme al pacco
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 16;
  const g2 = cv.getContext('2d'); g2.fillStyle = '#23282e'; g2.fillRect(0, 0, 64, 16); g2.fillStyle = '#3a424b';
  for (let i = 0; i < 4; i++) g2.fillRect(i * 16, 0, 5, 16);
  const tex = new THREE.CanvasTexture(cv); tex.wrapS = THREE.RepeatWrapping; tex.repeat.set(LENGTH * 2, 1); tex.colorSpace = THREE.SRGBColorSpace;
  const surface = new THREE.Mesh(new THREE.BoxGeometry(LENGTH + 0.6, 0.04, 0.82), [M.black, M.black, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }), M.black, M.black, M.black]);
  surface.position.set(X0 + LENGTH / 2, BELT_Y - 0.01, 0); surface.receiveShadow = true; belt.add(surface);

  /* ---- motore in testa al nastro (fine corsa) ---- */
  const motor = new THREE.Group(); motor.position.set(X0 + LENGTH + 0.7, 0.5, 0); root.add(motor);
  cyl(motor, 0.2, 0.55, [0, 0, 0], M.motor, { rot: [0, 0, Math.PI / 2] });
  box(motor, [0.4, 0.07, 0.4], [0.05, -0.27, 0], M.frame);
  const fan = cyl(motor, 0.16, 0.04, [0.34, 0, 0], M.dark, { rot: [0, 0, Math.PI / 2] });
  [0, 1, 2].forEach(i => { const blade = box(fan, [0.04, 0.02, 0.28], [0, 0, 0], M.steel); blade.rotation.y = (i * Math.PI) / 3; });
  box(motor, [0.7, 0.09, 0.09], [-0.5, 0.18, 0], M.dark);        // trasmissione verso il rullo
  stage.label('Motore', motor, 'ctl', 0.5, 14);

  /* ---- finecorsa a fine nastro ---- */
  const fcg = new THREE.Group(); fcg.position.set(X0 + LENGTH + 0.45, BELT_Y + 0.1, 0.55); root.add(fcg);
  box(fcg, [0.14, 0.18, 0.1], [0, 0, 0], M.yellow);
  const fcLever = box(fcg, [0.3, 0.025, 0.025], [-0.15, 0.06, 0], M.steel); fcLever.geometry.translate(-0.12, 0, 0);
  fcLever.position.set(0, 0.05, 0.06);
  stage.label('Finecorsa', fcg, 'ctl', 0.3, 10);

  /* ---- pacco ---- */
  const pack = new THREE.Group(); root.add(pack);
  const packBox = box(pack, [0.6, 0.45, 0.5], [0, 0.225, 0], M.carton);
  box(pack, [0.6, 0.02, 0.1], [0, 0.46, 0], mat(0xd9c28f, 0.8), { cast: false });
  stage.pickable([packBox], { click: () => cb.onRewind && cb.onRewind() });
  stage.label('Pacco: tocca per riportarlo all’inizio', pack, 'ctl', 0.75, 10);

  /* ---- quadro di comando a parete ---- */
  const cab = new THREE.Group(); cab.position.set(-1.7, 1.55, -2.45); root.add(cab);
  box(cab, [1.9, 1.3, 0.16], [0, 0, 0], M.cab);
  box(cab, [1.8, 1.2, 0.03], [0, 0, 0.095], mat(0xc4cad0, 0.5, 0.2), { cast: false });
  const spia = glow(0x35e07a, 3);
  const spiaMesh = new THREE.Mesh(new THREE.SphereGeometry(0.075, 14, 10), spia); spiaMesh.position.set(-0.6, 0.38, 0.12); cab.add(spiaMesh);
  box(cab, [0.2, 0.05, 0.02], [-0.6, 0.27, 0.11], M.dark, { cast: false });
  stage.label('Spia di marcia', spiaMesh, 'ctl', 0.17, 7);

  // relè termico: finestra con la bandierina e pulsante di riarmo
  box(cab, [0.62, 0.3, 0.04], [0.1, 0.38, 0.11], M.dark);
  const frOk = glow(0x35e07a, 1.6), frKo = glow(0xff3b30, 3.2);
  const frOkM = box(cab, [0.5, 0.16, 0.02], [0.1, 0.38, 0.14], frOk, { cast: false });
  const frKoM = box(cab, [0.5, 0.16, 0.02], [0.1, 0.38, 0.14], frKo, { cast: false }); frKoM.visible = false;
  const resetBtn = cyl(cab, 0.07, 0.06, [0.62, 0.38, 0.13], mat(COL.blue, 0.5), { rot: [Math.PI / 2, 0, 0] });
  stage.pickable([resetBtn, frOkM, frKoM], { click: () => cb.onReset && cb.onReset('FR') });
  stage.label('Relè termico (tocca: riarma)', frOkM, 'ctl', 0.22, 7);

  // salvamotore
  const qm = { g: new THREE.Group(), angle: 0, on: 1 };
  qm.g.position.set(-0.6, 0.02, 0.1); cab.add(qm.g);
  const qmBody = box(qm.g, [0.34, 0.34, 0.1], [0, 0, 0], mat(0xf1efe8, 0.45));
  const qmLever = new THREE.Group(); qmLever.position.set(0, 0, 0.055); qm.g.add(qmLever);
  const qmStick = box(qmLever, [0.16, 0.2, 0.06], [0, 0, 0.03], mat(0x20262e, 0.5));
  qm.lever = qmLever;
  stage.pickable([qmBody, qmStick], { click: () => cb.onControl && cb.onControl('QM') });
  stage.label('Salvamotore', qm.g, 'ctl', 0.27, 7);

  // pulsanti: Marcia e Arresto si tengono premuti, il fungo resta giu'
  const btns = {};
  function button(id, x, y, color, text, opt = {}) {
    const g = new THREE.Group(); g.position.set(x, y, 0.11); cab.add(g);
    cyl(g, opt.r + 0.03 || 0.12, 0.03, [0, 0, 0.005], M.dark, { rot: [Math.PI / 2, 0, 0], cast: false });
    const cap = opt.mushroom
      ? new THREE.Mesh(new THREE.SphereGeometry(0.12, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(color, 0.4))
      : new THREE.Mesh(new THREE.CylinderGeometry(opt.r || 0.09, opt.r || 0.09, 0.06, 20), mat(color, 0.4));
    if (opt.mushroom) cap.rotation.x = Math.PI / 2; else cap.rotation.x = Math.PI / 2;
    cap.position.set(0, 0, 0.04); cap.castShadow = true; g.add(cap);
    btns[id] = { g, cap, pressed: 0 };
    return { cap, g };
  }
  const bMarcia = button('SB1', -0.5, -0.34, COL.green, 'Marcia', { r: 0.09 });
  const bArresto = button('SB0', -0.12, -0.34, COL.red, 'Arresto', { r: 0.09 });
  const bFungo = button('SBE', 0.4, -0.34, COL.red, 'Emergenza', { mushroom: true, r: 0.12 });
  box(cab, [0.34, 0.34, 0.02], [0.4, -0.34, 0.1], M.yellow, { cast: false });
  stage.pickable([bMarcia.cap], { down: () => cb.onPress && cb.onPress('SB1'), up: () => cb.onRelease && cb.onRelease('SB1') });
  stage.pickable([bArresto.cap], { down: () => cb.onPress && cb.onPress('SB0'), up: () => cb.onRelease && cb.onRelease('SB0') });
  stage.pickable([bFungo.cap], { click: () => cb.onControl && cb.onControl('SBE') });
  stage.label('Marcia', bMarcia.g, 'ctl', 0.17, 7); stage.label('Arresto', bArresto.g, 'ctl', 0.17, 7); stage.label('Emergenza', bFungo.g, 'ctl', 0.22, 7);
  stage.label('Quadro di comando', cab, 'room', 0.82);

  /* ---- torretta luminosa (verde = in marcia, rosso = protezione scattata o emergenza, ambra = sovraccarico) ---- */
  const tower = new THREE.Group(); tower.position.set(X0 - 0.9, 0, 1.0); root.add(tower);
  cyl(tower, 0.03, 1.6, [0, 0.8, 0], M.steel);
  cyl(tower, 0.1, 0.08, [0, 0.04, 0], M.dark);
  const tg = glow(0x35e07a, 3), tr = glow(0xff3b30, 3.4), ta = glow(0xffb020, 3);
  [[tr, 1.75], [ta, 1.57], [tg, 1.39]].forEach(([m, y]) => cyl(tower, 0.09, 0.15, [0, y, 0], m, { cast: false }));
  stage.label('Torretta', tower, 'ctl', 2.0, 12);

  /* ---- interruttore del carico (simula il sovraccarico) vicino al motore ---- */
  const lg = new THREE.Group(); lg.position.set(X0 + LENGTH + 0.9, 0.95, -0.9); root.add(lg);
  box(lg, [0.3, 0.4, 0.12], [0, 0, 0], M.yellow);
  const lgLever = box(lg, [0.06, 0.2, 0.06], [0, 0, 0.09], M.dark);
  stage.pickable([lgLever, lg.children[0]], { click: () => cb.onOverload && cb.onOverload() });
  stage.label('Carico: tocca per simulare il sovraccarico', lg, 'ctl', 0.42, 11);

  /* ---- aggiornamento ---- */
  let snap = null;
  const st = { run: false, pos: 0, shown: 0, ovl: false, fcAct: false, tripped: false, h: false, sbe: false, qmOn: 1, pr: { SB1: 0, SB0: 0, SBE: 0 }, ovlAng: 0 };
  const apply = s => {
    snap = s;
    const o = s.obs;
    st.run = o.motors.M === 'fwd';
    st.pos = o.machine ? o.machine.pos : 0;
    st.ovl = !!o.overload;
    st.fcAct = !!(o.parts.FC && o.parts.FC.act);
    st.tripped = !!(o.parts.FR && o.parts.FR.tripped);
    st.h = o.loads.H === 'on';
    st.sbe = !!(o.parts.SBE && o.parts.SBE.pressed);
    st.qmOn = o.parts.QM && o.parts.QM.on ? 1 : 0;
    st.pr.SB1 = o.parts.SB1 && o.parts.SB1.pressed ? 1 : 0; st.pr.SB0 = o.parts.SB0 && o.parts.SB0.pressed ? 1 : 0; st.pr.SBE = st.sbe ? 1 : 0;
    stage.redraw();
  };
  const cur = { pr: { SB1: 0, SB0: 0, SBE: 0 }, qm: 0, fc: 0, ovl: 0 };
  const hook = (dt) => {
    let moving = false;
    const d = st.pos - st.shown;
    st.shown = Math.abs(d) < 0.003 ? st.pos : ease(st.shown, st.pos, 0.2);
    if (st.shown !== st.pos) moving = true;
    pack.position.set(X0 + st.shown, BELT_Y, 0);
    tex.offset.x = -st.shown * 2;
    if (st.run) { fan.rotation.x += dt * 14; moving = true; }
    ['SB1', 'SB0', 'SBE'].forEach(id => {
      cur.pr[id] = ease(cur.pr[id], st.pr[id], 0.4);
      if (Math.abs(cur.pr[id] - st.pr[id]) < 0.01) cur.pr[id] = st.pr[id]; else moving = true;
      btns[id].cap.position.z = 0.04 - cur.pr[id] * 0.035;
    });
    const qmGoal = st.qmOn ? 0.55 : -0.55;
    qm.angle = ease(qm.angle, qmGoal, 0.3); if (Math.abs(qm.angle - qmGoal) < 0.01) qm.angle = qmGoal; else moving = true;
    qm.lever.rotation.x = -qm.angle;
    const fcGoal = st.fcAct ? -0.7 : 0;
    cur.fc = ease(cur.fc, fcGoal, 0.3); if (Math.abs(cur.fc - fcGoal) < 0.01) cur.fc = fcGoal; else moving = true;
    fcLever.rotation.z = cur.fc;
    const ovGoal = st.ovl ? -0.5 : 0.5;
    cur.ovl = ease(cur.ovl, ovGoal, 0.3); if (Math.abs(cur.ovl - ovGoal) < 0.01) cur.ovl = ovGoal; else moving = true;
    lgLever.rotation.x = cur.ovl; lgLever.position.y = cur.ovl * 0.12;
    frKoM.visible = st.tripped; frOkM.visible = !st.tripped;
    moving = setGlow(frOk, !st.tripped, 0.3) || moving;
    moving = setGlow(frKo, st.tripped, 0.3) || moving;
    moving = setGlow(spia, st.h) || moving;
    moving = setGlow(tg, st.h) || moving;
    moving = setGlow(tr, st.tripped || st.sbe) || moving;
    moving = setGlow(ta, st.ovl) || moving;
    return moving;
  };
  hook.active = () => !!snap && (st.run || st.shown !== st.pos);
  stage.hook(hook);

  const q = {
    ...stage,
    update: apply,
    overview() { stage.view(HOME); },
    focus(name) { stage.view(name === 'quadro' ? CLOSE_QUADRO : HOME); },
    dispose: stage.dispose,
  };
  stage.view(HOME, true);
  return q;
}
