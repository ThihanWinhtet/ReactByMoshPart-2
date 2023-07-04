import { Navigate, Outlet } from "react-router-dom"
import UserDetailPage from "./UserDetailPage"
import UserListPage from "./UserListPage"
import useAuth from "./hooks/useAuth"

const UserPage = () => {
   let {user} = useAuth();
   if (!user) return <Navigate to={'/login'}/>
  return (
    <div className="row">
        <div className="col">
            <UserListPage></UserListPage>
        </div>
        <div className="col">
            <Outlet/>
        </div>
    </div>
  )
}

export default UserPage