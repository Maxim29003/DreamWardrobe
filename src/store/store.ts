import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@store/productSlice';
import basketReducer from '@store/basketSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
