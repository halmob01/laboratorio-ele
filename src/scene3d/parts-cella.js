// Pezzi 3D della cella del robot (prova del Modulo 6, la fabbrica): il portale con carrello, asta e pinza, e i finecorsa del
// braccio con il LED. Contratto comune dei pezzi in docs/PROGETTO-FABBRICA.md (fase 3): ogni pezzo riceve i materiali del kit e
// ritorna { group, picks, set(stato), skip }; `set` legge `fabbricaState` (src/prove/state.js) e ritorna true se ha cambiato
// qualcosa da ridisegnare. Nessuna regola: posizione del braccio e LED sono quelli che il motore osserva.
//
// Coordinate in metri, origine a terra al centro della cella, fronte verso +z. Il portale corre lungo x tra il prelievo
// (x = -1,1) e il deposito (x = +1,1); l'asta scende di 0,8 m (z del modello `linea`: 0 in alto, 1 in basso).

import * as THREE from 'three';
import { box, cylinder, led } from './parts3d.js';

// toolTop / toolLow: altezza della pinza con l'asta in alto e in basso (il pezzo sul nastro di prelievo sta a toolLow)
export const CELL = { pick: -1.1, place: 1.1, beamY: 2.2, stroke: 0.8, toolTop: 1.7, toolLow: 0.9, toolZ: 0.22, partH: 0.14 };

// Finecorsa a leva con il LED: corpo grigio, leva con la rotella, LED giallo acceso quando e' azionato (come lo vede il PLC).
// Toccabile per la sostituzione: userData = { id, kind: 'repair' }. o = { id, lever: lunghezza della leva, dir: verso della leva }
export function cellSensor(M, o) {
  const g = new THREE.Group();
  const body = box(g, M.modGrey, 0, 0, 0, 0.06, 0.09, 0.05, 0.006);
  const head = box(g, M.modDark, 0, 0.055, 0, 0.04, 0.02, 0.04, 0.004);
  const arm = new THREE.Group();
  arm.position.set(0, 0.06, 0);
  const L = o.lever || 0.07;
  box(arm, M.steel, 0, L / 2, 0, 0.008, L, 0.008, 0.002);
  cylinder(arm, M.red, 0, L, 0, 0.012, 0.012, 'z', 12);
  if (o.dir) arm.rotation.z = o.dir;
  g.add(arm);
  const lamp = led(0xffc61a, 0.009);
  lamp.mesh.position.set(0, 0.015, 0.027);
  g.add(lamp.mesh);
  [body, head].forEach(m => { m.userData = { id: o.id, kind: 'repair' }; });
  let last = null;
  return {
    group: g, picks: [body, head], arm,
    set(s) {
      const on = !!(s && s.sensors && s.sensors[o.id] && s.sensors[o.id].act);
      if (on === last) return false;
      last = on;
      lamp.set(on, 3.4);
      arm.rotation.x = on ? 0.35 : 0;          // la leva si piega quando il finecorsa e' azionato
      return true;
    },
  };
}

