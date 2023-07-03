import { useContext } from "react";
import TaskList from "./TaskList";
import LoginContext from "./Context/loginContext";

const HomePage = () => {
  const {user} = useContext(LoginContext);
  return (
    <>
      <p>{user}</p>
      <TaskList />
    </>
  );
};

export default HomePage;
