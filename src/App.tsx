import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/Auth/AuthProvider";
import TaskProvider from "./state-management/tasks/TaskProvider";
import Counter from "./state-management/Reducer/Counter";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <Counter/>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
