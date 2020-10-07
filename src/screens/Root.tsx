import React, { FunctionComponent, ComponentClass } from 'react';
import Home from './Home';
import Shop from './Shop';
import Favorites from './Favorites';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import withAuth from '@/hocs/withAuth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { useTheme } from 'react-native-paper';
import { NullComponent, AddButton } from '@shyn123/rn-uikit';

const Tab = createBottomTabNavigator();

interface TabScreen {
  name: string;
  component: ComponentClass<any, any> | FunctionComponent<any> | undefined;
  icon: string;
}

const TAB_SCREENS: TabScreen[] = [
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
    component: NullComponent,
    tabBarButton: () => <AddButton />,
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

const Root = (): JSX.Element => {
  const theme = useTheme();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: '#9B9B9B',
      }}
    >
      {TAB_SCREENS.map(({ name, component, icon, tabBarButton }, index) => (
        // @ts-ignore
        <Tab.Screen
          key={String(index)}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ color, size }) =>
              icon && <Icon name={icon} size={size} color={color} />,
            tabBarButton: tabBarButton,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Root;
