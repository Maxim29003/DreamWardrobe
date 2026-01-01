import { database } from '@api/appwrite';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';



const ProductsActions = {
  fetchProducts: createAsyncThunk('products/fetchProducts', () => {
    console.log('load cards');
    return database.listDocuments(Config.DREAM_WARDROBE_DB, Config.PRODUCTS);
  }),
};

export default ProductsActions;
