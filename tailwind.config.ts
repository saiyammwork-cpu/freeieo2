import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-border": "hsl(var(--surface-border) / <alpha-value>)",
        border: "hsl(var(--surface-border) / <alpha-value>)",
        "text-primary": "hsl(var(--foreground) / <alpha-value>)",
        "text-muted": "hsl(var(--text-muted) / <alpha-value>)",
        accent: {
          violet: "hsl(var(--accent-violet) / <alpha-value>)",
          pink: "hsl(var(--accent-pink) / <alpha-value>)",
          cyan: "hsl(var(--accent-cyan) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        xl: "0.75rem",
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;