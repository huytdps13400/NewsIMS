import {combineReducers} from 'redux';
import {TokenReducer} from './TokenReducer';

const rootReducer = combineReducers({
  ...TokenReducer,
});

export default rootReducer;
