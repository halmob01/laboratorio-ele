# Specifica: processi, segnali analogici, PID, corrente continua (P6)

Scritta da Opus il 16 ottobre 2026. Completa `docs/SPEC-MOTORE-V2.md` e la sezione 4 (E5, E7, E8) di `docs/ARCHITETTURA-PERCORSO.md`. Vale per i livelli 6.4-6.8 del Modulo 6 e per il Modulo 5A; il Modulo 5B e la fabbrica (P7) la riusano senza cambiarla.

Il nucleo descritto qui è di Opus (`src/engine/v2/process.js`, `pid.js`, `dc.js` e le estensioni di `plc.js` e `sim.js`). I livelli, il pannello di regolazione e le lezioni si scrivono sopra, senza toccarlo; un cambiamento al nucleo è piccolo, motivato da un test e segnalato alla revisione.

## 1. Le scelte di fondo

1. **Un solo tempo simulato.** L'architettura ipotizzava due orologi (quello elettrico a 0,5 s e uno accelerato per i processi lenti). Due orologi rompono la coerenza: un temporizzatore del PLC e il livello del serbatoio devono vivere nello stesso tempo, altrimenti "riempi per 10 secondi" non vuol dire niente. Scelta: il tempo simulato è uno solo; il **fattore di accelerazione** (`level.process.speed`, 1 se assente) dice quanti secondi simulati passano per ogni secondo reale, e lo applica chi fa correre l'orologio (la sessione). A schermo si scrive "tempo × 20".
2. **Il passo elettrico resta 0,5 s; i processi integrano con un passo proprio più fine** (`dt` del modello, 0,1 s se non indicato), con più sottopassi dentro ogni passo elettrico. Gli attuatori si leggono una volta per passo elettrico (il circuito non cambia dentro mezzo secondo).
3. **Modelli giusti ma semplici.** Ogni modello è un sistema del primo o secondo ordine con parametri leggibili (portata in percentuale al minuto, costante di tempo in secondi). Nessuna unità che un allievo non capisce: livello in percentuale, temperatura in gradi, velocità in giri al minuto o in percentuale. I valori sono didattici e vanno al collega.
4. **Il processo legge il circuito e scrive i sensori.** Gli attuatori sono componenti che già esistono (motore che gira = pompa accesa, carico acceso = resistenza accesa) o uscite analogiche del PLC. I sensori sono componenti nuovi del banco, comandati dallo stato del modello come oggi il finecorsa è comandato dalla posizione del nastro.
5. **Analogico simbolico.** Il 4-20 mA non è un circuito risolto: se l'anello tra trasmettitore e ingresso analogico è chiuso con la polarità giusta la corrente è quella del modello, altrimenti è 0 mA. Basta per insegnare perché 4 e non 0 (il filo interrotto si riconosce). Il circuito in continua vero (E8) serve solo al Modulo 5A ed è un calcolo a parte.
6. **Le prove guardano il tracciato.** Un processo lento non si giudica da un'istantanea: la verifica registra le grandezze nel tempo e controlla finestre, limiti, numero di commutazioni.

## 2. Il processo nel livello

```js
process: {
  model: 'serbatoio',            // 'serbatoio' | 'forno' | 'nastro' (variatore) | ... (registro in process.js)
  params: { ... },               // parametri del modello (valori predefiniti nel registro)
  init: { h: 20 },               // stato iniziale (si fonde con quello predefinito)
  speed: 20,                     // fattore di accelerazione del tempo (vista e sessione)
  actuators: {                   // da dove il modello legge i suoi comandi, per nome
    pump: { motor: 'M' },        //   motore che gira (fwd o rev) = 1
    heater: { load: 'R' },       //   carico acceso = 1
    valve: { plc: 'PLC.Q1' },    //   uscita digitale del PLC
    power: { analog: 'PLC.AQ0' } //   uscita analogica del PLC, 0-100 %
  },
  trace: ['h', 'T'],             // grandezze registrate per le prove e il grafico
}
```

