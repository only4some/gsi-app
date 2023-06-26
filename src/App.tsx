import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './common/header';
import Footer from './common/footer';
import Panel from './common/panel';
import Container from './common/container';
import LayoutComponent from './common/un-authenticated/layout-component';
import HomeComponent from './common/home-component';
import LoginComponent from './modules/login/login';
import DetailsComponent from './modules/details-component';

import ErrorComponent from './common/error-component';
import AuthProvider from './common/auth'
import RequireAuth from './common/auth'
import {
  Routes,
  Route,  
  Outlet,
} from "react-router-dom";

function App() {
  return (
  <AuthProvider>
    <Routes>
        <Route element={<LayoutComponent />} >
          <Route path="/" element={<HomeComponent />} errorElement={<ErrorComponent />} />
          <Route path="/login" element={<LoginComponent />} />               
         <Route
            path="/details"
            element={
              <RequireAuth>
                <DetailsComponent />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
  </AuthProvider>
      
  );
}

export default App;
