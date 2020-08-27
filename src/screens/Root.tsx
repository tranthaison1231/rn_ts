import React from 'react';
import Home from './Home';
import Shop from './Shop';
import Bag from './Bag';
import Favorites from './Favorites';
import Profile from './Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import withAuth from '../hocs/withAuth';

const Tab = createBottomTabNavigator();

const TAB_SCREENS = [
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
    component: withAuth(Profile),
    icon: 'account',
  },
];

const Root = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      headerMode="none"
      tabBarOptions={{
        activeTintColor: '#DB3022',
        inactiveTintColor: '#9B9B9B',
      }}
    >
      {TAB_SCREENS.map(({ name, component, tabBarVisible, icon }, index) => (
        <Tab.Screen
          key={String(index)}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={icon} size={size} color={color} light />
            ),
            tabBarVisible: tabBarVisible,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
