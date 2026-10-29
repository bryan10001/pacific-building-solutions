# Pacific Building Solutions — v2 full visual redesign

**Status:** Local review candidate — **not pushed to GitHub**  
**Date:** Oct 28, 2026 (America/Chicago)

This folder is a **completely new visual system** (not a beige refresh of the old site). Copy stays accurate from Phase 1 (no hazmat; correct services).

## Open locally

```bash
cd /workspace/pbs-redesign/v2
python3 -m http.server 8765
```

Then open http://localhost:8765 in a browser.

Or open `index.html` directly (some browsers limit Formspree / fonts without a local server).

Copy `FINALLOGO.svg` from your current GitHub Pages repo (or live site) into this `v2/` folder next to `index.html`. The header falls back to text branding if the file is missing.

## Files

| File | Role |
|------|------|
| `index.html` | Homepage structure & accurate copy |
| `styles.css` | New GC / contractor visual system |
| `main.js` | Sticky mobile nav, smooth scroll, project gallery |
| `README.md` | This file |

## Design choices (why it looks different)

- **Black / white primary** with a restrained steel accent (`#7C9BA8`) — GC polish like Abstract / Fransen Pittman / ARCO / AP Global, not full-page warm beige
- **Sticky dark nav** with phone + Get a Quote CTA
- **Strong hero** — full-bleed photo, short GC headline, dual CTAs, meta strip
- **Coda-style brands strip** — “We service the facilities of world-class brands” with logo slots
- **4-column services grid** + process band (Rough → Puff → Final)
- **Projects grid** (Engelke / AP Global) — Paris Baguette live + placeholder cards for more jobs
- **Why PBS** pillars + stats (with slots for real numbers)
- **Split Formspree contact** — company/GC + service dropdown added
- Typography: **DM Sans** (display) + **Inter** (body) — not Playfair / Helvetica beige era

## Accurate services (unchanged intent)

Primary cards: Post-Construction, Rough, Puff (Powder Puff), Final, Windows in/out, Warehouse Machine Cleaning, VCT Strip & Wax, Hard Floor Care.  
Carpet: soft “also available” note.  
No specialized debris / hazmat offering.

## What Bryan still needs to supply

1. **Client / brand logos** (PNG/SVG, transparent) + permission — drop into the `.client-slot` boxes (HTML comments mark where)
2. **More project photos** (JPG/WebP) + names / cities / scopes for the two placeholder project cards
3. **Convert HEIC → JPG** for gallery completeness (before + after-3 slides are TODO in HTML)
4. **Publishable stats** (# projects, % repeat / GC partners) for the Why PBS tiles
5. Optional: 1–2 more testimonials with name + company/role
6. Confirm carpet “also available” line stays or goes
7. When happy: copy these files over the GitHub Pages site (or replace `index.html` + add CSS/JS) — **do not push until you say go**

## Deploy note (later)

Static HTML/CSS/JS — works on GitHub Pages as-is. Also keep `booknow.html`, `thankyou.html`, `privacy.html`, `terms.html` from the current site unless you rewrite those next.


## Client logos

Real brand marks live in `logos/` (19 JPGs). The Coda-style strip uses relative paths `logos/*.jpg` (grayscale → color on hover). Paris Baguette is a text tile until a logo file is provided. Duplicate Shipley script logo was skipped; circular badge `shipley-donuts.jpg` is used once.


## Latest feedback pass (Oct 28, 2026)

- Client strip logos enlarged (`max-height: 92px`, taller slots)
- All brand marks converted JPG → transparent PNG (white/near-white removed); HTML uses `.png`
- Header/footer use complete `FINALLOGO.svg` (wave icon + PACIFIC BUILDING SOLUTIONS lettering), ~64–72px
- How we work: Walkthrough → Proposal → Rough → Final → Puff
- Rough / Final / Puff service + FAQ blurbs match Bryan’s definitions
- Three new attached logos added as `client-extra-1/2/3` (brand names TBD — confirm with Bryan)

Review tarball: `/workspace/pbs-redesign/pbs-v2-redesign.tar.gz`
