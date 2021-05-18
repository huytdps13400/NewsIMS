import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
const ItemVideo = ({style, title, describe}) => {
  return (
    <Block style={style}>
      <Image
        source={{
          uri: 'https://afamilycdn.com/150157425591193600/2021/5/14/1858744233416764740483076084533171245590379n-1620963401626946533494.jpg',
        }}
        style={styles.imgstyle}
      />
      <Pressable style={styles.btnstyles}>
        <Image
          source={icons.buttonplay}
          style={{
            width: getSize.s(50),
            height: getSize.s(36),
          }}
        />
        <Block
          absolute
          bottom={10}
          width={width - 24}
          paddingHorizontal={getSize.m(12)}>
          <Text
            size={getSize.s(20)}
            color={theme.colors.white}
            numberOfLines={3}
            fontType="semibold">
            {title}
          </Text>
        </Block>
      </Pressable>

      <Text marginTop={getSize.m(14)} size={getSize.s(15)}>
        {describe}
      </Text>
    </Block>
  );
};

export default ItemVideo;
