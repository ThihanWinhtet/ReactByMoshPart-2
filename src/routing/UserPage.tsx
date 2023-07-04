import { Outlet } from "react-router-dom"
import UserDetailPage from "./UserDetailPage"
import UserListPage from "./UserListPage"

const UserPage = () => {
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