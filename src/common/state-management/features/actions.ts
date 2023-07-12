function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}
export const HAS_LOGGED_IN = "user/HAS_LOGGED_IN";
export const USER_LOGIN_SUCCEEDED="user/USER_LOGIN_SUCCEEDED"
export const USER_LOGIN_FAILED="user/USER_LOGIN_FAILED"
export const USER_API_CALL_STARTED="user/USER_API_CALL_STARTED"
export const SAGA_USER_LOGIN_CHECK="USER_LOGIN_CHECK"
export const SAGA_USER_API_COMPLETED ="SAGA_USER_API_COMPLETED"
export const SAGA_USER_GET_LIST ="SAGA_USER_GET_LIST"



export const hasLoggedIn = makeActionCreator(HAS_LOGGED_IN,'details');
export const userLoginSucceeded = makeActionCreator(USER_LOGIN_SUCCEEDED,'details');
export const userLoginFailled = makeActionCreator(USER_LOGIN_FAILED,'payload');
export const userApiCallStarted = makeActionCreator(USER_API_CALL_STARTED,'details');
export const sagaUserLoginCheck = makeActionCreator(SAGA_USER_LOGIN_CHECK,'details');
export const sagaUserApiCompleted = makeActionCreator(SAGA_USER_API_COMPLETED,'details');
export const sagaUserApiGetList = makeActionCreator(SAGA_USER_GET_LIST,'details');
