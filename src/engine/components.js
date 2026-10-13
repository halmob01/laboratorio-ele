// Tipi di componente: cosa collegano al loro interno, in funzione dello stato.
// Nessuna geometria, nessun disegno: solo la logica elettrica.
//
// Un componente del modello ha: { id, type, short, title, terms: { <idMorsetto>: { l, n? } } }.
// Lo stato di un comando e' 0 o 1.

export const COMPONENT_TYPES = {
  // Il quadro, nella versione completa (parte dal contatore), collega ingresso e uscita.
  quadro: {
    contacts: c => (c.full ? [['Fi', 'F'], ['Ni', 'N'], ['PEi', 'PE']] : []),
  },
  cont: { contacts: () => [] },
  presa: { contacts: () => [] },
  lamp: { contacts: () => [] },
  // Interruttore: chiuso (1) collega i due morsetti.
  sw: {
    control: true,
    contacts: (c, st) => (st ? [['a', 'b']] : []),
  },
  // Deviatore: il comune C va al morsetto 1 (stato 0) oppure al 2 (stato 1).
  dev: {
    control: true,
    contacts: (c, st) => [['C', st ? '2' : '1']],
  },
  // Invertitore: in una posizione collega dritto, nell'altra incrocia.
  inv: {
    control: true,
    contacts: (c, st) => (st ? [['1', '4'], ['2', '3']] : [['1', '3'], ['2', '4']]),
  },
};

export function contactsOf(component, state) {
  const t = COMPONENT_TYPES[component.type];
  return t ? t.contacts(component, state) : [];
}

export function isControl(component) {
  const t = COMPONENT_TYPES[component.type];
  return !!(t && t.control);
}
