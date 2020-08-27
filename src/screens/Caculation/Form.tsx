/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';
import FieldInput from '../../components/UIkit/FieldInput';
import Text from '../../components/UIkit/Text';
import { validateRegex } from '../../utils/validateUtils';

const Form = ({ onSubmit }) => {
  const form = useForm({
    defaultValues: {
      a: '',
      b: '',
      c: '',
    },
  });

  return (
    <>
      <Text size={30} bold txtAlign="center" mb={30}>
        Caculation
      </Text>
      <FieldInput
        name="a"
        form={form}
        label="Nhập a"
        rules={{
          required: {
            value: true,
            message: 'A is required',
          },
          pattern: {
            value: validateRegex.floatNumber,
            message: 'A is not valid',
          },
        }}
        placeholder="Nhập b"
      />
      <FieldInput
        name="b"
        form={form}
        label="Nhập b"
        rules={{
          required: {
            value: true,
            message: 'B is required',
          },
          pattern: {
            value: validateRegex.floatNumber,
            message: 'B is not valid',
          },
        }}
        placeholder="Nhập b"
      />
      <FieldInput
        name="c"
        form={form}
        label="Nhập c"
        rules={{
          required: {
            value: true,
            message: 'C is required',
          },
          pattern: {
            value: validateRegex.floatNumber,
            message: 'C is not valid',
          },
        }}
        placeholder="Nhập c"
      />
      <Button
        mode="contained"
        onPress={form.handleSubmit(onSubmit)}
        style={{ marginTop: 30 }}
      >
        Submit
      </Button>
    </>
  );
};

export default Form;
