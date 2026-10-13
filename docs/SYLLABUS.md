# Syllabus del Laboratorio elettrico

Bozza 1. Questo documento fissa la struttura del gioco; i dettagli di ogni livello si scrivono uno alla volta, in ordine di build.

| Sezione | Stato |
|---|---|
| 1. Idea del gioco | definita |
| 2. Come è fatto un livello | definita |
| 3. Obiettivi di apprendimento | definita; il confronto con gli standard formativi lo può proporre il collega di laboratorio |
| 4. Mappa di milestone e livelli | definita per la Milestone 0 e la 1, abbozzata per la 2 e la 3 |
| 5. Tipi di esercizio, corrente visibile e schemi | definita e dettagliata (5.1-5.5) |
| 6. Guasti, multimetro, sicurezza, dimensionamento | definita nella progressione, da dettagliare per livello |
| 7. Lezioni e prologhi | definita nella forma, testi da scrivere |
| 8. XP, gradi e classifica | proposta da calibrare |
| 9. Raccolta dati | proposta, da condividere con il referente privacy |
| 10. Build | definita |
| 11. Decisioni | quattro prese, il resto aperto |

## 1. Idea del gioco

Un gioco a livelli per chi parte da zero. Ogni livello introduce un solo concetto nuovo e lo rimette in gioco nei livelli successivi. Si impara facendo: si cabla, si prevede cosa succederà, si dà corrente, si capisce perché ha funzionato o no.

Il percorso ha tre milestone. Ognuna si chiude con una prova speciale in una pagina dedicata, con una scena 3D che reagisce all'impianto realizzato.

- **Milestone 0, Fondamenta:** dal circuito chiuso al punto luce invertito.
- **Milestone 1, Il trilocale:** un appartamento civile con i tre tipi di punto luce (interrotto, deviato, invertito).
- **Milestone 2, Civile avanzato:** relè, presa comandata con punto luce, luce temporizzata, campanello, quadro con protezioni.
- **Milestone 3, Industriale:** trifase, teleruttore, motore e nastro trasportatore.

L'ordine dei livelli può cambiare e se ne possono inserire tra quelli già fatti: ogni livello ha un identificativo stabile (per esempio `c04-parallelo`), non un numero. I salvataggi degli allievi seguono l'identificativo.

## 2. Come è fatto un livello

Ogni livello è una piccola unità didattica. Non tutti i passi compaiono in tutti i livelli: i primi sono molto guidati, i successivi tolgono aiuti.

1. **Lezione breve.** Tre-sei frasi con un'animazione o un disegno. Il prologo animato lungo, in più scene come in sito-feudo, compare solo all'ingresso di una milestone.
2. **Previsione.** Prima di dare corrente, l'allievo risponde a una domanda chiusa (si accende? scatta qualcosa? quale lampada?).
3. **Esempio guidato.** Un circuito già cablato in cui si vede dove passa la corrente.
4. **Esercizio.** Si cabla, di solito dallo schema, a volte con parti già collegate da completare.
5. **Verifica.** Funziona, colori, sicurezza, con la spiegazione del perché di ogni errore, collegata al principio violato.
6. **Sfida guasto.** Un impianto con un difetto da trovare e correggere.
7. **Bonus (facoltativo).** Variante più difficile, per esempio partire dal contatore.

Due modalità: **apprendimento** (suggerimenti, soluzione, verifica quando si vuole) e **verifica** (nessun aiuto, controllo finale, esito registrato). Le prove di milestone sono sempre in modalità verifica.

## 3. Obiettivi di apprendimento

Gli identificativi servono a collegare lezioni, esercizi, XP e statistiche per il docente. Non c'è un documento di riferimento da cui partire: gli obiettivi sono quelli del gioco, scritti da me. La corrispondenza con le competenze degli standard formativi regionali può proporla il collega di laboratorio e si aggiunge come colonna, senza toccare il resto.

