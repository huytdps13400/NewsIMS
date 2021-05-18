import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {width: 20, height: 20, resizeMode: 'contain'},
  switch: {
    transform:
      Platform.OS === 'ios'
        ? [{scaleX: 0.8}, {scaleY: 0.8}]
        : [{scaleX: 1}, {scaleY: 1}],
  },
  icon_next: {width: 10, height: 10, resizeMode: 'contain'},
});
