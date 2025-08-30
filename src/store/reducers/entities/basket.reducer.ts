import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ProductBasketCardType } from '@type/ProductBasketCardType';
import BasketActions from '@store/actions/basket.actions.ts';

type InitialStateType = {
  basket: Record<string, ProductBasketCardType>;
  count: number;
  totalPrice: number;
};

const initialState: InitialStateType = {
  basket: {},
  count: 0,
  totalPrice: 0,
};

export const basketAdapter = createEntityAdapter<ProductBasketCardType>();

const basketSlice = createSlice({
  name: 'basket',
  initialState: basketAdapter.getInitialState<InitialStateType>(initialState),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(BasketActions.addProduct.fulfilled, (state, action) => {
        const currentElement = basketAdapter.getSelectors().selectById(state, action.payload.id);
        basketAdapter.upsertOne(state, {
          ...action.payload,
          countProduct: (currentElement?.countProduct || 0) + 1,
        });
        // state.totalPrice = parseFloat((state.totalPrice + price).toFixed(2));
        // state.count += 1;
      })
      .addCase(BasketActions.deleteProduct.fulfilled, (state, action) => {
        const { id } = action.payload;

        const currentElement = basketAdapter.getSelectors().selectById(state, id);
        if (currentElement) {
          if (currentElement.countProduct > 1) {
            basketAdapter.updateOne(state, {
              id,
              changes: { countProduct: currentElement.countProduct - 1 },
            });
          } else {
            basketAdapter.removeOne(state, id);
          }
        }
        // state.totalPrice = parseFloat((state.totalPrice - price).toFixed(2));
        // state.count = Math.max(0, state.count - 1);
      });
  },
});

export default basketSlice.reducer;