| Id | Obiettivo | Milestone |
|---|---|---|
| O1 | Riconoscere fase, neutro e terra e i colori dei loro fili | 0 |
| O2 | Spiegare perché serve un circuito chiuso (andata e ritorno) | 0 |
| O3 | Cablare una presa con fase, neutro e terra | 0 |
| O4 | Inserire un interruttore sulla fase, mai sul neutro | 0 |
| O5 | Alimentare più carichi in parallelo | 0 |
| O6 | Comandare una luce da due punti (deviato) | 0 |
| O7 | Comandare una luce da tre punti (invertito) | 0 |
| O8 | Leggere uno schema funzionale e riconoscere la simbologia normalizzata | 0 |
| O9 | Passare dallo schema al cablaggio e dal cablaggio allo schema | 0, 1 |
| O10 | Verificare un impianto: funzionamento, colori, sicurezza | 0, 1 |
| O11 | Seguire la procedura di sicurezza prima di lavorare sui fili | 0, 1, 2, 3 |
| O12 | Usare il multimetro (continuità, tensione) per cercare un guasto | 1, 2, 3 |
| O13 | Scegliere protezione e sezione dei cavi per linee luce e prese | 0, 1, 2 |
| O14 | Comandare un carico con relè e pulsanti | 2 |
| O15 | Realizzare una presa comandata con punto luce | 2 |
| O16 | Realizzare una luce temporizzata | 2 |
| O17 | Realizzare un circuito a bassa tensione con trasformatore (campanello) | 2 |
| O18 | Collegare un carico trifase | 3 |
| O19 | Realizzare marcia e arresto con teleruttore e autoritenuta | 3 |
| O20 | Proteggere un motore (relè termico) e riconoscere la mancanza di una fase | 3 |
| O21 | Invertire la marcia di un motore con interblocco | 3 |
| O22 | Inserire emergenza e finecorsa in un comando motore | 3 |

## 4. Mappa di milestone e livelli

### Milestone 0, Fondamenta

I livelli che già esistono sono segnati; due livelli sono nuovi e si inseriscono tra quelli esistenti.

| Id | Livello | Nuovo | Obiettivi | Esercizi e sfida guasto |
|---|---|---|---|---|
| c01-circuito-chiuso | Il circuito chiuso | Lampada alimentata con fase e neutro | O1, O2 | Previsione (con un solo filo si accende?); cablaggio; guasto: un filo staccato da trovare guardando dove passa la corrente |
| c02-presa | La presa | Terra e perché serve (esiste) | O1, O3, O8, O13 | Primo schema funzionale con i simboli e cablaggio dallo schema (tipo A); scelta di protezione e cavo per la linea prese; guasto: fase e neutro scambiati sulla presa |
| c03-interrotto | L'interruttore | Interrompere la fase (esiste) | O4, O8 | Cablaggio dallo schema; sullo schema si vede dove l'interruttore apre il circuito; guasto: interruttore sul neutro (luce spenta ma morsetti in tensione) |
| c04-parallelo | Due lampade, un interruttore | Parallelo (nuovo) | O5, O8, O13 | Cablaggio dallo schema; scelta di protezione e cavo per la linea luce |
| c05-deviato | Il deviato | Comando da due punti (esiste) | O6, O9 | Primo schema multifilare; dal cablaggio allo schema (tipo B); guasto: fili 1 e 2 incrociati |
| c06-invertito | L'invertito | Comando da tre punti (esiste) | O7, O9, O12 | Riconoscere gli errori in uno schema dato (tipo C); guasto con il tester di tensione |

Bonus in ogni livello della Milestone 0: partire dal contatore (esiste già come modalità).

### Milestone 1, Il trilocale

Una pagina speciale con un appartamento in 3D, aperto da un percorso di tre cablaggi più il collaudo.

- **Pianta:** ingresso con corridoio, soggiorno, camera, bagno e cucina. Gli altri locali sono scena.
- **Bagno, punto luce interrotto.** **Camera, punto luce deviato** (porta e comodino). **Corridoio, punto luce invertito** (ingresso, soggiorno, camera).
- Ogni circuito si cabla sul banco, con il suo schema di partenza. Appena è giusto, nella scena 3D la stanza si illumina.
- Una pianta con i simboli e le linee dei circuiti (schema unifilare, un tratto per più conduttori) mostra dove stanno i punti luce e i comandi: l'allievo la legge per capire quanti e quali fili servono in ogni tratto.
- **Collaudo finale** in modalità verifica: i tre circuiti insieme dal quadro, una verifica con il multimetro, un guasto nascosto da trovare, la scelta delle protezioni e dei cavi per le tre linee.
- Premio: sblocco della Milestone 2 e del grado di Operatore.

### Milestone 2, Civile avanzato (abbozzo)

