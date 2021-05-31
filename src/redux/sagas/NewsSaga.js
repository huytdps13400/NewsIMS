import API from '@utils/api';
import {hanldeErrorCode} from '@utils/handleErrorCode';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

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
    yield put({type: _onFail(Actions.GET_NEWS)});
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
    yield put({type: _onFail(Actions.GET_NEWSDETAILS)});
    hanldeErrorCode(error);
  }
}

function* getNewGroup(actions) {
  try {
    const res = yield API.get('getNewsGroup', actions.params);
    yield put({
      type: _onSuccess(Actions.GET_NEWS_GROUP),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_NEWS_GROUP)});
    hanldeErrorCode(error);
  }
}
function* getNewsHome(actions) {
  try {
    const res = yield API.get('getNews?', actions.params);
    yield put({
      type: _onSuccess(Actions.GET_NEWS_HOME),
      data: res.data,
      group_id: actions.params.group_id,
      totalPage: res.total_page,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_NEWS_HOME)});
    hanldeErrorCode(error);
  }
}

export function* watchNewsSagas() {
  yield takeLatest(Actions.GET_NEWS, getNews);
  yield takeLatest(Actions.GET_NEWSDETAILS, getNewsDetails);
  yield takeLatest(Actions.GET_NEWS_GROUP, getNewGroup);
  yield takeLatest(Actions.GET_NEWS_HOME, getNewsHome);
}
