import { Box, Text, Skeleton } from '@shyn123/rn-uikit';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DogCard = ({ data, onPress }) => {
  return (
    <Box as={Card} onPress={() => onPress(data.id)} m={5} w="45%">
      <Swipeable
        renderLeftActions={() => (
          <Box w="100%" p={10}>
            <Box row mb={10}>
              <Text flex={2} color="red">
                Name:
              </Text>
              <Text flex={2} color="red">
                {data.name}
              </Text>
            </Box>
            <Box row mb={10}>
              <Text flex={2} color="red">
                BreedFor:
              </Text>
              <Text flex={2} color="red">
                {data.bred_for}
              </Text>
            </Box>
          </Box>
        )}
      >
        <Card.Cover source={{ uri: data.url }} />
        <Box p={10} justify="space-between" row align="center" bg="red">
          <Box w="70%">
            <Text size={10} bold mb={5} color="#fff">
              {data.name}
            </Text>
            <Text size={11} numberOfLines={1} color="#fff">
              {data.bred_for}
            </Text>
          </Box>
          <Icon name="heart" size={25} color="#fff" />
        </Box>
      </Swipeable>
    </Box>
  );
};

DogCard.Skeleton = () => <Skeleton w="45%" h={200} m={5} />;

DogCard.defaultProps = {
  data: {},
  onPress: (f) => f,
};

export default DogCard;
