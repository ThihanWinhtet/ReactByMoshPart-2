import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const param = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log(searchParams.get('name'), param, location);
  
  return <p>User</p>;
};

export default UserDetailPage;
