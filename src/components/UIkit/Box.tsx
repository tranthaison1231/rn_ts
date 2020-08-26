import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import {
  styleFlexBox,
  StyleFlexBoxProps,
  styles,
  styleSpace,
  StyleSpaceProps,
  styleShadow,
} from './helpers';

interface BoxProps extends StyleSpaceProps, StyleFlexBoxProps, ViewProps {
  circle?: boolean;
  bg?: string;
}

const Box: FC<BoxProps> = ({ circle, style, children, bg, ...props }) => {
  const blockStyles = [
    [...styleSpace(props)],
    [...styleFlexBox(props)],
    [...styleShadow(props)],
    bg && { backgroundColor: bg },
    circle && styles.circle,
    style,
  ];
  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};

export default Box;
