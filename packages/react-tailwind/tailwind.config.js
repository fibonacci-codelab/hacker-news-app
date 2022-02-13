module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  mode: 'jit',
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
    extend: {
      colors: {
        'hacker-orange': '#ff6600',
        'hacker-dark-more': '#121212',
        'hacker-dark-normal': '#1e1e1e',
        'hacker-dark-less': '#ffffff0d',
        'hacker-light': '#ffffffde'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
