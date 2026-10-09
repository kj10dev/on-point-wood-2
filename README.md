# On-Point Wood — Holy Firewood Co.

**Editorial-style** single-page site for On-Point Wood (same family brand as On-Point Church).
**React + Vite + Tailwind CSS.**

## Design language
A magazine/editorial aesthetic on the On-Point brand palette:
- Paper `#faf6f0` background, ink `#1c1917` typography, restrained brand-orange accents
- Playfair Display serif display type + Inter labels (Source Serif body)
- Masthead with volume/issue line, drop-cap front-page column, "In this issue" index with dotted leaders
- Numbered catalogue rows with hairline rules, pull quote, inverted figures band, colophon footer

## Features
- Holy-fire firewood logo (cross of burning logs + halo) — `src/Logo.jsx` as inline SVG
- 4 thorn-wood products with per-unit pricing + WhatsApp deep links
- **Minimum order: 10 units** enforced in the order form (with inline notice)
- **All submissions go to WhatsApp** — the order form builds a pre-filled `wa.me` message
- FAQ accordion, editorial figures strip, fully responsive (mobile-first)

## Run
```bash
npm install
npm run dev   # http://localhost:5173
```

## Configure
- WhatsApp number: edit `WHATSAPP` in `src/App.jsx` (currently `27725672466`)
- Products & prices: `WOODS` array in `src/App.jsx`
- `public/preview.html` is a zero-build static twin of the page for quick viewing
