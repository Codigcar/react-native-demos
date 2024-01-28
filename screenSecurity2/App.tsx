import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {withSecurityScreen} from './src/hooks/security';

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default withSecurityScreen(App);
