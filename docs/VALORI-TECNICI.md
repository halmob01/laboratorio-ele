# Valori tecnici del gioco: ricerca e scelte

Data: 14 ottobre 2026. Per ogni valore: che cosa dice la fonte consultata, che cosa usa il gioco, stato. "Verificato" = letto in una fonte web; "Da riconfermare" = noto dalla letteratura tecnica ma non ritrovato nelle pagine consultate. Prima della pubblicazione di ogni fase i valori passano dal collega di laboratorio, che ha la norma in mano.

## Interruttori magnetotermici (CEI EN 60898-1)

| Valore | Fonte | Gioco | Stato |
|---|---|---|---|
| Corrente convenzionale di non intervento 1,13 In in 1 h | [Schneider Electric, FAQ](https://www.se.com/be/fr/faqs/FA369327) (IEC 60898-1) | sotto 1,13 In non scatta | Verificato |
| Corrente convenzionale di intervento 1,45 In in 1 h | stessa fonte | sopra 1,45 In scatta, in pochi secondi invece di un'ora (dichiarato nella lezione) | Verificato |
| Sganciatore magnetico: curva B 3-5 In, C 5-10 In, D 10-20 In | schede dei costruttori (non ritrovato nelle pagine lette) | corto istantaneo; curva C per tutti | Da riconfermare |
| Temperatura di riferimento 30 °C | Schneider Electric | non simulata | Verificato |

Tra 1,13 e 1,45 In la norma non impone né lo scatto né il non scatto: il gioco non fa scattare e lo dice.

## Portate dei cavi (coordinamento Ib <= In <= Iz)

La portata Iz dipende da isolante, posa, temperatura e raggruppamento (CEI-UNEL 35024/1, CEI 64-8 art. 523).
- Fonte consultata: [Nunzio Grieco, tabella portate](https://www.nunziogrieco.it/prontuario/elettrotecnica/tabella-portata-cavi-elettrici/) (norma datata UNEL 35011-72): rame PVC, unipolari in tubo, 2 conduttori caricati: 1,5 mm² 19,5 A; 2,5 mm² 24 A; 4 mm² 32 A; 6 mm² 41 A. Con il coefficiente 0,8 per la posa incassata: 15,6 A e 19,2 A (calcolo dalla regola della pagina, non valori in tabella).
- Il gioco usa due valori prudenti e vicini a questi: **1,5 mm² = 15,5 A, 2,5 mm² = 21 A**, per una sola posa (cavi in tubo incassato) senza raggruppamento. Servono solo a far fallire 16 A su 1,5 mm² e a far passare 10 A su 1,5 e 16 A su 2,5.
- Stato: **da riconfermare** con la tabella aggiornata CEI-UNEL 35024/1 (la fonte letta è una norma più vecchia).

## Interruttori differenziali (CEI EN 61008-1, 61009-1)

| Valore | Fonte | Gioco | Stato |
|---|---|---|---|
| 30 mA per la protezione addizionale (prese, bagno, ambienti ordinari); 300 mA per rischio incendio o monte selettivo | [Viox, sensibilità RCCB](https://viox.com/it/how-to-choose-the-right-rccb-sensitivity/); [Elettricomagazine](https://elettricomagazine.it/normative-impianti/esperto-impianti-a-livelli-rcd/) | 30 mA in tutti i livelli di casa | Verificato |
| Tempo massimo di interruzione, tipo generale: 300 ms (a IΔn); tipo S: 500 ms | [NT24](https://nt24.it/2022/07/il-tempo-di-intervento-degli-interruttori-differenziali/) | il differenziale scatta subito (istantaneo) | Verificato |
| Non intervento sotto 0,5 IΔn (15 mA per un 30 mA); intervento entro 0,15 s a 2 IΔn e 0,04 s a 5 IΔn | norme di prodotto, non ritrovato nelle pagine lette | sotto 15 mA nessuno scatto; da 30 mA in su scatto; tra 15 e 30 mA nessuno scatto (la norma ammette entrambi) | Da riconfermare |
| Prova di funzionamento TT: esito positivo entro 400 ms (guida CEI 64-14 V1); ritardo 0,06 s sui circuiti terminali | NT24, Elettricomagazine | non simulati | Verificato |
| Corrente di contatto tipica nelle prove: 100-200 mA | scelta didattica, da condividere con il collega | `touch` = 150 mA | Scelta del gioco |

## Dotazioni della casa (CEI 64-8, livelli 1, 2, 3)

- [Elettro Liguria, CEI 64-8:2024](https://elettroliguria.it/news-norme-leggi-impianti-elettrici/impianti-elettrici-genova-liguria/dotazioni-minime-impiantistiche-norma-cei-64-82024/): livello 1 almeno due circuiti (prese e luci); livello 2 circuiti separati per cucina e climatizzazione; livello 3 domotica. Il numero di prese per stanza dipende dalla superficie e non è riportato nella pagina.
- Sezioni e protezioni (1,5 mm² con 10 A per la luce; 2,5 mm² con 16 A per le prese): convenzione diffusa, **da riconfermare** sulla norma (non ritrovata nelle pagine lette).

## Relè termico e salvamotore (IEC 60947-4-1)

| Valore | Fonte | Gioco | Stato |
|---|---|---|---|
| Classe 10A: scatto entro 10 s a 7,2 Ir; entro 2 min a 1,5 Ir | [Viox, classi di scatto](https://viox.com/it/what-is-trip-class-motor-protection-guide/) | scatto dopo 3 s con fase mancante o sovraccarico (accorciato) | Verificato; il tempo del gioco è una scelta |
| Non intervento a 1,25 Ir entro 2 h (avviamento a freddo) | stessa fonte | non simulato | Verificato |

## Stella-triangolo

[Viox, avviatori stella-triangolo](https://viox.com/it/star-delta-starter-wiring-diagram-sizing-selection-guide/): corrente di spunto e coppia pari a un terzo del diretto; commutazione tipica 5-15 s (leggeri 5-8 s, medi 8-12 s, pesanti 12-15 s), da regolare quando il motore ha raggiunto l'85-90% della velocità. Gioco: commutazione a **6 s** (accorciata). Il tempo morto tra apertura della stella e chiusura del triangolo non è nella fonte: da chiedere al collega. Stato: verificato, tempi del gioco scelti.

## Temporizzatore delle scale

Le schede dei temporizzatori per scale (Finder, BTicino, Lovato) coprono campi da pochi secondi a diversi minuti, regolabili. Il gioco usa 20 s per vedere il ritardo in classe; nella lezione si dice che negli edifici reali si regola tra 30 s e qualche minuto. Stato: valore didattico.

## Anello 4-20 mA

[Fonte](https://dev.to/mariusgjerd/what-4-20ma-actually-means-and-why-your-zero-is-at-4-7fh), NAMUR NE43: campo di misura 3,8-20,5 mA; sotto 3,6 mA guasto (filo interrotto o trasmettitore spento); sopra 21 mA guasto verso l'alto. Percentuale = (I - 4) / 16 x 100. Lo zero a 4 mA serve a distinguere un segnale 0 % da un anello interrotto (0 mA). Gioco: 4 mA = 0 %, 20 mA = 100 %, anello aperto 0 mA, allarme sotto 3,6 mA. Stato: verificato.

## Da chiedere al collega

1. Curve B/C/D: confermare 3-5 e 5-10 In e usare la curva C in tutti i livelli.
2. Tabella delle portate aggiornata per la posa in tubo incassato (1,5 e 2,5 mm²).
3. Tempi del differenziale a 2 IΔn e 5 IΔn e soglia di non intervento 0,5 IΔn.
4. Sezioni e protezioni per luce e prese secondo la prassi del laboratorio.
5. Tempo morto stella-triangolo e tempi di commutazione usati in aula.
6. Valori dei temporizzatori scale nelle scale del territorio.
