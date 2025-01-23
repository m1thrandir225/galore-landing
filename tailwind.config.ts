import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        onBackground: "var(--on-background)",
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
      fontFamily: {
        satoshi: "var(--font-satoshi)",
        benzin: "var(--font-benzin)",
        stardom: "var(--font-stardom)",
      },
    },
  },
  plugins: [],
} satisfies Config;
