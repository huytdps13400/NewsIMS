import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const LoginSocialButton = ({title, backgroundColor, color, icon, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Block
        shadow
        row
        alignCenter
        justifyCenter
        backgroundColor={backgroundColor}
        height={45}
        width={45}
        marginHorizontal={10}
        borderRadius={45}
        marginBottom={10}>
        <Image source={icon} style={styles.imgAuth} resizeMode="cover" />
      </Block>
    </Pressable>
  );
};

export default LoginSocialButton;
