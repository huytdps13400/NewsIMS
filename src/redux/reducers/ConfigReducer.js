import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const config = (...props) => {
  return reducerDefault(...props, Actions.GET_CONFIG);
};

export const ConfigReducer = {config};
