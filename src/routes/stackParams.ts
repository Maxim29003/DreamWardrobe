import { SCREENS } from './navigations.types';
import { ProductType } from '@type/Product.types';

export type StackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PRODUCT_DETAIL]: { productId: ProductType["$id"] | undefined };
  [SCREENS.BASKET]: undefined;
  [SCREENS.FAVORITES]: undefined;
  [SCREENS.SIGN_UP]: undefined;
  [SCREENS.SIGN_IN]: undefined;
  [SCREENS.AUTH_INIT]: undefined;
  [SCREENS.HOME_TABS]: undefined;
  [SCREENS.PROFILE]: undefined;
};
