# Syllabus del Laboratorio elettrico

Bozza 1. Questo documento fissa la struttura del gioco; i dettagli di ogni livello si scrivono uno alla volta, in ordine di build.

| Sezione | Stato |
|---|---|
| 1. Idea del gioco | definita |
| 2. Come è fatto un livello | definita |
| 3. Obiettivi di apprendimento | definita, da confrontare con gli standard formativi |
| 4. Mappa di milestone e livelli | definita per la Milestone 0 e la 1, abbozzata per la 2 e la 3 |
| 5. Tipi di esercizio e schemi | definita |
| 6. Guasti, multimetro, sicurezza, dimensionamento | definita nella progressione, da dettagliare per livello |
| 7. Lezioni e prologhi | definita nella forma, testi da scrivere |
| 8. XP, gradi e classifica | proposta da calibrare |
| 9. Raccolta dati | proposta, da condividere con il referente privacy |
| 10. Build | definita |
| 11. Decisioni aperte | da chiudere |

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

Gli identificativi servono a collegare lezioni, esercizi, XP e statistiche per il docente. La corrispondenza con le competenze degli standard formativi regionali va fatta partendo dal documento di riferimento del corso, che non ho ancora: i testi qui sotto sono obiettivi del gioco, non la formulazione ufficiale.

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
| c02-presa | La presa | Terra e perché serve (esiste) | O1, O3, O13 | Cablaggio dallo schema; scelta di protezione e cavo per la linea prese; guasto: fase e neutro scambiati sulla presa |
| c03-interrotto | L'interruttore | Interrompere la fase (esiste) | O4, O8 | Primo schema funzionale in sola lettura; guasto: interruttore sul neutro (luce spenta ma morsetti in tensione) |
| c04-parallelo | Due lampade, un interruttore | Parallelo (nuovo) | O5, O13, O9 | Dallo schema al cablaggio; scelta di protezione e cavo per la linea luce |
| c05-deviato | Il deviato | Comando da due punti (esiste) | O6, O9 | Dal cablaggio allo schema; guasto: fili 1 e 2 incrociati |
| c06-invertito | L'invertito | Comando da tre punti (esiste) | O7, O9, O12 | Riconoscere gli errori in uno schema dato; guasto con il tester di tensione |

Bonus in ogni livello della Milestone 0: partire dal contatore (esiste già come modalità).

### Milestone 1, Il trilocale

Una pagina speciale con un appartamento in 3D, aperto da un percorso di tre cablaggi più il collaudo.

- **Pianta:** ingresso con corridoio, soggiorno, camera, bagno e cucina. Gli altri locali sono scena.
- **Bagno, punto luce interrotto.** **Camera, punto luce deviato** (porta e comodino). **Corridoio, punto luce invertito** (ingresso, soggiorno, camera).
- Ogni circuito si cabla sul banco, con il suo schema funzionale di partenza. Appena è giusto, nella scena 3D la stanza si illumina.
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

## 5. Tipi di esercizio e schemi

| Tipo | Che cosa si fa | Comparsa |
|---|---|---|
| A. Dallo schema al cablaggio | Si ha lo schema funzionale e si cabla l'impianto | da c02 |
| B. Dal cablaggio allo schema | Si ha un impianto cablato e si completa lo schema | da c05 |
| C. Riconoscere gli errori | Si ha uno schema con errori da segnalare | da c06 |
| D. Ricerca guasti | Impianto con un difetto da trovare con tester e multimetro | da c01, in forma semplice |
| E. Dimensionamento | Si scelgono protezione e sezione dei cavi per una linea | da c02 |
| F. Previsione | Domanda chiusa prima di dare corrente | tutti |

**Schemi.** Lo schema funzionale e lo schema multifilare, con la simbologia normalizzata, si affiancano al banco. Si introducono in sola lettura dal livello c03. Due note tecniche:

- Gli schemi sono disegni: la loro disposizione appartiene alla vista, ma il motore deve poter dire quale schema corrisponde al modello e viceversa.
- Per i primi livelli gli schemi si disegnano a mano, uno per livello, come contenuto. Una generazione automatica si valuta solo se il numero di livelli lo giustifica.

**Vedere dove passa la corrente.** Sul banco un filo è di tre tipi: non collegato, in tensione (porta fase o neutro ma il circuito non è chiuso), percorso da corrente (fa parte del circuito chiuso). Distinguere tensione e corrente è uno degli obiettivi didattici principali. La visualizzazione è sempre accesa negli esempi guidati e si spegne gradualmente negli esercizi, fino a sparire in modalità verifica.

## 6. Guasti, multimetro, sicurezza, dimensionamento

Ogni livello ha la sua sfida guasto. La forma cresce con le build:

1. **Filo sbagliato:** un cablaggio già fatto con un errore da trovare, usando la visualizzazione della corrente (Milestone 0).
2. **Guasto nascosto con multimetro:** conduttore interrotto, morsetto allentato, neutro interrotto dall'interruttore, dispersione verso terra. Il multimetro ha continuità (solo a circuito spento) e tensione (solo a circuito in tensione). Usare la funzione sbagliata ha una conseguenza spiegata (Milestone 1).
3. **Guasti dei componenti:** contatto incollato, bobina interrotta, fase mancante nel trifase (Milestone 2 e 3).

**Sicurezza.** Nella Milestone 0 il quadro si spegne da solo se si toccano i fili con corrente, com'è oggi, e il gioco lo dice. Dalla Milestone 1 la procedura (togliere tensione, verificare l'assenza di tensione, intervenire) fa parte dell'esercizio e lavorare sotto tensione costa XP.

