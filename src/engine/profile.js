// Il nome del giocatore: nessun dato sensibile, solo un nome o soprannome breve.
// La moderazione (filtro delle parole da evitare, rinomina da parte del docente) arriva con la classifica.

export const NAME_MAX = 20;

// Spazi ripuliti, lunghezza limitata, nessun carattere di controllo.
export function cleanName(raw) {
  const t = String(raw == null ? '' : raw)
    .replace(/[\u0000-\u001f\u007f-\u009f<>]/g, ' ')
    .replace(/[\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufeff]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .trim();
  return Array.from(t).slice(0, NAME_MAX).join('').trim();
}
