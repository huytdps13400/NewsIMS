import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    borderRadius: getSize.s(5),
    width: getSize.s(75),
    height: getSize.s(75),
  },
});
