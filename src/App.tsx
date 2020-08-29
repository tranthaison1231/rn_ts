import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './theme';
import store, { persistor } from './store';
import { RootNavigator } from '@/screens';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AppearanceProvider>
            <PaperProvider theme={theme}>
              <StatusBar barStyle="dark-content" />
              <RootNavigator />
            </PaperProvider>
          </AppearanceProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
