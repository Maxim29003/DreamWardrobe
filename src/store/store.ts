import { combineReducers, configureStore } from '@reduxjs/toolkit';
import basketReducer from '@store/reducers/entities/basket.reducer.ts';
import productReducer from '@store/reducers/entities/product.reducer.ts';
import favoritesReducer from '@store/reducers/entities/favorites.reducer.ts';

export const store = configureStore({
  reducer: combineReducers({
    products: productReducer,
    basket: basketReducer,
    favorites: favoritesReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
