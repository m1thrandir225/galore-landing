import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        onBackground: "var(--onBackground)",
        main: "var(--main)",
        onMain: "var(--on-main)",
        secondary: "var(--secondary)",
        onSecondary: "var(--on-secondary)",
        tertiary: "var(--tertiary)",
        onTertiary: "var(--on-tertiary)",
        mainContainer: "var(--main-container)",
        onMainContainer: "var(--on-main-container)",
        secondaryContainer: "var(--secondary-container)",
        onSecondaryContainer: "var(--on-secondary-container)",
        teritaryContainer: "var(--teritary-container)",
        onTertiaryContainer: "var(--on-tertiary-container)",
        outline: "var(--outline)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
} satisfies Config;
