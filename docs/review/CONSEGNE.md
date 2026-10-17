# Consegne per gli agenti della review pedagogica

Testi da copiare così come sono quando si lancia un agente (metodo: `docs/METODO-REVIEW-PEDAGOGICA.md`, §7).
Al posto di `<...>` si mettono i percorsi veri. Le consegne sono quelle usate nel pilota del Modulo 2 (17 ottobre 2026).

## 1. Allievo finto (Sonnet)

Si lancia due volte con la stessa consegna: sulle lezioni di partenza (pacchetto fatto con `--commit fe4fee0`) e su quelle riscritte.
Così il confronto prima/dopo è onesto. Il pacchetto si prepara con `node scripts/review/pacchetto-allievo.mjs <modulo> > <file>`.

```
Fai la parte di un ALLIEVO in una prova di comprensione. Sei un ragazzo di 15-16 anni al primo anno di un corso professionale (IeFP)
per elettricisti. Sai SOLO quello che c'è scritto nel file che ti do: se una cosa non è scritta lì, non la sai, anche se in realtà la
conosci. Non usare conoscenze tue di elettrotecnica per riempire i vuoti: la prova serve proprio a trovare quello che le lezioni non
spiegano.

Leggi il file <pacchetto>. All'inizio c'è quello che sai già (sintesi dei livelli precedenti); poi le lezioni di un gioco per allievi
elettricisti, ciascuna con la sintesi e i passi dell'esercizio sul banco.

ATTENZIONE, regola importante sul "perché": un perché vale solo se spiega PERCHÉ SI FA COSÌ E NON IN UN ALTRO MODO, oppure A CHE COSA
SERVE nel lavoro vero. Non vale ripetere il come. Esempio:
- NON VALE: "Il 12 va alla lampada verde perché il 12 è chiuso a riposo, quindi la verde si accende a riposo" (ridice il come).
- VALE: "La verde va sul 12 perché a riposo deve dire «comando spento», come le spie di un quadro" oppure "A2 va al neutro perché la
  bobina è un carico e senza ritorno non si eccita".
Se l'unico motivo che trovi ridice il come, scrivi **SOLO IL COME**.

Per OGNI livello, in ordine, scrivi:
1. **A che cosa serve nella vita vera**: con parole tue. Se la lezione non te lo fa capire, scrivi **NON LO SO**.
2. **Passo per passo**: una tabella con una riga per ogni passo del banco (tranne "Premi Verifica"):
   | N | Passo | Perché si fa così (regola sopra) | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
   Nella colonna "Perché" scrivi il motivo solo se la lezione lo dice o si deduce chiaramente da quello che sai; altrimenti scrivi
   **LA LEZIONE NON LO DICE** oppure **SOLO IL COME**. Nella colonna "Che cosa succede" scrivi **NON LO SO** se la lezione non lo dice.
   Nella colonna "Dove" il titolo della slide, oppure "-".
3. **Parole che non ho capito**: parole o sigle usate senza spiegazione (o spiegate dopo averle usate).
4. **Domande che mi restano**: le domande che faresti al professore, soprattutto i "perché". Solo quelle vere, non inventarne per riempire.
5. **Conteggio**: "Passi con il perché vero: X su N. Passi con la conseguenza: Y su N. Capisco a che cosa serve: sì/no."

Sii onesto e pignolo. Non dare giudizi sulla scrittura e non proporre riscritture: fai solo l'allievo.

Scrivi tutto in italiano nel file <docs/review/moduloN-allievo-...md> con un titolo, e alla fine una tabella riassuntiva:
livello | passi | perché vero | conseguenza | capisco a che cosa serve | domande che restano. Non modificare nessun altro file.
Alla fine rispondi solo con la tabella riassuntiva.
```

