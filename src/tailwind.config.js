/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white": "#f4f6f9",
        "primary": "#081a3a",
        "primary-text": "#081a3a",
        "primary-block": "#1a365d",
        "primary-light": "#eff5fa",
        "primary-dark": "#051126",
        "accent": "#1789c1",
        "accent-blue": "#1789c1",
        "nav-default": "#0F0F0F",
        "background-light": "#eef1f5",
        "background-dark": "#111721",
        "surface-light": "#f8f9fa",
        "surface-dark": "#1a2433",
        "border-light": "#e2e8f0",
        "border-dark": "#2d3748",
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "heading": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      transitionDuration: {
        '120': '120ms',
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
      animation: {
        'scroll': 'scroll 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
