// Pacchetto delle scene 3D delle prove dei moduli: si espone come window.FaseNeutroProve = { createProva }.
// Separato da index.html: si carica solo aprendo una prova (src/prove3d/page.js).

import { supported } from './kit.js';
import { createNotte } from './notte.js';
import { createOfficina } from './officina.js';

const SCENES = { 'p01-notte': createNotte, 'p02-officina': createOfficina };

/**
 * @param {HTMLElement} container
 * @param {string} levelId   'p01-notte' | 'p02-officina'
 * @param {object} cb        onControl(id), onPress(id), onRelease(id), onReset(id), onOverload(), onRewind(), reduced, lite
 * @returns {{ update(snapshot), overview(), focus(name), dispose() } | null}
 */
function createProva(container, levelId, cb = {}) {
  if (!supported() || !SCENES[levelId]) return null;
  try { return SCENES[levelId](container, cb); } catch (e) { return null; }
}

window.FaseNeutroProve = { createProva };
