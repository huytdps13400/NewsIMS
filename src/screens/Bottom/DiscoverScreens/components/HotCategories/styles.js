import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    borderRadius: getSize.s(9),
    width: width / 5,
    height: width / 5,
  },
});
