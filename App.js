import * as React from 'react';
import {Text, View} from 'react-native';
import {
  NavigationContainer,
  NavigationNativeContainer,
} from '@react-navigation/native';
import StackNavigation from './src/Screens/Navigation/StackNavigation/stackNavigation'



export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}
