// Testi e struttura delle prove 3D dei moduli (milestone). Solo dati: la vista (src/prove) li disegna.
// Ogni prova ha la stessa cornice (ingresso, missione con i passi, registro, comandi in basso, finale)
// e un contenuto suo: atmosfera, comandi del quadro, passi e frasi del registro.

export const PROVE = {
  appartamento: {
    kick: 'Modulo 2 · prova finale',
    place: 'Appartamento',
    title: 'Una notte senza luce',
    tagline: 'Ore 22:40. Tac.',
    clock: [22, 40],
    goal: 'Il differenziale è scattato e la casa è al buio. Da qualche parte c’è una dispersione verso terra: trova la linea e rimetti la luce.',
    dockTitle: 'Quadro dell’ingresso',
    // comandi del quadro, da sinistra a destra. line: chiave in provaState.lines; view: dove guarda la camera quando la linea si accende
    controls: [
      { id: 'D', kind: 'rcd', name: 'Differenziale', short: 'Diff. 30 mA', sub: 'tasto T' },
      { id: 'M1', kind: 'mcb', name: 'Luce', line: 'luce', sub: '10 A', view: 'corridoio' },
      { id: 'M2', kind: 'mcb', name: 'Prese', line: 'prese', sub: '16 A', view: 'soggiorno' },
      { id: 'M3', kind: 'mcb', name: 'Cucina', line: 'cucina', sub: '20 A', view: 'cucina' },
    ],
    // l'apparecchio difettoso: compare tra i comandi solo dopo la diagnosi giusta (nella scena si tocca sempre)
    device: { id: 'G', name: 'Stufetta del soggiorno', plugged: 'collegata', unplugged: 'scollegata', act: 'Scollega', undo: 'Ricollega', view: 'soggiorno' },
    steps: [
      'Apri i tre magnetotermici',
      'Riarma il differenziale',
      'Richiudi una linea alla volta',
      'Rispondi: quale linea disperde?',
      'Scollega l’apparecchio difettoso',
      'Riarma, richiudi tutto e verifica',
    ],
    // frasi del registro, composte da src/prove/hud.js a partire da quello che e' cambiato
    log: {
      start: 'Il differenziale è scattato. Casa al buio.',
      rearm: 'Riarmato il differenziale.',
      rearmTrip: 'Riarmato il differenziale: scatta subito.',
      rcdOff: 'Aperto il differenziale.',
      test: 'Premuto il tasto di prova: il differenziale scatta.',
      lineOn: { luce: 'Chiusa la linea luce.', prese: 'Chiusa la linea prese.', cucina: 'Chiusa la linea cucina.' },
      lineOnTrip: { luce: 'Chiusa la linea luce: il differenziale scatta.', prese: 'Chiusa la linea prese: il differenziale scatta.', cucina: 'Chiusa la linea cucina: il differenziale scatta.' },
      lineOff: { luce: 'Aperta la linea luce.', prese: 'Aperta la linea prese.', cucina: 'Aperta la linea cucina.' },
      unplug: 'Scollegata la stufetta.',
      plug: 'Ricollegata la stufetta.',
      plugTrip: 'Ricollegata la stufetta: il differenziale scatta.',
      switchOn: 'Acceso l’interruttore del corridoio.',
      switchOff: 'Spento l’interruttore del corridoio.',
      answerOk: 'Risposta giusta: la linea delle prese disperde.',
      answerKo: 'Risposta sbagliata. Si può riprovare.',
      checkOk: 'Verifica: impianto funzionante.',
      checkKo: 'Verifica: qualcosa non va ancora.',
    },
    win: {
      title: 'La luce è tornata',
      text: 'La stufetta del soggiorno aveva l’isolante rovinato: perdeva verso terra circa 300 mA, dieci volte la soglia del differenziale. Scollegata la stufetta, le tre linee restano chiuse e il differenziale armato.',
    },
  },
};