**Dimensionamento.** Compare con la presa (c02) e la luce (c04) come scelta tra poche opzioni, per capire che la protezione deve proteggere il cavo. Valori tipici dell'impianto civile: linee luce con interruttore automatico da 10 A e cavo da 1,5 mm²; linee prese da 16 A e cavo da 2,5 mm²; differenziale da 30 mA. Questi valori vanno confermati con la norma e i materiali del corso prima di scriverli come soluzione. Nella Milestone 2 si passa al dimensionamento di tutte le linee del quadro.

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
- Pannello docente come in sito-feudo, con in più il filtro per classe e le statistiche degli errori (sezione 9).

## 9. Raccolta dati

**Principio:** solo quello che serve alla classifica e alla didattica, nessun dato personale.

Si raccoglie:

- **Nickname.** Non si usa il nome vero.
- **Codice classe,** facoltativo, per distinguere i gruppi (per esempio 2B).
- **Identificativo casuale di partita,** generato nel browser, non collegato a una persona.
- **Per ogni livello:** stelle, XP, numero di tentativi, suggerimenti usati, soluzione mostrata sì/no.
- **Errori per tipo,** in forma aggregata e senza testo libero (per esempio "interruttore sul neutro": 14 volte), per dire al docente dove la classe sbaglia.

Non si raccolgono nome, cognome, email, indirizzo IP, posizione, né testo libero oltre al nickname.

**Come funziona in sito-feudo, e che cosa riuso.** Il feudo salva la partita nel browser, a fine gioco invia nome e punteggio a un Foglio Google tramite uno script, mostra la classifica leggendo lo stesso foglio e ha un pannello docente con password. Conta le visite con GoatCounter, senza cookie. Il modello va bene per un gioco di classe perché non richiede un server da mantenere e i dati restano nell'account del docente. Per il laboratorio propongo di riusarlo, con tre differenze:

1. **Nickname invece del nome libero.** Nel feudo si scrive il nome (fino a 20 caratteri). Per allievi minorenni propongo un nickname scelto da un elenco (aggettivo più animale) con la possibilità, per il docente, di rinominarlo dal pannello.
2. **Codice classe,** assente nel feudo, perché qui le classi sono più d'una.
3. **Controllo del punteggio.** Nel feudo il codice del punteggio si firma con un valore nascosto dentro la pagina, quindi uno studente esperto potrebbe falsificarlo. Nel laboratorio il motore è puro JavaScript e può essere rieseguito sul foglio (gli script di Google sono JavaScript): lo script può ricalcolare stelle e XP dai cablaggi inviati e rifiutare i punteggi che non tornano. Per un gioco di classe a bassa posta in gioco si può partire senza e aggiungerlo dopo.

**Privacy.** Anche un nickname con un codice classe, per chi conosce la classe, può essere ricondotto a una persona, quindi il trattamento va concordato con il referente per la privacy della scuola prima di raccogliere dati di allievi minorenni. In gioco serve un'informativa breve in italiano semplice. Questa non è una valutazione legale.

## 10. Build

Ogni build è utilizzabile in aula da sola e lascia le precedenti funzionanti. Il formato dei dati (livelli, salvataggi, eventi) è versionato; i livelli hanno identificativi stabili.

| Build | Contenuto | Novità tecniche |
|---|---|---|
| B0 | Separazione di motore, contenuti e vista | fatta, sul ramo `separazione-motore-vista` |
| B1 Fondamenta | Livelli c01-c06, lezioni, previsione, esempio guidato, spiegazioni, corrente visibile, schema funzionale in lettura, XP e profilo con nickname nel browser, prologo della Milestone 0 | Syllabus come dato, identificativi dei livelli e migrazione dei salvataggi, registro locale degli eventi, percorso della corrente nel motore |
| B2 Classifica | Classifica condivisa su Foglio Google, pannello docente, codice classe, statistiche degli errori | Invio punteggi, eventualmente ricalcolo sul foglio |
| B3 Milestone 1 | Trilocale: pagina 3D, esercizi di tipo A, B, C, multimetro, guasti nascosti, procedura di sicurezza | three.js nel build, vista del trilocale, difetti nei componenti, multimetro nel motore |
| B4 Milestone 2 | Livelli c07-c11 e prova di milestone | Relè e componenti con stato derivato dal circuito, temporizzazione |
| B5 Milestone 3 | Livelli c12-c16 e nastro trasportatore | Trifase, teleruttori, motore, risoluzione fino a stato stabile per l'autoritenuta |
| B6 | Rifiniture, bonus, eventuale stella-triangolo, eventuale verifica dei punteggi sul foglio | |

Per ogni build: i test del motore e del layout restano verdi, la pagina costruita si prova in un browser simulato e si controlla a mano su telefono e computer.

**Scena 3D delle milestone.** three.js incluso nel file generato (alcune centinaia di KB). Modelli in forme geometriche semplici, coerenti con lo stile del banco 2D, e dove serve asset liberi (per esempio con licenza CC0, da verificare uno per uno e annotare nel repository). La scena legge lo stesso stato del motore: una stanza si illumina, il motore gira, il nastro si muove.

## 11. Decisioni aperte

1. Nickname scelto da elenco, oppure testo libero con moderazione del docente?
2. Codice classe: sì, e chi lo assegna?
3. Controllo dei punteggi sul foglio: subito in B2 o dopo?
4. Composizione del trilocale: bagno interrotto, camera deviata, corridoio invertito. Va bene?
5. XP e gradi: i numeri della sezione 8 sono un punto di partenza.
6. Documento di riferimento per gli obiettivi (standard formativi) e per i valori di dimensionamento.
7. Asset 3D: solo forme semplici, o anche modelli liberi?
8. Dove si ospita la versione per gli allievi: come sito-feudo, su GitHub Pages?
