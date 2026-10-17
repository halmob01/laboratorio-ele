# Piano della fase 2: rifinitura (17 ottobre 2026)

La fase 1 (percorso c01-c55, prove 3D) e' chiusa: punto di ritorno `fe4fee0` (vedi `docs/PROCEDURA-UNIONE.md`).
La fase 2 non aggiunge contenuti: rende il prodotto chiaro, veloce e pubblicabile. Le espansioni (autoclave, condominio) vengono dopo.

**Regola ferma:** il codice degli esercizi (motore, banco, pannelli, livelli, scene) e tutto il "dopo" la lezione non si toccano.
La review pedagogica puo' fare solo questo, in `src/content/units.js` e `src/content/units-v2.js` (e nelle traduzioni arabe collegate):
- riscrivere i testi delle slide di tipo `spiegazione` (titoli, paragrafi, avvisi);
- **aggiungere, togliere o spostare slide `spiegazione`** per spiegare meglio il perche' (il gioco conta le slide da solo).

Restano identici: `steps` (i passi del banco), `fault` (la sfida guasto), `summary` e la slide `sintesi` (la sintesi di fine livello,
considerata "dopo": se Gianluca vuole ritoccarla lo dice), `support`, e le slide `previsione` (opzioni e risposta giusta: alimentano il
punteggio), `demo` (le didascalie seguono i fili del livello) e `pezzi`.
Lo script `node scripts/check-review-scope.mjs` (blocco B0, commit di partenza `fe4fee0`) lo verifica: va lanciato prima di ogni commit
di review e fallisce se cambia qualcosa fuori da questo perimetro. Provato: blocca una modifica ai passi o a una previsione,
lascia passare una slide `spiegazione` in piu'.

## Blocchi

| Blocco | Cosa | Agente | Dopo |
|---|---|---|---|
| B0 | Rete di sicurezza: `scripts/check-review-scope.mjs` (fatto) | Sonnet | - |
| P | Review pedagogica (vedi sotto), modulo per modulo | Opus decide, Sonnet scrive, Haiku traduce | B0 |
| Q | Quaderno: rivedere cosa raccoglie e come si stampa | Sonnet, revisione Opus | P1 (serve sapere i testi) |
| T | Tutorial iniziale del gioco al posto di "Per cominciare" (lezioni, banco, scene 3D, come muoversi); il vecchio testo su corrente e fili diventa la prima lezione del Modulo 1 | Sonnet testi, Opus controlla | - |
| F | Footer: torre al centro, due riquadri di testo ai lati, altezza ridotta | Sonnet | - |
| N | Indagine sul ritardo del bottone "avanti" tra le slide: riprodurre, misurare, correggere | Opus indaga, Sonnet corregge | - |
| S | Scene 3D: seconda passata di velocita' secondo `docs/SPEC-SCENE-3D.md`, con misure prima e dopo; schermata di caricamento con la torre | Opus | - |
| D | Pubblicazione non pubblica (vedi sotto) | decisione di Gianluca, poi Sonnet | - |
| A | Area docenti e cose previste in `docs/SYLLABUS.md` e mai fatte: inventario, poi decisione | Opus inventario | fine di P |
| Z | Controllo finale di tutto, 3 allievi veri (o un docente) che giocano un modulo | Gianluca | tutto |

## P: review pedagogica

**Domanda guida per ogni livello:** un allievo che non ha mai visto un impianto, dopo aver letto la lezione, sa dire *perche'* sta
facendo quello che gli chiede il banco? Le lezioni sono circa 15.000 parole in 55 livelli: si puo' rivedere tutto, non serve scegliere.

**Test di lettura (a ogni livello):**
1. Il primo foglio dice a che cosa serve la cosa in un impianto vero, prima di dire come si fa.
2. Ogni parola tecnica nuova e' spiegata la prima volta che compare, con parole da quindicenne.
3. C'e' un esempio della vita di tutti i giorni (casa, scuola, officina) prima della teoria.
4. Il collegamento con il livello precedente e' esplicito ("prima avevi..., ora aggiungi...").
5. L'ultimo foglio dice cosa deve succedere sul banco quando il lavoro e' giusto e perche'.
6. Frasi corte, niente sigle senza spiegazione, valori con unita' di misura.

