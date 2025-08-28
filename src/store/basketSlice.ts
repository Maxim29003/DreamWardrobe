import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductBasketCardType } from '@type/ProductBasketCardType';

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

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductBasketCardType>) => {
      const { id, price } = action.payload;

      if (state.basket[id]) {
        state.basket[id].countProduct += 1;
      } else {
        state.basket[id] = { ...action.payload, countProduct: 1 };
      }

      state.count += 1;
      state.totalPrice = parseFloat((state.totalPrice + price).toFixed(2));
    },

    deleteProduct: (state, action: PayloadAction<ProductBasketCardType>) => {
      const { id, price } = action.payload;
      const product = state.basket[id];

      if (!product) return;

      if (product.countProduct > 1) {
        product.countProduct -= 1;
      } else {
        delete state.basket[id];
      }
      state.totalPrice = parseFloat((state.totalPrice - price).toFixed(2));
      state.count = Math.max(0, state.count - 1);
    },
  },
});

export default basketSlice.reducer;
export const { addProduct, deleteProduct } = basketSlice.actions;
