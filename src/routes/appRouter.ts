import { createBrowserRouter } from "react-router-dom";
import { AdminRoutes,AdminLogin } from "./adminRoutes";
import {userLogin,userRegister,userRoutes,verifyEmail} from "./userRoutes"


const appRouter = createBrowserRouter([
    userLogin,
    userRegister,
    userRoutes,
    verifyEmail,

    //admin routes
     AdminLogin,
     AdminRoutes

])


export default appRouter