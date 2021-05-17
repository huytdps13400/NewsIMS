import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';
import {width} from '@utils/responsive';

export default StyleSheet.create({
  imgAvatar: {
    width: getSize.s(56),
    height: getSize.s(56),
  },
  imgCamera: {
    marginVertical: 17,
    width: getSize.s(21),
    position: 'absolute',
    top: 0,
    right: -10,
    opacity: 0.9,
  },
  imgNext: {
    width: getSize.s(26),
    height: getSize.s(26),
  },
  header: {
    width: width,
    borderBottomLeftRadius: getSize.m(60),
    borderBottomRightRadius: getSize.m(60),
    transform: [{scaleX: 1.1}],
  },
});
