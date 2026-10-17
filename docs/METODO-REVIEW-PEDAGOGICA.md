# Metodo della review pedagogica (fase 2, blocco P)

Scritto il 17 ottobre 2026 con Gianluca. Sostituisce nel merito la sezione P di `docs/PIANO-FASE-2.md`, che ora rimanda qui.
Chi fa un pezzo di review (diagnosi, allievo finto, riscrittura) legge questo documento prima di cominciare.

## 1. Lo scopo, in una frase

L'allievo deve **capire il lavoro che sta facendo**, non solo collegare i fili giusti: perché quel pezzo esiste, perché quel filo va
proprio lì, che cosa succede se lo sbaglia. Il rischio da evitare è un allievo che supera il livello copiando i passi senza sapere
che cosa ha costruito.

La leggibilità (frasi corte, parole spiegate, esempi) è già buona ed è un requisito minimo, non l'obiettivo. Il tono e la lunghezza
delle lezioni di oggi vanno bene: non si riscrive per "semplificare", si riscrive dove manca un perché.

Gli esercizi (banco, passi, sfida guasto, demo, motore, scene) restano come sono, anche se hanno qualche piccolo difetto: rimetterci
mano adesso vorrebbe dire rifare il sito. **Tutto il resto della lezione si può cambiare in tutti i modi utili a far capire**: slide
di spiegazione, testi dei pezzi, previsioni, sintesi (§6). Una spiegazione in più senza un esercizio collegato va benissimo:
l'importante è che l'allievo capisca.

## 2. Che cosa abbiamo trovato (campione del 17 ottobre)

Lette per intero: c03, c12, c13, c18, c19, c26, c27, c29, c30, c33, c36, c49. Contate per tutti i 55 livelli parole di lezione, fili
da collegare e passi che dicono "Perché:".

| Gruppo | Livelli | Fili per livello | Parole di lezione | Passi con "Perché:" | Giudizio |
|---|---|---|---|---|---|
| Modulo 0 | c01-c06 | 1-5 | 190-290 | 0 | Va bene: pochi fili, ogni regola ha la sua ragione (c03: l'interruttore sulla fase, e la scossa se lo metti sul neutro) |
| Modulo 2 | c17-c11 | 3-10 | 170-300 | 0 | **Il buco più grande**: molti fili, una sola slide di spiegazione, quasi mai lo scopo nel lavoro vero |
| Modulo 3 | c21-c16 | 2-10 | 200-410 | 0 (tranne c52) | Spiega bene il meccanismo (autoritenuta, NC), meno il perché dei singoli collegamenti |
| Modulo 6, sicurezza | c25-c27 | 8-19 | 220-370 | 0 | **Buco grande**: 15-19 fili, il perché di molti collegamenti non c'è (c26: perché le due uscite 13-14 e 23-24 in serie?) |
| Modulo 4 | c28 | 7 | 470 | 0 | Da controllare come il Modulo 3 |
| PLC e processi | c29-c32, c33-c45, c47-c54 | 0-10 | 330-810 | quasi tutti | Già buoni: scritti dopo i criteri del 16 ottobre (`docs/LEZIONE-ED-ESERCIZIO.md` §5). c29 e c33 sono il modello da imitare |
| Prove | c23, c24, c46, c51, c55 | - | 140-480 | - | Solo il briefing: controllo leggero |

L'impressione "il problema sono le cose difficili, tipo il PLC" è giusta solo in parte. I livelli con il PLC chiedono di ragionare e
spiegano già il perché. Il rischio di "collegare senza capire" è più alto dove ci sono **tanti fili e poca spiegazione**: Modulo 2,
Modulo 3 e i tre livelli di sicurezza del Modulo 6. Sono i livelli scritti prima del 16 ottobre.

### Che cosa manca, per tipo (con esempi)

- **A. Lo scopo nel lavoro vero.** c18 spiega com'è fatto il relè ma non perché un elettricista ne mette uno (comandare un carico
  grosso con un pulsante piccolo, o da lontano, o con tensioni diverse). c36 spiega P, I e D ma non perché un forno non si regola
  semplicemente acceso/spento come un termostato di casa.
