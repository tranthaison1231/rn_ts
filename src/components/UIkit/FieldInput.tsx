/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, HelperText } from 'react-native-paper';

const FieldInput = ({ form, name, label, mode, placeholder, rules }) => {
  return (
    <>
      <Controller
        name={name}
        control={form.control}
        rules={rules}
        render={(props) => (
          <TextInput
            {...props}
            error={form.errors[name]}
            label={label}
            mode={mode}
            onChangeText={(value) => props.onChange(value)}
            placeholder={placeholder}
          />
        )}
      />
      {form.errors[name] && (
        <HelperText style={{ color: 'red' }}>
          {form.errors[name]?.message}
        </HelperText>
      )}
    </>
  );
};

export default FieldInput;
