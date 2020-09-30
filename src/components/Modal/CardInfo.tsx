import call from '@/utils/call';
import { Box } from '@shyn123/rn-uikit';
import Text from '@UIkit/Text';
import React from 'react';
import { Avatar, Dialog, useTheme, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CardInfo = ({ data }) => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <Dialog.Content>
      <Box py={20} row align="center">
        <Avatar.Text size={60} label={data.name[0]} />
        <Box ml={10}>
          <Box row>
            <IconButton
              icon="information-outline"
              size={20}
              color={theme.colors.primary}
              onPress={() => navigate('AddContact')}
            />
            <Text mt={10}>Name: {data?.name}</Text>
          </Box>
          <Box row>
            <IconButton
              icon="phone-outline"
              size={20}
              color={theme.colors.primary}
              onPress={() => call(data?.phone)}
            />
            <Text mt={10}>Phone: {data?.phone}</Text>
          </Box>
          <Box row>
            <IconButton
              icon="email-outline"
              size={20}
              color={theme.colors.primary}
              onPress={() => call(data?.phoneNumber)}
            />
            <Text mt={10}>Email: {data?.email}</Text>
          </Box>
        </Box>
      </Box>
    </Dialog.Content>
  );
};

CardInfo.defaultProps = {
  data: {},
};

export default CardInfo;
