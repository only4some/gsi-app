import React,{useCallback} from 'react';
import $ from 'jquery';
import { useAppSelector,useAppDispatch } from '../../common/state-management/hooks'
import {hasLoggedIn} from '../../common/state-management/features/actions'


 export default function Login(){
        
        const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
        console.log('isLoggedIn',isLoggedIn);
        const dispatch = useAppDispatch()

        const handleClick = useCallback(
             () => {
             dispatch(hasLoggedIn("test"))             
             console.log('clicked called...');
             },
            [dispatch]
            )
       
    return (
        
<div className="login-form">
    <form >
        <h2 className="text-center">Log in-{isLoggedIn.toString()}</h2>       
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required  />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <div className="form-group">
            <button type="button" onClick={handleClick} className="btn btn-primary btn-block">Log in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
            <a href="#" className="float-right">Forgot Password?</a>
        </div>        
    </form>
    <p className="text-center"><a href="#">Create an Account</a></p>

</div>
        
    );

}

