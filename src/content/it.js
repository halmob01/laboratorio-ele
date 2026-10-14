// Testi in italiano: tutto cio' che il motore esprime con codici viene reso in frasi qui.
// Per un'altra lingua basta un file gemello con le stesse funzioni.

export const COLOR_NAMES = {
  marrone: 'Marrone',
  nero: 'Nero',
  grigio: 'Grigio',
  blu: 'Blu',
  gv: 'Giallo-verde',
  rosso: 'Rosso',
  bianco: 'Bianco',
};

// Schede "Che cos'e'" dei componenti, per tipo.
export const HELP = {
  morsetto: ['Il morsetto', 'È la vite che stringe il filo. Ogni componente ha i suoi morsetti: per collegare due componenti si porta un filo da un morsetto all’altro.'],
  quadro: ['Il quadro elettrico', 'Distribuisce la corrente alla casa. Da qui escono tre fili: la fase (marrone, nero o grigio), il neutro (blu) e la terra (giallo-verde). La levetta è il magnetotermico: scatta da solo se c’è un cortocircuito. Tocca la levetta per dare o togliere corrente. Se parti dal contatore, i fili in ingresso sono i morsetti in alto e le uscite sono in basso.'],
  cont: ['Il contatore', 'È l’arrivo della corrente dalla rete e misura quanta energia consumi (kWh). Da qui escono la fase (marrone) e il neutro (blu). La terra non arriva dalla rete: arriva dal dispersore, cioè dalla rete di terra dell’edificio.'],
  presa: ['La presa bipasso', 'Ha tre morsetti: L riceve la fase, N il neutro, PE la terra (il foro al centro). La terra protegge dalle scosse se un apparecchio si guasta.'],
  sw: ['L’interruttore', 'Ha due morsetti e un contatto che si apre o si chiude. Aperto, la corrente non passa e la lampada si spegne. Si mette sempre sulla fase. Toccalo per cambiarne la posizione.'],
  dev: ['Il deviatore', 'Ha un morsetto comune (C) e due vie (1 e 2). Il contatto collega C a 1 oppure a 2. Due deviatori insieme comandano la stessa luce da due punti.'],
  inv: ['L’invertitore', 'Ha quattro morsetti: due in alto (1 e 2) e due in basso (3 e 4). In una posizione collega 1 con 3 e 2 con 4, nell’altra li incrocia. Si mette tra due deviatori per avere un terzo comando.'],
  lamp: ['Il portalampada', 'Ha due morsetti. La lampada si accende solo se da un morsetto arriva la fase e dall’altro il neutro: la corrente deve poter attraversarla.'],
};

// Testi della versione "dal contatore" (usati da buildFull del motore).
export const FULL_TEXT = {
  components: {
    K: { short: 'Contatore', title: 'Contatore' },
    Q: { short: 'Quadro', title: 'Quadro elettrico' },
  },
  hint: 'Parti dal contatore: la fase (marrone) va al morsetto FASE in alto sul quadro, il neutro (blu) al NEUTRO, la terra (giallo-verde) alla TERRA. Sono i morsetti in ingresso, quelli in alto.',
  goalSuffix: ' Parti dal contatore: collega anche i tre fili che portano la corrente fino al quadro.',
};

const findComp = (level, id) => level.comps.find(k => k.id === id);

// "Quadro · FASE", "Presa · L": nome del morsetto per i messaggi.
export function termName(level, tid) {
  const [cid, id] = tid.split('.');
  const c = findComp(level, cid);
  return c.short + ' · ' + (c.terms[id].n || c.terms[id].l);
}

// "Il deviatore A", "L’interruttore".
function compName(level, id) {
  const c = findComp(level, id);
  const t = c.short[0].toLowerCase() + c.short.slice(1);
  return (c.type === 'dev' ? 'Il ' : 'L’') + t;
}

const ROLE_OF = { neutro: 'del neutro', terra: 'di terra', fase: 'di fase', bassa: 'a bassa tensione', comando: 'di comando' };
const COLOR_NEEDED = { neutro: 'blu', terra: 'giallo-verde', fase: 'marrone, nero o grigio', bassa: 'di un colore diverso da blu e giallo-verde', comando: 'rosso, marrone, nero o grigio' };

