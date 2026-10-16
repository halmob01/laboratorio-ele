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
  pb: ['Il pulsante normalmente aperto (NA)', 'Ha due morsetti, 3 e 4. A riposo il contatto è aperto: si chiude solo finché lo tieni premuto, poi torna da solo. Per questo non ricorda nulla: serve a dare un impulso.'],
  pbnc: ['Il pulsante normalmente chiuso (NC)', 'Ha due morsetti, 1 e 2. A riposo il contatto è chiuso: si apre solo finché lo tieni premuto. Si usa per l’arresto, perché un filo staccato ferma la macchina.'],
  fungo: ['Il pulsante di emergenza a fungo', 'Ha un contatto normalmente chiuso (o due, nel modello a due canali: 1-2 e 3-4). Premuto, si apre e resta bloccato: la macchina si ferma e non riparte finché non lo sblocchi.'],
  port: ['La portella (o la barriera)', 'Ha due contatti normalmente chiusi, 1-2 e 3-4, uno per canale. Chiusa, i contatti sono chiusi; aperta, si aprono tutti e due. Toccala per aprirla o chiuderla. La barriera a raggi funziona allo stesso modo: interrotta, apre i contatti.'],
  rs: ['Il relè di sicurezza', 'Si alimenta in A1-A2 e controlla due canali d’ingresso (S12 e S22): se uno cade, le uscite 13-14 e 23-24 si aprono. Per riarmarlo servono i due canali chiusi e un impulso sul morsetto R: il relè si arma quando il pulsante di riarmo viene rilasciato. Il riarmo passa dai contatti NC dei contattori, che controllano se si sono staccati.'],
  rel: ['Il relè', 'Ha una bobina (A1 e A2) e un contatto di scambio: 11 è il comune, 12 è chiuso a riposo, 14 si chiude quando la bobina è alimentata. Con un comando piccolo ne apre uno e ne chiude un altro.'],
  gu: ['Il guasto di isolamento', 'Simula un apparecchio che disperde una piccola corrente verso terra, come se l’isolante avesse ceduto. Il differenziale se ne accorge anche se la lampada o il motore funzionano ancora.'],
  ri: ['Il relè ad impulsi', 'Ha una bobina (A1 e A2) e un contatto (1 e 2). A ogni impulso sulla bobina il contatto cambia stato e lo mantiene: aperto, chiuso, aperto. Serve a comandare una luce da molti punti.'],
  tmr: ['Il relè temporizzato', 'Ha una bobina (A1 e A2) e un contatto (1 e 2). Dopo un impulso il contatto resta chiuso per il tempo impostato, poi si riapre da solo.'],
  km: ['Il contattore', 'Ha una bobina (A1 e A2) e dei contatti. Con la bobina alimentata si chiudono i tre poli di potenza (1-2, 3-4, 5-6) e il contatto ausiliario normalmente aperto (13-14); si apre quello normalmente chiuso (21-22). Il circuito di comando e quello di potenza sono separati.'],
  kt: ['Il temporizzatore all’eccitazione', 'Ha una bobina (A1 e A2) e un contatto di scambio: 15 è il comune, 16 è chiuso a riposo, 18 si chiude dopo il tempo impostato. Se la bobina si diseccita torna subito a riposo. Serve per passare da stella a triangolo.'],
  motor6: ['Il motore a sei morsetti', 'Ha tre avvolgimenti: U1-U2, V1-V2, W1-W2, più il morsetto PE. A stella si uniscono U2, V2, W2 e ogni avvolgimento riceve 230 V. A triangolo U1 va con W2, V1 con U2, W1 con V2 e ogni avvolgimento riceve 400 V.'],
  plc: ['Il PLC', 'È un piccolo computer per le macchine. Si alimenta in A1-A2. Gli ingressi I0, I1, I2 leggono se c’è tensione rispetto al comune IC (1 se ci sono 230 V). Ogni uscita Q è un contatto a relè, per esempio Q0A-Q0B, che si chiude quando il programma lo decide. Il programma si ripete in continuazione: legge gli ingressi, esegue i gradini, scrive le uscite.'],
  sens: ['Il galleggiante', 'È un sensore di livello: un contatto che cambia quando il liquido arriva alla sua altezza. A riposo è chiuso 1-2; quando il livello lo raggiunge si apre 1-2 e si chiude 3-4. Si collega a un ingresso del PLC come un pulsante.'],
  tx: ['Il trasmettitore 4-20 mA', 'Misura una grandezza (livello, temperatura) e la manda al PLC come corrente: 4 mA è il fondo scala basso, 20 mA quello alto. Si collega con + e - all’ingresso analogico del PLC. Se il filo si interrompe la corrente va a 0 mA: sotto i 4 mA il PLC capisce che c’è un guasto.'],
  hmi: ['Il pannello operatore', 'È lo schermo con cui l’operatore guarda la macchina e le dà ordini. È collegato al PLC con un cavo di rete: mostra i valori, gli allarmi (dal più grave) e i pulsanti del processo. Un allarme resta finché non lo riconosci.'],
  batt: ['La batteria', 'È un generatore in corrente continua: ha un polo positivo (+) e uno negativo (-), e la corrente esce dal + e rientra dal -. Due batterie in serie (il + dell’una al - dell’altra) sommano le tensioni: 6 V più 6 V fanno 12 V.'],
  dcl: ['La lampada in continua', 'È una lampada a incandescenza da 12 V: si accende piena solo con la tensione di targa. Non ha un verso: i morsetti A e B si possono scambiare.'],
  led: ['Il LED', 'È una spia che conduce in un verso solo: dall’anodo A al catodo K. Collegato al contrario resta spento. Ha già la sua resistenza, che limita la corrente.'],
  ft: ['Il relè termico', 'Sta in serie al motore e si scalda se il motore assorbe troppa corrente. Dopo un po’ scatta: apre il contatto 95-96 del comando e il motore si ferma. Si riarma a mano con il tasto Reset.'],
  mt: ['L’interruttore magnetotermico', 'Protegge la linea da sovraccarico e cortocircuito: scatta da solo. Levetta su: chiuso. Levetta giù: aperto. Ha un polo per la fase e uno per il neutro.'],
  mt3: ['Il salvamotore magnetotermico trifase', 'Protegge il motore e i circuiti collegati dopo di lui. Ha tre poli, uno per fase. Levetta su: chiuso. Scatta in caso di cortocircuito.'],
  sez: ['Il sezionatore', 'Apre tutte le fasi insieme per lavorare in sicurezza. Non protegge da sovraccarichi: si apre e si chiude a mano.'],
  rcd: ['L’interruttore differenziale', 'Confronta la corrente che va con quella che torna. Se manca una parte, perché una corrente passa attraverso una persona o verso terra, scatta. Il tasto T prova che funzioni.'],
  trafo: ['Il trasformatore', 'Abbassa la tensione. I morsetti 1 e 2 sono il primario, a 230 V. I morsetti 3 e 4 sono il secondario, a bassa tensione e più sicuro: serve per il campanello.'],
  bell: ['Il campanello', 'Funziona a bassa tensione (12 V). Collegato direttamente alla rete a 230 V si brucia: ha bisogno del trasformatore.'],
  spia: ['La spia luminosa', 'Si accende quando è alimentata tra i suoi due morsetti. Segnala, per esempio, che il motore è in marcia.'],
  motor3: ['Il motore trifase', 'Ha tre morsetti per le tre fasi (U, V, W) e il morsetto PE per la terra. Scambiando due fasi cambia il senso di rotazione.'],
  fc: ['Il finecorsa', 'Un contatto che si aziona quando la macchina arriva a fine corsa: il contatto normalmente chiuso (1-2) si apre, quello normalmente aperto (3-4) si chiude.'],
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

