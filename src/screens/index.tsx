import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTheme } from 'react-native-paper';
import Root from './Root';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Caculation from './Caculation/Caculation';
import History from './Caculation/History';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName="Caculation"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Caculation" component={Caculation} />
        <Stack.Screen name="History" component={History} />
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
  );
};
