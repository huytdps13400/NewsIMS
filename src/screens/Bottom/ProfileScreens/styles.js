import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnLogout: {
    width: width * 0.8,
    alignSelf: 'center',
    backgroundColor: 'blue',
  },
  container: {
    position: 'absolute',
    top: 160,
    alignSelf: 'center',
  },
});
