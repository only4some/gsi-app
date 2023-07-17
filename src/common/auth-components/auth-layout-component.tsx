import React,{useState,useMemo} from 'react';
import logo from './logo.svg';
import '../../App.scss';
import AuthHeaderComponent from './auth-header-component';
import AuthFooterComponent from './auth-footer-component';
import {  
  Outlet
} from "react-router-dom";

export default function AuthLayoutComponent(){

  

  return (
    <div className="">
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <AuthHeaderComponent />
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


