import call from '@/utils/call';
import Box from '@UIkit/Box';
import Text from '@UIkit/Text';
import React from 'react';
import { Avatar, Dialog, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const CardInfo = ({ data }) => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <Dialog.Content>
      <Box py={20} row align="center">
        <Avatar.Text size={100} label={data.name[0]} />
        <Box ml={30}>
          <Text mt={10}>
            <Icon
              name="information-outline"
              size={20}
              color={theme.colors.primary}
              onPress={() => navigate('AddContact')}
            />{' '}
            Name: {data?.name}
          </Text>
          <Text mt={10}>
            <Icon
              name="phone-outline"
              size={20}
              color={theme.colors.primary}
              onPress={() => call(data?.phone)}
            />{' '}
            Phone: {data?.phone}
          </Text>
          <Text mt={10}>
            <Icon
              name="email-outline"
              size={20}
              color={theme.colors.primary}
              onPress={() => call(data?.phoneNumber)}
            />{' '}
            Email: {data?.email}
          </Text>
        </Box>
      </Box>
    </Dialog.Content>
  );
};

CardInfo.defaultProps = {
  data: {},
};

export default CardInfo;
