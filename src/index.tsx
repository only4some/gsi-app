import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/scss/bootstrap.scss'
import './common/main.scss'
import './custom-var.scss'
import ErrorComponent from './common/error-component'
import { BrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>    
      <BrowserRouter>
      <App />
      </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
