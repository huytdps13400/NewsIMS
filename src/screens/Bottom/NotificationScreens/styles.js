import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: (isReading, config) => ({
    flexDirection: 'row',
    backgroundColor: isReading ? theme.colors.smoke : theme.colors.white,
    marginVertical: 1,
  }),
  image: {
    width: getSize.s(75),
    height: getSize.s(75),
  },
});
