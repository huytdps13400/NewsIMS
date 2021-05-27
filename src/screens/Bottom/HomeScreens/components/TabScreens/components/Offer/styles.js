import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {width: getSize.s(12), height: getSize.s(12)},
  imgstyle: {
    width: (width - 36) / 3,
    height: getSize.s(96),
    borderRadius: getSize.s(6),
  },
});
