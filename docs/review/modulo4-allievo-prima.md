# Modulo 4 (c28-c32, c46): prova dell'allievo finto, lezioni di partenza

Ho letto solo il file. Quello che non e' scritto, non lo so.
Regola usata: un "perché" vale solo se dice perché si fa così e non in un altro modo, o a che cosa serve. Se dice solo il come, scrivo SOLO IL COME. "E' pericoloso" senza dire che cosa succede lo conto come conseguenza NON LO SO.

---

## c28 - Stella-triangolo

### 1. A che cosa serve nella vita vera
Un motore grande, quando parte, assorbe 5-7 volte la corrente di lavoro. Lo strappo sulla linea e' forte e le protezioni possono scattare. Si parte con tensione ridotta (stella) e poi si passa a tensione piena (triangolo). Lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Apri il salvamotore | Si cabla senza tensione ("come sempre"); dai livelli prima so che collegare fili in tensione e' pericoloso | NON LO SO (so solo "pericoloso") | Il circuito di potenza è già fatto |
| 2 | Comando dal salvamotore all'arresto (morsetto 2 -> 1) | SOLO IL COME | NON LO SO | - |
| 3 | Dall'arresto alla marcia | SOLO IL COME | NON LO SO | - |
| 4 | Marcia alla bobina A1 di KM1; A2 al neutro | SOLO IL COME (dal livello prima so che la bobina ha il ritorno al neutro, ma il passo non lo dice) | NON LO SO | - |
| 5 | Autoritenuta di KM1 (13-14 in parallelo alla marcia) | Il contattore si tiene da solo (livello "Marcia e arresto") | Senza autoritenuta il motore gira solo finché tengo premuto (livelli "Il teleruttore" / "Marcia e arresto") | Il circuito di potenza è già fatto ("il comando parte come in marcia e arresto") |
| 6 | KT alimentato insieme a KM1 (A1 e 15 sul punto della bobina di KM1, A2 al neutro) | KT deve partire insieme a KM1, così conta dall'avvio | NON LO SO. Perché anche il comune 15 vada sullo stesso punto non lo dice | Tre contattori e un temporizzatore |
| 7 | Stella: 16 di KT -> NC di KM3 -> bobina KM2, A2 al neutro | 16 e' chiuso a riposo, quindi fino alla scadenza resta la stella. Il NC di KM3 c'e' perché stella e triangolo insieme sono un corto | Se KM2 e KM3 chiudono insieme: cortocircuito delle tre fasi | Il temporizzatore e l'interblocco; domanda su KM2 e KM3 |
| 8 | Triangolo: 18 di KT -> NC di KM2 -> bobina KM3, A2 al neutro | 18 si chiude dopo il ritardo, quindi il triangolo viene dopo. NC di KM2 per lo stesso motivo del passo 7 | Cortocircuito se chiudono insieme; un contattore incollato non fa chiudere l'altro grazie al NC | Il temporizzatore e l'interblocco |
| 9 | Prova l'avviamento | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- coppia (usata come "corrente e coppia scendono a un terzo", mai spiegata)
- avvolgimenti
- targa "400/690 V" (che cosa vuol dire 690? e perché con 400 si fa triangolo?)
- centro stella
- tensione ridotta (spiegata solo dopo, con i 230 V)
- "incollato" (un contattore incollato: spiegato solo da un esempio)
- "si diseccita"
- sei morsetti U1-U2, V1-V2, W1-W2: come sono fatti dentro non lo so

### 4. Domande che mi restano
1. Perché a stella ogni avvolgimento riceve 230 V invece di 400? Da dove viene quel 230?
2. Se in stella corrente e coppia sono un terzo, come fa il motore a partire e a prendere velocità?
3. Perché la stella riduce proprio a un terzo?
4. Perché il comune 15 di KT va sullo stesso punto della bobina di KM1?
5. Perché KM1 resta chiuso per tutto il tempo, anche nel passaggio da stella a triangolo?
6. Come si sceglie il tempo di KT (quanti secondi)?

### 5. Conteggio
Passi con il perché vero: 5 su 9. Passi con la conseguenza: 3 su 9. Capisco a che cosa serve: sì.

---

## c29 - Dal relè al PLC

