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
        name={routes.HOME_SCREENS}
        component={bottom.HOME_SCREENS}
        options={{
          tabBarLabel: 'Tin của bạn',
        }}
      />
      <Tab.Screen
        name={routes.TENDENCY_SCREENS}
        component={bottom.TENDENCY_SCREENS}
        options={{
          tabBarLabel: 'Xu hướng',
        }}
      />
      <Tab.Screen
        name={routes.DISCOVER_SCREENS}
        component={bottom.DISCOVER_SCREENS}
        options={{
          tabBarLabel: 'Khám phá',
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATION_SCREENS}
        component={bottom.NOTIFICATION_SCREENS}
        options={{
          tabBarLabel: 'Thông báo',
        }}
      />

      {user ? (
        <Tab.Screen
          name={routes.PROFILE_SCREENS}
          component={bottom.PROFILE_SCREENS}
          options={{
            tabBarLabel: 'Tài khoản',
          }}
        />
      ) : (
        <Tab.Screen
          name={routes.PROFILE_SCREENS}
          component={auth.AUTH_CONTAINER}
          options={{tabBarLabel: 'Tài khoản'}}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
