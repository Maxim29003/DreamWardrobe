import { RootState } from '@store/store';
import { ProductType } from '@appTypes/Product.type';

const FavoritesSelectors = {
  isLiked: (productId: ProductType['$id']) => (state: RootState) =>
    state.favorites.favoritesProductIds.includes(productId),
  favoritesProductsIds: (state: RootState) =>
    state.favorites.favoritesProductIds,

  favoritesCount: (state: RootState) =>
    state.favorites.favoritesProductIds.length,
};

export default FavoritesSelectors;
