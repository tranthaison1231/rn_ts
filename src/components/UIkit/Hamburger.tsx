import Box from '@UIkit/Box';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Humberger = ({ size, color }) => {
  return (
    <Box
      w={size}
      bg="#fff"
      h={size}
      borderRadius={5}
      align="center"
      as={TouchableOpacity}
      shadow={2}
      justify="center"
    >
      <Icon name="format-align-justify" color={color} size={30} />
    </Box>
  );
};

export default Humberger;
