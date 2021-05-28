import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imageTitle: {
    width: getSize.s(17),
    height: getSize.s(17),
  },
  inputWrap: {
    paddingHorizontal: 0,
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: getSize.m(0),
    borderBottomColor: theme.colors.smoke,
  },
  container: {
    flex: 1,
  },
  button: {marginTop: 45, marginBottom: 30},
});
