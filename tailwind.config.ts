import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E131B", // page background
        surface: "#151B25", // raised areas (logo fallbacks, embeds)
        line: "#263042", // dividers and borders
        fg: "#E9EDF3", // primary text
        muted: "#98A2B3", // secondary text, dates
        accent: "#FA4616", // Gator orange: numbers, active nav, link underlines only
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        page: "64rem",
      },
    },
  },
  plugins: [],
};

export default config;
