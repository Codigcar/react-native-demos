import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {ActivityIndicator} from 'react-native';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: ['peoplesapp://'],
    config: {
      initialRouteName: 'Home',
      screens: {
        Home: {path: 'home'},
        Details: {path: 'details/:personId'},
      },
    },
  };

  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
