import { combineReducers, configureStore } from '@reduxjs/toolkit';
import basketReducer from '@store/reducers/entities/basket.reducer.ts';
import productReducer from '@store/reducers/entities/product.reducer.ts';
import favoritesReducer from '@store/reducers/entities/favorites.reducer.ts';
import userReducer from './reducers/entities/user.reducer';
import { reduxStorage } from '@utils/MMKVStorage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer,
  favorites: favoritesReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['user', 'basket', 'favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE, REGISTER, FLUSH, PAUSE, PURGE],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
