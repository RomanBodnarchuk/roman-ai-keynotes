/**
 * Roman Bodnarchuk Brand Kit — Tailwind extend block.
 * Merge into your tailwind.config.ts theme.extend.
 *
 * Example:
 *   import { brandKitTheme } from "./src/brand-kit/tokens/tailwind.tokens";
 *   export default { theme: { extend: { ...brandKitTheme } } } satisfies Config;
 */
export const brandKitTheme = {
  fontFamily: {
    heading: ["'Bebas Neue'", "'Space Grotesk'", "system-ui", "sans-serif"],
    body: ["'DM Sans'", "'Inter'", "system-ui", "sans-serif"],
    serif: ["'DM Serif Display'", "Georgia", "serif"],
  },
  colors: {
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
    },
    secondary: {
      DEFAULT: "hsl(var(--secondary))",
      foreground: "hsl(var(--secondary-foreground))",
    },
    destructive: {
      DEFAULT: "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))",
    },
    muted: {
      DEFAULT: "hsl(var(--muted))",
      foreground: "hsl(var(--muted-foreground))",
    },
    accent: {
      DEFAULT: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))",
    },
    popover: {
      DEFAULT: "hsl(var(--popover))",
      foreground: "hsl(var(--popover-foreground))",
    },
    card: {
      DEFAULT: "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))",
    },
    gold: "hsl(var(--gold))",
    surface: { elevated: "hsl(var(--surface-elevated))" },
    "text-secondary": "hsl(var(--text-secondary))",
    "text-tertiary": "hsl(var(--text-tertiary))",
  },
  borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  },
  keyframes: {
    "fade-in": {
      from: { opacity: "0", transform: "translateY(20px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "fade-in-slow": { from: { opacity: "0" }, to: { opacity: "1" } },
  },
  animation: {
    "fade-in": "fade-in 0.6s ease-out forwards",
    "fade-in-slow": "fade-in-slow 1s ease-out forwards",
  },
};
