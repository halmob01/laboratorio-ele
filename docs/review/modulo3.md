# Modulo 3, Motori e comandi: schede della review (17 ottobre 2026)

Metodo: `docs/METODO-REVIEW-PEDAGOGICA.md`. Esempio seguito: `docs/review/modulo2.md`. Fonti: lezioni, passi e sfide guasto di c21, c12,
c22, c13, c14, c15, c16, c52 e c24 (ordine di gioco), la prova dell'allievo finto sulle lezioni di `fe4fee0`
(`modulo3-allievo-prima.md`), `docs/VALORI-TECNICI.md`.

## Risultato (allievo finto, stessa consegna prima e dopo)

Prove in `modulo3-allievo-prima.md` (lezioni di `fe4fee0`) e `modulo3-allievo-dopo.md` (lezioni riscritte).

| Livello | Perché vero, prima | Perché vero, dopo | Conseguenza, prima → dopo | Capisce a che cosa serve |
|---|---|---|---|---|
| c21 | 1/4 | 3/4 | 2 → 3 | sì, sì |
| c12 | 4/4 | 4/4 | 3 → 3 | sì, sì |
| c22 | 4/8 | 7/8 | 4 → 6 | sì, sì |
| c13 | 7/12 | 11/12 | 6 → 7 | sì, sì |
| c14 | 4/5 | 4/5 | 3 → 4 | sì, sì |
| c15 | 4/4 | 4/4 | 4 → 4 | sì, sì |
| c16 | 3/3 | 3/3 | 2 → 3 | sì, sì |
| c52 | 9/9 | 9/9 | 6 → 7 | sì, sì |
| c24 | - | - | - | sì, sì (prima: «come si trova il guasto no») |
| Totale | 36/49 | 45/49 | 30 → 37 | |

c24 non ha passi del banco (è una prova): conta la risposta su come si collauda e si trova il guasto, che dopo c'è.
I passi che restano senza perché sono di sola prova («Chiudi il salvamotore», «Prova la marcia»).

