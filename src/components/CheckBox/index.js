/* eslint-disable react-native/no-inline-styles */
import {icons} from '@assets';
import {Block, Text} from '@components';
import React, {useRef} from 'react';
import {Animated, Image, Pressable} from 'react-native';
import styles from './styles';

const PressableAnim = Animated.createAnimatedComponent(Pressable);

const CheckBox = ({
  title,
  value,
  setValue,
  containerStyles,
  iconStyles,
  textStyles,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const _onChange = () => {
    setValue(prev => !prev);
    Animated.spring(opacity, {
      toValue: value ? 0 : 1,
      useNativeDriver: true,
      bounciness: 1,
    }).start();
  };

  return (
    <Block style={containerStyles} row alignCenter>
      <Block marginRight={10}>
        <Pressable onPress={_onChange}>
          <Image
            style={{...styles.iconCheck, ...iconStyles, opacity: value ? 0 : 1}}
            source={icons.check_box}
          />
        </Pressable>
        <PressableAnim
          style={{...styles.btnActivity, opacity}}
          onPress={_onChange}>
          <Image
            style={{...styles.iconChecked, ...iconStyles}}
            source={icons.check_box}
          />
        </PressableAnim>
      </Block>
      <Text style={textStyles} fontType="bold" size={15}>
        {title}
      </Text>
    </Block>
  );
};

export default CheckBox;
