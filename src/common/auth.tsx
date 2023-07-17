import * as React from "react";

import {AuthContext} from './auth-context'
import { useAppSelector } from './state-management/hooks'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
  let user = useAppSelector((state) => state.user.details)
  let features = useAppSelector((state) => state.config.features)
  console.log('inside auth prover..',isLoggedIn)
  console.log('val of features is ..',features)  

  const value = { user:user,isLoggedIn:isLoggedIn,features:features };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


 

