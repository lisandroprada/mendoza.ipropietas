# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (user's choice). Greenfield. Domain: `mendoza.ipropietas.com.ar`, a subdomain of the agency's site `https://www.ipropietas.com.ar`.

## Users

Prospective buyers of one specific property, reading in Spanish, most likely in the Rawson / Playa Unión / Trelew / Puerto Madryn area of Chubut, where the agency operates. They arrive from a WhatsApp message or a link the agency shares. Their device split is unknown; assume mostly phones.

## Product Purpose

A single-property brochure microsite for a house the agency has listed for sale. It lets a buyer see the property properly and start a WhatsApp conversation with the agent. Success is a qualified enquiry on WhatsApp.

## Positioning

The site is presented by Propietas Inmobiliaria, a family-run local agency with 20+ years in the Rawson market (est. 1995) and a named, licensed agent, so the listing comes with a professional's backing. The property is the subject; the agency supplies the trust.

## Operating Context

Real estate sales in Chubut. The agent works from a WhatsApp-first flow: direct answers, qualifying questions only when they add something, and protection of the seller's conditions. Copy on the site must keep documented facts separate from claims and from items still to be verified.

## Capabilities and Constraints

- Language: Spanish (Argentina).
- Primary contact: WhatsApp **2804503151** (Argentine mobile, Chubut area code 280).
- No accounts, search or backend. Static, content-first.
- **The seller's name must never appear on the site or in the repo.** It is the owner's name, not publishable. Check file names, alt text, metadata and page titles for it.
- Property facts come from the agency's own listing (see Evidence on Hand). Do not invent anything beyond it. Title status and exact lot/covered split are not documented.
- "Mendoza" is the street name. The listing publishes the address, so the location may be shown.
- Typeface: the agency has no confirmed Gotham web license, so use a close substitute (a geometric sans with a heavy weight for the wordmark-like headings, e.g. Montserrat or similar) rather than Gotham itself.

## Brand Commitments

Brand manual: `~/Downloads/Documentos/manual.pdf` ("Manual de Identidad Corporativa", Propietas Inmobiliaria, 13 pages; to be copied into the project if it should live alongside the code). It is binding.

- Values the brand must express: **Solidez, Proximidad, Trayectoria, Innovación**. Tone is close, human and concrete.
- Logo: wordmark PROPIETAS (heavy, simple geometric letters) over a spaced-out INMOBILIARIA tagline, always with the roof-line symbol. The symbol alone may be used only decoratively. A web variant of the logo adds "i" and ".com.ar" for the URL. A "Desde 1995" founding mark exists.
- Files: `logo/propietas-logo.svg` and `logo/propietas-isotipo.svg`.
- Colors: primary blue `#2e3192` (Pantone 2746 C) and secondary sky blue `#29aae2` (Pantone 298 C). The logo SVGs use `#2e3092` and `#27aae1`, close but not identical; the manual values are the reference.
- Typeface: **Gotham** (Black, Medium, Light, Light Italic). Gotham is commercial. Whether the agency holds a web license is unconfirmed; if not, a close substitute is needed.
- Logo rules: 10:4 proportion, protection area equal to the module `x`, minimum width 3 cm in print, no distortion, no inversion of elements, no color changes. Approved variants: full color, black and white, one-ink, on dark, on photos, gradient.
- Name used by the user for the page's author: Propietas Inmobiliaria, operated by NETRA SRL.

## Evidence on Hand

Real photography lives in a local originals folder (not versioned; its name contains the seller's name):
- Originals are interiors and exteriors of a rustic brick-and-wood house; web copies with neutral names are in `src/assets/fotos/`.
- `Gemini_Generated_Image_gvihw4gvihw4gvih` (PNG and "Large" JPEG): exterior with a fenced pool, wooden deck and brick portico. **The user confirms it is real and may be used.** Despite the filename it is not an invention.

Agent: Lisandro Emanuel Prada Toledo, Matrícula N° 117 (COCICH), NETRA SRL / Propietas Inmobiliaria. The license number is published on the page (user-confirmed).

Listing: https://www.ipropietas.com.ar/listing_details_05/84b72665-b467-490d-8904-9528f58005d6 (fetched 2026-10-22). It states:
- **Mendoza 1042**, barrio Rawson, Rawson, Chubut. Casa, **en venta, USD 250.000**.
- Dwelling use, north-facing in the description (the feature list shows orientation as "-"), 40 years old, "estado general muy bueno".
- 2 dormitorios, 1 baño, semi-covered garage for 1 vehicle, left of the house, parrilla, piscina.
- Agency address: Gregorio Mayo 106, Rawson, Chubut; info@ipropietas.com.ar.
- Cover and gallery photos are hosted at `api.rentia.com.ar/uploads/PROPERTY/84b72665-…/images/slider/` (7+ images); the local photos may be the same set or a different one.

**The listing contradicted itself; both points resolved by the user:**
- Rooms: **confirmed by the user: 5 ambientes** (the listing's feature list says 4; the description is right).
- Surface: the listing's labels are swapped. **Confirmed by the user:** lot (terreno) 3058.71 m², built/covered 151.94 m².

Not available: floor plan, title documentation, the seller's conditions.

## Product Principles

1. Truthful over impressive: only documented facts about the property; unverified items are labeled or left out.
2. The agency's brand governs identity: manual colors, Gotham, the logo rules.
3. Real photography of the house carries the case; the page frames it.
4. Spanish-first, direct, close and concrete; no filler.
5. WhatsApp is one tap away from every section.
6. The seller's name never appears.

## Accessibility & Inclusion

No product-specific requirement established. Default to WCAG AA contrast, readable type on phones, and alt text written in Spanish that does not name the seller.
