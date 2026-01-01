import { StyleSheet } from 'react-native';
import { Colors } from '@styles/colors';

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: Colors.SURFACE,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 10,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
