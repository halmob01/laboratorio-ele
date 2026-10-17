# Prove 3D: review pedagogica (17 ottobre 2026)

Le cinque prove dei moduli: c23 «Una notte senza luce» (appartamento, Modulo 2), c24 «L’officina» (Modulo 3), c46 «Il cambio formato»
(nastro automatico, Modulo 4), c55 «Una sera d’inverno» (casa, Modulo 5), c51 «Il turno di notte» (fabbrica, Modulo 6).
Testi in `src/content/prove.js` (chiamata, missione, passi, frasi del registro, suggerimenti, rapporto, finale) e, per ogni prova, la
lezione d'ingresso e la domanda di diagnosi in `src/content/units-v2.js` (rivisti con i rispettivi moduli). Le scene (`src/scene3d`) e la
vista delle prove (`src/prove`) non sono state toccate.

## Che cosa andava già bene

Ogni prova ha una storia vera (una chiamata, una scheda di collaudo, una consegna del turno), un compito con i passi visibili, frasi del
registro che dicono che cosa è successo e perché («Il differenziale sente 300 mA che non tornano, ma non sa da quale linea vengono»), e
un rapporto finale con la causa del guasto e il rimedio. È già il modo giusto: il lavoro vero, con il perché dentro.

## Che cosa mancava e che cosa è cambiato

| Problema | Cambio |
|---|---|
| La domanda di diagnosi, il momento centrale della prova, aveva la risposta giusta molto più lunga delle altre in 4 prove su 5 (fino a 123 caratteri contro 77): si indovinava senza capire | Risposte riscritte: le sbagliate sono convinzioni credibili («la linea della cucina: il forno e il frigo consumano più di tutti»), lunghe quanto la giusta. Test in `test/opzioni.test.js` |
| A una risposta sbagliata il registro diceva solo «Risposta sbagliata. Si può riprovare.» | Una domanda che rimette sul ragionamento, diversa per ogni prova («Il termico è scattato, quindi il suo contatto si è aperto: perché il comando non se n’è accorto?») |
| I suggerimenti dicevano che cosa fare, quasi mai perché | Il perché in una frase: il finecorsa ferma il pacco prima che cada; il salvamotore si apre perché sui fili si lavora senza tensione; il programma si cambia a macchina ferma perché potrebbe muoverla di colpo; la portella si apre perché il robot resti senza potenza |
| Il finale raccontava il guasto ma non fissava la regola | Ogni finale chiude con «Da ricordare:» e la regola del modulo (aprire le linee e richiuderle una alla volta; ogni contatto che ferma sta in serie nel comando; un robot fermo non è sicuro; una soglia vale solo se il misuratore la vede) |

Traduzioni in `src/i18n/ar-55.js`. Attenzione: `scripts/check-lang.mjs` non controlla i testi di `src/content/prove.js` (le prove hanno
una pagina a parte); le traduzioni delle prove vanno aggiunte a mano e controllate cercando la frase nei file `ar-*.js`.

## Controllo del 17 ottobre (ramo `claude/bold-heisenberg-0v4gc0`)

- **La regola finale non si vedeva.** I testi «Da ricordare» stavano nel campo `win` di `src/content/prove.js`, che la vista non legge:
  il finale mostra il rapporto (`report`). Ora la regola sta in `report.rule` e i quattro rapporti (intervento, verbale di collaudo,
  fine turno, consegna della casa) hanno la riga «Da ricordare» (`src/prove/hud.js`, con il via di Gianluca). Tolto il campo `win`.
  Controllato a 390 px: il rapporto più lungo scorre dentro il riquadro, come prima.
- **Lucchetto.** c24 (dopo «Lavori in sicurezza») e c51 (dopo la slide «Il lucchetto» del Modulo 6) dicevano solo «apri il salvamotore»
  e «apri la portella». I suggerimenti ora dicono che nel lavoro vero ci si mette il proprio lucchetto; la regola di c51 lo ripete; la sintesi
  di c24 dice «con il lucchetto e la tensione verificata». Nelle prove il lucchetto non è un comando: resta una frase, non un passo.
- **c55:** «Il contatore non si riarma da solo», come dice la lezione (nelle case vere si riarma dal suo pulsante).
- Arabo in `src/i18n/ar-57.js`.

## Da fare in seguito

- Le domande della sfida guasto dei livelli normali (41) hanno lo stesso problema di lunghezza delle risposte (la giusta è la più lunga 39
  volte su 41). Sono mescolate nella vista; riscriverle è lo stesso lavoro fatto qui e sulle previsioni, se Gianluca lo vuole.
- Una prova con allievi veri (blocco Z): guardare se leggono la chiamata e il rapporto finale, o se cliccano e basta.
