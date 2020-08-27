import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Box from '../components/UIkit/Box';
import Text from '../components/UIkit/Text';

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#123',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Box justify="center" align="center" flex={1}>
      <Box w={100} h={100} bg="#fff" boxShadow={1} mb={100} />
      <Text bold color="red">
        {count}
      </Text>
      <FAB style={styles.fab} icon="plus" onPress={() => setCount(count + 1)} />
    </Box>
  );
};

export default Counter;
