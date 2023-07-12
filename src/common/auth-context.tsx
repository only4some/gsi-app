import * as React from "react";
import { createContext } from "react"; 


export interface AuthContextType {
  user: any;  
}
export const AuthContext = React.createContext<AuthContextType>(null!);