### 1. A che cosa serve nella vita vera
La logica di una macchina sta in un programma e non nei fili: se il cliente cambia richiesta si riscrive il programma senza ricablare. Lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Apri il salvamotore | Collegare fili in tensione e' pericoloso | NON LO SO (solo "pericoloso") | - (nel passo) |
| 2 | Alimenta il PLC (A1 fase, A2 neutro) | E' un computer, ha bisogno di corrente | Se manca l'alimentazione il programma si ferma e le uscite si aprono: la macchina si ferma | Perché il PLC ha la sua alimentazione |
| 3 | Arresto NC all'ingresso I0 | A riposo porta tensione e I0 vale 1; premuto, I0 va a 0 e il PLC lo legge come stop. Un filo staccato ferma la macchina, stato sicuro | Filo staccato: I0 vale 0, come premere Arresto, e la macchina va nello stato sicuro | Gli ingressi; domanda sul filo di I0 |
| 4 | Marcia NA all'ingresso I1 | Un ingresso misura la tensione: premendo, la tensione arriva e I1 vale 1; rilasciando torna 0 | NON LO SO | Gli ingressi: come il PLC vede un pulsante |
| 5 | IC al neutro | Un ingresso misura la tensione fra se' stesso e IC: serve un secondo punto di riferimento | Senza IC tutti gli ingressi restano a 0, anche premendo | Gli ingressi; domanda su IC |
| 6 | Q0: fase in Q0A, uscita Q0B ad A1 del contattore, A2 al neutro | L'uscita e' solo un contatto, la tensione la porto io | Con il contatto aperto la bobina non riceve niente e il contattore resta aperto | Le uscite: il PLC non dà corrente |
| 7 | Q1: fase in Q1A, Q1B alla spia, spia al neutro | SOLO IL COME ("anche la spia e' comandata dal PLC" non dice a che cosa serve la spia) | NON LO SO | - |
| 8 | Prova la marcia | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "gradino" (compare nella tabella della scansione, mai spiegato in questo livello)
- "stato sicuro" (spiegato solo di sfuggita nella risposta di una domanda)
- uscita "a relè" (relè lo so, ma come e' fatta l'uscita?)
- "ingresso vale 1 / vale 0" (si capisce, ma "bit" non c'e' ancora)
- "il programma già scritto": non lo vedo e non so che cosa contiene
- A1 e A2 sono usati sia per il PLC sia per le bobine

### 4. Domande che mi restano
1. Perché il PLC non puo' comandare direttamente il motore? Perché serve per forza il contattore?
2. Perché l'alimentazione del PLC si prende a valle del salvamotore e non a monte?
3. A che cosa serve la spia Q1: che cosa deve segnalare?
4. Che cosa succede se Marcia e Arresto sono premuti insieme? (la tabella non lo dice)

### 5. Conteggio
Passi con il perché vero: 6 su 8. Passi con la conseguenza: 4 su 8. Capisco a che cosa serve: sì.

---

## c30 - Ladder: l'autoritenuta

### 1. A che cosa serve nella vita vera
Scrivere nel PLC il programma che prima facevano i fili, in particolare l'autoritenuta. Il perché di fondo (non ricablare) lo so dal livello prima, in questa lezione non e' ripetuto. Lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Gradino del motore: bobina Q0, Marcia I1 con Q0 in parallelo, Arresto I0 in serie | Marcia fa partire; Q0 in parallelo tiene vero il gradino dopo il rilascio (basta uno dei due); I0 in serie perché premendo Arresto il gradino diventa falso. I0 normalmente aperto perché a riposo I0 vale 1 | Solo Marcia: il motore parte ma solo finché tengo premuto. Q0 in serie invece che in parallelo: non parte mai (deduco, la risposta dice "in parallelo, basta uno"). Contatto I0 sbagliato: non so | Costruire il gradino un pezzo alla volta; domande su parallelo e su I0 |
| 2 | Gradino della spia: contatto Q0, bobina Q1 | SOLO IL COME (la spia segue Q0, ma perché proprio Q0 e non Marcia non lo dice) | NON LO SO | - |
| 3 | Prova la marcia | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "bit" e "bit interno" (usati senza spiegazione)
- "montanti"
- "bobina" nel ladder (qui e' un'uscita del PLC, ma prima la bobina era quella del contattore: mi confonde)
- "contatto normalmente aperto nel programma" mentre l'arresto fuori e' NC: capisco la regola, ma resta ostica
- "condizione del gradino"
- "editor"

### 4. Domande che mi restano
1. Che cos'e' un bit interno e a che cosa serve, se ho già le uscite?
2. Perché la spia ha un gradino suo e non e' collegata allo stesso gradino di Q0?
3. Perché la spia segue Q0 e non, per esempio, l'ingresso di Marcia?

### 5. Conteggio
Passi con il perché vero: 1 su 3. Passi con la conseguenza: 1 su 3. Capisco a che cosa serve: sì.

---

## c31 - Il temporizzatore nel PLC

### 1. A che cosa serve nella vita vera
Fare la stella-triangolo con il PLC senza il temporizzatore KT: il tempo si conta nel programma. Lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Temporizzatore: contatto Q0, uscita TON di 6 s | Il conteggio deve partire quando il motore e' acceso (come KT partiva con KM1) | NON LO SO | Il temporizzatore TON; I tre gradini |
| 2 | Stella: Q0 in serie con T1 normalmente chiuso, bobina Q1 | La stella vale solo finché il tempo non e' scaduto | Se manca T1: a 6 s il PLC accende anche il triangolo, il motore resta in stella e non arriva a piena potenza (i fili evitano il corto) | Stella e triangolo non insieme |
| 3 | Triangolo: Q0 in serie con T1 normalmente aperto, bobina Q2 | Parte quando il tempo e' scaduto; stella (T1 a 0) e triangolo (T1 a 1) non sono mai veri insieme | NON LO SO (la lezione spiega solo l'errore nella stella) | Stella e triangolo non insieme |
| 4 | Prova l'avviamento | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- TON, "ritardo all'eccitazione"
- "bit di uscita" / "bit T1"
- "la condizione cade", "azzera"
- "contatto normalmente chiuso" su T1: T1 a 0 lascia passare, mi confondo
- "Aggiungi uscita", "Temporizzatore" dell'editor (e' solo una voce di menu, ma non l'ho vista)

