import * as React from "react";
import { createContext } from "react"; 
import {feature} from './state-management/features/rootSlice'


export interface AuthContextType {
  user: any,
  isLoggedIn?:boolean,
  features?:feature[]

  
}
export const AuthContext = React.createContext<AuthContextType>(null!);