import AdLogin from "../pages/admin/Login"
import Dashboard from "../pages/admin/Dashboard"
import App from "../pages/admin/App";
import  Users  from "../pages/admin/Users";

export const AdminRoutes = 
  {
    path: "/admin",
    element: <App/>,
    children:[
      {
        path:"/admin",
        element:<Dashboard/>
      },
      {
        path:"users",
        element:<Users/>
      }
    ]
  }
 export const AdminLogin= {
    path: "/admin/login",
    element:<AdLogin/>,
  };
