import { ProductType } from "@appTypes/Product.type";



export enum SCREENS {
  // ROOT
  HOME_TABS = 'HOME_TABS',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',

  // TABS
  HOME_STACK = 'HOME_STACK',
  FAVORITES_STACK = 'FAVORITES_STACK',
  BASKET_STACK = 'BASKET_STACK',
  PROFILE_STACK = 'PROFILE_STACK',
  HOME = 'HOME',
  FAVORITES = 'FAVORITES',
  BASKET = 'BASKET',
  PROFILE = 'PROFILE',

  // AUTH
  AUTH_INIT = 'AUTH_INIT',
  AUTH = 'AUTH',
}

/*
export type HomeStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PRODUCT_DETAIL]: { productId: ProductType["$id"] | undefined };
};

export type FavoritesStackParamList = {
  [SCREENS.FAVORITES]: undefined;
  [SCREENS.PRODUCT_DETAIL]: { productId: ProductType["$id"] | undefined };
};

export type BasketStackParamList = {
  [SCREENS.BASKET]: undefined;
};

export type ProfileStackParamList = {
  [SCREENS.PROFILE]: undefined;
};

export type AuthStackParamList = {
  [SCREENS.AUTH_INIT]: undefined;
  [SCREENS.SIGN_IN]: undefined;
  [SCREENS.SIGN_UP]: undefined;
};

export type TabParamList = {
  [SCREENS.HOME]: NavigatorScreenParams<HomeStackParamList>;
  [SCREENS.FAVORITES]: NavigatorScreenParams<FavoritesStackParamList>;
  [SCREENS.BASKET]: NavigatorScreenParams<BasketStackParamList>;
  [SCREENS.PROFILE]: NavigatorScreenParams<ProfileStackParamList>;
};

export type RootStackParamList1 = {
  [SCREENS.HOME_TABS]: NavigatorScreenParams<TabParamList>;
  [SCREENS.AUTH_STACK]: NavigatorScreenParams<AuthStackParamList>;
};
*/



export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PRODUCT_DETAIL]: { productId: ProductType["$id"] | undefined };
  [SCREENS.BASKET]: undefined;
  [SCREENS.FAVORITES]: undefined;

  [SCREENS.AUTH_INIT]: undefined;
  [SCREENS.HOME_TABS]: undefined;
  [SCREENS.PROFILE]: undefined;
  [SCREENS.AUTH]:  {auth: 'signIn'|'signUp'};
};
