import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconCheck: {
    width: getSize.s(70),
    height: getSize.s(70),
    tintColor: theme.colors.green,
    marginBottom: getSize.m(10),
    alignSelf: 'center',
  },
  button: {
    borderRadius: getSize.m(5),
  },
});
