import { createAction } from '@reduxjs/toolkit';
import { ProductType } from '@type/Product.types';

export type BasketPayloadType = { productId: ProductType['$id'], price: number};

const BasketActions = {
  addProduct: createAction<BasketPayloadType>('basket/addProduct'),
  deleteProduct:  createAction<BasketPayloadType>( 'basket/deleteProduct'),
}

export default BasketActions;
