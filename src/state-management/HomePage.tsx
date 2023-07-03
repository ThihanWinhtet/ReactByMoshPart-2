import { useContext } from "react";
import TaskList from "./tasks/TaskList";
import LoginContext from "./Auth/loginContext";

const HomePage = () => {
  const { user } = useContext(LoginContext);
  return (
    <>
      <p>{user}</p>
      <TaskList />
    </>
  );
};

export default HomePage;
