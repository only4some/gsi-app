import React from 'react';
import logo from '../logo.svg';
import LoginDropdownComponent from './login-dropdown-component';
function HeaderComponent(){
    return (
        <div className="header row">
        <div className="col-lg-5">
        </div>
        <div className="col-lg-5">
        <div className="d-flex flex-row">
                <div className="neg-m-l-20"><img className="main-logo" src={logo} /></div>
                <div className="d-flex flex-column align-items-start pt-2">
                    <span className="header-main-label">Gsi</span>
                    <span className="header-sub-label">Global survey of india</span> 
                </div>
            </div>
        </div>
        <div className="col-lg-2">
            <LoginDropdownComponent />
        </div>
        </div>
    );

}
export default HeaderComponent;