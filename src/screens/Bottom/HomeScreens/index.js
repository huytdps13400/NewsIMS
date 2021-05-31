import {Block, Header} from '@components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import actions from '@redux/actions';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TabScreens from './components/TabScreens';
import TopTabBar from './components/TabScreens/TabbarGroudNews';

const Tab = createMaterialTopTabNavigator();

const HomeScreens = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.newsGroup.data);

  useEffect(() => {
    dispatch({type: actions.GET_NEWS_GROUP});
  }, [dispatch]);

  return (
    <Block flex>
      <Header type="Home" />
      {data && (
        <Tab.Navigator
          lazy
          tabBar={props => <TopTabBar {...props} inactiveTintColor={'#000'} />}>
          {data.map((item, index) => {
            return (
              <Tab.Screen key={index} name={item?.title}>
                {() => <TabScreens index={index} group_id={item?.group_id} />}
              </Tab.Screen>
            );
          })}
        </Tab.Navigator>
      )}
    </Block>
  );
};

export default HomeScreens;