- **B. Il perché di un collegamento.** c26: "dal morsetto 14 al 23" senza dire che le due uscite in serie sono due interruttori,
  e ognuno da solo ferma la macchina. c13: perché il comando parte dal morsetto 2 del salvamotore (a valle, protetto) e non dal quadro.
- **C. La conseguenza dell'errore.** c19 dà la regola Ib ≤ In ≤ Iz e le soglie, ma non dice che il cavo che "si scalda" rovina
  l'isolante e può incendiarsi: è l'unica ragione della regola. Il nome "magnetotermico" (due sganci, uno per il cortocircuito e uno
  per il sovraccarico) non è mai spiegato.
- **D. Parole date per scontate.** c12: "avvolgimenti", "rotore", "campo magnetico che gira", "sezionamento a monte".
- **E. Il legame con quello che sa già.** c26 non richiama c25 (i due canali, i due relè in serie sul carico), che è la stessa idea.
- **A bis. Il PLC nel lavoro vero.** c29 spiega bene che cos'è il PLC (un computer per le macchine, ingressi, programma, uscite,
  scansione) e perché esiste (cambiare comportamento senza ricablare). Non dice come lo si usa davvero: dove sta (nel quadro, sulla
  guida DIN), come ci entra il programma (si scrive al computer con il programma del costruttore e si carica con un cavo), chi fa che
  cosa (l'elettricista cabla e collauda ingressi e uscite, spesso un tecnico scrive il programma, il manutentore lo legge per trovare
  i guasti), dove lo si incontra (macchine, cancelli, ascensori, impianti di casa), perché il ladder somiglia a uno schema a relè
  (è nato per gli elettricisti). Va aggiunto in c29, con un richiamo in c30.
- **F. Sintesi fatta di fatti.** "Il salvamotore ha un polo per fase" invece di "Il salvamotore stacca tutte e tre le fasi insieme,
  perché con due sole il motore ronza e si scalda".

## 3. I quattro perché di ogni livello

Ogni lezione, finita la lettura, deve aver dato all'allievo queste quattro risposte. È il criterio con cui si giudica un livello.

1. **Perché esiste.** Quale problema vero risolve questo pezzo o questo impianto, in una casa, in un'officina, in una fabbrica.
   Prima il problema, poi il pezzo ("il cliente vuole accendere la luce delle scale da tre piani" prima del relè ad impulsi).
2. **Come funziona.** Il meccanismo in una o due frasi, sempre in termini di *dove passa la corrente* e *che cosa apre o chiude*.
   Non la teoria completa: quanto basta a prevedere che cosa succede.
3. **Perché ogni collegamento va lì.** Per ogni filo o gruppo di fili del banco, la ragione. Se un allievo si chiede "perché qui e non
   là?", la risposta deve essere scritta nella lezione.
4. **Che cosa succede se lo sbagli.** La conseguenza concreta: scossa, incendio, motore bruciato, macchina che non si ferma,
   impianto che non funziona. Per un elettricista è il perché più forte e il più facile da ricordare.

In più, dove serve: **5. come si collega a quello che sa già** (vedi i fili rossi, §4).

### Dove si scrive il perché dei collegamenti

I passi del banco non si toccano, e nei Moduli 2, 3 e 6 (sicurezza) non hanno il "Perché:". Lo strumento principale è allora una
slide `spiegazione` con una tabella, messa subito prima di "Guarda come si fa":

| Che cosa colleghi | Perché | Se lo sbagli |
|---|---|---|
| A2 della bobina al neutro | La bobina è un carico: la corrente deve tornare | Il relè non scatta mai |
| Le uscite 13-14 e 23-24 in serie | Due interruttori: ognuno da solo ferma la macchina | Un contatto incollato e la macchina non si ferma più |

Si raggruppano i fili che hanno la stessa ragione (le tre fasi, i neutri), così la tabella resta di 4-7 righe anche con 19 fili.
**Forma vera (provata su c18, 17 ottobre):** le tabelle delle lezioni mostrano **due colonne**, quindi "perché" e "se lo sbagli" stanno
nella stessa cella. Sul telefono la colonna di sinistra deve essere corta: si usa il morsetto o il pezzo (`A1`, `11`, `Lampade`) e a destra
"che cosa ci colleghi e perché". Esempio: `['A2', 'Il neutro: la bobina è un carico, senza ritorno non si eccita e il relè non scatta mai.']`.
La demo poi mostra *come*, e l'allievo sa già *perché*.