Che cosa guardare nel risultato: più dei numeri contano la risposta "a che cosa serve" e le **domande che restano**. Nel pilota le
domande hanno trovato cinque contraddizioni vere tra lezioni e livelli precedenti (per esempio "mai interrompere il neutro" contro il
magnetotermico che apre anche il neutro). Ogni domanda va letta e, se è giusta, risolta nella lezione.

## 2. Traduzione araba (Haiku)

Prima si scrive l'elenco delle frasi senza traduzione, una per riga (ci vogliono alcuni minuti):

```
node scripts/check-lang.mjs ar 2>/dev/null | grep -v "Not implemented" | awk 'f{print} /frasi senza traduzione/{f=1}' > <frasi.txt>
```

Poi la consegna (il numero `NN` è quello prenotato in `docs/PROCEDURA-UNIONE.md`):

```
Traduci in arabo standard moderno, semplice e chiaro (per ragazzi di 15-16 anni arabofoni che imparano il mestiere di elettricista
in Italia), le frasi italiane elencate una per riga nel file <frasi.txt>.

Scrivi il risultato nel file NUOVO src/i18n/ar-NN.js con la stessa forma di src/i18n/ar-47.js:
// Dizionario arabo, parte NN: <che cosa contiene>.
// Glossario: <termini nuovi usati>.
export default {
'frase italiana esatta': 'traduzione araba',
};

Regole obbligatorie:
1. La chiave è la frase italiana COPIATA ESATTAMENTE dalla riga del file (stessi apostrofi tipografici ’, stesse virgolette « »,
   stessi spazi e punteggiatura). Non correggere e non cambiare niente nella chiave.
2. Chiavi e valori tra apici singoli '. Se in un valore arabo servisse un apice dritto ', scrivilo come \'.
3. Una riga per frase, tutte, nessuna saltata, nessuna aggiunta.
4. Glossario fisso: fase = الطور، neutro = المحايد، terra = الأرضي، morsetto = المربط، quadro = اللوحة الكهربائية، relè = المرحّل،
   relè ad impulsi = مرحّل النبضات، relè temporizzato = المرحّل الزمني، bobina = الملف، contatto = الملامس، comune = المشترك،
   pulsante = الزر، interruttore = المفتاح، lampada = المصباح، presa = المقبس، differenziale = القاطع التفاضلي،
   magnetotermico = القاطع المغناطيسي الحراري، multimetro = جهاز القياس المتعدد، trasformatore = المحوّل، cavo = الكابل،
   tensione = الجهد، corrente = التيار، potenza = القدرة، dispersione = التسرّب الأرضي، cortocircuito = قصر الدائرة،
   sovraccarico = الحمل الزائد، portata = سعة التيار. Per i termini industriali usa quelli già presenti in src/i18n/ar-*.js
   (cerca la parola italiana nei file per trovare la traduzione usata).
5. Lascia in caratteri latini sigle, numeri dei morsetti, unità e valori (A1, 13-14, NA, NC, L1, U, PE, 230 V, 30 mA, 1,5 mm²).
6. Traduzione fedele al senso, frasi brevi, nessuna spiegazione aggiunta.

Poi registra il file in src/i18n/ar.js: `import pNN from './ar-NN.js';` dopo l'ultimo import e `...pNN` in fondo all'elenco di
registerLang. Non cambiare nient'altro.
Controlla: node -e "import('./src/i18n/ar-NN.js').then(m=>console.log(Object.keys(m.default).length))" e poi
node scripts/check-lang.mjs ar 2>/dev/null | grep -v "Not implemented" | tail -3 : deve dire "0 frasi senza traduzione".
Se ne mancano, una chiave non è identica: copiala di nuovo dal file delle frasi.
Non fare commit. Rispondi con il numero di frasi tradotte e l'esito del controllo.
```

Dopo: controllare il diff di `src/i18n/ar.js` (solo due righe), `npm test` verde. Le frasi "strane" che Haiku segnala sono spesso
risposte sbagliate delle previsioni, scritte apposta così.
