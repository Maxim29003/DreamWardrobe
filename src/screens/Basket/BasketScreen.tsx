import React, { useState } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import ProductBasketCard from '@components/ProductBasketCard/ProductBasketCard';
import { WIDTH } from '@utils/normalizer';
import { GridLayout } from '@layouts/GridLayout/GridLayout';
import Spacer from '@components/Spacer/Spacer';
import { useAppSelector } from '@hooks/useAppSelector';
import BasketSelectors from '@store/selectors/basket.selectors.ts';
import { Colors } from '@styles/colors';
import { useHeaderHeight } from '@react-navigation/elements';
import { BasketIcon } from '@constants/Icons/Icons';
import BasketListFooterComponent from './components/BasketListFooterComponent/BasketListFooterComponent';
import ListEmptyComponent from '@components/ListEmptyComponent/ListEmptyComponent';
import BasketModal from './components/BasketModal/BasketModal';

const BasketScreen = () => {
  const headerHeight = useHeaderHeight();
  const basket = useAppSelector(BasketSelectors.selectAll);
  const totalCount = useAppSelector(BasketSelectors.totalCount);
  const totalPrice = useAppSelector(BasketSelectors.totalPrice);

  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <MainContainer topPadding={headerHeight}>
      <GridLayout
        data={basket}
        keyExtractor={item => item.id.toString()}
        renderItem={item => <ProductBasketCard basketProduct={item} />}
        columnGap={20}
        numColumns={1}
        parentPaddingHorizontal={30}
        heightItem={185}
        widthScreen={WIDTH}
        ListHeaderComponent={<Spacer height={20} />}
        contentContainerStyle={{ flexGrow: 1 }}
        ListFooterComponent={
          basket.length > 0 ? (
            <BasketListFooterComponent
              totalPrice={totalPrice}
              count={totalCount}
              showAlert={showAlert}
            />
          ) : null
        }
        ListEmptyComponent={() => (
          <ListEmptyComponent
            icon={<BasketIcon width={40} height={40} fill={Colors.PRIMARY} />}
            text="No Products in Basket"
          />
        )}
      />
      <BasketModal
        totalPrice={totalPrice}
        hideAlert={hideAlert}
        alertVisible={alertVisible}
      />
    </MainContainer>
  );
};

export default BasketScreen;
