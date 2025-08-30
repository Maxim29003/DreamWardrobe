import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@routes/navigations.types';
import { RoutesScreens, ScreenProps } from '@routes/routes';
import { StackParamList } from '@routes/stackParams';
import { store } from '@store/store';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

export const Stack = createNativeStackNavigator<StackParamList>();

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={SCREENS.AUTH_INIT}
            screenOptions={{ headerShown: false }}
          >
            {RoutesScreens.map((screen: ScreenProps) => (
              <Stack.Screen key={screen.name} {...screen} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
