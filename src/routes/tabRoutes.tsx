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
import { Colors } from '@styles/colors';

export type TabScreenProps = Parameters<(typeof Tab)['Screen']>[number];

export const TabsScreens: TabScreenProps[] = [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
    options: {
      tabBarIcon: ({ size }) => {
        return (
          <HomeIcon width={size} height={size} fill={Colors.ICON_SECONDARY} />
        );
      },
    },
  },

  {
    name: SCREENS.FAVORITES,
    component: FavoritesScreen,
    options: {
      tabBarStyle: { display: 'none' },
      tabBarIcon: ({ size }) => {
        return (
          <HeartOutlineIcon
            width={size}
            height={size}
            fill={Colors.ICON_SECONDARY}
          />
        );
      },
    },
  },

  {
    name: SCREENS.BASKET,
    component: BasketScreen,
    options: {
      tabBarStyle: { display: 'none' },
      tabBarIcon: ({ size }) => {
        return (
          <BasketIcon width={size} height={size} fill={Colors.ICON_SECONDARY} />
        );
      },
    },
  },

  {
    name: SCREENS.PROFILE,
    component: Profile,
    options: {
      tabBarStyle: { display: 'none' },
      tabBarIcon: ({ size }) => {
        return (
          <ProfileIcon
            width={size}
            height={size}
            fill={Colors.ICON_SECONDARY}
          />
        );
      },
    },
  },
];
