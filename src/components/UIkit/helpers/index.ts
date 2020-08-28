import { StyleSheet } from 'react-native';
import { parseShadow, androidDepth, interpolate } from './shadow';
import { Range } from '../../../utils/type';

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
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pl?: number | string;
  pb?: number | string;
  w?: number | string;
  h?: number | string;
}

export const styleSpace = ({
  m,
  mt,
  mr,
  ml,
  mb,
  p,
  pt,
  pr,
  pl,
  pb,
  w,
  h,
}: StyleSpaceProps) => [
  w && { width: w },
  h && { height: h },
  mt && { marginTop: mt },
  mr && { marginRight: mr },
  ml && { marginLeft: ml },
  mb && { marginBottom: mb },
  m && { margin: m },
  p && { padding: p },
  pt && { marginTop: pt },
  pr && { marginRight: pr },
  pl && { marginLeft: pl },
  pb && { marginBottom: pb },
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

export interface StyleFlexBoxProps {
  shadowColor?: string;
  boxShadow?: Range<1, 25>;
}

export const styleShadow = ({ shadowColor, boxShadow }: StyleFlexBoxProps) => {
  const styleObject: any = [shadowColor && { shadowColor: shadowColor }];

  if (boxShadow) {
    const depth = boxShadow - 1;
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
