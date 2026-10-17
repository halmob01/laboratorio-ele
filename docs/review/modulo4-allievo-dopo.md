# Modulo 4: prova dell'allievo finto (dopo la riscrittura)

Letti in ordine: c28, c29, c30, c31, c32, c46. Sapevo solo la sintesi dei livelli precedenti e il testo delle lezioni.

---

## c28 Stella-triangolo

### 1. A che cosa serve nella vita vera
Serve a far partire un motore grande (compressore, pompa, ventilatore) senza dare uno strappo alla linea. All'avviamento il motore assorbe da cinque a sette volte la corrente di lavoro, le luci calano e le protezioni possono scattare. Si parte con tensione ridotta (stella) e poi si passa alla tensione piena (triangolo). Va bene solo per macchine che partono leggere.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Apri il salvamotore | Si cabla senza tensione: collegare fili in tensione è pericoloso (lo sapevo già) | Si lavora su fili in tensione, pericoloso | Il circuito di potenza è già fatto ("Si cabla con il salvamotore aperto, come sempre") |
| 2 | Il comando passa dall'arresto (da valle del salvamotore) | L'arresto ferma tutto e sta prima di marcia. La fase si prende a valle del salvamotore così aprendolo si spegne anche il comando (sapevo già) | Se si stacca un filo dell'arresto il motore si ferma (sapevo già). Per un collegamento sbagliato la lezione non dice niente | Perché ogni filo del comando |
| 3 | Poi dalla marcia | L'arresto sta prima della marcia così Arresto vince sempre (sapevo già) | NON LO SO (cosa succede se li scambio) | Perché ogni filo del comando |
| 4 | Alla bobina di KM1, A2 al neutro | La bobina è un carico: senza ritorno quel contattore non chiude | Il contattore non chiude | Perché ogni filo del comando (riga A2) |
| 5 | L'autoritenuta di KM1 (13-14 in parallelo alla marcia) | Il pulsante dà solo l'impulso, a tenere è il contattore | Senza, il motore gira solo mentre tengo premuto (sapevo già dal teleruttore) | Perché ogni filo del comando (riga Arresto, Marcia) |
| 6 | KT: A1 e 15 sul punto di A1 di KM1, A2 al neutro | KT deve partire quando la linea si chiude e azzerarsi con Arresto, così ogni avviamento comincia in stella | NON LO SO | Perché ogni filo del comando (riga KT A1 e 15) |
| 7 | La stella KM2: 16 di KT, NC di KM3, bobina KM2 | Il 16 è chiuso prima che scada il tempo e va alla stella; sul 18 il motore partirebbe a triangolo con tutto lo strappo. Il NC di KM3 è l'interblocco: se un contattore resta incollato l'altro non chiude | Partenza a triangolo con lo strappo; se manca il NC e un contattore è incollato, cortocircuito | Perché ogni filo del comando (righe KT 16 e 21-22) |
| 8 | Il triangolo KM3: 18 di KT, NC di KM2, bobina KM3 | Il 18 si chiude dopo il ritardo: la stella si apre e il triangolo si chiude. NC di KM2 per lo stesso interblocco | Se KM2 è incollato e manca il NC, KM3 chiuderebbe in corto con la stella | Perché ogni filo del comando (righe KT 18 e 21-22) |
| 9 | Prova l'avviamento | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "400/690 V" sulla targa: il 690 non è mai spiegato, so solo che ogni avvolgimento vuole 400 V.
- "Contatto di scambio": è spiegato solo dopo, elencando 15, 16 e 18.
- "A monte" (protezioni a monte): non so a monte di che cosa.
- "Sistema di avvolgimenti/centro stella": capito, ma non so perché unire i tre capi riduce a 230 V.

