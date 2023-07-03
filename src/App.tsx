import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import taskReducer from "./state-management/Reducer/taskReducer";
import TaskConext from "./state-management/Context/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import statusReducer from "./state-management/Reducer/statusReducer";
import LoginContext from "./state-management/Context/loginContext";

function App() {
  let [user, loginDispatch] = useReducer(statusReducer, "");
  let [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <>
      <LoginContext.Provider value={{ user, dispatch: loginDispatch }}>
        <TaskConext.Provider value={{ tasks, dispatch: taskDispatch }}>
          <NavBar />
          <HomePage />
        </TaskConext.Provider>
      </LoginContext.Provider>
    </>
  );
}

export default App;
