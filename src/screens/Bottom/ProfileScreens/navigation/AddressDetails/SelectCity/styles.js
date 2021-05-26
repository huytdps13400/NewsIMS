import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getSize.m(15),
  },
  input: {
    backgroundColor: theme.colors.smoke,
  },
  contentInput: {
    height: getSize.v(45),
    width: width,
    alignSelf: 'center',
    marginBottom: getSize.m(12),
  },
});
