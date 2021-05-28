import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getSize.m(12),
  },
  image: {
    height: getSize.s(65),
    width: getSize.s(65),
    borderRadius: getSize.m(65),
    margin: getSize.m(16),
  },
  content: {
    width: width - 108,
    height: getSize.s(90),
    borderRadius: getSize.m(5),
  },
});
