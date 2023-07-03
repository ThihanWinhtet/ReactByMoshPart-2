import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import taskReducer from "./state-management/Reducer/taskReducer";
import TaskConext from "./state-management/Context/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";

function App() {
  let [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <>
      <TaskConext.Provider value={{tasks, dispatch}}>
        <NavBar/>
        <HomePage/>
      </TaskConext.Provider>
    </>
  );
}

export default App;
