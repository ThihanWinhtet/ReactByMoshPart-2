import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/Reducer/taskReducer";
import TaskConext from "./state-management/Context/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthProvider from "./state-management/Provider/AuthProvider";

function App() {
  let [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <>
      <AuthProvider>
        <TaskConext.Provider value={{ tasks, dispatch}}>
          <NavBar />
          <HomePage />
        </TaskConext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
