import React,{useCallback,useState,useRef,useEffect} from 'react';
import {sagaUserApiGetList} from '../../common/state-management/features/actions'
import { useAppSelector,useAppDispatch } from '../../common/state-management/hooks'

export default function OtpComponent(){
  const dispatch = useAppDispatch()        

   useEffect(() => {   
            console.log('inside otp..')
              dispatch(sagaUserApiGetList());

                }, []);
    return (
        
             <div className="d-flex d-flex-row">            
           <h3>I am OTP component</h3>
         </div>
        
    );



}