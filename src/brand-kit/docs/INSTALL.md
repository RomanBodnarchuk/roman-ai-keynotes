# Install — 5 minutes per sister project

Prereqs: Vite + React 18 + Tailwind v3 + react-router-dom + framer-motion + lucide-react.

## 1. Copy the folder

Drop the entire `brand-kit/` directory into `src/brand-kit/` of the target project.

## 2. Wire up CSS tokens

In your `src/index.css`, replace the `:root` block + `@layer base` typography + `@layer components` button utilities with:

```css
@import "./brand-kit/tokens/index.css";
```

(Or copy the contents inline if you prefer one file.)

## 3. Wire up Tailwind tokens

In `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import { brandKitTheme } from "./src/brand-kit/tokens/tailwind.tokens";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      ...brandKitTheme,
      // ...your project-specific extensions
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

## 4. Configure the shell

Create `src/components/SiteShell.tsx` in the sister project:

```tsx
import { ReactNode } from "react";
import Navigation from "@/brand-kit/components/Navigation";
import Footer from "@/brand-kit/components/Footer";
import PageLayout from "@/brand-kit/components/PageLayout";

const NAV_LINKS = [
  { label: "Product", path: "/product" },
  { label: "Pricing", path: "/pricing" },
];

const FOOTER_LINKS = [
  { label: "Roman", href: "https://romanbodnarchuk.com", external: true },
  { label: "N5R.ai", href: "https://n5r.ai", external: true },
  { label: "10X AI News", href: "https://10xainews.com", external: true },
  { label: "Contact", href: "/contact" },
];

export const SiteShell = ({ children }: { children: ReactNode }) => (
  <PageLayout
    nav={
      <Navigation
        brand="WISDOM"
        accent="CLONE.AI"
        links={NAV_LINKS}
        cta={{ label: "Get Started", path: "/signup" }}
      />
    }
    footer={
      <Footer
        brand="WISDOM"
        accent="CLONE.AI"
        links={FOOTER_LINKS}
        contact="hello@wisdomclone.ai · Toronto, Canada"
      />
    }
  >
    {children}
  </PageLayout>
);
```

Wrap each route's page in `<SiteShell>` (or your router's layout route).

## 5. Verify

- Headings render in Bebas Neue.
- Primary red `#c8102e` appears on the brand-accent text and CTA button.
- Border-radius is 0 everywhere.
- `btn-primary` / `btn-secondary` utility classes work.

Done. Repeat per sister project.
