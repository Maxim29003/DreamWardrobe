import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { typography } from '@styles/typography';
import { blackImage } from '@mocks/testImages';
import LikeButton from '@ui/LikeButton/LikeButton';
import { styles } from './styles';
import { SCREENS } from '@routes/navigations.types';
import useAppNavigation from '@hooks/useAppNavigation';

const ProductCard = () => {
  const navigation = useAppNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate(SCREENS.PRODUCT_DETAIL)}>
      <Image source={blackImage} style={styles.image} />
      <LikeButton style={styles.likeButton} />
      <Text style={typography.smallTitle}>Jacket Jeans</Text>
      <Text style={typography.smallTitleSecondary}>$45.9</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
