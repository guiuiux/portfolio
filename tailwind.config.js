/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-90": "spin-90 .6s linear infinite",
        "static-noise": "static-noise 0.2s infinite alternate",
      },
      keyframes: {
        "spin-90": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        "static-noise": {
          "100%": { backgroundPosition: "50% 0, 60% 50%" },
        },
      },

      backgroundImage: {
        "static-noise":
          "repeating-radial-gradient(#000 0 0.0001%,#fff 0 0.0002%) 50% 0/2500px 2500px, " +
          "repeating-conic-gradient(#000 0 0.0001%,#fff 0 0.0002%) 60% 60%/2500px 2500px",
      },
      backgroundBlendMode: {
        difference: "difference",
      },
      transition: {
        quint: { transition: "transform cubic-bezier(0.83, 0, 0.17, 1)" },
      },

      fontFamily: {
        supplysans: ["PPSupplySans", "sans-serif"],
        supplymono: ["PPSupplyMono", "monospace"],
        whyteinktrap: ["whyteinktrap", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        linkblue: {
          100: "#E6F2FF",
          200: "#C0E0FF",
          300: "#99CEFF",
          400: "#73BCFF",
          500: "#4DA6FF", // base blue color
          600: "#3C8FE6",
          700: "#2C78CC",
          800: "#1B61B3",
          900: "#0B4A99",
        },
        green: {
          100: "#B8F7C1",
          200: "#9BF3AA",
          300: "#7EEF93",
          400: "#61EB7C",
          500: "#36DD51", // base green color
          600: "#2EBF46",
          700: "#249837",
          800: "#1A7128",
          900: "#10491A",
        },
        yellow: {
          100: "#FFFBE6",
          200: "#FFF7CC",
          300: "#FFF2B3",
          400: "#FFEE99",
          500: "#FFEF5C", // base yellow color
          600: "#D9C84C",
          700: "#B2A13D",
          800: "#8C7A2D",
          900: "#66521E",
        },
        pink: {
          100: "#FFE4F1",
          200: "#FFC9E4",
          300: "#FFADD7",
          400: "#FF92CA",
          500: "#FE6ABA", // base pink color
          600: "#CB5494",
          700: "#9A3F6E",
          800: "#6A2949",
          900: "#391423",
        },

        purple: {
          100: "#F0E4FA",
          200: "#E1CAF5",
          300: "#D1AFF1",
          400: "#C295EC",
          500: "#9756E2", // base purple color
          600: "#783FBA",
          700: "#5A2F8D",
          800: "#3C1F61",
          900: "#1E0F34",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
