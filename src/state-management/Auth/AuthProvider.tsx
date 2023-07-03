import { ReactNode, useReducer } from "react";
import LoginContext from "./loginContext";


export interface Login {
  type : 'LOGIN' ,
  userName : string
}
export interface LogOut {
  type : 'LOGOUT'  
}

const statusReducer = (state : string, action : Login | LogOut) : string => {
  if (action.type === 'LOGIN') return action.userName;
  if (action.type === 'LOGOUT') return '';
return '' 
}

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  let [user, dispatch] = useReducer(statusReducer, "");

  return (
    <LoginContext.Provider value={{ user, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default AuthProvider;
