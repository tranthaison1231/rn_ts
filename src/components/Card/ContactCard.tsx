import Box from '@UIkit/Box';
import Text from '@UIkit/Text';
import React from 'react';
import { Avatar, TouchableRipple } from 'react-native-paper';

const ContactCard = ({ data, onPress }) => {
  return (
    <TouchableRipple onPress={() => onPress(data.id)}>
      <Box align="center" m={5} p={30} shadow={2} bg="#fff">
        <Avatar.Text size={120} label={data.name[0]} />
        <Text mt={10} bold>
          {data.name}
        </Text>
        <Text mt={10}>{data.phone}</Text>
      </Box>
    </TouchableRipple>
  );
};

ContactCard.defaultProps = {
  data: {},
  onPress: (f) => f,
};

export default ContactCard;
