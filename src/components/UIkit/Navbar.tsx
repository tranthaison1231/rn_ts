import { Box } from '@shyn123/rn-uikit';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Text from './Text';

const Navbar = ({ left, onLeftClick, title, right }) => {
  const navigation = useNavigation();
  return (
    <Box bg="#fff" shadow={4} h={55} justify="space-between" row align="center">
      <TouchableOpacity onPress={() => onLeftClick || navigation.goBack()}>
        {left}
      </TouchableOpacity>
      <Text size={25}>{title}</Text>
      <Box row>{right?.map((e) => e)}</Box>
    </Box>
  );
};

Navbar.defaultProps = {
  left: <Icon name="chevron-left" size={35} color="#222" />,
  right: [],
};

export default Navbar;
