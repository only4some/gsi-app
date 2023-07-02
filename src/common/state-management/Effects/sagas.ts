import { call, put, takeEvery, takeLatest,take } from 'redux-saga/effects'
import {userLoginSucceeded,userApiCallStarted,userLoginFailled,sagaUserLoginFailled} from '../features/actions'
import {checkLogin} from '../../services/user-api'



function* checkUserLogin(emailStr,passwdStr) {
	let isSuccess:boolean = false;
  try {    
  	console.log('recieved saga..');
  	yield put(userApiCallStarted())
  	const apiCall = yield call(checkLogin,{email:emailStr,password:passwdStr})
  	console.log('apiResult inside saga',apiCall);
  	if(!!apiCall?.payload?.error){
  		console.log('error recieved..',sagaUserLoginFailled("ss"));
  		yield put(userLoginFailled({code:apiCall?.payload?.error.code,message:apiCall?.payload?.error.message}));
  		yield put(sagaUserLoginFailled("ss"));
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
   	yield take('USER_LOGIN_CHECK')
   	const res = yield call(checkUserLogin,"test","pest")
   	console.log('next line ')
   	if(res){
   		yield take('LOGOUT')
   	}
   	
   	console.log('saga completed.. ')
   }
}

export default gsiSaga