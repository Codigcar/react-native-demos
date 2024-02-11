import {
  BoxProps,
  backgroundColor,
  backgroundColorShorthand,
  border,
  composeRestyleFunctions,
  layout,
  opacity,
  position,
  shadow,
  spacing,
  spacingShorthand,
  useRestyle,
  visible,
} from '@shopify/restyle';

import type {Theme} from '../../theme';
import { View } from 'react-native';

const box = composeRestyleFunctions([
  backgroundColor,
  backgroundColorShorthand,
  border,
  layout,
  opacity,
  position,
  shadow,
  spacing,
  spacingShorthand,
  visible,
  spacing,
]);

type Props = {as: React.ComponentType<any>} & BoxProps<Theme>;

const Base: React.FC<Props> = ({as: Component, ...rest}) => {
  const restyle = useRestyle(box as any, rest);
  return <Component {...restyle} />;
};

export default Base;

//**** */

// import {TouchableOpacity, View} from 'react-native';
// import {
//   useRestyle,
//   spacing,
//   border,
//   backgroundColor,
//   SpacingProps,
//   BorderProps,
//   BackgroundColorProps,
// } from '@shopify/restyle';
// import {Theme} from '../../theme';

// const restyleFunctions = [spacing, border, backgroundColor];
// type Props = SpacingProps<Theme> &
//   BorderProps<Theme> &
//   BackgroundColorProps<Theme> & {
//     onPress: () => void;
//   };

// const Button = ({onPress, ...rest}: Props) => {
//   const props = useRestyle(restyleFunctions, rest);

//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View {...props}></View>
//     </TouchableOpacity>
//   );
// };
