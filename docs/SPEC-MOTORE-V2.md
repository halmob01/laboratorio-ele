# Specifica del motore v2 (Moduli 2 e 3)

Scritta da Opus il 13 ottobre 2026. Vale per i livelli del Modulo 2 (Civile avanzato) e del Modulo 3 (Industriale). I livelli del Modulo 0 e del trilocale restano sul motore attuale (`circuit.js`, `evaluate.js`, `flow.js`), che non si tocca: i test di equivalenza continuano a proteggerlo.

## 1. Perché serve un motore nuovo

Il motore attuale è statico: per ogni combinazione dei comandi calcola chi è collegato a chi. Per i nuovi livelli non basta:

- **pulsanti** che tornano a riposo da soli;
- **relè e contattori**, il cui stato dipende dal circuito, che a sua volta dipende dai loro contatti (autoritenuta);
- **tempo** (luce temporizzata, relè termico, nastro che avanza);
- **più sorgenti**: trifase L1 L2 L3, secondario di un trasformatore;
- **protezioni** che scattano: magnetotermico, differenziale, relè termico;
- **verifica a sequenza**: "premi Marcia, rilascia, il motore deve restare acceso" non è una combinazione di stati.

## 2. Moduli e file

```
src/engine/v2/
  parts.js    tipi di componente: morsetti, contatti in funzione dello stato, carichi, bobine
  sim.js      simulazione: potenziali, guasti, assestamento, azioni, tempo, osservazioni
  checks.js   verifica di un livello: prove funzionali, colori, sicurezza (stesso formato di evaluate.js)
  index.js    esporta createSim, evaluateV2, observe
```

Un livello usa il motore v2 se ha `engine: 2`. La sessione (`session.js`) sceglie il motore in base a questo campo; il resto della sessione (fili, annulla, progressi, XP) non cambia.

## 3. Sorgenti e potenziali

`level.src` elenca le sorgenti: nome del potenziale e morsetto.

- Civile: `{ F: 'Q.F', N: 'Q.N', PE: 'Q.PE' }` (valore predefinito).
- Industriale: `{ L1: 'Q.L1', L2: 'Q.L2', L3: 'Q.L3', N: 'Q.N', PE: 'Q.PE' }`.

Classi di potenziale: fase (`F`, `L1`, `L2`, `L3`), neutro (`N`), terra (`PE`). Tensioni: fase-neutro 230 V, fase-fase diverse 400 V.

**Trasformatore.** Un componente `trafo` con primario `1 2` e secondario `3 4` (`vout`, per esempio 12). Se il primario ha 230 V, i morsetti del secondario diventano due sorgenti di un sistema separato, con potenziali `<id>:a` e `<id>:b`. Tensione tra loro: `vout`. Se il primario non è alimentato il secondario non ha potenziale.

