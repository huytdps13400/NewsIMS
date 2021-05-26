import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getSize.m(15),
  },
});
