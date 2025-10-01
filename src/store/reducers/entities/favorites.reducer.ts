import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import FavoritesActions, {
  ToggleLikePayloadType,
} from '@store/actions/favorites.actions';
import { ProductType } from '@type/Product.types';

type FavoritesType = {
  favoritesProductIds: ProductType['$id'][];
};

const initialState:FavoritesType = {
  favoritesProductIds: [],
}

const favoritesReducer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      FavoritesActions.toggleLike,
      (state, action: PayloadAction<ToggleLikePayloadType>) => {
        const id = action.payload.productId;
        if (state.favoritesProductIds.includes(id)){
          state.favoritesProductIds = state.favoritesProductIds.filter(item => item !== id)
        } else {
          state.favoritesProductIds.push(id)
        }
      },
    );
    return builder;
  },
});

export default favoritesReducer.reducer;
