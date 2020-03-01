import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../../SignupScreen/SignUp';
import TabNavigation from '../TabNavigation/TabNavigation';
import Forgot from '../../ForgotScreen/forgot';
import Search from '../../../components/SearchBar/search';
import Icon from 'react-native-ionicons';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF0000',
      
      
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
   >
      <Stack.Screen
        name="Home"
    
        component={TabNavigation}
        options={{ headerShown: false }}
        // options={{
        //   headerTitle: props => <Search style={{paddingRight:20}} />,
        //   headerLeft: () => (
        //     <Icon ios="ios-add"  style={{paddingLeft:20}}android="md-menu" color="white" />
        //   ),
         
        // }}
        

      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  );
}

export default MyStack;
