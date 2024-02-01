import React, {useEffect, type PropsWithChildren} from 'react';
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
// import { DeviceEventEmitter } from 'react-native';

const App = () => {
  useEffect(() => {
    // DeviceEventEmitter.addListener('appStateChange', (isForeground) => {
    //   if (isForeground) {
    //     console.log('La aplicación está en primer plano');
    //   } else {
    //     console.log('La aplicación está en segundo plano');
    //   }
    // });
  
    return () => {
      
    }
  }, [])
  

  return (
    <>
      <Header />
    </>
  );
};

// export default withSecurityScreen(App);
export default App;
