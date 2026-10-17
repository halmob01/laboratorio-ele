# Modulo 5, allievo finto sulle lezioni di partenza (fe4fee0)

Come ho contato: "N" sono i passi in cui si collega un filo o si scrive un gradino. I passi "Dai corrente", "Prova...", "Simula...", "Guarda..." li metto nella tabella ma non li conto (sono prove, non lavoro da fare con un perché). Il passo "Premi Verifica" non c'è. Per i fili di ritorno al neutro (o al negativo) accetto come perché "la corrente deve tornare, altrimenti il circuito è aperto", perché lo so dai livelli prima.

---

## c47-videocitofono: Il videocitofono

### 1. A che cosa serve nella vita vera
Al portone ci sono il tasto di chiamata e la serratura, che li tocca chiunque, anche con le mani bagnate. Per questo lì non devono mai arrivare i 230 V: si usa un trasformatore che dà 12 V e tiene separati i due lati. Quindi serve a far suonare la suoneria e aprire il portone senza rischi per chi tocca la pulsantiera.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 del primario | Il primario si collega alla rete: da lì il trasformatore ricava i 12 V | NON LO SO | Perché il portone è a bassa tensione; Il trasformatore ha due lati |
| 2 | Neutro al morsetto 2 del primario | Ritorno del primario, così resta sempre alimentato | Primario aperto: niente 12 V sul secondario (dedotto da "manca un filo = circuito aperto") | Il trasformatore ha due lati |
| 3 | Morsetto 3 del secondario al tasto di chiamata (filo bianco) | SOLO IL COME (per il colore: i fili a bassa tensione non sono fase né neutro) | NON LO SO | Un anello per ogni funzione |
| 4 | Tasto di chiamata alla suoneria | Il tasto è in serie alla suoneria, così suona solo quando lo premo | NON LO SO | Un anello per ogni funzione |
| 5 | Morsetto 4 del secondario all'altro capo della suoneria | La corrente deve tornare al trasformatore per chiudere l'anello | L'anello non si chiude e la suoneria non suona | Un anello per ogni funzione |
| 6 | Morsetto 3 anche al tasto apriporta | Il secondo ramo parte dallo stesso morsetto, in parallelo: ognuno funziona da solo | Se fossero in serie, uno impedirebbe all'altro di funzionare | Un anello per ogni funzione; domanda dei due tasti insieme |
| 7 | Tasto apriporta alla serratura | Il tasto in serie fa sbloccare la serratura solo mentre lo premo | NON LO SO | Chiamata e apriporta |
| 8 | Morsetto 4 all'altro capo della serratura | Chiude l'anello dell'apriporta (come il passo 5) | L'anello resta aperto, la serratura non si sblocca (dedotto dal passo 5) | Un anello per ogni funzione |
| 9 | Dai corrente (prova, non contato) | - | - | Il trasformatore ha due lati |
| 10 | Prova chiamata e apriporta (prova, non contato) | - | - | - |

