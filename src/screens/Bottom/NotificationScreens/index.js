import {Block, Button, Header, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import {width} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HeaderNotification from './components/HeaderNotification';
import Item from './components/Item';

const NotificationScreens = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data, totalPage} = useSelector(state => state.notification);
  const user = useSelector(state => state.tokenUser.data);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    user &&
      dispatch({
        type: actions.GET_NOTIFICATION,
        params: {user, p: 1, numshow: 12},
      });
  }, [dispatch, user]);

  const _loadMore = () => {
    if (page < totalPage) {
      setPage(page + 1);
      dispatch({
        type: actions.GET_NOTIFICATION,
        isLoadMore: true,
        params: {
          user,
          p: page + 1,
          numshow: 12,
        },
      });
    }
  };

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
    setPage(1);
    dispatch({
      type: actions.GET_NOTIFICATION,
      params: {
        user,
        p: 1,
        numshow: 12,
      },
    });
  };

  return (
    <Block flex>
      <Header title="Thông báo" />
      {user ? (
        <Block flex>
          <HeaderNotification />
          <Item
            data={data}
            onPress={() => navigation.navigate(routes.NOTIFICATION_DETAILS)}
            _onRefresh={_onRefresh}
            _loadMore={_loadMore}
            refreshing={refreshing}
          />
        </Block>
      ) : (
        <Block flex alignCenter justifyCenter>
          <Text>Vui lòng đăng nhập để nhận thông báo</Text>
          <Button
            title="ĐĂNG NHẬP NGAY"
            style={{width: width * 0.8}}
            onPress={() => navigation.navigate(routes.PROFILE_SCREENS)}
          />
        </Block>
      )}
    </Block>
  );
};

export default NotificationScreens;
