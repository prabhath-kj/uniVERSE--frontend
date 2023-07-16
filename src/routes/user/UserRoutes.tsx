import App from "../../App";
import SignUp from "../../pages/user/SignUp";
import Login from "../../pages/user/Login";
import Post from "../../pages/user/Posts";
import EmailVerify from "../../pages/user/EmailVerify";
import Search from "../../pages/user/Search";
import SavedPosts from "../../pages/user/SavedPosts";
import Profile from "../../components/User/ProfileComponent/Profile";
import AuthProvider from "./AuthProvider";
import EditProfile from "../../pages/user/EditProfile";
import ErrorElement from "../../pages/ErrorElement";
import ForgotPassword  from "../../pages/user/ForgotPassword";
import Notifications from "../../pages/user/Notifications";


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
        path:"profile/:username",
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
      },
      {
        path:"notification",
        element:<Notifications/>
      },
  
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