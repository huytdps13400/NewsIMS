import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textInput: {
    height: getSize.s(45),
    backgroundColor: theme.colors.white,
    marginTop: getSize.m(10),
    borderWidth: 0.5,
    borderColor: 'blue',
  },
  errorStyles: {
    marginTop: getSize.m(10),
  },

  // CheckBox: {
  //   textAlign: 'center',
  //   fontSize: 12,
  //   color: theme.colors.blue,
  //   marginTop: 16,
  // },
});
