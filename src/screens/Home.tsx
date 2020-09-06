import React from 'react';
import Box from '@UIkit/Box';
import Text from '@UIkit/Text';
import Gradient from '@UIkit/Gradient';

const Home = () => {
  return (
    <Box flex={1} justify="center" align="center">
      <Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        px={15}
        borderRadius={5}
      >
        <Text m={10} color="#fff" bold>
          Sign in with Facebook
        </Text>
      </Gradient>
    </Box>
  );
};

export default Home;
