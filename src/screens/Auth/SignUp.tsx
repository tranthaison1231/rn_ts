import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Box, Text, FieldInput, Button } from '@shyn123/rn-uikit';
import { useForm } from 'react-hook-form';
import { validateRegex } from '@/utils/validateUtils';

const SingUp = () => {
  const form = useForm({
    defaultValues: {
      email: null,
      password: null,
    },
  });
  const { navigate } = useNavigation();

  const submit = (value) => {
    console.log(value);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <Icon name="chevron-left" size={40} color="#222" />
      </TouchableOpacity>
      <Box mx={10}>
        <Text mt={50} bold size={34} color="#222">
          Login
        </Text>
        <Box mt={73}>
          <FieldInput
            form={form}
            name="email"
            mb={20}
            label="Email"
            bg="#fff"
            required
            rules={{
              pattern: {
                value: validateRegex.email,
                message: 'Email is not valid',
              },
            }}
          />
          <FieldInput
            form={form}
            name="password"
            label="Password"
            bg="#fff"
            secureTextEntry
            required
          />
          <TouchableOpacity>
            <Text txtAlign="right" mt={14}>
              Forgot your password?
              <Icon name="arrow-right" size={16} color="#DB3022" />
            </Text>
          </TouchableOpacity>
          <Button
            mode="contained"
            onPress={form.handleSubmit(submit)}
            mt={32}
            h={48}
            borderRadius={25}
            shadow={5}
          >
            Login
          </Button>
        </Box>
        <Box mt={194} align="center">
          <Text>Or login with social account</Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default SingUp;
