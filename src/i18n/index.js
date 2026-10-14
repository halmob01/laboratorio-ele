// Lingue. Il gioco e' scritto in italiano: in un'altra lingua ogni testo viene tradotto al momento di mostrarlo.
// Per ogni lingua: un dizionario esatto (frase italiana -> frase tradotta) e uno schema di espressioni
// regolari per le frasi con numeri o nomi. Lo schema e' quello di sito-feudo.

export const LANGS = { it: { name: 'Italiano', dir: 'ltr' }, ar: { name: 'العربية', dir: 'rtl' }, en: { name: 'English', dir: 'ltr' } };
export const FALLBACK = 'it';
const STORE = 'fase-e-neutro-lingua';
const ATTRS = ['aria-label', 'title', 'placeholder', 'alt'];

const REG = {};          // lingua -> { dict, pat }
let LANG = 'it';
const MISS = new Set();  // frasi senza traduzione incontrate (per i test e per la segnalazione)
const listeners = new Set();

export const registerLang = (lang, dict, pat = []) => {
  const r = REG[lang] || (REG[lang] = { dict: {}, pat: [] });
  Object.assign(r.dict, dict);
  r.pat.push(...pat);
};
export const hasLang = l => l === 'it' || !!REG[l];
export const getLang = () => LANG;
export const getMiss = () => [...MISS];
export const clearMiss = () => MISS.clear();
export const dirOf = l => (LANGS[l] || LANGS.it).dir;

// Isola un numero o una sigla latina dentro un testo da destra a sinistra.
export const iso = s => '⁦' + s + '⁩';

const needsTr = s => /[A-Za-zÀ-ÿ]{3}/.test(s);

export function tr(s, lang = LANG) {
  if (lang === 'it' || !s || typeof s !== 'string') return s;
  const r = REG[lang];
  if (!r) return s;
  if (Object.hasOwn(r.dict, s)) return r.dict[s];
  for (const [re, fn] of r.pat) { const m = s.match(re); if (m) return fn(m, x => tr(x, lang)); }
  if (s.includes(' · ')) return s.split(' · ').map(x => tr(x, lang)).join(' · ');
  if (needsTr(s)) MISS.add(s);
  return s;
}

/* ---------- DOM ---------- */
// Il testo italiano originale resta memorizzato sul nodo (__it): cambiando lingua si ritraduce da li'.
// Se l'applicazione riscrive il nodo (valore diverso da quello che avevamo messo) vale il nuovo testo.
function doText(n) {
  if (n.parentNode && n.parentNode.closest && n.parentNode.closest('[data-notr]')) return;
  if (n.__tr === undefined || n.nodeValue !== n.__tr) n.__it = n.nodeValue;
  const m = n.__it.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!m[2]) { n.__tr = n.nodeValue; return; }
  const out = LANG === 'it' ? n.__it : m[1] + tr(m[2]) + m[3];
  if (n.nodeValue !== out) n.nodeValue = out;
  n.__tr = out;
}
function doAttrs(e) {
  if (!e.hasAttribute || e.closest('[data-notr]')) return;
  e.__ia = e.__ia || {}; e.__ta = e.__ta || {};
  for (const a of ATTRS) {
    if (!e.hasAttribute(a)) continue;
    const v = e.getAttribute(a);
    if (e.__ta[a] === undefined || v !== e.__ta[a]) e.__ia[a] = v;
    const out = LANG === 'it' ? e.__ia[a] : tr(e.__ia[a]);
    if (v !== out) e.setAttribute(a, out);
    e.__ta[a] = out;
  }
}
export function translateDOM(root) {
  if (!root || typeof document === 'undefined' || !document) return;
  if (root.nodeType === 3) { doText(root); return; }
  if (root.nodeType !== 1) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
    acceptNode: n => (n.nodeType === 1 && /^(SCRIPT|STYLE|TEXTAREA)$/.test(n.tagName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  doAttrs(root);
  while (w.nextNode()) { const n = w.currentNode; if (n.nodeType === 3) doText(n); else doAttrs(n); }
}

let obs = null, busy = false, host = null;
function startObserver(root) {
  if (typeof MutationObserver === 'undefined') return;
  host = root;
  if (obs) obs.disconnect();
  obs = new MutationObserver(recs => {
    if (busy) return;
    busy = true;
    try {
      for (const r of recs) {
        if (r.type === 'childList') r.addedNodes.forEach(translateDOM);
        else if (r.type === 'characterData') doText(r.target);
        else if (r.type === 'attributes') doAttrs(r.target);
      }
    } finally { busy = false; }
    // le scritture fatte qui dentro rigenerano record: si scartano
    obs.takeRecords();
  });
  obs.observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
}

/* ---------- lingua corrente ---------- */
export function detect() {
  let saved = null;
  try { saved = localStorage.getItem(STORE); } catch (e) { /* senza memoria */ }
  if (saved && hasLang(saved)) return saved;
  const nav = ((typeof navigator !== 'undefined' && navigator.language) || 'it').slice(0, 2).toLowerCase();
  return hasLang(nav) ? nav : FALLBACK;
}
export function onLang(fn) { listeners.add(fn); return () => listeners.delete(fn); }

// Cambia lingua e riapplica a tutta la pagina. `root` e' il contenitore da tradurre (di norma document.body).
export function setLang(lang, root = host || (typeof document !== 'undefined' ? document.body : null), save = true) {
  if (!hasLang(lang)) lang = FALLBACK;
  LANG = lang;
  if (save) { try { localStorage.setItem(STORE, lang); } catch (e) { /* si continua */ } }
  if (typeof document !== 'undefined') {
    const el = document.documentElement;
    el.lang = lang; el.dir = dirOf(lang);
    el.dataset.lang = lang;
    const d = document.querySelector('meta[name="description"]');
    if (d) { if (d.__it === undefined) d.__it = d.getAttribute('content'); d.setAttribute('content', tr(d.__it)); }
    if (document.__titleIt === undefined) document.__titleIt = document.title;
    document.title = tr(document.__titleIt);
  }
  if (root) {
    if (!obs || host !== root) startObserver(root);
    busy = true;
    try { translateDOM(root); } finally { busy = false; }
    obs && obs.takeRecords();
  }
  listeners.forEach(fn => fn(lang));
}
