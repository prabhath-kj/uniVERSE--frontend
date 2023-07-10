import App from "../../App";
import SignUp from "../../pages/userComponents/SignUp";
import Login from "../../pages/userComponents/Login";
import Post from "../../pages/userComponents/Posts";
import EmailVerify from "../../pages/userComponents/EmailVerify";
import Search from "../../pages/userComponents/Search";
import SavedPosts from "../../pages/userComponents/SavedPosts";
import Profile from "../../components/Profile";
import AuthProvider from "./AuthProvider";
import EditProfile from "../../pages/userComponents/EditProfile";
import ErrorElement from "../../pages/ErrorElement";
import  ForgotPassword  from "../../pages/userComponents/ForgotPassword";


 export const userRoutes =

  {
    path: "/",
    element:
    <AuthProvider children={ <App />}/>,
    errorElement:<ErrorElement/>,
    children: [
      {
        path: "/",
        element:<Post/>,
      },
      {
        path:"profile",
        element:<Profile/>,
      },
      {
        path:"search",
        element:<Search/>

      },
      {
        path:"saved",
        element:<SavedPosts/>

      },
      {
        path:"profile/edit",
        element:<EditProfile/>
      }
    ],
  }

 export const userLogin ={
    path:"/login",
    element:<Login/>
  }
  export const userForgotPassword ={
    path:"/recover",
    element:<ForgotPassword/>
  }
 export const userRegister= {
    path:"/register",
    element:<SignUp/>,
  }
  export const  verifyEmail={
    path:"register/:userId/verify/:token",
    element:<EmailVerify/>
  }