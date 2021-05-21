import {all, fork} from 'redux-saga/effects';
import {watchTokenSagas} from './TokenSaga';

export default function* rootSaga() {
  yield all([fork(watchTokenSagas)]);
}
