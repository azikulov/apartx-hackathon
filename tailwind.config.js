/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '0px',
        md: '350px',
        lg: '769px',
        xl: '1024px',
        '2xl': '1440px',
      },
      maxWidth: {
        xl: '548px',
        '7xl': '1440px',
      },
      boxShadow: {
        sidebar: '3px 3px 15px 0px rgba(87, 116, 205, 0.05)',
      },
    },
  },
  plugins: [],
};
