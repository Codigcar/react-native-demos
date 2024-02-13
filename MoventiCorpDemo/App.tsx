import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import theme from './src/theme';

import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/routes';
import LoginScreen from './src/screens/Login';

const RootStackScreen: React.FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Login" component={LoginScreen} />
    </RootStack.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
