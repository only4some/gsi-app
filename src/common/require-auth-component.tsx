import * as React from "react";
import {
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";
import {AuthContext} from './auth-context'
import {InfoContext} from './providers/info-context'

export default function RequireAuthComponent({ children }: { children: JSX.Element }) { 
  let auth = useAuth();
  let info = useInfo();
  let location = useLocation();
  if (!auth.user) {  
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  

  return children;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function useInfo() {
  return React.useContext(InfoContext);
}