import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductCardType } from '@type/ProductCardType';

type initialStateType = {
  favorites: Record<string, ProductCardType | undefined>;
};

const initialState: initialStateType = {
  favorites: {},
};

const favoritesReducer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<ProductCardType>) => {
      const id = action.payload.id;

      if (state.favorites[id]?.like) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = {
          ...action.payload,
          like: true,
        };
      }
    },
  },
  extraReducers: builder => {

    return builder;
  },
});

export const { toggleLike } = favoritesReducer.actions;
export default favoritesReducer.reducer;