Dopo la seconda prova, dalle domande che restano sono stati corretti: c14 e c16 (perché il 95-96 sta prima dell'arresto e il
finecorsa dopo la marcia: un contatto che ferma può stare prima o dopo il parallelo marcia-autoritenuta, mai dentro; l'ordine tra
termico, fungo e arresto è un'abitudine), c14 e c15 («subito» contro «per un attimo una corrente enorme»: ora tutte e due dicono «in
una frazione di secondo»), c22 (che cosa succede con la fase presa a monte; «sezionamento» spiegato), c13 (Arresto e Marcia premuti
insieme), c16 (pacco ancora sul finecorsa), c21 (kW e monofase), c52 (l'arresto è senza fase perché il posto è del fungo; che cosa fare
se la prova dello strumento non dà 230 V), c24 (perché quell'ordine; correggere a tensione verificata).

**Prova dei tasti nel browser:** `prova-tasti.mjs` tutto OK per c21, c12, c22, c13, c14, c15, c16, c52. Per c24 lo script si ferma
sulla schermata d'ingresso della prova («Inizia»), anche su `main`: non gestisce le prove. La lezione di c24 è stata controllata con
schermate a 390 e 1280 px, come le tabelle nuove di c13 e c52.

## Quadro d'insieme

Il Modulo 3 partiva meglio del Modulo 2: l'allievo finto capiva già a che cosa serve ogni livello e trovava il perché in 36 passi su
54. Le lezioni spiegavano bene il meccanismo (autoritenuta, NC, interblocco); mancavano soprattutto lo scopo nel lavoro vero nei primi
livelli, il perché di alcuni collegamenti che tornano in tutti i livelli (la fase del comando presa a valle del salvamotore, l'ordine dei
contatti in serie, i numeri dei contatti) e il perché di alcune regole (premere Arresto prima di invertire, la macchina che non riparte da
sola, il termico che non si riarma da solo).

**Difetto trovato nelle tabelle:** la vista mostra due colonne (`docs/LEZIONE-ED-ESERCIZIO.md` §6), ma la tabella del senso di rotazione
di c12 ne aveva quattro e le due tabelle di c52 tre e quattro: sul banco l'allievo non vedeva il «perché» della procedura né i valori
attesi delle misure. Riscritte tutte a due colonne (l'allievo finto le leggeva intere, perché il pacchetto stampa tutte le colonne).

| Livello | Verdetto | Che cosa mancava soprattutto |
|---|---|---|
| c21 tre fasi | ritocco + slide nuova | perché il trifase («cavi più sottili», «sempre una spinta» senza ragione); che cosa vuol dire sfasate; a che cosa servono le due misure |
| c12 motore | ritocco + slide nuova | dove si incontra il motore; parole (avvolgimento, rotore, carcassa, a monte e a valle, polo); perché non serve il neutro; che cosa si può toccare a salvamotore aperto; tabella illeggibile |
| c22 teleruttore | ritocco + slide nuova | perché la fase del comando a valle del salvamotore; perché la bobina a 230 V; i numeri 3-4 del pulsante; teleruttore e contattore sono la stessa cosa; «autoritenuta» nella sintesi prima di spiegarla |
| c13 marcia e arresto | ritocco + slide nuova | perché l'arresto sta prima della marcia; perché la spia sta su A1; perché un contattore che si tiene da solo (non riparte dopo un black-out); numeri dei contatti |
| c14 termico | ritocco | perché servono salvamotore e termico; perché il termico sta sotto il contattore; perché non si riarma da solo e che cosa si controlla prima del Reset |
| c15 inversione | ritocco + slide nuova | perché premere Arresto prima di invertire; perché l'interblocco se il salvamotore scatterebbe comunque; quali fasi si scambiano; il perché dei fili (il banco dà solo l'obiettivo) |
| c16 nastro | ritocco + slide nuova | differenza tra fungo e arresto; come riparte il nastro dopo il finecorsa; perché quell'ordine dei contatti; il fungo ferma anche la potenza? |
| c52 lavori in sicurezza | ritocco | tabelle illeggibili; «bassa tensione» (in c10 i 12 V sono bassissima tensione); un lucchetto per persona; la misura solo tra fase e neutro è una semplificazione |
| c24 officina | ritocco | come si collauda e come si trova il guasto (la sfida lo chiede, la lezione no) |

## Fili rossi del Modulo 3

- **Il giro della corrente** (c01): la bobina del contattore e la spia sono carichi come la lampada (A2 al neutro); nel motore il giro
  c'è, ma tra le fasi (c12: «la corrente che arriva da una fase torna dalle altre due»).
- **Tensione, corrente, potenza** (c01, c17): c21, perché il trifase porta la stessa potenza con meno corrente per filo.
- **Comando e potenza sono separati** (c18): c22 «è un relè grande, come quello del Modulo 2», c13 «il contatto è solo un interruttore:
  la tensione gliela porti tu».
- **Lo stato a riposo e il guasto sicuro** (c18, c13): frase fissa in c13 e c16, «NA e NC si scelgono pensando a che cosa succede se un
  filo si stacca».
- **Qualcosa deve ricordare** (c08): c13, «come nel relè ad impulsi, a ricordare è il contattore».
- **Ogni protezione protegge qualcosa da qualcosa** (c19): c12 «come il magnetotermico protegge il cavo, il salvamotore protegge il
  motore»; c14 «come la parte termica del magnetotermico».
- **Si lavora senza tensione** (c12): c12, c22, c52, c24.
- **Nuovo nel modulo, usato uguale da c13 a c24:** *i contatti che fermano stanno in serie, fuori dal parallelo tra marcia e
  autoritenuta, così le interrompono tutte e due* (arresto in c13, 95-96 in c14, fungo e finecorsa in c16, sfida di c24).
- **Nuovo nel modulo:** *i numeri dei contatti dicono il tipo: finiscono in 1-2 i NC, in 3-4 i NA* (c13; torna in c15 con il 21-22).

---

## c21 - Le tre fasi

**Verdetto:** ritocco + slide «Perché ogni filo e ogni misura».
**Idea chiave:** in officina arrivano tre fasi: tra una fase e il neutro 230 V, tra due fasi 400 V.
**Problema vero:** le macchine hanno motori potenti; con il trifase partono da sole e i cavi restano sottili.
**Come funziona:** le tre fasi spingono a turno (sfasate): tra due fasi non 460 ma 400 V.
**Fili rossi:** giro della corrente, tensione corrente potenza.
**Parole nuove:** sfasate, trifase, monofase (prima «conduttori attivi», «a parità di potenza»: tolti).

| Passo | Perché | Se lo sbagli | Dove lo dice la lezione (dopo) |
|---|---|---|---|
| 1 L1 alla lampada | La fase porta la tensione | - | Perché ogni filo |
| 2 Neutro alla lampada | Ogni carico ha bisogno di fase e neutro | Su L2: 400 V, si brucia (sfida) | Perché ogni filo, Attenzione |
| 3 Misura L1-N | Controlli che la fase arrivi per lampade e prese | 0 V: la fase manca | Perché ogni filo (prima MANCA) |
| 4 Misura L1-L2 | La tensione dei motori; si misurano tutte le coppie | Pericolo più grande | Perché ogni filo (prima MANCA) |

**Cambi:** prima slide con casa (una fase) e officina (tre fasi); «sfasate» con la ruota spinta a turno; seconda slide con il perché per
motori e cavi (esempio 10 kW: circa 14 A per fase contro 43 A in monofase); tabella; previsione con i perché nelle opzioni; sintesi.

## c12 - Il motore trifase

**Verdetto:** ritocco + slide «Perché ogni filo»; tabella del senso di rotazione riscritta a due colonne.
**Idea chiave:** il motore trifase prende le tre fasi e la terra, passando dal salvamotore che lo protegge e lo isola.
**Problema vero:** nastri, pompe, ventilatori, trapani, compressori.
**Come funziona:** tre avvolgimenti diventano calamite a turno: una calamita che gira trascina il rotore; la corrente di una fase torna
dalle altre due, per questo il neutro non serve.
**Fili rossi:** giro della corrente, ogni protezione protegge qualcosa, si lavora senza tensione.
**Parole nuove spiegate:** avvolgimento, rotore, campo magnetico rotante, carcassa, polo, a monte e a valle, ronzare. «Sezionamento a monte»
nel riquadro sostituito con «salvamotore aperto».

| Passo | Perché | Se lo sbagli | Dove (dopo) |
|---|---|---|---|
| 1 Fasi a 1, 3, 5 | La rete entra nel salvamotore: aprendolo, a valle è tutto spento | - | Perché ogni filo |
| 2 Da 2, 4, 6 a U, V, W in ordine | Senso in avanti | Due fasi scambiate: all'indietro (sfida) | Il senso di rotazione, Perché ogni filo |
| 3 PE | La corrente di guasto va a terra, non nella persona | Scossa dalla carcassa | Il motore, Perché ogni filo |
| 4 Chiudere | Si prova solo alla fine | Fili collegati in tensione | Il salvamotore e il lavoro senza tensione |

**Cambi:** prima slide «Il motore delle macchine» (non ripete c21); salvamotore con poli, monte e valle, confronto con il magnetotermico;
riquadro «che cosa posso toccare a salvamotore aperto» (risponde alla prima domanda dell'allievo); sintesi con l'esempio del metodo
(«stacca tutte e tre le fasi insieme, perché con due sole il motore ronza e si scalda»).

## c22 - Il teleruttore

**Verdetto:** ritocco + slide «Perché ogni filo».
**Idea chiave:** un pulsante piccolo comanda la corrente grande del motore attraverso una bobina.
**Problema vero:** il pulsante non regge la corrente del motore, l'operatore non deve avere i 400 V sotto le dita, il quadro è lontano.
**Fili rossi:** comando e potenza (nasce in c18: «è un relè grande»), giro della corrente (A2 al neutro).

| Passo | Perché | Se lo sbagli | Dove (dopo) |
|---|---|---|---|
| 1 Fasi al salvamotore aperto | Si cabla senza tensione | Stella di sicurezza in meno | Si lavora senza tensione |
| 2 Al KM 1, 3, 5 | La potenza passa prima dalla protezione, poi dai contatti | - | Perché ogni filo |
| 3 A U, V, W | Senso in avanti | Al contrario | Perché ogni filo |
| 4 PE | Carcassa a terra | Scossa | Perché ogni filo |
| 5 Fase a valle (morsetto 2) al pulsante 3 | Aprendo il salvamotore si spegne anche il comando; il comando sta sulla fase | - | Perché ogni filo (prima MANCA) |
| 6 Pulsante 4 ad A1 | 3-4 è NA: chiude finché premi | - | Perché ogni filo (prima MANCA) |
| 7 A2 al neutro | La bobina è un carico | Su una fase: 400 V, si brucia (sfida) | La bobina e i contatti, Perché ogni filo |

**Cambi:** prima slide con il problema vero e «teleruttore o contattore, due nomi»; la bobina da 230 V nel gioco e il comando spesso a 24 V
con trasformatore nelle macchine vere (da far controllare); sintesi senza la parola «autoritenuta» prima del tempo.

## c13 - Marcia e arresto

**Verdetto:** ritocco + slide «Perché ogni filo del comando».
**Idea chiave:** un colpo su Marcia avvia, il contattore si tiene da solo, un colpo su Arresto ferma; un filo staccato ferma.
**Problema vero:** una macchina non si comanda tenendo premuto; deve fermarsi con un colpo e non ripartire da sola dopo un black-out.
**Fili rossi:** qualcosa deve ricordare (c08), stato a riposo e guasto sicuro (frase fissa), comando e potenza.
**Parole nuove spiegate:** «normalmente» (a riposo), diseccitare, numeri dei contatti (1-2 NC, 3-4 NA).

| Passo | Perché | Se lo sbagli | Dove (dopo) |
|---|---|---|---|
| 1-5 Potenza | Come c22 | Come c22 | Due circuiti |
| 6 Salvamotore 2 all'arresto 1 | Fase a valle; l'arresto è il primo e interrompe tutto | - | Perché ogni filo del comando |
| 7 Arresto 2 alla marcia 3 | La fase arriva alla marcia solo se l'arresto è chiuso | - | idem |
| 8-9 Marcia 4 ad A1, A2 al neutro | La bobina si eccita; è un carico | - | idem |
| 10 Autoritenuta | Tiene la bobina quando rilasci; presa prima dell'arresto lo scavalca | Senza: si ferma al rilascio (sfida) | L'autoritenuta, tabella |
| 11 Spia | Accanto alla bobina: accesa quando il motore è in marcia | - | tabella (prima MANCA) |

**Cambi:** prima slide con il problema (dal teleruttore alla macchina vera); arresto NC con la conseguenza dell'arresto NA; autoritenuta
con «a ricordare è il contattore» e la ripartenza dopo il black-out; tabella; sintesi.

## c14 - Il relè termico

**Verdetto:** ritocco (con tabella nella slide «Come ferma il motore»).
**Idea chiave:** il termico sente la corrente del motore e, se è troppa per troppo tempo, ferma il motore attraverso il comando.
**Problema vero:** pacco incastrato, cuscinetto duro: il motore si scalda, l'isolante si rovina, il motore si brucia.
**Fili rossi:** ogni protezione protegge qualcosa (come la parte termica del magnetotermico di c19), stato a riposo, contatti in serie fuori
dal parallelo.

| Passo | Perché | Se lo sbagli | Dove (dopo) |
|---|---|---|---|
| 2 Poli in serie al motore | Deve sentire tutta la corrente del motore | - | Il relè termico, tabella |
| 3 Salvamotore 2 al 95 | Il termico è il primo contatto del comando | - | tabella |
| 4 96 all'arresto | Prima del parallelo: interrompe anche l'autoritenuta | Fuori dal comando: scatta ma il motore gira (sfida) | Come ferma il motore |

**Cambi:** perché salvamotore e termico (dichiarato: «esistono salvamotori che fanno anche da termico: qui i due compiti sono divisi»);
perché è lento (lo spunto all'avvio); scatta anche con una fase mancante (lo fa il motore del gioco); perché non si riarma da solo e che
cosa si controlla prima del Reset; previsione con il perché nell'opzione sbagliata.

## c15 - Inversione di marcia

**Verdetto:** ritocco + slide «Perché ogni filo» (il banco dà solo l'obiettivo e i fili sono 29).
**Idea chiave:** due contattori, uno scambia due fasi; l'interblocco impedisce che si chiudano insieme.
**Problema vero:** nastro che torna indietro, cancello, carroponte.
**Fili rossi:** stato a riposo (21-22 NC), contatti in serie.
**Parole nuove spiegate:** KM, interblocco («blocco reciproco»), 21-22.

| Gruppo di fili | Perché | Se lo sbagli | Dove (dopo) |
|---|---|---|---|
| KM2 con due fasi scambiate | Il senso Indietro; due fasi qualunque | Senza scambio: stesso senso | Due contattori, tabella |
| 21-22 nel comando dell'altro | Chi è chiuso blocca l'altro | Le due marce insieme: cortocircuito tra due fasi (sfida) | L'interblocco, tabella |
| Arresto per primo | Ferma tutti e due i sensi | - | tabella |

**Cambi:** perché l'interblocco se il salvamotore scatterebbe comunque (corrente enorme per un attimo: scintille, contatti bruciati o
incollati); perché si preme prima Arresto, nella spiegazione della previsione per non svelarla; sintesi.

## c16 - Il nastro trasportatore

**Verdetto:** ritocco + slide «Perché ogni contatto sta lì».
**Idea chiave:** tutti i contatti che fermano la macchina sono NC in serie; la macchina non riparte da sola.
**Problema vero:** il nastro del magazzino deve fermarsi da solo a fine corsa, e chiunque deve poterlo fermare per un pericolo.
**Parole nuove spiegate:** fungo (rosso su fondo giallo, si preme con il palmo), finecorsa («il pacco lo schiaccia»).

| Passo | Perché | Se lo sbagli | Dove (dopo) |
|---|---|---|---|
| 2 Fungo dopo il termico | Le protezioni per prime; ferma un pericolo e resta bloccato | - | Emergenza e finecorsa, tabella |
| 3 Finecorsa NC davanti alla bobina | Interrompe marcia e autoritenuta; il pacco lo apre | Sul NA il nastro non parte (sfida) | tabella, Attenzione |

**Cambi:** problema vero all'inizio; fungo contro arresto («l'arresto ferma il lavoro, il fungo ferma un pericolo»); come si riparte dopo
il finecorsa; il fungo toglie la potenza attraverso il contattore (il Modulo 6 lo rende più sicuro con due canali); sintesi.

## c52 - Lavori in sicurezza

**Verdetto:** ritocco. Il livello è già scritto con i criteri del 16 ottobre (passi con «Perché:», allievo finto 9 su 9).
**Cambi:** le due tabelle a due colonne (prima la colonna «Perché» e i valori attesi non si vedevano); «bassa tensione» spiegata (fino a
1000 V; i 12 V del campanello sono bassissima tensione, come in c10); un lucchetto per persona; semplificazione dichiarata (nel lavoro vero
si misura anche tra le fasi e verso terra); perché il fungo va per primo.

## c24 - L'officina (prova)

**Verdetto:** ritocco. Mancava il metodo del collaudo, che la sfida chiede.
**Cambi:** slide «Una funzione alla volta» (ordine delle prove, che cosa deve succedere a ognuna, il ragionamento sul contatto che non è
in serie, correzione a salvamotore aperto); sintesi con il perché del collaudo.

---

## Da far controllare al collega di laboratorio

- c22: «nelle macchine vere il comando è spesso a 24 V, preso da un trasformatore» (CEI EN 60204-1): va bene detto così?
- c14: «esistono salvamotori che fanno anche da termico: qui i due compiti sono divisi, come in molti quadri» (si lega alla domanda già
  aperta in `docs/DOMANDE-PER-GIANLUCA.md`, Moduli 2 e 3).
- c14: il termico «scatta anche se manca una fase, perché il motore assorbe di più dalle altre due».
- c15: «invertire un motore lanciato vuol dire frenarlo di colpo, con una corrente fortissima e uno strappo sulla macchina».
- c21: l'esempio di 10 kW (circa 14 A per fase in trifase a 400 V, 43 A in monofase a 230 V; motore a fattore di potenza 1, semplificato).
- c52: il neutro non passa dal salvamotore tripolare; l'allievo finto chiede se toccando le parti collegate al neutro si rischia. Come lo
  spiegate in laboratorio? E la verifica solo tra fase e neutro (dichiarata come semplificazione) basta?