### 3. Parole che non ho capito
- "campo magnetico del nucleo" (usato senza spiegare)
- "pulsantiera"
- "utilizzatore" (suoneria e serratura? non lo dice)
- "bus" e "segnale digitale" (nell'ultima slide)
- "serratura elettrica" / "apriporta": non so com'è fatta dentro e perché si sblocca solo finché il tasto è premuto

### 4. Domande che mi restano
1. Perché la fase va proprio sul morsetto 1 e il neutro sul 2? Si possono scambiare, come A e B della lampada?
2. Perché 12 V e non, che so, 24 V o 6 V?
3. Perché i morsetti 3 e 4 del secondario hanno un ordine? Dato che è un trasformatore, 3 e 4 sono equivalenti?
4. Come fa l'energia a passare "attraverso il campo magnetico" senza un filo? Non lo capisco e la lezione dice solo che succede.
5. Nella domanda della serratura a 230 V c'è la risposta "il differenziale la protegge": scatterebbe o no? La lezione non lo dice, dice solo che il pericolo è un altro.
6. Perché sul secondario non c'è nessuna protezione (fusibile, magnetotermico)? Se la serratura va in corto, che cosa si ferma?

### 5. Conteggio
Passi con il perché vero: 7 su 8. Passi con la conseguenza: 4 su 8. Capisco a che cosa serve: sì.

---

## c48-luce-automatica: Il sensore e l'attuatore

### 1. A che cosa serve nella vita vera
Una luce di corridoio che si accende da sola solo quando è buio e c'è qualcuno, e resta accesa 10 secondi dopo che sei passato. Serve per non sprecare luce e per non dover cercare l'interruttore.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al sensore di luce | SOLO IL COME ("è l'inizio del circuito di comando"). Perché proprio il sensore di luce per primo: LA LEZIONE NON LO DICE | NON LO SO | Sensori e attuatore |
| 2 | Sensore di luce al sensore di presenza, in serie | Servono tutte e due le condizioni insieme (buio E presenza): in serie passano solo se sono chiusi tutti e due | In parallelo la luce si accende anche di giorno, basta che passi qualcuno | Due condizioni insieme: la serie; domanda sul parallelo |
| 3 | Sensore di presenza alla bobina A1 | I contatti dei sensori sono piccoli e non possono portare il carico: comandano la bobina, che prende poca corrente | Se ci passasse tutto il carico, i sensori si rovinerebbero presto | Perché la lampada non passa dal sensore |
| 4 | Neutro alla bobina A2 | Ritorno della bobina, come nel relè dei livelli prima | La bobina non si eccita e la luce non si accende (dedotto) | Sensori e attuatore |
| 5 | Fase al contatto 1 del temporizzatore | Il circuito di potenza è separato da quello di comando: il contatto del relè è robusto e porta la corrente della lampada | Se la lampada passasse dai sensori, si rovinerebbero | Perché la lampada non passa dal sensore |
| 6 | Contatto 2 alla lampada | SOLO IL COME (la lampada riceve la fase solo a contatto chiuso) | NON LO SO | Sensori e attuatore |
| 7 | Neutro alla lampada | Ritorno della lampada: chiude il circuito di potenza | Lampada senza neutro: circuito aperto, resta spenta | Sensori e attuatore |
| 8 | Dai corrente (prova, non contato) | - | - | - |
| 9 | Prova i sensori (prova, non contato) | - | - | Il temporizzatore: perché la luce resta accesa |

### 3. Parole che non ho capito
- "libero da tensione" (spiegato con "non porta una tensione sua", ma non capisco cosa vuol dire concretamente)
- "attuatore"
- "sensore di presenza" / "sensore di luce": come sono fatti e come si alimentano
- "diseccitata" / "perde la tensione" per la bobina del temporizzatore
- i contatti "1" e "2" del temporizzatore: in un livello prima i contatti del relè erano 11, 12, 14
- "c18" (rimando a un livello che non ricordo)

### 4. Domande che mi restano
1. Se il contatto del sensore è "libero da tensione", il sensore stesso come fa a vedere il buio o la gente senza essere alimentato? Dove prende l'energia?
2. Perché il sensore di luce sta prima e quello di presenza dopo? Cambia qualcosa a scambiarli?
3. Il temporizzatore: quando la bobina perde tensione il contatto resta chiuso ancora 10 secondi. Ma come fa, se la bobina non è più alimentata? Dove sta l'energia che conta?
4. Perché 10 secondi? E come si regola il tempo?
5. Nell'allarme dopo si dice che nei sistemi veri i sensori sono NC in serie perché sia più sicuro. Qui, se un filo del sensore si stacca, la luce non si accende e nessuno se ne accorge: è accettabile?

### 5. Conteggio
Passi con il perché vero: 5 su 7. Passi con la conseguenza: 5 su 7. Capisco a che cosa serve: sì.

---

## c49-casa-plc: La casa col PLC

### 1. A che cosa serve nella vita vera
Fare "scene" in casa: con un solo tasto cambio più luci insieme (tornare a casa, cena, uscire) senza fare tanti collegamenti con i relè: basta scrivere un programma nel PLC.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Gradino Torno (I1): Set Q0 e Set Q1 | Le luci devono restare accese dopo che rilascio il tasto: Set ricorda, la bobina semplice no | Con la bobina la luce si spegne appena rilascio il tasto | Perché Set e Reset; domanda sulla bobina |
| 2 | Gradino Cena (I2): Reset Q0, Set Q1 | Set e Reset ricordano il nuovo stato (come al passo 1). Perché Set sul soggiorno e non lasciarlo com'è: LA LEZIONE NON LO DICE | Con la bobina semplice la luce non resterebbe (dedotto dal passo 1) | Perché Set e Reset; Il programma, gradino per gradino |
| 3 | Gradino Esco (I0): Reset Q0 e Reset Q1, per ultimo | Il gradino più in basso vince se due gradini scrivono la stessa uscita. Perché Esco debba vincere su Torno: SOLO IL COME ("è una scelta di chi scrive il programma") | Con Esco più in alto, premendo Torno ed Esco insieme resterebbero accese le luci (dedotto) | Il programma, gradino per gradino; seconda domanda |
| 4 | Prova le scene (prova, non contato) | - | - | - |

### 3. Parole che non ho capito
- "scena"
- "gradino" (si capisce dall'esempio, ma non è definito bene)
- "bobina" nel PLC: qui non è una bobina fisica come nel relè, ma la parola è la stessa
- "contatto" nel PLC (I1 è un contatto, ma io non vedo nessun contatto vero)
- "Set" e "Reset" (spiegati, ma dopo averli già nominati nell'intro)

### 4. Domande che mi restano
1. Perché è giusto che Esco vinca su Torno se li premo insieme? Perché non il contrario?
2. Se mi manca la corrente e poi torna, le luci tornano come erano? Il PLC "ricorda" anche allora?
3. La scena Cena lascia il soggiorno com'è, ma il gradino fa Set sul soggiorno: se il soggiorno era spento, lo accende. Quale delle due cose vuole la lezione?
4. I tasti sono collegati ai morsetti I0, I1, I2 come? Un filo di fase da ogni tasto? Non si vede.
5. Perché usare un PLC per tre luci? Quando conviene rispetto a un relè ad impulsi?

### 5. Conteggio
Passi con il perché vero: 2 su 3. Passi con la conseguenza: 3 su 3. Capisco a che cosa serve: sì.

---

## c50-allarme: Allarme fumo e allagamento

### 1. A che cosa serve nella vita vera
Un allarme che non si spegne da solo quando il fumo o l'acqua spariscono, così l'evento non rimane nascosto. Si ferma solo se qualcuno preme la tacitazione e il pericolo è finito.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase alla tacitazione (NC) | Sta in testa a tutto, così premendola tolgo la fase a sensori e memoria insieme | NON LO SO | La tacitazione |
| 2 | Tacitazione al rilevatore di fumo | SOLO IL COME | NON LO SO | I pezzi; Un allarme che si ricorda |
| 3 | Tacitazione alla sonda di allagamento | Basta uno dei due sensori per l'allarme: sono in parallelo (un O) | In serie servirebbero tutti e due (dedotto da "serie = E" del livello c48) | Un allarme che si ricorda |
| 4 | Tacitazione al contatto 11 del relè | L'autoritenuta riceve la fase dalla tacitazione, così premendola si apre anche la memoria | NON LO SO | La tacitazione |
| 5 | Rilevatore alla bobina A1 | SOLO IL COME | NON LO SO | I pezzi |
| 6 | Sonda alla bobina A1 | SOLO IL COME | NON LO SO | I pezzi |
| 7 | Contatto 14 alla bobina A1 (autoritenuta) | Il relè si tiene da solo: così la sirena non segue il sensore e l'evento non sparisce | Senza autoritenuta la sirena si ferma appena il fumo sparisce, e nessuno sa che c'è stato l'allarme | Il relè che si tiene da solo; prima domanda |
| 8 | Neutro alla bobina A2 | Ritorno della bobina | La bobina non si eccita (dedotto) | I pezzi |
| 9 | Da A1 alla sirena | La sirena prende la tensione dalla linea della bobina, così suona finché la bobina è alimentata, non finché il sensore è chiuso | Se fosse collegata al sensore, si spegnerebbe appena il fumo si dirada | Il relè che si tiene da solo; Un allarme che si ricorda |
| 10 | Neutro alla sirena | Ritorno della sirena: chiude il suo circuito | La sirena non suona (dedotto) | I pezzi |
| 11 | Dai corrente (prova, non contato) | - | - | - |
| 12 | Prova l'allarme (prova, non contato) | - | - | La tacitazione |

### 3. Parole che non ho capito
- "tacitazione" (spiegata dopo essere stata usata nel titolo)
- "eccitato" / "diseccitato" riferiti al relè
- "autoritenuta" (la conosco dal motore, ma qui la lezione dice "memoria")
- "sonda di allagamento": come funziona?
- "libero" da tensione? No, qui non c'è. Ma "in testa a tutto" non è una parola tecnica: dove sta la testa?

### 4. Domande che mi restano
1. Perché i sensori qui chiudono quando vedono il pericolo, se nei sistemi veri sono NC in serie, più sicuri? Se in questo impianto taglio un filo, l'allarme non suona e non lo sa nessuno: non è peggio?
2. Premendo la tacitazione si toglie la fase a tutto, anche ai sensori. Come faccio a sapere quale dei due sensori ha fatto scattare l'allarme?
3. Perché il contatto 11 del relè prende la fase dalla tacitazione e non direttamente dal quadro? La lezione dice solo "da qui parte l'autoritenuta".
4. Se il fumo c'è ancora, la sirena riparte quando rilascio la tacitazione: ma allora come si mette a tacere una sirena con un pericolo vero e presente? Dopo quanto tempo?
5. La sirena è collegata al punto A1: se il contatto 14 e i sensori sono sullo stesso filo, non c'è il rischio che la sirena sia alimentata anche quando il relè non è eccitato?

### 5. Conteggio
Passi con il perché vero: 7 su 10. Passi con la conseguenza: 5 su 10. Capisco a che cosa serve: sì.

---

## c38-continua: La corrente continua

### 1. A che cosa serve nella vita vera
Capire come si collegano batterie e carichi in corrente continua (batterie, caricatori, pannelli): batterie in serie per arrivare alla tensione del carico, il verso che conta per il LED, e il pericolo del corto su una batteria.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Batterie in serie: + della 1 al − della 2 | In serie le tensioni si sommano: servono 12 V per la lampada da 12 V | In parallelo ho 6 V e la lampada si accende appena | Serie: le tensioni si sommano; prima domanda |
| 2 | + libero della batteria 2 all'interruttore (rosso) | Il rosso è il positivo. Perché l'interruttore sta sul positivo e non sul negativo: LA LEZIONE NON LO DICE (SOLO IL COME) | NON LO SO | Alternata e continua |
| 3 | Interruttore alla lampada (rosso), lampada al − della batteria 1 (nero) | La corrente esce dal + e deve tornare al −: il giro si chiude | Giro aperto, la lampada non si accende (dedotto) | Alternata e continua |
| 4 | LED: anodo A all'interruttore (rosso), catodo K al − (nero) | Il LED conduce solo dall'anodo al catodo, al contrario resta spento | Al contrario resta spento; alcuni dispositivi si rompono | La polarità e il LED |
| 5 | Accendi e misura (prova, non contato) | - | - | - |

### 3. Parole che non ho capito
- "diodo"
- "anodo" / "catodo" (dice che l'anodo va verso il +, ma non perché)
- "lampada a incandescenza"
- "resistenza interna" della batteria
- "fusibile" (nel testo "qui brucia appena c'è un corto", ma nel banco non lo vedo)
- "corrente alternata che cambia verso cinquanta volte al secondo" (cinquanta volte che cosa?)

### 4. Domande che mi restano
1. Perché l'interruttore si mette sul positivo? Si poteva mettere sul negativo, come in alternata sul neutro era un errore?
2. Il LED collegato direttamente ai 12 V non si brucia? La lezione dice che "alcuni si rompono" ma non quali.
3. Perché il LED va in parallelo alla lampada e non in serie?
4. Dove sta il fusibile di cui parla la lezione? Nel banco non ce n'è.
5. Perché due batterie in parallelo "durano di più"? E a cosa serve avere 6 V per un carico da 12 V?

### 5. Conteggio
Passi con il perché vero: 3 su 4. Passi con la conseguenza: 3 su 4. Capisco a che cosa serve: sì.

---

## c39-fotovoltaico: Il pannello fotovoltaico

### 1. A che cosa serve nella vita vera
Scegliere quanti pannelli e come collegarli, in serie, perché la tensione sia dentro la finestra dell'inverter (tra 30 e 60 V), che trasforma la continua dei pannelli nei 230 V alternati della casa.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | + del pannello 1 al + dell'inverter | SOLO IL COME ("il + libero della catena va all'ingresso positivo") | NON LO SO (dal livello prima so che la polarità conta, ma non se l'inverter si rompe) | - |
| 2 | − del pannello 1 al + del pannello 2 (serie) | Le tensioni si sommano: 44 V sono dentro la finestra 30-60 V | Un pannello o due in parallelo (22 V) l'inverter non parte; tre in serie (66 V) si brucia | Serie e parallelo: quanti pannelli e come |
| 3 | − del pannello 2 al − dell'inverter | La corrente deve tornare al negativo per chiudere il giro | Giro aperto (dedotto) | - |
| 4 | Guarda la giornata (prova, non contato) | - | - | Come funziona un pannello fotovoltaico |

### 3. Parole che non ho capito
- "inverter"
- "stringa fotovoltaica" (spiegata dopo averla usata)
- "kW" nel grafico (so i watt, ma il kilowatt non c'è nei livelli prima)
- "finestra di tensione"
- "si sommano le correnti" in parallelo (non so cosa cambia per l'inverter)
- "andare in rete"

### 4. Domande che mi restano
1. Ho tre pannelli ma ne uso due in serie: l'altro che cosa fa? Posso metterlo in parallelo a un altro?
2. Perché l'inverter si brucia sopra i 60 V? E se il sole fosse più forte del "pieno sole" di 22 V?
3. Se due pannelli in serie danno 44 V ma al mattino l'inverter parte solo quando la somma arriva a 30 V, che cosa dà la corrente per avviare l'inverter?
4. Il + con il + e il − con il − dell'inverter: se li scambio, che cosa succede?
5. La lezione dice di non scendere "troppo sotto il minimo" con il sole debole: quanto è "troppo"?

### 5. Conteggio
Passi con il perché vero: 2 su 3. Passi con la conseguenza: 2 su 3. Capisco a che cosa serve: sì.

---

## c40-contatore: Il contatore e lo scambio

### 1. A che cosa serve nella vita vera
Usare in casa l'energia in eccesso dei pannelli (autoconsumo) invece di regalarla alla rete, che la paga poco: lo scaldabagno si accende da solo quando c'è eccedenza.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Gradino: MW0 minore di −2200, Set su Q0 | Lo scaldabagno consuma 2 kW: parte quando la casa immette abbastanza per alimentarlo. Perché 2,2 e non 2,0: LA LEZIONE NON LO DICE | NON LO SO | Meglio usare l'eccedenza che regalarla |
| 2 | Gradino: MW0 maggiore di 300, Reset su Q0 | Quando la casa preleva non c'è più eccedenza. Con la stessa soglia dell'accensione lo scaldabagno si spegnerebbe subito e riparirebbe di continuo | Si spegne e riparte di continuo | Due soglie anche qui |
| 3 | Guarda la giornata (prova, non contato) | - | - | - |

### 3. Parole che non ho capito
- "scambio sul posto"
- "MW0" (è un indirizzo, ma che cos'è una "parola"?)
- "contatto di confronto"
- "SCALE" e "4-20 mA" (nella sintesi, ma non nelle slide né nel banco)
- "kilowattora"
- "potenza scambiata" (con segno)
- "la pompa del serbatoio" (rimando a un livello che non ho)

### 4. Domande che mi restano
1. Perché si spegne a +300 W e non a 0? Non dovrebbe spegnersi appena la casa comincia a prelevare, come dice la lezione?
2. Perché accendere a −2200 e non a −2000, visto che lo scaldabagno consuma 2000?
3. Dopo l'accensione la potenza scambiata diventa circa −200 W: ma allora la regola per la distanza tra le due soglie qual è? La lezione non la dà qui.
4. Se passa una nuvola per un minuto, lo scaldabagno resta acceso e preleva dalla rete fino a +300 W: va bene?

### 5. Conteggio
Passi con il perché vero: 2 su 2. Passi con la conseguenza: 1 su 2. Capisco a che cosa serve: sì.

---

## c41-accumulo: L'accumulo

### 1. A che cosa serve nella vita vera
Una batteria di casa sposta l'energia dal giorno alla sera: di giorno si carica con l'eccedenza dei pannelli, la sera copre i consumi, e la casa preleva meno dalla rete.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase all'interruttore, poi alla spia "Batteria collegata", poi neutro | La spia accesa dice che la batteria è in servizio (a che cosa serve la spia). Non capisco però che cosa faccia l'interruttore alla batteria: LA LEZIONE NON LO DICE | NON LO SO | - |
| 2 | Collega la batteria (prova, non contato) | - | - | Che cosa fa la batteria |

### 3. Parole che non ho capito
- "accumulo"
- "kWh" (l'unità della batteria da 10 kWh)
- "eccedenza"
- "in servizio"
- "potenza massima della batteria" (3 kW)

### 4. Domande che mi restano
1. Che cosa collega davvero l'interruttore "Batteria collegata"? Il circuito che faccio è solo fase, interruttore, spia, neutro: la batteria dov'è?
2. Una batteria è in continua e la casa è a 230 V alternata: chi le collega? (nel livello fotovoltaico c'era l'inverter, qui non c'è.)
3. Se la sera la casa consuma più di 3 kW, che cosa succede alla differenza?
4. Quanto dura una batteria da 10 kWh? E a chi decide quando si carica e quando si scarica: un PLC o niente?
5. Con la batteria collegata si immette meno di giorno: non è un danno, se l'energia in rete la pagano?

### 5. Conteggio
Passi con il perché vero: 1 su 1. Passi con la conseguenza: 0 su 1. Capisco a che cosa serve: sì (l'accumulo; non il cablaggio del banco).

---

## c42-colonnina: La colonnina

### 1. A che cosa serve nella vita vera
Caricare l'auto senza far staccare il contatore di casa: la colonnina parte quando la casa ha margine e si ferma prima del limite (gestione del carico).

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Gradino: MW0 minore di 500, Set Q0 | Se la casa preleva poco c'è margine per 3,7 kW. Le due soglie devono stare distanti almeno quanto assorbe la colonnina | Con soglie vicine, staccata la colonnina sembra subito che ci sia margine e riparte, avanti e indietro | Distanza tra le due soglie |
| 2 | Gradino: MW0 maggiore di 4300, Reset Q0 | Stacca prima del limite di 4500 W | Il contatore scatta dopo 20 secondi e tutta la casa resta al buio | La colonnina e il limite del contatore; domanda delle 20 |
| 3 | Guarda la serata (prova, non contato) | - | - | - |

### 3. Parole che non ho capito
- "gestione del carico"
- "margine"
- "soglia" (mai definita)
- "potenza massima del contratto con il fornitore"
- "contatore che stacca"

### 4. Domande che mi restano
1. Se la sera la casa consuma più di 500 W per conto suo, la colonnina non parte mai: ma allora l'auto come si carica? L'obiettivo dice "l'auto deve comunque caricarsi".
2. Perché la soglia alta è 4300 e non 4400? Da che cosa si decide il "poco sotto"?
3. Perché il contatore aspetta 20 secondi prima di staccare? E il PLC è abbastanza veloce da intervenire prima?
4. Quando la colonnina si ferma, a che punto è la carica dell'auto: ricomincia da capo o riprende?

### 5. Conteggio
Passi con il perché vero: 2 su 2. Passi con la conseguenza: 2 su 2. Capisco a che cosa serve: sì.

---

## c53-carichi: La gestione dei carichi

### 1. A che cosa serve nella vita vera
Far stare tutti i carichi sotto il limite del contatore (6 kW) stasera, staccando prima quello che dà meno fastidio (l'auto, poi la pompa di calore) e riattaccandoli senza continui on/off.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Gradino: MW0 > 5800 E Q0 accesa, Reset Q0 | La colonnina è il carico che può aspettare, nessuno se ne accorge | Se stacco prima la pompa, perdo il riscaldamento mentre l'auto continua a caricare | La priorità; seconda domanda |
| 2 | Gradino: MW0 > 5800 E Q0 spenta (NC), Reset Q1 | Se la colonnina è già staccata e non basta, tocca alla pompa (la casa ha inerzia) | NON LO SO | La priorità; Il programma, gradino per gradino |
| 3 | MW0 < 4200 con TON 30 s (T1); poi T1 con Set Q1 | 4200 + 1500 resta sotto 5800; il ritardo evita il pendolamento | Senza ritardo i carichi si staccano e riattaccano decine di volte e i contattori si usurano | Soglie diverse; Il ritardo: il margine deve durare; prima domanda |
| 4 | MW0 < 2000 E Q1 accesa con TON 30 s (T2); poi T2 con Set Q0 | 2000 + 3700 resta sotto 5800; riparte solo con la pompa già in marcia (prima il più importante) | Con una soglia più alta, appena riattaccata la potenza supererebbe 5800 e la staccherei subito | Soglie diverse; La priorità |
| 5 | Guarda la serata (prova, non contato) | - | - | - |

### 3. Parole che non ho capito
- "distacco" / "staccare" (qui vuol dire spegnere il carico, non scollegare i fili?)
- "pendolamento"
- "inerzia" della casa
- "TON" e "T1/T2" (qui la lezione non dice come si imposta; nella sintesi del livello prima c'è)
- "contatto normalmente chiuso" riferito a Q0 nel PLC
- "scorta" sotto i 6 kW
- "potenza prelevata"

### 4. Domande che mi restano
1. Il gradino 2 legge Q0 spenta. Ma se la potenza è sopra 5800 con la colonnina accesa, il gradino 1 la spegne (scrive Q0), e nello stesso ciclo il gradino 2 vede già Q0 spenta (so che un bit scritto in alto si legge subito sotto) e la potenza non è ancora cambiata: spegne anche la pompa subito. Quindi non è "se non basta": stacca tutti e due insieme. La lezione dice il contrario.
2. Nel gradino 1 serve "E Q0 accesa"? Se la colonnina è già spenta il Reset non fa niente. Perché la condizione c'è?
3. Perché la soglia è 5800 e non 5500 o 5900? E se il forno si accende di colpo, 20 secondi bastano al PLC?
4. Riattaccando, la potenza arriva a 5700 e la soglia di distacco è 5800: restano 100 W di margine. Una piccola variazione e stacco di nuovo. Non è troppo poco?
5. Perché 30 secondi di ritardo? Cambia qualcosa con 10 o 60?
6. Cosa succede ai due temporizzatori T1 e T2 quando i carichi sono già accesi? Contano sempre?

### 5. Conteggio
Passi con il perché vero: 4 su 4. Passi con la conseguenza: 3 su 4. Capisco a che cosa serve: sì.

---

## c54-clima-zone: Il clima per zone

### 1. A che cosa serve nella vita vera
Riscaldare ogni stanza alla sua temperatura con una sola pompa di calore, senza far aprire e chiudere le valvole di continuo, senza scaldare la strada con la finestra aperta, e senza far girare la pompa a vuoto.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Soggiorno: MW0 < 20 Set Q1; MW0 > 22 Reset Q1 | Due soglie (isteresi) evitano che la valvola apra e chiuda di continuo attorno a una sola soglia | Con una sola soglia (21) apre a 20,9 e chiude a 21,1, di continuo | Il termostato con isteresi |
| 2 | Finestra: contatto I0, Reset Q1, dopo il Set | Vince l'ultimo gradino: a finestra aperta la valvola resta chiusa anche se la stanza è fredda | Se il gradino fosse prima del Set, il Set riaprirebbe la valvola a finestra aperta (dedotto) | La finestra aperta |
| 3 | Camera: come il soggiorno con MW1 e Q2 | Lo stesso perché del passo 1 (isteresi) | Lo stesso del passo 1 | Il termostato con isteresi |
| 4 | Pompa: bobina Q0 con "Q1 oppure Q2" | Parte solo se almeno una valvola è aperta, altrimenti gira a vuoto | Con tutte le valvole chiuse la pompa si surriscalda e dopo un minuto si guasta | La pompa non deve girare a vuoto; seconda domanda |
| 5 | Dai corrente (prova, non contato) | - | - | - |
| 6 | Apri la finestra (prova, non contato) | - | - | La finestra aperta |
| 7 | Guarda la serata (prova, non contato) | - | - | - |

### 3. Parole che non ho capito
- "isteresi" (spiegata solo in coda: "questa è l'isteresi")
- "valvola di zona"
- "consenso" della pompa (usata nelle domande senza definirla)
- "ingresso analogico", "MW1"
- "termostato"
- "serbatoio di c35" (rimando a un livello che non ho)

### 4. Domande che mi restano
1. MW0 è in gradi o in decimi di grado? Se dico "minore di 20" intendo 20 °C? Non è spiegato come arriva il valore.
2. A finestra aperta, nello stesso ciclo il gradino 1 fa Set e il gradino della finestra fa Reset: la valvola per un attimo si apre? Si vede sulla valvola?
3. Perché la pompa gira a vuoto e si guasta "dopo un minuto"? Cosa succede nel primo minuto?
4. La pompa riparte subito se si apre una valvola dopo che si è fermata? Non c'è un tempo minimo di pausa?

### 5. Conteggio
Passi con il perché vero: 4 su 4. Passi con la conseguenza: 4 su 4. Capisco a che cosa serve: sì.

---

## c55-sera-inverno: Una sera d'inverno

(Questo livello non ha passi del banco.)

### 1. A che cosa serve nella vita vera
Consegnare un impianto con il PLC dopo averlo guardato lavorare una serata intera, perché una regola sbagliata lascia la famiglia al buio come un filo staccato. E sapere che il PLC vede la potenza solo attraverso il misuratore, che ha un fondo scala.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| - | Nessun passo del banco | - | - | - |

### 3. Parole che non ho capito
- "il generale" (chiudi il generale: l'interruttore generale?)
- "fondo scala"
- "4-20 mA" (la tabella lo usa, ma non dice come funziona il segnale)
- "non si riarma da solo" (il contatore? come si riarma?)
- "pannello a muro"
- "consegna" (consegnare a chi, con quale controllo)

### 4. Domande che mi restano
1. Chi riarma il contatore quando stacca, e come? Se resta al buio fino a fine serata, in un caso vero cosa si fa?
2. Perché 4 mA e non 0 mA per il minimo del segnale?
3. Prima si asciuga la sonda, poi si tacita la sirena: la lezione non dice il perché in questo livello. (In c50 sì, ma non qui.)
4. Come si fa a capire "perché" è saltato il contatore, se la casa è al buio? Che cosa leggo?

### 5. Conteggio
Passi con il perché vero: 0 su 0. Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì.

---

## Tabella riassuntiva

| Livello | Passi | Perché vero | Conseguenza | Capisco a che cosa serve | Domande che restano |
|---|---|---|---|---|---|
| c47-videocitofono | 8 | 7 | 4 | sì | 6 |
| c48-luce-automatica | 7 | 5 | 5 | sì | 5 |
| c49-casa-plc | 3 | 2 | 3 | sì | 5 |
| c50-allarme | 10 | 7 | 5 | sì | 5 |
| c38-continua | 4 | 3 | 3 | sì | 5 |
| c39-fotovoltaico | 3 | 2 | 2 | sì | 5 |
| c40-contatore | 2 | 2 | 1 | sì | 4 |
| c41-accumulo | 1 | 1 | 0 | sì (non il cablaggio) | 5 |
| c42-colonnina | 2 | 2 | 2 | sì | 4 |
| c53-carichi | 4 | 4 | 3 | sì | 6 |
| c54-clima-zone | 4 | 4 | 4 | sì | 4 |
| c55-sera-inverno | 0 | 0 | 0 | sì | 4 |
