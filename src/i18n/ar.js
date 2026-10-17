// Arabo: dizionario esatto + schemi per le frasi con numeri e nomi (vedi index.js).
// Le sigle dei componenti (L, N, PE, A1, 13...) e le cifre restano latine; i numeri si isolano con iso().
import { registerLang, iso } from './index.js';
import p1 from './ar-1.js';
import p2 from './ar-2.js';
import p3 from './ar-3.js';
import p4 from './ar-4.js';
import p5 from './ar-5.js';
import p6 from './ar-6.js';
import p7 from './ar-7.js';
import p8 from './ar-8.js';
import p9 from './ar-9.js';
import p10 from './ar-10.js';
import p11 from './ar-11.js';
import p12 from './ar-12.js';
import p13 from './ar-13.js';
import p14 from './ar-14.js';
import p15 from './ar-15.js';
import p16 from './ar-16.js';
import p17 from './ar-17.js';
import p18 from './ar-18.js';
import p19 from './ar-19.js';
import p20 from './ar-20.js';
import p21 from './ar-21.js';
import p22 from './ar-22.js';
import p23 from './ar-23.js';
import p24 from './ar-24.js';
import p25 from './ar-25.js';
import p26 from './ar-26.js';
import p27 from './ar-27.js';
import p28 from './ar-28.js';
import p29 from './ar-29.js';
import p30 from './ar-30.js';
import p31 from './ar-31.js';
import p32 from './ar-32.js';
import p33 from './ar-33.js';
import p34 from './ar-34.js';
import p35 from './ar-35.js';
import p36 from './ar-36.js';
import p37 from './ar-37.js';
import p38 from './ar-38.js';
import p39 from './ar-39.js';
import p40 from './ar-40.js';
import p41 from './ar-41.js';
import p42 from './ar-42.js';
import p45 from './ar-45.js';
import p46 from './ar-46.js';
import p47 from './ar-47.js';
import p48 from './ar-48.js';
import p49 from './ar-49.js';
import p50 from './ar-50.js';
import p51 from './ar-51.js';
import p52 from './ar-52.js';
import p53 from './ar-53.js';
import p55 from './ar-55.js';
import p54 from './ar-54.js';

const ROLE = { 'del neutro': 'المحايد', 'di terra': 'الأرضي', 'di fase': 'الطور', 'a bassa tensione': 'الجهد المنخفض', 'di comando': 'التحكم', 'del positivo': 'الموجب', 'del negativo': 'السالب', 'in continua': 'التيار المستمر' };
const COLORI = { 'blu': 'أزرق', 'giallo-verde': 'أصفر-أخضر', 'marrone, nero o grigio': 'بنيًّا أو أسود أو رماديًّا', 'rosso, marrone, nero o grigio': 'أحمر أو بنيًّا أو أسود أو رماديًّا', 'di un colore diverso da blu e giallo-verde': 'بلون مختلف عن الأزرق والأصفر-الأخضر', 'rosso': 'أحمر', 'nero': 'أسود', 'rosso o nero': 'أحمر أو أسود' };
const cap = s => s[0].toUpperCase() + s.slice(1);

// descrizioni delle scene 3D delle prove: frasi brevi una dopo l'altra, tradotte una per una (dizionario in ar-36.js)
const SCENE_LABEL = /^(Appartamento di notte|Officina con il nastro trasportatore|Linea di confezionamento|Casa intelligente, di sera)\. /;

