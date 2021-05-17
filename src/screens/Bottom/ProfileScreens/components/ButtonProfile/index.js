import React from 'react';
import {Image} from 'react-native';
import {Block, Text} from '@components';
import styles from './styles';

const ButtonProfile = ({image, title}) => {
  return (
    <Block alignCenter marginHorizontal={16}>
      <Image style={styles.image} source={image} />
      <Text>{title}</Text>
    </Block>
  );
};

export default ButtonProfile;
