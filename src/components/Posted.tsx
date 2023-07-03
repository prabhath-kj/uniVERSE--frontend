import { useSelector } from "react-redux";
import { AuthState } from "../state";
import { Likes } from "./Likes";


interface PostProps {
    post: any;
  }
  
 const Posted =({post}:PostProps) => {
  const formattedDateTime =post?.createdAt
  ? new Date(post.createdAt).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
  : 'No date available';
 const user =useSelector((state:AuthState)=>state.user)

  return (
    <div className="bg-white border-2 shadow-lg rounded-lg pb-4 mt-2">
    <div className="flex flex-row px-2 py-3">
        <div className="w-auto h-auto rounded-full border-2 border-green-500">
            <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={post?.userPicturePath}/>
        </div>
        <div className="flex flex-col mb-2 ml-4 mt-1">
            <div className="flex text-gray-600 text-sm font-medium">
                <span className="flex-1 flex-shrink-0">{post?.username}</span>
            </div>
            <div className="flex w-full mt-1">
                <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                    {/* UX Design */}
                </div>
                <div className="text-gray-400 font-thin text-xs">
                    {formattedDateTime}
                </div>
            </div>
        </div>
    </div>
    <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">{post?.description}</div>
    <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2 cursor-pointer">
       <img className="rounded w-full" src={post?.picturePath}/>
    </div>
    <div className="flex justify-start mb-4 border-t border-gray-100">
    <div className="flex w-full border-t border-gray-100">
  <div className="mt-3 mx-5 w-full flex justify-start text-xs">
    <div className="flex text-gray-700 rounded-md mb-2 mr-4 items-center"><Likes id={post?._id} userId={user?._id??"" } likes={post?.likes}/>: <div className="ml-1 text-gray-400 text-ms">{Object.keys(post?.likes).length}</div></div>
    <div className="flex text-gray-700 font-normal rounded-md mb-2 items-center">Comments: <div className="ml-1 text-gray-400 text-ms">{post?.comments.length}</div></div>
  </div> 
</div>

<div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
  <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src={user?.profilePic}/>
  <input type="search" name="comment" className=" w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent rounded-lg shadow-md" placeholder="Post a comment..."/>
  <span className="absolute inset-y-0 right-0 flex items-center pr-6">
    <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500 ">
      <svg className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </button>
  </span>
</div>
</div>
</div>
  )
}
 export default Posted