import {useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface RooState{
    token:string
 }

export const useAuth=()=>{
    const Navigate=useNavigate()
    const isAuth =Boolean(useSelector((state:RooState)=>state.token))
  
  useEffect(()=>{
   if(!isAuth){
      Navigate("/login")
   }
  },[isAuth])
}

