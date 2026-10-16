# Progetto: "Il turno parte alle 7", la prova dell'officina (Modulo 3)

**Stato: realizzato.** Differenze rispetto al progetto:
- l'atto 3 (trovare il quadro con il segnaposto) non c'e': si gioca subito dalla pulsantiera, il quadro si guarda aprendo il banco;
- "Incastra un pacco" rimette prima il pacco all'inizio del nastro: cosi' il termico (3 s) scatta sempre prima del finecorsa (6 s);
  a nastro fermo un sottotitolo dice di premere Marcia;
- i fili nella scena sono i fili veri del banco, ciascuno acceso con lo stato del motore (`snapshot.flow`): mappa e percorsi in
  `src/scene3d/officina-wires.js`, disegno in `createLiveWires` (`src/scene3d/wiring.js`);
- cambiando i fili il motore riparte dai comandi iniziali (fungo sbloccato, termico armato): resta da richiudere il salvamotore;
- traduzioni in `src/i18n/ar-29.js` (`ar-27.js` e `ar-28.js` sono di P6).

Fluidita' misurata dopo la realizzazione (Chromium con rendering software): a riposo 0 chiamate di disegno; nastro in marcia
81 per fotogramma su telefono, 185 su computer, dove a tutto schermo l'occlusione ambientale ridisegna la scena una seconda
volta (e' il primo gradino che la qualita' adattiva toglie: senza, circa 110). Il pacco e i pacchi del turno hanno l'ombra
finta: le ombre del sole non si ricalcolano mentre il nastro gira.

Decisioni prese:
- **Orologio finto**: dalle 6:40 alle 7:00, solo atmosfera. Nessuna penalità, nessun bonus, nessun conto alla rovescia.
- **Un solo guasto**, quello del termico. Una variante (per esempio il finecorsa fuori dalla serie) chiederebbe al
  motore di scegliere tra più guasti, mentre oggi ogni livello ne ha uno solo (`unit.fault`, letto da
  `loadFaultPlant` in `src/engine/session.js`): toccherebbe le regole, quindi non si fa.

Questo documento è per chi lo realizza. La prova c24 oggi non ha cornice: la scena 3D sta accanto al banco, come le
prove senza voce in `PROVE`. Qui la si porta allo stesso livello delle altre due (`docs/PROGETTO-APPARTAMENTO.md`,
trilocale in `docs/MILESTONE.md`), con un'atmosfera e un documento finale suoi.

## L'idea in una riga

**Far vedere la catena di comando.** Il nastro si ferma solo se la corrente di comando attraversa, in fila, termico,
fungo, arresto, marcia e finecorsa. Nella scena quella fila è una linea rossa che si accende tratto per tratto. Quando
il termico scatta il suo tratto si spegne, ma la linea dopo resta accesa perché un filo lo scavalca: si vede il guasto
prima ancora di capirlo. Dopo la correzione si vede la catena che si interrompe davvero e il nastro che si ferma.

## Come si lega alle altre due

| | Appartamento (M2) | Trilocale (M1) | Officina (M3) |
|---|---|---|---|
| Luce | notte, torcia | tramonto, poi sera | alba fredda, poi luci industriali |
| Si apre con | la chiamata | l'ordine di lavoro | la scheda di collaudo |
| Arrivo | la casa al buio | il tetto si alza | la saracinesca sale, le plafoniere si accendono a file |
| A sinistra | il metodo | le stanze | il verbale: le cinque prove |
| In basso | il quadro | (banco in pannello) | la pulsantiera |
| Fili | i conduttori nei muri | i fili del banco nei muri | potenza sulla passerella, comando come catena |
| Momento forte | il differenziale scatta | la stanza si accende | il termico scatta, il nastro non si ferma |
| Documento | rapporto d'intervento | Dichiarazione di conformità | verbale di collaudo |

Colori propri: il giallo e nero della sicurezza (bordo della pulsantiera, strisce a terra) e i tre colori della torretta
(verde marcia, giallo attenzione, rosso fermo). Il resto della cornice resta quello comune.