## 4. I fili rossi del percorso

Poche idee tornano in tutto il percorso. Se ogni lezione le richiama con le stesse parole, un livello nuovo diventa un caso di una cosa
già capita, e l'allievo smette di imparare a memoria. La diagnosi indica per ogni livello quali fili rossi usa; la riscrittura li
richiama in modo esplicito ("come nel relè del Modulo 2, anche qui...").

| Filo rosso | Dove nasce | Frase fissa (da usare uguale) | Dove torna (esempi) |
|---|---|---|---|
| **Il giro della corrente** | c01 | "ogni carico ha bisogno di fase e neutro: senza ritorno non passa niente" | ogni bobina (A2 al neutro), anello 4-20 mA, ingressi del PLC (IC) |
| **Si interrompe la fase** | c03 | "il comando sta sulla fase" | interruttori, pulsanti, uscite del PLC; fase e neutro si aprono *insieme* (magnetotermico), mai il neutro da solo |
| **Tensione, corrente, potenza** | c01 (ripasso in c17) | "più potenza vuol dire più corrente, e la corrente scalda i cavi" | c17 (il multimetro misura la tensione), c19 (portata dei cavi), motori, fotovoltaico, carichi |
| **Comando e potenza sono separati** | c18 | "il contatto è solo un interruttore: la tensione gliela porti tu" | c08, c09, contattore c22/c13, PLC c29 ("il PLC comanda il contattore, non il motore"), relè di sicurezza |
| **Lo stato a riposo e il guasto sicuro** | c18 (NA/NC), c13 (arresto NC) | "NA e NC si scelgono pensando a che cosa succede se un filo si stacca" | fungo c25, 4-20 mA c33, alimentazione del PLC c29 |
| **Qualcosa deve ricordare** | c08 | "il pulsante dà solo un impulso, a ricordare è il relè" | autoritenuta c13, Set e Reset c49, integrale c36 |
| **Ogni protezione protegge qualcosa da qualcosa** | c19 | magnetotermico: "protegge il cavo, non l'apparecchio"; differenziale: "protegge le persone" | salvamotore e termico (il motore), relè di sicurezza (le persone dalla macchina) |
| **Si lavora senza tensione** | c12 | "prima di toccare si toglie tensione e si misura" | ogni livello con salvamotore o quadro |
| **Misurare invece di indovinare** | c17 | "si segue il giro della corrente con il puntale" | collaudo, sensori, prove 3D |

Fissata nel pilota del Modulo 2 (17 ottobre): è il vocabolario comune di tutte le riscritture. Quando un livello usa un filo rosso, lo
richiama con la sua frase fissa e con il livello dove l'allievo l'ha visto ("come nel relè del Modulo 2...").

## 5. La scheda del livello

Prima di riscrivere si compila una scheda per livello. È il lavoro di pensiero vero; la riscrittura viene dopo e ne discende.
Le schede si tengono in `docs/review/moduloN.md` (una sezione per livello): servono anche come base per una futura guida del docente.

```
## cNN - titolo
Verdetto: va bene / ritocco / riscrittura
Idea chiave (una frase): ...
Problema vero che risolve: ...
Come funziona (dove passa la corrente): ...
Fili rossi usati: ...
Parole nuove da spiegare: ...
Errori di concetto da smontare: ...

| Passo / gruppo di fili | Perché | Se lo sbagli | Dove lo dice la lezione |
|---|---|---|---|
| ... | ... | ... | slide 2 / MANCA |

Allievo finto: N passi spiegati su M (prima) -> N' su M (dopo)
Cambi decisi: ...
```

### Errori di concetto da smontare

Gli allievi arrivano con idee sbagliate che i passi non correggono. Una lezione che le nomina e le smonta insegna di più di una che le ignora.

