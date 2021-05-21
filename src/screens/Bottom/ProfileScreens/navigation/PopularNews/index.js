import React, { useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { Block, Text, Header } from '@components';
import ItemNews from '@components/Common/itemNews';
import actions from '@redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const PopularNews = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.news);


  useEffect(() => {
    dispatch({
      type: actions.GET_NEWS,
      params: {
        p: 1,
        numshow: 12,
      },
    });
  }, [dispatch]);
  const _renderItem = ({ item }) => <ItemNews
    item_id={item.item_id}
    title={item.title}
    picture={item.picture}
    date_update={item.date_update}
  />;
  return (
    <Block marginBottom={20} flex>
      <Header title="Tin đọc nhiều" cangoBack />
      <Block paddingHorizontal={12} flex>
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          data={data}
          keyExtractor={(item) => item.item_id}
        />
      </Block>
    </Block>
  );
};

export default PopularNews;
