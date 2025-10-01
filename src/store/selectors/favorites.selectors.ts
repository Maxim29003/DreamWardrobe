import { RootState } from '@store/store';
import { ProductType } from '@type/Product.types';

const FavoritesSelectors = {
  isLiked: (productId: ProductType['$id']) => (state: RootState) =>
    state.favorites.favoritesProductIds.includes(productId),
  favoritesProductsIds: (state: RootState) =>
    state.favorites.favoritesProductIds,
};

export default FavoritesSelectors;
