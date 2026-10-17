# Piano della fase 2: rifinitura (17 ottobre 2026)

La fase 1 (percorso c01-c55, prove 3D) e' chiusa: punto di ritorno `fe4fee0` (vedi `docs/PROCEDURA-UNIONE.md`).
La fase 2 non aggiunge contenuti: rende il prodotto chiaro, veloce e pubblicabile. Le espansioni (autoclave, condominio) vengono dopo.

**Regola ferma:** il codice degli esercizi (motore, banco, pannelli, livelli, scene) e tutto il "dopo" la lezione non si toccano,
anche se hanno piccoli difetti. La lezione invece si puo' cambiare in tutti i modi utili a far capire (deciso con Gianluca il 17 ottobre),
in `src/content/units.js` e `src/content/units-v2.js` e nelle traduzioni arabe collegate:
- slide `spiegazione`: testi liberi, si possono aggiungere, togliere, spostare (il gioco conta le slide da solo);
- slide `pezzi`: titolo e testi liberi, resta uguale `focus`;
- slide `previsione`: domanda, opzioni, risposta giusta e spiegazione riscrivibili; resta uguale il numero di previsioni (danno i punti);
- sintesi di fine livello (`summary` e titolo della slide `sintesi`), perche' ne beneficia il Quaderno.

Restano identici: `steps`, `fault`, `support`, le didascalie delle `demo` e `focus` dei `pezzi`. Unica modifica di codice ammessa: il
mescolamento delle opzioni delle domande nella vista (`docs/METODO-REVIEW-PEDAGOGICA.md` §6 bis).
Lo script `node scripts/check-review-scope.mjs` (blocco B0, commit di partenza `c35efa5`) lo verifica e va lanciato prima di ogni commit
di review. Provato: lascia passare testi dei pezzi e previsioni riscritte; blocca demo cambiate, `focus` dei pezzi cambiato, una previsione
tolta, una risposta giusta che non e' tra le opzioni.

## Blocchi

| Blocco | Cosa | Agente | Dopo |
|---|---|---|---|
| B0 | Rete di sicurezza: `scripts/check-review-scope.mjs` (fatto, allargato a pezzi e previsioni) | Sonnet | - |
| B1 | Opzioni delle domande mescolate nella vista, con test `test/opzioni.test.js` (fatto) | Sonnet | - |
| P | Review pedagogica (vedi sotto), modulo per modulo | Sonnet allievo finto, Opus diagnosi e riscritture, Haiku traduce | B0, B1 |
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
Ordine: pilota sul Modulo 2 (fatto il 17 ottobre, `docs/review/modulo2.md`), poi Modulo 3 e sicurezza del Modulo 6 in parallelo, poi
controllo leggero del resto, Modulo 0 per ultimo. Ogni sessione segue la ricetta del §7 del metodo.

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
