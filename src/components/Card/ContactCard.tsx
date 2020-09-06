import React from 'react';
import Box from '@UIkit/Box';
import { Avatar } from 'react-native-paper';
import Text from '@UIkit/Text';

const ContactCard = ({ data }) => {
  return (
    <Box align="center" m={10} p={30} shadow={2} bg="#fff">
      <Avatar.Text size={120} label={data.name[0]} />
      <Text mt={10} bold>
        {data.name}
      </Text>
      <Text mt={10}>{data.phoneNumber}</Text>
    </Box>
  );
};

export default ContactCard;
