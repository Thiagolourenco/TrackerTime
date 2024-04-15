import { createTheme } from '@shopify/restyle'

const palette = {
  button: {
    primary: {
      background: "#405B94",
      text: "#FFFFFF"
    },
    secondary: {
      background: "#7FD1B9",
      text: "#405B94"
    }
  },
  icon: {
    background: "#FFD166",
  },
  background: "#E5E5E5",
  textColor: "#000000",
  textColorGray: "#7f8c8d",
  textBlue: "#405B94",
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#000000',
  white: '#ffffff',
  blackOpacity: "rgba(0,0,0,0.4)"
};

const theme = createTheme({
  colors: {
    background: palette.background,
    textColor: palette.textColor,
    textColorGray: palette.textColorGray,
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    buttonPrimary: palette.button.primary.background,
    buttonPrimaryText: palette.button.primary.text,
    purpleLight: palette.purpleLight,
    purplePrimary: palette.purplePrimary,
    white: palette.white,
    blackOpacity: palette.blackOpacity
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xll: 100
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