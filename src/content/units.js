// Unità didattiche dei livelli: lezione a pagine, passi dell'esercizio, sintesi, sfida guasto.
// Sono solo dati e testi; la sessione (src/engine/session.js) tiene la fase corrente e la vista li disegna.
// Il modello è descritto in docs/LEZIONE-ED-ESERCIZIO.md.
//
// unit = {
//   support: 'guidato' | 'passi' | 'obiettivo',   quanto aiuto dà la pagina dell'esercizio
//   lesson:  { pages: [ page, ... ] },             l'ultima pagina è sempre di tipo 'sintesi'
//   steps:   [ step, ... ],                        passi dell'esercizio
//   summary: [ 'punto', ... ],                     sintesi (pagina finale, Quaderno)
//   fault:   { say, wires: [[da, a, colore]...], diagnosis: { question, options, correct, why }, fixSay }
// }
// page =
//   { type: 'spiegazione', title, paras, art?, room?: 'lit' | 'dark', table?: { head, rows }, warn? }
//   { type: 'pezzi', title, focus: ['Q'], paras }          focus = id dei componenti in evidenza
//   { type: 'demo', title, captions: { wires: [...], power, controls?: [...] } }
//   { type: 'previsione', question, options: [{ id, text }], correct, why }
//   { type: 'sintesi', title }
// step =
//   { kind: 'wire', from, to: [morsetti], color, short, title, text }
//   { kind: 'power' | 'verify', short, title, text }
//   { kind: 'control', id, short, title, text }