const ROLE_OF = { neutro: 'del neutro', terra: 'di terra', fase: 'di fase', bassa: 'a bassa tensione', comando: 'di comando', dcpos: 'del positivo', dcneg: 'del negativo', dc: 'in continua' };
const COLOR_NEEDED = { neutro: 'blu', terra: 'giallo-verde', fase: 'marrone, nero o grigio', bassa: 'di un colore diverso da blu e giallo-verde', comando: 'rosso, marrone, nero o grigio', dcpos: 'rosso', dcneg: 'nero', dc: 'rosso o nero' };

// Motore v2: nome di un componente nei messaggi ("Contattore KM").
const nameOf = (level, id) => { const c = findComp(level, id); return c ? c.short : id; };
// Stati osservati, in parole (verifica a prove funzionali).
const STATE_TEXT = {
  fwd: 'gira in avanti', rev: 'gira all’indietro', hum: 'ronza e non parte', off: 'è fermo o spento',
  on: 'è acceso', burnt: 'è bruciato', weak: 'resta spento (tensione troppo bassa)',
  true: 'è alimentato', false: 'non è alimentato', null: 'non è collegato',
};
const stateText = v => STATE_TEXT[String(v)] || String(v);
// Posizione del pacco sul nastro (prove con `expect.machine`).
// Collegamento del motore a sei morsetti (prove con `expect.modes`).
const MODE_TEXT = { star: 'a stella', delta: 'a triangolo', null: 'né a stella né a triangolo' };
// Prove sul processo (docs/SPEC-PROCESSI.md, sezione 6): il nome della grandezza viene da level.process.labels, se c'e'.
const numIt = x => (typeof x === 'number' ? String(x).replace('.', ',') : String(x));
function processText(level, item) {
  const v = String(item.comp).split('.').slice(1).join('.');
  const name = (level.process && level.process.labels && level.process.labels[v]) || v;
  const at = item.at === undefined || item.at === null || item.at === Infinity ? '' : ' (a ' + numIt(item.at) + ' s)';
  // gli intervalli arrivano come "min~max" (i numeri possono essere negativi)
  const range = String(item.want).split('~').map(x => numIt(Number(x))).join(' e ');
  switch (item.rule) {
    case 'within': return name + ' vale ' + numIt(item.got) + at + ': deve restare tra ' + range + '.';
    case 'min': return name + ' scende a ' + numIt(item.got) + at + ': non deve andare sotto ' + numIt(item.want) + '.';
    case 'max': return name + ' arriva a ' + numIt(item.got) + at + ': non deve superare ' + numIt(item.want) + '.';
    case 'maxSwitches': return name + ' cambia stato ' + item.got + ' volte: al massimo ' + item.want + '.';
    case 'reaches': return name + ' arriva al massimo a ' + numIt(item.got) + (at ? ' entro ' + numIt(item.at) + ' s' : '') + ': doveva raggiungere ' + numIt(item.want) + '.';
    case 'drops': return name + ' scende al minimo a ' + numIt(item.got) + (at ? ' entro ' + numIt(item.at) + ' s' : '') + ': doveva arrivare a ' + numIt(item.want) + '.';
    case 'noData': return name + ': nessun valore registrato.';
    default:
      // grandezze vere o false (l'urto del braccio): si'/no invece di true/false
      if (typeof item.got === 'boolean' || typeof item.want === 'boolean') return name + ': ' + (item.got ? 'sì' : 'no') + '; atteso: ' + (item.want ? 'sì' : 'no') + '.';
      return name + ' vale ' + numIt(item.got) + '; atteso: ' + (String(item.want).includes('~') ? 'tra ' + range : numIt(item.want)) + '.';
  }
}
// Prove sul pannello operatore (docs/SPEC-PROCESSI.md, sezione 8c).
const ALARM_STATE = { off: 'nessun allarme', attivo: 'allarme attivo da riconoscere', riconosciuto: 'allarme riconosciuto', rientrato: 'allarme rientrato da riconoscere' };
function hmiText(level, item) {
  const [, kind, id] = String(item.comp).split('.');
  const cfg = level.hmi || {};
  if (kind === 'link') return item.want ? 'Il pannello operatore non comunica con il PLC.' : 'Il pannello operatore comunica ancora con il PLC.';
  if (kind === 'horn') return item.want ? 'La sirena del pannello non suona.' : 'La sirena del pannello suona ancora.';
  if (kind === 'alarm') {
    const a = (cfg.alarms || []).find(x => x.id === id);
    return 'Allarme “' + (a ? a.text : id) + '”: ' + ALARM_STATE[item.got] + '; atteso: ' + ALARM_STATE[item.want] + '.';
  }
  if (kind === 'stale') {
    const v = (cfg.values || []).find(x => x.id === id);
    return (v ? v.label : id) + ': ' + (item.got ? 'il pannello lo mostra come dato vecchio' : 'il pannello lo mostra come dato aggiornato') + '; atteso: ' + (item.want ? 'dato vecchio' : 'dato aggiornato') + '.';
  }
  return '';
}
const MACHINE_TEXT = { 'machine.atEnd': 'Fine corsa', 'machine.atStart': 'Inizio del nastro' };

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
        : /^(trace|process)\./.test(String(item.comp)) ? processText(level, item)
        : /^hmi\./.test(String(item.comp)) ? hmiText(level, item)
        : (item.comp === 'tripped' ? 'Protezioni scattate: ' + (item.got || 'nessuna') + '.'
          : MACHINE_TEXT[item.comp] ? MACHINE_TEXT[item.comp] + ': ' + (item.got ? 'raggiunto' : 'non raggiunto') + '; atteso: ' + (item.want ? 'raggiunto' : 'non raggiunto') + '.'
          : String(item.comp).endsWith('.mode') ? nameOf(level, item.comp.slice(0, -5)) + ': collegato ' + MODE_TEXT[String(item.got)] + '; atteso: ' + MODE_TEXT[String(item.want)] + '.'
          : nameOf(level, item.comp) + ': ' + stateText(item.got) + '; atteso: ' + stateText(item.want) + '.');
      return 'Prova non superata: ' + item.label + '. ' + why;
    }
    case 'work.faultActive': return 'Il guasto è ancora attivo: scollega l’apparecchio difettoso (tocca il pannello del guasto) prima di verificare.';
    case 'work.measureMissing': return 'Prima di verificare serve ancora una misura con il multimetro: ' + item.label + '.';
    case 'work.checkMore': return 'E altre ' + item.n + ' prove non superate.';
    case 'work.secondaryMixed': return 'Il secondario del trasformatore è collegato alla rete: la bassa tensione non è più separata dai 230 V.';
    case 'work.shortDC': return 'Cortocircuito: il + e il − di una batteria sono collegati senza un carico in mezzo. La corrente diventa enorme e il fusibile della batteria brucia. Togli il filo che chiude il corto.';
    case 'work.scenarioNone': return 'Il turno non è ancora cominciato: dai corrente e da quel momento il tempo corre. Gestisci i guasti che arrivano e alla fine del turno premi Verifica.';
    case 'work.scenarioRunning': return 'Il turno non è finito: mancano ' + item.left + ' secondi. Continua a gestire gli allarmi, poi premi Verifica.';
    case 'work.scenarioOpen': return 'Un guasto è ancora aperto: ' + item.label + '. Trovalo e riparalo prima di consegnare il turno.';
    case 'work.scenarioLate': return 'Riparazione arrivata tardi: ' + item.label + '. Il guasto è durato ' + item.delay + ' secondi, il massimo era ' + item.max + '.';
    case 'work.scenarioOk': return 'Turno consegnato: tutti i ' + item.n + ' guasti riparati in tempo.';
    case 'work.hmiOffline': return 'Il pannello operatore non è collegato al PLC: i valori che mostra sono vecchi e gli allarmi non arrivano. Ricollega il cavo di rete del pannello.';
    case 'work.unstablePlc': return 'Un’uscita del PLC si accende e si spegne a ogni ciclo: il programma si contraddice (per esempio un’uscita comandata dal suo stesso contatto negato).';
    case 'work.unstable': return 'Un relè si apre e si chiude da solo: la sua bobina è alimentata attraverso il suo stesso contatto NC.';
    case 'work.cableBurnt': return 'Il cavo della linea si è surriscaldato: la corrente ha superato la sua portata e l’interruttore non è scattato. La portata dell’interruttore deve essere minore o uguale a quella del cavo.';
    case 'work.tripped': return 'È scattata una protezione (' + nameOf(level, item.comp) + ').';
    case 'work.burnt': return 'Componente bruciato (' + nameOf(level, item.comp) + '): ha ricevuto una tensione più alta di quella per cui è fatto.';
    case 'work.loadOnEarth': return 'Un carico (' + nameOf(level, item.comp) + ') è collegato tra la fase e la terra: la corrente torna dal filo di protezione. Il ritorno va sul neutro.';
    case 'work.allControlsOk': return 'Ogni comando cambia la luce, in qualunque posizione si trovino gli altri.';

    case 'color.noWires': return 'Collega prima qualche filo.';
    case 'color.wrong':
      return 'Il filo ' + termName(level, item.a) + ' → ' + termName(level, item.b) + ' è un filo ' + ROLE_OF[item.role] + ': deve essere ' + COLOR_NEEDED[item.role] + '.';
    case 'color.more': return 'E altri ' + item.n + ' fili con il colore sbagliato.';
    case 'color.ok':
      if (item.dc) return 'Il rosso è sul positivo e il nero sul negativo.';
      return item.earth ? 'Fase, neutro e terra hanno i colori giusti.' : 'Il blu è solo sul neutro, gli altri fili hanno colori da fase.';

    case 'safe.skipped': return 'Si controlla quando il circuito funziona.';
    case 'safe.sourceSwapped': return 'Fase e neutro sono invertiti tra contatore e quadro.';
    case 'safe.noEarthAtSocket': return 'La presa non ha il filo di terra: se un apparecchio si guasta, la carcassa può andare in tensione.';
    case 'safe.socketPolarity': return 'Fase e neutro sono invertiti sulla presa: L deve andare alla fase.';
    case 'safe.neutralBroken': return 'Hai fatto passare il neutro dai comandi. Spenta la luce, i morsetti della lampada restano in tensione. L’interruttore va sulla fase.';
    case 'safe.noPanelEarth': return 'Il quadro non è collegato alla terra: manca il filo giallo-verde che arriva dal contatore.';
    case 'safe.noEarth': return 'Manca il collegamento a terra (' + nameOf(level, item.comp) + ').';
    case 'safe.notProtected': return 'Un componente (' + nameOf(level, item.comp) + ') non è a valle della protezione (' + nameOf(level, item.by) + '): in caso di guasto nessuno lo stacca.';
    case 'safe.coilReturn': return 'Il comando è sul lato del neutro: la bobina (' + nameOf(level, item.comp) + ') ha il capo A2 che non va direttamente al neutro. I comandi stanno sul lato della fase.';
    case 'safe.motorLive': return 'A comandi rilasciati il motore (' + nameOf(level, item.comp) + ') ha una fase sui suoi morsetti: una fase salta il contattore o la protezione.';
    case 'safe.emergencyInProgram': return 'L’emergenza passa solo dal programma del PLC: se il PLC sbaglia, la macchina non si ferma. Il fungo deve interrompere il comando anche con le uscite del PLC accese.';
    case 'safe.outputsTogether': return 'Il programma accende insieme due uscite che non devono mai essere accese insieme (per esempio stella e triangolo): le fasi andrebbero in cortocircuito. Una delle due deve spegnersi prima che l’altra si accenda.';
    case 'safe.interlock': return 'I due contattori possono chiudersi insieme: manca l’interblocco, e le fasi andrebbero in cortocircuito.';
    case 'safe.stopNotPriority': return 'Tenendo premuto l’arresto, la marcia avvia lo stesso: l’arresto deve prevalere sempre.';
    case 'safe.emergency': return 'Con il pulsante di emergenza premuto qualcosa resta alimentato: l’emergenza deve fermare tutto.';
    case 'safe.restartAfterEmergency': return 'Sbloccando l’emergenza la macchina riparte da sola: deve ripartire solo con un nuovo comando di marcia.';
    case 'safe.notCovered': return 'Un carico (' + nameOf(level, item.comp) + ') non è protetto dal differenziale.';
    case 'safe.liveWork': return 'Hai cambiato i fili mentre il sezionamento (' + nameOf(level, item.comp) + ') era chiuso e i morsetti erano in tensione. Premi Annulla tutto, apri il sezionamento e cabla da capo.';
    case 'safe.programRunning': return 'Hai cambiato il programma con la macchina (' + nameOf(level, item.comp) + ') in moto: il PLC riparte da zero e la macchina può fermarsi o ripartire mentre qualcuno ci lavora. Premi Annulla tutto, ferma la macchina e correggi il programma da capo.';
    case 'safe.repairLive': return 'Hai riparato un pezzo dentro la cella con la macchina alimentata (' + nameOf(level, item.comp) + ' chiuso): se il robot si muove mentre hai le mani nella cella, ti fa male. Prima apri la portella, poi ripari, poi richiudi e riarmi.';
    case 'safe.singleChannel': return 'I due canali dipendono dallo stesso contatto: se si incolla o viene scavalcato da un cortocircuito, restano chiusi tutti e due. Ogni canale deve avere il suo percorso.';
    case 'safe.notRedundant': return 'Se ' + nameOf(level, item.comp) + ' resta incollato la macchina non si ferma: ciascun dispositivo deve poterla fermare da solo.';
    case 'safe.contactUnused': return 'Il dispositivo ' + nameOf(level, item.comp) + ' ha un contatto non collegato: un dispositivo a due canali deve usarli tutti e due.';
    case 'safe.noFeedback': return 'Se il contattore resta incollato il relè di sicurezza si riarma lo stesso: il contatto NC 21-22 del contattore deve stare nel circuito di riarmo.';
    case 'safe.stopNotHeld': return 'Con il dispositivo di arresto azionato la macchina resta in marcia: deve fermarsi.';
    case 'safe.restartByItself': return 'Richiudendo o sbloccando il dispositivo la macchina riparte da sola: deve ripartire solo con il riarmo.';
    case 'safe.noRestart': return 'Dopo l’arresto e il riarmo la macchina non riparte: controlla i due canali e il percorso del riarmo.';
    case 'safe.outputsParallel': return 'Le due uscite del relè di sicurezza sono in parallelo: devono stare in serie, così ne basta una per fermare la macchina.';
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
    case 'programLiveNow': return 'Attenzione: stai cambiando il programma con la macchina in moto. Fermala prima: così com’è, perdi la stella di sicurezza.';
    case 'repairLiveNow': return 'Attenzione: stai riparando dentro la cella con il robot alimentato. Apri prima la portella: così com’è, perdi la stella di sicurezza.';
    case 'liveWorkNow': return 'Attenzione: stai toccando morsetti in tensione. Apri il sezionamento prima di cablare: così com’è, perdi la stella di sicurezza.';
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

