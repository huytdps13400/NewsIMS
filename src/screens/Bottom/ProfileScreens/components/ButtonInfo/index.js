import React from 'react';
import {Image} from 'react-native';
import {Block, Text} from '@components';
import styles from './styles';

const ButtonInfo = ({title, icon}) => {
  return (
    <Block
      padding={10}
      borderBottomWidth={1}
      borderColor={'#E4E4E4'}
      row
      marginTop={40}>
      <Image resizeMode="contain" style={styles.image} source={icon} />
      <Text size={15} marginLeft={15}>
        {title}
      </Text>
    </Block>
  );
};

export default ButtonInfo;
