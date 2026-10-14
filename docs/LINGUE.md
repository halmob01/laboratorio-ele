# Lingue

Il gioco e' scritto in italiano. Le altre lingue sono tradotte al momento di mostrare i testi, con lo schema di `sito-feudo`.

## Come funziona

- `src/i18n/index.js`: `tr()` cerca la frase nel dizionario esatto della lingua, poi negli schemi (espressioni regolari per le frasi con numeri e nomi), poi divide sul separatore ` · `. Le frasi non trovate restano in italiano e finiscono in `MISS`.
- `translateDOM()` traduce i nodi di testo e gli attributi `aria-label`, `title`, `placeholder`, `alt` fuori dai blocchi `data-notr`. Un `MutationObserver` su `document.body` traduce tutto cio' che l'applicazione ridisegna, comprese le etichette della scena 3D. L'originale italiano resta sul nodo: cambiando lingua si ritraduce da li'.
- La lingua si sceglie dal selettore in alto (visibile solo se ce n'e' piu' di una). Predefinita: lingua del dispositivo se disponibile, altrimenti italiano. Scelta salvata in `fase-e-neutro-lingua`.
- `html[lang]` e `html[dir]` cambiano con la lingua. In arabo il banco, le illustrazioni e la scena restano da sinistra a destra (sono schemi con sigle latine); testi e pagina vanno da destra a sinistra. Carattere Cairo (SIL OFL) caricato solo per i caratteri arabi.
- Sigle dei componenti (L, N, PE, A1, 13, 14) e cifre restano latine; i numeri dentro le frasi arabe si isolano con `iso()`.
- Il nome del gioco e il nome del giocatore non si traducono (`data-notr`).
- Sotto la pagina e nel piede c'e' l'avviso "Traduzione non rivista da un madrelingua", con link di segnalazione quando `CONTACT_EMAIL` e' compilato.

## Dizionario arabo

`src/i18n/ar-1.js` ... `ar-7.js` (contenuto dei livelli, interfaccia, messaggi del motore) e `ar.js` (schemi). Glossario fisso: fase = الطور, neutro = المحايد, terra = الأرضي, morsetto = المربط, quadro = اللوحة الكهربائية, deviatore = المفتاح ثنائي الاتجاه, invertitore = مفتاح التقاطع, portalampada = حامل المصباح, magnetotermico = القاطع المغناطيسي الحراري, differenziale = القاطع التفاضلي, cortocircuito = قصر الدائرة.

Traduzione non rivista da un madrelingua; revisione indipendente (modello) fatta, errori corretti.

## Cosa fare quando si aggiunge o si cambia un testo italiano

1. Si scrive la frase in italiano come sempre.
2. `node --test test/i18n.test.js` fallisce elencando le frasi senza traduzione (contenuto dei livelli, schermate raggiunte da `scripts/harvest-ui.mjs`, messaggi del motore su cablaggi sbagliati).
3. Si aggiunge la voce nel dizionario (o uno schema in `ar.js` se la frase contiene numeri o nomi).
4. `node scripts/check-lang.mjs ar` elenca le mancanti senza eseguire la suite.

Se una frase italiana nasce da una funzione (testo composto), conviene uno schema: vedi gli esempi in `ar.js`. Le schermate che il percorso automatico non raggiunge (stati rari) vanno aggiunte a mano al dizionario; `scripts/harvest-ui.mjs` si puo' estendere.

## Nuova lingua (es. inglese)

1. Creare `src/i18n/en.js` che chiami `registerLang('en', dizionario, schemi)` con le stesse chiavi di `ar-*.js` (per l'inglese le chiavi di interfaccia e messaggi bastano come base).
2. Importarlo in `src/ui2d/app.js` e aggiungere `'en'` a `LANGS` in `test/i18n.test.js`.
3. Il selettore la mostra da solo appena `hasLang('en')` e' vero.

**Stato:** arabo fatto; inglese non ancora (meccanismo pronto).

## Moduli 2 e 3

I nuovi livelli (c07-c16) vanno scritti con le traduzioni: il test di completezza fallisce se manca una frase, compresi i messaggi del motore v2 (`work.checkFail` ecc., gia' coperti da schemi in `ar.js`).
