import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@routes/navigations.types';
import { RoutesScreens, ScreenProps } from '@routes/routes';
import { StackParamList } from '@routes/stackParams';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const Stack = createNativeStackNavigator<StackParamList>();

function App() {
  return (
     <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREENS.HOME_TABS}
          screenOptions={{ headerShown: false }}
        >
          {RoutesScreens.map((screen: ScreenProps) => (
            <Stack.Screen key={screen.name} {...screen} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
