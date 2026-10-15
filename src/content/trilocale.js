// Modulo 1, Il trilocale: stanze, circuiti e unita' didattiche.
// I tre circuiti sono livelli come gli altri (stesso formato di levels.js), derivati da c03, c05 e c06
// con i nomi dei componenti legati alla casa. Gli identificativi (t01...) non compaiono nel sito.
// Le misure della casa sono in metri: x verso destra, z verso il basso (pianta vista dall'alto).

import { LEVELS } from './levels.js';

const base = id => LEVELS.find(l => l.id === id);
const rename = (comps, names) => comps.map(c => (names[c.id] ? { ...c, ...names[c.id] } : c));

const bagno = {
  ...base('c03-interrotto'),
  id: 't01-bagno', quadroOnly: true, code: 't01', n: 0, name: 'Bagno', title: 'Il bagno',
  blurb: 'Punto luce interrotto, con l’interruttore vicino alla porta.',
  goal: 'Cabla il punto luce del bagno: un interruttore vicino alla porta accende e spegne la lampada.',
  comps: rename(base('c03-interrotto').comps, { S: { short: 'Interruttore', title: 'Interruttore del bagno', where: 'Porta' }, L: { short: 'Lampada', title: 'Lampada del bagno' } }),
};
const camera = {
  ...base('c05-deviato'),
  id: 't02-camera', quadroOnly: true, code: 't02', n: 0, name: 'Camera', title: 'La camera',
  blurb: 'Punto luce deviato, dalla porta e dal comodino.',
  goal: 'Cabla il punto luce della camera: si accende e si spegne dalla porta e dal comodino.',
  comps: rename(base('c05-deviato').comps, { D1: { short: 'Deviatore porta', title: 'Deviatore della porta', where: 'Porta' }, D2: { short: 'Deviatore comodino', title: 'Deviatore del comodino', where: 'Comodino' }, L: { short: 'Lampada', title: 'Lampada della camera' } }),
};
const corridoio = {
  ...base('c06-invertito'),
  id: 't03-corridoio', quadroOnly: true, code: 't03', n: 0, name: 'Corridoio', title: 'Il corridoio',
  blurb: 'Punto luce invertito, da tre punti.',
  goal: 'Cabla il punto luce del corridoio: si comanda dall’ingresso, dal soggiorno e dalla camera.',
  comps: rename(base('c06-invertito').comps, { D1: { short: 'Deviatore ingresso', title: 'Deviatore dell’ingresso', where: 'Ingresso' }, I: { short: 'Invertitore soggiorno', title: 'Invertitore del soggiorno', where: 'Soggiorno' }, D2: { short: 'Deviatore camera', title: 'Deviatore della camera', where: 'Camera' }, L: { short: 'Lampada', title: 'Lampada del corridoio' } }),
};

export const TRILOCALE_LEVELS = [bagno, camera, corridoio];

// Stesso schema di disposizione dei livelli da cui derivano (vedi src/ui2d/layout.js).
export const TRILOCALE_LAYOUT_OF = { 't01-bagno': 'c03-interrotto', 't02-camera': 'c05-deviato', 't03-corridoio': 'c06-invertito' };

