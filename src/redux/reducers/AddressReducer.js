import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const address = (...props) => {
  return reducerDefault(...props, Actions.GET_ADDRESS);
};

export const AddressReducer = {
  address,
};
