import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';


import {
  LOADING_PAGE,
  LOGIN,
  HOME,
  RESULTS,
  PROFILE,
} from '../consts';

import Login  from '../views/Login'
import Home from '../views/Home'
import LoadingPage from '../views/LoadingPage'
import Results from '../views/Results'
import Profile from  '../views/Profile'


export const RootStack = ():JSX.Element => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoadingPage"
        headerMode="none">
        <Stack.Screen
          name={LOADING_PAGE}
          component={LoadingPage}
        />

        <Stack.Screen
          name={LOGIN}
          component={Login}
        />

        <Stack.Screen
          name={HOME}
          component={Home}
        />

        <Stack.Screen
          name={RESULTS}
          component={Results}
        />

        <Stack.Screen
          name={PROFILE}
          component={Profile}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
};
