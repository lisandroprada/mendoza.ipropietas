---
name: Mendoza 1042, Propietas Inmobiliaria
description: A cianotipo site plan of one house and its lot, indigo ground with white and sky linework, resolving into blue-tinted paper.
colors:
  indigo: "#2e3192"
  indigo-ink: "#14165c"
  sky: "#29aae2"
  sky-soft: "#bfe5f8"
  paper: "#edf2fa"
  ink: "#151743"
  ink-2: "#3d4186"
  white: "#ffffff"
  rule: "rgb(46 49 146 / 0.18)"
typography:
  display:
    fontFamily: "Montserrat Variable, Montserrat, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Montserrat Variable, Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 3.1rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Montserrat Variable, Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Montserrat Variable, Montserrat, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  label:
    fontFamily: "Montserrat Variable, Montserrat, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  sharp: "2px"
  round: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  sm: "12px"
  md: "18px"
  lg: "clamp(32px, 6vw, 96px)"
  section: "clamp(72px, 10vw, 132px)"
components:
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.indigo}"
    rounded: "{rounded.sharp}"
    padding: "16px 24px"
  button-light-hover:
    backgroundColor: "{colors.sky-soft}"
  button-ink:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "16px 24px"
  button-ink-hover:
    backgroundColor: "{colors.indigo-ink}"
  fab:
    backgroundColor: "{colors.white}"
    textColor: "{colors.indigo}"
    rounded: "{rounded.sharp}"
    padding: "14px 20px"
  facts-label:
    backgroundColor: "rgb(46 49 146 / 0.06)"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    padding: "13px 16px"
  sheet-title:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "9px 14px"
  zone-marker:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.white}"
    rounded: "{rounded.round}"
    size: "30px"
---

# Design System: Mendoza 1042, Propietas Inmobiliaria

## Overview

**Creative North Star: "The Cianotipo Site Plan"**

The page is a blueprint of one lot. Propietas indigo is the ground of the whole tour; white and sky-blue linework, hatching, a dotted route and a walking dot describe the lot, the house and the pool, while a scroll-linked camera moves from the lot to each room. Real photographs (brick, wood, terracotta) are the only warm colour and sit on the blue as outlined plates. Below the tour the ground turns to a blue-tinted paper with indigo ink, as if the sheet were turned over to its title block and notes.

