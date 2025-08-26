import { Text } from 'react-native';
import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import BackButton from '@layouts/Header/components/BackButton/BackButton';
import { typography } from '@styles/typography';
import Avatar from '@ui/Avatar/Avatar';
import { GridLayout } from '@layouts/GridLayout/GridLayout';
import { calculateNumColumns, HEIGHT, WIDTH } from '@utils/normalizer';
import ProductCard from '@components/ProductCard/ProductCard';
import Spacer from '@components/Spacer/Spacer';
import { useAppSelector } from '@hooks/useAppSelector';

const FavoritesScreen = () => {
  const productsLike = useAppSelector(state =>
    state.products.products.filter(product => product.like),
  );
  return (
    <MainContainer>
      <Header>
        <BackButton />
        <Text style={typography.mainTitle}>My Favorites</Text>
        <Avatar
          size={44}
          uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
        />
      </Header>
      <GridLayout
        data={productsLike}
        keyExtractor={({ $id }) => $id}
        renderItem={item => (
          <ProductCard
            id={item.$id}
            like={item.like}
            name={item.name}
            price={item.price}
            photo={item.photos[0]}
          />
        )}
        columnGap={20}
        numColumns={calculateNumColumns()}
        rowGap={20}
        parentPaddingHorizontal={30}
        heightItem={HEIGHT * 0.35}
        widthScreen={WIDTH}
        ListHeaderComponent={<Spacer height={20} />}
      />
    </MainContainer>
  );
};

export default FavoritesScreen;