// Portale del robot: due colonne, la trave, il carrello che scorre in x, l'asta che scende, la pinza a due dita.
// I finecorsa del braccio sono montati sopra: XP e XL in cima alle colonne (li tocca il carrello), ZU e ZD sul carrello
// (li tocca l'asta). In `skip` solo il carrello (con asta, dita e i due finecorsa che porta); il resto si accorpa.
// tool(): posizione della pinza nel gruppo (serve alla scena per il pezzo in presa).
export function gantry(M) {
  const g = new THREE.Group();
  const orange = new THREE.MeshStandardMaterial({ color: 0xe0761f, roughness: 0.45, metalness: 0.2 });
  const X0 = -1.45, X1 = 1.45, Y = CELL.beamY;
  // colonne con la piastra a terra
  [X0, X1].forEach(x => {
    box(g, M.steelDark, x, 0.015, 0, 0.32, 0.03, 0.32, 0.004);
    box(g, orange, x, Y / 2, 0, 0.12, Y, 0.12, 0.01);
  });
  // trave con la guida
  box(g, orange, 0, Y + 0.08, 0, X1 - X0 + 0.12, 0.16, 0.16, 0.012);
  box(g, M.steel, 0, Y - 0.005, 0.085, X1 - X0 - 0.1, 0.02, 0.012, 0.003);
  box(g, M.steelDark, 0, Y + 0.17, 0, X1 - X0 - 0.2, 0.025, 0.06, 0.004);     // catena portacavi
  // carrello: si muove lungo x
  const carriage = new THREE.Group();
  carriage.position.set(CELL.pick, Y, 0.14);
  box(carriage, M.modGrey, 0, 0.02, 0, 0.26, 0.22, 0.12, 0.012);
  box(carriage, M.modDark, 0, 0.16, -0.02, 0.12, 0.08, 0.08, 0.008);            // motore dell'asse x
  // asta: scende dentro il carrello
  const rod = new THREE.Group();
  carriage.add(rod);
  // l'asta attraversa il carrello: in alto sporge sopra la trave, in basso porta la pinza (al pezzo sul nastro, a circa 0,9 m)
  cylinder(rod, M.steel, 0, 0.175, 0.08, 0.022, 1.25, 'y', 14);
  box(rod, M.modDark, 0, -0.44, 0.08, 0.12, 0.05, 0.1, 0.008);                 // testa della pinza
  const fingers = [-1, 1].map(sd => box(rod, M.steelDark, sd * 0.06, -0.5, 0.08, 0.02, 0.12, 0.06, 0.004));
  g.add(carriage);
  // finecorsa: XP e XL sulle colonne, ZU e ZD sul carrello
  const sensors = {
    XP: cellSensor(M, { id: 'XP', dir: -Math.PI / 2 }),
    XL: cellSensor(M, { id: 'XL', dir: Math.PI / 2 }),
    ZU: cellSensor(M, { id: 'ZU' }),
    ZD: cellSensor(M, { id: 'ZD' }),
  };
  // un po' piu' grandi del vero: il LED si deve leggere dalla vista d'insieme della cella
  Object.values(sensors).forEach(x => x.group.scale.setScalar(1.6));
  sensors.XP.group.position.set(CELL.pick - 0.2, Y - 0.12, 0.2);
  sensors.XL.group.position.set(CELL.place + 0.2, Y - 0.12, 0.2);
  sensors.ZU.group.position.set(0.17, 0.06, 0.1);
  sensors.ZD.group.position.set(0.17, -0.2, 0.1);
  g.add(sensors.XP.group, sensors.XL.group);
  carriage.add(sensors.ZU.group, sensors.ZD.group);
  const picks = Object.values(sensors).flatMap(x => x.picks);
  // ombra finta sotto il carrello: una macchia sul pavimento che lo segue (niente ombre da ricalcolare)
  const blob = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const gc = c.getContext('2d', { willReadFrequently: true });
    const gr = gc.createRadialGradient(32, 32, 4, 32, 32, 31); gr.addColorStop(0, 'rgba(0,0,0,0.45)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    gc.fillStyle = gr; gc.fillRect(0, 0, 64, 64);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
    m.position.set(CELL.pick, 0.006, 0.22); m.renderOrder = 1;
    return m;
  })();
  g.add(blob);
  [carriage, rod].forEach(o => o.traverse(m => { if (m.isMesh) m.castShadow = false; }));
  let key = '';
  const place = (x, z, grip) => {
    carriage.position.x = CELL.pick + (CELL.place - CELL.pick) * x;
    rod.position.y = -CELL.stroke * z;
    const gap = 0.095 - 0.045 * grip;                       // dita aperte 0,095, chiuse sul pezzo 0,05
    fingers[0].position.x = -gap; fingers[1].position.x = gap;
    blob.position.x = carriage.position.x;
  };
  place(0, 0, 0);
  return {
    group: g, picks, sensors, skip: [carriage, blob],
    // movimento continuo: la scena interpola tra due stati del motore e chiama move a ogni passo di animazione
    move(x, z, grip) { place(x, z, grip); },
    set(s) {
      let changed = false;
      Object.values(sensors).forEach(x => { if (x.set(s)) changed = true; });
      const r = (s && s.robot) || { x: 0, z: 0, grip: 0 };
      const k = [r.x, r.z, r.grip].map(v => Math.round(v * 1000)).join();
      if (k !== key) { key = k; place(r.x, r.z, r.grip); changed = true; }
      return changed;
    },
    // posizione della pinza (il centro del pezzo in presa) nelle coordinate del gruppo
    tool(out = new THREE.Vector3()) { return out.set(carriage.position.x, CELL.beamY + rod.position.y - 0.5, 0.22); },
  };
}
