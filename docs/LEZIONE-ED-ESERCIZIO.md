# Lezione ed esercizio: modello valido per tutti i livelli

Stato: approvato il 13 ottobre 2026 e applicato a tutti i livelli c01-c55. Le specifiche aggiornate nella fase 2 (come si scrive e come si
vede ogni tipo di pagina, le regole delle previsioni) sono nel §6, in fondo; il metodo per rivedere le lezioni è in
`docs/METODO-REVIEW-PEDAGOGICA.md`.

Obiettivo: imparare a fare davvero l'impianto e vedere la luce che si accende, senza confusione. Il percorso segue lo schema del laboratorio: prima si guarda, poi si fa con aiuto, poi da soli.

Bozze statiche in `docs/bozze/`: `lezione.png`, `lezione-testo.png`, `esercizio-telefono.png`, `esercizio-desktop.png`.

## 1. La lezione

Ogni lezione è una sequenza di pagine scelte fra cinque tipi. Ogni livello usa solo quelle che gli servono.

| Tipo | Contenuto | Quando serve |
|---|---|---|
| **Spiegazione** | Titolo e paragrafi; facoltativi un disegno fisso, una tabella, un riquadro "Attenzione", una formula | Argomenti che richiedono parole: carichi e potenze, sezione dei fili, protezioni |
| **I pezzi** | Il banco vero, un componente alla volta in evidenza, il resto sbiadito, con una didascalia | Quando compare un componente nuovo |
| **Guarda come si fa** | Animazione ricavata dalla soluzione del livello: i fili si disegnano uno per volta, poi si dà corrente e la luce si accende; pausa e "Rivedi" | Livelli con un cablaggio nuovo da mostrare |
| **Previsione** | La domanda prima di provare (quella attuale) | Facoltativa, dove aiuta a ragionare |
| **Sintesi** | Punti da ricordare, in elenco | **Sempre**, come ultima pagina |

Esempio c01: Cosa costruisci (spiegazione con la stanza) → I pezzi → Guarda come si fa → Previsione → Sintesi.

**Animazione senza lavoro grafico per livello.** "Guarda come si fa" non si disegna a mano: la sessione aggiunge i fili della soluzione uno alla volta e il banco li disegna, poi alza la levetta e aziona i comandi. Per ogni livello servono solo le didascalie dei passi.

### Saltare la lezione

- "Salta la lezione" è sempre visibile in alto, su una riga, in ogni pagina della lezione: porta all'esercizio.
- Un livello già completato si riapre direttamente sull'esercizio; la lezione resta raggiungibile con "Rivedi la lezione".
- "Già lo so" resta la prova di salto senza aiuti.
- Chi salta la lezione salta anche la previsione e perde solo i relativi 10 XP.

### La sintesi resta consultabile

- Durante l'esercizio, con il pulsante "Sintesi".
- Dopo il livello superato, al posto di "Perché funziona".
- Dalla mappa, nel **Quaderno**, che raccoglie tutte le sintesi (ripasso, proiezione in classe).

## 2. La pagina dell'esercizio

Ordine dall'alto verso il basso, uguale su telefono e desktop:

1. **Passi** (per c01: 1 Fase, 2 Neutro, 3 Levetta, 4 Verifica) e sotto una riga con il compito del momento. Il passo avanza da solo quando il filo è giusto.
2. **Banco** al centro, grande, con la palette compatta sopra: tutti e cinque i colori sempre visibili, perché scegliere il colore giusto fa parte dell'esercizio. La lampada del banco si illumina quando il circuito funziona.
3. **Pulsanti**: Annulla, Annulla tutto, Aiuto, Verifica (in evidenza). Su telefono Verifica sta su una riga propria; su desktop i pulsanti stanno in una colonna a destra del banco, con la legenda sotto.
4. **Stanza grande in fondo**, a tutta larghezza. Quando l'impianto funziona la pagina scorre fino alla stanza accesa e sotto compare l'esito con gli XP, la Sintesi e "Prossimo livello".

Il banco e la stanza stanno in una colonna centrata (massimo circa 1040 px su desktop), non allineata a sinistra.

## 3. Aiuto che si riduce nel corso

- **Primi livelli**: passi dettagliati e tratteggio che mostra dove va il filo.
- **Livelli centrali**: solo i passi, senza tratteggio.
- **Livelli avanzati**: solo l'obiettivo. L'Aiuto resta disponibile e costa XP.

Ogni livello dichiara il proprio grado di aiuto nei dati (`src/content/units.js`).

## 4. Dati da aggiungere per ogni livello (quando si implementa)

- `lesson.pages`: elenco di pagine con `type` (`spiegazione`, `pezzi`, `demo`, `previsione`, `sintesi`) e i testi di ciascuna.
- `steps`: i passi dell'esercizio con il testo del compito.
- `support`: grado di aiuto (`guidato`, `passi`, `obiettivo`).
- `summary`: i punti della sintesi (usati anche dal Quaderno).

