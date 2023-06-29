import React from 'react';
import logo from '../../logo.svg';
import LoginDropdownComponent from '../login-dropdown-component';

class UnAuthHeaderComponent extends React.Component{
private _isLoginPage:boolean=false;
constructor(props:any) {
        super(props);   
        
      }
    
    render() { 
    console.log(window.location.pathname);
    let loginComp;
    if(!this._isLoginPage){
       loginComp =  <LoginDropdownComponent />;
    }else{
        loginComp='';
    }

    return (
        <div className="header row">
        <div className="col-lg-4">
        </div>
        <div className="col-lg-6">
        <div className="d-flex flex-row">
                <div className="neg-m-l-20"><img className="main-logo" src={logo} /></div>
                <div className="d-flex flex-column align-items-start pt-2">
                    <span className="header-main-label">Gsi</span>
                    <span className="header-sub-label">Global survey of india</span> 
                </div>
            </div>
        </div>
        <div className="col-lg-2">
           {loginComp}
        </div>
        </div>
    );

    }
}
export default UnAuthHeaderComponent;