const PAT = [
  [SCENE_LABEL, (m, t) => m.input.split(/(?<=\.) /).map(x => t(x)).join(' ')],
  // pannello del processo del nastro a lotti (modello `pacchi`)
  [/^pacchi contati dalla fotocellula: (\d+)$/, m => `طرود عدّتها الخلية الضوئية: ${iso(m[1])}`],
  [/^sul bancale: (\d+)$/, m => `على منصة التحميل: ${iso(m[1])}`],
  [/^Casa vista dall’alto\. Stanze con la luce accesa: (.+)$/, (m, t) => `منزل من الأعلى. الغرف المضاءة: ${m[1].split(', ').map(x => t(x)).join('، ')}`],
  [/^[\d,.]+ kWh$/, m => iso(m[0])],
  // motivi di una prova sul tracciato (processText in it.js): il nome della grandezza si traduce a parte
  [/^(.+) vale ([\d,.-]+) \(a ([\d,.]+) s\): deve restare tra ([\d,.-]+) e ([\d,.-]+)\.$/, (m, t) => `${t(m[1])} قيمتها ${iso(m[2])} (عند ${iso(m[3])} ث): يجب أن تبقى بين ${iso(m[4])} و${iso(m[5])}.`],
  [/^(.+) scende a ([\d,.-]+) \(a ([\d,.]+) s\): non deve andare sotto ([\d,.-]+)\.$/, (m, t) => `${t(m[1])} تنخفض إلى ${iso(m[2])} (عند ${iso(m[3])} ث): يجب ألا تنزل عن ${iso(m[4])}.`],
  [/^(.+) arriva a ([\d,.-]+) \(a ([\d,.]+) s\): non deve superare ([\d,.-]+)\.$/, (m, t) => `${t(m[1])} تبلغ ${iso(m[2])} (عند ${iso(m[3])} ث): يجب ألا تتجاوز ${iso(m[4])}.`],
  [/^(.+) cambia stato (\d+) volte: al massimo (\d+)\.$/, (m, t) => `${t(m[1])} تغيّر حالتها ${iso(m[2])} مرة: الحد الأقصى ${iso(m[3])}.`],
  [/^(.+) arriva al massimo a ([\d,.-]+)(?: entro ([\d,.]+) s)?: doveva raggiungere ([\d,.-]+)\.$/, (m, t) => `${t(m[1])} تبلغ كحد أقصى ${iso(m[2])}${m[3] ? ' خلال ' + iso(m[3]) + ' ث' : ''}: كان يجب أن تبلغ ${iso(m[4])}.`],
  [/^(.+) scende al minimo a ([\d,.-]+)(?: entro ([\d,.]+) s)?: doveva arrivare a ([\d,.-]+)\.$/, (m, t) => `${t(m[1])} تنخفض كحد أدنى إلى ${iso(m[2])}${m[3] ? ' خلال ' + iso(m[3]) + ' ث' : ''}: كان يجب أن تصل إلى ${iso(m[4])}.`],
  [/^(.+): nessun valore registrato\.$/, (m, t) => `${t(m[1])}: لا توجد قيمة مسجّلة.`],
  // turno a guasti (c44)
  [/^tempo rimasto (\d\d):(\d\d)$/, m => `الوقت المتبقي ${iso(m[1])}:${iso(m[2])}`],
  [/^guasti riparati (\d+) di (\d+)$/, m => `أعطال أُصلحت ${iso(m[1])} من ${iso(m[2])}`],
  [/^in ritardo: (\d+)$/, m => `متأخر: ${iso(m[1])}`],
  [/^Il turno non è finito: mancano (\d+) secondi\. Continua a gestire gli allarmi, poi premi Verifica\.$/, m => `لم تنتهِ المناوبة بعد: تبقّت ${iso(m[1])} ثانية. واصل التعامل مع الإنذارات ثم اضغط «تحقق».`],
  [/^Un guasto è ancora aperto: (.+)\. Trovalo e riparalo prima di consegnare il turno\.$/, (m, t) => `ما زال عطل مفتوحًا: ${t(m[1])}. اعثر عليه وأصلحه قبل تسليم المناوبة.`],
  [/^Riparazione arrivata tardi: (.+)\. Il guasto è durato (\d+) secondi, il massimo era (\d+)\.$/, (m, t) => `جاء الإصلاح متأخرًا: ${t(m[1])}. استمر العطل ${iso(m[2])} ثانية والحد الأقصى كان ${iso(m[3])}.`],
  [/^Turno consegnato: tutti i (\d+) guasti riparati in tempo\.$/, m => `سُلّمت المناوبة: أُصلحت الأعطال الـ${iso(m[1])} كلها في الوقت.`],
  // pannello operatore: stato degli allarmi con l'ora, eta' dei dati vecchi, motivi delle prove
  [/^(da riconoscere|riconosciuto|rientrato, da riconoscere) · a (\d+) s$/, (m, t) => `${t(m[1])} · عند ${iso(m[2])} ث`],
  [/^dato vecchio · (\d+) s$/, m => `بيان قديم · ${iso(m[1])} ث`],
  [/^Allarme “(.+)”: (.+); atteso: (.+)\.$/, (m, t) => `الإنذار «${t(m[1])}»: ${t(m[2])}؛ المتوقع: ${t(m[3])}.`],
  [/^Allarme “(.+)”$/, (m, t) => `الإنذار «${t(m[1])}»`],
  [/^(.+): il pannello lo mostra come (dato vecchio|dato aggiornato); atteso: (dato vecchio|dato aggiornato)\.$/, (m, t) => `${t(m[1])}: تعرضه اللوحة ${m[2] === 'dato vecchio' ? 'كبيان قديم' : 'كبيان محدَّث'}؛ المتوقع: ${m[3] === 'dato vecchio' ? 'بيان قديم' : 'بيان محدَّث'}.`],
  // scena della casa con il fotovoltaico (modello energia)
  [/^ore (\d\d):(\d\d)$/, m => `الساعة ${iso(m[1])}:${iso(m[2])}`],
  [/^casa ([\d,.]+) kW$/, m => `البيت ${iso(m[1])} كيلوواط`],
  [/^pannelli ([\d,.]+) kW$/, m => `الألواح ${iso(m[1])} كيلوواط`],
  [/^immette ([\d,.]+) kW$/, m => `يضخ ${iso(m[1])} كيلوواط`],
  [/^preleva ([\d,.]+) kW$/, m => `يسحب ${iso(m[1])} كيلوواط`],
  [/^([\d,.]+) kW$/, m => `${iso(m[1])} كيلوواط`],
  [/^(.+) vale ([\d,.-]+); atteso: tra ([\d,.-]+) e ([\d,.-]+)\.$/, (m, t) => `${t(m[1])} قيمتها ${iso(m[2])}؛ المتوقع: بين ${iso(m[3])} و${iso(m[4])}.`],
  // pannello del processo (serbatoio, forno, nastro): valori che cambiano a ogni istante
  [/^livello ([\d,.]+) %$/, m => `المستوى ${iso(m[1])}٪`],
  [/^([\d,.]+) %$/, m => `${iso(m[1])}٪`],
  [/^trasmette ([\d,.]+) mA$/, m => `يرسل ${iso(m[1])} ميلي أمبير`],
  [/^([\d,.]+) mA$/, m => `${iso(m[1])} ميلي أمبير`],
  [/^tempo × (\d+)$/, m => `الزمن × ${iso(m[1])}`],
  [/^([\d,.-]+) °C$/, m => `${iso(m[1])} °م`],
  [/^([\d,.]+) Hz$/, m => `${iso(m[1])} هرتز`],
  [/^velocità ([\d,.]+) % della nominale$/, m => `السرعة ${iso(m[1])}٪ من الاسمية`],
  [/^resistenza ([\d,.]+) %$/, m => `المقاومة ${iso(m[1])}٪`],
  [/^resistenza (accesa|spenta)$/, m => (m[1] === 'accesa' ? 'المقاومة تعمل' : 'المقاومة متوقفة')],
  [/^(\d+) di (\d+) completati$/, m => `اكتمل ${iso(m[1])} من ${iso(m[2])}`],
  [/^(\d+) di (\d+)$/, m => `${iso(m[1])} من ${iso(m[2])}`],
  [/^(\d+) \/ (\d+)$/, m => `${iso(m[1])} / ${iso(m[2])}`],
  [/^(\d+) stelle su (\d+)$/, m => `${m[1] === '1' ? 'نجمة واحدة' : m[1] === '2' ? 'نجمتان' : iso(m[1]) + ' نجوم'} من ${iso(m[2])}`],
  [/^Livelli del modulo: (\d+) di (\d+)$/, m => `مستويات الوحدة: ${iso(m[1])} من ${iso(m[2])}`],
  [/^Circuiti: (\d+) di (\d+)$/, m => `الدوائر: ${iso(m[1])} من ${iso(m[2])}`],
  [/^(\d+) circuiti$/, m => `${iso(m[1])} دوائر`],
  [/^Anteprima · (\d+) di (\d+) circuiti$/, m => `معاينة · ${iso(m[1])} من ${iso(m[2])} دوائر`],
  [/^Suggerimento (\d+) di (\d+)$/, m => `تلميح ${iso(m[1])} من ${iso(m[2])}`],
  [/^Lezione · (\d+) di (\d+) · (.+)$/, (m, t) => `درس · ${iso(m[1])} من ${iso(m[2])} · ${t(m[3])}`],
  [/^Lampade accese: (\d+) di (\d+)$/, m => `مصابيح مضاءة: ${iso(m[1])} من ${iso(m[2])}`],
  [/^Le lampade non si accend(?:e|ono) mai\.$/, () => 'المصباحان لا يضيئان أبدًا.'],
  [/^La lampada (\d+) non si accende mai\.$/, m => `المصباح ${iso(m[1])} لا يضيء أبدًا.`],
  [/^Se (.+) resta incollato la macchina non si ferma: ciascun dispositivo deve poterla fermare da solo\.$/, (m, t) => `إذا بقي ${t(m[1])} ملتصقًا فلن تتوقف الآلة: يجب أن يستطيع كل جهاز إيقافها بمفرده.`],
  [/^Il dispositivo (.+) ha un contatto non collegato: un dispositivo a due canali deve usarli tutti e due\.$/, (m, t) => `في الجهاز «${t(m[1])}» تلامس غير موصول: الجهاز ذو القناتين يجب أن يستخدمهما معًا.`],
  [/^(.+) non si accende mai\.$/, (m, t) => `${t(m[1])} لا يضيء أبدًا.`],
  [/^Giocatore (.+), grado (.+), (\d+) XP\. Cambia nome$/, (m, t) => `اللاعب ${m[1] === 'Giocatore' ? 'لاعب' : m[1]}، الرتبة ${t(m[2])}، ${iso(m[3])} نقطة خبرة. غيّر الاسم`],
  [/^(\d+) XP$/, m => `${iso(m[1])} نقطة خبرة`],
  [/^Morsetto (.+) (FASE|NEUTRO|TERRA|[A-Z]\d?|[A-Z]{1,2}|\d{1,2})$/, (m, t) => `مربط ${t(m[1])} ${/^(FASE|NEUTRO|TERRA)$/.test(m[2]) ? t(m[2]) : iso(m[2])}`],
  [/^Che cos’è: (.+)$/, (m, t) => `ما هو: ${t(m[1])}`],
  [/^Già lo so: prova di salto per (.+)$/, (m, t) => `أعرف هذا: اختبار تخطٍّ لـ ${t(m[1])}`],
  [/^(.+), premi per cambiare$/, (m, t) => `${t(m[1])}، اضغط للتغيير`],
  [/^(.+) · dal contatore$/, (m, t) => `${t(m[1])} · من العداد`],
  [/^(.+) · prova di salto$/, (m, t) => `${t(m[1])} · اختبار تخطٍّ`],
  [/^Il filo (.+) → (.+) è un filo (del neutro|di terra|di fase|a bassa tensione|di comando|del positivo|del negativo|in continua): deve essere (.+)\.$/,
    (m, t) => `السلك ${t(m[1])} ← ${t(m[2])} هو سلك ${ROLE[m[3]]}: يجب أن يكون ${COLORI[m[4]] || t(m[4])}.`],
  [/^E altri (\d+) fili con il colore sbagliato\.$/, m => m[1] === '2' ? 'وسلكان آخران بلون خاطئ.' : `و${iso(m[1])} أسلاك أخرى بلون خاطئ.`],
  [/^E altre (\d+) prove non superate\.$/, m => m[1] === '2' ? 'واختباران آخران لم يُجتازا.' : `و${iso(m[1])} اختبارات أخرى لم تُجتز.`],
  [/^Tutte le prove di funzionamento sono superate \((\d+)\)\.$/, m => `اجتيزت كل اختبارات التشغيل (${iso(m[1])}).`],
  [/^(?:Il |L’)(.+) non comanda la lampada: cambiarlo non cambia niente\.$/, (m, t) => `${t(cap(m[1]))} لا يتحكم في المصباح: تغييره لا يغيّر شيئًا.`],
  [/^(?:Il |L’)(.+) comanda la lampada solo con alcune posizioni degli altri comandi\.$/, (m, t) => `${t(cap(m[1]))} يتحكم في المصباح فقط مع بعض أوضاع نقاط التحكم الأخرى.`],
  [/^La tensione arriva fino a (.+) e lì si ferma\.$/, (m, t) => `يصل الجهد حتى ${t(m[1])} ويتوقف هناك.`],
  [/^È scattata una protezione \((.+)\)\.$/, (m, t) => `فصلت إحدى الحمايات (${t(m[1])}).`],
  [/^Manca il collegamento a terra \((.+)\)\.$/, (m, t) => `ينقص التوصيل بالأرضي (${t(m[1])}).`],
  [/^Componente bruciato \((.+)\): ha ricevuto una tensione più alta di quella per cui è fatto\.$/, (m, t) => `مكوّن محترق (${t(m[1])}): استقبل جهدًا أعلى من الجهد المصمَّم له.`],
  [/^Un carico \((.+)\) è collegato tra la fase e la terra: la corrente torna dal filo di protezione\. Il ritorno va sul neutro\.$/, (m, t) => `حمل (${t(m[1])}) موصول بين الطور والأرضي: يعود التيار عبر سلك الحماية. العودة يجب أن تكون على المحايد.`],
  [/^Un carico \((.+)\) non è protetto dal differenziale\.$/, (m, t) => `حمل (${t(m[1])}) غير محمي بالقاطع التفاضلي.`],
  [/^Il comando è sul lato del neutro: la bobina \((.+)\) ha il capo A2 che non va direttamente al neutro\. I comandi stanno sul lato della fase\.$/, (m, t) => `التحكم على جانب المحايد: الطرف A2 في الملف (${t(m[1])}) لا يذهب مباشرة إلى المحايد. أجهزة التحكم تكون على جانب الطور.`],
  [/^A comandi rilasciati il motore \((.+)\) ha una fase sui suoi morsetti: una fase salta il contattore o la protezione\.$/, (m, t) => `والأزرار محرَّرة يوجد طور على مرابط المحرك (${t(m[1])}): طور يتجاوز الكونتاكتور أو الحماية.`],
  [/^Un componente \((.+)\) non è a valle della protezione \((.+)\): in caso di guasto nessuno lo stacca\.$/, (m, t) => `مكوّن (${t(m[1])}) ليس بعد الحماية (${t(m[2])}): في حال العطل لا يفصله أحد.`],
  [/^Il gradino (\d+) non ha ancora una bobina: aggiungine una\.$/, m => `الدرجة ${iso(m[1])} ليس لها ملف بعد: أضف واحدًا.`],
  [/^Il gradino (\d+) non ha contatti: la bobina non si accenderà mai\.$/, m => `الدرجة ${iso(m[1])} بلا ملامسات: فلن يعمل ملفها أبدًا.`],
  [/^Il gradino (\d+) usa un indirizzo non valido \((.+)\)\.$/, m => `الدرجة ${iso(m[1])} تستخدم عنوانًا غير صالح (${m[2]}).`],
  [/^Il gradino (\d+) usa (.+), che questo PLC non ha\.$/, m => `الدرجة ${iso(m[1])} تستخدم ${m[2]} وهذا الـPLC لا يملكه.`],
  [/^Il gradino (\d+) prova a scrivere su (.+): gli ingressi si possono solo leggere\.$/, m => `الدرجة ${iso(m[1])} تحاول الكتابة على ${m[2]}: المداخل تُقرأ فقط.`],
  [/^La bobina (.+) è usata in due gradini: l’ultima vince e il primo non serve\. Una bobina per uscita\.$/, m => `الملف ${m[1]} مستخدم في درجتين: الأخيرة هي التي تغلب والأولى بلا فائدة. ملف واحد لكل مخرج.`],
  [/^Il gradino (\d+) ha un tempo o un conteggio non valido\.$/, m => `الدرجة ${iso(m[1])} فيها زمن أو عدّ غير صالح.`],
  [/^Il programma è troppo lungo: (\d+) gradini\.$/, m => `البرنامج طويل جدًا: ${iso(m[1])} درجة.`],
  [/^Il programma ha un errore nel gradino (.+)\.$/, m => `في البرنامج خطأ في الدرجة ${m[1]}.`],
  [/^Gradino (\d+)$/, m => `الدرجة ${iso(m[1])}`],
  [/^Programma del PLC, (\d+) gradini$/, m => `برنامج الـPLC، ${iso(m[1])} درجات`],
  [/^Prova non superata: (.+?)\. (.+)$/, (m, t) => `اختبار لم يُجتز: ${t(m[1])}. ${t(m[2])}`],
  [/^(.+): (.+); atteso: (.+)\.$/, (m, t) => `${t(m[1])}: ${t(m[2])}؛ المتوقع: ${t(m[3])}.`],
  [/^Prima di verificare serve ancora una misura con il multimetro: (.+)\.$/, (m, t) => `قبل التحقق ما زال مطلوبًا قياس بجهاز القياس المتعدد: ${t(m[1])}.`],
  [/^Puntale rosso su (.+)\. Tocca il secondo morsetto per il puntale nero\.$/, (m, t) => `المجس الأحمر على ${t(m[1])}. المس المربط الثاني للمجس الأسود.`],
  [/^Rosso su (.+), nero su (.+)\.(?: (.+))?$/, (m, t) => `الأحمر على ${t(m[1])}، والأسود على ${t(m[2])}.${m[3] ? ' ' + t(m[3]) : ''}`],
  [/^Cavo ([\d,.]+) mm²$/, m => `كابل ${m[1]} مم²`],
  [/^portata ([\d,.]+) A$/, m => `السعة ${m[1]} أمبير`],
  [/^Corrente dispersa: (\d+) milliampere\. Tocca per cambiarla$/, m => `التيار المتسرّب: ${m[1]} مللي أمبير. المس لتغييره`],
  [/^Portata (.+): (\d+) ampere\. Tocca per cambiarla$/, (m, t) => `السعة ${t(m[1])}: ${m[2]} أمبير. المس لتغييرها`],
  [/^Hai cambiato i fili senza finire la procedura di sicurezza su (.+): prima si apre il sezionamento, si mette il lucchetto e si verifica con il multimetro che non ci sia tensione\. Premi Annulla tutto e rifai il lavoro in quest’ordine\.$/, (m, t) => `غيّرت الأسلاك دون إنهاء إجراء السلامة على ${t(m[1])}: أولًا يُفتح عنصر الفصل، ثم يوضع القفل، ثم يُتحقَّق بجهاز القياس المتعدد من انعدام الجهد. اضغط «إلغاء الكل» وأعد العمل بهذا الترتيب.`],
  [/^Metti il lucchetto su (.+)$/, (m, t) => `ضع القفل على ${t(m[1])}`],
  [/^Togli il lucchetto da (.+)$/, (m, t) => `أزل القفل عن ${t(m[1])}`],
  [/^Protezioni scattate: (.+)\.$/, (m, t) => `حمايات فصلت: ${t(m[1])}.`],
];

registerLang('ar', { ...p1, ...p2, ...p3, ...p4, ...p5, ...p6, ...p7, ...p8, ...p9, ...p10, ...p11, ...p12, ...p13, ...p14, ...p15, ...p16, ...p17, ...p18, ...p19, ...p20, ...p21, ...p22, ...p23, ...p24, ...p25, ...p26, ...p27, ...p28, ...p29, ...p30, ...p31, ...p32, ...p33, ...p34, ...p35, ...p36, ...p37, ...p38, ...p39, ...p40, ...p41, ...p42, ...p45, ...p46, ...p47, ...p48, ...p49, ...p50, ...p51, ...p52, ...p53, ...p55, ...p54 }, PAT);
