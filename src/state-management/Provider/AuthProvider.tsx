import { ReactNode, useReducer } from "react";
import statusReducer from "../Reducer/statusReducer";
import LoginContext from "../Context/loginContext";

interface Props{
    children : ReactNode
}

const AuthProvider = ({children} : Props) => {
  let [user, dispatch] = useReducer(statusReducer, "");

  return (
    <LoginContext.Provider value={{ user, dispatch }}>
        {children}
    </LoginContext.Provider>
  )
}

export default AuthProvider