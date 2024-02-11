import {createTheme} from '@shopify/restyle';

const palette = {
  white: {
    default: '#FFFFFF',
    100: '#F5F5F5',
  },
  transparent: '#00000000',
  coolGray: {
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#2e3443',
    800: '#1F2937',
    900: '#BEBDBC',
  },
  trueGray: {
    200: '#E5E5E5',
    400: '#A3A3A3',
    700: '#404040',
  },
  black: {
    default: '#000',
    100: '#050505',
    800: '#272727',
    900: '#1c1c1c',
  },
  'gray-200': '#EEEDE7',
  'red-500': '#EF4444',
  'red-800': '#841b24',
  salmon: {
    100: '#F5E9DE',
    200: '#f1ded0',
  },
  'blue-400': '#0089ff',
  primary: '#BD1714',
  yellow: '#fff000'
};

const base = 16

const sizes = {
  '0': base * 0, // 0
  '0.25': base * 0.25, // 4
  '0.5': base * 0.5, // 8
  '0.75': base * 0.75, // 12
  '1': base * 1, // 16
  '1.25': base * 1.25, // 20
  '1.5': base * 1.5, // 24
  '2': base * 2, // 32
  '2.5': base * 2.5, // 40
  '3': base * 3, // 48
  '4': base * 4, // 64
  '5': base * 5, // 30
  '6': base * 6, // 96
  '8': base * 8, // 128
};

const theme = createTheme({
  colors: {
    primary: palette.primary,
    yellow:palette.yellow,
    white: palette.white.default,
    'gray-900': palette.coolGray[900]
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
  borderRadii: {
    none: 0,
    xs: base * 0.125, // 2
    sm: base * 0.25, // 4
    md: base * 0.375, // 6
    lg: base * 0.5, // 8
    xl: base * 0.75, // 10
    full: 9999,
  },
  lineHeight: {
    none: base * 1,
    tight: base * 1.25,
    snug: base * 1.375,
    normal: base * 1.5,
    relaxed: base * 1.625,
    loose: base * 2,
    '3': base * 0.75,
    '4': base * 1,
    '5': base * 1.25,
    '6': base * 1.5,
    '7': base * 1.75,
    '8': base * 2,
    '9': base * 2.25,
    '10': base * 2.5,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export default theme;
