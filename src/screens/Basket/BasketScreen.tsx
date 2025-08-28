import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import BackButton from '@layouts/Header/components/BackButton/BackButton';
import { typography } from '@styles/typography';
import Avatar from '@ui/Avatar/Avatar';
import ProductBasketCard from '@components/ProductBasketCard/ProductBasketCard';
import { WIDTH } from '@utils/normalizer';
import { GridLayout } from '@layouts/GridLayout/GridLayout';
import Spacer from '@components/Spacer/Spacer';
import PrimaryButton from '@ui/PrimaryButton/PrimaryButton';
import { styles } from './styles';
import { useAppSelector } from '@hooks/useAppSelector';

const BasketScreen = () => {
  const {basket, totalPrice, count} = useAppSelector((state) => state.basket)
  useEffect(()=>{
    console.log(basket)
  }, [])
  return (
    <MainContainer>
      <Header>
        <BackButton />
        <Text style={typography.mainTitle}>My Basket</Text>
        <Avatar
          size={44}
          uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
        />
      </Header>
      <View style={styles.centeredContainer}>
        <GridLayout
          data={basket}
          keyExtractor={({ id$ }) => id$}
          renderItem={(item) => <ProductBasketCard product={item}/>}
          columnGap={20}
          numColumns={1}
          parentPaddingHorizontal={30}
          heightItem={125}
          widthScreen={WIDTH < 560 ? WIDTH : 560}
          ListHeaderComponent={<Spacer height={20} />}
          ListFooterComponent={renderFooter(totalPrice, count)}
        />
      </View>
    </MainContainer>
  );
};

const renderFooter = (totalPrice:number, count: number) => (
  <>
    <View style={styles.footerRow}>
      <Text style={typography.smallTitleSecondary}>Total:</Text>
      <Text style={[typography.smallTitleSecondary, styles.boldText]}>
        {totalPrice}
      </Text>
    </View>
    <Spacer height={15} />

    <View style={styles.footerRow}>
      <Text style={typography.smallTitleSecondary}>Count:</Text>
      <Text style={[typography.smallTitleSecondary, styles.boldText]}>
        {count}
      </Text>
    </View>
    <Spacer height={15} />

    <View style={styles.separator} />
    <Spacer height={15} />

    <View style={styles.footerRow}>
      <Text style={typography.smallTitleSecondary}>Grand Total:</Text>
      <Text style={[typography.smallTitle, styles.boldText]}>{totalPrice}</Text>
    </View>
    <Spacer height={25} />

    <PrimaryButton text="Checkout" />
    <Spacer height={40} />
  </>
);

export default BasketScreen;
