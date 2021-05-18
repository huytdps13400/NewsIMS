import {getSize, height, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  LinearHeader: {
    position: 'absolute',
    height: height / 1.5,
    width: width,
    marginTop: getSize.m(-280),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
