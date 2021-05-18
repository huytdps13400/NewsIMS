import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  icon: {width: 12, height: 12, resizeMode: 'contain'},
  imgstyle: {
    width: (width - 36) / 3,
    height: getSize.s(96),
    borderRadius: getSize.s(6),
  },
});
