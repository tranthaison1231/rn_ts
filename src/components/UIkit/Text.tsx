import React, { FC } from 'react';
import { Text as RnText, TextProps } from 'react-native';
import {
  styleFlexBox,
  StyleFlexBoxProps,
  styles,
  styleSpace,
  StyleSpaceProps,
} from './helpers';
interface TextProps extends StyleSpaceProps, StyleFlexBoxProps, TextProps {
  bg?: string;
  color?: string;
}

const Text: FC<TextProps> = ({
  color,
  style,
  bold,
  children,
  ...props
}: TextProps) => {
  const blockStyles = [
    [...styleSpace(props)],
    [...styleFlexBox(props)],
    bold && styles.bold,
    color && { color: color },
    style,
  ];
  return (
    <RnText style={blockStyles} {...props}>
      {children}
    </RnText>
  );
};

export default Text;
