import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {FlatList, Image} from 'react-native';
import styles from './styles';
const DATA = [
  {
    title: 'Quyền lực mền của VIệt NAM tăng hạng sau một năm chống COVID19 ',
    image:
      'https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg',
  },
  {
    title: 'Quyền lực mền của VIệt NAM tăng hạng sau một năm chống COVID19 ',
    image:
      'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
  },
  {
    title: 'Quyền lực mền của VIệt NAM tăng hạng sau một năm chống COVID19 ',
    image:
      'https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg',
  },
  {
    title: 'Quyền lực mền của VIệt NAM tăng hạng sau một năm chống COVID19 ',
    image:
      'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
  },
  {
    title: 'Quyền lực mền của VIệt NAM tăng hạng sau một năm chống COVID19 ',
    image:
      'https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg',
  },
];

const HighLight = () => {
  const _renderItem = ({item}) => {
    return (
      <Block width={(width - 36) / 2} margin={3}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.imgstyle}
        />
        <Text size={16} numberOfLines={3} marginTop={5}>
          {item.title}
        </Text>
        <Text color={theme.colors.lightGray}>Xã hội</Text>
      </Block>
    );
  };

  return (
    <Block>
      <Block row marginVertical={12}>
        <Text size={15}>Tin nổi bật</Text>
        <Text size={14} marginLeft={10} color={theme.colors.lightGray}>
          .39 phút trước
        </Text>
      </Block>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={_renderItem}
        keyExtractor={item => item.item_id}
      />
    </Block>
  );
};

export default HighLight;