| Id | Livello | Obiettivi |
|---|---|---|
| c07-rele-impulsi | Pulsanti e relè ad impulsi: comando da molti punti | O14 |
| c08-presa-comandata | Presa comandata con punto luce | O15 |
| c09-temporizzato | Luce a tempo (scale) | O16 |
| c10-campanello | Campanello e trasformatore | O17 |
| c11-quadro | Il quadro: differenziale, magnetotermici, dimensionamento delle linee | O13 |

Prova di milestone: appartamento completo, con scena giorno e notte.

### Milestone 3, Industriale (abbozzo)

| Id | Livello | Obiettivi |
|---|---|---|
| c12-trifase | Il trifase e il motore | O18 |
| c13-marcia-arresto | Teleruttore, marcia e arresto, autoritenuta | O19 |
| c14-termico | Relè termico e fase mancante | O20 |
| c15-inversione | Inversione di marcia con interblocco | O21 |
| c16-nastro | Il nastro trasportatore: emergenza e finecorsa | O22 |

Prova di milestone: nastro trasportatore in 3D. Bonus possibile: avviamento stella-triangolo.

## 5. Tipi di esercizio, corrente visibile e schemi

### 5.1 Tipi di esercizio

| Tipo | Che cosa si fa | Comparsa |
|---|---|---|
| A. Dallo schema al cablaggio | Si ha uno schema e si cabla l'impianto sul banco | da c02 |
| B. Dal cablaggio allo schema | Si ha un impianto cablato e si disegna lo schema | da c05 |
| C. Riconoscere gli errori | Si ha uno schema con errori da segnalare | da c06 |
| D. Ricerca guasti | Impianto con un difetto da trovare con tester e multimetro | da c01, in forma semplice |
| E. Dimensionamento | Si scelgono protezione e sezione dei cavi per una linea | da c02 |
| F. Previsione | Domanda chiusa prima di dare corrente | tutti |

### 5.2 Vedere dove passa la corrente

**Che cosa mostra.** Oggi sul banco un filo collegato alla fase si anima appena si dà corrente, anche se il circuito è aperto: tensione e corrente appaiono come la stessa cosa. Nel nuovo gioco ogni filo e ogni contatto interno di un componente ha uno di quattro stati:

| Stato | Significato | Come si vede |
|---|---|---|
| Non collegato | Non arriva a nessuna sorgente | Aspetto normale |
| In tensione sulla fase | Porta la fase ma il circuito non è chiuso da questa parte | Alone fisso arancione |
| Sul neutro | Collegato al neutro, senza corrente | Alone fisso azzurro |
| Percorso da corrente | Sta sul percorso chiuso tra sorgente e carico acceso | Puntini che scorrono lungo il filo |

Distinguere "in tensione" da "percorso da corrente" è uno degli obiettivi didattici principali: spiega perché un interruttore sul neutro lascia la lampada spenta ma i morsetti pericolosi, e perché un filo che arriva alla lampada può non servire a niente.

**Dov'è interrotto.** Il punto in cui il circuito è aperto (un interruttore aperto, un filo che manca) si evidenzia con un segno. Il messaggio dice la cosa in parole: "La fase arriva fino all'interruttore e lì si ferma".

**Andata e ritorno.** In alternata la corrente cambia verso di continuo. Sul banco i puntini vanno lungo la fase verso il carico e tornano lungo il neutro, per far capire che il circuito è un giro; non indicano un verso reale e la lezione lo dice.

**Nel deviato e nell'invertito.** Cambiando posizione a un comando, il percorso si sposta: l'allievo vede quale dei due fili di collegamento sta lavorando e quale è fermo.

**Progressione degli aiuti**
- c01-c04: sempre acceso.
- c05-c06: si accende con un pulsante "Mostra la corrente".
- Dalla Milestone 1: solo in modalità apprendimento. Nelle prove sparisce e il multimetro prende il suo posto.

**Nel motore.** Una funzione `flowOf` restituisce, per ogni filo e per ogni contatto interno, uno dei quattro stati e l'elenco dei punti di apertura. Una vista 2D, il disegno degli schemi e la scena 3D leggono lo stesso risultato. Per decidere se un filo è percorso da corrente si cerca se sta su un cammino tra la sorgente e un carico acceso: un filo lasciato attaccato a metà resta "in tensione" ma non "percorso".

### 5.3 Schemi collegati al banco

**Tipi di schema**

