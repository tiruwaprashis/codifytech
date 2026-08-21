/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1E64',
          50: '#EEF1FB',
          100: '#D6DDF5',
          600: '#132C8A',
          700: '#0D2179',
          900: '#071454',
        },
        brand: {
          DEFAULT: '#1C3FD1',
          light: '#3B62F0',
          dark: '#0A1E64',
        },
        cyan: {
          DEFAULT: '#1FC3E6',
          light: '#6BDDF2',
          dark: '#0FA3C2',
        },
        teal: {
          DEFAULT: '#0E3A46',
          light: '#215868',
        },
        ink: '#0B1220',
        slate: {
          soft: '#5B6B82',
        },
        paper: '#FFFFFF',
        mist: '#F5F8FC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 20px 50px -18px rgba(28, 63, 209, 0.28)',
        cyanGlow: '0 20px 50px -18px rgba(31, 195, 230, 0.35)',
        card: '0 10px 34px -14px rgba(10, 30, 100, 0.18)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(115deg, #0A1E64 0%, #1C3FD1 55%, #1FC3E6 100%)',
      },
    },
  },
  plugins: [],
}
