import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable, ScrollView} from 'react-native';
import styles from './styles';

const CategoriesGroup = React.memo(({data}) => {
  const _renderItem = ({item}) => (
    <Pressable>
      <Block alignCenter marginRight={13} radius={10} width={width / 5}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text marginTop={10} center size={14}>
          {item.title}
        </Text>
      </Block>
    </Pressable>
  );

  return (
    <Block
      paddingLeft={12}
      paddingTop={20}
      paddingBottom={20}
      backgroundColor="white">
      <Text size={19} fontType="semibold">
        Chuyên mục bạn quan tâm
      </Text>
      <Block justifyCenter row marginTop={20}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, i) => (
            <_renderItem key={i} item={item} />
          ))}
        </ScrollView>
      </Block>
    </Block>
  );
});

export default CategoriesGroup;
