export function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const USER_LOGIN_SUCCEEDED="user/USER_LOGIN_SUCCEEDED"
export const USER_LOGIN_FAILED="user/USER_LOGIN_FAILED"
export const USER_API_CALL_STARTED="user/USER_API_CALL_STARTED"

export const CONFIG_API_CALL_STARTED="config/CONFIG_API_CALL_STARTED"
export const CONFIG_API_CALL_SUCCESS="config/CONFIG_API_CALL_SUCCESS"
export const CONFIG_API_CALL_FAILLED="config/CONFIG_API_CALL_FAILLED"

export const OTP_SHOW_MODAL="otp/OTP_SHOW_MODAL"
export const OTP_HIDE_MODAL="otp/OTP_HIDE_MODAL"
export const OTP_VALIDATE_API_CALL_STARTED="otp/OTP_VALIDATE_API_CALL_STARTED"
export const OTP_VALIDATE_API_CALL_SUCCESS="otp/OTP_VALIDATE_API_CALL_SUCCESS"
export const OTP_VALIDATE_API_CALL_FAILED="otp/OTP_VALIDATE_API_CALL_FAILED"


export const SAGA_USER_LOGIN_CHECK="USER_LOGIN_CHECK"
export const SAGA_USER_API_COMPLETED ="SAGA_USER_API_COMPLETED"
export const SAGA_USER_GET_LIST ="SAGA_USER_GET_LIST"
export const SAGA_CONFIG_GET_FEATURES ="SAGA_CONFIG_GET_FEATURES"





export const userLoginSucceeded = makeActionCreator(USER_LOGIN_SUCCEEDED,'details');
export const userLoginFailled = makeActionCreator(USER_LOGIN_FAILED,'payload');
export const userApiCallStarted = makeActionCreator(USER_API_CALL_STARTED,'details');

export const configApiCallStarted = makeActionCreator(CONFIG_API_CALL_STARTED,'details');
export const configApiCallSuccess = makeActionCreator(CONFIG_API_CALL_SUCCESS,'payload');
export const configApiCallFailled = makeActionCreator(CONFIG_API_CALL_FAILLED,'payload');

export const otpShowModal = makeActionCreator(OTP_SHOW_MODAL,'payload');
export const otpHideModal = makeActionCreator(OTP_HIDE_MODAL,'payload');
export const otpValidateApiCallStarted = makeActionCreator(OTP_VALIDATE_API_CALL_STARTED,'payload');
export const otpValidateApiCallSuccess = makeActionCreator(OTP_VALIDATE_API_CALL_SUCCESS,'payload');
export const otpValidateApiCallFailed = makeActionCreator(OTP_VALIDATE_API_CALL_FAILED,'payload');



export const sagaUserLoginCheck = makeActionCreator(SAGA_USER_LOGIN_CHECK,'details');
export const sagaUserApiCompleted = makeActionCreator(SAGA_USER_API_COMPLETED,'details');
export const sagaUserApiGetList = makeActionCreator(SAGA_USER_GET_LIST,'details');
export const sagaConfigApiGet = makeActionCreator(SAGA_CONFIG_GET_FEATURES,'details');
