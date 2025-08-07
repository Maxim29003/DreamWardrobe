import { FONT_COLOR_SECONDARY } from '@styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
    borderRadius: 20,
  },
  likeButton: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  price: {
    color: FONT_COLOR_SECONDARY,
  },
});