| Schema | Che cosa mostra | Quando |
|---|---|---|
| Funzionale | Come funziona: simboli normalizzati disposti per leggere la logica (alimentazione, comandi in serie al carico), senza il disegno fisico | da c02 |
| Multifilare | Come si collega: ogni conduttore, ogni morsetto con la sua etichetta e il colore del filo, nella disposizione dei componenti sul banco | da c05 |
| Unifilare (pianta) | Dove stanno punti luce e comandi nell'appartamento, un tratto per più conduttori | Milestone 1 |

I simboli sono quelli normalizzati (serie CEI EN 60617, da verificare dal collega) e si disegnano in SVG, un po' alla volta: lampada, interruttore, deviatore, invertitore, presa, magnetotermico e contatore all'inizio; pulsante, bobina, contatti, motore, differenziale più avanti. Una legenda dei simboli è sempre a portata di tocco, e la lezione di ogni livello presenta i simboli nuovi.

**Collegamento tra schema e banco.** Lo schema non è un disegno a parte: usa gli stessi componenti e gli stessi morsetti del banco (`Q.F`, `D1.C`, ...), con le stesse etichette.
- Si tocca un componente nello schema e si illumina sul banco, e viceversa.
- Durante un esercizio di tipo A, ogni collegamento dello schema passa da tratteggiato grigio a pieno quando sul banco quei due morsetti sono collegati. Conta il collegamento elettrico, non il filo diretto: se due morsetti arrivano alla stessa rete passando da un altro componente, il collegamento vale.
- La corrente visibile (5.2) compare anche sullo schema.

**Dove sta nella pagina.** Su schermo largo lo schema occupa la colonna di sinistra, sotto la stanza; sul telefono diventa una scheda accanto al banco (Banco · Schema).

**Chi disegna gli schemi.** I primi livelli hanno uno schema disegnato a mano, uno per livello, come contenuto della vista: posizione dei simboli e tracciato delle linee. Una generazione automatica si valuta solo se i livelli diventano molti.

### 5.4 Come si svolgono e si verificano i tre tipi

**A. Dallo schema al cablaggio.** Lo schema è davanti e l'allievo cabla. La verifica è quella di oggi (funziona, colori, sicurezza) e in più controlla la corrispondenza con lo schema: quali collegamenti dello schema mancano sul banco. Il funzionamento vale più della fedeltà: un cablaggio diverso ma corretto prende le stelle, con un avviso.

**B. Dal cablaggio allo schema.** Il banco è già cablato (con i colori) e lo schema ha i simboli ma nessuna linea. L'allievo disegna i collegamenti toccando due morsetti dello schema. Un collegamento disegnato vale come un filo: il motore confronta la rete disegnata con quella del banco e dice cosa manca e cosa è di troppo. Lo stesso controllo di funzionamento si applica anche allo schema disegnato.

**C. Riconoscere gli errori in uno schema dato.** Si mostra uno schema con uno o più errori (per esempio interruttore sul neutro, fili 1 e 2 scambiati, terra mancante). L'allievo tocca i collegamenti che ritiene sbagliati e conferma. La verifica confronta con l'elenco degli errori inseriti; la spiegazione di ogni errore viene dal motore, che esegue il controllo sullo schema errato e produce gli stessi codici di una verifica normale. Si contano anche i segnalati a torto.

### 5.5 Che cosa serve nel motore

Il motore resta senza grafica. Servono quattro aggiunte, tutte testabili senza pagina:

1. `flowOf`: stato di ogni filo e contatto e punti di apertura (5.2).
2. `netlist` e `compareNetlists`: la rete elettrica canonica di un cablaggio o di uno schema, e le differenze tra due reti (mancante, in più).
3. Lo **schema come dato** nei contenuti: `{ id, kind, connections, errors? }` con le connessioni per morsetto. La geometria (dove sta ogni simbolo) resta nella vista, come oggi per il banco.
4. Il controllo di colori **facoltativo**: lo schema funzionale non ha colori, quindi la verifica può saltarli.

Test previsti: il percorso della corrente per ogni livello e ogni posizione dei comandi; lo schema soluzione di ogni livello è equivalente alla soluzione sul banco; ogni errore inserito negli schemi di tipo C è riconosciuto dalla verifica.

## 6. Guasti, multimetro, sicurezza, dimensionamento

Ogni livello ha la sua sfida guasto. La forma cresce con le build:

