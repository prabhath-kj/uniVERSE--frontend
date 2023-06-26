import React from 'react'
import ReactDOM from 'react-dom/client'
import appRouter from "./services/Router"
import {RouterProvider} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>  
    <ToastContainer />
  </React.StrictMode>,
)
