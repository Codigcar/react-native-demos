import React from 'react';
import {TextProps as RNTextProps} from 'react-native';

import Text, {TextProps2, autoLineHeight} from './Text';
import type {TextProps} from '../../theme';

type Props = Omit<TextProps, 'fontFamily'>;

// const Paragraph: React.FC<Props & RNTextProps> = props => {
const Paragraph: React.FC<TextProps2> = props => {
  //   const {fontSize = 'base', lineHeight, ...rest} = props;
  return (
    <Text
      variant="body"
      //   fontFamily="bodt"
      //   fontSize={fontSize}
      //   lineHeight={lineHeight || autoLineHeight(fontSize)}
      // lineHeight="5"
      //   {...rest}
      {...props}
    />
  );
};

export default Paragraph;
