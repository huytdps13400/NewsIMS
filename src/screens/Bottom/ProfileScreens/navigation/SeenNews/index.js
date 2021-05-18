import React from 'react';
import {Image, FlatList} from 'react-native';
import {Block, Text, Header} from '@components';
import ItemNews from '@components/Common/itemNews';

const SeenNews = () => {
  const _renderItem = item => <ItemNews />;
  return (
    <Block marginBottom={20} flex>
      <Header title="Tin đã xem" cangoBack />
      <Block paddingHorizontal={12} flex>
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(item, index) => index}
        />
      </Block>
    </Block>
  );
};

export default SeenNews;
