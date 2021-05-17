import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  imgstyle: {
    height: getSize.s(116),
    width: (width - 36) / 2,
    borderRadius: 5,
  },
});
