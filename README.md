# FONT ISSA — Inking Script Serif Alphabet

[![License: ISSA Proprietary](https://img.shields.io/badge/License-ISSA%20Proprietary-d4af37)](https://github.com/emccp-star/FONT-ISSA/blob/main/LICENSE.txt)

**FONT ISSA** (version `1.0.1`, `1000 UPM`) est une police calligraphique à l'encre avec empattements (*Serif*) distribuée en `ISSA-Regular.otf` et `ISSA-Regular.woff2`, incluant des glyphes symboliques en zone privée Unicode (`U+E003` à `U+E013`).

* **Auteur & entité :** Jean-Patrick Larbuisson (`BCE BE 1038.032.137`) — [Amenæl / EMC_CP](https://www.amenael.online) (Seraing Numérique)
* **Article & distribution :** [Fiche FONT ISSA sur amenael.online](https://www.amenael.online/post/font-issa-police-calligraphique-serif-encre-otf-woff2)
* **Contact :** `emc_cp@amenael.online`
* **Licence :** Propriétaire ISSA (prévalence sur SIL OFL 1.1 ; Sabam OnlineDepot `202611-1ce3c8d82ae9`, valide jusqu'au `16-11-2031`)
* **Ressources GitHub :** [Release v1.0.1](https://github.com/emccp-star/FONT-ISSA/releases/tag/v1.0.1) · [Archive ZIP](https://github.com/emccp-star/FONT-ISSA/releases/download/v1.0.1/FONT-ISSA-v1.0.1.zip) · [Mentions & SHA-256](https://github.com/emccp-star/FONT-ISSA/blob/main/NOTICE.md)

---

## Conditions d'utilisation

> Le téléchargement ou l'utilisation vaut acceptation de la [Licence Propriétaire ISSA](https://github.com/emccp-star/FONT-ISSA/blob/main/LICENSE.txt).
> * **Usage personnel :** Gratuit (projets privés, étudiants et associatifs).
> * **Usage professionnel / commercial :** Sur autorisation écrite préalable (`emc_cp@amenael.online`).
> * **Déontologie :** Tout usage illicite, haineux ou discriminatoire entraîne la révocation immédiate des droits.
>
>   ---

## Intégration HTML5 / CSS3

```css
@font-face {
  font-family: "FONT ISSA";
  src: url("[https://cdn.jsdelivr.net/gh/emccp-star/FONT-ISSA@main/fonts/web/ISSA-Regular.woff2](https://cdn.jsdelivr.net/gh/emccp-star/FONT-ISSA@main/fonts/web/ISSA-Regular.woff2)") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.issa-glyph {
  font-family: "FONT ISSA", serif;
}

Symboles Unicode inclus (U+E003 à U+E013)
U+E003 à U+E006 (.issa-ornament) : Ornements calligraphiques et séparateurs

U+E009 (.issa-faith) : Croix victorieuse (faith_ISSA)

U+E010 (.issa-scales) : La Balance Parfaite (TheScalesofEternity_ISSA)

U+E011 (.issa-peace) : Paix du Christ (PeaceBeUponSignofchrist_ISSA)

U+E012 (.issa-chrisme) : Chrisme Unifié (XP_Chrisme_ISSA)

U+E013 (.issa-seal) : Sceau de Licence ISSA (ISSA_Seal)

issa-font-issa-v1.0.1.json
Fichier de référence (à ne pas confondre avec le manifeste Google Apps Script appsscript.json) regroupant :

Les caractéristiques typographiques de FONT ISSA (v1.0.1) (ISSA-Regular.otf, ISSA-Regular.woff2, 1000 UPM, glyphes U+E003–U+E013).

L'identité de l'auteur et de l'entité (Jean-Patrick Larbuisson, Amenæl – EMC_CP, BCE BE 1038.032.137, Seraing Numérique, emc_cp@amenael.online).

Les règles de la Licence Propriétaire ISSA, l'enregistrement Sabam OnlineDepot (202611-1ce3c8d82ae9) et le périmètre RGPD de la déclaration d'usage.

Les URLs officielles de release, d'archive FONT-ISSA-v1.0.1.zip et de CDN WOFF2.
