import { database } from '@api/appwrite';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { DREAM_WARDROBE_DB, PRODUCTS } from '../../../env';

const ProductsActions = {
  fetchProducts: createAsyncThunk('products/fetchProducts', () => {
    console.log('load cards');
    return database.listDocuments(DREAM_WARDROBE_DB, PRODUCTS);
  }),
};

export default ProductsActions;
