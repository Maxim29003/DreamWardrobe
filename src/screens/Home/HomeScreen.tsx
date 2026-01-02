import React, { useEffect, useState } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import { GridLayout } from '@layouts/GridLayout/GridLayout';
import { calculateNumColumns, HEIGHT, WIDTH } from '@utils/normalizer';
import ProductCard from '@components/ProductCard/ProductCard';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import ProductsActions from '@store/actions/products.actions';
import ProductsSelectors from '@store/selectors/products.selectors';
import { Colors } from '@styles/colors';
import useDebounce from '@hooks/useDebounce';
import { useHeaderHeight } from '@react-navigation/elements';
import { Platform, RefreshControl } from 'react-native';
import ListEmptyComponent from '@components/ListEmptyComponent/ListEmptyComponent';
import HomeListHeaderComponent from './components/HomeListHeaderComponent';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const productsIds = useAppSelector(
    ProductsSelectors.idsBySearch(debouncedSearchTerm),
  );

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    dispatch(ProductsActions.fetchProducts());
  }, [dispatch]);

  const headerHeight = useHeaderHeight();
  const productsStatus = useAppSelector(ProductsSelectors.status);

  return (
    <MainContainer topPadding={headerHeight}>
      <GridLayout
        data={productsIds}
        keyExtractor={id => id.toString()}
        renderItem={id => <ProductCard id={id} />}
        columnGap={20}
        numColumns={calculateNumColumns()}
        rowGap={20}
        parentPaddingHorizontal={30}
        heightItem={HEIGHT * 0.35}
        widthScreen={WIDTH}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={productsStatus === 'loading'}
            onRefresh={() => dispatch(ProductsActions.fetchProducts())}
            {...Platform.select({
              ios: {
                tintColor: Colors.PRIMARY,
              },
              android: {
                colors: [Colors.PRIMARY],
                progressBackgroundColor: '#fff',
              },
            })}
          />
        }
        ListEmptyComponent={() => (
          <ListEmptyComponent variant="home" productsStatus={productsStatus} />
        )}
        ListHeaderComponent={
          <HomeListHeaderComponent
            handleSearch={handleSearch}
            searchTerm={searchTerm}
          />
        }
      />
    </MainContainer>
  );
};

export default HomeScreen;
