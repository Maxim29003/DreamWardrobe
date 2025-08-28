import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@types/Product';

type initialStateType = {
  basket: Product[];
  count: number;
  totalPrice: number;
};

const initialState: initialStateType = {
  basket: [],
  count: 0,
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.basket.push(action.payload);
      state.count += 1;
      state.totalPrice += parseFloat(action.payload.price.toFixed(2));
    },

    deleteProduct: (state, action: PayloadAction<Product>) => {
      state.basket = state.basket.filter((product)=> product.$id !== action.payload.$id);
      state.count -= 1;
     
      state.totalPrice -= parseFloat(action.payload.price.toFixed(2));
    },
  },
});


export default basketSlice.reducer;

export const { addProduct, deleteProduct } =
  basketSlice.actions;