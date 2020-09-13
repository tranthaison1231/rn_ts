import Box from '@UIkit/Box';
import Text from '@UIkit/Text';
import React from 'react';
import { Avatar, Card } from 'react-native-paper';

const ContactCard = ({ data, onPress }) => {
  return (
    <Box as={Card} onPress={() => onPress(data.id)} m={5} p={30}>
      <Box align="center" bg="#fff">
        <Avatar.Text size={100} label={data.name[0]} />
        <Text mt={10} bold>
          {data.name}
        </Text>
        <Text mt={10}>{data.phone}</Text>
      </Box>
    </Box>
  );
};

ContactCard.defaultProps = {
  data: {},
  onPress: (f) => f,
};

export default ContactCard;
