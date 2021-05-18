import React from 'react';
import {Image, Pressable} from 'react-native';
import {Block, Text} from '@components';
import styles from './styles';

const ButtonProfile = ({image, title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Block alignCenter marginHorizontal={16}>
        <Image style={styles.image} source={image} />
        <Text>{title}</Text>
      </Block>
    </Pressable>
  );
};

export default ButtonProfile;
