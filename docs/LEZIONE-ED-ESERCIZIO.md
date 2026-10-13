# Lezione ed esercizio: modello valido per tutti i livelli

Stato: **approvato il 13 ottobre 2026, non ancora implementato**. c01 è ancora nella versione precedente (lezione a 5 pagine di solo testo, pagina dell'esercizio con scheda, stanza e banco separati). Questo documento descrive il modello da applicare a c01 e a tutti i livelli successivi.

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
