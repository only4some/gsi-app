import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {ErrorDetails} from '../../models/api-response'

export interface feature {
	name:string,
	isOtpRequired:boolean
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

export interface rootState{
	config:configState,
	user:UserState
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

export const rootInitialState:rootState = {
	config:configInitialState,
	user:userInitialState
}