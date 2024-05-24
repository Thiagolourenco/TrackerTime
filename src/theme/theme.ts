import {createTheme} from '@shopify/restyle';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../helpers/pixelPerfect';

const palette = {
  button: {
    primary: {
      background: '#405B94',
      text: '#FFFFFF',
    },
    secondary: {
      background: '#7FD1B9',
      text: '#405B94',
    },
  },
  badge: {
    conclued: '#7bed9f',
    inProgress: '#70a1ff',
    isNotInit: '#a4b0be',
  },
  icon: {
    background: '#FFD166',
  },
  background: '#E5E5E5',
  textColor: '#000000',
  textColorGray: '#7f8c8d',
  textBlue: '#405B94',
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#000000',
  black400: '#212121',
  white: '#ffffff',
  gray: '#f4f7fc',
  blackOpacity: 'rgba(0,0,0,0.4)',
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
    blackOpacity: palette.blackOpacity,
    black400: palette.black400,
    black: palette.black,
    greenLight: palette.greenLight,
    greenDark: palette.greenDark,
    greenPrimary: palette.greenPrimary,
    gray: palette.gray,
    badgeConclued: palette.badge.conclued,
    badgeInProgress: palette.badge.inProgress,
    badgeIsNotInit: palette.badge.isNotInit,
  },
  spacing: {
    s: 8,
    sm: 10,
    m: 16,
    ml: 18,
    l: 24,
    ll: 32,
    xl: 40,
    xll: 100,
  },
  textVariants: {
    button1: {
      fontSize: 16,
      lineHeight: 24,
    },
    button2: {
      fontSize: 12,
      lineHeight: 12,
    },
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
  buttonVariants: {
    primary: {
      height: getNormalizedVerticalSizeWithPlatformOffset(44),
      width: getNormalizedSizeWithPlatformOffset(280),
      borderRadius: 8,
      backgroundColor: 'buttonPrimary',
    },
    secondary: {},
    roudennd: {
      width: 30,
      height: 30,
      borderRadius: 8,
      backgroundColor: 'black400',
      justifyContent: 'center',
      alignItems: 'center',
    },
    circlePrimary: {
      backgroundColor: 'black400',
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circleSecondary: {
      backgroundColor: 'black400',
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circlePlayAndPause: {
      width: 80,
      height: 80,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export type Theme = typeof theme;
export default theme;