**Decisione di Gianluca (17 ottobre):** l'elenco vero si raccoglie più avanti, quando gli allievi useranno il gioco con il docente di
laboratorio (blocco Z e dopo): meglio gli errori osservati che quelli immaginati. Allora si fa un secondo passaggio, leggero, sulle
lezioni e sulle opzioni sbagliate delle previsioni. Per ora si usa solo questo elenco di partenza, insieme agli errori che i livelli
già mettono in scena nella sfida guasto, senza allungarlo a tavolino:
- "La corrente si consuma nella lampada" (torna tutta dal neutro).
- "Il neutro non porta corrente, si può toccare."
- "L'interruttore sul neutro va bene lo stesso, tanto la luce si spegne."
- "Un magnetotermico più grosso è più sicuro."
- "Il differenziale protegge dal cortocircuito."
- "Il PLC dà la corrente al motore."
- "Se il motore gira al contrario è rotto."
- "Il pulsante di arresto è un pulsante come gli altri."
- "Un relè o un contattore che si spegne apre sempre i contatti" (il contattore incollato).

## 6. Regole di scrittura

**Che cosa si può cambiare** (deciso con Gianluca il 17 ottobre; lo controlla `node scripts/check-review-scope.mjs`, gia' aggiornato):
- slide `spiegazione`: testi liberi; si possono aggiungere, togliere, spostare;
- slide `pezzi`: titolo e testi liberi; resta uguale solo `focus` (quale pezzo del banco si illumina) e il loro ordine rispetto alle demo;
- slide `previsione`: domanda, opzioni, risposta giusta e spiegazione si possono riscrivere tutte (vedi §6 bis); resta uguale il numero
  di previsioni del livello, perché danno i punti;
- la sintesi (`summary` e titolo della slide `sintesi`), in tutti i modi;
- lo stile delle lezioni (`src/ui2d/style.css`, le regole di lezione, tabelle, riquadri, sintesi): deciso da Gianluca il 17 ottobre.

**Che cosa non si cambia:** passi, sfida guasto, `support`, didascalie delle demo, `focus` dei pezzi, e il codice di motore, banco,
pannelli e scene. Le correzioni alla vista della lezione fatte nel pilota (opzioni mescolate, tabelle, Attenzione nei pezzi, una risposta
per ogni previsione) sono già in `main`; un altro difetto della lezione che tocca il codice si chiede prima a Gianluca.
Se la lezione non può spiegare quello che l'esercizio chiede, si annota in `docs/DOMANDE-PER-GIANLUCA.md` e non si tocca l'esercizio.

**Misura:**
- di solito 1-3 slide in più per livello (nel pilota la più lunga è c19, da 6 a 10 slide, perché è il livello più denso);
- ogni slide circa 90 parole, mai oltre 110 (tabella esclusa): se serve di più, si divide in due slide;
- prima di aggiungere si guarda se si può riscrivere una slide che c'è già;
- non si ripete il testo dei passi: la lezione dice il perché, il banco dice il come.

**Contenuto:**
- prima il problema vero, poi il pezzo, poi i fili (i quattro perché, §3);
- ogni regola con la sua ragione e, quando c'è, la sua conseguenza;
- le semplificazioni del gioco si dichiarano (come già fa c26 per i contatti di potenza);
- nessuna frase tecnica nuova senza controllo su `docs/VALORI-TECNICI.md`; i valori con l'unità di misura;
- non contraddire passi, demo, previsioni e sfida guasto (che restano identici): la diagnosi li legge tutti;
- situazioni di lavoro vere: il cliente, il cantiere, il quadro, l'officina, il collaudo.

**Sintesi:** 3-5 punti, ognuno una regola con il suo perché, in modo che il Quaderno serva a ripassare il *perché* e non solo il *che cosa*.
Esempio: "Il salvamotore stacca tutte e tre le fasi insieme, perché con due sole il motore ronza e si scalda."

**Forma delle pagine (provata nel pilota):**
- le tabelle mostrano **due colonne**: "perché" e "se lo sbagli" vanno nella stessa cella; a sinistra un'etichetta corta (il morsetto o il
  pezzo: `A2`, `11`, `Morsetti 3`, `Lampade`), a destra "che cosa ci colleghi e perché";
- le slide `pezzi` mostrano disegno, paragrafi e riquadro Attenzione, ma **non le tabelle**: le tabelle vanno nelle slide `spiegazione`;
- nei testi si usa l'apostrofo tipografico ’ (come nel resto del file) e le virgolette « »;
- sul telefono una slide lunga scorre sotto la barra in basso: un motivo in più per stare sotto le 110 parole.

