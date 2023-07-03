import React,{useCallback} from 'react';
import $ from 'jquery';
import { useAppSelector,useAppDispatch } from '../../common/state-management/hooks'
import {hasLoggedIn,sagaUserLoginCheck} from '../../common/state-management/features/actions'

 interface LoginInfo {
            email?:string,
            password?:string
        }

 export default function Login(){
        
        const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
        console.log('isLoggedIn',isLoggedIn);
        const dispatch = useAppDispatch()        
        let errorHTML = getErrorHTML(useAppSelector((state) => state.user.error))  
        let showLoader = useAppSelector((state) => state.user.isLoading)      
        const loaderHtml = getLoaderHTML(showLoader)
        let loginInfo:LoginInfo={email:'',password:''}

        const handleClick = useCallback(
             () => {
             dispatch(sagaUserLoginCheck({email:loginInfo?.email,password:loginInfo?.password}));
             console.log('clicked called...');
             },
            [dispatch]
            )

        const onChangeTxt=(val,type)=>{
            switch(type){
                case "EMAIL":
                loginInfo.email=val;
                break;
                case "PASSWORD":
                loginInfo.password=val;
                break;
            }
        }
       
    return (
        
<div className="login-form">
    <form >
        <div className="d-flex flex-row justify-content-center">
            <h2 className="text-center">Log in</h2> 
            {loaderHtml}
         </div>
         <div className="d-flex flex-row">
         {errorHTML}
         </div>
        <div className="form-group">
            <input onChange={(event) => onChangeTxt(event.target.value,'EMAIL')}  type="text" className="form-control" placeholder="Username" required  />
        </div>
        <div className="form-group">
            <input onChange={(event) => onChangeTxt(event.target.value,'PASSWORD')} type="password" className="form-control" placeholder="Password" required />
        </div>
        <div className="form-group">
            <button type="button" onClick={handleClick} className="btn btn-primary btn-block" disabled={showLoader}>Log in</button>
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
function getErrorHTML(error:any){
    let html=<div className="error-text"></div>;
    if(!!error){
        html=<div className="error-text">{error.message}</div>
    }
    return html;
}

function getLoaderHTML(isLoading:boolean){
    return isLoading?<div className="load-spinner-sm ml-2"></div>:<div></div>    
}
