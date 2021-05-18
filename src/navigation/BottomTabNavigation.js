import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import {bottom} from '../screens/Bottom';
import CustomTabBar from './CustomTabBar';
import {auth} from '@screens/Auth';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOMESCREENS}
        component={bottom.HOMESCREENS}
        options={{
          tabBarLabel: 'Tin của bạn',
        }}
      />
      <Tab.Screen
        name={routes.TENDENCYSCREENS}
        component={bottom.TENDENCYSCREENS}
        options={{
          tabBarLabel: 'Xu hướng',
        }}
      />
      <Tab.Screen
        name={routes.DISCOVERSCREENS}
        component={bottom.DISCOVERSCREENS}
        options={{
          tabBarLabel: 'Khám phá',
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATIONSCREENS}
        component={bottom.NOTIFICATIONSCREENS}
        options={{
          tabBarLabel: 'Thông báo',
        }}
      />

      {/* {true ? ( */}
      {/* <Tab.Screen
        name={routes.PROFILESCREENS}
        component={bottom.PROFILESCREENS}
        options={{
          tabBarLabel: 'Tài khoản',
        }}
      /> */}
      {/* ) : ( */}
      <Tab.Screen
        name={routes.PROFILESCREENS}
        component={auth.AUTH_CONTAINER}
        options={{tabBarLabel: 'Tài khoản'}}
      />
      {/* )} */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
