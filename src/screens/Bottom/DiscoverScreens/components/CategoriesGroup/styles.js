import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: width / 5,
    height: width / 5,
    borderRadius: getSize.m(10),
  },
});
