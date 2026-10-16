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

// c37: il pannello operatore (Modulo 6). Il serbatoio di c35 con il trasmettitore di livello e un pannello operatore (HMI).
// L'impianto e la regolazione sono fatti; l'allievo scrive i gradini degli allarmi con i confronti. Il pannello li mostra per
// priorita', con la sirena finche' non si riconoscono, e segna come vecchi i valori quando il collegamento con il PLC cade.
const W37 = [
  ['Q.L1', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
  ['Q.L1', 'LH.3', 'rosso'], ['LH.4', 'PLC.I0', 'rosso'],
  ['Q.L1', 'LL.3', 'rosso'], ['LL.4', 'PLC.I1', 'rosso'],
  ['TT.+', 'PLC.AI0+', 'rosso'], ['TT.-', 'PLC.AI0-', 'rosso'],
  ['Q.L1', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'HP.X1', 'rosso'], ['HP.X2', 'Q.N', 'blu'],
];
const START_37 = [
  { if: 'I1', do: [{ op: 'set', a: 'Q0' }] },
  { if: 'I0', do: [{ op: 'reset', a: 'Q0' }] },
  { if: ['ge', 'AI0', 3.6], do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: 0, hi: 100 }] },
  { if: 'Q0', do: [{ op: 'ton', id: 'T1', pt: 300 }] },
  { if: 'T1', do: [{ op: 'coil', a: 'M3' }] },
];
const ALARMS_37 = [
  { if: ['gt', 'MW0', 90], do: [{ op: 'coil', a: 'M0' }] },
  { if: ['lt', 'AI0', 3.6], do: [{ op: 'coil', a: 'M1' }] },
  { if: ['lt', 'MW0', 10], do: [{ op: 'coil', a: 'M2' }] },
];
LEVELS_V2.push({
  id: 'c37-pannello', code: 'c37', n: 0, ...IND, flow: 'onDemand',
  name: 'Il pannello operatore', title: 'Il pannello operatore',
  blurb: 'Allarmi con priorità, la sirena che chiede attenzione e il dato vecchio che sembra buono.',
  goal: 'Il serbatoio di prima, con il trasmettitore di livello e un pannello operatore collegato al PLC. Il PLC regola già la pompa e calcola il livello in MW0. Aggiungi i gradini degli allarmi: M0 “Livello troppo alto” sopra il 90 %, M1 “Guasto sensore” con la corrente sotto 3,6 mA, M2 “Livello troppo basso” sotto il 10 %. Il pannello li mostra con la loro priorità.',
  fixed: W37,
  comps: [
    Q3,
    C('PLC', 'plc', 'PLC', 'PLC (allarmi da scrivere)', T('A1', 'A2', 'I0', 'I1', 'IC', 'AI0+', 'AI0-', 'Q0A', 'Q0B'), {
      symbols: { I0: 'Livello alto', I1: 'Livello basso', Q0: 'Pompa', AI0: 'Livello (mA)', MW0: 'Livello (%)', T1: 'Pompa a lungo', M0: 'Troppo alto', M1: 'Guasto sensore', M2: 'Troppo basso', M3: 'Pompa a lungo' },
      edit: { start: START_37, markers: 4, timers: 1, counters: 0, words: ['MW0', 'AI0'], ops: ['coil', 'set', 'reset'] },
    }),
    C('LH', 'sens', 'Galleggiante alto', 'Galleggiante di livello alto (80 %)', T('1', '2', '3', '4'), { sense: { v: 'h', above: 80 } }),
    C('LL', 'sens', 'Galleggiante basso', 'Galleggiante di livello basso (20 %)', T('1', '2', '3', '4'), { sense: { v: 'h', below: 20 } }),
    C('TT', 'tx', 'Trasmettitore', 'Trasmettitore di livello 4-20 mA', T('+', '-'), { sense: { v: 'h', lo: 0, hi: 100 } }),
    C('HP', 'spia', 'Pompa', 'Pompa in marcia', T('X1', 'X2')),
    C('HMI', 'hmi', 'Pannello', 'Pannello operatore collegato al PLC', {}),
  ],
  process: {
    model: 'serbatoio', title: 'Il serbatoio', alt: 'Serbatoio con due galleggianti, il trasmettitore e la pompa',
    params: { qIn: 36, qOut: 12 }, init: { h: 50 }, speed: 30,
    actuators: { pump: { load: 'HP' }, valve: { value: 1 } },
    trace: ['h'], labels: { h: 'Il livello' },
    graph: { vars: [{ v: 'h', label: 'Livello %', lo: 0, hi: 100 }], window: 900, lines: [{ value: 90, label: 'troppo alto' }, { value: 10, label: 'troppo basso' }] },
  },
  hmi: {
    plc: 'PLC', stale: 3,
    values: [
      { id: 'V1', label: 'Livello', v: 'PLC.MW0', unit: '%' },
      { id: 'V2', label: 'Pompa', v: 'PLC.Q0', bool: ['ferma', 'in marcia'] },
    ],
    alarms: [
      { id: 'A1', bit: 'M0', text: 'Livello troppo alto', prio: 'alta' },
      { id: 'A2', bit: 'M1', text: 'Guasto del sensore di livello', prio: 'alta' },
      { id: 'A3', bit: 'M2', text: 'Livello troppo basso', prio: 'media' },
      { id: 'A4', bit: 'M3', text: 'Pompa accesa da più di 5 minuti', prio: 'bassa' },
    ],
  },
  demoDo: [{ do: ['wait 200'], say: '' }],
  checks: [
    { id: 'normale', label: 'Con l’impianto a posto non c’è nessun allarme di livello', do: ['wait 900'], expect: { hmi: { link: true, alarms: { A1: 'off', A2: 'off', A3: 'off' }, stale: { V1: false } } } },
    { id: 'alto', label: 'Galleggiante alto bloccato: il serbatoio sale oltre il 90 % e scatta “Livello troppo alto”, con la sirena', do: ['jam LH', 'wait 600'], expect: { hmi: { alarms: { A1: 'attivo' }, horn: true } } },
    { id: 'riconosci', label: 'Riconoscendo, l’allarme resta finché il livello è alto ma la sirena tace', steps: [{ do: ['jam LH', 'wait 600'], expect: { hmi: { alarms: { A1: 'attivo' } } } }, { do: ['ack HMI'], expect: { hmi: { alarms: { A1: 'riconosciuto' }, horn: false } } }] },
    { id: 'sensore', label: 'Filo del trasmettitore interrotto: scatta “Guasto del sensore di livello”', do: ['cut TT', 'wait 5'], expect: { hmi: { alarms: { A2: 'attivo', A3: 'off' } } } },
    { id: 'rientro', label: 'Ricollegato il filo, l’allarme del sensore resta sul pannello come rientrato finché non lo riconosci', steps: [{ do: ['cut TT', 'wait 5'], expect: { hmi: { alarms: { A2: 'attivo' } } } }, { do: ['cut TT', 'wait 5'], expect: { hmi: { alarms: { A2: 'rientrato' }, horn: true } } }, { do: ['ack HMI'], expect: { hmi: { alarms: { A2: 'off' } } } }] },
    { id: 'basso', label: 'Galleggiante basso bloccato: il serbatoio si svuota e scatta “Livello troppo basso”', do: ['jam LL', 'wait 600'], expect: { hmi: { alarms: { A3: 'attivo', A1: 'off' } } } },
  ],
  safety: { coilReturn: ['PLC'] },
  solution: W37,
  solutionPrograms: { PLC: START_37.concat(ALARMS_37) },
  hints: [
    'Un allarme è un bit: il gradino ha un contatto di confronto e, come uscita, la bobina del merker. Per esempio: confronto MW0 maggiore di 90, bobina M0.',
    'Il guasto del sensore non si vede dal livello in percentuale ma dalla corrente: confronto AI0 minore di 3,6, bobina M1. Con il filo interrotto MW0 resta fermo all’ultimo valore.',
    'Il livello troppo basso: confronto MW0 minore di 10, bobina M2.',
  ],
});

