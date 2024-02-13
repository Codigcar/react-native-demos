import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import Toast from 'react-native-toast-message';

import theme from './src/theme';

import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/routes';
import LoginScreen from './src/screens/Login';
import {toastConfig} from './src/components/toast/Toast';

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
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
};

export default App;
