import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import FavoritesActions, {
  ToggleLikePayloadType,
} from '@store/actions/favorites.actions';
import { ProductType } from '@type/Product.types';

type FavoritesType = {
  id: ProductType['$id'];
  isLike: boolean;
};

export const favoritesAdapter = createEntityAdapter<FavoritesType>();

const favoritesReducer = createSlice({
  name: 'favorites',
  initialState: favoritesAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      FavoritesActions.toggleLike,
      (state, action: PayloadAction<ToggleLikePayloadType>) => {
        const id = action.payload.productId;
        const currentElement = favoritesAdapter
          .getSelectors()
          .selectById(state, id);
        if (currentElement) {
          favoritesAdapter.upsertOne(state, {
            id,
            isLike: currentElement.isLike!,
          });
        } else {
          favoritesAdapter.upsertOne(state, {
            id,
            isLike: true,
          });
        }
      },
    );
    return builder;
  },
});

export default favoritesReducer.reducer;
