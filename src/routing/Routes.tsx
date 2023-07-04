import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UserPage from "./UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "/users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
