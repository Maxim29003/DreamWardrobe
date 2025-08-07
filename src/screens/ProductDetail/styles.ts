import { figmaConverter } from '@utils/normalizer';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  image: {
    height: figmaConverter(413),
    width: '100%',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontFamily: 'Poppins SemiBold',
    fontWeight: 'semibold',
  },
  sizeRow: {
    flexDirection: 'row',
  },
  colorRow: {
    flexDirection: 'row',
  },
  colorCircle: {
    width: 50,
    height: 50,
    borderColor: 'transparent',
    borderRadius: 25,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
