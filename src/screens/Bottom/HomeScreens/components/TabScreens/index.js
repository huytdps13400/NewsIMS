import {images} from '@assets';
import {Block, Text, Slider} from '@components';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {StyleSheet, Image, ScrollView} from 'react-native';
import HighLight from './components/HighLight';
import Offer from './components/Offer';

const TabScreens = () => {
  const data = [
    {
      image:
        'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
      title: 'Khám phá',
    },
    {
      image:
        'https://moroccodreamblog.files.wordpress.com/2014/11/aldous-huxley-to-travel-is-to-discover-that-everyone-is-wrong-about-other-countries.jpg',
      title: 'Thị trường',
    },
    {
      image:
        'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
      title: 'Thời gian',
    },
    {
      image:
        'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
      title: 'Ẩm thực',
    },
    {
      image:
        'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
      title: 'Khám phá',
    },
    {
      image:
        'https://moroccodreamblog.files.wordpress.com/2014/11/aldous-huxley-to-travel-is-to-discover-that-everyone-is-wrong-about-other-countries.jpg',
      title: 'Thị trường',
    },
    {
      image:
        'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
      title: 'Thời gian',
    },
    {
      image:
        'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
      title: 'Ẩm thực',
    },
  ];
  return (
    <Block flex backgroundColor="white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slider data={data} style={{marginTop: getSize.m(20)}} />
        <Block paddingHorizontal={getSize.m(12)}>
          <HighLight />
        </Block>
        <Block height={5} backgroundColor={theme.colors.smoke} marginTop={26} />
        <Offer
          title="Đề xuất"
          titlevideo="Top 3 Miss World Việt Nam: Người đỉnh cao nhan sắc, người yên bề gia thất"
          describe="Sau gần 2 năm đương nhiệm, Hoa hậu Lương Thuỳ Linh cùng Á hậu Kiều Loan và Á hậu Tường San tái hợp trong bộ ảnh mới, khởi động cuộc thi Miss World Việt Nam 2021."
          list
        />
        <Block height={5} backgroundColor={theme.colors.smoke} marginTop={20} />
        <Offer
          title="Tin tức xã hội"
          titlevideo="Top 3 Miss World Việt Nam: Người đỉnh cao nhan sắc, người yên bề gia thất"
          describe="Sau gần 2 năm đương nhiệm, Hoa hậu Lương Thuỳ Linh cùng Á hậu Kiều Loan và Á hậu Tường San tái hợp trong bộ ảnh mới, khởi động cuộc thi Miss World Việt Nam 2021."
          threebox
        />
        <Image
          source={images.bannerhome}
          style={{width: '100%', height: width / 2}}
        />
        <Offer
          title="Tin tức thế giới"
          titlevideo="Ông Trump nổi giận với Wall Street Journal"
          describe="Sau gần 2 năm đương nhiệm, Hoa hậu Lương Thuỳ Linh cùng Á hậu Kiều Loan và Á hậu Tường San tái hợp trong bộ ảnh mới, khởi động cuộc thi Miss World Việt Nam 2021."
          onebox
          threebox
          list
        />
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
        <Offer
          title="Giới trẻ"
          titlevideo="Trấn Thành, Hari Won và dàn sao rạng rỡ trên thảm đỏ"
          describe="UEFA cho biết trận lượt về vòng 16 đội Champions League giữa Liverpool vs RB Leipzig đã được chuyển từ Anfield sang Budapest do ảnh hưởng từ đại dịch Covid-19."
          onebox
          threebox
          list
        />
        <Offer
          title="Đời sống"
          titlevideo="Trấn Thành, Hari Won và dàn sao rạng rỡ trên thảm đỏ"
          describe="UEFA cho biết trận lượt về vòng 16 đội Champions League giữa Liverpool vs RB Leipzig đã được chuyển từ Anfield sang Budapest do ảnh hưởng từ đại dịch Covid-19."
          onebox
          threebox
          list
        />
      </ScrollView>
    </Block>
  );
};

export default TabScreens;

const styles = StyleSheet.create({});
