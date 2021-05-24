import { Block, Text } from '@components';
import React from 'react';
import { FlatList } from 'react-native';

const HotCategories = () => {
  const _renderItem = () => (
    <Block radius={12} padding={20} marginBottom={20} backgroundColor="white">
      <Text size={13} fontType="semibold" color={'#E95320'}>
        BTC MISS WORLD VIỆT NAM CHÍNH THỨC LÊN TIẾNG
      </Text>
      <Text marginTop={10}>
        Tường San tung bộ ảnh giới thiệu tại Miss International 2019
      </Text>
      <Block row justifyCenter marginTop={20} space="between">
        <Block row>
          <Text size={14} fontType="semibold" color={'#096CFF'}>
            Cập nhật
            <Text size={13} fontType={'regular'} color={'#096CFF'}>
              . Tin thế gới
            </Text>
          </Text>
        </Block>
        <Text size={14}>13 tin liên quan</Text>
      </Block>
    </Block>
  );

  return (
    <Block paddingTop={23} paddingHorizontal={12}>
      <Text size={19} fontType="semibold">
        Chủ đề nổi bật
      </Text>
      <Block marginTop={19}>
        <FlatList
          renderItem={_renderItem}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={(item, index) => index}
        />
      </Block>
    </Block>
  );
};

export default HotCategories;
