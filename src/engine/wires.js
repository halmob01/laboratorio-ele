// Regole sui fili: identificativi dei colori e quali sono ammessi per ogni ruolo.
// I valori esadecimali e i nomi in italiano non stanno qui: sono compito della vista e dei contenuti.

export const WIRE_COLORS = ['marrone', 'nero', 'grigio', 'blu', 'gv'];

// Colori ammessi per un filo di fase (nel trifase si useranno tutti e tre).
export const PHASE_COLORS = ['marrone', 'nero', 'grigio'];

// ruolo: 'fase' | 'neutro' | 'terra'
export function allowedColors(role) {
  if (role === 'neutro') return ['blu'];
  if (role === 'terra') return ['gv'];
  return PHASE_COLORS;
}
