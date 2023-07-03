import { useReducer, useState } from "react";
import statusReducer from "./Reducer/statusReducer";

const LoginStatus = () => {
  let [user, setUser] = useReducer(statusReducer, '');

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => setUser({type : 'LOGOUT'})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => setUser({type : 'LOGIN', userName : 'mosh.hamedani'})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