// c38: la corrente continua (Modulo 5A). Due batterie da 6 V, una lampada da 12 V e un LED: polarita', serie e parallelo.
const W38 = [
  ['B1.+', 'B2.-', 'rosso'], ['B2.+', 'S.a', 'rosso'],
  ['S.b', 'L.A', 'rosso'], ['L.B', 'B1.-', 'nero'],
  ['S.b', 'H.A', 'rosso'], ['H.K', 'B1.-', 'nero'],
];
LEVELS_V2.push({
  id: 'c38-continua', code: 'c38', n: 0, engine: 2, dc: true, quadroOnly: true, supply: 'protezioni', meter: true,
  palette: ['rosso', 'nero'],
  name: 'La corrente continua', title: 'La corrente continua',
  blurb: 'Batterie, polarità, serie e parallelo: una lampada da 12 V con due batterie da 6 V.',
  goal: 'Due batterie da 6 V, un interruttore, una lampada da 12 V e un LED che fa da spia. Collega le batterie in modo che la lampada abbia i suoi 12 V, con l’interruttore che la accende e la spegne. Il LED, in parallelo alla lampada, deve accendersi con lei: ha un verso. In continua il positivo è rosso, il negativo nero.',
  comps: [
    C('B1', 'batt', 'Batteria 1', 'Batteria da 6 V', T('+', '-'), { v: 6, r: 0.1, imax: 20 }),
    C('B2', 'batt', 'Batteria 2', 'Batteria da 6 V', T('+', '-'), { v: 6, r: 0.1, imax: 20 }),
    C('S', 'sw', 'Interruttore', 'Interruttore', T('a', 'b')),
    C('L', 'dcl', 'Lampada', 'Lampada da 12 V, 6 W', T('B', 'A'), { volt: 12, w: 6 }),
    C('H', 'led', 'LED', 'LED spia (A anodo, K catodo)', T('A', 'K')),
  ],
  controls: ['S'],
  checks: [
    { id: 'spento', label: 'Con l’interruttore aperto lampada e LED sono spenti', do: [], expect: { loads: { L: 'off', H: 'off' } } },
    { id: 'acceso', label: 'Chiudendo l’interruttore la lampada si accende piena e il LED con lei', do: ['toggle S'], expect: { loads: { L: 'on', H: 'on' } } },
  ],
  solution: W38,
  hints: [
    'Una batteria sola da 6 V non basta per una lampada da 12 V: si accende appena. Due batterie in serie sommano le tensioni: il + della prima va al − della seconda.',
    'Dal + libero della serie passa l’interruttore e si arriva alla lampada; dall’altro capo della lampada si torna al − libero, in nero.',
    'Il LED conduce solo dall’anodo (A) al catodo (K): A verso il positivo, K verso il negativo. Se è al contrario resta spento.',
  ],
});

// c39: il pannello fotovoltaico (Modulo 5A). Tre pannelli da 22 V e un inverter con finestra di ingresso 30-60 V: due in serie.
// La tensione dei pannelli segue il sole nella giornata simulata (modello `energia`); l'inverter acceso e' cio' che fa produrre la casa.
const W39 = [['P1.+', 'I.+', 'rosso'], ['P1.-', 'P2.+', 'rosso'], ['P2.-', 'I.-', 'nero']];
LEVELS_V2.push({
  id: 'c39-fotovoltaico', code: 'c39', n: 0, engine: 2, dc: true, quadroOnly: true, supply: 'protezioni', meter: true,
  palette: ['rosso', 'nero'],
  name: 'Il pannello fotovoltaico', title: 'Il pannello fotovoltaico',
  blurb: 'Pannelli in serie per entrare nella finestra dell’inverter: la produzione segue il sole.',
  goal: 'Un impianto fotovoltaico ha tre pannelli da 22 V a pieno sole e un inverter che lavora solo se la tensione in ingresso sta tra 30 e 60 V (sotto non parte, sopra si brucia). Scegli quanti pannelli collegare e come, in modo che l’inverter lavori a mezzogiorno senza bruciarsi. Poi guarda la giornata: la produzione segue il sole.',
  comps: [
    C('P1', 'pann', 'Pannello 1', 'Pannello fotovoltaico, 22 V a pieno sole', T('+', '-'), { v: 22 }),
    C('P2', 'pann', 'Pannello 2', 'Pannello fotovoltaico, 22 V a pieno sole', T('+', '-'), { v: 22 }),
    C('P3', 'pann', 'Pannello 3', 'Pannello fotovoltaico, 22 V a pieno sole', T('+', '-'), { v: 22 }),
    C('I', 'invfv', 'Inverter', 'Inverter fotovoltaico: ingresso 30-60 V', T('+', '-'), { vmin: 30, vmax: 60, rin: 90 }),
  ],
  process: {
    model: 'energia', title: 'La giornata', alt: 'La casa con i pannelli e il sole durante la giornata',
    params: { pvKw: 4, cloud: 0 }, init: { hour: 9 }, speed: 40,
    actuators: { pv: { load: 'I' }, house: { value: 1 } },
    trace: ['pv', 'load', 'grid'], labels: { pv: 'La produzione' },
    tunable: { cloud: { param: 'cloud', min: 0, max: 0.9, step: 0.1, init: 0 } },
    tunableLabels: { cloud: 'Nuvole (0 = sereno)' },
    graph: { vars: [{ v: 'pv', label: 'Produzione kW', lo: 0, hi: 5, color: '#2E9E5B' }, { v: 'load', label: 'Consumo kW', lo: 0, hi: 5, color: '#C0262D' }], window: 1500 },
  },
  demoDo: [{ do: ['wait 180'], say: '' }],
  checks: [
    { id: 'mezzogiorno', label: 'A mezzogiorno l’inverter lavora e i pannelli producono', do: ['wait 180'], expect: { loads: { I: 'on' }, process: { pv: [3.5, 4.1] } } },
    { id: 'sera', label: 'Di sera, senza sole, l’inverter si spegne e la produzione è zero', do: ['wait 720'], expect: { loads: { I: 'off' }, process: { pv: [0, 0.01] } } },
    { id: 'giornata', label: 'Nella giornata l’inverter non si brucia e produce per qualche ora', do: ['wait 1000'], expect: { trace: [{ v: 'pv', max: 4.1 }, { v: 'pv', reaches: 3.5 }] } },
  ],
  solution: W39,
  hints: [
    'Un pannello da solo dà al massimo 22 V: l’inverter vuole almeno 30 V per partire. Bisogna sommare le tensioni.',
    'In serie le tensioni si sommano: due pannelli danno 44 V a pieno sole, dentro la finestra 30-60 V. Tre darebbero 66 V e brucerebbero l’inverter.',
    'In serie il + di un pannello va al − del successivo; il + libero va al + dell’inverter e il − libero al − dell’inverter. In parallelo la tensione resterebbe 22 V.',
  ],
});

