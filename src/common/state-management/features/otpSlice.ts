import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {ErrorDetails} from '../../models/api-response'
import {rootInitialState,feature} from './rootSlice'



const slice=createSlice({
	name:'otp',
	initialState:rootInitialState.otp,
	reducers: {
		OTP_SHOW_MODAL:(state,action:PayloadAction<any>)=>{
			console.log('otp show modal..',action?.payload);
			state.isOpen = true;
			state.onCloseAction= action?.payload?.action;
			state.actionPayload = action?.payload?.data;
			state.isLoading = false;
			state.error = {}
			console.log('otp state..',state);
		},
		OTP_HIDE_MODAL:(state,action:PayloadAction<any>)=>{
			console.log('otp hide modal..',action?.payload);
			state.isOpen = false;
			state.error = {}
		},
		/*CONFIG_API_CALL_SUCCESS:(state,action:PayloadAction<feature[]>)=>{
			console.log('config api call success..');
			state.isLoading=false;
			state.error = {};
			const payload:any = action.payload;
			console.log('action.payload',payload?.payload)
			state.features= payload?.payload;
		},

		CONFIG_API_CALL_FAILLED:(state,action:PayloadAction<ErrorDetails>)=>{
			console.log('config api call failled..');
			state.isLoading = false
			state.error={code:action.payload?.code,message:action.payload?.message}
		}*/
	}

});

export const {OTP_SHOW_MODAL, OTP_HIDE_MODAL} = slice.actions
export default slice.reducer