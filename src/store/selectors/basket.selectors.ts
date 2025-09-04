import { basketAdapter } from '@store/reducers/entities/basket.reducer.ts';
import { RootState } from '@store/store.ts';
import { ProductBasketCardType } from '@type/ProductBasketCardType.ts';

const basketSelectors = basketAdapter.getSelectors(
  (state: RootState) => state.basket,
);


 const basketProductIdsSelector = (state: RootState): ProductBasketCardType['id'][] =>
  basketSelectors.selectIds(state)


const BasketSelectors = {
  ids: basketProductIdsSelector,
  selectById: ( id: ProductBasketCardType['id']) => (state: RootState,) =>
    basketSelectors.selectById(state, id),

}


export default BasketSelectors;
