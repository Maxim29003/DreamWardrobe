import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsScreens } from '@routes/tabRoutes';
import { LINEAR_GRADIENT_END } from '@styles/colors';

export const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const TabsScreensList = useMemo(
    () => TabsScreens.map(tabs => <Tab.Screen key={tabs.name} {...tabs} />),
    [],
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: LINEAR_GRADIENT_END,
          borderTopWidth: 0,
          elevation:0,
        },
      }}
    >
      {TabsScreensList}
    </Tab.Navigator>
  );
};

export default HomeTabs;

