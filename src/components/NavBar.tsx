// import { useAuth } from "../customHooks/useAuth"
import { Bars3Icon,BellAlertIcon,MoonIcon,MagnifyingGlassCircleIcon} from '@heroicons/react/24/solid'
import  {setSideBar } from "../state"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"


 const NavBar = () => {
   const dispatch=useDispatch()
      //  useAuth()

       
 
  return (
      <nav  className="w-full z-20  py-1 bg-sky-600 shadow-lg  top-0 fixed">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label className="cursor-pointer md:hidden block">
            <Bars3Icon className="h-6 w-6 bg-white" onClick={()=>{dispatch(setSideBar())}}/>
         </label>
         <input className="hidden" type="checkbox" id="menu-toggle"/>
         
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul className="md:flex items-center justify-around text-base  pt-4 md:pt-0">
                  <li><Link to="/" className="inline-block no-underline text-white font-semibold text-2xl py-2 px-4 lg:-ml-2" >uniVERSE</Link></li>
                  <div className="pt-2 relative mx-auto text-gray-600">
        <input className="ml-32 border-2 border-gray-300 bg-white h-7 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"/>
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
        <MagnifyingGlassCircleIcon className="w-6 h-6"/>
        </button>
      </div>
               </ul>
            </nav>
         </div>
         
         <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex items-center w-full md:w-full">
            
             <div className="w-6 h-6 cursor-pointer bg-white px-1 py-1 rounded-md hover:bg-slate-200 focus:outline-none  ">
               <MoonIcon className="w-4 h-4 "/>
              </div>
               <div className="w-6 h-6cursor-pointer bg-white px-1 py-1 rounded-md hover:bg-slate-200 focus:outline-none ml-6">
               <BellAlertIcon className="w-4 h-4 cursor-pointer "/>
              </div>            
              </div>
         </div>
      </div>
   </nav>
  )
}

export default NavBar