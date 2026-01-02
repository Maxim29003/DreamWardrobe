import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../navigations.types';
import HomeScreen from '@screens/Home/HomeScreen';
import Header from '@layouts/Header/Header';
import ProductDetailScreen from '@screens/ProductDetail/ProductDetailScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        header: () => <Header variant="label-avatar" />,
      }}
    >
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen
        name={SCREENS.PRODUCT_DETAIL}
        component={ProductDetailScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
          header: () => <Header variant="back-avatar" />,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
