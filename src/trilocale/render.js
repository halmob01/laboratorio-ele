// Resa comune delle scene 3D (trilocale, appartamento, officina): post-elaborazione, qualita' adattiva e oggetti fermi accorpati.
// Lo scopo e' la fluidita' senza cambiare l'aspetto: si risparmia dove l'occhio non vede la differenza
// (occlusione ambientale a meta' risoluzione, ombre ridisegnate solo quando qualcosa si sposta, meno chiamate di disegno)
// e si scende di qualita' a gradini solo se il dispositivo, misurato, non ce la fa.

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// Telefono o schermo piccolo: niente occlusione ambientale, ombre piu' leggere, meno punti.
export function isLite(container, forced) {
  if (forced !== undefined) return forced;
  return (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || container.clientWidth < 700;
}
// Oltre 1,5 punti per pixel, con l'antialiasing, la differenza non si vede ma il costo cresce col quadrato.
export const pixelRatio = lite => Math.min(window.devicePixelRatio || 1, lite ? 1.25 : 1.5);

/**
 * Catena di disegno: scena (con antialiasing), occlusione ambientale (solo computer), alone, uscita.
 * @returns {{ composer, render():void, setSize(w:number,h:number):void, watch(t:number, moving:boolean):void, level:()=>number, dispose():void }}
 */
export function createPipeline(renderer, scene, camera, { lite, bloom = 0.45 }) {
  const half = renderer.extensions.has('EXT_color_buffer_half_float') || renderer.extensions.has('EXT_color_buffer_float');
  const rt = new THREE.WebGLRenderTarget(1, 1, { type: half ? THREE.HalfFloatType : THREE.UnsignedByteType, samples: lite ? 2 : 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  let gtao = null;
  if (!lite) {
    gtao = new GTAOPass(scene, camera, 1, 1);
    gtao.blendIntensity = 0.85;
    gtao.updateGtaoMaterial({ radius: 0.35, distanceExponent: 1.5, thickness: 1, scale: 1 });
    // a meta' risoluzione: e' un'ombra morbida e passa dal filtro che la ammorbidisce, la differenza non si vede e costa un quarto
    const setSize = gtao.setSize.bind(gtao);
    gtao.setSize = (w, h) => setSize(Math.max(1, Math.ceil(w / 2)), Math.max(1, Math.ceil(h / 2)));
    composer.addPass(gtao);
  }
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), bloom, 0.45, 1.0);
  composer.addPass(bloomPass);
  composer.addPass(new OutputPass());

  // Gradini della qualita' adattiva, dal meno visibile al piu' visibile.
  const samples = n => [composer.renderTarget1, composer.renderTarget2].forEach(t => { if (t.samples !== n) { t.samples = n; t.dispose(); } });
  const steps = [
    gtao ? () => { gtao.enabled = false; } : null,
    renderer.getPixelRatio() > 1 ? () => { renderer.setPixelRatio(1); composer.setPixelRatio(1); } : null,
    () => samples(lite ? 0 : 2),
    lite ? null : () => samples(0),
  ].filter(Boolean);
  let level = 0, lastT = 0, slow = 0, seen = 0, size = [1, 1];
  function setSize(w, h) { size = [w, h]; composer.setSize(w, h); }
  // Si misura solo mentre qualcosa si muove (camera, luci, nastro): sono i momenti in cui un fotogramma lento si vede.
  function watch(t, moving) {
    const dt = t - lastT; lastT = t;
    if (!moving || level >= steps.length || dt > 400 || dt <= 0) { if (!moving) lastT = 0; return; }
    seen++; if (dt > 40) slow++;
    if (seen < 24) return;
    if (slow >= 10) { steps[level++](); setSize(size[0], size[1]); }
    seen = 0; slow = 0;
  }
  return {
    composer, setSize, watch,
    render() { composer.render(); },
    level: () => level,
    dispose() { if (gtao) gtao.dispose(); bloomPass.dispose(); composer.dispose(); rt.dispose(); },
  };
}

/**
 * Accorpa gli oggetti che non si muovono mai: una sola chiamata di disegno per materiale invece di una per oggetto.
 * Conta il doppio con le ombre, che ridisegnano la scena dal sole e da ogni lampada.
 * Restano separati: oggetti con userData (toccabili o da ritrovare), quelli in `skip` con tutto il loro contenuto,
 * i materiali trasparenti (l'ordine di disegno conta) e gli invisibili.
 * @returns {number} oggetti accorpati
 */
export function mergeStatic(root, skip = []) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const skipSet = new Set(skip);
  const groups = new Map();
  const visit = o => {
    if (skipSet.has(o) || !o.visible || Object.keys(o.userData).length) return;
    if (o.isMesh && !o.isInstancedMesh && !o.isSkinnedMesh && !Array.isArray(o.material) && !o.material.transparent && !o.morphTargetInfluences) {
      const key = o.material.uuid + (o.castShadow ? 'c' : '') + (o.receiveShadow ? 'r' : '');
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(o);
    }
    o.children.forEach(visit);
  };
  root.children.slice().forEach(visit);
  let n = 0;
  const m4 = new THREE.Matrix4();
  groups.forEach(list => {
    if (list.length < 2) return;
    const geos = list.map(m => {
      const g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
      if (!g.attributes.position || !g.attributes.normal || !g.attributes.uv) return null;
      Object.keys(g.attributes).forEach(k => { if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k); });
      g.clearGroups();
      g.applyMatrix4(m4.multiplyMatrices(inv, m.matrixWorld));
      return g;
    });
    if (geos.some(g => !g)) return;
    const merged = mergeGeometries(geos, false);
    geos.forEach(g => g.dispose());
    if (!merged) return;
    const one = new THREE.Mesh(merged, list[0].material);
    one.castShadow = list[0].castShadow;
    one.receiveShadow = list[0].receiveShadow;
    root.add(one);
    list.forEach(m => m.parent.remove(m));
    n += list.length;
  });
  return n;
}
