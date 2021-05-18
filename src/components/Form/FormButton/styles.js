import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: color => ({
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderColor: color,
  }),
  iconRight: {
    height: getSize.s(15),
    width: getSize.s(15),
    tintColor: theme.colors.placeholder,
  },
  icoWarning: {
    height: getSize.s(11),
    width: getSize.s(11),
    tintColor: theme.colors.red,
  },
});
