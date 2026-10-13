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
};
