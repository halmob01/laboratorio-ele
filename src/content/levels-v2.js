// Livelli dei Moduli 2 e 3 (motore v2). Stessa forma dei livelli del Modulo 0, piu':
//   engine: 2; checks = prove di funzionamento; safety = regole di sicurezza; demoDo = azioni mostrate nella demo.
//   meter: true = il livello ha il multimetro; measures = letture che la verifica pretende ({ between, mode, value|reading, live, setup, label };
//   setup = stato dei comandi in cui si fa la lettura, lo usano i test).
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
    id: 'c17-multimetro', code: 'c17', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', meter: true, palette: ['marrone', 'blu', 'gv'],
    name: 'Il multimetro', title: 'Il multimetro',
    blurb: 'Misurare la tensione e la continuità di un punto luce.',
    goal: 'Collega un punto luce con un interruttore e una lampada. Poi usa il multimetro: misura la tensione a quadro acceso, la tensione ai capi dell’interruttore aperto e, a quadro spento, la continuità dell’interruttore chiuso.',
    comps: [
      QM,
      C('S', 'sw', 'Interruttore', 'Interruttore', { a: { l: '1' }, b: { l: '2' } }),
      C('L', 'lamp', 'Lampada', 'Portalampada', { B: { l: 'B' }, A: { l: 'A' } }),
    ],
    controls: ['S'],
    checks: [
      { id: 'chiuso', label: 'Interruttore chiuso: la lampada si accende', do: ['toggle S'], expect: { loads: { L: 'on' } } },
      { id: 'aperto', label: 'Interruttore aperto: la lampada è spenta', do: [], expect: { loads: { L: 'off' } } },
    ],
    measures: [
      { between: ['S.a', 'Q.N'], mode: 'V', value: 230, live: true, setup: { S: 0 }, label: 'tensione tra l’ingresso dell’interruttore (morsetto 1) e il neutro, a quadro acceso' },
      { between: ['S.a', 'S.b'], mode: 'V', value: 230, live: true, setup: { S: 0 }, label: 'tensione ai capi dell’interruttore aperto, a quadro acceso' },
      { between: ['S.a', 'S.b'], mode: 'R', reading: 'cont', live: false, setup: { S: 1 }, label: 'continuità dell’interruttore chiuso, a quadro spento' },
    ],
    safety: { phaseSwitched: ['L'] },
    solution: [['Q.F', 'S.a', 'marrone'], ['S.b', 'L.A', 'marrone'], ['Q.N', 'L.B', 'blu']],
    hints: [
      'La fase esce dal quadro e arriva al morsetto 1 dell’interruttore. Dal morsetto 2 va alla lampada.',
      'Il neutro (blu) va dal quadro direttamente alla lampada, senza passare dall’interruttore.',
      'Per misurare, tocca Multimetro: il primo morsetto che tocchi è il puntale rosso, il secondo il nero.',
    ],
  },
  {
    id: 'c18-rele', code: 'c18', n: 0, engine: 2, quadroOnly: true, flow: 'always', palette: ['marrone', 'blu', 'gv'],
    name: 'Il relè', title: 'Il relè',
    blurb: 'Un comando e un contatto di scambio: due lampade, una per ogni stato.',
    goal: 'Un interruttore comanda la bobina di un relè. Il contatto di scambio del relè accende una lampada verde quando la bobina è spenta e una lampada rossa quando è accesa. Collega tutto, poi dai corrente.',
    comps: [
      QM,
      C('S', 'sw', 'Comando', 'Comando', { a: { l: '1' }, b: { l: '2' } }),
      C('K', 'rel', 'Relè', 'Relè', { A1: { l: 'A1' }, A2: { l: 'A2' }, '11': { l: '11' }, '12': { l: '12' }, '14': { l: '14' } }),
      C('LV', 'lamp', 'Lampada verde', 'Lampada verde', { B: { l: 'B' }, A: { l: 'A' } }),
      C('LR', 'lamp', 'Lampada rossa', 'Lampada rossa', { B: { l: 'B' }, A: { l: 'A' } }),
    ],
    controls: ['S'],
    checks: [
      { id: 'riposo', label: 'Comando aperto: la lampada verde è accesa e la rossa è spenta', do: [], expect: { loads: { LV: 'on', LR: 'off' } } },
      { id: 'comando', label: 'Comando chiuso: la lampada verde si spegne e la rossa si accende', do: ['toggle S'], expect: { loads: { LV: 'off', LR: 'on' } } },
    ],
    safety: { phaseSwitched: ['LV', 'LR'], coilReturn: ['K'] },
    solution: [
      ['Q.F', 'S.a', 'marrone'], ['S.b', 'K.A1', 'marrone'], ['K.A2', 'Q.N', 'blu'],
      ['Q.F', 'K.11', 'marrone'], ['K.12', 'LV.A', 'marrone'], ['K.14', 'LR.A', 'marrone'],
      ['LV.B', 'Q.N', 'blu'], ['LR.B', 'Q.N', 'blu'],
    ],
    hints: [
      'Il comando e il carico sono circuiti separati. Il comando: fase, interruttore, bobina (A1-A2), neutro.',
      'Il carico: la fase arriva al morsetto comune 11 del contatto. Il morsetto 12 è chiuso a riposo, il 14 si chiude a bobina eccitata.',
      'La lampada verde va sul 12, la rossa sul 14. I neutri delle due lampade vanno direttamente al neutro del quadro.',
    ],
  },
  {
    id: 'c19-magnetotermico', code: 'c19', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', palette: ['marrone', 'blu', 'gv'],
    name: 'Il magnetotermico', title: 'Il magnetotermico',
    blurb: 'La portata dell’interruttore e quella del cavo: due stufe su una linea.',
    goal: 'Una linea in cavo da 1,5 mm² alimenta due stufe da 2000 W, ognuna con il suo interruttore. Collega la linea e scegli la portata del magnetotermico (tocca il numero sull’interruttore): con una stufa deve restare acceso, con due deve scattare prima che il cavo si scaldi.',
    cable: { prot: 'QM', iz: 14.5, s: 1.5, burnAfter: 6 },
    comps: [
      QM,
      C('QM', 'mt', 'Magnetotermico', 'Magnetotermico della linea', { '1': { l: '1' }, '2': { l: '2' }, N1: { l: 'N' }, N2: { l: 'N' } }, { in: 16, ratings: [10, 16, 20] }),
      C('S1', 'sw', 'Stufa 1', 'Interruttore della stufa 1', { a: { l: '1' }, b: { l: '2' } }),
      C('H1', 'lamp', 'Stufa 1', 'Stufa 1 (2000 W)', { B: { l: 'B' }, A: { l: 'A' } }, { w: 2000 }),
      C('S2', 'sw', 'Stufa 2', 'Interruttore della stufa 2', { a: { l: '1' }, b: { l: '2' } }),
      C('H2', 'lamp', 'Stufa 2', 'Stufa 2 (2000 W)', { B: { l: 'B' }, A: { l: 'A' } }, { w: 2000 }),
    ],
    controls: ['S1', 'S2'],
    checks: [
      { id: 'una', label: 'Una stufa accesa per 20 secondi: resta in funzione e il magnetotermico non scatta', do: ['toggle S1', 'wait 20'], expect: { loads: { H1: 'on' }, tripped: [] } },
      { id: 'due', label: 'Due stufe accese: il magnetotermico scatta prima che il cavo si surriscaldi', do: ['toggle S1', 'toggle S2', 'wait 12'], expect: { loads: { H1: 'off', H2: 'off' }, tripped: ['QM'] } },
      { id: 'fermo', label: 'Senza comandi le stufe sono spente', do: [], expect: { loads: { H1: 'off', H2: 'off' } } },
    ],
    solutionRatings: { QM: 10 },
    demoDo: [
      { do: ['rate QM', 'rate QM'], say: 'Si sceglie la portata: 10 A.' },
      { do: ['toggle S1'], say: 'Una stufa: 8,7 A. Il magnetotermico non scatta.' },
      { do: ['toggle S2', 'wait 12'], say: 'Due stufe: 17,4 A, quasi il doppio della portata. Dopo qualche secondo il magnetotermico scatta e il cavo è salvo.' },
    ],
    safety: { phaseSwitched: ['H1', 'H2'] },
    solution: [
      ['Q.F', 'QM.1', 'marrone'], ['QM.2', 'S1.a', 'marrone'], ['QM.2', 'S2.a', 'marrone'],
      ['S1.b', 'H1.A', 'marrone'], ['S2.b', 'H2.A', 'marrone'],
      ['Q.N', 'QM.N1', 'blu'], ['QM.N2', 'H1.B', 'blu'], ['QM.N2', 'H2.B', 'blu'],
    ],
    hints: [
      'La fase entra dal morsetto 1 del magnetotermico ed esce dal morsetto 2, poi si divide verso i due interruttori delle stufe.',
      'Il neutro passa dal magnetotermico (N-N) e poi va alle due stufe.',
      'La portata si cambia toccando il numero sull’interruttore. Con una stufa passano 8,7 A; con due 17,4 A. Il cavo regge 14,5 A.',
    ],
  },
  {
    id: 'c20-differenziale', code: 'c20', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', palette: ['marrone', 'blu', 'gv'],
    name: 'Il differenziale', title: 'Il differenziale',
    blurb: 'La dispersione verso terra e l’interruttore che la sente.',
    goal: 'Collega uno scaldabagno al quadro passando dal differenziale. Poi provoca una dispersione: con 10 mA il differenziale non deve scattare, con 300 mA deve scattare subito. Tocca il valore in mA per cambiarlo.',
    comps: [
      QM,
      C('D', 'rcd', 'Differenziale', 'Interruttore differenziale', { '1': { l: '1' }, N1: { l: 'N' }, '2': { l: '2' }, N2: { l: 'N' } }),
      C('S', 'sw', 'Interruttore', 'Interruttore dello scaldabagno', { a: { l: '1' }, b: { l: '2' } }),
      C('H', 'lamp', 'Scaldabagno', 'Scaldabagno (1500 W)', { B: { l: 'B' }, A: { l: 'A' } }, { w: 1500 }),
      C('G', 'gu', 'Guasto', 'Isolante dello scaldabagno', {}, { at: 'H.A', levels: [10, 300] }),
    ],
    controls: ['D', 'S', 'G'],
    checks: [
      { id: 'acceso', label: 'Chiudi l’interruttore: lo scaldabagno si accende', do: ['toggle S'], expect: { loads: { H: 'on' }, tripped: [] } },
      { id: 'piccola', label: 'Dispersione di 10 mA: il differenziale non scatta', do: ['toggle S', 'toggle G'], expect: { loads: { H: 'on' }, tripped: [] } },
      { id: 'grave', label: 'Dispersione di 300 mA: il differenziale scatta e lo scaldabagno si spegne', do: ['toggle S', 'rate G', 'toggle G'], expect: { loads: { H: 'off' }, tripped: ['D'] } },
      { id: 'prova', label: 'Tasto di prova: il differenziale scatta', do: ['toggle S', 'test D'], expect: { loads: { H: 'off' }, tripped: ['D'] } },
    ],
    demoDo: [
      { do: ['toggle S'], say: 'Interruttore chiuso: lo scaldabagno si accende.' },
      { do: ['toggle G'], say: 'Dispersione di 10 mA: troppo piccola, il differenziale non scatta.' },
      { do: ['rate G'], say: 'Dispersione di 300 mA: il differenziale scatta e toglie la tensione.' },
    ],
    safety: { phaseSwitched: ['H'], rcdCovers: ['H'] },
    solution: [
      ['Q.F', 'D.1', 'marrone'], ['Q.N', 'D.N1', 'blu'],
      ['D.2', 'S.a', 'marrone'], ['S.b', 'H.A', 'marrone'], ['D.N2', 'H.B', 'blu'],
    ],
    hints: [
      'La fase e il neutro del quadro entrano nel differenziale, in alto (morsetti 1 e N).',
      'Dall’uscita del differenziale la fase passa dall’interruttore e va allo scaldabagno.',
      'Anche il neutro dello scaldabagno deve uscire dal differenziale (morsetto N in basso). Se lo prendi direttamente dal quadro, il differenziale vede una corrente che esce e non rientra e scatta da solo.',
    ],
  },
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
    safety: { phaseSwitched: ['L'], coilReturn: ['K'] },
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
    id: 'c09-luce-scale', code: 'c09', n: 0, engine: 2, quadroOnly: true, flow: 'always', palette: ['marrone', 'blu', 'gv'],
    name: 'Luce scale a tempo', title: 'La luce scale a tempo',
    blurb: 'La luce si spegne da sola dopo qualche secondo.',
    goal: 'Due pulsanti, uno a ogni piano, accendono due lampade per 20 secondi: poi si spengono da sole. Se si preme di nuovo, il tempo riparte da capo. Collega i pulsanti alla bobina del relè temporizzato e le lampade al suo contatto. Poi dai corrente.',
    comps: [
      QM,
      C('P1', 'pb', 'Piano terra', 'Pulsante piano terra', { '3': { l: '3' }, '4': { l: '4' } }),
      C('P2', 'pb', 'Primo piano', 'Pulsante primo piano', { '3': { l: '3' }, '4': { l: '4' } }),
      C('T', 'tmr', 'Temporizzatore', 'Relè temporizzato', { A1: { l: 'A1' }, A2: { l: 'A2' }, '1': { l: '1' }, '2': { l: '2' } }, { time: 20 }),
      C('L1', 'lamp', 'Scala bassa', 'Lampada scala bassa', { B: { l: 'B' }, A: { l: 'A' } }),
      C('L2', 'lamp', 'Scala alta', 'Lampada scala alta', { B: { l: 'B' }, A: { l: 'A' } }),
    ],
    controls: ['P1', 'P2'],
    demoDo: [{ do: press('P1'), say: 'Pulsante premuto e rilasciato: le due lampade si accendono.' }, { do: ['wait 25'], say: 'Dopo il tempo impostato le lampade si spengono da sole.' }],
    checks: [
      { id: 'accende', label: 'Premi un pulsante: le due lampade si accendono', do: press('P1'), expect: { loads: { L1: 'on', L2: 'on' } } },
      { id: 'resta', label: 'Dopo 10 secondi le lampade sono ancora accese', do: press('P1').concat(['wait 10']), expect: { loads: { L1: 'on', L2: 'on' } } },
      { id: 'spegne', label: 'Dopo 25 secondi le lampade si sono spente da sole', do: press('P2').concat(['wait 25']), expect: { loads: { L1: 'off', L2: 'off' } } },
      { id: 'riparte', label: 'Se premi di nuovo, il tempo riparte da capo', steps: [{ do: press('P1').concat(['wait 15']), expect: { loads: { L1: 'on' } } }, { do: press('P2').concat(['wait 10']), expect: { loads: { L1: 'on', L2: 'on' } } }] },
    ],
    safety: { phaseSwitched: ['L1', 'L2'], coilReturn: ['T'] },
    solution: [
      ['Q.F', 'P1.3', 'marrone'], ['P1.3', 'P2.3', 'marrone'],
      ['P1.4', 'P2.4', 'marrone'], ['P2.4', 'T.A1', 'marrone'], ['T.A2', 'Q.N', 'blu'],
      ['Q.F', 'T.1', 'marrone'], ['T.2', 'L1.A', 'marrone'], ['T.2', 'L2.A', 'marrone'],
      ['L1.B', 'Q.N', 'blu'], ['L2.B', 'Q.N', 'blu'],
    ],
    hints: [
      'I due pulsanti sono in parallelo: i morsetti 3 sono collegati tra loro e alla fase, i morsetti 4 sono collegati tra loro.',
      'Dai morsetti 4 dei pulsanti un filo va alla bobina del temporizzatore (A1). L’altro capo della bobina (A2) va al neutro.',
      'Le lampade si alimentano dal contatto del temporizzatore: la fase arriva al morsetto 1, dal morsetto 2 vanno alle due lampade. I neutri vanno direttamente alle lampade.',
    ],
  },
  {
    id: 'c10-campanello', code: 'c10', n: 0, engine: 2, quadroOnly: true, flow: 'always', palette: ['marrone', 'nero', 'blu', 'gv', 'bianco'],
    name: 'Campanello e trasformatore', title: 'Il campanello e il trasformatore',
    blurb: 'Un trasformatore abbassa la tensione per il campanello.',
    goal: 'Il campanello funziona a 12 V: sulla rete a 230 V si brucerebbe. Collega il primario del trasformatore alla rete. Poi, sul secondario, collega il pulsante e il campanello in serie. Il circuito a bassa tensione ha i suoi colori. Poi dai corrente.',
    comps: [
      QM,
      C('SB', 'pb', 'Pulsante', 'Pulsante del campanello', { '3': { l: '3' }, '4': { l: '4' } }),
      C('TR', 'trafo', 'Trasformatore', 'Trasformatore 230/12 V', { '1': { l: '1' }, '2': { l: '2' }, '3': { l: '3' }, '4': { l: '4' } }, { vout: 12 }),
      C('B', 'bell', 'Campanello', 'Campanello 12 V', { '1': { l: '1' }, '2': { l: '2' } }),
    ],
    controls: ['SB'],
    demoDo: [{ do: ['press SB'], say: 'Pulsante premuto: il circuito a 12 V si chiude e il campanello suona.' }],
    checks: [
      { id: 'suona', label: 'Premi il pulsante: il campanello suona', do: ['press SB'], expect: { loads: { B: 'on' } } },
      { id: 'fermo', label: 'Senza premere il campanello è silenzioso', do: [], expect: { loads: { B: 'off' } } },
    ],
    safety: {},
    solution: [
      ['Q.F', 'TR.1', 'marrone'], ['TR.2', 'Q.N', 'blu'],
      ['TR.3', 'SB.3', 'bianco'], ['SB.4', 'B.1', 'bianco'], ['TR.4', 'B.2', 'bianco'],
    ],
    hints: [
      'Il primario del trasformatore (morsetti 1 e 2) si collega alla rete: la fase al morsetto 1, il neutro al morsetto 2. Il trasformatore resta sempre alimentato.',
      'Il campanello non va mai collegato alla rete: si collega al secondario del trasformatore, morsetti 3 e 4. Il pulsante sta in serie al campanello, sul secondario.',
      'I fili del circuito a bassa tensione non sono né fase né neutro: puoi usare il bianco.',
    ],
  },
  {
    id: 'c11-quadro', code: 'c11', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', palette: ['marrone', 'blu', 'gv'],
    name: 'Il quadro di casa', title: 'Il quadro di casa',
    blurb: 'Differenziale e magnetotermici su luce e prese.',
    goal: 'Costruisci il quadro di una piccola casa: un differenziale protegge tutto, poi due magnetotermici separati, uno per la luce e uno per le prese. La luce ha un interruttore. La presa ha la terra. Prova il tasto di prova del differenziale.',
    comps: [
      QM,
      C('D', 'rcd', 'Differenziale', 'Interruttore differenziale', { '1': { l: '1' }, N1: { l: 'N' }, '2': { l: '2' }, N2: { l: 'N' } }),
      C('M1', 'mt', 'Luce', 'Magnetotermico luce', { '1': { l: '1' }, N1: { l: 'N' }, '2': { l: '2' }, N2: { l: 'N' } }, { rank: 2 }),
      C('M2', 'mt', 'Prese', 'Magnetotermico prese', { '1': { l: '1' }, N1: { l: 'N' }, '2': { l: '2' }, N2: { l: 'N' } }, { rank: 2 }),
      C('S', 'sw', 'Interruttore', 'Interruttore della luce', { a: { l: '1' }, b: { l: '2' } }),
      C('L', 'lamp', 'Lampada', 'Portalampada', { B: { l: 'B' }, A: { l: 'A' } }),
      C('P', 'presa', 'Presa', 'Presa bipasso 10/16 A', { L: { l: 'L' }, PE: { l: 'PE' }, N: { l: 'N' } }),
      C('G', 'gu', 'Guasto', 'Apparecchio difettoso sulla presa', {}, { at: 'P.L', levels: [300] }),
    ],
    controls: ['D', 'M1', 'M2', 'S', 'G'],
    demoDo: [{ do: ['toggle S'], say: 'Interruttore chiuso: la lampada si accende.' }, { do: ['test D'], say: 'Tasto di prova: il differenziale scatta e tutto si spegne.' }],
    checks: [
      { id: 'presa', label: 'La presa è alimentata', do: [], expect: { loads: { P: 'on' } } },
      { id: 'luce', label: 'Chiudi l’interruttore: la lampada si accende', do: ['toggle S'], expect: { loads: { L: 'on' } } },
      { id: 'prova', label: 'Tasto di prova del differenziale: luce e presa si spengono', do: ['toggle S', 'test D'], expect: { loads: { L: 'off', P: 'off' }, tripped: ['D'] } },
      { id: 'dispersione', label: 'Un apparecchio sulla presa disperde verso terra: scatta il differenziale', do: ['toggle S', 'toggle G'], expect: { loads: { L: 'off', P: 'off' }, tripped: ['D'] } },
    ],
    safety: { earth: [['P.PE', 'Q.PE']], phaseSwitched: ['P', 'L'], pol: ['P.L', 'P.N'], rcdCovers: ['L', 'P'], protectedBy: { L: 'M1', P: 'M2' } },
    solution: [
      ['Q.F', 'D.1', 'marrone'], ['Q.N', 'D.N1', 'blu'],
      ['D.2', 'M1.1', 'marrone'], ['D.2', 'M2.1', 'marrone'], ['D.N2', 'M1.N1', 'blu'], ['D.N2', 'M2.N1', 'blu'],
      ['M1.2', 'S.a', 'marrone'], ['S.b', 'L.A', 'marrone'], ['M1.N2', 'L.B', 'blu'],
      ['M2.2', 'P.L', 'marrone'], ['M2.N2', 'P.N', 'blu'], ['Q.PE', 'P.PE', 'gv'],
    ],
    hints: [
      'In alto c’è il differenziale: fase e neutro del quadro entrano nei suoi morsetti in alto (1 e N). Tutto il resto dell’impianto si collega dopo di lui.',
      'Dall’uscita del differenziale fase e neutro si dividono in due linee: ciascuna passa da un magnetotermico (luce, prese). Fase sul morsetto 1, neutro sul morsetto N in ingresso.',
      'La luce passa dall’interruttore sulla fase, il neutro va diretto alla lampada. La presa prende fase e neutro dal suo magnetotermico, più la terra del quadro. Il neutro di ogni carico deve passare dal differenziale.',
    ],
  },
  {
    id: 'c21-tre-fasi', code: 'c21', n: 0, ...IND, flow: 'onDemand', meter: true,
    name: 'Le tre fasi', title: 'Le tre fasi',
    blurb: 'Tre fasi e neutro: 230 V da una fase al neutro, 400 V tra due fasi.',
    goal: 'Il quadro è trifase: L1, L2, L3 più il neutro. Collega una lampada da 230 V tra la fase L1 e il neutro. Poi misura con il multimetro la tensione tra L1 e il neutro e quella tra L1 e L2.',
    comps: [
      Q3,
      C('L', 'lamp', 'Lampada', 'Lampada da 230 V', { B: { l: 'B' }, A: { l: 'A' } }),
    ],
    controls: [],
    checks: [
      { id: 'acceso', label: 'La lampada, tra L1 e il neutro, è accesa', do: [], expect: { loads: { L: 'on' } } },
    ],
    measures: [
      { between: ['Q.L1', 'Q.N'], mode: 'V', value: 230, live: true, label: 'tensione tra la fase L1 e il neutro' },
      { between: ['Q.L1', 'Q.L2'], mode: 'V', value: 400, live: true, label: 'tensione tra le fasi L1 e L2' },
    ],
    safety: {},
    solution: [['Q.L1', 'L.A', 'marrone'], ['Q.N', 'L.B', 'blu']],
    hints: [
      'La lampada è da 230 V: va tra una fase e il neutro, non tra due fasi.',
      'La fase L1 (marrone) va a un morsetto della lampada, il neutro (blu) all’altro.',
      'Per misurare, tocca Multimetro, poi i due morsetti del quadro: il primo è il puntale rosso, il secondo il nero.',
    ],
  },
  {
    id: 'c22-teleruttore', code: 'c22', n: 0, ...IND, flow: 'onDemand',
    name: 'Il teleruttore', title: 'Il teleruttore',
    blurb: 'Un pulsante a 230 V comanda la potenza a 400 V.',
    goal: 'Il motore trifase passa dal salvamotore e dal teleruttore KM. La bobina di KM, a 230 V, si comanda con un pulsante: finché lo tieni premuto il teleruttore chiude i tre contatti di potenza e il motore gira, quando lo rilasci si ferma. Il circuito di comando va in rosso.',
    comps: [
      Q3,
      C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6), { init: 0 }),
      C('KM', 'km', 'Teleruttore', 'Teleruttore KM', T('A1', 'A2', ...T6, '13', '14')),
      C('SB1', 'pb', 'Marcia', 'Pulsante di marcia (NA)', T('3', '4')),
      C('M', 'motor3', 'Motore', 'Motore trifase', T('U', 'V', 'W', 'PE')),
    ],
    controls: ['QM', 'SB1'],
    demoDo: [{ do: ['toggle QM', 'press SB1'], say: 'Salvamotore chiuso e pulsante premuto: il teleruttore chiude e il motore gira.' }],
    checks: [
      { id: 'premuto', label: 'Chiudi il salvamotore e tieni premuto Marcia: il motore gira', do: ['toggle QM', 'press SB1'], expect: { motors: { M: 'fwd' } } },
      { id: 'rilasciato', label: 'Rilascia Marcia: il motore si ferma', steps: [{ do: ['toggle QM', 'press SB1'], expect: { motors: { M: 'fwd' } } }, { do: ['release SB1'], expect: { motors: { M: 'off' } } }] },
      { id: 'fermo', label: 'Senza comandi il motore è fermo', do: ['toggle QM'], expect: { motors: { M: 'off' } } },
    ],
    safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], coilReturn: ['KM'], protectedBy: { M: 'QM', KM: 'QM' } },
    solution: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
      ['KM.2', 'M.U', 'marrone'], ['KM.4', 'M.V', 'nero'], ['KM.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
      ['QM.2', 'SB1.3', 'rosso'], ['SB1.4', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
    ],
    hints: [
      'Potenza: le tre fasi passano dal salvamotore (1-2, 3-4, 5-6), dai tre contatti di potenza del teleruttore e arrivano a U, V, W del motore. Poi la terra del motore.',
      'Comando: una fase presa a valle del salvamotore va al pulsante di marcia (morsetto 3), dal morsetto 4 alla bobina A1. L’altro capo della bobina, A2, va al neutro.',
      'La bobina è da 230 V: tra una fase e il neutro. Tra due fasi riceverebbe 400 V e si brucerebbe. Si cabla con il salvamotore aperto.',
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
    safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], protectedBy: { M: 'QM' } },
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
    safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', coilReturn: ['KM'], protectedBy: { M: 'QM', KM: 'QM' } },
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
      'Il salvamotore parte chiuso: aprilo prima di cablare e richiudilo solo alla fine, per provare il motore.',
    ],
  },
  {
    id: 'c14-termico', code: 'c14', n: 0, ...IND, flow: 'onDemand',
    name: 'Relè termico', title: 'Il relè termico',
    blurb: 'La protezione del motore dal sovraccarico.',
    goal: 'Aggiungi al comando marcia e arresto il relè termico: sta in serie al motore e il suo contatto 95-96 interrompe il comando se il motore si sovraccarica. Prova il sovraccarico dal pulsante sotto la scena.',
    comps: [
      Q3,
      C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6)),
      C('KM', 'km', 'Contattore', 'Contattore KM', T('A1', 'A2', ...T6, '13', '14')),
      C('FR', 'ft', 'Termico', 'Relè termico', T(...T6, '95', '96'), { tripAfter: 3 }),
      C('SB0', 'pbnc', 'Arresto', 'Pulsante di arresto (NC)', T('1', '2')),
      C('SB1', 'pb', 'Marcia', 'Pulsante di marcia (NA)', T('3', '4')),
      C('H', 'spia', 'Spia', 'Spia di marcia', T('X1', 'X2')),
      C('M', 'motor3', 'Motore', 'Motore trifase', T('U', 'V', 'W', 'PE')),
    ],
    controls: ['SB0', 'SB1'],
    checks: [
      { id: 'marcia', label: 'Premi Marcia e rilascia: il motore resta in marcia e la spia è accesa', do: press('SB1'), expect: { motors: { M: 'fwd' }, loads: { H: 'on' } } },
      { id: 'arresto', label: 'Premi Arresto: il motore si ferma', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: press('SB0'), expect: { motors: { M: 'off' } } }] },
      { id: 'sovraccarico', label: 'Con un sovraccarico il termico scatta e il motore si ferma', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: ['overload on', 'wait 5'], expect: { motors: { M: 'off' }, tripped: ['FR'] } }] },
    ],
    safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', coilReturn: ['KM'], protectedBy: { M: 'QM', KM: 'QM' } },
    solution: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
      ['KM.2', 'FR.1', 'marrone'], ['KM.4', 'FR.3', 'nero'], ['KM.6', 'FR.5', 'grigio'],
      ['FR.2', 'M.U', 'marrone'], ['FR.4', 'M.V', 'nero'], ['FR.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
      ['QM.2', 'FR.95', 'rosso'], ['FR.96', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'], ['SB1.4', 'KM.A1', 'rosso'],
      ['KM.A2', 'Q.N', 'blu'], ['SB1.3', 'KM.13', 'rosso'], ['KM.14', 'SB1.4', 'rosso'], ['H.X1', 'KM.A1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
    ],
    hints: [
      'I tre poli del relè termico (1-2, 3-4, 5-6) stanno in serie tra il contattore e il motore.',
      'Il contatto 95-96 è normalmente chiuso e va nel circuito di comando, in serie, prima del pulsante di arresto.',
      'Il comando parte dal morsetto 2 del salvamotore, passa da 95-96 del termico, poi dall’arresto, dalla marcia e arriva alla bobina. L’autoritenuta e la spia restano come prima.',
      'Il salvamotore parte chiuso: aprilo prima di cablare e richiudilo solo alla fine, per provare il motore.',
    ],
  },
  {
    id: 'c15-inversione', code: 'c15', n: 0, ...IND, flow: 'onDemand',
    name: 'Inversione di marcia', title: 'Inversione di marcia',
    blurb: 'Due contattori e l’interblocco.',
    goal: 'Fai girare il motore in avanti e all’indietro con due contattori: il secondo scambia due fasi. Con i pulsanti Avanti e Indietro e uno di Arresto. I due contattori non devono mai chiudersi insieme.',
    comps: [
      Q3,
      C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6)),
      C('KM1', 'km', 'Avanti', 'Contattore KM1 (avanti)', T('A1', 'A2', ...T6, '13', '14', '21', '22')),
      C('KM2', 'km', 'Indietro', 'Contattore KM2 (indietro)', T('A1', 'A2', ...T6, '13', '14', '21', '22')),
      C('SB0', 'pbnc', 'Arresto', 'Pulsante di arresto (NC)', T('1', '2')),
      C('SB1', 'pb', 'Avanti', 'Pulsante Avanti (NA)', T('3', '4')),
      C('SB2', 'pb', 'Indietro', 'Pulsante Indietro (NA)', T('3', '4')),
      C('M', 'motor3', 'Motore', 'Motore trifase', T('U', 'V', 'W', 'PE')),
    ],
    controls: ['SB0', 'SB1', 'SB2'],
    demoDo: [
      { do: press('SB0'), say: 'Arresto premuto: il motore resta fermo.' },
      { do: press('SB1'), say: 'Avanti: KM1 si chiude e il motore gira in avanti.' },
      { do: press('SB0'), say: 'Per invertire si preme prima Arresto: il motore si ferma.' },
      { do: press('SB2'), say: 'Indietro: KM2 si chiude e il motore gira all’indietro.' },
    ],
    checks: [
      { id: 'avanti', label: 'Premi Avanti e rilascia: il motore gira in avanti', do: press('SB1'), expect: { motors: { M: 'fwd' } } },
      { id: 'indietro', label: 'Premi Indietro e rilascia: il motore gira all’indietro', do: press('SB2'), expect: { motors: { M: 'rev' } } },
      { id: 'arresto', label: 'Premi Arresto: il motore si ferma', steps: [{ do: press('SB2'), expect: { motors: { M: 'rev' } } }, { do: press('SB0'), expect: { motors: { M: 'off' } } }] },
    ],
    safety: { deadWork: ['QM'], never: [['KM1', 'KM2']], coilReturn: ['KM1', 'KM2'], stopWins: 'SB0', earth: [['M.PE', 'Q.PE']], protectedBy: { M: 'QM', KM1: 'QM', KM2: 'QM' } },
    solution: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM1.1', 'marrone'], ['QM.4', 'KM1.3', 'nero'], ['QM.6', 'KM1.5', 'grigio'],
      ['QM.2', 'KM2.1', 'marrone'], ['QM.4', 'KM2.3', 'nero'], ['QM.6', 'KM2.5', 'grigio'],
      ['KM1.2', 'M.U', 'marrone'], ['KM1.4', 'M.V', 'nero'], ['KM1.6', 'M.W', 'grigio'],
      ['KM2.2', 'M.W', 'marrone'], ['KM2.4', 'M.V', 'nero'], ['KM2.6', 'M.U', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
      ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'], ['SB0.2', 'SB2.3', 'rosso'],
      ['SB1.3', 'KM1.13', 'rosso'], ['KM1.14', 'SB1.4', 'rosso'], ['SB2.3', 'KM2.13', 'rosso'], ['KM2.14', 'SB2.4', 'rosso'],
      ['KM1.A2', 'Q.N', 'blu'], ['KM2.A2', 'Q.N', 'blu'],
      ['SB1.4', 'KM2.21', 'rosso'], ['KM2.22', 'KM1.A1', 'rosso'], ['SB2.4', 'KM1.21', 'rosso'], ['KM1.22', 'KM2.A1', 'rosso'],
    ],
    hints: [
      'Il contattore KM2 collega il motore con due fasi scambiate: i morsetti 2 e 6 vanno a W e a U invece che a U e a W.',
      'Il comando si divide in due rami, uno per ciascuna marcia, ognuno con la sua autoritenuta (13-14).',
      'L’interblocco: la bobina di KM1 passa dal contatto normalmente chiuso 21-22 di KM2, e la bobina di KM2 da quello di KM1. Se uno è chiuso l’altro non può chiudersi.',
      'Il salvamotore parte chiuso: aprilo prima di cablare e richiudilo solo alla fine, per provare il motore.',
    ],
  },
  {
    id: 'c16-nastro', code: 'c16', n: 0, ...IND, flow: 'onDemand',
    name: 'Nastro trasportatore', title: 'Il nastro trasportatore',
    blurb: 'Emergenza, finecorsa e una macchina completa.',
    goal: 'Comanda un nastro trasportatore: Marcia lo avvia, Arresto e il pulsante di emergenza lo fermano, e a fine corsa il finecorsa lo ferma da solo. Il motore ha il relè termico e una spia segnala la marcia.',
    machine: { motor: 'M', length: 6, endFwd: 'FC' },
    comps: [
      Q3,
      C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6)),
      C('KM', 'km', 'Contattore', 'Contattore KM', T('A1', 'A2', ...T6, '13', '14')),
      C('FR', 'ft', 'Termico', 'Relè termico', T(...T6, '95', '96'), { tripAfter: 3 }),
      C('SBE', 'fungo', 'Emergenza', 'Pulsante di emergenza a fungo', T('1', '2')),
      C('SB0', 'pbnc', 'Arresto', 'Pulsante di arresto (NC)', T('1', '2')),
      C('SB1', 'pb', 'Marcia', 'Pulsante di marcia (NA)', T('3', '4')),
      C('FC', 'fc', 'Finecorsa', 'Finecorsa di fine nastro', T('1', '2', '3', '4')),
      C('H', 'spia', 'Spia', 'Spia di marcia', T('X1', 'X2')),
      C('M', 'motor3', 'Motore', 'Motore del nastro', T('U', 'V', 'W', 'PE')),
    ],
    controls: ['SB0', 'SB1', 'SBE'],
    checks: [
      { id: 'marcia', label: 'Premi Marcia e rilascia: il nastro parte e la spia è accesa', do: press('SB1'), expect: { motors: { M: 'fwd' }, loads: { H: 'on' } } },
      { id: 'fine', label: 'A fine corsa il finecorsa ferma il nastro', do: press('SB1').concat(['wait 8']), expect: { machine: { atEnd: true }, motors: { M: 'off' } } },
      { id: 'arresto', label: 'Premi Arresto: il nastro si ferma', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: press('SB0'), expect: { motors: { M: 'off' } } }] },
      { id: 'emergenza', label: 'Premi il fungo di emergenza: il nastro si ferma', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: ['toggle SBE'], expect: { motors: { M: 'off' } } }] },
    ],
    safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', emergency: 'SBE', coilReturn: ['KM'], protectedBy: { M: 'QM', KM: 'QM' } },
    solution: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
      ['KM.2', 'FR.1', 'marrone'], ['KM.4', 'FR.3', 'nero'], ['KM.6', 'FR.5', 'grigio'],
      ['FR.2', 'M.U', 'marrone'], ['FR.4', 'M.V', 'nero'], ['FR.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
      ['QM.2', 'FR.95', 'rosso'], ['FR.96', 'SBE.1', 'rosso'], ['SBE.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'],
      ['SB1.4', 'FC.1', 'rosso'], ['FC.2', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
      ['SB1.3', 'KM.13', 'rosso'], ['KM.14', 'SB1.4', 'rosso'], ['H.X1', 'KM.A1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
    ],
    hints: [
      'La parte di potenza è come nel livello precedente: salvamotore, contattore, relè termico, motore e terra.',
      'Nel comando, in serie e prima dell’arresto, ci sono il contatto del termico (95-96) e il contatto NC del pulsante di emergenza.',
      'Il finecorsa sta dopo il pulsante di marcia, con il suo contatto normalmente chiuso (1-2), davanti alla bobina: quando il nastro arriva in fondo, il contatto si apre. L’autoritenuta si tiene prima del finecorsa.',
      'Il salvamotore parte chiuso: aprilo prima di cablare e richiudilo solo alla fine, per provare il motore.',
    ],
  },
  {
    id: 'c23-appartamento-notte', code: 'c23', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', meter: true, palette: ['marrone', 'blu', 'gv'],
    prova: { scene: 'appartamento' },
    name: 'L’appartamento di notte', title: 'L’appartamento di notte',
    blurb: 'Il differenziale è scattato: trova la linea che disperde.',
    goal: 'È notte e in casa è saltata la luce: il differenziale è scattato e non resta armato. Il quadro ha tre linee, luce, prese e cucina. Trova quella che disperde verso terra, rimetti in funzione le altre e rimuovi la causa.',
    comps: [
      QM,
      C('D', 'rcd', 'Differenziale', 'Interruttore differenziale', { '1': { l: '1' }, N1: { l: 'N' }, '2': { l: '2' }, N2: { l: 'N' } }),
      C('M1', 'mt', 'Luce', 'Magnetotermico luce', { '1': { l: '1' }, N1: { l: 'N' }, '2': { l: '2' }, N2: { l: 'N' } }, { rank: 2 }),
      C('M2', 'mt', 'Prese', 'Magnetotermico prese', { '1': { l: '1' }, N1: { l: 'N' }, '2': { l: '2' }, N2: { l: 'N' } }, { rank: 2 }),
      C('M3', 'mt', 'Cucina', 'Magnetotermico cucina', { '1': { l: '1' }, N1: { l: 'N' }, '2': { l: '2' }, N2: { l: 'N' } }, { rank: 2 }),
      C('S', 'sw', 'Interruttore', 'Interruttore della luce', { a: { l: '1' }, b: { l: '2' } }, { init: 1 }),   // la luce era accesa quando e' saltato il differenziale
      C('L', 'lamp', 'Lampada', 'Portalampada', { B: { l: 'B' }, A: { l: 'A' } }),
      C('P', 'presa', 'Presa', 'Presa del soggiorno', { L: { l: 'L' }, PE: { l: 'PE' }, N: { l: 'N' } }),
      C('PF', 'presa', 'Forno', 'Presa del forno', { L: { l: 'L' }, PE: { l: 'PE' }, N: { l: 'N' } }),
      C('G', 'gu', 'Guasto', 'Apparecchio difettoso sulla presa', {}, { at: 'P.L', levels: [300] }),
    ],
    controls: ['D', 'M1', 'M2', 'M3', 'S', 'G'],
    checks: [
      { id: 'prese', label: 'Le prese del soggiorno e del forno sono alimentate', do: [], expect: { loads: { P: 'on', PF: 'on' } } },
      { id: 'luce', label: 'Con l’interruttore chiuso la lampada è accesa', do: [], expect: { loads: { L: 'on' } } },
      { id: 'prova', label: 'Tasto di prova del differenziale: tutto si spegne', do: ['test D'], expect: { loads: { L: 'off', P: 'off', PF: 'off' }, tripped: ['D'] } },
    ],
    safety: { earth: [['P.PE', 'Q.PE'], ['PF.PE', 'Q.PE']], phaseSwitched: ['P', 'L', 'PF'], pol: ['P.L', 'P.N'], rcdCovers: ['L', 'P', 'PF'], protectedBy: { L: 'M1', P: 'M2', PF: 'M3' } },
    solution: [
      ['Q.F', 'D.1', 'marrone'], ['Q.N', 'D.N1', 'blu'],
      ['D.2', 'M1.1', 'marrone'], ['D.2', 'M2.1', 'marrone'], ['D.2', 'M3.1', 'marrone'],
      ['D.N2', 'M1.N1', 'blu'], ['D.N2', 'M2.N1', 'blu'], ['D.N2', 'M3.N1', 'blu'],
      ['M1.2', 'S.a', 'marrone'], ['S.b', 'L.A', 'marrone'], ['M1.N2', 'L.B', 'blu'],
      ['M2.2', 'P.L', 'marrone'], ['M2.N2', 'P.N', 'blu'], ['Q.PE', 'P.PE', 'gv'],
      ['M3.2', 'PF.L', 'marrone'], ['M3.N2', 'PF.N', 'blu'], ['Q.PE', 'PF.PE', 'gv'],
    ],
    hints: [
      'Il differenziale scatta quando una linea disperde. Apri i tre magnetotermici, riarma il differenziale e richiudi una linea alla volta.',
      'La linea che fa scattare di nuovo il differenziale appena la richiudi è quella che disperde.',
      'Sulla linea colpevole c’è un apparecchio con l’isolante rovinato: scollegalo, poi riarma il differenziale e richiudi le linee.',
    ],
  },
  {
    id: 'c24-officina', code: 'c24', n: 0, ...IND, flow: 'onDemand',
    prova: { scene: 'officina' },
    name: 'L’officina', title: 'L’officina',
    blurb: 'Collaudo di un nastro: marcia, arresto, termico, finecorsa.',
    goal: 'Il nastro dell’officina è stato appena montato. Collaudalo come si fa in cantiere: prova marcia, arresto, emergenza e finecorsa, poi simula un sovraccarico e guarda se il termico ferma davvero il nastro. Se qualcosa non va, trovalo e correggilo a salvamotore aperto.',
    machine: { motor: 'M', length: 6, endFwd: 'FC' },
    comps: [
      Q3,
      C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6)),
      C('KM', 'km', 'Contattore', 'Contattore KM', T('A1', 'A2', ...T6, '13', '14')),
      C('FR', 'ft', 'Termico', 'Relè termico', T(...T6, '95', '96'), { tripAfter: 3 }),
      C('SBE', 'fungo', 'Emergenza', 'Pulsante di emergenza a fungo', T('1', '2')),
      C('SB0', 'pbnc', 'Arresto', 'Pulsante di arresto (NC)', T('1', '2')),
      C('SB1', 'pb', 'Marcia', 'Pulsante di marcia (NA)', T('3', '4')),
      C('FC', 'fc', 'Finecorsa', 'Finecorsa di fine nastro', T('1', '2', '3', '4')),
      C('H', 'spia', 'Spia', 'Spia di marcia', T('X1', 'X2')),
      C('M', 'motor3', 'Motore', 'Motore del nastro', T('U', 'V', 'W', 'PE')),
    ],
    controls: ['SB0', 'SB1', 'SBE'],
    checks: [
      { id: 'marcia', label: 'Premi Marcia e rilascia: il nastro parte e la spia è accesa', do: press('SB1'), expect: { motors: { M: 'fwd' }, loads: { H: 'on' } } },
      { id: 'fine', label: 'A fine corsa il finecorsa ferma il nastro', do: press('SB1').concat(['wait 8']), expect: { machine: { atEnd: true }, motors: { M: 'off' } } },
      { id: 'arresto', label: 'Premi Arresto: il nastro si ferma', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: press('SB0'), expect: { motors: { M: 'off' } } }] },
      { id: 'emergenza', label: 'Premi il fungo di emergenza: il nastro si ferma', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: ['toggle SBE'], expect: { motors: { M: 'off' } } }] },
      { id: 'sovraccarico', label: 'Con un sovraccarico il termico scatta e il nastro si ferma', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: ['overload on', 'wait 5'], expect: { motors: { M: 'off' }, tripped: ['FR'] } }] },
    ],
    safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', emergency: 'SBE', coilReturn: ['KM'], protectedBy: { M: 'QM', KM: 'QM' } },
    solution: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
      ['KM.2', 'FR.1', 'marrone'], ['KM.4', 'FR.3', 'nero'], ['KM.6', 'FR.5', 'grigio'],
      ['FR.2', 'M.U', 'marrone'], ['FR.4', 'M.V', 'nero'], ['FR.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
      ['QM.2', 'FR.95', 'rosso'], ['FR.96', 'SBE.1', 'rosso'], ['SBE.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'],
      ['SB1.4', 'FC.1', 'rosso'], ['FC.2', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
      ['SB1.3', 'KM.13', 'rosso'], ['KM.14', 'SB1.4', 'rosso'], ['H.X1', 'KM.A1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
    ],
    hints: [
      'Premi Marcia, poi simula il sovraccarico: il termico scatta, ma il nastro si ferma?',
      'Il contatto 95-96 del termico deve stare in serie nel circuito di comando, prima del fungo di emergenza.',
      'Apri il salvamotore. Togli il filo che porta il comando dal salvamotore al fungo e collega invece: dal morsetto 2 del salvamotore al 95, dal 96 al fungo.',
    ],
  },

  {
    id: 'c25-fungo', code: 'c25', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', palette: ['marrone', 'blu'],
    name: 'Il fungo a due canali', title: 'Il fungo a due canali',
    blurb: 'Due contatti, due relè: l’emergenza che funziona anche se uno si guasta.',
    goal: 'Una macchina (qui una lampada) è alimentata da due relè in serie. Il fungo di emergenza ha due contatti, uno per canale: il primo comanda il relè K1, il secondo il relè K2. Premuto il fungo, la macchina si ferma; e si ferma anche se uno dei due relè resta incollato.',
    comps: [
      QM,
      C('E', 'fungo', 'Emergenza', 'Emergenza a due canali', T('1', '2', '3', '4')),
      C('K1', 'rel', 'Relè K1', 'Relè K1 (canale 1)', T('A1', 'A2', '11', '12', '14')),
      C('K2', 'rel', 'Relè K2', 'Relè K2 (canale 2)', T('A1', 'A2', '11', '12', '14')),
      C('L', 'lamp', 'Macchina', 'Macchina (lampada)', { B: { l: 'B' }, A: { l: 'A' } }),
    ],
    controls: ['E'],
    checks: [
      { id: 'marcia', label: 'Fungo sbloccato: la macchina è in marcia', do: [], expect: { loads: { L: 'on' } } },
      { id: 'emergenza', label: 'Premi il fungo: la macchina si ferma', steps: [{ do: [], expect: { loads: { L: 'on' } } }, { do: ['toggle E'], expect: { loads: { L: 'off' } } }] },
    ],
    safety: { dualChannel: [['K1.A1', 'K2.A1']], allContacts: ['E'], redundant: { stop: 'E', load: 'L', pair: ['K1', 'K2'] } },
    solution: [
      ['Q.F', 'E.1', 'marrone'], ['E.2', 'K1.A1', 'marrone'], ['K1.A2', 'Q.N', 'blu'],
      ['Q.F', 'E.3', 'marrone'], ['E.4', 'K2.A1', 'marrone'], ['K2.A2', 'Q.N', 'blu'],
      ['Q.F', 'K1.11', 'marrone'], ['K1.14', 'K2.11', 'marrone'], ['K2.14', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
    ],
    hints: [
      'Il fungo ha due contatti normalmente chiusi: 1-2 (canale 1) e 3-4 (canale 2). Ognuno alimenta una sola bobina.',
      'Il canale 1 porta la fase dal contatto 1-2 alla bobina di K1; il canale 2 la porta dal contatto 3-4 alla bobina di K2. Le due bobine tornano al neutro.',
      'I contatti dei relè (11-14) sono in serie sul carico: la fase passa da K1, poi da K2, poi arriva alla lampada. Basta che uno si apra per fermare la macchina.',
    ],
  },
  {
    id: 'c26-rele-sicurezza', code: 'c26', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', palette: ['marrone', 'blu'],
    name: 'Il relè di sicurezza', title: 'Il relè di sicurezza',
    blurb: 'Due canali, riarmo manuale e un contattore che non deve restare incollato.',
    goal: 'Il relè di sicurezza KS controlla i due canali del fungo. A fungo sbloccato, la macchina parte solo dopo il pulsante di riarmo. Il riarmo passa dal contatto NC del contattore KM: se KM resta incollato, KS non si riarma. Le uscite 13-14 e 23-24 sono in serie alla bobina di KM.',
    comps: [
      QM,
      C('E', 'fungo', 'Emergenza', 'Emergenza a due canali', T('1', '2', '3', '4')),
      C('SBR', 'pb', 'Riarmo', 'Pulsante di riarmo', T('3', '4')),
      C('KS', 'rs', 'Relè sicurezza', 'Relè di sicurezza KS', T('A1', 'A2', 'S12', 'S22', 'R', '13', '14', '23', '24')),
      C('KM', 'km', 'Contattore', 'Contattore KM', T('A1', 'A2', '1', '2', '21', '22')),
      C('L', 'lamp', 'Macchina', 'Macchina (lampada)', { B: { l: 'B' }, A: { l: 'A' } }),
    ],
    controls: ['SBR', 'E'],
    checks: [
      { id: 'prima', label: 'Prima del riarmo la macchina è ferma', do: [], expect: { loads: { L: 'off' } } },
      { id: 'riarmo', label: 'Premi e rilascia il riarmo: la macchina parte', do: press('SBR'), expect: { loads: { L: 'on' } } },
      { id: 'emergenza', label: 'Premi il fungo: la macchina si ferma', steps: [{ do: press('SBR'), expect: { loads: { L: 'on' } } }, { do: ['toggle E'], expect: { loads: { L: 'off' } } }] },
    ],
    safety: { dualChannel: [['KS.S12', 'KS.S22']], outputsSeries: ['KS'], allContacts: ['E'], restartNeedsReset: { stop: 'E', reset: 'SBR', load: 'L' }, feedbackMonitored: { km: 'KM', stop: 'E', reset: 'SBR', rs: 'KS' } },
    solution: [
      ['Q.F', 'E.1', 'marrone'], ['E.2', 'KS.S12', 'marrone'], ['Q.F', 'E.3', 'marrone'], ['E.4', 'KS.S22', 'marrone'],
      ['Q.F', 'KS.A1', 'marrone'], ['KS.A2', 'Q.N', 'blu'],
      ['Q.F', 'KM.21', 'marrone'], ['KM.22', 'SBR.3', 'marrone'], ['SBR.4', 'KS.R', 'marrone'],
      ['Q.F', 'KS.13', 'marrone'], ['KS.14', 'KS.23', 'marrone'], ['KS.24', 'KM.A1', 'marrone'], ['KM.A2', 'Q.N', 'blu'],
      ['Q.F', 'KM.1', 'marrone'], ['KM.2', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
    ],
    hints: [
      'I due contatti del fungo portano la fase ai due ingressi del relè di sicurezza: 1-2 a S12, 3-4 a S22. Sono due fili che non si toccano.',
      'Il relè di sicurezza si alimenta in A1-A2 (fase e neutro). Le sue uscite 13-14 e 23-24 sono in serie, e alimentano la bobina del contattore KM.',
      'Il riarmo: dalla fase, prima il contatto NC 21-22 del contattore, poi il pulsante di riarmo, poi il morsetto R. Il relè si arma quando rilasci il pulsante. Se il contattore resta incollato il contatto NC è aperto e il relè non si riarma.',
      'La macchina (la lampada) si alimenta dal contatto di potenza del contattore, 1-2.',
    ],
  },
  {
    id: 'c27-portella', code: 'c27', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', palette: ['marrone', 'blu'],
    name: 'Portella e barriera', title: 'Portella e barriera',
    blurb: 'Più dispositivi di sicurezza in serie: la macchina non riparte da sola.',
    goal: 'Alla macchina del livello precedente si aggiungono una portella e una barriera, con due contatti ciascuna. Su ogni canale i tre dispositivi (fungo, portella, barriera) stanno in serie. Aprendo uno qualunque la macchina si ferma, e richiudendolo non riparte da sola: serve il riarmo.',
    comps: [
      QM,
      C('E', 'fungo', 'Emergenza', 'Emergenza a due canali', T('1', '2', '3', '4')),
      C('P', 'port', 'Portella', 'Portella a due canali', T('1', '2', '3', '4')),
      C('B', 'port', 'Barriera', 'Barriera a due canali', T('1', '2', '3', '4')),
      C('SBR', 'pb', 'Riarmo', 'Pulsante di riarmo', T('3', '4')),
      C('KS', 'rs', 'Relè sicurezza', 'Relè di sicurezza KS', T('A1', 'A2', 'S12', 'S22', 'R', '13', '14', '23', '24')),
      C('KM', 'km', 'Contattore', 'Contattore KM', T('A1', 'A2', '1', '2', '21', '22')),
      C('L', 'lamp', 'Macchina', 'Macchina (lampada)', { B: { l: 'B' }, A: { l: 'A' } }),
    ],
    controls: ['SBR', 'E', 'P', 'B'],
    checks: [
      { id: 'riarmo', label: 'Premi e rilascia il riarmo: la macchina parte', do: press('SBR'), expect: { loads: { L: 'on' } } },
      { id: 'emergenza', label: 'Premi il fungo: la macchina si ferma', steps: [{ do: press('SBR'), expect: { loads: { L: 'on' } } }, { do: ['toggle E'], expect: { loads: { L: 'off' } } }] },
      { id: 'portella', label: 'Apri la portella: la macchina si ferma', steps: [{ do: press('SBR'), expect: { loads: { L: 'on' } } }, { do: ['toggle P'], expect: { loads: { L: 'off' } } }] },
      { id: 'barriera', label: 'Interrompi la barriera: la macchina si ferma', steps: [{ do: press('SBR'), expect: { loads: { L: 'on' } } }, { do: ['toggle B'], expect: { loads: { L: 'off' } } }] },
      { id: 'riparte', label: 'Richiudi la portella: la macchina resta ferma finché non riarmi', steps: [{ do: press('SBR'), expect: { loads: { L: 'on' } } }, { do: ['toggle P', 'toggle P'], expect: { loads: { L: 'off' } } }, { do: press('SBR'), expect: { loads: { L: 'on' } } }] },
    ],
    safety: { dualChannel: [['KS.S12', 'KS.S22']], outputsSeries: ['KS'], allContacts: ['E', 'P', 'B'], restartNeedsReset: { stop: ['E', 'P', 'B'], reset: 'SBR', load: 'L' }, feedbackMonitored: { km: 'KM', stop: 'E', reset: 'SBR', rs: 'KS' } },
    solution: [
      ['Q.F', 'E.1', 'marrone'], ['E.2', 'P.1', 'marrone'], ['P.2', 'B.1', 'marrone'], ['B.2', 'KS.S12', 'marrone'],
      ['Q.F', 'E.3', 'marrone'], ['E.4', 'P.3', 'marrone'], ['P.4', 'B.3', 'marrone'], ['B.4', 'KS.S22', 'marrone'],
      ['Q.F', 'KS.A1', 'marrone'], ['KS.A2', 'Q.N', 'blu'],
      ['Q.F', 'KM.21', 'marrone'], ['KM.22', 'SBR.3', 'marrone'], ['SBR.4', 'KS.R', 'marrone'],
      ['Q.F', 'KS.13', 'marrone'], ['KS.14', 'KS.23', 'marrone'], ['KS.24', 'KM.A1', 'marrone'], ['KM.A2', 'Q.N', 'blu'],
      ['Q.F', 'KM.1', 'marrone'], ['KM.2', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
    ],
    hints: [
      'La parte del relè di sicurezza, del riarmo e del contattore è quella del livello precedente.',
      'Su ciascun canale i dispositivi sono in serie: fase, fungo, portella, barriera, ingresso del relè. Il canale 1 usa i contatti 1-2, il canale 2 i contatti 3-4.',
      'Ogni dispositivo ha due contatti e vanno usati tutti e due: uno per canale. Un contatto lasciato libero toglie la ridondanza.',
    ],
  },
  {
    id: 'c28-stella-triangolo', code: 'c28', n: 0, ...IND, flow: 'onDemand',
    name: 'Stella-triangolo', title: 'Stella-triangolo',
    blurb: 'Un motore grande parte con poca corrente e poi passa a piena potenza.',
    goal: 'Il motore a sei morsetti è già collegato a tre contattori: KM1 di linea, KM2 di stella e KM3 di triangolo. Il circuito di potenza è fatto. Cabla il comando: con Marcia il motore parte in stella; dopo il ritardo del temporizzatore KT, KM2 si apre e KM3 chiude e il motore passa in triangolo. KM2 e KM3 non devono mai chiudere insieme. Il circuito di comando va in rosso.',
    fixed: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM1.1', 'marrone'], ['QM.4', 'KM1.3', 'nero'], ['QM.6', 'KM1.5', 'grigio'],
      ['KM1.2', 'M.U1', 'marrone'], ['KM1.4', 'M.V1', 'nero'], ['KM1.6', 'M.W1', 'grigio'],
      ['KM2.1', 'M.U2', 'marrone'], ['KM2.3', 'M.V2', 'nero'], ['KM2.5', 'M.W2', 'grigio'],
      ['KM2.2', 'KM2.4', 'nero'], ['KM2.4', 'KM2.6', 'nero'],
      ['KM3.1', 'M.U1', 'marrone'], ['KM3.2', 'M.W2', 'grigio'],
      ['KM3.3', 'M.V1', 'nero'], ['KM3.4', 'M.U2', 'marrone'],
      ['KM3.5', 'M.W1', 'grigio'], ['KM3.6', 'M.V2', 'nero'],
      ['M.PE', 'Q.PE', 'gv'],
    ],
    comps: [
      Q3,
      C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6)),
      C('KM1', 'km', 'KM1 linea', 'Contattore di linea KM1', T('A1', 'A2', ...T6, '13', '14')),
      C('KM2', 'km', 'KM2 stella', 'Contattore di stella KM2', T('A1', 'A2', ...T6, '21', '22')),
      C('KM3', 'km', 'KM3 triangolo', 'Contattore di triangolo KM3', T('A1', 'A2', ...T6, '21', '22')),
      C('KT', 'kt', 'Temporizzatore', 'Temporizzatore KT (ritardo all’eccitazione)', T('A1', 'A2', '15', '16', '18'), { time: 6 }),
      C('SB0', 'pbnc', 'Arresto', 'Pulsante di arresto (NC)', T('1', '2')),
      C('SB1', 'pb', 'Marcia', 'Pulsante di marcia (NA)', T('3', '4')),
      C('M', 'motor6', 'Motore', 'Motore trifase a sei morsetti', T('U1', 'V1', 'W1', 'U2', 'V2', 'W2', 'PE')),
    ],
    controls: ['SB0', 'SB1'],
    demoDo: [
      { do: press('SB1'), say: 'Marcia: KM1 e KM2 chiudono, il motore parte in stella.' },
      { do: ['wait 8'], say: 'Scaduto il ritardo KM2 si apre e KM3 chiude: il motore passa in triangolo.' },
      { do: press('SB0'), say: 'Arresto: tutto si ferma. Ripremendo Marcia si riparte sempre in stella.' },
    ],
    checks: [
      { id: 'stella', label: 'Premi Marcia e rilascia: il motore parte in stella', do: press('SB1'), expect: { motors: { M: 'fwd' }, modes: { M: 'star' } } },
      { id: 'triangolo', label: 'Dopo il ritardo il motore passa in triangolo', steps: [{ do: press('SB1'), expect: { modes: { M: 'star' } } }, { do: ['wait 8'], expect: { motors: { M: 'fwd' }, modes: { M: 'delta' } } }] },
      { id: 'arresto', label: 'Premi Arresto: il motore si ferma', steps: [{ do: press('SB1').concat(['wait 8']), expect: { modes: { M: 'delta' } } }, { do: press('SB0'), expect: { motors: { M: 'off' } } }] },
      { id: 'riavvio', label: 'Dopo un arresto si riparte di nuovo in stella', steps: [{ do: press('SB1').concat(['wait 8']), expect: { modes: { M: 'delta' } } }, { do: press('SB0'), expect: { motors: { M: 'off' } } }, { do: press('SB1'), expect: { modes: { M: 'star' } } }] },
      { id: 'fermo', label: 'Senza comandi il motore è fermo', do: [], expect: { motors: { M: 'off' } } },
    ],
    safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', never: [['KM2', 'KM3']], weldedInterlock: { pairs: [['KM2', 'KM3']], start: press('SB1'), stop: press('SB0') }, coilReturn: ['KM1', 'KM2', 'KM3', 'KT'], protectedBy: { M: 'QM', KM1: 'QM' } },
    solution: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM1.1', 'marrone'], ['QM.4', 'KM1.3', 'nero'], ['QM.6', 'KM1.5', 'grigio'],
      ['KM1.2', 'M.U1', 'marrone'], ['KM1.4', 'M.V1', 'nero'], ['KM1.6', 'M.W1', 'grigio'],
      ['KM2.1', 'M.U2', 'marrone'], ['KM2.3', 'M.V2', 'nero'], ['KM2.5', 'M.W2', 'grigio'],
      ['KM2.2', 'KM2.4', 'nero'], ['KM2.4', 'KM2.6', 'nero'],
      ['KM3.1', 'M.U1', 'marrone'], ['KM3.2', 'M.W2', 'grigio'],
      ['KM3.3', 'M.V1', 'nero'], ['KM3.4', 'M.U2', 'marrone'],
      ['KM3.5', 'M.W1', 'grigio'], ['KM3.6', 'M.V2', 'nero'],
      ['M.PE', 'Q.PE', 'gv'],
      ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'], ['SB1.4', 'KM1.A1', 'rosso'], ['KM1.A2', 'Q.N', 'blu'],
      ['SB1.3', 'KM1.13', 'rosso'], ['KM1.14', 'SB1.4', 'rosso'],
      ['KM1.A1', 'KT.A1', 'rosso'], ['KT.A2', 'Q.N', 'blu'], ['KM1.A1', 'KT.15', 'rosso'],
      ['KT.16', 'KM3.21', 'rosso'], ['KM3.22', 'KM2.A1', 'rosso'], ['KM2.A2', 'Q.N', 'blu'],
      ['KT.18', 'KM2.21', 'rosso'], ['KM2.22', 'KM3.A1', 'rosso'], ['KM3.A2', 'Q.N', 'blu'],
    ],
    hints: [
      'La potenza è già cablata. Il comando parte come in marcia e arresto: dal salvamotore all’arresto, alla marcia, alla bobina di KM1, con l’autoritenuta 13-14 in parallelo alla marcia.',
      'Il temporizzatore KT si alimenta insieme a KM1: A1 sul punto della bobina di KM1, A2 al neutro. Il suo morsetto comune 15 va allo stesso punto.',
      'Stella: dal contatto 16 (chiuso a riposo) passando dal contatto NC 21-22 di KM3 alla bobina di KM2. Triangolo: dal contatto 18 (chiuso dopo il ritardo) passando dal contatto NC 21-22 di KM2 alla bobina di KM3.',
      'I due contatti NC incrociati sono l’interblocco: KM3 non può chiudere finché KM2 è chiuso, e viceversa. Senza interblocco, un attimo con i due insieme mette in corto le tre fasi.',
    ],
  },
  {
    id: 'c29-plc', code: 'c29', n: 0, ...IND, flow: 'onDemand',
    name: 'Dal relè al PLC', title: 'Dal relè al PLC',
    blurb: 'Marcia e arresto di prima: la logica passa dai fili a un programma.',
    goal: 'Stessa macchina di marcia e arresto, ma la logica non è più nei fili: la fa un PLC con un programma già scritto. Il circuito di potenza è già cablato. Collega il PLC: l’alimentazione, il pulsante di arresto (NC) all’ingresso I0, la marcia (NA) a I1, il comune IC al neutro, l’uscita Q0 alla bobina del contattore e Q1 alla spia. Il circuito di comando va in rosso.',
    fixed: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
      ['KM.2', 'M.U', 'marrone'], ['KM.4', 'M.V', 'nero'], ['KM.6', 'M.W', 'grigio'],
      ['M.PE', 'Q.PE', 'gv'],
    ],
    comps: [
      Q3,
      C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6)),
      C('KM', 'km', 'Contattore', 'Contattore KM', T('A1', 'A2', ...T6)),
      C('PLC', 'plc', 'PLC', 'PLC a 3 ingressi e 2 uscite', T('A1', 'A2', 'I0', 'I1', 'I2', 'IC', 'Q0A', 'Q0B', 'Q1A', 'Q1B'), {
        program: [
          { if: ['and', ['or', 'I1', 'Q0'], 'I0'], do: [{ op: 'coil', a: 'Q0' }] },
          { if: 'Q0', do: [{ op: 'coil', a: 'Q1' }] },
        ],
        symbols: { I0: 'Arresto', I1: 'Marcia', Q0: 'Motore', Q1: 'Spia' },
      }),
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
    safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', coilReturn: ['KM', 'PLC'], protectedBy: { M: 'QM', KM: 'QM' } },
    solution: [
      ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
      ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
      ['KM.2', 'M.U', 'marrone'], ['KM.4', 'M.V', 'nero'], ['KM.6', 'M.W', 'grigio'],
      ['M.PE', 'Q.PE', 'gv'],
      ['QM.2', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'],
      ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'PLC.I0', 'rosso'],
      ['QM.2', 'SB1.3', 'rosso'], ['SB1.4', 'PLC.I1', 'rosso'],
      ['PLC.IC', 'Q.N', 'blu'],
      ['QM.2', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
      ['QM.2', 'PLC.Q1A', 'rosso'], ['PLC.Q1B', 'H.X1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
    ],
    hints: [
      'Il PLC si alimenta come una bobina: A1 a una fase a valle del salvamotore, A2 al neutro. IC, il comune degli ingressi, va al neutro.',
      'Gli ingressi leggono la tensione dei pulsanti: dalla fase passa il pulsante di arresto e arriva a I0, dalla fase passa il pulsante di marcia e arriva a I1.',
      'Le uscite sono contatti a relè: la fase entra in Q0A, esce da Q0B e va alla bobina del contattore. Q1A e Q1B alimentano la spia allo stesso modo.',
      'Il salvamotore parte chiuso: aprilo prima di cablare e richiudilo solo alla fine.',
    ],
  },
];

