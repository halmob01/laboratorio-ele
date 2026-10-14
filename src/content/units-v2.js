// Unita' didattiche dei Moduli 2 e 3. Stessa forma di units.js.

export const UNITS_V2 = {
  'c17-multimetro': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Misurare invece di indovinare',
          paras: [
            'Un impianto che non funziona si può ispezionare a occhio, ma spesso il guasto non si vede: un filo staccato dentro il morsetto, un contatto che non chiude. L’elettricista misura.',
            'Lo strumento è il multimetro. Ha due puntali: il rosso e il nero. Li appoggi su due punti dell’impianto e il display ti dice cosa c’è tra quei due punti.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Due misure: tensione e continuità',
          paras: [
            'La tensione, in volt, si misura a impianto in tensione. Tra la fase e il neutro leggi 230 V; tra il neutro e la terra, circa 0 V.',
            'La continuità si misura a impianto spento. Il multimetro manda una piccola corrente tra i due puntali: se il percorso è chiuso (un filo, un interruttore chiuso) legge continuità; se è interrotto legge circuito aperto; se attraversa un carico legge la sua resistenza.',
          ],
          warn: 'Mai misurare la continuità con l’impianto in tensione: la lettura non vale e lo strumento si può rovinare.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE del quadro al morsetto 1 dell’interruttore.',
              'Filo marrone dal morsetto 2 dell’interruttore alla lampada.',
              'Filo blu dal NEUTRO alla lampada.',
            ],
            power: 'Levetta su: l’interruttore è aperto, la lampada è spenta.',
            controls: ['Interruttore chiuso: la lampada si accende.'],
          },
        },
        {
          type: 'previsione',
          question: 'L’interruttore è aperto e la lampada è spenta. Metto i puntali sui due morsetti dell’interruttore. Quanti volt leggo?',
          options: [
            { id: 'a', text: '0 V: la lampada è spenta, quindi non c’è tensione.' },
            { id: 'b', text: '230 V: da un lato arriva la fase, dall’altro, attraverso la lampada, il neutro.' },
            { id: 'c', text: '115 V: metà della tensione.' },
          ],
          correct: 'b',
          why: 'Una lampada spenta non è senza tensione. Il morsetto a valle dell’interruttore aperto prende il neutro attraverso la lampada, quindi tra i due morsetti ci sono 230 V. Per questo si può prendere la scossa anche con la luce spenta.',
        },
        {
          type: 'previsione',
          question: 'Devo cambiare la lampada. Che cosa faccio prima di toccare i fili?',
          options: [
            { id: 'a', text: 'Spengo l’interruttore: la lampada è spenta, sono al sicuro.' },
            { id: 'b', text: 'Tolgo la tensione dal quadro e controllo con il multimetro che non ce ne sia.' },
            { id: 'c', text: 'Niente: con una mano sola non si rischia.' },
          ],
          correct: 'b',
          why: 'L’interruttore spegne la lampada ma può lasciare la fase sul portalampada. Si apre il quadro e si misura: solo uno 0 V letto con lo strumento dice che si può lavorare.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['S.a'], color: 'marrone', short: '1 Fase', title: 'La fase all’interruttore', text: 'Dalla FASE del quadro al morsetto 1 dell’interruttore.' },
      { kind: 'wire', from: 'S.b', to: ['L.A'], color: 'marrone', short: '2 Lampada', title: 'Dall’interruttore alla lampada', text: 'Dal morsetto 2 dell’interruttore a un morsetto della lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '3 Neutro', title: 'Il neutro alla lampada', text: 'Dal NEUTRO al morsetto libero della lampada.' },
      { kind: 'power', short: '4 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro.' },
      { kind: 'measure', between: ['S.a', 'Q.N'], mode: 'V', value: 230, live: true, short: '5 Fase e neutro', title: 'Misura la tensione', text: 'Tocca Multimetro, poi il morsetto 1 dell’interruttore (rosso) e il NEUTRO del quadro (nero): leggi 230 V.' },
      { kind: 'measure', between: ['S.a', 'S.b'], mode: 'V', value: 230, live: true, short: '6 Interruttore aperto', title: 'Ai capi dell’interruttore aperto', text: 'Con l’interruttore aperto, metti i puntali sul morsetto 1 e sul morsetto 2: leggi 230 V anche se la lampada è spenta.' },
      { kind: 'measure', between: ['S.a', 'S.b'], mode: 'R', reading: 'cont', live: false, short: '7 Quadro spento', title: 'Continuità a quadro spento', text: 'Tocca la levetta del quadro per toglierla. Chiudi l’interruttore, scegli la misura Continuità e metti i puntali sui morsetti 1 e 2.' },
      { kind: 'verify', short: '8 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il multimetro ha due puntali: la tensione si misura a impianto in tensione, la continuità a impianto spento.',
      'Una lampada spenta può avere tensione ai suoi morsetti: un interruttore aperto lascia la fase dal lato del quadro e il neutro attraverso la lampada.',
      'Prima di lavorare su un impianto si toglie la tensione e si verifica con il multimetro che non ci sia.',
      'La continuità con l’impianto in tensione non è una misura valida.',
    ],
    fault: {
      say: 'Il punto luce è già cablato, ma la lampada non si accende. Dai corrente, chiudi l’interruttore e usa il multimetro per capire dove si interrompe il circuito.',
      wires: [['Q.F', 'S.a', 'marrone'], ['S.b', 'L.A', 'marrone']],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Manca il filo del neutro alla lampada.' },
          { id: 'b', text: 'Il filo di fase non arriva all’interruttore.' },
          { id: 'c', text: 'La lampada è bruciata.' },
        ],
        correct: 'a',
        why: 'Con l’interruttore chiuso, tra il morsetto B della lampada e il neutro ci sono 230 V: la fase arriva fino lì attraverso la lampada, ma il ritorno manca. Senza il neutro il circuito è aperto e la corrente non circola.',
      },
      fixSay: 'Collega il neutro (blu) alla lampada, poi premi Verifica.',
    },
  },

  'c18-rele': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Comando e carico separati',
          paras: [
            'Un relè è un interruttore comandato da un altro circuito. Una piccola bobina, quando riceve tensione, diventa un elettromagnete e sposta un contatto.',
            'Il circuito che alimenta la bobina è il comando. Il circuito che passa dal contatto è il carico. I due circuiti non si toccano: possono anche avere tensioni diverse.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il relè con contatto di scambio',
          focus: ['K'],
          paras: [
            'La bobina ha due morsetti, A1 e A2. Il contatto ne ha tre: 11 è il comune, 12 è chiuso a bobina spenta (NC), 14 è chiuso a bobina accesa (NA).',
            'Il comune è sempre collegato a uno dei due: il contatto non resta mai a metà. Con una sola lampada ne basta un morsetto; con due si può dare un segnale per ogni stato.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE all’interruttore di comando.',
              'Dall’interruttore alla bobina del relè (A1).',
              'Filo blu dalla bobina (A2) al NEUTRO.',
              'La fase al morsetto comune 11 del contatto.',
              'Dal morsetto 12 alla lampada verde.',
              'Dal morsetto 14 alla lampada rossa.',
              'Filo blu dal NEUTRO alla lampada verde.',
              'Filo blu dal NEUTRO alla lampada rossa.',
            ],
            power: 'Levetta su: la bobina non è alimentata, si accende la lampada verde.',
            controls: ['Comando chiuso: la bobina si eccita, il contatto passa dal 12 al 14 e si accende la lampada rossa.'],
          },
        },
        {
          type: 'previsione',
          question: 'Il comando è aperto. Quale lampada è accesa?',
          options: [
            { id: 'a', text: 'La rossa, collegata al morsetto 14.' },
            { id: 'b', text: 'La verde, collegata al morsetto 12.' },
            { id: 'c', text: 'Tutte e due.' },
          ],
          correct: 'b',
          why: 'A bobina spenta il contatto comune 11 è collegato al 12, chiuso a riposo. La lampada verde è alimentata. La rossa, sul 14, si accende solo quando la bobina si eccita.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['S.a'], color: 'marrone', short: '1 Comando', title: 'La fase al comando', text: 'Dalla FASE del quadro al morsetto 1 dell’interruttore.' },
      { kind: 'wire', from: 'S.b', to: ['K.A1'], color: 'marrone', short: '2 Bobina', title: 'Dal comando alla bobina', text: 'Dal morsetto 2 dell’interruttore al morsetto A1 del relè.' },
      { kind: 'wire', from: 'K.A2', to: ['Q.N'], color: 'blu', short: '3 Neutro bobina', title: 'Il neutro alla bobina', text: 'Dal morsetto A2 del relè al NEUTRO.' },
      { kind: 'wire', from: 'Q.F', to: ['K.11'], color: 'marrone', short: '4 Comune', title: 'La fase al contatto', text: 'Dalla FASE al morsetto comune 11 del relè.' },
      { kind: 'wire', from: 'K.12', to: ['LV.A'], color: 'marrone', short: '5 Verde', title: 'Il morsetto 12 alla lampada verde', text: 'Dal morsetto 12 a un morsetto della lampada verde.' },
      { kind: 'wire', from: 'K.14', to: ['LR.A'], color: 'marrone', short: '6 Rossa', title: 'Il morsetto 14 alla lampada rossa', text: 'Dal morsetto 14 a un morsetto della lampada rossa.' },
      { kind: 'wire', from: 'Q.N', to: ['LV.B'], color: 'blu', short: '7 Neutro verde', title: 'Il neutro alla lampada verde', text: 'Dal NEUTRO al morsetto libero della lampada verde.' },
      { kind: 'wire', from: 'Q.N', to: ['LR.B'], color: 'blu', short: '8 Neutro rossa', title: 'Il neutro alla lampada rossa', text: 'Dal NEUTRO al morsetto libero della lampada rossa.' },
      { kind: 'power', short: '9 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi chiudi e apri il comando.' },
      { kind: 'verify', short: '10 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il relè ha un circuito di comando (la bobina) e un circuito di carico (il contatto), separati.',
      'Il contatto di scambio ha un comune (11), un morsetto chiuso a riposo (12) e uno chiuso a bobina eccitata (14).',
      'Con il comando aperto è collegato il 12, con il comando chiuso il 14: una sola bobina può dare due segnali opposti.',
      'La bobina ha il suo ritorno al neutro, e il comando sta sulla fase.',
    ],
    fault: {
      say: 'L’impianto è già cablato. Dai corrente: a comando aperto le due lampade sono accese insieme. Misura con il multimetro e trova l’errore.',
      wires: [
        ['Q.F', 'S.a', 'marrone'], ['S.b', 'K.A1', 'marrone'], ['K.A2', 'Q.N', 'blu'],
        ['Q.F', 'K.11', 'marrone'], ['K.12', 'LV.A', 'marrone'], ['K.12', 'LR.A', 'marrone'],
        ['LV.B', 'Q.N', 'blu'], ['LR.B', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'La lampada rossa è collegata al morsetto 12 invece del 14.' },
          { id: 'b', text: 'La bobina non riceve il neutro.' },
          { id: 'c', text: 'Il relè è guasto.' },
        ],
        correct: 'a',
        why: 'Le due lampade sono sullo stesso morsetto del contatto, il 12, quindi si accendono e si spengono insieme. Il morsetto 14 è libero: la lampada rossa va lì, perché si accenda solo a bobina eccitata.',
      },
      fixSay: 'Sposta il filo della lampada rossa dal morsetto 12 al morsetto 14, poi premi Verifica.',
    },
  },

  'c19-magnetotermico': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Quanta corrente passa nel cavo',
          paras: [
            'La corrente di un apparecchio si ricava dalla potenza: corrente = potenza diviso tensione. Una stufa da 2000 W a 230 V assorbe circa 8,7 A. Due stufe sulla stessa linea ne assorbono circa 17,4.',
            'Ogni cavo regge una corrente massima, la portata, che dipende dalla sezione e da come è posato. Un cavo da 1,5 mm² in tubo incassato regge circa 14,5 A (valore del gioco). Se passa di più, si scalda.',
          ],
        },
        {
          type: 'pezzi',
          title: 'La portata del magnetotermico',
          focus: ['QM'],
          paras: [
            'Sul magnetotermico c’è un numero: la portata In, in ampere. Sotto 1,13 volte In non scatta mai. Sopra 1,45 volte In scatta (nella realtà in meno di un’ora, nel gioco in pochi secondi). In mezzo, la norma non dice che cosa deve fare.',
            'Un cortocircuito, invece, lo fa scattare subito.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'La regola dei tre numeri',
          paras: [
            'Corrente di impiego, portata dell’interruttore, portata del cavo: Ib ≤ In ≤ Iz. L’interruttore deve reggere l’uso normale e deve scattare prima che il cavo si scaldi.',
            'Un interruttore troppo piccolo scatta senza motivo. Uno troppo grande non protegge il cavo: la corrente supera la portata del cavo ma non quella dell’interruttore, e nessuno se ne accorge finché il cavo non scalda.',
          ],
          warn: 'Un interruttore da 16 A su un cavo da 1,5 mm² è uno degli errori più pericolosi: non scatta e il cavo si scalda.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'La fase del quadro entra nel magnetotermico: morsetto 1.',
              'Dall’uscita 2 del magnetotermico all’interruttore della stufa 1.',
              'Dalla stessa uscita all’interruttore della stufa 2.',
              'Dall’interruttore della stufa 1 alla stufa 1.',
              'Dall’interruttore della stufa 2 alla stufa 2.',
              'Il neutro del quadro entra nel magnetotermico.',
              'Il neutro esce e va alla stufa 1.',
              'Lo stesso neutro va alla stufa 2.',
            ],
            power: 'Il quadro è alimentato, le stufe sono spente.',
            controls: [],
          },
        },
        {
          type: 'previsione',
          question: 'Una linea in cavo da 1,5 mm² (portata 14,5 A) ha un magnetotermico da 16 A. Si accendono due stufe: 17,4 A. Che cosa succede?',
          options: [
            { id: 'a', text: 'Il magnetotermico scatta subito: 17,4 A sono più di 16 A.' },
            { id: 'b', text: 'Il magnetotermico non scatta e il cavo si scalda oltre la sua portata.' },
            { id: 'c', text: 'Il cavo si adatta alla corrente.' },
          ],
          correct: 'b',
          why: '17,4 A sono solo 1,09 volte i 16 A: sotto 1,13 In il magnetotermico non scatta mai. Ma il cavo regge 14,5 A: la corrente è oltre la sua portata e nessuno la interrompe. Con un magnetotermico da 10 A la stessa corrente è 1,74 volte la portata e scatta.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['QM.1'], color: 'marrone', short: '1 Fase', title: 'La fase al magnetotermico', text: 'Dalla FASE del quadro al morsetto 1 del magnetotermico.' },
      { kind: 'wire', from: 'QM.2', to: ['S1.a'], color: 'marrone', short: '2 Stufa 1', title: 'All’interruttore della stufa 1', text: 'Dal morsetto 2 del magnetotermico al morsetto 1 dell’interruttore della stufa 1.' },
      { kind: 'wire', from: 'QM.2', to: ['S2.a'], color: 'marrone', short: '3 Stufa 2', title: 'All’interruttore della stufa 2', text: 'Dallo stesso morsetto 2 al morsetto 1 dell’interruttore della stufa 2.' },
      { kind: 'wire', from: 'S1.b', to: ['H1.A'], color: 'marrone', short: '4 Stufa 1', title: 'Dall’interruttore alla stufa 1', text: 'Dal morsetto 2 dell’interruttore della stufa 1 alla stufa 1.' },
      { kind: 'wire', from: 'S2.b', to: ['H2.A'], color: 'marrone', short: '5 Stufa 2', title: 'Dall’interruttore alla stufa 2', text: 'Dal morsetto 2 dell’interruttore della stufa 2 alla stufa 2.' },
      { kind: 'wire', from: 'Q.N', to: ['QM.N1'], color: 'blu', short: '6 Neutro', title: 'Il neutro al magnetotermico', text: 'Dal NEUTRO del quadro al morsetto N in alto del magnetotermico.' },
      { kind: 'wire', from: 'QM.N2', to: ['H1.B'], color: 'blu', short: '7 Neutro 1', title: 'Il neutro alla stufa 1', text: 'Dal morsetto N in basso del magnetotermico alla stufa 1.' },
      { kind: 'wire', from: 'QM.N2', to: ['H2.B'], color: 'blu', short: '8 Neutro 2', title: 'Il neutro alla stufa 2', text: 'Dallo stesso morsetto N alla stufa 2.' },
      { kind: 'rate', id: 'QM', value: 10, short: '9 Portata', title: 'Scegli la portata', text: 'Tocca il numero sul magnetotermico fino a 10 A: il cavo regge 14,5 A e una stufa assorbe 8,7 A.' },
      { kind: 'control', id: 'S1', short: '10 Una stufa', title: 'Prova una stufa', text: 'Chiudi l’interruttore della stufa 1: resta accesa e il magnetotermico non scatta.' },
      { kind: 'control', id: 'S2', short: '11 Due stufe', title: 'Prova due stufe', text: 'Chiudi anche l’interruttore della stufa 2 e aspetta qualche secondo: il magnetotermico scatta.' },
      { kind: 'verify', short: '12 Verifica', title: 'Controlla l’impianto', text: 'Riarma il magnetotermico e premi Verifica.' },
    ],
    summary: [
      'La corrente si ricava dalla potenza: corrente = potenza diviso tensione. Una stufa da 2000 W assorbe circa 8,7 A.',
      'Il cavo ha una portata: oltre quella si scalda. L’interruttore deve scattare prima.',
      'Il magnetotermico non scatta sotto 1,13 volte la sua portata e scatta sopra 1,45 volte. Il cortocircuito lo fa scattare subito.',
      'Regola dei tre numeri: corrente di impiego ≤ portata dell’interruttore ≤ portata del cavo.',
    ],
    fault: {
      say: 'La linea è già cablata e le due stufe funzionano. Accendile tutte e due, aspetta qualche secondo e guarda il cavo.',
      wires: [
        ['Q.F', 'QM.1', 'marrone'], ['QM.2', 'S1.a', 'marrone'], ['QM.2', 'S2.a', 'marrone'],
        ['S1.b', 'H1.A', 'marrone'], ['S2.b', 'H2.A', 'marrone'],
        ['Q.N', 'QM.N1', 'blu'], ['QM.N2', 'H1.B', 'blu'], ['QM.N2', 'H2.B', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Il magnetotermico è troppo grande per il cavo: non scatta e il cavo si scalda.' },
          { id: 'b', text: 'Il magnetotermico è troppo piccolo: scatta senza motivo.' },
          { id: 'c', text: 'Le stufe sono collegate in serie.' },
        ],
        correct: 'a',
        why: 'Con due stufe passano 17,4 A: il cavo da 1,5 mm² regge 14,5 A. Il magnetotermico da 16 A non scatta, perché 17,4 A sono sotto 1,13 volte i 16 A, e il cavo si scalda. La portata dell’interruttore deve essere minore o uguale a quella del cavo: 10 A.',
      },
      fixSay: 'Porta la portata del magnetotermico a 10 A, poi premi Verifica.',
    },
  },

  'c20-differenziale': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'La corrente che non torna',
          paras: [
            'In un apparecchio la corrente esce dalla fase e rientra dal neutro: le due correnti sono uguali. Se l’isolante cede, una parte della corrente va a terra, magari passando per una persona che tocca l’involucro. Fase e neutro non sono più uguali.',
            'Il differenziale confronta continuamente la corrente che esce con quella che rientra. Se la differenza supera la sua soglia, scatta.',
          ],
        },
        {
          type: 'pezzi',
          title: 'La soglia di 30 mA',
          focus: ['D'],
          paras: [
            'Nelle case il differenziale ha una soglia di 30 mA. Scatta con una dispersione di 30 mA o più, e per norma non scatta sotto i 15 mA.',
            'Il magnetotermico non se ne accorge: 30 mA sono pochissimi rispetto ai suoi 10 o 16 ampere. Per questo in casa servono tutti e due.',
          ],
          warn: 'Una corrente di 30 mA attraverso il corpo è già pericolosa. Il differenziale serve proprio a interromperla in una frazione di secondo.',
        },
        {
          type: 'spiegazione',
          title: 'Il neutro deve passare dal differenziale',
          paras: [
            'Il differenziale confronta la corrente di fase con quella di neutro, ma solo se passano tutte e due da lui. Se il neutro di un apparecchio viene preso prima del differenziale, la corrente esce dal differenziale e rientra altrove: lui la vede come una dispersione e scatta appena si accende l’apparecchio.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'La fase del quadro entra nel differenziale: morsetto 1.',
              'Il neutro del quadro entra nel differenziale: morsetto N in alto.',
              'Dall’uscita 2 del differenziale all’interruttore dello scaldabagno.',
              'Dall’interruttore allo scaldabagno.',
              'Il neutro esce dal differenziale e va allo scaldabagno.',
            ],
            power: 'Il quadro è alimentato, lo scaldabagno è spento.',
            controls: [],
          },
        },
        {
          type: 'previsione',
          question: 'Lo scaldabagno ha una dispersione verso terra di 300 mA. Il magnetotermico della linea è da 16 A e il differenziale da 30 mA. Che cosa succede?',
          options: [
            { id: 'a', text: 'Scatta il magnetotermico: 300 mA sono una corrente anomala.' },
            { id: 'b', text: 'Scatta il differenziale: 300 mA sono molto più della sua soglia.' },
            { id: 'c', text: 'Non scatta niente: la corrente è troppo piccola per ogni protezione.' },
          ],
          correct: 'b',
          why: 'Il magnetotermico guarda la corrente totale della linea: 0,3 A sono nulla rispetto ai suoi 16 A. Il differenziale confronta fase e neutro: 300 mA di differenza sono dieci volte la sua soglia e lo fanno scattare subito.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['D.1'], color: 'marrone', short: '1 Fase', title: 'La fase al differenziale', text: 'Dalla FASE del quadro al morsetto 1 del differenziale.' },
      { kind: 'wire', from: 'Q.N', to: ['D.N1'], color: 'blu', short: '2 Neutro', title: 'Il neutro al differenziale', text: 'Dal NEUTRO del quadro al morsetto N in alto del differenziale.' },
      { kind: 'wire', from: 'D.2', to: ['S.a'], color: 'marrone', short: '3 Interruttore', title: 'All’interruttore', text: 'Dal morsetto 2 del differenziale al morsetto 1 dell’interruttore.' },
      { kind: 'wire', from: 'S.b', to: ['H.A'], color: 'marrone', short: '4 Scaldabagno', title: 'Allo scaldabagno', text: 'Dal morsetto 2 dell’interruttore allo scaldabagno.' },
      { kind: 'wire', from: 'D.N2', to: ['H.B'], color: 'blu', short: '5 Neutro', title: 'Il neutro allo scaldabagno', text: 'Dal morsetto N in basso del differenziale allo scaldabagno.' },
      { kind: 'control', id: 'S', short: '6 Accendi', title: 'Accendi lo scaldabagno', text: 'Chiudi l’interruttore dello scaldabagno.' },
      { kind: 'control', id: 'G', short: '7 Dispersione', title: 'Provoca la dispersione', text: 'Tocca il pannello dell’isolante: con 10 mA il differenziale non scatta. Poi tocca il valore in mA per portarlo a 300: ora scatta.' },
      { kind: 'verify', short: '8 Verifica', title: 'Controlla l’impianto', text: 'Riarma il differenziale e premi Verifica.' },
    ],
    summary: [
      'Il differenziale confronta la corrente di fase con quella di neutro: se non sono uguali, scatta.',
      'In casa la soglia è 30 mA: scatta da 30 mA in su e non scatta sotto i 15 mA.',
      'Il magnetotermico non sente le dispersioni: servono tutti e due.',
      'Il neutro dei carichi deve uscire dal differenziale, altrimenti scatta senza guasto.',
    ],
    fault: {
      say: 'Lo scaldabagno è già cablato. Chiudi l’interruttore e guarda che cosa fa il differenziale.',
      wires: [
        ['Q.F', 'D.1', 'marrone'], ['Q.N', 'D.N1', 'blu'],
        ['D.2', 'S.a', 'marrone'], ['S.b', 'H.A', 'marrone'], ['Q.N', 'H.B', 'blu'],
      ],
      diagnosis: {
        question: 'Perché il differenziale scatta appena si accende lo scaldabagno?',
        options: [
          { id: 'a', text: 'Il neutro dello scaldabagno è preso dal quadro e non passa dal differenziale.' },
          { id: 'b', text: 'Lo scaldabagno assorbe troppa corrente.' },
          { id: 'c', text: 'La fase è collegata al morsetto sbagliato.' },
        ],
        correct: 'a',
        why: 'La corrente esce dal differenziale sulla fase e rientra dal neutro senza passarvi: lui vede una differenza pari a tutta la corrente dello scaldabagno e scatta. Il neutro deve uscire dal morsetto N in basso del differenziale.',
      },
      fixSay: 'Sposta il neutro dello scaldabagno sul morsetto N in basso del differenziale, poi premi Verifica.',
    },
  },

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
            'Fase e neutro non si scambiano mai, anche se l’apparecchio funzionerebbe lo stesso: per regola d’impianto il morsetto L va sulla fase e il morsetto N sul neutro.',
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
        ['Q.N', 'S.a', 'blu'], ['S.b', 'P.N', 'blu'], ['S.b', 'L.B', 'blu'],
        ['Q.F', 'P.L', 'marrone'], ['Q.F', 'L.A', 'marrone'], ['Q.PE', 'P.PE', 'gv'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'L’interruttore interrompe il neutro invece della fase: con l’interruttore aperto la lampada e la presa restano in tensione.' },
          { id: 'b', text: 'Manca il filo di terra alla presa.' },
          { id: 'c', text: 'La lampada è collegata in serie alla presa.' },
        ],
        correct: 'a',
        why: 'Con l’interruttore aperto la lampada è spenta, ma la fase arriva ancora ai suoi morsetti: chi cambia la lampadina rischia la scossa. Il comando va sempre sulla fase, mentre il neutro non passa dall’interruttore.',
      },
      fixSay: 'Sposta l’interruttore sulla fase: la fase del quadro entra nell’interruttore e da lì va alla presa e alla lampada; il neutro va diretto. Poi premi Verifica.',
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
          warn: 'A 400 V gli errori sono più pericolosi. Si lavora sempre fuori tensione, con il sezionamento a monte aperto e verificato.',
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

  'c14-termico': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Proteggere il motore',
          paras: [
            'Un motore può assorbire troppa corrente per un tempo lungo: per esempio se l’albero si blocca o se il carico è eccessivo. Gli avvolgimenti si scaldano e, se si va avanti, si danneggiano.',
            'La protezione a monte (il salvamotore) interviene subito contro i cortocircuiti. Il sovraccarico, che è lento, è affidato al relè termico abbinato al contattore: si scalda con la stessa corrente del motore e scatta dopo un po’.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il relè termico',
          focus: ['FR'],
          paras: [
            'I tre poli di potenza (1-2, 3-4, 5-6) stanno in serie al motore, tra il contattore e il motore: la corrente del motore passa da qui.',
            'Il contatto 95-96 è normalmente chiuso e va nel circuito di comando. Quando il termico scatta, si apre.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Come ferma il motore',
          paras: [
            'Il contatto 95-96 sta in serie al comando, prima dell’arresto. Se il termico scatta, il comando si interrompe: la bobina perde corrente, il contattore si apre e il motore si ferma.',
            'Il termico non si riarma da solo: dopo aver tolto la causa del sovraccarico si preme il tasto Reset. Solo allora il motore può ripartire con un nuovo comando di marcia.',
          ],
          warn: 'Il termico ferma il motore tramite il comando. Se il contatto 95-96 non è collegato nel comando, il termico scatta ma il motore continua a girare.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla fase L1 al morsetto 1 del salvamotore.',
              'Filo nero dalla fase L2 al morsetto 3.',
              'Filo grigio dalla fase L3 al morsetto 5.',
              'Dal salvamotore al contattore: morsetto 2 al morsetto 1.',
              'Morsetto 4 al morsetto 3.',
              'Morsetto 6 al morsetto 5.',
              'Dal contattore al relè termico: morsetto 2 al morsetto 1.',
              'Morsetto 4 al morsetto 3.',
              'Morsetto 6 al morsetto 5.',
              'Dal relè termico al motore: morsetto 2 al morsetto U.',
              'Morsetto 4 al morsetto V.',
              'Morsetto 6 al morsetto W.',
              'Filo giallo-verde dalla terra al morsetto PE del motore.',
              'Comando: filo rosso dal morsetto 2 del salvamotore al morsetto 95 del termico.',
              'Dal morsetto 96 del termico al pulsante di arresto.',
              'Dal pulsante di arresto al pulsante di marcia.',
              'Dal pulsante di marcia alla bobina del contattore (A1).',
              'Filo blu dall’altro capo della bobina (A2) al neutro.',
              'Autoritenuta: dal morsetto 3 della marcia al contatto 13.',
              'Dal contatto 14 al morsetto 4 della marcia.',
              'Dalla bobina (A1) alla spia di marcia.',
              'Filo blu dalla spia al neutro.',
            ],
            power: 'Il motore è fermo.',
            controls: ['Premuto Arresto, il motore resta fermo.', 'Premuta Marcia: il motore parte.'],
          },
        },
        {
          type: 'previsione',
          question: 'Il termico è scattato e il motore si è fermato. Senza riarmarlo premo Marcia. Che cosa succede?',
          options: [
            { id: 'a', text: 'Il motore parte normalmente.' },
            { id: 'b', text: 'Il motore non parte: il contatto 95-96 è ancora aperto.' },
            { id: 'c', text: 'Il motore parte e il termico scatta di nuovo subito.' },
          ],
          correct: 'b',
          why: 'Il termico scattato ha il contatto 95-96 aperto finché non lo riarmi con Reset. Il circuito di comando resta interrotto e la bobina non può essere alimentata.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'KM.2', to: ['FR.1'], color: 'marrone', short: '1 Potenza', title: 'Il termico in serie al motore', text: 'Dai morsetti 2, 4 e 6 del contattore ai morsetti 1, 3 e 5 del termico; dai morsetti 2, 4 e 6 del termico a U, V e W.' },
      { kind: 'wire', from: 'QM.2', to: ['FR.95'], color: 'rosso', short: '2 Contatto 95', title: 'Il comando passa dal termico', text: 'Dal morsetto 2 del salvamotore al morsetto 95 del termico.' },
      { kind: 'wire', from: 'FR.96', to: ['SB0.1'], color: 'rosso', short: '3 Contatto 96', title: 'Dal termico all’arresto', text: 'Dal morsetto 96 del termico al morsetto 1 del pulsante di arresto.' },
      { kind: 'control', id: 'SB1', short: '4 Marcia', title: 'Prova la marcia', text: 'Il resto è come nel livello precedente. Premi Marcia e rilascia.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla l’impianto', text: 'Usa il pulsante sotto la scena per simulare un sovraccarico, poi premi Verifica.' },
    ],
    summary: [
      'Il relè termico, abbinato al contattore, protegge dal sovraccarico, che è lento; la protezione a monte interviene sul cortocircuito, che è subito.',
      'I poli di potenza del termico sono in serie al motore; il contatto 95-96 è nel comando, in serie, prima dell’arresto.',
      'Scattato il termico, il comando si apre e il motore si ferma; serve riarmarlo a mano con Reset.',
      'Se il contatto 95-96 non è nel comando, il termico scatta ma il motore non si ferma.',
    ],
    fault: {
      say: 'Il motore è collegato con il relè termico, ma durante un sovraccarico non si ferma. Premi Marcia e poi simula un sovraccarico.',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
        ['KM.2', 'FR.1', 'marrone'], ['KM.4', 'FR.3', 'nero'], ['KM.6', 'FR.5', 'grigio'],
        ['FR.2', 'M.U', 'marrone'], ['FR.4', 'M.V', 'nero'], ['FR.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
        ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'], ['SB1.4', 'KM.A1', 'rosso'],
        ['KM.A2', 'Q.N', 'blu'], ['SB1.3', 'KM.13', 'rosso'], ['KM.14', 'SB1.4', 'rosso'], ['H.X1', 'KM.A1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Il contatto 95-96 del termico non è nel circuito di comando.' },
          { id: 'b', text: 'I poli del termico sono collegati alle fasi sbagliate.' },
          { id: 'c', text: 'Manca la terra al motore.' },
        ],
        correct: 'a',
        why: 'Il termico scatta e apre il contatto 95-96, ma questo contatto non è in serie al comando: la bobina continua a essere alimentata e il motore continua a girare e a surriscaldarsi.',
      },
      fixSay: 'Metti il contatto 95-96 nel comando: dal morsetto 2 del salvamotore al 95, dal 96 al morsetto 1 dell’arresto. Togli il filo che andava direttamente all’arresto. Poi premi Verifica.',
    },
  },

  'c15-inversione': {
    support: 'obiettivo',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Avanti e indietro',
          paras: [
            'Per invertire il senso di un motore trifase basta scambiare due fasi. Per farlo con un comando si usano due contattori: KM1 collega il motore in modo normale, KM2 con due fasi scambiate.',
            'Così con Avanti si chiude KM1 e con Indietro si chiude KM2.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Due contattori',
          focus: ['KM1', 'KM2'],
          paras: [
            'I poli di potenza dei due contattori sono collegati agli stessi morsetti del salvamotore. In uscita KM2 scambia due fasi: i suoi morsetti 2 e 6 vanno a W e a U.',
            'Ogni contattore ha il suo contatto di autoritenuta (13-14) e un contatto normalmente chiuso (21-22) per l’interblocco.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'L’interblocco',
          paras: [
            'Se i due contattori si chiudessero insieme, due fasi della rete si collegherebbero tra loro: un cortocircuito. Il salvamotore scatterebbe.',
            'L’interblocco lo impedisce con il contatto NC (21-22): la bobina di KM1 passa dal contatto di KM2, e la bobina di KM2 dal contatto di KM1. Se uno è chiuso, l’altro non può chiudersi.',
          ],
          warn: 'Senza interblocco il circuito sembra funzionare, ma premendo le due marce insieme si ha un cortocircuito.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Le tre fasi al salvamotore: L1 al morsetto 1.', 'L2 al morsetto 3.', 'L3 al morsetto 5.',
              'Dal salvamotore a KM1: morsetto 2 al morsetto 1.', 'Morsetto 4 al morsetto 3.', 'Morsetto 6 al morsetto 5.',
              'Dal salvamotore a KM2: morsetto 2 al morsetto 1.', 'Morsetto 4 al morsetto 3.', 'Morsetto 6 al morsetto 5.',
              'Da KM1 al motore, in ordine: morsetto 2 a U.', 'Morsetto 4 a V.', 'Morsetto 6 a W.',
              'Da KM2 al motore con due fasi scambiate: morsetto 2 a W.', 'Morsetto 4 a V.', 'Morsetto 6 a U.',
              'Filo giallo-verde dalla terra al morsetto PE del motore.',
              'Comando: dal salvamotore al pulsante di arresto.',
              'Dall’arresto al pulsante Avanti.', 'Dall’arresto al pulsante Indietro.',
              'Autoritenuta di KM1: dal pulsante Avanti al contatto 13 di KM1.', 'Dal contatto 14 di KM1 al morsetto 4 di Avanti.',
              'Autoritenuta di KM2: dal pulsante Indietro al contatto 13 di KM2.', 'Dal contatto 14 di KM2 al morsetto 4 di Indietro.',
              'Neutro alla bobina di KM1 (A2).', 'Neutro alla bobina di KM2 (A2).',
              'Interblocco: da Avanti al contatto 21 di KM2.', 'Dal contatto 22 di KM2 alla bobina di KM1 (A1).',
              'Da Indietro al contatto 21 di KM1.', 'Dal contatto 22 di KM1 alla bobina di KM2 (A1).',
            ],
            power: 'Il motore è fermo.',
            controls: ['Arresto premuto: il motore resta fermo.', 'Avanti: KM1 si chiude e il motore gira in avanti.', 'Indietro: KM2 si chiude e il motore gira all’indietro.'],
          },
        },
        {
          type: 'previsione',
          question: 'Il motore gira in avanti. Premo Indietro senza premere prima Arresto. Con l’interblocco, che cosa succede?',
          options: [
            { id: 'a', text: 'Il motore inverte subito il senso.' },
            { id: 'b', text: 'Non cambia nulla: KM2 non può chiudersi finché KM1 è chiuso.' },
            { id: 'c', text: 'Il salvamotore scatta.' },
          ],
          correct: 'b',
          why: 'Il contatto NC di KM1 è aperto finché KM1 è chiuso: la bobina di KM2 non riceve corrente. Per invertire bisogna prima premere Arresto.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'KM1.2', to: ['M.U'], color: 'marrone', short: '1 Avanti', title: 'KM1 in ordine', text: 'KM1 collega il motore con le fasi in ordine.' },
      { kind: 'wire', from: 'KM2.2', to: ['M.W'], color: 'marrone', short: '2 Indietro', title: 'KM2 con due fasi scambiate', text: 'KM2 collega il motore con due fasi scambiate.' },
      { kind: 'wire', from: 'SB1.4', to: ['KM2.21'], color: 'rosso', short: '3 Interblocco', title: 'L’interblocco', text: 'Le bobine passano dai contatti NC 21-22 dell’altro contattore.' },
      { kind: 'verify', short: '4 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Scambiando due fasi si inverte il senso del motore.',
      'Due contattori: KM1 collega le fasi in ordine, KM2 le collega con due fasi scambiate.',
      'I due contattori non devono mai chiudersi insieme: sarebbe un cortocircuito.',
      'L’interblocco usa il contatto NC (21-22) di ciascun contattore nel comando dell’altro.',
      'Per invertire il senso si preme prima Arresto.',
    ],
    fault: {
      say: 'Il motore va avanti e indietro. Prova Avanti, Arresto e Indietro. Poi premi Avanti e, con il motore in marcia, premi Indietro.',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'KM1.1', 'marrone'], ['QM.4', 'KM1.3', 'nero'], ['QM.6', 'KM1.5', 'grigio'],
        ['QM.2', 'KM2.1', 'marrone'], ['QM.4', 'KM2.3', 'nero'], ['QM.6', 'KM2.5', 'grigio'],
        ['KM1.2', 'M.U', 'marrone'], ['KM1.4', 'M.V', 'nero'], ['KM1.6', 'M.W', 'grigio'],
        ['KM2.2', 'M.W', 'marrone'], ['KM2.4', 'M.V', 'nero'], ['KM2.6', 'M.U', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
        ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'], ['SB0.2', 'SB2.3', 'rosso'],
        ['SB1.3', 'KM1.13', 'rosso'], ['KM1.14', 'SB1.4', 'rosso'], ['SB2.3', 'KM2.13', 'rosso'], ['KM2.14', 'SB2.4', 'rosso'],
        ['KM1.A2', 'Q.N', 'blu'], ['KM2.A2', 'Q.N', 'blu'],
        ['SB1.4', 'KM1.A1', 'rosso'], ['SB2.4', 'KM2.A1', 'rosso'],
      ],
      diagnosis: {
        question: 'Che cosa manca?',
        options: [
          { id: 'a', text: 'L’interblocco: premendo le due marce i contattori si chiudono insieme.' },
          { id: 'b', text: 'L’autoritenuta di KM2.' },
          { id: 'c', text: 'Il relè termico.' },
        ],
        correct: 'a',
        why: 'Le bobine non passano dai contatti NC 21-22 dell’altro contattore. Premendo Avanti e Indietro insieme KM1 e KM2 si chiudono tutti e due: due fasi vanno in cortocircuito e il salvamotore scatta.',
      },
      fixSay: 'Aggiungi l’interblocco: da Avanti al contatto 21 di KM2 e dal 22 di KM2 alla bobina di KM1; da Indietro al contatto 21 di KM1 e dal 22 di KM1 alla bobina di KM2. Togli i fili diretti verso le bobine. Poi premi Verifica.',
    },
  },

  'c16-nastro': {
    support: 'obiettivo',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Una macchina completa',
          paras: [
            'Un nastro trasportatore porta un pacco da un punto all’altro. Ha un motore, un contattore, i pulsanti di marcia e arresto, un relè termico e due dispositivi di sicurezza: il pulsante di emergenza e il finecorsa.',
            'Il circuito di potenza è quello che già conosci. Il comando mette in serie tutti i contatti che devono poter fermare il nastro.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Emergenza e finecorsa',
          focus: ['SBE', 'FC'],
          paras: [
            'Il pulsante di emergenza a fungo ha un contatto normalmente chiuso, in serie al comando. Premuto, si blocca aperto: il nastro si ferma e non riparte finché non lo sblocchi.',
            'Il finecorsa è un contatto azionato dal pacco. Usiamo il contatto normalmente chiuso (1-2): a fine nastro si apre e il comando si interrompe.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché i contatti NC',
          paras: [
            'Un contatto NC in serie al comando ferma la macchina anche quando si stacca un filo: un guasto porta alla fermata, non alla marcia.',
            'Per questo emergenza, arresto, termico e finecorsa sono tutti contatti NC in serie. Dopo l’emergenza il nastro non riparte da solo: serve un nuovo comando di marcia.',
          ],
          warn: 'Con il finecorsa collegato al contatto normalmente aperto il comando è interrotto all’inizio: il nastro non parte.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Le tre fasi al salvamotore: L1 al morsetto 1.', 'L2 al morsetto 3.', 'L3 al morsetto 5.',
              'Dal salvamotore al contattore: morsetto 2 al morsetto 1.', 'Morsetto 4 al morsetto 3.', 'Morsetto 6 al morsetto 5.',
              'Dal contattore al termico: morsetto 2 al morsetto 1.', 'Morsetto 4 al morsetto 3.', 'Morsetto 6 al morsetto 5.',
              'Dal termico al motore: morsetto 2 a U.', 'Morsetto 4 a V.', 'Morsetto 6 a W.',
              'Filo giallo-verde dalla terra al morsetto PE del motore.',
              'Comando: dal salvamotore al morsetto 95 del termico.',
              'Dal morsetto 96 al pulsante di emergenza.',
              'Dall’emergenza al pulsante di arresto.',
              'Dall’arresto al pulsante di marcia.',
              'Dalla marcia al finecorsa, contatto normalmente chiuso.',
              'Dal finecorsa alla bobina del contattore (A1).',
              'Filo blu dalla bobina (A2) al neutro.',
              'Autoritenuta: dal morsetto 3 della marcia al contatto 13.',
              'Dal contatto 14 al morsetto 4 della marcia.',
              'Dalla bobina (A1) alla spia di marcia.',
              'Filo blu dalla spia al neutro.',
            ],
            power: 'Il nastro è fermo.',
            controls: ['Arresto: il nastro resta fermo.', 'Marcia: il nastro parte.', 'Emergenza premuta: il nastro si ferma subito.'],
          },
        },
        {
          type: 'previsione',
          question: 'Il nastro è fermo per l’emergenza. Sblocco il fungo. Che cosa fa il nastro?',
          options: [
            { id: 'a', text: 'Riparte da solo.' },
            { id: 'b', text: 'Resta fermo finché non premo Marcia.' },
            { id: 'c', text: 'Scatta il termico.' },
          ],
          correct: 'b',
          why: 'Premendo il fungo il suo contatto si apre: la bobina perde corrente e l’autoritenuta 13-14 si apre. Sbloccando il fungo il contatto si richiude, ma il circuito resta aperto finché non premi Marcia: una macchina non deve ripartire da sola dopo un’emergenza.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'FR.96', to: ['SBE.1'], color: 'rosso', short: '1 Emergenza', title: 'L’emergenza in serie', text: 'Il fungo (contatto NC) sta nel comando, dopo il termico.' },
      { kind: 'wire', from: 'SB1.4', to: ['FC.1'], color: 'rosso', short: '2 Finecorsa', title: 'Il finecorsa dopo la marcia', text: 'Usa il contatto normalmente chiuso, davanti alla bobina.' },
      { kind: 'verify', short: '3 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Una macchina completa ha potenza, comando e dispositivi di sicurezza.',
      'Emergenza, arresto, termico e finecorsa sono contatti NC in serie nel comando.',
      'Un contatto NC porta la macchina alla fermata anche se si stacca un filo.',
      'Dopo l’emergenza la macchina riparte solo con un nuovo comando di marcia.',
      'Il finecorsa ferma il nastro a fine corsa: il contatto NC si apre.',
    ],
    fault: {
      say: 'Il nastro è già cablato ma, premendo Marcia, non parte. Prova.',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
        ['KM.2', 'FR.1', 'marrone'], ['KM.4', 'FR.3', 'nero'], ['KM.6', 'FR.5', 'grigio'],
        ['FR.2', 'M.U', 'marrone'], ['FR.4', 'M.V', 'nero'], ['FR.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
        ['QM.2', 'FR.95', 'rosso'], ['FR.96', 'SBE.1', 'rosso'], ['SBE.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'],
        ['SB1.4', 'FC.3', 'rosso'], ['FC.4', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
        ['SB1.3', 'KM.13', 'rosso'], ['KM.14', 'SB1.4', 'rosso'], ['H.X1', 'KM.A1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Il finecorsa è collegato con il contatto normalmente aperto.' },
          { id: 'b', text: 'Il pulsante di emergenza è premuto.' },
          { id: 'c', text: 'Il contattore è collegato al neutro sbagliato.' },
        ],
        correct: 'a',
        why: 'Il contatto normalmente aperto (3-4) del finecorsa è aperto quando il pacco non lo tocca: il comando è interrotto all’inizio e il nastro non parte. Serve il contatto normalmente chiuso (1-2), che si apre solo a fine corsa.',
      },
      fixSay: 'Collega il finecorsa con il contatto normalmente chiuso: dal morsetto 4 della marcia al morsetto 1 del finecorsa e dal morsetto 2 alla bobina. Poi premi Verifica.',
    },
  },

  'c09-luce-scale': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'La luce che si spegne da sola',
          paras: [
            'Nelle scale dei condomini la luce si accende con un pulsante e si spegne da sola dopo qualche decina di secondi. Così non resta accesa per dimenticanza e si risparmia energia.',
            'Il pulsante non comanda direttamente le lampade: comanda un relè temporizzato, che tiene acceso il contatto per un tempo regolabile.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il relè temporizzato',
          focus: ['T'],
          paras: [
            'Ha una bobina (A1, A2) e un contatto (1, 2). Quando la bobina riceve tensione il contatto si chiude; il tempo comincia a contare quando il pulsante viene rilasciato.',
            'Il contatto resta chiuso fino alla fine del tempo, anche se il pulsante è già stato rilasciato. Se si preme di nuovo prima della fine, il conteggio riparte da capo.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Pulsanti in parallelo',
          focus: ['P1', 'P2'],
          paras: [
            'Come nel relè ad impulsi, i pulsanti sono in parallelo: basta premerne uno qualunque per eccitare la bobina. Se ne possono aggiungere quanti servono, uno a ogni piano.',
            'Le lampade non passano dai pulsanti: sono alimentate dal contatto del temporizzatore.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE del quadro al morsetto 3 del primo pulsante.',
              'Dal morsetto 3 del primo pulsante al morsetto 3 del secondo.',
              'Dal morsetto 4 del primo pulsante al morsetto 4 del secondo.',
              'Dal morsetto 4 del secondo pulsante alla bobina del temporizzatore (A1).',
              'Filo blu dall’altro capo della bobina (A2) al NEUTRO.',
              'La fase arriva anche al contatto del temporizzatore: morsetto 1.',
              'Dal morsetto 2 del temporizzatore alla prima lampada.',
              'Dallo stesso morsetto 2 alla seconda lampada.',
              'Filo blu dalla prima lampada al NEUTRO.',
              'Filo blu dalla seconda lampada al NEUTRO.',
            ],
            power: 'Levetta su: le lampade sono spente.',
            controls: ['Pulsante premuto e rilasciato: le due lampade si accendono.', 'Dopo il tempo impostato le lampade si spengono da sole.'],
          },
        },
        {
          type: 'previsione',
          question: 'Le lampade sono accese da 15 secondi su 20. Premo di nuovo il pulsante. Quanto resteranno accese ancora?',
          options: [
            { id: 'a', text: 'Altri 5 secondi: il tempo non cambia.' },
            { id: 'b', text: 'Altri 20 secondi: il conteggio riparte da capo.' },
            { id: 'c', text: 'Si spengono subito.' },
          ],
          correct: 'b',
          why: 'Il conteggio parte da capo quando rilasci il pulsante. Ogni pressione dà un nuovo intervallo pieno: per questo chi sale le scale può premere quando vuole senza restare al buio.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['P1.3'], color: 'marrone', short: '1 Fase', title: 'La fase ai pulsanti', text: 'Dalla FASE del quadro al morsetto 3 del primo pulsante.' },
      { kind: 'wire', from: 'P1.3', to: ['P2.3'], color: 'marrone', short: '2 Parallelo 3', title: 'Pulsanti in parallelo', text: 'Collega tra loro i morsetti 3 dei due pulsanti.' },
      { kind: 'wire', from: 'P1.4', to: ['P2.4'], color: 'marrone', short: '3 Parallelo 4', title: 'Pulsanti in parallelo', text: 'Collega tra loro i morsetti 4 dei due pulsanti.' },
      { kind: 'wire', from: 'P2.4', to: ['T.A1'], color: 'marrone', short: '4 Bobina', title: 'Alla bobina', text: 'Dai morsetti 4 dei pulsanti alla bobina del temporizzatore (A1).' },
      { kind: 'wire', from: 'T.A2', to: ['Q.N'], color: 'blu', short: '5 Neutro bobina', title: 'Il neutro alla bobina', text: 'Dall’altro capo della bobina (A2) al NEUTRO.' },
      { kind: 'wire', from: 'Q.F', to: ['T.1'], color: 'marrone', short: '6 Contatto', title: 'La fase al contatto', text: 'Dalla FASE del quadro al morsetto 1 del temporizzatore.' },
      { kind: 'wire', from: 'T.2', to: ['L1.A'], color: 'marrone', short: '7 Lampada 1', title: 'Alla prima lampada', text: 'Dal morsetto 2 del temporizzatore a un morsetto della prima lampada.' },
      { kind: 'wire', from: 'T.2', to: ['L2.A'], color: 'marrone', short: '8 Lampada 2', title: 'Alla seconda lampada', text: 'Dallo stesso morsetto 2 a un morsetto della seconda lampada.' },
      { kind: 'wire', from: 'L1.B', to: ['Q.N'], color: 'blu', short: '9 Neutro 1', title: 'Il neutro alla lampada 1', text: 'Dal NEUTRO all’altro morsetto della prima lampada.' },
      { kind: 'wire', from: 'L2.B', to: ['Q.N'], color: 'blu', short: '10 Neutro 2', title: 'Il neutro alla lampada 2', text: 'Dal NEUTRO all’altro morsetto della seconda lampada.' },
      { kind: 'power', short: '11 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi premi un pulsante e osserva le lampade.' },
      { kind: 'verify', short: '12 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica: il controllo simula anche lo scorrere del tempo.' },
    ],
    summary: [
      'Il relè temporizzato tiene chiuso il suo contatto per un tempo fissato, dopo che la bobina è stata eccitata.',
      'Il pulsante comanda la bobina: le lampade sono alimentate dal contatto.',
      'I pulsanti si mettono in parallelo: se ne può aggiungere uno per ogni punto di comando.',
      'Premendo di nuovo prima della fine, il tempo riparte da capo.',
    ],
    fault: {
      say: 'Qui il temporizzatore non c’è: i pulsanti comandano direttamente le lampade. Premi un pulsante, aspetta qualche secondo e poi premi Verifica.',
      wires: [
        ['Q.F', 'P1.3', 'marrone'], ['P1.3', 'P2.3', 'marrone'], ['P1.4', 'P2.4', 'marrone'],
        ['P2.4', 'L1.A', 'marrone'], ['P2.4', 'L2.A', 'marrone'], ['L1.B', 'Q.N', 'blu'], ['L2.B', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Perché la luce non resta accesa?',
        options: [
          { id: 'a', text: 'Le lampade sono collegate direttamente ai pulsanti: si accendono solo finché si tiene premuto.' },
          { id: 'b', text: 'Il neutro delle lampade è sbagliato.' },
          { id: 'c', text: 'Il tempo del temporizzatore è troppo breve.' },
        ],
        correct: 'a',
        why: 'Il pulsante chiude il contatto solo mentre è premuto. Per mantenere la luce accesa per un tempo, il pulsante deve comandare la bobina del temporizzatore e le lampade devono essere alimentate dal suo contatto.',
      },
      fixSay: 'Inserisci il temporizzatore: i pulsanti vanno alla bobina e le lampade al contatto del temporizzatore. Poi premi Verifica.',
    },
  },

  'c10-campanello': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Il campanello a bassa tensione',
          paras: [
            'Il campanello di casa funziona a bassa tensione, per esempio 12 V. È più sicuro: chi tocca il pulsante accanto alla porta non rischia nulla, perché il pulsante sta sul circuito a bassa tensione.',
            'La rete però è a 230 V. Serve un componente che abbassi la tensione: il trasformatore.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il trasformatore',
          focus: ['TR'],
          paras: [
            'Ha due lati separati. Il primario (morsetti 1 e 2) si collega alla rete a 230 V. Il secondario (morsetti 3 e 4) fornisce i 12 V.',
            'Tra primario e secondario non c’è nessun collegamento elettrico: l’energia passa attraverso il campo magnetico del nucleo.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il campanello',
          focus: ['B'],
          paras: [
            'Il campanello è fatto per 12 V. Se lo si collega per errore alla rete a 230 V si brucia.',
            'Il pulsante sta sul secondario, in serie al campanello: premuto, chiude il circuito a 12 V. I fili del circuito a bassa tensione, né fase né neutro, possono essere di altri colori, per esempio bianco.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Filo marrone dalla FASE del quadro al morsetto 1 del primario del trasformatore.',
              'Filo blu dal morsetto 2 del primario al NEUTRO.',
              'Filo bianco dal morsetto 3 del secondario al pulsante.',
              'Filo bianco dal pulsante al campanello.',
              'Filo bianco dal morsetto 4 del secondario all’altro morsetto del campanello.',
            ],
            power: 'Levetta su: il trasformatore è alimentato, ma il pulsante non è premuto e il campanello è silenzioso.',
            controls: ['Pulsante premuto: il circuito a 12 V si chiude e il campanello suona.'],
          },
        },
        {
          type: 'previsione',
          question: 'Il trasformatore è alimentato e il campanello è collegato al secondario, in serie al pulsante. Il pulsante non è premuto. Che cosa succede?',
          options: [
            { id: 'a', text: 'Il campanello suona: il secondario ha tensione.' },
            { id: 'b', text: 'Il campanello è silenzioso: il pulsante tiene aperto il circuito a 12 V.' },
            { id: 'c', text: 'Il campanello si brucia.' },
          ],
          correct: 'b',
          why: 'Il secondario ha tensione, ma il circuito è aperto dal pulsante: non passa corrente e il campanello tace. Premendo il pulsante il circuito si chiude e il campanello suona.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['TR.1'], color: 'marrone', short: '1 Fase', title: 'La fase al primario', text: 'Dalla FASE del quadro al morsetto 1 del trasformatore.' },
      { kind: 'wire', from: 'TR.2', to: ['Q.N'], color: 'blu', short: '2 Neutro', title: 'Il neutro al primario', text: 'Dal morsetto 2 del trasformatore al NEUTRO.' },
      { kind: 'wire', from: 'TR.3', to: ['SB.3'], color: 'bianco', short: '3 Pulsante', title: 'Dal secondario al pulsante', text: 'Dal morsetto 3 del secondario al morsetto 3 del pulsante. Qui puoi usare il bianco.' },
      { kind: 'wire', from: 'SB.4', to: ['B.1'], color: 'bianco', short: '4 Campanello', title: 'Dal pulsante al campanello', text: 'Dal morsetto 4 del pulsante a un morsetto del campanello.' },
      { kind: 'wire', from: 'TR.4', to: ['B.2'], color: 'bianco', short: '5 Ritorno', title: 'Il secondo filo', text: 'Dal morsetto 4 del secondario all’altro morsetto del campanello.' },
      { kind: 'power', short: '6 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi premi il pulsante.' },
      { kind: 'verify', short: '7 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il campanello funziona a bassa tensione (12 V): collegato alla rete a 230 V si brucia.',
      'Il trasformatore abbassa la tensione: il primario va alla rete, il secondario al campanello.',
      'Il pulsante sta sul secondario, in serie al campanello.',
      'I fili del circuito a bassa tensione non hanno i colori della rete: si usa, per esempio, il bianco.',
    ],
    fault: {
      say: 'Il campanello è collegato al pulsante senza trasformatore. Premi il pulsante e guarda che cosa succede, poi premi Verifica.',
      wires: [
        ['Q.F', 'SB.3', 'marrone'], ['SB.4', 'B.1', 'marrone'], ['B.2', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa non va?',
        options: [
          { id: 'a', text: 'Il campanello è collegato direttamente alla rete a 230 V: si brucia.' },
          { id: 'b', text: 'Il pulsante è collegato al neutro.' },
          { id: 'c', text: 'Manca la terra al campanello.' },
        ],
        correct: 'a',
        why: 'Il campanello è progettato per 12 V. Con 230 V ai capi si brucia. Serve il trasformatore: il campanello va collegato al secondario.',
      },
      fixSay: 'Inserisci il trasformatore: la rete sul primario, pulsante e campanello in serie sul secondario. Poi premi Verifica.',
    },
  },

  'c11-quadro': {
    support: 'obiettivo',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Il quadro di una casa',
          paras: [
            'Il quadro elettrico raccoglie le protezioni. All’ingresso c’è un interruttore differenziale, che protegge le persone. A valle, ogni linea ha il suo magnetotermico, che protegge i cavi dal sovraccarico e dal cortocircuito.',
            'Dividere in linee ha un vantaggio: se si guasta la luce, scatta solo il magnetotermico della luce e le prese restano alimentate.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il differenziale',
          focus: ['D'],
          paras: [
            'Confronta la corrente che entra dalla fase con quella che torna dal neutro. Se non sono uguali, una parte sta tornando per un’altra strada, per esempio attraverso una persona, e il differenziale scatta.',
            'Per questo il neutro di ogni carico deve passare dal differenziale. Il tasto di prova simula una dispersione: va premuto ogni tanto per controllare che funzioni.',
          ],
          warn: 'Se un neutro è preso a monte del differenziale, la corrente non torna da dove è andata e il differenziale scatta anche senza una vera dispersione.',
        },
        {
          type: 'pezzi',
          title: 'I magnetotermici di linea',
          focus: ['M1', 'M2'],
          paras: [
            'Un magnetotermico per la luce e uno per le prese: ciascuno interrompe sia la fase sia il neutro della sua linea.',
            'Sono entrambi a valle del differenziale: una dispersione su qualunque linea lo fa scattare.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'La fase del quadro entra nel differenziale: morsetto 1.',
              'Il neutro del quadro entra nel differenziale: morsetto N.',
              'Dall’uscita fase del differenziale al magnetotermico della luce.',
              'Dalla stessa uscita al magnetotermico delle prese.',
              'Dall’uscita neutro del differenziale al magnetotermico della luce.',
              'Dalla stessa uscita al magnetotermico delle prese.',
              'Dal magnetotermico della luce all’interruttore.',
              'Dall’interruttore alla lampada.',
              'Il neutro del magnetotermico della luce alla lampada.',
              'Dal magnetotermico delle prese al morsetto L della presa.',
              'Il neutro del magnetotermico delle prese al morsetto N della presa.',
              'La terra del quadro al morsetto PE della presa.',
            ],
            power: 'Il quadro è alimentato: la presa ha tensione, la lampada è spenta.',
            controls: ['Interruttore chiuso: la lampada si accende.', 'Tasto di prova: il differenziale scatta e tutto si spegne.'],
          },
        },
        {
          type: 'previsione',
          question: 'In casa un apparecchio della linea prese ha una dispersione verso terra. Che cosa dovrebbe scattare?',
          options: [
            { id: 'a', text: 'Il magnetotermico della luce.' },
            { id: 'b', text: 'Il differenziale.' },
            { id: 'c', text: 'Nulla: la dispersione non è pericolosa.' },
          ],
          correct: 'b',
          why: 'Il differenziale rileva la differenza tra la corrente di andata e quella di ritorno. Una dispersione verso terra è proprio questa differenza. I magnetotermici scattano per sovraccarico o cortocircuito, non per dispersione.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['D.1'], color: 'marrone', short: '1 Ingresso', title: 'Entra nel differenziale', text: 'Fase e neutro del quadro entrano nel differenziale, in alto.' },
      { kind: 'wire', from: 'D.2', to: ['M1.1', 'M2.1'], color: 'marrone', short: '2 Linee', title: 'Le due linee', text: 'Dal differenziale la fase e il neutro si dividono nelle due linee, luce e prese.' },
      { kind: 'wire', from: 'M2.N2', to: ['P.N'], color: 'blu', short: '3 Presa', title: 'La presa e la terra', text: 'La presa riceve fase e neutro dal suo magnetotermico, più la terra del quadro.' },
      { kind: 'verify', short: '4 Verifica', title: 'Controlla l’impianto', text: 'Prova anche il tasto di prova del differenziale, poi premi Verifica.' },
    ],
    summary: [
      'Il differenziale protegge le persone: scatta se la corrente di andata e quella di ritorno sono diverse.',
      'Il magnetotermico protegge i cavi dal sovraccarico e dal cortocircuito.',
      'Il neutro di ogni carico deve passare dal differenziale, altrimenti scatta anche senza una vera dispersione.',
      'Linee separate con magnetotermici separati: se una si guasta, le altre restano alimentate.',
      'Il tasto di prova del differenziale va premuto ogni tanto per controllare che funzioni.',
    ],
    fault: {
      say: 'Il quadro è cablato bene, ma il differenziale è scattato e non resta armato. Per capire quale linea disperde, apri i due magnetotermici, riarma il differenziale e richiudi una linea alla volta. Poi rispondi.',
      wires: [
        ['Q.F', 'D.1', 'marrone'], ['Q.N', 'D.N1', 'blu'],
        ['D.2', 'M1.1', 'marrone'], ['D.2', 'M2.1', 'marrone'], ['D.N2', 'M1.N1', 'blu'], ['D.N2', 'M2.N1', 'blu'],
        ['M1.2', 'S.a', 'marrone'], ['S.b', 'L.A', 'marrone'], ['M1.N2', 'L.B', 'blu'],
        ['M2.2', 'P.L', 'marrone'], ['M2.N2', 'P.N', 'blu'], ['Q.PE', 'P.PE', 'gv'],
      ],
      on: ['G'],
      diagnosis: {
        question: 'Il differenziale scatta quando si chiude il magnetotermico delle prese e non quando si chiude quello della luce. Dov’è la dispersione?',
        options: [
          { id: 'a', text: 'Sulla linea della luce.' },
          { id: 'b', text: 'Sulla linea delle prese: un apparecchio collegato alla presa disperde verso terra.' },
          { id: 'c', text: 'Nel differenziale, che è guasto.' },
        ],
        correct: 'b',
        why: 'Si cerca un guasto aprendo le linee e richiudendole una alla volta: il differenziale scatta solo quando si richiude la linea che disperde. Qui è quella delle prese, a cui è collegato un apparecchio con l’isolante rovinato.',
      },
      fixSay: 'Scollega l’apparecchio difettoso (tocca il pannello del guasto per spegnerlo), riarma il differenziale e premi Verifica.',
    },
  },
};
