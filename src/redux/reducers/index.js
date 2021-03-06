import {combineReducers} from 'redux';
import {DeviceReducer} from './DeviceReducer';
import {NewsReducer} from './NewsReducer';
import {PageByIDReducer} from './PageByIDReducer';
import {TokenReducer} from './TokenReducer';
import {UserReducer} from './UserReducer';
import {ConfigReducer} from './ConfigReducer';
import {AddressReducer} from './AddressReducer';
import {LocationReducer} from './LocationReducer';
import {NotificationReducer} from './NotificationReducer';

const rootReducer = combineReducers({
  ...TokenReducer,
  ...NewsReducer,
  ...PageByIDReducer,
  ...UserReducer,
  ...DeviceReducer,
  ...ConfigReducer,
  ...AddressReducer,
  ...LocationReducer,
  ...NotificationReducer,
});

export default rootReducer;
