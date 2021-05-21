import {_onFail, _onSuccess, _onUnmount} from '@redux/actions';
import {stateDefault, stateDevice, stateLoadMore} from './initialStates';

export const reducerDefault = (state = stateDefault, action, Action) => {
  switch (action.type) {
    case Action:
      return {...state, isLoading: true};
    case _onSuccess(Action):
      return {data: action.data, isLoading: false};
    case _onFail(Action):
      return {...state, isLoading: false};
    case _onUnmount(Action):
      return {...stateDefault};
    default:
      return state;
  }
};

export const reducerDevice = (state = stateDevice, action, Action) => {
  switch (action.type) {
    case Action: {
      return {
        ...state,
        device_token: action.device_token,
        device_name: action.device_name,
      };
    }
    default:
      return state;
  }
};

export const reducerLoadMore = (state = stateLoadMore, action, Action) => {
  switch (action.type) {
    case Action:
      return {...state, isLoading: true};
    case _onSuccess(Action):
      return {
        data: state.data ? [...state.data, ...action.data] : action.data,
        totalPage: action.totalPage,
        isLoading: false,
      };
    case _onFail(Action):
      return {...state, isLoading: false};
    case _onUnmount(Action):
      return {...stateLoadMore};
    default:
      return state;
  }
};