### 4. Domande che mi restano
1. Perché a stella ogni avvolgimento prende 230 V e a triangolo 400 V? Lo dice come fatto, non capisco dal disegno.
2. Perché è proprio il passaggio a triangolo che non dà lo strappo, se il motore a triangolo assorbe di più?
3. Perché la stella va bene per pompe e ventilatori ma non per altre macchine? ("partono leggere" non è spiegato).
4. Perché KT prende l'alimentazione dallo stesso punto della bobina di KM1 e non direttamente dalla marcia?
5. Quando KM2 si apre e KM3 si chiude, il motore resta per un attimo senza collegamento? La lezione non lo dice.

### 5. Conteggio
Passi con il perché vero: 8 su 9. Passi con la conseguenza: 6 su 9. Capisco a che cosa serve: sì.

---

## c29 Dal relè al PLC

### 1. A che cosa serve nella vita vera
Il PLC serve a cambiare il comportamento di una macchina riscrivendo un programma, senza ricablare. Lo trovo in cancelli, ascensori, macchine di officina. Il contattore resta, perché le uscite del PLC reggono pochi ampere.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Apri il salvamotore | Collegare fili in tensione è pericoloso | Si cabla in tensione, pericoloso | Perché il PLC ha la sua alimentazione (aprendolo si spegne anche il PLC mentre lavori) |
| 2 | Alimenta il PLC (fase a valle del salvamotore su A1, A2 al neutro) | È un computer e per funzionare ha bisogno di corrente, come una bobina. A valle del salvamotore per spegnerlo quando lavori | Se manca l'alimentazione il programma si ferma, le uscite si aprono e la macchina si ferma | Perché il PLC ha la sua alimentazione |
| 3 | Arresto all'ingresso I0 | L'arresto è NC: a riposo porta tensione e I0 vale 1; se un filo si stacca I0 va a 0 e la macchina va nello stato sicuro | Un filo staccato porta la macchina a fermarsi | Gli ingressi; Domanda sul filo staccato |
| 4 | Marcia all'ingresso I1 | Un ingresso vale 1 solo se c'è tensione tra lui e IC, quindi il pulsante deve portare la fase | NON LO SO (la lezione non dice cosa succede con il filo di I1 staccato) | Gli ingressi: come il PLC vede un pulsante |
| 5 | Il comune IC al neutro | Un ingresso misura tensione e serve un secondo punto di riferimento, il ritorno | Nessun ingresso arriva mai a 1, anche premendo | Gli ingressi; Domanda su IC |
| 6 | Uscita Q0 al contattore (fase in Q0A, Q0B alla bobina, A2 al neutro) | L'uscita è solo un contatto che il programma chiude: la tensione la porto io. Il contattore serve perché l'uscita regge pochi ampere | Con il contatto aperto la bobina non riceve niente | Le uscite: il PLC non dà corrente; Una scatola con tre parti |
| 7 | Uscita Q1 alla spia | Dice all'operatore, anche da lontano, che il motore è in marcia | NON LO SO | Le uscite: il PLC non dà corrente |
| 8 | Prova la marcia | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Gradino": usato nella tabella iniziale ("un gradino del programma") prima di essere spiegato.
- "Ladder": nominato, spiegato solo come "somiglia a uno schema a relè".
- "Scansione" e "bit": spiegati più avanti di quando compaiono nel nome dei paragrafi.
- "Relè" per le uscite: so cos'è un relè, ma non capisco come sia "piccolo".

### 4. Domande che mi restano
1. Perché gli ingressi lavorano a 230 V? Non rischia di rompersi un sensore?
2. Perché l'arresto lo mettiamo su un ingresso del PLC e non in serie alla bobina come nei fili?
3. Se il PLC si blocca con Q0 chiuso, il motore si ferma?
4. Perché si alimenta il PLC a valle del salvamotore e non direttamente dal quadro, se poi perde il programma?

### 5. Conteggio
Passi con il perché vero: 7 su 8. Passi con la conseguenza: 5 su 8. Capisco a che cosa serve: sì.

---

## c30 Ladder: l'autoritenuta