// c30: stessa macchina di c29, ma tutto il cablaggio e' gia' fatto e il programma del PLC lo scrive l'allievo.
const C29 = LEVELS_V2.find(l => l.id === 'c29-plc');
LEVELS_V2.push({
  ...C29,
  id: 'c30-ladder', code: 'c30',
  name: 'Ladder: l’autoritenuta', title: 'Ladder: l’autoritenuta',
  blurb: 'Scrivi tu il programma: marcia, arresto e spia.',
  goal: 'L’impianto è cablato e il PLC è acceso, ma il programma è vuoto. Scrivilo tu: con Marcia il motore parte e resta in marcia a pulsante rilasciato, con Arresto si ferma, e la spia segue il motore. Ricorda che l’arresto è un contatto normalmente chiuso: a riposo porta tensione e l’ingresso I0 vale 1.',
  fixed: C29.solution.map(w => w.slice()),
  comps: C29.comps.map(c => (c.type === 'plc'
    ? { ...c, program: undefined, title: 'PLC (programma da scrivere)', edit: { markers: 0, timers: 0, counters: 0, ops: ['coil'] } }
    : c)),
  solutionPrograms: {
    PLC: [
      { if: ['and', ['or', 'I1', 'Q0'], 'I0'], do: [{ op: 'coil', a: 'Q0' }] },
      { if: 'Q0', do: [{ op: 'coil', a: 'Q1' }] },
    ],
  },
  hints: [
    'Un gradino ha i contatti a sinistra e la bobina a destra. Il motore è l’uscita Q0: la sua bobina sta a destra del gradino 1.',
    'Per far partire il motore serve il contatto di Marcia, I1. Ma Marcia è un impulso: appena lo rilasci vale 0. Per tenere acceso Q0 aggiungi in parallelo a I1 il contatto di Q0 stesso.',
    'L’arresto è collegato come contatto NC, quindi I0 vale 1 a riposo e vale 0 solo premendolo: in serie metti I0 come contatto normalmente aperto, non chiuso.',
    'Il gradino 2 è semplice: un contatto Q0 e la bobina Q1, la spia.',
  ],
});

