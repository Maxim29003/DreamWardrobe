import { Image, Text, View } from 'react-native';
import React from 'react';
import { typography } from '@styles/typography';
import ColorLabel from '@ui/ColorLabel/ColorLabel';
import SizeLabel from '@ui/SizeLabel/SizeLabel';
import DeleteButton from '@ui/DeleteButton/DeleteButton';
import { styles } from './styles';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { ProductBasketCardType } from '@type/ProductBasketCardType';
import Spacer from '@components/Spacer/Spacer';
import BasketActions from '@store/actions/basket.actions.ts';
import { useAppSelector } from '@hooks/useAppSelector.ts';
import BasketSelectors from '@store/selectors/basket.selectors.ts';

type ProductBasketCardProps = {
  id: ProductBasketCardType['id'];
};

const ProductBasketCard = ({ id }: ProductBasketCardProps) => {
  const dispatch = useAppDispatch();

  const product = useAppSelector(BasketSelectors.selectById(id));

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
              dispatch(BasketActions.deleteProduct(product));
            }
          }}
        />
        <Spacer height={15} />
        <Text style={typography.smallTitleSecondary}>
          {product.countProduct}
        </Text>
      </View>
    </View>
  );
};

export default ProductBasketCard;
