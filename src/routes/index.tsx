import React from 'react';
import { createStackNavigator} from '@react-navigation/stack'

import Login from '../views/Login/'
import  Home from '../views/Home'
import LoadingPage from '../views/LoadingPage'
import Results from '../views/Results'
import Profile from  '../views/Profile'



export const RootStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName="LoadingPage"
      headerMode="none">
      <Stack.Screen
        name="LoadingPage"
        component={LoadingPage}
        />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="Results"
        component={Results}
      />
    </Stack.Navigator>
  )
};
