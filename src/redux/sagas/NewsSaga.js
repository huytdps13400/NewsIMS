import API from '@utils/api';
import { hanldeErrorCode } from '@utils/handleErrorCode';
import queryString from 'query-string';
import Config from 'react-native-config';
import { put, takeLatest } from 'redux-saga/effects';
import Actions, { _onFail, _onSuccess } from '../actions';

function* getNews(actions) {
  try {
    const res = yield API.get('getNews');
    yield put({
      type: _onSuccess(Actions.GET_NEWS),
      data: res.data,
      totalPage: res.total_page,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({ type: _onFail(Actions.GET_NEWS) });
    hanldeErrorCode(error);
  }
}
function* getNewsDetails(actions) {
  try {
    const res = yield API.get('getNews', actions.params);
    yield put({
      type: _onSuccess(Actions.GET_NEWSDETAILS),
      data: res.data,

    });
  } catch (error) {
    yield put({ type: _onFail(Actions.GET_NEWSDETAILS) });
    hanldeErrorCode(error);
  }
}

export function* watchNewsSagas() {
  yield takeLatest(Actions.GET_NEWS, getNews);
  yield takeLatest(Actions.GET_NEWSDETAILS, getNewsDetails);
}
