import React from 'react';
import logo from './logo.svg';
import './App.scss';
import PanelComponent from './common/panel-component';
import ContainerComponent from './common/container-component';
import UnAuthLayoutComponent from './common/un-authenticated/unauth-layout-component';
import HomeComponent from './common/home-component';
import LoginComponent from './modules/login/login-component';
import DetailsComponent from './modules/details-component';
import OtpComponent from './modules/otp/otp-component';
import AuthLayoutComponent from './common/auth-components/auth-layout-component';

import ErrorComponent from './common/error-component';
import AuthProvider from './common/auth'
import RequireAuthComponent from './common/require-auth-component'

import {
  Routes,
  Route,  
  Outlet,
} from "react-router-dom";
import {InfoContext} from './common/providers/info-context'

function App() {
  const profileContextVal={feature:"Profile"}
  const otpContextVal={feature:"Otp"}
   
  return (
  <AuthProvider>
    <Routes>
        <Route element={<UnAuthLayoutComponent />} >
          <Route path="/" element={<HomeComponent />} errorElement={<ErrorComponent />} />
          <Route path="/login" element={<LoginComponent />} />               
        </Route>
        <Route element={<AuthLayoutComponent />} >
         <Route
            path="/details"
            element={
              <InfoContext.Provider value={profileContextVal}>
              <RequireAuthComponent>
                <DetailsComponent />
              </RequireAuthComponent>
              </InfoContext.Provider>
            }
          />        
        <Route
        path="/otp"
        element={
              <InfoContext.Provider value={otpContextVal}>
              <RequireAuthComponent>
                <OtpComponent />
              </RequireAuthComponent>
              </InfoContext.Provider>
            }
         />
       </Route>
      </Routes>
  </AuthProvider>
      
  );
}

export default App;
