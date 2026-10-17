# Modulo 4, Automazione: schede della review (17 ottobre 2026)

Metodo: `docs/METODO-REVIEW-PEDAGOGICA.md`. Esempi seguiti: `docs/review/modulo2.md`, `docs/review/modulo3.md`. Livelli: c28, c29, c30,
c31, c32, c46. c28 era assegnato alla review del Modulo 6 sicurezza: è passato a questa (tabella di `docs/PROCEDURA-UNIONE.md`).
Gianluca ha chiesto una verifica piena anche dei livelli PLC, non il controllo leggero previsto dal metodo: «il PLC è un argomento
complesso e va capito».

## Risultato (allievo finto, stessa consegna prima e dopo)

Prove in `modulo4-allievo-prima.md` (lezioni di `fe4fee0`) e `modulo4-allievo-dopo.md` (lezioni riscritte).

| Livello | Perché vero, prima | Perché vero, dopo | Conseguenza, prima → dopo | Capisce a che cosa serve |
|---|---|---|---|---|
| c28 | 5/9 | 8/9 | 3 → 6 | sì, sì |
| c29 | 6/8 | 7/8 | 4 → 5 | sì, sì |
| c30 | 1/3 | 2/3 | 1 → 2 | sì, sì |
| c31 | 3/4 | 3/4 | 1 → 1 | sì, sì |
| c32 | 2/4 | 3/4 | 2 → 2 | sì, sì |
| c46 | - | - | - | sì, sì |
| Totale | 17/28 | 23/28 | 11 → 16 | |

I passi che restano senza perché sono di sola prova («Prova la marcia», «Prova il lotto»). Nei livelli PLC i passi sono pochi (si scrive
un programma): il numero conta meno delle domande che restano, che dopo la riscrittura sono di approfondimento e non più di parole o
concetti mancanti.

