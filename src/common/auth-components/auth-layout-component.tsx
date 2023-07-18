import React,{useState,useMemo,useEffect,useCallback} from 'react';
import logo from './logo.svg';
import '../../App.scss';
import AuthHeaderComponent from './auth-header-component';
import AuthFooterComponent from './auth-footer-component';
import {  
  Outlet
} from "react-router-dom";

import { useAppSelector,useAppDispatch } from '../state-management/hooks'
import { otpHideModal } from '../state-management/features/actions'

import { makeActionCreator } from '../state-management/features/actions'

import OtpModalComponent from '../components/otp/otp-modal-component'

export default function AuthLayoutComponent(){

  const isOpen = useAppSelector(state=>state.otp.isOpen);
  const onCloseAction = useAppSelector(state=>state.otp.onCloseAction);
  const onCloseActionPayload = useAppSelector(state=>state.otp.actionPayload);
  const dispatch = useAppDispatch();
  const onClose=useCallback(() => {              
               const act = makeActionCreator(onCloseAction,"details")
               console.log(`action :${act}--payload:${onCloseActionPayload}`)
              dispatch(otpHideModal());
              dispatch(act({shouldShowOtp:false}))
             
             },
            [dispatch,makeActionCreator,onCloseAction,onCloseActionPayload]//,modalIsOpen,props]
            )

  let props={   
   closeModal:onClose,
   modalIsOpen:isOpen,
   contentLabel:'Otp verification required !'
  }
  
 useEffect(() => {                  
               props.modalIsOpen= isOpen
             
             },
            [isOpen,props]//,modalIsOpen,props]
            )



  return (
    <div className="">
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <AuthHeaderComponent />
        <OtpModalComponent props={props} />
      </div>
      </div>
      <div className="row">        
        {/* <div className="col-lg-12 col-12 col-md-8"> */}
          <div className="col-lg-2">
            
          </div>
          <div className="col-lg-8">
             <Outlet />
          </div>
          <div className="col-lg-2">
          
          </div>

        {/* </div> */}
      </div>
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <AuthFooterComponent />
      </div>
      </div>
    </div>
    
    
      
  );

}


