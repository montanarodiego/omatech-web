/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Off-black base + cool-tinted neutrals (one gray family, cool)
        ink:          '#0A0A0B',
        'ink-800':    '#121316',
        'ink-700':    '#3A3B40',
        'ink-500':    '#6B6C73',
        'ink-300':    '#A6A7AE',
        'ink-line':   '#1C1D21',
        // Paper / light surface
        bone:         '#F4F2ED',
        'bone-line':  '#DEDAD1',
        // Brand accent — steel blue, used with precision
        amber:        '#2563EB',
        'amber-dim':  '#1D4ED8',
        steel:        '#3B82F6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body:    ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
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
