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
  borderBottomWidth?: number;
  borderBottomColor?: string;
  // @ts-ignore
  as?: any;
}

const Box: FC<BoxProps> = ({
  circle,
  style,
  children,
  bg,
  borderBottomColor,
  borderBottomWidth,
  as = View,
  ...props
}) => {
  const blockStyles = [
    [...styleSpace(props)],
    [...styleFlexBox(props)],
    [...styleShadow(props)],
    bg && { backgroundColor: bg },
    borderBottomColor && { borderBottomColor: borderBottomColor },
    borderBottomWidth && { borderBottomWidth: borderBottomWidth },
    circle && styles.circle,
    style,
  ];
  return React.createElement(
    as,
    {
      style: blockStyles,
      ...props,
    },
    children,
  );
};

export default Box;