## Il racconto in atti

Si parte già in fase `fault` (la prova salta la costruzione: `session.js`, fine della lezione), con i fili guasti di
`units-v2.js` `c24-officina.fault.wires`: il comando va da `QM.2` direttamente a `SBE.1`, senza passare per `FR.95-96`.

### Atto 1: la scheda di collaudo (5-7 s, sempre saltabile)

Schermata nera, stessa struttura della chiamata (`orderHTML` del trilocale / `callHTML` dell'appartamento):

- in alto: `Scheda di collaudo` · `Capannone Ferri, Via dell'Industria 4`
- titolo: **L'officina**
- citazione: «Il nastro è montato. Il turno parte alle 7: collaudalo prima che arrivino gli operai.»
- pulsante **Inizia** (sblocca l'audio), "Salta" in basso.

Dietro si carica la scena, con la saracinesca abbassata e il capannone al buio dell'alba.

### Atto 2: l'arrivo (4 s)

1. La camera è fuori, davanti alla saracinesca chiusa. Cielo blu-grigio dell'alba.
2. La saracinesca sale (1,6 s, suono di rulli: rumore filtrato che sale di tono).
3. Le plafoniere si accendono una fila alla volta, dalla porta verso il fondo: 4 file, 180 ms l'una, un "tac" a fila,
   un breve tremolio come i neon. È il momento "wow" dell'ingresso, come il tetto che si alza nel trilocale.
4. La camera entra e si ferma sulla vista d'insieme. Compare la cornice.

### La lezione

Come nell'appartamento: la scheda della lezione al centro, con la scena sfocata dietro. Ultima pagina: "Al lavoro".

### Atto 3: il quadro (facoltativo, 3 s)

Un segnaposto pulsante sull'armadio: «Il quadro». Toccandolo la camera va alla vista `quadro`, lo sportello si apre
(cerniera come `centralino.door` in `parts3d.js`) e dentro si leggono salvamotore, contattore e termico. Il passo del
verbale "Guarda il quadro" si spunta. Si può saltare toccando direttamente la pulsantiera: non blocca niente.

### Atto 4: il collaudo

Il cuore della prova. Il verbale a sinistra elenca le cinque prove, che si spuntano da sole guardando lo stato vero:

| Prova | Si spunta quando |
|---|---|
| Marcia | dopo Marcia il motore va avanti e la spia è accesa |
| Finecorsa | il pacco arriva in fondo e il motore si ferma da solo |
| Arresto | il motore era in marcia e si ferma premendo Arresto |
| Emergenza | il motore era in marcia e si ferma premendo il fungo |
| Sovraccarico | con il pacco incastrato il termico scatta |

La pulsantiera in basso è un oggetto, come il quadro dell'appartamento: un pannello giallo con il bordo a strisce,
Marcia (verde, da tenere premuto il tempo di un tocco), Arresto (rosso), il fungo (rosso grande, si blocca e si sblocca
con un secondo tocco), la spia, e a destra una leva **Incastra un pacco** (sovraccarico, `session.setOverload`). Sopra la
pulsantiera, piccoli: **Rimetti il pacco** (pacco all'inizio) e **Verifica**.

In scena, a ogni prova:

- Marcia: la torretta diventa verde, la passerella si accende (tre conduttori di potenza con la corrente che corre),
  il nastro parte, il pacco scorre, il motore ronza.
- Finecorsa: il pacco tocca la levetta in fondo, scatto, il nastro si ferma, torretta spenta.
- Arresto e fungo: la catena di comando si spegne dal punto aperto in poi, il nastro rallenta e si ferma.

### Il momento forte: il nastro non si ferma

1. Con il nastro in marcia si tira la leva. Il pacco si incastra contro una sponda e si inclina, il nastro slitta sotto.
2. Il ronzio del motore si fa più grave e più forte, la carcassa vibra. Il termico nel quadro scalda (barra che si
   riempie sulla sua etichetta) e dopo 3 s **scatta**: suono secco, bandierina gialla, torretta gialla lampeggiante.
3. **Ma il nastro continua.** Nella catena il tratto 95-96 si spegne, ma la linea rossa dopo resta accesa: si vede il
   filo che passa sopra il termico. Il cartone si schiaccia, qualche scintilla dal motore (`createSparks`).
4. Scritta grande: **«Il nastro non si ferma.»**, sotto: «Premi il fungo.» Il fungo pulsa.
5. Si preme il fungo: la catena si spegne tutta, il nastro si ferma, la torretta diventa rossa. Silenzio.
   Il passo del verbale "Emergenza" si spunta se non lo era già.

La prova "Sovraccarico" del verbale resta segnata in rosso: **non superata**.

### Atto 5: diagnosi e correzione

1. La domanda della sfida (`fault.diagnosis`) nella scheda dell'appartamento (`questionHTML`). Con la risposta giusta,
   la spiegazione e il passo "Trova il guasto" spuntato.
2. **Lavoro fuori tensione.** Si chiede di aprire il salvamotore (`safety.deadWork: ['QM']`). In scena la leva si
   abbassa e compare un lucchetto con il cartellino giallo «Lavori in corso, non manovrare». Finché è chiuso, il banco
   avvisa come oggi.
3. **Il banco in pannello**, come nel trilocale: a destra su computer, dal basso su telefono. La camera va sul quadro.
   I fili del comando che si tolgono e si rimettono sul banco cambiano anche nel quadro 3D: il filo `QM.2 - SBE.1`
   sparisce, compaiono `QM.2 - FR.95` e `FR.96 - SBE.1`.
4. Si chiude il pannello, si toglie il lucchetto (si richiude il salvamotore).

### Atto 6: il ricollaudo

Il verbale si azzera per le cinque prove (restano spuntati "Trova il guasto" e "Correggi"). Si rifanno, più veloci: la
camera resta sull'insieme. Al sovraccarico, stavolta, il termico scatta e **la catena si interrompe davvero sul 95-96**:
tutta la linea dopo si spegne, il contattore apre con un tonfo, il nastro si ferma, la torretta diventa rossa.
Scritta: **«Il termico ha fermato il nastro.»** Poi si riarma il termico (pulsante blu **Riarma**, `session.resetPart('FR')`) e si preme **Verifica**: i controlli automatici del livello confermano.

### Atto 7: finale, le 7:00

1. Suona la sirena del turno (due note lunghe, sintetizzate).
2. Le luci restano piene, la camera si alza lentamente sull'insieme. Il nastro parte da solo e i pacchi scorrono uno
   dietro l'altro, ognuno con la sua ombra; la torretta resta verde.
3. Scritta: **«Ore 7:00. Il turno può partire.»**
4. Il **verbale di collaudo**, stesso stile cartaceo del rapporto e della Dichiarazione:
   - `Modulo 3 completato` · ora
   - **Verbale di collaudo** · *Nastro trasportatore, linea 1*
   - Dove: Capannone Ferri, Via dell'Industria 4
   - Prove: Marcia, Finecorsa, Arresto, Emergenza, Sovraccarico, ciascuna con l'esito (superata)
   - Guasto trovato: contatto 95-96 del termico fuori dal circuito di comando
   - Intervento: a salvamotore aperto, 95-96 messo in serie prima del fungo
   - Stelle, firma con il nome di chi gioca
   - **Torna alla mappa** · **Guarda il nastro**

## La catena di comando: come è fatta

Si usa `createWireSet` (`src/scene3d/wiring.js`), con due gruppi.

**Potenza** (sempre visibile quando "Fili" è attivo): tre conduttori marrone, nero e grigio. Dal quadro (`x 3.1, z 0.4`)
salgono, corrono su una passerella sospesa a 3 m lungo la parete e scendono al motore (`x 8.6, z 3.6`). Accesi con la
corrente che corre quando `contactor` è vero; spenti a contattore aperto. Il giallo-verde di terra resta spento sempre.

**Comando**: una linea rossa a tratti, uno per ogni contatto, nell'ordine del circuito giusto:

```
QM.2 -> FR.95|96 -> SBE.1|2 -> SB0.1|2 -> SB1.3|4 (con autoritenuta KM.13|14) -> FC.1|2 -> KM.A1
```

- Nel quadro i tratti stanno sui morsetti veri; verso la pulsantiera e il finecorsa scendono in una canalina a terra.
- Un tratto è **acceso** se è in tensione: si calcola dallo stato osservato (`snap.obs`), non si inventa. Basta sapere,
  per ogni morsetto della catena, se è in tensione rispetto a N: il motore v2 lo sa già (lo usa il multimetro).
  L'osservazione espone `potential(morsetto)`: la funzione va in `src/prove/state.js`, non in `src/engine`.
- I fili guasti si disegnano come sono: il filo `QM.2 - SBE.1` passa sopra il termico, ad arco. Quando il termico
  scatta, il suo contatto si apre (piccolo spazio tra i due tratti), ma `SBE.1` resta in tensione dall'arco: si vede.
- Corrente che corre: solo quando la bobina del contattore è eccitata, verso il contattore.

## Impaginazione

Computer:

- in alto la barra comune: Mappa, **L'officina**, l'orologio `6:40` che avanza (1 minuto ogni 20 s di gioco, si ferma
  alle 6:59 finché non si finisce), strumenti Fili, Suono, Registro;
- a sinistra il verbale come binario;
- in basso al centro la pulsantiera, larga al massimo 640 px;
- a destra il registro (su richiesta) e il banco in pannello quando si corregge;
- sottotitoli sopra la pulsantiera.

Telefono:

- verticale: il verbale diventa la fila di nodi in alto (come le stanze del trilocale), la pulsantiera in basso alta
  al massimo 150 px, la scena con la vista `insieme` più vicina (già in `viewFor`);
- orizzontale: verbale nascosto, pulsantiera bassa con i soli pulsanti.

L'orologio è solo atmosfera: niente penalità se si sfora, nessun conto alla rovescia rosso.

## Suono

Da `src/prove/sound.js`, già presenti: `click`, `tac`, `chime`, `hum`, `silence`. Da aggiungere:

- `motor(on, load)`: ronzio del motore; `load` da 0 a 1 abbassa il tono e alza il volume (sovraccarico);
- `siren()`: due note lunghe per il turno;
- `shutter()`: rumore filtrato che sale per la saracinesca;
- per lo scatto del termico basta `tac` più acuto; per il contattore un `tac` più grave.

Tutti sintetizzati, nessun file audio.

## Fluidità: misura di partenza e regole

Misurata il 16 ottobre 2026 sulla scena attuale (Chromium con rendering software, qualità ridotta automatica):

| | Computer | Telefono |
|---|---|---|
| A riposo | 0 chiamate di disegno | 0 |
| Nastro in marcia, per fotogramma | ~195 | ~194 |
| di cui ombre del sole | 84 (43%) | 84 |
| di cui scena | ~100 | ~98 |
| di cui alone (bloom) | ~12 | ~12 |

Le ombre si ridisegnano a ogni fotogramma perché il pacco si sposta (`stage.moved()` in `tickLoop`). Con un pacco va
bene; con la fila di pacchi del finale e la passerella diventerebbe la scena più pesante del gioco. Regole:

1. **A riposo 0 chiamate**, come ora.
2. **Pacchi**: un `InstancedMesh` per tutti i pacchi del finale. Non proiettano ombra vera: ognuno ha sotto un'ombra
   finta (piano con una macchia scura sfumata, anch'esso in istanze) che si sposta con lui. Le ombre del sole restano
   ferme mentre il nastro gira: niente `moved()` per i pacchi.
3. **Nastro in marcia**: si ridisegna a 30 fotogrammi al secondo quando l'unica cosa che si muove sono nastro e pacchi
   (nessun movimento di camera, nessun tocco); a 60 durante gli spostamenti della camera.
4. **Passerella, canalina, saracinesca, plafoniere** si accorpano con `stage.finish` (la saracinesca solo dopo che è
   salita; durante la salita è a parte e ridisegna le ombre una volta alla fine).
5. **Plafoniere**: emissive + alone, nessuna luce vera in più. La luce della sala resta il sole dalla finestra più
   l'ambiente; all'accensione delle file si alzano esposizione e intensità dell'ambiente a gradini.
6. **Fili**: i tubi dei fili sono pochi (circa 12 tratti) e senza ombra; non pesano.
7. Obiettivo: in marcia non più di 120 chiamate per fotogramma (ora ~195), finale compreso.

## Movimento ridotto e senza 3D

- Movimento ridotto: niente tremolio delle plafoniere, saracinesca già alzata, camera che salta invece di volare,
  nastro che scorre lo stesso (è informazione).
- Senza WebGL: la cornice resta (verbale, pulsantiera, sottotitoli, domanda, verbale finale) e al posto della scena si
  vede lo schema del banco. La prova si può finire.

## Cosa si tocca

- `src/content/prove.js`: voce `officina` (kick, place, title, tagline, clock `[6, 40]`, goal, dockTitle, controls,
  steps, log, win, card del verbale finale).
- `src/prove/hud.js`: `stepsOf` e `remember` per l'officina (le cinque prove guardando lo stato), `describe`,
  `hintOf`, `dockHTML` con la pulsantiera, `reportHTML` del verbale.
- `src/prove/page.js`: gli atti propri (scheda, saracinesca, momento forte, ricollaudo, finale con la sirena).
- `src/prove/state.js`: i tratti accesi della catena di comando, da `obs.potential`.
- `src/scene3d/officina.js`: saracinesca, plafoniere a file, passerella, canalina, sportello dell'armadio, lucchetto,
  pacco incastrato, fila di pacchi in istanze, catena di comando, viste nuove (`esterno`, `armadio`).
- `src/scene3d/parts3d.js`: i pezzi nuovi riusabili.
- `src/prove/sound.js`: `motor`, `siren`, `shutter`.
- `src/ui2d/style.css`: sezione "officina" (pulsantiera, torretta nel verbale).
- traduzioni `src/i18n/ar-*.js`, test in `test/milestone.test.js`.
- Non si toccano le regole in `src/engine`.

## Già verificato nel motore (sola lettura, nessuna modifica)

- **Riarmo del termico**: il relè termico (`ft` in `src/engine/v2/parts.js`) ha l'azione `reset`, che la sessione espone
  come `session.resetPart('FR')`. Dopo lo scatto resta scattato (contatto 97-98 chiuso, 95-96 aperto) finché non si
  riarma: serve un pulsante **Riarma** blu sul modulo del termico nel quadro 3D e nella pulsantiera HTML, come nei
  termici veri.
- **Tensione dei morsetti**: l'osservazione v2 (`observe` in `src/engine/v2/sim.js`) espone già
  `potential(morsetto)`: per ogni tratto della catena basta chiedere il potenziale dei due capi. La funzione che fa la
  lista dei tratti accesi va in `src/prove/state.js`, accanto a `officinaState`; il motore non si tocca.
- **Pacco incastrato**: il motore simula il sovraccarico (`overload`) ma non sa del pacco. Il pacco incastrato è solo
  scena: si inclina contro una sponda quando `overload` è vero.

## Ordine di lavoro (un commit per fase, test verdi e screenshot a ogni fase)

1. Voce in `PROVE` e cornice di base (verbale, pulsantiera, registro) sulla scena di oggi.
2. Scena: saracinesca, plafoniere, passerella, armadio con sportello; atti 1-3.
3. Catena di comando e potenza (fili), momento forte, suoni.
4. Diagnosi, lucchetto, banco in pannello con i fili nel quadro, ricollaudo.
5. Finale: sirena, fila di pacchi in istanze con ombre finte, verbale.
6. Fluidità: misura con lo stesso metodo di sopra, obiettivo 120 chiamate in marcia, 0 a riposo.
7. Traduzioni, test, documentazione (`docs/MILESTONE.md`).

## Testi

Tutti i testi nuovi, pronti da copiare. A destra la traduzione in arabo, ora in `src/i18n/ar-29.js`
(da ricontrollare con `node scripts/check-lang.mjs ar` dopo l'inserimento).

| Italiano | Arabo |
|---|---|
| Modulo 3 · prova finale | الوحدة 3 · الاختبار النهائي |
| Officina | الورشة |
| L'officina | الورشة |
| Scheda di collaudo | بطاقة الاختبار |
| Capannone Ferri, Via dell'Industria 4 | مستودع فيرّي، شارع الصناعة 4 |
| «Il nastro è montato. Il turno parte alle 7: collaudalo prima che arrivino gli operai.» | «الحزام مركَّب. تبدأ الوردية في السابعة: اختبره قبل وصول العمّال.» |
| Ore 6:40. | الساعة 6:40. |
| Il quadro | اللوحة |
| Guarda il quadro | انظر إلى اللوحة |
| Pulsantiera | لوحة الأزرار |
| Marcia | تشغيل |
| Arresto | إيقاف |
| Emergenza | طوارئ |
| Finecorsa | نهاية المشوار |
| Sovraccarico | حمل زائد |
| Incastra un pacco | احشر طردًا |
| Riarma | أعد التسليح |
| Rimetti il pacco | أعد الطرد |
| Verbale di collaudo | محضر الاختبار |
| Le prove | الاختبارات |
| Trova il guasto | جد العطل |
| Correggi a salvamotore aperto | صحّح والقاطع الحامي للمحرك مفتوح |
| Ricollauda | أعد الاختبار |
| Il nastro non si ferma. | الحزام لا يتوقف. |
| Premi il fungo. | اضغط زر الطوارئ. |
| Il termico è scattato. | فصل المرحِّل الحراري. |
| Il termico ha fermato il nastro. | أوقف المرحِّل الحراري الحزام. |
| Apri il salvamotore prima di toccare i fili. | افتح القاطع الحامي للمحرك قبل لمس الأسلاك. |
| Lavori in corso, non manovrare | أعمال جارية، لا تشغّل |
| Ore 7:00. Il turno può partire. | الساعة 7:00. يمكن أن تبدأ الوردية. |
| Nastro trasportatore, linea 1 | الحزام الناقل، الخط 1 |
| Superata | ناجح |
| Non superata | غير ناجح |
| Guasto trovato | العطل الذي وُجد |
| Contatto 95-96 del termico fuori dal circuito di comando | تلامس 95-96 للمرحِّل الحراري خارج دائرة التحكم |
| A salvamotore aperto, 95-96 messo in serie prima del fungo | والقاطع مفتوح، وُضع 95-96 على التوالي قبل زر الطوارئ |
| Modulo 3 completato | اكتملت الوحدة 3 |
| Guarda il nastro | شاهد الحزام |
| Il nastro parte, la spia è accesa. | ينطلق الحزام، والمصباح الدليلي مضاء. |
| Il pacco arriva in fondo: il finecorsa ferma il nastro. | يصل الطرد إلى النهاية: مفتاح نهاية المشوار يوقف الحزام. |
| Arresto premuto: il nastro si ferma. | ضُغط الإيقاف: الحزام يتوقف. |
| Fungo premuto: il nastro si ferma. | ضُغط زر الطوارئ: الحزام يتوقف. |
| Pacco incastrato: il motore assorbe troppo. | طرد محشور: المحرك يسحب تيارًا زائدًا. |
