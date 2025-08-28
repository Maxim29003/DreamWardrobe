import { Image, Text, View } from 'react-native';
import React from 'react';
import { orangeImage } from '@mocks/testImages';
import { typography } from '@styles/typography';
import ColorLabel from '@ui/ColorLabel/ColorLabel';
import SizeLabel from '@ui/SizeLabel/SizeLabel';
import DeleteButton from '@ui/DeleteButton/DeleteButton';
import { styles } from './styles';
import { Product } from '@types/Product';
import { deleteProduct } from '@store/basketSlice';
import { useAppDispatch } from '@hooks/useAppDispatch';

type ProductBasketCardProps = {
  product: Product;
};

const ProductBasketCard = ({ product }: ProductBasketCardProps) => {
 const dispatch = useAppDispatch();

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
      <DeleteButton
        onPress={() => {
          if (product) {
            console.log(product);
            dispatch(deleteProduct(product));
          }
        }}
      />
    </View>
  );
};

export default ProductBasketCard;
