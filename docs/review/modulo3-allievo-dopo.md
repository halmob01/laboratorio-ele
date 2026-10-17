# Modulo 3 - Prova dell'allievo finto (dopo la riscrittura)

Letto come un allievo di 15-16 anni di primo anno IeFP: so solo quello che e' scritto nel file (sintesi iniziale e lezioni nell'ordine).
Quando un perche' o una conseguenza viene dai livelli precedenti dello stesso file, lo segno "(c..)". "Perche' vero" = spiega perche' si fa cosi' e non
in un altro modo, o a che cosa serve nel lavoro vero; "Dove" = titolo della slide.
Il passo "Premi Verifica" non e' contato.

---

## c21-tre-fasi: Le tre fasi

**1. A che cosa serve nella vita vera.** Nelle officine arrivano tre fasi piu' il neutro. Le lampade e le prese vanno tra una fase e il neutro (230 V), i motori
usano le tre fasi (400 V tra due fasi). Il trifase serve ai motori, che hanno una spinta sempre presente, e ai cavi, perche' la stessa potenza passa con meno corrente
per filo. Prima di collegare qualcosa a un quadro trifase l'elettricista misura le tensioni.

**2. Passo per passo**

| N | Passo | Perche' si fa cosi' | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|-------|---------------------|--------------------------------|-------------------------|
| 1 | La fase L1 a un morsetto della lampada | SOLO IL COME ("la fase porta la tensione, come in casa") | Il circuito resta aperto e la lampada non si accende (dai livelli precedenti; qui non e' detto) | Perche' ogni filo e ogni misura |
| 2 | Il neutro all'altro morsetto | Ogni carico ha bisogno di fase e neutro; il neutro e' il ritorno, e una lampada da 230 V non va tra due fasi | Su L2 al posto del neutro la lampada riceve 400 V e si brucia | Perche' ogni filo e ogni misura; domanda finale |
| 3 | Misura L1-neutro: 230 V | Per sapere che la fase arriva e che lampade e prese si possono alimentare | Con 0 V quella fase manca | Perche' ogni filo e ogni misura |
| 4 | Misura L1-L2: 400 V | A che cosa serve: e' la tensione dei motori, e il pericolo tra due fasi e' piu' grande; nel lavoro vero si misurano tutte le coppie. Ma perche' si misura prima di collegare, non lo capisco bene | NON LO SO (che cosa faccio se leggo un valore diverso?) | Perche' ogni filo e ogni misura |

**3. Parole che non ho capito**
- "sfasate": la lezione dice solo che le fasi "non spingono tutte nello stesso momento"; non so cosa significhi davvero.
- "circa 1,73 volte 230": da dove viene il numero non e' scritto.
- "monofase" e "kW": usati nel calcolo (14 A contro 43 A) senza spiegare; "per fase" idem.
- "carico": lo conosco dai livelli precedenti, ma qui e' dato per scontato.

**4. Domande che mi restano**
1. Se misuro e non trovo 230 V (o 400 V) che cosa faccio, e cosa vuol dire?
2. Come si arriva a 14 A per fase e 43 A in monofase? Il calcolo non c'e'.
3. Perche' proprio 1,73 e non 2, visto che le fasi sono due?

**5. Conteggio.** Passi con il perche' vero: 3 su 4. Passi con la conseguenza: 3 su 4. Capisco a che cosa serve: si'.

---

## c12-motore: Il motore trifase

**1. A che cosa serve nella vita vera.** Quasi tutto quello che si muove in officina (nastri, pompe, ventilatori, trapani, compressori) ha un motore trifase a 400 V. Il salvamotore
e' il suo interruttore e lo protegge; la terra serve a non far passare la corrente in chi tocca la carcassa; due fasi scambiate fanno girare al contrario, utile per andare avanti e indietro.

**2. Passo per passo**

| N | Passo | Perche' si fa cosi' | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|-------|---------------------|--------------------------------|-------------------------|
| 1 | L1 a 1, L2 a 3, L3 a 5 del salvamotore | La rete entra nel salvamotore, cosi' aprendolo tutto quello che viene dopo resta senza tensione | NON LO SO (se scambio l'ordine in ingresso la lezione non lo dice) | Perche' ogni filo |
| 2 | Da 2, 4, 6 a U, V, W nello stesso ordine | L'ordine fa girare il motore in avanti; a che serve scambiarle: andare avanti e indietro | Con due fasi scambiate gira al contrario | Perche' ogni filo; Il senso di rotazione |
| 3 | La terra al PE del motore | Se un avvolgimento tocca la carcassa, la corrente va a terra e non nella persona | Implicito: senza terra la corrente passerebbe nella persona che tocca il motore (dedotto, non scritto cosi') | Il motore; Perche' ogni filo |
| 4 | Chiudi il salvamotore | Si chiude per ultimo, solo per provare: prima si cabla senza tensione | Cablare in tensione e' pericoloso e vale una stella di sicurezza in meno | Il salvamotore e il lavoro senza tensione |

**3. Parole che non ho capito**
- "campo magnetico rotante": spiegato con la calamita che gira, ma resta vago.
- "ronza": spiegato (rumore sordo), ma non perche' succede.
- "polo": "tre poli" usato prima di dire cosa e' (si capisce dopo: tre interruttori).
- "scatta se la corrente e' troppo alta": quanto e' "troppo alta"?
- "sezionamento"/"a monte": "a monte" e' spiegato; "interruttore del quadro a monte" resta un po' confuso (apro il salvamotore o quello del quadro?).

**4. Domande che mi restano**
1. Perche' il motore non ha bisogno del neutro?
2. Perche' con due sole fasi il motore ronza e si scalda?
3. Se il salvamotore da aperto lascia in tensione i morsetti in alto, come faccio a lavorarci in sicurezza (quale interruttore apro)?
4. Quanto e' "corrente troppo alta" per il salvamotore, e in che differisce dal magnetotermico?
5. Se per errore scambio due fasi, me ne accorgo solo guardando girare il motore?

**5. Conteggio.** Passi con il perche' vero: 4 su 4. Passi con la conseguenza: 3 su 4 (il passo 1 ha il perche' ma non la conseguenza). Capisco a che cosa serve: si'.

