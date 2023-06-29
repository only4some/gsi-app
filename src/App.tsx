import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeaderComponent from './common/header-component';
import FooterComponent from './common/footer-component';
import PanelComponent from './common/panel-component';
import ContainerComponent from './common/container-component';
import UnAuthLayoutComponent from './common/un-authenticated/unauth-layout-component';
import HomeComponent from './common/home-component';
import LoginComponent from './modules/login/login-component';
import DetailsComponent from './modules/details-component';

import ErrorComponent from './common/error-component';
import AuthProvider from './common/auth'
import RequireAuthComponent from './common/require-auth-component'
import {
  Routes,
  Route,  
  Outlet,
} from "react-router-dom";

function App() {
  return (
  <AuthProvider>
    <Routes>
        <Route element={<UnAuthLayoutComponent />} >
          <Route path="/" element={<HomeComponent />} errorElement={<ErrorComponent />} />
          <Route path="/login" element={<LoginComponent />} />               
         <Route
            path="/details"
            element={
              <RequireAuthComponent>
                <DetailsComponent />
              </RequireAuthComponent>
            }
          />
        </Route>
      </Routes>
  </AuthProvider>
      
  );
}

export default App;
