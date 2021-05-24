import {Block, Header} from '@components';
import ItemNews from '@components/Common/itemNews';
import actions from '@redux/actions';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const SeenNews = () => {
  const data = useSelector(state => state.news?.data);
  const dispatch = useDispatch();

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
  return (
    <Block marginBottom={20} flex>
      <Header title="Tin đã xem" canGoBack />
      <Block paddingHorizontal={12} flex>
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          data={data}
          keyExtractor={(item, index) => item.item_id}
        />
      </Block>
    </Block>
  );
};

export default SeenNews;
