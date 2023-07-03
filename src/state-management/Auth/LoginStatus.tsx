import { useContext } from "react";
import LoginContext from "./loginContext";
import useAuthStore from "./Store";

const LoginStatus = () => {
  // const { user, dispatch } = useContext(LoginContext);
  let {user, login, logout } = useAuthStore();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => login('mosh')}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
