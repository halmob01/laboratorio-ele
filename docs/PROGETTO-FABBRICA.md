# Progetto: "Il turno di notte", la prova della fabbrica (Modulo 6)

**Stato: fasi 1 e 2 fatte** (motore e livello c51; cornice a tempo, vedi sezione 8). Prossima: fase 3, i pezzi del kit.
Fase 2: la prova si gioca dall'inizio alla fine senza scena (consegna del turno, ora del turno dal motore, barra del turno con
pezzi, fermo e guasti, pulsantiera con Riarmo, pannello operatore con Riconosci e "Ricollega il cavo", portella, i sensori della
cella con il LED da sostituire con un tocco, momento forte al primo "Ciclo bloccato", rapporto di fine turno). Il registro dice
i sintomi (gli allarmi del pannello) e nomina il guasto solo quando e' riparato. Un sensore buono "sostituito" non cambia niente
nel motore: la cornice dice che funziona. Gli schemi arabi delle frasi con numeri sono in `ar-41.js` (non in `ar.js`).
Differenze dal progetto emerse nella fase 1: il turno comincia al primo riarmo (`scenario.startWhen: { coil: 'KM' }`), non
all'apertura del livello; la cella e' gia' in tensione (`supply: 'protezioni'`); livello `c51-turno-notte`, arabo in `ar-41.js`
(numeri prenotati in `docs/PROCEDURA-UNIONE.md`); obiettivo 70 pezzi (riferimento: circa 88 riparando in 15 s, 80 in
60 s, 10 senza riparare).

**Progetto iniziale:** Panoramica e decisioni in `docs/PROGETTO-PROVE-CASA-FABBRICA.md`; qui le scelte prese
come proposte (livello nuovo, guasti scelti a ogni partita con un turno fisso per la classe, turno di 6-8 minuti veri, pezzi
costruiti nel codice). Prima di toccare la scena leggere `docs/SPEC-SCENE-3D.md`. Non dipende dai livelli del Modulo 5 ne'
dal lucchetto di 3.7 (se arriva prima, vedi 4.4).

## 1. L'idea in una riga

Il capannone delle prove di reparto, alle 22:00. La cella del robot di c45 e' in servizio, cablata e programmata. Sei il
manutentore del turno di notte: la cella deve produrre fino alle 6:00 e i guasti arrivano uno alla volta. Dall'allarme al
pezzo, riparare in sicurezza, riarmare, ripartire: ogni minuto fermo si vede.

## 2. Come si lega alle altre prove

| | Officina (M3) | Nastro automatico (M4) | Fabbrica (M6) |
|---|---|---|---|
| Ora | 6:40, alba | 13:30, mezzogiorno | 22:00-6:00, notte |
| Tempo | a passi | a passi | **scorre** (scenario a tempo, x4) |
| Il guasto | un filo | una riga del programma | quattro guasti dalla libreria, uno alla volta |
| In basso | pulsantiera | pulsantiera e conteggio | pulsantiera e **pannello operatore** |
| Si ripara | a salvamotore aperto | a nastro fermo | a robot senza potenza (portella aperta) |
| Finale | verbale di collaudo | verbale di collaudo | **rapporto di fine turno** con i numeri |

## 3. Il racconto in atti

1. **Consegna del turno** (scheda, saltabile): "Linea 2, turno di notte. Il collega del pomeriggio: «Il finecorsa del braccio
   ogni tanto non risponde. Il resto va.» Obiettivo: N pezzi entro le 6:00." (N tarato con la partita di riferimento.)
2. **Arrivo** (3 s): da fuori, saracinesca chiusa e capannone buio; si apre, si accende solo la campata della cella.
3. **La lezione** (solo la prima volta): dalla manutenzione di c44 e c45, il perche' prima del come (fermo = costo, sicurezza
   prima della fretta, riarmo e marcia nell'ordine giusto), una previsione, la sintesi.
4. **Avvio**: riarmo delle sicurezze, Marcia. La cella lavora, il conteggio dei pezzi sale, l'orologio corre.
5. **Il turno**: i guasti arrivano a orari del turno (scelti a ogni partita, vedi 4.2). Il primo e' sempre il finecorsa del
   braccio (quello segnalato dal collega): e' il guasto della prova, quello da diagnosticare con "Rispondi".
6. **Momento forte**: il primo fermo. La cella si blocca a meta' ciclo, il pannello dice "Ciclo bloccato", la torretta passa
   al rosso lampeggiante e nella barra del turno il **tempo di fermo** comincia a correre in rosso.
7. **Riparare in sicurezza**: aprire la portella (il robot perde potenza), toccare il pezzo guasto nella scena (o il tasto di
   riparazione sul banco), richiudere, riarmare, Marcia. Fare il contrario (riparare con il robot alimentato) costa la stella
   di sicurezza.
