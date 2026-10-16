// Prova del Modulo 6: "Il turno di notte", la cella del robot nel capannone delle prove di reparto, alle 22:00.
// Pacchetto separato (prove3d.js), si carica solo aprendo la prova. Non contiene regole: riceve lo stato osservato
// (fabbricaState) e segnala i tocchi alla pagina. Progetto: docs/PROGETTO-FABBRICA.md; fluidita': docs/SPEC-SCENE-3D.md.
//
// Il motore manda uno stato ogni mezzo secondo e il robot (modello `linea`, tempo x4) in mezzo secondo fa un movimento intero:
// la scena interpola ogni asse dal valore di prima a quello nuovo nello stesso mezzo secondo. I pezzi sono InstancedMesh con
// l'ombra finta: quello in arrivo sul nastro (segue l'attesa del modello), quello in pinza, quelli depositati che se ne vanno.
// A riposo (turno fermo, robot fermo) nessun disegno: si ridisegna solo quando lo stato cambia.

import * as THREE from 'three';
import { createStage } from './kit.js';
import { kitMaterials, box, cylinder, conveyor, stackLight, pushStation, cabinetPanel, led, plcModule } from './parts3d.js';
import { createLiveWires } from './wiring.js';
import { buildHall, NOTTE } from './capannone.js';
import { gantry, cellSensor, CELL } from './parts-cella.js';
import { fence, ksModule, hmiStand } from './parts-reparto.js';
import { fabbricaWires, CELL_C, STATION, HMI_AT, KS_AT, PLC_AT, LAMP_AT, PR_AT } from './fabbrica-wires.js';

const STEP_MS = 500;                                     // tra due stati del motore
const FEED_EVERY = 5;                                    // secondi simulati tra un pezzo e l'altro (parametro feedEvery di `linea`)
const PART = { w: 0.16, h: CELL.partH, d: 0.16 };
const BELT_H = CELL.toolLow - PART.h / 2;                // il pezzo sul nastro sta all'altezza della pinza in basso
const IN = { x: CELL_C.x + CELL.pick, z0: CELL_C.z - 1.05, z1: CELL_C.z + CELL.toolZ + 0.12 };     // nastro di arrivo, verso +z
const OUT = { x: CELL_C.x + CELL.place, z0: CELL_C.z - 1.05, z1: CELL_C.z + CELL.toolZ + 0.12 };   // nastro di uscita, verso -z
const PICK_Z = CELL_C.z + CELL.toolZ;
const FLY = 3;                                           // pezzi depositati in viaggio sul nastro di uscita
// la pulsantiera della pagina copre la meta' bassa dello schermo: i bersagli stanno sotto le cose da guardare, che salgono
const VIEWS = {
  insieme: { tx: 6.0, ty: 0.0, tz: 4.8, yaw: 14, pitch: 32, dist: 13 },
  cella: { tx: 5.8, ty: 0.35, tz: 3.9, yaw: -16, pitch: 22, dist: 6.8 },
  quadro: { tx: 3.0, ty: 1.15, tz: 0.4, yaw: 4, pitch: 4, dist: 3.0 },
  pannello: { tx: HMI_AT.x - 0.1, ty: 0.95, tz: HMI_AT.z, yaw: -14, pitch: 8, dist: 2.3 },
  esterno: { tx: 0.4, ty: 1.5, tz: 6.2, yaw: -78, pitch: 7, dist: 9.5 },
  turno: { tx: 6.0, ty: 1.0, tz: 3.6, yaw: 26, pitch: 34, dist: 11 },
};

/**
 * @param {HTMLElement} container
 * @param {{ onTap:(u:object)=>void, onPress:(u:object)=>void, onRelease:(u:object)=>void, reduced?:boolean, lite?:boolean, capture?:boolean }} cb
 */
