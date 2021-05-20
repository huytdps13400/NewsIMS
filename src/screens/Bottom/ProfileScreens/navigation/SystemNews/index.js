import {Block, Header} from '@components';
import ItemNews from '@components/Common/itemNews';
import {getSize} from '@utils/responsive';
import React from 'react';
import {FlatList} from 'react-native';
const SystemNews = () => {
  const _renderItem = () => {
    return <ItemNews />;
  };
  return (
    <Block flex marginBottom={getSize.m(20)}>
      <Header title="Tin hệ thống" cangoBack />
      <Block flex paddingHorizontal={getSize.m(12)}>
        <FlatList
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={_renderItem}
          keyExtractor={item => item}
        />
      </Block>
    </Block>
  );
};

export default SystemNews;