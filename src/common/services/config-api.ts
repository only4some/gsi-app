import axios from 'axios'
import ApiResponse,{ErrorDetails,ResponseData} from '../models/api-response'
import {sagaUserApiCompleted} from '../state-management/features/actions'
import { call, put } from 'redux-saga/effects'

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 10000,
  withCredentials: true
});


export function* configApiGet() {
	
	
			const res= yield instance.get('/api/v1/config/')
			  .then(function (response) {
			  	const resData:ResponseData ={
			  	data:response			  	
			  	};

			  	const resObj=new ApiResponse(resData);
			  	
			    console.log('get response from config api..',response);
			    return resObj;
			    
			  })
			  .catch(function (error) {			  	
			  	const resData:ResponseData ={
				  	data:null,
				  	error:{code:error.code,message:error.message}
			  	};

			  	const resObj=new ApiResponse(resData);
			    console.log('api error from config--',error.code);
			    return resObj;
			    
			  });


return res;

}




