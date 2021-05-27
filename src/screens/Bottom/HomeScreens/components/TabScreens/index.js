/* eslint-disable react-hooks/exhaustive-deps */
import {images} from '@assets';
import {AnimatedImage, Block, Slider, Text} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React, {useEffect} from 'react';
import {Image, Pressable, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HighLight from './components/HighLight';
import Offer from './components/Offer';

const TabScreens = ({group_id}) => {
  const dispatch = useDispatch();
  const newsHome = useSelector(state => state.newsHome.data);
  const {data} = newsHome?.find(value => value.group_id === group_id) || {};

  useEffect(() => {
    dispatch({
      type: actions.GET_NEWS_HOME,
      params: {
        group_id,
      },
    });
  }, [dispatch, group_id]);

  const _renderItem = ({item}) => {
    return (
      <Pressable>
        <AnimatedImage
          source={
            item.picture
              ? item.picture
              : 'https://reactnative.dev/img/tiny_logo.png'
          }
          style={{width: '100%', height: width / 2}}
        />
        <Block flex marginLeft={20}>
          <Text numberOfLines={1} fontType="heavy">
            {item.title}
          </Text>
          <Text numberOfLines={2} marginVertical={10} color="placeholder">
            {item.short}
          </Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block flex backgroundColor="white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slider data={data} style={{marginTop: 20}} />
        <Text margin={12} numberOfLines={2} size={20}>
          NTK Đỗ Trịnh Hoài Nam may áo dài cho Xuân Bắc
        </Text>
        <Block paddingHorizontal={12}>
          <HighLight />
        </Block>
        <Block height={5} backgroundColor={theme.colors.smoke} marginTop={26} />
        <Offer
          data={data}
          title="Đề xuất"
          titlevideo="Top 3 Miss World Việt Nam: Người đỉnh cao nhan sắc, người yên bề gia thất"
          describe="Sau gần 2 năm đương nhiệm, Hoa hậu Lương Thuỳ Linh cùng Á hậu Kiều Loan và Á hậu Tường San tái hợp trong bộ ảnh mới, khởi động cuộc thi Miss World Việt Nam 2021."
          list
        />
        <Block height={5} backgroundColor={theme.colors.smoke} marginTop={20} />
        <Offer
          data={data}
          title="Tin tức xã hội"
          titlevideo="Top 2 Miss World Việt Nam: Người đỉnh cao nhan sắc, người yên bề gia thất"
          describe="Sau gần 2 năm đương nhiệm, Hoa hậu Lương Thuỳ Linh cùng Á hậu Kiều Loan và Á hậu Tường San tái hợp trong bộ ảnh mới, khởi động cuộc thi Miss World Việt Nam 2021."
          threebox
        />
        <Image
          source={images.bannerhome}
          style={{width: '100%', height: width / 2}}
        />
        <Offer
          data={data}
          title="Tin tức thế giới"
          titlevideo="Ông Trump nổi giận với Wall Street Journal"
          describe="Sau gần 2 năm đương nhiệm, Hoa hậu Lương Thuỳ Linh cùng Á hậu Kiều Loan và Á hậu Tường San tái hợp trong bộ ảnh mới, khởi động cuộc thi Miss World Việt Nam 2021."
          onebox
          threebox
          list
        />
        <Block height={5} backgroundColor={theme.colors.smoke} marginTop={20} />

        <Offer
          title="Nhịp sống"
          titlevideo="Phim Thái bị phản ứng vì bình thường hóa việc hiếp dâm"
          describe="Dù nhận về phản ứng gay gắt, các bộ phim dài tập xứ chùa Vàng vẫn đưa tình tiết nữ chính bị kẻ xấu lạm dụng, nhà chồng ruồng bỏ vào cốt truyện."
          list
        />
        <Block height={5} backgroundColor={theme.colors.smoke} marginTop={20} />
        <Offer
          title="Bóng đá việt"
          titlevideo="Liverpool mất điểm tựa Anfield ở trận gặp Leipzig"
          describe="UEFA cho biết trận lượt về vòng 16 đội Champions League giữa Liverpool vs RB Leipzig đã được chuyển từ Anfield sang Budapest do ảnh hưởng từ đại dịch Covid-19."
          onebox
          threebox
          list
        />
        <Block height={5} backgroundColor={theme.colors.smoke} marginTop={20} />
        <Offer
          data={data}
          title="Giới trẻ"
          titlevideo="Trấn Thành, Hari Won và dàn sao rạng rỡ trên thảm đỏ"
          describe="UEFA cho biết trận lượt về vòng 16 đội Champions League giữa Liverpool vs RB Leipzig đã được chuyển từ Anfield sang Budapest do ảnh hưởng từ đại dịch Covid-19."
          onebox
          threebox
          list
        />
        <Block height={5} backgroundColor={theme.colors.smoke} marginTop={20} />

        <Offer
          data={data}
          title="Đời sống"
          titlevideo="Trấn Thành, Hari Won và dàn sao rạng rỡ trên thảm đỏ"
          describe="UEFA cho biết trận lượt về vòng 16 đội Champions League giữa Liverpool vs RB Leipzig đã được chuyển từ Anfield sang Budapest do ảnh hưởng từ đại dịch Covid-19."
          onebox
          threebox
          list
        />
      </ScrollView>
      {/* <FlatList
        data={data || []}
        renderItem={_renderItem}
        keyExtractor={(_, index) => String(index)}
        // onRefresh={_onRefresh}
        // refreshing={refreshing}
        // onEndReached={_loadMore}
        // ItemSeparatorComponent={_itemSeparator}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      /> */}
    </Block>
  );
};

export default TabScreens;
