import {combineReducers} from 'redux';
import {DeviceReducer} from './DeviceReducer';
import {NewsReducer} from './NewsReducer';
import {PageByIDReducer} from './PageByIDReducer';
import {TokenReducer} from './TokenReducer';
import {UserReducer} from './UserReducer';
import {ConfigReducer} from './ConfigReducer';
import {NotificationReducer} from './NotificationReducer';

const rootReducer = combineReducers({
  ...TokenReducer,
  ...NewsReducer,
  ...PageByIDReducer,
  ...UserReducer,
  ...DeviceReducer,
  ...ConfigReducer,
  ...NotificationReducer,
});

export default rootReducer;
