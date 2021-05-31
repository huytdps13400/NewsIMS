import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: 'center',
    height: getSize.s(42),
    justifyContent: 'center',
  },
  textlabel: (isFocused, index) => ({
    color: isFocused ? theme.colors.black : theme.colors.black,
    marginLeft: index === 0 ? getSize.m(0) : getSize.m(20),
    fontSize: getSize.s(15),
    fontWeight: isFocused
      ? theme.fonts.fontWeight.bold
      : theme.fonts.fontWeight.regular,
  }),
});
