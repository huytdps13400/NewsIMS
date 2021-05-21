import { all, fork } from 'redux-saga/effects';
import { watchTokenSagas } from './TokenSaga';
import { watchNewsSagas } from './NewsSaga';

export default function* rootSaga() {
  yield all([fork(watchTokenSagas)]);
  yield all([fork(watchNewsSagas)]);
}
