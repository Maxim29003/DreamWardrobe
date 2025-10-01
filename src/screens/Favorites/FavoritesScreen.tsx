import React, { useEffect } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import { GridLayout } from '@layouts/GridLayout/GridLayout';
import { calculateNumColumns, HEIGHT, WIDTH } from '@utils/normalizer';
import ProductCard from '@components/ProductCard/ProductCard';
import Spacer from '@components/Spacer/Spacer';
import { useAppSelector } from '@hooks/useAppSelector';
import FavoritesSelectors from '@store/selectors/favorites.selectors';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';

const FavoritesScreen = () => {
  const favoritesProductIds = useAppSelector(
    FavoritesSelectors.favoritesProductsIds,
  );

  useEffect(() => {
    console.log('FavoritesScreen mount');
    return () => console.log('FavoritesScreen unmount');
  }, []);

  useEffect(() => {
    console.log('FavoritesScreen update');
  });

  return (
    <MainContainer>
      <Header variant="back-title-avatar" title="My Favorites" />
      <GridLayout
        data={favoritesProductIds}
        keyExtractor={id => id.toString()}
        renderItem={item => <ProductCard id={item} />}
        columnGap={20}
        numColumns={calculateNumColumns()}
        rowGap={20}
        parentPaddingHorizontal={30}
        heightItem={HEIGHT * 0.35}
        widthScreen={WIDTH}
        ListHeaderComponent={<Spacer height={20} />}
        ListEmptyComponent={()=>(
        <UIText style={{textAlign: 'center'}} color={Colors.TEXT_SECONDARY}>No Favorites</UIText>
      )}
      />
    </MainContainer>
  );
};

export default FavoritesScreen;
