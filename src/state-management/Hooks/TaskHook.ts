import { useContext } from "react";
import LoginContext from "../Context/loginContext";


const TaskHook = () => useContext(LoginContext);
export default TaskHook;