---

## c22-teleruttore: Il teleruttore

**1. A che cosa serve nella vita vera.** Un pulsante sulla macchina non regge la corrente di un motore a 400 V e non voglio chi lavora con 400 V sotto le dita. Il teleruttore (contattore) e'
un relè grande: il pulsante porta solo la piccola corrente della bobina e i contatti di potenza portano quella del motore; si puo' comandare da lontano.

**2. Passo per passo**

| N | Passo | Perche' si fa cosi' | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|-------|---------------------|--------------------------------|-------------------------|
| 1 | Con il salvamotore aperto, L1 L2 L3 a 1, 3, 5 | Si cabla senza tensione; il lato di ingresso resta in tensione ma conta tenere aperto il sezionamento | Cablare con il sezionamento chiuso e' pericoloso: una stella di sicurezza in meno | Si lavora senza tensione |
| 2 | Da 2, 4, 6 del salvamotore a 1, 3, 5 del teleruttore | La potenza passa prima dalla protezione, poi dai contatti che accendono il motore; il contatto e' solo un interruttore e la tensione gliela porto io | Il contatto non avrebbe tensione da dare al motore (dedotto) | I pezzi; Perche' ogni filo |
| 3 | Da 2, 4, 6 del teleruttore a U, V, W | Stesso ordine del motore: gira in avanti | Con due fasi scambiate gira al contrario (c12) | Perche' ogni filo |
| 4 | La terra al PE del motore | "Come sempre"; il motivo e' in c12 (corrente a terra e non nella persona) | Come in c12; qui non e' ripetuto | Perche' ogni filo |
| 5 | Una fase a valle del salvamotore (morsetto 2) al morsetto 3 del pulsante | Aprendo il salvamotore si spegne anche il comando; va bene una fase qualunque | NON LO SO (cosa succede se la prendo a monte) | Perche' ogni filo; Sintesi |
| 6 | Dal morsetto 4 del pulsante ad A1 | SOLO IL COME ("premendo, la fase arriva alla bobina"; NA chiude solo finche' premi) | NON LO SO | Perche' ogni filo |
| 7 | Da A2 al neutro | La bobina e' un carico, senza ritorno non si eccita | Su un'altra fase riceverebbe 400 V e si brucia | Perche' ogni filo; domanda finale |
| 8 | Prova: chiudi il salvamotore, tieni premuto Marcia | Si chiude per ultimo, solo per provare | Se rilascio, il motore si ferma (e' proprio il comportamento voluto) | I pezzi; Sintesi |

**3. Parole che non ho capito**
- "sezionamento": usato come se lo sapessi ("l'impianto ha un sezionamento: il salvamotore"); lo capisco solo dal contesto.
- "NA" nella tabella: usato qui ("contatto NA") ma spiegato bene solo in c13.
- "contatto ausiliario": "piccolo, servira' nel prossimo livello", ma non so cosa fa.
- "primario/secondario" e "24 V": "trasformatore come quello del campanello" rimanda a un livello che non ricordo bene.
- "potenza": uso un po' vago (potenza = il circuito grande?).

**4. Domande che mi restano**
1. Quanti ampere regge la bobina rispetto al motore? "Un pulsante non la regge" ma di quanto stiamo parlando?
2. Cosa succede se prendo la fase del comando a monte del salvamotore invece che a valle?
3. Perche' il pulsante va su "una fase qualunque": e il neutro dove lo prendo?
4. A cosa serve davvero il contatto 13-14 (la lezione lo rimanda)?

**5. Conteggio.** Passi con il perche' vero: 7 su 8. Passi con la conseguenza: 6 su 8. Capisco a che cosa serve: si'.

---

## c13-marcia-arresto: Marcia e arresto

**1. A che cosa serve nella vita vera.** Una macchina vera parte con un colpo su Marcia e si ferma con un colpo su Arresto, e una spia dice da lontano che e' in marcia. L'autoritenuta fa
ricordare al contattore di restare chiuso; se manca la corrente la macchina non riparte da sola, perche' potrebbe ferire chi la crede spenta.

**2. Passo per passo**

| N | Passo | Perche' si fa cosi' | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|-------|---------------------|--------------------------------|-------------------------|
| 1 | Apri il salvamotore | Cosi' i morsetti a valle sono senza tensione mentre cabli | Una stella di sicurezza in meno / pericolo (c12) | Passi del banco; c12 |
| 2 | Le tre fasi ai morsetti 1, 3, 5 del salvamotore | La rete entra nel salvamotore (c12); qui non ripetuto | NON LO SO | "La potenza e' come nel livello del teleruttore" |
| 3 | Dal salvamotore al contattore (2-1, 4-3, 6-5) | La potenza passa prima dalla protezione, poi dai contatti (c22) | NON LO SO | - |
| 4 | Dal contattore al motore U, V, W | Ordine giusto: in avanti (c12) | Due fasi scambiate: gira al contrario (c12) | - |
| 5 | La terra al PE | Corrente a terra e non nella persona (c12) | Come in c12 | - |
| 6 | Il comando passa dall'arresto (da 2 del salvamotore a 1 dell'arresto) | L'arresto e' il primo, cosi' interrompe tutte le strade che vengono dopo; aprendo il salvamotore si spegne anche il comando | Se il 13 prendesse la fase prima dell'arresto lo scavalcherebbe e Arresto non fermerebbe piu' il motore | Perche' ogni filo del comando |
| 7 | Poi dalla marcia (2 dell'arresto a 3 della marcia) | La fase arriva alla marcia solo se l'arresto e' chiuso: l'arresto vince sempre | NON LO SO | Perche' ogni filo del comando; Sintesi |
| 8 | Alla bobina (4 della marcia ad A1) | SOLO IL COME ("premendo Marcia la bobina si eccita") | NON LO SO | Perche' ogni filo del comando |
| 9 | Il neutro ad A2 | La bobina e' un carico (dai livelli precedenti: senza ritorno non si eccita) | Senza ritorno non si eccita (c22); su un'altra fase brucia (c22) | Perche' ogni filo del comando |
| 10 | Autoritenuta: 3 della marcia al 13 e 14 al 4 della marcia | Il pulsante alimenta la bobina solo finche' lo premi: con il 13-14 in parallelo il contattore si tiene da solo | Senza, il motore gira solo con il pulsante premuto; se il 13 e' prima dell'arresto, Arresto non ferma piu' | L'autoritenuta |
| 11 | La spia di marcia (A1 e neutro) | Si accende quando la bobina e' alimentata, cioe' quando il motore e' in marcia: segnala da lontano | NON LO SO | Due circuiti; Perche' ogni filo del comando |
| 12 | Prova: tieni premuto Marcia e rilascia | Verifica che il contattore si tenga da solo | Se si ferma al rilascio, manca l'autoritenuta (dedotto) | L'autoritenuta |

**3. Parole che non ho capito**
- "NA/NC": spiegati nei pezzi, ma c22 li usava prima.
- "diseccita": spiegato tra parentesi, ok.
- "poli di potenza": ho capito dal contesto (i tre contatti).
- "normalmente": spiegato (a riposo).

**4. Domande che mi restano**
1. Perche' la spia va su A1 e non su un contatto del contattore? Se la spia si brucia, cosa cambia?
2. I passi 2-5 sono gli stessi di prima: perche' devo rifarli ancora, c'e' qualcosa di diverso?
3. Se premo Arresto e Marcia insieme, vince davvero l'arresto? E' scritto solo nella sintesi.

**5. Conteggio.** Passi con il perche' vero: 11 su 12. Passi con la conseguenza: 7 su 12. Capisco a che cosa serve: si'.

---

## c14-termico: Il relè termico

**1. A che cosa serve nella vita vera.** Se il motore fa piu' fatica del normale (nastro con un pacco incastrato, pompa con un cuscinetto duro) assorbe piu' corrente per minuti, si scalda e si brucia. Il termico
si scalda con la corrente del motore e scatta dopo un po', fermando il motore attraverso il comando.

**2. Passo per passo**

| N | Passo | Perche' si fa cosi' | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|-------|---------------------|--------------------------------|-------------------------|
| 1 | Apri il salvamotore | Morsetti a valle senza tensione mentre cabli | Pericolo / una stella in meno (c12) | Passi del banco |
| 2 | Il termico in serie al motore (contattore -> termico -> motore) | Deve sentire tutta la corrente del motore, quindi sta dove passa | Non sentirebbe la corrente del motore (dedotto) | I pezzi; Come ferma il motore |
| 3 | Il comando passa dal termico (2 del salvamotore al 95) | Il termico ferma il motore attraverso il comando; il termico e' il primo contatto | Se il 95-96 non e' nel comando, il termico scatta ma il motore gira e si brucia | Come ferma il motore (Attenzione) |
| 4 | Dal 96 all'1 dell'arresto | Il 95-96 sta prima dell'arresto cosi' interrompe tutte le strade, anche l'autoritenuta | Se non interrompe l'autoritenuta il motore resterebbe in marcia (dedotto) | Come ferma il motore |
| 5 | Prova la marcia: "il resto e' come nel livello precedente" | SOLO IL COME | NON LO SO | Passi del banco |

**3. Parole che non ho capito**
- "Reset": lo uso come un pulsante, non so dove sta ne' come e' fatto.
- "tarare"/"regolare": non si dice come si imposta il termico.
- "polo": usato come in c12.
- "cuscinetto": parola non spiegata (l'esempio si capisce lo stesso).

**4. Domande che mi restano**
1. In c12 il salvamotore "scatta se la corrente e' troppo alta", qui "interviene subito sul cortocircuito, per il sovraccarico c'e' il termico": a che corrente scatta il salvamotore?
2. Come sa il termico di non scattare all'avvio? "Lento apposta", ma quanto?
3. Quanto devo aspettare perche' il motore si raffreddi prima del Reset?
4. Perche' il termico sta dopo il contattore e non prima, se deve solo sentire la corrente?
5. Perche' il 95-96 sta prima dell'arresto mentre nel nastro il finecorsa sta dopo la marcia?

**5. Conteggio.** Passi con il perche' vero: 4 su 5. Passi con la conseguenza: 4 su 5. Capisco a che cosa serve: si'.

---

## c15-inversione: Inversione di marcia

**1. A che cosa serve nella vita vera.** Far girare lo stesso motore nei due sensi (nastro che riporta indietro i pacchi, cancello, carroponte) con due pulsanti. Due contattori: KM1 in ordine, KM2 con due
fasi scambiate. L'interblocco evita che si chiudano insieme (cortocircuito tra due fasi).

**2. Passo per passo** (i passi del banco sono solo quattro e raggruppano molti fili)

| N | Passo | Perche' si fa cosi' | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|-------|---------------------|--------------------------------|-------------------------|
| 1 | Apri il salvamotore | Morsetti a valle senza tensione mentre cabli | Pericolo / una stella in meno (c12) | Passi del banco |
| 2 | KM1 collega il motore con le fasi in ordine | E' il senso Avanti | Con due fasi scambiate sarebbe il senso Indietro (c12) | I pezzi; Perche' ogni filo |
| 3 | KM2 con due fasi scambiate | E' il senso Indietro | Senza scambio i due pulsanti farebbero girare il motore nello stesso senso | Perche' ogni filo |
| 4 | L'interblocco: le bobine passano dai contatti NC 21-22 dell'altro contattore | Se KM1 e KM2 si chiudessero insieme, due fasi si toccherebbero: corto, scintille, contatti bruciati o incollati; e invertire un motore lanciato lo frena di colpo | Senza interblocco il circuito sembra funzionare ma premendo le due marce insieme c'e' un cortocircuito | L'interblocco; domanda finale |

**3. Parole che non ho capito**
- "interblocco": spiegato ("blocco reciproco"), ok.
- "KM1/KM2": spiegato (sigla dei contattori).
- "contatti incollati": non so come un contatto si incolla.
- "frenarlo di colpo con una corrente fortissima": non capisco perche' frenare vuol dire corrente forte.

**4. Domande che mi restano**
1. Il salvamotore scatta "subito sul cortocircuito" (c14), ma qui dice che prima passa "per un attimo una corrente enorme": quanto dura quell'attimo e perche' non basta?
2. Perche' invertire un motore lanciato frena di colpo e che cosa si rompe sulla macchina?
3. Il banco chiede solo quattro passi: gli altri fili (terra, arresto, 13-14, neutro) li devo fare io o sono gia' messi?
4. Il contatto 21 di KM2 va al morsetto 4 o 3 di Avanti? La lezione dice solo "da Avanti".

**5. Conteggio.** Passi con il perche' vero: 4 su 4. Passi con la conseguenza: 4 su 4. Capisco a che cosa serve: si'.

---

## c16-nastro: Il nastro trasportatore

**1. A che cosa serve nella vita vera.** Un nastro deve fermarsi da solo quando il pacco arriva in fondo (finecorsa) e chiunque deve poterlo fermare subito in caso di pericolo (fungo di emergenza). Tutti
i contatti che fermano sono NC in serie, cosi' un filo staccato ferma la macchina invece di lasciarla andare, e dopo un'emergenza la macchina non riparte da sola.

**2. Passo per passo**

| N | Passo | Perche' si fa cosi' | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|-------|---------------------|--------------------------------|-------------------------|
| 1 | Apri il salvamotore | Morsetti a valle senza tensione mentre cabli | Pericolo / una stella in meno (c12) | Passi del banco |
| 2 | Il fungo (NC) nel comando, dopo il termico | Le protezioni vengono per prime; premuto apre il comando e toglie le tre fasi al motore; e' NC e si blocca aperto per non far riavviare mentre il pericolo c'e' | Se fosse NA o fuori serie un guasto o la mancata apertura non ferma la macchina (dedotto da "Perche' i contatti NC") | I pezzi; Perche' i contatti NC; Perche' ogni contatto sta li' |
| 3 | Il finecorsa NC dopo la marcia, davanti alla bobina | Cosi' interrompe sia la marcia sia l'autoritenuta; NC perche' un filo staccato ferma | Con il contatto NA il comando e' interrotto all'inizio: il nastro non parte | Perche' ogni contatto sta li'; Perche' i contatti NC |

**3. Parole che non ho capito**
- "fungo": spiegato (pulsante rosso su fondo giallo).
- "finecorsa": spiegato.
- "sbloccare a mano": non so come si sblocca il fungo.

**4. Domande che mi restano**
1. Perche' il finecorsa sta davanti alla bobina e non all'inizio con gli altri contatti che fermano?
2. Perche' il termico e' il primo, poi il fungo, poi l'arresto: l'ordine tra loro conta o e' indifferente?
3. Se il pacco e' ancora sul finecorsa e premo Marcia, cosa succede?

**5. Conteggio.** Passi con il perche' vero: 3 su 3. Passi con la conseguenza: 3 su 3. Capisco a che cosa serve: si'.

---

## c52-lavori-sicurezza: Lavori in sicurezza

**1. A che cosa serve nella vita vera.** A lavorare su un impianto senza prendere la scossa: la tensione non si vede, quindi si segue sempre la stessa procedura (sezionare, bloccare con il lucchetto, verificare
l'assenza di tensione dopo aver provato lo strumento, lavorare, rimettere in servizio). Poi si aggiunge il fungo in serie al comando.

**2. Passo per passo**

| N | Passo | Perche' si fa cosi' | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|-------|---------------------|--------------------------------|-------------------------|
| 1 | Apri il salvamotore | Si toglie la tensione ai fili su cui lavori: un filo in tensione sembra uguale a uno spento | Lavorare in tensione: pochi decimi di secondo bastano per un danno grave | Perche' si lavora fuori tensione; La procedura |
| 2 | Metti il lucchetto | Un interruttore aperto si richiude con un dito; il lucchetto lo impedisce e avvisa gli altri | Un collega lo richiude e la tensione torna sui fili che hai in mano | Il lucchetto; domanda |
| 3 | Prova lo strumento a monte (230 V) | Un multimetro con batteria scarica o puntale rotto legge zero anche su un filo in tensione | Mi dice che e' tutto a posto quando non lo e' | Verificare l'assenza di tensione; domanda |
| 4 | Verifica la prima fase (morsetto 2, 0 V) | Ti accorgi di un altro circuito o di un errore; un impianto non verificato va considerato in tensione | Un impianto "spento" non verificato resta in tensione (Attenzione); cosa faccio se leggo 230 V non e' detto | La procedura; Verificare |
| 5 | Verifica la seconda fase (4, 0 V) | Una sola fase in tensione basta per la scossa | Scossa | Verificare (Attenzione) |
| 6 | Verifica la terza fase (6, 0 V) | Stesso motivo del passo 5 (tutte le fasi) | Scossa | Verificare (Attenzione) |
| 7 | Dal 2 del salvamotore all'1 del fungo, in rosso | Il fungo e' il primo contatto del comando: le sicurezze vengono per prime | NON LO SO | Il lavoro: aggiungere il fungo |
| 8 | Dal 2 del fungo all'1 dell'arresto | Sono in serie: se un contatto qualunque si apre, la bobina perde la tensione | Se non fosse in serie, premere il fungo non fermerebbe il nastro (dedotto, c24) | Il lavoro; Sintesi |
| 9 | Togli il lucchetto e collauda: Marcia, poi il fungo | Il lucchetto lo toglie solo chi l'ha messo; si prova che il fungo ferma | NON LO SO (cosa succede se non collaudo) | Il lucchetto; La procedura (passo 5) |

**3. Parole che non ho capito**
- "sezionare": spiegato nella tabella (apri l'interruttore a monte), ma prima e' usato come se lo sapessi.
- "bassa tensione (fino a 1000 V)" e "bassissima tensione": spiegati solo in una parentesi.
- "conduttore": usato al posto di "filo".
- "collaudo": spiegato davvero solo in c24.
- "strumento adatto" nel lavoro vero: quale?

**4. Domande che mi restano**
1. Il banco dice che "mancano due fili", ma il filo dal 2 del salvamotore all'1 dell'arresto c'e' gia': lo devo togliere?
2. Se a valle leggo 230 V invece di 0 V cosa faccio?
3. Perche' si misura solo con il neutro? Nel lavoro vero tra le fasi e verso terra con quale strumento?
4. Se il collega che ha messo il lucchetto non c'e', chi lo toglie?
5. Se la prova dello strumento non da' 230 V, cosa vuol dire e come procedo?

**5. Conteggio.** Passi con il perche' vero: 9 su 9. Passi con la conseguenza: 7 su 9. Capisco a che cosa serve: si'.

---

## c24-officina: L'officina

**1. A che cosa serve nella vita vera.** A collaudare un impianto prima di consegnarlo: si provano tutte le funzioni, comprese quelle che servono di rado ma salvano persone e macchina (arresto, emergenza,
finecorsa, termico), una alla volta, e se succede altro di quello atteso si e' trovato il guasto.

**2. Passo per passo.** Nel file la sezione "Passi del banco" e' vuota: non c'e' nessun passo da elencare.

| N | Passo | Perche' si fa cosi' | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|-------|---------------------|--------------------------------|-------------------------|
| - | (nessun passo elencato) | - | - | - |

**3. Parole che non ho capito**
- "tarato troppo basso" (nella domanda): non so cosa voglia dire tarare.
- "collaudo": si capisce dal testo.
- "giro della bobina": espressione detta senza spiegare ("non sta in serie nel giro della bobina").

**4. Domande che mi restano**
1. Quali guasti posso trovare e come li riconosco dal comportamento?
2. Perche' si prova proprio in quell'ordine (marcia, arresto, emergenza, finecorsa, sovraccarico)?
3. Cosa devo fare esattamente sul banco? Non ci sono i passi.
4. Per correggere devo aprire il salvamotore e mettere il lucchetto come in c52, o basta aprire?

**5. Conteggio.** Passi con il perche' vero: 0 su 0. Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: si'.

---

## Tabella riassuntiva

| livello | passi | perche' vero | conseguenza | capisco a che cosa serve | domande che restano |
|---------|-------|--------------|-------------|--------------------------|---------------------|
| c21-tre-fasi | 4 | 3 | 3 | si' | 3 |
| c12-motore | 4 | 4 | 3 | si' | 5 |
| c22-teleruttore | 8 | 7 | 6 | si' | 4 |
| c13-marcia-arresto | 12 | 11 | 7 | si' | 3 |
| c14-termico | 5 | 4 | 4 | si' | 5 |
| c15-inversione | 4 | 4 | 4 | si' | 4 |
| c16-nastro | 3 | 3 | 3 | si' | 3 |
| c52-lavori-sicurezza | 9 | 9 | 7 | si' | 5 |
| c24-officina | 0 | 0 | 0 | si' | 4 |