### 4. Domande che mi restano
1. Perché se la condizione cade anche per un attimo il conteggio si azzera? A che cosa serve?
2. Come si sceglie il tempo di 6 secondi?
3. Perché KM1 (Q0) resta acceso durante tutto il passaggio?

### 5. Conteggio
Passi con il perché vero: 3 su 4. Passi con la conseguenza: 1 su 4. Capisco a che cosa serve: sì.

---

## c32 - Il nastro con il PLC

### 1. A che cosa serve nella vita vera
Un nastro che conta i pacchi in lotti da tre, si ferma e accende una spia. In più: fungo e termico restano nei fili perché non devono dipendere dal programma. Lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Conteggio: contatto fotocellula I2, contatore a 3, azzerato da Marcia I1 | Va per primo così il nastro vede subito il contatore pieno. Marcia azzera per partire con un lotto nuovo | Se il contatore stesse dopo, il nastro si ferma con un ciclo di ritardo (pochi ms) | L'ordine dei gradini conta; Il contatore CTU |
| 2 | Gradino del nastro: Q0, Marcia in parallelo a Q0, in serie Arresto, I3, C1 normalmente chiuso | Autoritenuta per tenere acceso; ogni contatto in serie puo' fermare; C1 ferma a lotto pieno; I3 scioglie l'autoritenuta se interviene una sicurezza | Senza I3: dopo lo sblocco del fungo (o il riarmo del termico) il nastro riparte da solo | Perché il PLC deve saperlo lo stesso; domanda su I3 |
| 3 | Spia del lotto: contatto C1, bobina Q1 | Segnala "lotto completo" (ma a chi e come, non lo dice) -> SOLO IL COME | NON LO SO | Un nastro che conta |
| 4 | Prova il lotto | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- CTU, "fronte di salita" (spiegato subito dopo, ma il nome e' difficile)
- "bit C1"
- "ingresso di azzeramento"
- "consenso delle sicurezze"
- "forza le uscite a 1"
- "il punto dopo il termico (96)": quale punto, sul banco?
- "nello stesso ciclo" (scansione: c'e' ma il legame con "ciclo" non e' chiaro)

### 4. Domande che mi restano
1. Se premo Marcia in mezzo a un lotto, il contatore si azzera e perdo il conto?
2. Se il PLC si blocca con Q0 acceso e poi sblocco il fungo, il nastro riparte?
3. Perché il fungo e il termico passano dai fili e I3 li legge soltanto, invece di far fare tutto ai fili? (la lezione dice un po' di perché, ma non il motivo di leggere comunque lo stato)

### 5. Conteggio
Passi con il perché vero: 2 su 4. Passi con la conseguenza: 2 su 4. Capisco a che cosa serve: sì.

---

## c46 - Il cambio formato

### 1. A che cosa serve nella vita vera
Dopo aver cambiato un programma si collauda tutta la macchina, non solo quello che e' cambiato, e si prova anche il lotto successivo. Il programma si cambia a macchina ferma. Lo capisco.

### 2. Passo per passo
La sezione "Passi del banco" e' vuota: non ho nessun passo da analizzare.

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| - | (nessun passo) | - | - | - |

### 3. Parole che non ho capito
- "taratura del relè termico"
- "pausa pranzo", "stamattina un collega ha cambiato il programma": non so quale programma e dove lo vedo
- "ingresso di azzeramento" (c32, ma qui torna senza richiamo)

### 4. Domande che mi restano
1. Come faccio a sapere che cosa e' stato cambiato nel programma? Dove si cambia il numero 3 in 4?
2. In che ordine collaudo le funzioni?
3. Quando trovo l'errore, come lo correggo (non c'e' nessun passo)?

### 5. Conteggio
Passi con il perché vero: 0 su 0. Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì.

---

## Tabella riassuntiva

| livello | passi | perché vero | conseguenza | capisco a che cosa serve | domande che restano |
|---|---|---|---|---|---|
| c28 Stella-triangolo | 9 | 5 | 3 | sì | 6 |
| c29 Dal relè al PLC | 8 | 6 | 4 | sì | 4 |
| c30 Ladder: l'autoritenuta | 3 | 1 | 1 | sì | 3 |
| c31 Il temporizzatore nel PLC | 4 | 3 | 1 | sì | 3 |
| c32 Il nastro con il PLC | 4 | 2 | 2 | sì | 3 |
| c46 Il cambio formato | 0 | 0 | 0 | sì | 3 |
