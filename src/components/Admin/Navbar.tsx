import { setAdLogin,AuthState } from "../../state"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"


 const Navbar = () => {
  const Navigate=useNavigate()
  const isAuth =Boolean(useSelector((state:AuthState)=>state.adminToken))

 useEffect(()=>{
  if(!isAuth){
    Navigate('/admin/login')
  }
 },[isAuth])  

  const dispatch =useDispatch()
 
  const handleLogout=()=>{
    dispatch(setAdLogin({
        admin:null,
        token:null
      }))
      localStorage.removeItem("adminAuth")
     }
  
  return (
    <div>
        <div className="flex items-center justify-end bg-black h-14">
          <button
            className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600 mr-10 "
           onClick={handleLogout}
           >
            Logout
          </button>
        </div>
    </div>
  )
}

export default Navbar