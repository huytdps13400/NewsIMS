import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const Slide = React.memo(({data, style}) => {
  const _renderItem = ({item}) => {
    return (
      <Block alignCenter>
        <Image
          source={{uri: item.image}}
          style={{width: width - 24, height: width / 2, borderRadius: 10}}
        />
      </Block>
    );
  };
  return (
    <Block style={style} marginHorizontal={12}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        showPagination={true}
        data={data}
        index={0}
        renderItem={_renderItem}
        paginationStyleItem={{height: 10, width: 10}}
        paginationActiveColor={theme.colors.blueHeader}
        paginationDefaultColor={theme.colors.white}
      />
    </Block>
  );
});

export default Slide;
