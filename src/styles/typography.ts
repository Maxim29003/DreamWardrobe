import { StyleSheet } from 'react-native';

export const Typography = StyleSheet.create({
  heading: {
    fontFamily: 'Poppins-Regular',
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
  },
  body: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
  },

  bodyMedium: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
  },

 bodySemiBold: {
  fontFamily: 'Poppins-SemiBold', 
  fontSize: 18,
  fontWeight: '600',
  lineHeight: 24,
},

  button: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  },
});

export type FontSize = keyof typeof Typography;