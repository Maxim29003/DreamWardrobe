import { Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { typography } from '@styles/typography';
import LikeButton from '@ui/LikeButton/LikeButton';
import { styles } from './styles';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { ProductCardType } from '@type/ProductCardType';
import { toggleLike } from '@store/favoritesSlice';
import { useAppSelector } from '@hooks/useAppSelector';


type ProductCardProps = {
  productCard: ProductCardType;
};

const ProductCard = ({ productCard }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const like = useAppSelector(
    state => state.favorites.favorites[productCard.id]?.like,
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: productCard.photos[0] }} style={styles.image} />
      <LikeButton
        like={like ?? false}
        style={styles.likeButton}
        onPress={() => dispatch(toggleLike(productCard))}
      />
      <Text style={typography.smallTitle}>{productCard.name}</Text>
      <Text style={typography.smallTitleSecondary}>{productCard.price}</Text>
    </View>
  );
};

export default ProductCard;
