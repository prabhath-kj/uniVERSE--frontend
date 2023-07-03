import App from "../App";
import SignUp from "../pages/userCOmponents/SignUp";
import Login from "../pages/userCOmponents/Login";
import Post from "../pages/userCOmponents/Posts";
import EmailVerify from "../pages/userCOmponents/EmailVerify";
import Profile from "../components/Profile";
import AuthProvider from "./AuthProvider";


 export const userRoutes =

 
  {
    path: "/",
    element:
    <AuthProvider children={ <App />}/>,
    children: [
      {
        path: "/",
        element:<Post/>,
      },
      {
        path:"profile",
        element:<Profile/>
      }
    ],
  }

 export const userLogin ={
    path:"/login",
    element:<Login/>
  }
  
 export const userRegister= {
    path:"/register",
    element:<SignUp/>,
  }
  export const  verifyEmail={
    path:"register/:userId/verify/:token",
    element:<EmailVerify/>
  }