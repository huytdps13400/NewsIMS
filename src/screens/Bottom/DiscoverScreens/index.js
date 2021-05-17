import {Block, Text, Header} from '@components';
import React from 'react';
import {StyleSheet} from 'react-native';
import CategoriesGroup from './components/CategoriesGroup';
import HotCategories from './components/HotCategories';

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
      'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
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

const DiscoverScreens = () => {
  return (
    <Block>
      <Header title={'Khám phá'} />
      <CategoriesGroup data={data} />
      <HotCategories data={[1, 2, 3, 4, 5]} />
    </Block>
  );
};

export default DiscoverScreens;

const styles = StyleSheet.create({});
