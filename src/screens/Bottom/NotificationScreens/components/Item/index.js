import {Block, Text} from '@components';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import styles from './styles';

const Item = React.memo(({data, onPress}) => {
  const _renderItem = ({item}) => {
    return (
      <Pressable onPress={onPress}>
        <Block
          row
          justifyCenter
          padding={16}
          borderBottomWidth={1}
          space={'between'}
          borderColor={'#EAEAEA'}>
          <Block width={'70%'} marginRight={20}>
            <Text numberOfLines={2} size={17} fontType="semibold">
              {item.title}
            </Text>
            <Text marginTop={14} size={13}>
              {item.date}
            </Text>
          </Block>
          <Block width={'30%'}>
            <Image source={{uri: item.image}} style={styles.image} />
          </Block>
        </Block>
      </Pressable>
    );
  };
  return (
    <Block>
      <FlatList
        renderItem={_renderItem}
        data={data}
        keyExtractor={(item, index) => index}
      />
    </Block>
  );
});

export default Item;
