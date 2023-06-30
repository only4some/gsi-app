import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './features/userSlice'
import createSagaMiddleware from 'redux-saga'
import gsiSaga from './Effects/sagas'

const reducer = combineReducers({
  user

})
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({	
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(gsiSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch