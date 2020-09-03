import { theme as chakraTheme } from '@chakra-ui/core';

export default {
  ...chakraTheme,
  breakpoints: ['30em', '48em', '62em', '80em'],
  // https://coolors.co/101593-5932e6-8632e6-b332e6-e032e6
  colors: {
    ...chakraTheme.colors,
    blue: {
      50: '#020314',
      100: '#040525',
      200: '#060837',
      300: '#080A49',
      400: '#0A0D5C',
      500: '#0C106E',
      600: '#0E1281',
      700: '#101593',
      800: '#1217A5',
      900: '#6C70EF',
    },
    pink: {
      50: '#120212',
      100: '#370637',
      200: '#490849',
      300: '#5C0A5C',
      400: '#931093',
      500: '#CA16CA',
      600: '#E723E7',
      700: '#E723E7',
      800: '#ED5AED',
      900: '#F17EF1',
    },
  },
  fonts: {
    body: `"VT323",-apple-system,BlinkMacSystemFont,monospace,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    mono: `"VT323",-apple-system,BlinkMacSystemFont,monospace,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `"Press Start 2P",-apple-system,BlinkMacSystemFont,cursive,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
};
