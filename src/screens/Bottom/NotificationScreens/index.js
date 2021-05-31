import {lottie} from '@assets';
import {Block, Button, Header, LoadMore, Text} from '@components';
import {NotificationHolder} from '@components/PlaceHolder';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import Empty from '@screens/Common/Empty';
import {width} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const NotificationDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data, totalPage, isLoading} = useSelector(state => state.notification);
  const user = useSelector(state => state.tokenUser.data);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const config = useSelector(state => state.config.data);

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
      dispatch({
        type: actions.GET_TOTAL_NOTIFICATION,
        params: {
          user,
          type: 'reading',
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

  const _onPress = item => {
    dispatch({
      type: actions.UPDATE_NOTIFICATION,
      body: {
        item_id: item?.item_id,
      },
      params: {
        user,
        act: 'readed',
      },
    });
    dispatch({
      type: actions.CHANGE_STATUS_NOTIFICATION,
      item_id: item?.item_id,
    });
    navigation.navigate(routes.NOTIFICATION_DETAILS, {
      item_id: item?.item_id,
      date_create: item?.date_create,
      picture: item?.picture,
      short: item?.short,
      title: item?.title,
      content: item?.content,
    });
  };

  const _renderItem = ({item}) => {
    const isReading = item.status === 'reading';
    return (
      <Pressable
        style={styles.container(isReading, config)}
        onPress={() => _onPress(item)}>
        <Block row alignCenter padding={20} space="between">
          <Block width={'70%'} marginRight={20}>
            <Text size={17} numberOfLines={2} fontType="semibold">
              {item.title}
            </Text>
            <Text marginTop={14} size={13}>
              {item.date_create}
            </Text>
          </Block>
          <Block>
            <Image
              source={{
                uri: item.picture
                  ? item.picture
                  : 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={styles.image}
            />
          </Block>
        </Block>
      </Pressable>
    );
  };

  const _renderEmpty = () => (
    <Empty
      lottie={lottie.bell}
      imageStyles={styles.icon}
      content={'Chưa có thông báo nào'}
    />
  );

  return (
    <Block flex>
      <Header title="Thông báo" />
      {user ? (
        <Block flex>
          {/* <HeaderNotification /> */}

          {isLoading && !data && <NotificationHolder />}
          {!isLoading && !data?.length ? (
            _renderEmpty()
          ) : (
            <Block flex>
              <FlatList
                renderItem={_renderItem}
                data={data}
                removeClippedSubviews={true}
                onRefresh={_onRefresh}
                onEndReached={_loadMore}
                refreshing={refreshing}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item.item_id}
              />
              {isLoading && page > 1 && <LoadMore />}
            </Block>
          )}
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

export default NotificationDetails;
