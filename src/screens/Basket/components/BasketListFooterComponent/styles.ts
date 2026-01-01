import { Colors } from '@styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    borderColor: Colors.TEXT_TERTIARY,
    borderBottomWidth: 1,
  },
});
