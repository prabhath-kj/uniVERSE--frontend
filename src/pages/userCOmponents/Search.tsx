import { useLocation } from "react-router-dom";
import SearchUser from "../../components/SearchUser";
import { useEffect, useState } from "react";
import ApiCalls from "../../services/user/apiCalls";

const Search = () => {
  const [queryValue, setQueryValue] = useState<any>();
  const [users,setUsers] =useState([])
  const [message,setMessage]=useState()
  const { search } = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const query = queryParams.get("q");
    setQueryValue(query);
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (queryValue) {
        getUser();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [queryValue]);

  const getUser = async () => {
    const { users, message } = await ApiCalls.SearchUser({query:queryValue});
    console.log(users,message);
    
    if(message){
         setMessage(message)
         return;
    }
    setUsers(users)
  };
  
  if (message) {
    return (
   
         <div className="badge badge-info px-3 py-3 h-auto w-full mt-4">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
         <span>{message}</span>
         </div>
        );

  }
  

  return (
    <div>
      {users.map((user,index) => (
        <SearchUser key={index} user={user} />
      ))}
    </div>
  );
  }
export default Search;
