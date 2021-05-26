import {stateLoadMore} from '@redux/common/initialStates';
import {reducerDefault} from '@redux/common/reducers';
import Actions, {_onFail, _onSuccess, _onUnmount} from '@redux/actions';

export const notification = (state = stateLoadMore, action) => {
  switch (action.type) {
    case Actions.GET_NOTIFICATION: {
      return {...state, isLoading: true};
    }
    case _onSuccess(Actions.GET_NOTIFICATION): {
      const dataload = state.data
        ? [...state.data, ...action.data]
        : action.data;
      return {
        data: action.isLoadMore ? dataload : action.data,
        totalPage: action.total_page,
        isLoading: false,
      };
    }
    case _onFail(Actions.GET_NOTIFICATION): {
      return {...state, isLoading: false};
    }
    case _onUnmount(Actions.GET_NOTIFICATION): {
      return {...stateLoadMore};
    }
    default:
      return state;
  }
};

export const updatenotify = (...props) => {
  return reducerDefault(...props, Actions.UPDATE_NOTIFICATION);
};

export const totalnotify = (...props) => {
  return reducerDefault(...props, Actions.GET_TOTAL_NOTIFICATION);
};

export const NotificationReducer = {notification, updatenotify, totalnotify};
