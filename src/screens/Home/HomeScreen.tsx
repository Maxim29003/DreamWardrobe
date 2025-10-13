import React, { useEffect, useState } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import SearchInput from '@components/SearchInput/SearchInput';
import { GridLayout } from '@layouts/GridLayout/GridLayout';
import { calculateNumColumns, HEIGHT, WIDTH } from '@utils/normalizer';
import ProductCard from '@components/ProductCard/ProductCard';
import Spacer from '@components/Spacer/Spacer';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import ProductsActions from '@store/actions/products.actions';
import ProductsSelectors from '@store/selectors/products.selectors';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';
import useDebounce from '@hooks/useDebounce';

const HomeScreen = () => {
  const dispatch = useAppDispatch();


  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const productsIds = useAppSelector(ProductsSelectors.idsBySearch(debouncedSearchTerm));
  
  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    dispatch(ProductsActions.fetchProducts());
  }, [dispatch]);

  return (
    <MainContainer noBottomPadding>
      <Header variant="label-avatar" />
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
        ListHeaderComponent={
          <>
            <Spacer height={20} />
            <UIText variant="heading" color={Colors.TEXT_PRIMARY}>
              Match Your Style
            </UIText>
            <Spacer height={10} />
            <SearchInput
              onChangeText={handleSearch}
              value={searchTerm}
            />
            <Spacer height={10} />
          </>
        }
      />
    </MainContainer>
  );
};

export default HomeScreen;
