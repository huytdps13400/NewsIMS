export default {
  GET_TOKEN: 'GET_TOKEN',
  TOKEN_USER: 'TOKEN_USER',
  GET_CONFIG: 'GET_CONFIG',
  LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
  SIGNUP_ACCOUNT: 'SIGNUP_ACCOUNT',
  LOGOUT_ACCOUNT: 'LOGOUT_ACCOUNT',
  GET_PAGE_BY_ID: 'GET_PAGE_BY_ID',
  GET_USER_INFORMATION: 'GET_USER_INFORMATION',
  GET_NEWS: 'GET_NEWS',
  GET_NEWSDETAILS: 'GET_NEWSDETAILS',
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
