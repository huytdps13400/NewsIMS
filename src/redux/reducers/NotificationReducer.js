import Actions, {_onFail, _onSuccess, _onUnmount} from '@redux/actions';
import {stateLoadMore} from '@redux/common/initialStates';
import {reducerDefault} from '@redux/common/reducers';

const notification = (state = stateLoadMore, action, actions) => {
  switch (action.type) {
    case actions:
      return {...state, isLoading: true};
    case Actions.CHANGE_STATUS_NOTIFICATION: {
      const newData = state.data.map(value => {
        return value.item_id === action.item_id
          ? {...value, status: 'readed'}
          : value;
      });
      return {...state, data: newData};
    }
    case _onSuccess(Actions.GET_NOTIFICATION): {
      const dataLoad = state.data
        ? [...state.data, ...action.data]
        : action.data;
      return {
        data: action.isLoadMore ? dataLoad : action.data,
        totalPage: action.totalPage,
        isLoading: false,
      };
    }
    case _onFail(Actions.GET_NOTIFICATION):
      return {...state, isLoading: false};
    case _onUnmount(Actions.GET_NOTIFICATION):
      return {...stateLoadMore};
    default:
      return state;
  }
};

export const updatenotify = (...props) => {
  return reducerDefault(...props, Actions.UPDATE_NOTIFICATION);
};

export const totalNotify = (...props) => {
  return reducerDefault(...props, Actions.GET_TOTAL_NOTIFICATION);
};
export const NotificationReducer = {
  updatenotify,
  totalNotify,
  notification,
};
