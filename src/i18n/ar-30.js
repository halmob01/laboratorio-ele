// Dizionario arabo, parte 30: spiegazioni dei componenti di P6 (galleggiante, trasmettitore, pannello, batteria, lampada in continua, LED).
export default {
"Il galleggiante": "العوّامة",
"È un sensore di livello: un contatto che cambia quando il liquido arriva alla sua altezza. A riposo è chiuso 1-2; quando il livello lo raggiunge si apre 1-2 e si chiude 3-4. Si collega a un ingresso del PLC come un pulsante.": "هي حسّاس مستوى: تلامس يتغيّر عندما يصل السائل إلى ارتفاعه. في الراحة يكون 1-2 مغلقًا؛ وعندما يبلغه المستوى ينفتح 1-2 وينغلق 3-4. تُوصل بمدخل في الـPLC مثل زر.",
"Il trasmettitore 4-20 mA": "المُرسِل 4-20 mA",
"Misura una grandezza (livello, temperatura) e la manda al PLC come corrente: 4 mA è il fondo scala basso, 20 mA quello alto. Si collega con + e - all’ingresso analogico del PLC. Se il filo si interrompe la corrente va a 0 mA: sotto i 4 mA il PLC capisce che c’è un guasto.": "يقيس كمية (المستوى، الحرارة) ويرسلها إلى الـPLC على شكل تيار: 4 mA هي أدنى المقياس و20 mA أعلاه. يُوصل بـ+ و- إلى المدخل التماثلي في الـPLC. إذا انقطع السلك ينزل التيار إلى 0 mA: تحت 4 mA يفهم الـPLC أن هناك عطلًا.",
"È lo schermo con cui l’operatore guarda la macchina e le dà ordini. È collegato al PLC con un cavo di rete: mostra i valori, gli allarmi (dal più grave) e i pulsanti del processo. Un allarme resta finché non lo riconosci.": "هي الشاشة التي يراقب بها المشغّل الآلة ويعطيها الأوامر. تتصل بالـPLC بكابل شبكة: تعرض القيم والإنذارات (من الأخطر) وأزرار العملية. يبقى الإنذار حتى تؤكّده.",
"La batteria": "البطارية",
"È un generatore in corrente continua: ha un polo positivo (+) e uno negativo (-), e la corrente esce dal + e rientra dal -. Due batterie in serie (il + dell’una al - dell’altra) sommano le tensioni: 6 V più 6 V fanno 12 V.": "هي مولّد تيار مستمر: لها قطب موجب (+) وقطب سالب (-)، ويخرج التيار من + ويعود إلى -. بطاريتان على التوالي (+ الأولى بـ- الثانية) تجمعان الجهدين: 6 V زائد 6 V تساوي 12 V.",
"La lampada in continua": "مصباح التيار المستمر",
"È una lampada a incandescenza da 12 V: si accende piena solo con la tensione di targa. Non ha un verso: i morsetti A e B si possono scambiare.": "هو مصباح متوهّج بجهد 12 V: لا يضيء كاملًا إلا بجهده الاسمي. ليس له اتجاه: يمكن تبديل المربطين A وB.",
"Il LED": "الـLED",
"È una spia che conduce in un verso solo: dall’anodo A al catodo K. Collegato al contrario resta spento. Ha già la sua resistenza, che limita la corrente.": "هو مصباح دليلي يمرّر التيار في اتجاه واحد فقط: من المصعد A إلى المهبط K. إذا وُصل بالعكس يبقى مطفأ. فيه مقاومته التي تحدّ من التيار.",
};
