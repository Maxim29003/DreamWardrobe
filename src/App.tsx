import { useSessionCheck } from '@hooks/useSessionCheck';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from '@routes/RootNavigator';
import { StackParamList } from '@routes/stackParams';
import { persistor, store } from '@store/store';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const Stack = createNativeStackNavigator<StackParamList>();

function AppContent() {
  useSessionCheck();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
