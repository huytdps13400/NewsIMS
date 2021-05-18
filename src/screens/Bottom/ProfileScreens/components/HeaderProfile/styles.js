import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';
import {width} from '@utils/responsive';

export default StyleSheet.create({
  imgAvatar: {
    width: getSize.s(56),
    height: getSize.s(56),
    resizeMode: 'contain',
  },
  imgCamera: {
    marginVertical: 17,
    width: getSize.s(21),
    position: 'absolute',
    top: 0,
    right: -10,
    opacity: 0.9,
    resizeMode: 'contain',
  },
  imgNext: {
    width: getSize.s(26),
    height: getSize.s(26),
    resizeMode: 'contain',
  },
  header: {
    width: width,
    borderBottomLeftRadius: getSize.m(60),
    borderBottomRightRadius: getSize.m(60),
  },
});
