/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import {StatusBar} from 'react-native';

function App() {
  const Stack = createStackNavigator();
  const navigationRef = createNavigationContainerRef();
  <StatusBar hidden={true} />;

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        {/* <SafeAreaView>
          <HomeScreen />
        </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
