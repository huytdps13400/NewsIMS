import API from '@utils/api';
import {hanldeErrorCode} from '@utils/handleErrorCode';
import queryString from 'query-string';
import Config from 'react-native-config';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* getToken() {
  const data = {
    username: Config.ACCESS_USERNAME,
    password: Config.ACCESS_PASSWORD,
  };

  const body = queryString.stringify(data);

  try {
    const res = yield API.post('getToken', body);
    yield put({type: _onSuccess(Actions.GET_TOKEN), data: res.token});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_TOKEN)});
    hanldeErrorCode(error);
  }
}

export function* watchTokenSagas() {
  yield takeLatest(Actions.GET_TOKEN, getToken);
}
