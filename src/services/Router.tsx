import App from "../App";
import SignUp from "../components/userCOmponents/SignUp";
import Login from "../components/userCOmponents/Login";
// import  EmailVerify  from "../components/userCOmponents/EmailVerify";
import { createBrowserRouter } from "react-router-dom";
import EmailVerify from "../components/userCOmponents/EmailVerify";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  },{
    path:"/register",
    element:<SignUp/>,
  },
  {
    path:"register/:userId/verify/:token",
    element:<EmailVerify/>
  }
  
]);

export default appRouter