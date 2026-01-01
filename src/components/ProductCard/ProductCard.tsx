import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { ProductType } from '@appTypes/Product.type';
import ProductsSelectors from '@store/selectors/products.selectors';
import FavoritesSelectors from '@store/selectors/favorites.selectors';
import FavoritesActions from '@store/actions/favorites.actions';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';
import UIIconButton from '@ui/IconButton/UIIconButton';
import { HeartFilledIcon, HeartOutlineIcon } from '@constants/Icons/Icons';

type ProductCardProps = {
  id: ProductType['$id'];
};

const ProductCard = ({ id }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const productCard = useAppSelector(ProductsSelectors.selectById(id));
  const isLiked = useAppSelector(FavoritesSelectors.isLiked(id));
  const navigation = useAppNavigation();

  const handleToggleLike = () =>
    dispatch(FavoritesActions.toggleLike({ productId: id }));
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(SCREENS.PRODUCT_DETAIL, { productId: id })
      }
    >
      <Image source={{ uri: productCard.photos[0] }} style={styles.image} />
      <UIIconButton
        variant="filled"
        style={styles.likeButton}
        icon={
          isLiked ? (
            <HeartFilledIcon
              fill={Colors.ICON_PRIMARY}
              width={20}
              height={20}
            />
          ) : (
            <HeartOutlineIcon
              fill={Colors.ICON_PRIMARY}
              width={20}
              height={20}
            />
          )
        }
        onPress={handleToggleLike}
      />
      <UIText variant="bodyMedium" color={Colors.TEXT_SECONDARY}>
        {productCard.name}
      </UIText>
      <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
        {productCard.price} $
      </UIText>
    </TouchableOpacity>
  );
};

export default React.memo(ProductCard);
