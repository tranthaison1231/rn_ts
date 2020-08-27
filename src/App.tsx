import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
// import { Provider as ReduxProvider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';
import theme from './theme';
import { RootNavigator } from './screens';
// import store from './store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    // <ReduxProvider store={store}>
    <SafeAreaProvider>
      <AppearanceProvider>
        <PaperProvider theme={theme}>
          <StatusBar barStyle="dark-content" />
          <RootNavigator />
        </PaperProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
    // </ReduxProvider>
  );
};

export default App;
