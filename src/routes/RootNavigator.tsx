import { Stack } from '@app';
import { useAppSelector } from '@hooks/useAppSelector';
import UserSelectors from '@store/selectors/user.selectors';
import { AuthScreens, PrivateScreens } from './routes';


function RootNavigator() {
  const user = useAppSelector(UserSelectors.user)[0];
  const screensToRender = user?.sessionId ? PrivateScreens : AuthScreens;

  if (!screensToRender.length) return null;

  return (
    <Stack.Navigator
      initialRouteName={screensToRender[0].name} 
      screenOptions={{ headerShown: false }}
    >
      {screensToRender.map(screen => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
}

export default RootNavigator;
