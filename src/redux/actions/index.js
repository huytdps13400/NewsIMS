export default {
  GET_TOKEN: 'GET_TOKEN',
  // LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
  // SIGNUP_ACCOUNT: 'SIGNUP_ACCOUNT',
  // LOGOUT_ACCOUNT: 'LOGOUT_ACCOUNT',
  // TOKEN_USER: 'TOKEN_USER',
  GET_NEWS: 'GET_NEWS',
  GET_NEWSDETAILS: 'GET_NEWSDETAILS',
  GET_USER_INFORMATION: 'GET_USER_INFORMATION',
  GET_CONFIG: 'GET_CONFIG',
};

export function _onSuccess(action) {
  return action + '_SUCCESS';
}
export function _onFail(action) {
  return action + '_FAIL';
}
export function _onUnmount(action) {
  return action + '_UNMOUNT';
}
