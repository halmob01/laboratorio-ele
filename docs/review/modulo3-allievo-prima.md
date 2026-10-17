# Modulo 3: prova dell'allievo finto (lezioni di partenza)

Regole che ho seguito: conto un "perché vero" solo se spiega perché si fa così e non altrimenti, o a che cosa serve nel lavoro vero. Conto una "conseguenza" solo se la lezione (o la sintesi dei livelli precedenti) dice che cosa succede sbagliando proprio quel passo.

---

## c21-tre-fasi: Le tre fasi

### 1. A che cosa serve nella vita vera
Gli impianti industriali hanno tre fasi più il neutro. Con le tre fasi i motori hanno sempre una spinta che li fa girare e servono cavi più sottili, per questo le macchine usano il trifase. Capisco anche che le lampade e i carichi da 230 V vanno tra una fase e il neutro, e che tra due fasi ci sono 400 V. Il "cavi più sottili" lo prendo per buono, non capisco perché.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|-------|-------------------|--------------------------------|------|
| 1 | La fase alla lampada (L1 a un morsetto) | SOLO IL COME | Se manca il filo il circuito è aperto e la luce resta spenta (livelli precedenti) | - |
| 2 | Il neutro alla lampada | Una lampada da 230 V va tra una fase e il neutro: tra due fasi riceve 400 V | Se la metto tra due fasi (L1-L2) riceve 400 V e si brucia; se manca il neutro, circuito aperto | Perché tre fasi; Domanda |
| 3 | Misura 230 V (L1 e neutro) | LA LEZIONE NON LO DICE | NON LO SO | - |
| 4 | Misura 400 V (L1 e L2) | LA LEZIONE NON LO DICE (si vede che sono 400, ma a che cosa serve saperlo nel lavoro non lo so) | NON LO SO | Da una fase a tre fasi |

### 3. Parole che non ho capito
- "sfasate di un terzo di giro": che cosa vuol dire.
- "circa 1,73 volte 230": da dove viene 1,73.
- "conduttori attivi".
- "a parità di potenza": parità rispetto a che cosa.

### 4. Domande che mi restano
1. Che cosa vuol dire che le tre tensioni sono sfasate, e perché per questo tra due fasi si ha 400 V e non 460?
2. Perché con il trifase servono cavi più sottili e perché il motore ha "sempre una spinta"?
3. Nel lavoro vero, perché devo misurare 230 V e 400 V? Quando mi serve sapere la tensione tra due fasi?

### 5. Conteggio
Passi con il perché vero: 1 su 4. Passi con la conseguenza: 2 su 4. Capisco a che cosa serve: sì.

---

## c12-motore: Il motore trifase

### 1. A che cosa serve nella vita vera
Si collega un motore industriale alla rete a 400 V passando dal salvamotore che lo protegge. Si mette la terra per non prendere la scossa dalla carcassa. Con lo scambio di due fasi si cambia il senso di rotazione (nastro, cancello). Sì, lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|-------|-------------------|--------------------------------|------|
| 1 | Le tre fasi al salvamotore (L1-1, L2-3, L3-5) | Il salvamotore ha un polo per fase e protegge il motore e i fili che vengono dopo; interrompe tutte e tre le fasi insieme perché con due fasi il motore ronza e si scalda | NON LO SO (cosa succede se scambio i morsetti in ingresso non è detto) | I pezzi: Il salvamotore; Il salvamotore e il lavoro senza tensione |
| 2 | Dal salvamotore al motore (2-U, 4-V, 6-W, stesso ordine) | Con quest'ordine il motore gira in avanti | Se scambio due fasi il motore gira al contrario; non c'è cortocircuito e il salvamotore non scatta | I pezzi: Il motore; Il senso di rotazione; Domanda |
| 3 | La terra al motore (PE) | Se un avvolgimento tocca la carcassa metallica la corrente va a terra e non in chi la tocca | Senza terra la corrente di un avvolgimento in contatto con la carcassa passerebbe da chi la tocca (dedotto) | I pezzi: Il motore |
| 4 | Chiudi il salvamotore | Si chiude solo alla fine per provare: cablare con i morsetti in tensione è pericoloso | Pericolo e una stella di sicurezza in meno nel gioco | Il salvamotore e il lavoro senza tensione |