// c31: stella-triangolo comandato dal PLC. La potenza e il cablaggio sono fatti; il programma parte con il gradino del motore (come c30)
// e l'allievo aggiunge il temporizzatore, la stella e il triangolo.
const C28 = LEVELS_V2.find(l => l.id === 'c28-stella-triangolo');
const PLC_WIRES_31 = [
  ['QM.2', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'],
  ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'PLC.I0', 'rosso'],
  ['QM.2', 'SB1.3', 'rosso'], ['SB1.4', 'PLC.I1', 'rosso'],
  ['PLC.IC', 'Q.N', 'blu'],
  ['QM.2', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'KM1.A1', 'rosso'], ['KM1.A2', 'Q.N', 'blu'],
  // l'interblocco resta nei fili, come in c28: la stella passa dal contatto NC di KM3 e il triangolo da quello di KM2
  ['QM.2', 'PLC.Q1A', 'rosso'], ['PLC.Q1B', 'KM3.21', 'rosso'], ['KM3.22', 'KM2.A1', 'rosso'], ['KM2.A2', 'Q.N', 'blu'],
  ['QM.2', 'PLC.Q2A', 'rosso'], ['PLC.Q2B', 'KM2.21', 'rosso'], ['KM2.22', 'KM3.A1', 'rosso'], ['KM3.A2', 'Q.N', 'blu'],
];
const POWER_31 = C28.fixed.map(w => w.slice());
const PROG_31 = [
  { if: ['and', ['or', 'I1', 'Q0'], 'I0'], do: [{ op: 'coil', a: 'Q0' }] },
  { if: 'Q0', do: [{ op: 'ton', id: 'T1', pt: 6 }] },
  { if: ['and', 'Q0', ['not', 'T1']], do: [{ op: 'coil', a: 'Q1' }] },
  { if: ['and', 'Q0', 'T1'], do: [{ op: 'coil', a: 'Q2' }] },
];
LEVELS_V2.push({
  ...C28,
  id: 'c31-tempo', code: 'c31',
  name: 'Il temporizzatore', title: 'Il temporizzatore nel PLC',
  blurb: 'Stella-triangolo senza temporizzatore a parte: il tempo sta nel programma.',
  goal: 'È il motore di stella-triangolo, ma ora i tre contattori li comanda un PLC e il temporizzatore KT non c’è più: il tempo si conta nel programma. L’interblocco tra stella e triangolo resta nei fili, come prima. Il PLC ha già il gradino di marcia e arresto, che accende Q0 (la linea KM1). Aggiungi tu un temporizzatore di 6 secondi, e due gradini: Q1 (stella, KM2) per i primi 6 secondi, Q2 (triangolo, KM3) dopo. Anche nel programma stella e triangolo non devono mai essere accesi insieme.',
  fixed: POWER_31.concat(PLC_WIRES_31),
  comps: [
    C28.comps.find(c => c.id === 'Q'),
    C28.comps.find(c => c.id === 'QM'),
    { ...C28.comps.find(c => c.id === 'KM1'), terms: T('A1', 'A2', ...T6) },
    C28.comps.find(c => c.id === 'KM2'),
    C28.comps.find(c => c.id === 'KM3'),
    C('PLC', 'plc', 'PLC', 'PLC (programma da completare)', T('A1', 'A2', 'I0', 'I1', 'I2', 'IC', 'Q0A', 'Q0B', 'Q1A', 'Q1B', 'Q2A', 'Q2B'), {
      symbols: { I0: 'Arresto', I1: 'Marcia', Q0: 'Linea KM1', Q1: 'Stella KM2', Q2: 'Triangolo KM3', T1: 'Ritardo' },
      edit: { markers: 0, timers: 1, counters: 0, ops: ['coil', 'ton'], start: [PROG_31[0]] },
    }),
    C28.comps.find(c => c.id === 'SB0'),
    C28.comps.find(c => c.id === 'SB1'),
    C28.comps.find(c => c.id === 'M'),
  ],
  demoDo: undefined,
  checks: C28.checks,
  safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', never: [['KM2', 'KM3']], outputsNeverTogether: [['PLC.Q1', 'PLC.Q2']], coilReturn: ['KM1', 'KM2', 'KM3', 'PLC'], protectedBy: { M: 'QM', KM1: 'QM' } },
  solution: POWER_31.concat(PLC_WIRES_31),
  solutionPrograms: { PLC: PROG_31 },
  hints: [
    'Il gradino 1 c’è già: accende Q0 con Marcia, Arresto e autoritenuta. Gli altri tre li aggiungi tu.',
    'Il temporizzatore parte quando Q0 è acceso: un gradino con il contatto Q0 e, come uscita, il temporizzatore T1 impostato a 6 secondi. T1 diventa 1 solo dopo 6 secondi.',
    'La stella (Q1) è accesa mentre Q0 è acceso e T1 vale ancora 0: contatto Q0 in serie con T1 normalmente chiuso, bobina Q1.',
    'Il triangolo (Q2) è acceso quando Q0 è acceso e T1 vale 1: contatto Q0 in serie con T1 normalmente aperto, bobina Q2. Così anche nel programma stella e triangolo non sono mai accesi insieme.',
  ],
});

