import { createText, useRestyle } from '@shopify/restyle';
import { Text as RNText, TextProps as RNTextProps } from 'react-native'

import type {TextProps, Theme} from '../../theme';
import theme from '../../theme';
import { text } from '../../theme/customRestyleFunctions';

export function autoLineHeight(
  fontSize?: TextProps['fontSize'],
): TextProps['lineHeight'] {
  if (!fontSize) return undefined;
  switch (fontSize) {
    case 'xxs':
      return '3';
    case 'xs':
      return '4';
    case 'sm':
      return '5';
    case 'base':
      return '6';
    case 'lg':
    case 'xl':
      return '7';
    case '2xl':
      return '8';
    case '3xl':
      return '9';
    case '4xl':
      return '10';
    default:
      return undefined;
  }
}

function getFontFamilyByWeight(
    fontFamily: TextProps['fontFamily'],
    fontWeight: TextProps['fontWeight'],
  ): string {
    const fontName = theme.fontFamily[fontFamily ?? 'body']
    if (fontFamily === 'display') return fontName
  
    // switch (fontWeight) {
    //   case 'light':
    //     return `${fontName}-Light`
    //   case 'medium':
    //     return `${fontName}-Medium`
    //   case 'bold':
    //     return `${fontName}-Bold`
    //   case 'black':
    //     return `${fontName}-Black`
    //   default:
    //     return `${fontName}-Regular`
    // }
    return fontName
  }

const TextBase = createText<Theme>();
// export interface TextProps extends React.ComponentProps<typeof TextBase>
export interface TextProps2 extends React.ComponentProps<typeof TextBase> {}

// const Text: React.FC<RNTextProps & TextProps> = (props) => {
const Text: React.FC<TextProps2> = (props) => {
    // const { fontFamily, fontWeight, style } = props
    // const fontName = getFontFamilyByWeight(fontFamily, fontWeight)
    // const styles = Object.assign({ fontFamily: fontName }, style)
  
    // const restyle = useRestyle(text as any, { ...props, style: styles })
    // const restyle = useRestyle(text as any, props)
    // return <RNText {...restyle} />
    return <TextBase {...props} />
    // return <RNText>Hola</RNText>
}

export default Text