export function createFabbrica(container, cb) {
  let last = null;
  // il pannello si tocca per ricollegare il cavo staccato; toccarlo collegato lo staccherebbe: quel tocco non si manda
  const onTap = u => { if (u && u.id === 'HMI' && last && last.panelOn) return; if (cb.onTap) cb.onTap(u); };
  const stage = createStage(container, {
    bg: NOTTE.bg, exposure: 1.25, view: VIEWS.insieme, limits: { yaw: [-50, 50], pitch: [6, 70], dist: [1.5, 24] },
    reduced: cb.reduced, lite: cb.lite, capture: cb.capture,
    onTap, onPress: cb.onPress, onRelease: cb.onRelease,
  });
  if (!stage) return null;
  const { world, pick } = stage;
  const M = kitMaterials();
  const hall = buildHall(stage, M, { ...NOTTE, reduced: cb.reduced });
  hall.mood();

  // ---- la cella: recinzione, portale con i finecorsa, due nastri corti, il sensore "pezzo pronto" ----
  const cell = new THREE.Group();
  cell.position.set(CELL_C.x, 0, CELL_C.z);
  world.add(cell);
  const fen = fence(M);
  cell.add(fen.group);
  fen.picks.forEach(p => pick.push(p));
  const gan = gantry(M);
  cell.add(gan.group);
  gan.picks.forEach(p => pick.push(p));
  const pr = cellSensor(M, { id: 'PR', lever: 0.06, dir: Math.PI / 2 });
  pr.group.scale.setScalar(1.6);
  pr.group.position.set(PR_AT[0], PR_AT[1] - 0.05, PR_AT[2]);
  world.add(pr.group);
  pr.picks.forEach(p => pick.push(p));
  const belts = [IN, OUT].map(b => {
    const c = conveyor(M, { x0: 0, x1: b.z1 - b.z0, h: BELT_H, w: 0.34 });
    c.group.rotation.y = -Math.PI / 2;                    // lungo z
    c.group.position.set(b.x, 0, b.z0);
    world.add(c.group);
    return c;
  });
  M.beltTex.repeat.set(2, 1);
  // targa della cella sul lato della portella
  box(world, M.yellow, CELL_C.x + 1.0, 2.08, CELL_C.z + 1.21, 0.5, 0.12, 0.02, 0.004);

  // ---- pulsantiera (con il Riarmo blu e la spia del ciclo), torretta, pannello operatore ----
  const station = pushStation(M);
  station.group.position.set(STATION.x, 0, STATION.z);
  station.group.scale.setScalar(1.25);
  world.add(station.group);
  // nella cella il fungo di emergenza e' "E" (due canali), non "SBE" come nell'officina
  station.picks.forEach(p => { if (p.userData.id === 'SBE') p.userData = { id: 'E', kind: 'toggle' }; });
  const rst = new THREE.Group();
  rst.position.set(0.128, 1.29, 0.07);
  cylinder(rst, M.modDark, 0, 0, 0, 0.032, 0.014, 'z', 24);
  const rstCap = cylinder(rst, M.modBlue, 0, 0, 0.012, 0.024, 0.022, 'z', 24);
  rstCap.userData = { id: 'SBR', kind: 'hold', hold: true };
  station.group.add(rst);
  box(station.group, M.yellow, 0.128, 1.29, 0.0, 0.08, 0.08, 0.1, 0.008);        // la targa si allarga per il Riarmo
  station.picks.push(rstCap);
  station.picks.forEach(p => pick.push(p));
  const spia = led(0xffffff, 0.028);
  spia.mat.color.setHex(0x3a3a3a); spia.mat.emissive.setHex(0xfff3c4);
  spia.mesh.position.set(0, 1.56, 0.0);
  station.group.add(spia.mesh);
  const stack = stackLight(M, 1.45);
  stack.group.position.set(CELL_C.x + 1.85, 0, CELL_C.z - 1.25);
  world.add(stack.group);
  const hmi = hmiStand(M);
  hmi.group.position.set(HMI_AT.x, 0, HMI_AT.z);
  world.add(hmi.group);
  hmi.picks.forEach(p => pick.push(p));

  // ---- armadio: contattore KM, PLC e relè di sicurezza KS; la spia "robot alimentato" in cima ----
  const panel = cabinetPanel(M, { qm: 'Interruttore', thermal: false });
  panel.group.position.set(3.0, 1.5, 0.07);
  world.add(panel.group);
  panel.picks.forEach(p => pick.push(p));
  const plc = plcModule(M, { wide: true });
  plc.group.position.set(PLC_AT.x - 3.0, PLC_AT.y - 1.5, 0.05);
  plc.group.scale.setScalar(0.7);
  panel.group.add(plc.group);
  const ks = ksModule(M);
  ks.group.position.set(KS_AT.x - 3.0, KS_AT.y - 1.5, 0.05);
  panel.group.add(ks.group);
  const pwr = led(0x2ee66a, 0.02);
  pwr.mesh.position.set(...LAMP_AT);
  world.add(pwr.mesh);

  // ---- i pezzi: in arrivo, in pinza, depositati in viaggio; ombre finte ----
  const partMat = new THREE.MeshStandardMaterial({ color: 0x3f6fb0, metalness: 0.6, roughness: 0.35 });
  const parts = new THREE.InstancedMesh(new THREE.BoxGeometry(PART.w, PART.h, PART.d), partMat, 2 + FLY);
  const blobTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d', { willReadFrequently: true });
    const gr = g.createRadialGradient(32, 32, 4, 32, 32, 31); gr.addColorStop(0, 'rgba(0,0,0,0.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  })();
  const blobs = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.26, 0.26).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false }), 2 + FLY);
  blobs.renderOrder = 1;
  [parts, blobs].forEach(m => { m.castShadow = false; m.frustumCulled = false; });
  world.add(parts, blobs);
  const m4 = new THREE.Matrix4(), v3 = new THREE.Vector3(), tool = new THREE.Vector3();
  const HIDE = new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001);
  const put = (i, x, y, z, blobY) => {
    parts.setMatrixAt(i, m4.makeTranslation(x, y, z));
    blobs.setMatrixAt(i, blobY === null ? HIDE : m4.makeTranslation(x, blobY, z));
  };
  const hide = i => { parts.setMatrixAt(i, HIDE); blobs.setMatrixAt(i, HIDE); };

  const wires = createLiveWires({
    add: o => world.add(o), redraw: stage.redraw, reduced: cb.reduced,
    loop: fn => { const end = stage.loop(() => { if (fn() === false) end(); }); },
  });

  stage.label('Cella del robot', CELL_C.x, 2.5, CELL_C.z, 'room');
  stage.label('Quadro', 3.0, 2.3, 0.3, 'room');
  stage.label('Pulsantiera', STATION.x, 2.25, STATION.z, 'room');
  stage.label('Pannello', HMI_AT.x, 1.85, HMI_AT.z, 'room');

  // ---- movimento: robot interpolato tra due stati, pezzo in arrivo, pezzi depositati, allarme ----
  const R = { from: { x: 0, z: 0, grip: 0, wait: 0 }, to: { x: 0, z: 0, grip: 0, wait: 0 }, cur: { x: 0, z: 0, grip: 0, wait: 0 }, t0: 0 };
  const flying = [];                                     // pezzi depositati: istante di partenza
  let stop = null, alarmUntil = 0, shiftOn = false, running = false;
  function layout(now) {
    const k = Math.min(1, (now - R.t0) / STEP_MS);
    ['x', 'z', 'grip', 'wait'].forEach(a => { R.cur[a] = R.from[a] + (R.to[a] - R.from[a]) * k; });
    gan.move(R.cur.x, R.cur.z, R.cur.grip);
    const s = last;
    // 0: il pezzo al prelievo o in arrivo sul nastro; 1: il pezzo in pinza
    if (s && s.robot.holding) {
      gan.tool(tool); cell.localToWorld(tool);
      put(1, tool.x, tool.y, tool.z, null);
    } else hide(1);
    if (s && s.robot.feed && !s.robot.holding) put(0, IN.x, BELT_H + PART.h / 2, PICK_Z, BELT_H + 0.003);
    else if (s && !s.robot.holding && R.cur.wait > 0) {
      const u = Math.min(1, R.cur.wait / FEED_EVERY);
      put(0, IN.x, BELT_H + PART.h / 2, IN.z0 + 0.1 + (PICK_Z - IN.z0 - 0.1) * u, BELT_H + 0.003);
    } else hide(0);
    for (let i = 0; i < FLY; i++) {
      const f = flying[i];
      if (f === undefined) { hide(2 + i); continue; }
      const u = (now - f) / 2600;
      if (u >= 1) { flying.splice(i, 1); i--; continue; }
      put(2 + i, OUT.x, BELT_H + PART.h / 2, PICK_Z - (PICK_Z - OUT.z0 - 0.08) * u, BELT_H + 0.003);
    }
    for (let i = flying.length; i < FLY; i++) hide(2 + i);
    parts.instanceMatrix.needsUpdate = true; blobs.instanceMatrix.needsUpdate = true;
    return k < 1;
  }
  function tickLoop() {
    if (stop) return;
    stop = stage.loop((t, dt) => {
      const now = performance.now();
      const moving = layout(now);
      if (running) belts.forEach(b => b.run(0.4, dt));
      const alarm = now < alarmUntil;
      if (alarm) stack.set({ red: Math.floor(t / 300) % 2 === 0, yellow: false, green: false });
      else if (stack._alarm) { stack._alarm = false; lights(); }
      if (alarm) stack._alarm = true;
      if (!moving && !running && !alarm && !flying.length) { stop(); stop = null; }
    });
  }
  function lights() {
    const s = last;
    if (!s) return;
    if (shiftOn) { stack.set({ green: true }); return; }
    const alarm = !!(s.hmi && s.hmi.alarms && s.hmi.alarms.some(a => a.state === 'attivo'));
    stack.set({ green: s.cycle && s.powered, yellow: !s.ks && s.supply, red: alarm });
  }
  // fermi: pareti, recinzione, colonne e trave, nastri, pulsantiera, armadio, pannello; restano a parte carrello e portella
  // (si muovono), i pezzi, la saracinesca
  stage.finish([...fen.skip, ...gan.skip, hall.shutter, parts, blobs]);

  const viewFor = n => { if (typeof n === 'object') return { ...n }; const v = { ...(VIEWS[n] || VIEWS.insieme) }; if (stage.camera.aspect < 0.9 && (n === 'insieme' || n === 'turno' || !VIEWS[n])) { v.dist = 10.5; v.yaw = 18; } if (stage.camera.aspect < 0.9 && n === 'cella') Object.assign(v, { ty: 1.0, pitch: 18, dist: 12 }); if (stage.camera.aspect < 0.9 && n === 'esterno') v.dist = 13; return v; };
  if (stage.camera.aspect < 0.9) stage.look(viewFor('insieme'), 1);
  let firstWires = true, wiresSig = '', sig = '', outSeen = null;
  const canvas = container.querySelector('canvas');

  return {
    // state = fabbricaState(snapshot): si ridisegna solo se qualcosa e' cambiato (a riposo zero chiamate di disegno)
    update(s) {
      if (!s) return;
      const prev = last;
      last = s;
      const r = s.robot;
      // l'attesa del pezzo non e' nello stato esposto: si stima dal tempo che passa (2 s simulati a stato) a robot alimentato
      const wait = !r.feed && !r.holding && s.powered && prev ? Math.min(FEED_EVERY, R.to.wait + 2) : 0;
      const tgt = { x: r.x, z: r.z, grip: r.grip, wait };
      const now = performance.now();
      const robotChanged = ['x', 'z', 'grip', 'wait'].some(a => Math.abs(tgt[a] - R.to[a]) > 1e-4);
      if (robotChanged) {
        layout(now);                                     // da dove si e' arrivati adesso
        R.from = { ...R.cur }; R.to = tgt; R.t0 = cb.reduced ? now - STEP_MS : now;
        if (!prev) { R.from = { ...tgt }; R.cur = { ...tgt }; }
      }
      if (outSeen !== null && r.out > outSeen) for (let i = outSeen; i < r.out && flying.length < FLY; i++) flying.push(now);
      outSeen = r.out;
      running = !!(s.cycle && s.powered) && !(s.shift && s.shift.done) && !shiftOn;
      let changed = robotChanged || flying.length > 0;
      if (fen.set(s)) {
        changed = true;
        // la portella gira sul cardine; la sua ombra si ricalcola solo mentre si muove
        const to = s.door ? 1 : 0, from = 1 - to;
        if (!prev || cb.reduced) { fen.doorTo(to); stage.moved(); } else stage.animate(700, k => { fen.doorTo(from + (to - from) * k * k * (3 - 2 * k)); stage.moved(); });
      }
      if (gan.set({ sensors: s.sensors, robot: R.to })) changed = true;     // i finecorsa; il braccio lo muove l'interpolazione
      gan.move(R.cur.x, R.cur.z, R.cur.grip);
      if (pr.set(s)) changed = true;
      if (ks.set(s)) changed = true;
      if (hmi.set(s)) changed = true;
      if (plc.set(s.plc)) changed = true;
      station.set(s);
      rstCap.position.z = s.reset ? 0.004 : 0.012;
      panel.set({ qm: s.supply, contactor: s.contactor, thermal: { tripped: false } });
      pwr.set(!!s.powered, 3.2);
      spia.set(!!s.cycle || shiftOn, 3.2);
      if (!stack._alarm) lights();
      const ns = [s.cycle, s.powered, s.ks, s.door, s.emergency, s.start, s.stop, s.reset, s.contactor, s.panelOn, s.hmi && s.hmi.link, s.hmi && s.hmi.alarms && s.hmi.alarms.map(a => a.state).join('')].join();
      if (ns !== sig) { sig = ns; changed = true; }
      // fili: la corrente si anima solo a ciclo in corso (il PLC e' alimentato anche da fermo: un'animazione continua toglierebbe il riposo)
      if (s.wires) {
        const list = fabbricaWires(s.wires, s.flow).map(d => ({ ...d, current: d.current && running }));
        const ws = list.map(d => d.id + (d.live ? '+' : '-') + (d.current ? '>' : '')).join();
        if (ws !== wiresSig) { wiresSig = ws; wires.sync(list, !firstWires); firstWires = false; }
      }
      if (robotChanged || running || flying.length) tickLoop();
      if (changed) stage.redraw();
      if (canvas) canvas.setAttribute('aria-label', ['Cella del robot, di notte.',
        running ? 'Il robot lavora.' : 'Il robot è fermo.',
        s.powered ? 'Il robot ha potenza.' : 'Il robot è senza potenza.',
        s.door ? 'La portella è aperta.' : '', s.emergency ? 'L’emergenza è premuta.' : '',
        s.panelOn ? '' : 'Il cavo del pannello è staccato.',
        r.holding ? 'Il robot tiene un pezzo.' : ''].filter(Boolean).join(' '));
    },
    look(name, ms) { stage.look(viewFor(name), ms); },
    // da fuori, di notte: saracinesca chiusa e capannone spento
    outside() { hall.setShutter(0); hall.rows.forEach(r => hall.setRow(r, 0)); hall.mood(); stage.look(viewFor('esterno'), 1); },
    inside() { hall.setShutter(1); hall.rows.forEach((r, i) => hall.setRow(r, NOTTE.rowsOn.includes(i) ? 1 : 0)); hall.mood(); },
    // l'arrivo: la saracinesca sale, si accende solo la campata della cella, si entra; torna quanto dura
    arrival() {
      hall.shutterTo(true, 1600);
      setTimeout(() => hall.lampsOn(), cb.reduced ? 0 : 1500);
      setTimeout(() => stage.look(viewFor('insieme'), 2200), cb.reduced ? 0 : 1800);
      return cb.reduced ? 0 : 4100;
    },
    // il momento forte: la torretta lampeggia rossa per qualche secondo
    alert(ms = 2600) { alarmUntil = performance.now() + (cb.reduced ? 0 : ms); stack._alarm = true; tickLoop(); stage.redraw(); },
    // il finale, le 6:00: si accendono tutte le plafoniere per il turno del mattino, la cella resta verde
    shift(on) {
      shiftOn = !!on;
      hall.rows.forEach((r, i) => hall.setRow(r, on || NOTTE.rowsOn.includes(i) ? 1 : 0));
      hall.mood();
      // a turno finito il motore non manda piu' stati: la cella si ferma qui, e la scena torna a riposo (0 disegni)
      if (on) running = false;
      stack._alarm = false; lights(); spia.set(on || !!(last && last.cycle), 3.2);
      stage.redraw();
    },
    wires: () => wires,
    stats() { let n = 0; stage.THREE_scene.traverseVisible(o => { if (o.isMesh || o.isPoints) n++; }); return { meshes: n }; },
    screenOf: stage.screenOf,
    views: Object.keys(VIEWS),
    resize: stage.resize,
    dispose() { if (stop) stop(); stage.dispose(); },
  };
}
