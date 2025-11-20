/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maskImage: {
        'gradient': 'linear-gradient(to bottom, transparent, black)',
      },
      maskComposite: {
        'destination-out': 'destination-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.mask-gradient': {
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          maskComposite: 'destination-out',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskComposite: 'destination-out',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
