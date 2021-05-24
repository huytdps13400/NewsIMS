import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const HighLight = () => {
  return (
    <Block>
      <Text marginTop={15} numberOfLines={2} size={getSize.s(20)}>
        NTK Đỗ Trịnh Hoài Nam may áo dài cho Xuân Bắc
      </Text>
      <Block row marginTop={getSize.m(12)}>
        <Text size={getSize.s(15)}>Tin nổi bật</Text>
        <Text
          size={getSize.s(14)}
          marginLeft={getSize.m(10)}
          color={theme.colors.lightGray}>
          39 phút trước
        </Text>
      </Block>
      <Block row alignCenter marginTop={getSize.m(25)}>
        <Block width={(width - 36) / 2}>
          <Image
            source={{
              uri: 'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
            }}
            style={styles.imgstyle}
          />
          <Text size={16} numberOfLines={3} marginTop={getSize.m(5)}>
            'Quyền lực mềm' của Việt Nam tăng hạng sau một năm chống COVID-19
          </Text>
          <Text color={theme.colors.lightGray}>Xã hội</Text>
        </Block>
        <Block width={(width - 36) / 2} marginLeft={12}>
          <Image
            source={{
              uri: 'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
            }}
            style={styles.imgstyle}
          />
          <Text size={16} numberOfLines={3} marginTop={getSize.m(5)}>
            'Quyền lực mềm' của Việt Nam tăng hạng sau một năm chống COVID-19
          </Text>
          <Text color={theme.colors.lightGray}>Xã hội</Text>
        </Block>
      </Block>
    </Block>
  );
};

export default HighLight;
