import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { typography } from '@styles/typography';

import LikeButton from '@ui/LikeButton/LikeButton';
import { styles } from './styles';
import { SCREENS } from '@routes/navigations.types';
import useAppNavigation from '@hooks/useAppNavigation';

type ProductCardProps = {
  name: string;
  price: number;
  photo: string;
};

const ProductCard = ({ name, price, photo }: ProductCardProps) => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(SCREENS.PRODUCT_DETAIL)}
    >
      <Image source={{ uri: photo }} style={styles.image} />
      <LikeButton style={styles.likeButton} />
      <Text style={typography.smallTitle}>{name}</Text>
      <Text style={typography.smallTitleSecondary}>{price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
