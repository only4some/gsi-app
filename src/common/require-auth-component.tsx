import * as React from "react";
import {
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";
import {AuthContext} from './auth-context'
import {InfoContext} from './providers/info-context'
import {feature} from './state-management/features/rootSlice'


export default function RequireAuthComponent({ children }: { children: JSX.Element }) { 
  let auth = useAuth();
  let info = useInfo();
  let location = useLocation();
  console.log(' requireauth is..',children);  
  

  if (!auth.user) {
  console.log('user is not auth..')
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }else{    
      console.log('user is  auth..',auth?.features)
    if(checkIfOtpIsRequired(info.feature,auth?.features)){
      console.log('redirecting to otp screen..')
      return <Navigate to="/otp" state={{ from: location }} replace />;
    }
  }
  

  return children;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function useInfo() {
  return React.useContext(InfoContext);
}

function checkIfOtpIsRequired(module,features:feature[] | undefined){
  console.log(`inside checkIfOtpIsRequired:${features}--module:${module}`)
  let isOtpRequired:boolean =false;
  if(!!features){
  for(let idx=0;idx<features?.length;idx++){
    if( module===features[idx]?.feature_name){
      isOtpRequired = true;
      break;
    }
  }
}
  return isOtpRequired;
}