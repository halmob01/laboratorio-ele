// Livelli dei Moduli 2 e 3 (motore v2). Stessa forma dei livelli del Modulo 0, piu':
//   engine: 2; checks = prove di funzionamento; safety = regole di sicurezza; demoDo = azioni mostrate nella demo.
// Vedi docs/SPEC-MOTORE-V2.md. Nessuna coordinata: la disposizione sul banco e' automatica (src/ui2d/layout.js).

const T = (...ids) => Object.fromEntries(ids.map(i => [i, { l: i }]));
const C = (id, type, short, title, terms, extra = {}) => ({ id, type, short, title, terms: Array.isArray(terms) ? T(...terms) : terms, ...extra });
const QM = C('Q', 'quadro', 'Quadro', 'Quadro elettrico', { F: { l: 'FASE' }, N: { l: 'NEUTRO' }, PE: { l: 'TERRA' } });
const press = id => ['press ' + id, 'release ' + id];

export const LEVELS_V2 = [
  {
    id: 'c07-presa-comandata', code: 'c07', n: 0, engine: 2, quadroOnly: true, flow: 'always',
    name: 'Presa comandata', title: 'La presa comandata',
    blurb: 'Un interruttore accende insieme una presa e una lampada.',
    goal: 'Collega l’interruttore, la presa e la lampada: con l’interruttore chiuso devono essere alimentate tutte e due. Alla presa serve anche la terra. Poi dai corrente con la levetta del quadro.',
    comps: [
      QM,
      C('S', 'sw', 'Interruttore', 'Interruttore', { a: { l: '1' }, b: { l: '2' } }, { where: 'Ingresso' }),
      C('P', 'presa', 'Presa', 'Presa bipasso 10/16 A', { L: { l: 'L' }, PE: { l: 'PE' }, N: { l: 'N' } }),
      C('L', 'lamp', 'Lampada', 'Portalampada', { B: { l: 'B' }, A: { l: 'A' } }),
    ],
    controls: ['S'],
    checks: [
      { id: 'chiuso', label: 'Interruttore chiuso: la presa e la lampada sono alimentate', do: ['toggle S'], expect: { loads: { P: 'on', L: 'on' } } },
      { id: 'aperto', label: 'Interruttore aperto: la presa e la lampada sono spente', do: [], expect: { loads: { P: 'off', L: 'off' } } },
    ],
    safety: { earth: [['P.PE', 'Q.PE']], phaseSwitched: ['P', 'L'], pol: ['P.L', 'P.N'] },
    solution: [
      ['Q.F', 'S.a', 'marrone'], ['S.b', 'P.L', 'marrone'], ['S.b', 'L.A', 'marrone'],
      ['Q.N', 'P.N', 'blu'], ['Q.N', 'L.B', 'blu'], ['Q.PE', 'P.PE', 'gv'],
    ],
    hints: [
      'La fase esce dal quadro e arriva all’interruttore. Dall’interruttore parte verso la presa e verso la lampada.',
      'Il neutro (blu) va dal quadro direttamente alla presa e alla lampada, senza passare dall’interruttore.',
      'La presa ha anche il morsetto PE: il filo giallo-verde lo collega alla terra del quadro. Sul morsetto L della presa arriva la fase.',
    ],
  },
  {
    id: 'c08-rele-impulsi', code: 'c08', n: 0, engine: 2, quadroOnly: true, flow: 'always',
    name: 'Relè ad impulsi', title: 'Il relè ad impulsi',
    blurb: 'Tre pulsanti accendono e spengono la stessa lampada.',
    goal: 'Una lampada da accendere e spegnere da tre punti con tre pulsanti uguali. Collega i pulsanti in parallelo alla bobina del relè ad impulsi e la lampada al suo contatto. Poi dai corrente.',
    comps: [
      QM,
      C('P1', 'pb', 'Ingresso', 'Pulsante ingresso', { '3': { l: '3' }, '4': { l: '4' } }),
      C('P2', 'pb', 'Soggiorno', 'Pulsante soggiorno', { '3': { l: '3' }, '4': { l: '4' } }),
      C('P3', 'pb', 'Camera', 'Pulsante camera', { '3': { l: '3' }, '4': { l: '4' } }),
      C('K', 'ri', 'Relè', 'Relè ad impulsi', { A1: { l: 'A1' }, A2: { l: 'A2' }, '1': { l: '1' }, '2': { l: '2' } }),
      C('L', 'lamp', 'Lampada', 'Portalampada', { B: { l: 'B' }, A: { l: 'A' } }),
    ],
    controls: ['P1', 'P2', 'P3'],
    checks: [
      { id: 'p1', label: 'Premi il pulsante dell’ingresso: la lampada si accende', do: press('P1'), expect: { loads: { L: 'on' } } },
      { id: 'p3', label: 'Premi quello della camera: la lampada si spegne', steps: [{ do: press('P1'), expect: { loads: { L: 'on' } } }, { do: press('P3'), expect: { loads: { L: 'off' } } }] },
      { id: 'p2', label: 'Premi quello del soggiorno: la lampada si riaccende', steps: [{ do: press('P1').concat(press('P3')), expect: { loads: { L: 'off' } } }, { do: press('P2'), expect: { loads: { L: 'on' } } }] },
    ],
    safety: { phaseSwitched: ['L'] },
    solution: [
      ['Q.F', 'P1.3', 'marrone'], ['P1.3', 'P2.3', 'marrone'], ['P2.3', 'P3.3', 'marrone'],
      ['P1.4', 'P2.4', 'marrone'], ['P2.4', 'P3.4', 'marrone'], ['P3.4', 'K.A1', 'marrone'],
      ['K.A2', 'Q.N', 'blu'], ['Q.F', 'K.1', 'marrone'], ['K.2', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
    ],
    hints: [
      'I tre pulsanti sono in parallelo: i morsetti 3 sono collegati tra loro e alla fase, i morsetti 4 sono collegati tra loro.',
      'Dai morsetti 4 dei pulsanti un filo va alla bobina del relè (A1). L’altro capo della bobina (A2) va al neutro.',
      'La lampada si collega al contatto del relè: la fase arriva al morsetto 1, dal morsetto 2 va alla lampada. Il neutro va direttamente alla lampada.',
    ],
  },
];
