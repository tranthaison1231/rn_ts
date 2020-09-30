import React from 'react';
import { Box, Text } from '@shyn123/rn-uikit';
import Swiper from 'react-native-swiper';
import SignInFacebook from '@/components/Button/SignInFacebook';
import { useTheme } from 'react-native-paper';

const Home = () => {
  const theme = useTheme();
  return (
    <Swiper activeDotColor={theme.colors.primary}>
      <Box flex={1} justify="center" align="center">
        <Text>Hello Swiper</Text>
      </Box>
      <Box flex={1} justify="center" align="center">
        <Text>Beautiful</Text>
      </Box>
      <Box flex={1} justify="center" align="center">
        <SignInFacebook />
      </Box>
    </Swiper>
  );
};

export default Home;
