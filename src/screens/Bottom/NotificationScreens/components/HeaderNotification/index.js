import {Block, Text, Header} from '@components';
import React from 'react';
import {Pressable, Image} from 'react-native';
import {icons} from '@assets';
import {theme} from '@theme';

const HeaderNotification = () => {
  return (
    <Block
      shadow
      row
      justifyCenter
      padding={20}
      backgroundColor={'#fff'}
      space={'between'}>
      <Block row justifyCenter>
        <Pressable>
          <Image
            resizeMode={'contain'}
            source={icons.square}
            style={{width: 18, height: 18}}
          />
        </Pressable>
        <Pressable>
          <Image
            resizeMode={'contain'}
            source={icons.down}
            style={{
              width: 8,
              height: 8,
              marginLeft: 10,
            }}
          />
        </Pressable>
        <Pressable>
          <Image
            resizeMode={'contain'}
            source={icons.refresh}
            style={{width: 18, height: 18, marginLeft: 10}}
          />
        </Pressable>
        <Text marginLeft={17} size={14} color={'#2374DF'} fontType={'semibold'}>
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
            style={{width: 10, height: 10, alignSelf: 'center'}}
          />
        </Block>
      </Pressable>
    </Block>
  );
};

export default HeaderNotification;
