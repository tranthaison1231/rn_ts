import { StyleSheet } from 'react-native';
import { parseShadow, androidDepth, interpolate } from './shadow';
import { Range } from '@/utils/type';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  circle: {
    borderRadius: 50,
  },
  bold: { fontWeight: 'bold' },
});

export interface StyleSpaceProps {
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  ml?: number | string;
  mb?: number | string;
  my?: number | string;
  mx?: number | string;
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pl?: number | string;
  pb?: number | string;
}

export const styleSpace = ({
  m,
  mt,
  mr,
  ml,
  mb,
  my,
  mx,
  p,
  pt,
  pr,
  pl,
  pb,
}: StyleSpaceProps) => [
  mt && { marginTop: mt },
  mr && { marginRight: mr },
  ml && { marginLeft: ml },
  mb && { marginBottom: mb },
  my && { marginVertical: my },
  mx && { marginHorizontal: mx },
  m && { margin: m },
  p && { padding: p },
  pt && { marginTop: pt },
  pr && { marginRight: pr },
  pl && { marginLeft: pl },
  pb && { marginBottom: pb },
];

export interface StyleSizeProps {
  w?: number | string;
  h?: number | string;
}

export const styleSize = ({ w, h }: StyleProps) => [
  w && { width: w },
  h && { height: h },
];

export interface StyleBorderProps {
  borderBottomWidth?: number;
  borderBottomColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderLeftWidth?: number;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
  borderRadius?: number;
}

export const styleBorder = ({
  borderWidth,
  borderColor,
  borderLeftWidth,
  borderBottomColor,
  borderBottomWidth,
  borderBottomRightRadius,
  borderTopRightRadius,
  borderRadius,
}: StyleBorderProps) => [
  borderBottomColor && { borderBottomColor: borderBottomColor },
  borderBottomWidth && { borderBottomWidth: borderBottomWidth },
  borderLeftWidth && { borderLeftWidth: borderLeftWidth },
  borderTopRightRadius && { borderTopRightRadius: borderTopRightRadius },
  borderBottomRightRadius && {
    borderBottomRightRadius: borderBottomRightRadius,
  },
  borderColor && { borderColor: borderColor },
  borderWidth && { borderWidth: borderWidth },
  borderRadius && { borderRadius: borderRadius },
];

export interface StyleFlexBoxProps {
  flex?: number;
  row?: boolean;
  column?: boolean;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  space?: number;
}

export const styleFlexBox = ({
  flex,
  row,
  column,
  justify,
  align,
  space,
}: StyleFlexBoxProps) => [
  flex && { flex: flex },
  justify && { justifyContent: justify },
  align && { alignItems: align },
  row && styles.row,
  column && styles.column,
  space && { justifyContent: `space-${space}` },
];

export interface StyleShadowProps {
  shadowColor?: string;
  shadow?: Range<1, 25>;
}

export const styleShadow = ({ shadowColor, shadow }: StyleShadowProps) => {
  const styleObject: any = [shadowColor && { shadowColor: shadowColor }];

  if (shadow) {
    const depth = shadow - 1;
    const s = parseShadow(androidDepth.penumbra[depth]);
    const y = s.y === 1 ? 1 : Math.floor(s.y * 0.5);
    styleObject.push({
      shadowOffset: {
        width: 0,
        height: y,
      },
      shadowOpacity: +interpolate(depth, 1, 24, 0.2, 0.6).toFixed(2),
      shadowRadius: +interpolate(s.blur, 1, 38, 1, 16).toFixed(2),
      elevation: depth + 1,
    });
  }
  return styleObject;
};
