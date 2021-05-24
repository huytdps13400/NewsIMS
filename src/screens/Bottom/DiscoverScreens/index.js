import {Block, Header} from '@components';
import React from 'react';
import {ScrollView} from 'react-native';
import CategoriesGroup from './components/CategoriesGroup';
import HotCategories from './components/HotCategories';

const data = [
  {
    id: '1',
    image:
      'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
    title: 'Khám phá',
  },
  {
    id: '2',
    image:
      'https://moroccodreamblog.files.wordpress.com/2014/11/aldous-huxley-to-travel-is-to-discover-that-everyone-is-wrong-about-other-countries.jpg',
    title: 'Thị trường',
  },
  {
    id: '3',
    image:
      'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
    title: 'Thời gian',
  },
  {
    id: '4',
    image:
      'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
    title: 'Ẩm thực',
  },
  {
    id: '5',
    image:
      'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
    title: 'Khám phá',
  },
  {
    id: '6',
    image:
      'https://moroccodreamblog.files.wordpress.com/2014/11/aldous-huxley-to-travel-is-to-discover-that-everyone-is-wrong-about-other-countries.jpg',
    title: 'Thị trường',
  },
  {
    id: '7',
    image:
      'https://sundayinwonderland.com/wp-content/uploads/2019/01/Explore_the_unexplored_01.jpg',
    title: 'Thời gian',
  },
  {
    id: '8',
    image:
      'https://discoverasia.com.au/wp-content/uploads/2019/02/Hot-air-balloon-over-Nam-Song-river-at-sunset-in-Vang-vieng-Laos-Discover-Laos-Discover-Asia.jpg',
    title: 'Ẩm thực',
  },
];

const DiscoverScreens = () => {
  return (
    <Block flex>
      <Header title={'Khám phá'} />
      <CategoriesGroup data={data} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HotCategories />
      </ScrollView>
    </Block>
  );
};

export default DiscoverScreens;