8. **Fine turno**: le 6:00, la sirena del cambio turno, il **rapporto di fine turno**: pezzi prodotti contro l'obiettivo, tempo
   di fermo, per ogni guasto l'ora di arrivo e di riparazione (in ritardo in rosso), errori di sicurezza, stelle, firma.

Metodo a sinistra (passi fissi, come le altre prove): Avvia la cella · Rispondi: perche' si e' fermata? · Ripara in sicurezza
· Gestisci i guasti del turno · Arriva alle 6:00 · Verifica.

## 4. Il motore

Le regole esistenti non cambiano. Tre aggiunte piccole e additive, ognuna con i suoi test.

### 4.1 Il livello
Nuovo livello `prova: { scene: 'fabbrica' }` (numero: il primo libero quando si realizza; i livelli del Modulo 5 in corso in
un'altra sessione potrebbero prendere c51-c52). Componenti di c45, cablaggio di c45 in `fixed` (`W45_SAFE` + `W45_PLC`),
programma di partenza = la soluzione di c45 (`START_45 + TRANS_43 + ALARMS_45`) in `unit.fault.programs`, `hmi` e `process`
(`linea`, `speed: 4`) di c45. `unit.fault.diagnosis` sul primo guasto (finecorsa morto). `scenario.duration` intorno a 1800 s
simulati (7,5 minuti veri a x4).

### 4.2 Guasti scelti a ogni partita
`scenario.pick = { from: [ ...guasti della libreria... ], first: 'f1', n: 4, slots: [300, 700, 1100, 1450] }`: il primo e'
fisso, gli altri estratti dalla libreria e messi negli orari `slots`. Il seme si decide quando il turno comincia
(`restartShift` e il primo avvio), sta nello stato dello scenario e si salva con la partita: la verifica giudica la partita
viva (`ctx.liveSim`), che ha la sua sequenza. `seed` fisso nel livello = turno uguale per tutti (la "prova di classe").
Libreria iniziale: finecorsa morto (`dead ZD`, `dead XL`), fungo premuto, portella aperta, cavo del pannello. Da far vedere
al collega prima di aggiungerne: termico del nastro di ingresso, sensore "pezzo pronto" sporco (`dead PR`).

### 4.3 Tempo di fermo
`scenario.downtime = { enable: 'KM', stall: 15 }`: il tempo del turno in cui il robot e' senza potenza o fermo (stato del
processo che non cambia per piu' di `stall` secondi a ciclo in corso). Si accumula in `scenarioTick`, esce in
`scenarioReport` (`down`), entra nel rapporto di fine turno. Facoltativo nella verifica: `scenario.expect.down: { max }`.

### 4.4 Riparare a robot senza potenza
Regola `safety.repairDead = { parts: ['ZU', 'ZD', 'XP', 'XL', 'PR'], coil: 'KM' }`: riparare uno di quei pezzi con KM chiuso
(robot alimentato) costa la stella di sicurezza, come `safe.liveWork` per i fili. La sessione avvisa subito. Se nel frattempo
arriva il passo "lucchetto" di 3.7, la regola chiede anche il lucchetto sulla portella: si decide allora.

## 5. La scena (`src/scene3d/fabbrica.js`)

### Si riusa (senza modifiche)
- `capannone.js` con un'ora "notte": sole quasi spento e blu, `mood` della notte, una sola fila di plafoniere accesa
  (`setRow` per fila), finestre scure (`windowGlow` con l'intensita' bassa);
- `cabinetPanel` e `plcModule` nell'armadio; `pushStation` (Marcia, Arresto, fungo) piu' il tasto Riarmo; `stackLight`;
  `conveyor` per il nastro di ingresso (pezzi che arrivano al prelievo) e di uscita (dal deposito);
- pezzi come `InstancedMesh` con le **ombre finte** (come i pacchi del nastro automatico): pezzi in arrivo, in pinza, depositati;
- fili vivi (`createLiveWires`) con i percorsi di `officina-wires.js`, estesi ai morsetti nuovi (KS, finecorsa del braccio,
  portella, sensore pezzo pronto);
- la cornice di reparto (`isPlant` in `src/prove/hud.js`), lucchetto con cartellino, sottotitoli, suoni del motore e della sirena.

### Pezzi nuovi del kit
- **portale del robot** (`gantry`): due colonne, la trave, il carrello che scorre in x (prelievo -> deposito), l'asta che scende
  in z, la pinza a due dita. Segue `obs.process` del modello `linea` (`x`, `z`, `grip`). In `skip` solo carrello, asta e dita;
  colonne e trave accorpate. Ombra finta sotto il carrello.
- **recinzione con la portella** (`fence`): pannelli di rete (una texture a griglia con trasparenza a soglia `alphaTest`, cosi'
  si accorpano e non sono "trasparenti"), montanti gialli; la portella ruota sui cardini quando `P` e' aperta; il suo
  interruttore di sicurezza con il LED.
- **finecorsa del braccio** (4: su, giu', prelievo, deposito) con il LED acceso quando il motore li vede azionati: il finecorsa
  morto ha il LED che non si accende piu' quando il braccio ci arriva. E' cosi' che lo si trova guardando.
- **relè di sicurezza KS** nell'armadio (un modulo con i LED dei due canali e del riarmo), accanto a KM.
- **pannello operatore** su un supporto vicino alla cella: solo la cornice e lo schermo che si accende o si spegne (cavo di rete);
  i contenuti (valori, allarmi, riconoscimento) stanno nel cruscotto HTML in basso, non in una texture.

### Viste
insieme (la cella dall'alto), cella (da vicino, la portella in primo piano), quadro, pannello, esterno (arrivo), turno (finale).

### Fluidita' (obiettivi da misurare)
- a riposo (turno non iniziato, in pausa, finito): 0 chiamate;
- turno in corso: il robot si muove di continuo come il nastro in marcia; obiettivo non oltre l'officina (185 su computer,
  81-100 su telefono);
- ombre: il sole spento non proietta; una sola plafoniera con l'ombra, aggiornata un fotogramma su tre (gia' nel palco);
- il motore manda uno stato ogni mezzo secondo: la scena ridisegna solo se cambia (come il nastro automatico), interpola il
  movimento del robot tra uno stato e l'altro alla velocita' del modello.

## 6. La cornice: che cosa si aggiunge

La cornice di reparto c'e'. Per una prova a tempo servono (in comune con la casa del Modulo 5):
- **ora dal motore**: l'orologio in alto e' l'ora del turno (22:00 + tempo dello scenario), non il conto delle azioni;
- **barra del turno** sotto la barra in alto: tempo rimasto, pezzi contro obiettivo, tempo di fermo (rosso quando corre),
  guasti riparati; "tempo x N" e pausa (quelli del pannello del processo);
- **pannello operatore nel cruscotto**: valori, allarmi con priorita', tasto Riconosci, schermo grigio senza rete
  (riuso di `hmiSync` di `src/ui2d/process.js`, spostato in un modulo comune);
- **riparare toccando**: un tocco sul pezzo guasto nella scena manda la sua azione di riparazione alla sessione;
- **eventi nel registro** dagli stati dello scenario (guasto arrivato, riparato, in ritardo);
- **rapporto di fine turno** al posto del verbale di collaudo.

## 7. Testi, lingue, prove

- Testi in `PROVE.fabbrica` (`src/content/prove.js`), arabo in un file nuovo `src/i18n/ar-NN.js` (il primo numero libero).
- Test: partita di riferimento giocata dalla sessione con il seme fisso (obiettivo raggiunto senza ritardi), guasto lasciato
  aperto, riparazione in ritardo, riparazione a robot alimentato (stella di sicurezza persa), seme diverso = sequenza diversa
  ma rigiocabile; eventi della cornice su una partita vera; pagina simulata senza WebGL; ogni filo con il suo percorso.
- Misure e schermate a 390 e 1280 come per il nastro automatico; foto per la scheda della mappa.

## 8. Fasi di lavoro

Ogni fase si chiude da sola: test verdi (`npm test`), traduzioni complete (`node scripts/check-lang.mjs ar`), pagina ricostruita
(`npm run build`), commit e push sul ramo di lavoro, una riga in `docs/STATO-AVANZAMENTO.md` con che cosa e' fatto e da dove si
riparte. Se i token finiscono a meta' fase, la fase si rifa' dall'ultimo commit: niente resta a meta' nel ramo. Si unisce a
`main` solo alla fine (fase 5), o prima se Gianluca lo chiede: dopo le fasi 1-3 il gioco resta com'era per gli allievi.

| Fase | Contenuto | Fatta quando | Per gli allievi |
|---|---|---|---|
| 1 | **Motore e livello**: `scenario.pick` con il seme, `scenario.downtime`, `safety.repairDead`, livello della prova (componenti, cablaggio e programma di c45, scenario, guasto, lezione), testi e arabo | test del motore e partita di riferimento verdi; livello non ancora in mappa | niente di visibile |
| 2 | **Cornice a tempo** (senza 3D): ora dal motore, barra del turno, pannello operatore nel cruscotto, riparare dal cruscotto, eventi nel registro, rapporto di fine turno; `PROVE.fabbrica` | la prova si gioca dall'inizio alla fine nel browser simulato (jsdom) senza scena | niente (livello ancora fuori mappa) |
| 3 | **Kit**: portale del robot, recinzione con portella, finecorsa con LED, modulo KS, pannello operatore; ora "notte" in `capannone.js` | pezzi provati da soli in una scena di prova; officina e nastro automatico invariati (schermate) | niente |
| 4 | **Scena** `fabbrica.js`, riparare toccando nella scena, percorsi dei fili, livello in mappa con la foto | partita intera in Chromium, schermate a 390 e 1280 | la prova c'e' |
| 5 | **Misure e chiusura**: chiamate a riposo e in marcia, avvio, schermate prima/dopo delle altre scene, revisione indipendente, documento aggiornato con le differenze, unione in `main` | numeri nella tabella di `SPEC-SCENE-3D.md` | |

### Fase 3 divisa in due (lavorano due sessioni insieme)

Le due meta' non toccano gli stessi file; la scena che le mette insieme e' la fase 4. Nessuna delle due modifica
`entry.js`, `officina.js`, `automatico.js`, `parts3d.js` ne' i file di contenuto.

| Meta' | Chi | File | Pezzi |
|---|---|---|---|
| 3a | questa sessione, ramo `claude/stoic-hawking-u5cka0` | `src/scene3d/parts-cella.js` (nuovo) | `gantry(M)` portale del robot con carrello, asta e pinza; `cellSensor(M, o)` finecorsa con il LED |
| 3b | un'altra sessione, ramo `fabbrica-fase3b`, istruzioni in `docs/FABBRICA-FASE-3B.md` | `src/scene3d/parts-reparto.js` (nuovo), `src/scene3d/capannone.js` (solo aggiunte) | `fence(M, o)` recinzione con la portella; `ksModule(M)` relè di sicurezza KS; `hmiStand(M)` pannello operatore su supporto; `NOTTE` preset dell'ora di notte per `buildHall` |

Contratto comune (come i pezzi di `parts3d.js`):
- ogni pezzo e' una funzione che riceve i materiali del kit (`kitMaterials()` da `parts3d.js`) e ritorna
  `{ group, picks, set(stato) }`, piu' `skip` (array degli oggetti che si muovono, da passare a `stage.finish`) quando serve;
- costruito con `box`, `cylinder`, `textPlane`, `led` di `parts3d.js`; materiali propri solo per cio' che si accende o cambia
  (luci con l'intensita', mai `visible`); niente texture da file;
- i pezzi toccabili hanno `userData = { id, kind: 'toggle' | 'hold' | 'repair' }` (gli id del livello: `P`, `E`, `SBR`, `ZD`...);
- `set` legge i campi di `fabbricaState` (`src/prove/state.js`): `robot.{x,z,grip,holding}`, `sensors.{ZU,ZD,XP,XL,PR}.act`,
  `door`, `emergency`, `ks`, `contactor`, `powered`, `panelOn`, `hmi.link`; ritorna `true` se ha cambiato qualcosa da
  ridisegnare (`false` se lo stato e' uguale: a riposo 0 chiamate);
- coordinate in metri, il pezzo con l'origine a terra al centro della sua base, il fronte verso +z (come `pushStation`).

Misure della cella (per far combaciare le due meta'): area dentro la recinzione 3,2 m (x) per 2,4 m (z), altezza della
recinzione 2,0 m, portella larga 0,9 m sul lato +z, a 0,6 m dall'angolo -x; portale alto 2,2 m con la trave lungo x tra
prelievo (x = -1,1) e deposito (x = +1,1), corsa dell'asta 0,8 m (z = 0 in alto, 1 in basso del modello `linea`).

Fatta quando: anteprima di ogni pezzo da solo (schermata in uno script di prova fuori dal gioco) e le scene esistenti invariate
(officina e nastro automatico: schermate uguali). Ognuna delle due meta' si chiude con commit e push sul suo ramo; poi
questa sessione unisce `fabbrica-fase3b` nel suo ramo prima della fase 4.

Per riprendere in un'altra sessione: leggere questo documento, l'ultima riga del registro e `git log` del ramo; la fase
successiva comincia dall'unione di `main` nel ramo.

## 9. File che si toccano (per non pestarsi i piedi con la sessione del Modulo 5)

Nuovi: `src/scene3d/fabbrica.js`, documenti, il file arabo nuovo. Modificati: `src/engine/v2/sim.js` (scenario),
`src/engine/v2/checks.js`, `src/engine/session.js` (seme, riparazione toccando), `src/content/levels-v2.js` e `units-v2.js`
(un livello in fondo), `src/content/home.js` (scheda del Modulo 6), `src/content/prove.js`, `src/prove/*`,
`src/scene3d/parts3d.js`, `src/scene3d/capannone.js` (ora della notte), `src/scene3d/officina-wires.js`, `src/ui2d/process.js`
(il pannello operatore in un modulo comune), `src/i18n/ar.js`. Le aggiunte in fondo ai file di contenuto si uniscono senza
conflitti; prima di cominciare conviene unire `main` con i livelli del Modulo 5.
