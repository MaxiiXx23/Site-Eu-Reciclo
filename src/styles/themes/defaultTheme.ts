export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '660px',
  tabletL: '768px',
  laptopS: '860px',
  laptopM: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
} as const

export const defaultTheme = {
  white: '#FFF',
  'blue-500': '#0EA5E9',

  'green-400': '#4ADE80',
  'green-500': '#22C55E',
  'red-400': '#DC2626',

  black: '#000000',

  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopS: `(max-width: ${size.laptopS})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
  },

  fontSize: {
    'text-base': '1rem',
    'text-xl': '1.25rem',
    'text-2xl': '1.5rem',
    'text-5xl': '3rem',
  },
} as const
