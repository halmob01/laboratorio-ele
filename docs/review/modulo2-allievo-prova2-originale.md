# Modulo 2, allievo finto, consegna della seconda prova sulle lezioni originali (17 ottobre 2026)

Nota dell'allievo: nelle conseguenze scrivo "(generica)" quando so solo che "se manca un filo il circuito è aperto e la luce resta spenta" (livello "Il circuito chiuso"): la lezione del livello non dice niente di più. Scrivo "(dedotto)" quando lo ricavo da una definizione della lezione.

---

## 1. c17-multimetro: Il multimetro

**1. A che cosa serve nella vita vera**
Quando un impianto non funziona e il guasto non si vede (filo staccato dentro il morsetto, contatto che non chiude) si misura invece di indovinare. Serve anche prima di lavorare su un impianto: si toglie la tensione e si controlla con lo strumento che non ce ne sia più.

**2. Passo per passo**

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | La fase all'interruttore (FASE, morsetto 1) | L'interruttore sta sulla fase: se stesse sul neutro la luce si spegnerebbe ma la fase resterebbe sul portalampada (dai livelli precedenti) | Interruttore sul neutro: errore pericoloso, la fase resta sul portalampada (dai livelli precedenti) | - (livello "Punto luce interrotto") |
| 2 | Dal morsetto 2 alla lampada | SOLO IL COME | Circuito aperto, luce spenta (generica) | - |
| 3 | Il neutro alla lampada | SOLO IL COME | Circuito aperto, luce spenta (generica) | - |
| 4 | Dai corrente (levetta) | SOLO IL COME | NON LO SO | - |
| 5 | Misura la tensione (rosso sul 1, nero sul neutro: 230 V) | Per controllare con lo strumento che la tensione c'è davvero, "misurare invece di indovinare". Perché rosso di qua e nero di là: LA LEZIONE NON LO DICE | NON LO SO | "Misurare invece di indovinare", "Due misure: tensione e continuità" |
| 6 | Ai capi dell'interruttore aperto (230 V anche con la lampada spenta) | Per far vedere che lampada spenta non vuol dire senza tensione: il morsetto dopo l'interruttore prende il neutro attraverso la lampada | Se credo che ci siano 0 V posso prendere la scossa anche con la luce spenta | Domanda "L'interruttore è aperto e la lampada è spenta..." |
| 7 | Continuità a quadro spento, interruttore chiuso | La continuità si misura a impianto spento perché lo strumento manda lui una piccola corrente; chiudo l'interruttore per vedere se il percorso è chiuso | Misurandola con l'impianto in tensione la lettura non vale e lo strumento si può rovinare | "Due misure: tensione e continuità" (Attenzione) |

