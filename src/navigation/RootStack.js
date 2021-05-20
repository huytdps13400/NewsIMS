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
        initialRouteName={routes.BOTTOMTABBAR}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routes.BOTTOMTABBAR}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name={routes.PROFILEDETAILS}
          component={bottom.PROFILEDETAILS}
        />
        <Stack.Screen
          name={routes.ALLNEWSSCREEN}
          component={bottom.ALLNEWSSCREEN}
        />
        <Stack.Screen name={routes.SYSTEMNEWS} component={bottom.SYSTEMNEWS} />
        <Stack.Screen
          name={routes.NEWSDETAILS}
          component={bottom.NEWSDETAILS}
        />
        <Stack.Screen
          name={routes.LOGINSCREERN}
          component={auth.LOGINSCREERN}
        />
        <Stack.Screen
          name={routes.SIGNUPSCREEN}
          component={auth.SIGNUPSCREEN}
        />
        <Stack.Screen
          name={routes.POPULARNEWS}
          component={bottom.POPULARNEWS}
        />
        <Stack.Screen name={routes.TERMSOFUSE} component={bottom.TERMSOFUSE} />
        <Stack.Screen
          name={routes.NOTIFICATIONDETAILS}
          component={bottom.NOTIFICATIONDETAILS}
        />
        <Stack.Screen name={routes.SEENRNEWS} component={bottom.SEENNEWS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
