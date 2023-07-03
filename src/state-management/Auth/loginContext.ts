import React from "react";
import { LogOut, Login } from "./AuthProvider";

interface loginContextType {
  user: string;
  dispatch: React.Dispatch<Login | LogOut>;
}

const LoginContext = React.createContext<loginContextType>(
  {} as loginContextType
);
export default LoginContext;
