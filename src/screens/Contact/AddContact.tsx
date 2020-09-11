import { validateRegex } from '@/utils/validateUtils';
import { useNavigation } from '@react-navigation/native';
import Box from '@UIkit/Box';
import Button from '@UIkit/Button';
import FieldInput from '@UIkit/FieldInput';
import Navbar from '@UIkit/Navbar';
import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { insertContact } from './slice';

const AddContact = () => {
  const form = useForm({
    defaultValues: {
      name: null,
      email: null,
      phone: null,
    },
  });

  const dispatch = useDispatch();
  const { goBack } = useNavigation();

  const submit = (value) => {
    dispatch(insertContact(value));
    goBack();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView>
        <Navbar />
        <Box mx={10} mt={30}>
          <FieldInput
            form={form}
            name="name"
            label="Name"
            mb={20}
            bg="#fff"
            required
          />
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
            name="phone"
            keyboardType="number-pad"
            label="Phone"
            bg="#fff"
            required
          />
          <Button mode="contained" onPress={goBack} mt={40} h={40}>
            Cancel
          </Button>
          <Button
            mode="contained"
            onPress={form.handleSubmit(submit)}
            mt={30}
            h={40}
          >
            Add
          </Button>
        </Box>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

AddContact.defaultProps = {};

export default AddContact;
