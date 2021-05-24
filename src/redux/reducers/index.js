import {combineReducers} from 'redux';
import {TokenReducer} from './TokenReducer';
import {NewsReducer} from './NewsReducer';

const rootReducer = combineReducers({
  ...TokenReducer,
  ...NewsReducer,
});

export default rootReducer;
