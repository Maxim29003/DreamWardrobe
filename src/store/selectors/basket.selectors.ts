import { basketAdapter } from '@store/reducers/entities/basket.reducer.ts';
import { RootState } from '@store/store.ts';
import { ProductType } from '@type/Product.types';
import { ProductBasketCardType } from '@type/ProductBasketCardType.ts';

const basketSelectors = basketAdapter.getSelectors(
  (state: RootState) => state.basket,
);

 const basketProductIdsSelector = (state: RootState): ProductBasketCardType['id'][] =>
  basketSelectors.selectIds(state)

const BasketSelectors = {
  ids: basketProductIdsSelector,
  count: ( id: ProductType['id']) => (state: RootState) =>
    basketSelectors.selectById(state, id).count,

  totalCount: (state: RootState) => state.basket.totalCount,
  totalPrice: (state: RootState) => state.basket.totalPrice
}


export default  BasketSelectors;