### 1. A che cosa serve nella vita vera
Il ladder serve a scrivere il comportamento della macchina in forma di schema a scala, simile a quello a relè, e a cambiarlo senza toccare i fili. L'elettricista lo legge per capire cosa fa la macchina.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Il gradino del motore: Q0, Marcia (I1) in parallelo con Q0, in serie Arresto (I0) | Marcia è un impulso: appena torna a 0 serve Q0 a tenere vero il gradino. L'arresto in serie ferma. Il contatto di I0 è NA perché a riposo I0 vale 1 | Senza Q0 in parallelo il motore parte solo finché tengo premuto Marcia. Con I0 messo NC il motore non parte a riposo e con un filo staccato non si ferma più | Costruire il gradino un pezzo alla volta; Due NC diversi |
| 2 | Il gradino della spia: contatto Q0, bobina Q1 | Deve dire "motore in marcia", e ogni gradino ha una sola bobina | Sul contatto di Marcia si accenderebbe solo finché premo | Costruire il gradino un pezzo alla volta |
| 3 | Prova la marcia | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Montanti": spiegato, ma non capisco perché a sinistra fase e a destra neutro in un programma, se non c'è un filo.
- "Bit interno, casella di memoria": non lo uso in questo livello e non so a che serva.
- "Fronte": non compare qui.

### 4. Domande che mi restano
1. Se la bobina è solo un bit, perché si dice che "passa la corrente" nel gradino? Solo un modo di dire?
2. L'ordine dei contatti nel gradino (prima il parallelo o prima l'arresto) cambia qualcosa?
3. Se premo Marcia e Arresto insieme, quale vince nel ladder? In c29 lo dice, qui lo devo dedurre.

### 5. Conteggio
Passi con il perché vero: 2 su 3. Passi con la conseguenza: 2 su 3. Capisco a che cosa serve: sì.

---

## c31 Il temporizzatore nel PLC

### 1. A che cosa serve nella vita vera
Serve a fare lo stesso avviamento stella-triangolo di c28 senza il temporizzatore KT a parte: il tempo si conta nel programma. Il PLC comanda tutti e tre i contattori.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Il temporizzatore: contatto Q0, TON di 6 s | Il conteggio deve partire quando il motore è acceso, e deve azzerarsi quando cade la condizione, così dopo un arresto il motore riparte in stella con il tempo pieno | NON LO SO (per una condizione sbagliata) | Il temporizzatore TON; I tre gradini |
| 2 | La stella: Q0 con T1 NC, bobina Q1 | La stella vale solo finché il tempo non è scaduto, perché a stella il motore ha poca coppia | Se dimentico T1, la stella resta accesa anche dopo i 6 s: il motore non arriva mai a piena potenza | Stella e triangolo non insieme (Attenzione); Domanda sul gradino della stella |
| 3 | Il triangolo: Q0 con T1 NA, bobina Q2 | Passa a triangolo quando il tempo è scaduto e non si sovrappone alla stella (T1 opposto nei due gradini) | NON LO SO per T1 sbagliato nel triangolo. Per la sovrapposizione: i fili evitano il corto | Stella e triangolo non insieme |
| 4 | Prova l'avviamento | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "TON": spiegato come "ritardo all'accensione", ma il nome della sigla non lo capisco.
- "Condizione in ingresso" del TON: l'ho capito solo dalla tabella.
- "Normalmente chiuso su un bit": l'ho capito da c30, qui non è ripreso.

### 4. Domande che mi restano
1. Quando T1 va a 1 la stella si spegne e il triangolo si accende nella stessa scansione: il NC nei fili, come fa a lasciar chiudere KM3 solo dopo che KM2 si è aperto?
2. Perché 6 secondi e non 10? Chi decide?
3. Se tolgo T1 dal triangolo, cosa succede? La lezione lo spiega solo per la stella.

### 5. Conteggio
Passi con il perché vero: 3 su 4. Passi con la conseguenza: 1 su 4. Capisco a che cosa serve: sì.

---

## c32 Il nastro con il PLC

