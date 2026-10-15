// Vista dei fili ("gli occhi dell'elettricista"): i conduttori di ogni linea, dal quadro ai carichi, che si accendono quando
// sono in tensione e mostrano la corrente che scorre. Disegnati sopra la scena (attraverso i muri), con l'alone della resa comune.
// Costo: un tubo per conduttore, un solo materiale-shader ciascuno; si ridisegna solo durante le animazioni.

import * as THREE from 'three';

const VS = `varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
// uFront: quanto del filo e' gia' raggiunto dalla tensione (0..1), dal quadro (uRev = 0) o dal carico (uRev = 1).
// uFlow: intensita' dei trattini che scorrono (la corrente); uDir: verso del moto lungo il filo.
const FS = `uniform vec3 uColor; uniform float uFront, uFlow, uTime, uDir, uLen, uHi, uShow, uRev;
varying vec2 vUv;
void main(){
  float s = uRev > 0.5 ? 1.0 - vUv.x : vUv.x;
  float on = 1.0 - step(uFront, s - 0.0001);
  float d = fract(vUv.x * uLen / 0.42 - uTime * 1.7 * uDir);
  float dash = smoothstep(0.0, 0.12, d) * (1.0 - smoothstep(0.3, 0.45, d));
  // intensita' contenute: oltre 1 la resa schiarisce verso il bianco e i colori dei conduttori non si riconoscono piu'
  vec3 c = uColor * (uShow * 0.09 + on * (0.42 + uFlow * dash * 0.9) + uHi * 0.35);
  gl_FragColor = vec4(c, 1.0);
}`;

const COLORS = { fase: 0xff9f45, neutro: 0x5ea8ff, terra: 0x8fd14f, leak: 0xff5a2a };
const smooth = k => k * k * (3 - 2 * k);

/**
 * @param {{ add:(o)=>void, loop:(fn:(t:number)=>boolean)=>void, animate:(ms:number, step:(k:number)=>void)=>any, redraw:()=>void, reduced?:boolean }} env
 * @param {Record<string, Record<string, number[][]>>} routes  linea -> conduttore -> punti [x, y, z]
 */
export function createWiring(env, routes) {
  const group = new THREE.Group();
  group.renderOrder = 20;
  env.add(group);
  const wires = {};          // 'luce.fase' -> { mesh, u, line, cond, live, flowUntil }
  let show = 1, anim = 0;

  Object.entries(routes).forEach(([line, conds]) => {
    Object.entries(conds).forEach(([cond, pts]) => {
      const path = new THREE.CurvePath();
      for (let i = 1; i < pts.length; i++) path.add(new THREE.LineCurve3(new THREE.Vector3(...pts[i - 1]), new THREE.Vector3(...pts[i])));
      const len = path.getLength();
      const geo = new THREE.TubeGeometry(path, Math.max(24, Math.round(len * 14)), 0.016, 6, false);
      const u = {
        uColor: { value: new THREE.Color(COLORS[cond]) }, uFront: { value: 0 }, uFlow: { value: 0 }, uTime: { value: 0 },
        uDir: { value: cond === 'fase' ? 1 : -1 }, uLen: { value: len }, uHi: { value: 0 }, uShow: { value: show }, uRev: { value: 0 },
      };
      const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: VS, fragmentShader: FS, transparent: true, blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.renderOrder = 20;
      mesh.frustumCulled = false;
      group.add(mesh);
      wires[line + '.' + cond] = { mesh, u, line, cond, live: false, flowUntil: 0 };
    });
  });

  // Un solo ciclo d'animazione per tutti i fili: vive finche' qualcosa si muove, poi la scena torna ferma.
  const targets = new Map();      // wire -> { from, to, t0, ms, rev }
  function kick() {
    if (anim) return;
    anim = 1;
    env.loop(() => {
      const now = performance.now();
      let busy = false;
      Object.values(wires).forEach(w => {
        w.u.uTime.value = now / 1000;
        const t = targets.get(w);
        if (t) {
          const k = Math.min(1, (now - t.t0) / t.ms);
          w.u.uFront.value = t.from + (t.to - t.from) * smooth(k);
          if (k >= 1) targets.delete(w); else busy = true;
        }
        const f = w.flowUntil > now ? 1 : Math.max(0, 1 - (now - w.flowUntil) / 500);
        w.u.uFlow.value = env.reduced ? 0 : f;
        if (f > 0) busy = true;
      });
      if (!busy) { anim = 0; return false; }
      return true;
    });
  }
  function front(w, to, ms, delay = 0, rev = false) {
    w.u.uRev.value = rev ? 1 : 0;
    if (env.reduced) { w.u.uFront.value = to; return; }
    targets.set(w, { from: w.u.uFront.value, to, t0: performance.now() + delay, ms });
  }

  return {
    group,
    // stato di una linea: live = in tensione; flow = passa corrente (trattini per un attimo)
    setLine(line, { live, flow, earth = 0 }) {
      ['fase', 'neutro', 'terra'].forEach(cond => {
        const w = wires[line + '.' + cond];
        if (!w) return;
        const isEarth = cond === 'terra';
        const want = isEarth ? earth > 0 : live;
        if (isEarth) {
          w.u.uColor.value.setHex(COLORS[want ? 'leak' : 'terra']);
          if (want !== w.live) front(w, want ? earth : 0, want ? 520 : 260, want ? 300 : 0, want && earth >= 1);
        } else if (want !== w.live) {
          // la tensione arriva dal quadro sulla fase; sul neutro si vede tornare dal carico
          if (want) front(w, 1, 420, cond === 'neutro' ? 330 : 0, cond === 'neutro');
          else front(w, 0, 280, 0, false);
        }
        if (want && (flow || (isEarth && earth > 0)) && (!w.live || flow === 'again')) w.flowUntil = performance.now() + (isEarth ? 1400 : 1700);
        w.live = want;
      });
      kick(); env.redraw();
    },
    // tutto spento di colpo (lo scatto)
    cut() {
      Object.values(wires).forEach(w => { targets.delete(w); w.u.uFront.value = 0; w.u.uFlow.value = 0; w.flowUntil = 0; w.live = false; w.u.uColor.value.setHex(COLORS[w.cond]); });
      env.redraw();
    },
    highlight(line) { Object.values(wires).forEach(w => (w.u.uHi.value = w.line === line ? 1 : 0)); env.redraw(); },
    setVisible(on) { show = on ? 1 : 0; group.visible = !!on; Object.values(wires).forEach(w => (w.u.uShow.value = show)); env.redraw(); },
  };
}

// Scintille della dispersione: una nuvola di punti che sale e si allarga, solo durante la sequenza.
export function createSparks(env, at, count) {
  const n = count || 40;
  const pos = new Float32Array(n * 3), seed = new Float32Array(n);
  for (let i = 0; i < n; i++) { seed[i] = Math.random(); pos[i * 3] = (Math.random() - 0.5) * 0.2; pos[i * 3 + 1] = Math.random() * 0.3; pos[i * 3 + 2] = (Math.random() - 0.5) * 0.12; }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const u = { uTime: { value: 0 }, uColor: { value: new THREE.Color(0xff6a1a) } };
  const mat = new THREE.ShaderMaterial({
    uniforms: u, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    vertexShader: `attribute float aSeed; uniform float uTime; varying float vA;
      void main(){ float t = fract(uTime * (0.9 + aSeed) + aSeed); vec3 p = position * (1.0 + t * 2.0); p.y += t * 0.45;
        vA = 1.0 - t; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = (3.0 + aSeed * 4.0) * (14.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uColor; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(uColor * 3.0 * vA * (1.0 - d * 2.0), 1.0); }`,
  });
  const pts = new THREE.Points(geo, mat);
  pts.position.set(...at);
  pts.visible = false;
  pts.frustumCulled = false;
  pts.renderOrder = 21;
  env.add(pts);
  let anim = 0;
  return {
    play(ms) {
      pts.visible = true;
      if (anim) return;
      const t0 = performance.now();
      anim = env.animate(ms, k => { u.uTime.value = (performance.now() - t0) / 1000; if (k >= 1) { pts.visible = false; anim = 0; } });
    },
    stop() { pts.visible = false; env.redraw(); },
  };
}

// Fili posati dal giocatore (trilocale): seguono i fili del banco. Ogni filo nuovo si stende dal primo morsetto al secondo;
// alla verifica riuscita la corrente ci corre sopra. Stesso materiale della vista dei fili, colore del filo scelto sul banco.
const WIRE_HEX = { marrone: 0xff9f45, blu: 0x5ea8ff, gv: 0x8fd14f, nero: 0xb7c0d0, grigio: 0xd6d9df, rosso: 0xff5a5a };
export function createWireSet(env) {
  const group = new THREE.Group();
  group.renderOrder = 20;
  env.add(group);
  const wires = new Map();           // id -> { mesh, u, born }
  let running = false, flowUntil = 0;
  function tick() {
    if (running) return;
    running = true;
    env.loop(() => {
      const now = performance.now();
      let busy = false;
      wires.forEach(w => {
        w.u.uTime.value = now / 1000;
        if (w.born) { const k = Math.min(1, (now - w.born) / 520); w.u.uFront.value = k * k * (3 - 2 * k); if (k >= 1) w.born = 0; else busy = true; }
        const f = flowUntil > now ? 1 : Math.max(0, 1 - (now - flowUntil) / 600);
        w.u.uFlow.value = env.reduced ? 0 : f;
        if (f > 0) busy = true;
      });
      if (!busy) { running = false; return false; }
      return true;
    });
  }
  function make(pts, color) {
    const path = new THREE.CurvePath();
    for (let i = 1; i < pts.length; i++) path.add(new THREE.LineCurve3(new THREE.Vector3(...pts[i - 1]), new THREE.Vector3(...pts[i])));
    const len = path.getLength();
    const geo = new THREE.TubeGeometry(path, Math.max(16, Math.round(len * 12)), 0.016, 6, false);
    const u = {
      uColor: { value: new THREE.Color(WIRE_HEX[color] || 0xffffff) }, uFront: { value: env.reduced ? 1 : 0 }, uFlow: { value: 0 }, uTime: { value: 0 },
      uDir: { value: 1 }, uLen: { value: len }, uHi: { value: 0 }, uShow: { value: 1 }, uRev: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: VS, fragmentShader: FS, transparent: true, blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 20; mesh.frustumCulled = false;
    return { mesh, u };
  }
  return {
    // list: [{ id, pts, color }]: si aggiungono i nuovi (con la posa animata) e si tolgono quelli che non ci sono piu'
    sync(list, animateNew = true) {
      const keep = new Set();
      list.forEach(w => {
        keep.add(w.id);
        if (wires.has(w.id)) return;
        const m = make(w.pts, w.color);
        group.add(m.mesh);
        wires.set(w.id, { ...m, born: animateNew && !env.reduced ? performance.now() : 0 });
        if (!animateNew || env.reduced) m.u.uFront.value = 1;
      });
      wires.forEach((w, id) => { if (!keep.has(id)) { group.remove(w.mesh); w.mesh.geometry.dispose(); w.mesh.material.dispose(); wires.delete(id); } });
      tick(); env.redraw();
    },
    // la corrente corre sui fili posati (verifica riuscita)
    flow(ms = 2200) { flowUntil = performance.now() + ms; tick(); },
    setVisible(on) { group.visible = !!on; env.redraw(); },
    clear() { this.sync([]); },
  };
}
