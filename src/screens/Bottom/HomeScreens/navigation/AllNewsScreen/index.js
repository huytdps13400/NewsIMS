import {Block, Header, Text} from '@components';
import React from 'react';
import {FlatList} from 'react-native';
import ItemNews from '@components/Common/itemNews';
import {getSize} from '@utils/responsive';
const AllNewsScreen = () => {
  const _renderItem = () => {
    return <ItemNews />;
  };
  return (
    <Block flex marginBottom={getSize.m(20)}>
      <Header title="Tin thế giới" cangoBack />
      <FlatList
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        style={{paddingHorizontal: getSize.m(12)}}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={_renderItem}
        keyExtractor={item => item}
      />
    </Block>
  );
};

export default AllNewsScreen;
