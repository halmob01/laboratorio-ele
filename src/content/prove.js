// Prove dei moduli (P3): due livelli con l'impianto già cablato e una scena 3D accanto.
// Non si cablano fili: si lavora sui comandi e sul multimetro, e la verifica guarda i traguardi raggiunti.
// Formato dei traguardi e delle regole di sicurezza: src/engine/v2/prova.js.

import { LEVELS_V2 } from './levels-v2.js';

const T = (...ids) => Object.fromEntries(ids.map(i => [i, { l: i }]));
const C = (id, type, short, title, terms, extra = {}) => ({ id, type, short, title, terms: Array.isArray(terms) ? T(...terms) : terms, ...extra });
const QM = C('Q', 'quadro', 'Quadro', 'Quadro elettrico', { F: { l: 'FASE' }, N: { l: 'NEUTRO' }, PE: { l: 'TERRA' } });
const POLI = { '1': { l: '1' }, N1: { l: 'N' }, '2': { l: '2' }, N2: { l: 'N' } };
const SPINA = { a: { l: '1' }, b: { l: '2' } };
const PRESA = { L: { l: 'L' }, PE: { l: 'PE' }, N: { l: 'N' } };

/* ---------- Modulo 2: l'appartamento di notte ---------- */

const notte = {
  id: 'p01-notte', code: 'p01', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', meter: true, palette: ['marrone', 'blu', 'gv'],
  name: 'L’appartamento di notte', title: 'L’appartamento di notte',
  blurb: 'Il differenziale è scattato e la casa è al buio: trova la linea e l’apparecchio.',
  goal: 'È notte e in casa è saltato tutto: il differenziale è scattato. Trova la linea con il guasto con i magnetotermici e il multimetro, scollega l’apparecchio difettoso e riporta la luce nel resto della casa.',
  comps: [
    QM,
    C('D', 'rcd', 'Differenziale', 'Interruttore differenziale', POLI),
    C('M1', 'mt', 'Luci', 'Magnetotermico luci', POLI, { rank: 2 }),
    C('M2', 'mt', 'Prese', 'Magnetotermico prese', POLI, { rank: 2 }),
    C('M3', 'mt', 'Cucina', 'Magnetotermico cucina', POLI, { rank: 2 }),
    C('L1', 'lamp', 'Soggiorno', 'Lampada del soggiorno', { B: { l: 'B' }, A: { l: 'A' } }),
    C('L2', 'lamp', 'Camera', 'Lampada della camera', { B: { l: 'B' }, A: { l: 'A' } }),
    C('P', 'presa', 'Presa TV', 'Presa del soggiorno', PRESA),
    C('SL', 'sw', 'Spina lavatrice', 'Spina della lavatrice', SPINA, { init: 1 }),
    C('LAV', 'presa', 'Lavatrice', 'Lavatrice', PRESA),
    C('SF', 'sw', 'Spina forno', 'Spina del forno', SPINA, { init: 1 }),
    C('FOR', 'presa', 'Forno', 'Forno', PRESA),
    C('G', 'gu', 'Guasto', 'Isolamento difettoso dell’apparecchio', {}, { at: 'LAV.L', levels: [300], init: 1, hidden: true }),
  ],
  controls: ['D', 'M1', 'M2', 'M3', 'SL', 'SF'],
  given: [
    ['Q.F', 'D.1', 'marrone'], ['Q.N', 'D.N1', 'blu'],
    ['D.2', 'M1.1', 'marrone'], ['D.2', 'M2.1', 'marrone'], ['D.2', 'M3.1', 'marrone'],
    ['D.N2', 'M1.N1', 'blu'], ['D.N2', 'M2.N1', 'blu'], ['D.N2', 'M3.N1', 'blu'],
    ['M1.2', 'L1.A', 'marrone'], ['M1.2', 'L2.A', 'marrone'], ['M1.N2', 'L1.B', 'blu'], ['M1.N2', 'L2.B', 'blu'],
    ['M2.2', 'P.L', 'marrone'], ['M2.N2', 'P.N', 'blu'],
    ['M3.2', 'SL.a', 'marrone'], ['SL.b', 'LAV.L', 'marrone'], ['M3.2', 'SF.a', 'marrone'], ['SF.b', 'FOR.L', 'marrone'],
    ['M3.N2', 'LAV.N', 'blu'], ['M3.N2', 'FOR.N', 'blu'],
    ['Q.PE', 'P.PE', 'gv'], ['Q.PE', 'LAV.PE', 'gv'], ['Q.PE', 'FOR.PE', 'gv'],
  ],
  prova: {
    goals: [
      { id: 'isola', label: 'Apri i tre magnetotermici: nessuna linea è più alimentata', when: { open: ['M1', 'M2', 'M3'] } },
      { id: 'riarma', label: 'Riarma il differenziale', when: { closed: ['D'], notTripped: ['D'] }, after: 'isola' },
      { id: 'individua', label: 'Chiudi una linea alla volta: quella con il guasto fa scattare il differenziale', when: { tripped: ['D'], closed: ['M3'] }, after: 'riarma' },
      { id: 'misura', label: 'Con la linea aperta misura 0 V ai morsetti d’uscita del suo magnetotermico', when: { open: ['M3'] }, measure: { between: ['M3.2', 'M3.N2'], mode: 'V', value: 0 }, after: 'individua' },
      { id: 'ripristina', label: 'Scollega l’apparecchio difettoso e rimetti tutto in funzione', now: true, after: 'misura', when: { closed: ['D', 'M1', 'M2', 'M3', 'SF'], open: ['SL'], notTripped: ['D', 'M1', 'M2', 'M3'], loads: { L1: 'on', L2: 'on', P: 'on', FOR: 'on', LAV: 'off' } } },
    ],
    guards: [
      { id: 'spinaLavatrice', on: 'toggle', part: 'SL', require: { open: ['M3'] }, code: 'safe.provaLive' },
      { id: 'spinaForno', on: 'toggle', part: 'SF', require: { open: ['M3'] }, code: 'safe.provaLive' },
    ],
  },
  hints: [
    'Apri i tre magnetotermici e riarma il differenziale: senza carico non ha nessun motivo di scattare.',
    'Chiudi le linee una alla volta. Quando il differenziale scatta, l’ultima linea chiusa è quella con il guasto.',
    'Sulla linea della cucina ci sono due apparecchi. Apri il magnetotermico, stacca le due spine, poi richiudi e rimetti una spina alla volta.',
  ],
};

