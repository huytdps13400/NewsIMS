import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const HeaderNotification = () => {
  return (
    <Block
      shadow
      row
      justifyCenter
      padding={12}
      backgroundColor={'#fff'}
      space={'between'}>
      <Block row alignCenter>
        <Pressable>
          <Image
            resizeMode={'contain'}
            source={icons.square}
            style={styles.image1}
          />
        </Pressable>
        <Pressable>
          <Image
            resizeMode="contain"
            source={icons.down}
            style={styles.image2}
          />
        </Pressable>
        <Pressable>
          <Image
            resizeMode={'contain'}
            source={icons.refresh}
            style={styles.image3}
          />
        </Pressable>
        <Text marginLeft={17} size={14} color={'#2374DF'} fontType="semibold">
          Đánh dấu là đã đọc
        </Text>
      </Block>
      <Pressable>
        <Block
          alignCenter
          justifyCenter
          borderWidth={1}
          radius={10}
          width={20}
          height={20}
          borderColor={'#C9C9C9'}
          backgroundColor={theme.colors.smoke}>
          <Image
            resizeMode={'contain'}
            source={icons.dot}
            style={styles.imgItem}
          />
        </Block>
      </Pressable>
    </Block>
  );
};

export default HeaderNotification;
