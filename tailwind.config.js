/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: "#ECF7F9",
          100: "#E0F5F9",
          200: "#9DE2F2",
          300: "#58C5E1",
          400: "#2B9BC9",
          500: "#1D7C94",
          600: "#166478",
          700: "#174155",
          800: "#0C2434",
          900: "#091922",
          950: "#050F15",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Secondary Colors
        secondary: {
          50: "#FFF5E9",
          100: "#FFE8C5",
          200: "#FFD7A2",
          300: "#FFBD77",
          400: "#FFA840",
          500: "#FF9016",
          600: "#D17420",
          700: "#9C5F18",
          800: "#5B350A",
          900: "#391C05",
          950: "#1F0D03",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Neutral Colors
        neutral: {
          50: "#F7F9FA",
          100: "#E7F2F5",
          150: "#EDF2F5",
          200: "#D2DDE3",
          300: "#B6C2D1",
          400: "#8D98B0",
          500: "#747B8B",
          600: "#5B6580",
          700: "#3B4A69",
          800: "#243454",
          900: "#142130",
          950: "#091729",
        },
        // Text Colors
        text: {
          50: "#F2F5F5",
          100: "#E2E2E8",
          200: "#C7C7C7",
          300: "#8A8A8A",
          400: "#3D3D3D",
          500: "#212121",
          600: "#1F1C1C",
          700: "#1F1515",
          800: "#1A0C0C",
          900: "#0F0707",
          950: "#0A0505",
        },
        // Background Colors
        background: {
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F2F2F2",
          300: "#ECECEC",
          400: "#E7E7E7",
          500: "#E0E0E0",
          600: "#DADADA",
          700: "#D2D2D2",
          800: "#CDCDCD",
          900: "#B0B0B0",
          950: "#AFAFAF",
        },
        // Success Colors
        success: {
          50: "#1B7C94",
          100: "#E8F5E9",
          200: "#9CAEB07",
          500: "#4CAF50",
          800: "#0B5B1E",
        },
        // Error Colors
        error: {
          100: "#FFEBEE",
          200: "#FFCDCC",
          500: "#F44336",
          800: "#8A1A13",
        },
        // Warning Colors
        warning: {
          50: "#FF9800",
          100: "#FFF3E0",
          200: "#FFE1BF",
          500: "#FF9505",
          800: "#9A4A00",
        },
        // Info Colors
        info: {
          200: "#9CD5FC",
          500: "#2196F3",
          800: "#0C4691",
        },
        muted: {
          50: "#64748B",
          100: "#D3DDE3",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