Il modello dichiara nel registro: lo stato iniziale, i parametri predefiniti, i nomi degli attuatori che usa (con il valore quando non sono collegati), le grandezze che espone e la funzione `step(state, act, params, dt) -> state`, pura. `act` contiene un numero per attuatore, sempre come frazione 0-1: 0 o 1 per i digitali, percentuale / 100 per gli analogici (la conversione la fa `sim.js`, così un analogico all'1 % non si confonde con un digitale acceso).

### Modelli del primo gruppo

| Modello | Stato | Attuatori | Dinamica |
|---|---|---|---|
| `serbatoio` | `h` livello 0-100 % | `pump` (0/1 o %), `valve` scarico (0/1 o %), `demand` consumo fisso (parametro) | dh/dt = (qIn·pump − qOut·valve − demand) / 60, limitato a 0-100. Portate in %/min. |
| `forno` | `T` temperatura (°C), `Tw` temperatura della parete | `heater` (0/1 o %) | due costanti di tempo in serie (resistenza → parete → camera), ambiente `Ta`. Il secondo ordine dà il ritardo che rende interessante il PID. |
| `nastro` | `v` velocità (% della nominale), `f` frequenza comandata (Hz) | `run` (0/1), `ref` riferimento analogico (%) | il variatore porta `f` verso `ref·fmax/100` con la rampa (Hz/s) solo se `run`; `v` segue `f` con una costante di tempo breve. Senza `run` rampa di discesa. |

Le grandezze esposte sono lo stato più quelle derivate (per esempio `full` del serbatoio). Il Modulo 5A aggiunge `energia` (sole, produzione, consumo, batteria, contatore) con la stessa interfaccia: vedi sezione 7.

## 3. Sensori sul banco

Due pezzi nuovi in `parts.js`, entrambi comandati dal modello:

- **`sens`**, sensore digitale (galleggiante di livello, termostato, sensore di velocità). Morsetti come il finecorsa: `1-2` NC, `3-4` NA. Campo `sense: { v: 'h', above: 80 }` oppure `{ v: 'h', below: 20 }`: il contatto è azionato quando la condizione è vera. Si aggiorna a ogni assestamento, come `fc`.
- **`tx`**, trasmettitore 4-20 mA, morsetti `+` e `-`. Campo `sense: { v: 'h', lo: 0, hi: 100 }`: la grandezza tra `lo` e `hi` diventa 4-20 mA (fuori scala si satura a 3,8 e 20,5 mA, come i trasmettitori veri).

L'ingresso analogico del PLC si chiama `AIk+` / `AIk-` (morsetti) e `AIk` (valore). Vale la corrente del trasmettitore se `tx.+` è sulla stessa rete di `PLC.AIk+` e `tx.-` su quella di `PLC.AIk-`, il PLC è alimentato e nessun altro potenziale (fase, neutro) è su quelle reti. Invertito o aperto: 0 mA. Un ingresso analogico senza trasmettitore vale 0 mA. Il PLC fornisce l'alimentazione dell'anello: non si cabla (semplificazione dichiarata nella lezione).

Uscita analogica del PLC: `AQk` (parola, 0-100 %). Nei livelli di regolazione il riferimento arriva al variatore o alla resistenza in modo simbolico (`actuators: { ref: { analog: 'PLC.AQ0' } }`), senza morsetti: il cablaggio dell'analogico in uscita non aggiunge niente di didattico in questa fase.

## 4. PLC: parole, confronti, scala, PID

Si aggiunge al PLC (plc.js) una memoria di **parole** (numeri): `AIk` (ingressi analogici, mA, sola lettura), `AQk` (uscite analogiche, 0-100 %), `MWk` (parole interne).

Contatti nuovi (espressioni):
- `['gt', a, b]`, `['lt', a, b]`, `['ge', a, b]`, `['le', a, b]`: confronto. `a` e `b` sono un indirizzo di parola o un numero. Sono contatti: vero o falso, in serie e in parallelo come gli altri.

Istruzioni nuove (uscite del gradino, eseguite solo se la condizione è vera):
- `{ op: 'move', v, out }`: copia `v` (numero o parola) in `out`.
- `{ op: 'scale', in, out, lo, hi }`: da 4-20 mA a `lo`-`hi`. Sotto 4 mA dà valori sotto `lo` (anche negativi): il programma deve accorgersene. È il punto didattico del 4-20 mA.
- `{ op: 'pid', id, pv, sp, out, kp, ti, td, lo, hi }`: regolatore PID (sezione 5). `pv` e `sp` parole o numeri, `out` parola (0-100). Con la condizione falsa il PID è in manuale: l'uscita resta com'è e l'integrale si allinea (nessun salto quando si riattiva).

Regole di validazione aggiunte: un'uscita analogica scritta da due istruzioni diverse è un errore come la bobina doppia; un PID con `kp` non positivo o tempi negativi non è valido; `ti = 0` vuol dire senza integrale, `td = 0` senza derivativo.

Le parole compaiono nello stato osservato del PLC (`obs.plc[id].words`) e nel tracciato se il livello lo chiede (`trace: ['PLC.AQ0']`).

## 5. PID (pid.js)

Forma ISA, posizionale, con le scelte che ogni regolatore industriale fa e che la lezione nomina:
- `u = Kp · (e + I + D)`, con `e = sp − pv`, `I` integrale di `e/ti`, `D = −td · d(pv)/dt` (**derivativa sulla misura**, non sull'errore: cambiare il setpoint non dà il colpo).
- **Filtro sulla derivativa** (costante `td/8`) per non amplificare i gradini della misura.
- **Anti-windup per blocco dell'integrale**: se l'uscita è satura (0 o 100) e l'errore spinge ancora nella stessa direzione, l'integrale non cresce. Senza questo la regolazione supera molto il setpoint dopo una saturazione lunga, e la lezione lo fa vedere apposta con un interruttore.
- **Passaggio senza scosse** da manuale ad automatico: all'attivazione l'integrale riparte dall'uscita attuale.

`pidStep(state, { pv, sp, kp, ti, td, lo, hi, dt, windup? }) -> { state, u }`, pura. Il PID gira alla scansione del PLC con il `dt` della scansione; con `dt = 0` (scansioni dentro lo stesso passo) non integra e non deriva.

## 6. Tracciato e prove

`sim.trace`: una riga ogni 0,5 s simulati (`{ t, h, T, ... }`), solo per le grandezze dichiarate in `process.trace`, al massimo 4000 righe (si scarta la parte più vecchia a metà). Le prove aggiungono alla sintassi attuale:

```js
{ id: 'regola', label: '…', do: ['press SB1', 'wait 300'],
  expect: { trace: [
    { v: 'T', within: [58, 62], from: 200 },     // dal secondo 200 alla fine resta tra 58 e 62
    { v: 'T', max: 70 },                         // in tutta la prova non supera 70 (sovraelongazione)
    { v: 'h', min: 5 },                          // il serbatoio non si svuota
    { v: 'PLC.Q0', maxSwitches: 12 },            // la pompa non commuta più di 12 volte (isteresi)
    { v: 'h', reaches: 80, by: 120 },            // arriva almeno a 80 entro il secondo 120
  ] } }
```

`from`, `to` e `by` sono secondi dall'inizio della prova. Il motivo del fallimento si riporta come oggi (`work.checkFail`) con `comp: 'trace.T'`, il valore trovato e quello voluto. Il costo: una prova di 300 s simulati è 600 passi elettrici; va misurato e tenuto sotto i 200 ms per prova.

`expect.process` confronta un'istantanea finale (`{ h: [70, 90] }`) per i casi semplici.

## 7. Energia (Modulo 5A) e corrente continua

Il modello `energia` userà la stessa interfaccia: stato `soc` (batteria), ora del giorno `hour`, grandezze derivate `pv` (produzione, kW, curva a campana tra l'alba e il tramonto con un parametro di nuvolosità), `load` (consumi accesi dagli attuatori), `grid` (positivo prelievo, negativo immissione). Si scrive con i livelli 5.4-5.7, non adesso.

**Corrente continua (dc.js).** Un risolutore nodale esatto (analisi nodale modificata) per circuiti piccoli in continua: generatori di tensione con resistenza interna, resistori, interruttori, diodi (modello a soglia con iterazione, al massimo 20 passi). Restituisce tensioni ai nodi e correnti nei rami. Serve a polarità, serie e parallelo di generatori e pannelli, a una lampada in continua. Separato dalla rete in alternata: un livello lo usa solo se lo dichiara (`dc: true`), e non si mescolano mai reti in continua e in alternata nello stesso livello.

`solveDC({ nodes, elements, ground }) -> { v: {nodo: volt}, i: {elemento: ampere}, ok, error? }`. Un circuito impossibile (due generatori ideali in parallelo con tensioni diverse, maglia di soli generatori) torna `ok: false` con il motivo, che la verifica traduce in un messaggio ("cortocircuito tra due generatori").

## 8. Cosa vede la sessione

- `snapshot().obs.process`: stato del modello e grandezze esposte; `snapshot().trace`: le ultime righe, per il grafico.
- Il fattore `speed` del livello si applica a `tick`: `tick(0.5)` diventa `advance(sim, 0.5 · speed)`. `needsClock` è vero per tutto il tempo in cui il livello ha un processo e l'impianto è alimentato.
- Il pannello di regolazione (cursori, valori, grafico) è vista; scrive solo parametri dichiarati dal livello come regolabili (`process.tunable: ['kp', 'ti', 'sp']`) con `session.tune(nome, valore)`.

## 8b. Come è stato realizzato (16 ottobre 2026)

Il nucleo è nel ramo `p6-processi`. Cose decise scrivendo il codice, che la specifica sopra non diceva:

- **Attuatori**: oltre a `motor`, `load`, `plc`, `analog` ci sono `coil` (contattore chiuso) e `value` (valore fisso, es. uno scarico sempre aperto). Arrivano al modello come frazione 0-1.
- **Etichette**: `process.labels: { h: 'Il livello' }` dà il nome della grandezza nel motivo di una prova non superata (`processText` in `it.js`).
- **Pannello di regolazione**: `process.tunable: { sp: { word: 'PLC.MW1', min, max, step, init }, demand: { param: 'demand', min, max } }`. Una voce `word` scrive una parola del PLC a ogni scansione (come un pannello operatore vero), una voce `param` cambia un parametro del modello. Nel programma i guadagni del PID possono essere parole (`kp: 'MW2'`), così il pannello li cambia senza toccare il programma. La sessione tiene i valori per livello (`tune`, `snapshot().tuned`) e la verifica li usa (`ctx.tuned`).
- **Tracciato nelle prove**: la verifica aggiunge da sola al tracciato le grandezze che le prove nominano; `drops` (scende almeno a) affianca `reaches`. Un'uscita del PLC nel tracciato vale 0/1; anche i componenti (`'M'`, `'KM1'`) si possono tracciare.
- **Ingresso analogico**: l'anello non vale se una delle due reti ha un potenziale di rete o se `+` e `-` sono la stessa rete. Il PLC senza alimentazione azzera ingressi e uscite analogiche.
- **PLC instabile**: se le uscite del PLC cambiano a ogni ciclo (programma che si contraddice) il guasto `instabile` ha `cause: 'plc'` e la verifica dà `work.unstablePlc` invece del messaggio sul relè con il NC (trovato nella revisione di P5).
- **Corrente continua**: `solveDC({ elements, ground })` con elementi `V` (con `r` interna), `R`, `S`, `W`, `D`; fili e interruttori chiusi uniscono i nodi prima del calcolo; ogni nodo ha una piccola conduttanza verso massa, così le parti isolate stanno a 0 V. Errori `shortSource`, `sourceLoop`, `diodes`.

Per chi fa la parte visiva (non Opus): il disegno dei pezzi `sens` e `tx` sul banco e i morsetti `AIk+`/`AIk-` del PLC; il pannello di regolazione (cursori dai `tunable`, grafico da `snapshot().trace`, scritta "tempo × speed"); l'editor del ladder per confronti, `move`, `scale`, `pid` (oggi il motore li ha, l'editor no; `validateProgram` va chiamata con `AI` e `AQ` del PLC); l'arabo dei testi nuovi in `it.js` (`work.unstablePlc` e le frasi di `processText`: `check-lang` non li vede perché sono composti).

## 8c. Pannello operatore (6.8)

Scritta da Opus il 16 ottobre 2026, dopo il nucleo. Il pannello operatore (HMI) e' un componente `hmi` senza morsetti: rappresenta lo schermo collegato al PLC con un cavo di rete. Il livello lo configura con `level.hmi`:

```js
hmi: {
  plc: 'PLC',                 // il PLC con cui parla
  stale: 3,                   // secondi senza aggiornamenti dopo i quali un valore e' "vecchio"
  values: [{ id: 'V1', label: 'Livello', v: 'PLC.MW0', unit: '%' }, { id: 'V2', label: 'Pompa', v: 'PLC.Q0', bool: ['ferma', 'in marcia'] }],
  alarms: [{ id: 'A1', bit: 'M0', text: 'Livello troppo alto', prio: 'alta' }, ...],   // prio: 'alta' | 'media' | 'bassa'
}
```

- **Collegamento**: c'e' se il cavo e' collegato (`parts.HMI.on`, azione `toggle`) e il PLC e' alimentato. Con il collegamento i valori e gli allarmi si aggiornano a ogni assestamento; senza, restano fermi all'ultimo valore letto.
- **Dato vecchio**: ogni valore porta l'istante dell'ultima lettura; se e' piu' vecchio di `stale` secondi il pannello lo mostra come vecchio (grigio, con l'eta'). Nei primi secondi dopo la perdita del collegamento il valore sembra ancora buono: e' realistico ed e' il punto della lezione.
- **Allarmi** (modello ISA-18.2 semplificato): stati `off`, `attivo` (condizione vera, non riconosciuto), `riconosciuto` (vera, riconosciuta), `rientrato` (tornata falsa senza riconoscimento). `off -> attivo` quando il bit diventa 1; `attivo -> riconosciuto` con il riconoscimento; `riconosciuto -> off` quando il bit torna 0; `attivo -> rientrato` quando torna 0; `rientrato -> off` con il riconoscimento; `rientrato -> attivo` se ritorna 1. La sirena suona finche' c'e' un allarme non riconosciuto (`attivo` o `rientrato`). L'elenco si ordina per priorita' (alta, media, bassa) e poi per ora di comparsa, il piu' recente in alto.
- **Riconoscimento**: azione `ack` sul componente `hmi` (riconosce tutti gli allarmi visibili). Funziona solo con il collegamento.
- **Guasti simulati** per le prove e per la gestione guasti (6.10): `jam` su un `sens` (galleggiante bloccato: il contatto resta com'e'), `cut` su un `tx` (filo del trasmettitore interrotto: 0 mA).
- **Osservazione**: `obs.hmi = { link, horn, values: [{ id, label, v, text, age, stale }], alarms: [{ id, text, prio, state, since }] }`.
- **Prove**: `expect.hmi = { link, horn, alarms: { A1: 'attivo' }, stale: { V1: true } }`.

## 9. Fuori da questa specifica

Bus di campo, manutenzione predittiva, pannello operatore con allarmi (6.8: si appoggia sul tracciato e sulle parole del PLC, ma la sua interfaccia è da progettare), modelli della linea (P7).

## 10. Da far controllare al collega

- Portate, costanti di tempo e rampe dei modelli (valori didattici).
- Trasmettitore che satura a 3,8 e 20,5 mA (convenzione NAMUR NE43), soglia di filo interrotto a 3,6 mA.
- Forma del PID (ISA, derivativa sulla misura) e nomi dei parametri: Kp, Ti in secondi, Td in secondi.
- Modelli: serbatoio qIn 30 %/min, qOut 20 %/min; forno Ta 20 °C, +180 °C a piena potenza, costanti 60 s (parete) e 40 s (camera); variatore rampa 10 Hz/s, 50 Hz. Con il forno, PID Kp 3, Ti 100 s, Td 15 s arriva a 60 °C in circa 130 s con meno di 3 °C di sovraelongazione.
- Semplificazione: il PLC alimenta l'anello 4-20 mA (trasmettitore a due fili senza alimentatore esterno).
- Un impulso di un solo ciclo (`rise` su una bobina d'uscita) non fa scattare il contattore: è giusto così, ma la lezione deve dirlo (per un comando a impulso si usano Set e Reset).
