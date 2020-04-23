import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import {
  LOADING_PAGE,
  LOGIN,
  HOME,
  RESULTS,
  PROFILE,
} from '../constants';
import  Login from '~Views/Login'
import { Home } from '~Views/Home'
import LoadingPage from '~Views/LoadingPage'
import Results from '~Views/Results'
import { Profile } from '~Views/Profile'

export const RootStack = ():JSX.Element => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={LOADING_PAGE}
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
