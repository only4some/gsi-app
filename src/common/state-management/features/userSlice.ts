import {createSlice,PayloadAction} from '@reduxjs/toolkit'


export interface UserState {
  		isLoggedIn:boolean,
		details:any
}

export const initialState:UserState = {
 		isLoggedIn:false,
		details:null
}

	const slice = createSlice({
	name:'user',
	initialState,
	reducers: {		
		HAS_LOGGED_IN: (state,action: PayloadAction<number>)=> {
			console.log('has logged in received ..',action)
			state.isLoggedIn = true
			//return {...state,isLoggedIn:true}
		}		
	}
});
export const { HAS_LOGGED_IN } = slice.actions
export default slice.reducer