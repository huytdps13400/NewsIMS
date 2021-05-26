export default {
  GET_TOKEN: 'GET_TOKEN',
  TOKEN_USER: 'TOKEN_USER',
  GET_CONFIG: 'GET_CONFIG',
  LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
  SIGNUP_ACCOUNT: 'SIGNUP_ACCOUNT',
  LOGOUT_ACCOUNT: 'LOGOUT_ACCOUNT',
  FORGET_PASS_USER: 'FORGET_PASS_USER',
  GET_PAGE_BY_ID: 'GET_PAGE_BY_ID',
  GET_USER_INFORMATION: 'GET_USER_INFORMATION',
  GET_NEWS: 'GET_NEWS',
  GET_NEWSDETAILS: 'GET_NEWSDETAILS',
  UPDATE_PASS_USER: 'UPDATE_PASS_USER',
  UPDATE_USER_INFORMATION: 'UPDATE_USER_INFORMATION',
  GET_NOTIFICATION: 'GET_NOTIFICATION',
  UPDATE_NOTIFICATION: 'UPDATE_NOTIFICATION',
  GET_TOTAL_NOTIFICATION: 'GET_TOTAL_NOTIFICATION',
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
