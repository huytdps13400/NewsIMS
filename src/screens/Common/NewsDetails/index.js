import {Block, Header, WebView} from '@components';
import actions from '@redux/actions';
import {getSize} from '@utils/responsive';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const NewsDetails = ({route}) => {
  const dispatch = useDispatch();
  const {item_id} = route.params;
  const data = useSelector(state => state.newsdetails?.data);

  useEffect(() => {
    dispatch({
      type: actions.GET_NEWSDETAILS,
      params: {
        item_id: item_id,
        p: 1,
        numshow: 12,
      },
    });
  }, [dispatch, item_id]);

  return (
    <Block flex backgroundColor="white">
      <Header canGoBack title="Chi tiết tin tức" />
      <WebView style={{padding: getSize.m(12)}} data={data?.content} />
    </Block>
  );
};

export default NewsDetails;
