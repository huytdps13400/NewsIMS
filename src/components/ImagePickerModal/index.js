import {icons} from '@assets/';
import {Block, ModalBox, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const ImagePickerModal = ({
  isVisible,
  setIsVisible,
  onBackdropPress,
  openPicker,
  openCamera,
}) => {
  const config = useSelector(state => state.config.data);

  return (
    <ModalBox
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      onBackdropPress={onBackdropPress}>
      <Block padding={25} backgroundColor="white">
        <Pressable onPress={openPicker}>
          <Block row alignCenter marginBottom={10}>
            <Image
              source={icons.openPicker}
              resizeMode="contain"
              style={{...styles.icon, tintColor: config.general_active_color}}
            />
            <Text fontType="bold">Chọn ảnh từ thư viện</Text>
          </Block>
        </Pressable>
        <Block height={1} marginVertical={5} backgroundColor="smoke" />
        <Pressable onPress={openCamera}>
          <Block row alignCenter marginVertical={10}>
            <Image
              source={icons.openCamera}
              resizeMode="contain"
              style={{...styles.icon, tintColor: config.general_active_color}}
            />
            <Text fontType="bold">Chụp ảnh mới</Text>
          </Block>
        </Pressable>
      </Block>
    </ModalBox>
  );
};

export default ImagePickerModal;
