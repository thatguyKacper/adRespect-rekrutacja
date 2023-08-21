const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['index.html','./src/**/*.{js,ts,html}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      montserrat: ['Montserrat', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      'white': '#FFFFFF',
      'beige': '#DCC1AB',
      'black': '#111111',
      'green': '#1B5B31',
      'grey': '#F5F0EC',
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      fontSize: {
        'xs': ['0.75rem'/* 12px */, {
          lineHeight: '1.125rem'/* 18px */,
          letterSpacing: '-0.0075rem'/* -0.12px */
        }],
        'sm': ['0.875rem'/* 14px */, {
          lineHeight: '1.3125rem'/* 21px */,
          letterSpacing: '-0.00875rem'/* -0.14px */
        }],
        'base': ['1rem'/* 16px */, {
          lineHeight: '1.5rem'/* 24px */,
        }],
        'base-spacing': ['1rem'/* 16px */, {
          lineHeight: '1.5rem'/* 24px */,
          letterSpacing: '-0.01rem'/* -0.16px */
        }],
        '3xl': ['1.75rem'/* 28px */, {
          lineHeight: '2.0125rem'/* 32.2px */,
          letterSpacing: '-0.0875rem'/* -1.4px */
        }],
        '4xl': ['2.5rem'/* 40px */, {
          lineHeight: '3rem'/* 48px */,
          letterSpacing: '-0.125rem'/* -2px */
        }],
        '4xl-italic': ['2.5rem'/* 40px */, {
          lineHeight: '4rem'/* 48px */,
          letterSpacing: '-0.063rem'/* -1px */
        }],
        '5xl': ['3rem'/* 48px */, {
          lineHeight: '3.45rem'/* 55.2px */,
          letterSpacing: '-0.09rem'/* -1.44px */
        }],
        '5xl-italic': ['3rem'/* 48px */, {
          lineHeight: '3.45rem'/* 55.2px */,
        }],
        '6xl': ['3.75rem'/* 60px */, {
          lineHeight: '4.375rem'/* 70px */,
        }]
      },
      spacing: {
        '14': '3.75rem'/* 60px */,
        '15': '3.875rem'/* 62px */,
        '18': '4.5rem'/* 72px */,
        '22': '5.5rem'/* 88px */,
        '27': '6.875rem'/* 110px */,
        '30': '7.5rem'/* 120px */,
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
        'ping-btn': 'ping-btn 1s infinite '
      },
      keyframes: {
        'bounce-x': {
          '0% , 100%': {
            'transform': 'translateX(-15%)',
          },
          '50%': {
            'transform': 'translateX(0%)',
          }
        },
        'ping-btn': {
          '0%': {
            'box-shadow': '0 0 0 0px rgba(255, 255, 255, 0.2)'
          },
          '100%': {
            'box-shadow': '0 0 0 25px rgba(255, 255, 255, 0)'
          },
        }
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('group-open', ':merge(.group).open &');
      addVariant('peer-open', ':merge(.peer).open ~ &');
    }),
  ],
}
