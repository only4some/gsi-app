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
const HAS_LOGGED_OUT = "HAS_LOGGED_OUT";

export const hasLoggedIn = makeActionCreator(HAS_LOGGED_IN,'details');
export const hasLoggedOut = makeActionCreator(HAS_LOGGED_OUT,'details');