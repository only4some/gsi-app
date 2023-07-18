import React  from 'react';
import logo from './logo.svg';
import '../../App.scss';
import UnAuthHeaderComponent from './unauth-header-component';
import UnAuthFooterComponent from './unauth-footer-component';
import {  
  Outlet
} from "react-router-dom";

export default function UnAuthLayoutComponent(){ 
  return (
    <div id="unauthlayoutdiv" className="">
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <UnAuthHeaderComponent />                
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
        <UnAuthFooterComponent />
      </div>
      </div>
    </div>
    
    
      
  );

}


