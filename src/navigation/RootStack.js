import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import {navigate} from './RootNavigation';
import {bottom} from '../screens/Bottom';
import {auth} from '../screens/Auth';
import {routes} from './routes';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer ref={navigate}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        mode="modal"
        initialRouteName={routes.BOTTOM_TAB_BAR}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routes.BOTTOM_TAB_BAR}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name={routes.PROFILE_DETAILS}
          component={bottom.PROFILE_DETAILS}
        />
        <Stack.Screen
          name={routes.ALL_NEWS_SCREEN}
          component={bottom.ALL_NEWS_SCREEN}
        />
        <Stack.Screen
          name={routes.SYSTEM_NEWS}
          component={bottom.SYSTEM_NEWS}
        />
        <Stack.Screen
          name={routes.NEWS_DETAILS}
          component={bottom.NEWS_DETAILS}
        />
        <Stack.Screen
          name={routes.LOGIN_SCREEN}
          component={auth.LOGIN_SCREEN}
        />
        <Stack.Screen
          name={routes.SIGNUP_SCREEN}
          component={auth.SIGNUP_SCREEN}
        />
        <Stack.Screen
          name={routes.FOR_GET_PASS_SCREEN}
          component={auth.FOR_GET_PASS_SCREEN}
        />
        <Stack.Screen
          name={routes.POPULAR_NEWS}
          component={bottom.POPULAR_NEWS}
        />
        <Stack.Screen
          name={routes.TERMS_OF_USE}
          component={bottom.TERMS_OF_USE}
        />
        <Stack.Screen
          name={routes.NOTIFICATION_DETAILS}
          component={bottom.NOTIFICATION_DETAILS}
        />
        <Stack.Screen
          name={routes.WATCHED_NEWS}
          component={bottom.WATCHED_NEWS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
