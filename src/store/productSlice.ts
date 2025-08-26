import { database } from '@api/appwrite';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@types/Product';
import { DREAM_WARDROBE_DB, PRODUCTS } from '../../env';

type initialStateType = {
  products: Product[];
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

interface UpdateLikePayload {
  id: string;
  like: boolean;
}

export const toggleLike = createAsyncThunk<Product, UpdateLikePayload>(
  'products/toggleLike',
  async ({ id, like }) => {
    const response = (await database.updateDocument(
      DREAM_WARDROBE_DB,
      PRODUCTS,
      id,
      {
        like: !like,
      },
    )) as Product;
    return response;
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    toggleLiker(state, action: PayloadAction<string>) {
      state.products = state.products.map(product => {
        if (product.$id === action.payload) {
          return { ...product, like: !product.like };
        }
        return product;
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const documents = action.payload.documents as Product[];
      state.products = documents;
      state.status = 'succeeded';
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Ошибка загрузки';
    });

    builder.addCase(toggleLike.fulfilled, (state, action) => {
      state.products = state.products.map(product => {
        if (product.$id === action.payload.$id) {
          return { ...product, like: action.payload.like };
        }
        return product;
      });
    });
  },
});

export default productSlice.reducer;
