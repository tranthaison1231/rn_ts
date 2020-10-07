import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTheme } from 'react-native-paper';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Root from './Root';
import Dog from './Dog';
import DogDetail from './Dog/DogDetail';
import { ReactQueryConfigProvider } from 'react-query';

const Stack = createStackNavigator();

const queryConfig = {
  refetchAllOnWindowFocus: true,
  retry: 0,
  staleTime: 60000,
};

export const RootNavigator = (): JSX.Element => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator initialRouteName="Root">
          <Stack.Screen name="Root" component={Root} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReactQueryConfigProvider>
  );
};
