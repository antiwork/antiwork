import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        faint: "var(--faint)",
        "faint-2": "var(--faint-2)",
        "card-border": "var(--card-border)",
        "pill-border": "var(--pill-border)",
        surface: "var(--surface)",
      },
      backgroundImage: {
        card: "var(--card)",
        "card-2": "var(--card-2)",
      },
      boxShadow: {
        card: "0 1px 3px var(--card-shadow)",
        "card-sm": "0 1px 2px var(--card-shadow-sm)",
      },
      keyframes: {
        starwars: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(-100vh)" },
        },
      },
      animation: {
        starwars: "starwars 30s linear forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
