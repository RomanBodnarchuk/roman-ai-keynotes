# Roman Bodnarchuk Brand Kit

Portable design system for Roman's sister projects (WisdomClone.ai, N5R.ai, 10X AI News, Strategic AI Coach).
Drop this folder into `src/brand-kit/` of any Vite + React + Tailwind project and follow `docs/INSTALL.md`.

## Contents

```
brand-kit/
├── tokens/
│   ├── index.css          # CSS variables (colors, fonts, gradients, shadows)
│   └── tailwind.tokens.ts # Tailwind extend{} block (colors, fonts, keyframes)
├── components/
│   ├── Navigation.tsx     # Fixed top nav with mobile drawer
│   ├── Footer.tsx         # Brand footer with sister-site links
│   ├── PageLayout.tsx     # Nav + main + footer shell
│   ├── LeadMagnetLayout.tsx
│   ├── SectionHeading.tsx
│   └── NavLink.tsx
├── docs/
│   ├── INSTALL.md         # 5-minute setup per project
│   └── USAGE.md           # Token reference + component examples
└── package.json           # Optional: publish as private npm package
```

## Core rules (must follow in every sister project)

- Fonts: **Bebas Neue** (headings), **DM Sans** (body), **DM Serif Display** (accent). No substitutes.
- Primary red: `hsl(352 85% 43%)` (#c8102e). Gold accent: `hsl(42 55% 54%)`.
- Background: near-black `hsl(0 0% 4%)`. Cards: `hsl(0 0% 10%)`.
- **Zero border-radius everywhere.** Sharp, masculine edges.
- Buttons: uppercase, `tracking-[2px]`, no radius.
- Layouts: full-bleed, 2px gaps between cards.
- No em dashes in copy. All billing in USD.

See `docs/USAGE.md` for the full token reference.
