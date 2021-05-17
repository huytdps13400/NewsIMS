import {Block, Header, Text} from '@components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopTabBar from './components/TabScreens/CustomTabbar';
import TabScreens from './components/TabScreens';
const Tab = createMaterialTopTabNavigator();
const HomeScreens = () => {
  const DATATAB = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Theo dõi',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Đề xuất',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Xã hội',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: 'Thế giới',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d82',
      title: 'Bóng đá việt nam',
    },
  ];
  return (
    <Block flex>
      <Header type="Home" />
      <Tab.Navigator
        lazy
        tabBar={props => <TopTabBar {...props} inactiveTintColor={'#000'} />}>
        {DATATAB.map(item => {
          return (
            <Tab.Screen name={item.title} key={item.id}>
              {() => <TabScreens />}
            </Tab.Screen>
          );
        })}
      </Tab.Navigator>
    </Block>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({});
