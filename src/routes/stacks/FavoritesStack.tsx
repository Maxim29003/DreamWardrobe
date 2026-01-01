import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../navigations.types';
import FavoritesScreen from '@screens/Favorites/FavoritesScreen';
import Header from '@layouts/Header/Header';
import ProductDetailScreen from '@screens/ProductDetail/ProductDetailScreen';

const Stack = createNativeStackNavigator();

function FavoritesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        header: () => <Header variant="back-title-avatar" />,
      }}
    >
      <Stack.Screen name={SCREENS.FAVORITES} component={FavoritesScreen} />
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

export default FavoritesStack;
