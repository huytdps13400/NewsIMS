import {icons} from '@assets';
import {Text} from '@components';
import Block from '@components/Block';
import {theme} from '@theme';
import {useField} from 'formik';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const FormButton = ({
  name,
  value,
  colorErr,
  colorNotErr,
  isIconLeft,
  isIconRight,
  customIconLeft,
  customIconRight,
  containerStyles,
  buttonStyles,
  titleStyles,
  iconRightStyles,
  errContainerStyles,
  iconErrStyles,
  textErrStyles,
  ...props
}) => {
  const meta = useField({name})[1];
  const isError = meta.touched && meta.error;
  const ColorErr = colorErr || theme.colors.red;
  const ColorNotErr = colorNotErr || theme.colors.smoke;

  const _renderIconLeft = () => {
    if (customIconLeft) {
      return customIconLeft();
    }
    if (isIconLeft) {
      return null;
    }
    return null;
  };

  const _renderIconRight = () => {
    if (customIconRight) {
      return customIconRight();
    }
    if (isIconRight) {
      return (
        <Image
          source={icons.down}
          resizeMode="contain"
          style={[styles.iconRight, iconRightStyles]}
        />
      );
    }
    return null;
  };

  const _renderError = () => {
    if (isError) {
      return (
        <Block row alignCenter style={errContainerStyles}>
          <Image
            source={icons.warning}
            resizeMode="contain"
            style={[styles.icoWarning, iconErrStyles]}
          />
          <Text
            marginLeft={5}
            size={11}
            color={theme.colors.red}
            style={textErrStyles}>
            {meta.error}
          </Text>
        </Block>
      );
    }
    return null;
  };

  return (
    <Block style={containerStyles}>
      <Pressable
        {...props}
        style={[styles.button(isError ? ColorErr : ColorNotErr), buttonStyles]}>
        {_renderIconLeft()}
        <Text style={titleStyles}>{value || 'Value'}</Text>
        {_renderIconRight()}
      </Pressable>
      {_renderError()}
    </Block>
  );
};

export default FormButton;
