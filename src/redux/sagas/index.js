import {all, fork} from 'redux-saga/effects';
import {watchNewsSagas} from './NewsSaga';
import {watchPageByIDSagas} from './PageByIDSaga';
import {watchTokenSagas} from './TokenSaga';
import {watchUserSagas} from './UserSaga';

export default function* rootSaga() {
  yield all([fork(watchTokenSagas)]);
  yield all([fork(watchNewsSagas)]);
  yield all([fork(watchPageByIDSagas)]);
  yield all([fork(watchUserSagas)]);
}
