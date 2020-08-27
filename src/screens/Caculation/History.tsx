import React from 'react';
import Box from '../../components/UIkit/Box';
import { List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const History = ({ route }) => {
  return (
    <Box as={SafeAreaView} flex={1} justify="center" p={20}>
      <Box p={2} mb={5} boxShadow={2} bg="#fff">
        <List.Item
          title={route.params.item.question}
          description={route.params.item.answer}
        />
      </Box>
    </Box>
  );
};

export default History;
