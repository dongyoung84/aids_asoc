/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import Home from './src/screens/Home'
import Survey from './src/screens/Survey'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App: () => Node = () => {

  const MainNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                  headerShown: false,
                  // headerMode:"screen"
              }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Survey" component={Survey} />


            </Stack.Navigator>
        </NavigationContainer>

    );
}

  return (
        <MainNavigation />

  );
};


export default App;