**Tono:** quello di oggi, che va bene: seconda persona, frasi corte, concreto. Niente tono da manuale, niente teoria che non serve a
capire il banco.

## 6 bis. Le previsioni: la risposta giusta si indovina senza capire

Gianluca ha notato che la risposta giusta era spesso la più lunga e quella in mezzo. I numeri lo confermavano: nelle previsioni la
giusta era la più lunga 63 volte su 80 e in mezzo 64 volte su 80; nella sfida guasto la più lunga 39 volte su 41 e la prima 34 volte.

**Fatto il 17 ottobre:**
1. Le opzioni si mostrano mescolate, con un ordine fisso per domanda (previsioni e sfida guasto).
2. In tutte le 80 previsioni le risposte sono state riscritte: la giusta ora è lunga tra 0,85 e 1,15 volte la sbagliata più lunga.
3. Il test `test/opzioni.test.js` lo controlla: chi scrive o riscrive una previsione e sbilancia le lunghezze fa fallire `npm test`.

**Come si fa** (specifica completa in `docs/LEZIONE-ED-ESERCIZIO.md`, §6): ogni opzione è una frase con il suo perché; le sbagliate sono
convinzioni credibili (meglio gli errori di concetto veri, §5); si controlla con `node scripts/review/misure.mjs <modulo>`, che segna
con ! le previsioni fuori dai limiti. Le domande della sfida guasto sono esercizio e non si riscrivono: basta il mescolamento.

## 7. Procedura (ricetta per una sessione)

Questa è la sequenza seguita nel pilota del Modulo 2, scritta perché un'altra sessione la possa rifare da sola. Esempio completo da
imitare: `docs/review/modulo2.md` (schede, risultati) e il ramo `review-modulo2` nella storia di `main`. Consegne degli agenti:
`docs/review/CONSEGNE.md`.

### Prima di cominciare
1. Leggere questo documento, `docs/review/modulo2.md` (il tono e la forma) e `docs/PROCEDURA-UNIONE.md`.
2. Ramo nuovo da `main`: `review-moduloN` (o un nome che dice i livelli, per esempio `review-modulo6-sicurezza`).
3. Prenotare nella tabella di `docs/PROCEDURA-UNIONE.md` il file arabo `ar-NN` (il primo numero libero) e caricare subito il ramo.
4. `npm ci` se mancano le dipendenze; `npm test` deve essere verde prima di toccare niente.

### Lavoro
1. **Allievo finto, prova "prima"** (Sonnet, consegna 1 di `CONSEGNE.md`) sulle lezioni di partenza:
   `node scripts/review/pacchetto-allievo.mjs <modulo o elenco di livelli> --commit fe4fee0 > <scratch>/prima.txt`.
   Risultato in `docs/review/moduloN-allievo-prima.md`.
2. **Diagnosi** (Opus): per ogni livello leggere lezione, passi, sfida guasto e la prova dell'allievo; scrivere la scheda (§5) in
   `docs/review/moduloN.md`, con un quadro d'insieme in testa. Controllare i valori su `docs/VALORI-TECNICI.md`; i dubbi tecnici vanno in
   fondo alle schede, "Da far controllare al collega".
3. **Riscrittura** (Opus): in `src/content/units-v2.js` (Modulo 0 in `units.js`), solo le parti permesse (§6). Si scrive a mano nel file,
   rispettando la forma degli oggetti vicini. Dopo ogni livello: `node scripts/review/misure.mjs <modulo>` (lunghezze e risposte) e
   `node scripts/check-review-scope.mjs` (dopo un commit: lo script confronta i commit, non i file non salvati).
4. **Allievo finto, prova "dopo"** con la stessa consegna sulle lezioni nuove (`pacchetto-allievo.mjs <modulo>` senza `--commit`).
   Leggere tutte le domande che restano: correggere le contraddizioni e i vuoti veri, poi annotare nella scheda il confronto prima/dopo.
5. **Controllo nel browser**: `npm run build`, poi `node scripts/review/prova-tasti.mjs <livello>` per ogni livello (serve
   `playwright-core` installato a parte, per esempio in una cartella temporanea) e schermate a 390 e 1280 px delle slide nuove con
   tabelle. Nelle sessioni cloud il browser è in `/opt/pw-browsers/`; al primo avvio il gioco apre "Per cominciare" e la finestra del
   nome: lo script le chiude.
