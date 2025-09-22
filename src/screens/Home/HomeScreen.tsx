import React, { useEffect } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import Avatar from '@components/Avatar/Avatar';
import HeaderMainLabel from '@layouts/Header/components/HeaderMainLabel/HeaderMainLabel';
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

const HomeScreen = () => {
  
  const dispatch = useAppDispatch();
  const productsIds = useAppSelector(ProductsSelectors.ids);
  const products = useAppSelector((state)=>state.products);

  useEffect(() => {
    dispatch(ProductsActions.fetchProducts());
  }, [dispatch]);

  useEffect(()=>{
    console.log("HomeScreen mount")
    return ()=> console.log("HomeScreen unmount")
  }, [])

   useEffect(()=>{
    console.log("HomeScreen productsIds", productsIds)
    console.log(products)
  }, [productsIds, products])


   useEffect(()=>{
    console.log("HomeScreen update")
  })

  return (
    <MainContainer noBottomPadding>
      <Header variant="label-avatar"/>
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
            <UIText variant="heading" color={Colors.TEXT_PRIMARY}>Match Your Style</UIText>
            <Spacer height={10} />
            <SearchInput />
            <Spacer height={10} />
          </>
        }
      />
    </MainContainer>
  );
};

export default HomeScreen;

