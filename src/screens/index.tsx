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

const Stack = createStackNavigator();

export const RootNavigator = (): JSX.Element => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName="DogApp">
        <Stack.Screen name="DogApp" component={Dog} />
        <Stack.Screen name="DogDetail" component={DogDetail} />
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
