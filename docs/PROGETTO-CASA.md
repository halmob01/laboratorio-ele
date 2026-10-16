# Progetto: la prova 3D della casa intelligente (Modulo 5, "Una sera d'inverno")

**Stato: specifica aggiornata al 16 ottobre 2026, dopo l'unione in `main` della fabbrica (c51) e dei livelli c52-c54.**
Nessun codice della prova scritto. Sostituisce la sezione 3 di `docs/PROGETTO-PROVE-CASA-FABBRICA.md` (proposta del 16
ottobre mattina). Il piano di lavoro per due sessioni in parallelo e' in `docs/PIANO-CASA.md`.

**E' il traguardo del Modulo 5, non un livello in piu'.** Come c46 (Modulo 4) e c51 (Modulo 6): un livello con
`prova: { scene: 'casa' }` che la mappa mostra come la scheda grande del modulo (`milestone` in `src/content/home.js`, oggi
`soon: true`), si apre nella scena 3D con la cornice delle prove e chiude il modulo. Mette insieme quello che l'allievo ha
imparato nei livelli c47-c54; non insegna niente di nuovo, se non che in una casa intelligente contano le regole.

Regole che valgono sempre: `CLAUDE.md`, `docs/PROCEDURA-UNIONE.md`, `docs/SPEC-SCENE-3D.md` (fluidita'), `docs/MILESTONE.md`
(cornice delle prove). Nessuna regola nella scena. La prova non si chiama "finale": il percorso potra' crescere.

## 1. Che cosa c'e' gia' (e prima non c'era)

| Serve alla casa | Dove sta oggi | Note |
|---|---|---|
| Gestione dei carichi: contatore con limite e stacco dopo `tripAfter`, colonnina, pompa di calore, forno non comandabile, fasce orarie | modello `energia` ampliato (`src/engine/v2/process.js`), livello **c53** | il contatore che stacca resta staccato (`blackout` non si riarma) |
| Clima per zone: tre stanze, valvole, finestra, pompa che si guasta a vuoto, giorno e notte | modello `zone`, livello **c54** | la potenza della pompa (`pumpKw`) non entra in `energia`: due modelli separati |
| Allarme tecnico con sonda di allagamento, sirena, tacitazione | livello **c50** (relè `KA`, comando `S2`, `TA`) | cablato, senza PLC e senza processo |
| Videocitofono, luce automatica, casa col PLC | c47, c48, c49 | nessun processo |
| Turno a tempo: ora dal motore, guasti a tempo, primo guasto fisso e gli altri dalla libreria con il seme, partenza a comando, tempo di fermo | `level.scenario` (`src/engine/v2/sim.js`: `scenarioFaults`, `startWhen`, `downtime`) | fatto per la fabbrica; mancano gli **eventi** che non sono guasti |
| Cornice a tempo: barra del periodo, ora, registro degli eventi, verbale di fine periodo, Rifai | `src/prove/hud.js` e `page.js` (fabbrica: `shiftHours`, `shiftHTML`, `turnoReportHTML`) | oggi legata alla fabbrica: `cfg.shiftHours` sceglie la pulsantiera della cella |
| Guasto di programma da correggere nella prova | c46 (`unit.fault.programs`, domanda di diagnosi) | si riusa cosi' com'e' |
| Casa di Via Roma 12 in 3D, notte, stanze, luci, quadro, buio dello scatto | `src/trilocale/scene.js` (opzioni `night`, `bare`, `extend`), `src/scene3d/appartamento.js` | niente terreno, niente esterno, niente garage |
| Pezzi del kit, fili vivi, ombre finte, `stage.finish` | `parts3d.js`, `wiring.js`, `kit.js` | |

## 2. Che cosa manca (in breve)

1. **Motore**: un modello `casa` che unisce `energia` e `zone` (la pompa di calore delle zone e' un carico del contatore);
   gli **eventi** della serata in `level.scenario` (azioni a un'ora fissa che non sono guasti).
2. **Livello c55** "Una sera d'inverno" con la sua unita' (lezione, guasto di programma, diagnosi) e l'arabo.
3. **Cornice della casa**: `casaState`, il pannello della casa al posto della pulsantiera, gli eventi nel registro, il
   verbale della serata. La cornice a tempo della fabbrica va resa generica (scelta del pannello per nome della scena).
4. **Scena** `src/scene3d/casa.js` sopra il trilocale con l'esterno, e i pezzi nuovi in `src/scene3d/parts-casa.js`.
5. **Mappa**: scheda del Modulo 5 con la foto (oggi `soon: true`), misure, unione.

## 3. Il racconto (aggiornato)

1. **Consegna** (scheda, saltabile): "Famiglia Rossi, Via Roma 12. L'impianto e' finito: stasera la casa va da sola.
   Chiudi il generale, guardala lavorare fino alle 23 e consegna."
2. **Arrivo al tramonto**: la casa vista da fuori, il sole basso sui pannelli, la colonnina e la batteria sotto la tettoia.
3. **La serata**, dalle 16:30 alle 23:00 (6,5 ore simulate, 6-8 minuti veri, con "tempo x N"):
   - 16:30 i pannelli calano, la batteria copre i consumi; la pompa di calore scalda soggiorno e camera;
   - 18:30 l'auto si attacca alla colonnina (**evento**);
   - 19:30-20:30 cena: il forno (3,5 kW, non comandabile);
   - 20:15 qualcuno apre la finestra del soggiorno, 20:45 la richiude (**eventi**);
   - 21:30 la sonda di allagamento del bagno (**guasto a tempo**, come la fabbrica): sirena; si ripara asciugando la sonda e
     poi tacitando, entro un tempo massimo;
   - 23:00 fine della serata.
4. **Il guasto della prova** (in `unit.fault.programs`, come c46): **la soglia di distacco e' sopra il limite del contatore.**
   Il collega ha scritto 6500 W, il contatore stacca oltre 6000 W, e il misuratore ha il fondo scala a 6 kW (oltre, il
   segnale si ferma a 20,5 mA, circa 6,4 kW): il PLC non vede mai la potenza superare la soglia e non stacca niente. Alle 19:30, con forno, auto e pompa insieme, dopo 20 secondi
   sopra il limite il contatore stacca: **momento forte**, la casa intera al buio (riuso del buio e del "tac"
   dell'appartamento). Dal pannello si legge: rete al fondo scala sopra la riga del limite, auto e pompa accese, nessun
   distacco. Si risponde alla domanda, si corregge il programma (soglia sotto il limite, con margine), si rigioca la serata.
   - Perche' non "l'ordine di distacco al contrario" (proposta di stamattina): con il modello vero, staccare prima la pompa e
     poi l'auto riporta comunque la casa sotto il limite; le stanze si raffreddano ma il contatore non stacca, e il momento
     forte non c'e'. Resta un buon secondo guasto per una versione futura (comfort perso invece del buio).
5. **Finale**: le 23:00, la casa da fuori con le finestre che si spengono una alla volta, il **verbale di consegna**:
   energia prodotta, prelevata, immessa e costo; auto caricata (kWh); comfort delle due zone (minuti fuori da 19,5-22,5 °C);
   la pompa mai a vuoto; allagamento gestito (ora e ritardo); il guasto e l'intervento; errori di sicurezza.

Fuori dalla prova (restano nei loro livelli): videocitofono, luce automatica, scene Esco/Torno. Nella scena si vedono come
oggetti fermi; nessuna regola li muove.

## 4. Il motore

### 4.1 Modello `casa` (`process.js`)
Un modello che contiene i due esistenti senza copiarne il codice: `step` chiama `MODELS.zone.step` e `MODELS.energia.step`.
- Stato annidato `{ e: stato energia, z: stato zone }`; `expose` restituisce le grandezze dei due in un solo oggetto
  piatto (non ci sono nomi in conflitto salvo `hour`, che e' uno solo: la tiene `energia`, `zone` riceve la stessa).
- La pompa di calore e' una sola: attuatore `pump` (consenso del PLC). Gira se `pump` e' acceso, non e' guasta e il
  contatore non ha staccato; quando gira entra nei carichi del contatore con `hpKw` (lo stesso numero usato per `eHeat`).
- A contatore staccato (`blackout`) la pompa si ferma e le stanze si raffreddano: e' il buio che si sente.
- Parametri: quelli dei due modelli insieme (`dayLen`, `sunrise`, ... `n`, `Text`, `gain`, ...).
- Va scritto in `docs/SPEC-PROCESSI.md` con il perche', e provato con un test (stessi numeri dei due modelli da soli quando
  la pompa e' spenta).
- Il contatore che stacca resta staccato fino a Rifai la serata: niente riarmo nella prova (decisione 4 in fondo).

### 4.2 Eventi della serata (`level.scenario.events`)
`events: [{ id, at, do: 'toggle EV', label }]`: a `at` secondi dal via il motore fa l'azione, una volta sola. Non hanno
`fixed` ne' tempo massimo, non sono guasti e non tolgono stelle. Il rapporto dello scenario li elenca
(`events: [{ id, label, at, firedAt }]`) per il registro e il verbale. Si scrive accanto a `faults` in `scenarioTick` e
`scenarioReport`, con un test; `faults` e `pick` restano come sono (la fabbrica non cambia).

### 4.3 Livello c55 "Una sera d'inverno" (il traguardo) (`src/content/levels-v2.js`)
- `prova: { scene: 'casa' }`, `scenario: { duration: 390, startWhen: { coil: 'QG' }, events, faults: [allagamento],
  expect }` (390 s con `dayLen` 1440 = 6,5 ore). Si comincia chiudendo il generale.
- `process: { model: 'casa', init: { hour: 16.5, T1: 17, T2: 17, soc: 60 }, params: { n: 2, ovenKw: 3.5, limit: 6, ... } }`.
- Cablaggio fisso (`fixed`) da c53 + c54 + c50: PLC con `AI0` potenza della rete, `AI1`/`AI2` le due sonde, `I0` finestra,
  `Q0` colonnina (attraverso il contatto della spina `EV`, che l'evento delle 18:30 chiude), `Q1` pompa, `Q2`/`Q3` valvole;
  allarme cablato di c50 (sonda `S2`, relè `KA`, sirena `B`, tacitazione `TA`).
- Programma di partenza (in `unit.fault.programs.PLC`) = soluzione di c53 + c54 con la soglia sbagliata.
- Prove: contatore mai staccato, auto almeno 2 kWh, zone nel comfort dopo il riscaldamento, pompa mai a vuoto,
  allagamento riparato in tempo, niente pendolamento. Sicurezza come c50 e c53 (`coilReturn`).
- Unita' (`src/content/units-v2.js`): lezione breve "Consegnare una casa intelligente" (le regole contano quanto i fili),
  guasto con la domanda di diagnosi, passi della serata.
- Arabo in un file nuovo (numero prenotato in `PROCEDURA-UNIONE.md`).

## 5. La cornice (`src/prove/`)

- `casaState(snap)` in `state.js`: e' il **contratto con la scena**, campi in `docs/PIANO-CASA.md` (sezione "Contratto").
- La cornice a tempo diventa generica: l'ora parte da `cfg.clock` ([16, 30]) per `cfg.shiftHours` (6,5); il pannello in
  basso si sceglie per nome della scena (fabbrica: pulsantiera della cella come oggi; casa: pannello della casa).
- **Pannello della casa** in HTML (un tablet a muro): potenze (sole, casa, batteria, rete con la riga del limite), carica
  della batteria, auto (attaccata, in carica, kWh), le due zone con temperatura e valvola, la pompa, gli allarmi
  (contatore staccato, allagamento, pompa guasta). Tasti: generale, tacitazione, asciuga sonda, finestra.
- Eventi nel registro (`casaEvents`): l'auto si attacca, il forno si accende, la finestra, l'allagamento, il contatore stacca.
- Verbale della serata (`serataReportHTML`) con i numeri della sezione 3.
- Testi in `PROVE.casa` (`src/content/prove.js`), stile del pannello in `src/ui2d/style.css`.
- La fabbrica non deve cambiare: stessi test, stesse schermate.

## 6. La scena (`src/scene3d/casa.js` e `src/scene3d/parts-casa.js`)

Sopra il trilocale (`createScene` con `night: false`, `bare`, `extend`), come l'appartamento.
- **Esterno**: terreno attorno alla casa, vialetto, cancello; sul lato est una **tettoia** con la colonnina, l'auto e la
  batteria con l'inverter; sul muro nord la **pompa di calore** esterna. Il tetto con i **pannelli** (una InstancedMesh).
- **Pezzi nuovi** in `parts-casa.js`, contratto come la fabbrica `{ group, picks, set(stato) -> true se cambia, skip? }`:
  `solarRoof(M, o)`, `batteryWall(M)` (barra della carica), `charger(M)` con `car(M)` (auto a blocchi accorpata, cavo con la
  luce che pulsa durante la carica: un `loop` che si ferma a carica ferma), `heatPump(M)` (ventola: unica parte in `skip`),
  `thermostat(M, o)` (numero su canvas aggiornato solo al grado intero), `floodProbe(M)` (pozza: piano che appare con la
  scala, mai `visible`), `siren(M)`.
- **Cielo della sera**: sfondo e sole seguono `hour`; si passa dal giorno alla notte con `setNight` gia' presente; le ombre
  del sole si ricalcolano al piu' ogni quarto d'ora simulato.
- **Momento forte**: al `blackout` tutte le luci di casa si spengono insieme con il "tac" (riuso dell'appartamento).
- **Toccabili**: sonda (asciuga), tacitazione, finestra del soggiorno, generale nel quadro (`userData { id, kind }` come le
  altre scene).
- Fluidita': movimento continuo solo della ventola e della luce del cavo; obiettivo circa 100-120 chiamate, 0 a pausa e a
  serata finita. Misure come in `SPEC-SCENE-3D.md`.
- Il trilocale (Modulo 1) e l'appartamento (Modulo 2) non cambiano: se servono opzioni nuove in `scene.js` sono solo
  aggiunte, con le schermate prima e dopo.

## 7. Decisioni (approvate da Gianluca il 16 ottobre: valgono le proposte)

1. **Il guasto**: soglia sopra il limite del contatore (proposta) oppure ordine di distacco al contrario (senza buio).
2. **Fuori dalla prova** videocitofono, luce automatica e scene (proposta) oppure dentro come eventi con un pezzo da toccare.
3. **Numero e nome**: c55 "Una sera d'inverno" (proposta).
4. **Contatore**: non si riarma, si rifa' la serata (proposta) oppure riarmo dal quadro dopo aver corretto il programma.
5. **Auto e pompa di calore costruite nel codice** (proposta, leggere e senza licenze).