// c32: il nastro con il PLC. Fotocellula e conteggio nel programma; fungo e termico restano cablati in serie alla bobina del contattore.
const W32_POWER = [
  ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
  ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
  ['KM.2', 'FR.1', 'marrone'], ['KM.4', 'FR.3', 'nero'], ['KM.6', 'FR.5', 'grigio'],
  ['FR.2', 'M.U', 'marrone'], ['FR.4', 'M.V', 'nero'], ['FR.6', 'M.W', 'grigio'],
  ['M.PE', 'Q.PE', 'gv'],
];
const W32_PLC = [
  ['QM.2', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
  ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'PLC.I0', 'rosso'],
  ['QM.2', 'SB1.3', 'rosso'], ['SB1.4', 'PLC.I1', 'rosso'],
  ['QM.2', 'PH.3', 'rosso'], ['PH.4', 'PLC.I2', 'rosso'],
  // il comando del contattore passa dal fungo e dal termico, nei fili: il programma non puo' saltarli
  ['QM.2', 'SBE.1', 'rosso'], ['SBE.2', 'FR.95', 'rosso'], ['FR.96', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
  // consenso delle sicurezze: il punto dopo fungo e termico arriva anche all'ingresso I3, cosi' il programma sa se sono a posto
  ['FR.96', 'PLC.I3', 'rosso'],
  ['QM.2', 'PLC.Q1A', 'rosso'], ['PLC.Q1B', 'H.X1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
];
const PROG_32 = [
  { if: 'I2', do: [{ op: 'ctu', id: 'C1', pv: 3, r: 'I1' }] },
  { if: ['and', ['or', 'I1', 'Q0'], 'I0', 'I3', ['not', 'C1']], do: [{ op: 'coil', a: 'Q0' }] },
  { if: 'C1', do: [{ op: 'coil', a: 'Q1' }] },
];
const batch = n => Array.from({ length: n }, () => press('PH')).flat();
LEVELS_V2.push({
  id: 'c32-nastro-plc', code: 'c32', n: 0, ...IND, flow: 'onDemand',
  name: 'Il nastro con il PLC', title: 'Il nastro con il PLC',
  blurb: 'Una fotocellula conta i pacchi: a tre il nastro si ferma. Fungo e termico restano nei fili.',
  goal: 'Un nastro trasporta pacchi in lotti da tre. Una fotocellula vede passare ogni pacco; dopo il terzo il nastro si ferma e una spia segnala il lotto completo. Con Marcia parte un lotto nuovo. L’impianto è cablato: il fungo di emergenza e il relè termico passano dai fili, in serie alla bobina del contattore, e il PLC ne legge soltanto lo stato sull’ingresso I3. Scrivi il programma.',
  fixed: W32_POWER.concat(W32_PLC),
  comps: [
    Q3,
    C('QM', 'mt3', 'Salvamotore', 'Salvamotore magnetotermico', T(...T6)),
    C('KM', 'km', 'Contattore', 'Contattore KM', T('A1', 'A2', ...T6)),
    C('FR', 'ft', 'Termico', 'Relè termico', T(...T6, '95', '96'), { tripAfter: 3 }),
    C('PLC', 'plc', 'PLC', 'PLC (programma da scrivere)', T('A1', 'A2', 'I0', 'I1', 'I2', 'I3', 'IC', 'Q0A', 'Q0B', 'Q1A', 'Q1B'), {
      symbols: { I0: 'Arresto', I1: 'Marcia', I2: 'Fotocellula', I3: 'Sicurezze', Q0: 'Nastro', Q1: 'Lotto pieno', C1: 'Pacchi' },
      edit: { markers: 0, timers: 0, counters: 1, ops: ['coil', 'ctu'] },
    }),
    C('SBE', 'fungo', 'Emergenza', 'Pulsante di emergenza a fungo', T('1', '2')),
    C('SB0', 'pbnc', 'Arresto', 'Pulsante di arresto (NC)', T('1', '2')),
    C('SB1', 'pb', 'Marcia', 'Pulsante di marcia (NA)', T('3', '4')),
    C('PH', 'pb', 'Fotocellula', 'Fotocellula: un pacco in transito (NA)', T('3', '4')),
    C('H', 'spia', 'Lotto pieno', 'Spia di lotto completo', T('X1', 'X2')),
    C('M', 'motor3', 'Nastro', 'Motore del nastro', T('U', 'V', 'W', 'PE')),
  ],
  controls: ['SBE', 'SB0', 'SB1', 'PH'],
  demoDo: [{ do: press('SB1'), say: '' }],
  checks: [
    { id: 'marcia', label: 'Premi Marcia: il nastro parte e resta in marcia', do: press('SB1'), expect: { motors: { M: 'fwd' }, loads: { H: 'off' } } },
    { id: 'due', label: 'Passano due pacchi: il nastro continua', do: press('SB1').concat(batch(2)), expect: { motors: { M: 'fwd' }, loads: { H: 'off' } } },
    { id: 'tre', label: 'Passa il terzo pacco: il nastro si ferma e la spia si accende', do: press('SB1').concat(batch(3)), expect: { motors: { M: 'off' }, loads: { H: 'on' } } },
    { id: 'nuovo', label: 'Con Marcia parte un lotto nuovo e la spia si spegne', steps: [{ do: press('SB1').concat(batch(3)), expect: { motors: { M: 'off' }, loads: { H: 'on' } } }, { do: press('SB1'), expect: { motors: { M: 'fwd' }, loads: { H: 'off' } } }] },
    { id: 'arresto', label: 'Premi Arresto: il nastro si ferma', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: press('SB0'), expect: { motors: { M: 'off' } } }] },
    { id: 'termico', label: 'Con un sovraccarico il termico scatta e il nastro si ferma', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: ['overload on', 'wait 5'], expect: { motors: { M: 'off' }, tripped: ['FR'] } }] },
    { id: 'riarmo', label: 'Riarmato il termico, il nastro non riparte da solo', steps: [{ do: press('SB1'), expect: { motors: { M: 'fwd' } } }, { do: ['overload on', 'wait 5'], expect: { motors: { M: 'off' }, tripped: ['FR'] } }, { do: ['overload off', 'reset FR'], expect: { motors: { M: 'off' } } }] },
    { id: 'fermo', label: 'Senza comandi il nastro è fermo', do: [], expect: { motors: { M: 'off' } } },
  ],
  safety: { deadWork: ['QM'], earth: [['M.PE', 'Q.PE']], stopWins: 'SB0', emergency: 'SBE', emergencyHardwired: { stop: 'SBE', start: ['SB1'] }, coilReturn: ['KM', 'PLC'], protectedBy: { M: 'QM', KM: 'QM' } },
  solution: W32_POWER.concat(W32_PLC),
  solutionPrograms: { PLC: PROG_32 },
  hints: [
    'Il conteggio: un gradino con il contatto della fotocellula I2 e, come uscita, un contatore a 3. Si azzera con Marcia (I1).',
    'Il gradino del contatore va per primo: così, quando passa il terzo pacco, il gradino del nastro vede subito il contatore pieno.',
    'Il nastro Q0: Marcia (I1) in parallelo a Q0 per l’autoritenuta; in serie Arresto (I0), le sicurezze (I3), e il contatore C1 normalmente chiuso, perché a lotto pieno il nastro si ferma.',
    'La spia Q1 segue il contatore: contatto C1 e bobina Q1.',
  ],
});

