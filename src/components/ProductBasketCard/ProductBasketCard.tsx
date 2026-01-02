import { Image, View } from 'react-native';
import React, { useEffect } from 'react';
import ColorLabel from '@ui/ColorLabel/ColorLabel';
import SizeLabel from '@ui/SizeLabel/SizeLabel';
import { styles } from './styles';
import { useAppDispatch } from '@hooks/useAppDispatch';
import Spacer from '@components/Spacer/Spacer';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';
import UIIconButton from '@ui/IconButton/UIIconButton';
import { DeleteIcon, MinusIcon, PlusIcon } from '@constants/Icons/Icons';
import { BasketProductType } from '@appTypes/BasketProduct.type';
import BasketActions from '@store/actions/basket.actions';

type ProductBasketCardProps = {
  basketProduct: BasketProductType;
};

const ProductBasketCard = ({ basketProduct }: ProductBasketCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        borderWidth: 1,
        padding: 15,
        borderRadius: 20,
        borderColor: Colors.PRIMARY,
      }}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: basketProduct.photo }} style={styles.image} />
          <View style={styles.textContainer}>
            <UIText variant="bodyMedium" color={Colors.TEXT_SECONDARY}>
              {basketProduct.name}
            </UIText>
            <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
              {basketProduct.price}$
            </UIText>
            <View style={styles.labelsContainer}>
              <ColorLabel size={32} color={basketProduct.color} />
              <SizeLabel sizeDimension={32} sizeValue={basketProduct.size} />
            </View>
          </View>
        </View>
        <UIIconButton
          variant="otline"
          icon={<DeleteIcon fill={Colors.ICON_PRIMARY} />}
          onPress={() => {
            console.log(basketProduct);
            dispatch(BasketActions.deleteProduct({ id: basketProduct.id }));
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <UIIconButton
          variant="filled"
          icon={<PlusIcon />}
          onPress={() => {
            console.log(basketProduct);
            dispatch(BasketActions.countIncrement({ id: basketProduct.id }));
          }}
        />
        <Spacer width={15} />
        <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
          {basketProduct.count}
        </UIText>
        <Spacer width={15} />
        <UIIconButton
          variant="filled"
          icon={<MinusIcon />}
          onPress={() => {
            console.log(basketProduct);
            dispatch(BasketActions.countDecrement({ id: basketProduct.id }));
          }}
        />
      </View>
    </View>
  );
};

export default React.memo(ProductBasketCard);
