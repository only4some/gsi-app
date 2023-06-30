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
export const SAGA_USER_LOGIN_CHECK="USER_LOGIN_CHECK"


export const hasLoggedIn = makeActionCreator(HAS_LOGGED_IN,'details');
export const userLoginSucceeded = makeActionCreator(USER_LOGIN_SUCCEEDED,'details');
export const sagaUserLoginCheck = makeActionCreator(SAGA_USER_LOGIN_CHECK,'details');