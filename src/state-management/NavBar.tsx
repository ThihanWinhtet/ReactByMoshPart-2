import { useContext } from "react";
import LoginStatus from "./Auth/LoginStatus";
import TaskConext from "./tasks/taskContext";
import useCounter from "./Reducer/Store";

const NavBar = () => {
  const { tasks } = useContext(TaskConext);
  const {count} = useCounter();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{count}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
