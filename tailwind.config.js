/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF7219",
          orangeHover: "#e6600c",
          navy: "#024873",
          navyDark: "#013252",
          royalBlue: "#3F70CA",
          skyBlue: "#6EC1E4",
          amber: "#FA9700",
          yellow: "#FEC200",
          sand: "#DECEB9",
          dark: "#111111",
          cardDark: "#111827",
          borderGray: "#E5E7EB",
          bgLight: "#F8FAFC"
        }
      },
      fontFamily: {
        sans: ['"Bt Beau Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        beausans: ['"Bt Beau Sans"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
      },
      boxShadow: {
        'glow-orange': '0 10px 25px -5px rgba(255, 114, 25, 0.3)',
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'card': '0 8px 30px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
}
