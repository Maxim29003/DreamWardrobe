import { StyleSheet, Text, View } from 'react-native';
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
      }}
    >
      {TabsScreensList}
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
