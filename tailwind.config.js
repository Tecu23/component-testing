/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'victor-narrow': ['"Victor Narrow"'],
        'victor-serif': ['"Victor Serif']
      }
    }
  },
  plugins: []
}