**Guasti statici** (rilevati dopo l'unione dei morsetti):
- `corto`: due potenziali diversi di fase, o fase e neutro, nella stessa rete; anche `a` e `b` di un secondario insieme;
- `faseterra`: un potenziale di fase nella rete della terra;
- `secondarioMisto`: un potenziale del secondario nella stessa rete di un potenziale della rete (isolamento perso);
- `neutroterra`: neutro e terra uniti a valle di un differenziale (solo se il livello ha un differenziale).

## 4. Componenti (parts.js)

Ogni tipo ha: morsetti, `contacts(comp, st)` che restituisce le coppie di morsetti collegate internamente, ed eventualmente `load` (carico), `coil` (bobina), `actions` (cosa può fare l'allievo).

Lo stato di un componente v2 è un oggetto, per esempio `{ pressed: false }` o `{ on: false, coil: false }`.

| Tipo | Morsetti | Contatti | Stato e azioni |
|---|---|---|---|
| `quadro` (v2) | sorgenti | nessuno | |
| `pb` pulsante NA | `3 4` | `3-4` se premuto | `press`, `release` |
| `pbnc` pulsante NC | `1 2` | `1-2` se non premuto | `press`, `release` |
| `fungo` emergenza | `1 2` | `1-2` se non azionato | `toggle` (aziona e sblocca) |
| `sw`, `dev`, `inv` | come v1 | come v1 | `toggle` |
| `ri` relè ad impulsi | `A1 A2`, `1 2` | `1-2` se `on` | `on` cambia a ogni fronte di salita della bobina |
| `tmr` relè temporizzato luce scale | `A1 A2`, `1 2` | `1-2` se tempo residuo > 0 | fronte di salita della bobina: tempo residuo = `time` s; scende con `advance` |
| `km` contattore | `A1 A2`, `1 2`, `3 4`, `5 6`, `13 14`, `21 22` | potenza `1-2 3-4 5-6` e `13-14` se `on`; `21-22` se non `on` | `on` = bobina alimentata (assestamento) |
| `ft` relè termico | `1 2`, `3 4`, `5 6`, `95 96`, `97 98` | `1-2 3-4 5-6` sempre; `95-96` se non scattato, `97-98` se scattato | `reset`; scatta per motore in fase mancante o sovraccarico (sezione 6) |
| `mt` magnetotermico 1P+N | `1 2`, `N1 N2` | `1-2 N1-N2` se chiuso e non scattato | `toggle` (riarmo compreso); scatta su corto a valle |
| `mt3` magnetotermico o salvamotore trifase | `1 2 3 4 5 6` | `1-2 3-4 5-6` se chiuso | `toggle`; scatta su corto a valle |
| `rcd` differenziale 2P | `1 2`, `N1 N2` | come `mt` | `toggle`, `test`; scatta su fase-terra, squilibrio, neutro-terra a valle |
| `trafo` | `1 2`, `3 4` | nessuno (sorgente derivata) | |
| `lamp` | `A B` | | carico 230 V |
| `spia` spia luminosa | `X1 X2` | | carico 230 V |
| `presa` | `L N PE` | | carico 230 V tra `L` e `N` |
| `bell` campanello | `1 2` | | carico a bassa tensione (`volt`, per esempio 12) |
| `motor3` motore trifase | `U V W PE` | | gira se U V W stanno su tre fasi diverse; senso dato dall'ordine delle fasi |
| `fc` finecorsa | `1 2` (NC), `3 4` (NA) | NC chiuso a riposo; si apre quando la macchina è a fine corsa | azionato dalla macchina, non dall'allievo |

**Carichi e tensione.** Ogni carico ha una tensione nominale (`volt`, 230 se non indicato). La tensione ai suoi capi si ricava dai potenziali delle due reti. Esiti per un carico:
- `on`: tensione uguale alla nominale;
- `off`: tensione zero o reti non alimentate;
- `burnt`: tensione superiore (campanello da 12 V su 230 V, lampada da 230 V su 400 V). Il componente resta rotto fino ad "Annulla tutto" o alla modifica dei suoi fili, e la verifica lo segnala;
- `weak`: tensione inferiore (lampada da 230 V sul secondario a 12 V): non si accende.

Le bobine (`ri`, `tmr`, `km`) sono carichi con tensione nominale 230 V (campo `volt` se diverso).

**Motore.** Per `motor3` si guardano i potenziali di U, V, W:
- tre fasi diverse: `run`, senso `fwd` se l'ordine (U, V, W) è una rotazione ciclica di (L1, L2, L3), altrimenti `rev`;
- due sole fasi (una manca): `hum` (non parte, scalda); il relè termico a monte scatta dopo `tripAfter` secondi;
- altrimenti `off`.
Il motore senza PE collegato alla terra non cambia il funzionamento: lo segnala la sicurezza.

## 5. Assestamento (sim.js)

Dopo ogni azione dell'allievo il motore calcola lo stato stabile:

```
ripeti al massimo 20 volte:
  unisci i morsetti (fili + contatti dei componenti nello stato attuale)
  calcola potenziali e guasti
  se c'è un guasto che una protezione chiusa può interrompere: fai scattare la protezione (sezione 6), ricomincia
  per ogni bobina: alimentata = tensione nominale ai capi
  aggiorna i componenti con bobina:
    km: on = alimentata
    ri: se alimentata e prima non lo era, on = !on
    tmr: se alimentata e prima non lo era, tempo residuo = time
  se nulla è cambiato: stabile, esci
se non si è stabilizzato: guasto 'instabile' (un relè che si apre e si chiude da solo)
```

Le bobine si aggiornano tutte insieme a ogni giro (aggiornamento sincrono). Un circuito come "KM1 con NC di KM2 e KM2 con NC di KM1" alimentati insieme oscillerebbe: si risolve aggiornando le bobine **in ordine di livello** (`level.comps`) una per volta dentro lo stesso giro, il che corrisponde a "il primo che chiude vince". Il guasto `instabile` resta solo per i circuiti che oscillano davvero (un contattore che si autoalimenta con il proprio NC).

**Azioni** (dalla sessione, dalle prove, dalla demo):
- `press(id)`, `release(id)`: pulsanti;
- `toggle(id)`: interruttori, deviatori, invertitori, fungo, magnetotermici, differenziale, sezionatore;
- `reset(id)`: relè termico;
- `test(id)`: tasto di prova del differenziale (scatta se alimentato);
- `advance(s)`: fa passare `s` secondi, a passi di 0,5 s, con assestamento a ogni passo: temporizzati, riscaldamento del termico, macchina che avanza;
- `setWires(wires)`: nuovo cablaggio. I componenti tornano allo stato iniziale solo se lo chiede la sessione (Annulla tutto, cambio livello).

**Osservazione** (`observe(sim)`), il contratto con le viste e le prove:
```
{
  t: secondi,
  faults: [{ code, ... }],          guasti statici presenti
  tripped: ['Q1', ...],             protezioni scattate
  loads: { L1: 'on' | 'off' | 'burnt' | 'weak', ... },
  motors: { M: 'off' | 'fwd' | 'rev' | 'hum' },
  coils: { KM1: true, ... },        bobine alimentate
  parts: { <id>: stato },           stato interno di ogni componente
  machine: { pos, atStart, atEnd }  se il livello ha una macchina
  potential(term) → 'L1' | 'N' | 'PE' | 'T1:a' | null
}
```

## 6. Protezioni

- **Magnetotermico** (`mt`, `mt3`, generale del quadro se il livello lo prevede): se c'è un `corto`, si cercano le protezioni chiuse la cui apertura, da sola, elimina il guasto. Scatta quella con `rank` più alto nel livello (le protezioni di linea hanno rank 2, la generale 1). Se nessuna protezione può interrompere il guasto, scatta il quadro (come oggi: `trip` della sessione).
- **Differenziale** (`rcd`) scatta, se è chiuso, quando:
  - c'è `faseterra` e aprirlo elimina il guasto;
  - c'è `neutroterra` a valle;
  - un carico acceso è attraversato da corrente in un solo polo del differenziale (fase presa a valle e neutro a monte, o il contrario). Si prova aprendo un polo alla volta: se aprire solo il polo di fase spegne il carico ma aprire solo il polo di neutro no, il carico è squilibrato.
- **Relè termico** (`ft`): accumula calore quando un motore a valle è in `hum` o il livello simula un sovraccarico (`overload: true` in una prova); scatta oltre `tripAfter` secondi (predefinito 3); `reset` lo riarma solo dopo che il calore è sceso (1 s di riposo).

Una protezione scattata resta aperta finché l'allievo non la riarma con `toggle`.

## 7. Macchina (nastro trasportatore)

`level.machine = { motor: 'M', length: 10, speed: 1, endFwd: 'FC2', endRev: 'FC1' }`. Con `advance`, la posizione aumenta se il motore è `fwd`, diminuisce se `rev`, entro `0..length`. A posizione `length` il finecorsa `endFwd` è azionato (NC aperto, NA chiuso); a 0 lo è `endRev`. Posizione iniziale: `level.machine.start` (predefinito 0).

## 8. Verifica (checks.js)

Stesso risultato di `evaluate.js`: `{ work, color, safe, stars, pass }`, codici e parametri, testi in `it.js`.

### Funziona: prove funzionali

Il livello dichiara le prove in `level.checks`:

```js
checks: [
  { id: 'marcia', label: 'Premi Marcia e rilascia: il motore parte e resta acceso',
    do: ['press SB1', 'release SB1'], expect: { motors: { M: 'fwd' }, loads: { H1: 'on' } } },
  { id: 'arresto', label: 'Premi Arresto: il motore si ferma',
    do: ['press SB1', 'release SB1', 'press SB0', 'release SB0'], expect: { motors: { M: 'off' } } },
]
```

- Ogni prova parte da una simulazione nuova sul cablaggio dell'allievo, con le protezioni chiuse e i comandi a riposo (o nello stato `level.initial`).
- `do` è un elenco di azioni (`press X`, `release X`, `toggle X`, `reset X`, `test X`, `wait 5`). `expect` si controlla alla fine; una prova può avere più tappe con `steps: [{ do, expect }, ...]`.
- Se durante una prova compare un guasto statico o scatta una protezione non prevista, la prova fallisce con il codice del guasto.
- Risultato: `work.ok` se tutte le prove passano. Per ogni prova fallita: `{ code: 'work.checkFail', check: id, label, want, got }` (al massimo tre, poi `work.checkMore`). Guasti: `work.short`, `work.phaseToEarth`, `work.burnt` `{ comp }`, `work.unstable`.

Le prove sono anche il "collaudo" che l'allievo vede: la vista le elenca con esito dopo Verifica.

### Colori

Ruolo di ogni filo dalla rete a riposo, con le protezioni chiuse e i contatti in stato iniziale, dove i contatti dei componenti di potenza (`mt`, `mt3`, `rcd`, `km`, `ft`, `sez`) sono considerati chiusi:
- rete con una fase: `fase`; con il neutro: `neutro`; con la terra: `terra`;
- rete del secondario del trasformatore: `bassa` (colori ammessi: tutti tranne giallo-verde e blu, scelta da far confermare al collega);
- rete senza potenziale nemmeno così (circuito di comando a valle di pulsanti e contatti NA, lato dei carichi): `comando`. Nei livelli con `controlColor: 'rosso'` sono ammessi il rosso e i colori di fase; altrimenti i colori di fase.

Il colore `rosso` si aggiunge alla palette solo nei livelli che lo dichiarano (`palette` del livello). Da far controllare al collega: rosso per i circuiti di comando in alternata (CEI EN 60204-1).

### Sicurezza

Si valuta solo se il circuito funziona. Regole dichiarate dal livello in `level.safety`:
- `phaseSwitched: ['S1', ...]`: i comandi devono interrompere la fase (il neutro dei carichi è sempre sul neutro: come `alwaysN` di oggi);
- `earth: [['M.PE', 'Q.PE'], ...]`: morsetti che devono essere sulla terra;
- `never: [['KM1', 'KM2']]`: due bobine mai alimentate insieme, in nessuna tappa delle prove e nemmeno premendo insieme i due pulsanti (prova aggiuntiva automatica: `press` di tutti i pulsanti NA dei due contattori);
- `stopWins: 'SB0'`: premendo l'arresto insieme alla marcia il motore non parte;
- `emergency: 'ES'`: con il fungo azionato nessuna bobina è alimentata e nessun motore gira, qualunque pulsante si prema; sbloccandolo il motore non riparte da solo;
- `rcdCovers: ['L1', 'P1']`: i carichi indicati passano dal differenziale.

Codici: `safe.neutralBroken`, `safe.noEarth` `{ comp }`, `safe.interlock`, `safe.stopNotPriority`, `safe.emergency`, `safe.restartAfterEmergency`, `safe.notCovered` `{ comp }`.

## 9. Corrente visibile

`flowV2(level, wires, sim)`: per ogni filo il potenziale della sua rete (per la vista: qualunque fase ha l'aspetto della fase; neutro; terra; bassa tensione con un colore proprio) e se è percorso da corrente: sta su un percorso semplice tra due potenziali diversi che attraversa almeno un carico acceso o una bobina alimentata o un motore in marcia. Stesso tetto alla ricerca di `flow.js`. I punti in cui la tensione si ferma come in `flow.js`.

## 10. Sessione e vista

- La sessione tiene una simulazione per il livello v2; `toggleControl` diventa l'azione adatta al tipo; nuovi `press(id)`, `release(id)`, `reset(id)`, `test(id)`.
- Un orologio della vista chiama `advance(0.5)` ogni mezzo secondo solo quando serve (temporizzato attivo, motore in marcia con una macchina, termico che scalda, protezione scattata no).
- Pulsanti a impulso: premuto finché si tiene il dito o il tasto (pointerdown/pointerup, keydown/keyup su Spazio e Invio); un tocco breve vale come premi e rilascia.
- `snapshot()` aggiunge `obs` (l'osservazione) e, dopo Verifica, l'elenco delle prove con esito.
- Il quadro del livello v2 non ha la levetta generale della sessione v1: l'alimentazione si dà con la protezione generale del livello (`mt`, `mt3` o `sez`); se il livello non ne ha, resta la levetta come oggi.

## 11. Test richiesti (prima dei livelli)

- Pulsante NA e NC; relè ad impulsi da tre pulsanti in parallelo (accende, spegne, riaccende).
- Luce scale: accesa per `time` secondi, ripremere riparte da capo.
- Trasformatore: campanello a 12 V suona; campanello sulla rete a 230 V si brucia; lampada da 230 V sul secondario non si accende.
- Autoritenuta: marcia, rilascio, resta acceso; arresto spegne; arresto e marcia insieme non parte.
- Senza autoritenuta: si spegne al rilascio (la prova "resta acceso" fallisce).
- Interblocco: con NC incrociati, i due contattori non sono mai alimentati insieme; senza interblocco, premendo insieme le due marce si ha il corto tra fasi sui contatti di potenza e scatta la protezione.
- Motore: senso dato dall'ordine delle fasi; scambiare due fasi inverte; fase mancante: `hum` e termico che scatta dopo `tripAfter`.
- Differenziale: fase a terra lo fa scattare; neutro preso a monte lo fa scattare quando il carico si accende; tasto di prova.
- Magnetotermico di linea scatta prima del generale; con corto a monte di tutti scatta il quadro.
- Nastro: il finecorsa ferma il motore a fine corsa.
- Instabilità: contattore alimentato attraverso il proprio NC dà `instabile`, non un ciclo infinito.
- I livelli v1 non cambiano: tutti i test esistenti restano verdi.
