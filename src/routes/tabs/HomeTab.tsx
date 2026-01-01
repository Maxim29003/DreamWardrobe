import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '@styles/colors';
import { SCREENS } from '@routes/navigations.types';
import HomeStack from '@routes/stacks/HomeStack';
import FavoritesStack from '@routes/stacks/FavoritesStack';
import BasketStack from '@routes/stacks/BasketStack';
import ProfileStack from '@routes/stacks/ProfileStack';
import {
  BasketIcon,
  HomeIcon,
  ProfileIcon,
  HeartOutlineIcon,
} from '@constants/Icons/Icons';
import { useSelector } from 'react-redux';
import BasketSelectors from '@store/selectors/basket.selectors';
import FavoritesSelectors from '@store/selectors/favorites.selectors';
import { useAuth } from '@hooks/useAuth';

export const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const basketCount = useSelector(BasketSelectors.basketCount);
  const favoritesCount = useSelector(FavoritesSelectors.favoritesCount);
  const { isEmailVerified, user } = useAuth();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.BACKGROUND_GRADIENT_END,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <HomeIcon
              width={size}
              height={size}
              fill={focused ? Colors.PRIMARY : Colors.ICON_SECONDARY}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.FAVORITES_STACK}
        component={FavoritesStack}
        options={{
          tabBarBadge: favoritesCount > 0 ? favoritesCount : undefined,
          tabBarBadgeStyle: {
            backgroundColor: Colors.PRIMARY,
            color: Colors.SURFACE,
            borderWidth: 1,
            borderColor: Colors.SURFACE,
            fontSize: 14,
          },
          tabBarIcon: ({ size, focused }) => (
            <HeartOutlineIcon
              width={size}
              height={size}
              fill={focused ? Colors.PRIMARY : Colors.ICON_SECONDARY}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.BASKET_STACK}
        component={BasketStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            if (!user) {
              e.preventDefault();
              navigation.navigate(SCREENS.AUTH_INIT);
            }
          },
        })}
        options={{
          tabBarBadge: basketCount > 0 && user ? basketCount : undefined,
          tabBarBadgeStyle: {
            backgroundColor: Colors.PRIMARY,
            color: Colors.SURFACE,
            borderWidth: 1,
            borderColor: Colors.SURFACE,
            fontSize: 14,
          },
          tabBarIcon: ({ size, focused }) => (
            <BasketIcon
              width={size}
              height={size}
              fill={focused ? Colors.PRIMARY : Colors.ICON_SECONDARY}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.PROFILE_STACK}
        component={ProfileStack}
        options={{
          tabBarBadge: !isEmailVerified && user ? 1 : undefined,
          tabBarBadgeStyle: {
            backgroundColor: Colors.PRIMARY,
            color: Colors.SURFACE,
            borderWidth: 1,
            borderColor: Colors.SURFACE,
            fontSize: 14,
          },
          tabBarIcon: ({ size, focused }) => (
            <ProfileIcon
              width={size}
              height={size}
              fill={focused ? Colors.PRIMARY : Colors.ICON_SECONDARY}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
