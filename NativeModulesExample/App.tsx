/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';

import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

const App: React.FC = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <View>
      <Text>Hola como estas?</Text>
      <Button title="Click" color="#841584" onPress={onPress} />
    </View>
  );
};

export default App;