// c33: il sensore 4-20 mA (Modulo 6). Un serbatoio con trasmettitore di livello: si cabla l'anello di corrente e le due lampade;
// il programma (gia' scritto) scala i milliampere in percentuale e riconosce il filo interrotto (sotto 3,6 mA).
const W33_FIXED = [
  ['Q.L1', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
  ['Q.L1', 'SA.a', 'rosso'], ['SA.b', 'PLC.I0', 'rosso'],
  ['Q.L1', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'HP.X1', 'rosso'], ['HP.X2', 'Q.N', 'blu'],
];
const W33_LOOP = [['TT.+', 'PLC.AI0+', 'rosso'], ['TT.-', 'PLC.AI0-', 'rosso']];
const W33_LAMPS = [
  ['Q.L1', 'PLC.Q1A', 'rosso'], ['PLC.Q1B', 'HH.X1', 'rosso'], ['HH.X2', 'Q.N', 'blu'],
  ['Q.L1', 'PLC.Q2A', 'rosso'], ['PLC.Q2B', 'HF.X1', 'rosso'], ['HF.X2', 'Q.N', 'blu'],
];
LEVELS_V2.push({
  id: 'c33-sensore', code: 'c33', n: 0, ...IND, flow: 'onDemand',
  name: 'Il sensore 4-20 mA', title: 'Il sensore 4-20 mA',
  blurb: 'Il livello del serbatoio arriva al PLC come una corrente: 4 mA vuoto, 20 mA pieno. Sotto 4 mA il filo è interrotto.',
  goal: 'Un serbatoio ha un trasmettitore di livello 4-20 mA. Il PLC è già alimentato e comanda la pompa con l’interruttore. Cabla l’anello di corrente dal trasmettitore all’ingresso analogico AI0 (il + al +, il − al −) e le due lampade: Q1 “Livello alto” (sopra l’80 %) e Q2 “Guasto sensore” (corrente sotto 3,6 mA). Il programma è già scritto.',
  fixed: W33_FIXED,
  comps: [
    Q3,
    C('PLC', 'plc', 'PLC', 'PLC con un ingresso analogico', T('A1', 'A2', 'I0', 'IC', 'AI0+', 'AI0-', 'Q0A', 'Q0B', 'Q1A', 'Q1B', 'Q2A', 'Q2B'), {
      program: [
        { if: 'I0', do: [{ op: 'coil', a: 'Q0' }] },
        { if: ['ge', 'AI0', 3.6], do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: 0, hi: 100 }] },
        { if: ['and', ['ge', 'AI0', 3.6], ['gt', 'MW0', 80]], do: [{ op: 'coil', a: 'Q1' }] },
        { if: ['lt', 'AI0', 3.6], do: [{ op: 'coil', a: 'Q2' }] },
      ],
      symbols: { I0: 'Pompa', Q0: 'Pompa', Q1: 'Livello alto', Q2: 'Guasto sensore', AI0: 'Livello (mA)', MW0: 'Livello (%)' },
    }),
    C('TT', 'tx', 'Trasmettitore', 'Trasmettitore di livello 4-20 mA', T('+', '-'), { sense: { v: 'h', lo: 0, hi: 100 } }),
    C('SA', 'sw', 'Pompa', 'Interruttore della pompa', T('a', 'b')),
    C('HP', 'spia', 'Pompa', 'Pompa in marcia', T('X1', 'X2')),
    C('HH', 'spia', 'Livello alto', 'Lampada di livello alto', T('X1', 'X2')),
    C('HF', 'spia', 'Guasto sensore', 'Lampada di guasto del sensore', T('X1', 'X2')),
  ],
  controls: ['SA'],
  process: {
    model: 'serbatoio', title: 'Il serbatoio', alt: 'Serbatoio con la pompa e il livello',
    params: { qIn: 36, qOut: 12 }, init: { h: 30 }, speed: 20,
    actuators: { pump: { load: 'HP' }, valve: { value: 1 } },
    trace: ['h'], labels: { h: 'Il livello' },
    graph: { vars: [{ v: 'h', label: 'Livello %', lo: 0, hi: 100 }], window: 300, lines: [{ value: 80, label: 'livello alto' }] },
  },
  demoDo: [{ do: ['toggle SA'], say: '' }],
  checks: [
    { id: 'riposo', label: 'Serbatoio al 30 % e pompa ferma: nessuna lampada di allarme', do: [], expect: { loads: { HH: 'off', HF: 'off', HP: 'off' }, process: { h: [29, 31] } } },
    { id: 'pieno', label: 'Accendi la pompa: il livello sale e sopra l’80 % si accende “Livello alto”', do: ['toggle SA', 'wait 200'], expect: { loads: { HP: 'on', HH: 'on', HF: 'off' }, process: { h: [95, 100] } } },
    { id: 'sale', label: 'Il trasmettitore segue il livello: dopo 60 secondi di pompa non c’è ancora l’allarme', do: ['toggle SA', 'wait 60'], expect: { loads: { HH: 'off', HF: 'off' } } },
  ],
  safety: { coilReturn: ['PLC'] },
  solution: W33_FIXED.concat(W33_LOOP, W33_LAMPS),
  hints: [
    'Il trasmettitore ha due morsetti, + e −. L’ingresso analogico AI0 ha lo stesso: AI0+ e AI0−. Il + va al +, il − va al −.',
    'Se i due fili sono scambiati il PLC legge 0 mA, come se il filo fosse staccato: si accende il guasto sensore.',
    'Le lampade sono carichi comandati da un’uscita a relè: la fase entra in QnA, esce da QnB e va alla lampada; l’altro capo va al neutro.',
  ],
});

