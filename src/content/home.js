// Testi e struttura della homepage, dell'introduzione e delle schede informative.
// Solo dati: la vista (src/ui2d/screens.js) li disegna.

// Moduli della mappa. Un livello e' un id (esiste) oppure un segnaposto { soon: true, ... }.
export const MODULES = [
  {
    tag: 'MODULO 0',
    title: 'Fondamenta',
    leadsTo: 'trilocale',          // il binario finisce al capolinea del trilocale (Modulo 1)
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
    milestone: { level: 'c23-appartamento-notte', kick: 'Appartamento', name: 'Una notte senza luce', text: 'Un appartamento al buio: il differenziale è scattato e da qualche parte c’è una dispersione. Trova la linea con il quadro e il multimetro.', src: 'assets/milestone/appartamento.jpg', alt: 'L’appartamento di notte visto dall’alto: la lampada del corridoio e la stufetta in soggiorno sono le uniche luci', tools: ['Quadro', 'Differenziale', 'Magnetotermici', 'Multimetro'], cta: 'Entra nell’appartamento', again: 'Rifai la prova' },
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
      'c52-lavori-sicurezza',
      'c24-officina',
    ],
    milestone: { level: 'c24-officina', kick: 'Officina', name: 'Il nastro da collaudare', text: 'Un nastro trasportatore da collaudare a vista: marcia, arresto, emergenza, finecorsa e termico. Trova perché il nastro non si ferma.', src: 'assets/milestone/officina.jpg', alt: 'L’officina con il nastro trasportatore, la pulsantiera, il quadro e il motore', tools: ['Pulsantiera', 'Salvamotore', 'Teleruttore', 'Termico', 'Finecorsa', 'Fungo'], cta: 'Entra nell’officina', again: 'Rifai la prova' },
  },
  {
    tag: 'MODULO 4',
    title: 'Automazione',
    levels: [
      'c28-stella-triangolo',
      'c29-plc',
      'c30-ladder',
      'c31-tempo',
      'c32-nastro-plc',
      'c46-nastro-automatico',
    ],
    milestone: { level: 'c46-nastro-automatico', kick: 'Nastro automatico', name: 'Il cambio formato', text: 'Il nastro con il PLC passa ai lotti da 4 pacchi: collauda il programma nuovo e trova perché dopo il primo lotto non riparte. Il programma si cambia a nastro fermo.', src: 'assets/milestone/automatico.jpg', alt: 'Il capannone a mezzogiorno: il nastro con i pacchi, la fotocellula, il bancale e l’armadio con il PLC', tools: ['Pulsantiera', 'PLC', 'Fotocellula', 'Contatore', 'Editor ladder', 'Fungo'], cta: 'Entra nel capannone', again: 'Rifai la prova' },
  },
  {
    tag: 'MODULO 5',
    title: 'La casa intelligente',
    levels: [
      'c47-videocitofono',
      'c48-luce-automatica',
      'c49-casa-plc',
      'c50-allarme',
      'c38-continua',
      'c39-fotovoltaico',
      'c40-contatore',
      'c41-accumulo',
      'c42-colonnina',
      'c53-carichi',
      'c54-clima-zone',
      'c55-sera-inverno',
    ],
    milestone: { level: 'c55-sera-inverno', kick: 'Casa intelligente', name: 'Una sera d’inverno', text: 'La casa di Via Roma 12 è finita e stasera va da sola: chiudi il generale e guardala lavorare fino alle 23, con il sole che cala, l’auto in carica, la cena e la pompa di calore. Se qualcosa va storto, trova la regola sbagliata nel programma.', src: 'assets/milestone/casa.jpg', alt: 'La casa al tramonto vista dalla strada: i pannelli sul tetto, la tettoia con l’auto e la colonnina, le finestre accese', tools: ['Generale', 'PLC', 'Pannello della casa', 'Colonnina', 'Pompa di calore', 'Sonda di allagamento'], cta: 'Entra in casa', again: 'Rifai la serata' },
  },
  {
    tag: 'MODULO 6',
    title: 'La fabbrica',
    levels: [
      'c25-fungo',
      'c26-rele-sicurezza',
      'c27-portella',
      'c33-sensore',
      'c34-variatore',
      'c35-serbatoio',
      'c36-pid',
      'c37-pannello',
      'c43-linea',
      'c44-guasti',
      'c45-fabbrica',
      'c51-turno-notte',
    ],
    milestone: { level: 'c51-turno-notte', kick: 'Fabbrica', name: 'Il turno di notte', text: 'Sei il manutentore della cella del robot dalle 22:00 alle 6:00: tienila in produzione e, quando si ferma, trova il guasto dal pannello e riparalo con il robot senza potenza.', src: 'assets/milestone/fabbrica.jpg', alt: 'Il capannone di notte: la cella del robot nella recinzione gialla, la pulsantiera, il pannello operatore e l’armadio con il PLC', tools: ['Pulsantiera', 'Pannello operatore', 'Relè di sicurezza', 'Portella', 'Finecorsa', 'Riarmo'], cta: 'Inizia il turno', again: 'Rifai il turno' },
  },
];

// Scheda del trilocale (Modulo 1): non e' una prova unica ma tre circuiti, ognuno con la sua stanza.
export const TRILOCALE = {
  kick: 'Modulo 1 · Il trilocale', name: 'Una casa da cablare',
  text: 'Una casa vista dall’alto con tre punti luce da cablare: bagno, camera e corridoio. Quando l’impianto funziona, la luce si accende nella stanza.',
  src: 'assets/milestone/trilocale.jpg', alt: 'Il trilocale visto dall’alto: cucina, bagno e camera',
  rooms: [['t01-bagno', 'Bagno'], ['t02-camera', 'Camera'], ['t03-corridoio', 'Corridoio']],
  cta: 'Entra nel trilocale', again: 'Continua nel trilocale',
};

// Prove dei moduli ancora da costruire, mostrate in fondo alla mappa.
// `levels` elenca i livelli previsti; `project` e' il progetto 3D che chiude il modulo (stessa scheda degli altri moduli).
export const UPCOMING = [];

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
