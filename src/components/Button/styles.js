import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: getSize.m(20),
    borderRadius: 24,
  },
});
