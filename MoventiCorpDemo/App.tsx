/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import theme from './src/theme';
import View from './src/components/box/View';
import CustomInput from './src/components/input/Input';

const App = () => (
  <ThemeProvider theme={theme}>
    {
      <View flex={1} backgroundColor="white">
        <View height={20} />
        <CustomInput
          // onChangeText={setEmail}
        />
      </View>
    }
  </ThemeProvider>
);

export default App;
