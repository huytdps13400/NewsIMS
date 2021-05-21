import { Block, Header, WebView } from '@components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@redux/actions';
import { getSize } from '@utils/responsive';


const NewsDetails = ({ route }) => {

  const dispatch = useDispatch();
  const item_id = route.params.item_id;
  const data = useSelector(state => state.newsdetails.data);


  useEffect(() => {
    dispatch({
      type: actions.GET_NEWSDETAILS,
      params: {
        item_id
      },
    });
  }, [dispatch]);
  return (
    <Block flex backgroundColor={'#fff'}>
      <Header title="Chi tiết tin tức" cangoBack />
      <WebView
        style={{ padding: getSize.m(12) }}
        data={data.content}
      />
    </Block>
  );
};

export default NewsDetails;
