import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';

import { typography } from '@styles/typography';

import ProductBasketCard from '@components/ProductBasketCard/ProductBasketCard';
import { WIDTH } from '@utils/normalizer';
import { GridLayout } from '@layouts/GridLayout/GridLayout';
import Spacer from '@components/Spacer/Spacer';

import { styles } from './styles';
import { useAppSelector } from '@hooks/useAppSelector';
import BasketSelectors from '@store/selectors/basket.selectors.ts';
import UIButton from '@ui/Button/UIButton';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';

const BasketScreen = () => {
  const basket = useAppSelector(BasketSelectors.ids);

  const totalCount = useAppSelector(BasketSelectors.totalCount);
  const totalPrice = useAppSelector(BasketSelectors.totalPrice);

  useEffect(() => {
    console.log('BasketScreen mount');
    return () => console.log('BasketScreen unmount');
  }, []);

  useEffect(() => {
    console.log('BasketScreen update');
  });

  return (
    <MainContainer>
      <Header variant="back-title-avatar" title="My Basket" />
      
        <GridLayout
          data={basket}
          keyExtractor={id => id.toString()}
          renderItem={item => <ProductBasketCard id={item} />}
          columnGap={20}
          numColumns={1}
          parentPaddingHorizontal={30}
          heightItem={125}
          widthScreen={WIDTH}
          ListHeaderComponent={<Spacer height={20} />}
          ListFooterComponent={renderFooter(totalPrice, totalCount)}
        />
      
    </MainContainer>
  );
};

const renderFooter = (totalPrice: number, count: number) => (
  <>
    <View style={styles.footerRow}>
      <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>Total:</UIText>
      <UIText variant="bodySemiBold" color={Colors.TEXT_TERTIARY}>{totalPrice}</UIText>
    </View>
    <Spacer height={15} />

    <View style={styles.footerRow}>
      <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>Count:</UIText>
      <UIText variant="bodySemiBold" color={Colors.TEXT_TERTIARY}>{count}</UIText>
    </View>
    <Spacer height={15} />

    <View style={styles.separator} />
    <Spacer height={15} />

    <View style={styles.footerRow}>
      <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>Grand Total:</UIText>
      <UIText variant="bodySemiBold">{totalPrice}</UIText>
    </View>
    <Spacer height={25} />

    <UIButton text="Checkout" />
    <Spacer height={40} />
  </>
);

export default BasketScreen;