// Motore v2: nome di un componente nei messaggi ("Contattore KM").
const nameOf = (level, id) => { const c = findComp(level, id); return c ? c.short : id; };
// Stati osservati, in parole (verifica a prove funzionali).
const STATE_TEXT = {
  fwd: 'gira in avanti', rev: 'gira all’indietro', hum: 'ronza e non parte', off: 'è fermo o spento',
  on: 'è acceso', burnt: 'è bruciato', weak: 'resta spento (tensione troppo bassa)',
  true: 'è alimentato', false: 'non è alimentato', null: 'non è collegato',
};
const stateText = v => STATE_TEXT[String(v)] || String(v);

// Un elemento del risultato (codice + parametri) in una frase.
export function itemText(item, level) {
  switch (item.code) {
    case 'work.noWires': return 'Non hai ancora collegato nessun filo.';
    case 'work.short': return 'Cortocircuito: la fase arriva al neutro attraverso i fili. Il magnetotermico scatta.';
    case 'work.phaseToEarth': return 'La fase è finita sul filo di terra: scatta il differenziale.';
    case 'work.socketLit': return 'Dai corrente: la lampada si accende.';
    case 'work.noPhaseAtSocket': return 'Alla presa non arriva la fase.';
    case 'work.noNeutralAtSocket': return 'Alla presa non arriva il neutro.';
    case 'work.wrongSocketTerminals': return 'Fase e neutro arrivano alla presa, ma non ai morsetti giusti.';
    case 'work.neverLit': return level.loadName + ' non si accende mai.';
    case 'work.loadNeverLit': return 'La lampada ' + item.n + ' non si accende mai.';
    case 'work.loadsInSeries': return 'Le lampade sono in serie: la corrente le attraversa una dopo l’altra. Ognuna deve avere un filo di fase e uno di neutro, come in parallelo.';
    case 'work.loadsDiffer': return 'Le due lampade non si accendono insieme: devono seguire lo stesso comando.';
    case 'work.noPhaseAtLoad': return 'Alla lampada non arriva mai la fase.';
    case 'work.noNeutralAtLoad': return 'Alla lampada non arriva il neutro.';
    case 'work.controlNoEffect': return compName(level, item.comp) + ' non comanda la lampada: cambiarlo non cambia niente.';
    case 'work.controlPartial': return compName(level, item.comp) + ' comanda la lampada solo con alcune posizioni degli altri comandi.';
    case 'work.allChecksOk': return 'Tutte le prove di funzionamento sono superate (' + item.n + ').';
    case 'work.checkFail': {
      const why = item.cause && item.cause !== 'work.checkFail'
        ? itemText({ code: item.cause, comp: item.comp }, level)
        : (item.comp === 'tripped' ? 'Protezioni scattate: ' + (item.got || 'nessuna') + '.'
          : nameOf(level, item.comp) + ': ' + stateText(item.got) + '; atteso: ' + stateText(item.want) + '.');
      return 'Prova non superata: ' + item.label + '. ' + why;
    }
    case 'work.checkMore': return 'E altre ' + item.n + ' prove non superate.';
    case 'work.secondaryMixed': return 'Il secondario del trasformatore è collegato alla rete: la bassa tensione non è più separata dai 230 V.';
    case 'work.unstable': return 'Un relè si apre e si chiude da solo: la sua bobina è alimentata attraverso il suo stesso contatto NC.';
    case 'work.tripped': return 'È scattata una protezione (' + nameOf(level, item.comp) + ').';
    case 'work.burnt': return 'Componente bruciato (' + nameOf(level, item.comp) + '): ha ricevuto una tensione più alta di quella per cui è fatto.';
    case 'work.loadOnEarth': return 'Un carico (' + nameOf(level, item.comp) + ') è collegato tra la fase e la terra: la corrente torna dal filo di protezione. Il ritorno va sul neutro.';
    case 'work.allControlsOk': return 'Ogni comando cambia la luce, in qualunque posizione si trovino gli altri.';

    case 'color.noWires': return 'Collega prima qualche filo.';
    case 'color.wrong':
      return 'Il filo ' + termName(level, item.a) + ' → ' + termName(level, item.b) + ' è un filo ' + ROLE_OF[item.role] + ': deve essere ' + COLOR_NEEDED[item.role] + '.';
    case 'color.more': return 'E altri ' + item.n + ' fili con il colore sbagliato.';
    case 'color.ok':
      return item.earth ? 'Fase, neutro e terra hanno i colori giusti.' : 'Il blu è solo sul neutro, gli altri fili hanno colori da fase.';

    case 'safe.skipped': return 'Si controlla quando il circuito funziona.';
    case 'safe.sourceSwapped': return 'Fase e neutro sono invertiti tra contatore e quadro.';
    case 'safe.noEarthAtSocket': return 'La presa non ha il filo di terra: se un apparecchio si guasta, la carcassa può andare in tensione.';
    case 'safe.socketPolarity': return 'Fase e neutro sono invertiti sulla presa: L deve andare alla fase.';
    case 'safe.neutralBroken': return 'Hai fatto passare il neutro dai comandi. Spenta la luce, i morsetti della lampada restano in tensione. L’interruttore va sulla fase.';
    case 'safe.noPanelEarth': return 'Il quadro non è collegato alla terra: manca il filo giallo-verde che arriva dal contatore.';
    case 'safe.noEarth': return 'Manca il collegamento a terra (' + nameOf(level, item.comp) + ').';
    case 'safe.notProtected': return 'Un componente (' + nameOf(level, item.comp) + ') non è a valle della protezione (' + nameOf(level, item.by) + '): in caso di guasto nessuno lo stacca.';
    case 'safe.interlock': return 'I due contattori possono chiudersi insieme: manca l’interblocco, e le fasi andrebbero in cortocircuito.';
    case 'safe.stopNotPriority': return 'Tenendo premuto l’arresto, la marcia avvia lo stesso: l’arresto deve prevalere sempre.';
    case 'safe.emergency': return 'Con il pulsante di emergenza premuto qualcosa resta alimentato: l’emergenza deve fermare tutto.';
    case 'safe.restartAfterEmergency': return 'Sbloccando l’emergenza la macchina riparte da sola: deve ripartire solo con un nuovo comando di marcia.';
    case 'safe.notCovered': return 'Un carico (' + nameOf(level, item.comp) + ') non è protetto dal differenziale.';
    case 'safe.neutralEarth': return 'Neutro e terra sono collegati tra loro: il filo di protezione non deve mai portare corrente.';
    case 'safe.ok':
      if (item.variant === 'v2') return 'Le regole di sicurezza del livello sono rispettate.';
      return item.variant === 'socket'
        ? 'Terra collegata, fase e neutro al posto giusto.'
        : item.variant === 'full'
          ? 'Il neutro arriva sempre alla lampada e il quadro è collegato a terra.'
          : 'Il neutro arriva sempre alla lampada: i comandi interrompono solo la fase.';
    default: return item.code;
  }
}

