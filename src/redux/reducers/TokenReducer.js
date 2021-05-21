import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const token = (...props) => {
  return reducerDefault(...props, Actions.GET_TOKEN);
};

export const TokenReducer = {token};
