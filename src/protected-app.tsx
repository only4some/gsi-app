import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeaderComponent from './common/header-component';
import FooterComponent from './common/footer-component';
import PanelComponent from './common/panel-component';
import ContainerComponent from './common/container-component';

function ProtectedApp() {
  return (
    <div className="">
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <HeaderComponent />
      </div>
      </div>
      <div className="row">        
        {/* <div className="col-lg-12 col-12 col-md-8"> */}
          <div className="col-lg-2">
            <PanelComponent />
          </div>
          <div className="col-lg-8">
            <ContainerComponent />
          </div>
          <div className="col-lg-2">
          
          </div>

        {/* </div> */}
      </div>
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <FooterComponent />
      </div>
      </div>
    </div>
    
    
      
  );
}

export default ProtectedApp;
