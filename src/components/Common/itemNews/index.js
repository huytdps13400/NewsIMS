import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const itemNews = React.memo(() => {
  const navigation = useNavigation();
  return (
    <Block marginTop={getSize.m(18)}>
      <Pressable onPress={() => navigation.navigate(routes.NEWSDETAILS)}>
        <Block row>
          <Image
            source={{
              uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
            }}
            style={styles.styleimg}
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
      </Pressable>
      <Block backgroundColor={theme.colors.smoke} height={1} marginTop={12} />
    </Block>
  );
});

export default itemNews;