## 5. Criteri di chiarezza (richiesta di Gianluca, 16 ottobre)

La lezione deve spiegare davvero il perché, non solo il come. Per ogni livello nuovo:

- Un concetto per pagina, in ordine: perché serve, come funziona, come si collega. Prima il perché, poi i fili.
- Le parole tecniche si spiegano la prima volta che compaiono (per esempio "contatto libero da tensione", "autoritenuta").
- Una tabella dove aiuta a confrontare: tutti i casi (come buio/presenza), una cronologia (come l'allarme) o la corrispondenza tra pezzi e funzioni.
- Un riquadro "Attenzione" per la regola che non si deve sbagliare.
- Due previsioni: una sull'errore più probabile, una su un caso limite (due tasti insieme, il sensore ancora attivo).
- Ogni passo dell'esercizio dice anche il perché ("Perché: ...") oltre a quali morsetti collegare.
- La semplificazione del gioco si dice (per esempio i sensori che chiudono al pericolo, mentre nei sistemi veri sono NC in serie).

## 6. Specifiche delle pagine della lezione (fase 2, aggiornate al 17 ottobre 2026)

Come il gioco mostra ogni campo di una pagina (`src/ui2d/screens.js`, `lessonHTML`) e le regole decise nella review pedagogica.
Chi scrive una lezione nuova o ne rivede una segue queste specifiche; i test le controllano dove indicato.

### Che cosa mostra ogni tipo di pagina

| Tipo | Campi mostrati | Note |
|---|---|---|
| `spiegazione` | `title`, `paras`, `table`, `warn`, `art` o `room` (disegno) | Unico tipo che mostra le tabelle |
| `pezzi` | `title`, `focus` (pezzi illuminati sul banco), `paras`, `warn` | **Niente tabelle**. Il riquadro `warn` si vede dal 17 ottobre (prima no: test `test/lezione-vista.test.js`) |
| `demo` | `captions` (una didascalia per filo, poi corrente e comandi) | Ricavata dalla soluzione del livello |
| `previsione` | `question`, `options` (id `a`, `b`, `c`...), `correct`, `why` | Vedi sotto |
| `sintesi` | `title`; i punti vengono da `summary` del livello | Una sola, l'ultima pagina; il Quaderno raccoglie le `summary` |

### Tabelle
- Due colonne: `head` con due titoli, `rows` con coppie. Una terza colonna non si vede.
- Sul telefono la colonna di sinistra è stretta: etichette corte (il morsetto o il pezzo: `A2`, `11`, `Morsetti 3`, `Lampade`).
- Per spiegare i collegamenti: a sinistra il morsetto, a destra "che cosa ci colleghi e perché", con la conseguenza dell'errore nella stessa cella.

### Testi
- Ogni pagina di spiegazione o pezzi: circa 90 parole, mai oltre 110 (tabella esclusa); se serve di più si divide la pagina.
- Apostrofo tipografico ’ e virgolette « » nei testi; ogni frase nuova ha la traduzione araba (`node scripts/check-lang.mjs ar`).
- La `summary` ha 3-5 punti, ognuno una regola con il suo perché.

### Previsioni
- **Una risposta per ogni previsione.** Una lezione può avere più previsioni: ognuna aspetta la sua risposta e mostra la sua
  spiegazione (dal 17 ottobre; prima dalla seconda in poi comparivano già risposte). Solo la prima vale i punti (10 XP).
  Test `test/previsioni.test.js`; lo stato sta in `us.pred` (prima previsione) e `us.more` (le altre, per pagina) in `src/engine/session.js`.
- **Ordine mescolato.** Le opzioni si mostrano in un ordine mescolato ma fisso per domanda (`shuffledOptions` in `screens.js`);
  le risposte si riconoscono dall'id, quindi la posizione nel file non conta. Vale anche per la sfida guasto. Test `test/opzioni.test.js`.
- **Lunghezza equilibrata.** La risposta giusta è lunga tra 0,85 e 1,15 volte la sbagliata più lunga, così non si riconosce dalla
  lunghezza (prima era la più lunga in 63 previsioni su 80). Il test `test/opzioni.test.js` fallisce se una previsione esce da questi
  limiti; `node scripts/review/misure.mjs <modulo>` mostra il rapporto per ogni previsione.
- **Come si scrivono le opzioni:** tre opzioni, ognuna una frase con il suo "perché" (giusto o sbagliato), per esempio
  "Si spegne: il relè ha cambiato stato e lo ricorda" / "Si spegne solo finché tengo premuto, poi torna accesa". Le sbagliate sono
  errori che un allievo potrebbe pensare davvero, mai assurdità; se la giusta è troppo lunga si accorcia la giusta, se è troppo corta
  ("Accesa.") le si aggiunge il motivo. La `why` spiega il perché della giusta e, se serve, perché la convinzione sbagliata non regge.
- Le domande della sfida guasto (`fault.diagnosis`) fanno parte dell'esercizio e non si riscrivono; il mescolamento basta.

