import { WHITE } from '@styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    borderRadius: 12,
  },
  input: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
