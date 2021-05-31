import API from '@utils/api';
import {hanldeErrorCode} from '@utils/handleErrorCode';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* getLocation(actions) {
  try {
    const res = yield API.get('getLocation', actions.params);
    yield put({type: _onSuccess(Actions.GET_LOCATION), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_LOCATION)});
    hanldeErrorCode(error);
  }
}

export function* watchLocationSagas() {
  yield takeLatest(Actions.GET_LOCATION, getLocation);
}
