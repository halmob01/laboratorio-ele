// Unita' didattiche dei Moduli 2 e 3. Stessa forma di units.js.

export const UNITS_V2 = {
  'c07-presa-comandata': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Una presa e una luce con un solo comando',
          paras: [
            'In molte stanze un solo interruttore comanda più di un carico: per esempio la luce del soffitto e una presa a cui è collegata una lampada da tavolo.',
            'Il comando sta sulla fase. A valle dell’interruttore la fase si divide: un filo va alla presa, uno alla lampada. Il neutro, invece, non passa dall’interruttore.',
          ],
        },
        {
          type: 'pezzi',
          title: 'La presa: fase, neutro e terra',
          focus: ['P'],
          paras: [
            'La presa ha tre morsetti. L riceve la fase, N il neutro, PE la terra.',
            'Fase e neutro non si scambiano mai, anche se l’apparecchio funzionerebbe lo stesso: il morsetto L deve essere sulla fase, perché le parti metalliche della spina siano sicure.',
          ],
        },
        {
          type: 'pezzi',
          title: 'L’interruttore sulla fase',
          focus: ['S'],
          paras: [
            'L’interruttore apre o chiude un solo filo: la fase. Quando è aperto, presa e lampada non ricevono tensione.',
            'Il filo che esce dall’interruttore (morsetto 2) alimenta tutti e due i carichi. Lo stesso morsetto, due fili.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE del quadro al morsetto 1 dell’interruttore.',
              'Filo marrone dal morsetto 2 dell’interruttore al morsetto L della presa.',
              'Un secondo filo marrone dallo stesso morsetto 2 al morsetto A della lampada.',
              'Filo blu dal NEUTRO al morsetto N della presa.',
              'Filo blu dal NEUTRO al morsetto B della lampada.',
              'Filo giallo-verde dalla TERRA del quadro al morsetto PE della presa.',
            ],
            power: 'Levetta su: l’interruttore è aperto, presa e lampada sono senza tensione.',
            controls: ['Interruttore chiuso: la presa è alimentata e la lampada si accende.'],
          },
        },
        {
          type: 'previsione',
          question: 'L’interruttore è aperto. Che cosa succede se inserisco una spina nella presa?',
          options: [
            { id: 'a', text: 'L’apparecchio funziona lo stesso: la presa è sempre alimentata.' },
            { id: 'b', text: 'L’apparecchio non funziona: la presa è comandata dall’interruttore.' },
            { id: 'c', text: 'Scatta il quadro.' },
          ],
          correct: 'b',
          why: 'In questo circuito l’interruttore interrompe la fase che alimenta anche la presa. Aperto l’interruttore, la presa non ha tensione e l’apparecchio non funziona. Le prese normali, invece, sono collegate direttamente al quadro.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['S.a'], color: 'marrone', short: '1 Fase', title: 'Porta la fase all’interruttore', text: 'Dalla FASE del quadro al morsetto 1 dell’interruttore.' },
      { kind: 'wire', from: 'S.b', to: ['P.L'], color: 'marrone', short: '2 Presa', title: 'Dall’interruttore alla presa', text: 'Dal morsetto 2 dell’interruttore al morsetto L della presa.' },
      { kind: 'wire', from: 'S.b', to: ['L.A'], color: 'marrone', short: '3 Lampada', title: 'Dall’interruttore alla lampada', text: 'Dallo stesso morsetto 2 a un morsetto della lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['P.N'], color: 'blu', short: '4 Neutro presa', title: 'Il neutro alla presa', text: 'Dal NEUTRO al morsetto N della presa.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '5 Neutro lampada', title: 'Il neutro alla lampada', text: 'Dal NEUTRO al morsetto libero della lampada.' },
      { kind: 'wire', from: 'Q.PE', to: ['P.PE'], color: 'gv', short: '6 Terra', title: 'La terra alla presa', text: 'Dalla TERRA del quadro al morsetto PE della presa.' },
      { kind: 'power', short: '7 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi prova l’interruttore.' },
      { kind: 'verify', short: '8 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Un solo interruttore può comandare più carichi: sta sulla fase, prima che si divida.',
      'Il neutro va ai carichi senza passare dall’interruttore.',
      'La presa ha L (fase), N (neutro) e PE (terra): la terra si collega sempre.',
      'Fase e neutro sulla presa non si scambiano, anche se l’apparecchio funziona lo stesso.',
    ],
    fault: {
      say: 'L’impianto è già cablato e la lampada e la presa funzionano. Eppure l’impianto non è a norma. Dai corrente, prova l’interruttore e poi premi Verifica.',
      wires: [
        ['Q.F', 'S.a', 'marrone'], ['S.b', 'P.N', 'marrone'], ['S.b', 'L.A', 'marrone'],
        ['Q.N', 'P.L', 'blu'], ['Q.N', 'L.B', 'blu'], ['Q.PE', 'P.PE', 'gv'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Fase e neutro sono scambiati sulla presa.' },
          { id: 'b', text: 'Manca il filo di terra alla presa.' },
          { id: 'c', text: 'La lampada è collegata in serie alla presa.' },
        ],
        correct: 'a',
        why: 'La fase è arrivata sul morsetto N e il neutro sul morsetto L. Gli apparecchi funzionano lo stesso, ma una parte dell’apparecchio che dovrebbe essere a riposo resta in tensione. La fase va sempre sul morsetto L.',
      },
      fixSay: 'Scambia i fili sulla presa: la fase al morsetto L e il neutro al morsetto N. Poi premi Verifica.',
    },
  },

  'c08-rele-impulsi': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Una luce da tre punti',
          paras: [
            'In un lungo corridoio con molte porte serve accendere e spegnere la stessa luce da molti punti. Con i deviatori servirebbe un invertitore in ogni punto in più.',
            'Con il relè ad impulsi basta mettere tanti pulsanti quanti ne servono, tutti in parallelo. Ogni pressione cambia lo stato della luce.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il pulsante',
          focus: ['P1'],
          paras: [
            'Il pulsante è un interruttore che torna a riposo da solo: il contatto è chiuso finché lo tieni premuto, poi si riapre.',
            'Per questo non ricorda lo stato della luce: lo ricorda il relè.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il relè ad impulsi',
          focus: ['K'],
          paras: [
            'Il relè ha due parti separate. La bobina (A1-A2) è il circuito di comando: a ogni impulso il relè cambia stato.',
            'Il contatto (1-2) è il circuito della lampada: è chiuso o aperto, e resta così finché non arriva un altro impulso.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Pulsanti in parallelo, mai in serie',
          paras: [
            'I pulsanti in parallelo: ne basta uno premuto perché la bobina riceva l’impulso. In serie servirebbero tutti premuti insieme.',
            'In parallelo i morsetti 3 sono collegati tra loro e alla fase; i morsetti 4 sono collegati tra loro e alla bobina.',
          ],
          warn: 'Pulsanti in serie: la bobina non riceverebbe mai l’impulso e la lampada non si accenderebbe mai.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE al morsetto 3 del pulsante dell’ingresso.',
              'Il morsetto 3 del pulsante dell’ingresso al morsetto 3 del pulsante del soggiorno.',
              'Il morsetto 3 del soggiorno al morsetto 3 del pulsante della camera.',
              'Il morsetto 4 dell’ingresso al morsetto 4 del soggiorno.',
              'Il morsetto 4 del soggiorno al morsetto 4 della camera.',
              'Il morsetto 4 della camera alla bobina del relè (A1).',
              'Filo blu dal NEUTRO alla bobina (A2).',
              'Filo marrone dalla FASE al contatto del relè (morsetto 1).',
              'Filo marrone dal contatto (morsetto 2) alla lampada.',
              'Filo blu dal NEUTRO alla lampada.',
            ],
            power: 'Levetta su: il relè è a riposo e la lampada è spenta.',
            controls: ['Primo impulso: la lampada si accende.', 'Secondo impulso: la lampada si spegne.', 'Terzo impulso: la lampada si riaccende.'],
          },
        },
        {
          type: 'previsione',
          question: 'La lampada è accesa. Premo il pulsante e lo lascio andare. Che cosa fa la lampada?',
          options: [
            { id: 'a', text: 'Si spegne e resta spenta.' },
            { id: 'b', text: 'Si spegne solo finché tengo premuto, poi si riaccende.' },
            { id: 'c', text: 'Resta accesa.' },
          ],
          correct: 'a',
          why: 'Il relè ad impulsi cambia stato a ogni pressione e ricorda lo stato anche a pulsante rilasciato. Un impulso acceso, un impulso spento.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['P1.3'], color: 'marrone', short: '1 Fase', title: 'La fase ai pulsanti', text: 'Dalla FASE del quadro al morsetto 3 del pulsante dell’ingresso.' },
      { kind: 'wire', from: 'P1.3', to: ['P2.3', 'P3.3'], color: 'marrone', short: '2 Morsetti 3', title: 'I morsetti 3 in parallelo', text: 'Collega tra loro i morsetti 3 dei tre pulsanti: servono due fili.' },
      { kind: 'wire', from: 'P1.4', to: ['P2.4', 'P3.4'], color: 'marrone', short: '3 Morsetti 4', title: 'I morsetti 4 in parallelo', text: 'Collega tra loro i morsetti 4 dei tre pulsanti: servono due fili.' },
      { kind: 'wire', from: 'P3.4', to: ['K.A1'], color: 'marrone', short: '4 Bobina', title: 'Dai pulsanti alla bobina', text: 'Dal morsetto 4 di un pulsante al morsetto A1 del relè.' },
      { kind: 'wire', from: 'K.A2', to: ['Q.N'], color: 'blu', short: '5 Neutro bobina', title: 'Il neutro alla bobina', text: 'Dal morsetto A2 del relè al NEUTRO.' },
      { kind: 'wire', from: 'Q.F', to: ['K.1'], color: 'marrone', short: '6 Contatto', title: 'La fase al contatto', text: 'Dalla FASE al morsetto 1 del relè.' },
      { kind: 'wire', from: 'K.2', to: ['L.A'], color: 'marrone', short: '7 Lampada', title: 'Dal contatto alla lampada', text: 'Dal morsetto 2 del relè a un morsetto della lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '8 Neutro', title: 'Il neutro alla lampada', text: 'Dal NEUTRO al morsetto libero della lampada.' },
      { kind: 'power', short: '9 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi premi i pulsanti uno alla volta.' },
      { kind: 'verify', short: '10 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il pulsante torna a riposo da solo: non ricorda lo stato della luce.',
      'Il relè ad impulsi cambia stato a ogni impulso sulla bobina e lo mantiene.',
      'Circuito di comando (bobina) e circuito della lampada (contatto) sono separati.',
      'I pulsanti si collegano in parallelo: ne basta uno premuto. In serie la lampada non si accende mai.',
    ],
    fault: {
      say: 'L’impianto è già cablato, ma premendo i pulsanti la lampada non si accende. Dai corrente e prova.',
      wires: [
        ['Q.F', 'P1.3', 'marrone'], ['P1.4', 'P2.3', 'marrone'], ['P2.4', 'P3.3', 'marrone'], ['P3.4', 'K.A1', 'marrone'],
        ['K.A2', 'Q.N', 'blu'], ['Q.F', 'K.1', 'marrone'], ['K.2', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'I pulsanti sono collegati in serie: la bobina non riceve mai l’impulso.' },
          { id: 'b', text: 'Il relè è collegato al neutro sbagliato.' },
          { id: 'c', text: 'La lampada non è collegata al neutro.' },
        ],
        correct: 'a',
        why: 'I pulsanti sono uno dopo l’altro: la fase arriva alla bobina solo se tutti e tre sono premuti insieme, ed è impossibile da punti diversi della casa. I pulsanti vanno in parallelo.',
      },
      fixSay: 'Ricollega i pulsanti in parallelo: i tre morsetti 3 insieme alla fase, i tre morsetti 4 insieme alla bobina. Poi premi Verifica.',
    },
  },

  'c12-motore': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Tre fasi e 400 V',
          paras: [
            'Nelle fabbriche la rete è trifase: ci sono tre fasi, L1, L2 e L3. Tra due fasi qualsiasi la tensione è di 400 V; tra una fase e il neutro è di 230 V, come in casa.',
            'I motori industriali sono quasi tutti trifase: tre avvolgimenti alimentati dalle tre fasi creano un campo magnetico che gira e trascina il rotore. Non serve il neutro.',
          ],
          warn: 'A 400 V gli errori sono più pericolosi. Si lavora sempre con il salvamotore aperto.',
        },
        {
          type: 'pezzi',
          title: 'Il salvamotore',
          focus: ['QM'],
          paras: [
            'Il salvamotore è un interruttore con tre poli, uno per fase. In alto entrano le fasi (1, 3, 5), in basso escono (2, 4, 6).',
            'Protegge il motore e i fili che vengono dopo: scatta se la corrente è troppo alta. La levetta su vuol dire chiuso, giù aperto.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il motore',
          focus: ['M'],
          paras: [
            'Il motore ha tre morsetti per le fasi, U, V e W, e il morsetto PE per la terra. La terra collega la carcassa metallica: se un avvolgimento tocca la carcassa, la corrente va a terra e non in chi la tocca.',
            'Le fasi si collegano in ordine: L1 a U, L2 a V, L3 a W. Con questo ordine il motore gira in avanti.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il senso di rotazione',
          paras: [
            'Per far girare il motore al contrario basta scambiare due qualunque delle tre fasi. Il campo magnetico gira nell’altro verso e con lui il rotore.',
            'È utile quando serve andare avanti e indietro, per esempio in un nastro o in un cancello. Se invece succede per errore, il motore gira nel verso sbagliato.',
          ],
          table: { head: ['U', 'V', 'W', 'Senso'], rows: [['L1', 'L2', 'L3', 'in avanti'], ['L1', 'L3', 'L2', 'all’indietro']] },
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla fase L1 al morsetto 1 del salvamotore.',
              'Filo nero dalla fase L2 al morsetto 3.',
              'Filo grigio dalla fase L3 al morsetto 5.',
              'Filo marrone dal morsetto 2 del salvamotore al morsetto U del motore.',
              'Filo nero dal morsetto 4 al morsetto V.',
              'Filo grigio dal morsetto 6 al morsetto W.',
              'Filo giallo-verde dalla terra del quadro al morsetto PE del motore.',
            ],
            power: 'Il salvamotore è aperto: il motore è fermo.',
            controls: ['Salvamotore chiuso: le tre fasi arrivano al motore e il motore gira in avanti.'],
          },
        },
        {
          type: 'previsione',
          question: 'Scambio due delle tre fasi sui morsetti del motore. Che cosa succede?',
          options: [
            { id: 'a', text: 'Il motore gira al contrario.' },
            { id: 'b', text: 'Il motore non parte.' },
            { id: 'c', text: 'Il salvamotore scatta.' },
          ],
          correct: 'a',
          why: 'Scambiando due fasi il campo magnetico del motore gira nel verso opposto: il motore funziona normalmente, ma al contrario. Non c’è nessun cortocircuito, quindi il salvamotore non scatta.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.L1', to: ['QM.1'], color: 'marrone', short: '1 Fasi', title: 'Le tre fasi al salvamotore', text: 'L1 al morsetto 1 (marrone), L2 al 3 (nero), L3 al 5 (grigio).' },
      { kind: 'wire', from: 'QM.2', to: ['M.U'], color: 'marrone', short: '2 Motore', title: 'Dal salvamotore al motore', text: 'Dai morsetti 2, 4 e 6 ai morsetti U, V e W, nello stesso ordine.' },
      { kind: 'wire', from: 'Q.PE', to: ['M.PE'], color: 'gv', short: '3 Terra', title: 'La terra al motore', text: 'Dalla terra del quadro al morsetto PE del motore.' },
      { kind: 'control', id: 'QM', short: '4 Salvamotore', title: 'Chiudi il salvamotore', text: 'Tocca la levetta del salvamotore: il motore deve girare.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'La rete industriale ha tre fasi, L1, L2 e L3: tra due fasi ci sono 400 V.',
      'Il motore trifase non usa il neutro: usa le tre fasi, U, V e W, e la terra PE.',
      'Il salvamotore ha un polo per fase e protegge il motore.',
      'Scambiando due fasi il motore gira al contrario.',
    ],
    fault: {
      say: 'Il motore è già collegato e gira, ma nel verso sbagliato. Chiudi il salvamotore e guarda.',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'M.U', 'marrone'], ['QM.4', 'M.W', 'nero'], ['QM.6', 'M.V', 'grigio'], ['Q.PE', 'M.PE', 'gv'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Due fasi sono scambiate: il motore gira all’indietro.' },
          { id: 'b', text: 'Manca la terra.' },
          { id: 'c', text: 'Il motore è collegato al neutro.' },
        ],
        correct: 'a',
        why: 'I fili che vanno ai morsetti V e W sono scambiati. Per invertire il senso di rotazione di un motore trifase basta scambiare due fasi.',
      },
      fixSay: 'Rimetti le fasi in ordine: il morsetto 4 va a V e il morsetto 6 a W. Poi premi Verifica.',
    },
  },

  'c13-marcia-arresto': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Due circuiti: potenza e comando',
          paras: [
            'Un motore si comanda con un contattore: un interruttore pilotato da una bobina. Il circuito di potenza porta le tre fasi al motore. Il circuito di comando alimenta la bobina e decide quando il contattore si chiude.',
            'I due circuiti sono separati. Il comando usa pochi fili sottili, con pulsanti piccoli e sicuri. Nel gioco i fili di comando sono rossi.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il contattore',
          focus: ['KM'],
          paras: [
            'La bobina è tra A1 e A2. Se è alimentata, i tre poli di potenza (1-2, 3-4, 5-6) si chiudono e il motore parte.',
            'Il contattore ha anche un contatto ausiliario, 13-14: si chiude insieme ai poli di potenza. Serve per l’autoritenuta.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Marcia e arresto',
          focus: ['SB0', 'SB1'],
          paras: [
            'Il pulsante di marcia è normalmente aperto (NA): chiude il circuito finché lo tieni premuto. Il pulsante di arresto è normalmente chiuso (NC): lo apre.',
            'L’arresto è NC perché se un filo si stacca il circuito si apre e il motore si ferma. Un guasto va sempre verso la sicurezza.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'L’autoritenuta',
          paras: [
            'Il pulsante di marcia dà corrente alla bobina solo finché lo tieni premuto. Per non doverlo tenere premuto si usa il contatto 13-14 del contattore, in parallelo al pulsante.',
            'Premi Marcia: la bobina si eccita e il contatto 13-14 si chiude. Rilasci: la corrente alla bobina continua a passare dal contatto. Il contattore si tiene da solo, per questo si chiama autoritenuta.',
            'Premi Arresto: il circuito si apre, la bobina si diseccita, il contatto 13-14 si apre e il motore si ferma. Il motore riparte solo con un nuovo comando di marcia.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla fase L1 al morsetto 1 del salvamotore.',
              'Filo nero dalla fase L2 al morsetto 3.',
              'Filo grigio dalla fase L3 al morsetto 5.',
              'Dal morsetto 2 del salvamotore al morsetto 1 del contattore.',
              'Dal morsetto 4 al morsetto 3 del contattore.',
              'Dal morsetto 6 al morsetto 5 del contattore.',
              'Dal morsetto 2 del contattore al morsetto U del motore.',
              'Dal morsetto 4 del contattore al morsetto V.',
              'Dal morsetto 6 del contattore al morsetto W.',
              'Filo giallo-verde dalla terra al morsetto PE del motore.',
              'Comando: filo rosso dal morsetto 2 del salvamotore al pulsante di arresto.',
              'Filo rosso dal pulsante di arresto al pulsante di marcia.',
              'Filo rosso dal pulsante di marcia alla bobina del contattore (A1).',
              'Filo blu dall’altro capo della bobina (A2) al neutro.',
              'Autoritenuta: filo rosso dal morsetto 3 del pulsante di marcia al contatto 13.',
              'Filo rosso dal contatto 14 al morsetto 4 del pulsante di marcia.',
              'Filo rosso dalla bobina (A1) alla spia di marcia.',
              'Filo blu dalla spia al neutro.',
            ],
            power: 'Il motore è fermo e la spia è spenta.',
            controls: ['Premuto Arresto, il motore resta fermo.', 'Premuta Marcia: il contattore si chiude, il motore parte e la spia si accende.'],
          },
        },
        {
          type: 'previsione',
          question: 'Il motore sta girando e premo Marcia. Che cosa succede?',
          options: [
            { id: 'a', text: 'Niente: il motore continua a girare.' },
            { id: 'b', text: 'Il motore si ferma.' },
            { id: 'c', text: 'Il salvamotore scatta.' },
          ],
          correct: 'a',
          why: 'Il contattore è già chiuso e la bobina è già alimentata dal contatto di autoritenuta. Premere Marcia ancora non cambia nulla.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.L1', to: ['QM.1'], color: 'marrone', short: '1 Fasi', title: 'Le tre fasi al salvamotore', text: 'L1, L2 e L3 ai morsetti 1, 3 e 5 del salvamotore.' },
      { kind: 'wire', from: 'QM.2', to: ['KM.1'], color: 'marrone', short: '2 Contattore', title: 'Dal salvamotore al contattore', text: 'Dai morsetti 2, 4 e 6 del salvamotore ai morsetti 1, 3 e 5 del contattore.' },
      { kind: 'wire', from: 'KM.2', to: ['M.U'], color: 'marrone', short: '3 Motore', title: 'Dal contattore al motore', text: 'Dai morsetti 2, 4 e 6 del contattore ai morsetti U, V e W del motore.' },
      { kind: 'wire', from: 'M.PE', to: ['Q.PE'], color: 'gv', short: '4 Terra', title: 'La terra al motore', text: 'Dal morsetto PE del motore alla terra del quadro.' },
      { kind: 'wire', from: 'QM.2', to: ['SB0.1'], color: 'rosso', short: '5 Arresto', title: 'Il comando passa dall’arresto', text: 'Filo rosso dal morsetto 2 del salvamotore al morsetto 1 del pulsante di arresto.' },
      { kind: 'wire', from: 'SB0.2', to: ['SB1.3'], color: 'rosso', short: '6 Marcia', title: 'Poi dalla marcia', text: 'Filo rosso dal morsetto 2 dell’arresto al morsetto 3 del pulsante di marcia.' },
      { kind: 'wire', from: 'SB1.4', to: ['KM.A1'], color: 'rosso', short: '7 Bobina', title: 'Alla bobina', text: 'Filo rosso dal morsetto 4 della marcia al morsetto A1 del contattore.' },
      { kind: 'wire', from: 'KM.A2', to: ['Q.N'], color: 'blu', short: '8 Neutro', title: 'Il neutro alla bobina', text: 'Filo blu da A2 al neutro del quadro.' },
      { kind: 'wire', from: 'KM.13', to: ['SB1.3'], color: 'rosso', short: '9 Autoritenuta', title: 'L’autoritenuta', text: 'Due fili rossi: dal morsetto 3 della marcia al contatto 13 e dal contatto 14 al morsetto 4 della marcia.' },
      { kind: 'wire', from: 'H.X1', to: ['KM.A1'], color: 'rosso', short: '10 Spia', title: 'La spia di marcia', text: 'Filo rosso da A1 alla spia e filo blu dall’altro morsetto della spia al neutro.' },
      { kind: 'control', id: 'SB1', short: '11 Marcia', title: 'Prova la marcia', text: 'Tieni premuto Marcia e rilascia: il motore deve restare in marcia.' },
      { kind: 'verify', short: '12 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il circuito di potenza porta le tre fasi al motore; il circuito di comando alimenta la bobina del contattore.',
      'La bobina alimentata chiude i poli di potenza e il contatto ausiliario 13-14.',
      'Marcia è un pulsante NA, Arresto è un pulsante NC: un filo staccato ferma il motore.',
      'L’autoritenuta è il contatto 13-14 in parallelo al pulsante di marcia: il contattore si tiene da solo.',
      'Arresto vince sempre: premuto, il motore si ferma anche se si tiene premuta Marcia.',
    ],
    fault: {
      say: 'Il circuito è già cablato. Premi Marcia e rilascia: guarda che cosa fa il motore.',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
        ['KM.2', 'M.U', 'marrone'], ['KM.4', 'M.V', 'nero'], ['KM.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
        ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'], ['SB1.4', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
        ['H.X1', 'KM.A1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Manca l’autoritenuta: il motore si ferma appena rilasci Marcia.' },
          { id: 'b', text: 'Il motore è collegato alle fasi sbagliate.' },
          { id: 'c', text: 'Il pulsante di arresto è sul neutro.' },
        ],
        correct: 'a',
        why: 'Senza il contatto 13-14 in parallelo al pulsante di marcia la bobina è alimentata solo finché tieni premuto Marcia. Rilasciato il pulsante, il contattore si apre e il motore si ferma.',
      },
      fixSay: 'Aggiungi l’autoritenuta: filo rosso dal morsetto 3 della marcia al contatto 13 e dal contatto 14 al morsetto 4 della marcia. Poi premi Verifica.',
    },
  },
};