6. **Arabo** (Haiku, consegna 2 di `CONSEGNE.md`), poi `npm test` tutto verde.
7. **Unione**: secondo `docs/PROCEDURA-UNIONE.md`, dopo il via di Gianluca; riga in `docs/STATO-AVANZAMENTO.md`.

### Che cosa aspettarsi (dal pilota)
- `scripts/check-review-scope.mjs` confronta il ramo con il commit `BASE` scritto in testa allo script. Se in `main` entra una correzione
  al codice della vista della lezione (come le opzioni mescolate o le previsioni multiple), nello stesso lavoro si sposta `BASE` su quel
  commit, altrimenti tutte le review successive segnalerebbero file fuori perimetro.
- Il test della fabbrica "a tutto schermo" era instabile su macchine lente (l'orologio del turno): corretto il 17 ottobre. Se `npm test`
  fallisce una volta sola, si rilancia salvando il registro (`npm test > registro.txt`) per sapere quale test era.
- Il conteggio dei passi dell'allievo finto con la consegna vecchia ingannava (contava il come): usare solo la consegna di `CONSEGNE.md`.
- Le domande che restano trovano contraddizioni con i livelli precedenti: sono la parte più utile della prova.
- Costo del pilota (10 livelli): tre prove dell'allievo finto (circa 100.000 token ciascuna), una traduzione (circa 140.000), il resto
  diagnosi e scrittura.

### Ordine dei moduli
1. Fatto: **pilota sul Modulo 2** (17 ottobre).
   Fatto: **Modulo 3** (c21-c16, c52, c24; schede in `docs/review/modulo3.md`). Trovato e corretto: tabelle con più di due colonne
   (c12, c52) di cui la vista mostrava solo le prime due. Lo stesso difetto c'era in 20 livelli fuori dal Modulo 3: la vista ora
   mostra tutte le colonne (ogni riga una scheda), quindi le tabelle a tre o quattro colonne si possono usare; a due resta la forma più leggibile.
2. **Priorità alta, in parallelo:** Modulo 3 (c21-c16, c52, c24) e Modulo 6 sicurezza (c25-c27) con c28. Non condividono livelli,
   quindi due sessioni possono lavorare insieme; ognuna con il suo ramo, il suo `ar-NN` e il suo file di schede.
3. **Controllo leggero:** livelli con il PLC e i processi (c29-c32, c33-c45, c47-c54). Hanno già il perché: si fa la prova dell'allievo
   finto e si ritocca dove serve, soprattutto lo scopo nel lavoro vero (tipo A) e i fili rossi. In c29 una slide nuova sul PLC nel lavoro
   vero (tipo A bis).
4. **Ultimo:** Modulo 0 (allineato ai fili rossi; la slide "Tensione, corrente, potenza" è già in c01, al suo posto definitivo:
   il blocco T non la deve spostare) e i briefing delle prove.

## 8. Come si misura

Prima di avere allievi veri:
- **copertura dei perché**: passi spiegati dall'allievo finto sul totale, prima e dopo (misura principale);
- **errori di concetto**: quanti di quelli della scheda la lezione nomina e smonta;
- **misura**: parole e slide aggiunte entro i limiti del §6;
- leggibilità (per esempio l'indice Gulpease) solo come controllo secondario, perché non è il problema.

Con allievi veri (blocco Z): dopo un livello, tre domande "perché" a voce o su carta (perché questo filo va qui, che cosa succede se lo
togli, a che cosa serve questo pezzo in un impianto vero). È la prova che conta.

## 9. Quanto costa

Le lezioni sono circa 20.000 parole in tutto (circa 30.000 token), i passi e le definizioni dei livelli qualche decina di migliaia in
più. Un giro completo (due prove dell'allievo finto, diagnosi, riscrittura, controllo, arabo) pesa nell'ordine di 1-2 milioni di token
per tutti i 55 livelli: poco rispetto al lavoro sulle scene 3D. Il costo vero non è il volume ma la qualità del giudizio: per questo
diagnosi e riscritture difficili restano a Opus.
