// Prova del Modulo 4: il nastro automatico con il PLC, nello stesso capannone dell'officina, a mezzogiorno.
// Pacchetto separato (prove3d.js), si carica solo aprendo la prova. Non contiene regole: riceve lo stato osservato
// (automaticoState) e segnala i tocchi alla pagina. Specifica: docs/PROGETTO-NASTRO-PLC.md; fluidita': docs/SPEC-SCENE-3D.md.
//
// I pacchi sono quelli del modello `pacchi` del motore: la scena li mette in fila dal fronte del primo (`lead`) con il loro
// passo. Il motore avanza a scatti di mezzo secondo; la scena li fa scorrere alla velocita' del nastro e si riallinea.
// Tutti i pacchi (in fila, sullo scivolo, sul bancale) sono InstancedMesh con l'ombra finta: le ombre del sole restano ferme.

import * as THREE from 'three';
import { createStage } from './kit.js';
import { kitMaterials, box, cylinder, conveyor, motorUnit, stackLight, pushStation, cabinetPanel, led, textPlane, plcModule, photoCell } from './parts3d.js';
import { createLiveWires } from './wiring.js';
import { officinaWires, PLC_X, PLC_Y, PH_X, PH_Z, TRAY_Z } from './officina-wires.js';
import { buildHall } from './capannone.js';

const BELT = { x0: 2.6, x1: 8.6, z: 3.4, h: 0.8, w: 0.7 };
const V = 0.6;                                   // m/s, come il parametro v del modello `pacchi`
const CHUTE = { x0: 8.62, x1: 9.3, y0: BELT.h, y1: 0.42, len: 0.75 };
const PALLET = { x: 9.85, z: BELT.z, y: 0.14 };
const PK = { w: 0.48, h: 0.34, d: 0.38 };
const N = 8;                                     // pacchi in fila al massimo (nastro e scivolo)
const STACK = 8;                                 // pacchi sul bancale: due strati da quattro
const VIEWS = {
  insieme: { tx: 6.0, ty: 0.9, tz: 3.4, yaw: 16, pitch: 27, dist: 14.5 },
  pulsantiera: { tx: 6.4, ty: 1.5, tz: 5.5, yaw: 8, pitch: 8, dist: 2.9 },
  quadro: { tx: 3.0, ty: 1.5, tz: 0.4, yaw: 6, pitch: 6, dist: 2.7 },
  plc: { tx: 3.0, ty: 1.3, tz: 0.3, yaw: 4, pitch: 4, dist: 1.5 },
  fotocellula: { tx: 6.8, ty: 1.0, tz: 3.4, yaw: -28, pitch: 20, dist: 3.6 },
  bancale: { tx: 9.4, ty: 0.7, tz: 3.4, yaw: -34, pitch: 22, dist: 4.2 },
  esterno: { tx: 0.4, ty: 1.5, tz: 6.2, yaw: -78, pitch: 9, dist: 9.5 },
  turno: { tx: 6.6, ty: 1.0, tz: 3.6, yaw: 24, pitch: 32, dist: 13 },
};

/**
 * @param {HTMLElement} container
 * @param {{ onTap:(u:object)=>void, onPress:(u:object)=>void, onRelease:(u:object)=>void, reduced?:boolean, lite?:boolean, capture?:boolean }} cb
 */
