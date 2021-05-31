import API from '@utils/api';
import queryString from 'query-string';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* loginFB(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('loginFb', body);
    yield put({type: _onSuccess(Actions.LOGIN_FACEBOOK), data: res.token});
    yield put({type: Actions.TOKEN_USER, data: res.token});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {user: res.token},
    });
  } catch (error) {
    yield put({type: _onFail(Actions.LOGIN_FACEBOOK)});
  }
}

function* loginGG(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('loginGg', body);
    yield put({type: _onSuccess(Actions.LOGIN_GOOGLE), data: res.token});
    yield put({type: Actions.TOKEN_USER, data: res.token});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {user: res.token},
    });
  } catch (error) {
    yield put({type: _onFail(Actions.LOGIN_GOOGLE)});
  }
}

function* loginApple(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('loginAp', body);
    yield put({type: _onSuccess(Actions.LOGIN_APPLE), data: res.token});
    yield put({type: Actions.TOKEN_USER, data: res.token});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {user: res.token},
    });
  } catch (error) {
    yield put({type: _onFail(Actions.LOGIN_APPLE)});
  }
}

export function* watchSocialLoginSagas() {
  yield takeLatest(Actions.LOGIN_FACEBOOK, loginFB);
  yield takeLatest(Actions.LOGIN_GOOGLE, loginGG);
  yield takeLatest(Actions.LOGIN_APPLE, loginApple);
}
