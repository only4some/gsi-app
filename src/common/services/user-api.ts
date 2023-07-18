import axios from 'axios'
import ApiResponse,{ErrorDetails,ResponseData} from '../models/api-response'
import UserRequest from '../models/user-request'
import {sagaUserApiCompleted} from '../state-management/features/actions'
import { call, put } from 'redux-saga/effects'

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 10000,
  withCredentials: true
});


export function* checkLogin(request:UserRequest) {
	
	
			const res= yield instance.post('/api/v1/auth/login/', {
			    email: request.email,
			    password: request.password,
			    crossDomain: true,

			  },{withCredentials: true})
			  .then(function (response) {
			  	const resData:ResponseData ={
			  	data:response?.data	
			  	};

			  	const resObj=new ApiResponse(resData);
			  	
			    //console.log('response from api..',response);			    
			    return resObj;
			    
			  })
			  .catch(function (error) {			  	
			  	let errors= error?.response?.data?.errors;
			  	let errObj = {code:'',message:''}			  	
			  	if(errors && errors?.length>0){
			  		errObj.code = errors[0].status
			  		errObj.message = errors[0].detail
			  	}
			  	else{
			  		errObj.message = error?.code
			  	}
				  const resData:ResponseData ={
			  		data:null,
			  		error:{code:errObj.code,message:errObj.message}
			  	};

			  	const resObj=new ApiResponse(resData);
			    console.log('api error--',error.code);
			    return resObj;			    
			  });

	
return res;

}


export function* getUserLists() {
	
	
			const res= yield instance.get('/api/v1/site/')
			  .then(function (response) {
			  	const resData:ResponseData ={
			  	data:response			  	
			  	};

			  	const resObj=new ApiResponse(resData);
			  	
			    //console.log('get response from api..',response);			    
			    return resObj;
			    
			  })
			  .catch(function (error) {			  	
			  const resData:ResponseData ={
			  	data:null,
			  	error:{code:error.code,message:error.message}
			  	};

			  	const resObj=new ApiResponse(resData);
			    console.log('api error--',error.code);
			    return resObj;
			    
			  });


return res;

}




