import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '@type/Product.types';
import ProductsActions from '@store/actions/products.actions';

type initialStateType = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export const productsAdapter = createEntityAdapter({
  selectId: (product: ProductType) => product.$id
});

const initialState = productsAdapter.getInitialState<initialStateType>({
  status: 'idle',
  error: null,
})

const productReducer = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(ProductsActions.fetchProducts.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(ProductsActions.fetchProducts.fulfilled, (state, action) => {
      const documents = action.payload.documents as ProductType[];
      productsAdapter.setAll(state, documents)
     
      state.status = 'succeeded';
    });

    builder.addCase(ProductsActions.fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Ошибка загрузки';
    });
  },
});

export default productReducer.reducer;
