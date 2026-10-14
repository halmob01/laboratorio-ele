// Livelli dei Moduli 2 e 3 (motore v2). Stessa forma dei livelli del Modulo 0, piu':
//   engine: 2; checks = prove di funzionamento; safety = regole di sicurezza; demoDo = azioni mostrate nella demo.
// Vedi docs/SPEC-MOTORE-V2.md. Nessuna coordinata: la disposizione sul banco e' automatica (src/ui2d/layout.js).

const T = (...ids) => Object.fromEntries(ids.map(i => [i, { l: i }]));
const C = (id, type, short, title, terms, extra = {}) => ({ id, type, short, title, terms: Array.isArray(terms) ? T(...terms) : terms, ...extra });
const QM = C('Q', 'quadro', 'Quadro', 'Quadro elettrico', { F: { l: 'FASE' }, N: { l: 'NEUTRO' }, PE: { l: 'TERRA' } });
const Q3 = C('Q', 'quadro', 'Quadro', 'Quadro trifase', T('L1', 'L2', 'L3', 'N', 'PE'));
const SRC3 = { L1: 'Q.L1', L2: 'Q.L2', L3: 'Q.L3', N: 'Q.N', PE: 'Q.PE' };
const PAL3 = ['marrone', 'nero', 'grigio', 'blu', 'gv', 'rosso'];
const T6 = ['1', '2', '3', '4', '5', '6'];
const IND = { engine: 2, quadroOnly: true, src: SRC3, palette: PAL3, controlColor: 'rosso' };
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
  {
    id: 'c12-motore', code: 'c12', n: 0, ...IND, flow: 'onDemand',
    name: 'Motore trifase', title: 'Il motore trifase',
    blurb: 'Tre fasi, 400 V e il senso di rotazione.',
    goal: 'Collega il motore alla rete trifase passando dal salvamotore, poi collega la terra del motore. Chiudi il salvamotore: il motore deve girare in avanti.',
    comps: [
      Q3,
      C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6), { init: 0 }),
      C('M', 'motor3', 'Motore', 'Motore trifase', T('U', 'V', 'W', 'PE')),
    ],
    controls: ['QM'],
    checks: [
      { id: 'gira', label: 'Chiudi il salvamotore: il motore gira in avanti', do: ['toggle QM'], expect: { motors: { M: 'fwd' } } },
      { id: 'fermo', label: 'Con il salvamotore aperto il motore è fermo', do: [], expect: { motors: { M: 'off' } } },
    ],
    safety: { earth: [['M.PE', 'Q.PE']], protectedBy: { M: 'QM' } },
    solution: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'M.U', 'marrone'], ['QM.4', 'M.V', 'nero'], ['QM.6', 'M.W', 'grigio'], ['Q.PE', 'M.PE', 'gv'],
    ],
    hints: [
      'Le tre fasi L1, L2, L3 entrano nel salvamotore dai morsetti in alto: 1, 3 e 5.',
      'Dai morsetti in basso del salvamotore (2, 4, 6) le tre fasi vanno ai morsetti U, V, W del motore, nello stesso ordine.',
      'Il morsetto PE del motore va alla terra del quadro con il filo giallo-verde. Poi tocca la levetta del salvamotore.',
    ],
  },
  {
    id: 'c13-marcia-arresto', code: 'c13', n: 0, ...IND, flow: 'onDemand',
    name: 'Marcia e arresto', title: 'Marcia e arresto',
    blurb: 'Contattore, pulsanti e autoritenuta.',
    goal: 'Comanda il motore con due pulsanti: con Marcia il motore parte e resta in marcia anche a pulsante rilasciato, con Arresto si ferma. Una spia segnala la marcia. Il circuito di comando va in rosso.',
    comps: [
      Q3,
      C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6)),
      C('KM', 'km', 'Contattore', 'Contattore KM', T('A1', 'A2', ...T6, '13', '14')),
      C('SB0', 'pbnc', 'Arresto', 'Pulsante di arresto (NC)', T('1', '2')),
      C('SB1', 'pb', 'Marcia', 'Pulsante di marcia (NA)', T('3', '4')),
      C('H', 'spia', 'Spia', 'Spia di marcia', T('X1', 'X2')),
      C('M', 'motor3', 'Motore', 'Motore trifase', T('U', 'V', 'W', 'PE')),
    ],
    controls: ['SB0', 'SB1'],
    checks: [
      { id: 'marcia', label: 'Premi Marcia e rilascia: il motore resta in marcia e la spia è accesa', do: press('SB1'), expect: { motors: { M: 'fwd' }, loads: { H: 'on' } } },
      { id: 'arresto', label: 'Premi Arresto: il motore si ferma e la spia si spegne', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: press('SB0'), expect: { motors: { M: 'off' }, loads: { H: 'off' } } }] },
      { id: 'fermo', label: 'Senza comandi il motore è fermo', do: [], expect: { motors: { M: 'off' } } },
    ],
    safety: { earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', protectedBy: { M: 'QM', KM: 'QM' } },
    solution: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
      ['KM.2', 'M.U', 'marrone'], ['KM.4', 'M.V', 'nero'], ['KM.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
      ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'], ['SB1.4', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
      ['SB1.3', 'KM.13', 'rosso'], ['KM.14', 'SB1.4', 'rosso'], ['H.X1', 'KM.A1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
    ],
    hints: [
      'Prima il circuito di potenza: le tre fasi passano dal salvamotore, dal contattore e arrivano al motore. Poi la terra del motore.',
      'Il comando prende la fase a valle del salvamotore e passa dal pulsante di arresto (NC), poi dal pulsante di marcia (NA), e arriva alla bobina A1. L’altro capo della bobina, A2, va al neutro.',
      'L’autoritenuta è un contatto del contattore (13-14) in parallelo al pulsante di marcia: 13 al morsetto 3 e 14 al morsetto 4. La spia va in parallelo alla bobina.',
    ],
  },
];
