import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Text from '@UIkit/Text';

const SingUp = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <Icon name="chevron-left" size={40} color="#222" />
      </TouchableOpacity>
      <Text mt={50} ml={10} bold size={34} color="#222">
        Sign Up
      </Text>
    </SafeAreaView>
  );
};

export default SingUp;
