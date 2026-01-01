import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import BasketActions from '@store/actions/basket.actions.ts';
import { BasketProductType } from '@appTypes/BasketProduct.type';

export const basketAdapter = createEntityAdapter<BasketProductType, string>({
  selectId: (basket: BasketProductType) => basket.id,
});

const basketSlice = createSlice({
  name: 'basket',
  initialState: basketAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(BasketActions.addProduct, (state, action) => {
        const product = action.payload;

        basketAdapter.addOne(state, { ...product, count: 1 });
      })
      .addCase(BasketActions.deleteProduct, (state, action) => {
        const productId = action.payload.id;
        basketAdapter.removeOne(state, productId);
      })

      .addCase(BasketActions.countIncrement, (state, action) => {
        const productId = action.payload.id;
        const product = state.entities[productId];
        if (product) {
          product.count++;
        }
      })
      .addCase(BasketActions.countDecrement, (state, action) => {
        const productId = action.payload.id;
        const product = state.entities[productId];
        if (product && product.count > 1) {
          product.count--;
        }
      });
  },
});

export default basketSlice.reducer;
