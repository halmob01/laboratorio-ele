# Fase 2: elenco delle cose da fare (17 ottobre 2026)

Documento riassuntivo di quanto discusso con Gianluca dopo la chiusura della fase 1. Il piano dettagliato e' in `docs/PIANO-FASE-2.md`;
questo elenco serve a chi arriva nuovo (anche un'altra sessione) per capire cosa si e' deciso, in che ordine e cosa resta da chiedere.

## Dove siamo
- Fase 1 chiusa: percorso completo c01-c55 (Moduli 1-6) in `main`; 602 test verdi; arabo senza frasi mancanti. Punto di ritorno: commit `fe4fee0`
  (come ripartire da li' in `docs/PROCEDURA-UNIONE.md`). Il tag `fine-prima-fase` non si e' potuto pubblicare dalla sessione.
- Documentazione allineata allo stato reale; rami vecchi elencati in `docs/PROCEDURA-UNIONE.md` (non cancellati).
- Il gioco e' per allievi elettricisti IeFP, in italiano e arabo. Il prodotto non e' ancora "finito": questa fase lo rifinisce.

## Vincoli decisi da Gianluca
- **Il codice degli esercizi non si tocca** (banco, pannelli, motore, scene, livelli). Eventuali bug si sistemano man mano.
- La review pedagogica lavora **solo sulle lezioni**: puo' riscrivere i testi, aggiungere/togliere/spostare slide `spiegazione` e riscrivere
  la sintesi. Non tocca passi, sfida guasto, previsioni, demo, pezzi (regola e controllo automatico in `PIANO-FASE-2.md` e
  `scripts/check-review-scope.mjs`).
- Lo scopo non e' allargare: le espansioni (autoclave, condominio) si fanno **dopo**, a prodotto sistemato. Non deve diventare "altri tre mesi".
- Priorita' massima: review pedagogica e che tutto funzioni.

## Elenco delle cose (numerazione di Gianluca)

| N | Cosa | Stato | Agente proposto |
|---|---|---|---|
| 1 | **Review pedagogica**: un allievo che non ha mai fatto impianti capisce *perche'* fa quello che fa, specie nei moduli piu' difficili? Si agisce solo sui testi di lezione. Procedura a moduli con pilota sul Modulo 2 | da fare | Sonnet "allievo finto", Opus diagnosi e riscritture difficili, Sonnet ritocchi, Haiku arabo |
| 2 | **Quaderno**: sistemare (cosa raccoglie, come si stampa; usa le sintesi dei livelli) | da fare, dopo il pilota | Sonnet, revisione Opus |
| 3 | **Tutorial iniziale**: al posto di "Per cominciare" (`INTRO` in `src/content/home.js`, schermata in `screens.js`) un tutorial del gioco: lezioni, banco, scene 3D e come funzionano. Il vecchio testo su corrente e fili diventa la prima lezione del Modulo 1 | da fare | Sonnet, controllo Opus |
| 4 | **Footer**: la torre animata al centro e due riquadri di testo ai lati; ora e' troppo alto (`footerHTML` in `screens.js`, `src/ui2d/tower.js`) | da fare | Sonnet |
| 5 | **Ritardo del bottone avanti** tra le slide: a volte la slide successiva arriva in ritardo. Prima riprodurre e misurare, poi correggere | da fare | Opus indaga, Sonnet corregge |
| 6 | **Scene 3D piu' veloci**: seconda passata secondo `docs/SPEC-SCENE-3D.md`, con misure prima e dopo. Idea di Gianluca: la torre come schermata di caricamento. Nota: la torre nasconde l'attesa, non la riduce; in `tower.js` esiste gia' un riquadro di caricamento. Prima accorciare davvero, poi coprire il resto | da fare | Opus |
| 7 | **Cose dimenticate**: prova con 2-3 allievi veri o un docente; controllo su telefono vero; backup; licenza; privacy dei dati dei minori se c'e' classifica o nome | da fare | Gianluca + Sonnet |
| 8 | **Pubblicazione non pubblica**: il repo diventa privato; Pages resta per ora solo per le anteprime (da repo privato serve un piano a pagamento; alternativa Cloudflare Pages). Un gioco nel browser non si puo' rendere non copiabile: si controllano accesso (login) e licenza (`LICENSE` "tutti i diritti riservati", copyright nel footer, termini d'uso). Impacchettarlo come app non cambia questo. Non e' urgente | da decidere con Gianluca; non urgente | Sonnet per la bozza tecnica; avvocato per i termini |
| 9 | **Area docenti** e altre cose previste dal `SYLLABUS.md` (classifica, pannello docente, statistiche degli errori) e mai fatte: prima un inventario, poi si decide | inventario dopo il pilota | Opus |

## Valore e licenza (a spanne, per riferimento)
- Costo di rifacimento per un team umano: 6-12 mesi-persona (circa 60.000-150.000 EUR). Non e' un prezzo di vendita: oggi, senza allievi che
  l'abbiano provato e senza area docenti, il valore di mercato e' basso; sale con review, prova con allievi e primi clienti.
- Il vantaggio non e' il codice ma pedagogia, contenuti verificati con allievi e distribuzione (scuole, enti).
- Diritto d'autore: tutela la forma, non le idee; il codice scritto con l'IA ha tutela incerta, conta il contributo umano (struttura, percorso,
  scelte). Proteggono licenza, termini d'uso e contratti. Prima di vendere licenze: breve consulenza di un avvocato di software.

## Cosa si chiede all'altra chat (Opus): review del piano pedagogico
Leggere `docs/PIANO-FASE-2.md` (sezione P), `scripts/check-review-scope.mjs` e due o tre lezioni a campione (per esempio c12-motore, c29-plc,
c36-pid in `src/content/units-v2.js`) e rispondere:
1. Il test di lettura (sei domande) e' quello giusto? Che cosa manca o e' di troppo?
2. L'ordine (pilota su Modulo 2, poi M3-M6 in parallelo, M1 per ultimo) e' sensato? La divisione degli agenti (Sonnet "allievo finto", Opus diagnosi e
   livelli difficili, Haiku arabo) regge, o conviene altro?
3. L'"allievo finto" Sonnet senza contesto tecnico e' un buon sostituto di allievi veri? Come renderlo piu' fedele a un quindicenne di IeFP?
4. Il perimetro (solo `spiegazione` e sintesi) basta per dire il "perche'"? O servono cambiamenti ammessi che ora sono vietati (per esempio
   una didascalia di demo o una `previsione`)? Se si', quali e con quale rischio?
5. Quali rischi vede nel tono delle riscritture (troppo lunghe, troppo da manuale, perdita di precisione tecnica)? Come limitarli?
6. Come misurare che la lezione e' migliorata prima di avere allievi veri?

## Domande ancora aperte per Gianluca
- Chi deve poter aprire il gioco una volta pubblicato (la sua classe, la scuola, i colleghi) e si vende o no? Decide il blocco D e quanto serve l'area docenti.
- Unire in `main` i documenti di piano e l'elenco (decisione da prendere; i file sono sul ramo `docs-piano-fase-2`).
- Pilota sul Modulo 2: confermato?
