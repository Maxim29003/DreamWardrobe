import { StyleSheet } from 'react-native';
import { BLACK, FONT_COLOR, FONT_COLOR_SECONDARY } from './colors';

export const typography = StyleSheet.create({
  mainTitle: {
    fontFamily: 'Poppins Regular',
    fontSize: 28,
    fontWeight: 'regular',
    color: BLACK,
  },

  mediumTitle: {
    fontSize: 20,
    fontFamily: 'Poppins Medium',
    fontWeight: 'medium',
    color: FONT_COLOR,
  },

  smallTitle: {
    fontSize: 18,
    fontFamily: 'Poppins Medium',
    fontWeight: 'medium',
    color: FONT_COLOR,
  },

  smallTitleSecondary: {
    fontSize: 18,
    fontFamily: 'Poppins Medium',
    fontWeight: 'medium',
    color: FONT_COLOR_SECONDARY,
  },
});
