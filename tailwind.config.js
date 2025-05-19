/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        github: {
          dark: '#24292e',
          button: '#2ea44f',
          hover: '#2c974b'
        }
      }
    },
  },
  plugins: [],
};
 