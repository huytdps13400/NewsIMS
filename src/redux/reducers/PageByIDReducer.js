import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const page = (...props) => {
  return reducerDefault(...props, Actions.GET_PAGE_BY_ID);
};

export const PageByIDReducer = {page};
