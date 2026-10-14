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

const ROLE = { 'del neutro': 'المحايد', 'di terra': 'الأرضي', 'di fase': 'الطور', 'a bassa tensione': 'الجهد المنخفض', 'di comando': 'التحكم' };
const COLORI = { 'blu': 'أزرق', 'giallo-verde': 'أصفر-أخضر', 'marrone, nero o grigio': 'بنيًّا أو أسود أو رماديًّا', 'rosso, marrone, nero o grigio': 'أحمر أو بنيًّا أو أسود أو رماديًّا', 'di un colore diverso da blu e giallo-verde': 'بلون مختلف عن الأزرق والأصفر-الأخضر' };
const cap = s => s[0].toUpperCase() + s.slice(1);

const PAT = [
  [/^Casa vista dall’alto\. Stanze con la luce accesa: (.+)$/, (m, t) => `منزل من الأعلى. الغرف المضاءة: ${m[1].split(', ').map(x => t(x)).join('، ')}`],
  [/^[\d,.]+ kWh$/, m => iso(m[0])],
  [/^(\d+) di (\d+) completati$/, m => `اكتمل ${iso(m[1])} من ${iso(m[2])}`],
  [/^(\d+) di (\d+)$/, m => `${iso(m[1])} من ${iso(m[2])}`],
  [/^(\d+) \/ (\d+)$/, m => `${iso(m[1])} / ${iso(m[2])}`],
  [/^(\d+) stelle su (\d+)$/, m => `${m[1] === '1' ? 'نجمة واحدة' : m[1] === '2' ? 'نجمتان' : iso(m[1]) + ' نجوم'} من ${iso(m[2])}`],
  [/^(\d+) circuiti$/, m => `${iso(m[1])} دوائر`],
  [/^Anteprima · (\d+) di (\d+) circuiti$/, m => `معاينة · ${iso(m[1])} من ${iso(m[2])} دوائر`],
  [/^Suggerimento (\d+) di (\d+)$/, m => `تلميح ${iso(m[1])} من ${iso(m[2])}`],
  [/^Lezione · (\d+) di (\d+) · (.+)$/, (m, t) => `درس · ${iso(m[1])} من ${iso(m[2])} · ${t(m[3])}`],
  [/^Lampade accese: (\d+) di (\d+)$/, m => `مصابيح مضاءة: ${iso(m[1])} من ${iso(m[2])}`],
  [/^Le lampade non si accend(?:e|ono) mai\.$/, () => 'المصباحان لا يضيئان أبدًا.'],
  [/^La lampada (\d+) non si accende mai\.$/, m => `المصباح ${iso(m[1])} لا يضيء أبدًا.`],
  [/^(.+) non si accende mai\.$/, (m, t) => `${t(m[1])} لا يضيء أبدًا.`],
  [/^Giocatore (.+), grado (.+), (\d+) XP\. Cambia nome$/, (m, t) => `اللاعب ${m[1] === 'Giocatore' ? 'لاعب' : m[1]}، الرتبة ${t(m[2])}، ${iso(m[3])} نقطة خبرة. غيّر الاسم`],
  [/^(\d+) XP$/, m => `${iso(m[1])} نقطة خبرة`],
  [/^Morsetto (.+) (FASE|NEUTRO|TERRA|[A-Z]\d?|[A-Z]{1,2}|\d{1,2})$/, (m, t) => `مربط ${t(m[1])} ${/^(FASE|NEUTRO|TERRA)$/.test(m[2]) ? t(m[2]) : iso(m[2])}`],
  [/^Che cos’è: (.+)$/, (m, t) => `ما هو: ${t(m[1])}`],
  [/^Già lo so: prova di salto per (.+)$/, (m, t) => `أعرف هذا: اختبار تخطٍّ لـ ${t(m[1])}`],
  [/^(.+), premi per cambiare$/, (m, t) => `${t(m[1])}، اضغط للتغيير`],
  [/^(.+) · dal contatore$/, (m, t) => `${t(m[1])} · من العداد`],
  [/^(.+) · prova di salto$/, (m, t) => `${t(m[1])} · اختبار تخطٍّ`],
  [/^Il filo (.+) → (.+) è un filo (del neutro|di terra|di fase|a bassa tensione|di comando): deve essere (.+)\.$/,
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
  [/^Prova non superata: (.+?)\. (.+)$/, (m, t) => `اختبار لم يُجتز: ${t(m[1])}. ${t(m[2])}`],
  [/^(.+): (.+); atteso: (.+)\.$/, (m, t) => `${t(m[1])}: ${t(m[2])}؛ المتوقع: ${t(m[3])}.`],
  [/^Tutti i traguardi della prova sono raggiunti \((\d+)\)\.$/, m => `تحققت كل أهداف الاختبار (${iso(m[1])}).`],
  [/^Manca ancora: (.+?)(?: \(restano (\d+) traguardi\))?\.$/, (m, t) => `ما زال ينقص: ${t(m[1])}${m[2] ? ` (تبقّى ${iso(m[2])} أهداف)` : ''}.`],
  [/^Hai staccato una spina \((.+)\) con la linea in tensione\. Prima si apre il magnetotermico\. Premi Ricomincia per riprovare\.$/, (m, t) => `نزعتَ قابسًا (${t(m[1])}) والخط تحت الجهد. أولًا يُفتح القاطع المغناطيسي الحراري. اضغط ابدأ من جديد لتعيد المحاولة.`],
  [/^Prima di verificare serve ancora una misura con il multimetro: (.+)\.$/, (m, t) => `قبل التحقق ما زال مطلوبًا قياس بجهاز القياس المتعدد: ${t(m[1])}.`],
  [/^Puntale rosso su (.+)\. Tocca il secondo morsetto per il puntale nero\.$/, (m, t) => `المجس الأحمر على ${t(m[1])}. المس المربط الثاني للمجس الأسود.`],
  [/^Rosso su (.+), nero su (.+)\.(?: (.+))?$/, (m, t) => `الأحمر على ${t(m[1])}، والأسود على ${t(m[2])}.${m[3] ? ' ' + t(m[3]) : ''}`],
  [/^Cavo ([\d,.]+) mm²$/, m => `كابل ${m[1]} مم²`],
  [/^portata ([\d,.]+) A$/, m => `السعة ${m[1]} أمبير`],
  [/^Corrente dispersa: (\d+) milliampere\. Tocca per cambiarla$/, m => `التيار المتسرّب: ${m[1]} مللي أمبير. المس لتغييره`],
  [/^Portata (.+): (\d+) ampere\. Tocca per cambiarla$/, (m, t) => `السعة ${t(m[1])}: ${m[2]} أمبير. المس لتغييرها`],
  [/^Protezioni scattate: (.+)\.$/, (m, t) => `حمايات فصلت: ${t(m[1])}.`],
];

registerLang('ar', { ...p1, ...p2, ...p3, ...p4, ...p5, ...p6, ...p7, ...p8, ...p9, ...p10, ...p11, ...p12, ...p13, ...p14, ...p15, ...p16 }, PAT);