// Livelli di casa con fotovoltaico (Modulo 5A): impianto e trasmettitore del contatore (potenza scambiata, -6 / +6 kW) gia' cablati,
// il programma del PLC lo scrive l'allievo. W5_FIXED e' la parte comune; la potenza scambiata con la rete arriva in watt in MW0.
const W5_FIXED = [
  ['Q.L1', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'],
  ['TT.+', 'PLC.AI0+', 'rosso'], ['TT.-', 'PLC.AI0-', 'rosso'],
  ['Q.L1', 'PLC.Q0A', 'rosso'],
];
const START_5 = [{ if: ['ge', 'AI0', 3.6], do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: -6000, hi: 6000 }] }];
const GRID_TX = () => C('TT', 'tx', 'Contatore', 'Misuratore di potenza del contatore: -6 kW (immissione) … +6 kW (prelievo), 4-20 mA', T('+', '-'), { sense: { v: 'grid', lo: -6, hi: 6 } });
const PLC_5 = (title, symbols) => C('PLC', 'plc', 'PLC', title, T('A1', 'A2', 'AI0+', 'AI0-', 'Q0A', 'Q0B'), {
  symbols: { AI0: 'Potenza scambiata (mA)', MW0: 'Potenza scambiata (W)', ...symbols },
  edit: { start: START_5, markers: 0, timers: 0, counters: 0, words: ['MW0'], ops: ['coil', 'set', 'reset'] },
});
const GRAPH_5 = (extra = []) => ({ vars: [{ v: 'pv', label: 'Produzione kW', lo: -5, hi: 5, color: '#2E9E5B' }, { v: 'load', label: 'Consumo kW', lo: -5, hi: 5, color: '#C0262D' }, { v: 'grid', label: 'Rete kW', lo: -5, hi: 5, color: '#2563B0' }], window: 1500, lines: [{ value: 0, label: 'zero', var: 'grid' }].concat(extra) });

// c40: il contatore e lo scambio. Il contatore e' bidirezionale: preleva o immette. Lo scaldabagno si accende quando c'e' eccedenza.
const W40 = W5_FIXED.concat([['PLC.Q0B', 'HS.X1', 'rosso'], ['HS.X2', 'Q.N', 'blu']]);
const PROG_40 = START_5.concat([
  { if: ['lt', 'MW0', -2200], do: [{ op: 'set', a: 'Q0' }] },
  { if: ['gt', 'MW0', 300], do: [{ op: 'reset', a: 'Q0' }] },
]);
LEVELS_V2.push({
  id: 'c40-contatore', code: 'c40', n: 0, ...IND, flow: 'onDemand',
  name: 'Il contatore e lo scambio', title: 'Il contatore e lo scambio',
  blurb: 'Di giorno la casa produce più di quanto consuma: meglio usare l’eccedenza che regalarla alla rete.',
  goal: 'Una casa con pannelli fotovoltaici e un contatore che misura la potenza scambiata con la rete: positiva se preleva, negativa se immette. Il PLC la legge in watt (MW0). Scrivi il programma perché lo scaldabagno (2 kW) si accenda quando la casa immette più di 2,2 kW e si spenga quando comincia a prelevare più di 300 W: l’eccedenza si usa invece di regalarla.',
  fixed: W40,
  comps: [Q3, PLC_5('PLC (programma da scrivere)', { Q0: 'Scaldabagno' }), GRID_TX(), C('HS', 'spia', 'Scaldabagno', 'Scaldabagno in funzione', T('X1', 'X2'))],
  process: {
    model: 'energia', title: 'La giornata', alt: 'La casa con i pannelli, il contatore e il sole durante la giornata',
    params: { pvKw: 4, cloud: 0 }, init: { hour: 8 }, speed: 40,
    actuators: { boiler: { load: 'HS' }, house: { value: 1 } },
    trace: ['pv', 'load', 'grid', 'PLC.Q0'], labels: { grid: 'La potenza della rete', pv: 'La produzione' },
    graph: GRAPH_5(),
  },
  demoDo: [{ do: ['wait 300'], say: '' }],
  checks: [
    { id: 'eccedenza', label: 'Con il sole alto lo scaldabagno usa l’eccedenza: la casa non immette più di 2,2 kW', do: ['wait 480'], expect: { trace: [{ v: 'PLC.Q0', reaches: 1 }, { v: 'grid', within: [-2.3, 0.6], from: 200, to: 400 }] } },
    { id: 'sera', label: 'Di sera, senza eccedenza, lo scaldabagno è spento e la casa preleva dalla rete', do: ['wait 780'], expect: { loads: { HS: 'off' }, process: { grid: [0.1, 5] } } },
    { id: 'commutazioni', label: 'Lo scaldabagno non si accende e si spegne di continuo', do: ['wait 900'], expect: { trace: [{ v: 'PLC.Q0', maxSwitches: 4 }] } },
  ],
  safety: { coilReturn: ['PLC'] },
  solution: W40,
  solutionPrograms: { PLC: PROG_40 },
  hints: [
    'La potenza scambiata è in MW0, in watt: negativa quando la casa immette. Il gradino ha un contatto di confronto (MW0 minore di −2200) e, come uscita, Set su Q0.',
    'Se usassi una bobina semplice lo scaldabagno si accenderebbe e, consumando 2 kW, farebbe salire subito la potenza: si spegnerebbe e così via. Serve l’isteresi: Set con una soglia, Reset con un’altra.',
    'Secondo gradino: confronto MW0 maggiore di 300, uscita Reset su Q0. Quando la casa preleva, lo scaldabagno si ferma.',
  ],
});

