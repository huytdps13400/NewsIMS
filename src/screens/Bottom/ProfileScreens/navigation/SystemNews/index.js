import {Block, Header} from '@components';
import ItemNews from '@components/Common/itemNews';
import actions from '@redux/actions';
import {getSize} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const SystemNews = () => {
  const data = useSelector(state => state.news?.data);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [, setPage] = useState(1);

  useEffect(() => {
    dispatch({type: actions.GET_NEWS, params: {p: 1, numshow: 12}});
  }, [dispatch]);

  const _renderItem = ({item}) => {
    return (
      <ItemNews
        item_id={item.item_id}
        picture={item.picture}
        date_update={item.date_update}
        title={item.title}
      />
    );
  };

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
    setPage(1);
    dispatch({
      type: actions.GET_NEWS,
      params: {
        p: 1,
        numshow: 12,
      },
    });
  };

  return (
    <Block flex marginBottom={getSize.m(20)}>
      <Header title="Tin hệ thống" canGoBack />
      <Block flex paddingHorizontal={getSize.m(12)}>
        <FlatList
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          data={data}
          renderItem={_renderItem}
          keyExtractor={item => item.item_id}
          refreshing={refreshing}
          onRefresh={_onRefresh}
        />
      </Block>
    </Block>
  );
};

export default SystemNews;