Dopo la seconda prova, dalle domande che restano sono stati aggiunti: in c28 lo strappo piccolo al passaggio (il motore è quasi a
velocità), «partono leggere» spiegato, perché KT prende tensione da A1 di KM1 (l'autoritenuta lo tiene; Marcia è un impulso), l'attimo
senza collegamento tra stella e triangolo; in c29 ingressi a 230 V nel gioco e spesso a 24 V nei PLC veri, il programma che resta in
memoria da spento, il PLC bloccato con Q0 chiuso (perché l'emergenza resta nei fili); in c30 «passa la corrente» è un modo di dire,
l'ordine dei contatti in serie non conta, Marcia e Arresto insieme; in c31 il NC di KM2 che lascia chiudere KM3 solo a KM2 aperto; in c32
perché l'arresto passa dal programma e il fungo no; in c46 perché il PLC riparte da zero quando si carica un programma.

**Prova dei tasti nel browser:** `prova-tasti.mjs` tutto OK per c28-c32. c46 è una prova: lo script non la gestisce (vedi `modulo3.md`).

## Quadro d'insieme

| Livello | Verdetto | Che cosa mancava soprattutto |
|---|---|---|
| c28 stella-triangolo | ritocco + slide «Perché ogni filo del comando» | il perché dei fili di KT (16 alla stella, 18 al triangolo, alimentato da A1 di KM1); la targa 400/690 V; da dove vengono i 230 V; «coppia»; perché KM1 resta chiuso; quanto dura il ritardo; «incollato» |
| c29 dal relè al PLC | ritocco + due slide | il PLC nel lavoro vero (tipo A bis del metodo); «bit» e «gradino» usati senza spiegarli; perché serve il contattore (le uscite reggono pochi ampere); perché l'alimentazione a valle; a che cosa serve la spia; Marcia e Arresto insieme |
| c30 ladder | ritocco + slide «Due NC diversi» | la bobina del ladder confusa con quella vera; «montanti», «bit interno»; il pulsante NC nei fili che nel gradino diventa NA (il concetto più difficile), con la conseguenza se lo si mette NC; perché la spia ha un gradino suo e segue Q0 |
| c31 temporizzatore | ritocco | perché il TON si azzera (avviamento corretto); perché 6 secondi; perché Q0 resta acceso; il NC di T1 come l'arresto di c30 |
| c32 nastro con il PLC | ritocco + slide divisa | perché l'arresto sta nel programma e il fungo nei fili; Marcia azzera il conteggio; «consenso», «forza le uscite»; il caso del PLC bloccato con Q0 chiuso (rimanda al relè di sicurezza del Modulo 6); slide da 121 parole divisa |
| c46 cambio formato | ritocco | ordine del collaudo e come si passa dalla funzione sbagliata al gradino da leggere (slide dopo la previsione, per non svelarla) |

## Fili rossi del Modulo 4

- **Comando e potenza sono separati** (c18, c22): c29 «le uscite del PLC sono piccoli relè... come nel teleruttore: comando piccolo, potenza
  grande»; «il PLC comanda il contattore, non il motore».
- **Lo stato a riposo e il guasto sicuro** (c13): l'arresto resta NC anche con il PLC; c30 lo porta nel programma («nel programma conta il
  valore del bit»).
- **Qualcosa deve ricordare** (c08, c13): l'autoritenuta è Q0 riletto in parallelo a Marcia.
- **Ogni protezione protegge qualcosa** e **le sicurezze non dipendono dal programma** (nuovo, c29-c32): l'arresto è un comando di lavoro e può
  passare dal programma; fungo e termico fermano un pericolo e restano nei fili. Torna nel Modulo 6 (relè di sicurezza).
- **Il giro della corrente** (c01): IC al neutro, «senza ritorno nessun ingresso arriva a 1».
- **Tensione, corrente, potenza**: c28, lo strappo all'avviamento.

## Schede

### c28 - Stella-triangolo
**Idea chiave:** un motore grande parte a stella (un terzo della corrente) e passa a triangolo quando ha preso velocità.
**Problema vero:** compressori, ventilatori, pompe: lo strappo all'avviamento fa scattare le protezioni a monte.
**Cambi:** prima slide con il problema e le macchine adatte; targa 400/690 V spiegata (ogni avvolgimento vuole 400 V, quindi triangolo sulla
rete a 400 V); i 230 V della stella legati a c21; «coppia»; KM1 sempre chiuso; tempo di 5-15 s (`VALORI-TECNICI.md`), 6 nel gioco;
«incollato»; tabella del comando (Arresto e Marcia, KT A1 e 15, 16, 18, 21-22, A2); sintesi.

| Passo | Perché | Se lo sbagli | Dove (dopo) |
|---|---|---|---|
| 2-5 Arresto, marcia, KM1, autoritenuta | Come marcia e arresto | Come c13 | tabella |
| 6 KT su A1 di KM1 | Parte con la linea, tenuto dall'autoritenuta; si azzera con Arresto | - | tabella (prima MANCA) |
| 7 16 verso KM2 passando dal 21-22 di KM3 | Chiuso a riposo: si parte in stella; interblocco | Sul 18: parte a triangolo con tutto lo strappo | tabella (prima MANCA) |
| 8 18 verso KM3 passando dal 21-22 di KM2 | Dopo il ritardo il triangolo | KM3 senza neutro: il motore si ferma (sfida) | tabella |

### c29 - Dal relè al PLC
**Cambi:** slide «Il PLC nel lavoro vero» (dove sta, come entra il programma, chi fa che cosa, dove si incontra, il ladder nato per gli
elettricisti); slide «Uno e zero: il bit e il gradino» prima della scansione; perché il contattore resta (uscite da pochi ampere);
alimentazione a valle; la spia Q1; Marcia e Arresto insieme nella tabella della scansione; ingressi a 24 V nei PLC veri; il programma resta
in memoria; il PLC bloccato con Q0 chiuso; sintesi con il perché.

### c30 - Ladder: l'autoritenuta
**Cambi:** prima slide con il richiamo agli elettricisti, i montanti come fase e neutro, la bobina come bit e il bit interno; riga della spia
nella tabella del gradino; slide «Due NC diversi: nei fili e nel programma», dopo la previsione che lo chiede, con la conseguenza del
contatto messo NC (a riposo il motore non parte, con un filo staccato non si ferma più); sintesi.

### c31 - Il temporizzatore nel PLC
**Cambi:** perché il TON si azzera (dopo un arresto si riparte in stella con il tempo pieno, come KT); Q0 sempre acceso; i 6 secondi;
«condizione che cade»; sintesi (interblocco nei fili che aspetta l'apertura vera di KM2).

### c32 - Il nastro con il PLC
**Cambi:** la spia dice all'operatore che può portare via i pacchi; Marcia azzera il conteggio; arresto nel programma, fungo e termico nei
fili, con la ragione; «consenso», «forza le uscite a 1», il punto 96; slide divisa in due («Il consenso nel gradino») con il caso del PLC
bloccato che rimanda al relè di sicurezza del Modulo 6; sintesi.

### c46 - Il cambio formato (prova)
**Cambi:** slide «Una funzione alla volta, poi il gradino giusto» dopo la previsione; perché il PLC riparte da zero quando si carica un
programma.

## Livelli nuovi
Nessuno. I vuoti trovati erano di spiegazione (bit, gradino, il PLC nel lavoro vero, il doppio NC), colmati con slide nelle lezioni. Il
caso del PLC bloccato con l'uscita chiusa è trattato nel Modulo 6 (relè di sicurezza, c26): qui basta il rimando.

## Da far controllare al collega di laboratorio
- c28: «tempo di commutazione 5-15 s nei motori veri» e l'attimo senza collegamento tra stella e triangolo (tempo morto, già tra le domande
  di `VALORI-TECNICI.md`).
- c29: «le uscite del PLC sono piccoli relè che reggono pochi ampere»; «molti PLC veri hanno gli ingressi a 24 V».
- c32: «nelle macchine vere l'emergenza passa anche da un relè di sicurezza».
