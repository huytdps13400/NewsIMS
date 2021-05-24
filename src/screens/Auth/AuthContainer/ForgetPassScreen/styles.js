import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    padding: getSize.m(12),
  },
  inputWrap: {
    paddingHorizontal: 0,
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: getSize.m(0.5),
    borderBottomColor: theme.colors.lightGray,
    backgroundColor: theme.colors.background,
  },
  input: {
    paddingVertical: getSize.m(5),
    paddingHorizontal: 0,
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: getSize.m(10),
  },
  error: {
    paddingHorizontal: 0,
    marginTop: getSize.m(8),
  },
  errorText: {
    fontSize: getSize.m(13),
  },
  iconClose: {
    width: getSize.s(13),
    height: getSize.s(13),
    tintColor: theme.colors.placeholder,
  },
  button: {
    borderRadius: getSize.m(5),
    marginVertical: 0,
    marginTop: getSize.m(20),
    marginBottom: getSize.m(10),
  },
});