/* ---------- Modulo 3: l'officina ---------- */

const c16 = LEVELS_V2.find(l => l.id === 'c16-nastro');
const officina = {
  ...c16,
  id: 'p02-officina', code: 'p02', n: 0,
  name: 'L’officina', title: 'L’officina',
  blurb: 'Il nastro è già cablato: collaudalo a vista, dalla marcia al finecorsa.',
  goal: 'Il nastro dell’officina è montato e cablato. Collaudalo: marcia, arresto, intervento del relè termico, ripartenza e finecorsa.',
  checks: undefined, safety: undefined, solution: undefined, solutionRatings: undefined,
  given: c16.solution,
  prova: {
    goals: [
      { id: 'marcia', label: 'Premi Marcia: il nastro parte e la spia si accende', when: { motors: { M: 'fwd' }, loads: { H: 'on' } } },
      { id: 'arresto', label: 'Premi Arresto: il nastro si ferma prima della fine', when: { motors: { M: 'off' }, machine: { atEnd: false } }, after: 'marcia' },
      { id: 'sovraccarico', label: 'Riparti e simula un sovraccarico: il relè termico scatta e ferma il nastro', when: { tripped: ['FR'], motors: { M: 'off' } }, after: 'arresto' },
      { id: 'riarmo', label: 'Togli il sovraccarico e riarma il relè termico', when: { overload: false, notTripped: ['FR'] }, after: 'sovraccarico' },
      { id: 'riparti', label: 'Premi di nuovo Marcia: il nastro riparte', when: { motors: { M: 'fwd' } }, after: 'riarmo' },
      { id: 'fine', label: 'Lascia arrivare il pacco in fondo: il finecorsa ferma il nastro', when: { machine: { atEnd: true }, motors: { M: 'off' } }, after: 'riparti' },
    ],
    guards: [
      { id: 'riarmoSottoCarico', on: 'reset', part: 'FR', require: { overload: false }, code: 'safe.provaOverload' },
    ],
  },
  hints: [
    'Il nastro si comanda con i pulsanti: Marcia lo avvia, Arresto lo ferma.',
    'Il sovraccarico si simula con il pulsante accanto al quadro, a nastro in marcia. Dopo alcuni secondi il relè termico scatta.',
    'Prima di riarmare il termico togli il sovraccarico. Se il pacco è già in fondo, riportalo all’inizio per ripartire.',
  ],
};
delete officina.checks; delete officina.safety; delete officina.solution; delete officina.solutionRatings;

export const PROVE_LEVELS = [notte, officina];

/* ---------- unità didattiche ---------- */

