import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoute = () => {

   let {user} = useAuth();
   if (!user) return <Navigate to={'/login'}/>
  return (
    <div> <Outlet/> </div>
  )
}

export default PrivateRoute