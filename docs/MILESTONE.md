# Le prove 3D dei moduli (milestone)

Ogni modulo finisce con una prova in una scena 3D: l'appartamento di notte (Modulo 2), l'officina (Modulo 3), e poi il nastro
con il PLC, la casa del futuro e la fabbrica. Sono il punto d'arrivo del modulo: devono sembrarlo.

## Una cornice comune, un contenuto per prova

Tutte le prove hanno la stessa cornice, cosi' chi gioca la riconosce e sa dove guardare:

- **Ingresso**: schermata nera con modulo, titolo e una riga d'atmosfera ("Ore 22:40. Tac."). Copre il caricamento della scena
  (almeno 2,4 secondi, al massimo 8; si puo' saltare).
- **Scena a tutto schermo**, senza barra in alto e piede di pagina.
- **Barra in alto**: mappa, titolo, ora della prova e strumenti (fili, torcia, suono, registro).
- **Il metodo** a sinistra, come il binario della mappa: i passi si spuntano da soli, il corrente e' scritto grande.
- **Registro** a lato, su richiesta: cosa e' successo, con l'ora.
- **Comandi** in basso: il quadro (o la pulsantiera) da usare, sempre a portata, anche da tastiera. Sotto, un suggerimento
  che dice il passo corrente con parole sue. Qui anche "Rispondi" e "Verifica".
- **Schema e multimetro**: il banco 2D di prima, con il multimetro e l'esito dei controlli, si apre a lato.
- **Momento forte**: quando succede la cosa che conta (lo scatto del differenziale) lampo, scossa, scritta grande e un suono.
- **Finale**: il rapporto d'intervento (dove, guasto, intervento, stelle), torna alla mappa o rifai la prova.
- **Vista dei fili** (`src/scene3d/wiring.js`): i conduttori dal quadro ai carichi, che si accendono quando sono in tensione
  e mostrano la corrente che corre; si nascondono dal pulsante "Fili".
- **Suono** (`src/prove/sound.js`): leve, scatto e i ronzii degli apparecchi legati allo stato vero.

Impaginazione: barra in alto (mappa, titolo, ora, strumenti), il metodo a sinistra come il binario della mappa, il quadro in
basso come oggetto fisico, sottotitoli per i momenti forti, registro a lato, la chiamata all'inizio.
La prova dell'appartamento e' raccontata in atti (chiamata, arrivo, lezione, trova il quadro, gioco, finale): vedi
`docs/PROGETTO-APPARTAMENTO.md`.

Cambia da prova a prova:

- l'atmosfera della scena (notte, capannone, ...);
- i comandi in basso e cosa dicono (tensione a valle, stato);
- i passi del metodo e le frasi del registro;
- il momento forte (differenziale che scatta, emergenza con il lampeggiante rosso, termico che ferma il nastro, ...).

## Il trilocale (Modulo 1)

Il primo traguardo usa la stessa cornice, al giorno invece che al buio. La casa 3D occupa tutto lo schermo; le tre stanze
sono le stazioni del binario a sinistra e dei segnaposti sulle lampade.

- **Ordine di lavoro** (Via Roma 12) al posto della chiamata; poi la casa al tramonto, il tetto si alza.
- **Banco in pannello**: toccando una stanza il banco 2D si apre a destra (sul telefono dal basso) e la camera va sulla stanza.
- **Fili nei muri**: ogni filo tirato sul banco compare nella casa, dal quadro alla scatola, nel suo colore (`wires3D` in
  `src/trilocale/house.js`, disegnati da `createWireSet` in `src/scene3d/wiring.js`).
- **Verifica riuscita**: il pannello si chiude, la corrente corre sui fili, la stanza si accende.
- **Collaudo**: segnaposti sugli interruttori veri della stanza; si provano tutti.
- **Finale**: finite le tre stanze scende la sera (`setNight`), la casa accesa da fuori e la Dichiarazione di conformita'
  firmata col nome di chi gioca.

File: `src/trilocale/page.js` (atti), `src/trilocale/hud.js` (HTML), `TRILOCALE_FRAME` in `src/content/trilocale.js` (testi),
CSS nella sezione "trilocale a tutto schermo".

## Dove sta cosa

- `src/content/prove.js`: testi e struttura di ogni prova (titolo, comandi, passi, frasi del registro, finale).
- `src/prove/hud.js`: i pezzi della cornice come HTML e la logica di passi e registro. Funzioni pure, provate in `test/milestone.test.js`.
- `src/prove/page.js`: collega cornice, sessione e scena (tocchi, effetti, ingresso, camera che va a guardare la stanza).
- `src/scene3d/*.js`: le scene. Una scena puo' offrire `torch(on)` e `aim(x, y)` per la torcia.
- `src/ui2d/style.css`, sezione "prove 3D a tutto schermo".

Una prova senza voce in `PROVE` resta com'era: scena accanto al banco, con i pulsanti delle viste.

L'officina (Modulo 3) ha la cornice dal progetto `docs/PROGETTO-OFFICINA.md`: scheda di collaudo, saracinesca e plafoniere,
la pulsantiera in basso al posto del quadro, il verbale delle cinque prove a sinistra, i fili veri del banco nella scena, il
termico che scatta ma non ferma il nastro, il banco a salvamotore aperto, il turno delle 7:00 e il verbale di collaudo.

## Aggiungere la cornice a una prova

1. Voce in `PROVE` con `kick`, `place`, `title`, `tagline`, `clock`, `goal`, `dockTitle`, `controls`, `steps`, `log`, `win`.
2. In `hud.js`: i passi (`stepsOf`, `remember`), le frasi (`describe`) e il suggerimento (`hintOf`) per quella scena;
   in `dockHTML` i comandi, se non sono interruttori modulari.
3. Traduzioni in `src/i18n/` (il test delle lingue elenca quelle che mancano).
4. Test in `test/milestone.test.js` su una partita vera.

## Fluidita'

All'avvio: i programmi grafici si preparano in parallelo nella variante giusta (buffer degli effetti, non lo schermo), dopo
la luce ambiente; le texture che arrivano dopo partono da segnaposti dello stesso aspetto; le texture disegnate nel codice
stanno su canvas in memoria; i pacchetti 3D e i loro file si scaricano in sottofondo a pagina ferma (`src/ui2d/prefetch.js`).

La resa comune delle scene sta in `src/trilocale/render.js`: ombre ridisegnate solo quando qualcosa si sposta,
oggetti fermi accorpati per materiale, occlusione ambientale a meta' risoluzione, qualita' che scende a gradini solo se
il dispositivo, misurato durante i movimenti, non ce la fa.

Nota: aprendo `index.html` con un doppio clic (indirizzo `file://`) Chrome blocca il caricamento di modelli, texture e luce
ambientale: la scena resta piu' povera. Servita da un sito (anche GitHub Pages) carica tutto.
