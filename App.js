import React, {useState,useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Profile from './component/UserProfile'
import Login from '../EmpTimeSheet/component/Login'

// Navigation
const Stack = createStackNavigator();

export default  function EmpTimesheet () { 

 const header = { 
 headerStyle: {
   backgroundColor: '#FA6152',
 },
 headerTintColor: '#fff',
 }
    return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Login" component={Login} options={header}/>
            <Stack.Screen name="Profile" component={Profile} options={header} />
            </Stack.Navigator>
          </NavigationContainer>
    );  
}
