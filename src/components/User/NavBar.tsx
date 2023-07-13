import { Bars3Icon,BellAlertIcon,MoonIcon,MagnifyingGlassCircleIcon} from '@heroicons/react/24/solid'
import  {setSideBar } from "../../state/user"
import { useDispatch } from "react-redux"
import { Link,useNavigate } from "react-router-dom"
import { useEffect, useState,useRef ,RefObject} from 'react'


 const NavBar = () => {
   const [searchQuery,setSearchQuery]=useState("")
   const [suggestions, setSuggestions] = useState([]);
   const [hideSuggestions,setHideSuggestions]=useState(false)
   const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
   const dispatch=useDispatch()
   const Navigate=useNavigate()

  
   useEffect(()=>{
    const handleClick=(event:any)=>{
        if(inputRef.current&&!inputRef.current.contains(event.target)){
         setHideSuggestions(false)
        }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick);
    };
   })
    
   useEffect(() => {
      
      const timer = setTimeout(() => {
        getSuggestion();
      }, 500);
  
      return () => {
        clearTimeout(timer);
      };
    }, [searchQuery]);
  
    const getSuggestion = async () => {
      try {

        const response = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${searchQuery}`);
        const data = await response.json();
        setSuggestions(data[1])
        setHideSuggestions(true);
      } catch (error) {
        console.error('Error fetching search suggestions:', error);
      }
    };
   
    const navigate=()=>{
      if(!searchQuery){
        return null
      }
      Navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      return;
    }
  return (
      <nav  className="w-full z-20 bg-blue-950 py-1  shadow-lg  top-0 fixed">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label className="cursor-pointer md:hidden block">
            <Bars3Icon className="h-6 w-6 bg-white" onClick={()=>{dispatch(setSideBar())}}/>
         </label>
         <input className="hidden" type="checkbox" id="menu-toggle"/>
         
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu" >
            <nav>
               <ul className="md:flex items-center justify-around text-base  pt-4 md:pt-0">
                  <li><Link to="/" className="inline-block no-underline text-white font-semibold text-2xl py-2 px-4 lg:-ml-2" >uniVERSE</Link></li>
                  <div className="pt-2 relative mx-auto text-gray-600">
        <input className="ml-32 border-2 border-gray-300 bg-white h-7 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          autoComplete='off' name="search" placeholder="Search" value={searchQuery} onChange={({target})=>{setSearchQuery(target.value)}} ref={inputRef}/>
        <button type="button"  className="absolute right-0 top-0 mt-3 mr-2" onClick={navigate}>
        <MagnifyingGlassCircleIcon className="w-6 h-6"/>
        </button>
        {hideSuggestions && suggestions.length > 0 && (
          <ul className="ml-32 absolute left-0 right-0 bg-white rounded-b-md mt-1 px-3 py-2 text-gray-700 shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="cursor-pointer py-1 hover:bg-gray-200">
                <Link to={`/search?q=${encodeURIComponent(suggestion)}`}>{suggestion}</Link>
              </li>
            ))}
          </ul>
        )}
       </div>
         </ul>
            </nav>
         </div>
         
         <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex items-center w-full md:w-full">
            
             <div className="w-6 h-6 cursor-pointe  px-1 py-1 rounded-md hover:bg-slate-200 focus:outline-none  ">
               {/* <MoonIcon className="w-4 h-4 "/> */}
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