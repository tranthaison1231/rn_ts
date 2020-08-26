import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';
import theme from './theme';
import { RootNavigator } from './screens';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <PaperProvider theme={theme}>
          <StatusBar barStyle="dark-content" />
          <RootNavigator />
        </PaperProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};

export default App;