const intro = (title, ...paras) => ({ type: 'spiegazione', title, paras });
const G = (id, short, title, text) => ({ kind: 'goal', id, short, title, text });

export const PROVE_UNITS = {
  'p01-notte': {
    support: 'passi',
    lesson: { pages: [
      intro('Una notte senza luce', 'In casa è saltato tutto: il differenziale è scattato e l’appartamento è al buio. Il quadro è già cablato, a te tocca trovare il guasto.', 'Il differenziale scatta quando una corrente trova una strada verso terra. Il guasto sta su una sola linea: i magnetotermici servono a escluderle una alla volta.'),
      intro('Il metodo', 'Prima si toglie tensione a tutte le linee, poi si riarma il differenziale e si richiudono le linee una per volta. La linea che lo fa scattare è quella con il guasto.', 'Sulla linea difettosa ci sono più apparecchi: si stacca la spina di tutti e si rimettono uno alla volta. Prima di toccare una spina, la linea va aperta e controllata con il multimetro.'),
      { type: 'sintesi', title: 'Da ricordare' },
    ] },
    steps: [
      G('isola', '1 Apri', 'Apri i tre magnetotermici', 'Tocca i tre magnetotermici del quadro, o toccali nella casa.'),
      G('riarma', '2 Riarma', 'Riarma il differenziale', 'Con le linee aperte il differenziale non ha motivo di scattare.'),
      G('individua', '3 Cerca', 'Trova la linea con il guasto', 'Chiudi una linea alla volta. Quella che fa scattare il differenziale ha il guasto.'),
      G('misura', '4 Misura', 'Controlla che non ci sia tensione', 'Apri il magnetotermico della linea e misura 0 V tra i suoi morsetti d’uscita, fase e neutro.'),
      G('ripristina', '5 Ripristina', 'Scollega l’apparecchio difettoso', 'Con la linea aperta stacca le spine, poi rimettine una alla volta. Alla fine tutto funziona, tranne l’apparecchio guasto.'),
      { kind: 'verify', short: '6 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il differenziale scatta per una corrente verso terra: il guasto sta in una sola linea.',
      'Per trovarla si aprono i magnetotermici e si richiudono uno alla volta.',
      'Prima di staccare una spina o di toccare l’impianto, si apre la linea e si misura 0 V.',
      'Un apparecchio difettoso resta scollegato finché non viene riparato.',
    ],
  },
  'p02-officina': {
    support: 'passi',
    lesson: { pages: [
      intro('Il collaudo del nastro', 'In officina il nastro trasportatore è montato e cablato. Prima di consegnarlo si collauda: si prova a vista che ogni funzione faccia quello che deve.', 'Hai già cablato questo impianto nei livelli del Modulo 3. Qui lo vedi al lavoro, con il pacco che corre sul nastro.'),
      intro('Le quattro prove', 'Marcia e arresto: il nastro parte e si ferma con i pulsanti. Termico: con un sovraccarico il relè scatta e ferma il motore. Finecorsa: a fine nastro il motore si ferma da solo.', 'Dopo l’intervento del termico si toglie la causa e si riarma, mai il contrario.'),
      { type: 'sintesi', title: 'Da ricordare' },
    ] },
    steps: [
      G('marcia', '1 Marcia', 'Avvia il nastro', 'Premi Marcia: il motore parte e la spia si accende.'),
      G('arresto', '2 Arresto', 'Ferma il nastro', 'Premi Arresto prima che il pacco arrivi in fondo.'),
      G('sovraccarico', '3 Termico', 'Simula un sovraccarico', 'Riparti, poi attiva il sovraccarico: dopo alcuni secondi il relè termico scatta.'),
      G('riarmo', '4 Riarmo', 'Togli la causa e riarma', 'Disattiva il sovraccarico, poi riarma il relè termico.'),
      G('riparti', '5 Riparti', 'Riavvia il nastro', 'Premi di nuovo Marcia. Se il pacco è in fondo, riportalo all’inizio.'),
      G('fine', '6 Finecorsa', 'Aspetta la fine corsa', 'Il pacco arriva in fondo e il finecorsa ferma il motore.'),
      { kind: 'verify', short: '7 Verifica', title: 'Controlla il collaudo', text: 'Premi Verifica.' },
    ],
    summary: [
      'Un collaudo prova ogni funzione: marcia, arresto, protezione e fine corsa.',
      'Il relè termico scatta per un sovraccarico prolungato e ferma il motore.',
      'Dopo un intervento si toglie la causa e poi si riarma la protezione.',
      'A fine corsa il finecorsa ferma il nastro senza bisogno del pulsante.',
    ],
  },
};
