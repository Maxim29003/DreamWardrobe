import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductBasketCardType } from '@type/ProductBasketCardType.ts';
import { ProductType } from '@type/ProductType.ts';
import { toProductBasketCard } from '@utils/productUtils.ts';

const BasketActions = {
  addProduct: createAsyncThunk(
    'basket/addProduct',
     (product: ProductType) => toProductBasketCard(product)
  ),
  deleteProduct: createAsyncThunk(
    'basket/deleteProduct',
     (product: ProductBasketCardType) => product
  )
}

export default BasketActions;
