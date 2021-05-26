import API from '@utils/api';
import {hanldeErrorCode} from '@utils/handleErrorCode';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* getAddress(actions) {
  try {
    const res = yield API.get('getAddressBook', actions.params);
    yield put({
      type: _onSuccess(Actions.GET_ADDRESS),
      data: Object.values(res.data),
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_ADDRESS)});
    hanldeErrorCode(error);
  }
}

export function* watchAddressSagas() {
  yield takeLatest(Actions.GET_ADDRESS, getAddress);
}
