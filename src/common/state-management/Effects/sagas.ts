import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {userLoginSucceeded} from '../features/actions'


function* checkUserLogin(action) {
  try {    
  	console.log('recieved saga..',action);
  	yield put(userLoginSucceeded({name:"my name"}))
    //yield put({ type: 'user/USER_LOGIN_SUCCEEDED', user: {name:"my name"} })
    console.log('sent action to store.');
  } catch (e:any) {
    yield put({ type: 'user/USER_LOGIN_FAILED', message: e.message })
  }
}

function* gsiSaga() {
  yield takeEvery('USER_LOGIN_CHECK', checkUserLogin)
}

export default gsiSaga