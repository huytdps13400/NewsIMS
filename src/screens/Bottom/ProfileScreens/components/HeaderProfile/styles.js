import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imgAvatar: {
    width: getSize.s(70),
    height: getSize.s(70),
    resizeMode: 'contain',
    borderRadius: 50,
  },
  imgCamera: {
    marginVertical: getSize.m(25),
    width: getSize.s(25),
    height: getSize.s(25),
    position: 'absolute',
    top: 0,
    right: getSize.m(-15),
    opacity: 0.9,
  },
  imgNext: {
    width: getSize.s(26),
    height: getSize.s(26),
    resizeMode: 'contain',
  },
  icoBack: {
    height: getSize.s(20),
    width: getSize.s(20),
    resizeMode: 'contain',
    tintColor: theme.colors.white,
  },
  btnback: {
    position: 'absolute',
    top: getSize.m(40),
    left: getSize.m(20),
  },
});