// c41: l'accumulo. La batteria assorbe l'eccedenza di giorno e copre il consumo la sera: l'allievo la collega con l'interruttore.
const W41 = [['Q.L1', 'SA.a', 'rosso'], ['SA.b', 'HB.X1', 'rosso'], ['HB.X2', 'Q.N', 'blu']];
LEVELS_V2.push({
  id: 'c41-accumulo', code: 'c41', n: 0, ...IND, flow: 'onDemand',
  name: 'L’accumulo', title: 'L’accumulo',
  blurb: 'La batteria si carica di giorno con il sole e si scarica la sera: meno corrente dalla rete.',
  goal: 'La casa ha una batteria da 10 kWh. Collegala con l’interruttore: la spia “Batteria collegata” si accende quando la batteria è in servizio. Di giorno la batteria assorbe l’eccedenza dei pannelli; la sera, quando i pannelli non producono, copre i consumi. Guarda la carica nella scena e il prelievo dalla rete.',
  comps: [Q3, C('SA', 'sw', 'Batteria', 'Interruttore della batteria', T('a', 'b')), C('HB', 'spia', 'Batteria collegata', 'Spia di batteria collegata', T('X1', 'X2'))],
  controls: ['SA'],
  process: {
    model: 'energia', title: 'La giornata', alt: 'La casa con i pannelli, la batteria e il sole durante la giornata', battery: true,
    params: { pvKw: 4, cloud: 0 }, init: { hour: 8, soc: 20 }, speed: 40,
    actuators: { batt: { load: 'HB' }, house: { value: 1 } },
    trace: ['pv', 'load', 'grid', 'soc'], labels: { soc: 'La carica della batteria', grid: 'La potenza della rete' },
    graph: { vars: [{ v: 'pv', label: 'Produzione kW', lo: -5, hi: 5, color: '#2E9E5B' }, { v: 'load', label: 'Consumo kW', lo: -5, hi: 5, color: '#C0262D' }, { v: 'grid', label: 'Rete kW', lo: -5, hi: 5, color: '#2563B0' }], window: 1500, lines: [{ value: 0, label: 'zero', var: 'grid' }] },
  },
  demoDo: [{ do: ['toggle SA', 'wait 240'], say: '' }],
  checks: [
    { id: 'spenta', label: 'Con la batteria scollegata la carica non cambia', do: ['wait 240'], expect: { process: { soc: [19, 21] } } },
    { id: 'carica', label: 'Collegata, la batteria si carica con il sole fino quasi al massimo', do: ['toggle SA', 'wait 600'], expect: { loads: { HB: 'on' }, trace: [{ v: 'soc', reaches: 95, by: 400 }] } },
    { id: 'sera', label: 'La sera la batteria copre i consumi: dalle 20 alle 23 la casa non preleva dalla rete', do: ['toggle SA', 'wait 900'], expect: { trace: [{ v: 'grid', within: [-4.5, 0.1], from: 720 }, { v: 'soc', min: 20, from: 720 }] } },
  ],
  solution: W41,
  hints: [
    'La batteria è collegata quando il suo interruttore è chiuso. Il circuito è semplice: la fase passa dall’interruttore e arriva alla spia, il ritorno va al neutro.',
    'Quando la spia è accesa la batteria è in servizio: di giorno assorbe l’eccedenza (la scena la mostra riempirsi), la sera la restituisce.',
  ],
});

// c42: la colonnina. La ricarica dell'auto (3,7 kW) piu' i consumi della casa non devono superare il limite del contatore (4,5 kW).
const W42 = W5_FIXED.concat([['PLC.Q0B', 'HE.X1', 'rosso'], ['HE.X2', 'Q.N', 'blu']]);
const PROG_42 = START_5.concat([
  { if: ['lt', 'MW0', 500], do: [{ op: 'set', a: 'Q0' }] },
  { if: ['gt', 'MW0', 4300], do: [{ op: 'reset', a: 'Q0' }] },
]);
LEVELS_V2.push({
  id: 'c42-colonnina', code: 'c42', n: 0, ...IND, flow: 'onDemand',
  name: 'La colonnina', title: 'La colonnina',
  blurb: 'Ricaricare l’auto senza far saltare il contatore: il PLC stacca la colonnina prima del limite.',
  goal: 'La colonnina di ricarica assorbe 3,7 kW e il contatore stacca tutta la casa se la potenza prelevata supera 4,5 kW per più di 20 secondi. Dal tardo pomeriggio la sera i consumi della casa salgono. Scrivi il programma perché la colonnina parta quando c’è margine e si stacchi prima del limite, senza accendersi e spegnersi di continuo: l’auto deve comunque caricarsi.',
  fixed: W42,
  comps: [Q3, PLC_5('PLC (programma da scrivere)', { Q0: 'Colonnina' }), GRID_TX(), C('HE', 'spia', 'Colonnina', 'Auto in ricarica', T('X1', 'X2'))],
  process: {
    model: 'energia', title: 'La serata', alt: 'La casa con i pannelli, il contatore e l’auto in ricarica nel tardo pomeriggio',
    params: { pvKw: 4, cloud: 0, limit: 4.5 }, init: { hour: 17 }, speed: 40,
    actuators: { ev: { load: 'HE' }, house: { value: 1 } },
    trace: ['pv', 'load', 'grid', 'PLC.Q0'], labels: { grid: 'La potenza della rete', eEv: 'L’energia caricata nell’auto (kWh)' },
    graph: GRAPH_5([{ value: 4.5, label: 'limite del contatore', var: 'grid' }]),
  },
  demoDo: [{ do: ['wait 240'], say: '' }],
  checks: [
    { id: 'limite', label: 'La potenza prelevata non supera mai il limite e il contatore non stacca', do: ['wait 420'], expect: { process: { blackout: false }, trace: [{ v: 'grid', max: 4.5 }] } },
    { id: 'ricarica', label: 'L’auto si carica: almeno 3 kWh', do: ['wait 420'], expect: { process: { eEv: [3, 100] } } },
    { id: 'commutazioni', label: 'La colonnina non si accende e si spegne di continuo', do: ['wait 420'], expect: { trace: [{ v: 'PLC.Q0', maxSwitches: 6 }] } },
  ],
  safety: { coilReturn: ['PLC'] },
  solution: W42,
  solutionPrograms: { PLC: PROG_42 },
  hints: [
    'La potenza della rete è in MW0, in watt. La colonnina può partire quando la casa preleva poco: se la potenza è sotto una soglia bassa (per esempio 500 W) c’è margine per 3,7 kW.',
    'Primo gradino: confronto MW0 minore di 500 (con la colonnina accesa la potenza sale a più di 3,7 kW, quindi non si riaccende da sola), uscita Set su Q0.',
    'Secondo gradino: se la potenza supera una soglia alta, poco sotto il limite (per esempio 4300 W) bisogna staccarla: confronto MW0 maggiore di 4300, uscita Reset su Q0. Le due soglie devono stare distanti almeno quanto assorbe la colonnina (3,7 kW): altrimenti, appena staccata, la casa sembra avere margine e la colonnina riparte subito.',
  ],
});

