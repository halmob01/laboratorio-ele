// Unita' didattiche dei Moduli 2 e 3. Stessa forma di units.js.

import { PROG_46_FAULT, PROG_51, W46, W51_PLANT, W52_FIXED, W55, PROG_55_FAULT } from './levels-v2.js';

export const UNITS_V2 = {
  'c17-multimetro': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Misurare invece di indovinare',
          paras: [
            'Una luce non si accende. Il guasto può essere un filo staccato dentro un morsetto, un interruttore che non chiude, la lampada: a occhio spesso non si vede. Andare a tentativi fa perdere tempo ed è pericoloso, perché una lampada spenta non vuol dire un impianto senza tensione.',
            'Per questo l’elettricista misura. Lo strumento è il multimetro: ha due puntali, il rosso e il nero. Li appoggi su due punti dell’impianto e il display ti dice che cosa c’è tra quei due punti.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Tensione, corrente, potenza: un ripasso',
          paras: [
            'Te lo ricordi dal primo livello: la tensione è la spinta e c’è anche quando non passa niente; la corrente è quanta elettricità passa davvero, solo a giro chiuso; la potenza è il lavoro che fa l’apparecchio.',
            'Il multimetro di questo livello misura la tensione: ti dice se in un punto arriva la spinta, anche a lampada spenta. Per questo è lo strumento giusto per sapere dove c’è pericolo e dove il giro si interrompe.',
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
          type: 'spiegazione',
          title: 'Due misure: tensione e continuità',
          paras: [
            'La tensione si misura a impianto acceso e risponde alla domanda: qui arriva la spinta? Tra fase e neutro leggi 230 V, tra neutro e terra circa 0 V. Serve a capire fin dove arriva la fase e, prima di lavorare, a essere sicuri che non ci sia.',
            'La continuità si misura a impianto spento e risponde alla domanda: questo filo, questo interruttore, è intero? Lo strumento manda una sua piccola corrente tra i puntali: se il percorso è chiuso legge continuità, se è interrotto legge circuito aperto, se attraversa un carico legge la sua resistenza.',
          ],
          warn: 'Mai misurare la continuità con l’impianto in tensione: la lettura non vale, perché la tensione dell’impianto si somma a quella dello strumento, e lo strumento si può rovinare.',
        },
        {
          type: 'spiegazione',
          title: 'Come si cerca un guasto',
          paras: [
            'Si segue il giro della corrente. Metti il puntale nero sul neutro del quadro e fai avanzare il rosso lungo la fase: quadro, interruttore, lampada. Finché leggi 230 V la fase arriva fin lì; dove la tensione sparisce, il percorso è interrotto prima di quel punto.',
            'Se la fase arriva fino alla lampada e la lampada resta spenta, il problema è dall’altra parte: nel neutro o nella lampada. Per misurare la tensione non serve che la lampada sia accesa: lo strumento sente la spinta anche se la corrente non passa. Sul banco farai queste misure:',
          ],
          table: {
            head: ['Misura', 'A che cosa serve'],
            rows: [
              ['1 e neutro', 'La fase arriva fino all’interruttore?'],
              ['1 e 2', 'Con l’interruttore aperto: c’è tensione anche a luce spenta?'],
              ['Continuità', 'A quadro spento: l’interruttore chiuso chiude davvero?'],
            ],
          },
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
            { id: 'a', text: '0 V: la lampada è spenta, quindi nel circuito non c’è tensione.' },
            { id: 'b', text: '230 V: da un lato arriva la fase, dall’altro il neutro attraverso la lampada.' },
            { id: 'c', text: '115 V: la tensione si divide a metà tra l’interruttore e la lampada.' },
          ],
          correct: 'b',
          why: 'Sul morsetto 1 c’è la fase; il morsetto 2, attraverso la lampada, è collegato al neutro. Tra i due ci sono quindi 230 V. Il morsetto 2 da solo non è pericoloso (verso il neutro legge 0 V, come hai visto nel punto luce interrotto): pericoloso è il morsetto 1, dove la fase arriva anche a luce spenta.',
        },
        {
          type: 'previsione',
          question: 'Devo cambiare la lampada. Che cosa faccio prima di toccare i fili?',
          options: [
            { id: 'a', text: 'Spengo l’interruttore: la lampada si spegne, quindi lì non c’è più tensione.' },
            { id: 'b', text: 'Tolgo tensione dal quadro e controllo con il multimetro che non ce ne sia.' },
            { id: 'c', text: 'Lavoro con una mano sola: così la corrente non mi attraversa il corpo.' },
          ],
          correct: 'b',
          why: 'L’interruttore spegne la lampada ma può lasciare la fase sul portalampada, e una mano sola non basta: la corrente può passare dalla mano ai piedi. Si toglie tensione dal quadro e si misura: solo uno 0 V letto con lo strumento dice che si può lavorare.',
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
      'Tensione (V) è la spinta, corrente (A) è quanto passa, potenza (W) è il lavoro fatto: più potenza vuol dire più corrente, e la corrente scalda i cavi.',
      'La tensione si misura a impianto acceso, per sapere fin dove arriva la fase; la continuità a impianto spento, per sapere se un filo o un interruttore è intero.',
      'Una lampada spenta non vuol dire niente tensione: con l’interruttore aperto, ai suoi morsetti ci sono 230 V.',
      'Per trovare un guasto si segue la fase con il puntale: dove la tensione sparisce, lì c’è l’interruzione.',
      'Prima di lavorare si toglie tensione dal quadro e si verifica con il multimetro che non ci sia.',
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
          title: 'Perché un relè',
          paras: [
            'Finora l’interruttore accendeva direttamente la lampada. Spesso però chi comanda e chi consuma sono lontani o diversi: un pulsante piccolo deve accendere un motore grande, un termostato a pochi volt deve accendere una caldaia a 230 V.',
            'Il relè risolve questo problema: un circuito piccolo, il comando, decide; un altro, quello che porta l’energia, esegue. Bobina e contatto non sono collegati da nessun filo, quindi i due circuiti possono avere tensioni diverse; nel gioco, per semplicità, prendono la fase dallo stesso quadro.',
            'È un’idea che ritroverai spesso: nel relè ad impulsi, nel contattore dei motori, nelle uscite del PLC.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Come funziona',
          paras: [
            'Il relè ha due parti. La bobina è un filo avvolto: quando riceve tensione diventa una calamita (si dice che è eccitata) e tira il contatto. Senza tensione la calamita si spegne e una molla riporta il contatto a riposo.',
            'Per la bobina vale quello che sai della lampada: è un carico, e per funzionare ha bisogno di fase e neutro. Il contatto invece è solo un interruttore: non ha tensione sua, la tensione per le lampade gliela porti tu.',
          ],
          warn: 'Il relè non dà corrente alle lampade: passa solo quella che porti al suo contatto.',
        },
        {
          type: 'pezzi',
          title: 'Il relè con contatto di scambio',
          focus: ['K'],
          paras: [
            'La bobina ha due morsetti, A1 e A2. Il contatto ne ha tre: 11 è il comune, dove entra la fase; 12 è collegato al comune quando la bobina è a riposo; 14 quando la bobina è eccitata.',
            'Il contatto 11-12, chiuso a riposo, si chiama NC (normalmente chiuso); 11-14, aperto a riposo, si chiama NA (normalmente aperto). Il comune tocca sempre uno dei due: è un contatto di scambio. In questo livello è lui il motivo del relè: con un solo comando accende una lampada o l’altra, come le spie di un quadro (verde a macchina ferma, rossa a macchina in moto). Un interruttore semplice non lo saprebbe fare.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché ogni filo',
          paras: [
            'Due circuiti, otto fili. Prima di guardare come si fa, ecco a che cosa serve ciascuno.',
          ],
          table: {
            head: ['Morsetto', 'Che cosa ci colleghi e perché'],
            rows: [
              ['A1', 'La fase, passando dall’interruttore: il comando sta sulla fase e decide quando la bobina si eccita.'],
              ['A2', 'Il neutro: la bobina è un carico, senza ritorno non si eccita e il relè non scatta mai.'],
              ['11', 'La fase: il contatto non ha tensione sua, senza questo filo nessuna lampada si accende.'],
              ['12', 'La lampada verde: chiuso a riposo, la verde dice «comando spento».'],
              ['14', 'La lampada rossa: chiuso a bobina eccitata, la rossa dice «comando acceso». Sul 12 si accenderebbe insieme alla verde.'],
              ['Lampade', 'L’altro morsetto al neutro: ogni lampada ha bisogno del suo giro, come nel primo livello.'],
            ],
          },
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
            { id: 'a', text: 'La rossa: la bobina è già collegata, quindi il contatto è sul 14.' },
            { id: 'b', text: 'La verde: a bobina spenta il comune 11 resta collegato al 12.' },
            { id: 'c', text: 'Tutte e due: la fase arriva al comune e da lì a tutte e due.' },
          ],
          correct: 'b',
          why: 'Con il comando aperto la bobina non riceve tensione: è a riposo, e a riposo il comune 11 è collegato al 12, il contatto NC. La verde è accesa. La rossa, sul 14, si accende solo quando la bobina è eccitata. Il comune non alimenta mai i due morsetti insieme.',
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
      'Il relè separa il comando dalla potenza: un circuito piccolo decide, un altro porta l’energia. Così un comando piccolo, lontano o a tensione più bassa può accendere un carico diverso.',
      'La bobina è un carico: per eccitarsi ha bisogno della fase, che arriva dal comando, e del neutro.',
      'Il contatto è solo un interruttore: la fase per le lampade gliela porti tu, sul comune 11.',
      'A riposo il comune tocca il 12 (NC), a bobina eccitata il 14 (NA): una sola bobina dà due segnali opposti.',
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
          title: 'Un cavo che si scalda',
          paras: [
            'Ogni filo che porta corrente si scalda un po’. Se la corrente è troppa si scalda troppo: l’isolante di plastica si rovina, può fondere, e dentro il muro può partire un cortocircuito o un incendio. Nessuno lo vede, finché non è tardi.',
            'Per questo ogni cavo ha una portata: la corrente massima che regge senza scaldarsi troppo. Dipende dalla sezione, cioè dallo spessore del rame in mm², e da come è posato. Un cavo da 1,5 mm² in un tubo nel muro regge circa 14,5 A (valore del gioco).',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Quanta corrente passa',
          paras: [
            'La corrente la decidono gli apparecchi accesi: corrente = potenza diviso tensione. Più apparecchi sulla stessa linea, più corrente nello stesso cavo.',
          ],
          table: {
            head: ['Sulla linea', 'Corrente nel cavo'],
            rows: [
              ['Una stufa', '2000 W diviso 230 V: circa 8,7 A. Il cavo regge 14,5 A: va bene.'],
              ['Due stufe', 'Circa 17,4 A: più di quanto regge il cavo, che si scalda.'],
            ],
          },
        },
        {
          type: 'pezzi',
          title: 'Due protezioni in una',
          focus: ['QM'],
          paras: [
            'Il nome dice le due parti. La parte termica è una lamina che si scalda con la corrente, come il cavo: se la corrente è un po’ troppa a lungo (il sovraccarico, per esempio troppi apparecchi sulla stessa linea), si piega e stacca; è lenta apposta, per non scattare a ogni piccolo picco. La parte magnetica stacca subito il cortocircuito, quando la corrente diventa enorme.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Quando scatta e quando no',
          paras: [
            'Sopra c’è un numero, la portata In, in ampere. Siccome la parte termica è lenta, sotto 1,13 volte In non scatta mai; sopra 1,45 volte In scatta (nella realtà in meno di un’ora, nel gioco in pochi secondi). In mezzo la norma, cioè le regole che gli elettricisti devono seguire, non dice che cosa deve fare.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'La regola dei tre numeri',
          paras: [
            'Il magnetotermico protegge il cavo, non l’apparecchio. Per sceglierlo servono tre numeri: la corrente che serve agli apparecchi (Ib), il numero scritto sull’interruttore (In), la corrente che regge il cavo (Iz). Devono stare in quest’ordine: Ib ≤ In ≤ Iz.',
            'Qui la linea deve reggere una stufa (8,7 A) e il cavo regge 14,5 A. Un magnetotermico da 10 A regge una stufa e scatta con due, prima che il cavo si scaldi. Uno da 16 A è più grande di quanto regge il cavo: con due stufe non scatta e il cavo scalda senza che nessuno lo sappia.',
          ],
          warn: 'Un interruttore da 16 A su un cavo da 1,5 mm² è uno degli errori più pericolosi: non scatta e il cavo si scalda.',
        },
        {
          type: 'spiegazione',
          title: 'Perché ogni filo',
          paras: [
            'Sul banco il magnetotermico protegge la linea delle due stufe. In alto si entra, in basso si esce.',
          ],
          table: {
            head: ['Morsetto', 'Che cosa ci colleghi e perché'],
            rows: [
              ['1 e N in alto', 'Fase e neutro dal quadro: tutta la linea passa da lui, e quando scatta stacca tutte e due.'],
              ['2 e N in basso', 'Le due stufe: sono sulla stessa linea e sullo stesso cavo, quindi le loro correnti si sommano.'],
              ['Interruttori', 'Ognuno accende la sua stufa: sulla fase, come ogni comando.'],
              ['Portata', '10 A: tra 8,7 e 14,5 A, fra i valori più usati in casa (6, 10, 16, 20 A), c’è solo il 10.'],
              ['Le prove', 'Una stufa: uso normale, non deve scattare. Due stufe: sovraccarico, deve scattare.'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: '«Mi salta sempre»',
          paras: [
            'È la frase che sentirai più spesso da un cliente. La tentazione è montare un magnetotermico più grande, così non salta più. È l’errore più pericoloso: il cavo resta quello di prima e nessuno lo protegge più.',
            'Un magnetotermico che scatta sta facendo il suo lavoro. Si cerca il perché: troppi apparecchi sulla stessa linea (si dividono le linee, o si rifà la linea con un cavo più grosso) oppure un guasto da trovare e riparare.',
          ],
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
            { id: 'a', text: 'Scatta subito: 17,4 A sono più dei 16 A scritti sull’interruttore.' },
            { id: 'b', text: 'Non scatta: 17,4 A sono pochi per lui, ma troppi per il cavo, che scalda.' },
            { id: 'c', text: 'Niente di grave: il cavo regge la stessa corrente del suo interruttore.' },
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
      'La corrente scalda i cavi: oltre la loro portata l’isolante si rovina e dentro il muro può partire un incendio.',
      'Il magnetotermico protegge il cavo: la parte termica stacca piano il sovraccarico, la parte magnetica stacca subito il cortocircuito.',
      'Regola dei tre numeri: corrente che serve ≤ portata dell’interruttore ≤ portata del cavo (Ib ≤ In ≤ Iz).',
      'Sotto 1,13 volte la sua portata non scatta mai: un 16 A su un cavo da 1,5 mm² lascia scaldare il cavo senza scattare.',
      'Se un magnetotermico salta sempre si cerca il perché: non si monta mai un interruttore più grande di quanto regge il cavo.',
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
          title: 'La corrente che scappa',
          paras: [
            'Normalmente la corrente fa il suo giro: esce dalla fase, attraversa l’apparecchio e torna tutta dal neutro. Se l’isolante di un apparecchio si rovina, una parte può scappare verso terra: è una dispersione. Se in quel momento qualcuno tocca l’involucro di metallo, la strada verso terra passa per il suo corpo.',
            'Il differenziale, quello che in casa molti chiamano salvavita, confronta di continuo la corrente che va con quella che torna. Se ne torna meno, una parte sta andando da un’altra parte: quando la differenza supera la sua soglia, stacca.',
          ],
        },
        {
          type: 'pezzi',
          title: 'La soglia di 30 mA',
          focus: ['D'],
          paras: [
            'Un milliampere (mA) è un millesimo di ampere. Nel corpo pochi mA si sentono appena; sopra una decina i muscoli si contraggono e si fatica a staccare la mano; qualche decina di mA che durano possono bloccare il respiro o il cuore. Per questo in casa il differenziale scatta da 30 mA e in una frazione di secondo: interrompe la corrente prima che diventi mortale.',
          ],
          warn: 'Una corrente di 30 mA attraverso il corpo è già pericolosa. Il differenziale serve proprio a interromperla in una frazione di secondo.',
        },
        {
          type: 'spiegazione',
          title: 'Quando scatta e quando no',
          paras: [
            'Un po’ di dispersione è normale negli apparecchi, sparsa nell’impianto e non attraverso una persona: per questo sotto 15 mA il differenziale non scatta. Tra 15 e 30 mA può scattare o no, la norma lo permette; da 30 mA in su scatta sempre. Il magnetotermico non se ne accorge, perché 30 mA sono nulla rispetto ai suoi 10 o 16 A: per questo in casa servono tutti e due.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il neutro deve passare dal differenziale',
          paras: [
            'Il differenziale confronta la corrente di fase con quella di neutro, ma solo se passano tutte e due da lui. Se il neutro di un apparecchio è preso prima del differenziale, la corrente esce da lui sulla fase ma rientra da un’altra parte: per lui è sparita, come se fosse andata a terra, e scatta appena si accende l’apparecchio.',
            'La terra e il differenziale lavorano insieme: la terra dà alla corrente di guasto una strada che non passa per le persone, il differenziale la vede e stacca.',
          ],
          table: {
            head: ['Morsetto', 'Che cosa ci colleghi e perché'],
            rows: [
              ['1 e N in alto', 'Fase e neutro dal quadro: deve vedere sia la corrente che va sia quella che torna.'],
              ['2', 'La fase verso lo scaldabagno, passando dal suo interruttore.'],
              ['N in basso', 'Il neutro dello scaldabagno: la corrente torna passando da lui. Preso dal quadro, scatta appena accendi.'],
              ['Prova', 'La dispersione la fai tu con il pannello dell’isolante. 10 mA, una piccola perdita: non deve scattare. 300 mA, un guasto vero: deve scattare subito.'],
            ],
          },
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
            { id: 'a', text: 'Scatta il magnetotermico: una corrente che va a terra è un guasto, e lui lo sente.' },
            { id: 'b', text: 'Scatta il differenziale: tra fase e neutro mancano 300 mA, dieci volte la soglia.' },
            { id: 'c', text: 'Non scatta niente: 300 mA sono meno di un ampere, troppo poco per le protezioni.' },
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
      'Una dispersione è corrente che scappa verso terra invece di tornare dal neutro, magari attraverso una persona.',
      'Il differenziale confronta la corrente che va (fase) con quella che torna (neutro): se ne manca, stacca. Protegge le persone.',
      'In casa la soglia è 30 mA, perché poche decine di mA nel corpo sono pericolose: non scatta sotto 15 mA, scatta da 30 mA in su.',
      'Il magnetotermico non sente le dispersioni: in casa servono tutti e due.',
      'Il neutro degli apparecchi deve uscire dal differenziale, altrimenti scatta anche senza guasto.',
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
          title: 'Una presa che si accende dalla porta',
          paras: [
            'Entri in camera e vuoi accendere, con l’interruttore vicino alla porta, sia la luce sia la lampada da tavolo attaccata alla presa. Senza una presa comandata dovresti attraversare la stanza al buio per accendere la lampada.',
            'Le prese normali sono collegate direttamente al quadro: hanno sempre tensione. La presa comandata invece riceve la fase dopo l’interruttore, proprio come la lampada: è alimentata solo quando l’interruttore è chiuso.',
            'Per questo la fase si divide a valle dell’interruttore, cioè dopo di lui, nel verso che va dal quadro agli apparecchi: un filo va alla presa, uno alla lampada. Il neutro non passa dall’interruttore.',
          ],
        },
        {
          type: 'pezzi',
          title: 'La presa: fase, neutro e terra',
          focus: ['P'],
          paras: [
            'La presa ha tre morsetti: L per la fase, N per il neutro, PE per la terra. La terra si collega sempre: se un apparecchio con l’involucro di metallo ha un guasto, la corrente va a terra e non in chi lo tocca.',
            'La fase va sempre su L e il neutro su N, anche se l’apparecchio funzionerebbe lo stesso: è la regola, così chi lavora dopo di te trova la fase sempre allo stesso posto.',
          ],
        },
        {
          type: 'pezzi',
          title: 'L’interruttore sulla fase',
          focus: ['S'],
          paras: [
            'L’interruttore apre o chiude un solo filo, la fase. Aperto, presa e lampada non hanno tensione; chiuso, sono alimentate tutte e due. Dal suo morsetto 2 partono due fili: uno per la presa, uno per la lampada.',
            'Se l’interruttore fosse sul neutro, la luce si spegnerebbe lo stesso, ma la fase resterebbe sulla presa e sul portalampada. Chi infila una spina o cambia la lampada pensando che sia tutto spento rischierebbe la scossa.',
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
            { id: 'a', text: 'Funziona lo stesso: una presa è collegata al quadro e ha sempre tensione.' },
            { id: 'b', text: 'Non funziona: la presa prende la fase dopo l’interruttore, che è aperto.' },
            { id: 'c', text: 'Scatta il quadro: si usa una presa mentre il suo interruttore è spento.' },
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
      'Una presa comandata riceve la fase dopo l’interruttore: si accende e si spegne insieme alla luce, mentre le prese normali hanno sempre tensione.',
      'Un solo interruttore comanda più apparecchi se sta sulla fase e la fase si divide dopo di lui.',
      'Il neutro va agli apparecchi senza passare dall’interruttore: un interruttore sul neutro lascia la fase sulla presa e sulla lampada spente.',
      'La presa ha L (fase), N (neutro) e PE (terra): la terra si collega sempre, e la fase va sempre su L, così chi lavora dopo la trova al suo posto.',
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
            'In un lungo corridoio con molte porte serve accendere e spegnere la stessa luce da molti punti. Con deviatori e invertitori si può, ma ogni punto in più vuol dire un invertitore in più e altri fili che corrono per tutto il corridoio.',
            'Con il relè ad impulsi basta un pulsante per ogni punto, tutti in parallelo. Aggiungere un punto è facile: un pulsante in più. Ogni pressione cambia lo stato della luce: accesa, spenta, accesa.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il pulsante',
          focus: ['P1'],
          paras: [
            'Il pulsante è un interruttore che torna a riposo da solo: il contatto tra i morsetti 3 e 4 è chiuso finché lo tieni premuto, poi una molla lo riapre. Dà solo un colpo, un impulso. Come ogni comando, sta sulla fase.',
            'Per questo non può ricordare se la luce è accesa o spenta: lo ricorda il relè.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il relè ad impulsi',
          focus: ['K'],
          paras: [
            'È un relè come quello che hai già visto: la bobina (A1-A2) è il comando, il contatto (1-2) porta la corrente alla lampada. La differenza è che a ogni impulso il contatto cambia stato e resta così, grazie a un meccanismo a scatto, come quello di una penna a scatto: un clic chiude, il clic dopo apre.',
            'Come in ogni relè, il contatto è solo un interruttore: la fase per la lampada gliela porti tu, sul morsetto 1.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Pulsanti in parallelo, mai in serie',
          paras: [
            'In parallelo basta un pulsante qualunque premuto perché la bobina riceva l’impulso. In serie servirebbero tutti premuti insieme: da soli non farebbero mai niente.',
          ],
          table: {
            head: ['Morsetto', 'Che cosa ci colleghi e perché'],
            rows: [
              ['Morsetti 3', 'Tutti insieme alla fase: ogni pulsante deve poter mandare l’impulso.'],
              ['Morsetti 4', 'Tutti insieme ad A1: qualunque pulsante premuto porta la fase alla bobina.'],
              ['A2', 'Il neutro: la bobina è un carico, senza ritorno il relè non cambia mai stato.'],
              ['1', 'La fase: il contatto non ha tensione sua.'],
              ['2', 'La lampada, con l’altro morsetto al neutro.'],
            ],
          },
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
            { id: 'a', text: 'Si spegne e resta spenta: il relè ha cambiato stato e lo ricorda.' },
            { id: 'b', text: 'Si spegne solo finché tengo premuto, poi torna accesa da sola.' },
            { id: 'c', text: 'Resta accesa: il pulsante è tornato a riposo e non è cambiato niente.' },
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
      'Con il relè ad impulsi una luce si comanda da quanti punti vuoi: basta un pulsante in più, senza fili che corrono per tutto il corridoio.',
      'Il pulsante dà solo un impulso e torna a riposo; a ricordare se la luce è accesa è il relè.',
      'Come in ogni relè, il contatto è solo un interruttore: la fase per la lampada gliela porti tu.',
      'I pulsanti si mettono in parallelo: ne basta uno. In serie servirebbero tutti premuti insieme e la luce non si accenderebbe mai.',
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

  'c21-tre-fasi': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Da una fase a tre fasi',
          paras: [
            'Una casa di solito riceve una sola fase e il neutro. Un’officina riceve quattro fili: tre fasi, L1, L2, L3, e il neutro. Ogni fase ha 230 V rispetto al neutro: lampade e prese vanno tra una fase e il neutro, come in casa.',
            'Tra due fasi invece ci sono 400 V. Le tre fasi sono come tre persone che spingono una ruota a turno: non spingono mai tutte nello stesso momento (si dice che sono sfasate). Per questo tra due fasi non si misurano 230 più 230, ma 400 V, circa 1,73 volte 230.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché tre fasi',
          paras: [
            'Il trifase serve ai motori e ai cavi. Il motore: con tre spinte a turno la sua forza non si spegne mai, e gira regolare.',
            'I cavi: più potenza vuol dire più corrente, e la corrente scalda i cavi. In trifase la potenza viaggia su tre fili e a 400 V: una macchina da 10 kW (10.000 W) chiede circa 14 A per fase; in monofase, cioè con una fase sola come in casa, ne chiederebbe 43 su un filo. Meno corrente, cavi più sottili.',
            'Nel gioco le tre fasi hanno tre colori: marrone, nero e grigio. Il neutro resta blu e la terra giallo-verde.',
          ],
          warn: 'Una lampada da 230 V collegata tra due fasi riceve 400 V e si brucia.',
        },
        {
          type: 'spiegazione',
          title: 'Perché ogni filo e ogni misura',
          paras: [
            'Due fili e due misure. Le misure sono quelle che fa l’elettricista quando arriva davanti a un quadro trifase, prima di collegarci qualcosa.',
          ],
          table: {
            head: ['Dove', 'Che cosa fai e perché'],
            rows: [
              ['L1', 'Un morsetto della lampada: la fase porta la tensione, come in casa.'],
              ['Neutro', 'L’altro morsetto: ogni carico ha bisogno di fase e neutro. Su L2 al posto del neutro la lampada riceve 400 V e si brucia.'],
              ['L1-N', 'Leggi 230 V: la fase arriva, e lampade e prese si possono alimentare. Con 0 V quella fase manca.'],
              ['L1-L2', 'Leggi 400 V: è la tensione dei motori. Tra due fasi il pericolo è più grande che in casa. Nel lavoro vero si misurano tutte le coppie: L1-L2, L2-L3, L1-L3.'],
            ],
          },
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'La fase L1 va a un morsetto della lampada.',
              'Il neutro va all’altro morsetto: 230 V, la lampada si accende.',
            ],
            power: 'Il quadro è alimentato: la lampada si accende.',
            controls: [],
          },
        },
        {
          type: 'previsione',
          question: 'Una lampada da 230 V viene collegata tra la fase L1 e la fase L2. Che cosa succede?',
          options: [
            { id: 'a', text: 'Si accende normalmente: ogni fase ha 230 V.' },
            { id: 'b', text: 'Si accende più debole: le due fasi si ostacolano.' },
            { id: 'c', text: 'Si brucia: tra due fasi ci sono 400 V, non 230.' },
          ],
          correct: 'c',
          why: 'Tra due fasi ci sono 400 V, quasi il doppio di quello che la lampada sopporta. Ogni fase ha 230 V solo rispetto al neutro: una lampada da 230 V va sempre tra una fase e il neutro.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.L1', to: ['L.A', 'L.B'], color: 'marrone', short: '1 Fase', title: 'La fase alla lampada', text: 'Dalla fase L1 del quadro a un morsetto della lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.A', 'L.B'], color: 'blu', short: '2 Neutro', title: 'Il neutro alla lampada', text: 'Dal NEUTRO del quadro all’altro morsetto della lampada.' },
      { kind: 'measure', between: ['Q.L1', 'Q.N'], mode: 'V', value: 230, live: true, short: '3 Fase-neutro', title: 'Misura 230 V', text: 'Dai corrente con la levetta del quadro, tocca Multimetro, poi L1 (rosso) e NEUTRO (nero): leggi 230 V.' },
      { kind: 'measure', between: ['Q.L1', 'Q.L2'], mode: 'V', value: 400, live: true, short: '4 Fase-fase', title: 'Misura 400 V', text: 'Metti i puntali su L1 e su L2: leggi 400 V.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'In officina arrivano tre fasi e il neutro: tra una fase e il neutro 230 V, tra due fasi 400 V, perché le fasi spingono a turno.',
      'Un carico da 230 V va tra una fase e il neutro: tra due fasi riceve 400 V e si brucia.',
      'Il trifase serve ai motori, che hanno sempre una spinta, e ai cavi: la stessa potenza con meno corrente per filo.',
      'Le tre fasi hanno tre colori, marrone, nero e grigio, per riconoscerle a colpo d’occhio.',
    ],
    fault: {
      say: 'La lampada è già collegata e non si accende più. Guarda dove sono collegati i suoi morsetti e misura.',
      wires: [['Q.L1', 'L.A', 'marrone'], ['Q.L2', 'L.B', 'nero']],
      diagnosis: {
        question: 'Perché la lampada si è bruciata?',
        options: [
          { id: 'a', text: 'È collegata tra due fasi e riceve 400 V.' },
          { id: 'b', text: 'Manca il filo di terra.' },
          { id: 'c', text: 'Il neutro è troppo lungo.' },
        ],
        correct: 'a',
        why: 'I suoi due morsetti sono su L1 e L2: tra due fasi ci sono 400 V, e la lampada è da 230 V. Va collegata tra una fase e il neutro.',
      },
      fixSay: 'Sposta uno dei due fili sul neutro: la lampada deve stare tra L1 e il neutro. Poi premi Verifica.',
    },
  },

  'c22-teleruttore': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Un comando piccolo per una potenza grande',
          paras: [
            'Un motore trifase assorbe molta corrente a 400 V. Un pulsante sulla macchina non la regge, e non si vuole che chi lavora abbia sotto le dita i 400 V. Spesso poi il quadro è lontano dalla macchina, e la si deve comandare da dove si sta.',
            'Si usa il teleruttore, detto anche contattore: due nomi della stessa cosa. È un relè grande, come quello del Modulo 2: una bobina che diventa calamita e tre contatti di potenza che chiude tutti insieme. Il pulsante porta solo la piccola corrente della bobina.',
          ],
        },
        {
          type: 'pezzi',
          title: 'La bobina e i contatti',
          focus: ['KM'],
          paras: [
            'A1 e A2 sono la bobina. Qui è da 230 V e va tra una fase e il neutro, perché è un carico come una lampada: tra due fasi riceverebbe 400 V e si brucerebbe. Nelle macchine vere il comando è spesso a 24 V, preso da un trasformatore come quello del campanello.',
            'I morsetti 1-2, 3-4, 5-6 sono i contatti di potenza: il contatto è solo un interruttore, la tensione gliela porti tu dal salvamotore. Il 13-14 è un contatto ausiliario, piccolo, che servirà nel prossimo livello.',
          ],
          warn: 'Comando e potenza sono due circuiti separati: nel gioco i fili del comando sono rossi, per riconoscerli a colpo d’occhio.',
        },
        {
          type: 'spiegazione',
          title: 'Si lavora senza tensione',
          paras: [
            'Come nel motore trifase, l’impianto ha un sezionamento, cioè un interruttore che toglie la tensione a tutto quello che viene dopo: il salvamotore. Prima di collegare qualunque filo lo si apre, poi si cabla, e solo alla fine lo si chiude per provare.',
            'Collegare fili con il sezionamento chiuso, cioè con i morsetti in tensione, è pericoloso: nel gioco vale una stella di sicurezza in meno.',
          ],
          warn: 'Il lato di ingresso del salvamotore resta sempre in tensione: collegarvi i fili del quadro è normale, quello che conta è tenere aperto il sezionamento.',
        },
        {
          type: 'spiegazione',
          title: 'Perché ogni filo',
          paras: [
            'Prima la potenza, poi il comando. Ecco perché ogni filo va proprio lì.',
          ],
          table: {
            head: ['Morsetto', 'Che cosa ci colleghi e perché'],
            rows: [
              ['KM 1, 3, 5', 'I morsetti 2, 4, 6 del salvamotore: la potenza passa prima dalla protezione, poi dai contatti che accendono il motore.'],
              ['KM 2, 4, 6', 'U, V, W in ordine, come nel livello del motore: il motore gira in avanti. La terra PE alla carcassa, come sempre.'],
              ['Pulsante 3', 'Una fase presa a valle del salvamotore, dal morsetto 2: aprendo il salvamotore si spegne anche il comando. Presa a monte, il comando resterebbe in tensione a salvamotore aperto. Va bene una fase qualunque: il comando sta sulla fase.'],
              ['Pulsante 4', 'A1: premendo, la fase arriva alla bobina. I morsetti 3-4 sono un contatto NA: chiude solo finché premi.'],
              ['A2', 'Il neutro: la bobina è un carico, senza ritorno non si eccita. Su un’altra fase riceverebbe 400 V e si brucerebbe.'],
            ],
          },
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'La fase L1 entra nel salvamotore, morsetto 1.',
              'La fase L2 entra nel salvamotore, morsetto 3.',
              'La fase L3 entra nel salvamotore, morsetto 5.',
              'Dal salvamotore al primo contatto di potenza del teleruttore.',
              'Dal salvamotore al secondo contatto di potenza.',
              'Dal salvamotore al terzo contatto di potenza.',
              'Dal teleruttore al morsetto U del motore.',
              'Dal teleruttore al morsetto V del motore.',
              'Dal teleruttore al morsetto W del motore.',
              'La terra del quadro al motore.',
              'Il comando: una fase a valle del salvamotore va al pulsante.',
              'Dal pulsante alla bobina A1.',
              'La bobina A2 va al neutro.',
            ],
            power: 'Il salvamotore è aperto: tutto a valle è senza tensione.',
            controls: ['Salvamotore chiuso e pulsante premuto: il teleruttore chiude e il motore gira.'],
          },
        },
        {
          type: 'previsione',
          question: 'La bobina di un teleruttore da 230 V viene collegata tra due fasi (400 V). Che cosa succede?',
          options: [
            { id: 'a', text: 'Il teleruttore chiude e funziona normalmente.' },
            { id: 'b', text: 'La bobina riceve troppa tensione e si brucia.' },
            { id: 'c', text: 'Il teleruttore non chiude, ma non si rovina.' },
          ],
          correct: 'b',
          why: 'La bobina è fatta per 230 V. Con 400 V assorbe molta più corrente e si brucia. Va collegata tra una fase e il neutro.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.L1', to: ['QM.1'], color: 'marrone', short: '1 Linea', title: 'Le fasi al salvamotore', text: 'Con il salvamotore aperto, porta L1, L2 e L3 ai morsetti in alto del salvamotore: 1, 3 e 5.' },
      { kind: 'wire', from: 'QM.2', to: ['KM.1'], color: 'marrone', short: '2 Contatti', title: 'Ai contatti di potenza', text: 'Dai morsetti 2, 4, 6 del salvamotore ai morsetti 1, 3, 5 del teleruttore.' },
      { kind: 'wire', from: 'KM.2', to: ['M.U'], color: 'marrone', short: '3 Motore', title: 'Al motore', text: 'Dai morsetti 2, 4, 6 del teleruttore ai morsetti U, V, W del motore.' },
      { kind: 'wire', from: 'M.PE', to: ['Q.PE'], color: 'gv', short: '4 Terra', title: 'La terra del motore', text: 'Dal morsetto PE del motore alla terra del quadro.' },
      { kind: 'wire', from: 'QM.2', to: ['SB1.3'], color: 'rosso', short: '5 Comando', title: 'Il comando al pulsante', text: 'Una fase a valle del salvamotore (morsetto 2) al morsetto 3 del pulsante, in rosso.' },
      { kind: 'wire', from: 'SB1.4', to: ['KM.A1'], color: 'rosso', short: '6 Bobina', title: 'Dal pulsante alla bobina', text: 'Dal morsetto 4 del pulsante al morsetto A1 della bobina.' },
      { kind: 'wire', from: 'KM.A2', to: ['Q.N'], color: 'blu', short: '7 Neutro', title: 'La bobina al neutro', text: 'Dal morsetto A2 della bobina al neutro.' },
      { kind: 'control', id: 'SB1', short: '8 Prova', title: 'Prova il comando', text: 'Chiudi il salvamotore e tieni premuto Marcia: il motore gira. Rilascia: si ferma.' },
      { kind: 'verify', short: '9 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il teleruttore (o contattore) è un relè grande: il pulsante porta solo la corrente della bobina, i contatti di potenza portano quella del motore.',
      'La bobina è un carico: va tra una fase e il neutro; tra due fasi riceve 400 V e si brucia.',
      'Il comando prende la fase a valle del salvamotore: aprendolo si spegne tutto, potenza e comando.',
      'Così il motore gira solo finché tieni premuto: nel prossimo livello un contatto lo terrà in marcia.',
      'Si cabla con il salvamotore aperto: collegare fili in tensione è pericoloso.',
    ],
    fault: {
      say: 'Il teleruttore è già cablato, ma tenendo premuto il pulsante il motore non parte. Guarda dove è collegata la bobina.',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
        ['KM.2', 'M.U', 'marrone'], ['KM.4', 'M.V', 'nero'], ['KM.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
        ['QM.2', 'SB1.3', 'rosso'], ['SB1.4', 'KM.A1', 'rosso'], ['KM.A2', 'QM.4', 'rosso'],
      ],
      diagnosis: {
        question: 'Perché il motore non parte?',
        options: [
          { id: 'a', text: 'La bobina è collegata tra due fasi: riceve 400 V e si è bruciata.' },
          { id: 'b', text: 'Il motore non ha la terra.' },
          { id: 'c', text: 'Il pulsante è un contatto normalmente chiuso.' },
        ],
        correct: 'a',
        why: 'Il morsetto A2 della bobina è su una fase invece che sul neutro: la bobina è tra due fasi, 400 V, e si brucia. L’altro capo della bobina va al neutro.',
      },
      fixSay: 'Porta A2 della bobina al neutro, con il salvamotore aperto. Poi premi Verifica.',
    },
  },

  'c12-motore': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Il motore delle macchine',
          paras: [
            'In un’officina quasi tutto quello che si muove ha un motore trifase: nastri, pompe, ventilatori, trapani, compressori. Lavora a 400 V, tra le fasi.',
            'Dentro ci sono tre avvolgimenti, cioè bobine di filo di rame, una per fase. Ricevono la tensione a turno e diventano calamite a turno: è come una calamita che gira, il campo magnetico rotante, e si porta dietro il rotore, la parte che gira con l’albero.',
            'Non serve il neutro: la corrente che arriva da una fase torna dalle altre due. Il giro della corrente c’è, ma tra le fasi.',
          ],
          warn: 'A 400 V gli errori sono più pericolosi. Si cabla sempre senza tensione, con il salvamotore aperto.',
        },
        {
          type: 'pezzi',
          title: 'Il salvamotore',
          focus: ['QM'],
          paras: [
            'Il salvamotore è l’interruttore del motore. Ha tre poli, uno per fase: tre interruttori che si aprono e si chiudono insieme. In alto entrano le fasi dal quadro (1, 3, 5), in basso escono verso il motore (2, 4, 6). Il lato del quadro si dice a monte, quello del motore a valle.',
            'Come il magnetotermico protegge il cavo, il salvamotore protegge il motore e i suoi fili: scatta se la corrente è troppo alta. La levetta su vuol dire chiuso, giù aperto.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il motore',
          focus: ['M'],
          paras: [
            'Il motore ha tre morsetti per le fasi, U, V e W, e il morsetto PE per la terra. La terra collega la carcassa, l’involucro di metallo: se un avvolgimento tocca la carcassa, la corrente va a terra e non in chi la tocca.',
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
          table: {
            head: ['Collegamento', 'Senso'],
            rows: [
              ['L1-U, L2-V, L3-W', 'In avanti: è l’ordine giusto.'],
              ['L1-U, L3-V, L2-W', 'All’indietro: due fasi scambiate, il campo gira al contrario.'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Perché ogni filo',
          paras: [
            'Tre gruppi di fili e una levetta. Ecco perché ognuno va proprio lì.',
          ],
          table: {
            head: ['Morsetto', 'Che cosa ci colleghi e perché'],
            rows: [
              ['1, 3, 5', 'Le tre fasi del quadro: la rete entra nel salvamotore, così aprendolo tutto quello che viene dopo resta senza tensione.'],
              ['2, 4, 6', 'U, V, W del motore, nello stesso ordine: il motore gira in avanti. Con due fasi scambiate girerebbe al contrario.'],
              ['PE', 'La terra alla carcassa: se un avvolgimento la tocca, la corrente va a terra e non nella persona che tocca il motore.'],
              ['Levetta', 'Si chiude per ultima, solo per provare: prima si cabla senza tensione.'],
            ],
          },
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
          type: 'spiegazione',
          title: 'Il salvamotore e il lavoro senza tensione',
          paras: [
            'Il salvamotore parte aperto: lascialo aperto mentre colleghi i fili, e chiudilo solo alla fine per provare. Collegare fili con i morsetti in tensione è pericoloso, e nel gioco vale una stella di sicurezza in meno.',
            'Se il motore riceve solo due delle tre fasi non gira: ronza, cioè fa un rumore sordo, e si scalda. Anche per questo il salvamotore interrompe tutte e tre le fasi insieme.',
          ],
          warn: 'Da aperto il salvamotore spegne solo quello che c’è a valle: i fili in basso e il motore. I morsetti in alto arrivano dal quadro e restano in tensione: per lavorarci si apre l’interruttore del quadro, a monte.',
        },
        {
          type: 'previsione',
          question: 'Scambio due delle tre fasi sui morsetti del motore. Che cosa succede?',
          options: [
            { id: 'a', text: 'Il motore gira, ma al contrario: il campo gira nell’altro verso.' },
            { id: 'b', text: 'Il motore non parte: le fasi non sono più nell’ordine giusto.' },
            { id: 'c', text: 'Il salvamotore scatta: due fasi scambiate fanno un cortocircuito.' },
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
      'Il motore trifase usa le tre fasi e la terra, non il neutro: la corrente di una fase torna dalle altre due.',
      'Il salvamotore stacca tutte e tre le fasi insieme, perché con due sole il motore ronza e si scalda.',
      'Aperto il salvamotore, a valle è tutto senza tensione; i morsetti in alto, che vengono dal quadro, restano in tensione.',
      'La terra va alla carcassa: se un avvolgimento la tocca, la corrente va a terra e non nella persona.',
      'Scambiando due fasi il motore gira al contrario: utile per andare avanti e indietro, un guasto se capita per errore.',
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
            'Con il teleruttore il motore girava solo finché tenevi premuto il pulsante. Una macchina vera invece parte con un colpo su Marcia e si ferma con un colpo su Arresto, e una spia dice anche da lontano che è in marcia.',
            'La potenza è quella che conosci: tre fasi, salvamotore, contattore, motore. Il comando alimenta la bobina e decide quando il contattore si chiude: pochi fili sottili, pulsanti piccoli e sicuri, in rosso. Il contatto è solo un interruttore: la tensione gliela porti tu.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il contattore',
          focus: ['KM'],
          paras: [
            'La bobina è tra A1 e A2. Se è alimentata, i tre poli di potenza (1-2, 3-4, 5-6) si chiudono e il motore parte.',
            'Il contattore ha anche un contatto ausiliario NA, 13-14: si chiude insieme ai poli di potenza. I numeri lo dicono: i contatti che finiscono in 3-4 sono NA, quelli in 1-2 sono NC. È lui che fa l’autoritenuta.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Marcia e arresto',
          focus: ['SB0', 'SB1'],
          paras: [
            'Marcia è normalmente aperto (NA, morsetti 3-4): chiude solo finché lo tieni premuto. Arresto è normalmente chiuso (NC, morsetti 1-2): a riposo lascia passare la fase, premuto la interrompe. «Normalmente» vuol dire a riposo, quando nessuno lo tocca.',
            'NA e NC si scelgono pensando a che cosa succede se un filo si stacca. Con l’arresto NC un filo staccato apre il comando e il motore si ferma. Con un arresto NA il filo staccato non si vedrebbe, finché qualcuno preme Arresto e il motore non si ferma.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'L’autoritenuta',
          paras: [
            'Il pulsante di marcia alimenta la bobina solo finché lo premi. Per questo il 13-14 va in parallelo al pulsante: due strade per la fase, ne basta una chiusa.',
            'Premi Marcia: la bobina si eccita e chiude il 13-14. Rilasci: la fase passa dal 13-14 e il contattore si tiene da solo, è l’autoritenuta. Come nel relè ad impulsi, a ricordare è il contattore.',
            'Con Arresto, o se manca la corrente, la bobina si diseccita (resta senza tensione) e il 13-14 si apre: il motore resta fermo anche quando la corrente torna. È voluto: una macchina che riparte da sola può ferire chi la crede spenta.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché ogni filo del comando',
          paras: [
            'La potenza è come nel livello del teleruttore. Il comando ha più fili: ecco perché ognuno va lì.',
          ],
          table: {
            head: ['Morsetto', 'Che cosa ci colleghi e perché'],
            rows: [
              ['Arresto 1', 'La fase dal morsetto 2 del salvamotore: aprendolo si spegne anche il comando. L’arresto è il primo, così interrompe tutte le strade che vengono dopo: premuto insieme a Marcia, vince lui.'],
              ['Marcia 3', 'Il morsetto 2 dell’arresto: la fase arriva alla marcia solo se l’arresto è chiuso.'],
              ['Marcia 4', 'A1: premendo Marcia la bobina si eccita. A2 va al neutro: la bobina è un carico.'],
              ['13 e 14', 'Ai morsetti 3 e 4 della marcia, in parallelo: tengono la bobina quando rilasci. Se il 13 prendesse la fase prima dell’arresto, lo scavalcherebbe e Arresto non fermerebbe più il motore.'],
              ['Spia', 'Tra A1 e il neutro, accanto alla bobina: si accende proprio quando la bobina è alimentata, cioè quando il motore è in marcia.'],
            ],
          },
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
            { id: 'a', text: 'Niente: il contattore è già chiuso e il motore continua a girare.' },
            { id: 'b', text: 'Il motore si ferma: un secondo comando di marcia lo spegne.' },
            { id: 'c', text: 'Il salvamotore scatta: la bobina riceve corrente due volte.' },
          ],
          correct: 'a',
          why: 'Il contattore è già chiuso e la bobina è già alimentata dal contatto di autoritenuta. Premere Marcia ancora non cambia nulla.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'control', id: 'QM', short: '0 Sezionamento', title: 'Apri il salvamotore', text: 'Il salvamotore parte chiuso: aprilo toccando la levetta, così i morsetti a valle sono senza tensione mentre cabli. Lo richiudi solo alla fine, per provare.' },
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
      'Il comando alimenta la bobina, la potenza porta le tre fasi al motore: il pulsante non porta mai la corrente del motore.',
      'Arresto è NC e Marcia NA: se si stacca un filo dell’arresto il motore si ferma, invece di non fermarsi più.',
      'L’autoritenuta è il contatto 13-14 in parallelo alla marcia: il pulsante dà l’impulso, a ricordare è il contattore.',
      'L’arresto sta prima della marcia e dell’autoritenuta: le interrompe tutte e due, e Arresto vince sempre.',
      'Se manca la corrente il motore si ferma e, quando torna, non riparte da solo: serve un nuovo Marcia.',
    ],
    fault: {
      open: ['QM'],
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
            'Un nastro con un pacco incastrato, una pompa con un cuscinetto duro: il motore fa più fatica e per minuti assorbe più corrente del normale. È il sovraccarico. Gli avvolgimenti si scaldano, l’isolante dei loro fili si rovina e alla fine il motore si brucia.',
            'Il salvamotore, a monte, interviene in una frazione di secondo sul cortocircuito. Per il sovraccarico c’è il relè termico: come la parte termica del magnetotermico, si scalda con la corrente del motore e scatta dopo un po’. È lento apposta: all’avvio il motore chiede per un attimo molta corrente, e lì non deve scattare.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il relè termico',
          focus: ['FR'],
          paras: [
            'Il termico si aggancia sotto il contattore. I suoi tre poli (1-2, 3-4, 5-6) stanno in serie al motore, tra contattore e motore: deve sentire tutta la corrente del motore, quindi sta dove passa.',
            'Il contatto 95-96 è normalmente chiuso e va nel comando. Il termico non apre la potenza: quando scatta apre il 95-96 e ferma il motore attraverso il contattore. Scatta anche se manca una fase, perché il motore assorbe di più dalle altre due.',
            'Esistono salvamotori che fanno anche da termico: qui i due compiti sono divisi, come in molti quadri.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Come ferma il motore',
          paras: [
            'Il 95-96 sta in serie al comando prima dell’arresto, come l’arresto sta prima della marcia: così interrompe tutte le strade, anche l’autoritenuta. Se il termico scatta la bobina perde la tensione, il contattore si apre e il motore si ferma.',
            'Il termico non si riarma da solo: la macchina non deve ripartire con il guasto ancora lì. Si cerca la causa (il pacco incastrato, il nastro troppo carico), si lascia raffreddare il motore, poi si preme Reset e si dà un nuovo comando di marcia.',
          ],
          table: {
            head: ['Morsetto', 'Che cosa ci colleghi e perché'],
            rows: [
              ['1, 3, 5', 'I morsetti 2, 4, 6 del contattore: la corrente del motore entra nel termico.'],
              ['2, 4, 6', 'U, V, W del motore, in ordine: il termico sente tutta la corrente che il motore assorbe.'],
              ['95', 'La fase del comando, dal morsetto 2 del salvamotore: il termico è il primo contatto del comando.'],
              ['96', 'Il morsetto 1 dell’arresto: il comando continua come nel livello di marcia e arresto.'],
            ],
          },
          warn: 'Il termico ferma il motore tramite il comando. Se il contatto 95-96 non è collegato nel comando, il termico scatta ma il motore continua a girare e si brucia.',
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
            { id: 'a', text: 'Il motore parte: il termico si è già raffreddato.' },
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
      { kind: 'control', id: 'QM', short: '0 Sezionamento', title: 'Apri il salvamotore', text: 'Il salvamotore parte chiuso: aprilo toccando la levetta, così i morsetti a valle sono senza tensione mentre cabli. Lo richiudi solo alla fine, per provare.' },
      { kind: 'wire', from: 'KM.2', to: ['FR.1'], color: 'marrone', short: '1 Potenza', title: 'Il termico in serie al motore', text: 'Dai morsetti 2, 4 e 6 del contattore ai morsetti 1, 3 e 5 del termico; dai morsetti 2, 4 e 6 del termico a U, V e W.' },
      { kind: 'wire', from: 'QM.2', to: ['FR.95'], color: 'rosso', short: '2 Contatto 95', title: 'Il comando passa dal termico', text: 'Dal morsetto 2 del salvamotore al morsetto 95 del termico.' },
      { kind: 'wire', from: 'FR.96', to: ['SB0.1'], color: 'rosso', short: '3 Contatto 96', title: 'Dal termico all’arresto', text: 'Dal morsetto 96 del termico al morsetto 1 del pulsante di arresto.' },
      { kind: 'control', id: 'SB1', short: '4 Marcia', title: 'Prova la marcia', text: 'Il resto è come nel livello precedente. Premi Marcia e rilascia.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla l’impianto', text: 'Usa il pulsante sotto la scena per simulare un sovraccarico, poi premi Verifica.' },
    ],
    summary: [
      'Il termico protegge il motore dal sovraccarico, che è lento: si scalda come il motore e scatta dopo un po’, ma non all’avvio. Il cortocircuito, che è subito, tocca al salvamotore.',
      'I poli del termico sono in serie al motore, perché deve sentirne tutta la corrente.',
      'Il termico ferma il motore attraverso il comando: il 95-96 in serie, prima dell’arresto, toglie tensione alla bobina. Fuori dal comando, il termico scatta e il motore gira lo stesso.',
      'Non si riarma da solo: prima si trova la causa del sovraccarico, poi Reset e un nuovo Marcia.',
    ],
    fault: {
      open: ['QM'],
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
            'Un nastro che deve anche riportare indietro i pacchi, un cancello che si apre e si chiude, un carroponte che va a destra e a sinistra: lo stesso motore deve girare nei due sensi, comandato da due pulsanti.',
            'Per invertire il senso di un motore trifase basta scambiare due fasi. Per farlo con un comando si usano due contattori (negli schemi la sigla dei contattori è KM): KM1 collega il motore in modo normale, KM2 con due fasi scambiate. Con Avanti si chiude KM1, con Indietro KM2.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Due contattori',
          focus: ['KM1', 'KM2'],
          paras: [
            'I poli di potenza dei due contattori sono collegati agli stessi morsetti del salvamotore. In uscita KM2 scambia due fasi: i suoi morsetti 2 e 6 vanno a W e a U, quindi L1 e L3 si scambiano. Due fasi qualunque andrebbero bene: conta che KM2 ne scambi due e KM1 nessuna.',
            'Ogni contattore ha il suo contatto di autoritenuta, 13-14 (NA), e un contatto 21-22, NC: finisce in 1-2, come l’arresto, e si apre quando il contattore si chiude. Serve per l’interblocco.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'L’interblocco',
          paras: [
            'Se KM1 e KM2 si chiudessero insieme, sui morsetti del motore L1 e L3 si toccherebbero: un cortocircuito tra due fasi. Il salvamotore scatterebbe in una frazione di secondo, ma in quel tempo passerebbe una corrente enorme: scintille, contatti bruciati o incollati, un quadro da riparare. Meglio che non possa succedere.',
            'Interblocco vuol dire blocco reciproco: la bobina di KM1 passa dal 21-22 di KM2, quella di KM2 dal 21-22 di KM1. Quando uno è chiuso il suo contatto NC è aperto, e l’altro non può chiudersi.',
          ],
          warn: 'Senza interblocco il circuito sembra funzionare, ma premendo le due marce insieme si ha un cortocircuito.',
        },
        {
          type: 'spiegazione',
          title: 'Perché ogni filo',
          paras: [
            'Qui i passi sono pochi e i fili tanti. Ecco la ragione di ogni gruppo.',
          ],
          table: {
            head: ['Dove', 'Che cosa ci colleghi e perché'],
            rows: [
              ['KM1, KM2 in', 'Tutti e due ai morsetti 2, 4, 6 del salvamotore: i due contattori prendono la stessa rete.'],
              ['KM1 out', 'U, V, W in ordine: il senso Avanti.'],
              ['KM2 out', '2 a W, 4 a V, 6 a U: due fasi scambiate, il senso Indietro. Senza scambio i due pulsanti farebbero girare il motore nello stesso senso.'],
              ['Arresto', 'Il primo del comando, prima di Avanti e di Indietro: un solo Arresto ferma tutti e due i sensi.'],
              ['13-14', 'Ogni contattore il suo, in parallelo al suo pulsante: KM1 su Avanti, KM2 su Indietro.'],
              ['21-22', 'Ognuno nel comando dell’altro, dopo il pulsante e prima della bobina: KM1 chiuso apre la strada di KM2, e il contrario.'],
              ['PE, A2', 'La terra al motore e il neutro alle due bobine, come sempre.'],
            ],
          },
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
            { id: 'a', text: 'Il motore inverte subito: KM2 si chiude e KM1 si apre da solo.' },
            { id: 'b', text: 'Non cambia nulla: KM2 non può chiudersi finché KM1 è chiuso.' },
            { id: 'c', text: 'Il salvamotore scatta: i due contattori si chiudono insieme.' },
          ],
          correct: 'b',
          why: 'Il contatto NC di KM1 è aperto finché KM1 è chiuso: la bobina di KM2 non riceve corrente. Per invertire bisogna prima premere Arresto. Va bene così: invertire un motore lanciato vuol dire frenarlo di colpo, con una corrente fortissima e uno strappo sulla macchina.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'control', id: 'QM', short: '0 Sezionamento', title: 'Apri il salvamotore', text: 'Il salvamotore parte chiuso: aprilo toccando la levetta, così i morsetti a valle sono senza tensione mentre cabli. Lo richiudi solo alla fine, per provare.' },
      { kind: 'wire', from: 'KM1.2', to: ['M.U'], color: 'marrone', short: '1 Avanti', title: 'KM1 in ordine', text: 'KM1 collega il motore con le fasi in ordine.' },
      { kind: 'wire', from: 'KM2.2', to: ['M.W'], color: 'marrone', short: '2 Indietro', title: 'KM2 con due fasi scambiate', text: 'KM2 collega il motore con due fasi scambiate.' },
      { kind: 'wire', from: 'SB1.4', to: ['KM2.21'], color: 'rosso', short: '3 Interblocco', title: 'L’interblocco', text: 'Le bobine passano dai contatti NC 21-22 dell’altro contattore.' },
      { kind: 'verify', short: '4 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Scambiando due fasi il motore gira al contrario: KM1 le collega in ordine, KM2 con due fasi scambiate.',
      'KM1 e KM2 chiusi insieme mettono due fasi in cortocircuito: per questo non devono chiudersi mai insieme.',
      'L’interblocco mette il contatto NC 21-22 di ogni contattore nel comando dell’altro: chi è chiuso blocca l’altro.',
      'Per invertire si preme prima Arresto: invertire un motore lanciato lo frena di colpo e sforza la macchina.',
    ],
    fault: {
      open: ['QM'],
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
            'In un magazzino il nastro porta i pacchi fino al banco dove l’operatore li prende. Deve fermarsi da solo quando il pacco arriva in fondo, e chiunque deve poterlo fermare subito se qualcosa va storto: una mano presa, un pacco che cade.',
            'Per questo, oltre a motore, contattore, marcia, arresto e termico, ha due dispositivi di sicurezza: il pulsante di emergenza e il finecorsa. La potenza è quella che conosci. Il comando mette in serie tutti i contatti che devono poter fermare il nastro.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Emergenza e finecorsa',
          focus: ['SBE', 'FC'],
          paras: [
            'Il pulsante di emergenza è un fungo rosso su fondo giallo, grande: si preme con il palmo. Ha un contatto NC in serie al comando. Premuto si blocca aperto e va sbloccato a mano: così nessuno riavvia il nastro mentre il pericolo c’è ancora. L’arresto ferma il lavoro, il fungo ferma un pericolo.',
            'Il finecorsa è un contatto che il pacco schiaccia quando arriva in fondo. Si usa il suo contatto NC (1-2): il pacco lo apre e il nastro si ferma. Finché il pacco è lì, Marcia non fa partire il nastro. Tolto il pacco il contatto si richiude, e il nastro riparte con un nuovo Marcia.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché i contatti NC',
          paras: [
            'NA e NC si scelgono pensando a che cosa succede se un filo si stacca. Un contatto NC in serie al comando ferma la macchina anche quando si stacca un suo filo: un guasto porta alla fermata, non alla marcia.',
            'Per questo emergenza, arresto, termico e finecorsa sono tutti contatti NC in serie: ne basta uno aperto. Dopo l’emergenza il nastro non riparte da solo: serve un nuovo comando di marcia.',
          ],
          warn: 'Con il finecorsa collegato al contatto normalmente aperto il comando è interrotto all’inizio: il nastro non parte.',
        },
        {
          type: 'spiegazione',
          title: 'Perché ogni contatto sta lì',
          paras: [
            'Il comando è una fila di contatti, nell’ordine in cui li incontra la fase. Un contatto che ferma può stare prima del parallelo tra marcia e autoritenuta (termico, fungo, arresto) o dopo, davanti alla bobina (finecorsa), mai dentro: così li interrompe tutti e due. L’ordine tra termico, fungo e arresto è un’abitudine: le protezioni per prime.',
          ],
          table: {
            head: ['Contatto', 'Perché sta lì'],
            rows: [
              ['95-96', 'Il primo, dal morsetto 2 del salvamotore: il termico ferma il motore in sovraccarico.'],
              ['Fungo', 'Dopo il termico: premuto apre il comando, il contattore si apre e toglie le tre fasi al motore.'],
              ['Arresto', 'Dopo il fungo: lo stop di tutti i giorni.'],
              ['Marcia, 13-14', 'In parallelo, come nel livello di marcia e arresto: uno avvia, l’altro tiene.'],
              ['Finecorsa', 'Dopo la marcia, davanti alla bobina: interrompe sia la marcia sia l’autoritenuta.'],
            ],
          },
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
            { id: 'a', text: 'Riparte da solo: il contatto del fungo si è richiuso.' },
            { id: 'b', text: 'Resta fermo finché qualcuno non preme di nuovo Marcia.' },
            { id: 'c', text: 'Scatta il termico: il motore riparte e assorbe troppo.' },
          ],
          correct: 'b',
          why: 'Premendo il fungo il suo contatto si apre: la bobina perde corrente e l’autoritenuta 13-14 si apre. Sbloccando il fungo il contatto si richiude, ma il circuito resta aperto finché non premi Marcia: una macchina non deve ripartire da sola dopo un’emergenza.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'control', id: 'QM', short: '0 Sezionamento', title: 'Apri il salvamotore', text: 'Il salvamotore parte chiuso: aprilo toccando la levetta, così i morsetti a valle sono senza tensione mentre cabli. Lo richiudi solo alla fine, per provare.' },
      { kind: 'wire', from: 'FR.96', to: ['SBE.1'], color: 'rosso', short: '1 Emergenza', title: 'L’emergenza in serie', text: 'Il fungo (contatto NC) sta nel comando, dopo il termico.' },
      { kind: 'wire', from: 'SB1.4', to: ['FC.1'], color: 'rosso', short: '2 Finecorsa', title: 'Il finecorsa dopo la marcia', text: 'Usa il contatto normalmente chiuso, davanti alla bobina.' },
      { kind: 'verify', short: '3 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il fungo serve a fermare un pericolo: è NC in serie, si blocca aperto e va sbloccato a mano, così nessuno riavvia mentre il pericolo c’è.',
      'Emergenza, arresto, termico e finecorsa sono NC in serie: ne basta uno aperto, e un filo staccato ferma la macchina invece di lasciarla andare.',
      'Il finecorsa NC sta davanti alla bobina: il pacco in fondo lo apre e il nastro si ferma da solo.',
      'Dopo un’emergenza o un finecorsa la macchina riparte solo con un nuovo Marcia: non deve ripartire da sola.',
    ],
    fault: {
      open: ['QM'],
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
            'Nelle scale dei condomini la luce si accende con un pulsante e si spegne da sola dopo qualche decina di secondi. Così nessuno la lascia accesa per dimenticanza e si risparmia energia.',
            'Il pulsante non comanda direttamente le lampade: se lo facesse, la luce resterebbe accesa solo finché lo tieni premuto. Comanda invece un relè temporizzato, che sta nel quadro del condominio e tiene chiuso il suo contatto per il tempo impostato.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il relè temporizzato',
          focus: ['T'],
          paras: [
            'È un relè con un orologio: bobina (A1, A2) e contatto (1, 2). Quando la bobina riceve tensione il contatto si chiude. Quando rilasci il pulsante, a tenerlo chiuso è l’orologio interno, che conta il tempo impostato sul pezzo e poi lo riapre. Se si preme di nuovo prima della fine, il conteggio riparte da capo.',
            'Come in ogni relè, il contatto è solo un interruttore: la fase per le lampade gliela porti tu, sul morsetto 1.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Pulsanti in parallelo',
          focus: ['P1', 'P2'],
          paras: [
            'Come nel relè ad impulsi, i pulsanti sono in parallelo: uno per piano, e basta premerne uno qualunque. Portano solo la piccola corrente della bobina, anche se le lampade sono tante: così bastano pulsanti piccoli e fili sottili su tutte le scale.',
            'Le lampade non passano dai pulsanti: sono in parallelo sul contatto del temporizzatore, così si accendono insieme e, se una si brucia, le altre restano accese.',
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
            { id: 'a', text: 'Altri 5 secondi: il tempo era già partito e non si può allungare.' },
            { id: 'b', text: 'Altri 20 secondi: ogni pressione fa ripartire il conteggio da capo.' },
            { id: 'c', text: 'Si spengono subito: il secondo impulso spegne, come nel relè ad impulsi.' },
          ],
          correct: 'b',
          why: 'Il conteggio parte da capo quando rilasci il pulsante. Ogni pressione dà un nuovo intervallo pieno: per questo chi sale le scale può premere quando vuole senza restare al buio. Non è un relè ad impulsi: un nuovo impulso non spegne, ricarica il tempo.',
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
      'Il relè temporizzato tiene chiuso il suo contatto per il tempo impostato: la luce delle scale si spegne da sola e non resta accesa per dimenticanza.',
      'Il pulsante comanda la bobina, le lampade sono sul contatto: se fossero sul pulsante resterebbero accese solo finché lo tieni premuto.',
      'I pulsanti si mettono in parallelo, uno per piano; il contatto è solo un interruttore, e la fase per le lampade gliela porti tu.',
      'Premendo di nuovo prima della fine il tempo riparte da capo: non spegne, come farebbe un relè ad impulsi.',
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
          title: 'Il campanello a bassissima tensione',
          paras: [
            'Il pulsante del campanello sta fuori dalla porta: lo toccano tutti, anche con la pioggia o con le mani bagnate. Per questo il campanello funziona a bassissima tensione, per esempio 12 V: così poca che chi tocca il pulsante non rischia niente.',
            'Bassissima tensione vuol dire fino a 50 V. La rete però è a 230 V: serve un pezzo che abbassi la tensione, il trasformatore.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il trasformatore',
          focus: ['TR'],
          paras: [
            'Ha due lati separati. Il primario (morsetti 1 e 2) si collega alla rete a 230 V; il secondario (morsetti 3 e 4) dà i 12 V. Le due tensioni sono scritte sul trasformatore: dipendono da come è avvolto. Tra i due lati non c’è nessun filo: l’energia passa attraverso il nucleo di ferro, per magnetismo.',
            'È proprio questa separazione a proteggere: dal lato a 12 V si può toccare tutto, perché la rete a 230 V non ci arriva.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il campanello',
          focus: ['B'],
          paras: [
            'Il campanello è fatto per 12 V: collegato per errore alla rete a 230 V riceve una spinta quasi venti volte più forte, passa troppa corrente e si brucia. Il pulsante sta sul secondario, in serie al campanello: premuto, chiude il giro a 12 V e il campanello suona.',
            'I fili del circuito a 12 V non sono né fase né neutro e hanno un altro colore, per esempio bianco: così chi lavora dopo di te capisce a colpo d’occhio che quel filo non è della rete.',
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
            { id: 'a', text: 'Suona: il secondario ha tensione e il campanello è collegato a lui.' },
            { id: 'b', text: 'Tace: il pulsante non premuto tiene aperto il giro a 12 V.' },
            { id: 'c', text: 'Si brucia: sul secondario arriva la tensione della rete.' },
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
      'Dove le persone toccano, come il pulsante fuori dalla porta, si usa la bassissima tensione (qui 12 V): chi lo tocca non rischia.',
      'Il trasformatore abbassa la tensione e separa i due lati: il primario va alla rete, il secondario al campanello, e i 230 V non arrivano al pulsante.',
      'Il pulsante sta sul secondario, in serie al campanello. Un campanello da 12 V collegato alla rete si brucia.',
      'I fili a 12 V hanno un colore diverso da quelli della rete, per esempio bianco, così nessuno li scambia.',
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
            'Il quadro raccoglie le protezioni di tutta la casa. All’ingresso c’è un solo differenziale: così protegge le persone su tutte le linee insieme. Dopo di lui ogni linea ha il suo magnetotermico, scelto per il suo cavo: protegge i cavi dal sovraccarico e dal cortocircuito.',
            'Dividere in linee ha due vantaggi: se si guasta la luce, scatta solo il magnetotermico della luce e le prese restano alimentate; e se devi lavorare su una linea, apri solo quella.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il differenziale',
          focus: ['D'],
          paras: [
            'Confronta la corrente che va dalla fase con quella che torna dal neutro. Se non sono uguali, una parte sta tornando per un’altra strada, magari attraverso una persona, e il differenziale stacca. Per questo il neutro di ogni linea deve passare da lui.',
            'Il tasto di prova simula una dispersione. Dentro ci sono parti che si muovono e si possono bloccare, e il differenziale non lo dice da solo: il tasto si preme ogni tanto, i costruttori consigliano una volta al mese, per controllare che scatti davvero.',
          ],
        },
        {
          type: 'pezzi',
          title: 'I magnetotermici di linea',
          focus: ['M1', 'M2'],
          paras: [
            'Un magnetotermico per la luce e uno per le prese, ciascuno scelto per il suo cavo (di solito 10 A per la luce e 16 A per le prese). Ciascuno apre la fase e il neutro insieme: la linea è staccata del tutto e ci puoi lavorare. L’errore pericoloso è aprire il neutro da solo, lasciando la fase: insieme alla fase va bene.',
            'Sono tutti e due a valle del differenziale, cioè dopo di lui: una dispersione su qualunque linea lo fa scattare.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Se il differenziale non resta armato',
          paras: [
            'Se il differenziale scatta e, riarmandolo, scatta di nuovo, da qualche parte dopo di lui c’è una dispersione. Non si cerca a caso: si aprono tutti i magnetotermici, si riarma il differenziale e si richiude una linea alla volta. La linea che lo fa scattare è quella che disperde.',
          ],
          warn: 'Se un neutro è preso prima del differenziale, la corrente non torna da lui e il differenziale scatta anche senza una vera dispersione.',
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
            { id: 'a', text: 'Il magnetotermico delle prese: il guasto è sulla sua linea, quindi scatta lui.' },
            { id: 'b', text: 'Il differenziale: la corrente che va a terra non torna dal neutro, e lui lo vede.' },
            { id: 'c', text: 'Niente: una dispersione è una corrente piccola e non fa danni a nessuno.' },
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
      'All’ingresso del quadro c’è un differenziale, che protegge le persone su tutte le linee; dopo, un magnetotermico per ogni linea protegge il suo cavo.',
      'Ogni magnetotermico apre fase e neutro: aprendo una linea la si stacca del tutto.',
      'Linee separate: se una si guasta, le altre restano alimentate.',
      'Il neutro di ogni linea passa dal differenziale, altrimenti scatta anche senza dispersione.',
      'Se il differenziale non resta armato, si aprono tutte le linee, si riarma e si richiude una linea alla volta.',
      'Il tasto di prova va premuto ogni tanto: è l’unico modo di sapere che il differenziale scatta davvero.',
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

  'c23-appartamento-notte': {
    support: 'obiettivo',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Una notte senza luce',
          paras: [
            'È notte e in casa è saltata la luce. Il quadro è quello che conosci: un differenziale all’ingresso e un magnetotermico per ogni linea. Stavolta le linee sono tre: luce, prese e cucina.',
            'Se il differenziale è scattato, da qualche parte c’è una dispersione verso terra. Non si cerca a caso: si isolano le linee. Apri tutti i magnetotermici, riarma il differenziale, poi richiudi una linea alla volta. La linea che lo fa scattare di nuovo è quella che disperde.',
            'Il multimetro serve a controllare dove c’è tensione: a monte del differenziale c’è sempre, a valle solo se il differenziale è armato e la linea è chiusa.',
            'Non si riarma a ripetizione sperando che tenga: se c’è una dispersione vera, ogni riarmo rimette in tensione il guasto, e magari la persona che lo sta toccando.',
          ],
        },
        {
          type: 'previsione',
          question: 'Hai aperto tutti i magnetotermici e hai riarmato il differenziale: resta armato. Richiudi il magnetotermico della cucina e il differenziale resta armato. Richiudi quello delle prese e scatta. Che cosa significa?',
          options: [
            { id: 'a', text: 'La linea delle prese disperde verso terra.' },
            { id: 'b', text: 'Il differenziale è guasto.' },
            { id: 'c', text: 'La linea delle prese è in cortocircuito.' },
          ],
          correct: 'a',
          why: 'Il differenziale scatta per una dispersione, non per un cortocircuito: in un cortocircuito tra fase e neutro scatterebbe il magnetotermico. Resta armato con le altre linee, quindi funziona: la dispersione è sulla linea che lo fa scattare.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    summary: [
      'Se il differenziale scatta e non resta armato, c’è una dispersione verso terra da qualche parte dopo di lui.',
      'Per trovarla si aprono tutte le linee, si riarma il differenziale e si richiude una linea alla volta: la linea che lo fa scattare è quella che disperde.',
      'Il differenziale scatta per le dispersioni, i magnetotermici per sovraccarico e cortocircuito: capire chi è scattato dice già dove guardare.',
      'La causa va rimossa prima di richiudere: un apparecchio difettoso si scollega e si fa riparare.',
    ],
    fault: {
      say: 'Il differenziale è scattato e al buio non si vede niente. Apri i tre magnetotermici, riarma il differenziale e richiudi una linea alla volta. Quando hai trovato la linea, rispondi.',
      wires: [
        ['Q.F', 'D.1', 'marrone'], ['Q.N', 'D.N1', 'blu'],
        ['D.2', 'M1.1', 'marrone'], ['D.2', 'M2.1', 'marrone'], ['D.2', 'M3.1', 'marrone'],
        ['D.N2', 'M1.N1', 'blu'], ['D.N2', 'M2.N1', 'blu'], ['D.N2', 'M3.N1', 'blu'],
        ['M1.2', 'S.a', 'marrone'], ['S.b', 'L.A', 'marrone'], ['M1.N2', 'L.B', 'blu'],
        ['M2.2', 'P.L', 'marrone'], ['M2.N2', 'P.N', 'blu'], ['Q.PE', 'P.PE', 'gv'],
        ['M3.2', 'PF.L', 'marrone'], ['M3.N2', 'PF.N', 'blu'], ['Q.PE', 'PF.PE', 'gv'],
      ],
      on: ['G'],
      diagnosis: {
        question: 'Quale linea disperde verso terra?',
        options: [
          { id: 'a', text: 'La linea della luce.' },
          { id: 'b', text: 'La linea delle prese del soggiorno: un apparecchio collegato disperde.' },
          { id: 'c', text: 'La linea della cucina.' },
          { id: 'd', text: 'Nessuna: il differenziale è guasto.' },
        ],
        correct: 'b',
        why: 'Con la linea delle prese aperta il differenziale resta armato, con la linea richiusa scatta subito: la dispersione è lì, in un apparecchio con l’isolante rovinato.',
      },
      fixSay: 'Scollega l’apparecchio difettoso (toccalo nella scena o nel pannello del guasto), riarma il differenziale, richiudi le linee e premi Verifica.',
    },
  },

  'c24-officina': {
    support: 'obiettivo',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Collaudare prima di consegnare',
          paras: [
            'Un impianto appena montato non si consegna finché non lo si è provato. Il collaudo guarda tutte le funzioni, comprese quelle che non servono quasi mai ma che salvano le persone e la macchina: l’arresto, l’emergenza, il finecorsa e il termico.',
            'Per provare il termico si simula un sovraccarico, per esempio un pacco incastrato che frena il nastro. Il motore assorbe troppa corrente, il termico si scalda e scatta: il suo contatto 95-96 deve aprire il comando e fermare il contattore.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Una funzione alla volta',
          paras: [
            'Si prova una funzione alla volta, dalle funzioni di tutti i giorni alle sicurezze: Marcia (il nastro parte e la spia si accende), Arresto, emergenza (poi la sblocchi e serve un nuovo Marcia), finecorsa e, per ultimo, il sovraccarico. Per ognuna sai già che cosa deve succedere: se succede altro, hai trovato il guasto.',
            'Poi ragioni sul comando: un contatto che si apre ma non ferma la macchina non sta in serie nel giro della bobina. Si corregge come nei lavori in sicurezza: a salvamotore aperto e senza tensione verificata, mai in tensione. Poi si rifà il collaudo.',
          ],
        },
        {
          type: 'previsione',
          question: 'Durante il collaudo simuli un sovraccarico: il termico scatta, ma il nastro continua a girare. Che cosa significa?',
          options: [
            { id: 'a', text: 'Il contatto 95-96 del termico non comanda la bobina del contattore.' },
            { id: 'b', text: 'Il termico è tarato troppo basso e scatta prima del dovuto.' },
            { id: 'c', text: 'È normale: il termico segnala il sovraccarico ma non ferma il nastro.' },
          ],
          correct: 'a',
          why: 'Il termico ha scattato, quindi si è scaldato e il suo contatto è cambiato. Se il nastro gira lo stesso, quel contatto non è in serie nel circuito di comando: apre, ma non interrompe niente.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    summary: [
      'Il collaudo prova tutte le funzioni, anche quelle che servono di rado: sono quelle che salvano persone e macchina.',
      'Si prova una funzione alla volta: per ognuna sai che cosa deve succedere, e se succede altro hai trovato il guasto.',
      'La protezione del motore si prova con un sovraccarico simulato: il termico deve scattare e fermare il nastro.',
      'Un termico che scatta ma non ferma il motore ha il contatto 95-96 fuori dal circuito di comando.',
      'Si corregge un impianto a salvamotore aperto, mai in tensione.',
    ],
    fault: {
      say: 'Il nastro è montato e gira. Collaudalo: premi Marcia, prova l’arresto e l’emergenza, poi simula un sovraccarico e guarda se il termico ferma il nastro. Quando hai capito che cosa non va, rispondi.',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
        ['KM.2', 'FR.1', 'marrone'], ['KM.4', 'FR.3', 'nero'], ['KM.6', 'FR.5', 'grigio'],
        ['FR.2', 'M.U', 'marrone'], ['FR.4', 'M.V', 'nero'], ['FR.6', 'M.W', 'grigio'], ['M.PE', 'Q.PE', 'gv'],
        ['QM.2', 'SBE.1', 'rosso'], ['SBE.2', 'SB0.1', 'rosso'], ['SB0.2', 'SB1.3', 'rosso'],
        ['SB1.4', 'FC.1', 'rosso'], ['FC.2', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
        ['SB1.3', 'KM.13', 'rosso'], ['KM.14', 'SB1.4', 'rosso'], ['H.X1', 'KM.A1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Perché, con il sovraccarico, il termico scatta ma il nastro non si ferma?',
        options: [
          { id: 'a', text: 'Il contatto 95-96 del termico non è nel circuito di comando.' },
          { id: 'b', text: 'Il termico è tarato su una corrente troppo alta.' },
          { id: 'c', text: 'Il salvamotore è guasto.' },
        ],
        correct: 'a',
        why: 'Il comando passa dal salvamotore al fungo senza attraversare il contatto 95-96 del termico: quando il termico scatta quel contatto apre, ma il comando non ne risente e il contattore resta chiuso.',
      },
      fixSay: 'Apri il salvamotore. Togli il filo dal morsetto 2 del salvamotore al fungo e collega dal morsetto 2 del salvamotore al 95 del termico e dal 96 al fungo. Richiudi il salvamotore e premi Verifica.',
    },
  },
  'c25-fungo': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Perché due contatti',
          paras: [
            'Un pulsante di emergenza con un solo contatto ha un punto debole: se quel contatto si incolla o viene scavalcato da un cortocircuito, la macchina non si ferma e nessuno se ne accorge.',
            'Nelle macchine il fungo ha due contatti normalmente chiusi, uno per canale. Ogni canale ferma la macchina per conto suo. Con due canali serve un guasto doppio per perdere l’emergenza. Per accorgersi del primo guasto serve poi un controllo, come quello che fa il relè di sicurezza nel livello successivo.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il fungo e i due relè',
          focus: ['E', 'K1', 'K2'],
          paras: [
            'Il fungo ha quattro morsetti: 1-2 è il canale 1 e 3-4 il canale 2. A riposo i contatti sono chiusi; premuto, si aprono insieme e il fungo resta bloccato finché non lo ruoti.',
            'Il canale 1 alimenta la bobina del relè K1, il canale 2 quella di K2. I contatti dei due relè stanno in serie sul carico: la macchina va solo se tutti e due sono chiusi.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'La fase dal quadro al contatto 1 del fungo: il canale 1.',
              'Dal contatto 2 alla bobina del relè K1.',
              'Filo blu dalla bobina di K1 al neutro.',
              'La fase al contatto 3 del fungo: il canale 2.',
              'Dal contatto 4 alla bobina del relè K2.',
              'Filo blu dalla bobina di K2 al neutro.',
              'La fase al contatto di K1 (morsetto 11).',
              'Dal contatto 14 di K1 al morsetto 11 di K2: i due contatti sono in serie.',
              'Dal contatto 14 di K2 alla lampada, che rappresenta la macchina.',
              'Filo blu dal neutro alla lampada.',
            ],
            power: 'Levetta su: i due relè sono eccitati, i loro contatti sono chiusi e la macchina è in marcia.',
            controls: ['Fungo premuto: i due canali si aprono, i relè si diseccitano e la macchina si ferma.'],
          },
        },
        {
          type: 'previsione',
          question: 'Il fungo ha due contatti, ma hai collegato le bobine di K1 e di K2 allo stesso contatto. Che cosa hai perso?',
          options: [
            { id: 'a', text: 'Niente: premendo il fungo tutti e due i relè si aprono e la macchina si ferma.' },
            { id: 'b', text: 'La ridondanza: se quel contatto si incolla, sono incollati tutti e due i canali.' },
            { id: 'c', text: 'La macchina non parte più: un contatto solo non riesce ad alimentare due bobine.' },
          ],
          correct: 'b',
          why: 'La macchina si ferma e il circuito sembra a posto, ma i due relè dipendono dallo stesso contatto. Il secondo contatto del fungo non serve a niente. Ogni canale deve avere il suo percorso, dal fungo al suo relè.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['E.1', 'E.3'], color: 'marrone', short: '1 Fase', title: 'La fase ai due canali', text: 'Dalla FASE del quadro ai morsetti 1 e 3 del fungo: ogni canale ha il suo filo.' },
      { kind: 'wire', from: 'E.2', to: ['K1.A1'], color: 'marrone', short: '2 K1', title: 'Il canale 1 alla bobina di K1', text: 'Dal morsetto 2 del fungo al morsetto A1 del relè K1.' },
      { kind: 'wire', from: 'E.4', to: ['K2.A1'], color: 'marrone', short: '3 K2', title: 'Il canale 2 alla bobina di K2', text: 'Dal morsetto 4 del fungo al morsetto A1 del relè K2.' },
      { kind: 'wire', from: 'Q.N', to: ['K1.A2', 'K2.A2'], color: 'blu', short: '4 Neutro', title: 'Il neutro alle bobine', text: 'Dal NEUTRO ai morsetti A2 dei due relè.' },
      { kind: 'wire', from: 'Q.F', to: ['K1.11'], color: 'marrone', short: '5 Potenza', title: 'La fase al contatto di K1', text: 'Dalla FASE al morsetto 11 del relè K1.' },
      { kind: 'wire', from: 'K1.14', to: ['K2.11'], color: 'marrone', short: '6 Serie', title: 'I due contatti in serie', text: 'Dal morsetto 14 di K1 al morsetto 11 di K2.' },
      { kind: 'wire', from: 'K2.14', to: ['L.A'], color: 'marrone', short: '7 Macchina', title: 'Alla macchina', text: 'Dal morsetto 14 di K2 alla lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '8 Neutro lampada', title: 'Il neutro alla lampada', text: 'Dal NEUTRO al morsetto libero della lampada.' },
      { kind: 'power', short: '9 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi premi il fungo.' },
      { kind: 'verify', short: '10 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il fungo di emergenza ha due contatti normalmente chiusi: uno per canale.',
      'Ogni canale ha il suo percorso fino al suo relè: nessun filo li unisce.',
      'I contatti dei due relè stanno in serie sul carico: ciascun canale può fermare la macchina da solo.',
      'Con un relè incollato l’altro ferma comunque la macchina: è questo che si chiama ridondanza.',
    ],
    fault: {
      say: 'L’impianto è già cablato e la macchina si ferma premendo il fungo. Provalo: tutto sembra funzionare. Poi guarda come sono collegate le bobine dei due relè.',
      wires: [
        ['Q.F', 'E.1', 'marrone'], ['E.2', 'K1.A1', 'marrone'], ['E.2', 'K2.A1', 'marrone'],
        ['K1.A2', 'Q.N', 'blu'], ['K2.A2', 'Q.N', 'blu'],
        ['Q.F', 'K1.11', 'marrone'], ['K1.14', 'K2.11', 'marrone'], ['K2.14', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa non va, anche se la macchina si ferma?',
        options: [
          { id: 'a', text: 'Le due bobine sono sullo stesso contatto del fungo: il secondo canale non è usato.' },
          { id: 'b', text: 'I contatti dei relè dovrebbero stare in parallelo, non in serie.' },
          { id: 'c', text: 'Il neutro delle bobine è collegato male.' },
        ],
        correct: 'a',
        why: 'I due relè dipendono dallo stesso contatto: se si incolla, nessuno dei due si diseccita. Il canale 2 del fungo, i morsetti 3 e 4, è libero. La serie dei contatti sul carico è giusta: è proprio quella che dà la ridondanza.',
      },
      fixSay: 'Togli il filo dal contatto 2 del fungo alla bobina di K2. Collega la fase al contatto 3 e il contatto 4 alla bobina di K2. Poi premi Verifica.',
    },
  },
  'c26-rele-sicurezza': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Un relè che controlla',
          paras: [
            'Il relè di sicurezza non si limita a passare un contatto: controlla. Legge i due canali del fungo, e se uno solo cade apre le sue uscite. Se i due canali non cambiano insieme, segnala una discrepanza e si blocca finché non tornano entrambi a riposo.',
            'Dopo un arresto non riparte da solo. Serve un impulso sul pulsante di riarmo, e il relè si arma quando il pulsante viene rilasciato: la macchina riparte per una scelta di chi sta davanti, non perché il fungo è stato sbloccato. Un pulsante di riarmo bloccato o ponticellato non arma mai il relè.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il contattore incollato',
          paras: [
            'I contatti di potenza di un contattore possono incollarsi, per esempio dopo molti cicli con carico forte. La bobina si spegne, ma la macchina continua a girare.',
            'Nei contattori i contatti NC e NA non si possono trovare chiusi insieme. Se il contattore è incollato, il contatto NC 21-22 resta aperto. Mettendolo nel circuito di riarmo, il relè di sicurezza si accorge del guasto e non si riarma. Nelle macchine vere i contatti di potenza sono almeno due, in serie, e ciascuno può fermare la macchina da solo; qui ce n’è uno solo per semplicità, quindi la retroazione scopre il contattore incollato al riarmo ma non può fermare la macchina mentre è incollato.',
          ],
          warn: 'Se il riarmo non passa dal contatto NC del contattore, un contattore incollato non viene scoperto: la macchina resta senza protezione fino al guasto successivo.',
        },
        {
          type: 'pezzi',
          title: 'Il relè di sicurezza KS',
          focus: ['KS', 'KM', 'SBR'],
          paras: [
            'In A1-A2 il relè è alimentato. I morsetti S12 e S22 sono i due ingressi dei canali, R è l’ingresso del riarmo. Le uscite 13-14 e 23-24 sono due contatti NA che stanno in serie alla bobina del contattore.',
            'Il riarmo parte dalla fase, passa dal contatto NC 21-22 del contattore, poi dal pulsante di riarmo, e arriva a R.',
          ],
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'La fase al contatto 1 del fungo: canale 1.',
              'Dal contatto 2 del fungo all’ingresso S12 del relè.',
              'La fase al contatto 3 del fungo: canale 2.',
              'Dal contatto 4 all’ingresso S22 del relè.',
              'La fase all’alimentazione A1 del relè di sicurezza.',
              'Filo blu da A2 al neutro.',
              'Il riarmo parte dalla fase e va al contatto NC 21 del contattore.',
              'Dal 22 al pulsante di riarmo.',
              'Dal pulsante all’ingresso R del relè.',
              'La fase all’uscita 13 del relè.',
              'Dal 14 all’uscita 23: le due uscite sono in serie.',
              'Dall’uscita 24 alla bobina del contattore (A1).',
              'Filo blu dalla bobina del contattore al neutro.',
              'La fase al contatto di potenza del contattore (1).',
              'Dal contatto 2 alla macchina (la lampada).',
              'Filo blu dal neutro alla lampada.',
            ],
            power: 'Levetta su: i canali sono chiusi, ma la macchina è ferma. Il relè aspetta il riarmo.',
            controls: [
              'Riarmo premuto: il relè si arma, le uscite si chiudono, il contattore si eccita e la macchina parte.',
              'Fungo premuto: i canali cadono, il relè apre le uscite e la macchina si ferma. Sbloccandolo, non riparte da sola.',
            ],
          },
        },
        {
          type: 'previsione',
          question: 'Hai premuto il fungo e la macchina si è fermata. Lo sblocchi senza premere il riarmo. Che cosa succede?',
          options: [
            { id: 'a', text: 'La macchina riparte, perché i due canali sono tornati chiusi.' },
            { id: 'b', text: 'Resta ferma finché non dai un nuovo impulso sul riarmo.' },
            { id: 'c', text: 'Il relè si blocca e va sostituito: un arresto lo guasta.' },
          ],
          correct: 'b',
          why: 'Il relè tiene aperte le uscite finché non riceve un impulso nuovo sul riarmo. Se ripartisse da solo, un fungo sbloccato mentre qualcuno è ancora vicino alla macchina potrebbe farla muovere.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['E.1', 'E.3'], color: 'marrone', short: '1 Canali', title: 'La fase ai due canali', text: 'Dalla FASE ai morsetti 1 e 3 del fungo.' },
      { kind: 'wire', from: 'E.2', to: ['KS.S12'], color: 'marrone', short: '2 S12', title: 'Il canale 1 al relè', text: 'Dal morsetto 2 del fungo all’ingresso S12 del relè di sicurezza.' },
      { kind: 'wire', from: 'E.4', to: ['KS.S22'], color: 'marrone', short: '3 S22', title: 'Il canale 2 al relè', text: 'Dal morsetto 4 del fungo all’ingresso S22 del relè di sicurezza.' },
      { kind: 'wire', from: 'Q.F', to: ['KS.A1'], color: 'marrone', short: '4 A1', title: 'L’alimentazione del relè', text: 'Dalla FASE al morsetto A1 del relè di sicurezza.' },
      { kind: 'wire', from: 'Q.N', to: ['KS.A2'], color: 'blu', short: '5 A2', title: 'Il neutro al relè', text: 'Dal NEUTRO al morsetto A2 del relè di sicurezza.' },
      { kind: 'wire', from: 'Q.F', to: ['KM.21'], color: 'marrone', short: '6 NC', title: 'Il riarmo parte dal contatto NC', text: 'Dalla FASE al morsetto 21 del contattore.' },
      { kind: 'wire', from: 'KM.22', to: ['SBR.3'], color: 'marrone', short: '7 Pulsante', title: 'Al pulsante di riarmo', text: 'Dal morsetto 22 del contattore al morsetto 3 del pulsante di riarmo.' },
      { kind: 'wire', from: 'SBR.4', to: ['KS.R'], color: 'marrone', short: '8 R', title: 'Il riarmo al relè', text: 'Dal morsetto 4 del pulsante all’ingresso R del relè.' },
      { kind: 'wire', from: 'Q.F', to: ['KS.13'], color: 'marrone', short: '9 Uscita', title: 'La fase alle uscite', text: 'Dalla FASE al morsetto 13 del relè.' },
      { kind: 'wire', from: 'KS.14', to: ['KS.23'], color: 'marrone', short: '10 Serie', title: 'Le due uscite in serie', text: 'Dal morsetto 14 al morsetto 23 del relè.' },
      { kind: 'wire', from: 'KS.24', to: ['KM.A1'], color: 'marrone', short: '11 Bobina', title: 'Alla bobina del contattore', text: 'Dal morsetto 24 del relè al morsetto A1 del contattore.' },
      { kind: 'wire', from: 'Q.N', to: ['KM.A2'], color: 'blu', short: '12 Neutro bobina', title: 'Il neutro alla bobina', text: 'Dal NEUTRO al morsetto A2 del contattore.' },
      { kind: 'wire', from: 'Q.F', to: ['KM.1'], color: 'marrone', short: '13 Potenza', title: 'La fase al contatto di potenza', text: 'Dalla FASE al morsetto 1 del contattore.' },
      { kind: 'wire', from: 'KM.2', to: ['L.A'], color: 'marrone', short: '14 Macchina', title: 'Alla macchina', text: 'Dal morsetto 2 del contattore alla lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '15 Neutro lampada', title: 'Il neutro alla lampada', text: 'Dal NEUTRO al morsetto libero della lampada.' },
      { kind: 'power', short: '16 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi premi il riarmo e infine il fungo.' },
      { kind: 'verify', short: '17 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il relè di sicurezza controlla i due canali del fungo e apre le uscite se uno solo cade.',
      'Dopo un arresto non riparte da solo: serve un impulso sul riarmo.',
      'Un contattore può restare incollato: il suo contatto NC 21-22 resta aperto.',
      'Il riarmo passa dal contatto NC del contattore: così il relè scopre il guasto e non si riarma.',
    ],
    fault: {
      say: 'L’impianto è già cablato e funziona: riarmi, premi il fungo, la macchina si ferma. Guarda però il percorso del riarmo: parte dalla fase e arriva al relè.',
      wires: [
        ['Q.F', 'E.1', 'marrone'], ['E.2', 'KS.S12', 'marrone'], ['Q.F', 'E.3', 'marrone'], ['E.4', 'KS.S22', 'marrone'],
        ['Q.F', 'KS.A1', 'marrone'], ['KS.A2', 'Q.N', 'blu'],
        ['Q.F', 'SBR.3', 'marrone'], ['SBR.4', 'KS.R', 'marrone'],
        ['Q.F', 'KS.13', 'marrone'], ['KS.14', 'KS.23', 'marrone'], ['KS.24', 'KM.A1', 'marrone'], ['KM.A2', 'Q.N', 'blu'],
        ['Q.F', 'KM.1', 'marrone'], ['KM.2', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa succede se un contattore resta incollato in questo impianto?',
        options: [
          { id: 'a', text: 'Il relè di sicurezza non se ne accorge e si riarma lo stesso: manca il contatto NC del contattore nel riarmo.' },
          { id: 'b', text: 'Il relè si blocca per sempre.' },
          { id: 'c', text: 'Niente, perché il fungo ferma comunque la macchina.' },
        ],
        correct: 'a',
        why: 'Il contatto NC 21-22 del contattore è aperto quando i contatti di potenza sono chiusi. Se il riarmo non passa da lì, un contattore incollato non viene scoperto e il guasto resta nascosto: al guasto successivo la macchina non si fermerebbe più.',
      },
      fixSay: 'Togli il filo dalla fase al pulsante di riarmo. Collega la fase al morsetto 21 del contattore, poi il 22 al pulsante di riarmo. Poi premi Verifica.',
    },
  },
  'c27-portella': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Più dispositivi, una catena',
          paras: [
            'Una macchina ha spesso più dispositivi di sicurezza: il fungo, la portella di accesso, una barriera a raggi. Ognuno ha due contatti, uno per canale.',
            'Su ciascun canale i dispositivi si mettono in serie: basta che uno si apra per interrompere il canale. Così la portella ferma la macchina come il fungo.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Richiudere non basta',
          paras: [
            'Se un operatore apre la portella per togliere un pezzo, e la richiude, la macchina non deve ripartire da sola: potrebbe esserci ancora qualcuno dentro.',
            'Per questo lo stesso relè di sicurezza vale per tutta la catena: ogni arresto apre le uscite, e solo il riarmo, dato da fuori, rimette in marcia. Un contatto lasciato libero in un dispositivo toglie un canale a quel dispositivo.',
          ],
          warn: 'Un dispositivo a due canali con un solo contatto collegato sembra funzionare, ma non è più sicuro. Nota: le barriere a raggi vere hanno uscite statiche e di solito non si collegano in serie come un contatto a secco; qui è una semplificazione del gioco.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'Canale 1: dalla fase al contatto 1 del fungo.',
              'Dal contatto 2 al contatto 1 della portella.',
              'Dal contatto 2 della portella al contatto 1 della barriera.',
              'Dal contatto 2 della barriera all’ingresso S12 del relè.',
              'Canale 2: dalla fase al contatto 3 del fungo.',
              'Dal contatto 4 al contatto 3 della portella.',
              'Dal contatto 4 della portella al contatto 3 della barriera.',
              'Dal contatto 4 della barriera all’ingresso S22 del relè.',
              'La fase all’alimentazione A1 del relè.',
              'Filo blu da A2 al neutro.',
              'Il riarmo parte dalla fase e va al contatto NC 21 del contattore.',
              'Dal 22 al pulsante di riarmo.',
              'Dal pulsante all’ingresso R del relè.',
              'La fase all’uscita 13 del relè.',
              'Dal 14 all’uscita 23.',
              'Dall’uscita 24 alla bobina del contattore.',
              'Filo blu dalla bobina al neutro.',
              'La fase al contatto di potenza del contattore.',
              'Dal contatto 2 alla macchina.',
              'Filo blu dal neutro alla macchina.',
            ],
            power: 'Levetta su: portella e barriera sono chiuse, la macchina aspetta il riarmo.',
            controls: [
              'Riarmo premuto: la macchina parte.',
              'Portella aperta: i due canali si interrompono, la macchina si ferma e non riparte richiudendola.',
              'Barriera interrotta: la macchina resta ferma.',
            ],
          },
        },
        {
          type: 'previsione',
          question: 'La macchina è in marcia e apri la portella. La richiudi subito. Che cosa succede?',
          options: [
            { id: 'a', text: 'La macchina riparte appena la portella è chiusa.' },
            { id: 'b', text: 'Resta ferma finché qualcuno non preme il riarmo.' },
            { id: 'c', text: 'Resta ferma per sempre: serve spegnere il quadro.' },
          ],
          correct: 'b',
          why: 'L’apertura ha fatto cadere i due canali e il relè ha aperto le uscite. Richiudendo la portella i canali tornano chiusi, ma le uscite si richiudono solo con un nuovo riarmo.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'Q.F', to: ['E.1', 'E.3'], color: 'marrone', short: '1 Fase', title: 'La fase ai due canali', text: 'Dalla FASE ai morsetti 1 e 3 del fungo.' },
      { kind: 'wire', from: 'E.2', to: ['P.1'], color: 'marrone', short: '2 Portella 1', title: 'Il canale 1 alla portella', text: 'Dal morsetto 2 del fungo al morsetto 1 della portella.' },
      { kind: 'wire', from: 'P.2', to: ['B.1'], color: 'marrone', short: '3 Barriera 1', title: 'Il canale 1 alla barriera', text: 'Dal morsetto 2 della portella al morsetto 1 della barriera.' },
      { kind: 'wire', from: 'B.2', to: ['KS.S12'], color: 'marrone', short: '4 S12', title: 'Il canale 1 al relè', text: 'Dal morsetto 2 della barriera all’ingresso S12 del relè di sicurezza.' },
      { kind: 'wire', from: 'E.4', to: ['P.3'], color: 'marrone', short: '5 Portella 2', title: 'Il canale 2 alla portella', text: 'Dal morsetto 4 del fungo al morsetto 3 della portella.' },
      { kind: 'wire', from: 'P.4', to: ['B.3'], color: 'marrone', short: '6 Barriera 2', title: 'Il canale 2 alla barriera', text: 'Dal morsetto 4 della portella al morsetto 3 della barriera.' },
      { kind: 'wire', from: 'B.4', to: ['KS.S22'], color: 'marrone', short: '7 S22', title: 'Il canale 2 al relè', text: 'Dal morsetto 4 della barriera all’ingresso S22 del relè di sicurezza.' },
      { kind: 'wire', from: 'Q.F', to: ['KS.A1'], color: 'marrone', short: '8 A1', title: 'L’alimentazione del relè', text: 'Dalla FASE al morsetto A1 del relè.' },
      { kind: 'wire', from: 'Q.N', to: ['KS.A2'], color: 'blu', short: '9 A2', title: 'Il neutro al relè', text: 'Dal NEUTRO al morsetto A2 del relè.' },
      { kind: 'wire', from: 'Q.F', to: ['KM.21'], color: 'marrone', short: '10 NC', title: 'Il riarmo dal contatto NC', text: 'Dalla FASE al morsetto 21 del contattore.' },
      { kind: 'wire', from: 'KM.22', to: ['SBR.3'], color: 'marrone', short: '11 Pulsante', title: 'Al pulsante di riarmo', text: 'Dal morsetto 22 del contattore al pulsante di riarmo.' },
      { kind: 'wire', from: 'SBR.4', to: ['KS.R'], color: 'marrone', short: '12 R', title: 'Il riarmo al relè', text: 'Dal pulsante all’ingresso R del relè.' },
      { kind: 'wire', from: 'Q.F', to: ['KS.13'], color: 'marrone', short: '13 Uscita', title: 'La fase alle uscite', text: 'Dalla FASE al morsetto 13 del relè.' },
      { kind: 'wire', from: 'KS.14', to: ['KS.23'], color: 'marrone', short: '14 Serie', title: 'Le uscite in serie', text: 'Dal morsetto 14 al morsetto 23 del relè.' },
      { kind: 'wire', from: 'KS.24', to: ['KM.A1'], color: 'marrone', short: '15 Bobina', title: 'Alla bobina del contattore', text: 'Dal morsetto 24 del relè alla bobina del contattore.' },
      { kind: 'wire', from: 'Q.N', to: ['KM.A2'], color: 'blu', short: '16 Neutro bobina', title: 'Il neutro alla bobina', text: 'Dal NEUTRO al morsetto A2 del contattore.' },
      { kind: 'wire', from: 'Q.F', to: ['KM.1'], color: 'marrone', short: '17 Potenza', title: 'La fase al contatto di potenza', text: 'Dalla FASE al morsetto 1 del contattore.' },
      { kind: 'wire', from: 'KM.2', to: ['L.A'], color: 'marrone', short: '18 Macchina', title: 'Alla macchina', text: 'Dal morsetto 2 del contattore alla lampada.' },
      { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '19 Neutro macchina', title: 'Il neutro alla macchina', text: 'Dal NEUTRO al morsetto libero della lampada.' },
      { kind: 'power', short: '20 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro, poi riarma e prova portella e barriera.' },
      { kind: 'verify', short: '21 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Fungo, portella e barriera stanno in serie su ciascun canale: aprirne uno interrompe il canale.',
      'Ogni dispositivo ha due contatti e vanno usati tutti e due, uno per canale.',
      'Dopo ogni arresto la macchina riparte solo con il riarmo, mai da sola richiudendo la portella.',
      'Il relè di sicurezza e il contatto NC del contattore nel riarmo valgono per tutta la catena.',
    ],
    fault: {
      say: 'L’impianto è già cablato. Riarma, apri la portella: la macchina si ferma. Richiudila e prova a riarmare: il relè non si riarma. Guarda quanti fili arrivano alla portella e alla barriera.',
      wires: [
        ['Q.F', 'E.1', 'marrone'], ['E.2', 'P.1', 'marrone'], ['P.2', 'B.1', 'marrone'], ['B.2', 'KS.S12', 'marrone'],
        ['Q.F', 'E.3', 'marrone'], ['E.4', 'KS.S22', 'marrone'],
        ['Q.F', 'KS.A1', 'marrone'], ['KS.A2', 'Q.N', 'blu'],
        ['Q.F', 'KM.21', 'marrone'], ['KM.22', 'SBR.3', 'marrone'], ['SBR.4', 'KS.R', 'marrone'],
        ['Q.F', 'KS.13', 'marrone'], ['KS.14', 'KS.23', 'marrone'], ['KS.24', 'KM.A1', 'marrone'], ['KM.A2', 'Q.N', 'blu'],
        ['Q.F', 'KM.1', 'marrone'], ['KM.2', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Che cosa non va nella portella e nella barriera?',
        options: [
          { id: 'a', text: 'Usano un solo canale: i loro contatti 3-4 non sono collegati.' },
          { id: 'b', text: 'Sono in serie sul canale 1: dovrebbero stare in parallelo.' },
          { id: 'c', text: 'Mancano i fili di terra.' },
        ],
        correct: 'a',
        why: 'La portella e la barriera hanno due contatti, ma ne è collegato uno solo, quello del canale 1. Il canale 2 passa dal solo fungo. Aprendo la portella cade un canale solo: il relè di sicurezza vede una discrepanza e non si riarma, ed è proprio per questo che la prova di riarmo non riesce. Se poi il contatto del canale 1 si incolla, la portella aperta non ferma più la macchina.',
      },
      fixSay: 'Il canale 2 deve passare anche da portella e barriera: togli il filo dal contatto 4 del fungo al relè. Collega il 4 al contatto 3 della portella, il 4 della portella al 3 della barriera e il 4 della barriera all’ingresso S22. Poi premi Verifica.',
    },
  },
  'c28-stella-triangolo': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Perché un motore grande non parte di colpo',
          paras: [
            'Un compressore, il ventilatore di un capannone: motori grandi. All’avviamento un motore trifase assorbe una corrente molto più alta di quella di lavoro, anche cinque o sette volte. Con un motore grande lo strappo sulla linea è forte e le protezioni a monte possono scattare.',
            'Il rimedio è partire con una tensione ridotta e passare alla tensione piena quando il motore ha preso velocità. Il metodo più comune è stella-triangolo. Va bene per le macchine che all’avvio non spingono un carico pesante, come pompe e ventilatori: in stella il motore ha poca forza. Quando passa a triangolo è già quasi alla sua velocità, e lo strappo è piccolo.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Un motore con sei morsetti',
          focus: ['M'],
          paras: [
            'Il motore ha tre avvolgimenti, le bobine di rame che fanno il campo che gira: U1-U2, V1-V2, W1-W2, con tutti e due i capi fuori. La targa dice 400/690 V: ogni avvolgimento vuole 400 V. Sulla nostra rete a 400 V lavora quindi a triangolo, ogni avvolgimento tra due fasi.',
            'A stella U2, V2, W2 si uniscono (il centro stella) e ogni avvolgimento sta tra una fase e quel centro: riceve 230 V, come tra fase e neutro. Corrente e coppia, cioè la forza che fa girare l’albero, scendono a circa un terzo.',
          ],
          warn: 'A stella il motore ha poca coppia: se resta in stella sotto carico si scalda e il relè termico scatta.',
        },
        {
          type: 'spiegazione',
          title: 'Tre contattori e un temporizzatore',
          paras: [
            'KM1 porta la linea al motore sui morsetti U1, V1, W1 e resta chiuso per tutto il tempo: senza di lui il motore non riceve niente. KM2 unisce U2, V2, W2: è la stella. KM3 collega U1 con W2, V1 con U2 e W1 con V2: è il triangolo. KM2 e KM3 cambiano solo come sono uniti gli avvolgimenti.',
            'Il temporizzatore KT parte insieme a KM1. Finché il tempo non è scaduto tiene chiuso KM2; poi lo apre e chiude KM3. Il tempo è quello che serve al motore per arrivare quasi alla sua velocità: nei motori veri da 5 a 15 secondi, nel gioco 6.',
          ],
        },
        {
          type: 'pezzi',
          title: 'Il temporizzatore e l’interblocco',
          focus: ['KT'],
          paras: [
            'KT ha una bobina (A1-A2) e un contatto di scambio: 15 è il comune, 16 è chiuso a riposo, 18 si chiude dopo il ritardo. Se la bobina si diseccita, torna subito a riposo.',
            'KM2 e KM3 non devono mai essere chiusi insieme: stella e triangolo uniti mettono in corto le tre fasi. Per questo il contatto NC 21-22 di ciascuno sta nel circuito di comando dell’altro.',
          ],
          warn: 'Un contattore può restare incollato: i suoi contatti si saldano per una scintilla e non si aprono più, anche senza bobina. L’interblocco fa sì che l’altro non chiuda comunque.',
        },
        {
          type: 'spiegazione',
          title: 'Il circuito di potenza è già fatto',
          paras: [
            'In questo livello la potenza è già cablata, perché lo schema con tre contattori è lungo: i fili posati non si possono togliere. Resta da cablare il comando, in rosso.',
            'Il comando parte come in marcia e arresto. Poi va aggiunto KT, in parallelo alla bobina di KM1, e le bobine di KM2 e KM3 con i loro contatti.',
          ],
          warn: 'Si cabla con il salvamotore aperto, come sempre.',
        },
        {
          type: 'spiegazione',
          title: 'Perché ogni filo del comando',
          paras: [
            'La prima parte è quella di marcia e arresto. Il resto decide quale dei due contattori, stella o triangolo, è chiuso.',
          ],
          table: {
            head: ['Morsetto', 'Che cosa ci colleghi e perché'],
            rows: [
              ['Arresto, Marcia', 'Come in marcia e arresto, con il 13-14 di KM1 in parallelo alla marcia: Marcia avvia, il 13-14 tiene, Arresto ferma tutto.'],
              ['KT A1 e 15', 'Sullo stesso punto di A1 di KM1, che l’autoritenuta tiene in tensione (Marcia è solo un impulso): KT parte con la linea e si azzera con Arresto. Ogni avviamento comincia in stella.'],
              ['KT 16', 'Chiuso a riposo, prima che il tempo scada: va verso KM2, la stella. Sul 18 il motore partirebbe a triangolo, con tutto lo strappo.'],
              ['KT 18', 'Si chiude dopo il ritardo: va verso KM3, il triangolo. Il comune lascia il 16 e tocca il 18: la stella si apre, e solo dopo il triangolo si chiude. Per un attimo il motore gira da solo, senza collegamento.'],
              ['21-22', 'Il NC di KM3 prima della bobina di KM2, e il contrario: se un contattore resta incollato, l’altro non chiude e non c’è il cortocircuito.'],
              ['A2', 'Al neutro, per tutte e quattro le bobine: ognuna è un carico, e senza ritorno quel contattore non chiude.'],
            ],
          },
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'La fase L1 entra nel salvamotore, morsetto 1.',
              'La fase L2 entra nel salvamotore, morsetto 3.',
              'La fase L3 entra nel salvamotore, morsetto 5.',
              'Dal salvamotore al contattore di linea KM1.',
              'Dal salvamotore al contattore di linea KM1.',
              'Dal salvamotore al contattore di linea KM1.',
              'Da KM1 ai morsetti U1, V1, W1 del motore.',
              'Da KM1 ai morsetti U1, V1, W1 del motore.',
              'Da KM1 ai morsetti U1, V1, W1 del motore.',
              'KM2 porta i morsetti U2, V2, W2 del motore ai suoi poli.',
              'KM2 porta i morsetti U2, V2, W2 del motore ai suoi poli.',
              'KM2 porta i morsetti U2, V2, W2 del motore ai suoi poli.',
              'I tre poli di KM2 si uniscono: è il centro stella.',
              'I tre poli di KM2 si uniscono: è il centro stella.',
              'KM3 collega U1 con W2.',
              'KM3 collega U1 con W2.',
              'KM3 collega V1 con U2.',
              'KM3 collega V1 con U2.',
              'KM3 collega W1 con V2.',
              'KM3 collega W1 con V2.',
              'La terra del quadro al motore.',
              'Il comando: una fase a valle del salvamotore va al pulsante di arresto.',
              'Dall’arresto alla marcia.',
              'Dalla marcia alla bobina di KM1.',
              'La bobina di KM1 torna al neutro.',
              'L’autoritenuta: il contatto 13-14 di KM1 in parallelo alla marcia.',
              'L’autoritenuta: il contatto 13-14 di KM1 in parallelo alla marcia.',
              'Il temporizzatore KT si alimenta insieme a KM1.',
              'Il temporizzatore KT torna al neutro.',
              'Il comune 15 di KT prende lo stesso comando.',
              'Stella: dal contatto 16 di KT al contatto NC di KM3.',
              'Poi dal contatto NC di KM3 alla bobina di KM2.',
              'La bobina di KM2 torna al neutro.',
              'Triangolo: dal contatto 18 di KT al contatto NC di KM2.',
              'Poi dal contatto NC di KM2 alla bobina di KM3.',
              'La bobina di KM3 torna al neutro.',
            ],
            power: 'Il salvamotore è aperto: tutto a valle è senza tensione.',
            controls: [],
          },
        },
        {
          type: 'previsione',
          question: 'Se KM2 e KM3 si chiudessero insieme, che cosa succederebbe?',
          options: [
            { id: 'a', text: 'Il motore girerebbe più forte.' },
            { id: 'b', text: 'Le tre fasi andrebbero in cortocircuito attraverso i contattori.' },
            { id: 'c', text: 'Non succederebbe niente: sono due collegamenti dello stesso motore.' },
          ],
          correct: 'b',
          why: 'KM2 unisce i tre morsetti U2, V2, W2, mentre KM3 li collega alle tre fasi. Chiusi insieme collegano le fasi tra loro: cortocircuito. Per questo ciascuno ha il contatto NC nel comando dell’altro.',
        },
        {
          type: 'previsione',
          question: 'Il motore resta in stella a lungo, anche sotto carico. Che cosa succede?',
          options: [
            { id: 'a', text: 'Va benissimo: in stella consuma meno e si scalda meno.' },
            { id: 'b', text: 'Fatica sotto carico, si scalda e il termico scatta.' },
            { id: 'c', text: 'Gira più veloce, perché ogni avvolgimento ha meno carico.' },
          ],
          correct: 'b',
          why: 'In stella ogni avvolgimento riceve 230 V e la coppia scende a circa un terzo. Sotto carico il motore fatica, la corrente sale e si scalda: il termico scatta. La stella serve solo per l’avviamento.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'control', id: 'QM', short: '0 Sezionamento', title: 'Apri il salvamotore', text: 'Il salvamotore parte chiuso: aprilo toccando la levetta, così i morsetti a valle sono senza tensione mentre cabli. Lo richiudi solo alla fine, per provare.' },
      { kind: 'wire', from: 'QM.2', to: ['SB0.1'], color: 'rosso', short: '1 Arresto', title: 'Il comando passa dall’arresto', text: 'Filo rosso dal morsetto 2 del salvamotore al morsetto 1 del pulsante di arresto.' },
      { kind: 'wire', from: 'SB0.2', to: ['SB1.3'], color: 'rosso', short: '2 Marcia', title: 'Poi dalla marcia', text: 'Filo rosso dal morsetto 2 dell’arresto al morsetto 3 del pulsante di marcia.' },
      { kind: 'wire', from: 'SB1.4', to: ['KM1.A1'], color: 'rosso', short: '3 KM1', title: 'Alla bobina di KM1', text: 'Filo rosso dal morsetto 4 della marcia al morsetto A1 di KM1. Il morsetto A2 va al neutro, in blu.' },
      { kind: 'wire', from: 'KM1.13', to: ['SB1.3'], color: 'rosso', short: '4 Autoritenuta', title: 'L’autoritenuta di KM1', text: 'Due fili rossi: dal morsetto 3 della marcia al contatto 13 di KM1 e dal contatto 14 al morsetto 4 della marcia.' },
      { kind: 'wire', from: 'KT.A1', to: ['KM1.A1'], color: 'rosso', short: '5 Temporizzatore', title: 'Il temporizzatore KT', text: 'KT si alimenta insieme a KM1: A1 e il comune 15 sullo stesso punto della bobina di KM1, A2 al neutro.' },
      { kind: 'wire', from: 'KT.16', to: ['KM3.21'], color: 'rosso', short: '6 Stella', title: 'La stella: KM2', text: 'Dal contatto 16 di KT al contatto NC 21 di KM3, poi dal 22 di KM3 alla bobina A1 di KM2. A2 di KM2 va al neutro.' },
      { kind: 'wire', from: 'KT.18', to: ['KM2.21'], color: 'rosso', short: '7 Triangolo', title: 'Il triangolo: KM3', text: 'Dal contatto 18 di KT al contatto NC 21 di KM2, poi dal 22 di KM2 alla bobina A1 di KM3. A2 di KM3 va al neutro.' },
      { kind: 'control', id: 'SB1', short: '8 Prova', title: 'Prova l’avviamento', text: 'Chiudi il salvamotore e premi Marcia: il motore parte in stella e dopo qualche secondo passa in triangolo.' },
      { kind: 'verify', short: '9 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Un motore grande che parte di colpo dà uno strappo alla linea: a stella parte con circa un terzo della corrente, a triangolo lavora a piena potenza.',
      'KM1 porta la linea e resta chiuso; KM2 forma la stella, KM3 il triangolo. KT, alimentato con KM1, decide il passaggio: il 16 per la stella, il 18 per il triangolo.',
      'KM2 e KM3 insieme mettono le fasi in cortocircuito: ciascuno ha il NC 21-22 nel comando dell’altro, così anche un contattore incollato non fa danni.',
      'La stella ha poca forza: serve solo per partire, e sotto carico il motore si scalda.',
      'Dopo un arresto KT si azzera e il motore riparte sempre in stella.',
    ],
    fault: {
      say: 'L’impianto è già cablato. Premi Marcia: il motore parte in stella, ma passato il ritardo si ferma e non va in triangolo. Guarda la bobina di KM3.',
      wires: [
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
        ['KT.18', 'KM2.21', 'rosso'], ['KM2.22', 'KM3.A1', 'rosso'],
      ],
      diagnosis: {
        question: 'Perché dopo il ritardo il motore si ferma invece di passare in triangolo?',
        options: [
          { id: 'a', text: 'La bobina di KM3 non è collegata al neutro: non può chiudere.' },
          { id: 'b', text: 'Il temporizzatore KT è rotto e non scatta mai.' },
          { id: 'c', text: 'Il motore è in sovraccarico e il termico ha aperto.' },
        ],
        correct: 'a',
        why: 'Il temporizzatore ha lavorato: ha aperto KM2 e ha dato comando a KM3. Ma la bobina di KM3 ha un solo capo collegato, quindi non c’è corrente e il contattore non chiude. Con KM2 aperto e KM3 aperto il motore resta senza alimentazione. La bobina va tra una fase e il neutro.',
      },
      fixSay: 'Collega il morsetto A2 della bobina di KM3 al neutro del quadro, in blu, con il salvamotore aperto. Poi premi Verifica.',
    },
  },
  'c29-plc': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Perché esiste il PLC',
          paras: [
            'Pensa a marcia e arresto, quando hai cablato l’autoritenuta. Funzionava, ma tutta la logica era nei fili: se il cliente chiedeva "dopo dieci secondi si ferma da solo", bisognava aggiungere un temporizzatore e ricablare.',
            'Un PLC (controllore a logica programmabile) è un piccolo computer fatto per le macchine. I fili restano gli stessi, ma il comportamento lo decide un programma: per cambiarlo si riscrive il programma, senza toccare un filo.',
          ],
          table: {
            head: ['Con i relè e i contattori', 'Con il PLC'],
            rows: [
              ['La logica sta nei fili e nei contatti.', 'La logica sta in un programma.'],
              ['Cambiare comportamento vuol dire ricablare.', 'Cambiare comportamento vuol dire riscrivere il programma.'],
              ['L’autoritenuta è il contatto 13-14 del contattore.', 'L’autoritenuta è un gradino del programma.'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Il PLC nel lavoro vero',
          paras: [
            'Il PLC sta nel quadro, agganciato alla guida accanto ai contattori. Lo trovi nelle macchine dell’officina, nei cancelli automatici, negli ascensori, negli impianti delle case intelligenti.',
            'Il programma si scrive al computer, con il programma del costruttore del PLC, e si carica nel PLC con un cavo. L’elettricista cabla e collauda ingressi e uscite; il programma spesso lo scrive un tecnico; il manutentore lo legge per trovare i guasti. Il linguaggio più usato, il ladder, somiglia a uno schema a relè: è nato per gli elettricisti.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Una scatola con tre parti',
          paras: [
            'Un PLC fa sempre tre cose, una dopo l’altra: legge gli ingressi, esegue il programma, comanda le uscite. Gli ingressi sono i suoi occhi, il programma il suo cervello, le uscite le sue mani.',
            'I pulsanti e i sensori si collegano agli ingressi. Le uscite comandano ciò che si deve muovere, per esempio la bobina di un contattore. Il contattore resta indispensabile: le uscite del PLC sono piccoli relè che reggono pochi ampere, abbastanza per una bobina, non per un motore. Come nel teleruttore: comando piccolo, potenza grande.',
          ],
          warn: 'Il PLC non alimenta il motore: comanda il contattore, e il contattore porta la potenza.',
        },
        {
          type: 'pezzi',
          title: 'I morsetti del PLC',
          focus: ['PLC'],
          paras: [
            'In alto ci sono l’alimentazione (A1 e A2), gli ingressi I0, I1, I2 e il loro comune IC. In basso ci sono le uscite: Q0 è il contatto tra Q0A e Q0B, Q1 quello tra Q1A e Q1B.',
            'I pallini sopra gli ingressi si riempiono quando l’ingresso vale 1. I pallini sulle uscite si riempiono quando il programma ha chiuso il contatto.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Gli ingressi: come il PLC vede un pulsante',
          paras: [
            'Un ingresso non "sente" il pulsante: misura se tra l’ingresso e il comune IC c’è tensione. Con 230 V l’ingresso vale 1, senza tensione vale 0. Per misurare serve un secondo punto di riferimento: per questo IC va al neutro. Nel gioco gli ingressi sono a 230 V; molti PLC veri li hanno a 24 V, più sicuri da toccare.',
            'Quando premi Marcia, la fase passa dal pulsante e arriva all’ingresso I1: tra I1 e IC ci sono 230 V e I1 vale 1. Quando rilasci, la tensione sparisce e I1 torna a 0.',
          ],
          warn: 'Senza il collegamento di IC nessun ingresso può misurare tensione: restano tutti a 0, anche premendo.',
        },
        {
          type: 'spiegazione',
          title: 'Le uscite: il PLC non dà corrente',
          paras: [
            'Un’uscita a relè è solo un contatto, chiuso o aperto, che il programma comanda. Non porta tensione per conto suo: la tensione la porti tu.',
            'Per questo la fase entra in Q0A. Quando il programma chiude il contatto, la fase esce da Q0B e arriva alla bobina del contattore; l’altro capo della bobina va al neutro. Con il contatto aperto la bobina non riceve niente e il contattore resta aperto.',
            'Q1 comanda allo stesso modo la spia di marcia: dice all’operatore, anche da lontano, che il motore è in marcia.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché il PLC ha la sua alimentazione',
          paras: [
            'Il PLC è un computer: per funzionare ha bisogno di corrente, come una bobina. Si alimenta tra A1 e A2, fase e neutro. La fase si prende a valle del salvamotore: aprendolo si spegne anche il PLC, e tutto il comando resta senza tensione mentre lavori.',
            'Se manca l’alimentazione il programma si ferma e tutte le uscite si aprono: i contattori si aprono e la macchina si ferma. È il comportamento che vogliamo in caso di guasto. Il programma resta nella memoria del PLC: si perde solo lo stato del momento, come l’autoritenuta.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Uno e zero: il bit e il gradino',
          paras: [
            'Il PLC ragiona con due soli valori: 1 (c’è, vero, acceso) e 0 (non c’è, falso, spento). Un valore così si chiama bit. Ogni ingresso è un bit: I1 vale 1 se c’è tensione. Ogni uscita è un bit: Q0 vale 1 quando il suo contatto è chiuso.',
            'Il programma è fatto di gradini: righe che dicono quando un’uscita deve valere 1. Si scrivono con «e» (servono tutte le condizioni) e «oppure» (ne basta una). Qui il programma è già scritto; nel prossimo livello lo scriverai tu.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Una scansione, passo per passo',
          paras: [
            'Il PLC ripete in continuazione lo stesso ciclo, la scansione: legge gli ingressi, esegue i gradini dal primo all’ultimo, scrive le uscite. Dura pochi millisecondi: per noi è istantaneo.',
            'Il programma di questo livello ha un gradino principale: il motore Q0 è acceso se (Marcia I1 oppure Q0 stesso) e Arresto I0. Ecco cosa succede nelle quattro situazioni.',
          ],
          table: {
            head: ['Situazione', 'Cosa decide il programma'],
            rows: [
              ['A riposo: I0 = 1, I1 = 0, Q0 = 0', '(0 oppure 0) e 1 è falso: Q0 resta 0.'],
              ['Premi Marcia: I1 = 1', '(1 oppure 0) e 1 è vero: Q0 diventa 1 e il contattore si chiude.'],
              ['Rilasci Marcia: I1 = 0, Q0 = 1', '(0 oppure 1) e 1 è ancora vero: Q0 resta 1. È l’autoritenuta.'],
              ['Premi Arresto: I0 = 0', '(…) e 0 è falso: Q0 torna a 0 e il motore si ferma.'],
              ['Marcia e Arresto insieme', '(1 oppure …) e 0 è falso: vince l’arresto, come nei fili.'],
            ],
          },
          warn: 'L’arresto è un contatto NC: a riposo porta tensione e I0 vale 1. Premendolo, I0 va a 0. Un filo staccato fa lo stesso: la macchina si ferma. Ma se il PLC si blocca con Q0 chiuso, Arresto non conta più: per questo l’emergenza resta nei fili, come vedrai nel nastro con il PLC.',
        },
        {
          type: 'demo',
          title: 'Guarda come si fa',
          captions: {
            wires: [
              'La fase L1 entra nel salvamotore, morsetto 1.',
              'La fase L2 entra nel salvamotore, morsetto 3.',
              'La fase L3 entra nel salvamotore, morsetto 5.',
              'Dal salvamotore al contattore.',
              'Dal salvamotore al contattore.',
              'Dal salvamotore al contattore.',
              'Dal contattore al motore.',
              'Dal contattore al motore.',
              'Dal contattore al motore.',
              'La terra del quadro al motore.',
              'Il PLC si alimenta: una fase a valle del salvamotore ad A1.',
              'A2 va al neutro.',
              'La fase passa dal pulsante di arresto (NC).',
              'E dall’arresto arriva all’ingresso I0.',
              'La fase passa dal pulsante di marcia (NA).',
              'E dalla marcia arriva all’ingresso I1.',
              'Il comune degli ingressi IC va al neutro.',
              'Il contatto di uscita Q0 riceve la fase.',
              'Dal contatto Q0 alla bobina del contattore.',
              'La bobina del contattore torna al neutro.',
              'Il contatto di uscita Q1 riceve la fase.',
              'Dal contatto Q1 alla spia.',
              'La spia torna al neutro.',
            ],
            power: 'Il salvamotore è aperto: tutto a valle è senza tensione.',
            controls: [],
          },
        },
        {
          type: 'previsione',
          question: 'A che cosa serve il collegamento del comune IC al neutro?',
          options: [
            { id: 'a', text: 'Dà agli ingressi il ritorno: senza, nessun ingresso arriva mai a 1.' },
            { id: 'b', text: 'Alimenta il PLC: senza IC il programma non può girare.' },
            { id: 'c', text: 'Mette a terra il PLC, per sicurezza, come la carcassa del motore.' },
          ],
          correct: 'a',
          why: 'Un ingresso misura la tensione tra se stesso e IC. L’alimentazione del PLC è un’altra cosa e passa da A1 e A2. Con IC scollegato non c’è un ritorno e tutti gli ingressi restano a 0.',
        },
        {
          type: 'previsione',
          question: 'Il filo del pulsante di arresto si stacca dall’ingresso I0. Che cosa succede?',
          options: [
            { id: 'a', text: 'Il motore parte lo stesso: l’arresto conta solo quando lo premi.' },
            { id: 'b', text: 'I0 va a 0, come con Arresto premuto: il motore non parte o si ferma.' },
            { id: 'c', text: 'Niente: il PLC ricorda l’ultimo valore buono che ha letto da I0.' },
          ],
          correct: 'b',
          why: 'L’arresto è normalmente chiuso, quindi a riposo porta tensione e I0 vale 1. Un filo staccato toglie la tensione: I0 vale 0, come se si premesse Arresto. Il guasto porta la macchina nello stato sicuro.',
        },
        {
          type: 'previsione',
          question: 'Perché nel gradino del motore compare anche Q0 oltre a I1?',
          options: [
            { id: 'a', text: 'Per far partire il motore più forte, con due comandi insieme.' },
            { id: 'b', text: 'Per tenere acceso Q0 dopo che Marcia è rilasciata: è l’autoritenuta.' },
            { id: 'c', text: 'Per contare quante volte si preme Marcia durante il turno.' },
          ],
          correct: 'b',
          why: 'Marcia è un impulso. Appena I1 torna a 0, serve qualcosa che tenga acceso Q0: lo stesso Q0, in parallelo a I1, che vale 1 finché il gradino resta vero.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'control', id: 'QM', short: '0 Sezionamento', title: 'Apri il salvamotore', text: 'Il salvamotore parte chiuso: aprilo toccando la levetta, così i morsetti a valle sono senza tensione mentre cabli. Perché: collegare fili in tensione è pericoloso. Lo richiudi solo alla fine, per provare.' },
      { kind: 'wire', from: 'PLC.A1', to: ['QM.2'], color: 'rosso', short: '1 Alimentazione', title: 'Alimenta il PLC', text: 'Filo rosso da una fase a valle del salvamotore (morsetto 2) ad A1, filo blu da A2 al neutro. Perché: il PLC è un computer e ha bisogno di corrente per funzionare, come una bobina.' },
      { kind: 'wire', from: 'SB0.2', to: ['PLC.I0'], color: 'rosso', short: '2 Arresto', title: 'Arresto all’ingresso I0', text: 'Dalla fase al morsetto 1 del pulsante di arresto, dal morsetto 2 all’ingresso I0, in rosso. Perché: a riposo il pulsante porta tensione e I0 vale 1; premendolo I0 va a 0 e il PLC lo legge come “stop”.' },
      { kind: 'wire', from: 'SB1.4', to: ['PLC.I1'], color: 'rosso', short: '3 Marcia', title: 'Marcia all’ingresso I1', text: 'Dalla fase al morsetto 3 del pulsante di marcia, dal morsetto 4 all’ingresso I1, in rosso. Perché: premendo Marcia arriva la tensione a I1 e il PLC legge 1; rilasciando torna 0.' },
      { kind: 'wire', from: 'PLC.IC', to: ['Q.N'], color: 'blu', short: '4 Comune', title: 'Il comune degli ingressi', text: 'Il morsetto IC al neutro, in blu. Perché: gli ingressi misurano la tensione tra se stessi e IC; senza IC non c’è un punto di riferimento e tutti gli ingressi valgono 0.' },
      { kind: 'wire', from: 'PLC.Q0B', to: ['KM.A1'], color: 'rosso', short: '5 Uscita Q0', title: 'L’uscita Q0 al contattore', text: 'La fase entra in Q0A, esce da Q0B e va ad A1 del contattore. A2 del contattore va al neutro. Perché: l’uscita è solo un contatto, la tensione la porti tu; quando il programma lo chiude la fase arriva alla bobina.' },
      { kind: 'wire', from: 'PLC.Q1B', to: ['H.X1'], color: 'rosso', short: '6 Uscita Q1', title: 'L’uscita Q1 alla spia', text: 'La fase entra in Q1A, esce da Q1B e va alla spia. L’altro capo della spia va al neutro. Perché: anche la spia è comandata dal PLC, con un’altra uscita.' },
      { kind: 'control', id: 'SB1', short: '7 Prova', title: 'Prova la marcia', text: 'Chiudi il salvamotore e premi Marcia: il motore parte e resta in marcia. Premi Arresto: si ferma.' },
      { kind: 'verify', short: '8 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Con un PLC la logica sta nel programma: per cambiare come lavora la macchina si cambia il programma, non i fili.',
      'Un ingresso vale 1 se c’è tensione tra lui e il comune IC: per questo IC va al neutro, senza ritorno nessun ingresso arriva a 1.',
      'Un’uscita è solo un contatto piccolo: la tensione gliela porti tu, e comanda la bobina del contattore, mai il motore.',
      'Il programma gira a cicli (scansione): legge gli ingressi, esegue i gradini, scrive le uscite. L’autoritenuta è Q0 riletto in parallelo alla marcia.',
      'L’arresto resta un pulsante NC: un filo staccato porta I0 a 0 e ferma la macchina, come nei fili.',
    ],
    fault: {
      say: 'L’impianto è già cablato, ma premendo Marcia il motore non parte. Guarda il PLC: gli ingressi si accendono?',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
        ['KM.2', 'M.U', 'marrone'], ['KM.4', 'M.V', 'nero'], ['KM.6', 'M.W', 'grigio'],
        ['M.PE', 'Q.PE', 'gv'],
        ['QM.2', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'],
        ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'PLC.I0', 'rosso'],
        ['QM.2', 'SB1.3', 'rosso'], ['SB1.4', 'PLC.I1', 'rosso'],
        ['QM.2', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
        ['QM.2', 'PLC.Q1A', 'rosso'], ['PLC.Q1B', 'H.X1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Perché il motore non parte?',
        options: [
          { id: 'a', text: 'Il comune degli ingressi IC non è collegato al neutro: gli ingressi non vedono mai tensione.' },
          { id: 'b', text: 'Il programma del PLC è sbagliato.' },
          { id: 'c', text: 'Il contattore è bruciato.' },
        ],
        correct: 'a',
        why: 'Un ingresso legge la tensione tra se stesso e IC. Con IC scollegato non c’è un ritorno: anche premendo Marcia, e anche con Arresto a riposo, tutti gli ingressi valgono 0 e il programma non accende mai Q0. Il programma è giusto: manca il filo.',
      },
      fixSay: 'Collega il morsetto IC del PLC al neutro del quadro, in blu, con il salvamotore aperto. Poi premi Verifica.',
    },
  },
  'c30-ladder': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Il ladder: lo schema a scala',
          paras: [
            'Il ladder è nato per gli elettricisti: si legge come lo schema a relè di marcia e arresto. Due righe verticali, i montanti, fanno da fase a sinistra e da neutro a destra; tra loro, i gradini. Ogni gradino ha a sinistra dei contatti e a destra una bobina.',
            'La «corrente» passa nel gradino da sinistra a destra se i contatti lasciano passare (un modo di dire), e la bobina si accende. Ma nel ladder la bobina non è un filo di rame, è il bit che il gradino accende. Può essere un’uscita (Q0, Q1) o un bit interno, una casella di memoria che non esce dal PLC.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Contatti in serie e in parallelo',
          paras: [
            'Un contatto normalmente aperto lascia passare quando il suo bit vale 1. Un contatto normalmente chiuso lascia passare quando il bit vale 0.',
            'Contatti in serie sono un E: servono tutti. Contatti in parallelo sono un O: ne basta uno. L’autoritenuta è proprio un parallelo: Marcia oppure l’uscita stessa.',
          ],
          table: {
            head: ['Elemento del gradino', 'Si comporta così'],
            rows: [
              ['Contatto normalmente aperto', 'lascia passare quando il suo bit vale 1'],
              ['Contatto normalmente chiuso', 'lascia passare quando il suo bit vale 0'],
              ['Contatti in serie', 'passa solo se passano tutti (E)'],
              ['Contatti in parallelo', 'passa se passa almeno uno (O)'],
              ['Bobina', 'il suo bit segue la condizione del gradino'],
            ],
          },
        },
        {
          type: 'previsione',
          question: 'Un gradino ha un contatto normalmente aperto su I1 e la bobina Q0. Che cosa succede se I1 vale 1?',
          options: [
            { id: 'a', text: 'Q0 si accende, e si spegne appena I1 torna a 0.' },
            { id: 'b', text: 'Q0 si accende e resta acceso per sempre.' },
            { id: 'c', text: 'Non succede niente: il contatto NA blocca.' },
          ],
          correct: 'a',
          why: 'Una bobina segue la condizione del suo gradino: la condizione è vera quando I1 vale 1, quindi Q0 vale 1, e torna a 0 quando I1 torna a 0. Per farlo restare acceso serve l’autoritenuta.',
        },
        {
          type: 'previsione',
          question: 'Marcia è un impulso e deve far restare acceso Q0 anche dopo il rilascio. Come si aggiunge il contatto di Q0 al contatto di Marcia?',
          options: [
            { id: 'a', text: 'In serie: servono tutti e due insieme.' },
            { id: 'b', text: 'In parallelo: ne basta uno dei due.' },
            { id: 'c', text: 'Non serve: il PLC lo ricorda da solo.' },
          ],
          correct: 'b',
          why: 'All’inizio Q0 vale 0, quindi serve Marcia. Una volta acceso, Q0 vale 1 e tiene vero il gradino anche con Marcia a 0. Due contatti dei quali basta uno sono in parallelo.',
        },
        {
          type: 'spiegazione',
          title: 'Costruire il gradino un pezzo alla volta',
          paras: [
            'Un gradino si costruisce aggiungendo un elemento per volta e chiedendosi ogni volta che cosa cambia. Ecco il gradino del motore, nell’ordine in cui conviene scriverlo.',
          ],
          table: {
            head: ['Che cosa aggiungi', 'Che effetto ha'],
            rows: [
              ['La bobina Q0', 'Il gradino comanda l’uscita che chiude il contattore.'],
              ['Il contatto di Marcia I1', 'Il motore parte, ma solo finché tieni premuto Marcia.'],
              ['In parallelo, il contatto di Q0', 'Dopo la partenza Q0 tiene vero il gradino: il motore resta acceso. È l’autoritenuta.'],
              ['In serie, il contatto di Arresto I0', 'Premendo Arresto il gradino diventa falso e il motore si ferma.'],
              ['Un secondo gradino: Q0 e la bobina Q1', 'Ogni gradino ha una sola bobina, quindi la spia ne vuole uno suo. Segue Q0 perché deve dire «motore in marcia»: sul contatto di Marcia si accenderebbe solo finché premi.'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Come si scrive il programma',
          paras: [
            'Sotto il banco c’è l’editor. Premi Nuovo gradino, poi Aggiungi contatto e scegli quale ingresso o uscita leggere. Toccando un contatto puoi cambiarlo, metterlo normalmente chiuso, affiancarne uno in parallelo o toglierlo. Alla fine scegli la bobina del gradino.',
            'Il PLC è acceso e il programma gira: prova subito Marcia e Arresto e guarda i contatti che si colorano.',
          ],
          warn: 'L’arresto è cablato come contatto NC: a riposo porta tensione e I0 vale 1. Nel programma il suo contatto serve normalmente aperto, perché deve lasciar passare quando I0 vale 1.',
        },
        {
          type: 'previsione',
          question: 'Con l’arresto cablato NC, quale contatto di I0 metti nel gradino del motore?',
          options: [
            { id: 'a', text: 'Normalmente aperto: passa quando I0 vale 1, cioè a riposo.' },
            { id: 'b', text: 'Normalmente chiuso: così il motore si ferma quando lo premi.' },
            { id: 'c', text: 'Nessuno: l’arresto ferma il motore già nei fili, non nel programma.' },
          ],
          correct: 'a',
          why: 'È facile sbagliare: "arresto = contatto chiuso". Ma è l’ingresso I0 a valere 1 a riposo, perché il pulsante cablato NC porta tensione. Premendo, I0 va a 0 e un contatto normalmente aperto smette di lasciar passare: il motore si ferma.',
        },
        {
          type: 'spiegazione',
          title: 'Due NC diversi: nei fili e nel programma',
          paras: [
            'Nel programma non si pensa al tipo di pulsante, ma al valore del bit: il contatto deve lasciar passare quando la macchina può andare. In serie l’ordine dei contatti non conta, e con Marcia e Arresto premuti insieme vince l’arresto. Ecco l’arresto, dal pulsante al gradino.',
          ],
          table: {
            head: ['Dove', 'Che cosa succede e perché'],
            rows: [
              ['Nei fili', 'Il pulsante di arresto è NC per sicurezza: a riposo porta tensione e I0 vale 1; un filo staccato porta I0 a 0.'],
              ['Nel gradino', 'Il contatto di I0 è NA: lascia passare quando I0 vale 1, cioè a riposo. Premi Arresto, I0 va a 0, il gradino diventa falso.'],
              ['Se lo metti NC', 'Lascerebbe passare solo con I0 a 0: a riposo il motore non partirebbe, e con un filo staccato partirebbe con Marcia e non si fermerebbe più.'],
            ],
          },
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'program', plc: 'PLC', min: 1, short: '1 Motore', title: 'Il gradino del motore', text: 'Nuovo gradino: la bobina Q0, il contatto Marcia (I1) con Q0 in parallelo, e in serie l’arresto (I0). Perché: Marcia fa partire, Q0 in parallelo tiene acceso, I0 in serie spegne.' },
      { kind: 'program', plc: 'PLC', min: 2, short: '2 Spia', title: 'Il gradino della spia', text: 'Secondo gradino: un contatto Q0 e la bobina Q1. Perché: la spia deve accendersi quando il motore è acceso, quindi segue Q0.' },
      { kind: 'control', id: 'SB1', short: '3 Prova', title: 'Prova la marcia', text: 'Premi Marcia: il motore parte e resta in marcia. Premi Arresto: si ferma.' },
      { kind: 'verify', short: '4 Verifica', title: 'Controlla il programma', text: 'Premi Verifica.' },
    ],
    summary: [
      'Il ladder si legge come uno schema a relè: contatti a sinistra, a destra la bobina, che è il bit acceso dal gradino.',
      'Contatti in serie sono un «e» (servono tutti), in parallelo un «oppure» (ne basta uno): l’autoritenuta è Q0 in parallelo a Marcia.',
      'Nel programma conta il valore del bit: l’arresto cablato NC dà I0 = 1 a riposo, quindi nel gradino il suo contatto è NA.',
      'Con il contatto di I0 messo NC il motore non parte a riposo, e con un filo staccato non si ferma più.',
      'La spia ha un gradino suo e segue Q0, perché deve dire «motore in marcia», non «Marcia premuto».',
    ],
    fault: {
      say: 'Il programma è già scritto, ma premendo Marcia il motore non parte. Guarda i contatti nel ladder: quale non si colora?',
      wires: [
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
      programs: {
        PLC: [
          { if: ['and', ['or', 'I1', 'Q0'], ['not', 'I0']], do: [{ op: 'coil', a: 'Q0' }] },
          { if: 'Q0', do: [{ op: 'coil', a: 'Q1' }] },
        ],
      },
      diagnosis: {
        question: 'Perché il motore non parte?',
        options: [
          { id: 'a', text: 'Il contatto di I0 è normalmente chiuso, ma I0 vale 1 a riposo: il gradino non è mai vero.' },
          { id: 'b', text: 'Manca l’autoritenuta.' },
          { id: 'c', text: 'Il pulsante di marcia è rotto.' },
        ],
        correct: 'a',
        why: 'L’arresto è cablato NC, quindi I0 vale 1 a riposo e 0 solo premendolo. Un contatto normalmente chiuso su I0 lascia passare con I0 a 0: a riposo il gradino è sempre interrotto, e Marcia non basta. Serve un contatto normalmente aperto.',
      },
      fixSay: 'Tocca il contatto di I0 nel gradino 1 e cambialo in normalmente aperto. Poi premi Verifica.',
    },
  },
  'c31-tempo': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Il tempo nel programma',
          paras: [
            'In stella-triangolo il passaggio da stella a triangolo avviene dopo un ritardo, e nel cablaggio lo faceva un temporizzatore a parte, KT. Un PLC non ne ha bisogno: contare il tempo è una funzione del programma.',
            'Questo livello rifà lo stesso motore, con gli stessi tre contattori, ma senza KT. Il PLC comanda tutti e tre: Q0 la linea (KM1), che resta acceso per tutto il tempo come in c28, Q1 la stella (KM2), Q2 il triangolo (KM3). I fili sono già fatti, compreso l’interblocco tra stella e triangolo. I 6 secondi sono il tempo che il motore impiega a prendere velocità.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il temporizzatore TON',
          paras: [
            'Il TON (temporizzatore con ritardo all’accensione) ha una condizione in ingresso, un tempo impostato e un bit di uscita, per esempio T1. Quando la condizione diventa vera il TON comincia a contare. Passato il tempo, T1 diventa 1 e ci resta finché la condizione resta vera.',
            'Se la condizione cade, cioè torna falsa anche per un attimo, il conteggio si azzera e T1 torna a 0. È voluto: dopo un arresto il motore rallenta, e deve ripartire in stella con il tempo pieno, come faceva KT in c28. T1 si legge come un contatto: NA passa con T1 a 1, NC con T1 ancora a 0.',
          ],
          table: {
            head: ['Che cosa succede', 'Valore di T1 (tempo 6 s)'],
            rows: [
              ['La condizione diventa vera: il conteggio parte', '0'],
              ['Sono passati 3 secondi, condizione ancora vera', '0'],
              ['Sono passati 6 secondi, condizione ancora vera', '1'],
              ['La condizione cade: il conteggio si azzera', '0'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'I tre gradini del programma',
          paras: [
            'Oltre al gradino di marcia e arresto, che accende Q0, servono tre gradini: il temporizzatore, la stella, il triangolo. Ognuno risponde a una domanda semplice.',
          ],
          table: {
            head: ['Gradino', 'Quando è vero, e che cosa fa'],
            rows: [
              ['Temporizzatore T1', 'Q0 è acceso: parte il conteggio dei 6 secondi.'],
              ['Stella Q1', 'Q0 è acceso e T1 vale ancora 0: stella per i primi 6 secondi.'],
              ['Triangolo Q2', 'Q0 è acceso e T1 vale 1: dopo 6 secondi si passa a triangolo.'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Stella e triangolo non insieme',
          paras: [
            'Come in c28, stella e triangolo non devono mai essere chiusi insieme: le tre fasi andrebbero in cortocircuito. Per questo l’interblocco con i contatti NC resta nei fili: la bobina della stella passa dal contatto NC di KM3, quella del triangolo dal contatto NC di KM2. Un errore nel programma o un contattore incollato non possono scavalcarlo.',
            'Il programma aggiunge il suo interblocco: i due gradini usano T1 in modo opposto, la stella lo vuole a 0 e il triangolo a 1. Non possono essere veri nello stesso momento, quindi Q1 e Q2 non si accendono mai insieme. Due protezioni, una nei fili e una nel programma.',
          ],
          warn: 'Se dimentichi T1 nel gradino della stella, a 6 secondi il PLC accende anche il triangolo mentre la stella è ancora chiusa. L’interblocco nei fili impedisce il corto, ma il motore resta in stella e non arriva mai a piena potenza.',
        },
        {
          type: 'previsione',
          question: 'Il motore è in marcia da 3 secondi e il tempo impostato è 6. Quanto vale T1?',
          options: [
            { id: 'a', text: '1: il temporizzatore ha già cominciato a contare.' },
            { id: 'b', text: '0: T1 diventa 1 solo quando il tempo è passato.' },
            { id: 'c', text: 'Dipende da Marcia.' },
          ],
          correct: 'b',
          why: 'T1 è il bit "tempo scaduto". Resta a 0 durante il conteggio e diventa 1 solo quando sono passati tutti i 6 secondi, con la condizione sempre vera. Per questo la stella resta accesa nei primi 6 secondi.',
        },
        {
          type: 'previsione',
          question: 'Durante il conteggio premi Arresto, poi di nuovo Marcia. Quanto aspetta il motore prima del triangolo?',
          options: [
            { id: 'a', text: 'Solo il tempo che mancava: il TON se lo ricorda.' },
            { id: 'b', text: 'Altri 6 secondi pieni: il conteggio riparte da zero.' },
            { id: 'c', text: 'Va subito in triangolo: il tempo è già passato.' },
          ],
          correct: 'b',
          why: 'Premendo Arresto, Q0 si spegne e la condizione del TON cade: il conteggio si azzera. Alla nuova partenza il motore riparte in stella e il tempo si ricomincia da capo, come richiede un avviamento corretto.',
        },
        {
          type: 'previsione',
          question: 'Nel gradino della stella c’è solo il contatto Q0, senza T1. Che cosa succede dopo 6 secondi?',
          options: [
            { id: 'a', text: 'Passa in triangolo regolarmente: T1 accende Q2 e la stella si spegne da sola.' },
            { id: 'b', text: 'Il PLC accende stella e triangolo, ma l’interblocco nei fili tiene il motore in stella.' },
            { id: 'c', text: 'Stella e triangolo si chiudono insieme, c’è un cortocircuito e il salvamotore scatta.' },
          ],
          correct: 'b',
          why: 'Senza T1 la stella resta accesa finché Q0 è acceso, anche dopo i 6 secondi. Allo scadere il PLC accende anche Q2, ma la bobina del triangolo passa dal contatto NC di KM2, che è aperto: il triangolo non chiude. Niente corto, grazie ai fili, ma il motore resta in stella. Senza l’interblocco nei fili sarebbe stato un cortocircuito.',
        },
        {
          type: 'spiegazione',
          title: 'Come si inserisce il temporizzatore',
          paras: [
            'Nell’editor, un gradino con un temporizzatore ha come uscita non una bobina ma il TON. Aggiungi un gradino, poi Aggiungi uscita, e scegli Temporizzatore: puoi impostare il tempo in secondi.',
            'Il suo bit, T1, compare poi tra i bit che puoi scegliere nei contatti degli altri gradini. Per averlo normalmente chiuso, cambia il tipo del contatto in Normalmente chiuso.',
          ],
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'program', plc: 'PLC', min: 2, short: '1 Tempo', title: 'Il temporizzatore', text: 'Nuovo gradino: contatto Q0 e, come uscita, un temporizzatore di 6 secondi. Perché: il conteggio deve partire quando il motore è acceso.' },
      { kind: 'program', plc: 'PLC', min: 3, short: '2 Stella', title: 'Il gradino della stella', text: 'Contatto Q0 in serie con T1 normalmente chiuso, bobina Q1. Perché: la stella vale solo finché il tempo non è scaduto.' },
      { kind: 'program', plc: 'PLC', min: 4, short: '3 Triangolo', title: 'Il gradino del triangolo', text: 'Contatto Q0 in serie con T1 normalmente aperto, bobina Q2. Perché: il triangolo parte quando il tempo è scaduto e non si sovrappone alla stella.' },
      { kind: 'control', id: 'SB1', short: '4 Prova', title: 'Prova l’avviamento', text: 'Premi Marcia: il motore parte in stella e, dopo 6 secondi, passa in triangolo. Premi Arresto: si ferma.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla il programma', text: 'Premi Verifica.' },
    ],
    summary: [
      'Un PLC conta il tempo da solo, con un temporizzatore TON: il KT dei fili diventa una riga del programma.',
      'Il TON parte quando la sua condizione è vera e il suo bit T1 diventa 1 dopo il tempo impostato; se la condizione cade si azzera, così dopo un arresto il motore riparte in stella con il tempo pieno.',
      'Stella e triangolo si distinguono con T1: la stella lo vuole a 0, il triangolo a 1.',
      'L’interblocco tra stella e triangolo resta nei fili: anche se il programma li comanda nella stessa scansione, il NC di KM2 lascia chiudere KM3 solo quando KM2 si è davvero aperto. Il programma ne aggiunge un secondo, con T1 usato in modo opposto.',
      'Q0, la linea, resta acceso per tutto l’avviamento: stella e triangolo cambiano solo come sono uniti gli avvolgimenti.',
    ],
    fault: {
      say: 'Il programma è già scritto, ma premendo Marcia il motore parte in stella e non passa mai in triangolo. Guarda il gradino della stella e le uscite del PLC dopo 6 secondi.',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'KM1.1', 'marrone'], ['QM.4', 'KM1.3', 'nero'], ['QM.6', 'KM1.5', 'grigio'],
        ['KM1.2', 'M.U1', 'marrone'], ['KM1.4', 'M.V1', 'nero'], ['KM1.6', 'M.W1', 'grigio'],
        ['KM2.1', 'M.U2', 'marrone'], ['KM2.3', 'M.V2', 'nero'], ['KM2.5', 'M.W2', 'grigio'],
        ['KM2.2', 'KM2.4', 'nero'], ['KM2.4', 'KM2.6', 'nero'],
        ['KM3.1', 'M.U1', 'marrone'], ['KM3.2', 'M.W2', 'grigio'],
        ['KM3.3', 'M.V1', 'nero'], ['KM3.4', 'M.U2', 'marrone'],
        ['KM3.5', 'M.W1', 'grigio'], ['KM3.6', 'M.V2', 'nero'],
        ['M.PE', 'Q.PE', 'gv'],
        ['QM.2', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'],
        ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'PLC.I0', 'rosso'],
        ['QM.2', 'SB1.3', 'rosso'], ['SB1.4', 'PLC.I1', 'rosso'],
        ['PLC.IC', 'Q.N', 'blu'],
        ['QM.2', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'KM1.A1', 'rosso'], ['KM1.A2', 'Q.N', 'blu'],
        ['QM.2', 'PLC.Q1A', 'rosso'], ['PLC.Q1B', 'KM3.21', 'rosso'], ['KM3.22', 'KM2.A1', 'rosso'], ['KM2.A2', 'Q.N', 'blu'],
        ['QM.2', 'PLC.Q2A', 'rosso'], ['PLC.Q2B', 'KM2.21', 'rosso'], ['KM2.22', 'KM3.A1', 'rosso'], ['KM3.A2', 'Q.N', 'blu'],
      ],
      programs: {
        PLC: [
          { if: ['and', ['or', 'I1', 'Q0'], 'I0'], do: [{ op: 'coil', a: 'Q0' }] },
          { if: 'Q0', do: [{ op: 'ton', id: 'T1', pt: 6 }] },
          { if: 'Q0', do: [{ op: 'coil', a: 'Q1' }] },
          { if: ['and', 'Q0', 'T1'], do: [{ op: 'coil', a: 'Q2' }] },
        ],
      },
      diagnosis: {
        question: 'Perché il motore non passa mai in triangolo?',
        options: [
          { id: 'a', text: 'Il gradino della stella non guarda T1: la stella resta accesa e l’interblocco nei fili impedisce al triangolo di chiudere.' },
          { id: 'b', text: 'Il tempo impostato è troppo lungo.' },
          { id: 'c', text: 'Il motore è in sovraccarico.' },
        ],
        correct: 'a',
        why: 'Il gradino della stella dipende solo da Q0, quindi resta vero anche dopo i 6 secondi. Quando T1 diventa 1 il PLC accende anche Q2, ma la bobina del triangolo passa dal contatto NC di KM2, aperto finché la stella è chiusa. L’interblocco nei fili ha evitato il corto. Serve T1 normalmente chiuso nel gradino della stella.',
      },
      fixSay: 'Nel gradino della stella aggiungi in serie un contatto di T1 e mettilo normalmente chiuso. Poi premi Verifica.',
    },
  },
  'c32-nastro-plc': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Un nastro che conta',
          paras: [
            'Un nastro trasporta pacchi in lotti da tre. Una fotocellula guarda ogni pacco che passa. Quando ne sono passati tre il nastro si ferma e una spia dice all’operatore "lotto completo": può portare via i pacchi. Con Marcia parte il lotto successivo, e Marcia azzera anche il conteggio: per questo si preme solo per cominciare un lotto.',
            'Con i relè servirebbe un contatore elettromeccanico a parte. Con un PLC il conteggio è un’istruzione del programma, e la logica del nastro sta tutta nel ladder.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'La fotocellula è un ingresso',
          paras: [
            'Una fotocellula è un sensore: quando un pacco interrompe il raggio chiude un contatto, come un pulsante premuto per il tempo in cui il pacco passa. Per il PLC è un ingresso come gli altri: vale 1 mentre il pacco c’è, 0 quando non c’è.',
            'Nel gioco la fotocellula è un pulsante da tenere premuto per un attimo: ogni pressione e rilascio è un pacco che passa.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il contatore CTU',
          paras: [
            'Il CTU (contatore in avanti) ha una condizione, un numero a cui arrivare e un ingresso di azzeramento. A ogni fronte di salita della condizione, cioè a ogni volta che passa da 0 a 1, aggiunge uno. Quando il conteggio raggiunge il numero, il suo bit C1 diventa 1.',
            'Conta i fronti, non il tempo in cui la condizione resta vera: un pacco lungo, che tiene la fotocellula a 1 per un secondo, vale uno solo. L’ingresso di azzeramento riporta il conteggio a zero.',
          ],
          table: {
            head: ['Pacchi passati', 'Conteggio e bit C1 (si conta fino a 3)'],
            rows: [
              ['Nessuno', 'conteggio 0, C1 = 0'],
              ['Uno', 'conteggio 1, C1 = 0'],
              ['Due', 'conteggio 2, C1 = 0'],
              ['Tre', 'conteggio 3, C1 = 1: lotto completo'],
              ['Marcia (azzeramento)', 'conteggio 0, C1 = 0: lotto nuovo'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Fungo e termico restano nei fili',
          paras: [
            'L’arresto è un comando di lavoro e può passare dal programma. L’emergenza e la protezione del motore no: fermano un pericolo, e non devono mai dipendere dal programma, perché un programma può avere un errore e un PLC può bloccarsi. Per questo il contatto del fungo e il contatto 95-96 del termico stanno in serie alla bobina del contattore, nei fili.',
            'Guarda il banco: la fase passa dal fungo, dal termico, poi dall’uscita Q0 del PLC e solo allora arriva alla bobina. Il PLC può solo dire "no" quando vuole fermare il nastro; non può forzare la marcia se fungo o termico sono aperti.',
          ],
          table: {
            head: ['Che cosa', 'Dove sta'],
            rows: [
              ['Marcia, arresto, conteggio, spia', 'nel programma'],
              ['Contatto del fungo di emergenza', 'nei fili, in serie alla bobina'],
              ['Contatto del relè termico', 'nei fili, in serie alla bobina'],
              ['Dire al PLC se fungo e termico sono a posto', 'un filo dal morsetto 96 del termico, l’ultimo punto dopo le sicurezze, all’ingresso I3'],
            ],
          },
          warn: 'La verifica prova anche questo: forza tutte le uscite del PLC a 1, cioè le chiude tutte come se il programma sbagliasse, e controlla che con il fungo premuto il nastro si fermi lo stesso.',
        },
        {
          type: 'spiegazione',
          title: 'Perché il PLC deve saperlo lo stesso',
          paras: [
            'Premendo il fungo la bobina perde la fase e il nastro si ferma subito, anche se il PLC non se ne accorge. Ma il PLC pensa ancora di avere Q0 acceso, per via dell’autoritenuta. Sbloccando il fungo la bobina torna alimentata e il nastro ripartirebbe da solo. Lo stesso succederebbe riarmando il termico dopo un sovraccarico.',
            'Per evitarlo un filo porta all’ingresso I3 il punto che sta dopo il fungo e il termico: è il consenso delle sicurezze, cioè il loro permesso. Vale 1 solo se il fungo è sbloccato e il termico non è scattato.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il consenso nel gradino',
          paras: [
            'Nel gradino del nastro I3 è in serie: se una sicurezza interviene I3 va a 0, Q0 si spegne e l’autoritenuta si scioglie. Per ripartire serve un nuovo Marcia, come nel nastro del Modulo 3.',
            'Resta un caso: se il PLC fosse bloccato con Q0 chiuso, sbloccando il fungo il nastro ripartirebbe. Per questo nelle macchine vere l’emergenza passa anche da un relè di sicurezza, che ridà tensione solo dopo un comando apposta: lo vedrai nel Modulo 6.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'L’ordine dei gradini conta',
          paras: [
            'Il PLC esegue i gradini dall’alto in basso, e un bit scritto in un gradino si legge subito nei gradini successivi della stessa scansione. Per questo il gradino del contatore va per primo.',
            'Quando passa il terzo pacco, il primo gradino porta C1 a 1 e il gradino del nastro, subito sotto, vede C1 pieno e spegne Q0 nella stessa scansione. Se il contatore stesse dopo, il nastro si fermerebbe con un ciclo di ritardo: pochi millisecondi, ma l’ordine giusto è più chiaro.',
          ],
        },
        {
          type: 'previsione',
          question: 'Il fungo è premuto e il PLC si blocca con l’uscita Q0 accesa. Che cosa fa il nastro?',
          options: [
            { id: 'a', text: 'Continua a girare: è il PLC che comanda la bobina, e Q0 è acceso.' },
            { id: 'b', text: 'Si ferma comunque: il fungo apre il comando nei fili, prima della bobina.' },
            { id: 'c', text: 'Dipende dal programma: se il PLC è bloccato decide l’ultimo gradino.' },
          ],
          correct: 'b',
          why: 'Il contatto del fungo è in serie alla bobina, prima dell’uscita del PLC. Anche con Q0 chiuso la fase non arriva alla bobina. È proprio il motivo per cui l’emergenza non passa dal programma.',
        },
        {
          type: 'previsione',
          question: 'Un pacco lungo tiene la fotocellula a 1 per un secondo intero. Quanti pacchi conta il CTU?',
          options: [
            { id: 'a', text: 'Uno: conta i fronti di salita, non il tempo.' },
            { id: 'b', text: 'Tanti quante sono le scansioni in cui I2 vale 1.' },
            { id: 'c', text: 'Nessuno: un pacco lungo non si conta.' },
          ],
          correct: 'a',
          why: 'Il CTU aggiunge uno solo nel momento in cui la condizione passa da 0 a 1. Finché resta a 1 non conta altro: un pacco lungo vale uno.',
        },
        {
          type: 'previsione',
          question: 'Nel programma manca I3, il consenso delle sicurezze, nel gradino del nastro. Premi e sblocchi il fungo. Che cosa succede?',
          options: [
            { id: 'a', text: 'Resta fermo: il fungo lo ha fermato e serve di nuovo Marcia.' },
            { id: 'b', text: 'Riparte da solo: per il programma Q0 era ancora acceso.' },
            { id: 'c', text: 'Scatta il termico: il motore riparte di colpo sotto carico.' },
          ],
          correct: 'b',
          why: 'Il fungo ha fermato il nastro nei fili, ma per il programma Q0 era ancora acceso. Allo sblocco la bobina riprende corrente e il nastro riparte. Con I3 in serie l’autoritenuta si scioglie quando il fungo è premuto.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'program', plc: 'PLC', min: 1, short: '1 Contatore', title: 'Il conteggio dei pacchi', text: 'Primo gradino: contatto della fotocellula (I2) e, come uscita, un contatore a 3, azzerato da Marcia (I1). Perché: va per primo, così il nastro vede subito il contatore pieno.' },
      { kind: 'program', plc: 'PLC', min: 2, short: '2 Nastro', title: 'Il gradino del nastro', text: 'Bobina Q0. Marcia (I1) in parallelo a Q0, in serie Arresto (I0), sicurezze (I3) e C1 normalmente chiuso. Perché: l’autoritenuta tiene acceso, ogni altro contatto può fermare, e a lotto pieno il nastro si ferma.' },
      { kind: 'program', plc: 'PLC', min: 3, short: '3 Spia', title: 'La spia del lotto', text: 'Contatto C1 e bobina Q1. Perché: la spia si accende quando il contatore è pieno.' },
      { kind: 'control', id: 'SB1', short: '4 Prova', title: 'Prova il lotto', text: 'Premi Marcia, poi fai passare tre pacchi con la fotocellula: al terzo il nastro si ferma e la spia si accende.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla il programma', text: 'Premi Verifica.' },
    ],
    summary: [
      'Una fotocellula è un ingresso: vale 1 mentre un pacco interrompe il raggio.',
      'Il CTU conta i fronti di salita, cioè i pacchi e non il tempo, e dà il bit C1 quando arriva al numero impostato; Marcia lo azzera per il lotto nuovo.',
      'Il fungo e il contatto del termico stanno nei fili, in serie alla bobina: un programma sbagliato o un PLC bloccato non possono scavalcarli.',
      'Il PLC legge lo stato di fungo e termico (I3, il consenso delle sicurezze) per sciogliere l’autoritenuta: senza, dopo lo sblocco o il riarmo il nastro ripartirebbe da solo.',
      'L’ordine dei gradini conta: un bit scritto in alto si legge subito nei gradini sotto.',
    ],
    fault: {
      say: 'Il programma è già scritto e il nastro conta i pacchi. Ma dopo aver premuto e sbloccato il fungo, il nastro riparte da solo. Guarda il gradino del nastro.',
      wires: [
        ['Q.L1', 'QM.1', 'marrone'], ['Q.L2', 'QM.3', 'nero'], ['Q.L3', 'QM.5', 'grigio'],
        ['QM.2', 'KM.1', 'marrone'], ['QM.4', 'KM.3', 'nero'], ['QM.6', 'KM.5', 'grigio'],
        ['KM.2', 'FR.1', 'marrone'], ['KM.4', 'FR.3', 'nero'], ['KM.6', 'FR.5', 'grigio'],
        ['FR.2', 'M.U', 'marrone'], ['FR.4', 'M.V', 'nero'], ['FR.6', 'M.W', 'grigio'],
        ['M.PE', 'Q.PE', 'gv'],
        ['QM.2', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
        ['QM.2', 'SB0.1', 'rosso'], ['SB0.2', 'PLC.I0', 'rosso'],
        ['QM.2', 'SB1.3', 'rosso'], ['SB1.4', 'PLC.I1', 'rosso'],
        ['QM.2', 'PH.3', 'rosso'], ['PH.4', 'PLC.I2', 'rosso'],
        ['QM.2', 'SBE.1', 'rosso'], ['SBE.2', 'FR.95', 'rosso'], ['FR.96', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'KM.A1', 'rosso'], ['KM.A2', 'Q.N', 'blu'],
        ['FR.96', 'PLC.I3', 'rosso'],
        ['QM.2', 'PLC.Q1A', 'rosso'], ['PLC.Q1B', 'H.X1', 'rosso'], ['H.X2', 'Q.N', 'blu'],
      ],
      programs: {
        PLC: [
          { if: 'I2', do: [{ op: 'ctu', id: 'C1', pv: 3, r: 'I1' }] },
          { if: ['and', ['or', 'I1', 'Q0'], 'I0', ['not', 'C1']], do: [{ op: 'coil', a: 'Q0' }] },
          { if: 'C1', do: [{ op: 'coil', a: 'Q1' }] },
        ],
      },
      diagnosis: {
        question: 'Perché il nastro riparte da solo dopo l’emergenza?',
        options: [
          { id: 'a', text: 'Il programma non legge il consenso delle sicurezze (I3): Q0 resta acceso con l’autoritenuta e, sbloccato il fungo, la bobina torna alimentata.' },
          { id: 'b', text: 'Il contatore non si è azzerato.' },
          { id: 'c', text: 'Il fungo non è collegato nei fili.' },
        ],
        correct: 'a',
        why: 'Il fungo agisce giustamente nei fili e ferma il nastro, ma il programma non guarda I3: per lui Q0 è ancora acceso grazie all’autoritenuta. Allo sblocco il nastro riparte. Aggiungendo I3 in serie, quando una sicurezza interviene l’autoritenuta si scioglie.',
      },
      fixSay: 'Nel gradino del nastro aggiungi in serie il contatto I3 (Sicurezze), normalmente aperto. Poi premi Verifica.',
    },
  },
  'c33-sensore': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Misurare il livello di un serbatoio',
          paras: [
            'Un serbatoio si riempie e si svuota, e il PLC deve sapere quanto è pieno per decidere quando accendere la pompa o dare un allarme. Un trasmettitore di livello è un sensore che trasforma il livello in un segnale elettrico.',
            'Finora gli ingressi del PLC erano acceso o spento: un pulsante, una fotocellula. Un livello invece è un numero: 30 %, 54 %, 80 %. Serve un ingresso analogico, che legge un valore e non solo un sì o un no.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché una corrente e non una tensione',
          paras: [
            'Il segnale più usato nell’industria è una corrente tra 4 e 20 milliampere. Si usa la corrente perché in un anello in serie la corrente è la stessa in ogni punto del filo: la lunghezza del cavo, o la resistenza di un morsetto un po’ ossidato, non la cambia. Una tensione invece cala lungo il cavo e i disturbi dei motori vicini la deformano.',
            'Per questo il trasmettitore e l’ingresso analogico stanno in un anello: un filo parte dal più (+) del trasmettitore e arriva a AI0+, un altro torna da AI0− al meno (−) del trasmettitore. Il trasmettitore regola la corrente che passa nell’anello in base al livello.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché 4 e non 0',
          paras: [
            'Il livello vuoto vale 4 mA, non 0, e il pieno 20 mA. Sembra strano, ma è il punto più importante. Se il vuoto fosse 0 mA, un filo staccato e un serbatoio vuoto darebbero lo stesso valore, e il PLC non potrebbe distinguerli.',
            'Con 4 mA come minimo, una corrente sotto 4 mA non può essere una misura: vuol dire che il filo è interrotto, che l’anello ha la polarità invertita o che il trasmettitore è guasto. Il programma può accorgersene e dare l’allarme invece di credere che il serbatoio sia vuoto.',
          ],
          table: {
            head: ['Corrente', 'Che cosa vuol dire'],
            rows: [
              ['0 mA', 'anello aperto o polarità invertita: guasto'],
              ['4 mA', 'serbatoio vuoto (0 %)'],
              ['12 mA', 'serbatoio a metà (50 %)'],
              ['20 mA', 'serbatoio pieno (100 %)'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Come lo legge il programma',
          paras: [
            'Il PLC converte la corrente in un numero: AI0 vale i milliampere dell’anello. L’istruzione SCALE trasforma da 4-20 mA in una scala che serve a noi, qui 0-100 %, e mette il risultato nella parola MW0. Poi basta confrontare: se MW0 è maggiore di 80 si accende la lampada di livello alto.',
            'Guarda il programma sotto il banco. Il gradino 4 non guarda il livello ma la corrente: se AI0 è minore di 3,6 mA accende la lampada di guasto. La soglia è un po’ sotto i 4 mA, così una misura di serbatoio vuoto, che con piccoli errori può valere 3,9 mA, non dà un falso allarme.',
          ],
          warn: 'Le lampade non sono collegate ai loro morsetti: le cabli tu. Il PLC fa solo da interruttore, la tensione la porti con il filo.',
        },
        {
          type: 'previsione',
          question: 'Il serbatoio è pieno a metà. Quanti milliampere trasmette il sensore?',
          options: [
            { id: 'a', text: '10 mA: metà di 20 mA, il valore del serbatoio pieno.' },
            { id: 'b', text: '12 mA: metà della scala da 4 a 20, cioè 4 più 8.' },
            { id: 'c', text: '8 mA: metà della scala da 4 a 20, cioè 16 diviso 2.' },
          ],
          correct: 'b',
          why: 'Il segnale parte da 4 mA, non da 0: la scala è lunga 16 mA. A metà si somma metà della scala (8 mA) ai 4 mA di partenza.',
        },
        {
          type: 'previsione',
          question: 'Un filo dell’anello si stacca mentre il serbatoio è a metà. Che cosa legge il PLC?',
          options: [
            { id: 'a', text: '12 mA: il livello non è cambiato, quindi la misura resta quella.' },
            { id: 'b', text: '4 mA: il minimo della scala, e il serbatoio sembra vuoto.' },
            { id: 'c', text: '0 mA: sotto i 4 mA non è una misura, il PLC vede il guasto.' },
          ],
          correct: 'c',
          why: 'Se l’anello è aperto non passa corrente. Zero milliampere è fuori scala: il programma lo vede (AI0 sotto 3,6 mA) e accende la lampada di guasto invece di far credere che il serbatoio sia vuoto.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'TT.+', to: ['PLC.AI0+'], color: 'rosso', short: '1 Il più', title: 'Il + del trasmettitore a AI0+', text: 'Un filo rosso dal morsetto + del trasmettitore al morsetto AI0+ del PLC. Perché: la corrente esce dal + del trasmettitore, attraversa l’ingresso e deve rientrare dal lato giusto.' },
      { kind: 'wire', from: 'TT.-', to: ['PLC.AI0-'], color: 'rosso', short: '2 Il meno', title: 'Il − del trasmettitore a AI0−', text: 'Un filo rosso dal morsetto − del trasmettitore al morsetto AI0− del PLC. Perché: chiude l’anello. Se li scambi il PLC legge 0 mA, come con un filo staccato.' },
      { kind: 'wire', from: 'PLC.Q1B', to: ['HH.X1'], color: 'rosso', short: '3 Livello alto', title: 'Q1 alla lampada di livello alto', text: 'La fase entra in Q1A, esce da Q1B e va alla lampada “Livello alto”. L’altro capo della lampada va al neutro. Perché: l’uscita è solo un contatto, la tensione la porti tu.' },
      { kind: 'wire', from: 'PLC.Q2B', to: ['HF.X1'], color: 'rosso', short: '4 Guasto sensore', title: 'Q2 alla lampada di guasto', text: 'Lo stesso con Q2A, Q2B e la lampada “Guasto sensore”, con l’altro capo al neutro. Perché: il guasto del sensore ha una sua segnalazione, diversa dal livello alto.' },
      { kind: 'control', id: 'SA', short: '5 Prova', title: 'Riempi il serbatoio', text: 'Tocca l’interruttore della pompa e guarda il livello salire nel grafico (il tempo corre 20 volte più veloce). Sopra l’80 % si accende “Livello alto”.' },
      { kind: 'verify', short: '6 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Un trasmettitore 4-20 mA trasforma una grandezza (qui il livello) in una corrente: 4 mA al minimo, 20 mA al massimo.',
      'La corrente è la stessa in tutto l’anello: non dipende dalla lunghezza del cavo e subisce meno i disturbi di una tensione.',
      'Il minimo è 4 mA e non 0 perché sotto 4 mA il PLC capisce che c’è un guasto (filo interrotto, polarità invertita) e non scambia il guasto per un serbatoio vuoto.',
      'SCALE converte i milliampere in una scala utile (0-100 %); un confronto sulla corrente grezza (AI0 sotto 3,6 mA) segnala il guasto.',
      'La polarità conta: + con + e − con −. Scambiati danno 0 mA.',
    ],
    fault: {
      say: 'Il serbatoio è a metà e la pompa è ferma, ma la lampada “Guasto sensore” è accesa. Il sensore funziona. Guarda i fili dell’anello.',
      wires: [
        ['Q.L1', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
        ['Q.L1', 'SA.a', 'rosso'], ['SA.b', 'PLC.I0', 'rosso'],
        ['Q.L1', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'HP.X1', 'rosso'], ['HP.X2', 'Q.N', 'blu'],
        ['TT.+', 'PLC.AI0-', 'rosso'], ['TT.-', 'PLC.AI0+', 'rosso'],
        ['Q.L1', 'PLC.Q1A', 'rosso'], ['PLC.Q1B', 'HH.X1', 'rosso'], ['HH.X2', 'Q.N', 'blu'],
        ['Q.L1', 'PLC.Q2A', 'rosso'], ['PLC.Q2B', 'HF.X1', 'rosso'], ['HF.X2', 'Q.N', 'blu'],
      ],
      diagnosis: {
        question: 'Perché si accende il guasto sensore se il sensore è sano?',
        options: [
          { id: 'a', text: 'I due fili dell’anello sono scambiati: il PLC legge 0 mA, come con un filo interrotto.' },
          { id: 'b', text: 'Il serbatoio è vuoto.' },
          { id: 'c', text: 'Il programma del PLC è sbagliato.' },
        ],
        correct: 'a',
        why: 'La corrente 4-20 mA ha un verso: esce dal + del trasmettitore e deve entrare in AI0+. Con i fili scambiati l’anello non funziona e il PLC legge 0 mA. Il programma fa il suo lavoro: sotto 3,6 mA è un guasto, e lo segnala.',
      },
      fixSay: 'Scambia i due fili dell’anello: il + del trasmettitore va a AI0+, il − va a AI0−. Poi premi Verifica.',
    },
  },
  'c34-variatore': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Perché serve un variatore',
          paras: [
            'Un motore trifase collegato alla rete gira a una velocità quasi fissa, decisa dalla frequenza della rete: 50 hertz. Se vuoi un nastro più lento o più veloce, e partenze dolci, devi cambiare la frequenza che arriva al motore.',
            'Lo fa il variatore di frequenza (inverter): prende la tensione di rete e ne produce una trifase con la frequenza che gli chiedi. Più la frequenza è alta, più il motore gira in fretta.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'La rampa',
          paras: [
            'Se il variatore portasse la frequenza da 0 a 30 hertz di colpo, il motore e il nastro prenderebbero uno strappo: i pacchi cadono e gli organi meccanici soffrono. Per questo il variatore sale con una rampa, cioè di pochi hertz al secondo. Qui sono 10 hertz al secondo.',
            'Anche la velocità del nastro non salta: segue la frequenza con un piccolo ritardo. Guarda il grafico: quando accendi, la linea sale in diagonale e non a scalino. Spegnendo, scende con la stessa rampa.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Due segnali, due strade',
          paras: [
            'Al variatore arrivano due segnali diversi. Il consenso di marcia è un sì o un no: è l’uscita digitale Q0 del PLC. Il riferimento di velocità è un numero, da 0 a 100 %: è l’uscita analogica AQ0.',
            'Il consenso lo cabli tu, con l’uscita a relè. Il riferimento è un valore che il programma copia dalla parola MW0 all’uscita analogica; lo imposti con il cursore. Se il consenso manca il variatore si ferma, qualunque sia il riferimento.',
          ],
          table: {
            head: ['Segnale', 'Tipo', 'Da dove viene'],
            rows: [
              ['Consenso di marcia', 'digitale, sì o no', 'uscita Q0 (la cabli tu)'],
              ['Velocità voluta', 'analogico, 0-100 %', 'uscita AQ0 (dal cursore)'],
            ],
          },
        },
        {
          type: 'previsione',
          question: 'Con la velocità voluta al 60 %, cioè 30 hertz, e una rampa di 10 hertz al secondo, quanti secondi servono per arrivare a regime?',
          options: [
            { id: 'a', text: 'Subito: il variatore cambia la frequenza in un istante.' },
            { id: 'b', text: 'Circa 3 secondi: 30 hertz diviso 10 hertz al secondo.' },
            { id: 'c', text: 'Circa 30 secondi: un secondo per ogni hertz da guadagnare.' },
          ],
          correct: 'b',
          why: 'La rampa dice quanti hertz si guadagnano ogni secondo. Per salire di 30 hertz a 10 hertz al secondo servono 3 secondi (poi la velocità del nastro raggiunge la frequenza con un piccolo ritardo).',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'SA.b', to: ['PLC.I0'], color: 'rosso', short: '1 Marcia', title: 'L’interruttore all’ingresso I0', text: 'La fase entra nel morsetto a dell’interruttore, esce da b e va all’ingresso I0, in rosso. Perché: chiudendolo l’ingresso vale 1 e il programma dà il consenso al variatore.' },
      { kind: 'wire', from: 'PLC.Q0B', to: ['HV.X1'], color: 'rosso', short: '2 Consenso', title: 'L’uscita Q0 alla spia', text: 'La fase entra in Q0A, esce da Q0B e va alla spia; l’altro capo della spia va al neutro. Perché: la spia mostra il consenso di marcia che va al variatore.' },
      { kind: 'control', id: 'SA', short: '3 Prova', title: 'Accendi e guarda la rampa', text: 'Tocca l’interruttore: la velocità sale con una rampa e si ferma al valore voluto. Cambia il cursore e guarda il grafico.' },
      { kind: 'verify', short: '4 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
    ],
    summary: [
      'Un variatore cambia la velocità del motore cambiando la frequenza che gli arriva.',
      'La frequenza non salta: sale e scende con una rampa, per non dare strappi al motore e al nastro.',
      'Il consenso di marcia è digitale (sì o no), il riferimento di velocità è analogico (0-100 %): sono due segnali diversi.',
      'Senza consenso il variatore si ferma, qualunque sia il riferimento.',
    ],
  },
  'c35-serbatoio': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Riempire un serbatoio con la pompa',
          paras: [
            'Un serbatoio si svuota perché qualcuno ne usa l’acqua, e una pompa lo deve riempire. La pompa non deve restare sempre accesa, né spegnersi appena il livello risale: deve partire quando il livello è basso e fermarsi quando è alto.',
            'Due galleggianti, due sensori digitali, dicono al PLC dove sta il livello: uno scatta sotto il 20 %, l’altro sopra l’80 %. Come il finecorsa del nastro, sono contatti che chiudono quando la condizione è vera.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il problema con una sola soglia',
          paras: [
            'Se la pompa fosse comandata solo dal galleggiante basso, accesa quando il livello è sotto il 20 %, si accenderebbe a 19 %, subito spingerebbe il livello a 20 %, si spegnerebbe, il livello ricalerebbe e così via: accensioni e spegnimenti di continuo. Il motore della pompa si rovina e i contatti si consumano.',
            'Il rimedio si chiama isteresi: due soglie diverse, una per accendere e una per spegnere. La pompa parte a 20 % e si ferma a 80 %. In mezzo mantiene l’ultimo stato.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Mantenere lo stato con Set e Reset',
          paras: [
            'Per mantenere “acceso” anche quando il livello è risalito sopra il 20 % serve una memoria. Nel PLC l’istruzione Set accende un’uscita e la tiene accesa anche quando la condizione che l’ha accesa sparisce. Soltanto un Reset la spegne.',
            'Il programma ha due gradini: se il galleggiante basso scatta, Set su Q0; se il galleggiante alto scatta, Reset su Q0. In mezzo nessun gradino cambia Q0, e la pompa continua come prima.',
          ],
          table: {
            head: ['Livello', 'Galleggiante', 'La pompa'],
            rows: [
              ['sotto il 20 %', 'basso scattato', 'Set: parte'],
              ['tra 20 % e 80 %', 'nessuno', 'resta com’era'],
              ['sopra l’80 %', 'alto scattato', 'Reset: si ferma'],
            ],
          },
        },
        {
          type: 'previsione',
          question: 'La pompa è accesa e il livello sale da 30 % a 60 %. Che cosa fa la pompa?',
          options: [
            { id: 'a', text: 'Si ferma: il livello non è più basso e il Set non vale più.' },
            { id: 'b', text: 'Resta accesa: nessun galleggiante ha scattato, il Set la tiene.' },
            { id: 'c', text: 'Si ferma a metà serbatoio e riparte quando il livello cala.' },
          ],
          correct: 'b',
          why: 'Il Set ha acceso Q0 quando il livello era basso e Q0 resta acceso finché non arriva il Reset. Fino all’80 % nessun gradino cambia Q0.',
        },
        {
          type: 'previsione',
          question: 'Il galleggiante basso e quello alto non possono scattare insieme. Che cosa succederebbe se il programma usasse una bobina semplice su I1 invece di Set e Reset?',
          options: [
            { id: 'a', text: 'La pompa si accenderebbe e spegnerebbe di continuo attorno al 20 %.' },
            { id: 'b', text: 'Non cambierebbe nulla: bobina e Set accendono la pompa allo stesso modo.' },
            { id: 'c', text: 'La pompa non si accenderebbe mai: una bobina non può tenere un livello.' },
          ],
          correct: 'a',
          why: 'Con la bobina semplice la pompa segue il galleggiante basso: accesa sotto il 20 %, spenta appena sale. Senza isteresi commuta di continuo.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'program', plc: 'PLC', min: 1, short: '1 Accendi', title: 'Il gradino che accende la pompa', text: 'Nuovo gradino: contatto I1 (livello basso) e uscita Set su Q0. Perché: Set tiene accesa la pompa anche quando il livello risale sopra il 20 %.' },
      { kind: 'program', plc: 'PLC', min: 2, short: '2 Spegni', title: 'Il gradino che spegne la pompa', text: 'Secondo gradino: contatto I0 (livello alto) e uscita Reset su Q0. Perché: solo il livello alto spegne la pompa.' },
      { kind: 'verify', short: '3 Verifica', title: 'Controlla il programma', text: 'Premi Verifica. Il tempo corre 30 volte più veloce: in qualche secondo vedi il livello salire e scendere.' },
    ],
    summary: [
      'Un galleggiante è un sensore digitale: il suo contatto chiude quando il livello supera o scende sotto la sua soglia.',
      'Con una sola soglia la pompa si accenderebbe e spegnerebbe di continuo.',
      'L’isteresi usa due soglie, una per accendere e una per spegnere, e tra le due l’uscita conserva il suo stato.',
      'Nel PLC la memoria è Set (accende e tiene) e Reset (spegne).',
    ],
  },
  'c36-pid': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Regolare una temperatura',
          paras: [
            'Un forno deve stare a 60 gradi. Il PLC misura la temperatura e comanda la potenza della resistenza, da 0 a 100 %. La differenza tra la temperatura voluta e quella misurata si chiama errore: se è 60 meno 40, l’errore è 20 gradi.',
            'Il regolatore PID calcola la potenza da dare in base all’errore. Ha tre parti, P, I e D, e ciascuna risponde a una domanda diversa. Nel grafico vedi la temperatura (rossa) e la potenza della resistenza (blu).',
          ],
        },
        {
          type: 'spiegazione',
          title: 'P: quanto sono lontano?',
          paras: [
            'La parte proporzionale dà una potenza proporzionale all’errore: potenza = Kp per errore. Più lontano sei dai 60 gradi, più scaldi. Kp è il guadagno: con Kp alto reagisci forte, con Kp basso piano.',
            'Il limite del solo P: quando ci si avvicina ai 60 gradi l’errore diventa piccolo, quindi anche la potenza, ma per mantenere il forno a 60 gradi, che disperde calore, serve ancora potenza. Il forno si ferma un po’ prima dei 60: resta un errore a regime. Prova con Kp e Ti e Td a zero.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'I: da quanto tempo sono lontano?',
          paras: [
            'La parte integrale somma l’errore nel tempo. Finché c’è un errore, anche piccolo, il valore cresce e la potenza aumenta, fino a che l’errore sparisce. Per questo l’integrale elimina l’errore a regime.',
            'Ti è il tempo di integrazione, in secondi: più è piccolo, più l’integrale lavora in fretta. Con un Ti troppo piccolo si esagera e la temperatura oscilla attorno ai 60 gradi; con un Ti molto grande l’integrale è lento ad arrivare.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'D: quanto in fretta mi sto avvicinando?',
          paras: [
            'La parte derivativa guarda la velocità con cui cambia la temperatura. Se sale in fretta verso i 60 gradi, la derivativa toglie un po’ di potenza in anticipo, per non superarli. Td è il tempo di anticipo, in secondi.',
            'Il forno ha un ritardo: la resistenza scalda prima la parete e poi la camera. Per questo, quando vedi la temperatura arrivare, il calore accumulato la farà salire ancora. La derivativa è proprio l’anticipo che serve.',
          ],
          table: {
            head: ['Parte', 'Guarda', 'Se la alzi troppo'],
            rows: [
              ['P (Kp)', 'l’errore adesso', 'oscilla'],
              ['I (Ti piccolo)', 'l’errore accumulato', 'supera i 60 e oscilla'],
              ['D (Td)', 'quanto in fretta cambia', 'amplifica i disturbi'],
            ],
          },
        },
        {
          type: 'previsione',
          question: 'Con Kp = 1 e Ti, Td a zero la temperatura si ferma a circa 46 gradi. Perché non arriva a 60?',
          options: [
            { id: 'a', text: 'Il forno è troppo piccolo: anche a piena potenza non arriva a 60 gradi.' },
            { id: 'b', text: 'Il P dà potenza solo se c’è errore: per tenere il forno caldo l’errore resta.' },
            { id: 'c', text: 'Serve più tempo: aspettando qualche minuto la temperatura arriva a 60.' },
          ],
          correct: 'b',
          why: 'Il P dà potenza solo se c’è un errore. A 46 gradi il forno ha bisogno del 14 % di potenza per restare lì, e con Kp = 1 il P la dà proprio perché l’errore vale 14 gradi. Se l’errore sparisse la potenza sparirebbe e il forno si raffredderebbe. Serve qualcosa che ricordi la potenza necessaria: l’integrale.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'control', id: 'SA', short: '1 Accendi', title: 'Accendi la regolazione', text: 'Tocca l’interruttore: il PLC comincia a regolare. Con i valori di partenza (solo P) la temperatura si ferma sotto i 60 gradi.' },
      { kind: 'verify', short: '2 Verifica', title: 'Regola e controlla', text: 'Cambia Kp, Ti e Td con i cursori guardando il grafico: cerca valori con cui la temperatura arriva a 60, non supera 66 e resta ferma. Poi premi Verifica.' },
    ],
    summary: [
      'Il PID calcola la potenza dall’errore, la differenza tra il valore voluto e quello misurato.',
      'P dà potenza proporzionale all’errore, ma lascia un errore a regime.',
      'I somma l’errore nel tempo e lo elimina; con Ti troppo piccolo la temperatura oscilla.',
      'D anticipa: frena quando la misura sale in fretta e riduce il superamento.',
      'Un sistema con ritardo, come un forno, si regola trovando un equilibrio tra reattività e stabilità.',
    ],
  },
  'c37-pannello': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Il pannello operatore',
          paras: [
            'In un impianto vero chi lo sorveglia non guarda il ladder e non apre il quadro: guarda un pannello operatore, uno schermo collegato al PLC con un cavo di rete. In inglese si chiama HMI, interfaccia uomo-macchina. Mostra i valori importanti (il livello, lo stato della pompa) e gli allarmi.',
            'Il pannello non misura niente da solo: chiede i valori al PLC più volte al secondo e li disegna. Tutto quello che mostra passa dal PLC e dal cavo.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Un allarme è un bit',
          paras: [
            'Il PLC decide quando c’è un allarme, con un gradino come gli altri: un contatto di confronto e una bobina su un merker. Per esempio, se il livello in MW0 è maggiore di 90 la bobina M0 si accende. Il pannello legge M0 e mostra “Livello troppo alto”.',
            'Il guasto del sensore si riconosce dalla corrente, non dal livello: con il filo interrotto il PLC legge 0 mA e MW0 resta fermo all’ultimo valore calcolato. Per questo il gradino guarda AI0, i milliampere, e non MW0.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Priorità: che cosa guardare prima',
          paras: [
            'Quando arrivano più allarmi insieme l’operatore deve sapere da dove cominciare. Ogni allarme ha una priorità e il pannello li mette in ordine: prima gli alti, poi i medi, poi i bassi; a parità di priorità il più recente sta in alto.',
          ],
          table: {
            head: ['Priorità', 'Quando', 'Esempio'],
            rows: [
              ['Alta', 'pericolo per l’impianto o misura persa: intervenire subito', 'livello troppo alto, guasto del sensore'],
              ['Media', 'processo fuori dai limiti: intervenire presto', 'livello troppo basso'],
              ['Bassa', 'informazione o manutenzione', 'pompa accesa da più di 5 minuti'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Riconoscere un allarme',
          paras: [
            'Un allarme nuovo lampeggia e fa suonare la sirena finché l’operatore non lo riconosce con il tasto. Riconoscere non spegne l’allarme e non risolve il problema: vuol dire “l’ho visto, me ne occupo”. La sirena tace, ma l’allarme resta sul pannello finché la condizione non torna normale.',
            'Se la condizione torna normale prima che qualcuno l’abbia visto, l’allarme resta come “rientrato” finché non lo riconosci: un problema passato, che nessuno ha notato, va comunque segnalato.',
          ],
          table: {
            head: ['Stato', 'Condizione', 'Riconosciuto', 'Sirena'],
            rows: [
              ['Da riconoscere', 'vera', 'no', 'suona'],
              ['Riconosciuto', 'vera', 'sì', 'tace'],
              ['Rientrato', 'tornata normale', 'no', 'suona'],
              ['Sparito', 'tornata normale', 'sì', 'tace'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Il dato vecchio',
          paras: [
            'Se il cavo tra pannello e PLC si stacca, il pannello non riceve più niente. Lo schermo però continua a mostrare l’ultimo valore letto: un livello del 45 % che sembra vero, mentre il serbatoio intanto si riempie o si svuota.',
            'Per questo ogni valore ha l’ora dell’ultima lettura. Se è più vecchio di qualche secondo il pannello lo segna come dato vecchio (grigio, barrato, con l’età) e mostra “collegamento perso”. Un numero fermo non va mai preso per buono: prima di decidere guarda se è aggiornato.',
          ],
          warn: 'Senza collegamento anche gli allarmi non arrivano: un pannello senza allarmi non vuol dire un impianto senza problemi.',
        },
        {
          type: 'previsione',
          question: 'Arriva “Livello troppo alto” e lo riconosci. Che cosa succede?',
          options: [
            { id: 'a', text: 'L’allarme sparisce: riconoscerlo vuol dire che il problema è risolto.' },
            { id: 'b', text: 'La sirena tace, ma l’allarme resta sul pannello finché il livello è alto.' },
            { id: 'c', text: 'Il PLC ferma la pompa: riconoscere l’allarme è un comando di arresto.' },
          ],
          correct: 'b',
          why: 'Riconoscere vuol dire “l’ho visto”. Il problema c’è ancora: l’allarme resta, riconosciuto, finché il livello non scende sotto il 90 %.',
        },
        {
          type: 'previsione',
          question: 'Il pannello mostra “Livello 45 %” da un minuto, sempre uguale, e nessun allarme. Che cosa controlli prima?',
          options: [
            { id: 'a', text: 'Niente: il livello è stabile e non ci sono allarmi da guardare.' },
            { id: 'b', text: 'Se il dato è aggiornato: un numero fermo può essere una lettura vecchia.' },
            { id: 'c', text: 'La pompa: se il livello non cambia, la pompa si è certamente fermata.' },
          ],
          correct: 'b',
          why: 'Un valore che non cambia mai è sospetto: se il collegamento è perso il pannello mostra l’ultima lettura e nessun allarme nuovo. Prima di fidarti guarda se il dato è aggiornato.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'program', plc: 'PLC', min: 6, short: '1 Troppo alto', title: 'L’allarme di livello alto', text: 'Nuovo gradino: tocca il contatto, scegli Confronto, MW0 maggiore di 90; uscita bobina M0. Perché: sopra il 90 % il serbatoio rischia di traboccare.' },
      { kind: 'program', plc: 'PLC', min: 7, short: '2 Sensore', title: 'L’allarme del sensore', text: 'Nuovo gradino: confronto AI0 minore di 3,6; bobina M1. Perché: sotto 3,6 mA il filo del trasmettitore è interrotto, e MW0 non si aggiorna più.' },
      { kind: 'program', plc: 'PLC', min: 8, short: '3 Troppo basso', title: 'L’allarme di livello basso', text: 'Nuovo gradino: confronto MW0 minore di 10; bobina M2. Perché: un serbatoio vuoto fa girare a secco chi lo usa.' },
      { kind: 'verify', short: '4 Verifica', title: 'Prova gli allarmi', text: 'Prova a bloccare un galleggiante o a interrompere il filo del trasmettitore con i tasti sul banco, e riconosci gli allarmi sul pannello. Poi premi Verifica.' },
    ],
    summary: [
      'Il pannello operatore (HMI) legge i valori e gli allarmi dal PLC attraverso un cavo di rete.',
      'Un allarme è un bit che il PLC calcola con un gradino; il guasto del sensore si riconosce dalla corrente (sotto 3,6 mA), non dal livello.',
      'Gli allarmi hanno una priorità (alta, media, bassa) e il pannello li ordina: si guarda prima l’alta.',
      'Riconoscere ferma la sirena ma non l’allarme: resta finché la condizione non torna normale. Un allarme rientrato senza riconoscimento resta da riconoscere.',
      'Senza collegamento il pannello mostra l’ultimo valore: dopo qualche secondo lo segna come dato vecchio. Un numero fermo non va preso per buono.',
    ],
    fault: {
      say: 'Il pannello mostra il livello fermo e nessun allarme, ma il serbatoio intanto cambia. Guarda bene il pannello e il banco.',
      open: ['HMI'],
      wires: [
        ['Q.L1', 'PLC.A1', 'rosso'], ['PLC.A2', 'Q.N', 'blu'], ['PLC.IC', 'Q.N', 'blu'],
        ['Q.L1', 'LH.3', 'rosso'], ['LH.4', 'PLC.I0', 'rosso'],
        ['Q.L1', 'LL.3', 'rosso'], ['LL.4', 'PLC.I1', 'rosso'],
        ['TT.+', 'PLC.AI0+', 'rosso'], ['TT.-', 'PLC.AI0-', 'rosso'],
        ['Q.L1', 'PLC.Q0A', 'rosso'], ['PLC.Q0B', 'HP.X1', 'rosso'], ['HP.X2', 'Q.N', 'blu'],
      ],
      programs: {
        PLC: [
          { if: 'I1', do: [{ op: 'set', a: 'Q0' }] },
          { if: 'I0', do: [{ op: 'reset', a: 'Q0' }] },
          { if: ['ge', 'AI0', 3.6], do: [{ op: 'scale', in: 'AI0', out: 'MW0', lo: 0, hi: 100 }] },
          { if: 'Q0', do: [{ op: 'ton', id: 'T1', pt: 300 }] },
          { if: 'T1', do: [{ op: 'coil', a: 'M3' }] },
          { if: ['gt', 'MW0', 90], do: [{ op: 'coil', a: 'M0' }] },
          { if: ['lt', 'AI0', 3.6], do: [{ op: 'coil', a: 'M1' }] },
          { if: ['lt', 'MW0', 10], do: [{ op: 'coil', a: 'M2' }] },
        ],
      },
      diagnosis: {
        question: 'Perché il pannello mostra un livello che non cambia?',
        options: [
          { id: 'a', text: 'Il cavo di rete del pannello è staccato: il pannello mostra l’ultimo valore letto, ormai vecchio, e non riceve gli allarmi.' },
          { id: 'b', text: 'Il trasmettitore di livello è guasto.' },
          { id: 'c', text: 'Il serbatoio è davvero fermo.' },
        ],
        correct: 'a',
        why: 'Il PLC continua a leggere il trasmettitore e a regolare la pompa, ma il pannello non riceve più niente: mostra l’ultimo valore, segnato come dato vecchio, e “collegamento perso”. Se fosse guasto il trasmettitore, con il cavo collegato arriverebbe l’allarme del sensore.',
      },
      fixSay: 'Ricollega il cavo di rete del pannello (tocca il pannello sul banco). Poi premi Verifica.',
    },
  },
  'c38-continua': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Alternata e continua',
          paras: [
            'La rete di casa è in corrente alternata: la tensione cambia verso cinquanta volte al secondo, e per questo fase e neutro non hanno un “più” e un “meno”. Una batteria, un pannello solare, il caricatore del telefono danno invece corrente continua: la tensione ha sempre lo stesso verso.',
            'In continua i due morsetti hanno un nome fisso: il positivo (+) e il negativo (−). La corrente esce dal + della sorgente, attraversa il carico e torna al −. Per distinguerli i fili hanno un colore: rosso il positivo, nero il negativo.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Serie: le tensioni si sommano',
          paras: [
            'Due batterie in serie si collegano una dopo l’altra: il + della prima va al − della seconda. Le tensioni si sommano: due batterie da 6 V danno 12 V tra il − libero della prima e il + libero della seconda.',
            'In parallelo invece si collegano + con + e − con −: la tensione resta quella di una batteria sola (6 V), ma la corrente si divide tra le due, che durano di più. Una lampada da 12 V con 6 V si accende appena.',
          ],
          table: {
            head: ['Due batterie da 6 V', 'Tensione', 'A che cosa serve'],
            rows: [
              ['In serie (+ della prima al − della seconda)', '12 V', 'arrivare alla tensione del carico'],
              ['In parallelo (+ con +, − con −)', '6 V', 'più corrente, più durata'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'La polarità e il LED',
          paras: [
            'A una lampada a incandescenza non importa il verso: è un filo che scalda e si accende comunque. Un LED invece è un diodo: lascia passare la corrente in un solo verso, dall’anodo (A) al catodo (K). L’anodo va verso il positivo, il catodo verso il negativo. Al contrario resta spento.',
            'Per questo nei circuiti in continua la polarità conta: un dispositivo collegato al contrario non funziona, e alcuni si rompono.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il cortocircuito in continua',
          paras: [
            'Se il + e il − di una batteria si toccano con un filo, senza un carico in mezzo, la corrente è limitata solo dalla piccola resistenza interna della batteria: centinaia di ampere. Il filo scalda, la batteria si rovina. Per questo le batterie hanno un fusibile, che qui brucia appena c’è un corto.',
          ],
          warn: 'Anche se 12 V non sono pericolosi da toccare, un cortocircuito su una batteria può bruciare i fili e dare fuoco.',
        },
        {
          type: 'previsione',
          question: 'Collego le due batterie da 6 V in parallelo e poi alla lampada da 12 V. Che cosa succede?',
          options: [
            { id: 'a', text: 'Si accende piena: le batterie sono due, quindi le tensioni si sommano.' },
            { id: 'b', text: 'Si accende appena: in parallelo la tensione resta quella di una, 6 V.' },
            { id: 'c', text: 'La lampada brucia: due batterie insieme le danno troppa corrente.' },
          ],
          correct: 'b',
          why: 'In parallelo le batterie danno la stessa tensione di una sola, 6 V. Alla lampada da 12 V ne serve il doppio: per sommare le tensioni vanno in serie.',
        },
        {
          type: 'previsione',
          question: 'Con il multimetro metto il puntale rosso sul − e il nero sul + di una batteria da 6 V. Che cosa leggo?',
          options: [
            { id: 'a', text: '6 V: la tensione della batteria non cambia con i puntali.' },
            { id: 'b', text: '−6 V: il segno dice da che parte sta il positivo.' },
            { id: 'c', text: '0 V: con i puntali al contrario lo strumento non misura.' },
          ],
          correct: 'b',
          why: 'In continua il multimetro legge la tensione con il segno: positivo se il puntale rosso sta sul +, negativo se è al contrario. È il modo più semplice di trovare la polarità.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'B1.+', to: ['B2.-'], color: 'rosso', short: '1 Serie', title: 'Le batterie in serie', text: 'Un filo dal + della batteria 1 al − della batteria 2. Perché: in serie le tensioni si sommano, 6 V più 6 V fanno 12 V.' },
      { kind: 'wire', from: 'B2.+', to: ['S.a'], color: 'rosso', short: '2 Interruttore', title: 'Il positivo all’interruttore', text: 'Dal + libero della batteria 2 all’interruttore, in rosso. Perché: l’interruttore apre e chiude il positivo verso i carichi.' },
      { kind: 'wire', from: 'S.b', to: ['L.A'], color: 'rosso', short: '3 Lampada', title: 'Dall’interruttore alla lampada', text: 'Dall’altro morsetto dell’interruttore a un capo della lampada, in rosso; dall’altro capo della lampada al − della batteria 1, in nero. Perché: la corrente deve tornare al negativo per chiudere il giro.' },
      { kind: 'wire', from: 'S.b', to: ['H.A'], color: 'rosso', short: '4 LED', title: 'Il LED in parallelo', text: 'Dall’interruttore all’anodo A del LED, in rosso; dal catodo K al − della batteria 1, in nero. Perché: il LED conduce solo dall’anodo al catodo.' },
      { kind: 'control', id: 'S', short: '5 Prova', title: 'Accendi', text: 'Chiudi l’interruttore: la lampada si accende piena e il LED con lei. Se vuoi, misura con il multimetro la tensione sulla lampada.' },
      { kind: 'verify', short: '6 Verifica', title: 'Controlla il circuito', text: 'Premi Verifica.' },
    ],
    summary: [
      'In continua la tensione ha un verso fisso: il positivo (+, filo rosso) e il negativo (−, filo nero).',
      'In serie (il + di una al − dell’altra) le tensioni delle batterie si sommano; in parallelo la tensione resta quella di una sola.',
      'Il LED conduce solo dall’anodo (verso il +) al catodo (verso il −): la polarità conta.',
      'Un cortocircuito su una batteria dà una corrente enorme: per questo c’è il fusibile.',
      'Il multimetro in continua legge la tensione con il segno: dice da che parte sta il positivo.',
    ],
  },
  'c39-fotovoltaico': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Come funziona un pannello fotovoltaico',
          paras: [
            'Un pannello fotovoltaico trasforma la luce del sole in corrente continua. Come una batteria ha un positivo e un negativo, ma la sua tensione non è fissa: dipende da quanta luce arriva. A pieno sole un pannello dà la sua tensione massima; con il cielo coperto o al tramonto ne dà molto meno; di notte niente.',
            'Il sole nella giornata sale e scende: la produzione ha la forma di una campana, con il massimo verso mezzogiorno. Nel grafico vedi la produzione in kilowatt (kW) e il consumo della casa.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché serve l’inverter',
          paras: [
            'La casa funziona in corrente alternata a 230 V. L’inverter trasforma la continua dei pannelli in alternata, e l’energia può così alimentare la casa o andare in rete.',
            'L’inverter ha una finestra di tensione in ingresso: sotto una tensione minima (qui 30 V) non parte, perché non ha abbastanza tensione per lavorare; sopra la massima (qui 60 V) si danneggia. Il compito dell’impianto è tenere la tensione dei pannelli dentro la finestra.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Serie e parallelo: quanti pannelli e come',
          paras: [
            'Come per le batterie, due pannelli in serie sommano le tensioni; in parallelo la tensione resta quella di uno e si sommano le correnti. Un pannello da 22 V da solo non arriva a 30 V: l’inverter non parte. Due in serie danno 44 V: dentro la finestra. Tre in serie darebbero 66 V: oltre il limite, e l’inverter si brucia.',
            'Una stringa fotovoltaica è proprio questo: più pannelli in serie, in numero scelto in modo che la tensione, con il sole più forte, resti sotto il limite dell’inverter e, con il sole più debole, non scenda troppo sotto il minimo.',
          ],
          table: {
            head: ['Collegamento', 'Tensione a pieno sole', 'Inverter'],
            rows: [
              ['1 pannello', '22 V', 'non parte (sotto 30 V)'],
              ['2 in parallelo', '22 V', 'non parte (sotto 30 V)'],
              ['2 in serie', '44 V', 'lavora'],
              ['3 in serie', '66 V', 'si brucia (sopra 60 V)'],
            ],
          },
        },
        {
          type: 'previsione',
          question: 'Il sole è più debole al mattino. Con due pannelli in serie, quando parte l’inverter?',
          options: [
            { id: 'a', text: 'Appena sorge il sole: basta un po’ di luce sui pannelli.' },
            { id: 'b', text: 'Quando i due pannelli insieme arrivano a 30 V, a sole un po’ più alto.' },
            { id: 'c', text: 'Mai al mattino: con due pannelli serve il sole pieno di mezzogiorno.' },
          ],
          correct: 'b',
          why: 'La tensione sale con il sole. L’inverter parte appena la somma dei due pannelli raggiunge i 30 V, un po’ dopo l’alba. La stessa soglia lo spegne la sera.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'P1.+', to: ['I.+'], color: 'rosso', short: '1 Il positivo', title: 'Il + del primo pannello all’inverter', text: 'Un filo rosso dal + del pannello 1 al + dell’inverter. Perché: in una serie il + libero della catena va all’ingresso positivo.' },
      { kind: 'wire', from: 'P1.-', to: ['P2.+'], color: 'rosso', short: '2 La serie', title: 'I due pannelli in serie', text: 'Un filo dal − del pannello 1 al + del pannello 2 (rosso o nero). Perché: così le tensioni si sommano, 22 V più 22 V fanno 44 V.' },
      { kind: 'wire', from: 'P2.-', to: ['I.-'], color: 'nero', short: '3 Il negativo', title: 'Il − del secondo pannello all’inverter', text: 'Un filo nero dal − del pannello 2 al − dell’inverter. Perché: la corrente deve tornare al negativo per chiudere il giro.' },
      { kind: 'verify', short: '4 Verifica', title: 'Guarda la giornata', text: 'Premi Verifica: il tempo corre e vedi l’inverter partire con il sole alto e fermarsi la sera. Prova anche i cursori: con più nuvole la produzione cala.' },
    ],
    summary: [
      'Un pannello fotovoltaico è un generatore in continua la cui tensione dipende dal sole: la produzione ha la forma di una campana nella giornata.',
      'L’inverter trasforma la continua in alternata e ha una finestra di tensione in ingresso: sotto il minimo non parte, sopra il massimo si brucia.',
      'Pannelli in serie sommano le tensioni; in parallelo la tensione resta quella di uno e si sommano le correnti.',
      'La stringa si dimensiona perché la tensione, col sole più forte, stia sotto il massimo dell’inverter.',
    ],
  },
  'c40-contatore': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Il contatore che va in due versi',
          paras: [
            'Con i pannelli la casa non solo consuma ma produce. Il contatore allora misura in due versi: quando la casa consuma più di quanto produce preleva dalla rete (potenza positiva); quando produce più di quanto consuma immette in rete (potenza negativa). Si chiama scambio sul posto: l’energia immessa va in rete.',
            'Nella scena vedi la potenza scambiata: verde se la casa immette, rosso se preleva. Il contatore ha anche due totali: i kilowattora prelevati e quelli immessi.',
          ],
          table: {
            head: ['Situazione', 'Potenza scambiata', 'Il contatore'],
            rows: [
              ['Notte: consumo e niente produzione', 'positiva', 'preleva'],
              ['Mezzogiorno: produzione maggiore del consumo', 'negativa', 'immette'],
              ['Produzione uguale al consumo', 'zero', 'in pareggio'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Meglio usare l’eccedenza che regalarla',
          paras: [
            'L’energia che si immette in rete si paga poco: conviene consumare noi, in casa, quando il sole produce. Questo si chiama autoconsumo. Un carico che si può spostare, come uno scaldabagno che accumula acqua calda, si accende proprio quando c’è eccedenza.',
            'Il PLC legge la potenza scambiata (in watt, nella parola MW0). Il programma deve accendere lo scaldabagno quando la casa immette abbastanza da alimentarlo, cioè più di 2,2 kW, e spegnerlo quando la casa comincia a prelevare.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Due soglie anche qui',
          paras: [
            'Come per la pompa del serbatoio servono due soglie diverse, una per accendere e una per spegnere. Appena lo scaldabagno si accende consuma 2 kW e la potenza scambiata sale di colpo: se la soglia di spegnimento fosse la stessa dell’accensione si spegnerebbe subito e riparirebbe di continuo.',
            'Qui si accende con una potenza sotto −2200 W (immissione di più di 2,2 kW) e si spegne con una potenza sopra 300 W (la casa preleva). In mezzo mantiene il suo stato: Set e Reset.',
          ],
        },
        {
          type: 'previsione',
          question: 'È mezzogiorno, la casa immette 3 kW e lo scaldabagno si accende. Quanto immette adesso?',
          options: [
            { id: 'a', text: 'Ancora 3 kW: lo scaldabagno prende la sua energia dalla rete.' },
            { id: 'b', text: 'Circa 1 kW: lo scaldabagno usa 2 kW dei 3 che avanzavano.' },
            { id: 'c', text: 'Niente: appena parte un carico la casa smette di immettere.' },
          ],
          correct: 'b',
          why: 'L’eccedenza era 3 kW; 2 kW li assorbe lo scaldabagno e ne restano 1 da immettere. Per questo la potenza scambiata cambia appena il carico parte, e per questo servono due soglie.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'program', plc: 'PLC', min: 2, short: '1 Accendi', title: 'Accendi con l’eccedenza', text: 'Nuovo gradino: contatto di confronto (tocca il contatto e scegli “Confronto”) MW0 minore di −2200; uscita Set su Q0. Perché: lo scaldabagno parte quando la casa immette più di 2,2 kW.' },
      { kind: 'program', plc: 'PLC', min: 3, short: '2 Spegni', title: 'Spegni quando preleva', text: 'Secondo gradino: confronto MW0 maggiore di 300; uscita Reset su Q0. Perché: quando la casa preleva dalla rete non c’è più eccedenza da usare.' },
      { kind: 'verify', short: '3 Verifica', title: 'Guarda la giornata', text: 'Premi Verifica. Nel grafico la linea blu è la potenza della rete: con lo scaldabagno acceso non scende sotto i −2,2 kW.' },
    ],
    summary: [
      'Il contatore bidirezionale misura la potenza scambiata con la rete: positiva se la casa preleva, negativa se immette.',
      'L’autoconsumo consiste nell’usare in casa l’energia prodotta, spostando i carichi nelle ore di sole.',
      'Un carico che parte cambia subito la potenza scambiata: servono due soglie diverse (accendi e spegni), cioè Set e Reset.',
      'Il PLC legge la potenza del contatore da un segnale 4-20 mA, che SCALE converte in watt.',
    ],
  },
  'c41-accumulo': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Il sole c’è quando serve meno',
          paras: [
            'Una casa consuma di più la sera, quando i pannelli non producono. Di giorno invece produce più di quanto consuma. Senza accumulo l’eccedenza va in rete e la sera si preleva dalla rete.',
            'Una batteria sposta l’energia nel tempo: di giorno assorbe l’eccedenza e si carica, la sera la restituisce e copre i consumi. Così la casa preleva meno.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Che cosa fa la batteria',
          paras: [
            'La batteria da 10 kWh ha una carica, in percentuale. Se la produzione supera il consumo, l’eccedenza (fino a 3 kW, la potenza massima della batteria) la carica; se il consumo supera la produzione, la batteria scarica e copre la differenza, fino a esaurirsi. Quando è piena, l’eccedenza va in rete; quando è vuota, si preleva di nuovo.',
            'La scena mostra la carica a sinistra: verde mentre si carica, arancione mentre si scarica.',
          ],
          table: {
            head: ['Situazione', 'La batteria', 'La rete'],
            rows: [
              ['Giorno, produzione > consumo', 'si carica', 'immette solo il resto, a batteria piena'],
              ['Sera, niente produzione', 'si scarica', 'non preleva finché c’è carica'],
              ['Notte, batteria vuota', 'ferma', 'preleva di nuovo'],
            ],
          },
        },
        {
          type: 'previsione',
          question: 'Con la batteria collegata, alle 14 i pannelli producono 3,5 kW e la casa consuma 0,5 kW. Che cosa succede?',
          options: [
            { id: 'a', text: 'Tutti i 3 kW di eccedenza vanno in rete, come prima della batteria.' },
            { id: 'b', text: 'La batteria assorbe i 3 kW di eccedenza, e in rete non va niente.' },
            { id: 'c', text: 'La batteria si scarica, perché la casa sta consumando energia.' },
          ],
          correct: 'b',
          why: 'L’eccedenza è 3 kW e la batteria, se non è piena, può assorbirla tutta (3 kW è il suo massimo): la rete non immette niente. Se l’eccedenza fosse più grande, solo il resto andrebbe in rete.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'SA.b', to: ['HB.X1'], color: 'rosso', short: '1 Collega', title: 'La batteria in servizio', text: 'La fase entra nell’interruttore, esce dall’altro morsetto e va alla spia “Batteria collegata”; l’altro capo della spia va al neutro. Perché: la spia accesa è il segnale che la batteria è in servizio.' },
      { kind: 'control', id: 'SA', short: '2 Prova', title: 'Collega la batteria', text: 'Tocca l’interruttore e guarda la scena: la batteria si carica mentre c’è sole e si scarica la sera.' },
      { kind: 'verify', short: '3 Verifica', title: 'Controlla la giornata', text: 'Premi Verifica.' },
    ],
    summary: [
      'Una batteria sposta l’energia nel tempo: si carica con l’eccedenza di giorno e copre i consumi la sera.',
      'Si carica e scarica con una potenza massima (qui 3 kW); piena non assorbe più, vuota non può più dare.',
      'Con l’accumulo la casa preleva meno dalla rete la sera e immette meno di giorno.',
      'La batteria non produce energia: la sposta dal giorno alla sera, e per farlo ha bisogno dell’eccedenza dei pannelli.',
    ],
  },
  'c42-colonnina': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'La colonnina e il limite del contatore',
          paras: [
            'Una colonnina di ricarica per auto assorbe molta potenza: qui 3,7 kW, quanto tutti gli elettrodomestici di casa messi insieme. Il contratto con il fornitore fissa una potenza massima; se la casa la supera per un po’, il contatore stacca tutto. Qui il limite è 4,5 kW e il contatore scatta se resta sopra per più di 20 secondi.',
            'Quindi la colonnina non può partire sempre: deve partire quando la casa ha margine e fermarsi prima che la somma dei consumi raggiunga il limite. Si chiama gestione del carico.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Distanza tra le due soglie',
          paras: [
            'Il PLC legge la potenza scambiata (MW0, in watt). Per partire serve margine: la potenza deve essere sotto una soglia bassa. Per fermarsi, deve superare una soglia alta, un poco sotto il limite del contatore.',
            'Le due soglie devono stare lontane almeno quanto assorbe la colonnina, 3,7 kW. Con la soglia bassa a 500 W e quella alta a 4300 W vanno bene: appena la colonnina parte la potenza sale di 3,7 kW e non può riaccenderla da sola; appena la si stacca la potenza scende di 3,7 kW. Con le soglie troppo vicine succede un pasticcio: staccata la colonnina, la casa sembra subito avere margine e la colonnina riparte, e così via.',
          ],
          table: {
            head: ['Soglia', 'Valore', 'Perché'],
            rows: [
              ['Parti (Set)', 'sotto 500 W', 'se la casa preleva poco c’è margine per 3,7 kW'],
              ['Fermati (Reset)', 'sopra 4300 W', 'poco sotto il limite di 4500 W: lo stacca prima del contatore'],
            ],
          },
        },
        {
          type: 'previsione',
          question: 'La colonnina è accesa e la casa preleva 4,1 kW. Alle 20 i consumi salgono di 1,2 kW. Che cosa serve?',
          options: [
            { id: 'a', text: 'Niente: il limite è 4,5 kW e la casa ne preleva solo 4,1.' },
            { id: 'b', text: 'Staccare la colonnina: 4,1 più 1,2 fa 5,3 kW, oltre il limite.' },
            { id: 'c', text: 'Ridurre i consumi di casa: la colonnina ha la precedenza.' },
          ],
          correct: 'b',
          why: 'La somma supera il limite. Il programma deve staccare la colonnina quando la potenza supera 4300 W, prima che il contatore scatti e la casa resti al buio.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'program', plc: 'PLC', min: 2, short: '1 Parti', title: 'Parti con margine', text: 'Nuovo gradino: confronto MW0 minore di 500; uscita Set su Q0. Perché: se la casa preleva poco c’è margine per la colonnina.' },
      { kind: 'program', plc: 'PLC', min: 3, short: '2 Fermati', title: 'Fermati prima del limite', text: 'Secondo gradino: confronto MW0 maggiore di 4300; uscita Reset su Q0. Perché: stacca la colonnina prima che il contatore scatti a 4500 W.' },
      { kind: 'verify', short: '3 Verifica', title: 'Guarda la serata', text: 'Premi Verifica: il tempo corre dalle 17. Nel grafico la linea blu, la potenza della rete, deve restare sotto la linea del limite.' },
    ],
    summary: [
      'Il contatore ha un limite di potenza: oltre, dopo qualche secondo, stacca tutta la casa.',
      'La colonnina parte quando la casa ha margine e si ferma prima del limite: gestione del carico.',
      'Le due soglie (parti e fermati) devono stare distanti almeno quanto assorbe il carico, altrimenti riparte subito.',
      'Se il PLC sbaglia e il contatore scatta, tutta la casa resta senza corrente: il limite si rispetta con il programma, prima che scatti.',
    ],
  },
  'c43-linea': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Una macchina che fa una cosa dopo l’altra',
          paras: [
            'Finora il programma rispondeva a una condizione: se premi, parti; se il livello è alto, spegni. Una linea di produzione invece segue una sequenza: prima scende, poi chiude la pinza, poi sale, poi si sposta. L’ordine conta, e ogni passo deve cominciare solo quando il precedente è finito.',
            'Il robot di questo livello prende un pezzo dal punto di prelievo e lo porta al deposito: otto passi uno dopo l’altro. Nella scena vedi il braccio che scende, la pinza che si chiude e il pezzo che viaggia.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Un marcatore per ogni passo',
          paras: [
            'Si programma una sequenza con un marcatore per ogni passo: M1 “scendi”, M2 “prendi”, M3 “sali”, e così via. Dei marcatori dei passi (da M1 a M8) uno solo alla volta è acceso: dice a che punto del ciclo siamo.',
            'Le uscite non guardano più i sensori ma il passo attuale: il motore che fa scendere il braccio (Q0) è acceso nei passi in cui il braccio deve scendere; la pinza (Q2) è chiusa nei passi in cui deve tenere il pezzo. Così le uscite sono semplici e tutta la logica sta nelle transizioni.',
          ],
          table: {
            head: ['Passo', 'Che cosa fa', 'Finisce quando'],
            rows: [
              ['M1 Scendi', 'il braccio scende al prelievo', 'il braccio è giù (I4)'],
              ['M2 Prendi', 'chiude la pinza', 'è passato il tempo T1'],
              ['M3 Sali', 'il braccio sale con il pezzo', 'il braccio è su (I3)'],
              ['M4 Vai', 'si sposta verso il deposito', 'è al deposito (I6)'],
              ['M5 Scendi', 'scende sul deposito', 'il braccio è giù (I4)'],
              ['M6 Lascia', 'apre la pinza', 'è passato il tempo T2'],
              ['M7 Sali', 'risale', 'il braccio è su (I3)'],
              ['M8 Torna', 'torna al prelievo', 'è al prelievo (I5)'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'La transizione: passo attuale più “fatto”',
          paras: [
            'Passare da un passo al successivo è un gradino: il contatto del passo attuale, in serie con il segnale che dice “ho finito” (un finecorsa o un tempo). Come uscite, Reset del passo che finisce e Set del successivo. Così un solo marcatore resta acceso.',
            'Il segnale “ho finito” va sempre guardato, non indovinato: il braccio non si sposta finché un finecorsa non dice che è salito. Una sequenza è sicura per questo: se si salta un controllo, la macchina comincia il passo dopo mentre quello prima è ancora in corso.',
          ],
          warn: 'Se il braccio si sposta di lato quando è ancora giù, urta il pezzo o il montante: nella scena compare “URTO”. Il finecorsa “braccio su” serve proprio a evitarlo.',
        },
        {
          type: 'spiegazione',
          title: 'Quando serve un tempo, e il ciclo che finisce sempre',
          paras: [
            'La pinza non ha un sensore: per sapere che si è chiusa si aspetta un tempo (T1 per chiudere, T2 per aprire). Dove c’è un sensore si usa il sensore; dove manca, un temporizzatore.',
            'Il marcatore M9 dice “ciclo in corso”: il ciclo parte solo se non ce n’è uno in corso, e finisce sempre. Arresto spegne la marcia (M0): il ciclo successivo non comincia, ma quello in corso si conclude e il robot si ferma al prelievo. Fermare il programma a metà sequenza, con il pezzo in aria, lascerebbe la macchina in uno stato da cui è difficile ripartire.',
          ],
        },
        {
          type: 'previsione',
          question: 'Nella transizione dal passo “sali” (M3) al passo “vai” (M4) dimentico il segnale “braccio su”. Che cosa succede?',
          options: [
            { id: 'a', text: 'Niente: il braccio sale in fretta e arriva su prima di spostarsi.' },
            { id: 'b', text: 'M4 parte subito e il braccio si sposta mentre è ancora giù: urto.' },
            { id: 'c', text: 'Il ciclo non parte: senza “braccio su” il passo M3 non si accende.' },
          ],
          correct: 'b',
          why: 'Senza il finecorsa la transizione scatta nello stesso istante in cui M3 si accende. Il braccio comincia a spostarsi mentre sta ancora salendo, ed è ancora giù.',
        },
        {
          type: 'previsione',
          question: 'Premi Arresto a metà ciclo, con il pezzo nella pinza. Che cosa deve fare la macchina?',
          options: [
            { id: 'a', text: 'Fermarsi subito dove si trova, con il pezzo nella pinza.' },
            { id: 'b', text: 'Finire il ciclo, depositare il pezzo e poi fermarsi.' },
            { id: 'c', text: 'Aprire la pinza, far cadere il pezzo e poi fermarsi.' },
          ],
          correct: 'b',
          why: 'Fermare la sequenza a metà con il pezzo in aria, o far cadere il pezzo, lascia la macchina in uno stato pericoloso. L’arresto normale fa finire il ciclo in corso. Quando c’è un pericolo si usa invece il fungo di emergenza, cablato nei fili: toglie la potenza subito, e lo vedrai nella fabbrica.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'program', plc: 'PLC', min: 8, short: '1 Avvio', title: 'Il gradino di partenza del ciclo', text: 'Nuovo gradino: contatti M0 (marcia), I2 (pezzo pronto), I3 (braccio su), I5 (al prelievo) e M9 normalmente chiuso; uscite Set M1 e Set M9. Perché: il ciclo parte solo se c’è un pezzo, il robot è fermo al punto giusto e non c’è già un ciclo.' },
      { kind: 'program', plc: 'PLC', min: 15, short: '2 Transizioni', title: 'Le transizioni dei passi', text: 'Per ogni passo da M1 a M7: un gradino con il passo e il suo “fatto” (I4, T1, I3, I6, I4, T2, I3), uscite Reset del passo e Set del successivo. Perché: un solo passo alla volta resta acceso e ciascuno comincia solo a passo precedente finito.' },
      { kind: 'program', plc: 'PLC', min: 16, short: '3 Fine ciclo', title: 'Il ritorno e la fine del ciclo', text: 'Ultimo gradino: M8 con I5 (al prelievo); uscite Reset M8 e Reset M9. Perché: il ciclo è finito e il successivo può partire.' },
      { kind: 'control', id: 'SB1', short: '4 Prova', title: 'Premi Marcia', text: 'Premi Marcia e guarda il robot: porta un pezzo al deposito dopo l’altro. Premi Arresto: finisce il ciclo e si ferma.' },
      { kind: 'verify', short: '5 Verifica', title: 'Controlla la sequenza', text: 'Premi Verifica.' },
    ],
    summary: [
      'Una sequenza si programma con un marcatore per ogni passo: solo uno è acceso e dice a che punto del ciclo siamo.',
      'Le uscite dipendono dal passo, non dai sensori; la logica sta nelle transizioni.',
      'Una transizione è il passo attuale in serie con il segnale “fatto” (un finecorsa o un tempo), con Reset del passo e Set del successivo.',
      'Il segnale “fatto” non si salta: senza il finecorsa il passo successivo parte troppo presto e la macchina urta.',
      'Il ciclo in corso finisce sempre: Arresto impedisce di cominciare il successivo, non ferma la macchina a metà.',
    ],
  },
  'c44-guasti': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Un impianto in servizio non resta a posto',
          paras: [
            'Fin qui hai costruito impianti che funzionano. Un impianto vero lavora per anni e prima o poi qualcosa si rompe: un filo si stacca, un contatto si blocca, un cavo di rete si sfila. Il lavoro di chi lo gestisce è accorgersene presto, capire che cosa è successo e ripararlo prima che il guasto faccia danni.',
            'In questo livello il serbatoio con il pannello operatore lavora da solo per un turno. Durante il turno arrivano tre guasti, uno alla volta e a tempo: non sai quando. Il pannello è la tua finestra sull’impianto.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Dall’allarme al pezzo guasto',
          paras: [
            'Un allarme dice che cosa non va, non dove. Per trovare il pezzo guasto si mettono insieme tre indizi: il testo dell’allarme, i valori sul pannello e il banco. Si parte da quello che il guasto cambia.',
          ],
          table: {
            head: ['Che cosa vedi', 'Che cosa significa', 'Dove guardare'],
            rows: [
              ['“Guasto del sensore di livello” (corrente sotto 3,6 mA)', 'l’anello del trasmettitore non porta corrente', 'il filo del trasmettitore'],
              ['Il livello supera l’80 % e la pompa resta in marcia (più tardi “Livello troppo alto”)', 'il galleggiante alto non scatta', 'i galleggianti sul banco'],
              ['Valori grigi e “collegamento perso”', 'il pannello non parla più con il PLC', 'il cavo di rete del pannello'],
            ],
          },
        },
        {
          type: 'spiegazione',
          title: 'Riconoscere non è riparare',
          paras: [
            'Il tasto di riconoscimento del pannello ferma la sirena, ma non cambia niente nell’impianto: il guasto resta. Riparare vuol dire intervenire sul pezzo, e vale solo quando l’impianto torna a funzionare. Nel gioco lo fai dal banco: il pezzo guasto mostra un tasto per rimetterlo a posto.',
            'Ogni guasto ha un tempo massimo di intervento. Più aspetti, più il danno cresce: un galleggiante bloccato non ferma la pompa e il serbatoio, se aspetti troppo, trabocca. Non tutti i guasti danno subito un allarme: il galleggiante bloccato si vede prima dai valori (il livello passa l’80 % e la pompa non si ferma) che dall’allarme, che arriva quando manca poco al traboccamento. Con più allarmi contemporanei si comincia da quello di priorità più alta.',
          ],
          warn: 'Se in una riparazione sbagli pezzo, perdi tempo. Prima di toccare il banco guarda gli indizi: quello che cambia per quel guasto.',
        },
        {
          type: 'previsione',
          question: 'Il pannello mostra tutti i valori grigi con “collegamento perso”, nessun allarme nuovo, e il serbatoio nella scena intanto continua a cambiare livello. Che cosa fai?',
          options: [
            { id: 'a', text: 'Niente: senza allarmi nuovi l’impianto sta funzionando bene.' },
            { id: 'b', text: 'Cerco il guasto sul cavo di rete del pannello: senza collegamento non arrivano allarmi.' },
            { id: 'c', text: 'Sostituisco il trasmettitore di livello: i valori grigi vengono dal sensore.' },
          ],
          correct: 'b',
          why: 'Un pannello senza collegamento non riceve neppure gli allarmi: l’assenza di allarmi non vuol dire che va tutto bene. I valori grigi sono il segnale che i dati sono vecchi.',
        },
        {
          type: 'previsione',
          question: 'Compaiono insieme “Livello troppo basso” (media) e “Guasto del sensore di livello” (alta). Da quale cominci?',
          options: [
            { id: 'a', text: 'Dal livello basso: è quello che si vede e va sistemato subito.' },
            { id: 'b', text: 'Dal guasto del sensore: è prioritario, e senza misura il livello è falso.' },
            { id: 'c', text: 'Non importa l’ordine: tutti e due vanno risolti prima di ripartire.' },
          ],
          correct: 'b',
          why: 'La priorità alta va per prima. Il guasto del sensore è anche la causa possibile dell’altro: con la misura persa il livello mostrato non è affidabile.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'power', short: '1 Corrente', title: 'Dai corrente e comincia il turno', text: 'Tocca la levetta del quadro: il turno parte e il tempo corre, anche se poi togli la corrente. Guarda il pannello operatore e il grafico.' },
      { kind: 'verify', short: '2 Turno', title: 'Gestisci i guasti e consegna', text: 'Quando scatta un guasto leggi il pannello, cerca il pezzo sul banco e ripara. Alla fine del turno premi Verifica.' },
    ],
    summary: [
      'Un impianto in servizio si guasta: conta accorgersene presto e riparare in tempo.',
      'Un allarme dice che cosa non va, non dove: per trovare il pezzo si mettono insieme l’allarme, i valori sul pannello e il banco.',
      'Riconoscere un allarme non ripara il guasto: serve intervenire sul pezzo.',
      'Ogni guasto ha un tempo massimo; con più allarmi si comincia da quello di priorità più alta.',
      'Un pannello senza collegamento non riceve neppure gli allarmi: l’assenza di allarmi non basta a dire che l’impianto è a posto.',
    ],
  },
  'c45-fabbrica': {
    support: 'passi',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Una cella di produzione completa',
          paras: [
            'Questo livello mette insieme tutto: la sicurezza a due canali dei primi livelli del modulo, il programma a sequenza della linea, gli allarmi e il pannello operatore, e la gestione dei guasti di un turno di lavoro. Non c’è niente di nuovo da imparare: c’è da dimostrare che sai farlo tutto insieme.',
            'Un robot porta i pezzi dal prelievo al deposito. Le tre parti da fare: la sicurezza (cablaggio), il programma (transizioni e allarmi) e il turno (guasti).',
          ],
        },
        {
          type: 'spiegazione',
          title: 'La sicurezza viene prima del programma',
          paras: [
            'Il robot riceve potenza solo dal contattore KM, e KM si eccita solo se il relè di sicurezza KS è armato. KS ha i due canali di fungo e portella e un riarmo che passa dal contatto NC di KM. Tutto nei fili: se il PLC si blocca o ha un errore, premere il fungo toglie comunque la potenza.',
            'Il PLC ascolta la sicurezza con un ingresso (I7, il contatto ausiliario di KM): non decide niente, ma sa quando le sicurezze sono aperte. Così può dare l’allarme “Sicurezze aperte”, sospendere i suoi tempi e lasciar cadere la marcia: dopo il riarmo il robot finisce il ciclo interrotto, poi per ripartire serve di nuovo Marcia.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Perché i tempi si fermano con la sicurezza aperta',
          paras: [
            'Se il robot resta senza potenza (fungo premuto) mentre sta aprendo la pinza, il tempo di apertura nel programma continuerebbe a scorrere: scaduto il tempo il programma passa al passo dopo e comanda di salire, ma la pinza non si è mai aperta. Al riarmo il robot parte con il passo sbagliato e fa cadere il pezzo.',
            'Per questo i tempi del programma contano solo con le sicurezze a posto: I7 è in serie al contatto del temporizzatore. Quando la potenza torna, il tempo riparte da zero e il passo si completa davvero.',
          ],
          warn: 'Togliere la potenza ferma il robot, non il programma: il PLC continua a girare e i suoi tempi a scorrere. Per questo le sicurezze vanno considerate anche nei tempi e nelle sequenze.',
        },
        {
          type: 'spiegazione',
          title: 'Il turno: leggere, trovare, riparare',
          paras: [
            'Durante il turno arrivano quattro guasti: un finecorsa che non risponde (il ciclo si blocca e dopo 40 secondi scatta “Ciclo bloccato”), il fungo premuto da un operatore, la portella aperta e il cavo di rete del pannello. Per fungo e portella l’ordine è: prima si rimette a posto il dispositivo, poi si preme il riarmo, poi Marcia.',
            'Ogni guasto ha un tempo massimo e devi consegnare almeno 20 pezzi senza urti né cadute. Se le riparazioni arrivano tardi, la produzione cala.',
          ],
        },
        {
          type: 'previsione',
          question: 'Compare “Ciclo bloccato” e il robot è fermo con il braccio in basso. Dove cerchi?',
          options: [
            { id: 'a', text: 'Nel fungo: qualcuno l’ha premuto e ha tolto la potenza al robot.' },
            { id: 'b', text: 'Nei finecorsa: il programma aspetta un “fatto” che non arriva.' },
            { id: 'c', text: 'Nel cavo di rete: il pannello ha perso il collegamento con il PLC.' },
          ],
          correct: 'b',
          why: 'Con il fungo premuto compare “Sicurezze aperte”, e la spia di robot alimentato è spenta. “Ciclo bloccato” con il robot alimentato indica che il programma aspetta un segnale che non arriva: un finecorsa guasto.',
        },
        {
          type: 'previsione',
          question: 'Hai richiuso la portella ma il robot non riparte. Che cosa manca?',
          options: [
            { id: 'a', text: 'Niente: basta aspettare qualche secondo e riparte da solo.' },
            { id: 'b', text: 'Il riarmo: il relè di sicurezza non si riarma da solo.' },
            { id: 'c', text: 'Un nuovo comando di Marcia: il PLC ha perso la marcia.' },
          ],
          correct: 'b',
          why: 'È la regola che hai imparato con il relè di sicurezza: dopo un arresto di sicurezza la macchina non riparte da sola. Il riarmo si dà con la portella chiusa e i canali a posto. Dopo il riarmo il robot finisce il ciclo interrotto; per i pezzi successivi serve anche Marcia, perché il PLC ha perso la marcia quando le sicurezze si sono aperte.',
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    steps: [
      { kind: 'wire', from: 'KS.S12', to: ['P.2'], color: 'marrone', short: '1 Canali', title: 'I due canali dell’arresto', text: 'Su ogni canale fungo e portella sono in serie: fase, fungo (1-2 per il canale 1, 3-4 per il canale 2), portella, ingresso del relè (S12 e S22). Perché: aprendone uno qualunque il relè perde il canale.' },
      { kind: 'wire', from: 'KS.24', to: ['KM.A1'], color: 'marrone', short: '2 Contattore', title: 'Le uscite del relè alla bobina di KM', text: 'Le uscite 13-14 e 23-24 sono in serie alla bobina di KM: dalla fase a 13, da 14 a 23, da 24 ad A1 di KM; A2 al neutro. Perché: se un’uscita cade, il contattore si diseccita.' },
      { kind: 'wire', from: 'SBR.4', to: ['KS.R'], color: 'marrone', short: '3 Riarmo', title: 'Il riarmo passa dal contatto NC di KM', text: 'Dalla fase al contatto NC 21-22 di KM, poi al pulsante di riarmo, poi al morsetto R del relè. Perché: se KM resta incollato il relè non si riarma.' },
      { kind: 'program', plc: 'PLC', min: 17, short: '4 Transizioni', title: 'Le transizioni dei passi', text: 'Come nella linea: un gradino per ogni passo (M1-M8), con Reset del passo e Set del successivo, più il gradino di partenza del ciclo.' },
      { kind: 'program', plc: 'PLC', min: 19, short: '5 Allarmi', title: 'I due allarmi', text: 'T3 con la bobina M10 (ciclo bloccato) e I7 normalmente chiuso con la bobina M11 (sicurezze aperte).' },
      { kind: 'power', short: '6 Corrente', title: 'Dai corrente: comincia il turno', text: 'Prima puoi premere Verifica: controlla il cablaggio, il programma e la sicurezza anche a turno non cominciato. Poi tocca la levetta del quadro: da quel momento il tempo del turno corre.' },
      { kind: 'control', id: 'SBR', short: '7 Riarmo', title: 'Riarma il relè di sicurezza', text: 'Premi il riarmo: KS si arma, KM dà potenza al robot e la spia del robot alimentato si accende.' },
      { kind: 'control', id: 'SB1', short: '8 Marcia', title: 'Premi Marcia', text: 'Il robot comincia a portare i pezzi. Da qui gestisci i guasti: leggi il pannello, guarda il robot, ripara.' },
      { kind: 'verify', short: '9 Turno', title: 'Consegna il turno', text: 'Alla fine del turno premi Verifica: guasti riparati in tempo e almeno 20 pezzi depositati, senza urti né cadute.' },
    ],
    summary: [
      'La sicurezza sta nei fili, a due canali, con il riarmo manuale e il controllo del contatto NC del contattore: il programma non la sostituisce.',
      'Il PLC ascolta lo stato della sicurezza con un ingresso: dà l’allarme, sospende i tempi e perde la marcia.',
      'Un tempo del programma che scorre a macchina senza potenza fa passare al passo sbagliato: i tempi contano solo con le sicurezze a posto.',
      'Un guasto si trova leggendo insieme allarmi, valori e banco; si ripara in tempo e dopo un arresto di sicurezza si riarma.',
      'Una cella completa riunisce cablaggio, programma, sicurezza e gestione dei guasti.',
    ],
  },
  'c46-nastro-automatico': {
    support: 'obiettivo',
    lesson: {
      pages: [
        {
          type: 'spiegazione',
          title: 'Collaudare un programma',
          paras: [
            'Cambiare un programma è come rifare un pezzo di cablaggio: prima di consegnare la macchina si collaudano tutte le funzioni, non solo quella che si è cambiata. Un errore in una riga può fermare la produzione proprio dove nessuno guarda.',
            'Un lotto si collauda per intero, e poi si prova anche il lotto dopo: un contatore che arriva al numero giusto ma non torna a zero fa un solo lotto e poi tiene ferma la macchina.',
          ],
        },
        {
          type: 'spiegazione',
          title: 'Il programma si cambia a macchina ferma',
          paras: [
            'Per caricare il programma nuovo il PLC si ferma e poi riparte come appena acceso: perde le autoritenute, i conteggi e i tempi. Con la macchina in moto può fermarsi di colpo o, peggio, ripartire mentre qualcuno ci sta lavorando.',
            'Per questo il programma si cambia solo a macchina ferma, come i fili si cambiano solo a salvamotore aperto. Fungo e termico restano nei fili: fermano il nastro anche se il programma sbaglia.',
          ],
        },
        {
          type: 'previsione',
          question: 'Il primo lotto da 4 riesce. Premi Marcia per il lotto successivo: il nastro resta fermo e la spia "lotto pieno" resta accesa. Che cosa controlli per primo?',
          options: [
            { id: 'a', text: 'Il gradino del contatore: con che cosa si azzera alla fine del lotto.' },
            { id: 'b', text: 'Il filo del fungo di emergenza: forse si è staccato durante il lotto.' },
            { id: 'c', text: 'La taratura del relè termico: il motore si è scaldato con il lotto.' },
          ],
          correct: 'a',
          why: 'Il nastro ha appena finito un lotto, quindi fungo, termico e fili funzionano. Resta fermo perché il contatore è ancora pieno: nel gradino del nastro il contatto C1 normalmente chiuso è aperto. Se nessun ingresso azzera il contatore, resta pieno per sempre.',
        },
        {
          type: 'spiegazione',
          title: 'Una funzione alla volta, poi il gradino giusto',
          paras: [
            'Come nel collaudo dell’officina, si prova una funzione alla volta: Marcia (il nastro parte), un lotto intero (al quarto pacco il nastro si ferma e la spia si accende), il lotto dopo (Marcia riparte da zero), poi Arresto ed emergenza a metà lotto.',
            'Se una prova va male, apri l’editor e leggi il gradino di quella funzione: il contatore per il lotto (a che numero arriva, che cosa lo azzera), il gradino del nastro per marcia, arresto e sicurezze. Corretto il gradino a nastro fermo, si rifà tutto il collaudo.',
          ],
        },
        { type: 'sintesi', title: 'Da ricordare' },
      ],
    },
    summary: [
      'Un programma cambiato si collauda per intero: tutte le funzioni, non solo quella cambiata.',
      'Un lotto si prova fino in fondo, e poi si prova anche il lotto successivo.',
      'Un contatore senza ingresso di azzeramento conta un solo lotto e poi resta pieno.',
      'Il programma si cambia a macchina ferma: il PLC riparte da zero e la macchina può fermarsi o ripartire da sola.',
    ],
    fault: {
      say: 'Il nastro è pronto con il programma nuovo, lotti da 4. Collaudalo: Marcia, un lotto intero, il lotto successivo, l’arresto e l’emergenza. Quando hai capito che cosa non va, rispondi.',
      wires: W46,
      programs: { PLC: PROG_46_FAULT },
      diagnosis: {
        question: 'Perché, finito il primo lotto, con Marcia il nastro non riparte e la spia resta accesa?',
        options: [
          { id: 'a', text: 'La fotocellula conta due volte ogni pacco.' },
          { id: 'b', text: 'Il contatore non si azzera mai: nel suo gradino manca l’ingresso di azzeramento.' },
          { id: 'c', text: 'Il pulsante di marcia non arriva al PLC.' },
          { id: 'd', text: 'Il termico è scattato.' },
        ],
        correct: 'b',
        why: 'Il PLC vede Marcia (l’ingresso I1 si accende) e i pacchi sono stati contati giusti, quattro. Ma il contatore non ha un ingresso che lo riporti a zero: resta pieno, il suo contatto normalmente chiuso nel gradino del nastro resta aperto e Marcia non può far partire niente.',
      },
      fixSay: 'Ferma il nastro. Apri il banco e nel gradino del contatore scegli “Si azzera con: I1 (Marcia)”, lasciando il conteggio a 4. Poi ricollauda e premi Verifica.',
    },
  },
};

// ---- Modulo 5, La casa intelligente: unita' didattiche dei livelli di comando (c47-c50) ----
// Ogni lezione spiega il perche' prima del come: un concetto per pagina, tabelle dove aiutano, due previsioni.

UNITS_V2['c47-videocitofono'] = {
  support: 'passi',
  lesson: {
    pages: [
      {
        type: 'spiegazione',
        title: 'Perché il portone è a bassa tensione',
        paras: [
          'Il tasto di chiamata e la serratura stanno fuori, sul portone: li tocca chiunque, anche con le mani bagnate. Per questo non possono mai essere collegati ai 230 V della rete. Funzionano con una tensione bassa e sicura, per esempio 12 V.',
          'Ma l’impianto del palazzo è a 230 V. Serve un componente che prenda i 230 V e ne ricavi 12 V, tenendo i due lati separati: il trasformatore, lo stesso del campanello.',
        ],
        warn: 'Sulla pulsantiera del portone non devono mai arrivare i 230 V della rete: chi la tocca rischia la vita.',
      },
      {
        type: 'spiegazione',
        title: 'Il trasformatore ha due lati',
        paras: [
          'Il primario (morsetti 1 e 2) si collega alla rete e resta sempre alimentato. Il secondario (morsetti 3 e 4) dà i 12 V. Tra i due lati non c’è nessun filo: l’energia passa attraverso il campo magnetico del nucleo, quindi un guasto sul portone non arriva mai alla rete.',
          'Con il trasformatore alimentato ma nessun tasto premuto non passa corrente: il secondario è un circuito aperto, come una lampada con l’interruttore spento.',
        ],
        table: {
          head: ['Lato', 'Morsetti', 'Tensione', 'Che cosa si collega'],
          rows: [
            ['Primario', '1 e 2', '230 V', 'la fase e il neutro del quadro'],
            ['Secondario', '3 e 4', '12 V', 'tasti, suoneria e serratura'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Un anello per ogni funzione',
        paras: [
          'La corrente passa solo se trova un anello chiuso: esce dal morsetto 3, attraversa il tasto e l’utilizzatore, e torna al morsetto 4. Se il tasto è aperto l’anello è interrotto e non succede niente. Premendo il tasto l’anello si chiude e l’utilizzatore funziona.',
          'Qui gli anelli sono due, e partono dagli stessi morsetti: sono due rami in parallelo. Ognuno ha il suo tasto e il suo utilizzatore, e funziona indipendentemente dall’altro.',
        ],
        table: {
          head: ['Ramo', 'Percorso della corrente', 'Premendo il tasto'],
          rows: [
            ['Chiamata', 'morsetto 3, tasto di chiamata, suoneria, morsetto 4', 'la suoneria suona'],
            ['Apriporta', 'morsetto 3, tasto apriporta, serratura, morsetto 4', 'la serratura si sblocca'],
          ],
        },
      },
      {
        type: 'pezzi',
        title: 'Chiamata e apriporta',
        focus: ['TR', 'SBC', 'B', 'SBA', 'SE'],
        paras: [
          'Dal morsetto 3 del secondario parte la linea a 12 V: un ramo passa dal tasto di chiamata e arriva alla suoneria, l’altro passa dall’apriporta e arriva alla serratura. Entrambi tornano al morsetto 4.',
          'La serratura elettrica si sblocca finché il tasto è premuto. I fili a bassa tensione non sono fase né neutro: puoi usare il bianco.',
        ],
      },
      {
        type: 'spiegazione',
        title: 'E i videocitofoni veri?',
        paras: [
          'Nei videocitofoni moderni voce, immagine e alimentazione viaggiano su due soli fili, con un segnale digitale (il bus). In quel caso ogni posto interno ha una piccola elettronica che manda i comandi sul bus.',
          'Quello che hai imparato resta uguale: un alimentatore separato dalla rete (il trasformatore), la tensione bassa sul portone e una serratura che si apre con un impulso. Cambia solo il modo di trasmettere i comandi.',
        ],
      },
      {
        type: 'demo',
        title: 'Guarda come si fa',
        captions: {
          wires: [
            'La fase dal quadro al morsetto 1 del primario.',
            'Dal morsetto 2 del primario al neutro: il trasformatore è sempre alimentato.',
            'Dal morsetto 3 del secondario al tasto di chiamata. Qui si può usare il bianco.',
            'Dal tasto di chiamata alla suoneria.',
            'Dalla suoneria al morsetto 4 del secondario: l’anello della chiamata si chiude.',
            'Dal morsetto 3 del secondario anche al tasto apriporta: parte il secondo ramo.',
            'Dal tasto apriporta alla serratura.',
            'Dalla serratura al morsetto 4 del secondario: l’anello dell’apriporta si chiude.',
          ],
          power: 'Levetta su: il trasformatore dà 12 V sul secondario. Non succede niente finché nessuno preme un tasto, perché gli anelli sono aperti.',
          controls: [],
        },
      },
      {
        type: 'previsione',
        question: 'Colleghi la serratura a 12 V direttamente ai 230 V della rete, con il tasto apriporta in serie. Che cosa succede alla prima pressione?',
        options: [
          { id: 'a', text: 'Si sblocca normalmente: con più tensione scatta solo un po’ più forte.' },
          { id: 'b', text: 'La serratura si brucia, e sul portone c’è la tensione di rete.' },
          { id: 'c', text: 'Non succede niente: il differenziale stacca prima che si bruci.' },
        ],
        correct: 'b',
        why: 'Una serratura da 12 V sottoposta a 230 V si brucia. Il pericolo vero è un altro: la pulsantiera sul portone è raggiungibile da chiunque e non deve mai avere la tensione di rete. Il trasformatore separa i due lati.',
      },
      {
        type: 'previsione',
        question: 'Qualcuno preme nello stesso momento il tasto di chiamata e l’apriporta. Che cosa succede?',
        options: [
          { id: 'a', text: 'Suona la suoneria e si sblocca la serratura: i rami sono indipendenti.' },
          { id: 'b', text: 'Si brucia il trasformatore: due carichi insieme sono troppi per lui.' },
          { id: 'c', text: 'Non succede niente: i due tasti insieme si annullano a vicenda.' },
        ],
        correct: 'a',
        why: 'I due rami sono in parallelo: ognuno ha il suo anello e prende la sua corrente. Il trasformatore regge entrambi. Se i rami fossero in serie, uno impedirebbe all’altro di funzionare.',
      },
      { type: 'sintesi', title: 'Da ricordare' },
    ],
  },
  steps: [
    { kind: 'wire', from: 'Q.F', to: ['TR.1'], color: 'marrone', short: '1 Rete', title: 'La fase al primario', text: 'Dalla FASE del quadro al morsetto 1 del trasformatore. Perché: il trasformatore prende i 230 V dalla rete.' },
    { kind: 'wire', from: 'Q.N', to: ['TR.2'], color: 'blu', short: '2 Neutro', title: 'Il neutro al primario', text: 'Dal NEUTRO del quadro al morsetto 2 del trasformatore. Perché: il primario ha bisogno di fase e neutro per essere alimentato.' },
    { kind: 'wire', from: 'TR.3', to: ['SBC.3'], color: 'bianco', short: '3 Chiamata', title: 'Dal secondario al tasto di chiamata', text: 'Dal morsetto 3 del secondario al morsetto 3 del tasto di chiamata. Perché: da qui parte l’anello a 12 V della chiamata. Puoi usare il bianco.' },
    { kind: 'wire', from: 'SBC.4', to: ['B.1'], color: 'bianco', short: '4 Suoneria', title: 'Dal tasto alla suoneria', text: 'Dal morsetto 4 del tasto di chiamata a un morsetto della suoneria. Perché: la suoneria si alimenta solo quando il tasto chiude l’anello.' },
    { kind: 'wire', from: 'TR.4', to: ['B.2'], color: 'bianco', short: '5 Ritorno', title: 'Il ritorno della suoneria', text: 'Dal morsetto 4 del secondario all’altro morsetto della suoneria. Perché: la corrente deve poter tornare al trasformatore, altrimenti l’anello non si chiude.' },
    { kind: 'wire', from: 'TR.3', to: ['SBA.3'], color: 'bianco', short: '6 Apriporta', title: 'Dal secondario all’apriporta', text: 'Dal morsetto 3 del secondario al morsetto 3 del tasto apriporta. Perché: il secondo ramo parte dallo stesso morsetto del primo, in parallelo.' },
    { kind: 'wire', from: 'SBA.4', to: ['SE.A'], color: 'bianco', short: '7 Serratura', title: 'Dal tasto alla serratura', text: 'Dal morsetto 4 del tasto apriporta a un morsetto della serratura. Perché: la serratura si sblocca solo quando il tasto è premuto.' },
    { kind: 'wire', from: 'TR.4', to: ['SE.B'], color: 'bianco', short: '8 Ritorno', title: 'Il ritorno della serratura', text: 'Dal morsetto 4 del secondario all’altro morsetto della serratura. Perché: chiude l’anello dell’apriporta.' },
    { kind: 'power', short: '9 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro. Il secondario è in tensione ma non succede niente: gli anelli sono aperti.' },
    { kind: 'control', id: 'SBC', short: '10 Prova', title: 'Prova la chiamata', text: 'Tieni premuto il tasto di chiamata: la suoneria suona. Poi prova l’apriporta.' },
    { kind: 'verify', short: '11 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
  ],
  summary: [
    'Il portone si comanda solo in bassa tensione: i 230 V non arrivano mai alla pulsantiera.',
    'Il trasformatore separa la rete (primario) dai 12 V (secondario): tra i due lati non c’è nessun filo.',
    'La corrente passa solo in un anello chiuso: dal morsetto 3, attraverso tasto e utilizzatore, al morsetto 4.',
    'Chiamata e apriporta sono due rami in parallelo sul secondario: ciascuno funziona da solo.',
    'I videocitofoni a due fili mettono voce, immagine e alimentazione sullo stesso cavo, con un bus: il principio dell’alimentatore separato resta lo stesso.',
  ],
  fault: {
    say: 'L’impianto è cablato e la chiamata funziona. Premendo l’apriporta la serratura non si sblocca. Guarda dove sono collegati l’apriporta e la serratura.',
    wires: [
      ['Q.F', 'TR.1', 'marrone'], ['TR.2', 'Q.N', 'blu'],
      ['TR.3', 'SBC.3', 'bianco'], ['SBC.4', 'B.1', 'bianco'], ['B.2', 'TR.4', 'bianco'],
      ['Q.F', 'SBA.3', 'marrone'], ['SBA.4', 'SE.A', 'marrone'], ['SE.B', 'Q.N', 'blu'],
    ],
    diagnosis: {
      question: 'Perché la serratura non si sblocca?',
      options: [
        { id: 'a', text: 'L’apriporta e la serratura sono collegati alla rete a 230 V invece che al secondario a 12 V.' },
        { id: 'b', text: 'Il primario del trasformatore è collegato al contrario.' },
        { id: 'c', text: 'Manca un ponte tra i due tasti.' },
      ],
      correct: 'a',
      why: 'La serratura è da 12 V e prende la fase e il neutro della rete: si brucia. Peggio, il tasto sul portone ha i 230 V. L’apriporta e la serratura vanno sul secondario, come la chiamata.',
    },
    fixSay: 'Togli i fili che portano la fase e il neutro all’apriporta e alla serratura. Collega il morsetto 3 del secondario all’apriporta e la serratura al morsetto 4. Poi premi Verifica.',
  },
};

UNITS_V2['c48-luce-automatica'] = {
  support: 'passi',
  lesson: {
    pages: [
      {
        type: 'spiegazione',
        title: 'Un interruttore che si comanda da solo',
        paras: [
          'Un sensore è un interruttore che nessuno aziona con la mano: lo aziona qualcosa del mondo. Il sensore di luce chiude il contatto quando è buio. Il sensore di presenza lo chiude quando passa qualcuno.',
          'Il contatto di un sensore è “libero da tensione”: apre e chiude e basta, non porta una tensione sua. Come per un interruttore, la tensione ce la porti tu con un filo.',
        ],
        table: {
          head: ['Sensore', 'Chiude il contatto quando', 'A che serve'],
          rows: [
            ['Luce', 'è buio', 'non sprecare luce di giorno'],
            ['Presenza', 'passa qualcuno', 'accendere solo se serve'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Perché la lampada non passa dal sensore',
        paras: [
          'I contatti dei sensori sono piccoli: sono fatti per comandare, non per portare la corrente di una lampada o di un carico più grande. Se ci passasse tutto il carico si rovinerebbero presto.',
          'Per questo il sensore comanda un attuatore: qui un relè temporizzato. I sensori alimentano la bobina del relè (poca corrente), e il contatto del relè, robusto, alimenta la lampada. Sono due circuiti: quello di comando e quello di potenza, come nel relè del livello c18.',
        ],
        table: {
          head: ['Circuito', 'Che cosa contiene', 'Che corrente porta'],
          rows: [
            ['Comando', 'i due sensori e la bobina del relè', 'piccola'],
            ['Potenza', 'il contatto del relè e la lampada', 'quella del carico'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Due condizioni insieme: la serie',
        paras: [
          'La luce deve accendersi solo se è buio E c’è qualcuno. Se è giorno non serve luce, anche se passa qualcuno. Se è buio ma non passa nessuno è inutile accenderla.',
          'In un circuito due condizioni che servono insieme sono due contatti in serie: la corrente passa solo se sono chiusi tutti e due. Se ne bastasse uno, i contatti sarebbero in parallelo.',
        ],
        table: {
          head: ['È buio?', 'Passa qualcuno?', 'La luce'],
          rows: [
            ['no', 'no', 'spenta'],
            ['no', 'sì', 'spenta'],
            ['sì', 'no', 'spenta'],
            ['sì', 'sì', 'accesa'],
          ],
        },
        warn: 'Serie vuol dire E: passano tutti. Parallelo vuol dire O: ne basta uno.',
      },
      {
        type: 'spiegazione',
        title: 'Il temporizzatore: perché la luce resta accesa',
        paras: [
          'Il sensore di presenza chiude il contatto solo mentre vede muoversi qualcuno. Se la luce seguisse solo lui, si spegnerebbe a metà corridoio. Il temporizzatore risolve il problema: quando la bobina perde la tensione, il contatto resta chiuso ancora per il tempo impostato, 10 secondi.',
          'Se in quel tempo la bobina torna alimentata, il tempo riparte da capo.',
        ],
        table: {
          head: ['Istante', 'Che cosa succede', 'Lampada'],
          rows: [
            ['0 s', 'qualcuno passa, i sensori chiudono, la bobina è alimentata', 'accesa'],
            ['1 s', 'nessuno è più davanti al sensore, la bobina perde la tensione, parte il conto', 'accesa'],
            ['11 s', 'sono passati 10 secondi senza nessuno', 'spenta'],
          ],
        },
      },
      {
        type: 'pezzi',
        title: 'Sensori e attuatore',
        focus: ['CR', 'PR', 'T', 'L'],
        paras: [
          'Dalla fase, prima il sensore di luce, poi il sensore di presenza, poi la bobina A1 del temporizzatore: questo è il circuito di comando. Il neutro va alla bobina A2.',
          'La lampada ha un circuito suo: la fase arriva al contatto 1 del temporizzatore, dal contatto 2 va alla lampada, e la lampada torna al neutro.',
        ],
      },
      {
        type: 'demo',
        title: 'Guarda come si fa',
        captions: {
          wires: [
            'La fase dal quadro al sensore di luce: comincia il circuito di comando.',
            'Dal sensore di luce al sensore di presenza: i due contatti in serie, passano solo se sono chiusi tutti e due.',
            'Dal sensore di presenza alla bobina del temporizzatore.',
            'Filo blu dalla bobina al neutro: il comando si chiude.',
            'La fase al contatto del temporizzatore: comincia il circuito di potenza. La lampada non passa dai sensori.',
            'Dal contatto alla lampada.',
            'Filo blu dal neutro alla lampada.',
          ],
          power: 'Levetta su: giorno e nessuno nel corridoio, la lampada è spenta.',
          controls: [],
        },
      },
      {
        type: 'previsione',
        question: 'Colleghi i due sensori in parallelo invece che in serie. Che cosa succede di giorno, quando passa qualcuno?',
        options: [
          { id: 'a', text: 'Resta spenta: di giorno il sensore di buio tiene aperto tutto.' },
          { id: 'b', text: 'Si accende lo stesso: in parallelo basta che chiuda un sensore.' },
          { id: 'c', text: 'Lampeggia: i due sensori si alternano ad aprire e chiudere.' },
        ],
        correct: 'b',
        why: 'Con due contatti in parallelo basta uno solo per far passare la corrente: è un O. Il sensore di presenza chiude e la luce si accende anche se è giorno. Per avere un E, servono entrambi: i contatti vanno in serie.',
      },
      {
        type: 'previsione',
        question: 'Ti fermi a lungo davanti al sensore di presenza, che resta chiuso. Quando si spegne la luce?',
        options: [
          { id: 'a', text: 'Dopo 10 secondi da quando ti sei fermato davanti al sensore.' },
          { id: 'b', text: '10 secondi dopo che il sensore si riapre, cioè quando te ne vai.' },
          { id: 'c', text: 'Non si spegne mai: il temporizzatore si è bloccato acceso.' },
        ],
        correct: 'b',
        why: 'Il conto del temporizzatore parte quando la bobina perde la tensione, cioè quando il sensore si riapre. Finché resti davanti al sensore la bobina è alimentata e la luce rimane accesa.',
      },
      { type: 'sintesi', title: 'Da ricordare' },
    ],
  },
  steps: [
    { kind: 'wire', from: 'Q.F', to: ['CR.a'], color: 'marrone', short: '1 Luce', title: 'La fase al sensore di luce', text: 'Dalla FASE del quadro al morsetto 1 del sensore di luce. Perché: è l’inizio del circuito di comando.' },
    { kind: 'wire', from: 'CR.b', to: ['PR.a'], color: 'marrone', short: '2 Serie', title: 'I due sensori in serie', text: 'Dal morsetto 2 del sensore di luce al morsetto 1 del sensore di presenza. Perché: la corrente deve passare da tutti e due, quindi buio E presenza.' },
    { kind: 'wire', from: 'PR.b', to: ['T.A1'], color: 'marrone', short: '3 Bobina', title: 'Alla bobina del temporizzatore', text: 'Dal morsetto 2 del sensore di presenza al morsetto A1 del temporizzatore. Perché: i sensori comandano la bobina, non la lampada.' },
    { kind: 'wire', from: 'Q.N', to: ['T.A2'], color: 'blu', short: '4 Neutro', title: 'Il neutro alla bobina', text: 'Dal NEUTRO al morsetto A2 del temporizzatore. Perché: la bobina ha bisogno di fase e neutro.' },
    { kind: 'wire', from: 'Q.F', to: ['T.1'], color: 'marrone', short: '5 Contatto', title: 'La fase al contatto', text: 'Dalla FASE al morsetto 1 del contatto del temporizzatore. Perché: è l’inizio del circuito di potenza, separato da quello di comando.' },
    { kind: 'wire', from: 'T.2', to: ['L.A'], color: 'marrone', short: '6 Lampada', title: 'Alla lampada', text: 'Dal morsetto 2 del contatto alla lampada. Perché: la lampada riceve la fase solo quando il contatto del temporizzatore è chiuso.' },
    { kind: 'wire', from: 'Q.N', to: ['L.B'], color: 'blu', short: '7 Neutro lampada', title: 'Il neutro alla lampada', text: 'Dal NEUTRO al morsetto libero della lampada. Perché: chiude il circuito di potenza.' },
    { kind: 'power', short: '8 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro.' },
    { kind: 'control', id: 'CR', short: '9 Prova', title: 'Prova i sensori', text: 'Simula il buio e il passaggio di qualcuno: la luce si accende e, dopo qualche secondo, si spegne da sola.' },
    { kind: 'verify', short: '10 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
  ],
  summary: [
    'Un sensore è un interruttore comandato dal mondo: dal buio o da chi passa.',
    'Il contatto di un sensore è piccolo e libero da tensione: comanda un attuatore, non porta il carico.',
    'Due circuiti separati: il comando (sensori e bobina) e la potenza (contatto e lampada).',
    'Condizioni che servono tutte insieme sono contatti in serie (un E); se ne basta una, in parallelo (un O).',
    'Il temporizzatore tiene la luce accesa ancora per qualche secondo dopo l’ultimo passaggio.',
  ],
  fault: {
    say: 'L’impianto è già cablato. Di notte la luce si accende quando passa qualcuno, ma di giorno si accende lo stesso. Guarda come sono collegati i due sensori.',
    wires: [
      ['Q.F', 'CR.a', 'marrone'], ['Q.F', 'PR.a', 'marrone'], ['CR.b', 'T.A1', 'marrone'], ['PR.b', 'T.A1', 'marrone'], ['T.A2', 'Q.N', 'blu'],
      ['Q.F', 'T.1', 'marrone'], ['T.2', 'L.A', 'marrone'], ['L.B', 'Q.N', 'blu'],
    ],
    diagnosis: {
      question: 'Perché la luce si accende anche di giorno?',
      options: [
        { id: 'a', text: 'I due sensori sono in parallelo: ne basta uno.' },
        { id: 'b', text: 'Il temporizzatore ha il tempo troppo lungo.' },
        { id: 'c', text: 'Il neutro della lampada è collegato male.' },
      ],
      correct: 'a',
      why: 'In parallelo basta che uno dei due sensori chiuda. Per accendere la luce solo al buio e con qualcuno nel corridoio, i due contatti vanno in serie.',
    },
    fixSay: 'Togli i fili in parallelo. Collega la fase al sensore di luce, il sensore di luce al sensore di presenza e il sensore di presenza alla bobina. Poi premi Verifica.',
  },
};

UNITS_V2['c49-casa-plc'] = {
  support: 'passi',
  lesson: {
    pages: [
      {
        type: 'spiegazione',
        title: 'Che cos’è una scena',
        paras: [
          'Una scena cambia più luci con un solo tocco. Con i fili ti servirebbero molti relè e molti collegamenti; con il PLC basta un programma: il PLC legge i tasti e decide quali luci accendere.',
          'In questo livello l’impianto è già cablato. Il tuo lavoro è scrivere il programma.',
        ],
        table: {
          head: ['Scena', 'Luce dell’ingresso', 'Luce del soggiorno'],
          rows: [
            ['Torno', 'accesa', 'accesa'],
            ['Cena', 'spenta', 'accesa'],
            ['Esco', 'spenta', 'spenta'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Ingressi, uscite e programma',
        paras: [
          'I tasti sono collegati agli ingressi del PLC: premendo un tasto, l’ingresso corrispondente vale 1. Le lampade sono collegate alle uscite: quando il programma mette un’uscita a 1, il suo contatto si chiude e la lampada si accende.',
          'In mezzo c’è il programma, scritto a gradini: ogni gradino dice “se questa condizione è vera, fai queste cose”.',
        ],
        table: {
          head: ['Indirizzo', 'Che cos’è', 'Collegato a'],
          rows: [
            ['I0', 'ingresso', 'tasto Esco'],
            ['I1', 'ingresso', 'tasto Torno'],
            ['I2', 'ingresso', 'tasto Cena'],
            ['Q0', 'uscita', 'luce dell’ingresso'],
            ['Q1', 'uscita', 'luce del soggiorno'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Perché Set e Reset',
        paras: [
          'Una scena lascia le luci come le ha messe, anche dopo che hai rilasciato il tasto. Una bobina semplice non basta: segue la condizione, e quando rilasci il tasto la luce si spegne.',
          'Set e Reset ricordano. Set accende l’uscita e la lascia accesa; Reset la spegne e la lascia spenta. Nessuno dei due fa niente se la condizione non è vera.',
        ],
        table: {
          head: ['Istruzione', 'Che cosa fa'],
          rows: [
            ['Set', 'se la condizione è vera accende l’uscita e la lascia accesa'],
            ['Reset', 'se la condizione è vera spegne l’uscita e la lascia spenta'],
            ['Bobina', 'l’uscita segue la condizione e si spegne con lei'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Il programma, gradino per gradino',
        paras: [
          'Ogni scena è un gradino: la condizione è il tasto, e le istruzioni sono una per luce. Il PLC legge i gradini sempre dall’alto in basso, molte volte al secondo.',
          'Se due gradini scrivono la stessa uscita nello stesso momento, vale l’ultimo letto. Per questo l’ordine conta: con Esco in fondo, premendo insieme Esco e Torno la luce si spegne.',
        ],
        table: {
          head: ['Gradino', 'Se è vero', 'Allora'],
          rows: [
            ['1', 'Torno (I1)', 'Set su Q0 e Set su Q1'],
            ['2', 'Cena (I2)', 'Reset su Q0 e Set su Q1'],
            ['3', 'Esco (I0)', 'Reset su Q0 e Reset su Q1'],
          ],
        },
        warn: 'Il PLC esegue i gradini dall’alto in basso: se due gradini scrivono la stessa uscita, vince quello più in basso.',
      },
      {
        type: 'previsione',
        question: 'Nel gradino di Torno usi la bobina Q0 invece di Set. Che cosa succede quando rilasci il tasto?',
        options: [
          { id: 'a', text: 'La luce resta accesa: il PLC ricorda il tasto.' },
          { id: 'b', text: 'La luce si spegne appena il tasto torna a 0.' },
          { id: 'c', text: 'Il PLC segnala un errore: manca il Set.' },
        ],
        correct: 'b',
        why: 'Una bobina segue il suo gradino: la condizione vale 1 solo mentre il tasto è premuto, e allora la luce vale 1 solo per quel tempo. Per far restare la luce accesa si usa Set; per spegnerla Reset.',
      },
      {
        type: 'previsione',
        question: 'Con il programma finito, premi nello stesso istante Torno ed Esco. Che luci restano accese?',
        options: [
          { id: 'a', text: 'Tutte e due: il PLC esegue Torno, che viene per primo.' },
          { id: 'b', text: 'Nessuna: il gradino di Esco è più in basso e vince.' },
          { id: 'c', text: 'Solo il soggiorno: i due gradini si dividono le luci.' },
        ],
        correct: 'b',
        why: 'Il gradino 1 accende le due luci, poi il gradino 3 le spegne, e vale l’ultimo. È una scelta di chi scrive il programma: mettere in fondo il gradino che deve avere la precedenza.',
      },
      { type: 'sintesi', title: 'Da ricordare' },
    ],
  },
  steps: [
    { kind: 'program', plc: 'PLC', min: 1, short: '1 Torno', title: 'La scena Torno', text: 'Un gradino con il contatto Torno (I1) e due uscite: Set su Q0 e Set su Q1. Perché: Torno accende ingresso e soggiorno, e le luci devono restare accese anche a tasto rilasciato.' },
    { kind: 'program', plc: 'PLC', min: 2, short: '2 Cena', title: 'La scena Cena', text: 'Un gradino con il contatto Cena (I2): Reset su Q0 e Set su Q1. Perché: l’ingresso si spegne e il soggiorno resta acceso.' },
    { kind: 'program', plc: 'PLC', min: 3, short: '3 Esco', title: 'La scena Esco', text: 'Un gradino con il contatto Esco (I0): Reset su Q0 e Reset su Q1. Perché: spegne tutto. Mettilo per ultimo, così ha la precedenza.' },
    { kind: 'control', id: 'SBT', short: '4 Prova', title: 'Prova le scene', text: 'Premi Torno, poi Cena, poi Esco: guarda come cambiano le luci.' },
    { kind: 'verify', short: '5 Verifica', title: 'Controlla il programma', text: 'Premi Verifica.' },
  ],
  summary: [
    'Una scena è un gradino che cambia più uscite con un solo tasto.',
    'Set accende e ricorda, Reset spegne e ricorda: la scena resta anche a tasto rilasciato.',
    'Una bobina semplice segue il tasto e si spegne quando lo rilasci.',
    'Il PLC legge i gradini dall’alto in basso: se due gradini scrivono la stessa uscita, vince l’ultimo.',
    'Un solo tasto può avere più istruzioni nello stesso gradino.',
  ],
};

UNITS_V2['c50-allarme'] = {
  support: 'passi',
  lesson: {
    pages: [
      {
        type: 'spiegazione',
        title: 'Un allarme che si ricorda',
        paras: [
          'Un rilevatore di fumo e una sonda di allagamento chiudono un contatto quando vedono il pericolo. Se la sirena seguisse quel contatto, si spegnerebbe appena il fumo si dirada: l’evento sparirebbe senza che nessuno lo sappia.',
          'Per questo l’allarme ha una memoria. Basta uno dei due sensori per far partire l’allarme, quindi i due sono in parallelo: è un O.',
        ],
      },
      {
        type: 'spiegazione',
        title: 'Il relè che si tiene da solo',
        paras: [
          'La memoria è un relè con l’autoritenuta. Quando un sensore chiude, la bobina del relè riceve la fase e si eccita. Il suo contatto 11-14 si chiude e riporta la fase alla bobina stessa: ora la bobina non dipende più dal sensore, perché si alimenta da sola.',
          'La sirena prende la tensione dalla stessa linea della bobina: suona finché la bobina è alimentata.',
        ],
        table: {
          head: ['Che cosa succede', 'Sensore', 'Relè KA', 'Sirena'],
          rows: [
            ['tutto a riposo', 'aperto', 'diseccitato', 'spenta'],
            ['compare il fumo', 'chiuso', 'si eccita', 'suona'],
            ['il fumo sparisce', 'aperto', 'resta eccitato', 'suona ancora'],
            ['premi la tacitazione', 'aperto', 'si diseccita', 'si spegne'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'La tacitazione',
        paras: [
          'Il tasto di tacitazione è un contatto normalmente chiuso, messo in testa a tutto il circuito: sensori, contatto del relè e bobina prendono la fase da lì. Premendolo si toglie la fase a tutti insieme, e il relè si diseccita.',
          'Se il fumo c’è ancora, il sensore è ancora chiuso: appena rilasci la tacitazione la bobina riceve di nuovo la fase e l’allarme riparte. Un pericolo ancora presente non si può mettere a tacere.',
        ],
        warn: 'Tacitare non vuol dire risolvere: se il sensore è ancora attivo, l’allarme riparte appena rilasci il tasto.',
      },
      {
        type: 'spiegazione',
        title: 'Nei sistemi veri i sensori sono diversi',
        paras: [
          'Negli impianti d’allarme veri i contatti dei sensori sono normalmente chiusi e stanno in serie: un filo tagliato o un sensore guasto apre il circuito e fa suonare l’allarme, come se ci fosse un pericolo. È più sicuro, perché un guasto non si nasconde.',
          'Qui i sensori si chiudono quando vedono il pericolo: il circuito è più semplice da leggere e ti fa imparare la memoria e la tacitazione, che sono uguali in tutti e due i casi.',
        ],
      },
      {
        type: 'pezzi',
        title: 'Sensori in parallelo e memoria',
        focus: ['S1', 'S2', 'TA', 'KA', 'B'],
        paras: [
          'Dalla tacitazione la fase va ai due sensori e al contatto 11 del relè. I sensori e il contatto 14 arrivano insieme alla bobina A1, e la sirena si alimenta dallo stesso punto.',
          'Il relè KA ha la bobina A1-A2. Il neutro va ad A2 e alla sirena.',
        ],
      },
      {
        type: 'demo',
        title: 'Guarda come si fa',
        captions: {
          wires: [
            'La fase dal quadro al tasto di tacitazione: è in testa a tutto.',
            'Dalla tacitazione al rilevatore di fumo.',
            'Dalla tacitazione anche alla sonda di allagamento: i due sensori sono in parallelo.',
            'Dalla tacitazione al contatto 11 del relè: da qui parte l’autoritenuta.',
            'Dal rilevatore alla bobina del relè (morsetto A1).',
            'Dalla sonda alla stessa bobina.',
            'Dal contatto 14 alla bobina: l’autoritenuta, una volta scattato il relè si tiene da solo.',
            'Filo blu dalla bobina al neutro.',
            'Dalla linea della bobina alla sirena.',
            'Filo blu dalla sirena al neutro.',
          ],
          power: 'Levetta su: tutto a riposo, la sirena è silenziosa.',
          controls: [],
        },
      },
      {
        type: 'previsione',
        question: 'Hai tolto l’autoritenuta. Il fumo compare e poi si dirada. Che cosa fa la sirena?',
        options: [
          { id: 'a', text: 'Continua a suonare finché qualcuno non preme la tacitazione.' },
          { id: 'b', text: 'Si spegne appena il fumo sparisce, e nessuno sa dell’allarme.' },
          { id: 'c', text: 'Non suona mai: senza autoritenuta il relè non si eccita.' },
        ],
        correct: 'b',
        why: 'Senza memoria la sirena segue il sensore e si ferma appena il fumo sparisce. L’autoritenuta tiene il relè eccitato: l’allarme resta finché qualcuno lo tacita.',
      },
      {
        type: 'previsione',
        question: 'Il fumo c’è ancora e premi la tacitazione. Che cosa succede quando la rilasci?',
        options: [
          { id: 'a', text: 'La sirena resta spenta: l’hai tacitata e il relè lo ricorda.' },
          { id: 'b', text: 'La sirena riparte, perché il sensore di fumo è ancora chiuso.' },
          { id: 'c', text: 'Il relè si rompe: la bobina viene spenta e riaccesa di colpo.' },
        ],
        correct: 'b',
        why: 'Premendo il tasto togli la fase e il relè si diseccita. Ma il sensore è ancora chiuso: appena rilasci il tasto la bobina riceve di nuovo la fase e il relè si rieccita. Un pericolo ancora presente non si può tacitare.',
      },
      { type: 'sintesi', title: 'Da ricordare' },
    ],
  },
  steps: [
    { kind: 'wire', from: 'Q.F', to: ['TA.1'], color: 'marrone', short: '1 Tacitazione', title: 'La fase alla tacitazione', text: 'Dalla FASE del quadro al morsetto 1 del tasto di tacitazione. Perché: la tacitazione sta in testa a tutto, così premendola togli la fase a sensori e memoria.' },
    { kind: 'wire', from: 'TA.2', to: ['S1.a'], color: 'marrone', short: '2 Fumo', title: 'Al rilevatore di fumo', text: 'Dal morsetto 2 della tacitazione al morsetto 1 del rilevatore di fumo. Perché: il rilevatore porta la fase alla bobina quando vede fumo.' },
    { kind: 'wire', from: 'TA.2', to: ['S2.a'], color: 'marrone', short: '3 Acqua', title: 'Alla sonda di allagamento', text: 'Dal morsetto 2 della tacitazione al morsetto 1 della sonda. Perché: la sonda sta in parallelo al rilevatore, così basta uno dei due.' },
    { kind: 'wire', from: 'TA.2', to: ['KA.11'], color: 'marrone', short: '4 Memoria', title: 'Al contatto del relè', text: 'Dal morsetto 2 della tacitazione al morsetto 11 del relè. Perché: da qui parte l’autoritenuta, che si apre premendo la tacitazione.' },
    { kind: 'wire', from: 'S1.b', to: ['KA.A1'], color: 'marrone', short: '5 Bobina', title: 'Il rilevatore alla bobina', text: 'Dal morsetto 2 del rilevatore al morsetto A1 del relè. Perché: quando il rilevatore chiude, la bobina riceve la fase.' },
    { kind: 'wire', from: 'S2.b', to: ['KA.A1'], color: 'marrone', short: '6 Bobina', title: 'La sonda alla bobina', text: 'Dal morsetto 2 della sonda al morsetto A1 del relè. Perché: lo stesso per la sonda, in parallelo al rilevatore.' },
    { kind: 'wire', from: 'KA.14', to: ['KA.A1'], color: 'marrone', short: '7 Autoritenuta', title: 'L’autoritenuta', text: 'Dal morsetto 14 del relè al suo morsetto A1. Perché: a relè eccitato il contatto 11-14 riporta la fase alla bobina, che si tiene da sola.' },
    { kind: 'wire', from: 'Q.N', to: ['KA.A2'], color: 'blu', short: '8 Neutro', title: 'Il neutro alla bobina', text: 'Dal NEUTRO al morsetto A2 del relè. Perché: la bobina ha bisogno di fase e neutro.' },
    { kind: 'wire', from: 'KA.A1', to: ['B.1'], color: 'marrone', short: '9 Sirena', title: 'Alla sirena', text: 'Dal morsetto A1 del relè a un morsetto della sirena. Perché: la sirena suona finché la bobina è alimentata.' },
    { kind: 'wire', from: 'Q.N', to: ['B.2'], color: 'blu', short: '10 Neutro sirena', title: 'Il neutro alla sirena', text: 'Dal NEUTRO all’altro morsetto della sirena. Perché: chiude il circuito della sirena.' },
    { kind: 'power', short: '11 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro.' },
    { kind: 'control', id: 'S1', short: '12 Prova', title: 'Prova l’allarme', text: 'Simula il fumo, poi toglilo: la sirena continua. Premi la tacitazione per fermarla.' },
    { kind: 'verify', short: '13 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
  ],
  summary: [
    'Due sensori in parallelo: basta uno per dare l’allarme.',
    'L’autoritenuta dà la memoria: il contatto 11-14 riporta la fase alla bobina, che si tiene da sola.',
    'Senza memoria la sirena seguirebbe il sensore e l’evento sparirebbe senza che nessuno lo sappia.',
    'La tacitazione è un contatto normalmente chiuso in testa al circuito: premuto, toglie tensione a tutto.',
    'Se il sensore è ancora attivo, la tacitazione non basta: appena la rilasci l’allarme riparte.',
  ],
  fault: {
    say: 'L’impianto è cablato e la sirena suona quando il rilevatore vede fumo. Ma quando il fumo si dirada la sirena si spegne da sola. Guarda il relè dell’allarme.',
    wires: [
      ['Q.F', 'TA.1', 'marrone'], ['TA.2', 'S1.a', 'marrone'], ['TA.2', 'S2.a', 'marrone'],
      ['S1.b', 'KA.A1', 'marrone'], ['S2.b', 'KA.A1', 'marrone'], ['KA.A2', 'Q.N', 'blu'],
      ['KA.A1', 'B.1', 'marrone'], ['B.2', 'Q.N', 'blu'],
    ],
    diagnosis: {
      question: 'Perché la sirena si ferma da sola?',
      options: [
        { id: 'a', text: 'Manca l’autoritenuta: il contatto 11-14 del relè non riporta la fase alla bobina.' },
        { id: 'b', text: 'I due sensori sono in serie invece che in parallelo.' },
        { id: 'c', text: 'La tacitazione è collegata sul neutro.' },
      ],
      correct: 'a',
      why: 'Senza il contatto 11-14 sulla bobina il relè segue il sensore: appena il fumo si dirada la bobina si spegne e la sirena con lei. L’autoritenuta tiene il relè eccitato finché qualcuno preme la tacitazione.',
    },
    fixSay: 'Collega la tacitazione al contatto 11 del relè, e il contatto 14 alla bobina A1. Poi premi Verifica.',
  },
};

// ---- c52 Lavori in sicurezza, c53 La gestione dei carichi, c54 Il clima per zone ----

UNITS_V2['c52-lavori-sicurezza'] = {
  support: 'passi',
  lesson: {
    pages: [
      {
        type: 'spiegazione',
        title: 'Perché si lavora fuori tensione',
        paras: [
          'La corrente non si vede e non si sente prima di toccarla. Un filo in tensione sembra uguale a uno spento, e bastano pochi decimi di secondo per un danno grave. Per questo il lavoro sugli impianti si fa, quando è possibile, con l’impianto spento: fuori tensione.',
          'Spegnere però non basta: bisogna essere sicuri che l’impianto resti spento mentre ci lavori, e sicuri che sia davvero spento. Ci vuole una procedura, sempre uguale e sempre nello stesso ordine, come una lista di controllo prima del decollo.',
        ],
        warn: 'Un impianto “spento” che nessuno ha verificato va considerato in tensione.',
      },
      {
        type: 'spiegazione',
        title: 'La procedura, nell’ordine',
        paras: [
          'Negli impianti di casa e d’officina, che sono in bassa tensione (fino a 1000 V; i 12 V del campanello sono bassissima tensione), i passi sono questi. L’ordine non si cambia: ogni passo protegge dall’errore del passo prima.',
        ],
        table: {
          head: ['Passo', 'Che cosa fai e perché'],
          rows: [
            ['1 Sezionare', 'Apri l’interruttore a monte: togli la tensione ai fili su cui lavori.'],
            ['2 Bloccare', 'Metti il lucchetto sull’interruttore aperto: nessuno può richiuderlo mentre lavori.'],
            ['3 Verificare', 'Misuri che non ci sia tensione: ti accorgi di un altro circuito o di un errore.'],
            ['4 Lavorare', 'Metti le mani sui fili: solo adesso.'],
            ['5 Rimettere in servizio', 'Togli il lucchetto e richiudi, cioè ridai tensione: solo tu, che l’hai messo.'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Il lucchetto: perché non basta aprire',
        paras: [
          'Un interruttore aperto si richiude con un dito. Un collega che non sa che stai lavorando, vede la macchina ferma e riarma il quadro: la tensione torna sui fili che hai in mano.',
          'Il lucchetto, con il tuo nome o un cartello, impedisce la richiusura e dice a tutti che c’è qualcuno al lavoro. La chiave la tieni tu: il lucchetto lo toglie solo chi l’ha messo. Se lavorate in due, ognuno mette il suo: l’interruttore si richiude solo quando li avete tolti tutti. Nel gioco, a lucchetto messo il salvamotore non si richiude.',
        ],
      },
      {
        type: 'spiegazione',
        title: 'Verificare l’assenza di tensione: prima si prova lo strumento',
        paras: [
          'Per verificare si misura la tensione con il multimetro tra ogni conduttore su cui lavori e il neutro: deve leggere zero. Ma un multimetro con la batteria scarica o un puntale interrotto legge zero anche su un filo in tensione, e ti dice che è tutto a posto quando non lo è.',
          'Per questo prima si prova lo strumento su un punto che sai in tensione, a monte dell’interruttore aperto: deve leggere 230 V. Se li legge, lo strumento funziona, e uno zero a valle vale. Se non li legge, non ti fidi: prima si sistema o si cambia lo strumento.',
        ],
        table: {
          head: ['Puntali', 'Che cosa leggi e a che cosa serve'],
          rows: [
            ['1 e neutro', 'Morsetto 1 del salvamotore, a monte: 230 V. Lo strumento funziona.'],
            ['2 e neutro', '0 V: la prima fase è spenta.'],
            ['4 e neutro', '0 V: la seconda fase è spenta.'],
            ['6 e neutro', '0 V: la terza fase è spenta.'],
          ],
        },
        warn: 'Si misurano tutte le fasi: una sola fase ancora in tensione basta per prendere la scossa.',
      },
      {
        type: 'pezzi',
        title: 'Il banco di oggi',
        focus: ['QM', 'SBE', 'SB0', 'SB1'],
        paras: [
          'Accanto alla leva del salvamotore c’è il pulsante con il lucchetto: si mette solo a salvamotore aperto. Il multimetro si accende dal suo pulsante; il primo morsetto che tocchi è il puntale rosso, il secondo il nero.',
          'L’impianto è già cablato: marcia, arresto, contattore e motore. Manca il fungo di emergenza, che si aggiunge in serie al comando: per questo l’arresto è ancora senza fase, il posto tra salvamotore e arresto è quello del fungo.',
          'Nel lavoro vero si misura anche tra le fasi e verso terra, con uno strumento adatto: nel gioco basta tra ogni fase e il neutro.',
        ],
      },
      {
        type: 'spiegazione',
        title: 'Il lavoro: aggiungere il fungo',
        paras: [
          'Il fungo di emergenza è un contatto normalmente chiuso: a riposo lascia passare la fase al comando; premuto, la interrompe e il contattore cade. Come l’arresto, sta in serie sul comando: se un contatto qualunque si apre, la bobina perde la tensione.',
          'Va messo per primo, prima dell’arresto, come il termico nel nastro: le sicurezze vengono per prime. Dal morsetto 2 del salvamotore (a valle, dove prende la fase il comando) al morsetto 1 del fungo, e dal morsetto 2 del fungo al morsetto 1 dell’arresto. Sono due fili: ma prima la procedura.',
        ],
      },
      {
        type: 'previsione',
        question: 'Hai aperto il salvamotore ma non hai messo il lucchetto. Un collega, che non sa che stai lavorando, lo richiude. Che cosa succede?',
        options: [
          { id: 'a', text: 'Niente: il salvamotore protegge i fili anche quando è chiuso.' },
          { id: 'b', text: 'La tensione torna sui fili mentre ci hai le mani sopra.' },
          { id: 'c', text: 'Il salvamotore scatta e si riapre da solo, perché ci lavori.' },
        ],
        correct: 'b',
        why: 'Un interruttore aperto si richiude con un dito, e chi lo fa non sa che stai lavorando. Il lucchetto impedisce la richiusura e dice agli altri che c’è qualcuno al lavoro.',
      },
      {
        type: 'previsione',
        question: 'Il multimetro legge 0 V tra il morsetto 2 del salvamotore e il neutro. Basta per dire che a valle non c’è tensione?',
        options: [
          { id: 'a', text: 'Sì: uno zero letto sul morsetto vuol dire che non c’è tensione.' },
          { id: 'b', text: 'No: prima va provato lo strumento su un punto in tensione.' },
          { id: 'c', text: 'Sì, ma solo se lo zero si legge uguale per due volte di fila.' },
        ],
        correct: 'b',
        why: 'Uno zero può venire da un impianto spento o da uno strumento rotto. Solo se lo stesso strumento ha appena letto 230 V su un punto in tensione, lo zero a valle significa che è davvero spento.',
      },
      { type: 'sintesi', title: 'Da ricordare' },
    ],
  },
  steps: [
    { kind: 'control', id: 'QM', short: '1 Sezionare', title: 'Apri il salvamotore', text: 'Tocca la leva del salvamotore per aprirlo. Perché: senza la tensione a monte, i fili a valle sono spenti.' },
    { kind: 'lock', id: 'QM', short: '2 Lucchetto', title: 'Metti il lucchetto', text: 'Tocca il pulsante con il lucchetto, accanto alla leva del salvamotore. Perché: da ora nessuno può richiuderlo mentre lavori.' },
    { kind: 'measure', between: ['QM.1', 'Q.N'], mode: 'V', value: 230, short: '3 Prova', title: 'Prova lo strumento', text: 'Accendi il multimetro e misura tra il morsetto 1 del salvamotore (a monte) e il neutro: devi leggere 230 V. Perché: se lo strumento legge 230 V dove la tensione c’è, uno zero a valle è affidabile.' },
    { kind: 'measure', between: ['QM.2', 'Q.N'], mode: 'V', value: 0, short: '4 Fase 1', title: 'Verifica la prima fase', text: 'Misura tra il morsetto 2 del salvamotore e il neutro: devi leggere 0 V. Perché: a valle non deve esserci tensione.' },
    { kind: 'measure', between: ['QM.4', 'Q.N'], mode: 'V', value: 0, short: '5 Fase 2', title: 'Verifica la seconda fase', text: 'Misura tra il morsetto 4 e il neutro: 0 V. Perché: una sola fase in tensione basta per prendere la scossa.' },
    { kind: 'measure', between: ['QM.6', 'Q.N'], mode: 'V', value: 0, short: '6 Fase 3', title: 'Verifica la terza fase', text: 'Misura tra il morsetto 6 e il neutro: 0 V. Ora l’assenza di tensione è verificata.' },
    { kind: 'wire', from: 'QM.2', to: ['SBE.1'], color: 'rosso', short: '7 Fungo', title: 'Dal salvamotore al fungo', text: 'Dal morsetto 2 del salvamotore al morsetto 1 del fungo, in rosso (comando). Perché: il fungo è il primo contatto del comando.' },
    { kind: 'wire', from: 'SBE.2', to: ['SB0.1'], color: 'rosso', short: '8 Serie', title: 'Dal fungo all’arresto', text: 'Dal morsetto 2 del fungo al morsetto 1 dell’arresto. Perché: fungo e arresto sono in serie, ne basta uno aperto per fermare la macchina.' },
    { kind: 'control', id: 'SB1', short: '9 Collauda', title: 'Togli il lucchetto e collauda', text: 'Togli il lucchetto, richiudi il salvamotore e prova: Marcia, poi il fungo.' },
    { kind: 'verify', short: '10 Verifica', title: 'Controlla l’impianto', text: 'Premi Verifica.' },
  ],
  summary: [
    'Si lavora fuori tensione: sezionare, bloccare con il lucchetto, verificare l’assenza di tensione, lavorare, rimettere in servizio. In questo ordine.',
    'L’interruttore aperto non basta: il lucchetto impedisce la richiusura e dice agli altri che qualcuno sta lavorando.',
    'Prima di verificare si prova lo strumento su un punto in tensione: uno strumento guasto legge zero comunque.',
    'Si verificano tutte le fasi: una sola fase in tensione è già pericolosa.',
    'Il fungo di emergenza è un contatto normalmente chiuso in serie al comando, come l’arresto.',
  ],
  fault: {
    say: 'L’impianto è cablato con il fungo e l’arresto. Premendo il fungo il motore si ferma, ma premendo Arresto il motore non si ferma più. Guarda come è collegato il fungo.',
    wires: W52_FIXED.concat([['QM.2', 'SB0.1', 'rosso'], ['SBE.1', 'SB0.1', 'rosso'], ['SBE.2', 'SB0.2', 'rosso']]),
    diagnosis: {
      question: 'Perché Arresto non ferma più il motore?',
      options: [
        { id: 'a', text: 'Il fungo è in parallelo all’arresto: con due contatti in parallelo ne basta uno chiuso, e il fungo a riposo è chiuso.' },
        { id: 'b', text: 'Il pulsante di arresto è guasto.' },
        { id: 'c', text: 'Il contattore ha il contatto incollato.' },
      ],
      correct: 'a',
      why: 'Il fungo è un contatto normalmente chiuso messo in parallelo ai morsetti dell’arresto: la fase passa dal fungo anche quando l’arresto è aperto. Per fermare la macchina ogni contatto di sicurezza deve essere in serie, così basta che uno solo si apra.',
    },
    fixSay: 'Togli i fili del fungo. Collega il morsetto 2 del salvamotore al morsetto 1 del fungo e il morsetto 2 del fungo al morsetto 1 dell’arresto. Ricorda la procedura: salvamotore aperto, lucchetto, verifica. Poi premi Verifica.',
  },
};

UNITS_V2['c53-carichi'] = {
  support: 'passi',
  lesson: {
    pages: [
      {
        type: 'spiegazione',
        title: 'Un contatore, tanti carichi',
        paras: [
          'Il contatore della casa ha un limite di potenza: 6 kW. Se la casa preleva di più per più di 20 secondi, il contatore stacca tutto e al buio ci va l’intera casa. In una sera d’inverno i carichi si sommano: l’auto in carica, la pompa di calore, il forno, le luci.',
          'Sommati fanno più del limite, e allora qualcuno deve aspettare. Il PLC comanda l’auto e la pompa di calore. Il forno no: lo accendono le persone, e il PLC non può spegnerlo.',
        ],
        table: {
          head: ['Carico', 'Potenza', 'Lo comanda il PLC?'],
          rows: [
            ['Colonnina (auto)', '3,7 kW', 'sì'],
            ['Pompa di calore', '1,5 kW', 'sì'],
            ['Forno (19:30-20:30)', '3,5 kW', 'no, lo accendono le persone'],
            ['Resto della casa', '0,4-1,5 kW', 'no'],
          ],
        },
        warn: 'Il contatore stacca dopo 20 secondi sopra il limite: il PLC deve intervenire prima, con un po’ di scorta sotto i 6 kW.',
      },
      {
        type: 'spiegazione',
        title: 'La priorità: chi si stacca per primo',
        paras: [
          'Si stacca per primo il carico che dà meno fastidio. L’auto può caricarsi anche più tardi, nessuno se ne accorge. La pompa di calore ha un’inerzia: la casa è calda e qualche minuto senza non si sente. Il forno e le luci no: se si spengono se ne accorgono subito.',
          'Quindi: si stacca la colonnina; se non basta, anche la pompa di calore. Quando torna il margine, si riattaccano al contrario: prima la pompa di calore (più importante), poi la colonnina.',
        ],
        table: {
          head: ['Ordine di distacco', 'Carico', 'Perché'],
          rows: [
            ['1', 'colonnina', 'può aspettare, nessuno se ne accorge'],
            ['2', 'pompa di calore', 'la casa ha inerzia, per qualche minuto non si sente'],
            ['mai', 'forno e luci', 'se si spengono se ne accorgono subito'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Soglie diverse per staccare e per riattaccare',
        paras: [
          'Si stacca sopra una soglia alta, per esempio 5800 W, poco sotto il limite. Si riattacca solo sotto una soglia più bassa, scelta così: la soglia di riattacco più la potenza del carico deve restare sotto la soglia di distacco.',
          'La pompa assorbe 1,5 kW: riattacca sotto 4200 W, perché 4200 più 1500 fa 5700, sotto i 5800. La colonnina assorbe 3,7 kW: riattacca sotto 2000 W, perché 2000 più 3700 fa 5700. Con una soglia più alta, appena riattaccato il carico la potenza supererebbe di nuovo 5800 e lo staccheresti subito.',
        ],
        table: {
          head: ['Carico', 'Si stacca sopra', 'Riattacca sotto', 'Controllo'],
          rows: [
            ['Colonnina 3,7 kW', '5800 W', '2000 W', '2000 + 3700 = 5700 W'],
            ['Pompa di calore 1,5 kW', '5800 W', '4200 W', '4200 + 1500 = 5700 W'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Il ritardo: il margine deve durare',
        paras: [
          'C’è un secondo trucco. La potenza cala appena stacchi un carico. Se riattacchi non appena la potenza è sotto soglia, la casa torna sopra e stacchi di nuovo: pendoli. Ogni commutazione consuma il contattore, e il contatore, nel frattempo, conta i secondi.',
          'Per questo il riattacco chiede un margine che duri: un temporizzatore (TON) da 30 secondi. La condizione “potenza sotto la soglia” deve essere vera per 30 secondi di fila, e solo dopo si riattacca. Un calo di un attimo non basta.',
        ],
        table: {
          head: ['Senza il ritardo', 'Con il ritardo da 30 secondi'],
          rows: [
            ['stacchi, la potenza scende subito sotto soglia', 'stacchi, la potenza scende sotto soglia'],
            ['riattacchi al primo istante', 'aspetti 30 secondi di margine continuo'],
            ['la potenza risale e stacchi di nuovo', 'riattacchi solo se il margine è vero e stabile'],
            ['decine di commutazioni nella serata', 'poche commutazioni, una per ciclo'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Il programma, gradino per gradino',
        paras: [
          'Il primo gradino è già scritto: legge la potenza del contatore e la porta in watt in MW0. Gli altri sei li scrivi tu.',
        ],
        table: {
          head: ['Gradino', 'Condizione', 'Istruzione', 'Perché'],
          rows: [
            ['2', 'MW0 maggiore di 5800 E Q0 accesa', 'Reset su Q0', 'si stacca prima la colonnina'],
            ['3', 'MW0 maggiore di 5800 E Q0 spenta', 'Reset su Q1', 'se non basta, la pompa di calore'],
            ['4', 'MW0 minore di 4200', 'TON T1, 30 s', 'margine per la pompa'],
            ['5', 'T1 scaduto', 'Set su Q1', 'riattacca la pompa'],
            ['6', 'MW0 minore di 2000 E Q1 accesa', 'TON T2, 30 s', 'margine per la colonnina'],
            ['7', 'T2 scaduto', 'Set su Q0', 'riattacca la colonnina'],
          ],
        },
      },
      {
        type: 'previsione',
        question: 'Togli i due temporizzatori: ora riattacchi la colonnina e la pompa appena la potenza è sotto soglia. Che cosa vedi sul grafico?',
        options: [
          { id: 'a', text: 'Niente di diverso: la potenza resta sotto il limite lo stesso.' },
          { id: 'b', text: 'I carichi pendolano: si staccano e riattaccano di continuo.' },
          { id: 'c', text: 'La colonnina non riattacca più: senza ritardo resta staccata.' },
        ],
        correct: 'b',
        why: 'Appena stacchi un carico la potenza scende sotto soglia: senza ritardo riattacchi subito, la potenza risale, stacchi di nuovo. Il contatore potrebbe anche reggere, ma i contattori si usurano e la casa è un andirivieni di accensioni.',
      },
      {
        type: 'previsione',
        question: 'Cambi la priorità: stacchi la pompa di calore per prima e la colonnina per seconda. Che cosa succede?',
        options: [
          { id: 'a', text: 'Il contatore stacca comunque: l’ordine dei carichi non conta.' },
          { id: 'b', text: 'Il contatore regge, ma la casa resta al freddo mentre l’auto carica.' },
          { id: 'c', text: 'La casa si scalda di più, perché l’auto non ruba più potenza.' },
        ],
        correct: 'b',
        why: 'La potenza si abbassa lo stesso, ma si è tolto il carico che serve (il riscaldamento) e si è lasciato quello che può aspettare (l’auto). La priorità è una scelta sulla vita delle persone che abitano la casa, non solo un calcolo di watt.',
      },
      { type: 'sintesi', title: 'Da ricordare' },
    ],
  },
  steps: [
    { kind: 'program', plc: 'PLC', min: 2, short: '1 Colonnina', title: 'Stacca prima la colonnina', text: 'Nuovo gradino: confronto MW0 maggiore di 5800 E contatto Q0; uscita Reset su Q0. Perché: la colonnina è il carico che può aspettare.' },
    { kind: 'program', plc: 'PLC', min: 3, short: '2 Pompa', title: 'Poi la pompa di calore', text: 'Gradino: MW0 maggiore di 5800 E Q0 spento (contatto normalmente chiuso); uscita Reset su Q1. Perché: se la colonnina è già staccata e non basta, tocca alla pompa.' },
    { kind: 'program', plc: 'PLC', min: 5, short: '3 Pompa riparte', title: 'La pompa riparte con margine', text: 'Due gradini: MW0 minore di 4200 con un TON da 30 s (T1); poi T1 con Set su Q1. Perché: 4200 più 1500 resta sotto 5800, e il ritardo evita il pendolamento.' },
    { kind: 'program', plc: 'PLC', min: 7, short: '4 Auto riparte', title: 'La colonnina riparte dopo', text: 'Due gradini: MW0 minore di 2000 E Q1 accesa, TON da 30 s (T2); poi T2 con Set su Q0. Perché: 2000 più 3700 resta sotto 5800; riparte solo quando la pompa è già in marcia.' },
    { kind: 'verify', short: '5 Verifica', title: 'Guarda la serata', text: 'Premi Verifica: il tempo corre dalle 17. Nel grafico la potenza della rete deve passare sopra il limite solo per pochi secondi, quando si accende il forno, e il contatore non deve staccare.' },
  ],
  summary: [
    'Più carichi su un contatore: la potenza sommata supera il limite, e qualcuno deve aspettare.',
    'Priorità: si stacca prima il carico che può aspettare (l’auto), poi quello con inerzia (la pompa di calore). Il forno e le luci no.',
    'Soglia di riattacco più potenza del carico deve restare sotto la soglia di distacco, altrimenti riparte e si ferma.',
    'Il margine deve durare: un temporizzatore evita il pendolamento, cioè le decine di commutazioni nella serata.',
    'Il PLC comanda solo i carichi che gli sono collegati: il forno lo accendono le persone.',
  ],
};

UNITS_V2['c54-clima-zone'] = {
  support: 'passi',
  lesson: {
    pages: [
      {
        type: 'spiegazione',
        title: 'Una pompa, due stanze',
        paras: [
          'In una casa con il clima per zone c’è una sola pompa di calore, e ogni stanza ha il suo termostato. L’acqua calda arriva a tutte le stanze, ma una valvola per zona decide a quale lasciarla passare. Se la camera è calda la sua valvola si chiude e il calore va dove serve.',
          'Il PLC legge la temperatura di ogni stanza con una sonda, e comanda le valvole e la pompa. È lo stesso schema del serbatoio di c35, con i gradi al posto del livello.',
        ],
        table: {
          head: ['Pezzo', 'Che cosa fa', 'Sul PLC'],
          rows: [
            ['Sonda di temperatura', 'misura i gradi della stanza', 'ingresso analogico, in MW0 e MW1'],
            ['Valvola di zona', 'lascia passare il calore alla stanza', 'uscita Q1 (soggiorno), Q2 (camera)'],
            ['Pompa di calore', 'produce il calore', 'uscita Q0'],
            ['Finestra del soggiorno', 'quando è aperta, il calore se ne va', 'ingresso I0'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Il termostato con isteresi',
        paras: [
          'Con una sola soglia, per esempio 21 gradi, la valvola si aprirebbe e chiuderebbe di continuo attorno a quel valore: a 20,9 apre, a 21,1 chiude. Per evitarlo si usano due soglie, 20 e 22 gradi: apre sotto 20 e chiude sopra 22. Tra le due non cambia niente. Questa è l’isteresi.',
          'Nel PLC si scrive con Set e Reset: Set sulla valvola quando la temperatura è sotto 20; Reset quando è sopra 22. Una bobina semplice non basta, perché non ricorda.',
        ],
        table: {
          head: ['Temperatura', 'Che cosa succede alla valvola'],
          rows: [
            ['sotto 20 °C', 'Set: si apre e riscalda'],
            ['tra 20 e 22 °C', 'resta com’è (riscalda se era aperta, aspetta se era chiusa)'],
            ['sopra 22 °C', 'Reset: si chiude'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'La pompa non deve girare a vuoto',
        paras: [
          'La pompa fa circolare l’acqua attraverso le valvole aperte. Se tutte le valvole sono chiuse, l’acqua non ha dove andare: la pompa gira a vuoto e si surriscalda. Dopo un minuto si guasta e non riparte.',
          'Per questo la pompa parte solo se almeno una zona chiede calore: almeno una valvola aperta. Nel circuito è un O: due contatti in parallelo, Q1 oppure Q2.',
        ],
        table: {
          head: ['Valvola soggiorno', 'Valvola camera', 'Pompa'],
          rows: [
            ['chiusa', 'chiusa', 'ferma'],
            ['aperta', 'chiusa', 'in marcia'],
            ['chiusa', 'aperta', 'in marcia'],
            ['aperta', 'aperta', 'in marcia'],
          ],
        },
        warn: 'Con tutte le valvole chiuse la pompa lavora a vuoto: dopo un minuto si guasta.',
      },
      {
        type: 'spiegazione',
        title: 'La finestra aperta',
        paras: [
          'Se il soggiorno ha la finestra aperta il calore esce, e scaldarlo vuol dire scaldare la strada. Il contatto della finestra arriva all’ingresso I0: quando vale 1 la valvola del soggiorno si chiude, con un gradino Reset su Q1.',
          'Il PLC legge i gradini dall’alto in basso e vince l’ultimo che scrive la stessa uscita. Il gradino della finestra va quindi dopo il Set della valvola: così, anche se la stanza è fredda, a finestra aperta la valvola resta chiusa. Quando richiudi la finestra, il Set riapre la valvola se serve.',
        ],
      },
      {
        type: 'previsione',
        question: 'Hai messo come consenso alla pompa solo la valvola del soggiorno. La camera chiede calore e il soggiorno è già caldo. Che cosa succede?',
        options: [
          { id: 'a', text: 'La camera si scalda comunque: la sua valvola è già aperta.' },
          { id: 'b', text: 'La valvola della camera è aperta, ma la pompa resta ferma.' },
          { id: 'c', text: 'La pompa gira a vuoto: una valvola sola non basta a farla girare.' },
        ],
        correct: 'b',
        why: 'Il consenso alla pompa deve tenere conto di tutte le zone: almeno una valvola aperta, Q1 oppure Q2. Con la sola valvola del soggiorno, il calore non parte mai per la camera.',
      },
      {
        type: 'previsione',
        question: 'Lasci il consenso della pompa sempre acceso, qualunque cosa facciano le valvole. Le stanze si scaldano e le valvole si chiudono. Che cosa succede?',
        options: [
          { id: 'a', text: 'Niente: quando le stanze sono calde la pompa riposa da sola.' },
          { id: 'b', text: 'La pompa gira con le valvole chiuse e dopo un minuto si guasta.' },
          { id: 'c', text: 'Le stanze si scaldano di più, perché la pompa non si ferma mai.' },
        ],
        correct: 'b',
        why: 'Con le valvole chiuse l’acqua non circola. Una pompa che gira a vuoto si surriscalda e si blocca: è il guasto che il consenso a “almeno una valvola aperta” evita.',
      },
      { type: 'sintesi', title: 'Da ricordare' },
    ],
  },
  steps: [
    { kind: 'program', plc: 'PLC', min: 4, short: '1 Soggiorno', title: 'Il termostato del soggiorno', text: 'Due gradini: MW0 minore di 20 con Set su Q1; MW0 maggiore di 22 con Reset su Q1. Perché: due soglie diverse, l’isteresi, evitano che la valvola apra e chiuda di continuo.' },
    { kind: 'program', plc: 'PLC', min: 5, short: '2 Finestra', title: 'La finestra chiude la valvola', text: 'Un gradino con il contatto I0 e Reset su Q1, dopo il Set. Perché: vince l’ultimo gradino, e a finestra aperta la valvola del soggiorno deve restare chiusa.' },
    { kind: 'program', plc: 'PLC', min: 7, short: '3 Camera', title: 'Il termostato della camera', text: 'Come il soggiorno, con MW1 e Q2: Set sotto 20, Reset sopra 22.' },
    { kind: 'program', plc: 'PLC', min: 8, short: '4 Pompa', title: 'La pompa con il consenso', text: 'Una bobina Q0 con la condizione “Q1 oppure Q2” (due contatti in parallelo). Perché: la pompa parte solo se almeno una valvola è aperta, altrimenti gira a vuoto.' },
    { kind: 'power', short: '5 Levetta', title: 'Dai corrente', text: 'Tocca la levetta del quadro: il tempo corre dalle 17.' },
    { kind: 'control', id: 'W1', short: '6 Prova', title: 'Apri la finestra', text: 'Simula la finestra aperta del soggiorno: la valvola si chiude e il soggiorno si raffredda, la camera resta calda.' },
    { kind: 'verify', short: '7 Verifica', title: 'Guarda la serata', text: 'Premi Verifica. Nel grafico le due temperature restano tra le linee minima e massima.' },
  ],
  summary: [
    'Un termostato per stanza: la valvola di zona si apre sotto 20 °C e si chiude sopra 22 °C (isteresi, Set e Reset).',
    'Con una sola soglia la valvola aprirebbe e chiuderebbe di continuo: servono due soglie diverse.',
    'La pompa di calore parte solo se almeno una valvola è aperta: con tutte chiuse gira a vuoto e si guasta.',
    'La finestra aperta chiude la valvola del soggiorno: il gradino va dopo il Set, perché vince l’ultimo.',
  ],
};

// ---- Modulo 6: la prova della fabbrica, il turno di notte (c51) ----
UNITS_V2['c51-turno-notte'] = {
  support: 'obiettivo',
  lesson: {
    pages: [
      {
        type: 'spiegazione',
        title: 'Il manutentore di turno',
        paras: [
          'Di notte la cella lavora da sola e c’è un solo manutentore per tutto il reparto. Il suo lavoro non è costruire l’impianto ma tenerlo in produzione: quando qualcosa si ferma deve capire in fretta che cosa, ripararlo senza farsi male e far ripartire la cella.',
          'Ogni minuto di fermo è produzione persa. Ma la fretta non vale un incidente: un robot che riparte mentre hai le mani nella cella non si ferma per guardarti.',
        ],
      },
      {
        type: 'spiegazione',
        title: 'Dall’allarme al pezzo',
        paras: [
          'Il pannello dice che cosa è successo, non dove. “Sicurezze aperte” vuol dire che il robot ha perso la potenza: fungo premuto o portella aperta. “Ciclo bloccato” con il robot alimentato vuol dire che il programma aspetta un segnale che non arriva: quasi sempre un finecorsa.',
          'Per trovare quale, guarda dove si è fermato il braccio: se è in basso e il programma aspetta “braccio giù”, il finecorsa in basso non ha risposto. Il LED del finecorsa dice se il PLC lo vede.',
        ],
        table: {
          head: ['Il pannello dice', 'Il robot', 'Dove guardare'],
          rows: [
            ['Sicurezze aperte', 'senza potenza', 'fungo e portella'],
            ['Ciclo bloccato', 'alimentato, fermo', 'il finecorsa del movimento in corso'],
            ['Pannello grigio', 'lavora', 'il cavo di rete del pannello'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Dentro la cella solo senza potenza',
        paras: [
          'Per cambiare un finecorsa bisogna entrare nella cella. Prima si apre la portella: il relè di sicurezza toglie la potenza al robot e il robot resta fermo dov’è. Poi si ripara. Poi si esce, si richiude la portella, si preme il riarmo e infine Marcia.',
          'L’ordine conta: riparare con il robot alimentato è l’errore più pericoloso del turno, anche se il robot in quel momento è fermo. È fermo perché il programma aspetta: appena il finecorsa torna a rispondere, riparte.',
        ],
        warn: 'Un robot fermo non è un robot sicuro: è fermo finché il programma aspetta. Senza potenza invece non può muoversi.',
      },
      {
        type: 'previsione',
        question: 'Il pannello dice “Ciclo bloccato”, il robot è alimentato e fermo con il braccio in basso. Che cosa fai per primo?',
        options: [
          { id: 'a', text: 'Tocco il finecorsa in basso per vedere se il robot si sblocca.' },
          { id: 'b', text: 'Apro la portella, così il robot perde potenza, e poi controllo.' },
          { id: 'c', text: 'Premo di nuovo Marcia: il PLC rilegge i finecorsa e riparte.' },
        ],
        correct: 'b',
        why: 'Il robot è fermo solo perché il programma aspetta il finecorsa. Se lo sblocchi con il robot alimentato, il robot riparte con le tue mani nella cella. Con la portella aperta il robot non ha potenza e non può muoversi.',
      },
      {
        type: 'previsione',
        question: 'Hai riparato il finecorsa e richiuso la portella. Il robot non riparte. Che cosa manca?',
        options: [
          { id: 'a', text: 'Il riarmo, e poi un nuovo comando di Marcia.' },
          { id: 'b', text: 'Niente: riparte da solo dopo qualche secondo.' },
          { id: 'c', text: 'Spegnere e riaccendere il PLC per azzerarlo.' },
        ],
        correct: 'a',
        why: 'Dopo un arresto di sicurezza la macchina non riparte da sola: serve il riarmo con la portella chiusa. Il PLC intanto ha perso la marcia, perché le sicurezze erano aperte: per continuare a produrre serve Marcia.',
      },
      { type: 'sintesi', title: 'Da ricordare' },
    ],
  },
  summary: [
    'Il manutentore tiene la cella in produzione: capire in fretta, riparare in sicurezza, ripartire.',
    '“Sicurezze aperte”: fungo o portella. “Ciclo bloccato” con il robot alimentato: un finecorsa che non risponde.',
    'Dentro la cella si lavora solo con il robot senza potenza: prima la portella aperta, poi la riparazione.',
    'Dopo un arresto di sicurezza: richiudere, riarmare, poi Marcia.',
  ],
  fault: {
    say: 'La cella è in servizio. Riarma le sicurezze e premi Marcia: il turno comincia. Quando la cella si ferma, guarda il pannello e il braccio, e rispondi.',
    wires: W51_PLANT,
    programs: { PLC: PROG_51 },
    diagnosis: {
      question: 'La cella si è fermata: il pannello dice “Ciclo bloccato”, il robot è alimentato e il braccio è in basso. Perché?',
      options: [
        { id: 'a', text: 'Il relè di sicurezza ha tolto la potenza al robot.' },
        { id: 'b', text: 'Il finecorsa “braccio giù” non risponde: il programma aspetta un segnale che non arriva.' },
        { id: 'c', text: 'Al prelievo manca il pezzo.' },
        { id: 'd', text: 'Il programma ha perso un passo.' },
      ],
      correct: 'b',
      why: 'Con la potenza tolta il pannello direbbe “Sicurezze aperte” e la spia del robot sarebbe spenta. Il braccio è sceso ma il PLC non vede il finecorsa in basso: il passo “Scendi” aspetta il suo “fatto” e dopo 40 secondi scatta “Ciclo bloccato”.',
    },
    fixSay: 'Apri la portella (il robot perde la potenza), ripara il finecorsa “braccio giù”, richiudi la portella, premi il riarmo e poi Marcia. Poi tieni la cella in produzione fino alla fine del turno e premi Verifica.',
  },
};

// ---- Modulo 5: la prova della casa intelligente, una sera d'inverno (c55) ----
UNITS_V2['c55-sera-inverno'] = {
  support: 'obiettivo',
  lesson: {
    pages: [
      {
        type: 'spiegazione',
        title: 'Consegnare una casa intelligente',
        paras: [
          'In una casa intelligente i fili sono solo metà del lavoro. L’altra metà sono le regole scritte nel PLC: quando staccare l’auto, quando scaldare una stanza, che cosa fare se si apre una finestra. Un impianto cablato bene con una regola sbagliata lascia la famiglia al buio come un filo staccato.',
          'Per questo una casa intelligente non si consegna dopo aver acceso una lampada. Si guarda lavorare per una sera intera, con tutto quello che succede davvero: il sole che cala, l’auto che arriva, la cena, una finestra aperta.',
        ],
        table: {
          head: ['Che cosa c’è', 'Che cosa fa', 'Dove l’hai visto'],
          rows: [
            ['Gestione dei carichi', 'stacca prima l’auto e poi la pompa, per non far saltare il contatore', 'c53'],
            ['Clima per zone', 'scalda soggiorno e camera tra 20 e 22 °C, chiude la valvola se la finestra è aperta', 'c54'],
            ['Pannelli e batteria', 'di giorno producono, la sera la batteria copre i consumi', 'c39-c41'],
            ['Allarme di allagamento', 'la sirena suona finché non si asciuga la sonda e si tacita', 'c50'],
          ],
        },
      },
      {
        type: 'spiegazione',
        title: 'Il misuratore ha un fondo scala',
        paras: [
          'Il PLC conosce la potenza della casa solo attraverso il misuratore del contatore. Il misuratore manda un segnale da 4 a 20 mA che vuol dire da −6 kW (la casa immette) a +6 kW (la casa preleva). Oltre i 6 kW il segnale non sale più: si ferma a 20,5 mA, cioè circa 6,4 kW, anche se la casa preleva 8 o 10 kW.',
          'Quindi una soglia scritta nel programma vale solo se il misuratore la può raggiungere. Una soglia oltre il fondo scala non scatta mai.',
        ],
        table: {
          head: ['Potenza vera', 'Segnale', 'Il PLC legge'],
          rows: [
            ['3 kW', '16 mA', '3000 W'],
            ['6 kW', '20 mA', '6000 W'],
            ['8 kW', '20,5 mA (fermo)', 'circa 6400 W'],
          ],
        },
        warn: 'La soglia di distacco va sotto il limite del contatore, con margine. Sopra il limite il contatore stacca comunque dopo 20 secondi.',
      },
      {
        type: 'spiegazione',
        title: 'Si guarda la serata intera',
        paras: [
          'Chiudi il generale alle 16:30 e lascia andare la casa fino alle 23. Il pannello a muro mostra le potenze, la batteria, l’auto e le due stanze. Alle 21:30 la sonda del bagno potrebbe bagnarsi: prima la asciughi, poi taciti la sirena.',
          'Se il contatore stacca, la casa resta al buio fino a fine serata: il contatore non si riarma da solo e una casa che salta a ogni cena non si consegna. Si capisce perché, si corregge il programma e si rifà la serata da capo.',
        ],
      },
      {
        type: 'previsione',
        question: 'Vuoi una spia che si accenda quando la casa preleva più di 7 kW. Scrivi il gradino “MW0 maggiore di 7000”, con il misuratore da −6 a +6 kW. Una sera la casa preleva 8 kW. La spia si accende?',
        options: [
          { id: 'a', text: 'Sì: 8 kW sono più di 7 kW, quindi il confronto è vero.' },
          { id: 'b', text: 'No: il misuratore si ferma a circa 6400 W e non arriva a 7000.' },
          { id: 'c', text: 'Solo se la batteria è scarica: altrimenti copre lei i consumi.' },
        ],
        correct: 'b',
        why: 'Il PLC non vede la potenza vera ma il segnale del misuratore, che oltre il fondo scala resta fermo a 20,5 mA, circa 6400 W. Per sorvegliare 7 kW serve un misuratore con il fondo scala più alto, oppure una soglia che il misuratore può raggiungere.',
      },
      { type: 'sintesi', title: 'Da ricordare' },
    ],
  },
  summary: [
    'In una casa intelligente le regole del PLC contano quanto i fili: una soglia sbagliata lascia la casa al buio.',
    'Il PLC vede la potenza solo attraverso il misuratore: oltre il fondo scala il segnale si ferma, e una soglia più alta non scatta mai.',
    'La soglia di distacco sta sotto il limite del contatore, con margine.',
    'Una casa intelligente si collauda per una serata intera, con tutto quello che succede davvero.',
    'Allagamento: prima si asciuga la sonda, poi si tacita la sirena.',
  ],
  fault: {
    say: 'La casa è finita e programmata. Chiudi il generale: la serata comincia alle 16:30. Guarda il pannello. Se qualcosa non va, rispondi alla domanda.',
    wires: W55,
    programs: { PLC: PROG_55_FAULT },
    diagnosis: {
      question: 'Verso le 19:45 il contatore ha staccato tutta la casa. Sul pannello, prima del buio, la rete era al fondo scala sopra la riga del limite, auto e pompa erano accese e nessun carico si era staccato. Perché?',
      options: [
        { id: 'a', text: 'Il forno non si può staccare: con il forno acceso il contatore stacca sempre.' },
        { id: 'b', text: 'La soglia di distacco (6500 W) è sopra il limite e oltre il fondo scala del misuratore: il PLC non l’ha mai vista superata.' },
        { id: 'c', text: 'La batteria era scarica.' },
        { id: 'd', text: 'L’ordine di distacco è al contrario: prima la pompa, poi l’auto.' },
      ],
      correct: 'b',
      why: 'Il misuratore arriva al massimo a circa 6400 W, quindi “maggiore di 6500” non è mai vero e il PLC non stacca niente. Con il forno acceso basta staccare l’auto (3,7 kW) per tornare sotto il limite: il forno non è il problema. E con l’ordine al contrario la casa reggerebbe comunque, solo più fredda.',
    },
    fixSay: 'Apri il programma del PLC e nei due gradini del distacco metti la soglia sotto il limite, con margine: 5800 W. Poi rifai la serata da capo e consegna.',
  },
};
