import * as React from "react";
import {
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";
import {AuthContext} from './auth-context'


export default function RequireAuthComponent({ children }: { children: JSX.Element }) {
 console.log('inside requireauth..');
  let auth = useAuth();
  let location = useLocation();
  console.log(' requireauth is..',auth);

  if (!auth.user) {
  console.log('user is not auth..')
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log('user is  auth..')

  return children;
}

function useAuth() {
  return React.useContext(AuthContext);
}