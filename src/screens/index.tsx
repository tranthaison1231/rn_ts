import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import Home from './Home';
import Chart from './Chart';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator drawerContent={DrawerContent}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Chart" component={Chart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