1. **Filo sbagliato:** un cablaggio già fatto con un errore da trovare, usando la visualizzazione della corrente (Milestone 0).
2. **Guasto nascosto con multimetro:** conduttore interrotto, morsetto allentato, neutro interrotto dall'interruttore, dispersione verso terra. Il multimetro ha continuità (solo a circuito spento) e tensione (solo a circuito in tensione). Usare la funzione sbagliata ha una conseguenza spiegata (Milestone 1).
3. **Guasti dei componenti:** contatto incollato, bobina interrotta, fase mancante nel trifase (Milestone 2 e 3).

**Sicurezza.** Nella Milestone 0 il quadro si spegne da solo se si toccano i fili con corrente, com'è oggi, e il gioco lo dice. Dalla Milestone 1 la procedura (togliere tensione, verificare l'assenza di tensione, intervenire) fa parte dell'esercizio e lavorare sotto tensione costa XP.

**Dimensionamento.** Compare con la presa (c02) e la luce (c04) come scelta tra poche opzioni, per capire che la protezione deve proteggere il cavo. Valori tipici dell'impianto civile: linee luce con interruttore automatico da 10 A e cavo da 1,5 mm²; linee prese da 16 A e cavo da 2,5 mm²; differenziale da 30 mA. Sono valori che ho scelto come punto di partenza didattico: il collega di laboratorio può proporre modifiche e si correggono in un solo posto, nei dati dei livelli. Nella Milestone 2 si passa al dimensionamento di tutte le linee del quadro.

## 7. Lezioni e prologhi

- **Lezione di livello:** testo breve, in un riquadro prima dell'esercizio, con un disegno o una piccola animazione (SVG). Si può riaprire in ogni momento.
- **Prologo di milestone:** da sei a otto scene animate con una frase per scena, saltabili, come nel prologo di sito-feudo. Per esempio, per la Milestone 0: la corrente che fa un giro e torna; per il trilocale: una casa al buio che si accende stanza per stanza.
- Tutti i testi stanno in `src/content`, separati dal motore, e si possono scrivere o correggere senza toccare il codice.
- Rispetto di `prefers-reduced-motion`: le animazioni si fermano e il testo resta.

## 8. XP, gradi e classifica

Semplice, come in sito-feudo: un punteggio finale che si legge subito.

| Voce | XP |
|---|---|
| Funziona | 40 |
| Colori dei fili | 30 |
| Sicurezza | 30 |
| Previsione giusta | +10 |
| Nessun suggerimento usato | +10 |
| Sfida guasto risolta | +20 |
| Suggerimento usato | −5 ciascuno |
| Soluzione mostrata | XP del livello limitati a 30 |
| Prova di milestone superata | +100 |

- Conta il miglior tentativo di ogni livello, quindi rigiocare non fa accumulare XP.
- Si propongono gradi crescenti con gli XP totali (per esempio Apprendista, Aiutante, Operatore, Installatore, Collaudatore). Le soglie si tarano dopo la prima prova in classe.
- La classifica ordina per XP totali, poi per meno suggerimenti, poi per chi ha raggiunto prima il punteggio.
- Pannello docente come in sito-feudo, con in più le statistiche degli errori (sezione 9). La classifica è unica: il docente la azzera tra un gruppo e l'altro, come nel feudo.

## 9. Raccolta dati

**Principio:** solo quello che serve alla classifica e alla didattica, nessun dato sensibile.

Si raccoglie:

- **Nome o soprannome,** a testo libero fino a 20 caratteri come nel feudo, con moderazione del docente. Accanto al campo compare l'invito a usare il solo nome di battesimo o un soprannome, non il cognome.
- **Identificativo casuale di partita,** generato nel browser, non collegato a una persona.
- **Per ogni livello:** stelle, XP, numero di tentativi, suggerimenti usati, soluzione mostrata sì/no.
- **Errori per tipo,** in forma aggregata e senza testo libero (per esempio "interruttore sul neutro": 14 volte), per dire al docente dove la classe sbaglia.

Non si raccolgono cognome, email, indirizzo IP, posizione, né altro testo libero oltre al nome o soprannome.

**Come funziona in sito-feudo, e che cosa riuso.** Il feudo salva la partita nel browser, a fine gioco invia nome e punteggio a un Foglio Google tramite uno script, mostra la classifica leggendo lo stesso foglio e ha un pannello docente con password. Conta le visite con GoatCounter, senza cookie. Il modello va bene per un gioco di classe perché non richiede un server da mantenere e i dati restano nell'account del docente. Per il laboratorio propongo di riusarlo, con due differenze:

