import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import Tendency from './components/Tendency';
const TendencyScreens = () => {
  return (
    <Block flex>
      <Header title="Xu hướng mới" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}>
        <Tendency
          titlevideo="Brazil 'vỡ trận' vì biến chủng mới, toàn cầu bị đe dọa"
          describe="Sau gần 2 năm đương nhiệm, Hoa hậu Lương Thuỳ Linh cùng Á hậu Kiều Loan và Á hậu Tường San tái hợp trong bộ ảnh mới, khởi động cuộc thi Miss World Việt Nam 2021."
          threebox
          listtext
        />
        <Block height={5} backgroundColor={theme.colors.smoke} marginTop={20} />
        <Tendency
          title="Tin xem Nhiều nhất"
          titlevideo="Ông Trump nổi giận với Wall Street Journal"
          describe="Sau gần 2 năm đương nhiệm, Hoa hậu Lương Thuỳ Linh cùng Á hậu Kiều Loan và Á hậu Tường San tái hợp trong bộ ảnh mới, khởi động cuộc thi Miss World Việt Nam 2021."
          onebox
          threebox
          list
          style={{marginTop: 10}}
        />
      </ScrollView>
    </Block>
  );
};

export default TendencyScreens;
