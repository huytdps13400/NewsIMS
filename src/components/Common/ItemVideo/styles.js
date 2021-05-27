import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnstyles: {
    width: width - 24,
    height: getSize.s(240),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgstyle: {width: '100%', height: getSize.s(240), borderRadius: 9},
});
