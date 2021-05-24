import {reducerDevice} from '@redux/common/reducers';
import Actions from '../actions';

export const device = (...props) => {
  return reducerDevice(...props, Actions.DEVICE_INFO);
};

export const DeviceReducer = {device};
