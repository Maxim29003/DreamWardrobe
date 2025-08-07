import { Image, Text, View } from 'react-native';
import React from 'react';
import { orangeImage } from '@mocks/testImages';
import { typography } from '@styles/typography';
import ColorLabel from '@ui/ColorLabel/ColorLabel';
import SizeLabel from '@ui/SizeLabel/SizeLabel';
import DeleteButton from '@ui/DeleteButton/DeleteButton';
import { styles } from './styles';

const ProductBasketCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={orangeImage} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={typography.smallTitle}>Jacket Jeans</Text>
          <Text style={typography.smallTitleSecondary}>$45.9</Text>
          <View style={styles.labelsContainer}>
            <ColorLabel size={32} color="orange" />
            <SizeLabel sizeDimension={32}>
              <Text>L</Text>
            </SizeLabel>
          </View>
        </View>
      </View>
      <DeleteButton />
    </View>
  );
};

export default ProductBasketCard;
