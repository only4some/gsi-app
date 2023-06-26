import React from 'react';
import logo from './logo.svg';
import '../../App.scss';
import Header from '../header';
import Footer from '../footer';
import Panel from '../panel';
import Container from '../container';
import {  
  Outlet
} from "react-router-dom";

function LayoutComponent() {
  return (
    <div className="">
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <Header />
      </div>
      </div>
      <div className="row">        
        {/* <div className="col-lg-12 col-12 col-md-8"> */}
          <div className="col-lg-2">
            <Panel />
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
        <Footer />
      </div>
      </div>
    </div>
    
    
      
  );
}

export default LayoutComponent;
