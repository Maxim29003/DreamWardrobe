import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '@routes/RootNavigator';
import { persistor, store } from '@store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from './contexts/AuthContext';
import { useEffect } from 'react';
import { isAndroid } from '@utils/platform';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(()=>{
    if(isAndroid) {
      SplashScreen.hide();
    }

  }, [])
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default App;
