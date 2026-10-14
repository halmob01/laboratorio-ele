# Architettura del percorso: dal quadro di casa alla fabbrica

Stato: proposta, 14 ottobre 2026, rivista dopo una revisione indipendente. Prende come direzione il syllabus Moduli 2-6 (allegato da Matteo) e lo ricostruisce su quello che il gioco ha già, senza rifare quello che funziona. Dove il syllabus e questo documento divergono, la ragione è scritta accanto.

## 1. Da dove si parte

Il gioco oggi ha tre pezzi solidi, e l'architettura si appoggia su questi.

**Il motore v2** (`src/engine/v2`). Un impianto è una rete di morsetti uniti da fili e da contatti; ogni rete prende un potenziale simbolico (F, L1, L2, L3, N, PE, secondari dei trasformatori). La tensione tra due punti si ricava dai potenziali (230, 400, 12 V), i carichi si accendono se la tensione è quella giusta, le protezioni scattano sui guasti, bobine e temporizzatori hanno stato e tempo. Non c'è un risolutore numerico: per un gioco didattico è un pregio (veloce, prevedibile, spiegabile), e quasi tutto il percorso si fa restando su questo modello. Due limiti contano per i moduli nuovi: il potenziale non attraversa i carichi (una rete collegata solo tramite una lampada risulta senza potenziale), e il guasto a terra senza differenziale fa scattare il magnetotermico (semplificazione da sistema TN).

**Il linguaggio delle prove** (`checks.js`). Un livello dichiara cosa deve succedere (`do: ['press SB1', 'wait 5']`, `expect: { motors: { M: 'fwd' } }`) e quali regole di sicurezza valgono (`earth`, `phaseSwitched`, `never`, `emergency`, `rcdCovers`, `protectedBy`). Le stesse prove sono il collaudo che l'allievo vede. È il cuore riusabile: ogni strumento nuovo deve parlare questa lingua.

**L'unità didattica** (`units*.js`). Lezione con spiegazione, pezzi, demo, previsione e sintesi; esercizio con supporto guidato, a passi o a obiettivo; sfida guasto con diagnosi; quaderno, glossario, legenda, "Già lo so", arabo. È la forma giusta anche per i moduli nuovi.

Livelli esistenti oltre il Modulo 1: c07 presa comandata, c08 relè ad impulsi, c09 luce scale, c10 campanello, c11 quadro di casa, c12 motore trifase, c13 marcia e arresto, c14 relè termico, c15 inversione con interblocco, c16 nastro con finecorsa e fungo.

## 2. L'idea architetturale

Un solo impianto simulato, tre modi di intervenire, due strumenti che attraversano il percorso.

| Modo | Cosa fa l'allievo | Stato |
|---|---|---|
| **Banco** | cabla | esiste |
| **Programma** | scrive il ladder di un PLC che sta nell'impianto | nuovo |
| **Regolazione** | muove cursori e legge grafici di un processo | nuovo |

| Strumento | A cosa serve | Stato |
|---|---|---|
| **Multimetro** | misura tensione e continuità tra due morsetti | nuovo |
| **Schema** | legge (più avanti disegna) lo schema elettrico del livello | nuovo, fase tarda |

Il PLC non è un mondo a parte: è un componente del banco con ingressi e uscite a relè. Il programma si esegue a ogni passo della simulazione, con una scansione per passo (sezione 4, E5). Un livello "banco + programma" è quindi un normale livello v2 con alcuni fili già posati e un programma da scrivere, e le prove restano le stesse (`press START`, `expect motors`).

Il simulatore non è un altro gioco: è una vista su un modello di processo (serbatoio, forno, motore con variatore, casa con fotovoltaico) che gira con l'orologio della sessione. Le prove si scrivono sul tracciato delle grandezze nel tempo.

**Un limite voluto:** l'arresto di emergenza e il relè termico non passano mai solo dal programma. Agiscono sul cablaggio, e il PLC li legge solo come segnalazione (CEI EN 60204-1, EN ISO 13850). Una regola di sicurezza lo verifica (E5).

Conseguenza pratica: lezione, previsione, guasto, sintesi, stelle, quaderno, arabo, salvataggio del lavoro valgono per tutti i tipi di livello senza duplicazioni.

## 3. Il percorso, versione rivista

### Scelte didattiche di fondo