// Stanze: x, z, w, d in metri. `circuit` e' il livello che comanda la lampada della stanza;
// `lamp` la posizione della lampada; `controls` mette ogni comando del circuito sul muro.
export const HOUSE = {
  size: { w: 9, d: 8 },
  rooms: [
    { id: 'cucina', name: 'Cucina', x: 0, z: 0, w: 3, d: 3.5, scene: true },
    { id: 'bagno', name: 'Bagno', x: 3, z: 0, w: 2, d: 3.5, circuit: 't01-bagno', lamp: [4, 1.75] },
    { id: 'camera', name: 'Camera', x: 5, z: 0, w: 4, d: 3.5, circuit: 't02-camera', lamp: [7, 1.75] },
    { id: 'corridoio', name: 'Corridoio', x: 0, z: 3.5, w: 9, d: 1.5, circuit: 't03-corridoio', lamp: [4.5, 4.25] },
    { id: 'ingresso', name: 'Ingresso', x: 0, z: 5, w: 2.5, d: 3, scene: true },
    { id: 'soggiorno', name: 'Soggiorno', x: 2.5, z: 5, w: 6.5, d: 3, scene: true },
  ],
  // Comandi sui muri: x, z, lato del muro verso cui guarda la piastrina ('n' | 's' | 'e' | 'w').
  controls: {
    't01-bagno': { S: { x: 3.3, z: 3.5, face: 's', label: 'Interruttore bagno' } },
    't02-camera': { D1: { x: 5.4, z: 3.5, face: 's', label: 'Porta camera' }, D2: { x: 9, z: 1.4, face: 'w', label: 'Comodino' } },
    't03-corridoio': {
      D1: { x: 0, z: 4.25, face: 'e', label: 'Ingresso' },
      I: { x: 4, z: 5, face: 's', label: 'Soggiorno' },
      D2: { x: 9, z: 4.25, face: 'w', label: 'Camera' },
    },
  },
  breaker: { x: 0, z: 6.5, face: 'e', label: 'Quadro' },
  // Muri: segmenti orizzontali [z, x1, x2] e verticali [x, z1, z2], con le aperture delle porte.
  wallsH: [[0, 0, 9], [3.5, 0, 1], [3.5, 2, 3.9], [3.5, 4.8, 6], [3.5, 7, 9], [5, 0, 1.6], [5, 2.4, 5], [5, 6, 9], [8, 0, 9]],
  wallsV: [[0, 0, 8], [9, 0, 8], [3, 0, 3.5], [5, 0, 3.5], [2.5, 5, 6], [2.5, 7, 8]],
  // Arredi a blocchi: x, z, w, d, h, colore.
  furniture: [
    { room: 'camera', x: 7.3, z: 0.3, w: 1.5, d: 2, h: 0.5, c: '#B9A58A' },
    { room: 'camera', x: 8.5, z: 1.1, w: 0.4, d: 0.5, h: 0.5, c: '#9C8666' },
    { room: 'bagno', x: 3.2, z: 0.2, w: 1.6, d: 0.6, h: 0.45, c: '#E9EEF0' },
    { room: 'bagno', x: 4.0, z: 2.4, w: 0.9, d: 0.9, h: 0.15, c: '#CFE0E8' },
    { room: 'soggiorno', x: 3.5, z: 6.7, w: 2.4, d: 0.9, h: 0.5, c: '#8A94A3' },
    { room: 'soggiorno', x: 6.3, z: 5.8, w: 1.4, d: 1.0, h: 0.4, c: '#B9A58A' },
    { room: 'cucina', x: 0.2, z: 0.2, w: 2.6, d: 0.6, h: 0.9, c: '#D8D2C4' },
  ],
};

const SINTESI_BAGNO = [
  'L’interruttore del bagno sta sul filo di fase, tra il quadro e la lampada.',
  'Il neutro va diretto alla lampada.',
  'Si cabla come nel livello dell’interruttore.',
];
const SINTESI_CAMERA = [
  'Due deviatori comandano la stessa lampada: porta e comodino.',
  'I due fili di collegamento vanno 1 con 1 e 2 con 2.',
  'La fase entra nel comune del primo; il comune del secondo va alla lampada.',
];
const SINTESI_CORRIDOIO = [
  'Tre punti di comando: ingresso, soggiorno e camera.',
  'L’invertitore sta in mezzo ai due fili di collegamento tra i deviatori.',
  'Ogni comando cambia lo stato della luce.',
];

const intro = (title, text, ref) => ({
  type: 'spiegazione',
  title,
  paras: [text, ref],
});

