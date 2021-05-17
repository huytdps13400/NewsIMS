import React from 'react';
import {Block, Text} from '@components';
import {Image, ScrollView, Pressable} from 'react-native';
import {images} from '@assets';
import styles from './styles';
const CategoriesGroup = React.memo(({data}) => {
  const _renderItem = item => (
    <Pressable>
      <Block shadow marginRight={13} radius={10}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={images.discover}></Image>
        <Text marginTop={10} center size={14}>
          {item.title}
        </Text>
      </Block>
    </Pressable>
  );
  return (
    <Block
      paddingLeft={16}
      marginTop={20}
      paddingBottom={20}
      backgroundColor={'white'}>
      <Text size={19} fontType={'semibold'}>
        Chuyên mục bạn quan tâm
      </Text>
      <Block justifyCenter row marginTop={20}>
        <ScrollView horizontal>{data.map(_renderItem)}</ScrollView>
      </Block>
    </Block>
  );
});

export default CategoriesGroup;