1. **Moderazione.** Come nel feudo il nome è libero (fino a 20 caratteri). In più il pannello docente permette di rinominare o togliere una riga, e un filtro semplice nasconde le parole più comuni da evitare.
2. **Controllo del punteggio.** Nel feudo il codice del punteggio si firma con un valore nascosto dentro la pagina, quindi uno studente esperto potrebbe falsificarlo. Nel laboratorio il motore è puro JavaScript e può essere rieseguito sul foglio (gli script di Google sono JavaScript): lo script può ricalcolare stelle e XP dai cablaggi inviati e rifiutare i punteggi che non tornano. Per un gioco di classe a bassa posta in gioco si può partire senza e aggiungerlo dopo.

**Privacy.** Un nome di battesimo, per chi conosce la classe, identifica una persona. Con allievi minorenni il trattamento va quindi concordato con il referente per la privacy della scuola prima di raccogliere dati. In gioco serve un'informativa breve in italiano semplice. Questa non è una valutazione legale.

## 10. Build

Ogni build è utilizzabile in aula da sola e lascia le precedenti funzionanti. Il formato dei dati (livelli, salvataggi, eventi) è versionato; i livelli hanno identificativi stabili.

| Build | Contenuto | Novità tecniche |
|---|---|---|
| B0 | Separazione di motore, contenuti e vista | fatta, sul ramo `separazione-motore-vista` |
| B1 Fondamenta 1 | Livelli c01-c04 (circuito chiuso, presa, interruttore, parallelo); lezioni brevi; previsione; esempio guidato; spiegazioni degli errori; corrente visibile; schema funzionale e esercizi di tipo A; dimensionamento semplice; XP e profilo nel browser; prologo della Milestone 0 | Syllabus come dato, identificativi dei livelli e migrazione dei salvataggi, registro locale degli eventi, `flowOf` nel motore, simboli SVG dei primi componenti, scheda dello schema |
| B2 Fondamenta 2 | Livelli c05-c06 (deviato, invertito); schema multifilare; esercizi di tipo B e C; guasto "filo sbagliato"; Milestone 0 completa | Editor degli schemi, `netlist` e `compareNetlists`, schemi con errori inseriti |
| B3 Classifica | Classifica condivisa su Foglio Google, pannello docente, statistiche degli errori | Invio punteggi, eventualmente ricalcolo sul foglio |
| B4 Milestone 1 | Trilocale: pagina 3D, pianta unifilare, multimetro, guasti nascosti, procedura di sicurezza, collaudo | three.js nel build, vista del trilocale, difetti nei componenti, multimetro nel motore |
| B5 Milestone 2 | Livelli c07-c11 e prova di milestone | Relè e componenti con stato derivato dal circuito, temporizzazione |
| B6 Milestone 3 | Livelli c12-c16 e nastro trasportatore | Trifase, teleruttori, motore, risoluzione fino a stato stabile per l'autoritenuta |
| B7 | Rifiniture, bonus, eventuale stella-triangolo, eventuale verifica dei punteggi sul foglio | |

Per ogni build: i test del motore e del layout restano verdi, la pagina costruita si prova in un browser simulato e si controlla a mano su telefono e computer.

**Scena 3D delle milestone.** three.js incluso nel file generato (alcune centinaia di KB). Modelli in forme geometriche semplici, coerenti con lo stile del banco 2D, e dove serve asset liberi (per esempio con licenza CC0, da verificare uno per uno e annotare nel repository). La scena legge lo stesso stato del motore: una stanza si illumina, il motore gira, il nastro si muove.

## 11. Decisioni

**Prese**

1. Trilocale: bagno interrotto, camera deviata, corridoio invertito.
2. Nome del giocatore a testo libero, con moderazione del docente.
3. Obiettivi e valori di dimensionamento: li ho scelti io come punto di partenza; il collega di laboratorio può proporre modifiche.
4. Nessun codice classe: classifica unica, azzerata dal docente tra un gruppo e l'altro.

**Aperte**

5. Controllo dei punteggi sul foglio: in B3 o dopo?
6. XP e gradi: i numeri della sezione 8 si tarano dopo la prima prova in classe.
7. Asset 3D: solo forme semplici, o anche modelli liberi?
8. Dove si ospita la versione per gli allievi: come sito-feudo, su GitHub Pages?
9. Schema multifilare: la disposizione dei componenti ricalca quella del banco (consigliato, più facile da collegare) o è libera?
