import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './features/userSlice'


const reducer = combineReducers({
  user

})
export const store = configureStore({	
	reducer	
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch