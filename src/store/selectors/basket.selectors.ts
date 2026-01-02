import { basketAdapter } from '@store/reducers/entities/basket.reducer.ts';
import { RootState } from '@store/store.ts';
import { BasketProductType } from '@appTypes/BasketProduct.type';

const basketSelectors = basketAdapter.getSelectors(
  (state: RootState) => state.basket,
);

const BasketSelectors = {
  selectById: (id: BasketProductType['id']) => (state: RootState) =>
    basketSelectors.selectById(state, id),

  selectAll: (state: RootState) => basketSelectors.selectAll(state),

  totalCount: (state: RootState) =>
    basketSelectors.selectAll(state).reduce((acc, cur) => acc + cur.count, 0),

  totalPrice: (state: RootState) =>
    basketSelectors
      .selectAll(state)
      .reduce((acc, cur) => acc + cur.price * cur.count, 0),

  basketCount: (state: RootState) => basketSelectors.selectAll(state).length,
};

export default BasketSelectors;
