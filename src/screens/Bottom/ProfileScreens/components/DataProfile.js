import {icons} from '@assets';
import {routes} from '@navigation/routes';

export const DataMenu = [
  {
    image: icons.new,
    title: 'Tin hệ thống',
    navigation: routes.SYSTEM_NEWS,
  },
  {
    image: icons.popular_news,
    title: 'Tin đọc nhiều',
    navigation: routes.POPULAR_NEWS,
  },
  {
    image: icons.watched_news,
    title: 'Tin đã xem',
    navigation: routes.WATCHED_NEWS,
  },
];

export const Data = [
  {
    image: icons.profile1,
    title: 'Bật thông báo',
    navigation: '',
    params: {
      check: true,
    },
  },
  {
    image: icons.profile2,
    title: 'Tự động phát video',
    navigation: '',
    params: {
      check: true,
    },
  },
  {
    image: icons.profile3,
    title: 'Gữi phản hồi',
    navigation: routes.WATCHED_NEWS,
  },
  {
    image: icons.profile4,
    title: 'Điểu khoảng sử dụng',
    navigation: routes.WATCHED_NEWS,
  },
  {
    image: icons.profile5,
    title: 'Phiên bản hiện tại',
    navigation: routes.WATCHED_NEWS,
  },
];
