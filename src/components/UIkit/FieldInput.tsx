/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, HelperText } from 'react-native-paper';

interface FieldInputProps {
  form: any;
  name: string;
  label: string;
  mode?: 'flat' | 'outlined' | undefined;
  placeholder?: string;
  rules?: any;
  disabled?: boolean | undefined;
}

const FieldInput: FC<FieldInputProps> = ({
  form,
  name,
  label,
  mode,
  placeholder,
  rules,
  disabled,
}) => {
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
            disabled={disabled}
          />
        )}
      />
      {form.errors[name] && (
        // @ts-ignore
        <HelperText style={{ color: 'red' }}>
          {form.errors[name]?.message}
        </HelperText>
      )}
    </>
  );
};

export default FieldInput;
