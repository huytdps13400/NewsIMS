import {Block, Text, Header} from '@components';
import React from 'react';
import {Pressable, Image, ScrollView} from 'react-native';
import {icons} from '@assets';
import {theme} from '@theme';
import HeaderNotification from './components/HeaderNotification';
import Item from './components/Item';
const data = [
  {
    id: '1',
    image:
      'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
    title: 'Những mũi vaccine phòng COVID-19 đầu tiên dành cho y bác',
    date: 'Tin hot - 08/03/2021',
  },
  {
    id: '2',
    image:
      'https://moroccodreamblog.files.wordpress.com/2014/11/aldous-huxley-to-travel-is-to-discover-that-everyone-is-wrong-about-other-countries.jpg',
    title:
      'Đợt tiêm vaccine phòng COVID-19 lần này là khởi đầu cho chiến dịch ',
    date: 'Tin hot - 08/03/2021',
  },
  {
    id: '3',
    image:
      'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
    title:
      'Đợt tiêm vaccine phòng COVID-19 lần này là khởi đầu cho chiến dịch ',
    date: 'Tin hot - 08/03/2021',
  },
  {
    id: '4',
    image:
      'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
    title:
      'Đợt tiêm vaccine phòng COVID-19 lần này là khởi đầu cho chiến dịch ',
    date: 'Tin hot - 08/03/2021',
  },
  {
    id: '5',
    image:
      'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
    title:
      'Đợt tiêm vaccine phòng COVID-19 lần này là khởi đầu cho chiến dịch ',
    date: 'Tin hot - 08/03/2021',
  },
  {
    id: '6',
    image:
      'https://moroccodreamblog.files.wordpress.com/2014/11/aldous-huxley-to-travel-is-to-discover-that-everyone-is-wrong-about-other-countries.jpg',
    title:
      'Đợt tiêm vaccine phòng COVID-19 lần này là khởi đầu cho chiến dịch ',
    date: 'Tin hot - 08/03/2021',
  },
  {
    id: '7',
    image:
      'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
    title: 'Những mũi vaccine phòng COVID-19 đầu tiên dành cho y bác',
    date: 'Tin hot - 08/03/2021',
  },
  {
    id: '8',
    image:
      'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
    title:
      'Đợt tiêm vaccine phòng COVID-19 lần này là khởi đầu cho chiến dịch ',
    date: 'Tin hot - 08/03/2021',
  },
];
const NotificationScreens = () => {
  return (
    <Block flex>
      <Header title={'Thông báo'} />
      <HeaderNotification />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Item data={data} />
      </ScrollView>
    </Block>
  );
};

export default NotificationScreens;
