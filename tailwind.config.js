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
        "white": "#F4F7FB",
        "primary": "#071B34",
        "primary-text": "#071B34",
        "primary-block": "#0B2242",
        "primary-light": "#F4F7FB",
        "primary-dark": "#051126",
        "accent": "#4DA3FF",
        "accent-blue": "#4DA3FF",
        "nav-default": "#071B34",
        "background-light": "#F4F7FB",
        "background-dark": "#0B2242",
        "surface-light": "#ffffff",
        "surface-dark": "#071B34",
        "border-light": "#e2e8f0",
        "border-dark": "#1e3a5f",
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        "display": ["Satoshi", "sans-serif"],
        "heading": ["Satoshi", "sans-serif"],
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
