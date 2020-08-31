import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import {
  styleFlexBox,
  StyleFlexBoxProps,
  styles,
  styleSpace,
  StyleSpaceProps,
  styleShadow,
  styleSize,
  styleBorder,
} from './helpers';

interface BoxProps
  extends StyleSpaceProps,
    StyleFlexBoxProps,
    StyleSizeProps,
    StyleBorderProps,
    StyleShadowProps,
    ViewProps {
  circle?: boolean;
  bg?: string;
  // @ts-ignore
  as?: any;
}

const Box: FC<BoxProps> = ({ circle, style, bg, as = View, ...props }) => {
  const blockStyles = [
    [...styleSpace(props)],
    [...styleFlexBox(props)],
    [...styleShadow(props)],
    [...styleSize(props)],
    [...styleBorder(props)],
    bg && { backgroundColor: bg },
    circle && styles.circle,
    style,
  ];
  return React.createElement(
    as,
    {
      style: blockStyles,
      ...props,
    },
    props.children,
  );
};

export default Box;
