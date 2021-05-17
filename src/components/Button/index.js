import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const Button = ({title, onPress, style, titleStyle, disabled}) => {
  return (
    <Pressable
      onPress={() => {
        !disabled && onPress();
      }}>
      <Block
        style={{...styles.container, opacity: disabled ? 0.5 : 1, ...style}}
        backgroundColor={'#2B80EF'}>
        <Text fontType="semibold" color={'#fff'} style={titleStyle}>
          {title}
        </Text>
      </Block>
    </Pressable>
  );
};

export default Button;
