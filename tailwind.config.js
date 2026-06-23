/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink:          '#0B0B0C',
        bone:         '#F5F3EF',
        amber:        '#2563EB',
        'amber-dim':  '#1D4ED8',
        'ink-700':    '#3A3A3D',
        'ink-500':    '#6B6B70',
        'ink-300':    '#A8A8AE',
        'bone-line':  '#E2DED7',
        'ink-line':   '#1E1E20',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      animation: {
        'card-scan': 'card-scan 0.65s ease-out forwards',
      },
      keyframes: {
        'card-scan': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(2400%)' },
        },
      },
    },
  },
  plugins: [],
}
