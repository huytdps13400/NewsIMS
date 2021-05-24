import {stateDefault} from '@redux/common/initialStates';
import {reducerDefault} from '@redux/common/reducers';
import Storage from '@utils/storage';
import Actions, {_onUnmount} from '../actions';

export const login = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_ACCOUNT);
};

export const signUp = (...props) => {
  return reducerDefault(...props, Actions.SIGNUP_ACCOUNT);
};

export const userInfo = (...props) => {
  return reducerDefault(...props, Actions.GET_USER_INFORMATION);
};

export const updateUserInfo = (...props) => {
  return reducerDefault(...props, Actions.UPDATE_USER_INFORMATION);
};

export const logOut = (...props) => {
  return reducerDefault(...props, Actions.LOGOUT_ACCOUNT);
};

export const updatePassUser = (...props) => {
  return reducerDefault(...props, Actions.UPDATE_PASS_USER);
};

export const forgetPassUser = (...props) => {
  return reducerDefault(...props, Actions.FORGET_PASS_USER);
};

export const tokenUser = (state = stateDefault, action) => {
  switch (action.type) {
    case Actions.TOKEN_USER: {
      Storage.setItem('TOKEN_USER', action.data);
      return {...state, data: action.data};
    }
    case _onUnmount(Actions.TOKEN_USER):
      return {...stateDefault};
    default:
      return state;
  }
};

export const UserReducer = {
  login,
  signUp,
  userInfo,
  updateUserInfo,
  logOut,
  tokenUser,
  updatePassUser,
  forgetPassUser,
};
