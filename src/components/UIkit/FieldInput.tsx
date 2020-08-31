/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, HelperText } from 'react-native-paper';
import { styleSpace } from './helpers';
import { TextInputProps, View } from 'react-native';

interface FieldInputProps extends StyleSpaceProps, TextInputProps {
  form: any;
  name: string;
  label: string;
  mode?: 'flat' | 'outlined' | undefined;
  placeholder?: string;
  rules?: any;
  bg?: string | undefined;
  disabled?: boolean | undefined;
  required?: boolean | undefined;
}

const FieldInput: FC<FieldInputProps> = ({
  form,
  name,
  label,
  mode,
  placeholder,
  rules,
  disabled,
  bg,
  required,
  style,
  ...props
}) => {
  const blockStyles = [bg && { backgroundColor: bg }, style];
  return (
    <View style={[[...styleSpace(props)]]}>
      <Controller
        name={name}
        control={form.control}
        rules={{
          required: required && `${label} is required`,
          ...rules,
        }}
        render={(inputProps) => {
          return (
            <TextInput
              {...(inputProps, props)}
              style={blockStyles}
              error={form.errors[name]}
              label={label}
              mode={mode}
              onChangeText={(value) => inputProps.onChange(value)}
              placeholder={placeholder}
              disabled={disabled}
            />
          );
        }}
      />
      {form.errors[name] && (
        // @ts-ignore
        <HelperText style={{ color: 'red' }}>
          {form.errors[name]?.message}
        </HelperText>
      )}
    </View>
  );
};

export default FieldInput;
