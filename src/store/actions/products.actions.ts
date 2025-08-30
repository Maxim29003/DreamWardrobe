import {database} from "@api/appwrite";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductsAction = createAsyncThunk(
    'products/fetchProducts',
     () => database.listDocuments(DREAM_WARDROBE_DB, PRODUCTS)
);
