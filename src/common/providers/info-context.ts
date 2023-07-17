import * as React from "react";
import { createContext } from "react"; 

export interface InfoContextType{
	feature?:string	
}

export const InfoContext = React.createContext<InfoContextType>(null!)