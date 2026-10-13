// Unità didattiche dei livelli: lezione breve, previsione, esempio guidato, sfida guasto.
// Sono solo dati e testi; la sessione (src/engine/session.js) tiene la fase corrente e la vista li disegna.
//
// unit = {
//   lesson:     { pages: [{ title, paras: [testo...], art: '<chiave del disegno>' }...] }  una schermata per pagina,
//   prediction: { question, options: [{ id, text }], correct, why },
//   guided:     [{ wire: [da, a, colore], say }]   fili da fare insieme, nell'ordine
//   afterGuide: testo mostrato quando l'esempio guidato è finito,
//   fault:      { say, wires: [[da, a, colore]...], diagnosis: { question, options, correct, why }, fixSay }
// }

export const UNITS = {
  'c01-circuito-chiuso': {
    lesson: {
      pages: [
        {
          title: 'Che cosa devi costruire',
          art: 'bancoVuoto',
          paras: [
            'Sul banco ci sono due oggetti. In alto il quadro elettrico: è il punto da cui l’impianto riceve la corrente dalla rete. Ha due uscite, FASE e NEUTRO.',
            'In basso la lampada. Ha due morsetti, A e B: sono le viti a cui si fissano i fili.',
            'Il tuo compito è collegare la lampada al quadro con due fili.',
          ],
        },
        {
          title: 'Perché servono due fili',
          art: 'giro',
          paras: [
            'La corrente scorre solo se ha un giro completo da fare. Parte dalla fase, attraversa la lampada e torna al neutro.',
            'Il primo filo porta la corrente alla lampada, il secondo la riporta indietro. Se ne manca uno il giro è interrotto: si dice circuito aperto e la lampada resta spenta.',
          ],
        },
        {
          title: 'Dove si collega ogni filo',
          art: 'bancoCablato',
          paras: [
            'Primo filo: dalla FASE a un morsetto della lampada. Secondo filo: dal NEUTRO all’altro morsetto.',
            'Per la lampada A e B sono equivalenti: non conta quale scegli, conta che i due fili vadano a due morsetti diversi.',
            'Non collegare mai la fase direttamente al neutro: sarebbe un cortocircuito e il quadro scatterebbe.',
          ],
        },
        {
          title: 'I colori dei fili',
          art: 'fili',
          paras: [
            'Il colore dice a che cosa è collegato il filo. Il filo che parte dalla fase è marrone (si usano anche nero e grigio). Quello che parte dal neutro è blu.',
            'Il giallo-verde è riservato alla terra, che in questo livello non serve.',
          ],
        },
        {
          title: 'Come si usa il banco',
          art: 'tensione',
          paras: [
            'Scegli il colore, tocca il morsetto di partenza e poi quello di arrivo. Per togliere un filo, toccalo.',
            'Quando hai finito alza la levetta del quadro per dare corrente, poi premi Verifica.',
            'Sul banco un alone attorno a un filo vuol dire che c’è tensione. I puntini che scorrono vuol dire che passa corrente: un filo può avere la tensione senza che passi corrente, se il giro non è completo.',
          ],
        },
      ],
    },
    prediction: {
      question: 'Collego solo il filo di fase alla lampada e do corrente. Che cosa succede?',
      options: [
        { id: 'a', text: 'La lampada si accende.' },
        { id: 'b', text: 'La lampada resta spenta.' },
        { id: 'c', text: 'Il quadro scatta.' },
      ],
      correct: 'b',
      why: 'La lampada resta spenta. La fase arriva a un morsetto, ma senza il neutro manca il percorso di ritorno: il circuito è aperto e non passa corrente. Il quadro non scatta, perché non c’è nessun cortocircuito.',
    },
    guided: [
      { wire: ['Q.F', 'L.A', 'marrone'], say: 'Scegli il colore marrone, tocca il morsetto FASE del quadro e poi il morsetto A della lampada. Il tratteggio mostra il percorso.' },
    ],
    afterGuide: 'Ora completa il circuito: manca il collegamento di ritorno. Il neutro è blu.',
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
