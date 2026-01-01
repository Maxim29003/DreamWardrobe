import { SCREENS } from './navigations.types';
import HomeTab from '@routes/tabs/HomeTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthInitScreen from '@screens/Auth/AuthInitScreen';
import AuthScreen from '@screens/Auth/screens/Auth/AuthScreen';
import Header from '@layouts/Header/Header';

export const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={SCREENS.HOME_TABS}
    >
      <Stack.Screen name={SCREENS.HOME_TABS} component={HomeTab} />

      <Stack.Group
        screenOptions={{
          headerShown: true,
          header: () => <Header variant="back" />,
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name={SCREENS.AUTH_INIT} component={AuthInitScreen} />
        <Stack.Screen name={SCREENS.AUTH} component={AuthScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