Density is calm and sparse: one idea per step, generous vertical space, one action (WhatsApp) repeated. Voice is drafting-office: ruled cells, small tracked labels, numbered zones. The brand manual is binding: Pantone 2746 C (#2e3192) and 298 C (#29aae2). Montserrat Variable, self-hosted via @fontsource-variable, stands in for the brand face Gotham, which has no confirmed web license.

**Key Characteristics:**
- Indigo ground for the tour and closing band; blue-tinted paper (#edf2fa) for facts, map and agency.
- Linework in white and sky; no warm colour except photographs.
- Heavy geometric sans headings (800) over regular-weight text, tabular numerals.
- Flat, square-cornered (2px), no shadows except one on the floating action button.
- The plan SVG uses px-space labels scaled by a JS camera so type stays legible at any zoom.

## Colors

A two-hue brand palette (indigo and sky) with white linework, pushed to a paper tint for reading sections.

### Primary
- **Propietas Indigo** (#2e3192, Pantone 2746 C): tour and closing ground, primary button on paper, headings on paper, facts frame and sheet titles.
- **Propietas Sky** (#29aae2, Pantone 298 C): visited zone markers, tree dots, grid lines, pool fill, focus ring on indigo, selection.

### Secondary
- **Sky Wash** (#bfe5f8): secondary text on indigo, dashed gate/gallery/arch lines, light-button hover.

### Neutral
- **Blueprint Paper** (#edf2fa): ground for facts, map and agency sections.
- **Deep Indigo Ink** (#14165c): footer ground, dark button hover, text on sky markers.
- **Ink** (#151743): body text on paper.
- **Ink Secondary** (#3d4186): supporting text and drafting labels on paper.
- **Plan White** (#ffffff): text on indigo, lot and house outlines, light buttons.
- **Rule** (rgb(46 49 146 / 0.18)): hairlines between fact rows.

### Named Rules
**The Brand Blue Only Rule.** Hues are indigo and sky; any new tint is derived from them (opacity of white, sky-soft, rgb of indigo). Warmth comes from photographs alone.

**The Ground Switch Rule.** Indigo is the ground while the plan is being walked; paper is the ground once the visitor is reading facts. Do not mix grounds inside a section.

## Typography

**Display, Body and Label Font:** Montserrat Variable (with Montserrat, system-ui, sans-serif), a stand-in for Gotham.

**Character:** One family doing all work. Weight 800 with tight negative tracking for headings; regular 400 for text; 700 uppercase tracked for drafting labels. Tabular numerals are on for the whole page so areas and prices align.

### Hierarchy
- **Display** (800, clamp(2.6rem, 5.4vw, 5rem), 0.98, -0.03em): the h1 "Mendoza 1042" only.
- **Headline** (800, clamp(1.9rem, 3.6vw, 3.1rem), 1.05): paper section h2; closing h2 uses clamp(2.2rem, 5.4vw, 4.4rem).
- **Title** (800, clamp(1.6rem, 2.6vw, 2.2rem), 1.1): tour step h2 with a numbered ring.
- **Body** (400, 1.0625rem, 1.6): paragraphs, capped around 26 to 34ch in steps and 32 to 52ch on paper.
- **Label** (700, 0.72rem, 0.1em, uppercase): fact-row labels and map sheet title. In the SVG, zone names 800 15px and plan labels 700 12px with 0.1em tracking and an indigo halo.

### Named Rules
**The Halo Label Rule.** Text drawn on the plan carries an indigo stroke halo (paint-order stroke) so it reads over linework.

## Layout

Desktop tour: a two-column grid, 58fr sticky plan stage (100svh) and 42fr scrolling steps, each step at least 100svh and vertically centred. Paper sections use a 5fr/7fr grid with a clamp(32px, 6vw, 96px) gap inside a 1180px wrap with a clamp(20px, 5vw, 64px) gutter. Below 900px the stage becomes a sticky strip across the top 40svh (min 260px), steps flow at about 52svh and plates shrink to 27svh; paper grids collapse to one column. Section padding is clamp(72px, 10vw, 132px); consecutive paper sections drop the top padding. Plan geometry lives in a 1000 x 640 viewBox.

## Elevation & Depth

Flat. Depth comes from ground change (indigo to paper to deep indigo), 1 to 1.5px outlines, and outlined photo plates offset by 7px. The only shadow is on the floating WhatsApp button (`0 8px 22px rgb(20 22 92 / 0.32), 0 0 0 1px rgb(46 49 146 / 0.2)`), because it floats over changing grounds. On phones the sticky stage gets a 1px white hairline instead of a shadow.

### Named Rules
**The Flat Sheet Rule.** Surfaces are flat; separation is by outline, ruled line or ground change.

## Shapes

Square, drafted forms. Buttons and the FAB have a 2px radius; the facts table and map are framed by a 1.5px indigo border; photographs sit in a 1px white outline offset 7px (a plate). The only round shapes are zone markers and the numbered ring on step headings (50%), which echo plan callouts. Plan strokes use non-scaling widths: lot 2.5px, house 3px, route 2.5px, dashed gate, gallery and carport, dotted ghost route, 45-degree hatch on the house, boards on the deck.

## Components

### Buttons
- **Shape:** 2px radius, 700 1rem, 22px stroke icon, 12px gap.
- **Light (primary on indigo):** white fill, indigo text, padding 16px 24px; hover sky-soft.
- **Ink (primary on paper):** indigo fill, white text; hover deep indigo.
- **Press:** translateY(1px). Focus: 3px ring in sky on indigo, indigo on paper and footer, offset 3px.

### Floating action
White 2px-radius button, bottom-right, fixed; steps aside (fades and drops 12px) while a full-size WhatsApp button is on screen. Tighter on phones.

### Facts table (title block)
A definition list framed by 1.5px indigo; rows split into a tinted label cell (uppercase 0.72rem) and a 600-weight value; the price row is 800 indigo. Rules are 1px at 18% indigo.

### Map sheet
Indigo sheet-title bar over an iframe in a 1.5px indigo frame.

### Plan stage (signature)
Sticky SVG: grid, street, lot outline, trees, carport, house with hatch, gallery arches, deck, pool, ghost and walked route. Zone markers: indigo disc with sky ring at rest, sky when visited, white when active (name shown). Overview labels fade out after step 0. A title-block note ("Esquema ilustrativo, sin escala") sits in the stage as the disclosure that the drawing is illustrative with invented positions.

### Share diagram
Small paper-side plan showing the house as an indigo rectangle at true area share inside an outlined lot.

## Do's and Don'ts

### Do:
- **Do** use only #2e3192 and #29aae2 as hues, with white, sky-soft and deep indigo as supports.
- **Do** keep headings at weight 800 with negative tracking, body at 400, numerals tabular.
- **Do** keep the 2px corner and flat surfaces; frame with 1 to 1.5px outlines.
- **Do** keep the illustrative-drawing disclosure visible in the stage and the footer.
- **Do** label drawn text in px space with an indigo halo.
- **Do** swap the focus ring to indigo on paper and footer grounds.
- **Do** keep WhatsApp one tap away (hero, closing band, FAB).

### Don't:
- **Don't** introduce warm colour outside photographs.
- **Don't** use rounded cards, icon-card amenity grids, or a hero photo; the plan is the hero.
- **Don't** add shadows to surfaces other than the floating button.
- **Don't** present the drawing's positions or scale as measured.
- **Don't** publish the seller's name or a matrícula line without explicit user approval (the matrícula line is deliberately not shipped).
- **Don't** claim Gotham; Montserrat is a stand-in until a web license is confirmed.
