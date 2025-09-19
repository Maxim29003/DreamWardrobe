import { favoritesAdapter } from '@store/reducers/entities/favorites.reducer';
import { RootState } from '@store/store';
import { ProductType } from '@type/Product.types';


const selectIsLiked = (id: ProductType['id'])=>(state: RootState)=>{
  return favoritesAdapter.getSelectors().selectById(state.favorites, id)
}
   
const favoritesProductsIds = (state: RootState) =>{ 
  console.log(favoritesAdapter.getSelectors().selectIds)
 return  favoritesAdapter.getSelectors().selectIds(state.favorites)
};

const FavoritesSelectors = {
  isLiked: selectIsLiked,
  favoritesProductsIds,
};

export default FavoritesSelectors;
