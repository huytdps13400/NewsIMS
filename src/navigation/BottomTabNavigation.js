import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {auth} from '@screens/Auth';
import React from 'react';
import {useSelector} from 'react-redux';
import {bottom} from '../screens/Bottom';
import CustomTabBar from './CustomTabBar';
import {routes} from './routes';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const user = useSelector(state => state.tokenUser.data);

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

      {user ? (
        <Tab.Screen
          name={routes.PROFILESCREENS}
          component={bottom.PROFILESCREENS}
          options={{
            tabBarLabel: 'Tài khoản',
          }}
        />
      ) : (
        <Tab.Screen
          name={routes.PROFILESCREENS}
          component={auth.AUTH_CONTAINER}
          options={{tabBarLabel: 'Tài khoản'}}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
