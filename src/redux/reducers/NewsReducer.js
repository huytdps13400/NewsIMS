import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';
export const news = (...props) => {
  return reducerDefault(...props, Actions.GET_NEWS);
};
export const newsdetails = (...props) => {
  return reducerDefault(...props, Actions.GET_NEWSDETAILS);
};

export const NewsReducer = {news, newsdetails};
