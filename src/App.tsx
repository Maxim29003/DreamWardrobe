import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@routes/navigations.types';
import { RoutesScreens, ScreenProps } from '@routes/routes';
import { StackParamList } from '@routes/stackParams';
import { StyleSheet } from 'react-native';

export const Stack = createNativeStackNavigator<StackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.HOME_TABS}>
        {RoutesScreens.map((screen: ScreenProps) => (
          <Stack.Screen key={screen.name} {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
