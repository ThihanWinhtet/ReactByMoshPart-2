import { ReactNode, useReducer } from "react";
import taskReducer from "../Reducer/taskReducer";
import TaskConext from "../Context/taskContext";


interface Props{
    children : ReactNode
}

const AuthProvider = ({children} : Props) => {
  let [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskConext.Provider value={{ tasks , dispatch }}>
        {children}
    </TaskConext.Provider>
  )
}

export default AuthProvider