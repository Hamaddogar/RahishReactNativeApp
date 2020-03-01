import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../HomeScreen/HomeScreen';
import Login from '../../LoginScreen/loginScreen';
import Inbox from '../../InboxScreen/inboxScreen';
import Saved from '../../SavedScreen/SavedScreen';
import Trips from '../../TripsScreen/tripsScreen';
import Expoler from '../../ExpolerScreen/ExpolerScreen';

import Icon from 'react-native-ionicons';

const Tab = createBottomTabNavigator();

export default TabScreen = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color,size}) => {
        

        if (route.name === 'Home') {
          return <Icon ios="ios-home" android="md-home" />;
        }
         
        else if (route.name === 'Expoler') {
         return <Icon ios="ios-search" android="md-search" />;
       }
         else if (route.name === 'Saved') {
          return <Icon ios="ios-heart" android="md-heart" />;
        } else if (route.name === 'Inbox') {
          return <Icon ios="ios-chatbubbles" android="md-chatbubbles" />;
        }
        
        else if (route.name === 'Login') {
          return <Icon ios="ios-add" android="md-person" />;
        }
        else {
          return;
          <Icon ios="ios-add" android="md-add" />;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#DA592F',
      inactiveTintColor: 'gray',
     
    }}>
    <Tab.Screen name="Home" component={Home} />

    <Tab.Screen name="Expoler" component={Expoler} />
    <Tab.Screen name="Saved" component={Saved} />
    <Tab.Screen name="Inbox" component={Inbox} />

    {/* 
    {/* <Tab.Screen name="Trips" component={Trips} /> */}
    <Tab.Screen name="Login" component={Login} />
  </Tab.Navigator>
);