export const TRILOCALE_UNITS = {
  't01-bagno': {
    support: 'passi',
    lesson: { pages: [intro('Il bagno', 'Un punto luce con un interruttore vicino alla porta. Lo hai già fatto: qui lo ritrovi dentro una casa vera.', 'Se ti serve, ripassa la lezione del punto luce interrotto dalla mappa.'), { type: 'sintesi', title: 'Da ricordare' }] },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['S.a'], color: 'marrone', short: '1 Fase', title: 'Porta la fase all’interruttore', text: 'Dalla FASE del quadro al morsetto 1 dell’interruttore.' },
      { kind: 'wire', from: 'S.b', to: ['L.A'], color: 'marrone', short: '2 Lampada', title: 'Dall’interruttore alla lampada', text: 'Dal morsetto 2 dell’interruttore a un morsetto della lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '3 Neutro', title: 'Il neutro va diretto', text: 'Dal NEUTRO all’altro morsetto della lampada.' },
      { kind: 'power', short: '4 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi prova l’interruttore.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: SINTESI_BAGNO,
  },
  't02-camera': {
    support: 'passi',
    lesson: { pages: [intro('La camera', 'Un punto luce che si comanda dalla porta e dal comodino, con due deviatori.', 'Se ti serve, ripassa la lezione del punto luce deviato dalla mappa.'), { type: 'sintesi', title: 'Da ricordare' }] },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['D1.C'], color: 'marrone', short: '1 Fase', title: 'La fase entra nel primo deviatore', text: 'Dalla FASE al comune C del deviatore della porta.' },
      { kind: 'wire', from: 'D1.1', to: ['D2.1'], color: 'nero', short: '2 Collegamento 1', title: 'Primo filo di collegamento', text: 'Dal morsetto 1 del primo deviatore al morsetto 1 del secondo.' },
      { kind: 'wire', from: 'D1.2', to: ['D2.2'], color: 'grigio', short: '3 Collegamento 2', title: 'Secondo filo di collegamento', text: 'Dal morsetto 2 del primo deviatore al morsetto 2 del secondo.' },
      { kind: 'wire', from: 'D2.C', to: ['L.A'], color: 'marrone', short: '4 Lampada', title: 'Dal secondo deviatore alla lampada', text: 'Dal comune C del deviatore del comodino alla lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '5 Neutro', title: 'Il neutro va diretto', text: 'Dal NEUTRO all’altro morsetto della lampada.' },
      { kind: 'power', short: '6 Levetta', title: 'Dai corrente', text: 'Tocca la levetta, poi prova i due deviatori.' },
      { kind: 'verify', short: '7 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: SINTESI_CAMERA,
  },
  't03-corridoio': {
    support: 'obiettivo',
    lesson: { pages: [intro('Il corridoio', 'Un punto luce che si comanda da tre punti: ingresso, soggiorno e camera.', 'Se ti serve, ripassa la lezione del punto luce invertito dalla mappa.'), { type: 'sintesi', title: 'Da ricordare' }] },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['D1.C'], color: 'marrone', short: '1 Fase', title: 'La fase entra nel deviatore dell’ingresso', text: 'Dalla FASE al comune C del deviatore dell’ingresso.' },
      { kind: 'verify', short: '2 Verifica', title: 'Collega i tre punti di comando', text: 'Collega il deviatore dell’ingresso ai morsetti 1 e 2 dell’invertitore, poi i morsetti 3 e 4 al deviatore della camera. Il comune C di quest’ultimo va alla lampada, il neutro va diretto alla lampada. Dai corrente, prova i tre comandi e premi Verifica.' },
    ],
    summary: SINTESI_CORRIDOIO,
  },
};

// Cornice a tutto schermo del trilocale (src/trilocale/page.js): l'ordine di lavoro, il collaudo di ogni stanza, il finale.
export const TRILOCALE_FRAME = {
  kick: 'Modulo 1 · il primo impianto',
  title: 'Il trilocale',
  order: {
    label: 'Ordine di lavoro',
    where: 'Via Roma 12, trilocale nuovo',
    text: '«La casa è finita, mancano i punti luce: bagno, camera e corridoio. Consegna entro sera.»',
  },
  pick: 'Scegli una stanza: tocca la lampada da cablare.',
  rooms: {
    't01-bagno': { kind: 'Punto luce interrotto', collaudo: 'Collaudo: accendi e spegni dalla porta.' },
    't02-camera': { kind: 'Punto luce deviato', collaudo: 'Collaudo: prova dalla porta e dal comodino.' },
    't03-corridoio': { kind: 'Punto luce invertito', collaudo: 'Collaudo: prova dall’ingresso, dal soggiorno e dalla camera.' },
  },
  works: 'Funziona.',
  collaudoOk: 'Collaudo superato.',
  next: 'Scegli la prossima stanza.',
  evening: 'Sera. Tutto acceso.',
  dico: {
    title: 'Dichiarazione di conformità',
    sub: 'dell’impianto alla regola dell’arte',
    where: 'Via Roma 12, trilocale',
    work: 'Impianto di illuminazione: punto luce interrotto nel bagno, deviato nella camera, invertito nel corridoio.',
    ok: 'L’impianto è stato realizzato a regola d’arte e collaudato in ogni stanza.',
    by: 'L’installatore',
  },
};
