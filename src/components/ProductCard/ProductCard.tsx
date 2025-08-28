import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { typography } from '@styles/typography';

import LikeButton from '@ui/LikeButton/LikeButton';
import { styles } from './styles';
import { SCREENS } from '@routes/navigations.types';
import useAppNavigation from '@hooks/useAppNavigation';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { toggleLike } from '@store/productSlice';
import { useAppSelector } from '@hooks/useAppSelector';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  photo: string;
  like: boolean;
};

const ProductCard = ({ name, price, photo, like, id }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const product = useAppSelector((state)=> state.products.products.find((product)=>product.$id === id))

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(SCREENS.PRODUCT_DETAIL, {product: product})}
    >
      <Image source={{ uri: photo }} style={styles.image} />
      <LikeButton
        like={like}
        style={styles.likeButton}
        onPress={() => dispatch(toggleLike({ id, like }))}
      />
      <Text style={typography.smallTitle}>{name}</Text>
      <Text style={typography.smallTitleSecondary}>{price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
