import { call, put, takeEvery, takeLatest, take, all } from 'redux-saga/effects'
import {userLoginSucceeded,userApiCallStarted,userLoginFailled,sagaUserApiGetList,configApiCallStarted,configApiCallSuccess,configApiCallFailled} from '../features/actions'
import {checkLogin,getUserLists} from '../../services/user-api'
import {configApiGet} from '../../services/config-api'
import {ErrorDetails} from '../../models/api-response'


function* checkUserLogin(emailStr,passwdStr) {
	let isSuccess:boolean = false;
  try {    
  	console.log('recieved saga..');
  	yield put(userApiCallStarted())
  	const apiCall = yield call(checkLogin,{email:emailStr,password:passwdStr})

  	console.log('apiResult inside saga',apiCall);
  	if(!!apiCall?.payload?.error){  		
  		const errorDetails:ErrorDetails={
  			code:apiCall?.payload?.error.code,
  			message:apiCall?.payload?.error.message
  		}
  		console.log('sending  error details from saga..',errorDetails)  		
  		yield put(userLoginFailled(errorDetails));  		
  	}else{
  		console.log('user login success ..');
  		isSuccess = true;
  		yield put(userLoginSucceeded({details:""}));
  	}
  
    console.log('sent action to store.');
  } catch (e:any) {
    yield put({ type: 'user/USER_LOGIN_FAILED', message: e.message })
  }
   return isSuccess;
}

function* gsiSaga() {
  //yield takeEvery('USER_LOGIN_CHECK', checkUserLogin)
   while (true) {
   	const actionData = yield take('USER_LOGIN_CHECK')   	
   	const res = yield call(checkUserLogin,actionData?.details?.email,actionData?.details?.password)
   	console.log('next line ',res)
   	if(res){
   		yield take('LOGOUT')
   	}
   	
   	console.log('saga1 completed.. ')
   }
}

function* gsiDetailsSaga() {  
   while (true) {
   	const actionData = yield take('SAGA_USER_GET_LIST')   	
   	const res = yield call(getUserLists)
   	console.log('next line for get details..',res)
   	console.log('saga2 completed.. ')
   }
}

function* gsiConfigSaga() {
  let isSuccess = false;

  
   while (true) {
    try{
    const actionData = yield take('SAGA_CONFIG_GET_FEATURES')
     yield put(configApiCallStarted())
    const apiCall = yield call(configApiGet)    
      console.log('apiResult inside get config saga',apiCall);
    if(!!apiCall?.payload?.error){      
      const errorDetails:ErrorDetails={
        code:apiCall?.payload?.error.code,
        message:apiCall?.payload?.error.message
      }
      console.log('sending config error details from saga..',errorDetails)      
      yield put(configApiCallFailled(errorDetails));      
    }else{
      console.log('get config success ..');
      isSuccess = true;
      yield put(configApiCallSuccess({payload:apiCall?.payload?.data}));
    }

    console.log('saga3 completed.. ')
  }catch(e:any){
       const errorDetails:ErrorDetails={
        code:e?.payload?.error.code,
        message:e?.payload?.error.message
      }
      console.log('sending config exc details from saga..',errorDetails)      
      yield put(configApiCallFailled(errorDetails));      
  } 
   }
  }


export default function* rootGsiSaga() {
  yield all([
    gsiSaga(),
    gsiDetailsSaga()
  ])
  // code after all-effect
}

//export default gsiSaga