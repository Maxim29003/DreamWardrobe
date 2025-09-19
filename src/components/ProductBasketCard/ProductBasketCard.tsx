import { Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { typography } from '@styles/typography';
import ColorLabel from '@ui/ColorLabel/ColorLabel';
import SizeLabel from '@ui/SizeLabel/SizeLabel';
import DeleteButton from '@ui/DeleteButton/DeleteButton';
import { styles } from './styles';
import { useAppDispatch } from '@hooks/useAppDispatch';
import Spacer from '@components/Spacer/Spacer';
import BasketActions from '@store/actions/basket.actions.ts';
import { useAppSelector } from '@hooks/useAppSelector.ts';
import BasketSelectors from '@store/selectors/basket.selectors.ts';
import ProductsSelectors from '@store/selectors/products.selectors';
import { ProductType } from '@type/Product.types';

type ProductBasketCardProps = {
  id: ProductType['id'];
};

const ProductBasketCard = ({ id }: ProductBasketCardProps) => {
  const dispatch = useAppDispatch();

  const product = useAppSelector(ProductsSelectors.selectById(id));
  const count = useAppSelector(BasketSelectors.count(id))

   useEffect(()=>{
        console.log("ProductBasketCard mount", product.price)
        return ()=> console.log("ProductBasketCard unmount ", product.price)
      }, [])
    
       useEffect(()=>{
        console.log("ProductBasketCard update", product.price)
      })
  

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: product.photos[0] }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={typography.smallTitle}>{product.name}</Text>
          <Text style={typography.smallTitleSecondary}>{product.price}</Text>
          <View style={styles.labelsContainer}>
            <ColorLabel size={32} color={product.color} />
            <SizeLabel sizeDimension={32}>
              <Text>{product.size}</Text>
            </SizeLabel>
          </View>
        </View>
      </View>
      <View>
        <DeleteButton
          onPress={() => {
            if (product) {
              console.log(product);
              dispatch(BasketActions.deleteProduct({productId: id, price: product.price}));
            }
          }}
        />
        <Spacer height={15} />
        <Text style={typography.smallTitleSecondary}>
          {count}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(ProductBasketCard);
