import { Image, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
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

const ProductDetailScreen = () => {
  const route = useAppRoute();
  const productId = route?.params?.productId;
  const dispatch = useAppDispatch();
  const product = useAppSelector(ProductsSelectors.selectById(productId!));

  return (
    <MainContainer>
      <Header variant="back-avatar" />
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
          keyExtractor={item => item.id}
          data={sizes}
          horizontal={true}
          renderItem={(item, selectedValue) => (
            <View style={styles.sizeRow}>
              <SizeLabel
                sizeDimension={36}
                sizeValue={item.label}
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
          keyExtractor={item => item.id}
          data={colors}
          horizontal={true}
          renderItem={(item, selectedValue) => (
            <View style={styles.colorRow}>
              <View
                style={[
                  styles.colorCircle,
                  item === selectedValue && { borderColor: item.name },
                ]}
              >
                <ColorLabel size={36} color={item.name} />
              </View>

              <Spacer width={12} />
            </View>
          )}
        />
        <Spacer height={31} />
        <UIButton
          text="Add to Cart"
          onPress={() => {
            if (product) {
              console.log(product);
              dispatch(
                BasketActions.addProduct({
                  productId: productId!,
                  price: product.price,
                }),
              );
            }
          }}
        />
        <Spacer height={31} />
      </ScrollView>
    </MainContainer>
  );
};

export default ProductDetailScreen;