1. **Le macchine crescono con l'allievo.** Il nastro di c16 non resta un esercizio chiuso: in M6 riceve fungo a due canali e portella, poi passa al PLC e entra nella linea e nella fabbrica finale. L'appartamento del Modulo 1 riceve in M2 il quadro vero. L'allievo riconosce l'impianto e vede cosa cambia.
2. **Misurare prima di indovinare.** Il multimetro è il primo livello di M2, così tutte le sfide guasto successive si risolvono misurando. Da M3 vale la procedura di lavoro in sicurezza: si apre il sezionamento, si verifica l'assenza di tensione, poi si cabla. Modificare i fili con la potenza alimentata costa la stella di sicurezza.
3. **Cablato e programmato a confronto.** Il primo livello PLC rifà marcia e arresto di c13, già noto: stessa macchina, prima con i fili e poi con il programma.
4. **La bassa tensione prepara il PLC.** Il campanello (c10) introduce il circuito a 12 V separato dalla rete, la stessa idea degli ingressi a 24 V del PLC. Per questo è nel percorso minimo.
5. **La sicurezza prima della logica programmata.** I livelli di sicurezza di M6 (fungo a due canali, relè di sicurezza, portella) lavorano sul nastro cablato di c16 e chiedono solo M3 e l'interblocco, come nel syllabus. Si possono fare anche prima del PLC.
6. **Un concetto nuovo per livello, poi un finale che li mette insieme.** Vale come oggi. Ogni modulo chiude con un livello a obiettivo e con una prova 3D.

### Ordine e identificativi

Gli identificativi esistenti (c07-c16) restano: i progressi degli allievi sono salvati con quelli. I livelli nuovi continuano con c17, c18, ... Oggi il pulsante "Livello successivo" e "Continua" seguono l'ordine dell'elenco `levels`, non quello della mappa: in P1 si ricavano entrambi da `MODULES` di `home.js`, che diventa l'unica fonte dell'ordine.

### Modulo 2, Civile avanzato

| # | Livello | Si impara | Stato | Minimo |
|---|---|---|---|---|
| 2.1 | Il multimetro (c17) | tensione e continuità su un punto luce già noto; verificare l'assenza di tensione | nuovo | sì |
| 2.2 | Il relè (c18) | bobina e contatto di scambio 11/12/14; comando e carico separati | nuovo | sì |
| 2.3 | Presa comandata (c07) | la fase si comanda, neutro e terra no | esiste; guasto da cambiare: interruttore sul neutro | sì |
| 2.4 | Relè ad impulsi (c08) | più punti di comando con pulsanti | esiste | no |
| 2.5 | Luce scale (c09) | il tempo nel comando | esiste | no |
| 2.6 | Campanello (c10) | bassa tensione separata | esiste | sì |
| 2.7 | Il magnetotermico (c19) | portata, sezione del cavo, sovraccarico e corto | nuovo | sì |
| 2.8 | Il differenziale (c20) | dispersione, contatto con una persona, tasto di prova, neutro preso a monte | nuovo; riceve il guasto oggi in c11 | sì |
| 2.9 | Il quadro dell'appartamento (c11) | contatore, differenziale, due linee; trovare la linea con la dispersione | esiste; da ampliare, guasto nuovo | sì |

Differenze dal syllabus: multimetro come livello a sé e primo del modulo; c08 e c09 nel percorso esteso; la presa comandata resta con l'interruttore (come negli impianti di casa), il relè si vede in 2.2.

### Modulo 3, Industriale

| # | Livello | Si impara | Stato | Minimo |
|---|---|---|---|---|
| 3.1 | Le tre fasi (c21) | 230 e 400 V misurati; lampada tra due fasi | nuovo | sì |
| 3.2 | Il motore trifase (c12) | U, V, W, terra; senso di rotazione; fase mancante | esiste; aggiungere le due prove | sì |
| 3.3 | Il teleruttore (c22) | potenza e comando; bobina a 230 V | nuovo | sì |
| 3.4 | Marcia e arresto (c13) | autoritenuta, STOP chiuso a riposo | esiste | sì |
| 3.5 | Il relè termico (c14) | 95-96 nel comando, riarmo | esiste | sì |
| 3.6 | Il nastro (c16) | finecorsa, quadro su una macchina | esiste | sì |

Il lavoro fuori tensione richiede di toccare i livelli esistenti di M3: oggi in c13-c16 il salvamotore parte chiuso, quindi il banco è in tensione dall'inizio. Riceveranno `init: 0` o un sezionatore. È l'unica eccezione alla regola "i livelli esistenti non cambiano".

