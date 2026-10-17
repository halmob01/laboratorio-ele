# Piano della fase 2: rifinitura (17 ottobre 2026)

La fase 1 (percorso c01-c55, prove 3D) e' chiusa: punto di ritorno `fe4fee0` (vedi `docs/PROCEDURA-UNIONE.md`).
La fase 2 non aggiunge contenuti: rende il prodotto chiaro, veloce e pubblicabile. Le espansioni (autoclave, condominio) vengono dopo.

**Regola ferma:** il codice degli esercizi (motore, banco, pannelli, livelli, scene) e tutto il "dopo" la lezione non si toccano.
La review pedagogica puo' fare solo questo, in `src/content/units.js` e `src/content/units-v2.js` (e nelle traduzioni arabe collegate):
- riscrivere i testi delle slide di tipo `spiegazione` (titoli, paragrafi, avvisi);
- **aggiungere, togliere o spostare slide `spiegazione`** per spiegare meglio il perche' (il gioco conta le slide da solo).

Si puo' anche **riscrivere la sintesi di fine livello** (`summary`: elenco di frasi non vuote; slide `sintesi`: una sola, l'ultima, con un titolo),
perche' ne beneficia il Quaderno.

Restano identici: `steps` (i passi del banco), `fault` (la sfida guasto), `support`, e le slide `previsione` (opzioni e risposta giusta:
alimentano il punteggio), `demo` (le didascalie seguono i fili del livello) e `pezzi`.
Lo script `node scripts/check-review-scope.mjs` (blocco B0, commit di partenza `fe4fee0`) lo verifica: va lanciato prima di ogni commit
di review e fallisce se cambia qualcosa fuori da questo perimetro. Provato: blocca una modifica ai passi o a una previsione e una sintesi
tolta; lascia passare una slide `spiegazione` in piu' e una sintesi riscritta.

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

**Il metodo completo e' in `docs/METODO-REVIEW-PEDAGOGICA.md`** (deciso con Gianluca il 17 ottobre): leggerlo prima di ogni lavoro di review.

In breve: lo scopo non e' la leggibilita' (gia' buona) ma che l'allievo **capisca il lavoro che fa**. Ogni lezione deve dare quattro
risposte: perche' esiste il pezzo (il problema vero), come funziona (dove passa la corrente), perche' ogni collegamento va li', che cosa
succede se lo sbagli; e richiamare i "fili rossi" del percorso (giro della corrente, comando e potenza, stato a riposo e guasto sicuro...).
Per ogni livello si compila prima una scheda (passo -> perche' -> se sbagli -> dove lo dice la lezione), poi si riscrive.
La misura principale e' un "allievo finto" che spiega il perche' di ogni passo usando solo la lezione, prima e dopo.

Dal campione: il buco piu' grande e' nei livelli con tanti fili e poca spiegazione (Moduli 2 e 3, c25-c27, c28), scritti prima dei
criteri del 16 ottobre; i livelli con il PLC e i processi hanno gia' il perche' e servono solo ritocchi.
Ordine: pilota sul Modulo 2, poi Modulo 3 e sicurezza del Modulo 6 in parallelo, poi controllo leggero del resto, Modulo 0 per ultimo.

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