// Problemi di un programma del PLC (validateProgram) in una frase, per l'editor.
export function progText(e) {
  switch (e.code) {
    case 'prog.tooLong': return 'Il programma è troppo lungo: ' + e.n + ' gradini.';
    case 'prog.rungEmpty': return 'Il gradino ' + e.rung + ' non ha ancora una bobina: aggiungine una.';
    case 'prog.noCondition': return 'Il gradino ' + e.rung + ' non ha contatti: la bobina non si accenderà mai.';
    case 'prog.badAddr': return 'Il gradino ' + e.rung + ' usa un indirizzo non valido (' + e.addr + ').';
    case 'prog.noSuchIo': return 'Il gradino ' + e.rung + ' usa ' + e.addr + ', che questo PLC non ha.';
    case 'prog.writeInput': return 'Il gradino ' + e.rung + ' prova a scrivere su ' + e.addr + ': gli ingressi si possono solo leggere.';
    case 'prog.doubleCoil': return 'La bobina ' + e.addr + ' è usata in due gradini: l’ultima vince e il primo non serve. Una bobina per uscita.';
    case 'prog.badPreset': return 'Il gradino ' + e.rung + ' ha un tempo o un conteggio non valido.';
    default: return 'Il programma ha un errore nel gradino ' + (e.rung || '?') + '.';
  }
}
