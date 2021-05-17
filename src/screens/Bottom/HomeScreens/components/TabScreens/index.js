import {Block, Text, Slider} from '@components';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {StyleSheet, Image, ScrollView} from 'react-native';
import HighLight from './components/HighLight';
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
      </ScrollView>
    </Block>
  );
};

export default TabScreens;

const styles = StyleSheet.create({});
