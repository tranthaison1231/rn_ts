import { Box, Text, Skeleton } from '@shyn123/rn-uikit';
import React from 'react';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DogCard = ({ data, onPress }) => {
  return (
    <Box as={Card} onPress={() => onPress(data.id)} m={5} w="45%">
      <Card.Cover source={{ uri: data.url }} />
      <Box p={10} justify="space-between" row align="center">
        <Box w="70%">
          <Text size={10} bold mb={5}>
            {data.name}
          </Text>
          <Text size={11} numberOfLines={1}>
            {data.bred_for}
          </Text>
        </Box>
        <Icon name="heart" size={25} color="#878787" />
      </Box>
    </Box>
  );
};

DogCard.Skeleton = () => <Skeleton w="45%" h={200} m={5} />;

DogCard.defaultProps = {
  data: {},
  onPress: (f) => f,
};

export default DogCard;
