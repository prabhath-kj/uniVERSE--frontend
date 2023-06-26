import App from "../App";
import SignUp from "../components/userCOmponents/SignUp";
import Login from "../components/userCOmponents/Login";
import { createBrowserRouter } from "react-router-dom";

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
    element:<SignUp/>
  }
]);

export default appRouter