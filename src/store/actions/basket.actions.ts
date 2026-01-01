import { createAction } from '@reduxjs/toolkit';
import { BasketProductType } from '@appTypes/BasketProduct.type';

const BasketActions = {
  addProduct:
    createAction<Omit<BasketProductType, 'count'>>('basket/addProduct'),
  deleteProduct: createAction<{ id: BasketProductType['id'] }>(
    'basket/deleteProduct',
  ),

  countIncrement: createAction<{ id: BasketProductType['id'] }>(
    'basket/countIncrement',
  ),

  countDecrement: createAction<{ id: BasketProductType['id'] }>(
    'basket/countDecrement',
  ),
};

export default BasketActions;
