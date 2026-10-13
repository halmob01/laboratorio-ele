// Livelli: solo contenuto e modello elettrico. Nessuna coordinata, nessun colore, nessun disegno.
// La disposizione sul banco sta nella vista (per il 2D: src/ui2d/layout.js).
//
// Componente: { id, type, short, title, where?, terms: { <id>: { l, n? } } }
//   l = etichetta sul morsetto, n = nome esteso (se diverso dall'etichetta)
//   where = nome del punto della stanza in cui sta il comando (interruttori e deviatori)
// Livello:
//   controls = componenti che l'allievo puo' azionare, load = morsetti del carico,
//   room = scena di contorno ('tavolo' | 'soffitto'), solution = [[da, a, colore], ...]

export const LEVELS = [
  {
    n: 1,
    name: 'Presa',
    title: 'La presa di corrente',
    goal: 'Collega la presa al quadro con i tre fili giusti, poi dai corrente con la levetta del quadro. La lampada sul tavolo deve accendersi.',
    loadName: 'La lampada',
    comps: [
      { id: 'Q', type: 'quadro', short: 'Quadro', title: 'Quadro elettrico', terms: { F: { l: 'FASE' }, PE: { l: 'TERRA' }, N: { l: 'NEUTRO' } } },
      { id: 'P', type: 'presa', short: 'Presa', title: 'Presa bipasso 10/16 A', terms: { L: { l: 'L' }, PE: { l: 'PE' }, N: { l: 'N' } } },
    ],
    controls: [],
    load: ['P.L', 'P.N'],
    earth: ['Q.PE', 'P.PE'],
    pol: 'P.L',
    room: 'tavolo',
    solution: [['Q.F', 'P.L', 'marrone'], ['Q.N', 'P.N', 'blu'], ['Q.PE', 'P.PE', 'gv']],
    hints: [
      'Il marrone è la fase: va dal quadro al morsetto L della presa.',
      'Il blu è il neutro: va dal quadro al morsetto N della presa.',
      'Il giallo-verde è la terra: va al morsetto PE, quello al centro.',
    ],
  },
  {
    n: 2,
    name: 'Interrotto',
    title: 'Punto luce interrotto',
    goal: 'Accendi e spegni la lampada con un interruttore. L’interruttore interrompe la fase, mai il neutro.',
    loadName: 'La lampada',
    comps: [
      { id: 'Q', type: 'quadro', short: 'Quadro', title: 'Quadro elettrico', terms: { N: { l: 'NEUTRO' }, F: { l: 'FASE' } } },
      { id: 'S', type: 'sw', short: 'Interruttore', title: 'Interruttore', where: 'Parete', terms: { a: { l: '1' }, b: { l: '2' } } },
      { id: 'L', type: 'lamp', short: 'Lampada', title: 'Portalampada', terms: { B: { l: 'B' }, A: { l: 'A' } } },
    ],
    controls: ['S'],
    load: ['L.A', 'L.B'],
    room: 'soffitto',
    solution: [['Q.F', 'S.a', 'marrone'], ['S.b', 'L.A', 'marrone'], ['Q.N', 'L.B', 'blu']],
    hints: [
      'Parti dalla fase: dal quadro va all’interruttore, non direttamente alla lampada.',
      'Dall’altro morsetto dell’interruttore il filo va a un morsetto della lampada.',
      'Il neutro (blu) va dal quadro all’altro morsetto della lampada, senza passare dall’interruttore.',
    ],
  },
  {
    n: 3,
    name: 'Deviato',
    title: 'Punto luce deviato',
    goal: 'Comanda la stessa lampada da due punti con due deviatori. Premendo uno qualsiasi dei due, la luce deve cambiare.',
    loadName: 'La lampada',
    comps: [
      { id: 'Q', type: 'quadro', short: 'Quadro', title: 'Quadro elettrico', terms: { N: { l: 'NEUTRO' }, F: { l: 'FASE' } } },
      { id: 'D1', type: 'dev', short: 'Deviatore A', title: 'Deviatore A', where: 'Ingresso', terms: { C: { l: 'C' }, '1': { l: '1' }, '2': { l: '2' } } },
      { id: 'D2', type: 'dev', short: 'Deviatore B', title: 'Deviatore B', where: 'Fondo', terms: { '1': { l: '1' }, '2': { l: '2' }, C: { l: 'C' } } },
      { id: 'L', type: 'lamp', short: 'Lampada', title: 'Portalampada', terms: { B: { l: 'B' }, A: { l: 'A' } } },
    ],
    controls: ['D1', 'D2'],
    load: ['L.A', 'L.B'],
    room: 'soffitto',
    solution: [['Q.F', 'D1.C', 'marrone'], ['D1.1', 'D2.1', 'nero'], ['D1.2', 'D2.2', 'grigio'], ['D2.C', 'L.A', 'marrone'], ['Q.N', 'L.B', 'blu']],
    hints: [
      'La fase entra nel morsetto C (comune) del primo deviatore.',
      'I morsetti 1 e 2 del primo deviatore vanno a 1 e 2 del secondo: 1 con 1 e 2 con 2.',
      'Il comune C del secondo deviatore va alla lampada. Il neutro va dal quadro alla lampada, senza passare dai deviatori.',
    ],
  },
  {
    n: 4,
    name: 'Invertito',
    title: 'Punto luce invertito',
    goal: 'Aggiungi un terzo punto di comando in mezzo, con l’invertitore. Premendo uno qualsiasi dei tre, la luce deve cambiare.',
    loadName: 'La lampada',
    comps: [
      { id: 'Q', type: 'quadro', short: 'Quadro', title: 'Quadro elettrico', terms: { N: { l: 'NEUTRO' }, F: { l: 'FASE' } } },
      { id: 'D1', type: 'dev', short: 'Deviatore A', title: 'Deviatore A', where: 'Ingresso', terms: { C: { l: 'C' }, '1': { l: '1' }, '2': { l: '2' } } },
      { id: 'I', type: 'inv', short: 'Invertitore', title: 'Invertitore', where: 'Camera', terms: { '1': { l: '1' }, '2': { l: '2' }, '3': { l: '3' }, '4': { l: '4' } } },
      { id: 'D2', type: 'dev', short: 'Deviatore B', title: 'Deviatore B', where: 'Fondo', terms: { '1': { l: '1' }, '2': { l: '2' }, C: { l: 'C' } } },
      { id: 'L', type: 'lamp', short: 'Lampada', title: 'Portalampada', terms: { B: { l: 'B' }, A: { l: 'A' } } },
    ],
    controls: ['D1', 'I', 'D2'],
    load: ['L.A', 'L.B'],
    room: 'soffitto',
    solution: [['Q.F', 'D1.C', 'marrone'], ['D1.1', 'I.1', 'nero'], ['D1.2', 'I.2', 'grigio'], ['I.3', 'D2.1', 'nero'], ['I.4', 'D2.2', 'grigio'], ['D2.C', 'L.A', 'marrone'], ['Q.N', 'L.B', 'blu']],
    hints: [
      'È come la deviata, ma in mezzo ai due fili di collegamento metti l’invertitore.',
      'I morsetti 1 e 2 del deviatore A vanno ai morsetti 1 e 2 (in alto) dell’invertitore.',
      'Dai morsetti 3 e 4 (in basso) dell’invertitore, due fili vanno a 1 e 2 del deviatore B. Il comune C del B va alla lampada.',
    ],
  },
];
