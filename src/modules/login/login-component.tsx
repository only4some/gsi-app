import React,{useCallback,useState,useRef,useEffect} from 'react';
import $ from 'jquery';
import { useAppSelector,useAppDispatch } from '../../common/state-management/hooks'
import {sagaUserLoginCheck} from '../../common/state-management/features/actions'
import {useNavigate} from 'react-router-dom'




 interface LoginInfo {
            email?:string,
            password?:string
        }

 export default function Login(){

        const [userText, setUserText] = useState("");
        const [passText, setPassText] = useState("");
        //const isAlive = useRef(true)
        const navigate = useNavigate()        
        const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)  
        const isOtpOpen = useAppSelector(state=>state.otp.isOpen);

        
            useEffect(() => {               
            if(isLoggedIn){                
                navigate('/details')
            }
             }, [isLoggedIn]);
        
        console.log('isLoggedIn',isLoggedIn);
        const dispatch = useAppDispatch()        
        let errorHTML = getErrorHTML(useAppSelector((state) => state.user.error))  
        let showLoader = useAppSelector((state) => state.user.isLoading)      
        const loaderHtml = getLoaderHTML(showLoader)        

        const handleClick = useCallback(
             () => {    
                dispatch(sagaUserLoginCheck({email:userText,password:passText}));
             
             },
            [dispatch,userText,passText]
            )

        const onChangeTxt=(val,type)=>{
            
            switch(type){
                case "EMAIL":
                setUserText(val);
                break;
                case "PASSWORD":
                setPassText(val);
                break;
                }            
        }
       
    return (
        
<div className="login-form">
{!isOtpOpen?
    <form>    
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
            <input  onChange={(event) => onChangeTxt(event.target.value,'PASSWORD')} type="password" className="form-control" placeholder="Password" required />
        </div>
        <div className="form-group">
            <button type="button" onClick={handleClick} className="btn btn-primary btn-block" disabled={showLoader}>Log in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
            <a href="#" className="float-right">Forgot Password?</a>
        </div>     
          
          
    </form>
    :<div></div> }
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
