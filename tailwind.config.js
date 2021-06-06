const twColors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      deepBlue: {
        500: '#0135DB',
      },
      lightGreen: {
        900: '#01EE2B',
      },
      ...twColors,
    },
    backgroundColor: theme => theme('colors'),
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      21: '21px',
      22: '22px',
      23: '23px',
      24: '24px',
      25: '25px',
      26: '26px',
      27: '27px',
      28: '28px',
      29: '29px',
      30: '30px',
      32: '32px',
    },
  },
};