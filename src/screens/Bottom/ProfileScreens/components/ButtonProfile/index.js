import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ButtonProfile = ({image, title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Block alignCenter>
        <Image resizeMode="contain" style={styles.image} source={image} />
        <Text marginTop={12} fontType="semibold">
          {title}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ButtonProfile;
