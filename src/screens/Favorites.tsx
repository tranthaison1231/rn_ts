import React from 'react';
import Text from '@UIkit/Text';
import Box from '@UIkit/Box';
import { FAB, Portal, Provider } from 'react-native-paper';

const Favorites = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
    <>
      <Box flex={1} justify="center" align="center">
        <Text>Favorites</Text>
      </Box>
      <FAB.Group
        open={open}
        icon={open ? 'calendar-today' : 'plus'}
        actions={[
          { icon: 'plus', onPress: () => console.log('Pressed add') },
          {
            icon: 'star',
            label: 'Star',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'email',
            label: 'Email',
            onPress: () => console.log('Pressed email'),
          },
          {
            icon: 'bell',
            label: 'Remind',
            onPress: () => console.log('Pressed notifications'),
          },
        ]}
        onStateChange={onStateChange}
      />
    </>
  );
};

export default Favorites;
