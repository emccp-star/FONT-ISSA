# FONT ISSA — Inking Script Serif Alphabet

[![License: ISSA Proprietary](https://img.shields.io/badge/License-ISSA%20Proprietary-d4af37)](https://github.com/emccp-star/FONT-ISSA/blob/main/LICENSE.txt)

**FONT ISSA** (version `1.0.1`, grille métrique `1000 UPM`) est une police calligraphique à l'encre avec empattements (*Serif*) distribuée en `ISSA-Regular.otf` (`72,9 Ko`) et `ISSA-Regular.woff2` (`48,3 Ko`), incluant des symboles encodés dans la Zone à Usage Privé Unicode (`U+E003` à `U+E013`).

- **Auteur & entité :** Jean-Patrick Larbuisson (`BCE BE 1038.032.137`) — [Amenæl / EMC_CP](https://www.amenael.online) (Seraing Numérique)
- **Article & distribution :** [Fiche FONT ISSA sur amenael.online](https://www.amenael.online/post/font-issa-police-calligraphique-serif-encre-otf-woff2)
- **Contact :** `emc_cp@amenael.online`
- **Licence :** Propriétaire ISSA (`ISSA-Regular`), prévalant de plein droit sur `SIL OFL 1.1` (Sabam OnlineDepot `202611-1ce3c8d82ae9`, valide jusqu'au `16-11-2031`)
- **Ressources GitHub :** [Release v1.0.1](https://github.com/emccp-star/FONT-ISSA/releases/tag/v1.0.1) · [Archive ZIP](https://github.com/emccp-star/FONT-ISSA/releases/download/v1.0.1/FONT-ISSA-v1.0.1.zip) · [Mentions & SHA-256](https://github.com/emccp-star/FONT-ISSA/blob/main/NOTICE.md)

---

## Conditions d'utilisation et déclaration préalable

> Le téléchargement, l'installation ou l'utilisation de **FONT ISSA (`v1.0.1`)** vaut acceptation pleine et entière de la [Licence Propriétaire ISSA](https://github.com/emccp-star/FONT-ISSA/blob/main/LICENSE.txt), qui **prévaut expressément sur toute référence ou structure SIL OFL 1.1**.
> * **Usage personnel, étudiant ou associatif :** Gratuit, dans le respect de la déontologie.
> * **Usage professionnel ou commercial :** Soumis à une **autorisation écrite préalable** (`emc_cp@amenael.online`).
> * **Sceau de Licence ISSA (`U+E013` · `.issa-seal` · `ISSA_Seal`) :** Atteste du cadre officiel ISSA ; ne confère pas d'autorisation commerciale automatique et ne permet pas d'invoquer une diffusion libre sous SIL OFL.
> * **Clause déontologique :** Tout usage illicite, dégradant, obscène, haineux ou discriminatoire entraîne la révocation immédiate des droits et des poursuites judiciaires.

### Circuit de déclaration et token de validation

Le téléchargement via l'article `amenael.online` passe par un contrôle préalable en deux étapes :

1. **Déclaration dans Google Forms :** Remplissez le [Formulaire officiel de déclaration d'usage FONT ISSA](https://docs.google.com/forms/d/1A8NlAHfzzNUuxDWIZJcUygZ5CVR2bIAQ43u0eOrexoo/) en précisant votre cadre d'utilisation et en validant l'acceptation de la Licence Propriétaire ISSA ainsi que le traitement **RGPD**.
2. **Enregistrement, empreinte SHA-256 et token (`ISSA-...`) :** Chaque soumission est horodatée dans le registre d'usage (`Declarations_ISSA_v1_0_1`), associée à une empreinte `SHA-256` et à un token de validation (`ISSA-` suivi d'au moins 6 caractères hexadécimaux) transmis par accusé de réception afin de débloquer le téléchargement sur l'article.

---

## Métadonnées de référence : [`issa-font-issa-v1.0.1.json`](https://github.com/emccp-star/FONT-ISSA/blob/main/issa-font-issa-v1.0.1.json)

Fichier de référence (à ne pas confondre avec le manifeste Google Apps Script `appsscript.json`) regroupant :

- Les caractéristiques typographiques de **FONT ISSA (v1.0.1)** (`ISSA-Regular.otf`, `ISSA-Regular.woff2`, `1000 UPM`, glyphes `U+E003`–`U+E013`).
- L'identité de l'auteur et de l'entité (**Jean-Patrick Larbuisson**, **Amenæl – EMC_CP**, `BCE BE 1038.032.137`, **Seraing Numérique**, `emc_cp@amenael.online`).
- Les règles de la **Licence Propriétaire ISSA**, l'enregistrement **Sabam OnlineDepot** (`202611-1ce3c8d82ae9`, valide jusqu'au `16-11-2031`) et le périmètre **RGPD** de la déclaration d'usage.
- Les URLs officielles de release, d'archive `FONT-ISSA-v1.0.1.zip` et de CDN `WOFF2`.

---

## Intégration et ajout des symboles inclus

Déclarez la police via `@font-face` (`ISSA-Regular.woff2` via jsDelivr), associez une classe par symbole ou plage de glyphes, puis insérez les caractères Unicode correspondants dans votre HTML.

```css
@font-face {
  font-family: "FONT ISSA";
  src: url("https://cdn.jsdelivr.net/gh/emccp-star/FONT-ISSA@main/fonts/web/ISSA-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.issa-glyph {
  font-family: "FONT ISSA", serif;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
}

.issa-ornament,
.issa-faith,
.issa-scales,
.issa-peace,
.issa-chrisme,
.issa-seal {
  font-family: "FONT ISSA", serif;
}
```

### Correspondance des symboles (`U+E003` à `U+E013`)

* `U+E003` à `U+E006` (`.issa-ornament`) : Ornements calligraphiques et séparateurs
* `U+E009` (`.issa-faith`) : Croix victorieuse (*faith_ISSA*)
* `U+E010` (`.issa-scales`) : La Balance Parfaite (*TheScalesofEternity_ISSA*)
* `U+E011` (`.issa-peace`) : Paix du Christ (*PeaceBeUponSignofchrist_ISSA*)
* `U+E012` (`.issa-chrisme`) : Chrisme Unifié (*XP_Chrisme_ISSA*)
* `U+E013` (`.issa-seal`) : Sceau de Licence ISSA (*ISSA_Seal*)

### Exemple HTML d'insertion des symboles

```html
<p>
  <span class="issa-glyph issa-ornament" aria-hidden="true">&#xE003;</span>
  <span class="issa-glyph issa-faith" aria-label="Croix victorieuse">&#xE009;</span>
  <span class="issa-glyph issa-scales" aria-label="La Balance Parfaite">&#xE010;</span>
  <span class="issa-glyph issa-peace" aria-label="Paix du Christ">&#xE011;</span>
  <span class="issa-glyph issa-chrisme" aria-label="Chrisme Unifié">&#xE012;</span>
  <span class="issa-glyph issa-seal" aria-label="Sceau de Licence ISSA">&#xE013;</span>
</p>
```
