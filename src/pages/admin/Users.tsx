import {useSelector,useDispatch} from "react-redux"
import { RootState } from "../../state/rooState";
import { setUsers } from "../../state/admin";
import { useEffect } from "react";
import UserTable from "../../components/Admin/UserTable";
import apiCalls from "../../services/admin/apiCalls";

const Users = () => {
const dispatch =useDispatch()
const users=useSelector((state:RootState)=>state.admin.users)

  useEffect(()=>{  
    getUsers()
  
  },[])
  
  const getUsers=async()=>{
     const {data} = await apiCalls.GetAllUsers()
      dispatch(setUsers(data))
  }

  return (
    <div >
    <UserTable users={users} />
    </div>

  )
}

export default Users