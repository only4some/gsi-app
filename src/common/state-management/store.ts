import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './features/userSlice'
import config from './features/configSlice'
import otp from './features/otpSlice'
import createSagaMiddleware from 'redux-saga'
import rootGsiSaga from './Effects/sagas'

const reducer = combineReducers({
  user,
  config,
  otp
})
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({	
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootGsiSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch