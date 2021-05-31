import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const loginFacebook = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_FACEBOOK);
};

export const loginGoogle = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_GOOGLE);
};

export const loginApple = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_APPLE);
};

export const SocialLoginReducer = {
  loginFacebook,
  loginGoogle,
  loginApple,
};
