import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconCheck: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
    tintColor: theme.colors.placeholder,
  },
  btnActivity: {
    position: 'absolute',
    backgroundColor: theme.colors.green,
    padding: getSize.m(3),
    borderRadius: getSize.m(5),
  },
  iconChecked: {
    width: getSize.s(15),
    height: getSize.s(15),
    resizeMode: 'contain',
    tintColor: theme.colors.white,
  },
});