**Procedura per modulo (si ripete 6 volte, un ramo `review-moduloN` ciascuna):**
1. *Allievo finto* (Sonnet, senza contesto tecnico): legge solo le lezioni del modulo e per ogni livello scrive cosa non ha capito e dove si e' perso. Costa poco e trova i vuoti veri.
2. *Diagnosi* (Opus): confronta con il test di lettura e con il banco (cosa chiede l'esercizio), decide per ogni livello "va bene / ritocco / riscrittura" e scrive la lista dei cambi.
3. *Riscrittura* (Sonnet per i ritocchi, Opus per le riscritture dei livelli difficili: PLC, PID, energia, fabbrica).
4. *Arabo* (Haiku, poi `node scripts/check-lang.mjs ar` a zero): un file `ar-NN.js` nuovo per modulo, numero prenotato nella tabella.
5. *Controllo* (B0 + `npm test` + `npm run build`), schermate della lezione a 390 e 1280 px, unione secondo la procedura.

**Ordine:** prima un *pilota* sul Modulo 2 (quello dove senti il salto di difficolta'): serve a fissare il tono e a tarare il test di
lettura. Se funziona, il resto va in parallelo (M3, M4, M5, M6) perche' i testi di moduli diversi non si toccano tra loro.
M1 si rivede per ultimo e piu' leggero (per te e' gia' a posto).

**Cosa NON e' nel perimetro:** cambiare richieste degli esercizi, passi, soglie, valori del banco. Se la review scopre che un esercizio
chiede qualcosa che la lezione non puo' spiegare, si annota in `docs/DOMANDE-PER-GIANLUCA.md` e non lo si tocca.

## D: pubblicazione

Fatti da sapere: un gioco che gira nel browser scarica sempre il proprio codice sul computer di chi lo apre, quindi non si puo'
renderlo "invisibile" a chi ha accesso: si controlla *chi* ha accesso, e con la licenza si dice cosa puo' farne. GitHub Pages da
repo privato richiede un piano a pagamento e comunque il sito e' pubblico a chiunque abbia il link.
Strada consigliata: repo privato su GitHub + Cloudflare Pages (gratuito) con accesso limitato (Cloudflare Access, per email o codice)
oppure password semplice; dominio proprio se la scuola lo vuole; licenza "tutti i diritti riservati" (`docs/LICENZE.md` per i font e
le librerie). Da decidere con Gianluca: chi deve poter aprire il gioco (solo la tua classe, tutta la scuola, i colleghi) e se serve la classifica online.

## Valore e licenza (note del 17 ottobre)

- Costo di rifacimento a mano per un team: circa 6-12 mesi-persona (60.000-150.000 EUR); non e' un prezzo di vendita. Il valore di mercato
  oggi e' basso (nessun allievo vero l'ha ancora provato, manca l'area docenti); sale con la review, la prova con allievi e i primi clienti.
- Il vantaggio non e' il codice (oggi quasi tutti usano l'IA) ma pedagogia, contenuti verificati con allievi e distribuzione.
- Il diritto d'autore protegge la forma, non le idee; per il codice scritto con l'IA la tutela automatica e' incerta, e conta il contributo
  umano. Proteggono comunque licenza, termini d'uso, contratti con le scuole e accesso con login. Prima di vendere licenze: breve
  consulenza di un avvocato di software.
- Il repository passa a privato; Pages resta acceso finche' serve per le anteprime (Pages da repo privato richiede un piano a pagamento:
  alternativa Cloudflare Pages). Aggiungere un `LICENSE` "tutti i diritti riservati" e il copyright nel footer (blocco D).
- Impacchettare come app (PWA, Capacitor, Electron) non rende il codice non copiabile: protegge la licenza, non il pacchetto.
