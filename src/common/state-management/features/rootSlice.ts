import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {ErrorDetails} from '../../models/api-response'

export interface feature {
	feature_name:string,
	is_otp_required:boolean
}

export interface configState{
	features:feature[],
	isLoading:boolean,
		error?:{
			code?:string,
			message?:string
		}	
}

export interface UserState {
  		isLoggedIn:boolean,
		details:any,
		isLoading:boolean,
		error?:{
			code?:string,
			message?:string
		}		
}

export interface otpState{
	moduleName?:string,
	isOpen?:boolean,
	onCloseAction?:string,
	actionPayload?:any,
	isLoading?:boolean,
	error?:{
			code?:string,
			message?:string
		}	
}

export interface rootState{
	config:configState,
	user:UserState,
	otp:otpState
}


export const configInitialState:configState = {
		features:[],
		isLoading:false			
}

export const userInitialState:UserState = {
 		isLoggedIn:false,
		details:null,
		isLoading:false
		
}
export const otpInitialState:otpState={
	moduleName:'',
	isOpen:false,
	onCloseAction:'',
	actionPayload:{},
	isLoading:false
}

export const rootInitialState:rootState = {
	config:configInitialState,
	user:userInitialState,
	otp:otpInitialState
}