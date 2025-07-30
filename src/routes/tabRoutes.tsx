import { Tab } from '@layouts/HomeTabs/HomeTabs';
import { SCREENS } from './navigations.types';
import HomeScreen from '@screens/Home/HomeScreen';
import FavoritesScreen from '@screens/Favorites/FavoritesScreen';
import BasketScreen from '@screens/Basket/BasketScreen';
import Profile from '@screens/Profile/Profile';
import {
  BasketIcon,
  HeartOutlineIcon,
  HomeIcon,
  ProfileIcon,
} from '@constants/Icons/Icons';
import { TAB_BAR_ICON_COLOR } from '@styles/colors';

export type TabScreenProps = Parameters<(typeof Tab)['Screen']>[number];

export const TabsScreens: TabScreenProps[] = [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
    options: {
      tabBarIcon: ({ size }) => {
        return (
          <HomeIcon width={size} height={size} fill={TAB_BAR_ICON_COLOR} />
        );
      },
    },
  },

  {
    name: SCREENS.FAVORITES,
    component: FavoritesScreen,
    options: {
      tabBarIcon: ({ size }) => {
        return (
          <HeartOutlineIcon
            width={size}
            height={size}
            fill={TAB_BAR_ICON_COLOR}
          />
        );
      },
    },
  },

  {
    name: SCREENS.BASKET,
    component: BasketScreen,
    options: {
      tabBarIcon: ({ size }) => {
        return (
          <BasketIcon width={size} height={size} fill={TAB_BAR_ICON_COLOR} />
        );
      },
    },
  },

  {
    name: SCREENS.PROFILE,
    component: Profile,
    options: {
      tabBarIcon: ({ size }) => {
        return (
          <ProfileIcon width={size} height={size} fill={TAB_BAR_ICON_COLOR} />
        );
      },
    },
  },
];