export function createAutomatico(container, cb) {
  const stage = createStage(container, {
    bg: 0x7f9bbd, exposure: 1.2, view: VIEWS.insieme, limits: { yaw: [-50, 50], pitch: [6, 70], dist: [1.2, 24] },
    reduced: cb.reduced, lite: cb.lite, capture: cb.capture,
    onTap: cb.onTap, onPress: cb.onPress, onRelease: cb.onRelease,
  });
  if (!stage) return null;
  const { world, pick } = stage;
  const M = kitMaterials();
  // mezzogiorno: il sole alto e caldo entra dalle finestre della parete di fondo, le plafoniere sono a meta'
  M.windowGlow.emissiveIntensity = 1.6;
  const hall = buildHall(stage, M, {
    reduced: cb.reduced,
    sun: { color: 0xfff1da, intensity: 2.4, pos: [6.5, 12, -5] },
    mood: { sun: [1.9, 0.6], cold: 0xffe9c8, warm: 0xfff4e2, env: [0.26, 0.08] },
  });
  hall.rows.forEach(r => hall.setRow(r, 0.45));
  hall.mood();
  hall.tray(PH_X, TRAY_Z, PH_X, PH_Z);           // passerella fino alla fotocellula

  // ---- confezionatrice da cui escono i pacchi, nastro, scivolo, bancale ----
  const belt = conveyor(M, { x0: BELT.x0, x1: BELT.x1, h: BELT.h, w: BELT.w });
  belt.group.position.z = BELT.z;
  world.add(belt.group);
  const hoodX = BELT.x0 + 0.25;
  box(world, M.frame, hoodX - 0.35, 0.9, BELT.z, 1.3, 1.8, 1.2, 0.02);                // corpo della confezionatrice
  box(world, M.modDark, hoodX + 0.31, BELT.h + 0.24, BELT.z, 0.02, 0.48, 0.78, 0.004);  // bocca d'uscita (scura)
  box(world, M.yellow, hoodX + 0.32, BELT.h + 0.52, BELT.z, 0.03, 0.06, 0.9, 0.004);
  textPlane(world, 'Confezionatrice', hoodX - 0.35, 1.55, BELT.z + 0.61, 0.9, 0.12, { bg: '#e3b61f', fg: '#17181a', size: 0.5, dim: 0xffffff });
  // scivolo a rulli verso il bancale
  const slope = Math.atan2(CHUTE.y0 - CHUTE.y1, CHUTE.x1 - CHUTE.x0);
  const chute = new THREE.Group();
  chute.position.set(CHUTE.x0, CHUTE.y0 - 0.05, BELT.z);
  chute.rotation.z = -slope;
  const cl = Math.hypot(CHUTE.x1 - CHUTE.x0, CHUTE.y0 - CHUTE.y1);
  [-1, 1].forEach(sd => box(chute, M.frame, cl / 2, 0, sd * 0.4, cl, 0.06, 0.04, 0.006));
  for (let i = 0; i < 6; i++) cylinder(chute, M.steel, 0.06 + i * (cl - 0.12) / 5, 0.01, 0, 0.025, 0.76, 'z', 12);
  world.add(chute);
  [CHUTE.x0 + 0.05, CHUTE.x1 - 0.05].forEach((x, i) => box(world, M.frame, x, (i ? CHUTE.y1 : CHUTE.y0) / 2 - 0.04, BELT.z + 0.4, 0.04, (i ? CHUTE.y1 : CHUTE.y0) - 0.08, 0.04, 0.005));
  // bancale di legno
  const wood = new THREE.MeshStandardMaterial({ color: 0xa57a4a, roughness: 0.85 });
  [-0.42, 0, 0.42].forEach(dz => box(world, wood, PALLET.x, 0.05, PALLET.z + dz, 1.0, 0.1, 0.12, 0.006));
  [-0.4, -0.13, 0.13, 0.4].forEach(dx => box(world, wood, PALLET.x + dx, 0.12, PALLET.z, 0.12, 0.04, 0.96, 0.004));

  // ---- fotocellula: palo verso la parete, catarifrangente dall'altro lato del nastro ----
  const ph = photoCell(M, BELT.w + 0.2, 0.97);
  ph.group.position.set(PH_X, 0, PH_Z);
  world.add(ph.group);

  // ---- motore in fondo al nastro ----
  const mo = motorUnit(M);
  mo.group.rotation.y = Math.PI;
  mo.group.position.set(BELT.x1, BELT.h - 0.07, 4.35);
  world.add(mo.group);
  box(world, M.frame, BELT.x1, 0.27, 4.35, 0.36, 0.54, 0.46, 0.01);
  cylinder(world, M.steelDark, BELT.x1, BELT.h - 0.07, 3.92, 0.04, 0.12, 'z');

  // ---- torretta, pulsantiera con la spia del lotto, armadio con il PLC ----
  const stack = stackLight(M, 1.45);
  stack.group.position.set(9.6, 0, 2.2);
  world.add(stack.group);
  const station = pushStation(M);
  station.group.position.set(6.4, 0, 5.5);
  station.group.scale.setScalar(1.25);
  world.add(station.group);
  station.picks.forEach(p => pick.push(p));
  const spia = led(0xffffff, 0.028);
  spia.mat.color.setHex(0x3a3a3a); spia.mat.emissive.setHex(0xfff3c4);
  spia.mesh.position.set(0, 1.56, 0.0);
  station.group.add(spia.mesh);
  const panel = cabinetPanel(M);
  panel.group.position.set(3.0, 1.5, 0.07);
  world.add(panel.group);
  panel.picks.forEach(p => pick.push(p));
  const plc = plcModule(M);
  plc.group.position.set(PLC_X - 3.0, PLC_Y - 1.5, 0.05);
  panel.group.add(plc.group);
  // lucchetto con il cartellino dei lavori sul salvamotore aperto (come nell'officina)
  const lock = new THREE.Group();
  lock.position.set(2.7, 1.66, 0.27);
  const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.005, 8, 18, Math.PI), M.steel);
  shackle.position.y = 0.03; lock.add(shackle);
  box(lock, M.red, 0, 0, 0, 0.05, 0.045, 0.022, 0.006);
  const tag = textPlane(lock, 'Lavori in corso', 0, -0.1, 0.015, 0.16, 0.08, { bg: '#f5c400', fg: '#17181a', size: 0.36, dim: 0xffffff });
  tag.material.side = THREE.DoubleSide;
  lock.scale.setScalar(0.0001);
  world.add(lock);

  // ---- i pacchi: in fila sul nastro e sullo scivolo, impilati sul bancale; ombre finte ----
  const pkGeo = new THREE.BoxGeometry(PK.w, PK.h, PK.d);
  const flow = new THREE.InstancedMesh(pkGeo, M.cardboard, N);
  const pile = new THREE.InstancedMesh(pkGeo, M.cardboard, STACK);
  const blobTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d', { willReadFrequently: true });
    const gr = g.createRadialGradient(32, 32, 4, 32, 32, 31); gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  })();
  const blobs = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.7, 0.56).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false }), N + STACK);
  blobs.renderOrder = 1;
  [flow, pile, blobs].forEach(m => { m.castShadow = false; m.receiveShadow = m !== blobs; m.frustumCulled = false; });
  pile.count = 0;
  world.add(flow, pile, blobs);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), qr = new THREE.Quaternion(), v3 = new THREE.Vector3(), sc = new THREE.Vector3(), zAxis = new THREE.Vector3(0, 0, 1);
  qr.setFromAxisAngle(zAxis, -slope);
  const HIDE = new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001);

  // dove sta il pacco con il centro a c metri dall'inizio del nastro: sul nastro, sullo scivolo, oppure gia' sul bancale (null)
  function place(c) {
    const L = BELT.x1 - BELT.x0;
    if (c <= L) return { x: BELT.x0 + c, y: BELT.h + PK.h / 2, rot: false, by: BELT.h + 0.002 };
    const u = (c - L) / CHUTE.len;
    if (u >= 1) return null;
    return { x: CHUTE.x0 + u * (CHUTE.x1 - CHUTE.x0), y: CHUTE.y0 + u * (CHUTE.y1 - CHUTE.y0) + PK.h / 2 - 0.02, rot: true, by: 0.004 };
  }
  // posto sul bancale del pacco j (due strati da quattro)
  function slot(j) {
    const layer = Math.floor(j / 4), i = j % 4;
    return [PALLET.x + (i % 2 ? 0.25 : -0.25), PALLET.y + PK.h / 2 + layer * PK.h, PALLET.z + (i < 2 ? -0.2 : 0.2)];
  }
  let shown = -1, pileShown = -1;
  // i pacchi dal fronte del primo (lead): k = 0, 1, 2 ...; il pacco k ha il fronte a lead - k·gap
  function layout(lead, gap, size, hide = 0) {
    const L = BELT.x1 - BELT.x0;
    const far = L + CHUTE.len + size / 2;
    let k0 = Math.max(0, Math.ceil((lead - size / 2 - far) / gap)), n = 0, b = 0;
    for (let i = 0; i < N; i++) {
      const k = k0 + i, c = lead - k * gap - size / 2;
      const p = c > -size ? place(c) : null;
      if (!p || c < 0.35) { flow.setMatrixAt(i, HIDE); blobs.setMatrixAt(b++, HIDE); continue; }    // ancora nella confezionatrice
      v3.set(p.x, p.y, BELT.z); m4.compose(v3, p.rot ? qr : q, sc.setScalar(1)); flow.setMatrixAt(i, m4);
      v3.set(p.x, p.by, BELT.z); m4.compose(v3, q, sc.setScalar(1)); blobs.setMatrixAt(b++, m4);
      n++;
    }
    // sul bancale: i pacchi arrivati (un bancale ogni otto), meno quelli nascosti dal finale
    const done = Math.max(0, k0 - hide), m = done ? ((done - 1) % STACK) + 1 : 0;
    if (m !== pileShown) {
      pileShown = m; pile.count = m;
      for (let j = 0; j < STACK; j++) {
        if (j < m) { const s = slot(j); v3.set(...s); m4.compose(v3, q, sc.setScalar(1)); pile.setMatrixAt(j, m4); v3.set(s[0], PALLET.y + 0.002, s[2]); m4.compose(v3, q, sc.setScalar(j < 4 ? 0.8 : 0.0001)); blobs.setMatrixAt(N + j, m4); } else blobs.setMatrixAt(N + j, HIDE);
      }
      pile.instanceMatrix.needsUpdate = true;
    }
    flow.instanceMatrix.needsUpdate = true; blobs.instanceMatrix.needsUpdate = true;
    shown = n;
  }

  const wires = createLiveWires({
    add: o => world.add(o), redraw: stage.redraw, reduced: cb.reduced,
    loop: fn => { const end = stage.loop(() => { if (fn() === false) end(); }); },
  });

  stage.label('Nastro', 5.0, 1.3, 3.4, 'room');
  stage.label('Fotocellula', PH_X, 1.35, PH_Z, 'room');
  stage.label('Bancale', PALLET.x, 0.95, PALLET.z, 'room');
  stage.label('Quadro e PLC', 3.0, 2.3, 0.3, 'room');
  stage.label('Pulsantiera', 6.4, 2.25, 5.5, 'room');

  // ---- animazione continua: nastro, pacchi, ventola, allarme ----
  let cur = null, target = 0, running = false, stop = null, last = null, shiftOn = false, alarmUntil = 0, key = '';
  const P = { gap: 1.4, size: 0.48 };
  let hiddenAtShift = 0;
  function tickLoop() {
    if (stop) return;
    stop = stage.loop((t, dt) => {
      // in marcia il nastro corre alla sua velocita' e non supera di troppo il motore; da fermo si riallinea
      if (running || shiftOn) cur = shiftOn ? cur + V * dt : Math.min(cur + V * dt, target + V * 0.55);
      else cur += (target - cur) * Math.min(1, dt * 8);
      if (!running && !shiftOn && Math.abs(target - cur) < 0.002) cur = target;
      layout(cur, P.gap, P.size, shiftOn ? hiddenAtShift : 0);
      if (running || shiftOn) { belt.run(V, dt); mo.spin(6, dt); }
      const alarm = t < alarmUntil;
      if (alarm) stack.set({ yellow: Math.floor(t / 320) % 2 === 0, red: false, green: false });
      else if (key === 'alarm') { key = ''; lights(); }
      if (!running && !shiftOn && !alarm && cur === target) { stop(); stop = null; }
    });
  }
  function lights() {
    const s = last;
    if (!s) return;
    if (shiftOn) { stack.set({ green: true }); return; }
    stack.set({ green: s.motor === 'fwd', red: s.thermal.tripped || s.emergency, yellow: (!s.qm && s.supply) || s.lamp });
  }
  // fermi: pareti, nastro, pulsantiera, armadio, scivolo, bancale, motore, torretta; restano a parte i pacchi, la ventola, la saracinesca
  // il motore qui non vibra: si accorpa tutto tranne la ventola che gira (nell'officina vibra con il pacco incastrato e resta intero)
  stage.finish([mo.cap.parent, hall.shutter, lock, flow, pile, blobs]);

  const viewFor = n => { if (typeof n === 'object') return { ...n }; const v = { ...(VIEWS[n] || VIEWS.insieme) }; if (stage.camera.aspect < 0.9 && (n === 'insieme' || n === 'turno' || !VIEWS[n])) { v.dist = 10.5; v.yaw = 22; } if (stage.camera.aspect < 0.9 && n === 'esterno') v.dist = 13; return v; };
  if (stage.camera.aspect < 0.9) stage.look(viewFor('insieme'), 1);
  let firstWires = true, wiresSig = '';
  const canvas = container.querySelector('canvas');

  return {
    // state = automaticoState(snapshot). Si ridisegna solo se qualcosa e' cambiato: con il processo la sessione manda uno stato
    // ogni mezzo secondo anche a nastro fermo, e a riposo le chiamate di disegno devono essere zero.
    update(s) {
      if (!s) return;
      const prev = last;
      last = s;
      P.gap = s.gap; P.size = s.size;
      target = s.lead;
      // la prima volta, e quando la simulazione riparte (programma o fili cambiati: i pacchi tornano all'inizio), si salta li'
      if (cur === null || target < cur - 0.5) { cur = target; pileShown = -1; layout(cur, P.gap, P.size); stage.moved(); }
      running = s.motor === 'fwd';
      mo.set({ heat: s.thermal.heat * 0.9 });
      station.set(s);
      panel.set(s);
      ph.set(s);
      const plcChanged = plc.set(s.plc);
      spia.set(!!s.lamp || shiftOn, 3.2);
      const lk = s.qm ? 0.0001 : 1;
      if (lock.scale.x !== lk) { lock.scale.setScalar(lk); stage.moved(); }
      if (key !== 'alarm') lights();
      const sig = [s.motor, s.lamp, s.beam, s.qm, s.thermal.tripped, Math.round(s.thermal.heat * 20), s.emergency, s.start, s.stop, s.contactor].join();
      // fili: si ridisegnano solo se cambia qualcosa. La corrente che corre si anima solo a nastro in marcia: il PLC e la spia
      // sono alimentati anche da fermi, e un'animazione continua toglierebbe il riposo (0 chiamate di disegno).
      if (s.wires) {
        const list = officinaWires(s.wires, s.flow).map(d => ({ ...d, current: d.current && running }));
        const ws = list.map(d => d.id + (d.live ? '+' : '-') + (d.current ? '>' : '')).join();
        if (ws !== wiresSig) { wiresSig = ws; wires.sync(list, !firstWires); firstWires = false; }
      }
      s._sig = sig;
      if (running || cur !== target) tickLoop();
      if (!prev || sig !== prev._sig || plcChanged || cur !== target) stage.redraw();
      if (canvas) canvas.setAttribute('aria-label', ['Linea di confezionamento.',
        s.motor === 'fwd' ? 'Il nastro è in marcia.' : 'Il nastro è fermo.',
        s.lamp ? 'La spia del lotto pieno è accesa.' : 'La spia del lotto pieno è spenta.',
        s.beam ? 'Un pacco è davanti alla fotocellula.' : 'Davanti alla fotocellula non c’è nessun pacco.',
        s.plc.on ? 'Il PLC è acceso.' : 'Il PLC è spento.',
        s.emergency ? 'L’emergenza è premuta.' : '', s.thermal.tripped ? 'Il termico è scattato.' : '',
        s.qm ? '' : 'Il salvamotore è aperto: lavori in corso.'].filter(Boolean).join(' '));
    },
    look(name, ms) { stage.look(viewFor(name), ms); },
    // da fuori, a mezzogiorno: la saracinesca e' aperta, si entra dal piazzale
    outside() { hall.setShutter(1); stage.look(viewFor('esterno'), 1); },
    inside() { hall.setShutter(1); },
    // l'arrivo: dal piazzale al nastro; torna quanto dura
    arrival() { stage.look(viewFor('insieme'), 2600); return 2800; },
    // il momento forte: Marcia non fa ripartire il nastro, la torretta lampeggia gialla per qualche secondo
    alert(ms = 2600) { key = 'alarm'; alarmUntil = performance.now() + (cb.reduced ? 0 : ms); tickLoop(); stage.redraw(); },
    // il finale: la linea riparte, i pacchi scorrono e si impilano (solo scena, finche' resta acceso)
    shift(on) {
      shiftOn = !!on;
      if (on) { hiddenAtShift = Math.max(0, Math.ceil((cur - P.size / 2 - (BELT.x1 - BELT.x0 + CHUTE.len + P.size / 2)) / P.gap)); pileShown = -1; stack.set({ green: true }); spia.set(true, 3.2); tickLoop(); }
      else { pileShown = -1; cur = target; layout(cur, P.gap, P.size); if (last) { lights(); spia.set(!!last.lamp, 3.2); } }
      stage.moved(); stage.redraw();
    },
    wires: () => wires,
    stats() {
      const by = {};
      const fr = new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(stage.camera.projectionMatrix, stage.camera.matrixWorldInverse));
      stage.THREE_scene.traverseVisible(o => { if (!o.isMesh && !o.isPoints) return; if (o.frustumCulled && o.geometry.boundingSphere !== undefined && !fr.intersectsObject(o)) return; let p = o, path = ''; while (p && p.parent && !path) { if (p.parent === stage.world) path = p.name || p.type + (p.children.length ? '[' + p.children.length + ']' : ''); p = p.parent; } const k = path + ' · ' + (o.isInstancedMesh ? 'inst ' : '') + (o.material.transparent ? 'trasp ' : '') + o.material.type + (o.material.type === 'ShaderMaterial' ? '' : ' ' + o.geometry.attributes.position.count); by[k] = (by[k] || 0) + 1; });
      return { by, parcels: shown };
    },
    screenOf: stage.screenOf,
    views: Object.keys(VIEWS),
    resize: stage.resize,
    dispose() { if (stop) stop(); stage.dispose(); },
  };
}
