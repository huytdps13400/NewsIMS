import {all, fork} from 'redux-saga/effects';
import {watchAddressSagas} from './AddressSaga';
import {watchConfigSagas} from './ConfigSaga';
import {watchLocationSagas} from './LocationSaga';
import {watchNewsSagas} from './NewsSaga';
import {watchPageByIDSagas} from './PageByIDSaga';
import {watchTokenSagas} from './TokenSaga';
import {watchUserSagas} from './UserSaga';
import {watchNotificationSagas} from './NotificationSaga';

export default function* rootSaga() {
  yield all([fork(watchTokenSagas)]);
  yield all([fork(watchNewsSagas)]);
  yield all([fork(watchPageByIDSagas)]);
  yield all([fork(watchUserSagas)]);
  yield all([fork(watchConfigSagas)]);
  yield all([fork(watchAddressSagas)]);
  yield all([fork(watchLocationSagas)]);
  yield all([fork(watchNotificationSagas)]);
}
