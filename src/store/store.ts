import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@store/productSlice';
import basketReducer from '@store/basketSlice';
import favoritesReducer from '@store/favoritesSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    basket: basketReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
