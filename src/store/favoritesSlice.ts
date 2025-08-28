import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductCardType } from '@type/ProductCardType';

type initialStateType = {
  favorites: Record<string, ProductCardType | undefined>;
};

const initialState: initialStateType = {
  favorites: {},
};

const favoritesSlice = createSlice({
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
});

export const { toggleLike } = favoritesSlice.actions;
export default favoritesSlice.reducer;
