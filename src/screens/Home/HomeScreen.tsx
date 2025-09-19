import { Text } from 'react-native';
import React, { useEffect } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import Avatar from '@ui/Avatar/Avatar';
import HeaderMainLabel from '@layouts/Header/components/HeaderMainLabel/HeaderMainLabel';
import SearchInput from '@components/SearchInput/SearchInput';
import { GridLayout } from '@layouts/GridLayout/GridLayout';
import { calculateNumColumns, HEIGHT, WIDTH } from '@utils/normalizer';
import ProductCard from '@components/ProductCard/ProductCard';
import { typography } from '@styles/typography';
import Spacer from '@components/Spacer/Spacer';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import ProductsActions from '@store/actions/products.actions';
import ProductsSelectors from '@store/selectors/products.selectors';

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
    <MainContainer>
      <Header>
        <HeaderMainLabel />
        <Avatar
          size={44}
          uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
        />
      </Header>
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
            <Text style={typography.mainTitle}>Match Your Style</Text>
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

