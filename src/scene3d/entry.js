// Pacchetto 3D delle prove dei moduli (prove3d.js): si carica solo aprendo una prova.
// Si espone come window.FaseNeutroProve = { createScene(nome, contenitore, opzioni) }.

import { createAppartamento } from './appartamento.js';
import { createOfficina } from './officina.js';
import { createAutomatico } from './automatico.js';
import { createFabbrica } from './fabbrica.js';

const SCENES = { appartamento: createAppartamento, officina: createOfficina, automatico: createAutomatico, fabbrica: createFabbrica };

if (typeof window !== 'undefined') {
  window.FaseNeutroProve = {
    createScene(name, container, cb) { return SCENES[name] ? SCENES[name](container, cb) : null; },
  };
}
