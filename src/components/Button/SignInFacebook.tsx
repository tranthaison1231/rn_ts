import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, Gradient } from '@shyn123/rn-uikit';

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const SignInFacebook: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        px={15}
        borderRadius={5}
      >
        <Text m={10} color="#fff" bold>
          Sign in with Facebook
        </Text>
      </Gradient>
    </TouchableOpacity>
  );
};

export default SignInFacebook;
