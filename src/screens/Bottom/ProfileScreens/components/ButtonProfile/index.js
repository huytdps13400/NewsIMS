import React from 'react';
import { Image, Pressable } from 'react-native';
import { Block, Text } from '@components';
import styles from './styles';
import { getSize } from '@utils/responsive';

const ButtonProfile = ({ image, title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Block alignCenter>
        <Image style={styles.image} source={image} />
        <Text marginTop={getSize.m(12)} fontType="semibold">{title}</Text>
      </Block>
    </Pressable>
  );
};

export default ButtonProfile;
