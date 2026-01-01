import { StyleSheet } from 'react-native';
import { Colors } from '@styles/colors';

export const styles = StyleSheet.create({
  errorContainer: {
    justifyContent: 'center',
  },
  errorText: {
    textAlign: 'center',
  },
  inputError: {
    borderWidth: 1,
    borderColor: Colors.ERROR,
  },
});
