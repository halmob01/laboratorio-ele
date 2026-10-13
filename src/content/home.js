// Testi e struttura della homepage, dell'introduzione e delle schede informative.
// Solo dati: la vista (src/ui2d/screens.js) li disegna.

// Moduli della mappa. Un livello e' un id (esiste) oppure un segnaposto { soon: true, ... }.
export const MODULES = [
  {
    tag: 'MODULO 0',
    title: 'Fondamenta',
    levels: [
      'c01-circuito-chiuso',
      'c02-presa',
      'c03-interrotto',
      'c04-parallelo',
      'c05-deviato',
      'c06-invertito',
    ],
  },
];

// Moduli ancora da costruire, mostrati in fondo alla mappa.
export const UPCOMING = [
  { tag: 'MODULO 2', title: 'Civile avanzato', note: 'Relè, presa comandata, quadro' },
  { tag: 'MODULO 3', title: 'Industriale', note: 'Trifase, motore, nastro trasportatore' },
];

// Introduzione animata: una scena per voce. `art` e' la chiave del disegno (src/ui2d/art.js).
export const INTRO = [
  { art: 'lampada', text: ['Una lampada, un interruttore, due fili nel muro. Per farla funzionare serve capire dove passa la corrente.'] },
  { art: 'giro', text: ['La corrente circola in un percorso chiuso: esce dalla rete, attraversa la lampada e torna indietro.'] },
  { art: 'fili', text: ['I due fili si chiamano fase e neutro. Di norma la fase è marrone, nera o grigia; il neutro è blu.'] },
  { art: 'chiuso', text: ['Quando il percorso è completo il circuito è chiuso e la lampada si accende.'] },
  { art: 'aperto', text: ['Se un collegamento manca il circuito è aperto: non passa corrente e la lampada resta spenta.'] },
  { art: 'tensione', text: ['Un filo collegato alla fase è in tensione anche con la lampada spenta. Per questo sugli impianti veri si lavora a corrente tolta.'] },
  { art: 'terra', text: ['Il terzo filo è la terra, giallo-verde. Non serve al funzionamento: serve alla sicurezza, perché porta a terra un eventuale guasto.'] },
  { art: 'banco', text: ['In laboratorio cabli circuiti virtuali con le regole di un impianto vero. Il quadro dice se funziona, se i colori sono giusti e se è sicuro.'] },
];

export const GLOSSARY = [
  ['Fase', 'Il filo che porta la tensione. Colori ammessi: marrone, nero o grigio.'],
  ['Neutro', 'Il filo di ritorno della corrente. È sempre blu.'],
  ['Terra', 'Il filo di protezione, giallo-verde. Non porta corrente in funzionamento normale.'],
  ['Morsetto', 'La vite che stringe il filo su un componente.'],
  ['Circuito chiuso', 'Un percorso completo dalla fase al neutro attraverso il carico: la corrente circola.'],
  ['Circuito aperto', 'Un percorso interrotto, per esempio per un filo mancante o un interruttore aperto: non passa corrente.'],
  ['Tensione', 'Differenza di potenziale tra due punti, in volt. Un filo può essere in tensione anche senza corrente.'],
  ['Corrente', 'Il movimento di cariche nel circuito, in ampere. Passa solo se il circuito è chiuso.'],
  ['Carico', 'Ciò che consuma energia: una lampada, un motore, un elettrodomestico.'],
  ['Magnetotermico', 'L’interruttore automatico del quadro: scatta in caso di sovraccarico o cortocircuito.'],
  ['Cortocircuito', 'Collegamento diretto tra fase e neutro senza carico: la corrente cresce di colpo e il magnetotermico scatta.'],
];

export const LEGEND = [
  { sample: 'plain', title: 'Filo non collegato', text: 'Non arriva a nessuna sorgente.' },
  { sample: 'fase', title: 'In tensione, fase', text: 'Collegato alla fase, ma senza corrente.' },
  { sample: 'neutro', title: 'In tensione, neutro', text: 'Collegato al neutro, ma senza corrente.' },
  { sample: 'corrente', title: 'Percorso da corrente', text: 'Sta su un circuito chiuso con la lampada accesa. I puntini non indicano un verso reale: in alternata la corrente cambia verso di continuo.' },
  { sample: 'stop', title: 'Qui la tensione si ferma', text: 'Il filo arriva fino a questo morsetto e non prosegue.' },
];

export const INFO_PRIVACY = [
  'Il gioco salva i tuoi progressi e il nome che scegli in questo browser, sul tuo dispositivo.',
  'In questa versione non viene inviato nulla a nessun server.',
  'Quando ci sarà la classifica condivisa, verrà inviato solo il nome o soprannome che scrivi e i punti. Usa il nome di battesimo o un soprannome, mai il cognome.',
];

// Voci del piè di pagina (solo su computer). `href` assente: la voce è un pulsante che apre una scheda.
export const FOOTER = [
  { title: 'Gioco', items: [
    { id: 'mappa', label: 'Mappa dei livelli' },
    { id: 'quaderno', label: 'Quaderno' },
    { id: 'classifica', label: 'Classifica', soon: true },
    { id: 'legenda', label: 'Legenda dei simboli' },
    { id: 'glossario', label: 'Glossario' },
  ] },
  { title: 'Aiuto', items: [
    { id: 'segnala', label: 'Segnala un problema', mail: 'bug' },
    { id: 'scrivici', label: 'Scrivici', mail: 'info' },
  ] },
  { title: 'Informazioni', items: [
    { id: 'informativa', label: 'Informativa' },
  ] },
];
