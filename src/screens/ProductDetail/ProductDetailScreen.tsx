import { Image, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import { colors, sizes } from '@mocks/testImages';
import Spacer from '@components/Spacer/Spacer';
import Picker from '@components/Picker/Picker';
import SizeLabel from '@ui/SizeLabel/SizeLabel';
import { Colors } from '@styles/colors';
import ColorLabel from '@ui/ColorLabel/ColorLabel';
import UIButton from '@ui/Button/UIButton';
import { styles } from './styles';
import useAppRoute from '@hooks/useAppRoute';
import { useAppDispatch } from '@hooks/useAppDispatch';
import BasketActions from '@store/actions/basket.actions.ts';
import { useAppSelector } from '@hooks/useAppSelector';
import ProductsSelectors from '@store/selectors/products.selectors';
import UIText from '@ui/Text/UIText';
import { useHeaderHeight } from '@react-navigation/elements';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import { useAuth } from '@hooks/useAuth';

const ProductDetailScreen = () => {
  const route = useAppRoute<SCREENS.PRODUCT_DETAIL>();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const headerHeight = useHeaderHeight();
  const { user } = useAuth();

  const productId = route?.params?.productId;
  const product = useAppSelector(ProductsSelectors.selectById(productId!));

  const [size, setSize] = useState(product.size);
  const [color, setColor] = useState(product.color);

  const handleAddToCart = () => {
    if (!user) {
      navigation.navigate(SCREENS.AUTH_INIT);
      return;
    }

    if (!product) {
      return;
    }

    const basketProduct = {
      id: product.$id + size + color,
      name: product.name,
      price: product.price,
      photo: product.photos[0],
      size: size,
      color: color,
    };
    dispatch(BasketActions.addProduct(basketProduct));
  };

  return (
    <MainContainer style={{ paddingTop: headerHeight }}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Spacer height={10} />
        <Image source={{ uri: product?.photos[0] }} style={styles.image} />

        <Spacer height={14} />
        <View style={styles.row}>
          <UIText variant="subtitle" color={Colors.TEXT_SECONDARY}>
            {product?.name}
          </UIText>
          <UIText variant="bodySemiBold" color={Colors.TEXT_PRIMARY}>
            {product?.price}
          </UIText>
        </View>
        <Spacer height={24} />
        <UIText variant="subtitle" color={Colors.TEXT_SECONDARY}>
          {'Size'}
        </UIText>
        <Spacer height={10} />
        <Picker
          keyExtractor={item => item}
          data={sizes}
          value={size}
          onChange={item => setSize(item)}
          horizontal={true}
          renderItem={(item, selectedValue) => (
            <View style={styles.sizeRow}>
              <SizeLabel
                sizeDimension={36}
                sizeValue={item}
                isSelected={item === selectedValue}
              />
              <Spacer width={12} />
            </View>
          )}
        />
        <Spacer height={35} />
        <UIText variant="subtitle" color={Colors.TEXT_SECONDARY}>
          {'Colors'}
        </UIText>

        <Spacer height={10} />

        <Picker
          keyExtractor={item => item}
          data={colors}
          value={color}
          onChange={item => setColor(item)}
          horizontal={true}
          renderItem={(item, selectedValue) => (
            <View style={styles.colorRow}>
              <View
                style={[
                  styles.colorCircle,
                  item === selectedValue && { borderColor: item },
                ]}
              >
                <ColorLabel size={36} color={item} />
              </View>

              <Spacer width={12} />
            </View>
          )}
        />
        <Spacer height={31} />
        <UIButton text="Add to Cart" onPress={handleAddToCart} />
        <Spacer height={31} />
      </ScrollView>
    </MainContainer>
  );
};

export default ProductDetailScreen;
