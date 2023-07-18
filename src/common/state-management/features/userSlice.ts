import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {ErrorDetails} from '../../models/api-response'
import {rootInitialState} from './rootSlice'

	const slice = createSlice({
	name:'user',
	initialState:rootInitialState.user,
	reducers: {		
		USER_API_CALL_STARTED: (state,action: PayloadAction<number>)=> {
			
			state.isLoading = true			
			state.error = {}
		},
		HAS_LOGGED_IN: (state,action: PayloadAction<number>)=> {
			
			state.isLoggedIn = true			
		},
		USER_LOGIN_SUCCEEDED: (state,action: PayloadAction<number>)=> {
			
			state.isLoggedIn = true
			state.isLoading = false
			state.details =	{name:"sandy",id:"asd2ss2s"}
		},
		USER_LOGIN_FAILED: (state,action:PayloadAction<ErrorDetails>)=> {
			
			state.isLoggedIn = false
			state.isLoading = false
			state.error={code:action.payload?.code,message:action.payload?.message}
		}		
	}
});
export const { HAS_LOGGED_IN,USER_LOGIN_SUCCEEDED,USER_API_CALL_STARTED,USER_LOGIN_FAILED } = slice.actions
export default slice.reducer