### Modulo 4, Automazione

| # | Livello | Si impara | Stato | Minimo |
|---|---|---|---|---|
| 4.1 | Inversione e interblocco (c15) | due teleruttori, due fasi scambiate, contatti NC incrociati | esiste; la demo mostra il corto senza interblocco | sì |
| 4.2 | Stella-triangolo (c23) | motore a sei morsetti (targa 400/690 V), spunto, temporizzatore ritardato | nuovo | no |
| 4.3 | Dal relè al PLC (c24) | marcia e arresto di c13 rifatti: ingressi, uscite, programma | nuovo | sì |
| 4.4 | Ladder: l'autoritenuta (c25) | contatti, bobina, scansione; STOP cablato NC | nuovo | sì |
| 4.5 | Tempo e conteggio (c26) | TON e CTU; stella-triangolo nel PLC | nuovo | sì |
| 4.6 | Il nastro con il PLC (c27) | fotocellula e conteggio; fungo e termico restano cablati | nuovo | sì |

Differenze dal syllabus: inversione e interblocco restano un solo livello (c15). Un livello di sola inversione senza interblocco darebbe tre stelle a un circuito che può mettere le fasi in corto; il problema si mostra invece nella demo e nella previsione di c15. Tempo e conteggio sono nel minimo perché il nastro con il PLC usa il contatore.

### Modulo 6, La fabbrica

Il Modulo 5 non è un prerequisito della fabbrica (vedi sotto e decisione 1). Il Modulo 6 si costruisce prima perché è la meta.

| # | Livello | Si impara | Tipo | Minimo |
|---|---|---|---|---|
| 6.1 | Il fungo a due canali | NC, doppio canale, sblocco ruotando | banco | sì |
| 6.2 | Il relè di sicurezza | canali, contatto saldato visto dalla retroazione, riarmo | banco | sì |
| 6.3 | Portella e barriera | la macchina non riparte da sola | banco | sì |
| 6.4 | Il sensore 4-20 mA | perché 4 e non 0; filo interrotto | banco + programma | sì |
| 6.5 | Il variatore | frequenza e velocità, rampe | banco + regolazione | no |
| 6.6 | Il serbatoio | isteresi con due soglie | programma + regolazione | sì |
| 6.7 | Il PID | P, I, D con cursori e grafico | regolazione | no |
| 6.8 | Il pannello operatore | stati, allarmi con priorità, dato vecchio | regolazione | sì |
| 6.9 | La linea | sequenze: attesa, prelievo, deposito | programma + regolazione | sì |
| 6.10 | Gestione guasti | tre guasti dalla libreria, a tempo | regolazione | sì |
| 6.11 | La fabbrica | cablare, programmare, mettere in sicurezza, gestire un turno | tutti | sì |

Differenze dal syllabus: bus di campo e manutenzione predittiva diventano facoltativi dopo la fabbrica (molto lavoro per concetti che non servono ai livelli successivi). Il pannello operatore è nel minimo perché la gestione guasti parte dagli allarmi.

### Modulo 5, Impianti del futuro

Resta com'è nel syllabus come direzione: 5A energia (fotovoltaico, stringhe, inverter, accumulo, scambio, colonnina, gestione del carico), 5B casa (bus, tapparelle, sensori, PLC della casa, casa intelligente). 5A chiede solo M2, la corrente continua (E8) e il simulatore (E7); 5B-4 e 5B-5 chiedono anche il PLC. Sulla mappa compare subito come ramo: 5A dopo M2, 5B dopo M4.

## 4. Estensioni del motore

Le estensioni sono additive: i livelli esistenti non cambiano (salvo M3, vedi sopra) e i loro test restano la rete di sicurezza.

### E1. Correnti stimate e coordinamento delle protezioni (per 2.7)

