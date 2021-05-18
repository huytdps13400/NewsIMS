import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';

const itemNews = React.memo(() => {
  return (
    <Block marginTop={getSize.m(18)}>
      <Block row>
        <Image
          source={{
            uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
          }}
          style={{
            height: getSize.s(83),
            width: getSize.s(83),
            borderRadius: 5,
          }}
        />
        <Block flex marginLeft={getSize.m(15)}>
          <Text marginTop={getSize.m(2)}>
            Động thái trái ngược của Sơn Tùng và Thiều Bảo Trâm giữa drama
          </Text>
          <Text marginTop={getSize.m(20)} color={theme.colors.lightGray}>
            Giới trẻ
          </Text>
        </Block>
      </Block>
      <Block backgroundColor={theme.colors.smoke} height={1} marginTop={12} />
    </Block>
  );
});

export default itemNews;
