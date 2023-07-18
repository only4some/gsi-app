import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {ErrorDetails} from '../../models/api-response'
import {rootInitialState,feature} from './rootSlice'



const slice=createSlice({
	name:'config',
	initialState:rootInitialState.config,
	reducers: {
		CONFIG_API_CALL_STARTED:(state,action:PayloadAction<any>)=>{
			
			state.isLoading=true;
			state.error = {}
		},
		CONFIG_API_CALL_SUCCESS:(state,action:PayloadAction<feature[]>)=>{			
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
		}
	}

});

export const {CONFIG_API_CALL_STARTED, CONFIG_API_CALL_SUCCESS,CONFIG_API_CALL_FAILLED} = slice.actions
export default slice.reducer