import * as React from "react";
import { createContext } from "react"; 


export interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}
export const AuthContext = React.createContext<AuthContextType>(null!);