### 1. A che cosa serve nella vita vera
Serve a far lavorare un nastro a lotti: la fotocellula conta i pacchi, al terzo il nastro si ferma e una spia dice all'operatore che può portare via il lotto. Fungo ed emergenza restano nei fili perché non devono dipendere da un programma che può sbagliare o bloccarsi.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Il conteggio: fotocellula (I2), contatore a 3, azzerato da Marcia | Va per primo così il gradino del nastro vede subito il contatore pieno. Marcia azzera per cominciare un lotto nuovo | Se il contatore sta dopo, il nastro si ferma con un ciclo di ritardo (pochi millisecondi) | L'ordine dei gradini conta; Il contatore CTU |
| 2 | Il gradino del nastro: Q0, Marcia in parallelo, in serie Arresto, I3 e C1 NC | Q0 tiene acceso; I3 in serie scioglie l'autoritenuta quando un fungo o il termico interviene; C1 NC ferma il nastro a lotto pieno | Senza I3, dopo lo sblocco del fungo o il riarmo del termico il nastro riparte da solo | Il consenso nel gradino; Perché il PLC deve saperlo lo stesso |
| 3 | La spia del lotto: contatto C1, bobina Q1 | Dice all'operatore che il lotto è completo e può portare via i pacchi | NON LO SO | Un nastro che conta |
| 4 | Prova il lotto | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "CTU": spiegato (contatore in avanti), ma la sigla non la capisco.
- "Fronte di salita": spiegato tra parentesi, l'ho capito.
- "I2" e "C1": I2 come fotocellula non è mai scritto nella lezione, compare solo nei passi.
- "Relè di sicurezza": rimandato al Modulo 6, quindi non lo so.
- "Consenso delle sicurezze": spiegato nella frase dopo.

### 4. Domande che mi restano
1. Perché fungo e termico stanno nei fili ma l'arresto lo metto nel programma?
2. Se il PLC si blocca con Q0 chiuso e sblocco il fungo, il nastro riparte: la lezione lo ammette e rimanda al Modulo 6. Come si evita?
3. Se premo Marcia a metà lotto, perdo il conteggio dei pacchi già passati?
4. Quando premo Marcia a lotto pieno, C1 passa a 0 e Q0 si accende nella stessa scansione? Lo deduco, non lo legge.

### 5. Conteggio
Passi con il perché vero: 3 su 4. Passi con la conseguenza: 2 su 4. Capisco a che cosa serve: sì.

---

## c46 Il cambio formato

### 1. A che cosa serve nella vita vera
Serve a collaudare una macchina quando qualcuno ha cambiato il programma: si provano tutte le funzioni, non solo quella toccata, compreso il lotto dopo, e il programma si cambia solo a macchina ferma.

### 2. Passo per passo
Questo livello non ha passi del banco (la sezione è vuota, c'è solo "Premi Verifica" che non si conta). Non so quindi che cosa devo fare con le mani sul banco: la lezione dice solo "apri l'editor e leggi il gradino".

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| - | nessun passo | - | - | - |

### 3. Parole che non ho capito
- "Taratura del relè termico": usata nella domanda, mai spiegata.
- "Cambio formato": il titolo non lo spiega.
- "Collaudo": lo conosco da L'officina.

### 4. Domande che mi restano
1. Perché il PLC riparte da zero quando cambio il programma? Lo dice come fatto.
2. Dove si cambia il numero da 3 a 4 e cosa azzera il contatore? Lo capisco solo dal quiz.
3. Come riconosco quale funzione è guasta tra quelle provate?

### 5. Conteggio
Passi con il perché vero: 0 su 0. Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì.

---

## Tabella riassuntiva

| Livello | Passi | Perché vero | Conseguenza | Capisco a che cosa serve | Domande che restano |
|---|---|---|---|---|---|
| c28 Stella-triangolo | 9 | 8 | 6 | sì | 5 |
| c29 Dal relè al PLC | 8 | 7 | 5 | sì | 4 |
| c30 Ladder | 3 | 2 | 2 | sì | 3 |
| c31 Temporizzatore nel PLC | 4 | 3 | 1 | sì | 3 |
| c32 Nastro con il PLC | 4 | 3 | 2 | sì | 4 |
| c46 Cambio formato | 0 | 0 | 0 | sì | 3 |