// Risultato di evaluate() reso in frasi: { work|color|safe: { ok, status, msgs }, stars, pass }
export function describeEvaluation(result, level) {
  const sec = s => ({ ok: s.ok, status: s.status, msgs: s.items.map(i => itemText(i, level)) });
  return {
    work: sec(result.work),
    color: sec(result.color),
    safe: sec(result.safe),
    stars: result.stars,
    pass: result.pass,
  };
}

// Messaggio di stato della sessione (o stringa vuota).
export function sessionMessage(msg) {
  if (!msg) return '';
  switch (msg.code) {
    case 'trip':
      return msg.fault === 'corto'
        ? 'Il magnetotermico è scattato: la fase tocca il neutro (cortocircuito).'
        : 'È scattato il differenziale: la fase è finita sul filo di terra.';
    case 'editWhileLive': return 'Per sicurezza il quadro si è spento: non si toccano i fili con la corrente.';
    case 'powerOff': return 'Quadro spento.';
    case 'lampDark': return 'Il quadro è acceso ma la lampada resta spenta.';
    default: return '';
  }
}

// Gradi (identificativi in src/engine/progress.js).
export const RANK_NAMES = {
  apprendista: 'Apprendista',
  aiutante: 'Aiutante',
  operatore: 'Operatore',
  installatore: 'Installatore',
  collaudatore: 'Collaudatore',
};

export const STATUS_NAMES = { nuovo: 'Nuovo', 'in corso': 'In corso', completato: 'Completato', saltato: 'Saltato' };

// Dove si ferma la tensione, in una frase. Si usa quando il quadro e' acceso e la luce no.
export function flowMessage(flow, level) {
  if (!flow || !flow.deadEnds.length) return '';
  const t = flow.deadEnds[0];
  return 'La tensione arriva fino a ' + termName(level, t) + ' e lì si ferma.';
}
