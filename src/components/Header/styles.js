import {fonts} from '@assets';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  logo: {
    width: getSize.s(70),
    height: getSize.s(70),
    resizeMode: 'contain',
  },
  icoBack: {
    height: getSize.s(20),
    width: getSize.s(20),
    resizeMode: 'contain',
    tintColor: theme.colors.white,
  },

  icoSearch: {
    width: getSize.s(18),
    height: getSize.s(18),
    resizeMode: 'contain',
  },
});
