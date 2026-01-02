import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../navigations.types";
import BasketScreen from "@screens/Basket/BasketScreen";
import Header from "@layouts/Header/Header";

const Stack = createNativeStackNavigator();

function BasketStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        header: () => <Header variant="back-title-avatar" />,
      }}
    >
      <Stack.Screen
        name={SCREENS.BASKET}
        component={BasketScreen}
      />
    </Stack.Navigator>
  );
}

export default BasketStack;
