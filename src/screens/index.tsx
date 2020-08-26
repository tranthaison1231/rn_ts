import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Shop from './Shop';
import Bag from './Bag';
import Favorites from './Favorites';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const ROUTERS = [
  {
    name: 'Home',
    component: Home,
    icon: 'home',
  },
  {
    name: 'Shop',
    component: Shop,
    icon: 'cart-outline',
  },
  {
    name: 'Bag',
    component: Bag,
    icon: 'shopping-outline',
  },
  {
    name: 'Favorites',
    component: Favorites,
    icon: 'heart-outline',
  },
  {
    name: 'Profile',
    component: Profile,
    icon: 'account',
  },
];

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        headerMode="none"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ _, color, size }) => {
            const icon = ROUTERS.find((e) => e.name === route.name).icon;
            return <Icon name={icon} size={size} color={color} light />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#DB3022',
          inactiveTintColor: '#9B9B9B',
        }}
      >
        {ROUTERS.map(({ name, component }, index) => (
          <Tab.Screen key={String(index)} name={name} component={component} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
