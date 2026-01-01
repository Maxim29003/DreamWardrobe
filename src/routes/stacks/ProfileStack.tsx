import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../navigations.types';
import ProfileScreen from '@screens/Profile/ProfileScreen';
import Header from '@layouts/Header/Header';

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        header: () => <Header variant="back-title" />,
      }}
    >
      <Stack.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
