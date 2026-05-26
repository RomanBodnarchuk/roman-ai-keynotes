# Usage — token + component reference

## Color tokens (HSL CSS vars)

| Token                    | Value             | Use                              |
| ------------------------ | ----------------- | -------------------------------- |
| `--background`           | `0 0% 4%`         | Page background                  |
| `--foreground`           | `40 10% 96%`      | Default body text                |
| `--card`                 | `0 0% 10%`        | Card surfaces                    |
| `--primary`              | `352 85% 43%`     | Brand red (#c8102e)              |
| `--gold`                 | `42 55% 54%`      | Pricing / accent                 |
| `--muted-foreground`     | `0 0% 53%`        | Secondary text                   |
| `--text-secondary`       | `0 0% 62%`        | Body secondary                   |
| `--border`               | `0 0% 100% / .08` | Hairlines                        |

Use as `bg-primary`, `text-foreground`, `border-border`, etc. **Never hard-code hex/rgb in components.**

## Typography

- Headings: `font-heading` (Bebas Neue, `letter-spacing: 1px`)
- Body: `font-body` (DM Sans, weight 300)
- Editorial accent: `font-serif` (DM Serif Display)

## Utility classes

- `.section-container` — max-w-7xl + responsive padding
- `.section-padding` / `.section-padding-sm` — vertical rhythm
- `.btn-primary` / `.btn-secondary` — sharp-edge CTAs with uppercase tracking
- `.card-elevated` — gradient card surface
- `.glow-line` — horizontal red glow divider
- `.text-gradient` — red accent gradient text
- `.stat-number` / `.stat-label` — stat blocks

## Components

```tsx
import Navigation from "@/brand-kit/components/Navigation";
import Footer from "@/brand-kit/components/Footer";
import PageLayout from "@/brand-kit/components/PageLayout";
import LeadMagnetLayout from "@/brand-kit/components/LeadMagnetLayout";
import SectionHeading from "@/brand-kit/components/SectionHeading";
```

### SectionHeading

```tsx
<SectionHeading
  label="What We Do"
  title="AI agents that ship revenue"
  description="Twelve specialists, zero employees."
  align="center"
/>
```

### LeadMagnetLayout

```tsx
<LeadMagnetLayout
  eyebrow="Free Tool"
  title={<>HubSpot <span className="text-primary">Audit</span></>}
  description="Score your pipeline in 5 minutes."
  shell={(c) => <SiteShell>{c}</SiteShell>}
>
  <YourFormHere />
</LeadMagnetLayout>
```

## Brand voice rules

- No em dashes. Use a period or comma.
- All pricing in USD.
- Never discount. Premium positioning is the brand.
- "Solo founder, zero employees, all AI agents."
