import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsScreens } from '@routes/tabRoutes';

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
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          position: 'absolute'
        },
      }}
    >
      {TabsScreensList}
    </Tab.Navigator>
  );
};

export default HomeTabs;

