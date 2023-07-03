import Posted from "./Posted";
import { useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { PencilSquareIcon} from '@heroicons/react/24/solid'
import { AuthState } from "../state";
import ApiCalls from "../services/ApiCalls";

const Profile = () => {
    const[posts,setPosts] =useState([])
    const user =useSelector((state:AuthState)=>state.user)
    const getUserPosts=async()=>{
        const {post} =await ApiCalls.GetUserPosts(user?._id)        
        setPosts(post)
        }

   useEffect(()=>{
    getUserPosts()

   },[])
   const reversedPosts = [...posts].reverse();
  return (
    <div className="w-auto flex flex-wrap justify-center  mt-28 ">
       <div className="card w-96 mx-auto bg-white shadow-xl hover:shadow relative">
        <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={user?.profilePic} alt="user image" />
        <PencilSquareIcon className="w-6 h-6 absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 cursor-pointer" />        <div className="text-center mt-2 text-3xl font-medium">{user?.username}</div>
        <div className="text-center mt-2 font-light text-sm">{user?.email}</div>
        <div className="px-6 text-center mt-2 font-light text-sm">
          {/* <p>
            Front end Developer, avid reader. Love to take a long walk, swim
          </p> */}
        </div>
        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center">
            <span className="font-bold">{user?.followers}</span> Followers
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center">
            <span className="font-bold">{user?.following}</span> Following
          </div>
        </div>
      </div> 

     <div className="px-3 py-3 h-auto w-3/4 ">
        {reversedPosts.map((post) => (
         <Posted key={post._id} post={post} />
          ))}
        </div>    
    </div>
  );
};

export default Profile;
