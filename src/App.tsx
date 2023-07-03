import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/Reducer/taskReducer";
import TaskConext from "./state-management/Context/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthProvider from "./state-management/Provider/AuthProvider";
import TaskProvider from "./state-management/Provider/TaskProvider";

function App() {

  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
