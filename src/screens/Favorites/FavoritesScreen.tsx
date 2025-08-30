import { Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useMemo, useRef } from 'react';
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
import { createSelector } from '@reduxjs/toolkit';
import { ProductCardType } from '@type/ProductCardType';

const FavoritesScreen = () => {
  const favorites = useAppSelector(
    createSelector([state => state.favorites.favorites], favorites =>
      Object.values(favorites).filter(
        (item): item is ProductCardType => item !== undefined,
      ),
    ),
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
        data={favorites}
        keyExtractor={({ id }) => id}
        renderItem={product => <ProductCard productCard={product} />}
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
