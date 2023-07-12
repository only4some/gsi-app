import * as React from "react";

import {AuthContext} from './auth-context'
import { useAppSelector } from './state-management/hooks'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
  let user = useAppSelector((state) => state.user.details)
  console.log('inside auth prover..',isLoggedIn)
  console.log('val of user is ..',user)  

  let value = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


 

