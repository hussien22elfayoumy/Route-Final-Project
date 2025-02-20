const flowbite = require('flowbite-react/tailwind');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        'products-pattern':
          'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/products-banner.jpg)',
        'categories-pattern':
          'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/categories-banner.jpg)',
        'brands-pattern':
          'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/brands-banner.jpg)',
      },
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
  plugins: [flowbite.plugin()],
};
