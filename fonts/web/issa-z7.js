/**
 * FONT ISSA — Module d'intégration HTML5 / JS-Z7 + CSS3
 * Copyright (c) 2026, Jean-Patrick Larbuisson (RFN: "ISSA" - SIL OFL 1.1)
 * Ref: W3C/RDP Seraing Numérique 9F27JJR7+-G3Z7+-WAVscript.exty
 */
export const ISSA_SYMBOLS = {
  ORNAMENT_E003: '\uE003',
  ORNAMENT_E004: '\uE004',
  ORNAMENT_E005: '\uE005',
  ORNAMENT_E006: '\uE006',
  FAITH:         '\uE009', // faith_ISSA
  SCALES:        '\uE010', // TheScalesofEternity_ISSA
  PEACE:         '\uE011', // PeaceBeUponSignofchrist_ISSA
  CHRISME:       '\uE012', // XP_Chrisme_ISSA
  SIL_OFL:       '\uE013'  // SIL_OFL_ISSA
};

export function initFontISSA(selector = '[data-issa]') {
  document.querySelectorAll(selector).forEach((el) => {
    el.style.fontFamily = "'ISSA', serif";
    const symbolKey = el.getAttribute('data-issa-symbol');
    if (symbolKey && ISSA_SYMBOLS[symbolKey]) {
      el.textContent = ISSA_SYMBOLS[symbolKey];
    }
  });
}

// Auto-initialisation au chargement du DOM HTML5
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => initFontISSA());
}