export const UNITS = {
  'c01-circuito-chiuso': {
    support: 'guidato',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Una lampada al soffitto',
          room: 'lit',
          paras: [
            'In ogni stanza c’è almeno una lampada collegata al quadro elettrico di casa.',
            'In questo livello la colleghi tu, sul banco, con due fili. Alla fine la vedrai accendersi nella stanza.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il quadro: da qui arriva la corrente',
          focus: ['Q'],
          paras: [
            'Il quadro ha due uscite. La FASE porta la corrente verso la lampada, il NEUTRO la riporta indietro.',
            'La levetta accende e spegne tutto l’impianto.',
          ],
        },
        {
          type: 'pezzi',
          title: 'La lampada: due morsetti',
          focus: ['L'],
          paras: [
            'I morsetti sono le viti che stringono il filo. La lampada ne ha due, A e B: un filo per ciascuno.',
            'Per la lampada A e B sono equivalenti: conta che i due fili vadano a due morsetti diversi.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché servono due fili',
          art: 'giro',
          paras: [
            'La corrente scorre solo se ha un giro completo da fare: esce dalla fase, attraversa la lampada e torna al neutro.',
            'Se manca uno dei due fili il giro è interrotto. Si dice circuito aperto: la lampada resta spenta.',
          ],
          warn: 'Non collegare mai la fase direttamente al neutro: è un cortocircuito e il quadro scatta.',
        },
        {
          type: 'spiegazione',
          title: 'Tensione, corrente, potenza',
          paras: [
            'Tre parole che userai sempre. La tensione è la spinta che fa muovere la corrente. Tra fase e neutro ci sono 230 V anche quando non è acceso niente, come la pressione nel tubo dell’acqua con il rubinetto chiuso.',
            'La corrente è quanta elettricità passa davvero, e passa solo se il giro è chiuso, come l’acqua che scorre solo a rubinetto aperto. La potenza è quanto lavoro fa un apparecchio, in luce o in calore.',
          ],
          table: {
            head: ['Parola', 'Si misura in... e un esempio'],
            rows: [
              ['Tensione', 'Volt (V): 230 V tra fase e neutro.'],
              ['Corrente', 'Ampere (A): una stufa da 2000 W prende circa 8,7 A.'],
              ['Potenza', 'Watt (W): una lampada LED circa 10 W, una stufa 2000 W.'],
            ],
          },
          warn: 'Più potenza vuol dire più corrente, e la corrente scalda i cavi: per questo, più avanti, ogni cavo avrà la sua protezione.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE del quadro al morsetto A della lampada.',
              'Filo blu dal NEUTRO al morsetto B.',
            ],
            power: 'Levetta su: il giro è chiuso e la lampada si accende. I puntini gialli sono la corrente.',
          },
        },
        {
          type: 'previsione',
          question: 'Collego solo il filo di fase alla lampada e do corrente. Che cosa succede?',
          options: [
            { id: 'a', text: 'La lampada si accende.' },
            { id: 'b', text: 'La lampada resta spenta.' },
            { id: 'c', text: 'Il quadro scatta.' },
          ],
          correct: 'b',
          why: 'La lampada resta spenta. La fase arriva a un morsetto, ma senza il neutro manca il percorso di ritorno: il circuito è aperto e non passa corrente. Il quadro non scatta, perché non c’è nessun cortocircuito.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['L.A', 'L.B'], color: 'marrone', short: '1 Fase', title: 'Collega la fase alla lampada', text: 'Colore marrone. Tocca FASE sul quadro, poi un morsetto della lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.A', 'L.B'], color: 'blu', short: '2 Neutro', title: 'Collega il neutro all’altro morsetto', text: 'Colore blu. Tocca NEUTRO sul quadro, poi il morsetto libero della lampada.' },
      { kind: 'power', short: '3 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro.' },
      { kind: 'verify', short: '4 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Una lampada ha bisogno di due fili: fase e neutro.',
      'La fase va a un morsetto, il neutro all’altro. A e B sono equivalenti.',
      'Fase: marrone, nero o grigio. Neutro: blu.',
      'Se manca un filo il circuito è aperto e la luce resta spenta.',
      'Mai la fase direttamente sul neutro: è un cortocircuito.',
    ],
    fault: {
      say: 'L’impianto è già cablato ma la lampada non si accende. Dai corrente e osserva i fili.',
      wires: [['Q.F', 'L.A', 'marrone'], ['Q.F', 'L.B', 'marrone']],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Alla lampada non arriva la fase.' },
          { id: 'b', text: 'Alla lampada non arriva il neutro.' },
          { id: 'c', text: 'Il quadro è spento.' },
        ],
        correct: 'b',
        why: 'Entrambi i morsetti della lampada sono collegati alla fase. Senza il neutro la corrente non ha un percorso di ritorno.',
      },
      fixSay: 'Correggi il collegamento: il filo che arriva al morsetto B deve partire dal neutro. Poi premi Verifica.',
    },
  },
  'c02-presa': {
    support: 'guidato',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'La presa e i suoi tre fili',
          room: 'lit',
          paras: [
            'Alla presa si collega un apparecchio: una lampada da tavolo, un caricabatterie, un elettrodomestico.',
            'La presa ha tre morsetti. Due portano la corrente, uno serve per la sicurezza.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il quadro ha tre uscite',
          focus: ['Q'],
          paras: [
            'Oltre a FASE e NEUTRO, il quadro ha una terza uscita: la TERRA.',
            'Fase e neutro alimentano l’apparecchio. La terra non porta corrente di lavoro.',
          ],
        },
        {
          type: 'pezzi',
          title: 'La presa: L, N e PE',
          focus: ['P'],
          paras: [
            'L è il morsetto della fase (L sta per linea). N è il neutro. PE è la terra, il morsetto al centro.',
            'Ogni uscita del quadro va al morsetto con la stessa funzione: fase su L, neutro su N, terra su PE. Se fase e neutro sono scambiati si dice che la polarità è invertita.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'A cosa serve la terra',
          art: 'terra',
          paras: [
            'La terra è un filo di sicurezza, collegato alla carcassa metallica dell’apparecchio e al dispersore nel terreno.',
            'Se un guasto porta la tensione sulla carcassa, la corrente trova la strada della terra e il quadro scatta, invece di passare attraverso chi tocca l’apparecchio.',
            'Per questo il filo della terra ha un colore tutto suo: giallo-verde. Non si usa per nient’altro.',
          ],
          warn: 'Non scambiare mai la terra con un altro filo, e non usare il giallo-verde per fase o neutro.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE del quadro al morsetto L della presa.',
              'Filo blu dal NEUTRO del quadro al morsetto N.',
              'Filo giallo-verde dalla TERRA del quadro al morsetto PE.',
            ],
            power: 'Levetta su: la lampada da tavolo collegata alla presa si accende.',
          },
        },
        {
          type: 'previsione',
          question: 'Collego fase e neutro ma dimentico il filo di terra. Che cosa succede quando do corrente?',
          options: [
            { id: 'a', text: 'L’apparecchio non si accende: senza la terra il giro della corrente resta aperto.' },
            { id: 'b', text: 'Si accende, ma se un guasto porta tensione sulla carcassa niente ti protegge.' },
            { id: 'c', text: 'Il quadro scatta subito: si accorge che manca la terra e toglie la corrente.' },
          ],
          correct: 'b',
          why: 'L’apparecchio funziona, perché fase e neutro bastano a far passare la corrente. Ma senza la terra manca la protezione: se un guasto porta tensione sulla carcassa, questa resta in tensione senza che nulla intervenga, finché qualcuno la tocca: allora la corrente passa attraverso la persona. Per questo il livello non è superato senza la terra.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['P.L'], color: 'marrone', short: '1 Fase', title: 'Collega la fase al morsetto L', text: 'Colore marrone. Dalla FASE del quadro al morsetto L della presa.' },
      { kind: 'wire', from: 'Q.N', to: ['P.N'], color: 'blu', short: '2 Neutro', title: 'Collega il neutro al morsetto N', text: 'Colore blu. Dal NEUTRO del quadro al morsetto N della presa.' },
      { kind: 'wire', from: 'Q.PE', to: ['P.PE'], color: 'gv', short: '3 Terra', title: 'Collega la terra al morsetto PE', text: 'Colore giallo-verde. Dalla TERRA del quadro al morsetto PE, quello al centro.' },
      { kind: 'power', short: '4 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'La presa ha tre morsetti: L (fase), N (neutro), PE (terra).',
      'Ogni uscita del quadro va al morsetto con la stessa funzione.',
      'La terra è un filo di sicurezza: giallo-verde, solo per la terra.',
      'Fase e neutro bastano a far funzionare l’apparecchio, ma senza terra l’impianto non è sicuro.',
      'Fase su N e neutro su L: la polarità è invertita. L’apparecchio funziona, ma la presa è cablata male.',
    ],
    fault: {
      say: 'La presa è già cablata e l’apparecchio funziona, ma l’impianto ha un difetto. Controlla a quali morsetti arrivano fase e neutro.',
      wires: [['Q.F', 'P.N', 'marrone'], ['Q.N', 'P.L', 'blu'], ['Q.PE', 'P.PE', 'gv']],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Manca il filo di terra.' },
          { id: 'b', text: 'Fase e neutro sono scambiati sulla presa.' },
          { id: 'c', text: 'Il filo giallo-verde è sul morsetto sbagliato.' },
        ],
        correct: 'b',
        why: 'Il marrone, che porta la fase, arriva al morsetto N, e il blu, che porta il neutro, arriva a L. L’apparecchio si accende lo stesso, ma la presa è cablata male: la fase deve stare sempre sul morsetto L. Uno scambio così non si vede dall’esterno, e chi lavora sull’impianto si aspetta la fase su L.',
      },
      fixSay: 'Scambia i due fili: la fase va su L e il neutro su N. Poi premi Verifica.',
    },
  },
  'c03-interrotto': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Accendere e spegnere con un interruttore',
          room: 'lit',
          paras: [
            'Finora la lampada si accendeva dando corrente dal quadro. In casa si usa un interruttore a parete, vicino alla porta.',
            'L’interruttore è un punto in cui il filo si può aprire: da chiuso lascia passare la corrente, da aperto la ferma.',
          ],
        },
        {
          type: 'pezzi',
          title: 'L’interruttore: due morsetti',
          focus: ['S'],
          paras: [
            'L’interruttore ha due morsetti, 1 e 2. Si mette lungo il filo: la corrente entra da uno ed esce dall’altro, se l’interruttore è chiuso.',
            'Si comanda toccandolo. In questo livello puoi azionarlo anche sul banco.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Si interrompe la fase, non il neutro',
          art: 'tensione',
          paras: [
            'L’interruttore va sempre sul filo di fase, tra il quadro e la lampada. Il neutro va dal quadro alla lampada senza passare dall’interruttore.',
            'Il motivo è la sicurezza. Con l’interruttore sulla fase, a luce spenta il portalampada non è in tensione. Per lavorarci, comunque, si toglie tensione dal quadro.',
            'Con l’interruttore sul neutro la lampada si spegnerebbe lo stesso, ma la fase resterebbe collegata al portalampada: toccando il portalampada si prenderebbe la scossa.',
          ],
          warn: 'L’interruttore interrompe sempre la fase. Mai il neutro.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE del quadro al morsetto 1 dell’interruttore.',
              'Filo marrone dal morsetto 2 dell’interruttore al morsetto A della lampada.',
              'Filo blu dal NEUTRO direttamente alla lampada.',
            ],
            power: 'Levetta su: l’interruttore è aperto e la lampada è spenta.',
            controls: ['Interruttore chiuso: il giro è completo e la lampada si accende.'],
          },
        },
        {
          type: 'previsione',
          question: 'Se l’interruttore è aperto e il quadro è acceso, quale parte dell’impianto è in tensione?',
          options: [
            { id: 'a', text: 'Nessuna: con l’interruttore aperto tutto l’impianto è spento.' },
            { id: 'b', text: 'Il filo di fase dal quadro fino all’interruttore, e lì si ferma.' },
            { id: 'c', text: 'Tutto, anche la lampada: la fase passa comunque attraverso il filo.' },
          ],
          correct: 'b',
          why: 'La fase arriva fino all’interruttore e lì si ferma: quel tratto è in tensione. Dopo l’interruttore, fino alla lampada, il filo non è in tensione. Per questo, con l’interruttore sulla fase, a luce spenta il portalampada non è in tensione.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['S.a'], color: 'marrone', short: '1 Fase', title: 'Porta la fase all’interruttore', text: 'Dalla FASE del quadro al morsetto 1 dell’interruttore.' },
      { kind: 'wire', from: 'S.b', to: ['L.A'], color: 'marrone', short: '2 Lampada', title: 'Dall’interruttore alla lampada', text: 'Dal morsetto 2 dell’interruttore a un morsetto della lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '3 Neutro', title: 'Il neutro va diretto', text: 'Dal NEUTRO del quadro all’altro morsetto della lampada, senza passare dall’interruttore.' },
      { kind: 'power', short: '4 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi prova l’interruttore.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'L’interruttore si mette sul filo di fase, tra il quadro e la lampada.',
      'Il neutro va direttamente alla lampada, senza interruttore.',
      'A luce spenta il tratto dopo l’interruttore non è in tensione.',
      'Un interruttore sul neutro spegne la luce ma lascia la fase sul portalampada: è un errore pericoloso.',
    ],
    fault: {
      say: 'L’impianto è già cablato e l’interruttore spegne la lampada. Con l’interruttore aperto, guarda dove arriva la tensione.',
      wires: [['Q.F', 'L.A', 'marrone'], ['Q.N', 'S.a', 'blu'], ['S.b', 'L.B', 'blu']],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'L’interruttore è sul neutro invece che sulla fase.' },
          { id: 'b', text: 'La lampada non è collegata al quadro.' },
          { id: 'c', text: 'L’interruttore ha i morsetti scambiati.' },
        ],
        correct: 'a',
        why: 'La fase va direttamente alla lampada e l’interruttore interrompe il neutro. A luce spenta il portalampada resta in tensione: è un impianto pericoloso, anche se la lampada si spegne.',
      },
      fixSay: 'Sposta l’interruttore sulla fase: la fase passa dall’interruttore con fili marroni, il neutro blu va diretto alla lampada. Poi premi Verifica.',
    },
  },
  'c04-parallelo': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Due lampade, un solo interruttore',
          room: 'lit',
          paras: [
            'In una stanza spesso ci sono più lampade che si accendono e si spengono insieme, con lo stesso interruttore.',
            'In questo livello colleghi due lampade a un solo interruttore. Alla fine le vedrai accendersi tutte e due nella stanza.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Due portalampada',
          focus: ['L1', 'L2'],
          paras: [
            'Ogni lampada ha il suo portalampada, con i suoi due morsetti A e B.',
            'Ogni lampada ha bisogno dei suoi due fili: uno di fase e uno di neutro.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il parallelo',
          art: 'parallelo',
          paras: [
            'Le lampade sono collegate in parallelo: tutte e due ricevono la fase da un lato e il neutro dall’altro, come se ognuna fosse sola.',
            'La fase passa dall’interruttore e poi si divide: un filo per ogni lampada. Il neutro arriva dal quadro a tutte e due, senza passare dall’interruttore.',
            'Per questo se una lampada si brucia l’altra resta accesa: il suo percorso non dipende da quello dell’altra.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'L’errore da evitare: la serie',
          art: 'serie',
          paras: [
            'Se si collega la seconda lampada dopo la prima, la corrente le attraversa una dopo l’altra. Si dice che sono in serie.',
            'In serie ogni lampada riceve solo una parte della tensione: la luce non è quella giusta e se una si brucia si spegne anche l’altra. Nel gioco le lampade in serie non si accendono.',
          ],
          warn: 'Ogni lampada deve avere un filo di fase e un filo di neutro. Mai una lampada collegata all’altra.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE del quadro al morsetto 1 dell’interruttore.',
              'Filo marrone dal morsetto 2 dell’interruttore al morsetto A della lampada 1.',
              'Un secondo filo marrone dallo stesso morsetto 2 al morsetto A della lampada 2.',
              'Filo blu dal NEUTRO al morsetto B della lampada 1.',
              'Un secondo filo blu dal NEUTRO al morsetto B della lampada 2.',
            ],
            power: 'Levetta su: l’interruttore è aperto e le lampade sono spente.',
            controls: ['Interruttore chiuso: tutte e due le lampade si accendono.'],
          },
        },
        {
          type: 'previsione',
          question: 'Le due lampade sono in parallelo e una si brucia. Che cosa fa l’altra?',
          options: [
            { id: 'a', text: 'Si spegne anche l’altra: la corrente passava prima dalla lampada bruciata.' },
            { id: 'b', text: 'Resta accesa: ha il suo giro, che non passa dalla lampada bruciata.' },
            { id: 'c', text: 'Il quadro scatta: la lampada bruciata fa un cortocircuito sulla linea.' },
          ],
          correct: 'b',
          why: 'Resta accesa. In parallelo ogni lampada ha il suo percorso tra fase e neutro: se uno si interrompe, l’altro non cambia. Una lampada bruciata è un percorso aperto, non un cortocircuito, quindi il quadro non scatta.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['S.a'], color: 'marrone', short: '1 Fase', title: 'Porta la fase all’interruttore', text: 'Dalla FASE del quadro al morsetto 1 dell’interruttore.' },
      { kind: 'wire', from: 'S.b', to: ['L1.A', 'L1.B'], color: 'marrone', short: '2 Lampada 1', title: 'Dall’interruttore alla prima lampada', text: 'Dal morsetto 2 dell’interruttore a un morsetto della lampada 1.' },
      { kind: 'wire', from: 'S.b', to: ['L2.A', 'L2.B'], color: 'marrone', short: '3 Lampada 2', title: 'Dall’interruttore alla seconda lampada', text: 'Dallo stesso morsetto 2 a un morsetto della lampada 2. Lo stesso morsetto, due fili.' },
      { kind: 'wire', from: 'Q.N', to: ['L1.A', 'L1.B'], color: 'blu', short: '4 Neutro 1', title: 'Il neutro alla prima lampada', text: 'Dal NEUTRO al morsetto libero della lampada 1.' },
      { kind: 'wire', from: 'Q.N', to: ['L2.A', 'L2.B'], color: 'blu', short: '5 Neutro 2', title: 'Il neutro alla seconda lampada', text: 'Dal NEUTRO al morsetto libero della lampada 2.' },
      { kind: 'power', short: '6 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi prova l’interruttore.' },
      { kind: 'verify', short: '7 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Più lampade in parallelo: ognuna ha un filo di fase e uno di neutro.',
      'L’interruttore sta sulla fase, prima che si divida verso le lampade.',
      'Il neutro va a ogni lampada senza passare dall’interruttore.',
      'Se una lampada si brucia le altre restano accese.',
      'In serie, invece, la corrente le attraversa una dopo l’altra: è un errore.',
    ],
    fault: {
      say: 'L’impianto è già cablato, ma le lampade non si accendono. Dai corrente e prova l’interruttore.',
      wires: [['Q.F', 'S.a', 'marrone'], ['S.b', 'L1.A', 'marrone'], ['L1.B', 'L2.A', 'marrone'], ['L2.B', 'Q.N', 'blu']],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Le lampade sono collegate in serie, una dopo l’altra.' },
          { id: 'b', text: 'Manca il neutro a tutte e due le lampade.' },
          { id: 'c', text: 'L’interruttore è sul neutro.' },
        ],
        correct: 'a',
        why: 'Il filo va dalla prima lampada alla seconda: le lampade sono in serie e nessuna delle due è collegata direttamente tra fase e neutro: la corrente deve attraversarle una dopo l’altra. Ogni lampada deve avere il suo filo di fase e il suo filo di neutro.',
      },
      fixSay: 'Collega la fase a entrambe le lampade dal morsetto 2 dell’interruttore e il neutro a entrambe, ognuna sul suo morsetto libero. Poi premi Verifica.',
    },
  },
  'c05-deviato': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Accendere e spegnere da due punti',
          room: 'lit',
          paras: [
            'In un corridoio lungo si vuole accendere la luce da una porta e spegnerla dall’altra. Un solo interruttore non basta.',
            'Servono due deviatori, uno per punto. Con ciascuno si cambia lo stato della luce, qualunque sia la posizione dell’altro.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il deviatore: tre morsetti',
          focus: ['D1'],
          paras: [
            'Il deviatore ha tre morsetti: C (comune), 1 e 2.',
            'Premendolo, il comune C si collega a 1 oppure a 2. È come un interruttore che invece di aprire il filo lo sposta da una strada all’altra.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Due deviatori in coppia',
          focus: ['D1', 'D2'],
          paras: [
            'I due deviatori si collegano con due fili: 1 con 1 e 2 con 2. Sono i fili di collegamento tra i deviatori.',
            'Il comune del primo riceve la fase. Il comune del secondo va alla lampada.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché la luce cambia da entrambi i punti',
          paras: [
            'Ogni deviatore sceglie una delle due strade. La luce è accesa quando i due deviatori scelgono la stessa strada: il comune del deviatore A su 1 e quello del deviatore B su 1, oppure entrambi su 2.',
            'Se i deviatori scelgono strade diverse, il giro è interrotto e la luce è spenta. Premere uno qualsiasi dei due cambia la scelta, quindi cambia lo stato della luce.',
          ],
          table: { head: ['Deviatore A', 'Deviatore B', 'Luce'], rows: [['1', '1', 'accesa'], ['2', '2', 'accesa'], ['1', '2', 'spenta'], ['2', '1', 'spenta']] },
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE al comune C del deviatore A.',
              'Filo nero dal morsetto 1 del deviatore A al morsetto 1 del deviatore B.',
              'Filo grigio dal morsetto 2 del deviatore A al morsetto 2 del deviatore B.',
              'Filo marrone dal comune C del deviatore B alla lampada.',
              'Filo blu dal NEUTRO direttamente alla lampada.',
            ],
            power: 'Levetta su: tutti e due i deviatori sono sulla strada 1 e la lampada è accesa.',
            controls: ['Deviatore A premuto: A passa sulla strada 2, B resta sulla 1. Strade diverse, la lampada si spegne.', 'Deviatore B premuto: anche B passa sulla strada 2. Stessa strada, la lampada si riaccende.'],
          },
        },
        {
          type: 'previsione',
          question: 'La luce è accesa. Premo il deviatore A, poi il deviatore B. Come è la luce alla fine?',
          options: [
            { id: 'a', text: 'Accesa: ogni deviatore cambia lo stato, e due cambi la riportano com’era.' },
            { id: 'b', text: 'Spenta: il deviatore B spegne quello che aveva acceso il deviatore A.' },
            { id: 'c', text: 'Dipende da quale premo per primo: comanda l’ultimo deviatore premuto.' },
          ],
          correct: 'a',
          why: 'Ogni pressione cambia lo stato della luce. Due pressioni la riportano com’era: dopo A la luce è spenta, dopo B è di nuovo accesa. L’ordine non conta.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['D1.C'], color: 'marrone', short: '1 Fase', title: 'La fase entra nel primo deviatore', text: 'Dalla FASE del quadro al comune C del deviatore A.' },
      { kind: 'wire', from: 'D1.1', to: ['D2.1'], color: 'nero', short: '2 Collegamento 1', title: 'Primo filo di collegamento', text: 'Dal morsetto 1 del deviatore A al morsetto 1 del deviatore B.' },
      { kind: 'wire', from: 'D1.2', to: ['D2.2'], color: 'grigio', short: '3 Collegamento 2', title: 'Secondo filo di collegamento', text: 'Dal morsetto 2 del deviatore A al morsetto 2 del deviatore B.' },
      { kind: 'wire', from: 'D2.C', to: ['L.A'], color: 'marrone', short: '4 Lampada', title: 'Dal secondo deviatore alla lampada', text: 'Dal comune C del deviatore B a un morsetto della lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '5 Neutro', title: 'Il neutro va diretto', text: 'Dal NEUTRO del quadro all’altro morsetto della lampada.' },
      { kind: 'power', short: '6 Levetta', title: 'Dai corrente', text: 'Tocca la levetta, poi prova i due deviatori.' },
      { kind: 'verify', short: '7 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il deviatore ha tre morsetti: C (comune), 1 e 2.',
      'Due deviatori si collegano 1 con 1 e 2 con 2.',
      'La fase entra nel comune del primo; il comune del secondo va alla lampada.',
      'Il neutro va direttamente alla lampada.',
      'La luce è accesa quando i due deviatori scelgono la stessa strada.',
    ],
    fault: {
      say: 'L’impianto è già cablato, ma la luce si accende solo in una posizione dei deviatori. Prova a premerli entrambi.',
      wires: [['Q.F', 'D1.C', 'marrone'], ['D1.1', 'D2.1', 'nero'], ['D2.C', 'L.A', 'marrone'], ['Q.N', 'L.B', 'blu']],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Manca uno dei due fili di collegamento tra i deviatori.' },
          { id: 'b', text: 'Manca il neutro alla lampada.' },
          { id: 'c', text: 'La fase non arriva al primo deviatore.' },
        ],
        correct: 'a',
        why: 'Tra i deviatori c’è un solo filo, 1 con 1. La corrente può passare solo quando i due deviatori scelgono la strada 1. Quando scelgono la strada 2 il giro è interrotto: la luce non si può accendere da tutte le posizioni.',
      },
      fixSay: 'Aggiungi il filo mancante tra il morsetto 2 del deviatore A e il morsetto 2 del deviatore B. Poi premi Verifica.',
    },
  },
  'c06-invertito': {
    support: 'obiettivo',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Accendere e spegnere da tre punti',
          room: 'lit',
          paras: [
            'In una stanza con tre porte la luce si deve comandare da tutte e tre. Due deviatori non bastano: serve un terzo punto di comando.',
            'Il terzo punto si realizza con un invertitore, messo in mezzo ai due fili di collegamento tra i deviatori.',
          ],
        },
        {
          type: 'pezzi',
          title: 'L’invertitore: quattro morsetti',
          focus: ['I'],
          paras: [
            'L’invertitore ha quattro morsetti: 1 e 2 in alto, 3 e 4 in basso.',
            'Premendolo, collega 1 con 3 e 2 con 4, oppure incrocia i collegamenti: 1 con 4 e 2 con 3. Cambia posizione ai due fili, per questo si chiama invertitore.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché funziona',
          paras: [
            'Tra i due deviatori ci sono due fili di collegamento. L’invertitore li interrompe e li ricollega, dritti o incrociati.',
            'Incrociare i due fili ha lo stesso effetto che premere uno dei deviatori: la luce cambia stato. Quindi premendo l’invertitore la luce cambia, come con i deviatori.',
            'Si possono mettere più invertitori in serie: ogni invertitore aggiunge un punto di comando.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE al comune C del deviatore A.',
              'Filo nero dal morsetto 1 del deviatore A al morsetto 1 dell’invertitore.',
              'Filo grigio dal morsetto 2 del deviatore A al morsetto 2 dell’invertitore.',
              'Filo nero dal morsetto 3 dell’invertitore al morsetto 1 del deviatore B.',
              'Filo grigio dal morsetto 4 dell’invertitore al morsetto 2 del deviatore B.',
              'Filo marrone dal comune C del deviatore B alla lampada.',
              'Filo blu dal NEUTRO direttamente alla lampada.',
            ],
            power: 'Levetta su: la luce è accesa.',
            controls: ['Deviatore A premuto: la luce cambia.', 'Invertitore premuto: la luce cambia.', 'Deviatore B premuto: la luce cambia.'],
          },
        },
        {
          type: 'previsione',
          question: 'Con la luce accesa premo l’invertitore. Che cosa succede?',
          options: [
            { id: 'a', text: 'La luce resta accesa.' },
            { id: 'b', text: 'La luce si spegne.' },
            { id: 'c', text: 'Il quadro scatta.' },
          ],
          correct: 'b',
          why: 'L’invertitore incrocia i due fili di collegamento e questo cambia lo stato della luce, come premere un deviatore. Si spegne.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['D1.C'], color: 'marrone', short: '1 Fase', title: 'La fase entra nel deviatore A', text: 'Dalla FASE al comune C del deviatore A.' },
      { kind: 'verify', short: '2 Verifica', title: 'Collega i tre punti di comando', text: 'Collega il deviatore A ai morsetti 1 e 2 dell’invertitore, poi i morsetti 3 e 4 al deviatore B. Il comune C del deviatore B va alla lampada, il neutro va diretto alla lampada. Dai corrente, prova i tre comandi e premi Verifica.' },
    ],
    summary: [
      'L’invertitore ha quattro morsetti: 1 e 2 in alto, 3 e 4 in basso.',
      'Si mette in mezzo ai due fili di collegamento tra due deviatori.',
      'Premendolo, collega dritto o incrocia i due fili: la luce cambia stato.',
      'Con più invertitori in serie si aggiungono altri punti di comando.',
    ],
    fault: {
      say: 'L’impianto è già cablato, ma la luce non si accende da tutte le posizioni. Prova a premere i tre comandi.',
      wires: [['Q.F', 'D1.C', 'marrone'], ['D1.1', 'I.1', 'nero'], ['D1.2', 'I.3', 'grigio'], ['I.2', 'D2.1', 'nero'], ['I.4', 'D2.2', 'grigio'], ['D2.C', 'L.A', 'marrone'], ['Q.N', 'L.B', 'blu']],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'I fili del deviatore A arrivano a 1 e 3 dell’invertitore invece che a 1 e 2.' },
          { id: 'b', text: 'Manca il neutro alla lampada.' },
          { id: 'c', text: 'La fase non arriva al deviatore A.' },
        ],
        correct: 'a',
        why: 'Con l’invertitore a riposo il contatto 1-3 unisce i due fili del deviatore A: la fase non arriva mai al deviatore B, se non in certe posizioni.',
      },
      fixSay: 'Sposta i fili: il deviatore A va ai morsetti 1 e 2 dell’invertitore, il deviatore B ai morsetti 3 e 4. Poi premi Verifica.',
    },
  },
};