### 3. Parole che non ho capito
- "sezionamento a monte" (usata nell'attenzione, mai spiegata).
- "campo magnetico che gira", "rotore", "avvolgimento", "carcassa".
- "polo" (un polo per fase).
- "a monte" e "a valle".
- "ronza".

### 4. Domande che mi restano
1. Il lato ingresso del salvamotore resta in tensione anche da aperto: allora che cosa posso toccare in sicurezza mentre cablo? Il salvamotore aperto spegne solo quello che c'è dopo?
2. Perché serve un salvamotore e non un interruttore normale? Che differenza c'è con il magnetotermico che ho già visto?
3. Perché il motore non ha bisogno del neutro? Come fanno tre fili a far girare il campo?

### 5. Conteggio
Passi con il perché vero: 4 su 4. Passi con la conseguenza: 3 su 4. Capisco a che cosa serve: sì.

---

## c22-teleruttore: Il teleruttore

### 1. A che cosa serve nella vita vera
Il motore assorbe molta corrente a 400 V e un pulsante non la regge. Il teleruttore fa da interruttore comandato: con un pulsante piccolo a 230 V si chiude la potenza. Sì, lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|-------|-------------------|--------------------------------|------|
| 1 | Le fasi al salvamotore, con il salvamotore aperto | Si cabla senza tensione, con il sezionamento aperto, e si chiude solo alla fine per provare | Collegare con i morsetti in tensione è pericoloso, una stella di sicurezza in meno | Si lavora senza tensione |
| 2 | Ai contatti di potenza del teleruttore (2-1, 4-3, 6-5) | Il teleruttore separa il comando piccolo dalla potenza grande: la corrente del motore passa dai suoi contatti, non dal pulsante | NON LO SO | Un comando piccolo per una potenza grande; I pezzi |
| 3 | Al motore (2-U, 4-V, 6-W) | SOLO IL COME | Se l'ordine non è giusto il motore gira al contrario (dal livello del motore, qui non è detto) | - |
| 4 | La terra del motore | La carcassa a terra protegge chi la tocca (lo so dal livello del motore, qui non è ripetuto) | Come sopra: chi tocca la carcassa rischia | - |
| 5 | Il comando al pulsante (fase a valle del salvamotore, in rosso) | SOLO IL COME (il rosso serve perché comando e potenza sono separati; perché proprio a valle del salvamotore non lo dice) | NON LO SO | I pezzi: La bobina e i contatti |
| 6 | Dal pulsante alla bobina (A1) | SOLO IL COME | NON LO SO | - |
| 7 | La bobina al neutro (A2) | La bobina è fatta per 230 V: va tra una fase e il neutro, tra due fasi riceverebbe 400 V | La bobina si brucia | I pezzi; Domanda |
| 8 | Prova il comando (tieni premuto Marcia, rilascia) | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "autoritenuta" (nella sintesi, "senza autoritenuta", prima di spiegarla).
- "contatto ausiliario" e perché ha 13-14 mentre gli altri sono 1-2, 3-4, 5-6.
- "teleruttore (o contattore)": sono la stessa cosa?
- "sezionamento", "a valle".
- "eccitata/alimentata".

### 4. Domande che mi restano
1. Perché la bobina è a 230 V e non a 400 V? Non sarebbe più semplice prendere due fasi?
2. Perché il comando prende la fase a valle del salvamotore e non a monte?
3. Perché il pulsante usa i morsetti 3 e 4 e non 1 e 2?
4. Quale fase uso per il comando, una qualunque tra L1, L2, L3?

### 5. Conteggio
Passi con il perché vero: 4 su 8. Passi con la conseguenza: 4 su 8. Capisco a che cosa serve: sì.

---

## c13-marcia-arresto: Marcia e arresto

### 1. A che cosa serve nella vita vera
Far partire il motore con un pulsante e fermarlo con un altro senza dover tenere premuto, con una spia che dice che è in marcia. L'arresto è un contatto NC così un filo staccato ferma il motore. Sì, lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|-------|-------------------|--------------------------------|------|
| 1 | Apri il salvamotore | Si cabla senza tensione a valle e lo si richiude solo per provare | Collegare in tensione è pericoloso (dai livelli precedenti) | - (nel testo del passo) |
| 2 | Le tre fasi al salvamotore | Il salvamotore protegge il motore (dal livello del motore) | NON LO SO | - |
| 3 | Dal salvamotore al contattore | Il contattore è l'interruttore pilotato dalla bobina: il comando decide quando il motore parte | NON LO SO | Due circuiti: potenza e comando |
| 4 | Dal contattore al motore | SOLO IL COME | Se le fasi non sono in ordine il motore gira al contrario (dal livello del motore) | - |
| 5 | La terra al motore | La carcassa a terra protegge chi la tocca (dal livello del motore) | Rischio di scossa dalla carcassa | - |
| 6 | Il comando passa dall'arresto (filo rosso dal salvamotore al 1 dell'arresto) | L'arresto è NC e in serie: se un filo si stacca il circuito si apre e il motore si ferma, un guasto va verso la sicurezza | Se un filo si stacca il motore si ferma (è il caso voluto); cosa succede se lo cablo nel posto sbagliato non è detto | I pezzi: Marcia e arresto |
| 7 | Poi dalla marcia (2 dell'arresto al 3 della marcia) | SOLO IL COME | NON LO SO | - |
| 8 | Alla bobina (4 della marcia a A1) | SOLO IL COME | NON LO SO | - |
| 9 | Il neutro alla bobina (A2) | La bobina è a 230 V, tra fase e neutro (dal livello del teleruttore) | Tra due fasi la bobina si brucia (dal livello del teleruttore) | - |
| 10 | L'autoritenuta (13-14 in parallelo alla marcia) | Il pulsante dà corrente alla bobina solo finché lo tieni premuto: il contatto 13-14 la tiene alimentata anche dopo | Senza autoritenuta il motore gira solo finché tengo premuto | L'autoritenuta |
| 11 | La spia di marcia (da A1 alla spia, spia al neutro) | SOLO IL COME | NON LO SO | - |
| 12 | Prova la marcia | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "NA" e "NC" sono spiegati tra parentesi ma non perché "normalmente".
- "diseccita".
- "autoritenuta" (la parola si capisce solo dopo la spiegazione).
- "morsetto 3 e 4 del pulsante di marcia" e "1 e 2 dell'arresto": la numerazione non è spiegata.
- "polo" di potenza.

### 4. Domande che mi restano
1. Perché la spia va collegata alla bobina (A1) e non, per esempio, al motore?
2. Perché l'arresto è prima della marcia nel filo? Cambierebbe se fosse dopo?
3. Perché i morsetti dei pulsanti sono 1-2 per l'arresto e 3-4 per la marcia?
4. Perché i fili di comando sono rossi e non del colore della fase?

### 5. Conteggio
Passi con il perché vero: 7 su 12. Passi con la conseguenza: 6 su 12. Capisco a che cosa serve: sì.

---

## c14-termico: Il relè termico

### 1. A che cosa serve nella vita vera
Il termico protegge il motore da un sovraccarico lento (albero bloccato, carico eccessivo) che lo scalderebbe. Si scalda con la stessa corrente del motore e, scattando, apre il comando e ferma il contattore. Sì, lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|-------|-------------------|--------------------------------|------|
| 1 | Apri il salvamotore | Si cabla senza tensione e si chiude solo per provare | Collegare in tensione è pericoloso (dai livelli precedenti) | - |
| 2 | Il termico in serie al motore (tra contattore e motore) | Si scalda con la stessa corrente del motore, quindi deve stare dove passa quella corrente | NON LO SO | I pezzi: Il relè termico; Proteggere il motore |
| 3 | Il comando passa dal termico (95) | Il contatto 95-96 è NC nel comando: se il termico scatta si apre, la bobina perde corrente e il motore si ferma | Il termico scatta ma il motore continua a girare | Come ferma il motore |
| 4 | Dal termico all'arresto (96 all'1 dell'arresto) | Il contatto è in serie al comando, prima dell'arresto, per poter interrompere la bobina | Come sopra: se il 95-96 non è nel comando il motore non si ferma | Come ferma il motore |
| 5 | Prova la marcia | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "sovraccarico" (si capisce con gli esempi, ma non c'è una definizione).
- "tasto Reset" e "riarmare".
- "relè termico abbinato al contattore" (abbinato come?).
- "protezione a monte".
- "cortocircuito... subito": subito quanto?

### 4. Domande che mi restano
1. Il salvamotore ha già la corrente troppo alta tra i suoi compiti (livello del motore), allora perché serve anche il termico? Che differenza c'è tra i due?
2. Perché il termico sta dopo il contattore e non prima?
3. Perché il contatto 95-96 sta prima dell'arresto e non dopo?
4. Per "togliere la causa del sovraccarico" prima del Reset che cosa devo controllare in pratica?

### 5. Conteggio
Passi con il perché vero: 4 su 5. Passi con la conseguenza: 3 su 5. Capisco a che cosa serve: sì.

---

## c15-inversione: Inversione di marcia

### 1. A che cosa serve nella vita vera
Far girare il motore in due sensi (nastro, cancello) con due pulsanti, senza che i due contattori possano chiudersi insieme. Sì, lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|-------|-------------------|--------------------------------|------|
| 1 | Apri il salvamotore | Si cabla senza tensione e si chiude solo per provare | Collegare in tensione è pericoloso (dai livelli precedenti) | - |
| 2 | KM1 in ordine | Con le fasi in ordine il motore gira in avanti, KM1 serve per "Avanti" | Se le fasi non sono in ordine, Avanti fa girare il motore al contrario (dal livello del motore) | Avanti e indietro |
| 3 | KM2 con due fasi scambiate | Scambiare due fasi inverte il senso: KM2 serve per "Indietro" | Se non scambio, Indietro gira come Avanti (dedotto) | Avanti e indietro; I pezzi: Due contattori |
| 4 | L'interblocco (bobine dai contatti NC 21-22 dell'altro contattore) | Se i due contattori si chiudessero insieme due fasi della rete si collegherebbero tra loro: cortocircuito | Cortocircuito: il salvamotore scatta; il circuito sembra funzionare ma premendo le due marce insieme si ha il guasto | L'interblocco |

### 3. Parole che non ho capito
- "interblocco" (spiegato, ma la parola viene prima della spiegazione nei pezzi).
- "21-22" come numerazione.
- "KM1", "KM2" (si intuisce).
- "poli" di potenza.

### 4. Domande che mi restano
1. Perché per invertire devo prima premere Arresto? Che cosa succederebbe al motore se si potesse invertire subito?
2. Il salvamotore scatterebbe comunque con il cortocircuito: perché serve allora l'interblocco? Che danno si fa prima che scatti?
3. Quali due fasi scambio su KM2? Importa quali?

### 5. Conteggio
Passi con il perché vero: 4 su 4. Passi con la conseguenza: 4 su 4. Capisco a che cosa serve: sì.

---

## c16-nastro: Il nastro trasportatore

### 1. A che cosa serve nella vita vera
Comandare una macchina completa con le sue sicurezze: l'emergenza e il finecorsa fermano il nastro, e se un filo si stacca la macchina si ferma invece di partire. Dopo un'emergenza non riparte da sola. Sì, lo capisco.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|-------|-------------------|--------------------------------|------|
| 1 | Apri il salvamotore | Si cabla senza tensione e si chiude solo per provare | Collegare in tensione è pericoloso (dai livelli precedenti) | - |
| 2 | L'emergenza in serie (NC, dopo il termico) | Un contatto NC in serie ferma la macchina anche quando si stacca un filo: un guasto porta alla fermata, non alla marcia; ne basta uno aperto | NON LO SO (perché proprio dopo il termico non è detto) | I pezzi: Emergenza e finecorsa; Perché i contatti NC |
| 3 | Il finecorsa dopo la marcia (NC, davanti alla bobina) | A fine corsa il pacco lo apre e il comando si interrompe, il nastro si ferma da solo | Con il contatto normalmente aperto il comando è interrotto all'inizio e il nastro non parte | Perché i contatti NC (Attenzione) |

### 3. Parole che non ho capito
- "fungo" (nome del pulsante di emergenza, detto solo nel testo).
- "finecorsa" (si capisce dal contesto, "azionato dal pacco").
- "si blocca aperto" (meccanismo del fungo).
- "a fine nastro si apre": aperto da che cosa, precisamente?

### 4. Domande che mi restano
1. Il pacco tiene aperto il finecorsa a fine corsa: come faccio a far ripartire il nastro dopo? Devo togliere il pacco?
2. Perché il fungo si blocca aperto e va sbloccato? Perché non basta il pulsante di arresto?
3. L'emergenza deve interrompere anche la potenza o basta il comando?

### 5. Conteggio
Passi con il perché vero: 3 su 3. Passi con la conseguenza: 2 su 3. Capisco a che cosa serve: sì.

---

## c52-lavori-sicurezza: Lavori in sicurezza

### 1. A che cosa serve nella vita vera
A non prendere la scossa lavorando su un impianto: si toglie la tensione, si impedisce che qualcuno la rimetta, si controlla davvero che non ci sia (provando prima lo strumento), e solo dopo si lavora. Sì, lo capisco bene.

### 2. Passo per passo

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|-------|-------------------|--------------------------------|------|
| 1 | Apri il salvamotore | Si toglie la tensione ai fili su cui si lavora; un filo in tensione sembra uguale a uno spento | Si lavora su fili in tensione: danno grave in pochi decimi di secondo | Perché si lavora fuori tensione; La procedura |
| 2 | Metti il lucchetto | Un interruttore aperto si richiude con un dito: il lucchetto impedisce la richiusura e dice agli altri che c'è qualcuno al lavoro | Un collega lo richiude e la tensione torna sui fili che ho in mano | Il lucchetto; Domanda |
| 3 | Prova lo strumento (230 V al morsetto 1) | Uno strumento rotto o con batteria scarica legge zero anche su un filo in tensione; provandolo su un punto in tensione so che lo zero a valle vale | Mi fido di uno zero falso e prendo la scossa | Verificare l'assenza di tensione; Domanda |
| 4 | Verifica la prima fase (morsetto 2, 0 V) | Un impianto spento che nessuno ha verificato va considerato in tensione; la verifica scopre un altro circuito o un errore | Se non verifico, l'impianto va considerato in tensione | La procedura; Verificare l'assenza di tensione |
| 5 | Verifica la seconda fase (morsetto 4) | Una sola fase ancora in tensione basta per prendere la scossa | Scossa da una fase rimasta in tensione | Verificare l'assenza di tensione (Attenzione) |
| 6 | Verifica la terza fase (morsetto 6) | Come sopra: si misurano tutte le fasi | Come sopra | Verificare l'assenza di tensione (Attenzione) |
| 7 | Dal salvamotore al fungo (in rosso) | Il fungo è un contatto NC in serie al comando: premuto interrompe la fase e il contattore cade | NON LO SO (perché proprio per primo, prima dell'arresto, non è detto) | Il lavoro: aggiungere il fungo |
| 8 | Dal fungo all'arresto | Fungo e arresto sono in serie: se un contatto qualunque si apre la bobina perde la tensione | NON LO SO | Il lavoro: aggiungere il fungo |
| 9 | Togli il lucchetto e collauda | Il lucchetto lo toglie solo chi l'ha messo, poi si prova marcia e fungo per vedere che funzioni | NON LO SO | La procedura (rimettere in servizio) |

### 3. Parole che non ho capito
- "sezionare" e "bassa tensione" (qui "in bassa tensione i passi sono questi"; nel campanello "bassa tensione" era 12 V: qui sono 230/400 V? Non capisco).
- "conduttore".
- "a monte" e "a valle" (usate sempre, mai definite).
- "mettere in servizio".
- "fungo".

### 4. Domande che mi restano
1. Il neutro non viene sezionato: lavorando sulla bobina o sulle altre parti collegate al neutro posso prendere la scossa lo stesso?
2. Misuro sempre tra morsetto e neutro. Se il neutro fosse staccato lo zero sarebbe falso? Perché non misuro anche tra le fasi o verso terra?
3. Se più persone lavorano sullo stesso quadro, ognuno mette il suo lucchetto?
4. Perché il fungo va per primo e non dopo l'arresto?

### 5. Conteggio
Passi con il perché vero: 9 su 9. Passi con la conseguenza: 6 su 9. Capisco a che cosa serve: sì.

---

## c24-officina: L'officina

### 1. A che cosa serve nella vita vera
Collaudare un impianto prima di consegnarlo: provare marcia, arresto, emergenza, finecorsa e anche il termico simulando un sovraccarico, perché le sicurezze che non si usano quasi mai sono quelle che salvano persone e macchina. Sì, lo capisco.

### 2. Passo per passo
Il livello non ha passi elencati (la sezione "Passi del banco" è vuota): non posso compilare la tabella.

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|-------|-------------------|--------------------------------|------|
| - | nessun passo | - | - | - |

### 3. Parole che non ho capito
- "collaudo" (si capisce dal testo).
- "tarato" (nella risposta sbagliata).
- "simulare un sovraccarico": come, sul banco?

### 4. Domande che mi restano
1. L'obiettivo dice "se qualcosa non va, trovalo e correggilo": che cosa può essere sbagliato e come lo cerco? La lezione non lo dice.
2. Il collaudo si fa con il salvamotore chiuso, la correzione a salvamotore aperto: in che ordine lavoro, e devo rifare la procedura del lucchetto del livello precedente?
3. In che ordine collaudo le funzioni (marcia, arresto, emergenza, finecorsa, termico)?

### 5. Conteggio
Passi con il perché vero: 0 su 0. Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì (il collaudo), ma non so come si trova un guasto.

---

## Tabella riassuntiva

| livello | passi | perché vero | conseguenza | capisco a che cosa serve | domande che restano |
|---------|-------|-------------|-------------|--------------------------|---------------------|
| c21-tre-fasi | 4 | 1 | 2 | sì | 3 |
| c12-motore | 4 | 4 | 3 | sì | 3 |
| c22-teleruttore | 8 | 4 | 4 | sì | 4 |
| c13-marcia-arresto | 12 | 7 | 6 | sì | 4 |
| c14-termico | 5 | 4 | 3 | sì | 4 |
| c15-inversione | 4 | 4 | 4 | sì | 3 |
| c16-nastro | 3 | 3 | 2 | sì | 3 |
| c52-lavori-sicurezza | 9 | 9 | 6 | sì | 4 |
| c24-officina | 0 | 0 | 0 | sì (il collaudo; il guasto no) | 3 |
