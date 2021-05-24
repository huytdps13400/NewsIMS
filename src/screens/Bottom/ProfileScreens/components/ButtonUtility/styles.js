import {getSize, width} from '@utils/responsive';
import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  icon: {width: getSize.m(18), height: getSize.m(18), resizeMode: 'contain'},
  switch: {
    transform:
      Platform.OS === 'ios'
        ? [
            {scaleX: getSize.m(1, 1)},
            {
              scaleY: getSize.m(1, 1),
            },
          ]
        : [
            {scaleX: getSize.m(1, 0.1)},
            {
              scaleY: getSize.m(1, 0.1),
            },
          ],
    resizeMode: 'contain',
  },
  icon_next: {
    width: getSize.m(12),
    height: getSize.m(12),
    resizeMode: 'contain',
  },
});
