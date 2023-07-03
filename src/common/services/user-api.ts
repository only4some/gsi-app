import axios from 'axios'
import ApiResponse,{ErrorDetails,ResponseData} from '../models/api-response'
import UserRequest from '../models/user-request'
import {sagaUserApiCompleted} from '../state-management/features/actions'
import { call, put } from 'redux-saga/effects'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});


export function* checkLogin(request:UserRequest) {
	
	
			const res= yield axios.post('/login/', {
			    email: request.email,
			    password: request.password
			  })
			  .then(function (response) {
			  	const resData:ResponseData ={
			  	data:response			  	
			  	};

			  	const resObj=new ApiResponse(resData);
			  	
			    console.log('response from api..',response);			    
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

	//}
return res;

}
//  })
