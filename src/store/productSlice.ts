import { database } from '@api/appwrite';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '@type/ProductType';
import { DREAM_WARDROBE_DB, PRODUCTS } from '../../env';

type initialStateType = {
  products: ProductType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: initialStateType = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await database.listDocuments(DREAM_WARDROBE_DB, PRODUCTS);
    return response;
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const documents = action.payload.documents as ProductType[];
      state.products = documents;
      state.status = 'succeeded';
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Ошибка загрузки';
    });
  },
});

export default productSlice.reducer;
