import React from 'react';
import { Text } from 'react-native';
import Box from './Box';

function DrawerContent() {
  return (
    <Box justify="center" align="center" flex={1}>
      <Text>Drawer content</Text>
    </Box>
  );
}

export default DrawerContent;
