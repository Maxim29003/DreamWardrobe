import { Stack } from '@app';
import { SCREENS } from './navigations.types';
import SignInScreen from '@screens/Auth/screens/SignIn/SignInScreen';
import AuthInitScreen from '@screens/Auth/AuthInitScreen';
import SignUpScreen from '@screens/Auth/screens/SignUp/SignUpScreen';
import ProductDetailScreen from '@screens/ProductDetail/ProductDetailScreen';
import Profile from '@screens/Profile/Profile';
import HomeTabs from '@layouts/HomeTabs/HomeTabs';

export type ScreenProps = Parameters<(typeof Stack)['Screen']>[number];

export const RoutesScreens: (ScreenProps)[] = [
  {
    name: SCREENS.AUTH_INIT,
    component: AuthInitScreen,
  },

  {
    name: SCREENS.SIGN_IN,
    component: SignInScreen,
  },

  {
    name: SCREENS.SIGN_UP,
    component: SignUpScreen,
  },

  {
    name: SCREENS.PRODUCT_DETAIL,
    component: ProductDetailScreen,
  },

  {
    name: SCREENS.PROFILE,
    component: Profile,
  },

  {
    name: SCREENS.HOME_TABS,
    component: HomeTabs,
  },
];