// c34: il variatore (Modulo 6). Un nastro con variatore di frequenza: l'allievo cabla la marcia e il comando del variatore;
// il riferimento di velocita' e' un'uscita analogica che si regola con il cursore. Si vede la rampa.
const W34_FIXED = [
  ['Q.L1', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
];
const W34_RUN = [
  ['Q.L1', 'SA.a', 'rosso'], ['SA.b', 'PLC.I0', 'rosso'],
  ['Q.L1', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'HV.X1', 'rosso'], ['HV.X2', 'Q.N', 'blu'],
];
LEVELS_V2.push({
  id: 'c34-variatore', code: 'c34', n: 0, ...IND, flow: 'onDemand',
  name: 'Il variatore', title: 'Il variatore',
  blurb: 'La velocità del nastro non salta: il variatore la porta al valore voluto con una rampa.',
  goal: 'Un nastro ha un variatore di frequenza. Il PLC è alimentato e il suo programma è scritto: con l’interruttore dà il consenso di marcia al variatore (uscita Q0) e gli manda il riferimento di velocità dal cursore. Cabla l’interruttore all’ingresso I0 e l’uscita Q0 alla spia “Variatore in marcia”. Poi accendi e guarda la rampa.',
  fixed: W34_FIXED,
  comps: [
    Q3,
    C('PLC', 'plc', 'PLC', 'PLC con un’uscita analogica', T('A1', 'A2', 'I0', 'IC', 'Q0A', 'Q0B'), {
      program: [
        { if: 'I0', do: [{ op: 'coil', a: 'Q0' }] },
        { if: ['ge', 'MW0', 0], do: [{ op: 'move', v: 'MW0', out: 'AQ0' }] },
      ],
      symbols: { I0: 'Marcia', Q0: 'Marcia variatore', MW0: 'Velocità voluta (%)', AQ0: 'Riferimento (%)' },
    }),
    C('SA', 'sw', 'Marcia', 'Interruttore di marcia', T('a', 'b')),
    C('HV', 'spia', 'Variatore in marcia', 'Spia di marcia del variatore', T('X1', 'X2')),
  ],
  controls: ['SA'],
  process: {
    model: 'nastro', title: 'Il nastro con il variatore', alt: 'Nastro con la frequenza e la velocità',
    params: { fmax: 50, fNom: 50, ramp: 10 }, speed: 1,
    actuators: { run: { plc: 'PLC.Q0' }, ref: { analog: 'PLC.AQ0' } },
    trace: ['v', 'f'], labels: { v: 'La velocità' },
    tunable: { vel: { word: 'PLC.MW0', min: 0, max: 100, step: 5, init: 60, unit: '%' } },
    tunableLabels: { vel: 'Velocità voluta' },
    graph: { vars: [{ v: 'v', label: 'Velocità %', lo: 0, hi: 100 }], window: 30, lines: [{ tuned: 'vel', label: 'voluta' }] },
  },
  demoDo: [{ do: ['toggle SA'], say: '' }],
  checks: [
    { id: 'fermo', label: 'Con l’interruttore aperto il nastro è fermo', do: ['wait 5'], expect: { loads: { HV: 'off' }, process: { v: [0, 1] } } },
    { id: 'rampa', label: 'All’avvio la velocità sale con una rampa: dopo 2 secondi non è ancora a regime', tuned: { vel: 60 }, do: ['toggle SA', 'wait 2'], expect: { loads: { HV: 'on' }, trace: [{ v: 'v', max: 50, to: 2.5 }, { v: 'v', min: 1, from: 1.5 }] } },
    { id: 'regime', label: 'Con la velocità voluta al 60 %, dopo 10 secondi il nastro è a regime', tuned: { vel: 60 }, do: ['toggle SA', 'wait 10'], expect: { trace: [{ v: 'v', within: [55, 65], from: 9 }] } },
    { id: 'stop', label: 'Spegnendo, la velocità scende con la rampa e il nastro si ferma', tuned: { vel: 60 }, steps: [{ do: ['toggle SA', 'wait 10'], expect: { trace: [{ v: 'v', min: 55, from: 9 }] } }, { do: ['toggle SA', 'wait 2'], expect: { trace: [{ v: 'v', min: 5, from: 10, to: 12.5 }] } }] },
  ],
  safety: { coilReturn: ['PLC'] },
  solution: W34_FIXED.concat(W34_RUN),
  hints: [
    'L’interruttore è un contatto: la fase entra in un capo, esce dall’altro e va all’ingresso I0. Il comune IC è già al neutro.',
    'L’uscita Q0 è un contatto a relè: la fase entra in Q0A, esce da Q0B e va alla spia; l’altro capo della spia va al neutro.',
    'Il riferimento di velocità non ha fili: è un’uscita analogica del PLC che arriva al variatore. Si cambia con il cursore sotto il grafico.',
  ],
});

// c35: il serbatoio (Modulo 6). Due galleggianti e una pompa: l'allievo scrive il programma con Set e Reset (isteresi).
const W35 = [
  ['Q.L1', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
  ['Q.L1', 'LH.3', 'rosso'], ['LH.4', 'PLC.I0', 'rosso'],
  ['Q.L1', 'LL.3', 'rosso'], ['LL.4', 'PLC.I1', 'rosso'],
  ['Q.L1', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'HP.X1', 'rosso'], ['HP.X2', 'Q.N', 'blu'],
];
const PROG_35 = [
  { if: 'I1', do: [{ op: 'set', a: 'Q0' }] },
  { if: 'I0', do: [{ op: 'reset', a: 'Q0' }] },
];
LEVELS_V2.push({
  id: 'c35-serbatoio', code: 'c35', n: 0, ...IND, flow: 'onDemand',
  name: 'Il serbatoio', title: 'Il serbatoio',
  blurb: 'Due soglie e una pompa: perché un solo galleggiante non basta.',
  goal: 'Il serbatoio si svuota di continuo e la pompa lo riempie. Due galleggianti guardano il livello: quello basso (I1) scatta sotto il 20 %, quello alto (I0) sopra l’80 %. L’impianto è cablato: scrivi il programma perché la pompa parta quando il livello è basso e si fermi quando è alto, senza accendersi e spegnersi di continuo.',
  fixed: W35,
  comps: [
    Q3,
    C('PLC', 'plc', 'PLC', 'PLC (programma da scrivere)', T('A1', 'A2', 'I0', 'I1', 'IC', 'Q0A', 'Q0B'), {
      symbols: { I0: 'Livello alto', I1: 'Livello basso', Q0: 'Pompa' },
      edit: { markers: 0, timers: 0, counters: 0, ops: ['coil', 'set', 'reset'] },
    }),
    C('LH', 'sens', 'Galleggiante alto', 'Galleggiante di livello alto (80 %)', T('1', '2', '3', '4'), { sense: { v: 'h', above: 80 } }),
    C('LL', 'sens', 'Galleggiante basso', 'Galleggiante di livello basso (20 %)', T('1', '2', '3', '4'), { sense: { v: 'h', below: 20 } }),
    C('HP', 'spia', 'Pompa', 'Pompa in marcia', T('X1', 'X2')),
  ],
  process: {
    model: 'serbatoio', title: 'Il serbatoio', alt: 'Serbatoio con due galleggianti e la pompa',
    params: { qIn: 36, qOut: 12 }, init: { h: 50 }, speed: 30,
    actuators: { pump: { load: 'HP' }, valve: { value: 1 } },
    trace: ['h', 'PLC.Q0'], labels: { h: 'Il livello' },
    graph: { vars: [{ v: 'h', label: 'Livello %', lo: 0, hi: 100 }], window: 600, lines: [{ value: 80, label: 'alto' }, { value: 20, label: 'basso' }] },
  },
  demoDo: [{ do: ['wait 200'], say: '' }],
  checks: [
    { id: 'isteresi', label: 'In 20 minuti il livello resta tra i due galleggianti e la pompa non si accende e si spegne di continuo', do: ['wait 1200'], expect: { trace: [{ v: 'h', within: [15, 85] }, { v: 'h', reaches: 80 }, { v: 'h', drops: 21 }, { v: 'PLC.Q0', maxSwitches: 8 }] } },
    { id: 'riempie', label: 'Quando il livello scende sotto il 20 % la pompa parte e continua fino all’80 %', do: ['wait 600'], expect: { trace: [{ v: 'h', reaches: 79 }] } },
  ],
  safety: { coilReturn: ['PLC'] },
  solution: W35,
  solutionPrograms: { PLC: PROG_35 },
  hints: [
    'La pompa è l’uscita Q0. Il galleggiante basso è I1: quando scatta la pompa deve partire e restare accesa anche quando il livello risale sopra il 20 %.',
    'Per far restare acceso Q0 dopo che I1 si è spento serve una memoria: l’uscita Set. Set accende e tiene acceso, finché un Reset non lo spegne.',
    'Primo gradino: contatto I1, uscita Set su Q0. Secondo gradino: contatto I0 (livello alto), uscita Reset su Q0.',
  ],
});

// c36: il PID (Modulo 6). Un forno con trasmettitore e regolatore PID nel PLC: l'impianto e il programma sono fatti;
// l'allievo regola Kp, Ti e Td con i cursori guardando il grafico, finche' la temperatura arriva a 60 gradi senza oscillare.
const W36 = [
  ['Q.L1', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
  ['Q.L1', 'SA.a', 'rosso'], ['SA.b', 'PLC.I0', 'rosso'],
  ['TT.+', 'PLC.AI0+', 'rosso'], ['TT.-', 'PLC.AI0-', 'rosso'],
  ['Q.L1', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'HR.X1', 'rosso'], ['HR.X2', 'Q.N', 'blu'],
];
LEVELS_V2.push({
  id: 'c36-pid', code: 'c36', n: 0, ...IND, flow: 'onDemand',
  name: 'Il PID', title: 'Il PID',
  blurb: 'Un forno da portare a 60 °C: P, I e D con i cursori e il grafico.',
  goal: 'Un forno deve stare a 60 °C. L’impianto è cablato: il trasmettitore di temperatura è collegato al PLC e il PLC comanda la resistenza con un regolatore PID. Accendi la regolazione e prova i cursori Kp, Ti e Td guardando il grafico. Cerca valori con cui la temperatura arriva a 60 °C, non supera i 66 °C e resta ferma entro 2 gradi.',
  fixed: W36,
  comps: [
    Q3,
    C('PLC', 'plc', 'PLC', 'PLC con regolatore PID', T('A1', 'A2', 'I0', 'IC', 'AI0+', 'AI0-', 'Q0A', 'Q0B'), {
      program: [
        { if: 'I0', do: [{ op: 'coil', a: 'Q0' }] },
        { if: ['ge', 'AI0', 0], do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: 0, hi: 200 }] },
        { if: 'I0', do: [{ op: 'pid', id: 'PID1', pv: 'MW0', sp: 60, out: 'AQ0', kp: 'MW2', ti: 'MW3', td: 'MW4' }] },
        { if: ['not', 'I0'], do: [{ op: 'move', v: 0, out: 'AQ0' }] },
      ],
      symbols: { I0: 'Regolazione', Q0: 'Spia', AI0: 'Temperatura (mA)', MW0: 'Temperatura (°C)', MW2: 'Kp', MW3: 'Ti', MW4: 'Td', AQ0: 'Resistenza (%)' },
    }),
    C('TT', 'tx', 'Trasmettitore', 'Trasmettitore di temperatura 4-20 mA (0-200 °C)', T('+', '-'), { sense: { v: 'T', lo: 0, hi: 200 } }),
    C('SA', 'sw', 'Regolazione', 'Interruttore della regolazione', T('a', 'b')),
    C('HR', 'spia', 'Regolazione attiva', 'Spia di regolazione attiva', T('X1', 'X2')),
  ],
  controls: ['SA'],
  process: {
    model: 'forno', title: 'Il forno', alt: 'Forno con la temperatura',
    speed: 20, actuators: { heater: { analog: 'PLC.AQ0' } },
    trace: ['T', 'PLC.AQ0'], labels: { T: 'La temperatura' },
    tunable: {
      kp: { word: 'PLC.MW2', min: 0.1, max: 20, step: 0.1, init: 1 },
      ti: { word: 'PLC.MW3', min: 0, max: 300, step: 5, init: 0, unit: 's' },
      td: { word: 'PLC.MW4', min: 0, max: 60, step: 1, init: 0, unit: 's' },
    },
    tunableLabels: { kp: 'Kp (proporzionale)', ti: 'Ti (integrale)', td: 'Td (derivativa)' },
    graph: { vars: [{ v: 'T', label: 'Temperatura °C', lo: 0, hi: 100, color: '#C0262D' }, { v: 'PLC.AQ0', label: 'Resistenza %', lo: 0, hi: 100, color: '#2563B0' }], window: 450, lines: [{ value: 60, label: 'voluta 60 °C', var: 'T' }] },
  },
  solutionTuned: { kp: 3, ti: 100, td: 15 },
  demoDo: [{ do: ['toggle SA'], say: '' }],
  checks: [
    { id: 'fermo', label: 'Senza regolazione il forno resta freddo', do: ['wait 60'], expect: { trace: [{ v: 'T', max: 25 }] } },
    { id: 'regola', label: 'Con la regolazione la temperatura arriva a 60 °C, non supera 66 °C e dopo 7 minuti resta tra 58 e 62', do: ['toggle SA', 'wait 900'], expect: { trace: [{ v: 'T', reaches: 58, by: 400 }, { v: 'T', max: 66 }, { v: 'T', within: [58, 62], from: 420 }] } },
  ],
  safety: { coilReturn: ['PLC'] },
  solution: W36,
  hints: [
    'Con il solo Kp (Ti e Td a zero) la temperatura si ferma sotto i 60 °C: per dare ancora potenza serve un errore, e l’errore resta. Prova Kp tra 2 e 5.',
    'L’integrale (Ti) accumula l’errore nel tempo e lo azzera: con Ti attorno a 100 secondi la temperatura arriva a 60 °C. Un Ti troppo piccolo fa oscillare.',
    'La derivativa (Td) frena quando la temperatura sale in fretta: con Td di 10-20 secondi la sovraelongazione si riduce. Un Kp troppo alto fa oscillare comunque.',
  ],
});
