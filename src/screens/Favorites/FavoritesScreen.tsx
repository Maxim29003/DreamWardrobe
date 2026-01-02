import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import { GridLayout } from '@layouts/GridLayout/GridLayout';
import { calculateNumColumns, HEIGHT, WIDTH } from '@utils/normalizer';
import ProductCard from '@components/ProductCard/ProductCard';
import Spacer from '@components/Spacer/Spacer';
import { useAppSelector } from '@hooks/useAppSelector';
import FavoritesSelectors from '@store/selectors/favorites.selectors';
import { Colors } from '@styles/colors';
import { useHeaderHeight } from '@react-navigation/elements';
import { HeartOutlineIcon } from '@constants/Icons/Icons';
import ListEmptyComponent from '@components/ListEmptyComponent/ListEmptyComponent';

const FavoritesScreen = () => {
  const headerHeight = useHeaderHeight();
  const favoritesProductIds = useAppSelector(
    FavoritesSelectors.favoritesProductsIds,
  );

  return (
    <MainContainer topPadding={headerHeight}>
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
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={() => (
          <ListEmptyComponent
            icon={
              <HeartOutlineIcon width={40} height={40} fill={Colors.PRIMARY} />
            }
            text="No Favorites"
          />
        )}
      />
    </MainContainer>
  );
};

export default FavoritesScreen;
