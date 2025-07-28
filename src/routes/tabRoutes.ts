import { Tab } from '@layouts/HomeTabs/HomeTabs';
import { SCREENS } from './navigations.types';
import HomeScreen from '@screens/Home/HomeScreen';
import FavoritesScreen from '@screens/Favorites/FavoritesScreen';
import BasketScreen from '@screens/Basket/BasketScreen';
import Profile from '@screens/Profile/Profile';

export type TabScreenProps = Parameters<(typeof Tab)['Screen']>[number];

export const TabsScreens: TabScreenProps[] = [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
  },

  {
    name: SCREENS.FAVORITES,
    component: FavoritesScreen,
  },

  {
    name: SCREENS.BASKET,
    component: BasketScreen,
  },

  {
    name: SCREENS.PROFILE,
    component: Profile,
  },
];
