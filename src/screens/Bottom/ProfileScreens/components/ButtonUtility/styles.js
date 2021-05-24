import { getSize, width } from '@utils/responsive';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  icon: { width: getSize.m(18), height: getSize.m(18), resizeMode: 'contain' },
  switch: {

    transform: [{ scaleX: getSize.m(1, 0.1) }, {
      scaleY:
        getSize.m(1, 0.1)
    }],
    resizeMode: 'contain',

  },
  icon_next: { width: getSize.m(12), height: getSize.m(12), resizeMode: 'contain' },
});
