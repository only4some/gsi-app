import {createSlice,PayloadAction} from '@reduxjs/toolkit'


export interface UserState {
  		isLoggedIn:boolean,
		details:any,
		isLoading:boolean
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
		HAS_LOGGED_IN: (state,action: PayloadAction<number>)=> {
			console.log('has logged in received ..',action)
			state.isLoggedIn = true			
		},
		USER_LOGIN_SUCCEEDED: (state,action: PayloadAction<number>)=> {
			console.log('user login succ ..',action)
			state.isLoggedIn = true
			state.isLoading = false			
		}		
	}
});
export const { HAS_LOGGED_IN,USER_LOGIN_SUCCEEDED } = slice.actions
export default slice.reducer