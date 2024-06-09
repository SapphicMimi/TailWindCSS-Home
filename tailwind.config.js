/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      spacing: {
      },
      backgroundImage: {
        'gradient-to-white': 'linear-gradient(180deg, rgb(236, 236, 236) 50%, rgba(236, 236, 236, 0) 100%)'
      },
      gridAutoColumns: {
        'column-5': 'calc(20% - 30px)',
        'column-4': 'calc(25% - 30px)',
        'column-3': 'calc(33.333% - 30px)',
        'column-2': 'calc(50% - 30px)',
      }
    },
    screens: {
      mqW1: {'max': '1340px'},
      mqW2: {'max': '1250px'},
      mqW3: {'max': '1218px'},
      mqW4: {'max': '985px'},
      mqW5: {'max': '975px'},
      mqW6: {'max': '915px'},
      mqW7: {'max': '850px'},
      mqW8: {'max': '800px'},
      mqW9: {'max': '765px'},
      mqW10: {'max': '650px'},
      mqW11: {'max': '605px'},
      mqW12: {'max': '575px'},
      mqW13: {'max': '435px'},
      mqW14: {'max': '405px'},
      mqW15: {'max': '350px'},
    
      mqW16: {'max': '1016px'},
      mqW17: {'max': '1010px'},
      mqW18: {'max': '1700px'},
      mqW19: {'max': '710px'},
      mqW20: {'max': '1630px'},
      mqW21: {'max': '1900px'},
      mqW22: {'max': '1540px'}
    },
    colors: {
      'white_hp': '#fcfafa',
      'black_hp': '#3b3b3b',
      'pink_hp': '#eccacb',
      'grey_1': '#c2c2c2',
      'grey_2': '#3b3b3b',
      'grey_3': '#ececec',
      'grey_4': '#585858'
    },
    fontFamily: {
      lato: ['Lato', 'Helvetica'],
      arvo: ['Arvo', 'Helvetica'],
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }
      })
    })
  ],
}

