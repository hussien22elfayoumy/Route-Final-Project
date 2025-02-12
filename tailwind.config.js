/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-base': '#4b5563',
        'text-dark': '#3f3f46',
        'text-light': '#71717a',
        'card-bg': '#f8fafc',
        'color-base': '#059669',
        'color-light': '#10b981',
        'color-dark': '#047857',
        'border-light': '#e5e7eb',
        'border-dark': '#d1d5db',
      },
    },
  },
  plugins: [],
};
