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
  {
    tag: 'MODULO 2',
    title: 'Civile avanzato',
    levels: [
      'c17-multimetro',
      'c18-rele',
      'c07-presa-comandata',
      'c08-rele-impulsi',
      'c09-luce-scale',
      'c10-campanello',
      'c19-magnetotermico',
      'c20-differenziale',
      'c11-quadro',
      'c23-appartamento-notte',
    ],
    milestone: { level: 'c23-appartamento-notte', kick: 'Appartamento', name: 'Una notte senza luce', text: 'Un appartamento al buio: il differenziale è scattato e da qualche parte c’è una dispersione. Trova la linea con il quadro e il multimetro.', cta: 'Entra nell’appartamento', again: 'Rifai la prova' },
  },
  {
    tag: 'MODULO 3',
    title: 'Industriale',
    levels: [
      'c21-tre-fasi',
      'c12-motore',
      'c22-teleruttore',
      'c13-marcia-arresto',
      'c14-termico',
      'c15-inversione',
      'c16-nastro',
      'c24-officina',
    ],
    milestone: { level: 'c24-officina', kick: 'Officina', name: 'Il nastro da collaudare', text: 'Un nastro trasportatore da collaudare a vista: marcia, arresto, emergenza, finecorsa e termico. Trova perché il nastro non si ferma.', cta: 'Entra nell’officina', again: 'Rifai la prova' },
  },
  {
    tag: 'MODULO 4',
    title: 'Automazione',
    levels: [
      'c28-stella-triangolo',
      'c29-plc',
      { soon: true, title: 'Ladder: l’autoritenuta', blurb: 'Contatti, bobine e la scansione del programma.' },
      { soon: true, title: 'Tempo e conteggio', blurb: 'Temporizzatori e contatori nel programma.' },
      { soon: true, title: 'Il nastro con il PLC', blurb: 'Fotocellula e conteggio; fungo e termico restano cablati.' },
    ],
    milestone: { soon: true, kick: 'Nastro con il PLC', name: 'Un nastro che si comanda da programma', text: 'Fotocellula, conteggio dei pacchi, emergenza e termico che restano cablati.' },
  },
  {
    tag: 'MODULO 6',
    title: 'La fabbrica',
    levels: [
      'c25-fungo',
      'c26-rele-sicurezza',
      'c27-portella',
      { soon: true, title: 'Il sensore 4-20 mA', blurb: 'Perché 4 e non 0: il filo interrotto si riconosce.' },
      { soon: true, title: 'Il variatore', blurb: 'Frequenza e velocità, con le rampe.' },
      { soon: true, title: 'Il serbatoio', blurb: 'Due soglie e l’isteresi.' },
      { soon: true, title: 'Il PID', blurb: 'P, I e D con i cursori e il grafico.' },
      { soon: true, title: 'Il pannello operatore', blurb: 'Stati, allarmi e dati vecchi.' },
      { soon: true, title: 'La linea', blurb: 'Una sequenza: attesa, prelievo, deposito.' },
      { soon: true, title: 'Gestione guasti', blurb: 'Tre guasti da risolvere a tempo.' },
    ],
    milestone: { soon: true, kick: 'Fabbrica', name: 'Una linea da cablare, programmare e mettere in sicurezza', text: 'Il progetto finale: un turno di lavoro con guasti da gestire.' },
  },
];

// Prove dei moduli ancora da costruire, mostrate in fondo alla mappa.
// `levels` elenca i livelli previsti; `project` e' il progetto 3D che chiude il modulo (stessa scheda degli altri moduli).
export const UPCOMING = [
  {
    tag: 'MODULO 5', title: 'Impianti del futuro', note: 'Casa automatica, fotovoltaico e ricarica: un ramo facoltativo del percorso.',
    levels: ['Il sensore e l’attuatore', 'La casa col PLC', 'La corrente continua', 'Il pannello fotovoltaico', 'Il contatore e lo scambio', 'L’accumulo', 'La colonnina'],
    project: { kick: 'Casa del futuro', name: 'Luci, tapparelle, sole e batteria', text: 'La casa che si comanda da sola e produce la sua energia.' },
  },
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
  'Crediti: i modelli 3D del divano (Wayfair) e della pianta (Darmstadt Graphics Group) sono con licenza CC BY 4.0; l’elenco completo è nel repository del progetto.',
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
