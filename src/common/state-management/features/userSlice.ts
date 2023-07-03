import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {ErrorDetails} from '../../models/api-response'


export interface UserState {
  		isLoggedIn:boolean,
		details:any,
		isLoading:boolean,
		error?:{
			code?:string,
			message?:string
		}
}

export const initialState:UserState = {
 		isLoggedIn:false,
		details:null,
		isLoading:false
		
}

	const slice = createSlice({
	name:'user',
	initialState,
	reducers: {		
		USER_API_CALL_STARTED: (state,action: PayloadAction<number>)=> {
			console.log('USER_API_CALL_STARTED  received ..',action)
			state.isLoading = true			
			state.error = {}
		},
		HAS_LOGGED_IN: (state,action: PayloadAction<number>)=> {
			console.log('has logged in received ..',action)
			state.isLoggedIn = true			
		},
		USER_LOGIN_SUCCEEDED: (state,action: PayloadAction<number>)=> {
			console.log('user login succ ..',action)
			state.isLoggedIn = true
			state.isLoading = false			
		},
		USER_LOGIN_FAILED: (state,action:PayloadAction<ErrorDetails>)=> {
			console.log('user login failled ..',action)
			state.isLoggedIn = false
			state.isLoading = false
			state.error={code:action.payload?.code,message:action.payload?.message}
		}		
	}
});
export const { HAS_LOGGED_IN,USER_LOGIN_SUCCEEDED,USER_API_CALL_STARTED,USER_LOGIN_FAILED } = slice.actions
export default slice.reducer