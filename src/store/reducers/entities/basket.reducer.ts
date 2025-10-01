import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import BasketActions from '@store/actions/basket.actions.ts';
import { ProductType } from '@type/Product.types';

type Basket = {
  id: ProductType['$id'];
  count: number;
  price: number;
};

type BasketState = EntityState<Basket, Basket['id']> & {
  totalCount: number;
  totalPrice: number;
};

export const basketAdapter = createEntityAdapter<Basket>();

const initialState: BasketState = basketAdapter.getInitialState({
  totalCount: 0,
  totalPrice: 0,
});

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(BasketActions.addProduct, (state, action) => {
        const currentElement = basketAdapter
          .getSelectors()
          .selectById(state, action.payload.productId);
        basketAdapter.upsertOne(state, {
          id: action.payload.productId,
          price: action.payload.price,
          count: (currentElement?.count || 0) + 1,
        });
        state.totalPrice = parseFloat(
          (state.totalPrice + action.payload.price).toFixed(2),
        );
        state.totalCount += 1;
      })
      .addCase(BasketActions.deleteProduct, (state, action) => {
        const id = action.payload.productId;
        const currentElement = basketAdapter
          .getSelectors()
          .selectById(state, id);
        if (currentElement) {
          if (currentElement.count > 1) {
            basketAdapter.updateOne(state, {
              id,
              changes: { count: currentElement.count - 1 },
            });
          } else {
            basketAdapter.removeOne(state, id);
          }
        }
        state.totalPrice = parseFloat(
          (state.totalPrice - action.payload.price).toFixed(2),
        );
        state.totalCount = Math.max(0, state.totalCount - 1);
      });
  },
});

export default basketSlice.reducer;
