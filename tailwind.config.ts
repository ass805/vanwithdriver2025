import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "#F1F1F1",
          dark: "#333333",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#1A1F2C",
        },
        foreground: {
          DEFAULT: "#222222",
          dark: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#0A2647",
          light: "#144272",
          dark: "#221F26",
        },
        secondary: {
          DEFAULT: "#F8F9FA",
          dark: "#333333",
        },
        accent: {
          DEFAULT: "#2C74B3",
          dark: "#555555",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-down": "fadeDown 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;