**3. Parole che non ho capito**
- "Resistenza" (a un carico "legge la sua resistenza"): non è spiegata, e non so che numero esce né in che unità.
- "Carico": nel livello prima si usa "lampada", qui compare "carico" senza dirlo.
- "A valle" / "a monte" (il morsetto "a valle" dell'interruttore): non spiegato, lo intuisco.
- "Circuito aperto" come lettura del display: non so come si legge (un numero? una scritta?).
- "Puntali rosso e nero": non so se il colore conta.

**4. Domande che mi restano**
- Se tra i due morsetti dell'interruttore ci sono 230 V e la lampada è collegata, perché la lampada non si accende?
- Il rosso e il nero si possono scambiare? Cambia la lettura?
- Perché lo strumento si rovina se misuro la continuità con la tensione?
- Tra neutro e terra leggo "circa" 0 V: perché circa e non proprio 0?
- Come si toglie la tensione dal quadro nella pratica? E se qualcuno la rimette mentre lavoro?

**5. Conteggio**
Passi con il perché vero: 4 su 7. Passi con la conseguenza: 5 su 7 (di cui 3 solo generiche o dai livelli precedenti). Capisco a che cosa serve: sì.

---

## 2. c18-rele: Il relè

**1. A che cosa serve nella vita vera**
Capisco che cosa fa: un piccolo circuito (bobina) comanda un altro circuito (contatto), e con il contatto di scambio una bobina dà due segnali opposti. A che cosa serva davvero, in quale impianto, la lezione non lo dice (le lampade verde e rossa sono solo l'esempio dell'esercizio). **NON LO SO** (a che serve nella vita vera).

**2. Passo per passo**

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | La fase al comando (morsetto 1 dell'interruttore) | Il comando sta sulla fase, come ogni interruttore (dai livelli precedenti: sul neutro lascia la fase) | Interruttore sul neutro: errore pericoloso (dai livelli precedenti) | "Sintesi" ultima riga; - |
| 2 | Dal comando alla bobina (A1) | SOLO IL COME | La bobina non riceve tensione, non si eccita, il contatto resta su 12 (dedotto) | - |
| 3 | Il neutro alla bobina (A2) | SOLO IL COME ("ha il suo ritorno" ridice il come) | Circuito aperto, la bobina non si eccita (generica) | "Sintesi" ultima riga |
| 4 | La fase al contatto (11, comune) | Il relè è un interruttore e un interruttore sta sulla fase (dedotto da "Un relè è un interruttore comandato" e dai livelli precedenti) | Le lampade non ricevono mai la fase (generica) | "Comando e carico separati" |
| 5 | Il 12 alla lampada verde | SOLO IL COME | Se scambio verde e rossa i colori sono invertiti: verde accesa a bobina eccitata (dedotto dalle definizioni di 12 e 14) | "Il relè con contatto di scambio" |
| 6 | Il 14 alla lampada rossa | SOLO IL COME | Come sopra, rossa accesa a riposo (dedotto) | "Il relè con contatto di scambio" |
| 7 | Il neutro alla lampada verde | SOLO IL COME | Circuito aperto, la verde non si accende (generica) | - |
| 8 | Il neutro alla lampada rossa | SOLO IL COME | Circuito aperto, la rossa non si accende (generica) | - |
| 9 | Dai corrente, chiudi e apri il comando | SOLO IL COME | NON LO SO | Domanda "Il comando è aperto. Quale lampada è accesa?" |

**3. Parole che non ho capito**
- "Bobina", "elettromagnete", "eccitare / eccitarsi": non spiegate bene, le uso senza sapere cosa succede dentro.
- "NC" e "NA": sigle senza spiegazione (si intuisce "normalmente chiuso / aperto" ma non è scritto).
- "A riposo": quando il relè è a riposo? (credo bobina senza tensione).
- "Contatto di scambio", "comune".
- "Segnale" (spie?): non dice cos'è.
- "Tensioni diverse": quali?

**4. Domande che mi restano**
- A che cosa serve un relè se potrei mettere direttamente l'interruttore sulla lampada?
- La lezione dice "i due circuiti non si toccano", ma nel banco la fase va sia all'interruttore di comando sia al morsetto 11, e il neutro è lo stesso: allora in che senso sono separati?
- Che cosa cambia se scambio A1 e A2?
- Perché la verde sta sul 12 e la rossa sul 14 e non il contrario?
- Cosa fa il relè quando manca la corrente (blackout)?

**5. Conteggio**
Passi con il perché vero: 2 su 9. Passi con la conseguenza: 8 su 9 (di cui 5 solo generiche o dedotte). Capisco a che cosa serve: no.

---

## 3. c07-presa-comandata: La presa comandata

**1. A che cosa serve nella vita vera**
In una stanza un solo interruttore comanda sia la luce del soffitto sia una presa dove è attaccata una lampada da tavolo. Perché non lasciare la presa sempre viva, la lezione non lo dice, ma l'idea di uso la capisco.

**2. Passo per passo**

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Porta la fase all'interruttore | L'interruttore sta sulla fase, così aperto non lascia fase sui carichi (dai livelli precedenti e dalla lezione) | Interruttore sul neutro: errore pericoloso (dai livelli precedenti) | "L'interruttore sulla fase" |
| 2 | Dal morsetto 2 alla presa (L) | Perché la presa sia comandata deve stare dopo l'interruttore: aperto, non ha tensione | Se la prendo dal quadro la presa è sempre alimentata (dedotto da "Le prese normali sono collegate direttamente al quadro"); L sul neutro è polarità invertita | "L'interruttore sulla fase", Domanda sulla spina |
| 3 | Dallo stesso morsetto 2 alla lampada | Il comando sta sulla fase prima che si divida, così un solo interruttore comanda tutti e due i carichi | La lampada non sarebbe comandata dall'interruttore (dedotto) | "Una presa e una luce con un solo comando" |
| 4 | Il neutro alla presa (N) | LA LEZIONE NON LO DICE (dice solo "per regola d'impianto") | Se scambio L e N: l'apparecchio funziona, ma la presa è cablata male (dai livelli precedenti) | "La presa: fase, neutro e terra" |
| 5 | Il neutro alla lampada | Il neutro non passa dall'interruttore (sul neutro sarebbe l'errore pericoloso dei livelli precedenti) | Circuito aperto, la lampada non si accende (generica) | "Una presa e una luce con un solo comando" |
| 6 | La terra alla presa (PE) | È il filo di sicurezza (dai livelli precedenti), "la terra si collega sempre" | Funziona lo stesso ma non è sicuro; cosa succede di preciso non lo so | "Sintesi" (La presa ha L, N e PE) |
| 7 | Dai corrente, prova l'interruttore | SOLO IL COME | NON LO SO | Domanda "Che cosa succede se inserisco una spina?" |

**3. Parole che non ho capito**
- "Regola d'impianto": quale regola? dove sta scritta?
- "A valle dell'interruttore": non spiegato.
- "Carico" (plurale "i due carichi"): non definito.
- "PE": nei livelli prima ok, ma "terra del quadro" non so cos'è fisicamente.

**4. Domande che mi restano**
- Se l'apparecchio funziona lo stesso con L e N scambiati, perché devo rispettare la regola? Che cosa rischio?
- Che cosa fa la terra, concretamente, se c'è un guasto?
- Perché in casa non si fanno tutte le prese comandate da un interruttore?
- La lampada da tavolo comandata dall'interruttore: se la voglio accesa con la luce spenta?

**5. Conteggio**
Passi con il perché vero: 5 su 7. Passi con la conseguenza: 5 su 7 (di cui 1 solo generica). Capisco a che cosa serve: sì.

---

## 4. c08-rele-impulsi: Il relè ad impulsi

**1. A che cosa serve nella vita vera**
Accendere e spegnere la stessa luce da molti punti, per esempio in un lungo corridoio con molte porte, con tanti pulsanti uguali invece di deviatori e invertitori.

**2. Passo per passo**

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | La fase ai pulsanti (morsetto 3 dell'ingresso) | SOLO IL COME (perché proprio il 3 e non il 4: LA LEZIONE NON LO DICE) | Circuito aperto, nessun impulso alla bobina (generica) | "Pulsanti in parallelo, mai in serie" |
| 2 | I morsetti 3 in parallelo (due fili) | Ne basta uno premuto per dare l'impulso; in serie servirebbero tutti premuti insieme | In serie la bobina non riceve mai l'impulso e la lampada non si accende mai | "Pulsanti in parallelo, mai in serie" |
| 3 | I morsetti 4 in parallelo (due fili) | Come sopra | Come sopra | "Pulsanti in parallelo, mai in serie" |
| 4 | Dai pulsanti alla bobina (A1) | SOLO IL COME | Nessun impulso, il relè non cambia stato (generica) | - |
| 5 | Il neutro alla bobina (A2) | SOLO IL COME | Circuito aperto, il relè non cambia stato (generica) | - |
| 6 | La fase al contatto (morsetto 1) | Il contatto è l'interruttore della lampada e un interruttore sta sulla fase (dedotto) | La lampada non riceve mai la fase (generica) | "Il relè ad impulsi" |
| 7 | Dal contatto (2) alla lampada | SOLO IL COME | Circuito aperto, lampada spenta (generica) | - |
| 8 | Il neutro alla lampada | SOLO IL COME | Circuito aperto, lampada spenta (generica) | - |
| 9 | Dai corrente, premi i pulsanti uno alla volta | SOLO IL COME | NON LO SO | Domanda "La lampada è accesa. Premo il pulsante..." |

**3. Parole che non ho capito**
- "Impulso": non è definito (una pressione? un segnale breve?).
- "Relè ad impulsi" / "cambia stato" / "ricorda lo stato": come fa un relè a ricordare, non è spiegato.
- "Contatto (1-2)" e "morsetti 3 e 4" del pulsante: i numeri non hanno spiegazione (il 3 e il 4 sono uguali tra loro?).
- "Parallelo" e "serie" per i pulsanti: ripreso da prima ma qui lo applico a un altro circuito.

**4. Domande che mi restano**
- Se tengo premuto a lungo il pulsante, è un solo impulso o tanti?
- Se premo due pulsanti insieme?
- Se manca la corrente e poi torna, la lampada com'era?
- Il 3 e il 4 del pulsante si possono scambiare?
- Come fa fisicamente il relè a ricordare lo stato?

**5. Conteggio**
Passi con il perché vero: 3 su 9. Passi con la conseguenza: 8 su 9 (di cui 6 solo generiche). Capisco a che cosa serve: sì.

---

## 5. c09-luce-scale: La luce scale a tempo

**1. A che cosa serve nella vita vera**
Nelle scale dei condomini la luce si accende con un pulsante e si spegne da sola dopo qualche decina di secondi, così non resta accesa per dimenticanza e si risparmia energia.

**2. Passo per passo**

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | La fase ai pulsanti (morsetto 3 del primo) | SOLO IL COME | Circuito aperto, nessun impulso alla bobina (generica) | - |
| 2 | Morsetti 3 in parallelo | Basta premerne uno qualunque per eccitare la bobina; se ne aggiungono quanti servono, uno a ogni piano | In serie servirebbero tutti premuti insieme (dal livello del relè ad impulsi, "come nel relè ad impulsi") | "Pulsanti in parallelo" |
| 3 | Morsetti 4 in parallelo | Come sopra | Come sopra | "Pulsanti in parallelo" |
| 4 | Alla bobina (A1) | SOLO IL COME | La bobina non si eccita, le lampade restano spente (generica) | - |
| 5 | Il neutro alla bobina (A2) | SOLO IL COME | Circuito aperto, la bobina non si eccita (generica) | - |
| 6 | La fase al contatto (morsetto 1) | Le lampade non passano dai pulsanti: le alimenta il contatto del temporizzatore, che resta chiuso anche a pulsante rilasciato | Senza la fase al contatto le lampade non ricevono tensione (generica) | "Pulsanti in parallelo", "Il relè temporizzato" |
| 7 | Dal 2 alla prima lampada | SOLO IL COME | Circuito aperto, lampada spenta (generica) | - |
| 8 | Dallo stesso 2 alla seconda lampada | Due lampade sono in parallelo, non in serie (dai livelli precedenti: in serie è un errore) | In serie è un errore (dai livelli precedenti) | - (livello "Due lampade, un interruttore") |
| 9 | Il neutro alla lampada 1 | SOLO IL COME | Circuito aperto, lampada spenta (generica) | - |
| 10 | Il neutro alla lampada 2 | SOLO IL COME | Circuito aperto, lampada spenta (generica) | - |
| 11 | Dai corrente, premi e osserva | SOLO IL COME | NON LO SO | Domanda "Le lampade sono accese da 15 secondi su 20..." |

**3. Parole che non ho capito**
- "Relè temporizzato": non so come conta il tempo.
- "Il tempo comincia a contare quando il pulsante viene rilasciato": detto ma senza motivo.
- "Tempo regolabile" / "tempo impostato": dove lo si imposta? Il banco non lo dice.
- "Eccitare la bobina": ripreso dal relè, non spiegato.

**4. Domande che mi restano**
- Dove si regola il tempo, e di quanto?
- Perché il conteggio parte al rilascio e non alla pressione?
- Perché si usa il temporizzatore e non il relè ad impulsi? (Mi sembra di intuire: con l'impulso la luce resterebbe accesa se uno si dimentica; ma non è scritto.)
- Quante lampade può alimentare il contatto?

**5. Conteggio**
Passi con il perché vero: 4 su 11. Passi con la conseguenza: 10 su 11 (di cui 8 solo generiche o dai livelli precedenti). Capisco a che cosa serve: sì.

---

## 6. c10-campanello: Il campanello e il trasformatore

**1. A che cosa serve nella vita vera**
Il campanello funziona a 12 V; il trasformatore abbassa i 230 V della rete e così chi tocca il pulsante accanto alla porta non rischia nulla.

**2. Passo per passo**

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | La fase al primario (morsetto 1) | SOLO IL COME (è il lato fatto per la rete; perché non il secondario, LA LEZIONE NON LO DICE) | Il trasformatore non è alimentato e il campanello non suona (dedotto, generica) | "Il trasformatore" |
| 2 | Il neutro al primario (morsetto 2) | SOLO IL COME | Come sopra (generica) | "Il trasformatore" |
| 3 | Dal secondario (3) al pulsante (bianco) | Il pulsante sta sul circuito a bassa tensione, così chi lo tocca non rischia; il bianco perché non è né fase né neutro (ma perché proprio il bianco, la lezione dice solo "possono essere") | Con il pulsante sulla rete a 230 V chi lo tocca rischia (dedotto da "perché il pulsante sta sul circuito a bassa tensione") | "Il campanello a bassa tensione", "Il campanello" |
| 4 | Dal pulsante al campanello | Pulsante e campanello in serie: premuto chiude il circuito a 12 V, altrimenti il campanello tace | Filo mancante: circuito aperto, il campanello non suona mai (generica) | Domanda "Il trasformatore è alimentato..." |
| 5 | Il secondo filo (secondario 4 all'altro morsetto del campanello) | SOLO IL COME | Circuito aperto, il campanello non suona (generica) | - |
| 6 | Dai corrente, premi il pulsante | SOLO IL COME | NON LO SO | Domanda sul pulsante non premuto |

**3. Parole che non ho capito**
- "Primario" e "secondario": spiegati in parte (lato rete e lato 12 V) ma non il significato dei nomi.
- "Nucleo", "campo magnetico": non li conosco, non è spiegato.
- "Bassa tensione": quanto è bassa? La soglia?
- "Circuito a bassa tensione ha i suoi colori": quali sono i colori ammessi?
- Il morsetto 3 e il 4 sono sia sul secondario sia sul pulsante: facile confondersi.

**4. Domande che mi restano**
- Perché 12 V sono sicuri e 230 V no?
- Se scambio primario e secondario (i 12 V al posto dei 230 V)?
- Perché il bianco e non un altro colore?
- Se il pulsante non è premuto, il secondario ha tensione lo stesso: posso prendere la scossa a 12 V?
- Come fa il trasformatore ad abbassare la tensione senza collegamento elettrico?

**5. Conteggio**
Passi con il perché vero: 2 su 6. Passi con la conseguenza: 5 su 6 (di cui 4 solo generiche o dedotte). Capisco a che cosa serve: sì.

---

## 7. c19-magnetotermico: Il magnetotermico

**1. A che cosa serve nella vita vera**
Proteggere il cavo: se passa troppa corrente il cavo si scalda, e il magnetotermico deve scattare prima. La portata si sceglie con la regola dei tre numeri, corrente di impiego, portata dell'interruttore e portata del cavo.

**2. Passo per passo**

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | La fase al magnetotermico (morsetto 1) | LA LEZIONE NON LO DICE (perché il magnetotermico va prima delle stufe e non dopo) | Senza fase la linea non è alimentata (generica) | - |
| 2 | Dal 2 del magnetotermico all'interruttore della stufa 1 | SOLO IL COME | Circuito aperto, stufa 1 spenta (generica) | - |
| 3 | Dallo stesso 2 all'interruttore della stufa 2 | SOLO IL COME (le due stufe sulla stessa linea è lo scopo dell'esercizio: così le correnti si sommano) | Circuito aperto, stufa 2 spenta (generica) | "Quanta corrente passa nel cavo" |
| 4 | Dall'interruttore alla stufa 1 | SOLO IL COME | Circuito aperto, stufa spenta (generica) | - |
| 5 | Dall'interruttore alla stufa 2 | SOLO IL COME | Circuito aperto, stufa spenta (generica) | - |
| 6 | Il neutro al magnetotermico (N in alto) | LA LEZIONE NON LO DICE (prima il neutro andava ai carichi senza passare da nessun interruttore) | Senza neutro le stufe non funzionano (generica) | - |
| 7 | Il neutro dal magnetotermico (N in basso) alla stufa 1 | SOLO IL COME | Circuito aperto, stufa spenta (generica) | - |
| 8 | Lo stesso neutro alla stufa 2 | SOLO IL COME | Circuito aperto, stufa spenta (generica) | - |
| 9 | Scegli la portata: 10 A | Una stufa assorbe 8,7 A, il cavo regge 14,5 A: 8,7 ≤ 10 ≤ 14,5 (regola dei tre numeri) | Troppo piccolo: scatta senza motivo. Troppo grande (16 A): non scatta e il cavo si scalda | "La regola dei tre numeri", Domanda con 16 A |
| 10 | Prova una stufa: resta accesa | Per controllare che con l'uso normale il magnetotermico non scatti (8,7 A è sotto 1,13 volte In) | Se scatta, l'interruttore è troppo piccolo | "La portata del magnetotermico", "La regola dei tre numeri" |
| 11 | Prova due stufe: scatta | Per controllare che con 17,4 A scatti prima che il cavo si scaldi (è 1,74 volte 10 A, sopra 1,45 volte) | Se non scatta il cavo si scalda oltre la portata, nessuno se ne accorge | Domanda con 16 A |

**3. Parole che non ho capito**
- "Magnetotermico": il nome non è spiegato (che cosa sono la parte "magnetica" e quella "termica").
- "Portata" ha due significati (del cavo e dell'interruttore): confuso.
- "Sezione", "mm²", "tubo incassato": non spiegati.
- "Ib", "In", "Iz": le sigle sono scritte ma non dette per esteso (Ib e Iz dopo averle usate).
- "A" (ampere), "W": usati senza spiegazione.
- "Sovraccarico", "cortocircuito": il cortocircuito lo ricordo (fase su neutro), il sovraccarico non è definito qui.
- "Norma": quale?

**4. Domande che mi restano**
- Che cosa fa il magnetotermico quando la corrente è tra 1,13 e 1,45 volte In? La lezione dice solo "la norma non dice".
- Perché il neutro passa dal magnetotermico, quando prima non passava da nessun interruttore?
- Quali sono le altre portate possibili (solo 10 e 16? 6?) e perché il banco dice "fino a 10 A"?
- Perché nel gioco scatta in pochi secondi e nella realtà in meno di un'ora?
- Perché ogni stufa ha un suo interruttore?
- Perché 14,5 A, da dove viene? ("valore del gioco")

**5. Conteggio**
Passi con il perché vero: 3 su 11. Passi con la conseguenza: 11 su 11 (di cui 8 solo generiche). Capisco a che cosa serve: sì.

---

## 8. c20-differenziale: Il differenziale

**1. A che cosa serve nella vita vera**
Se l'isolante cede, una parte della corrente va a terra, magari attraverso una persona che tocca l'involucro. Il differenziale se ne accorge perché la corrente che esce e quella che rientra non sono più uguali, e scatta in una frazione di secondo. Il magnetotermico non se ne accorge, per questo in casa servono tutti e due.

**2. Passo per passo**

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | La fase al differenziale (morsetto 1) | Il differenziale confronta fase e neutro solo se passano tutte e due da lui | Senza fase l'apparecchio non è alimentato (generica) | "Il neutro deve passare dal differenziale" |
| 2 | Il neutro al differenziale (N in alto) | Come sopra | Senza neutro il confronto non si può fare e l'apparecchio non funziona (generica) | "Il neutro deve passare dal differenziale" |
| 3 | Dal 2 del differenziale all'interruttore | L'interruttore sta sulla fase (dai livelli precedenti) | Interruttore sul neutro: errore pericoloso (dai livelli precedenti) | - (livello "Punto luce interrotto") |
| 4 | Dall'interruttore allo scaldabagno | SOLO IL COME | Circuito aperto, scaldabagno spento (generica) | - |
| 5 | Il neutro (N in basso del differenziale) allo scaldabagno | Il neutro dei carichi deve uscire dal differenziale, altrimenti la corrente esce e rientra altrove | Il differenziale lo vede come dispersione e scatta appena si accende l'apparecchio | "Il neutro deve passare dal differenziale" |
| 6 | Accendi lo scaldabagno | SOLO IL COME | NON LO SO | - |
| 7 | Provoca la dispersione: 10 mA non scatta, 300 mA scatta | Per vedere la soglia: sotto 15 mA per norma non scatta, da 30 mA in su scatta, 300 mA è dieci volte la soglia | NON LO SO (se non scattasse non lo dice) | "La soglia di 30 mA", Domanda sui 300 mA |

**3. Parole che non ho capito**
- "Dispersione": spiegata con un esempio, ma non so come nasce davvero.
- "Soglia": non definita.
- "Isolante", "involucro": non spiegati.
- "Mi" in "mA" (milliampere): non detto.
- "Riarmare": non spiegato.
- "Tocca il pannello dell'isolante": che cos'è questo pannello?
- "Rientra altrove": dove?

**4. Domande che mi restano**
- Che cosa succede tra 15 e 30 mA? (come per il magnetotermico, la lezione tace)
- Perché proprio 30 mA e non meno o più?
- Come fa fisicamente il differenziale a confrontare le due correnti?
- Se lo scaldabagno ha la terra, la dispersione va a terra senza passare dalla persona: il differenziale scatta lo stesso?
- Perché in questo esercizio non c'è il magnetotermico?

**5. Conteggio**
Passi con il perché vero: 5 su 7. Passi con la conseguenza: 5 su 7 (di cui 3 solo generiche o dai livelli precedenti). Capisco a che cosa serve: sì.

---

## 9. c11-quadro: Il quadro di casa

**1. A che cosa serve nella vita vera**
Il quadro raccoglie le protezioni: all'ingresso il differenziale (protegge le persone) e per ogni linea un magnetotermico (protegge i cavi). Se si guasta una linea, scatta solo la sua e le altre restano alimentate.

**2. Passo per passo**
Il banco ha solo 4 passi che riassumono una dozzina di collegamenti. Dove vanno l'interruttore e la lampada, il banco non lo dice.

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Entra nel differenziale (fase e neutro in alto) | Il differenziale sta all'ingresso e protegge le persone; il neutro di ogni carico deve passare da lui | Neutro preso a monte del differenziale: scatta anche senza una vera dispersione | "Il differenziale" (Attenzione) |
| 2 | Le due linee (fase e neutro si dividono in luce e prese) | Se si guasta la luce scatta solo il magnetotermico della luce e le prese restano alimentate | Con una linea sola un guasto spegnerebbe tutto (dedotto) | "Il quadro di una casa" |
| 3 | La presa e la terra | La terra è il filo di sicurezza (dai livelli precedenti) | Senza terra l'impianto non è sicuro, di preciso non lo so | - (livello "La presa di corrente") |
| 4 | Prova il tasto di prova del differenziale | Il tasto simula una dispersione e serve a controllare che il differenziale funzioni | NON LO SO | "Il differenziale" |

**3. Parole che non ho capito**
- "A monte" / "a valle": usati e mai spiegati.
- "Linea": non è definita (una parte dell'impianto con il suo magnetotermico?).
- "Uscita fase / uscita neutro del differenziale": nel livello prima i morsetti avevano numeri, qui no.
- "Sovraccarico": non è definito.
- "Interrompe sia la fase sia il neutro".

**4. Domande che mi restano**
- Perché qui il magnetotermico interrompe anche il neutro, se prima ho imparato che il neutro non passa dall'interruttore?
- Perché il differenziale è uno solo all'ingresso e non uno per ogni linea? Così se una linea disperde si spegne tutta la casa.
- Ogni quanto è "ogni tanto" per il tasto di prova? E se non funziona, che faccio?
- Dove vanno l'interruttore e la lampada nel banco? I 4 passi non lo dicono.
- Come fa il tasto di prova a simulare una dispersione?

**5. Conteggio**
Passi con il perché vero: 4 su 4. Passi con la conseguenza: 2 su 4. Capisco a che cosa serve: sì.

---

## 10. c23-appartamento-notte: L'appartamento di notte

**1. A che cosa serve nella vita vera**
Trovare quale linea disperde verso terra quando il differenziale scatta e non resta armato: si aprono tutti i magnetotermici, si riarma il differenziale e si richiude una linea alla volta; quella che lo fa scattare è la guasta. Si cerca così e non a caso.

**2. Passo per passo**
Nel file questo livello non ha nessun passo del banco (la sezione è vuota). Non posso compilare la tabella.

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| - | Nessun passo elencato | - | - | - |

**3. Parole che non ho capito**
- "Armato / riarmare": mai spiegato bene.
- "Isolare le linee": lo intuisco dal testo.
- "A monte / a valle del differenziale": mai spiegato.
- "Rimuovere la causa", "apparecchio difettoso": quale apparecchio?

**4. Domande che mi restano**
- Quando ho trovato la linea, come trovo l'apparecchio difettoso? La lezione si ferma alla linea.
- Come uso il multimetro in questo livello? La lezione dice "serve a controllare dove c'è tensione" ma non dove metto i puntali.
- Perché si aprono prima tutti i magnetotermici e si riarma il differenziale, e non si prova subito a riarmare?
- Se il differenziale scatta con tutte le linee aperte?
- Come faccio a rimettere in funzione le altre linee senza richiudere quella guasta?

**5. Conteggio**
Passi con il perché vero: 0 su 0. Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì.

---

## Tabella riassuntiva

| Livello | Passi | Perché vero | Conseguenza | Capisco a che cosa serve | Domande che restano |
|---|---|---|---|---|---|
| c17-multimetro | 7 | 4 | 5 (3 generiche) | sì | 5 |
| c18-rele | 9 | 2 | 8 (5 generiche o dedotte) | no | 5 |
| c07-presa-comandata | 7 | 5 | 5 (1 generica) | sì | 4 |
| c08-rele-impulsi | 9 | 3 | 8 (6 generiche) | sì | 5 |
| c09-luce-scale | 11 | 4 | 10 (8 generiche o precedenti) | sì | 4 |
| c10-campanello | 6 | 2 | 5 (4 generiche o dedotte) | sì | 5 |
| c19-magnetotermico | 11 | 3 | 11 (8 generiche) | sì | 6 |
| c20-differenziale | 7 | 5 | 5 (3 generiche o precedenti) | sì | 5 |
| c11-quadro | 4 | 4 | 2 | sì | 5 |
| c23-appartamento-notte | 0 (nessun passo nel file) | 0 | 0 | sì | 5 |