// c43: la linea (Modulo 6). Un robot prende il pezzo al prelievo e lo porta al deposito: una sequenza di passi con i marcatori.
// Impianto cablato; il programma parte con l'autoritenuta di marcia, i tempi e le uscite: l'allievo scrive le transizioni tra i passi.
//   passi: M1 scendi al prelievo, M2 chiudi la pinza, M3 sali, M4 vai al deposito, M5 scendi, M6 apri la pinza, M7 sali, M8 torna al prelievo
//   M0 = marcia (il ciclo in corso finisce sempre), M9 = ciclo in corso
const W43 = [
  ['Q.L1', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
  ['Q.L1', 'SB0.1', 'rosso'], ['SB0.2', 'PLC.I0', 'rosso'],
  ['Q.L1', 'SB1.3', 'rosso'], ['SB1.4', 'PLC.I1', 'rosso'],
  ['Q.L1', 'PR.3', 'rosso'], ['PR.4', 'PLC.I2', 'rosso'],
  ['Q.L1', 'ZU.3', 'rosso'], ['ZU.4', 'PLC.I3', 'rosso'],
  ['Q.L1', 'ZD.3', 'rosso'], ['ZD.4', 'PLC.I4', 'rosso'],
  ['Q.L1', 'XP.3', 'rosso'], ['XP.4', 'PLC.I5', 'rosso'],
  ['Q.L1', 'XL.3', 'rosso'], ['XL.4', 'PLC.I6', 'rosso'],
  ['Q.L1', 'PLC.Q3A', 'rosso'], ['PLC.Q3B', 'HC.X1', 'rosso'], ['HC.X2', 'Q.N', 'blu'],
];
const START_43 = [
  { if: ['and', ['or', 'I1', 'M0'], 'I0'], do: [{ op: 'coil', a: 'M0' }] },
  { if: 'M2', do: [{ op: 'ton', id: 'T1', pt: 2 }] },
  { if: 'M6', do: [{ op: 'ton', id: 'T2', pt: 2 }] },
  { if: ['or', 'M1', 'M2', 'M5', 'M6'], do: [{ op: 'coil', a: 'Q0' }] },
  { if: ['or', 'M4', 'M5', 'M6', 'M7'], do: [{ op: 'coil', a: 'Q1' }] },
  { if: ['or', 'M2', 'M3', 'M4', 'M5'], do: [{ op: 'coil', a: 'Q2' }] },
  { if: 'M9', do: [{ op: 'coil', a: 'Q3' }] },
];
const TRANS_43 = [
  { if: ['and', 'M0', 'I2', 'I3', 'I5', ['not', 'M9']], do: [{ op: 'set', a: 'M1' }, { op: 'set', a: 'M9' }] },
  { if: ['and', 'M1', 'I4'], do: [{ op: 'reset', a: 'M1' }, { op: 'set', a: 'M2' }] },
  { if: ['and', 'M2', 'T1'], do: [{ op: 'reset', a: 'M2' }, { op: 'set', a: 'M3' }] },
  { if: ['and', 'M3', 'I3'], do: [{ op: 'reset', a: 'M3' }, { op: 'set', a: 'M4' }] },
  { if: ['and', 'M4', 'I6'], do: [{ op: 'reset', a: 'M4' }, { op: 'set', a: 'M5' }] },
  { if: ['and', 'M5', 'I4'], do: [{ op: 'reset', a: 'M5' }, { op: 'set', a: 'M6' }] },
  { if: ['and', 'M6', 'T2'], do: [{ op: 'reset', a: 'M6' }, { op: 'set', a: 'M7' }] },
  { if: ['and', 'M7', 'I3'], do: [{ op: 'reset', a: 'M7' }, { op: 'set', a: 'M8' }] },
  { if: ['and', 'M8', 'I5'], do: [{ op: 'reset', a: 'M8' }, { op: 'reset', a: 'M9' }] },
];
LEVELS_V2.push({
  id: 'c43-linea', code: 'c43', n: 0, ...IND, flow: 'onDemand',
  name: 'La linea', title: 'La linea',
  blurb: 'Una sequenza: aspetta il pezzo, prendilo, portalo al deposito e torna. Un passo alla volta.',
  goal: 'Un robot prende i pezzi dal punto di prelievo e li porta al deposito: scende, chiude la pinza, sale, si sposta, scende, apre la pinza, sale e torna. L’impianto è cablato: gli ingressi sono i pulsanti Arresto (I0) e Marcia (I1) e i sensori di pezzo pronto (I2), braccio su (I3), braccio giù (I4), posizione di prelievo (I5) e di deposito (I6). Il programma ha già la marcia, i tempi e le uscite: scrivi tu le transizioni da un passo al successivo. Il ciclo in corso finisce sempre.',
  fixed: W43,
  comps: [
    Q3,
    C('PLC', 'plc', 'PLC', 'PLC (transizioni da scrivere)', T('A1', 'A2', 'I0', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'IC', 'Q0A', 'Q0B', 'Q1A', 'Q1B', 'Q2A', 'Q2B', 'Q3A', 'Q3B'), {
      symbols: { I0: 'Arresto', I1: 'Marcia', I2: 'Pezzo pronto', I3: 'Braccio su', I4: 'Braccio giù', I5: 'Al prelievo', I6: 'Al deposito', Q0: 'Scendi', Q1: 'Vai al deposito', Q2: 'Chiudi pinza', Q3: 'Spia ciclo', M0: 'Marcia', M1: '1 Scendi', M2: '2 Prendi', M3: '3 Sali', M4: '4 Vai', M5: '5 Scendi', M6: '6 Lascia', M7: '7 Sali', M8: '8 Torna', M9: 'Ciclo in corso', T1: 'Pinza chiusa', T2: 'Pinza aperta' },
      edit: { start: START_43, markers: 10, timers: 2, counters: 0, ops: ['set', 'reset'] },
    }),
    C('SB0', 'pbnc', 'Arresto', 'Pulsante di arresto (NC)', T('1', '2')),
    C('SB1', 'pb', 'Marcia', 'Pulsante di marcia (NA)', T('3', '4')),
    C('HC', 'spia', 'Ciclo in corso', 'Spia di ciclo in corso', T('X1', 'X2')),
    C('PR', 'sens', 'Pezzo pronto', 'Sensore: pezzo pronto al prelievo', T('1', '2', '3', '4'), { sense: { v: 'partReady' } }),
    C('ZU', 'sens', 'Braccio su', 'Finecorsa: braccio in alto', T('1', '2', '3', '4'), { sense: { v: 'zUp' } }),
    C('ZD', 'sens', 'Braccio giù', 'Finecorsa: braccio in basso', T('1', '2', '3', '4'), { sense: { v: 'zDown' } }),
    C('XP', 'sens', 'Al prelievo', 'Finecorsa: braccio sul punto di prelievo', T('1', '2', '3', '4'), { sense: { v: 'atPick' } }),
    C('XL', 'sens', 'Al deposito', 'Finecorsa: braccio sul punto di deposito', T('1', '2', '3', '4'), { sense: { v: 'atPlace' } }),
  ],
  controls: ['SB0', 'SB1'],
  process: {
    model: 'linea', title: 'La linea', alt: 'Il robot che porta i pezzi dal prelievo al deposito', speed: 4,
    actuators: { down: { plc: 'PLC.Q0' }, shift: { plc: 'PLC.Q1' }, grip: { plc: 'PLC.Q2' } },
    trace: ['out', 'z', 'x'], labels: { out: 'Il numero di pezzi depositati', crash: 'Urto del braccio', dropped: 'I pezzi caduti' },
  },
  demoDo: [{ do: press('SB1').concat(['wait 20']), say: '' }],
  checks: [
    { id: 'attesa', label: 'Senza Marcia il robot sta fermo', do: ['wait 20'], expect: { process: { out: [0, 0], z: [0, 0.01] } } },
    { id: 'ciclo', label: 'Con Marcia il robot deposita i pezzi uno dopo l’altro, senza urti e senza far cadere niente', do: press('SB1').concat(['wait 90']), expect: { process: { out: [4, 99], crash: false, dropped: [0, 0] } } },
    { id: 'arresto', label: 'Con Arresto il robot finisce il ciclo in corso e poi si ferma', steps: [{ do: press('SB1').concat(['wait 6']), expect: { process: { crash: false } } }, { do: press('SB0').concat(['wait 60']), expect: { process: { out: [1, 1], crash: false, dropped: [0, 0], z: [0, 0.01] } } }] },
  ],
  safety: { coilReturn: ['PLC'], stopWins: 'SB0' },
  solution: W43,
  solutionPrograms: { PLC: START_43.concat(TRANS_43) },
  hints: [
    'Ogni passo è un marcatore: M1 scendi, M2 prendi, M3 sali, M4 vai, M5 scendi, M6 lascia, M7 sali, M8 torna. Un gradino di transizione ha come condizione il passo attuale e il sensore che dice “fatto”, e come uscite Reset del passo e Set del successivo.',
    'Per esempio, da M1 si passa a M2 quando il braccio è giù: contatto M1 in serie con I4 (braccio giù); uscite Reset M1 e Set M2.',
    'Dalla pinza chiusa (M2) si passa a M3 quando è finito il tempo T1; da M6 a M7 con T2; M3 e M7 aspettano il braccio su (I3); M4 aspetta il deposito (I6); M5 aspetta il braccio giù (I4); M8 aspetta il prelievo (I5).',
    'Il primo gradino parte il ciclo: serve Marcia (M0), un pezzo pronto (I2), braccio su (I3), al prelievo (I5) e nessun ciclo in corso (M9 normalmente chiuso). Uscite: Set M1 e Set M9. L’ultimo gradino, da M8 con I5, fa Reset M8 e Reset M9.',
  ],
});

// c44: la gestione dei guasti (Modulo 6). Il serbatoio con il pannello operatore di c37, tutto cablato e programmato:
// e' un turno di lavoro. Durante il turno scattano tre guasti dalla libreria (filo del trasmettitore interrotto, galleggiante
// bloccato, cavo di rete del pannello staccato); l'allievo li riconosce dal pannello e dal banco e li ripara in tempo.
const PROG_44 = START_37.concat(ALARMS_37);
LEVELS_V2.push({
  id: 'c44-guasti', code: 'c44', n: 0, ...IND, flow: 'onDemand',
  name: 'Gestione guasti', title: 'Gestione guasti',
  blurb: 'Un turno di lavoro: tre guasti arrivano a tempo, tu li leggi dal pannello e li ripari prima del danno.',
  goal: 'Il serbatoio con il pannello operatore è in servizio, già cablato e programmato. Dai corrente e comincia il turno: durante il turno arrivano tre guasti, uno alla volta. Leggi il pannello (allarmi, valori, collegamento), trova il pezzo guasto sul banco e riparalo. Ogni guasto ha un tempo massimo; il serbatoio non deve mai traboccare. Quando il turno finisce premi Verifica.',
  fixed: W37,
  comps: [
    Q3,
    C('PLC', 'plc', 'PLC', 'PLC con gli allarmi', T('A1', 'A2', 'I0', 'I1', 'IC', 'AI0+', 'AI0-', 'Q0A', 'Q0B'), {
      program: PROG_44,
      symbols: { I0: 'Livello alto', I1: 'Livello basso', Q0: 'Pompa', AI0: 'Livello (mA)', MW0: 'Livello (%)', M0: 'Troppo alto', M1: 'Guasto sensore', M2: 'Troppo basso', M3: 'Pompa a lungo' },
    }),
    C('LH', 'sens', 'Galleggiante alto', 'Galleggiante di livello alto (80 %)', T('1', '2', '3', '4'), { sense: { v: 'h', above: 80 } }),
    C('LL', 'sens', 'Galleggiante basso', 'Galleggiante di livello basso (20 %)', T('1', '2', '3', '4'), { sense: { v: 'h', below: 20 } }),
    C('TT', 'tx', 'Trasmettitore', 'Trasmettitore di livello 4-20 mA', T('+', '-'), { sense: { v: 'h', lo: 0, hi: 100 } }),
    C('HP', 'spia', 'Pompa', 'Pompa in marcia', T('X1', 'X2')),
    C('HMI', 'hmi', 'Pannello', 'Pannello operatore collegato al PLC', {}),
  ],
  process: {
    model: 'serbatoio', title: 'Il serbatoio', alt: 'Serbatoio con due galleggianti, il trasmettitore e la pompa',
    // tempo x2 (non x4): dal momento in cui il livello supera l'80 % con la pompa accesa al traboccamento passano 67 s simulati,
    // a x4 sarebbero 17 secondi veri per accorgersene, trovare il galleggiante e sbloccarlo
    params: { qIn: 30, qOut: 12 }, init: { h: 50 }, speed: 2,
    actuators: { pump: { load: 'HP' }, valve: { value: 1 } },
    trace: ['h'], labels: { h: 'Il livello' },
    graph: { vars: [{ v: 'h', label: 'Livello %', lo: 0, hi: 100 }], window: 600, lines: [{ value: 90, label: 'troppo alto' }, { value: 10, label: 'troppo basso' }] },
  },
  hmi: {
    plc: 'PLC', stale: 3,
    values: [{ id: 'V1', label: 'Livello', v: 'PLC.MW0', unit: '%' }, { id: 'V2', label: 'Pompa', v: 'PLC.Q0', bool: ['ferma', 'in marcia'] }],
    alarms: [
      { id: 'A1', bit: 'M0', text: 'Livello troppo alto', prio: 'alta' },
      { id: 'A2', bit: 'M1', text: 'Guasto del sensore di livello', prio: 'alta' },
      { id: 'A3', bit: 'M2', text: 'Livello troppo basso', prio: 'media' },
      { id: 'A4', bit: 'M3', text: 'Pompa accesa da più di 5 minuti', prio: 'bassa' },
    ],
  },
  scenario: {
    duration: 700,
    faults: [
      { id: 'f1', at: 70, do: 'cut TT', label: 'il filo del trasmettitore di livello', fixed: { part: 'TT', prop: 'cut', is: false }, maxDelay: 150, fix: ['cut TT'] },
      // a 300 s il livello e' al 65 % e sale: supera l'80 % a 350 s, "troppo alto" a 384 s, trabocca a 417 s. Il tempo massimo sta prima del traboccamento.
      { id: 'f2', at: 300, do: 'jam LH', label: 'il galleggiante alto bloccato', fixed: { part: 'LH', prop: 'jam', is: false }, maxDelay: 110, fix: ['jam LH'] },
      { id: 'f3', at: 500, do: 'toggle HMI', label: 'il cavo di rete del pannello', fixed: { part: 'HMI', prop: 'on', is: true }, maxDelay: 120, fix: ['toggle HMI'] },
    ],
    expect: { trace: [{ v: 'h', max: 99.9 }] },
  },
  demoDo: [{ do: ['wait 200'], say: '' }],
  checks: [],
  safety: { coilReturn: ['PLC'] },
  solution: W37,
  hints: [
    'Gli allarmi arrivano sul pannello: leggi il testo e la priorità. “Guasto del sensore di livello” vuol dire che l’anello del trasmettitore non porta corrente.',
    'Il galleggiante alto ferma la pompa all’80 %. Se il livello supera l’80 % e la pompa resta in marcia, il galleggiante alto non scatta: guarda i galleggianti sul banco. Non aspettare l’allarme “Livello troppo alto”: dopo l’allarme il serbatoio trabocca in pochi secondi.',
    'Se i valori del pannello diventano grigi e compare “collegamento perso”, il cavo di rete del pannello è staccato: toccalo per ricollegarlo.',
  ],
});

// c45: la fabbrica (Modulo 6). Una cella di prelievo e deposito con la sicurezza a due canali: l'allievo cabla l'arresto (fungo e portella,
// relè di sicurezza, contattore, riarmo), scrive le transizioni e gli allarmi del programma e poi gestisce un turno con quattro guasti.
const W45_SAFE = [
  ['Q.F', 'E.1', 'marrone'], ['E.2', 'P.1', 'marrone'], ['P.2', 'KS.S12', 'marrone'],
  ['Q.F', 'E.3', 'marrone'], ['E.4', 'P.3', 'marrone'], ['P.4', 'KS.S22', 'marrone'],
  ['Q.F', 'KS.A1', 'marrone'], ['KS.A2', 'Q.N', 'blu'],
  ['Q.F', 'KM.21', 'marrone'], ['KM.22', 'SBR.3', 'marrone'], ['SBR.4', 'KS.R', 'marrone'],
  ['Q.F', 'KS.13', 'marrone'], ['KS.14', 'KS.23', 'marrone'], ['KS.24', 'KM.A1', 'marrone'], ['KM.A2', 'Q.N', 'blu'],
  ['Q.F', 'KM.1', 'marrone'], ['KM.2', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
];
const W45_PLC = [
  ['Q.F', 'PLC.A1', 'marrone'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
  ['Q.F', 'SB0.1', 'marrone'], ['SB0.2', 'PLC.I0', 'marrone'],
  ['Q.F', 'SB1.3', 'marrone'], ['SB1.4', 'PLC.I1', 'marrone'],
  ['Q.F', 'PR.3', 'marrone'], ['PR.4', 'PLC.I2', 'marrone'],
  ['Q.F', 'ZU.3', 'marrone'], ['ZU.4', 'PLC.I3', 'marrone'],
  ['Q.F', 'ZD.3', 'marrone'], ['ZD.4', 'PLC.I4', 'marrone'],
  ['Q.F', 'XP.3', 'marrone'], ['XP.4', 'PLC.I5', 'marrone'],
  ['Q.F', 'XL.3', 'marrone'], ['XL.4', 'PLC.I6', 'marrone'],
  ['Q.F', 'KM.13', 'marrone'], ['KM.14', 'PLC.I7', 'marrone'],      // le sicurezze sono a posto: il contatto ausiliario del contattore
  ['Q.F', 'PLC.Q3A', 'marrone'], ['PLC.Q3B', 'HC.X1', 'marrone'], ['HC.X2', 'Q.N', 'blu'],
];
// i tempi contano solo con le sicurezze a posto (I7): se il robot e' senza potenza, un tempo che scorre farebbe passare al passo dopo con la pinza ancora ferma.
// Anche la marcia (M0) cade con le sicurezze aperte: dopo il riarmo il robot finisce il ciclo interrotto e per i pezzi successivi serve di nuovo Marcia.
const START_45 = START_43.map(r => (r.do[0].op === 'ton' || (r.do[0].op === 'coil' && r.do[0].a === 'M0') ? { ...r, if: ['and', r.if, 'I7'] } : r)).concat([{ if: ['and', 'M9', 'I7'], do: [{ op: 'ton', id: 'T3', pt: 40 }] }]);
const ALARMS_45 = [
  { if: 'T3', do: [{ op: 'coil', a: 'M10' }] },
  { if: ['not', 'I7'], do: [{ op: 'coil', a: 'M11' }] },
];
LEVELS_V2.push({
  id: 'c45-fabbrica', code: 'c45', n: 0, engine: 2, quadroOnly: true, flow: 'onDemand', palette: ['marrone', 'blu'],
  name: 'La fabbrica', title: 'La fabbrica',
  blurb: 'Cabla la sicurezza, scrivi il programma e gestisci un turno con i guasti: tutto quello che hai imparato.',
  goal: 'Una cella di produzione: un robot porta i pezzi dal prelievo al deposito. Tre cose da fare. Uno: cabla la sicurezza, con fungo e portella a due canali, il relè di sicurezza KS, il contattore KM che dà potenza al robot e il riarmo. Due: scrivi nel PLC le transizioni dei passi e i due allarmi, “ciclo bloccato” (il ciclo dura più di 40 secondi) e “sicurezze aperte” (il contatto ausiliario di KM, ingresso I7, non è chiuso). Tre: dai corrente, riarma, premi Marcia e gestisci il turno: arrivano quattro guasti e il robot deve consegnare almeno 20 pezzi senza urti né cadute.',
  fixed: W45_PLC,
  comps: [
    QM,
    C('E', 'fungo', 'Emergenza', 'Emergenza a due canali', T('1', '2', '3', '4')),
    C('P', 'port', 'Portella', 'Portella a due canali', T('1', '2', '3', '4')),
    C('SBR', 'pb', 'Riarmo', 'Pulsante di riarmo', T('3', '4')),
    C('KS', 'rs', 'Relè sicurezza', 'Relè di sicurezza KS', T('A1', 'A2', 'S12', 'S22', 'R', '13', '14', '23', '24')),
    C('KM', 'km', 'Contattore', 'Contattore KM: potenza del robot', T('A1', 'A2', '1', '2', '13', '14', '21', '22')),
    C('L', 'lamp', 'Robot alimentato', 'Spia: il robot è alimentato', { B: { l: 'B' }, A: { l: 'A' } }),
    C('PLC', 'plc', 'PLC', 'PLC (transizioni e allarmi da scrivere)', T('A1', 'A2', 'I0', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'IC', 'Q0A', 'Q0B', 'Q1A', 'Q1B', 'Q2A', 'Q2B', 'Q3A', 'Q3B'), {
      symbols: { I0: 'Arresto', I1: 'Marcia', I2: 'Pezzo pronto', I3: 'Braccio su', I4: 'Braccio giù', I5: 'Al prelievo', I6: 'Al deposito', I7: 'Sicurezze a posto', Q0: 'Scendi', Q1: 'Vai al deposito', Q2: 'Chiudi pinza', Q3: 'Spia ciclo', M0: 'Marcia', M1: '1 Scendi', M2: '2 Prendi', M3: '3 Sali', M4: '4 Vai', M5: '5 Scendi', M6: '6 Lascia', M7: '7 Sali', M8: '8 Torna', M9: 'Ciclo in corso', M10: 'Ciclo bloccato', M11: 'Sicurezze aperte', T1: 'Pinza chiusa', T2: 'Pinza aperta', T3: 'Ciclo lungo' },
      edit: { start: START_45, markers: 12, timers: 3, counters: 0, ops: ['coil', 'set', 'reset'] },
    }),
    C('SB0', 'pbnc', 'Arresto', 'Pulsante di arresto (NC)', T('1', '2')),
    C('SB1', 'pb', 'Marcia', 'Pulsante di marcia (NA)', T('3', '4')),
    C('HC', 'spia', 'Ciclo in corso', 'Spia di ciclo in corso', T('X1', 'X2')),
    C('PR', 'sens', 'Pezzo pronto', 'Sensore: pezzo pronto al prelievo', T('1', '2', '3', '4'), { sense: { v: 'partReady' } }),
    C('ZU', 'sens', 'Braccio su', 'Finecorsa: braccio in alto', T('1', '2', '3', '4'), { sense: { v: 'zUp' } }),
    C('ZD', 'sens', 'Braccio giù', 'Finecorsa: braccio in basso', T('1', '2', '3', '4'), { sense: { v: 'zDown' } }),
    C('XP', 'sens', 'Al prelievo', 'Finecorsa: braccio sul punto di prelievo', T('1', '2', '3', '4'), { sense: { v: 'atPick' } }),
    C('XL', 'sens', 'Al deposito', 'Finecorsa: braccio sul punto di deposito', T('1', '2', '3', '4'), { sense: { v: 'atPlace' } }),
    C('HMI', 'hmi', 'Pannello', 'Pannello operatore collegato al PLC', {}),
  ],
  controls: ['SBR', 'E', 'P', 'SB0', 'SB1'],
  process: {
    model: 'linea', title: 'La cella', alt: 'Il robot che porta i pezzi dal prelievo al deposito', speed: 4,
    actuators: { down: { plc: 'PLC.Q0' }, shift: { plc: 'PLC.Q1' }, grip: { plc: 'PLC.Q2' }, enable: { coil: 'KM' } },
    trace: ['out', 'z', 'x', 'PLC.Q0'], labels: { out: 'Il numero di pezzi depositati', crash: 'Urto del braccio', dropped: 'I pezzi caduti' },
  },
  hmi: {
    plc: 'PLC', stale: 3,
    values: [{ id: 'V1', label: 'Pezzi depositati', v: 'out', unit: 'pz' }, { id: 'V2', label: 'Ciclo', v: 'PLC.M9', bool: ['fermo', 'in corso'] }],
    alarms: [
      { id: 'A1', bit: 'M10', text: 'Ciclo bloccato', prio: 'alta' },
      { id: 'A2', bit: 'M11', text: 'Sicurezze aperte', prio: 'alta' },
    ],
  },
  scenario: {
    duration: 700,
    faults: [
      // Tempi massimi: il finecorsa morto si vede quando il ciclo si ferma, "Ciclo bloccato" arriva fino a 45 s dopo il guasto e poi restano
      // 75 s (19 secondi veri a x4); fungo e portella si vedono subito. Riparando tutto all'ultimo secondo utile il robot consegna ancora
      // 21 pezzi: l'obiettivo di 20 non contraddice i tempi massimi (lo controlla un test).
      { id: 'f1', at: 100, do: 'dead ZD', label: 'il finecorsa “braccio giù” (sensore guasto)', fixed: { part: 'ZD', prop: 'jam', is: false }, maxDelay: 120, fix: ['jam ZD'] },
      { id: 'f2', at: 250, do: 'toggle E', label: 'il fungo di emergenza premuto', fixed: { part: 'KS', prop: 'on', is: true }, maxDelay: 90, fix: ['toggle E', 'press SBR', 'release SBR', 'press SB1', 'release SB1'] },
      { id: 'f3', at: 400, do: 'toggle P', label: 'la portella aperta', fixed: { part: 'KS', prop: 'on', is: true }, maxDelay: 90, fix: ['toggle P', 'press SBR', 'release SBR', 'press SB1', 'release SB1'] },
      { id: 'f4', at: 540, do: 'toggle HMI', label: 'il cavo di rete del pannello', fixed: { part: 'HMI', prop: 'on', is: true }, maxDelay: 100, fix: ['toggle HMI'] },
    ],
    expect: { process: { crash: false, dropped: [0, 0] }, trace: [{ v: 'out', reaches: 20 }] },
  },
  demoDo: [{ do: press('SBR').concat(press('SB1'), ['wait 30']), say: '' }],
  checks: [
    { id: 'fermo', label: 'Prima del riarmo il robot non ha potenza e sta fermo, anche premendo Marcia', do: press('SB1').concat(['wait 20']), expect: { loads: { L: 'off' }, process: { out: [0, 0], z: [0, 0.01] } } },
    { id: 'lavora', label: 'Dopo il riarmo e Marcia il robot deposita i pezzi, senza urti e senza cadute', do: press('SBR').concat(press('SB1'), ['wait 60']), expect: { loads: { L: 'on' }, process: { out: [2, 99], crash: false, dropped: [0, 0] } } },
    { id: 'emergenza', label: 'Premendo il fungo il robot perde potenza e si ferma dov’è', steps: [{ do: press('SBR').concat(press('SB1'), ['wait 8']), expect: { loads: { L: 'on' } } }, { do: ['toggle E'], expect: { loads: { L: 'off' } } }] },
    { id: 'portella', label: 'Aprendo la portella il robot perde potenza', steps: [{ do: press('SBR').concat(press('SB1'), ['wait 8']), expect: { loads: { L: 'on' } } }, { do: ['toggle P'], expect: { loads: { L: 'off' } } }] },
    { id: 'riparte', label: 'Richiusa la portella il robot non riparte da solo: serve il riarmo', steps: [{ do: press('SBR').concat(press('SB1'), ['wait 8']), expect: { loads: { L: 'on' } } }, { do: ['toggle P', 'toggle P'], expect: { loads: { L: 'off' } } }, { do: press('SBR'), expect: { loads: { L: 'on' } } }] },
    { id: 'allarmi', label: 'Con le sicurezze aperte il pannello segnala “Sicurezze aperte”', do: ['wait 3'], expect: { hmi: { alarms: { A2: 'attivo' } } } },
  ],
  safety: { dualChannel: [['KS.S12', 'KS.S22']], outputsSeries: ['KS'], allContacts: ['E', 'P'], restartNeedsReset: { stop: ['E', 'P'], reset: 'SBR', load: 'L' }, feedbackMonitored: { km: 'KM', stop: 'E', reset: 'SBR', rs: 'KS' }, coilReturn: ['PLC'] },
  solution: W45_SAFE.concat(W45_PLC),
  solutionPrograms: { PLC: START_45.concat(TRANS_43, ALARMS_45) },
  solutionStart: ['press SBR', 'release SBR', 'press SB1', 'release SB1'],   // per i test: riarmo e marcia all'inizio del turno
  hints: [
    'La sicurezza è quella dei livelli precedenti: i due canali del fungo e della portella in serie ai due ingressi del relè KS, le sue uscite in serie alla bobina di KM, il riarmo che passa dal contatto NC di KM.',
    'Il programma: le transizioni sono quelle della linea (i tempi già scritti contano solo con le sicurezze a posto: un tempo che scorre a robot senza potenza farebbe passare al passo dopo con la pinza ferma). Gli allarmi sono due gradini con una bobina ciascuno: il timer T3 (ciclo più lungo di 40 secondi) alimenta la bobina M10, e I7 normalmente chiuso (le sicurezze non sono a posto) alimenta la bobina M11.',
    'Nel turno: un robot che resta fermo con “Ciclo bloccato” ha un finecorsa che non risponde; il fungo o la portella tolgono la potenza: prima li richiudi, poi premi il riarmo, poi Marcia (con le sicurezze aperte il PLC perde la marcia); il pannello grigio è il cavo di rete.',
  ],
});
