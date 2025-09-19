import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { typography } from '@styles/typography';
import LikeButton from '@ui/LikeButton/LikeButton';
import { styles } from './styles';
import { useAppDispatch } from '@hooks/useAppDispatch';


import { useAppSelector } from '@hooks/useAppSelector';

import { ProductType } from '@type/Product.types';
import ProductsSelectors from '@store/selectors/products.selectors';
import FavoritesSelectors from '@store/selectors/favorites.selectors';
import FavoritesActions from '@store/actions/favorites.actions';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';



type ProductCardProps = {
  id: ProductType['$id'];
};

const ProductCard = ({ id }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const  productCard = useAppSelector(ProductsSelectors.selectById(id))
  const isLike = useAppSelector(FavoritesSelectors.isLiked(id))
  const navigation  = useAppNavigation()

    useEffect(()=>{
      console.log("ProductCard mount", productCard.price)
      return ()=> console.log("ProductCard unmount ", productCard.price)
    }, [])
  
     useEffect(()=>{
      console.log("ProductCard update", productCard.price)
      
    })
const handleToggleLike = () => dispatch(FavoritesActions.toggleLike({ productId: id }));
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate(SCREENS.PRODUCT_DETAIL, {productId: id})}>
      <Image source={{ uri: productCard.photos[0] }} style={styles.image} />

<LikeButton
  like={isLike?.isLike ?? false}
  style={styles.likeButton}
  onPress={handleToggleLike}
/>
       
      <Text style={typography.smallTitle}>{productCard.name}</Text>
      <Text style={typography.smallTitleSecondary}>{productCard.price}</Text>
    </TouchableOpacity>
  );
};

export default  React.memo(ProductCard);

/*

*/