- I carichi dichiarano una potenza (`w: 2000`); i fili una sezione (`s: 1.5` o `2.5`, scelta nella tavolozza insieme al colore); i magnetotermici una portata (`in: 16`) e la curva.
- **Regola statica di coordinamento** `Ib ≤ In ≤ Iz`: corrente d'impiego della linea, portata dell'interruttore, portata del cavo. È il vero errore da insegnare (16 A su 1,5 mm²), e si verifica senza simulare nulla. Le portate dei cavi (Iz) dipendono dalla posa: valori da concordare con il collega.
- **Sovraccarico secondo CEI EN 60898**: sotto 1,13 In non scatta; sopra 1,45 In scatta in un tempo che il gioco accorcia (secondi invece di minuti, dichiarato nella lezione); tra le due soglie il gioco non fa scattare nulla e lo dice. Il corto resta istantaneo. La previsione del syllabus va corretta: due stufe da 2000 W su 16 A danno circa 17 A (1,09 In) e non scattano; con tre stufe (circa 26 A) scatta.
- **Attribuzione delle correnti** lungo i percorsi già calcolati da `flowV2`, una volta per assestamento e con una cache. Si limita a linee radiali (il caso degli impianti di casa); anelli e fili doppi si segnalano come cablaggio non ammesso nel livello.

### E2. Dispersioni e sistema di terra (per 2.8 e 2.9)

- I livelli di M2 dichiarano `earthing: 'TT'`: un guasto a terra lo vede solo il differenziale, il magnetotermico no. È la ragione per cui il differenziale è obbligatorio in casa, e il motore oggi la contraddice (semplificazione TN). I livelli esistenti restano TN.
- Un componente invisibile `leak` tra un morsetto e la terra, con un valore in mA, da mettere nei livelli o nei guasti.
- `touch X`: una persona tocca un morsetto in tensione, circa 100-200 mA.
- Differenziale da 30 mA: scatta sempre da 30 mA in su, mai sotto 15 mA; tra 15 e 30 mA il gioco non fa scattare (la norma ammette entrambe le cose, la lezione lo spiega). Il calcolo "a valle del differenziale" usa l'apertura simulata della protezione, come oggi.

### E3. Multimetro (per 2.1 e per tutte le sfide guasto)

- **Tensione.** Serve un passo nuovo, solo per la misura: il potenziale si propaga attraverso carichi, bobine e avvolgimenti verso le reti che non ne hanno. Senza questo passo le letture più utili nella ricerca guasti sarebbero sbagliate: 230 V ai capi di un contatto aperto con il carico a valle, 230 V verso terra sul morsetto N di una lampada con il neutro interrotto.
- **Continuità e resistenza**, a impianto scollegato: fili e contatti chiusi danno continuità, carichi e bobine danno una resistenza (lettura "resistenza", non "aperto").
- **Prove sulle misure**: `expect: { measure: { between: ['P.L', 'P.N'], v: 0 } }`. La sfida guasto può chiedere di indicare il punto guasto dopo averlo misurato.
- La sessione registra le misure fatte, per la regola del lavoro fuori tensione.

### E4. Pezzi nuovi del banco

- `rel`: relè con scambio (A1-A2; 11 comune, 12 NC, 14 NA). Ha il suo ramo in `settle`, come `ri` e `tmr`.
- `kt`: temporizzatore ritardato all'eccitazione con contatto di scambio. Il `tmr` attuale è un luce scale (contatto chiuso finché resta tempo, conteggio a bobina diseccitata) e non va bene per la stella-triangolo.
- `motor6`: U1 V1 W1 U2 V2 W2. Stati `star`, `delta`, `hum`; corto tra fasi se stella e triangolo sono chiusi insieme. Riconoscimento simbolico come `motor3`. Un motore che resta in stella sotto carico scalda il termico: è il guasto del syllabus.
- Sensori legati a un modello: fotocellula (posizione del pacco, come il finecorsa oggi), sonda di livello, trasmettitore 4-20 mA.
- Attuatori legati a un modello: pompa, variatore di velocità, robot di prelievo (sequenza di posizioni, come la macchina del nastro).

### E5. PLC e ladder (per M4 e M6)

- **Componente `plc`**: alimentazione, ingressi `I0.0...` con il comune, uscite a relè `Q0.0...` con il loro comune. Le uscite sono contatti e entrano nella rete come quelli di un relè. Gli ingressi valgono 1 se tra ingresso e comune c'è la tensione di comando (24 V, un'altra rete simbolica come il secondario del trasformatore). Indirizzi in stile Siemens (I0.0, Q0.0), simboli IEC 61131-3.
- **Istruzioni**: contatto NA e NC, rami in parallelo, bobina, Set e Reset, merker, fronte di salita, TON, CTU, confronto, MOVE, scalatura (per il 4-20 mA). Il programma è un elenco di gradini valutato da `scan(program, inputs, memory, dt)`, funzione pura con i suoi test.
- **Quando si esegue**: non a ogni iterazione di `settle`, che cambia una bobina alla volta e passa per stati intermedi. Ogni passo della simulazione fa: assestamento della rete, una sola scansione (tempo da `advance`, zero dopo un'azione), scrittura delle uscite, nuovo assestamento. Fronti e conteggi si calcolano solo tra una scansione e la successiva. Nello stesso assestamento le diseccitazioni avvengono prima delle eccitazioni; due uscite in `never` che commutano in versi opposti nella stessa scansione contano come violazione (è il guasto "stella e triangolo accesi per un istante"). Un programma che lampeggia oscilla nel tempo e non è "instabile". Il limite di iterazioni cresce con il numero di bobine.
- **Regola `emergencyHardwired`**: si ripete la prova di emergenza con il programma sostituito da "tutte le uscite a 1". Se il motore gira, l'emergenza dipende dal programma e la stella di sicurezza si perde. Stessa verifica per il contatto 95-96 del termico.

### E6. Sicurezza funzionale (per 6.1-6.3)

- Fungo con due contatti NC; relè di sicurezza come componente con stato (due canali, riarmo manuale, discrepanza, guasto); portella e barriera come comandi a due canali.
- Il contatto saldato di un teleruttore si riconosce solo con un contatto a guida forzata (o a specchio) del teleruttore nel circuito di retroazione del relè di sicurezza: il pezzo `km` ne riceve uno.
- Regole nuove: `dualChannel`, `restartNeedsReset`.

### E7. Modelli di processo e simulatore (per 6.4-6.11, poi M5)

- Un modello è una funzione `step(state, inputs, params, dt)`: serbatoio (livello, portata della pompa), forno (temperatura con ritardo), motore con variatore (velocità, rampe), energia (produzione, consumo, batteria, contatore).
- Il modello legge le uscite del PLC o i comandi del banco e scrive i sensori.
- **Due tempi**: la simulazione elettrica resta a passi di 0,5 s; i processi lenti hanno un passo di integrazione proprio e un tempo accelerato (una giornata in un minuto, un turno in pochi minuti), con il fattore scritto a schermo.
- Ogni grandezza si registra nel tempo. Prove sul tracciato: `expect: { trace: { T: { within: [58, 62], after: 60 } } }`, `maxSwitches`, `never`.
- **4-20 mA in forma simbolica**: se l'anello è chiuso con la polarità giusta, la corrente è quella che dà il modello (4 mA a 0 per cento, 20 mA a 100); anello aperto vale 0 mA. Non serve E8 per il Modulo 6.

### E8. Corrente continua (per M5A)

Polarità e serie/parallelo di generatori non si fanno con i potenziali simbolici. Serve un piccolo calcolo numerico limitato ai circuiti in continua (pochi nodi, soluzione esatta), separato dalla rete in alternata e usato solo dai livelli che lo dichiarano.

## 5. Formato dei livelli, guasti, stelle, salvataggio

Il livello resta un oggetto dati. Si aggiungono campi, nessuno cambia significato.

```js
{
  id: 'c25-ladder-autoritenuta', engine: 2,
  mode: ['banco', 'programma'],               // che cosa l'allievo può modificare
  fixed: [['Q.L1', 'QM.1', 'marrone'], ...],  // fili già posati
  earthing: 'TN',                              // 'TT' nei livelli di casa con differenziale
  program: { symbols: { I0_0: 'START', ... }, solution: [...] },
  model: { id: 'serbatoio', params: {...}, speed: 20 },
  checks: [...], safety: {...}, solution: [...],
}
```

**Fili posati.** Oggi ridisegnare la stessa coppia di morsetti cancella il filo, e "Annulla" e "Annulla tutto" agiscono su tutti i fili. I fili `fixed` restano fuori da queste operazioni.

**Guasti come trasformazioni.** Oggi la sfida guasto contiene l'intero cablaggio sbagliato; quella forma resta valida. Si aggiunge una forma corta, definita su morsetti e componenti e non su coppie di fili, perché nella fabbrica i guasti si applicano al cablaggio dell'allievo, che può essere diverso dalla soluzione: `open: 'KM1.A2'` (morsetto staccato), `weld: 'KM1'` (contatto saldato), `leak: { at: 'P.L', ma: 50 }`, `input: { invert: 'I0.1' }`, `param: { pid: { i: 2 } }`, `burn: 'L1'`. Da qui una libreria di guasti riusabile: la gestione guasti (6.10) e la fabbrica (6.11) pescano da lì.

**Stelle.** Restano tre sezioni. Nei livelli di casa: Funziona, Colori, Sicurezza (che in M2 comprende il coordinamento delle protezioni). Nei livelli di solo programma "Colori" diventa "Ordine". Definizione di "inutile": un gradino o un filo è inutile se, togliendolo, l'esito di tutte le prove e di tutte le regole resta identico. Non si confronta mai il programma con una soluzione di riferimento, perché un ladder ammette più soluzioni corrette: si verifica solo il comportamento, con prove aggiuntive automatiche come fa già `never`.

**Lavoro fuori tensione.** Oggi le stelle sono una funzione pura dei fili, e nei livelli senza protezioni proprie la sessione spegne il quadro da sola quando si modifica un filo. Serve: un campo della sessione che registra le modifiche fatte con la potenza alimentata e le misure fatte prima; una sola politica per i due tipi di livello (dal Modulo 3 nessuno spegne al posto dell'allievo); la stella di sicurezza che tiene conto di quel campo.

**Salvataggio.** `saveWork` salva fili e comandi. Si aggiungono programma e parametri, con un numero di versione per riconoscere i dati salvati da versioni precedenti.

## 6. Interfaccia

- **Editor ladder.** Gradini orizzontali, tavolozza con le istruzioni di E5, operandi scelti da un elenco con i nomi del livello (START, STOP, motore). Durante la prova i contatti che conducono si colorano con lo stesso linguaggio della corrente visibile sul banco. Su telefono un gradino per riga, comandi larghi quanto un dito. Il ladder resta da sinistra a destra anche nell'interfaccia in arabo.
- **Pannello di regolazione.** Cursori, valori, grafico delle grandezze nel tempo, fattore di accelerazione del tempo visibile.
- **Multimetro sul banco.** Due puntali, display grande, selettore V / Ω. Su telefono i puntali hanno una modalità propria, distinta dal tocco che crea i fili.
- **Colori del comando.** Rosso per il comando in alternata, già in uso da c13. Per il comando in continua del PLC la CEI EN 60204-1 indica il blu: va distinto a vista dall'azzurro del neutro.
- **Scena.** La stanza 2D e le prove 3D leggono solo `observe()`. Un modello nuovo aggiunge i suoi elementi (serbatoio che si riempie, pacchi che passano, torretta luminosa).

## 7. Prove dei moduli in 3D

Una prova per modulo, ognuna una pagina caricata a parte come il trilocale (`trilocale.js`).

| Modulo | Prova | Collaudo |
|---|---|---|
| M1 | Il trilocale | esiste |
| M2 | L'appartamento di notte | il differenziale scatta: trovare la linea con il multimetro e i magnetotermici |
| M3 | L'officina | il nastro collaudato a vista: marcia, arresto, termico, finecorsa |
| M4 | Il nastro automatico | conteggio dei pezzi, cambio programma a macchina ferma |
| M6 | La fabbrica | un turno con guasti casuali, produzione e tempo di fermo |
| M5 | La casa intelligente | una giornata simulata con sole, batteria e auto |

Le scene condividono un kit di pezzi 3D (quadro, nastro, motore, torretta luminosa, portella, serbatoio). Le proposte per l'effetto visivo si fanno a parte; le skill three.js si installano in locale con `scripts/get-skills.sh` (non sono nel repository perché il progetto d'origine non ha un file di licenza).

## 8. Elementi trasversali

- **Gradi.** Un grado per modulo, soglia intorno al 65 per cento dei punti del modulo, come nel syllabus. Il cambio non deve mai abbassare il grado di chi ha già giocato. Va rivista `progress.js`.
- **Quaderno, glossario, legenda.** Si raggruppano per modulo. La legenda cresce con i simboli del ladder e della sicurezza.
- **Arabo.** Ogni frase nuova deve avere la traduzione: il test di completezza già lo impone.
- **Area docente.** Richiede dati raccolti su un server, mentre il sito oggi è statico (GitHub Pages). Va progettata a parte, insieme al referente privacy.

## 9. Rischi tecnici

- **Scala della corrente visibile.** `flowV2` enumera i percorsi con un tetto di 200.000 passi: sulla fabbrica si troncherebbe. Prima di P8 va riscritta per reti grandi, o limitata alla sezione dell'impianto che si sta guardando.
- **Costo delle prove automatiche.** La regola `never` crea una simulazione per ogni coppia di pulsanti; con il PLC e i processi lenti il tempo della Verifica cresce. Va misurato nei prototipi, con un tetto per livello.
- **Telefono.** Editor ladder e multimetro sono le due interazioni nuove più difficili su schermo piccolo: prototipo da provare in classe prima di scrivere tutti i livelli.
- **Valori tecnici.** Portate dei cavi, curve, tempi accorciati, mA: ogni fase passa dal collega prima della pubblicazione.

## 10. Fasi di lavoro

Ogni fase si chiude con lo stesso controllo di oggi: test verdi, schermate a 390 e 1280 guardate, revisione indipendente, correzione dei problemi gravi e medi, unione in `main`.

| Fase | Contenuto | Visibile agli allievi alla fine |
|---|---|---|
| P1 | Ordine da `MODULES`; E3 multimetro; E1 correnti e coordinamento; E2 dispersioni e TT; pezzo `rel`; guasti come trasformazioni | M2 completo |
| P2 | Tre fasi, teleruttore, prove nuove di c12, lavoro fuori tensione | M3 completo |
| P3 | Prove 3D di M2 e M3 sul kit comune | due prove nuove |
| P4 | E6 sicurezza funzionale sul nastro di c16 | 6.1-6.3 |
| P5 | `kt`, `motor6`, stella-triangolo; E5 PLC, scansione, editor ladder, `emergencyHardwired` | M4 completo e prova 3D di M4 |
| P6 | E7 modelli, pannello di regolazione, 4-20 mA simbolico | 6.4-6.8 |
| P7 | Linea, libreria guasti, corrente visibile per reti grandi, fabbrica, prova 3D finale | 6.9-6.11 |
| P8 | E8 corrente continua e Modulo 5 | M5A e M5B |

P4 viene prima del PLC perché non ne ha bisogno e consolida la sicurezza cablata. Le fasi più rischiose sono P5 (editor ladder su telefono) e P6 (modelli giusti ma semplici): per entrambe un prototipo da far provare a una classe prima di scrivere i livelli.

## 11. Decisioni per Matteo

1. **Modulo 5 dopo la fabbrica?** A favore: la strada più corta alla meta, e 5B riusa il PLC. Contro: fotovoltaico e colonnina hanno peso professionale per un elettricista IeFP, e 5A chiede solo M2, corrente continua e simulatore. Alternativa: 5A subito dopo P6, quando il simulatore esiste, e 5B dopo la fabbrica.
2. **Percorso minimo:** c08 e c09 fuori dal minimo, c10 dentro. Va bene?
3. **Multimetro** come primo livello di M2 e **lavoro fuori tensione** obbligatorio da M3, con la modifica di c13-c16 che serve. Va bene?
4. **Colori:** rosso per il comando in alternata (in uso da c13), blu per il comando in continua del PLC. Da confermare con il collega.
5. **PLC:** indirizzi stile Siemens e simboli IEC. Da confermare con il collega.
6. **Valori numerici** (potenze, portate, sezioni, curve, mA, tempi accorciati): da rivedere con il collega a ogni fase.

## Appendice: corrispondenza con il syllabus

| Syllabus | Qui |
|---|---|
| — | 2.1 multimetro (c17) |
| M2-1 relè | 2.2 (c18) |
| M2-2 presa comandata | 2.3 (c07, con interruttore) |
| — | 2.4-2.6 (c08, c09, c10) |
| M2-3 magnetotermico | 2.7 (c19), con il sovraccarico corretto |
| M2-4 differenziale | 2.8 (c20), sistema TT |
| M2-5 quadro | 2.9 (c11 ampliato) |
| M3-1 … M3-6 | 3.1 … 3.6 |
| M4-1, M4-2 | 4.1 (c15, un solo livello) |
| M4-3 … M4-7 | 4.2 … 4.6 (4.3 rifà c13 nel PLC) |
| M5A, M5B | Modulo 5 (decisione 1) |
| M6-1 … M6-7 | 6.1 … 6.7 (6.1-6.3 sul nastro cablato) |
| M6-8 bus di campo | facoltativo dopo la fabbrica |
| M6-9 SCADA | 6.8 |
| M6-10 manutenzione predittiva | facoltativo dopo la fabbrica |
| M6-11, M6-12, M6-13 | 6.9, 6.10, 6.11 |
